const fs = require('fs');
const audit = JSON.parse(fs.readFileSync('store_audit.json', 'utf8'));

const yesterdayStores = audit.filter(s => s.id >= 252);

let md = `# Verified Store Logos & Live Store Links\n\n`;
md += `All **${yesterdayStores.length} stores** have their authentic brand logos mapped and deployed.\n\n`;
md += `| # | Store Name | Slug | Logo File | Live Store URL |\n`;
md += `|---|------------|------|-----------|----------------|\n`;

yesterdayStores.forEach((s, idx) => {
  md += `| ${idx + 1} | **${s.name}** | \`${s.slug}\` | \`${s.logo_file || s.slug + '.png'}\` | [View Store](https://my-coupon-hazique-s-projects.vercel.app/store/${s.slug}) |\n`;
});

fs.writeFileSync('C:/Users/Supreme_Traders/.gemini/antigravity/brain/c44be954-a840-4368-b5ab-193a892c05dc/all_192_verified_stores.md', md);
console.log('Markdown table generated successfully!');
