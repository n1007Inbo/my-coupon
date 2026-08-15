const fs = require('fs');

const content = fs.readFileSync('C:/Users/Supreme_Traders/.gemini/antigravity/scratch/all_repos/my-coupon/frontend/src/lib/fallbackData.ts', 'utf8');

const storesMatch = content.match(/export const FALLBACK_STORES: Store\[\] = \[([\s\S]*?)\];\s*(export const FALLBACK_COUPONS|\/\/)/);
if (!storesMatch) {
  console.log('No match');
  process.exit(1);
}

const lines = storesMatch[1].split('\n');
const stores = [];

for (const line of lines) {
  const idMatch = line.match(/id:\s*(\d+)/);
  const nameMatch = line.match(/name:\s*"([^"]+)"/);
  const slugMatch = line.match(/slug:\s*"([^"]+)"/);
  const webMatch = line.match(/website:\s*"([^"]+)"/);

  if (idMatch && nameMatch && slugMatch) {
    const id = parseInt(idMatch[1]);
    if (id >= 736) {
      stores.push({
        id: id,
        name: nameMatch[1],
        slug: slugMatch[1],
        website: webMatch ? webMatch[1] : ''
      });
    }
  }
}

console.log('Extracted stores:', stores.length);
fs.writeFileSync('C:/Users/Supreme_Traders/.gemini/antigravity/scratch/all_repos/my-coupon/recent_stores.json', JSON.stringify(stores, null, 2));
