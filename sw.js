self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.clients.claim();
});

// لا يوجد cache — التطبيق يحتاج إنترنت دائمًا
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
