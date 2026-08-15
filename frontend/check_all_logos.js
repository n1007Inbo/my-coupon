const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'src/lib/fallbackData.ts'), 'utf8');

// Match stores in FALLBACK_STORES
const storeMatches = [...content.matchAll(/id:\s*(\d+),\s*name:\s*['"]([^'"]+)['"],\s*slug:\s*['"]([^'"]+)['"]/g)];
console.log('Total stores matched:', storeMatches.length);

const logosDir = path.join(__dirname, 'public', 'logos');
const missing = [];
const existing = [];

storeMatches.forEach(m => {
  const id = m[1];
  const name = m[2];
  const slug = m[3];
  const pngPath = path.join(logosDir, slug + '.png');
  const svgPath = path.join(logosDir, slug + '.svg');
  const jpgPath = path.join(logosDir, slug + '.jpg');
  const webpPath = path.join(logosDir, slug + '.webp');
  
  if (fs.existsSync(pngPath) || fs.existsSync(svgPath) || fs.existsSync(jpgPath) || fs.existsSync(webpPath)) {
    existing.push({ id, slug, name });
  } else {
    missing.push({ id, slug, name });
  }
});

console.log('Stores with logos:', existing.length);
console.log('Stores missing logos:', missing.length);
if (missing.length > 0) {
  console.log('Missing list:', JSON.stringify(missing, null, 2));
}

// Check the stores created recently (index >= 251 or all stores)
fs.writeFileSync(path.join(__dirname, 'verified_stores.json'), JSON.stringify(storeMatches.map(m => ({ id: m[1], name: m[2], slug: m[3] })), null, 2));
