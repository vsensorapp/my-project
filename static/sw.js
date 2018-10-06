importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/12d0d2f9f8045e38bef7.js",
    "revision": "de6c326622be2df602f839e1b894a851"
  },
  {
    "url": "/_nuxt/2e94e98ee1dde9838ac3.js",
    "revision": "91ab45360d1f474edc55297047c21cc0"
  },
  {
    "url": "/_nuxt/b52c7fdd13f20e422be5.js",
    "revision": "3d770471110996aecb8b83a1829838d4"
  },
  {
    "url": "/_nuxt/baa772533d2da0ed9210.js",
    "revision": "906cffc8183d7c5d802b7ba945471b91"
  }
], {
  "cacheId": "test",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





