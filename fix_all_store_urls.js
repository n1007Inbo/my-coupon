const fs = require('fs');

// 1. Read mapped true domains from store_domains.json
const domainMappings = JSON.parse(fs.readFileSync('C:/Users/Supreme_Traders/.gemini/antigravity/scratch/all_repos/my-coupon/store_domains.json', 'utf8'));
const domainMap = {};
domainMappings.forEach(d => {
  domainMap[d.slug] = d.domain;
});

// 2. Read fallbackData.ts
let content = fs.readFileSync('C:/Users/Supreme_Traders/.gemini/antigravity/scratch/all_repos/my-coupon/frontend/src/lib/fallbackData.ts', 'utf8');

// Fix each store's website and logo in fallbackData.ts
let fixedStoresCount = 0;
let fixedCouponsCount = 0;

// Replace mismatched store website fields with true official websites
content = content.replace(/\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)",\s*slug:\s*"([^"]+)",\s*logo:\s*(getLogoUrl\("([^"]+)"\)|"[^"]+"),\s*website:\s*"([^"]+)"\s*\}/g, (match, idStr, name, slug, logoRaw, logoSlug, web) => {
  const id = parseInt(idStr);
  const trueDomain = domainMap[slug];
  
  if (trueDomain && id >= 736) {
    // If the existing website points to a known wrong domain
    const cleanTrueWeb = `https://${trueDomain}/`;
    
    // Check if the current website has a mismatched target
    if (web.includes('url=') || !web.includes(trueDomain.split('.')[0])) {
      fixedStoresCount++;
      return `{ id: ${id}, name: "${name}", slug: "${slug}", logo: getLogoUrl("${slug}"), website: "${cleanTrueWeb}" }`;
    }
  }
  return match;
});

// Also fix any coupon affiliate_url that points to a mismatched domain for these stores
content = content.replace(/store:\s*"([^"]+)",\s*affiliate_url:\s*"([^"]+)"/g, (match, storeSlug, affUrl) => {
  const trueDomain = domainMap[storeSlug];
  if (trueDomain) {
    if (affUrl.includes('url=') || !affUrl.includes(trueDomain.split('.')[0])) {
      fixedCouponsCount++;
      return `store: "${storeSlug}", affiliate_url: "https://${trueDomain}/"`;
    }
  }
  return match;
});

fs.writeFileSync('C:/Users/Supreme_Traders/.gemini/antigravity/scratch/all_repos/my-coupon/frontend/src/lib/fallbackData.ts', content, 'utf8');

console.log(`Successfully fixed ${fixedStoresCount} store website URLs and ${fixedCouponsCount} coupon affiliate URLs!`);
