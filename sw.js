const CACHE='beray-portal-final-v10';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icons/beray-icon-192.png','./icons/beray-icon-512.png','./icons/beray-aurax-512.png','./icons/beray-education-original-512.png','./icons/beray-health-new-512.png','./icons/beray-hikaye-512.png',];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  if(u.origin!==location.origin)return;
  e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE).then(x=>x.put(e.request,cp));return r}).catch(()=>caches.match('./index.html'))));
});
