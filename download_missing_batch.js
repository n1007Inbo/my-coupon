const fs = require('fs');
const https = require('https');
const path = require('path');

const missingList = [
  { id: 741, name: 'Sealy', slug: 'sealy', domain: 'sealy.com' },
  { id: 756, name: 'Anti Apex', slug: 'anti-apex', domain: 'antiapex.com' },
  { id: 757, name: 'Invisawear', slug: 'invisawear', domain: 'invisawear.com' },
  { id: 762, name: 'Little Links Golf', slug: 'little-links-golf', domain: 'littlelinksgolf.com' },
  { id: 771, name: 'Pretty Strap', slug: 'pretty-strap', domain: 'prettystrap.com' },
  { id: 773, name: 'lumai BR', slug: 'lumai-br', domain: 'lumaibr.com' },
  { id: 784, name: 'DC House', slug: 'dc-house', domain: 'dchouse.com' },
  { id: 787, name: 'Octobuddy US', slug: 'octobuddy-us', domain: 'octobuddy.com' },
  { id: 789, name: 'Bulletproof Fitness Equipment US', slug: 'bulletproof-fitness-equipment-us', domain: 'bulletproofft.com' },
  { id: 791, name: 'Pongbot', slug: 'pongbot', domain: 'pongbotstar.com' },
  { id: 796, name: 'Amyet Bikes', slug: 'amyet-bikes', domain: 'amyetebikes.com' },
  { id: 801, name: 'LEVEL', slug: 'level', domain: 'level.co' },
  { id: 804, name: 'Aecojoy', slug: 'aecojoy', domain: 'aecojoy.com' },
  { id: 809, name: 'Evereden US', slug: 'evereden-us', domain: 'evereden.com' },
  { id: 824, name: 'Ballboyz', slug: 'ballboyz', domain: 'ballboyz.com' },
  { id: 825, name: 'ROCKBROS', slug: 'rockbros', domain: 'rockbros.com' },
  { id: 856, name: 'Silver Jeans', slug: 'silver-jeans', domain: 'silverjeans.com' },
  { id: 875, name: 'Opticas LUX', slug: 'opticas-lux', domain: 'lux.mx' },
  { id: 885, name: 'Laurence Boutique', slug: 'laurence-boutique', domain: 'laurenceboutique.com' },
  { id: 891, name: 'Ozmoz', slug: 'ozmoz', domain: 'ozmoz.com' },
  { id: 897, name: 'Serwall Outdoor US', slug: 'serwall-outdoor-us', domain: 'serwall.com' },
  { id: 900, name: 'Sport Service', slug: 'sport-service', domain: 'sportservice.com' },
  { id: 901, name: 'Glowria', slug: 'glowria', domain: 'glowria.fr' },
  { id: 907, name: 'Pupper Crust', slug: 'pupper-crust', domain: 'pupper-crust.com' }
];

function download(url, dest) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            const stat = fs.statSync(dest);
            resolve(stat.size > 100);
          });
        });
      } else {
        file.close(() => {
          if (fs.existsSync(dest)) fs.unlinkSync(dest);
          resolve(false);
        });
      }
    }).on('error', () => {
      file.close(() => {
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        resolve(false);
      });
    });
  });
}

async function run() {
  for (const s of missingList) {
    const dest = path.join('C:/Users/Supreme_Traders/.gemini/antigravity/scratch/all_repos/my-coupon/frontend/public/logos', `${s.slug}.png`);
    const urls = [
      `https://www.google.com/s2/favicons?domain=${s.domain}&sz=128`,
      `https://api.statvoo.com/favicon/?url=${s.domain}`,
      `https://icons.duckduckgo.com/ip3/${s.domain}.ico`
    ];

    for (const u of urls) {
      const ok = await download(u, dest);
      if (ok) {
        console.log(`[OK] Downloaded for ${s.name} (${s.domain})`);
        break;
      }
    }
  }
}

run();
