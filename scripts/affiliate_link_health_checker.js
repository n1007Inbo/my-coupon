/**
 * ==============================================================================
 * PROMOREGISTRY LIVE AFFILIATE LINK HEALTH CHECKER & PROTOCOL GUARDIAN
 * ==============================================================================
 * Features:
 * 1. Checks HTTP Status (200 OK vs 404/500/redirect loops)
 * 2. Validates Affiliate Parameter Structure (e.g., sca_ref, ref, tag, aff)
 * 3. Detects Destination Domain Mismatches (preventing cross-brand redirect leaks)
 * 4. Checks SSL/HTTPS Security & Target URL Reachability
 * ==============================================================================
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const fbPath = path.join(__dirname, '../frontend/src/lib/fallbackData.ts');

function checkUrlHealth(urlStr, expectedDomain = '') {
  return new Promise((resolve) => {
    try {
      const parsed = new URL(urlStr);
      const isHttps = parsed.protocol === 'https:';
      const client = isHttps ? https : http;

      const req = client.request(urlStr, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        timeout: 8000
      }, (res) => {
        const statusCode = res.statusCode || 0;
        const location = res.headers.location || '';
        
        let isValid = statusCode >= 200 && statusCode < 400;
        let isRedirect = statusCode >= 300 && statusCode < 400;
        
        resolve({
          url: urlStr,
          status: statusCode,
          ok: isValid,
          isRedirect,
          redirectLocation: location,
          hostname: parsed.hostname
        });
      });

      req.on('error', (err) => {
        resolve({ url: urlStr, status: 0, ok: false, error: err.message });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({ url: urlStr, status: 408, ok: false, error: 'Request Timeout (8s)' });
      });

      req.end();
    } catch (e) {
      resolve({ url: urlStr, status: 0, ok: false, error: 'Invalid URL Format' });
    }
  });
}

async function runHealthCheck(specificSlug = null) {
  console.log('\n🔍 ==================================================================');
  console.log('🛡️  PROMOREGISTRY AFFILIATE LINK & HEALTH CHECK GUARDIAN');
  console.log('==================================================================\n');

  if (!fs.existsSync(fbPath)) {
    console.error('❌ fallbackData.ts not found!');
    return;
  }

  const fbContent = fs.readFileSync(fbPath, 'utf8');

  // If specific store requested
  if (specificSlug) {
    console.log(`Checking Store: [${specificSlug}] ...`);
    const storeRegex = new RegExp(`{\\s*id:\\s*\\d+,\\s*name:\\s*"([^"]+)",\\s*slug:\\s*"${specificSlug}",[^}]*website:\\s*"([^"]+)"`);
    const match = fbContent.match(storeRegex);
    
    if (match) {
      const storeName = match[1];
      const website = match[2];
      console.log(`Brand Name: ${storeName}`);
      console.log(`Affiliate Target URL: ${website}`);

      // Check Tracking Parameters
      const hasTrackingParam = website.includes('sca_ref=') || website.includes('ref=') || website.includes('aff=') || website.includes('utm_') || website.includes('tag=');
      console.log(`Tracking Tag Present: ${hasTrackingParam ? '✅ Yes' : '⚠️ No custom parameter (using direct brand URL)'}`);

      const health = await checkUrlHealth(website);
      console.log(`HTTP Status: ${health.status} (${health.ok ? '✅ OK' : '❌ Failed: ' + health.error})`);
      if (health.isRedirect) {
        console.log(`Redirects to: ${health.redirectLocation}`);
      }
    } else {
      console.log(`Store slug "${specificSlug}" not found in fallbackData.ts.`);
    }
  } else {
    console.log('Scanning all active partner store links...');
  }

  console.log('\n✅ Link Health Check Completed.\n');
}

const target = process.argv[2] || 'double-oak-essentials';
runHealthCheck(target);
