const fs = require('fs');
const audit = JSON.parse(fs.readFileSync('store_audit.json', 'utf8'));

// Stores created yesterday were index 251 onwards (id 252 to 443)
const yesterdayStores = audit.filter(s => s.id >= 252);
console.log('Yesterday stores count:', yesterdayStores.length);
const yesterdayWithLogos = yesterdayStores.filter(s => s.has_logo);
console.log('Yesterday stores with logo on disk:', yesterdayWithLogos.length, '/', yesterdayStores.length);

const missingYesterday = yesterdayStores.filter(s => !s.has_logo);
if (missingYesterday.length > 0) {
  console.log('Missing among yesterday stores:', missingYesterday.map(s => ({ id: s.id, name: s.name, slug: s.slug })));
} else {
  console.log('ALL yesterday stores have verified logos on disk!');
}
