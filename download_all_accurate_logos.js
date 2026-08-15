const fs = require('fs');
const https = require('https');
const path = require('path');

const stores = JSON.parse(fs.readFileSync('C:/Users/Supreme_Traders/.gemini/antigravity/scratch/all_repos/my-coupon/store_domains.json', 'utf8'));

function downloadFromUrl(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            const stat = fs.statSync(dest);
            if (stat.size > 200) {
              resolve(true);
            } else {
              resolve(false);
            }
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

async function fetchLogoForDomain(domain, slug) {
  const dest = path.join('C:/Users/Supreme_Traders/.gemini/antigravity/scratch/all_repos/my-coupon/frontend/public/logos', `${slug}.png`);
  
  // Method 1: Google High-Res Favicon API (128px)
  const googleUrl = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`;
  let ok = await downloadFromUrl(googleUrl, dest);
  if (ok) return 'google_128';

  // Method 2: DuckDuckGo icons
  const ddgUrl = `https://icons.duckduckgo.com/ip3/${domain}.ico`;
  ok = await downloadFromUrl(ddgUrl, dest);
  if (ok) return 'ddg_ico';

  return 'failed';
}

async function run() {
  console.log(`Starting accurate logo download for ${stores.length} stores...`);
  let successCount = 0;

  for (let i = 0; i < stores.length; i++) {
    const s = stores[i];
    const res = await fetchLogoForDomain(s.domain, s.slug);
    if (res !== 'failed') {
      successCount++;
    }
    if ((i + 1) % 20 === 0 || i === stores.length - 1) {
      console.log(`Progress: [${i + 1}/${stores.length}] - Verified ${successCount} logos`);
    }
  }

  console.log(`Completed! Total accurate logos downloaded: ${successCount}/${stores.length}`);
}

run();
