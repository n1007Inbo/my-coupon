import os
import csv
import sys
import time
from google.ads.googleads.client import GoogleAdsClient

def load_env_local():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    env_path = os.path.join(root_dir, ".env.local")
    if os.path.exists(env_path):
        print(f"Loading environment variables from {env_path}...")
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, value = line.split("=", 1)
                    value = value.strip('"').strip("'")
                    os.environ[key.strip()] = value

def parse_multi_campaign_csv(csv_path):
    print(f"Parsing CSV file from {csv_path}...")
    campaigns = {}
    
    with open(csv_path, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            campaign_name = row.get("Campaign")
            if not campaign_name:
                continue
                
            if campaign_name not in campaigns:
                campaigns[campaign_name] = {
                    "campaign_data": {},
                    "ad_groups": {},
                    "keywords": [],
                    "ads": []
                }
                
            camp = campaigns[campaign_name]
            ad_group_name = row.get("Ad group")
            keyword_text = row.get("Keyword")
            ad_type = row.get("Ad type")
            
            # 1. Campaign Row
            if row.get("Budget") and not ad_group_name:
                camp["campaign_data"] = {
                    "name": campaign_name,
                    "budget": float(row.get("Budget")),
                    "status": row.get("Campaign status", "Paused").upper(),
                    "bid_type": row.get("Bid strategy type", "Manual CPC")
                }
            
            # 2. Ad Group Row
            elif ad_group_name and row.get("Max CPC") and not keyword_text and not ad_type:
                camp["ad_groups"][ad_group_name] = {
                    "name": ad_group_name,
                    "cpc_bid": float(row.get("Max CPC")),
                    "status": row.get("Ad group status", "Paused").upper()
                }
                
            # 3. Keyword Row
            elif ad_group_name and keyword_text:
                camp["keywords"].append({
                    "ad_group": ad_group_name,
                    "text": keyword_text.replace('[', '').replace(']', '').strip(),
                    "match_type": row.get("Match Type", "Exact").upper()
                })
                
            # 4. Ad Row
            elif ad_group_name and ad_type == "Responsive search ad":
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
                        
                camp["ads"].append({
                    "ad_group": ad_group_name,
                    "headlines": headlines,
                    "descriptions": descriptions,
                    "path1": row.get("Path 1"),
                    "path2": row.get("Path 2"),
                    "final_url": row.get("Final URL")
                })
                
    return campaigns

def create_campaign(client, customer_id, campaign_name_key, data):
    campaign_data = data["campaign_data"]
    ad_groups = data["ad_groups"]
    keywords = data["keywords"]
    ads = data["ads"]
    
    if not campaign_data:
        print(f"Skipping campaign {campaign_name_key} - no budget configuration row found.")
        return
        
    campaign_budget_service = client.get_service("CampaignBudgetService")
    campaign_service = client.get_service("CampaignService")
    campaign_criterion_service = client.get_service("CampaignCriterionService")
    ad_group_service = client.get_service("AdGroupService")
    ad_group_criterion_service = client.get_service("AdGroupCriterionService")
    ad_group_ad_service = client.get_service("AdGroupAdService")
    
    # Suffix to prevent duplicate names
    suffix = f" {int(time.time() % 10000)}"
    campaign_name = campaign_data["name"] + suffix
    
    print(f"\n[IMPORTING] Campaign: {campaign_name}")
    
    # 1. Budget
    budget_op = client.get_type("CampaignBudgetOperation")
    budget = budget_op.create
    budget.name = f"{campaign_name} Budget"
    budget.amount_micros = int(campaign_data["budget"] * 1000000)
    budget.delivery_method = client.enums.BudgetDeliveryMethodEnum.STANDARD
    
    budget_res = campaign_budget_service.mutate_campaign_budgets(
        customer_id=customer_id, operations=[budget_op]
    )
    budget_resource_name = budget_res.results[0].resource_name
    print(f"-> Budget created: {budget_resource_name}")
    
    # 2. Campaign (Paused)
    campaign_op = client.get_type("CampaignOperation")
    campaign = campaign_op.create
    campaign.name = campaign_name
    campaign.advertising_channel_type = client.enums.AdvertisingChannelTypeEnum.SEARCH
    campaign.status = client.enums.CampaignStatusEnum.PAUSED
    campaign.campaign_budget = budget_resource_name
    campaign.manual_cpc.enhanced_cpc_enabled = False
    
    camp_res = campaign_service.mutate_campaigns(
        customer_id=customer_id, operations=[campaign_op]
    )
    campaign_resource_name = camp_res.results[0].resource_name
    print(f"-> Campaign created: {campaign_resource_name}")
    
    # 3. Location (UK) & Language (English) targeting
    crit_ops = []
    loc_op = client.get_type("CampaignCriterionOperation")
    loc_crit = loc_op.create
    loc_crit.campaign = campaign_resource_name
    loc_crit.location.geo_target_constant = "geoTargetConstants/2826" # United Kingdom
    crit_ops.append(loc_op)
    
    lang_op = client.get_type("CampaignCriterionOperation")
    lang_crit = lang_op.create
    lang_crit.campaign = campaign_resource_name
    lang_crit.language.language_constant = "languageConstants/1000" # English
    crit_ops.append(lang_op)
    
    campaign_criterion_service.mutate_campaign_criteria(
        customer_id=customer_id, operations=crit_ops
    )
    print("-> Location (UK) and Language (EN) targeting applied.")
    
    # 4. Ad Groups
    ad_group_resource_names = {}
    for ag_name, ag_info in ad_groups.items():
        ag_op = client.get_type("AdGroupOperation")
        ad_group = ag_op.create
        ad_group.name = ag_name
        ad_group.campaign = campaign_resource_name
        ad_group.status = client.enums.AdGroupStatusEnum.PAUSED
        ad_group.cpc_bid_micros = int(ag_info["cpc_bid"] * 1000000)
        ad_group.type = client.enums.AdGroupTypeEnum.SEARCH_STANDARD
        
        ag_res = ad_group_service.mutate_ad_groups(
            customer_id=customer_id, operations=[ag_op]
        )
        ag_res_name = ag_res.results[0].resource_name
        ad_group_resource_names[ag_name] = ag_res_name
        print(f"-> Ad Group '{ag_name}' created: {ag_res_name}")
        
    # 5. Keywords
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
        
        if kw["match_type"] == "EXACT":
            kw_crit.keyword.match_type = client.enums.KeywordMatchTypeEnum.EXACT
        else:
            kw_crit.keyword.match_type = client.enums.KeywordMatchTypeEnum.BROAD
            
        kw_ops.append(kw_op)
        
    if kw_ops:
        ad_group_criterion_service.mutate_ad_group_criteria(
            customer_id=customer_id, operations=kw_ops
        )
        print(f"-> Added {len(kw_ops)} keywords successfully.")
        
    # 6. Responsive Search Ads
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
        print(f"-> Created {len(ad_ops)} Responsive Search Ads successfully.")
        
    print(f"🎉 Campaign {campaign_name} fully imported in PAUSED status.")

def main():
    load_env_local()
    
    csv_path = "giveaway_campaigns_ready.csv"
    if len(sys.argv) > 1:
        csv_path = sys.argv[1]
        
    if not os.path.exists(csv_path):
        print(f"Error: CSV file {csv_path} not found.")
        sys.exit(1)
        
    campaigns = parse_multi_campaign_csv(csv_path)
    print(f"Found {len(campaigns)} campaign setups inside the CSV file.")
    
    # API credentials setup
    developer_token = "7770ch-_wE_K_XbVBebumw"
    client_id = os.environ.get("GOOGLE_ADS_CLIENT_ID")
    client_secret = os.environ.get("GOOGLE_ADS_CLIENT_SECRET")
    refresh_token = os.environ.get("GOOGLE_ADS_REFRESH_TOKEN")
    customer_id = "5414771401"
    
    if not all([client_id, client_secret, refresh_token]):
        print("Error: Missing Google Ads environment variables in .env.local.")
        sys.exit(1)
        
    config = {
        "developer_token": developer_token,
        "client_id": client_id,
        "client_secret": client_secret,
        "refresh_token": refresh_token,
        "use_proto_plus": True
    }
    
    client = GoogleAdsClient.load_from_dict(config)
    
    for camp_name, data in campaigns.items():
        try:
            create_campaign(client, customer_id, camp_name, data)
            time.sleep(1) # Small gap between api requests
        except Exception as e:
            print(f"ERROR importing campaign '{camp_name}': {e}")

if __name__ == "__main__":
    main()
