// Terrastate / Romaterra / Ironfront service worker: makes the site installable and playable offline.
// Bump VERSION whenever a page changes, so players get the new build.
const VERSION='terrastate-v20.7';
const FILES=['./','index.html','updates.html','site.css?v=115','play.html','romaterra.html','ironfront.html','ww2-strategy-game.html','privacy.html','presskit.html','terrastate.webmanifest','romaterra.webmanifest','ironfront.webmanifest',
  'icons/terrastate-64.png','icons/terrastate-180.png','icons/terrastate-192.png','icons/terrastate-512.png',
  'icons/romaterra-64.png','icons/romaterra-180.png','icons/romaterra-192.png','icons/romaterra-512.png',
  'icons/ironfront-64.png','icons/ironfront-180.png','icons/ironfront-192.png','icons/ironfront-512.png',
  'fonts/Archivo-500.woff2','fonts/Archivo-600.woff2','fonts/Archivo-700.woff2','fonts/Archivo-800.woff2',
  'fonts/IBMPlexMono-400.woff2','fonts/IBMPlexMono-500.woff2','fonts/IBMPlexMono-600.woff2',
  'fonts/Cinzel-600.woff2','fonts/Cinzel-700.woff2','fonts/Cinzel-800.woff2',
  'img/v2/terrastate-map-crop.jpg','img/v2/terrastate-lastbattle-phone.jpg','img/v2/romaterra-lastbattle-phone.jpg',
  'img/v1/terrastate-battle-phone.jpg','img/v1/romaterra-battle-phone.jpg'];
// 18.7: one missing file no longer blocks the whole update (before, the old version stayed in charge),
// and the precache always fetches fresh copies instead of what the browser cache still holds.
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>Promise.allSettled(FILES.map(u=>c.add(new Request(u,{cache:'reload'}))))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
const KEEP=new Set(FILES.map(u=>new URL(u,self.registration.scope).href));
self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==location.origin)return;
  // network first (a new upload always shows). Pages and scripts ask the server whether they changed (no stale copy
  // from the browser cache); the cache is only the offline fallback and only keeps the site's own files.
  const page=req.mode==='navigate'||/\.(html|js)$/.test(url.pathname)||url.pathname.endsWith('/');
  e.respondWith(fetch(page?new Request(req,{cache:'no-cache'}):req).then(r=>{if(r.ok&&r.type==='basic'&&(!url.search||KEEP.has(url.href))){const cp=r.clone();caches.open(VERSION).then(c=>c.put(url.search&&!KEEP.has(url.href)?url.pathname:req,cp)).catch(()=>{});}return r;})
    .catch(()=>caches.match(req,{ignoreSearch:!KEEP.has(url.href)}).then(r=>r||(req.mode==='navigate'?caches.match('index.html'):undefined))));});
