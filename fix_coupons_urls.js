const fs = require('fs');

const content = fs.readFileSync('C:/Users/Supreme_Traders/.gemini/antigravity/scratch/all_repos/my-coupon/frontend/src/lib/fallbackData.ts', 'utf8');
const domainMappings = JSON.parse(fs.readFileSync('C:/Users/Supreme_Traders/.gemini/antigravity/scratch/all_repos/my-coupon/store_domains.json', 'utf8'));
const domainMap = {};
domainMappings.forEach(d => { domainMap[d.slug] = d.domain; });

const couponsMatch = content.match(/export const FALLBACK_COUPONS: Coupon\[\] = \[([\s\S]*?)\];/);
if (couponsMatch) {
  let text = couponsMatch[1];
  let fixed = 0;

  for (const [slug, dom] of Object.entries(domainMap)) {
    const lines = text.split('\n');
    const newLines = lines.map(line => {
      if (line.includes(`store: "${slug}"`) && line.includes('affiliate_url:')) {
        fixed++;
        return line.replace(/affiliate_url:\s*"[^"]+"/, `affiliate_url: "https://${dom}/"`);
      }
      return line;
    });
    text = newLines.join('\n');
  }

  console.log('Fixed coupons count:', fixed);
  const newContent = content.replace(/export const FALLBACK_COUPONS: Coupon\[\] = \[([\s\S]*?)\];/, 'export const FALLBACK_COUPONS: Coupon[] = [' + text + '];');
  fs.writeFileSync('C:/Users/Supreme_Traders/.gemini/antigravity/scratch/all_repos/my-coupon/frontend/src/lib/fallbackData.ts', newContent, 'utf8');
}
