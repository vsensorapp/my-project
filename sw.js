importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/23af313969d4e9a0e28b.js",
    "revision": "20647eb9f94433b9bbebd26876db2170"
  },
  {
    "url": "/_nuxt/38832d499861a1d406b6.js",
    "revision": "af411f0b60ebf08120266444a235deb3"
  },
  {
    "url": "/_nuxt/a136249191e35830b163.js",
    "revision": "f5b78344856dc2160ab419ad194190ad"
  },
  {
    "url": "/_nuxt/dfde04a13557886e2d55.js",
    "revision": "32d6cb1575c15ef6ae708b50fab13bac"
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





