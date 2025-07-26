const CACHE_NAME = 'unity-webgl-v1';
const urlsToCache = [
  './',
  './index.html',
  './Build/tipjar.loader.js',
  './Build/tipjar.framework.js',
  './Build/tipjar.data',
  './Build/tipjar.wasm'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});