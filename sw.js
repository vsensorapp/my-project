importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08a0efd14577a49747f5.js",
    "revision": "066728e98e9b17a4bd405729d4ae738c"
  },
  {
    "url": "/_nuxt/1e90780e4e7a7b7742c3.js",
    "revision": "26fe7b8aff488888959bf90d7c92946c"
  },
  {
    "url": "/_nuxt/462fc972c391ae687163.js",
    "revision": "61028ba56449d3881354cc2d8f4508de"
  },
  {
    "url": "/_nuxt/b415957394147a3a8c9d.js",
    "revision": "b3b437c59f68d8ee20a4e07892b3ce9b"
  },
  {
    "url": "/_nuxt/c6526e647d83c8df2a21.js",
    "revision": "a1173c2a51b189e53858b492d7f8e370"
  },
  {
    "url": "/_nuxt/e8e1c5b6b9853bddcd22.js",
    "revision": "da21b03853ed1156225e3812626fa15c"
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





