const cacheID = 'restaurant-v1.3';

//cach files
const cacheFiles = [
     '/mws-restaurant-stage-1',
     '/index.html',
     '/resaurant.html',
     '/css/style.css',
     '/js/dbhelper.js',
     '/js/main.js',
     '/js/restaurant_info.js',
     '/data/restaurants.json',
     '/img/1.jpg',
     '/img/2.jpg',
     '/img/3.jpg',
     '/img/4.jpg',
     '/img/5.jpg',
     '/img/6.jpg',
     '/img/7.jpg',
     '/img/8.jpg',
     '/img/9.jpg',
     '/img/10.jpg',
];

self.addEventListener('install', function(e){
     e.waitUntill(
          caches.open(cacheID).then(function(cache){
               return cache.addAll(cacheFiles);
          })
          .catch(function(error){
               console.log('caches install failed ' + error);
          })
     );
});

self.addEventListener('fetch', function(e){
     e.respondWith(
          caches.match(e.request).then(function(response){
               //check response
               if(response){
                    console.log('cached ' + e.response);
                    return response;
               }else{
                    console.log('could not find ' + e.response + ' for caching');
                    return fetch(e.request)
                    //pair request with response 
                    .then(function(response){
                         const clonedResponse = response.clone();
                         caches.open('cacheID').then(function(cache){
                              cache.put(e.request, clonedResponse);
                         })
                         return response;
                    })
                    .catch(function(error){
                         console.log(error);     
                    });
               }
          })
     );
});

