const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'src/lib/fallbackData.ts'), 'utf8');

// Parse the array in fallbackData.ts
const match = content.match(/export const FALLBACK_STORES:\s*Store\[\]\s*=\s*\[([\s\S]*?)\];/);
if (!match) {
  console.log('FALLBACK_STORES array not found');
  process.exit(1);
}

const lines = match[1].split('\n');
const stores = [];
let currentStore = null;

lines.forEach(line => {
  const idM = line.match(/id:\s*(\d+)/);
  const nameM = line.match(/name:\s*['"]([^'"]+)['"]/);
  const slugM = line.match(/slug:\s*['"]([^'"]+)['"]/);
  const webM = line.match(/website_url:\s*['"]([^'"]+)['"]/);
  
  if (line.includes('{') && line.includes('id:')) {
    currentStore = {};
  }
  if (currentStore) {
    if (idM) currentStore.id = parseInt(idM[1]);
    if (nameM) currentStore.name = nameM[1];
    if (slugM) currentStore.slug = slugM[1];
    if (webM) currentStore.website_url = webM[1];
    if (line.includes('}')) {
      if (currentStore.slug) stores.push(currentStore);
      currentStore = null;
    }
  }
});

console.log('Total parsed stores:', stores.length);
// The batch added recently starts at index 251 (or id >= 741)
const recentBatch = stores.filter((s, idx) => idx >= 251 || s.id >= 741);
console.log('Recent batch count:', recentBatch.length);

const logosDir = path.join(__dirname, 'public', 'logos');
const missing = [];
const ready = [];

recentBatch.forEach(s => {
  const pngPath = path.join(logosDir, s.slug + '.png');
  const svgPath = path.join(logosDir, s.slug + '.svg');
  const jpgPath = path.join(logosDir, s.slug + '.jpg');
  const webpPath = path.join(logosDir, s.slug + '.webp');
  
  const exists = fs.existsSync(pngPath) || fs.existsSync(svgPath) || fs.existsSync(jpgPath) || fs.existsSync(webpPath);
  if (exists) {
    ready.push(s);
  } else {
    missing.push(s);
  }
});

console.log('Recent batch ready with logos:', ready.length);
console.log('Recent batch missing logos:', missing.length);
console.log('Missing items:', JSON.stringify(missing, null, 2));

fs.writeFileSync(path.join(__dirname, 'batch_status.json'), JSON.stringify({ ready, missing }, null, 2));
