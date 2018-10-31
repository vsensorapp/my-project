importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0c1c79784720ca446d1e.js",
    "revision": "a304fd0b76cdb3d417e0fd0737873d7f"
  },
  {
    "url": "/_nuxt/1a92596dabdeb861bf14.js",
    "revision": "0129dd67121a79c5b9bbabd1480d122d"
  },
  {
    "url": "/_nuxt/331ed8ca807510b29501.js",
    "revision": "533965e0fb9ff6500fc7ed01099aceef"
  },
  {
    "url": "/_nuxt/3c9a6d68c628d98a1c0a.js",
    "revision": "ab4e01070344722e2d1a57f9b243e339"
  },
  {
    "url": "/_nuxt/77307c1bc1b175ecc47d.js",
    "revision": "d7c658b08d28b3ccabcd73da3a166647"
  },
  {
    "url": "/_nuxt/b2733e883b453699a591.js",
    "revision": "58980249f0f8f051854c229dcf495ec6"
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





