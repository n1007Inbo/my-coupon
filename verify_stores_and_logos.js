const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'frontend', 'src', 'lib', 'fallbackData.ts'), 'utf8');

// Match stores in FALLBACK_STORES
const storeBlockMatch = content.match(/export const FALLBACK_STORES[\s\S]*?=\s*(\[[\s\S]*?\n\];)/);
let stores = [];

if (storeBlockMatch) {
  const block = storeBlockMatch[1];
  const itemRegex = /{\s*id:\s*(\d+),\s*name:\s*"([^"]+)",\s*slug:\s*"([^"]+)"/g;
  let match;
  while ((match = itemRegex.exec(block)) !== null) {
    stores.push({
      id: parseInt(match[1]),
      name: match[2],
      slug: match[3],
      logo_file: `${match[3]}.png`
    });
  }
}

console.log(`Found ${stores.length} total stores.`);

// Check existing logo files in frontend/public/logos
const logosDir = path.join(__dirname, 'frontend', 'public', 'logos');
const existingLogos = new Set(fs.existsSync(logosDir) ? fs.readdirSync(logosDir) : []);

const storeStatus = stores.map(s => {
  const hasLogo = existingLogos.has(s.logo_file);
  return {
    ...s,
    has_logo: hasLogo,
    store_url: `https://my-coupon-hazique-s-projects.vercel.app/store/${s.slug}`
  };
});

fs.writeFileSync('all_stores_status.json', JSON.stringify(storeStatus, null, 2));

const missing = storeStatus.filter(s => !s.has_logo);
console.log(`Stores with verified logos: ${storeStatus.length - missing.length}/${storeStatus.length}`);
if (missing.length > 0) {
  console.log(`Missing logos for ${missing.length} stores:`, missing.map(m => m.slug));
} else {
  console.log('ALL store logos exist and are mapped successfully!');
}
