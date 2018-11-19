importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/37da419c7281c4ba8bf8.js",
    "revision": "20ed21e7e1853686caaa0357023c2db5"
  },
  {
    "url": "/_nuxt/6653835a99c3e80a8924.js",
    "revision": "fbb3e4640e1de1113e3a9a5dfd79f9e6"
  },
  {
    "url": "/_nuxt/9039397f4bbd84b99fe0.js",
    "revision": "bb4c3be1647578105d427f2484c2344c"
  },
  {
    "url": "/_nuxt/9d848e59a68fc50bbba5.js",
    "revision": "6051cb44f215844d05fa9f0d557d7dbf"
  },
  {
    "url": "/_nuxt/d3808db419eb8f946ead.js",
    "revision": "2aa19c83ed1628501f5d87d7b5eea3f7"
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





