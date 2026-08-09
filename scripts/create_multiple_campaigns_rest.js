const fs = require('fs');
const path = require('path');
const https = require('https');

// 1. Load credentials from .env.production or fallback to .env.local
let envPath = 'C:\\Users\\Supreme_Traders\\.gemini\\antigravity\\scratch\\.env.production';
if (!fs.existsSync(envPath)) {
  envPath = path.join(__dirname, '..', '.env.local');
}

if (!fs.existsSync(envPath)) {
  console.error('Error: Neither .env.production nor .env.local file was found.');
  process.exit(1);
}

console.log(`Loading credentials from ${envPath}...`);
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.\-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let value = match[2] || '';
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.substring(1, value.length - 1);
    }
    env[match[1]] = value.trim();
  }
});

const clientId = env.GOOGLE_ADS_CLIENT_ID;
const clientSecret = env.GOOGLE_ADS_CLIENT_SECRET;
const refreshToken = env.GOOGLE_ADS_REFRESH_TOKEN;
const developerToken = '7770ch-_wE_K_XbVBebumw';

if (!clientId || !clientSecret || !refreshToken) {
  console.error('Error: Missing Google Ads credentials (CLIENT_ID, CLIENT_SECRET, or REFRESH_TOKEN) in configuration file.');
  process.exit(1);
}

function postRequest(url, headers, body) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      method: 'POST',
      hostname: urlObj.hostname,
      path: urlObj.pathname,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      rejectUnauthorized: false
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: data });
        }
      });
    });

    req.on('error', reject);
    if (body) {
      req.write(typeof body === 'string' ? body : JSON.stringify(body));
    }
    req.end();
  });
}

function parseMultiCSV(csvPath) {
  const fileContent = fs.readFileSync(csvPath, 'utf8');
  const lines = fileContent.split('\n').map(l => l.trim()).filter(Boolean);
  
  const headers = lines[0].split(',').map(h => h.trim());
  const campaigns = {};
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const values = [];
    let insideQuote = false;
    let currentValue = '';
    
    for (let charIdx = 0; charIdx < line.length; charIdx++) {
      const char = line[charIdx];
      if (char === '"') {
        insideQuote = !insideQuote;
      } else if (char === ',' && !insideQuote) {
        values.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue.trim());
    
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    
    const campaignName = row["Campaign"];
    if (!campaignName) continue;
    
    if (!campaigns[campaignName]) {
      campaigns[campaignName] = {
        campaignData: null,
        adGroups: {},
        keywords: [],
        ads: []
      };
    }
    
    const camp = campaigns[campaignName];
    const adGroupName = row["Ad group"];
    const keywordText = row["Keyword"];
    const adType = row["Ad type"];
    
    if (row["Budget"] && !adGroupName) {
      camp.campaignData = {
        name: campaignName,
        budget: parseFloat(row["Budget"]),
        status: row["Campaign status"] || 'Paused',
        bidType: row["Bid strategy type"] || 'Manual CPC',
        location: row["Location"] || 'United States',
        language: row["Language"] || 'en'
      };
    } else if (adGroupName && row["Max CPC"] && !keywordText && !adType) {
      camp.adGroups[adGroupName] = {
        name: adGroupName,
        cpcBid: parseFloat(row["Max CPC"]),
        status: row["Ad group status"] || 'Paused'
      };
    } else if (adGroupName && keywordText) {
      camp.keywords.push({
        adGroup: adGroupName,
        text: keywordText.replace('[', '').replace(']', '').trim(),
        matchType: row["Match Type"] || 'Exact'
      });
    } else if (adGroupName && adType === "Responsive search ad") {
      const headlines = [];
      for (let idx = 1; idx <= 15; idx++) {
        const hl = row[`Headline ${idx}`];
        if (hl) headlines.push(hl);
      }
      
      const descriptions = [];
      for (let idx = 1; idx <= 4; idx++) {
        const desc = row[`Description ${idx}`];
        if (desc) descriptions.push(desc);
      }
      
      camp.ads.push({
        adGroup: adGroupName,
        headlines,
        descriptions,
        path1: row["Path 1"],
        path2: row["Path 2"],
        finalUrl: row["Final URL"]
      });
    }
  }
  
  return campaigns;
}

