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
    "revision": "137805ee3ae8c5547a67fadb311254c9"
  },
  {
    "url": "about/index.html",
    "revision": "524562af42491a3e87e34082de947007"
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
    "revision": "182c3d2fdd136fc3a365dd52f95107ac"
  },
  {
    "url": "css/styles.css",
    "revision": "ed8e113ee598058add027d7631055d66"
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
    "revision": "c01662d9059cd1c5e24de83f351bca58"
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
    "revision": "976e6ac10aec63422fffe03b625e5286"
  },
  {
    "url": "sutra/chapter-10/index.html",
    "revision": "2fe73c2d687d6b98206e97e2bfecd9b4"
  },
  {
    "url": "sutra/chapter-11/index.html",
    "revision": "caba8bfa498767b3f0e409ada236936e"
  },
  {
    "url": "sutra/chapter-12/index.html",
    "revision": "c9856a20722be4ab02f52ab273c1673c"
  },
  {
    "url": "sutra/chapter-13/index.html",
    "revision": "e763a824c1c1616d2e44cab68a1c3414"
  },
  {
    "url": "sutra/chapter-2/index.html",
    "revision": "ab4575cb96e260542049e4369312b7d4"
  },
  {
    "url": "sutra/chapter-3/index.html",
    "revision": "dc3378b5a68dd37f14707526b7e308aa"
  },
  {
    "url": "sutra/chapter-4/index.html",
    "revision": "44bbb1c4999829b6c9121f5bfa7b21b9"
  },
  {
    "url": "sutra/chapter-5/index.html",
    "revision": "9534f4564110228f21b2f241374fcd82"
  },
  {
    "url": "sutra/chapter-6/index.html",
    "revision": "f66cc85a03dab3e1e35965f8fc0d58ba"
  },
  {
    "url": "sutra/chapter-7/index.html",
    "revision": "fda55d50c2e414979ce8e893a8bbc097"
  },
  {
    "url": "sutra/chapter-8/index.html",
    "revision": "9d36b9425500667c8c21974a3b654ff0"
  },
  {
    "url": "sutra/chapter-9/index.html",
    "revision": "097195029a36b191fa52938cc540d808"
  },
  {
    "url": "sutra/index.html",
    "revision": "19e19e0197c2bc91cf5282a33de5510e"
  },
  {
    "url": "tags/11ty/index.html",
    "revision": "984f8f5b4b4091e0df0b8e5d8eb4f208"
  },
  {
    "url": "tags/all/index.html",
    "revision": "d840e4b9b78643264befe3c015406dee"
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
    "revision": "510f68ac80e80c0e0ef91d010d5b8cd1"
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
    "revision": "c94be7a8a6d0bb24092d1bd3b99e5fae"
  },
  {
    "url": "tags/tagList/index.html",
    "revision": "02942cce15acfc8bd2fe6ccb9cd9a0fb"
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
    "revision": "06a0a884cb2969e2e7e9862831c499a3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
