const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'frontend', 'src', 'lib', 'fallbackData.ts'), 'utf8');

// Extract logoMap
const mapMatch = content.match(/const logoMap:\s*Record<string,\s*string>\s*=\s*(\{[\s\S]*?\n  \};)/);
let logoMap = {};
if (mapMatch) {
  logoMap = eval('(' + mapMatch[1] + ')');
}

const logosDir = path.join(__dirname, 'frontend', 'public', 'logos');
const existingFiles = new Set(fs.readdirSync(logosDir));

const storeBlockMatch = content.match(/export const FALLBACK_STORES[\s\S]*?=\s*(\[[\s\S]*?\n\];)/);
let stores = [];
if (storeBlockMatch) {
  const block = storeBlockMatch[1];
  const itemRegex = /{\s*id:\s*(\d+),\s*name:\s*"([^"]+)",\s*slug:\s*"([^"]+)"/g;
  let match;
  while ((match = itemRegex.exec(block)) !== null) {
    stores.push({ id: parseInt(match[1]), name: match[2], slug: match[3] });
  }
}

console.log('Total stores:', stores.length);
let resolved = 0;
let missing = [];

const results = stores.map(s => {
  let mappedPath = logoMap[s.slug];
  let exists = false;
  let matchedFile = null;
  if (mappedPath) {
    const filename = mappedPath.replace('/logos/', '');
    if (existingFiles.has(filename)) {
      exists = true;
      matchedFile = filename;
    }
  }
  if (!exists) {
    for (const ext of ['.png', '.svg', '.webp', '.jpg']) {
      if (existingFiles.has(s.slug + ext)) {
        exists = true;
        matchedFile = s.slug + ext;
        break;
      }
    }
  }
  if (exists) {
    resolved++;
  } else {
    missing.push(s);
  }
  return {
    ...s,
    has_logo: exists,
    logo_file: matchedFile,
    url: `https://my-coupon-hazique-s-projects.vercel.app/store/${s.slug}`
  };
});

console.log(`Stores with existing logo files: ${resolved} / ${stores.length}`);
fs.writeFileSync('store_audit.json', JSON.stringify(results, null, 2));

if (missing.length > 0) {
  console.log(`Missing count: ${missing.length}`);
} else {
  console.log('All store logos are 100% verified and existing!');
}
