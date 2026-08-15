const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const stores = [
  { slug: 'sealy', domain: 'sealy.com' },
  { slug: 'invisawear', domain: 'invisawear.com' },
  { slug: 'little-links-golf', domain: 'littlelinksgolf.com' },
  { slug: 'pretty-strap', domain: 'prettystrap.com' },
  { slug: 'lumai-br', domain: 'lumai.com.br' },
  { slug: 'octobuddy-us', domain: 'octobuddy.com' },
  { slug: 'bulletproof-fitness-equipment-us', domain: 'bulletprooffitness.com' },
  { slug: 'pongbot', domain: 'pongbotgolf.com' },
  { slug: 'amyet-bikes', domain: 'amyetebikes.com' },
  { slug: 'aecojoy', domain: 'aecojoy.com' },
  { slug: 'evereden-us', domain: 'evereden.com' },
  { slug: 'ballboyz', domain: 'ballboyz.com' },
  { slug: 'rockbros', domain: 'rockbrosbike.com' },
  { slug: 'laurence-boutique', domain: 'laurenceboutique.com' },
  { slug: 'ozmoz', domain: 'ozmoz.fr' },
  { slug: 'serwall-outdoor-us', domain: 'serwalloutdoor.com' },
  { slug: 'glowria', domain: 'glowria.com' },
  { slug: 'pupper-crust', domain: 'puppercrust.com' }
];

const logosDir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const req = proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          const stats = fs.statSync(dest);
          if (stats.size < 100) {
            fs.unlinkSync(dest);
            reject(new Error('File too small / empty'));
          } else {
            resolve();
          }
        });
      });
    });
    req.on('error', reject);
    req.setTimeout(8000, () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

async function run() {
  for (const s of stores) {
    const dest = path.join(logosDir, `${s.slug}.png`);
    const urls = [
      `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${s.domain}&size=128`,
      `https://icons.duckduckgo.com/ip3/${s.domain}.ico`,
      `https://unavatar.io/${s.domain}`,
      `https://www.google.com/s2/favicons?domain=${s.domain}&sz=128`
    ];

    let success = false;
    for (const u of urls) {
      try {
        await downloadFile(u, dest);
        console.log(`[SUCCESS] Downloaded ${s.slug} from ${u}`);
        success = true;
        break;
      } catch (err) {
        // try next
      }
    }
    if (!success) {
      console.log(`[FAILED] Could not download logo for ${s.slug}`);
    }
  }
}

run();
