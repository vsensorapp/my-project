importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4dda2c1b800cb857b32d.js",
    "revision": "094b25891a9d8e4b14eec8f41eeee56d"
  },
  {
    "url": "/_nuxt/553e2a8b38b9c2f1593b.js",
    "revision": "0c20b09edcc84bad67656d987a1ce8dd"
  },
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
    "url": "/_nuxt/cce7833aad1b045387a1.js",
    "revision": "9e2231d6e7ec726eaf460ad3fd65c780"
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





