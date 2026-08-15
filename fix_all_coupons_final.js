const fs = require('fs');

let content = fs.readFileSync('C:/Users/Supreme_Traders/.gemini/antigravity/scratch/all_repos/my-coupon/frontend/src/lib/fallbackData.ts', 'utf8');

// Parse FALLBACK_STORES to know the website of each index
const storesMatch = content.match(/export const FALLBACK_STORES: Store\[\] = \[([\s\S]*?)\];\s*export const FALLBACK_COUPONS/);
if (!storesMatch) {
  console.log('Error parsing FALLBACK_STORES');
  process.exit(1);
}

const storeLines = storesMatch[1].split('\n').filter(l => l.trim().startsWith('{'));
const storeWebsites = {};

storeLines.forEach((line, idx) => {
  const webMatch = line.match(/website:\s*"([^"]+)"/);
  const slugMatch = line.match(/slug:\s*"([^"]+)"/);
  if (webMatch && slugMatch) {
    storeWebsites[idx] = webMatch[1];
  }
});

console.log('Parsed store websites count:', Object.keys(storeWebsites).length);

// Replace coupon affiliate_urls that use FALLBACK_STORES[idx]
let fixedCount = 0;
content = content.replace(/store:\s*FALLBACK_STORES\[(\d+)\],\s*affiliate_url:\s*"([^"]+)"/g, (match, idxStr, oldUrl) => {
  const idx = parseInt(idxStr);
  const correctWeb = storeWebsites[idx];
  if (correctWeb) {
    fixedCount++;
    return `store: FALLBACK_STORES[${idx}], affiliate_url: "${correctWeb}"`;
  }
  return match;
});

console.log('Successfully updated coupons count:', fixedCount);
fs.writeFileSync('C:/Users/Supreme_Traders/.gemini/antigravity/scratch/all_repos/my-coupon/frontend/src/lib/fallbackData.ts', content, 'utf8');
