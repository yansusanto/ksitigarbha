/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1/index.html",
    "revision": "0f9675029c8b3dfeae83f7a7859d8037"
  },
  {
    "url": "404.html",
    "revision": "ec272885aa667e2d39f8a98c3d271fc7"
  },
  {
    "url": "about/index.html",
    "revision": "29633b01eb453faccc62ac7a940589b2"
  },
  {
    "url": "admin/index.html",
    "revision": "abb91284516deea0054927b4d764c41e"
  },
  {
    "url": "admin/preview-templates/single/index.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "contact/index.html",
    "revision": "fb12baf7d8de3c7161c6723d1a8c65b0"
  },
  {
    "url": "css/styles.css",
    "revision": "cf19953121a64bbd20c5a7668e9658dc"
  },
  {
    "url": "feed/feed.json",
    "revision": "ea162f01f9fb57b40ea2e15020734388"
  },
  {
    "url": "img/android-chrome-192x192.png",
    "revision": "b3b8e62280097ce126b2fe11da72fc92"
  },
  {
    "url": "img/android-chrome-512x512.png",
    "revision": "ccbf4760578f0dafe4f6e440cd55a3c9"
  },
  {
    "url": "img/apple-touch-icon.png",
    "revision": "ccbf4760578f0dafe4f6e440cd55a3c9"
  },
  {
    "url": "img/check.svg",
    "revision": "55db4706c9f64feb7f80a5d830d1713e"
  },
  {
    "url": "img/delete.svg",
    "revision": "3b9e4ac5fa1703f7b1311bde186967a4"
  },
  {
    "url": "img/favicon.svg",
    "revision": "042f75704fb99c4dc228eafd7b042aa7"
  },
  {
    "url": "img/safari-pinned-tab.svg",
    "revision": "d6ff42ca110f3b52c38df1fd0f540a1b"
  },
  {
    "url": "index.html",
    "revision": "7e4aea10e071f36770c18e693aa5b500"
  },
  {
    "url": "manifest.json",
    "revision": "27586046bc2dab88263a74943a74998d"
  },
  {
    "url": "posts/2021/02/finally-settled-with-11ty/index.html",
    "revision": "e4a3060ffc8251e83d7ab1ef2ef5a34c"
  },
  {
    "url": "posts/2021/03/test/index.html",
    "revision": "dc0c5228a327aa759a9f9937bdebe845"
  },
  {
    "url": "posts/finally-settled-with-11ty/index.html",
    "revision": "aa4f8c8e74fb6be7ad5aee549255f54a"
  },
  {
    "url": "posts/index.html",
    "revision": "74c1bf2b7ff1ad7946f5a8e9f8e9a726"
  },
  {
    "url": "sutra/1/index.html",
    "revision": "74501e0e61bea48bed65873259f40f77"
  },
  {
    "url": "sutra/chapter-1/index.html",
    "revision": "379b9001bda4c22c567dd08d8efad05a"
  },
  {
    "url": "sutra/chapter-10/index.html",
    "revision": "0856b66fc45173b5a8334765a48dad3c"
  },
  {
    "url": "sutra/chapter-11/index.html",
    "revision": "eba655551859f094dda839c44ede6741"
  },
  {
    "url": "sutra/chapter-12/index.html",
    "revision": "4eb78d52c3bb72f981337ac34271497c"
  },
  {
    "url": "sutra/chapter-13/index.html",
    "revision": "44372eab6364b728dab4e9fd64e77dc3"
  },
  {
    "url": "sutra/chapter-2/index.html",
    "revision": "6c73ddae2ddfd075623fe6e73b016f56"
  },
  {
    "url": "sutra/chapter-3/index.html",
    "revision": "cfbeeba020da19a4f1b62169b671d1a6"
  },
  {
    "url": "sutra/chapter-4/index.html",
    "revision": "7f6869dfb69eb5ec85672fd59011d04c"
  },
  {
    "url": "sutra/chapter-5/index.html",
    "revision": "447a0b9009f8272577ac18d8afe529df"
  },
  {
    "url": "sutra/chapter-6/index.html",
    "revision": "4b864df9cd4dbd7225cc21142073b7e5"
  },
  {
    "url": "sutra/chapter-7/index.html",
    "revision": "e52860319651f0ff77f4cddec4ae93c5"
  },
  {
    "url": "sutra/chapter-8/index.html",
    "revision": "d10001ce5072193690cb488a42dd042f"
  },
  {
    "url": "sutra/chapter-9/index.html",
    "revision": "2812214dabf380c28b78d00918bbebe8"
  },
  {
    "url": "sutra/index.html",
    "revision": "9f1cfecc4f1c81ff929558b5abd8c053"
  },
  {
    "url": "tags/11ty/index.html",
    "revision": "984f8f5b4b4091e0df0b8e5d8eb4f208"
  },
  {
    "url": "tags/all/index.html",
    "revision": "24cae8a8939550654aa2b85f28f1c103"
  },
  {
    "url": "tags/college/index.html",
    "revision": "78986cb73a458d535bc8cee2290c41dc"
  },
  {
    "url": "tags/fafsa/index.html",
    "revision": "a8dc25d2fdc4415c4aef616c8c2e32f9"
  },
  {
    "url": "tags/grant/index.html",
    "revision": "9bdf7ce47c0809d471a081ff825d2a27"
  },
  {
    "url": "tags/Graphic Design/index.html",
    "revision": "a383f508485013e1af8d8a4fe79b1f8c"
  },
  {
    "url": "tags/index.html",
    "revision": "8d9edd61556e11aeae9d08680139ede7"
  },
  {
    "url": "tags/loan/index.html",
    "revision": "e7dd0fed34f7b54dfcd04e853a7d8125"
  },
  {
    "url": "tags/SSG/index.html",
    "revision": "e06e8eb07fdda4a994596575d1b0121d"
  },
  {
    "url": "tags/state/index.html",
    "revision": "d4c944bd08b14dcb62572b694ae43a3c"
  },
  {
    "url": "tags/sutra/index.html",
    "revision": "883ab97e48fabb72a79d5362a05ff17c"
  },
  {
    "url": "tags/tagList/index.html",
    "revision": "a1196c79468a345be307b609aa5589d2"
  },
  {
    "url": "tags/web design/index.html",
    "revision": "4703e8d3d061a0fd11bb45266952cbde"
  },
  {
    "url": "tags/Web Development/index.html",
    "revision": "dc15927f54e940b28714a2a92bf16631"
  },
  {
    "url": "tags/WordPress/index.html",
    "revision": "828bd67d8a31c5beb1d23dd602b9c794"
  },
  {
    "url": "thankyou/index.html",
    "revision": "ba4d68614ec0606fb97866eb7538658b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
