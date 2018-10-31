importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/207dffb70d6b4adcf208.js",
    "revision": "9d68ceedc92d95bb1de1e2cbbdad70b6"
  },
  {
    "url": "/_nuxt/23af313969d4e9a0e28b.js",
    "revision": "20647eb9f94433b9bbebd26876db2170"
  },
  {
    "url": "/_nuxt/9eef0b8b09412ea666e5.js",
    "revision": "946f66f240628f1bc482185082832265"
  },
  {
    "url": "/_nuxt/a136249191e35830b163.js",
    "revision": "f5b78344856dc2160ab419ad194190ad"
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





