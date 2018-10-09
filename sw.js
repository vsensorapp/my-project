importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/34dd61504f96559c4049.js",
    "revision": "3d770471110996aecb8b83a1829838d4"
  },
  {
    "url": "/_nuxt/575217dc72014622946a.js",
    "revision": "e0b35edf94ba2b4c044621e31e739749"
  },
  {
    "url": "/_nuxt/82bad4e0df82227af59f.js",
    "revision": "e4aa443e7b20679e55ab8daca673ee11"
  },
  {
    "url": "/_nuxt/c5073e51076a9392464f.js",
    "revision": "10a52384cc132d1d4a51a68f5c90a45f"
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





