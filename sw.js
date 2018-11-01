importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ad55ba500998c60e4a6.js",
    "revision": "5b9c6b65155c75f09e88b7822fc07da9"
  },
  {
    "url": "/_nuxt/155469bc29fb07a430aa.js",
    "revision": "900ffafc1537992626a39ed63100e094"
  },
  {
    "url": "/_nuxt/29bccf3ec00f9430480a.js",
    "revision": "be87df699ef4fb9060e4ade2f0c951bc"
  },
  {
    "url": "/_nuxt/7aee8340fede8512dd59.js",
    "revision": "b5a317a348b55ece06e3f475269fba9d"
  },
  {
    "url": "/_nuxt/fde3fe242dcd87418ca1.js",
    "revision": "c4f48a4cfbdad7ff305f7ce3c3384aed"
  },
  {
    "url": "/_nuxt/ff6ead7fc00d6f68787d.js",
    "revision": "6a15d2536f03eb73c74e18a0c842d300"
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





