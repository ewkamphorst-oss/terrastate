// Hidden Command service worker. Raise the cache name with every new build.
const CACHE = 'command-v1.1-0';
const FILES = ["./", "./index.html", "./ironfront.html", "./romaterra.html", "./terrastate.html", "./ironfront.webmanifest", "./romaterra.webmanifest", "./terrastate.webmanifest", "./index.webmanifest", "./icons/ironfront-192.png", "./icons/ironfront-512.png", "./icons/romaterra-192.png", "./icons/romaterra-512.png", "./icons/terrastate-192.png", "./icons/terrastate-512.png"];
const GAME_HTML = /\/(ironfront|romaterra|terrastate|index)\.html$|\/$/;

self.addEventListener('install', (e) => {
  // cache file by file, so one missing file never breaks the install
  e.waitUntil(caches.open(CACHE)
    .then((c) => Promise.all(FILES.map((f) => fetch(f, { cache: 'no-cache' }).then((r) => (r.ok ? c.put(f, r) : null)).catch(() => null))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('command-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
function timeout(ms) { return new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms)); }
function save(req, res) { if (res && res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {}); } return res; }
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (GAME_HTML.test(url.pathname)) {
    // stale while revalidate: answer from the cache at once, refresh it in the background
    e.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => {
      const net = fetch(req).then((r) => save(req, r)).catch(() => null);
      if (hit) { e.waitUntil(net); return hit; }
      return Promise.race([net.then((r) => r || Promise.reject(new Error('offline'))), timeout(3000)]).catch(() => caches.match('./index.html'));
    }));
    return;
  }
  // everything else: network first with a 3 second timeout, then the cache
  e.respondWith(Promise.race([fetch(req).then((r) => save(req, r)), timeout(3000)])
    .catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || fetch(req))));
});