async function createGoogleAdsCampaign(accessToken, customerId, campNameKey, data) {
  const { campaignData, adGroups, keywords, ads } = data;
  if (!campaignData) {
    console.warn(`[WARNING] Skipping campaign '${campNameKey}' because no budget row was configured.`);
    return;
  }

  const apiVersion = 'v25';
  const reqHeaders = {
    'Authorization': `Bearer ${accessToken}`,
    'developer-token': developerToken
  };
  
  const suffix = ` ${Math.floor(Date.now() / 1000) % 10000}`;
  const campaignName = `${campaignData.name}${suffix}`;
  
  console.log(`\n======================================================`);
  console.log(`🚀 IMPORTING: ${campaignName}`);
  console.log(`======================================================`);

  // 1. Create Campaign Budget
  console.log(`Creating Budget of ${campaignData.budget} PKR...`);
  const budgetUrl = `https://googleads.googleapis.com/${apiVersion}/customers/${customerId}/campaignBudgets:mutate`;
  const budgetBody = {
    operations: [{
      create: {
        name: `${campaignName} Budget`,
        amountMicros: Math.round(campaignData.budget * 1000000),
        deliveryMethod: 'STANDARD'
      }
    }]
  };
  
  const budgetRes = await postRequest(budgetUrl, reqHeaders, budgetBody);
  if (budgetRes.status !== 200) {
    throw new Error(`Budget Creation Failed: ${JSON.stringify(budgetRes.body)}`);
  }
  const budgetResourceName = budgetRes.body.results[0].resourceName;
  console.log(`✓ Budget Created: ${budgetResourceName}`);
  
  // 2. Create Campaign (PAUSED)
  console.log(`Creating Campaign (PAUSED)...`);
  const campaignUrl = `https://googleads.googleapis.com/${apiVersion}/customers/${customerId}/campaigns:mutate`;
  const campaignBody = {
    operations: [{
      create: {
        name: campaignName,
        advertisingChannelType: 'SEARCH',
        status: 'PAUSED',
        campaignBudget: budgetResourceName,
        manualCpc: {
          enhancedCpcEnabled: false
        },
        containsEuPoliticalAdvertising: 'DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING'
      }
    }]
  };
  
  const campaignRes = await postRequest(campaignUrl, reqHeaders, campaignBody);
  if (campaignRes.status !== 200) {
    throw new Error(`Campaign Creation Failed: ${JSON.stringify(campaignRes.body)}`);
  }
  const campaignResourceName = campaignRes.body.results[0].resourceName;
  console.log(`✓ Campaign Created: ${campaignResourceName}`);
  
  // 3. Add Location & Language Targets
  console.log('Adding Location & Language criteria...');
  const criteriaUrl = `https://googleads.googleapis.com/${apiVersion}/customers/${customerId}/campaignCriteria:mutate`;
  
  const locId = (campaignData.location.toLowerCase().includes('uk') || campaignData.location.toLowerCase().includes('united kingdom')) 
    ? 'geoTargetConstants/2826' // UK
    : 'geoTargetConstants/2840'; // US
    
  const langId = 'languageConstants/1000'; // English
  
  const criteriaBody = {
    operations: [
      {
        create: {
          campaign: campaignResourceName,
          location: {
            geoTargetConstant: locId
          }
        }
      },
      {
        create: {
          campaign: campaignResourceName,
          language: {
            languageConstant: langId
          }
        }
      }
    ]
  };
  
  const critRes = await postRequest(criteriaUrl, reqHeaders, criteriaBody);
  if (critRes.status !== 200) {
    console.error('Warning targeting criteria error:', critRes.body);
  } else {
    console.log('✓ Target sets applied (UK/US + English).');
  }
  
  // 4. Create Ad Groups
  const adGroupResourceNames = {};
  for (const agName of Object.keys(adGroups)) {
    const agInfo = adGroups[agName];
    console.log(`Creating Ad Group: ${agName} (Max CPC: ${agInfo.cpcBid} PKR)...`);
    const adGroupUrl = `https://googleads.googleapis.com/${apiVersion}/customers/${customerId}/adGroups:mutate`;
    const adGroupBody = {
      operations: [{
        create: {
          name: agName,
          campaign: campaignResourceName,
          status: 'PAUSED',
          cpcBidMicros: Math.round(agInfo.cpcBid * 1000000),
          type: 'SEARCH_STANDARD'
        }
      }]
    };
    
    const agRes = await postRequest(adGroupUrl, reqHeaders, adGroupBody);
    if (agRes.status !== 200) {
      throw new Error(`Ad Group Creation Failed for ${agName}: ${JSON.stringify(agRes.body)}`);
    }
    
    const agResourceName = agRes.body.results[0].resourceName;
    adGroupResourceNames[agName] = agResourceName;
    console.log(`✓ Ad Group Created: ${agResourceName}`);
  }
  
  // 5. Add Keywords
  if (keywords.length > 0) {
    console.log(`Adding ${keywords.length} keywords to Ad Groups...`);
    const kwUrl = `https://googleads.googleapis.com/${apiVersion}/customers/${customerId}/adGroupCriteria:mutate`;
    const kwOperations = keywords.map(kw => {
      const agResName = adGroupResourceNames[kw.adGroup];
      return {
        create: {
          adGroup: agResName,
          status: 'ENABLED',
          keyword: {
            text: kw.text,
            matchType: kw.matchType.toUpperCase() === 'EXACT' ? 'EXACT' : 'BROAD'
          }
        }
      };
    });
    
    const kwRes = await postRequest(kwUrl, reqHeaders, { operations: kwOperations });
    if (kwRes.status !== 200) {
      console.error('Warning keyword upload error:', kwRes.body);
    } else {
      console.log(`✓ Successfully uploaded ${keywords.length} keywords.`);
    }
  }
  
  // 6. Create Ads
  if (ads.length > 0) {
    console.log(`Creating ${ads.length} Responsive Search Ads...`);
    const adUrl = `https://googleads.googleapis.com/${apiVersion}/customers/${customerId}/adGroupAds:mutate`;
    const adOperations = ads.map(adInfo => {
      const agResName = adGroupResourceNames[adInfo.adGroup];
      return {
        create: {
          adGroup: agResName,
          status: 'PAUSED',
          ad: {
            finalUrls: [adInfo.finalUrl],
            responsiveSearchAd: {
              headlines: adInfo.headlines.map(hl => ({ text: hl })),
              descriptions: adInfo.descriptions.map(desc => ({ text: desc })),
              path1: adInfo.path1,
              path2: adInfo.path2
            }
          }
        }
      };
    });
    
    const adRes = await postRequest(adUrl, reqHeaders, { operations: adOperations });
    if (adRes.status !== 200) {
      console.error('Warning ads upload error:', JSON.stringify(adRes.body));
    } else {
      console.log(`✓ Created ${ads.length} Responsive Search Ads.`);
    }
  }

  console.log(`🎉 Campaign ${campaignName} fully imported in PAUSED status.`);
}

