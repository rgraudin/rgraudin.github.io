if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>r(e,o),u={module:{uri:o},exports:l,require:c};s[o]=Promise.all(n.map((e=>u[e]||c(e)))).then((e=>(i(...e),l)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"geoguess"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/640.4db0bc5e.css",revision:null},{url:"/css/973.cf186a12.css",revision:null},{url:"/css/app.7bc8aeec.css",revision:null},{url:"/css/chunk-vendors.7985fabc.css",revision:null},{url:"/img/fileIcons/geojson.png",revision:"52a07860cd40e3050e7a7366c28515e2"},{url:"/img/fileIcons/geosave.png",revision:"d0043c26b3964b3d4e32b0b6889e27bc"},{url:"/img/geoguessLogo.5e07002f.png",revision:null},{url:"/img/traveller.00995c8f.svg",revision:null},{url:"/img/world-dark.ad6d1846.svg",revision:null},{url:"/img/world.eea79b35.svg",revision:null},{url:"/index.html",revision:"ff207a2b8c2a218e059dddb5bf91f0a6"},{url:"/js/640.d3aab6c6.js",revision:null},{url:"/js/973.0e87ece5.js",revision:null},{url:"/js/app.4736d111.js",revision:null},{url:"/js/chunk-vendors.a41a5f92.js",revision:null},{url:"/manifest.json",revision:"d0a8f372f43b6ffdc9f61d4a1605d471"},{url:"/robots.txt",revision:"6c0c0b02c59a0e5b43917105fbeae507"},{url:"/screenshots/screenshot_game.png",revision:"9fcfbe8115afce4395fca5184c9ac522"},{url:"/screenshots/screenshot_game2.png",revision:"8e1fd3049b4edb79ee183be27c2d16be"},{url:"/screenshots/screenshot_score.png",revision:"c0164f2976a46e6ad35614baf3fd8a91"}],{})}));
//# sourceMappingURL=service-worker.js.map
