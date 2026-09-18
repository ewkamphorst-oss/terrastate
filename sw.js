// Terrastate / Romaterra service worker: makes the site installable and playable offline.
// Bump VERSION whenever play.html or romaterra.html changes, so players get the new build.
const VERSION='terrastate-v3.35';
const FILES=['./','index.html','play.html','romaterra.html','terrastate.webmanifest','romaterra.webmanifest',
  'icons/terrastate-64.png','icons/terrastate-180.png','icons/terrastate-192.png','icons/terrastate-512.png',
  'icons/romaterra-64.png','icons/romaterra-180.png','icons/romaterra-192.png','icons/romaterra-512.png',
  'img/terrastate-map.jpg','img/terrastate-fleets.jpg','img/terrastate-home.jpg','img/romaterra-map.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==location.origin)return;
  // pages: network first (so a new build shows up), cache as fallback (offline)
  if(req.mode==='navigate'||/\.html$/.test(url.pathname)||url.pathname.endsWith('/')){
    e.respondWith(fetch(req).then(r=>{const cp=r.clone();caches.open(VERSION).then(c=>c.put(req,cp));return r;}).catch(()=>caches.match(req).then(r=>r||caches.match('index.html'))));return;}
  // everything else: cache first
  e.respondWith(caches.match(req).then(r=>r||fetch(req).then(res=>{const cp=res.clone();caches.open(VERSION).then(c=>c.put(req,cp));return res;})));});
