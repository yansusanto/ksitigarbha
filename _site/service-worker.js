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
    "revision": "81a0d28473de94c5bf8d3aec99f23383"
  },
  {
    "url": "about/index.html",
    "revision": "9ca227bbd7664b17c853a94bcad917db"
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
    "revision": "dc64e732565c45d7ef457c136329674b"
  },
  {
    "url": "css/styles.css",
    "revision": "aa894c3c154dea5fbb789c8b772e5d47"
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
    "revision": "3de23357dfe5eabd6827dcc95545ecbe"
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
    "revision": "9d5b9215274dbb53d514c405f8da7d7c"
  },
  {
    "url": "sutra/chapter-10/index.html",
    "revision": "95672027b976a4078d05d1c03ed15fce"
  },
  {
    "url": "sutra/chapter-11/index.html",
    "revision": "0e84e6c28678b44aebcefdeb63c4373b"
  },
  {
    "url": "sutra/chapter-12/index.html",
    "revision": "b401cdf880a0802691efe8b108420db2"
  },
  {
    "url": "sutra/chapter-13/index.html",
    "revision": "c555763378a21fa788d8d2e84aba4a37"
  },
  {
    "url": "sutra/chapter-2/index.html",
    "revision": "8a3dc23826a325565eec3405dbea3684"
  },
  {
    "url": "sutra/chapter-3/index.html",
    "revision": "f399ef29fb07ef3ba35a542834702ff5"
  },
  {
    "url": "sutra/chapter-4/index.html",
    "revision": "99fe0f19742648c08a1717e3c7745c6d"
  },
  {
    "url": "sutra/chapter-5/index.html",
    "revision": "cbd90cec55aa5fabefd9fbae575064f5"
  },
  {
    "url": "sutra/chapter-6/index.html",
    "revision": "b13f375147b0f225083dca6b49ea2153"
  },
  {
    "url": "sutra/chapter-7/index.html",
    "revision": "1818a227dd825ed8739e0f89bfb6ce7c"
  },
  {
    "url": "sutra/chapter-8/index.html",
    "revision": "21f6fe94d6bf5cb6f4cbed2a9b983d25"
  },
  {
    "url": "sutra/chapter-9/index.html",
    "revision": "87638148bf5a73efbae904d97013dc98"
  },
  {
    "url": "sutra/index.html",
    "revision": "9d6409b9a21d582a4dc890a00854b5c9"
  },
  {
    "url": "tags/11ty/index.html",
    "revision": "984f8f5b4b4091e0df0b8e5d8eb4f208"
  },
  {
    "url": "tags/all/index.html",
    "revision": "4314052ba0e187231990b19f2a6ee3ab"
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
    "revision": "2fb0e46db11fbe19779a2b7209677138"
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
    "revision": "12d4b44208bb6776a064a1fdf0dcd93b"
  },
  {
    "url": "tags/tagList/index.html",
    "revision": "9acfbe686c94ae62633cf22fccc0d212"
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
    "revision": "2828d316b97a9dfcb107cf08ebd390b5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
