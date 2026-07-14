import os
import csv
import sys
from google.ads.googleads.client import GoogleAdsClient

def read_campaign_csv(csv_path):
    print(f"Reading campaign CSV from {csv_path}...")
    campaign_data = {}
    ad_groups = {}
    keywords = []
    ads = []
    
    with open(csv_path, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            campaign_name = row.get("Campaign")
            ad_group_name = row.get("Ad group")
            keyword_text = row.get("Keyword")
            ad_type = row.get("Ad type")
            
            # 1. Parse Campaign Row
            if row.get("Budget") and not ad_group_name:
                campaign_data = {
                    "name": campaign_name,
                    "budget": float(row.get("Budget")),
                    "status": row.get("Campaign status", "Paused").upper(),
                    "bid_type": row.get("Bid strategy type", "Manual CPC")
                }
            
            # 2. Parse Ad Group Row
            elif ad_group_name and row.get("Max CPC") and not keyword_text and not ad_type:
                ad_groups[ad_group_name] = {
                    "name": ad_group_name,
                    "cpc_bid": float(row.get("Max CPC")),
                    "status": row.get("Ad group status", "Paused").upper()
                }
                
            # 3. Parse Keyword Row
            elif ad_group_name and keyword_text:
                keywords.append({
                    "ad_group": ad_group_name,
                    "text": keyword_text.replace('[', '').replace(']', '').strip(),
                    "match_type": row.get("Match Type", "Exact").upper()
                })
                
            # 4. Parse Ad Row
            elif ad_group_name and ad_type == "Responsive search ad":
                # Collect headlines (1-15) and descriptions (1-4)
                headlines = []
                for idx in range(1, 16):
                    hl = row.get(f"Headline {idx}")
                    if hl:
                        headlines.append(hl)
                
                descriptions = []
                for idx in range(1, 5):
                    desc = row.get(f"Description {idx}")
                    if desc:
                        descriptions.append(desc)
                        
                ads.append({
                    "ad_group": ad_group_name,
                    "headlines": headlines,
                    "descriptions": descriptions,
                    "path1": row.get("Path 1"),
                    "path2": row.get("Path 2"),
                    "final_url": row.get("Final URL")
                })
                
    return campaign_data, ad_groups, keywords, ads

def create_google_ads_campaign(client, customer_id, campaign_data, ad_groups, keywords, ads):
    # Retrieve services
    campaign_budget_service = client.get_service("CampaignBudgetService")
    campaign_service = client.get_service("CampaignService")
    campaign_criterion_service = client.get_service("CampaignCriterionService")
    ad_group_service = client.get_service("AdGroupService")
    ad_group_criterion_service = client.get_service("AdGroupCriterionService")
    ad_group_ad_service = client.get_service("AdGroupAdService")
    
    # Generate unique suffix to avoid name conflict during test runs
    import time
    suffix = f" {int(time.time() % 10000)}"
    campaign_name = campaign_data["name"] + suffix
    print(f"\nCreating Campaign Budget of {campaign_data['budget']} PKR...")
    
    # 1. Budget creation
    budget_op = client.get_type("CampaignBudgetOperation")
    budget = budget_op.create
    budget.name = f"{campaign_name} Budget"
    # Daily budget amount in micros (1 million micros = 1 base currency unit)
    budget.amount_micros = int(campaign_data["budget"] * 1000000)
    budget.delivery_method = client.enums.BudgetDeliveryMethodEnum.STANDARD
    
    budget_res = campaign_budget_service.mutate_campaign_budgets(
        customer_id=customer_id, operations=[budget_op]
    )
    budget_resource_name = budget_res.results[0].resource_name
    print(f"SUCCESS: Campaign Budget created: {budget_resource_name}")
    
    # 2. Campaign creation
    print(f"\nCreating Campaign '{campaign_name}' (Status: PAUSED)...")
    campaign_op = client.get_type("CampaignOperation")
    campaign = campaign_op.create
    campaign.name = campaign_name
    campaign.advertising_channel_type = client.enums.AdvertisingChannelTypeEnum.SEARCH
    campaign.status = client.enums.CampaignStatusEnum.PAUSED # Always create paused!
    campaign.campaign_budget = budget_resource_name
    campaign.manual_cpc.enhanced_cpc_enabled = False
    
    camp_res = campaign_service.mutate_campaigns(
        customer_id=customer_id, operations=[campaign_op]
    )
    campaign_resource_name = camp_res.results[0].resource_name
    print(f"SUCCESS: Campaign created: {campaign_resource_name}")
    
    # 3. Campaign Targeting Criteria (UK Location and English Language)
    print("\nAdding Location target (United Kingdom) and Language target (English)...")
    crit_ops = []
    
    # Location UK Constant geoTargetConstants/2826
    loc_op = client.get_type("CampaignCriterionOperation")
    loc_crit = loc_op.create
    loc_crit.campaign = campaign_resource_name
    loc_crit.location.geo_target_constant = "geoTargetConstants/2826"
    crit_ops.append(loc_op)
    
    # Language English Constant languageConstants/1000
    lang_op = client.get_type("CampaignCriterionOperation")
    lang_crit = lang_op.create
    lang_crit.campaign = campaign_resource_name
    lang_crit.language.language_constant = "languageConstants/1000"
    crit_ops.append(lang_op)
    
    campaign_criterion_service.mutate_campaign_criteria(
        customer_id=customer_id, operations=crit_ops
    )
    print("SUCCESS: Targeting criteria added successfully.")
    
    # 4. Ad Groups creation
    ad_group_resource_names = {}
    for ag_name, ag_info in ad_groups.items():
        unique_ag_name = ag_name # No name conflicts within unique campaign
        print(f"\nCreating Ad Group '{unique_ag_name}' (CPC Bid: {ag_info['cpc_bid']} PKR)...")
        
        ag_op = client.get_type("AdGroupOperation")
        ad_group = ag_op.create
        ad_group.name = unique_ag_name
        ad_group.campaign = campaign_resource_name
        ad_group.status = client.enums.AdGroupStatusEnum.PAUSED
        ad_group.cpc_bid_micros = int(ag_info["cpc_bid"] * 1000000)
        ad_group.type = client.enums.AdGroupTypeEnum.SEARCH_STANDARD
        
        ag_res = ad_group_service.mutate_ad_groups(
            customer_id=customer_id, operations=[ag_op]
        )
        ag_res_name = ag_res.results[0].resource_name
        ad_group_resource_names[ag_name] = ag_res_name
        print(f"SUCCESS: Ad Group created: {ag_res_name}")
        
    # 5. Keywords creation
    print(f"\nAdding {len(keywords)} Keywords to Ad Groups...")
    kw_ops = []
    for kw in keywords:
        ag_res_name = ad_group_resource_names.get(kw["ad_group"])
        if not ag_res_name:
            continue
            
        kw_op = client.get_type("AdGroupCriterionOperation")
        kw_crit = kw_op.create
        kw_crit.ad_group = ag_res_name
        kw_crit.status = client.enums.AdGroupCriterionStatusEnum.ENABLED
        kw_crit.keyword.text = kw["text"]
        
        # Exact match type mapping
        if kw["match_type"] == "EXACT":
            kw_crit.keyword.match_type = client.enums.KeywordMatchTypeEnum.EXACT
        else:
            kw_crit.keyword.match_type = client.enums.KeywordMatchTypeEnum.BROAD
            
        kw_ops.append(kw_op)
        
    if kw_ops:
        ad_group_criterion_service.mutate_ad_group_criteria(
            customer_id=customer_id, operations=kw_ops
        )
        print(f"SUCCESS: Added {len(kw_ops)} keywords to Ad Groups successfully.")
        
    # 6. Responsive Search Ads creation
    print(f"\nCreating {len(ads)} Responsive Search Ads...")
    ad_ops = []
    for ad_info in ads:
        ag_res_name = ad_group_resource_names.get(ad_info["ad_group"])
        if not ag_res_name:
            continue
            
        ad_op = client.get_type("AdGroupAdOperation")
        ad_group_ad = ad_op.create
        ad_group_ad.ad_group = ag_res_name
        ad_group_ad.status = client.enums.AdGroupAdStatusEnum.PAUSED
        
        ad = ad_group_ad.ad
        ad.final_urls.append(ad_info["final_url"])
        ad.responsive_search_ad.path1 = ad_info["path1"]
        ad.responsive_search_ad.path2 = ad_info["path2"]
        
        for hl_text in ad_info["headlines"]:
            asset = client.get_type("AdTextAsset")
            asset.text = hl_text
            ad.responsive_search_ad.headlines.append(asset)
            
        for desc_text in ad_info["descriptions"]:
            asset = client.get_type("AdTextAsset")
            asset.text = desc_text
            ad.responsive_search_ad.descriptions.append(asset)
            
        ad_ops.append(ad_op)
        
    if ad_ops:
        ad_group_ad_service.mutate_ad_group_ads(
            customer_id=customer_id, operations=ad_ops
        )
        print(f"SUCCESS: Created {len(ad_ops)} Responsive Search Ads successfully.")
        
    print("\n" + "="*60)
    print(f"🎉 GOOGLE ADS CAMPAIGN IMPORT FULLY COMPLETE!")
    print(f"Imported Campaign Name: {campaign_name}")
    print(f"Status: PAUSED (as requested)")
    print("="*60)

def main():
    csv_path = "desktronic_uk_ready_campaign.csv"
    if not os.path.exists(csv_path):
        print(f"Error: CSV file {csv_path} not found.")
        sys.exit(1)
        
    campaign_data, ad_groups, keywords, ads = read_campaign_csv(csv_path)
    
    # Google Ads API setup
    developer_token = "7770ch-_wE_K_XbVBebumw"
    client_id = os.environ.get("GOOGLE_ADS_CLIENT_ID")
    client_secret = os.environ.get("GOOGLE_ADS_CLIENT_SECRET")
    refresh_token = os.environ.get("GOOGLE_ADS_REFRESH_TOKEN")
    customer_id = "5414771401" # Target ads account
    
    if not all([client_id, client_secret, refresh_token]):
        print("Error: Missing Google Ads environment variables.")
        sys.exit(1)
        
    config = {
        "developer_token": developer_token,
        "client_id": client_id,
        "client_secret": client_secret,
        "refresh_token": refresh_token,
        "use_proto_plus": True
    }
    
    client = GoogleAdsClient.load_from_dict(config)
    create_google_ads_campaign(client, customer_id, campaign_data, ad_groups, keywords, ads)

if __name__ == "__main__":
    main()
