self.addEventListener('install', function (event) {
    var urlsToCache = [
        '/',
        '/js/dbhelper.js',
        '/js/index.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/data/restaurants.json',
        '/css/styles.css'
    ];
    event.waitUntil(caches.open('restaurant-static').then(function(cache) {
        cache.addAll(urlsToCache);
    })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            if (response) return response;
            return fetch(event.request);
        })
    );
});