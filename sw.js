importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/037ff82aef49cbfb1745.js",
    "revision": "a8f46da367ebe0fab686f7af366c00be"
  },
  {
    "url": "/_nuxt/0573a5c7f72eb571d43b.js",
    "revision": "986fac78888b216752a78add88a6f60d"
  },
  {
    "url": "/_nuxt/36edd8d50a450d3b736f.js",
    "revision": "f23150222072aa59c9c53a47af616355"
  },
  {
    "url": "/_nuxt/3a216fbd28a021aca864.js",
    "revision": "f46bc68fcf207251bfddfdd7d6f669f8"
  },
  {
    "url": "/_nuxt/5ecb99473c7a0cc59fb6.js",
    "revision": "abb3f4e0a17afe93372790243011807e"
  },
  {
    "url": "/_nuxt/ee071cccd4708bb8de39.js",
    "revision": "32d708b972056288a5240573ad105381"
  }
], {
  "cacheId": "V-Sensor",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





