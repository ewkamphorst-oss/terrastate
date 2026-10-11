// Service worker: bewaart de spelbestanden zodat ze offline werken. Verhoog VERSIE bij elke nieuwe build.
const VERSIE = 'tactics-v3.3-6';
const BESTANDEN = ['./', './index.html', './romaterra.html', './ironfront.html', './terrastate.html', './music/terrastate.mp3', './music/romaterra.mp3', './music/ironfront.mp3'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSIE).then((c) => c.addAll(BESTANDEN).catch(() => {})).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSIE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// Netwerk eerst (zodat een nieuwe versie meteen komt), anders uit de cache.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then((r) => {
    const kopie = r.clone(); caches.open(VERSIE).then((c) => c.put(e.request, kopie)).catch(() => {}); return r;
  }).catch(() => caches.match(e.request).then((r) => r || caches.match('./index.html'))));
});
