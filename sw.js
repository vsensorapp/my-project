importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/155469bc29fb07a430aa.js",
    "revision": "900ffafc1537992626a39ed63100e094"
  },
  {
    "url": "/_nuxt/25cfdb33087aaae22c6b.js",
    "revision": "14d4b51119788cb912bcc34eddbb94c4"
  },
  {
    "url": "/_nuxt/689dd26e71353ce808ef.js",
    "revision": "26fbd3a7ea9062e9adecc32c2e04eb06"
  },
  {
    "url": "/_nuxt/7cb8dd3ada3cc091a5c1.js",
    "revision": "278453a5ff8d4dcdf9841cb579fed295"
  },
  {
    "url": "/_nuxt/b600e71fd997e48990c3.js",
    "revision": "05b909fd158674f30821eb2d3b5b655b"
  },
  {
    "url": "/_nuxt/c011fb0a1e9b289728eb.js",
    "revision": "95b27b335b4ae0f8410ad87be3fbd010"
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





