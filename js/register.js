// register service worker
if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('sw.js', { scope: '/mws-restaurant-stage-1/' })
          .then(function (reg) {

               if (reg.installing) {
                    console.log('installing......');
               } else if (reg.waiting) {
                    console.log('Service worker installed..');
               } else if (reg.active) {
                    console.log('Service Worker Active!');
               }

          }).catch(function (error) {
               console.log('sw reg failed with ' + error);
          });
}



