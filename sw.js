// Terrastate / Romaterra / Ironfront service worker: makes the site installable and playable offline.
// Bump VERSION whenever a page changes, so players get the new build.
const VERSION='terrastate-v6.1.0-ironfront';
const FILES=['./','index.html','updates.html','site.css?v=107','play.html','romaterra.html','ironfront.html','ww2-strategy-game.html','privacy.html','presskit.html','terrastate.webmanifest','romaterra.webmanifest','ironfront.webmanifest',
  'icons/terrastate-64.png','icons/terrastate-180.png','icons/terrastate-192.png','icons/terrastate-512.png',
  'icons/romaterra-64.png','icons/romaterra-180.png','icons/romaterra-192.png','icons/romaterra-512.png',
  'icons/ironfront-64.png','icons/ironfront-180.png','icons/ironfront-192.png','icons/ironfront-512.png',
  'fonts/Archivo-500.woff2','fonts/Archivo-600.woff2','fonts/Archivo-700.woff2','fonts/Archivo-800.woff2',
  'fonts/IBMPlexMono-400.woff2','fonts/IBMPlexMono-500.woff2','fonts/IBMPlexMono-600.woff2',
  'fonts/Cinzel-600.woff2','fonts/Cinzel-700.woff2','fonts/Cinzel-800.woff2',
  'img/v2/terrastate-map-crop.jpg','img/v2/terrastate-lastbattle-phone.jpg','img/v2/romaterra-lastbattle-phone.jpg',
  'img/v1/terrastate-battle-phone.jpg','img/v1/romaterra-battle-phone.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==location.origin)return;
  // 1.0.2: everything network first (so a new upload always shows), the cache is only the offline fallback
  e.respondWith(fetch(req).then(r=>{if(r.ok){const cp=r.clone();caches.open(VERSION).then(c=>c.put(req,cp));}return r;})
    .catch(()=>caches.match(req).then(r=>r||(req.mode==='navigate'?caches.match('index.html'):undefined))));});
