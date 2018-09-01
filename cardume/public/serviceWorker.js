const cacheShell = 'app-shell';
const cacheData = 'app-data';
const filesToCache = [
  '/',
  "/index.html",
  "/favicon.ico",
  "../src/App.css",
  "/src/App.js",
  "/src/index.js",
  "/src/index.css",
  "/src/logo.svg"
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== cacheShell && key !== cacheData) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', e => {
  console.log('[Service Worker] Fetch', e.request.url);
  e.respondWith(
    caches.open(cacheData).then(function(cache) {
      return fetch(e.request).then(response => {
        cache.put(e.request.url, response.clone());
        return response;
      })
    }).catch(() => caches.match(e.request))
  )
})