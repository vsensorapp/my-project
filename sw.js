importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/42db292c51e1afe31990.js",
    "revision": "04bce6b0dfc6072a61ee515d31d5db5a"
  },
  {
    "url": "/_nuxt/9a30fd5c4c53813273db.js",
    "revision": "26d720e719dc4a457896fc17d34b1c7d"
  },
  {
    "url": "/_nuxt/e15dc73a07a8f301f906.js",
    "revision": "50886c64a4c63a2fd1ff582b82d92c47"
  },
  {
    "url": "/_nuxt/f59d7fcea73a2d169fdb.js",
    "revision": "87c989531033adc9991af93b230032a0"
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





