if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const l=e=>s(e,r),d={module:{uri:r},exports:o,require:l};i[r]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(a(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-2uUKPg4s.js",revision:null},{url:"assets/index-5b_ySe0Z.js",revision:null},{url:"assets/index-8_SvRy6y.js",revision:null},{url:"assets/index-a7Xdifc1.js",revision:null},{url:"assets/index-B3uvyhUq.js",revision:null},{url:"assets/index-B7uYHJzT.js",revision:null},{url:"assets/index-B8JnePyj.js",revision:null},{url:"assets/index-B8pSjc75.js",revision:null},{url:"assets/index-BCWEcfuC.js",revision:null},{url:"assets/index-BFAVP6Bc.js",revision:null},{url:"assets/index-BJA1lzSY.js",revision:null},{url:"assets/index-bK_2d3fU.js",revision:null},{url:"assets/index-BkcXUf1W.js",revision:null},{url:"assets/index-BldMKlGk.js",revision:null},{url:"assets/index-BLy9h79G.js",revision:null},{url:"assets/index-BPEgRLa2.js",revision:null},{url:"assets/index-BTulnl-N.js",revision:null},{url:"assets/index-BuqqHCAd.js",revision:null},{url:"assets/index-Bvoh09Ik.js",revision:null},{url:"assets/index-BxVvxG97.js",revision:null},{url:"assets/index-C6ZoJ6O9.js",revision:null},{url:"assets/index-C897BdhE.js",revision:null},{url:"assets/index-CDh7UHHs.js",revision:null},{url:"assets/index-CDmkJtH1.js",revision:null},{url:"assets/index-ChIUZ7bX.js",revision:null},{url:"assets/index-CjnwZkc5.js",revision:null},{url:"assets/index-CLeSBU4C.js",revision:null},{url:"assets/index-Cm7fRRFS.js",revision:null},{url:"assets/index-CMJkeMMZ.js",revision:null},{url:"assets/index-Cngx3b9Z.js",revision:null},{url:"assets/index-CR7QjcsH.js",revision:null},{url:"assets/index-Cum6IyYc.js",revision:null},{url:"assets/index-Cx1MXY2m.js",revision:null},{url:"assets/index-Cz-0x6Vo.js",revision:null},{url:"assets/index-D4jTK89j.js",revision:null},{url:"assets/index-D5b0K67a.js",revision:null},{url:"assets/index-DeX0srEg.js",revision:null},{url:"assets/index-Dex6NThS.js",revision:null},{url:"assets/index-DqApO1m6.js",revision:null},{url:"assets/index-DqkHwDkL.js",revision:null},{url:"assets/index-DsIOx9NU.js",revision:null},{url:"assets/index-Dtq-WeaW.js",revision:null},{url:"assets/index-DwmOrsgj.js",revision:null},{url:"assets/index-DxK696Tx.js",revision:null},{url:"assets/index-DYpt2dmE.css",revision:null},{url:"assets/index-FNG5m6Ge.js",revision:null},{url:"assets/index-hJ_Dd_bq.js",revision:null},{url:"assets/index-j7oniL3h.js",revision:null},{url:"assets/index-KWRLSt2j.js",revision:null},{url:"assets/index-xiAFyyyF.css",revision:null},{url:"assets/index-YkI8Czhy.js",revision:null},{url:"assets/index-zAZKQydR.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"25996358d7aa1c3e070c25ab6b1a20bb"},{url:"registerSW.js",revision:"59869ecebc277f322cd218c5461487e5"},{url:"themes/original.css",revision:"2e34361d6e8f77bc67a5febadbc65f62"},{url:"icon.png",revision:"4f75d59de0bd513b433ebbdd19c6a5b6"},{url:"fonts/Recursive_VF_1.085--subset_range_english_basic.woff2",revision:"c141559233a2457cc2182725005c654e"},{url:"fonts/Recursive_VF_1.085--subset_range_latin_1_punc.woff2",revision:"928da0f8afae6068afe64faa8a6d358c"},{url:"fonts/Recursive_VF_1.085--subset_range_remaining.woff2",revision:"ed6b97642b6cbb5986073aa0e97197a9"},{url:"fonts/Recursive_VF_1.085--subset_range_latin_1.woff2",revision:"c2f4de09e1eb6791521e2d8f56b9f4ee"},{url:"fonts/Recursive_VF_1.085--subset_range_latin_ext.woff2",revision:"87c93d85adeb34846d972f1387429f85"},{url:"fonts/Recursive_VF_1.085--subset_range_vietnamese.woff2",revision:"7297d269302adffa48d0c90f2f0fdc04"},{url:"windows11/SmallTile.scale-100.png",revision:"7ab2d453b99731667eb09e0042bd52c2"},{url:"windows11/SmallTile.scale-125.png",revision:"0a6c3f132cd04611e8dfcfebabf6de96"},{url:"windows11/SmallTile.scale-150.png",revision:"1f8e9169cb7e580aa1c80945db79f810"},{url:"windows11/SmallTile.scale-200.png",revision:"abd6b23a0f00d27f1d4ee44dad7efa7b"},{url:"windows11/SmallTile.scale-400.png",revision:"10dad4e3e9d0dffe8268d02b049944f1"},{url:"windows11/Square150x150Logo.scale-100.png",revision:"a2b83833e106e7b49fbb1c9ea367b69e"},{url:"windows11/Square150x150Logo.scale-125.png",revision:"1684a0d24f2bdb6e093bce40a6b93bae"},{url:"windows11/Square150x150Logo.scale-150.png",revision:"01319912dc63b33bd460befa4d2a9532"},{url:"windows11/Square150x150Logo.scale-200.png",revision:"b3f81503f8b621b96854cf45d36e9a6e"},{url:"windows11/Square150x150Logo.scale-400.png",revision:"19c856b07f245b010096e34a7b6c9f79"},{url:"windows11/Wide310x150Logo.scale-100.png",revision:"0f402d7902db7feb9c6aca1c568d30bc"},{url:"windows11/Wide310x150Logo.scale-125.png",revision:"0add7fe8d77b5072ec8e8f3f310b5a02"},{url:"windows11/Wide310x150Logo.scale-150.png",revision:"7e94d5c122c7ddb0c54a60507a38c1e3"},{url:"windows11/Wide310x150Logo.scale-200.png",revision:"4fdad31835e2a71095ec8993549adfce"},{url:"windows11/Wide310x150Logo.scale-400.png",revision:"a51473eca8ca827f52a5e649266d029f"},{url:"windows11/LargeTile.scale-100.png",revision:"df6d73761d8f271127de2a6e1f4aca50"},{url:"windows11/LargeTile.scale-125.png",revision:"661f2c0928c2c5a4686c61ff4bdcf505"},{url:"windows11/LargeTile.scale-150.png",revision:"6b2bfee67cdf4c6273cf70465d1885ca"},{url:"windows11/LargeTile.scale-200.png",revision:"1e2efecffcfe84c1e99486ba475900b8"},{url:"windows11/LargeTile.scale-400.png",revision:"b64181752a1ca4ccd52f82f290337034"},{url:"windows11/Square44x44Logo.scale-100.png",revision:"2b20113c727959415a60ba2d8df0bbb6"},{url:"windows11/Square44x44Logo.scale-125.png",revision:"8d1dfb6b59b8bc74a85f616edaf78fd2"},{url:"windows11/Square44x44Logo.scale-150.png",revision:"bc6af3ac28fcb6417107bbc106b6fc9e"},{url:"windows11/Square44x44Logo.scale-200.png",revision:"274c65bdf37f7432609b870ea12df727"},{url:"windows11/Square44x44Logo.scale-400.png",revision:"38b5357dd2940a8ac45925b98f9a3299"},{url:"windows11/StoreLogo.scale-100.png",revision:"0841843d86defc77bd65878d5891309e"},{url:"windows11/StoreLogo.scale-125.png",revision:"87e83af4f5940cf9693f21f4d0e4daa5"},{url:"windows11/StoreLogo.scale-150.png",revision:"8ca7ab7050f601b15e58c8cbd785a104"},{url:"windows11/StoreLogo.scale-200.png",revision:"7a816c612f497125d7ea65ff30a8ae86"},{url:"windows11/StoreLogo.scale-400.png",revision:"a315cee4791a69d47291a2985fce6016"},{url:"windows11/SplashScreen.scale-100.png",revision:"4fdad31835e2a71095ec8993549adfce"},{url:"windows11/SplashScreen.scale-125.png",revision:"8d79f71c003fba18dec5d38176091cc1"},{url:"windows11/SplashScreen.scale-150.png",revision:"77d43bba973db5efe62afe40efc35a52"},{url:"windows11/SplashScreen.scale-200.png",revision:"a51473eca8ca827f52a5e649266d029f"},{url:"windows11/SplashScreen.scale-400.png",revision:"5998c5dec2b4115823961bfe4af248bf"},{url:"windows11/Square44x44Logo.targetsize-16.png",revision:"2d1ba23610c2eb558388a9a38b552a25"},{url:"windows11/Square44x44Logo.targetsize-20.png",revision:"89da35f507b2793a488f3a2d5f599511"},{url:"windows11/Square44x44Logo.targetsize-24.png",revision:"7dcd12f9a478de8ae0438a4fcb27f5fe"},{url:"windows11/Square44x44Logo.targetsize-30.png",revision:"3db8102ad802561b0f63cf38d13efc86"},{url:"windows11/Square44x44Logo.targetsize-32.png",revision:"3659e516b5d1497df55934603c38b351"},{url:"windows11/Square44x44Logo.targetsize-36.png",revision:"5186017528bc9f4b0ae49c546dbf7e6d"},{url:"windows11/Square44x44Logo.targetsize-40.png",revision:"0c650170fceeba5aca580440afe0721e"},{url:"windows11/Square44x44Logo.targetsize-44.png",revision:"2b20113c727959415a60ba2d8df0bbb6"},{url:"windows11/Square44x44Logo.targetsize-48.png",revision:"b58ec92b513102206a501179e6ffc402"},{url:"windows11/Square44x44Logo.targetsize-60.png",revision:"72aa1f54f520af95623c64e648d1a9f1"},{url:"windows11/Square44x44Logo.targetsize-64.png",revision:"6a1e6660e48eaa4480b765a84af02694"},{url:"windows11/Square44x44Logo.targetsize-72.png",revision:"66aa87973e9fd9d27b347dc77a6b2090"},{url:"windows11/Square44x44Logo.targetsize-80.png",revision:"8c623fbf62f62dc39387fe102547cde3"},{url:"windows11/Square44x44Logo.targetsize-96.png",revision:"8281045a05e4223b8e25536573f0c17c"},{url:"windows11/Square44x44Logo.targetsize-256.png",revision:"9e83402932e505f5a0ccbfc0b229f806"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"2d1ba23610c2eb558388a9a38b552a25"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"89da35f507b2793a488f3a2d5f599511"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"7dcd12f9a478de8ae0438a4fcb27f5fe"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"3db8102ad802561b0f63cf38d13efc86"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"3659e516b5d1497df55934603c38b351"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"5186017528bc9f4b0ae49c546dbf7e6d"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"0c650170fceeba5aca580440afe0721e"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"2b20113c727959415a60ba2d8df0bbb6"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"b58ec92b513102206a501179e6ffc402"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"72aa1f54f520af95623c64e648d1a9f1"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"6a1e6660e48eaa4480b765a84af02694"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"66aa87973e9fd9d27b347dc77a6b2090"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"8c623fbf62f62dc39387fe102547cde3"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"8281045a05e4223b8e25536573f0c17c"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"9e83402932e505f5a0ccbfc0b229f806"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"2d1ba23610c2eb558388a9a38b552a25"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"89da35f507b2793a488f3a2d5f599511"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"7dcd12f9a478de8ae0438a4fcb27f5fe"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"3db8102ad802561b0f63cf38d13efc86"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"3659e516b5d1497df55934603c38b351"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"5186017528bc9f4b0ae49c546dbf7e6d"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"0c650170fceeba5aca580440afe0721e"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"2b20113c727959415a60ba2d8df0bbb6"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"b58ec92b513102206a501179e6ffc402"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"72aa1f54f520af95623c64e648d1a9f1"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"6a1e6660e48eaa4480b765a84af02694"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"66aa87973e9fd9d27b347dc77a6b2090"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"8c623fbf62f62dc39387fe102547cde3"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"8281045a05e4223b8e25536573f0c17c"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"9e83402932e505f5a0ccbfc0b229f806"},{url:"android/android-launchericon-512-512.png",revision:"19c7daade4675bf2a13598ee11bddcc5"},{url:"android/android-launchericon-192-192.png",revision:"11413dfc4311d3e3a50417b42029a092"},{url:"android/android-launchericon-144-144.png",revision:"d476df386e827c2ea243d6de17298212"},{url:"android/android-launchericon-96-96.png",revision:"d84590daf22ce5d6ad9b9d4202051206"},{url:"android/android-launchericon-72-72.png",revision:"1761f703f6183ace83c8dfc15154d118"},{url:"android/android-launchericon-48-48.png",revision:"5435fe862588a0b222ef5ea3dbf67d18"},{url:"ios/16.png",revision:"8ed70f383c54fa2d8d0338903f4cd17e"},{url:"ios/20.png",revision:"dddaa3ebef1349b3c87156a36311d031"},{url:"ios/29.png",revision:"9ef616a95ebdeb8ed43b36b1447c8e1e"},{url:"ios/32.png",revision:"00cac43127214f4b0cbaf18cb81d1d4f"},{url:"ios/40.png",revision:"c2f9deb6c53358c247be80ab15cc0d93"},{url:"ios/50.png",revision:"0841843d86defc77bd65878d5891309e"},{url:"ios/57.png",revision:"ab07139891874a28c1a38061af110277"},{url:"ios/58.png",revision:"aee1324cc4bdc6982cbbfd479743eaa1"},{url:"ios/60.png",revision:"8fce508f1340f00d49697757f18b5ebf"},{url:"ios/64.png",revision:"976e6015415dc9ec3a1f60d41f65900a"},{url:"ios/72.png",revision:"1761f703f6183ace83c8dfc15154d118"},{url:"ios/76.png",revision:"f2262779188c4fd8aa118ca63f1cd5de"},{url:"ios/80.png",revision:"4f8f0fea3a5f3da51eb167d66ee9947c"},{url:"ios/87.png",revision:"6d2fdbe055a357f73faa29e42a885776"},{url:"ios/100.png",revision:"7a816c612f497125d7ea65ff30a8ae86"},{url:"ios/114.png",revision:"464698419cb627529fe094beaae6d378"},{url:"ios/120.png",revision:"e27d88107f519407e58485220f7219ce"},{url:"ios/128.png",revision:"f767a434fb03e792f3718215c9c11cb6"},{url:"ios/144.png",revision:"d476df386e827c2ea243d6de17298212"},{url:"ios/152.png",revision:"f048ccd9b2b7edfdd47e0394d934c9c5"},{url:"ios/167.png",revision:"6b4c1113105fc4692e5158cb883a1c28"},{url:"ios/180.png",revision:"f9849806c4bc633cbadc84419d3f230c"},{url:"ios/192.png",revision:"11413dfc4311d3e3a50417b42029a092"},{url:"ios/256.png",revision:"5b0a37118645a008b502c9ced7b37693"},{url:"ios/512.png",revision:"19c7daade4675bf2a13598ee11bddcc5"},{url:"ios/1024.png",revision:"5107b17ad3a38594bc5ca26f87ac53e6"},{url:"manifest.webmanifest",revision:"d661682a0f3fc008ed8620f0f3a9c737"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
