const fs = require('fs');
const https = require('https');
const path = require('path');

const fallbackDataPath = path.join(__dirname, '..', 'frontend', 'src', 'lib', 'fallbackData.ts');
const logosDir = path.join(__dirname, '..', 'frontend', 'public', 'logos');

// 1. Parse stores from fallbackData.ts
const content = fs.readFileSync(fallbackDataPath, 'utf8');
const storesMatch = content.match(/export const FALLBACK_STORES: Store\[] = \[([\s\S]*?)];\s*(export const FALLBACK_COUPONS|\/\/)/);
if (!storesMatch) {
  console.error('Failed to parse FALLBACK_STORES');
  process.exit(1);
}

const storesText = storesMatch[1];
const storeRegex = /\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)",\s*slug:\s*"([^"]+)",\s*logo:\s*(getLogoUrl\("([^"]+)"\)|"[^"]+"),\s*website:\s*"([^"]+)"\s*\}/g;
let match;
const stores = [];
while ((match = storeRegex.exec(storesText)) !== null) {
  stores.push({
    id: parseInt(match[1]),
    name: match[2],
    slug: match[3],
    logo: match[4],
    logoSlug: match[5] || null,
    website: match[6]
  });
}

// Filter candidates between IDs 736 and 927
const candidates = stores.filter(s => s.id >= 736 && s.id <= 927);
console.log(`Parsed ${stores.length} total stores. Found ${candidates.length} candidates (IDs 736 to 927) for logo updates.`);

function getDomain(urlStr) {
  try {
    if (!urlStr) return null;
    let targetUrl = urlStr;
    if (urlStr.includes('url=')) {
      const parsedUrl = new URL(urlStr);
      const urlParam = parsedUrl.searchParams.get('url');
      if (urlParam) {
        targetUrl = urlParam;
      }
    }
    const u = new URL(targetUrl);
    let host = u.hostname.replace('www.', '');
    return host;
  } catch (e) {
    return null;
  }
}

// Smart downloadImage function that follows redirects recursively
function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    function request(targetUrl) {
      const req = https.get(targetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      }, (res) => {
        // Handle 3xx Redirects
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const redirectUrl = new URL(res.headers.location, targetUrl).toString();
          request(redirectUrl);
          return;
        }

        if (res.statusCode !== 200) {
          reject(new Error(`HTTP Status ${res.statusCode}`));
          return;
        }

        const file = fs.createWriteStream(destPath);
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      });
      req.on('error', reject);
    }
    
    request(url);
  });
}

async function processLogos() {
  let downloadCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  for (let i = 0; i < candidates.length; i++) {
    const store = candidates[i];
    const dest = path.join(logosDir, `${store.slug}.png`);
    
    // Check if file already exists and is not a dummy placeholder (52610 bytes)
    let needsDownload = true;
    if (fs.existsSync(dest)) {
      const stats = fs.statSync(dest);
      if (stats.size !== 52610) {
        needsDownload = false;
      } else {
        console.log(`[${i+1}/${candidates.length}] ${store.name} has placeholder logo (52610 bytes). Redownloading...`);
      }
    } else {
      console.log(`[${i+1}/${candidates.length}] ${store.name} logo is missing. Downloading...`);
    }

    if (!needsDownload) {
      console.log(`[${i+1}/${candidates.length}] Skipped ${store.name} (Valid logo already exists)`);
      skippedCount++;
      continue;
    }

    const domain = getDomain(store.website);
    if (!domain) {
      console.log(`  ⚠ Could not parse domain for website: ${store.website}`);
      failedCount++;
      continue;
    }

    // Try Clearbit Logo API first
    const clearbitUrl = `https://logo.clearbit.com/${domain}`;
    console.log(`  Trying Clearbit: ${clearbitUrl}`);
    try {
      await downloadImage(clearbitUrl, dest);
      console.log(`  ✓ Success via Clearbit for ${store.name}`);
      downloadCount++;
    } catch (e) {
      console.log(`  ✗ Clearbit failed for ${store.name} (${e.message}). Trying Google Favicon API...`);
      
      // Fallback to Google High-Res Favicon API
      const googleFaviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
      try {
        await downloadImage(googleFaviconUrl, dest);
        console.log(`  ✓ Success via Google Favicon for ${store.name}`);
        downloadCount++;
      } catch (err) {
        console.error(`  ✗ All fallbacks failed for ${store.name}:`, err.message);
        failedCount++;
      }
    }
    
    // Tiny delay to avoid rate limit/throttling
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log('\n=== LOGO RECONCILIATION SUMMARY ===');
  console.log(`Total candidates checked: ${candidates.length}`);
  console.log(`Successfully downloaded: ${downloadCount}`);
  console.log(`Already valid (skipped): ${skippedCount}`);
  console.log(`Failed to retrieve: ${failedCount}`);
}

processLogos();
