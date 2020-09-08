var CACHE_NAME = 'pwa-task-manager';

let urlToCache = [
  '/',
  '/inicio',
  '/depoimentos',
  '/servicos',
  '/contatos',
  '/galeria'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aberto');
        return cache.addAll(urlToCache);
      })
  );
});

self.addEventListener('activate', event => {
  var cacheWhiteList = ['pwa-task-manager'];
  event.waitUntil(
    cache.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if(cacheWhiteList.indexOf(cacheName) === -1){
              return caches.delete(cacheName);
          }
        })
      )
    })
  );
})
