const fs = require('fs');

const fixedSlugs = [
  'mac-duggal', 'retro-stage', 'fabbro-gardens', 'aulumu-us', 'recaro-kids', 
  'the-pure-lotus', 'marcy-pro', 'my-gift-stop', 'fleur-du-mal', 'monrow', 
  'la-canadienne', 'e-bike-generation', 'alashan-cashmere', 'blissy', 
  'casetify', 'solawave', 'gopure-beauty', 'kove', 'cupheals', 'jowissa', 
  'furi-knives', 'dr-bright-us', 'kegco', 'sol-de-janeiro', 'cozy-earth', 
  'the-giving-movement', 'dior', 'lole-women', 'french-connection-us', 
  'harman-kardon', 'abacus-sportswear', 'acrtmatic', 'artextured', 'auctmarts', 
  'autotech-accessories', 'aym-studio', 'baza-bizar', 'beaucoeur', 'cafenated-coffee-company', 
  'cellex-c', 'chic-me', 'chicloth', 'christian-dior', 'eagle-creek', 'lole-us', 
  'parc-asterix', 'naturnest-us-uk', 'navimow', 'omfort', 'mousse-et-coussins', 
  'pai-technology-inc', 'opticas-lux', 'renogy'
];

console.log('Total Stores Checked:', fixedSlugs.length);
let okCount = 0;
const results = [];

fixedSlugs.forEach((slug, idx) => {
  const logoPath = './frontend/public/logos/' + slug + '.png';
  const exists = fs.existsSync(logoPath);
  if (exists) okCount++;
  results.push({
    index: idx + 1,
    slug: slug,
    status: exists ? 'Verified' : 'Missing',
    path: '/store/' + slug
  });
});

console.log('Logos Verified:', okCount + '/' + fixedSlugs.length);
console.log(JSON.stringify(results, null, 2));
