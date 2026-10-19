// PromoRegistry High-Availability Offline Service Worker
const CACHE_NAME = 'promoregistry-cache-v1';

const STATIC_ASSETS = [
  '/',
  '/favicon.png',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(() => {});
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Skip chrome-extension, admin routes, and analytics
  if (
    url.pathname.startsWith('/admin') ||
    url.pathname.startsWith('/api') ||
    url.hostname.includes('google') ||
    url.hostname.includes('crisp') ||
    url.hostname.includes('avantlink') ||
    url.hostname.includes('skimresources')
  ) {
    return;
  }

  // HTML Navigation Requests (Store pages, deal pages, homepage)
  // NetworkFirst with 2.5s timeout, falling back to cache
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Network timeout')), 2500)
          );
          const networkPromise = fetch(request);
          const response = await Promise.race([networkPromise, timeoutPromise]);
          if (response && response.status === 200) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, response.clone());
          }
          return response;
        } catch (error) {
          // If network failed, timed out, or offline, return cached page immediately
          const cachedResponse = await caches.match(request);
          if (cachedResponse) return cachedResponse;

          // If specific page not cached, return home page as fallback
          const homeFallback = await caches.match('/');
          if (homeFallback) return homeFallback;

          return new Response(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <title>PromoRegistry | Reconnecting</title>
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f8fafc; color: #1e293b; text-align: center; padding: 20px; }
                .card { background: white; border-radius: 16px; padding: 32px; max-width: 420px; box-shadow: 0 10px 25px rgba(0,0,0,0.06); }
                h1 { font-size: 1.5rem; margin-bottom: 12px; color: #0284c7; }
                p { color: #64748b; line-height: 1.5; font-size: 0.95rem; }
                button { background: #0284c7; color: white; border: none; padding: 12px 24px; border-radius: 9999px; font-weight: 600; cursor: pointer; margin-top: 16px; font-size: 0.95rem; }
              </style>
            </head>
            <body>
              <div class="card">
                <h1>PromoRegistry Verified Deals</h1>
                <p>Connection is reconnecting. Tap below to reload your verified coupon codes.</p>
                <button onclick="window.location.reload()">Reload Store</button>
              </div>
            </body>
            </html>`,
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        }
      })()
    );
    return;
  }

  // Static Assets (CSS, JS, Images, Logos)
  // Stale-While-Revalidate: Serve immediately from cache, update in background
  if (
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'image' ||
    request.destination === 'font'
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(request, networkResponse));
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        return cachedResponse || fetchPromise;
      })
    );
  }
});
