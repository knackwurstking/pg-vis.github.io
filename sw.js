if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>i(e,o),a={module:{uri:o},exports:l,require:t};s[o]=Promise.all(n.map((e=>a[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/html2canvas.esm-DtF4syFK.js",revision:null},{url:"assets/index-Bxk91j1G.js",revision:null},{url:"assets/index-yXg5QRvh.css",revision:null},{url:"assets/index.es-DJV8Nm4Y.js",revision:null},{url:"assets/purify.es-C_uT9hQ1.js",revision:null},{url:"assets/workbox-window.prod.es5-DL_hIMXg.js",revision:null},{url:"index.html",revision:"6b5007383c91c14a6a41b5cdbe2767c4"},{url:"CHANGELOG.md",revision:"2f671a5f9045a89c044ebbd14c432a11"},{url:"assets/icons/maskable-icon-512x512.png",revision:"5a5e4426cbae3a13bcb6322198f9554e"},{url:"assets/icons/pwa-192x192.png",revision:"1c64eabd3060eee60aef0bef3147b7e6"},{url:"assets/icons/pwa-512x512.png",revision:"5a5e4426cbae3a13bcb6322198f9554e"},{url:"assets/icons/pwa-64x64.png",revision:"71e23b5765bada059b7e19dca9f5d05b"},{url:"manifest.webmanifest",revision:"a41e36f283fd04c097c3eb218def3d9e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
