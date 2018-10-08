importScripts('/my-project/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/my-project/_nuxt/066a6cab6e35943e9bd6.js",
    "revision": "0338a849d1e358b388f3ac795b037987"
  },
  {
    "url": "/my-project/_nuxt/2e94e98ee1dde9838ac3.js",
    "revision": "91ab45360d1f474edc55297047c21cc0"
  },
  {
    "url": "/my-project/_nuxt/b52c7fdd13f20e422be5.js",
    "revision": "3d770471110996aecb8b83a1829838d4"
  },
  {
    "url": "/my-project/_nuxt/fb1b5924bfa125f76792.js",
    "revision": "bdca8648f23fbe392140a1031f831525"
  }
], {
  "cacheId": "test",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/my-project/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/my-project/.*'), workbox.strategies.networkFirst({}), 'GET')





