importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/59fcc3ef66019eef8e35.js",
    "revision": "d1316b2ddf26a31d3878136b164f2669"
  },
  {
    "url": "/_nuxt/76a3d897d5928842d78e.js",
    "revision": "3a57bd9c4be4dc725182d5baa19deaf9"
  },
  {
    "url": "/_nuxt/b26e33e6bf4dc72ef494.js",
    "revision": "4f13ea5dcd318912e6644686e2f1dd55"
  },
  {
    "url": "/_nuxt/b4c35ca680a528a90003.js",
    "revision": "08011532aafb6ec35c831a97ff19d2d9"
  },
  {
    "url": "/_nuxt/cce7833aad1b045387a1.js",
    "revision": "9e2231d6e7ec726eaf460ad3fd65c780"
  },
  {
    "url": "/_nuxt/e01bb1a26619ce3b218a.js",
    "revision": "c48ecda05b2ab5d1832ac0ac3ea3ff2f"
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





