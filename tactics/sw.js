// Service worker of the tactics games: keeps the game files for offline play. Raise VERSIE with every new build.
// Update 8.0: the game pages and the music open straight from the cache and refresh in the background
// (stale-while-revalidate), so a slow phone connection no longer makes the player wait. Everything else: network
// first with a short timeout, then the cache.
const VERSIE = 'tactics-v3.4-0';
const BESTANDEN = ['./', './index.html', './romaterra.html', './ironfront.html', './terrastate.html',
  './music/terrastate.mp3', './music/romaterra.mp3', './music/ironfront.mp3',
  './terrastate.webmanifest', './romaterra.webmanifest', './ironfront.webmanifest',
  './icons/terrastate-192.png', './icons/romaterra-192.png', './icons/ironfront-192.png',
  './icons/terrastate-512.png', './icons/romaterra-512.png', './icons/ironfront-512.png',
  '../img/v3/tactics-terrastate.jpg', '../img/v3/tactics-romaterra.jpg', '../img/v3/tactics-ironfront.jpg'];
self.addEventListener('install', (e) => {
  // One by one: a single missing file must not stop the rest from being cached.
  e.waitUntil(caches.open(VERSIE).then((c) => Promise.all(BESTANDEN.map((f) => c.add(f).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSIE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
const snel = (pad) => /\.(html|mp3)$/.test(pad) && !/\/index\.html$/.test(pad);
function bewaar(req, r) {
  if (r && r.ok && r.status === 200) { const kopie = r.clone(); caches.open(VERSIE).then((c) => c.put(req, kopie)).catch(() => {}); }
  return r;
}
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (snel(url.pathname)) {
    // Stale-while-revalidate: cache at once, refresh for next time. Range requests (audio) get the whole file.
    e.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => {
      const net = fetch(url.href).then((r) => bewaar(new Request(url.href), r)).catch(() => null);
      if (hit) { e.waitUntil(net); return hit; }
      return net.then((r) => r || caches.match('./index.html'));
    }));
    return;
  }
  e.respondWith(new Promise((resolve) => {
    let klaar = false;
    const val = () => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match('./index.html'));
    const t = setTimeout(() => { val().then((r) => { if (!klaar && r) { klaar = true; resolve(r); } }); }, 3000);
    fetch(req).then((r) => { clearTimeout(t); bewaar(req, r); if (!klaar) { klaar = true; resolve(r); } })
      .catch(() => { clearTimeout(t); val().then((r) => { if (!klaar) { klaar = true; resolve(r || Response.error()); } }); });
  }));
});
