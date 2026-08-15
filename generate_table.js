const fs = require('fs');

const stores = JSON.parse(fs.readFileSync('C:/Users/Supreme_Traders/.gemini/antigravity/scratch/all_repos/my-coupon/recent_stores.json', 'utf8'));

let md = '# Live Stores List (Total: ' + stores.length + ')\n\n';
md += '| # | Store Name | Store Slug | Store Page Link |\n';
md += '|---|---|---|---|\n';

stores.forEach((s, idx) => {
  md += '| ' + (idx + 1) + ' | ' + s.name + ' | `' + s.slug + '` | [/store/' + s.slug + '](/store/' + s.slug + ') |\n';
});

fs.writeFileSync('C:/Users/Supreme_Traders/.gemini/antigravity/scratch/all_repos/my-coupon/stores_table.md', md);
console.log('Stores table generated successfully with ' + stores.length + ' stores.');
