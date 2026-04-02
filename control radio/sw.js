const cacheName = 'admin-manaure-v2';
const staticAssets = [
  './',
  './index.html',
  './manifest.json',
  './logo.png'
];

// Instalación: Guarda los archivos en la memoria del celular
self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

// Activación: Limpia memorias viejas
self.addEventListener('activate', e => {
  self.clients.claim();
});

// Peticiones: Permite que la app abra rápido
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});