async function main() {
  const args = process.argv.slice(2);
  const csvPath = args[0] || 'giveaway_campaigns_ready.csv';
  const customerId = args[1] ? args[1].replace(/-/g, '') : '5414771401';
  
  if (!fs.existsSync(csvPath)) {
    console.error(`Error: CSV file not found at ${csvPath}`);
    process.exit(1);
  }
  
  try {
    const campaigns = parseMultiCSV(csvPath);
    const campaignKeys = Object.keys(campaigns);
    console.log(`Parsed ${campaignKeys.length} campaigns from ${csvPath}: ${campaignKeys.join(', ')}`);
    
    console.log('Retrieving Google Ads Access Token...');
    const tokenUrl = 'https://oauth2.googleapis.com/token';
    const tokenHeaders = { 'Content-Type': 'application/x-www-form-urlencoded' };
    const tokenBody = `client_id=${encodeURIComponent(clientId)}&client_secret=${encodeURIComponent(clientSecret)}&refresh_token=${encodeURIComponent(refreshToken)}&grant_type=refresh_token`;
    
    const tokenResponse = await new Promise((resolve, reject) => {
      const options = {
        method: 'POST',
        headers: tokenHeaders,
        rejectUnauthorized: false
      };
      const req = https.request(tokenUrl, options, res => {
        let data = '';
        res.on('data', chunk => { data += chunk; });
        res.on('end', () => resolve(JSON.parse(data)));
      });
      req.on('error', reject);
      req.write(tokenBody);
      req.end();
    });
    
    if (!tokenResponse.access_token) {
      console.error('Failed to authenticate Google Ads API token:', tokenResponse);
      process.exit(1);
    }
    
    const accessToken = tokenResponse.access_token;
    
    for (const campName of campaignKeys) {
      try {
        await createGoogleAdsCampaign(accessToken, customerId, campName, campaigns[campName]);
        await new Promise(r => setTimeout(r, 1000)); // Delay to prevent API request limits
      } catch (err) {
        console.error(`Error uploading campaign '${campName}':`, err.message);
      }
    }
    
    console.log('\n🌟 ALL CAMPAIGNS IMPORT JOB COMPLETE! All campaigns are active in Google Ads account under PAUSED status.');
  } catch (e) {
    console.error('Fatal execution error:', e.message);
  }
}

main();
