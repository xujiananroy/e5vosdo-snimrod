if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let o={};const c=e=>i(e,r),d={module:{uri:r},exports:o,require:c};a[r]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(s(...e),o)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/AHG2x8eFvwn092RfhkWFu/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/AHG2x8eFvwn092RfhkWFu/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/221-74d7626fa8758a51.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/23-00bb053c49a7f38b.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/231-91c620372bd31bc6.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/249-22febf51bcb07004.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/49-f351c3b60b3bfc33.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/655-41a00e2c16fe02c4.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/706-2465a6e79d3749d8.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/app/_not-found/page-5672e1fa8a69dc09.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/app/about/layout-40a3845dbca7a6fe.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/app/about/page-97622838a42a8a24.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/app/clubs/layout-555744d7f5d11bfd.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/app/clubs/page-7f30606b604eb308.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/app/error-ddeec5844122f8f0.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/app/events/layout-ea2873f9488fbb18.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/app/events/page-8f86e91a02667d74.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/app/layout-4c4aca4eddb71388.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/app/not-found-a5a978d2f3a62c93.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/app/page-43f97e7878e91086.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/fd9d1056-554b4bb0118d396d.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/main-app-cebb34fedc91d7d5.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/main-d70d89f38606d2f8.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-24655b36fb772a89.js",revision:"AHG2x8eFvwn092RfhkWFu"},{url:"/_next/static/css/016b615099d15017.css",revision:"016b615099d15017"},{url:"/_next/static/css/11aad1ad512948af.css",revision:"11aad1ad512948af"},{url:"/_next/static/css/460639610a2e7d35.css",revision:"460639610a2e7d35"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/122c360d7fe6d395-s.p.woff2",revision:"9b2795fb691d8f8a83312a4436f5a453"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/9bbb7f84f3601865-s.woff2",revision:"d8134b7ae9ca2232a397ef9afa6c8d30"},{url:"/_next/static/media/9f05b6a2725a7318-s.woff2",revision:"afbfd524bdefea1003f0ee71b617e50e"},{url:"/_next/static/media/a8eac78432f0a60b-s.woff2",revision:"be605f007472cc947fe6b6bb493228a5"},{url:"/_next/static/media/c740c1d45290834f-s.woff2",revision:"bff99a4bbc4740c49b75b52f290be90e"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d0697bdd3fb49a78-s.woff2",revision:"50b29fea20cba8e522c34a1413592253"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/android/android-launchericon-144-144.png",revision:"4f3675c1d17a21e7281f59eab3c3316f"},{url:"/android/android-launchericon-192-192.png",revision:"b1431191e31ef37fcd92a07043124e71"},{url:"/android/android-launchericon-48-48.png",revision:"cb65fb63521b8bf57cd21cc15b4795f3"},{url:"/android/android-launchericon-512-512.png",revision:"32257bf316d03029dfc69e475ea8c5f9"},{url:"/android/android-launchericon-72-72.png",revision:"9b49b2a9f92861eea9f753cd3bd1fad2"},{url:"/android/android-launchericon-96-96.png",revision:"811442480c96cf5ee1a395a1e44ec074"},{url:"/apa-logo.jpg",revision:"4b75b4eb51571f667c2b6dd7ff8575b4"},{url:"/apa.jpg",revision:"04f72f6d642e0e7be5d836a1a4c27a1d"},{url:"/do5.svg",revision:"1e6e27b85c7eb7570734842fdeda608e"},{url:"/events/disztomeg.jpg",revision:"9270f8dbc7861ae2708fee2bcc4c9203"},{url:"/events/evnyito.jpg",revision:"b792d798ca4e2500514a063785cad559"},{url:"/events/hadik.jpg",revision:"6164407748167f470ce55fcc5d7b5acf"},{url:"/events/junglebook.jpg",revision:"87734d9ff48b4a3034b2679fbccd36dd"},{url:"/events/kekpelikan.jpg",revision:"2ed6b330ce19cfca6848a0978295db47"},{url:"/events/koncert.jpg",revision:"085426e8188e17c79d0e9503fc97d7cf"},{url:"/events/pedagogusnap.png",revision:"7fbe96f6af86028181f56d294122ad5b"},{url:"/events/ropi.jpg",revision:"9db2bcafdb7095950e1aeef13eacd967"},{url:"/events/ropi2.jpg",revision:"4d24ccbf00e2250b523a05dc5a2f2604"},{url:"/events/semmelweis.jpeg",revision:"3c770f2bfeff34a0d124e18ea160799c"},{url:"/favico.ico",revision:"ed284aea0ce680cd92a2c1179df2de9c"},{url:"/favicon-16x16.ico",revision:"ed284aea0ce680cd92a2c1179df2de9c"},{url:"/favicon.ico",revision:"ed284aea0ce680cd92a2c1179df2de9c"},{url:"/foci.json",revision:"dfe6758e08c579846d453ee8486a8198"},{url:"/googlee5efcd66eeb02083.html",revision:"076a55f86e49b19281e907715d1a3bb0"},{url:"/groups/bimun.jpg",revision:"9ba54cf887056b60cdf3d4d32157e879"},{url:"/groups/debate.png",revision:"b926671cab21fff3172df5fd6f67214f"},{url:"/groups/diak.jpg",revision:"c78c7b78f263303c2d682b58dfaaf7f3"},{url:"/groups/eam.png",revision:"63f7d1e739c2519eff4c5e07e14afb3f"},{url:"/groups/elsosegely.jpg",revision:"8288a479bd24766ac23f1ed6774ff0b2"},{url:"/groups/kektura.jpg",revision:"e812fba1d90dda28b1d60a840c71719e"},{url:"/groups/kosar.jpg",revision:"d980ec3d25d2e8a6932b390defee5b32"},{url:"/groups/media.jpg",revision:"cb12ee5934d37ba7fb63cc18ed9d6c5f"},{url:"/groups/munclub.png",revision:"26757b8c9df40125f1f768154ee11820"},{url:"/groups/nekunkx.png",revision:"9c442b2c3d3ef303ecb858c0c808d549"},{url:"/groups/old/debate.jpg",revision:"fe3439d7d8b004a02564dfe03431380b"},{url:"/groups/old/eam.jpg",revision:"ee18c38f393a664155bf027c50101038"},{url:"/groups/old/munclub.jpg",revision:"1fa6a4802c6d708c1d9fc055d01c234b"},{url:"/groups/old/nekunkx.jpg",revision:"826c2a1605ad855f51ca0e74e36021ad"},{url:"/groups/old/suliradio.jpg",revision:"3f5bf2d2f51028ccf9f43027b18b9db2"},{url:"/groups/sakk.png",revision:"4b1d8273861e06dda0e0e8fe11a288d3"},{url:"/groups/suliradio.png",revision:"6226e342d1cbcfbfdfadf36a0afdefa3"},{url:"/groups/szinjatszo.png",revision:"a7003ba36dcc997df8616ee64a05c409"},{url:"/groups/tarsastar.jpg",revision:"c36a977060cd12b88f8a1651b56798ef"},{url:"/groups/technikusi.png",revision:"977f6ed077230f7fef9e069ba003952c"},{url:"/groups/techteam.jpg",revision:"7a176a3c42d95742bb073e3b17117bf7"},{url:"/groups/zoldbiz.png",revision:"5cf4cc264201d773e7b163533fe6ddf9"},{url:"/icons.json",revision:"5dbbc3fe59816e65ba28e355a58ea45c"},{url:"/ios/100.png",revision:"c492f77bf207439add279c3fbfaaee42"},{url:"/ios/1024.png",revision:"bd97c0da9028a23ef31277e2c1cea3b3"},{url:"/ios/114.png",revision:"b5545d30db224f898eaabc7792f1e909"},{url:"/ios/120.png",revision:"27987646b3fde5b9f4c142d37b3088d9"},{url:"/ios/128.png",revision:"f79c48bf6e3b98d9d83ee17cc6662237"},{url:"/ios/144.png",revision:"4f3675c1d17a21e7281f59eab3c3316f"},{url:"/ios/152.png",revision:"e5605301608cd3bf158d416809a32ee4"},{url:"/ios/16.png",revision:"6283fcad7289a9f8dc3499e70e64dc4c"},{url:"/ios/167.png",revision:"519a1ebbe3a1f1978c5a1f76d7bcad1b"},{url:"/ios/180.png",revision:"3323e3f6245042f262c48ffb225af937"},{url:"/ios/192.png",revision:"b1431191e31ef37fcd92a07043124e71"},{url:"/ios/20.png",revision:"9b655735dd0cd501804bf1902eaff0a9"},{url:"/ios/256.png",revision:"829897665f1b1b9a3c646f42b7ac1aa0"},{url:"/ios/29.png",revision:"574efcb378179e4c1b03c95b10a08272"},{url:"/ios/32.png",revision:"cd9f8c688a849bab9e24b358509ff210"},{url:"/ios/40.png",revision:"747e3122a9db3815a00e330ac87cb6dc"},{url:"/ios/50.png",revision:"bca4fc8920dc3fa21d6a555cf46502e5"},{url:"/ios/512.png",revision:"32257bf316d03029dfc69e475ea8c5f9"},{url:"/ios/57.png",revision:"6b508da9ed53c80cb738c3c6b5ce5a0e"},{url:"/ios/58.png",revision:"7ab5d6b2e47ef5836585d10d53db86ce"},{url:"/ios/60.png",revision:"6eacb1a70ce6a5f6bd5acf4eddf1c718"},{url:"/ios/64.png",revision:"d97c9bed3288cb3787b33dbfe0e7bdfc"},{url:"/ios/72.png",revision:"9b49b2a9f92861eea9f753cd3bd1fad2"},{url:"/ios/76.png",revision:"aec4ee5a1f78eee6adaae1bbc9075194"},{url:"/ios/80.png",revision:"059e67016a5d9d32cc078cd4b05d1049"},{url:"/ios/87.png",revision:"bf62601279d06ff641f21496293011d0"},{url:"/manifest.json",revision:"1ff2abfde94fa5145a6e82536bb373c0"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/opinion.png",revision:"4cd5f03c0e9cfb37c6c6504a578d29a8"},{url:"/opinion1.png",revision:"23ddcf4b2eba55c20b24f8446feeb980"},{url:"/storage/mindenkorimenu.json",revision:"356db77ab2edbbb798121b3c3eedcff5"},{url:"/storage/roomchanges.json",revision:"a9d71abf99109d58e9fb018e89acbab7"},{url:"/vercel.svg",revision:"e96b1f480f8bc5a3fe2149b82b6c0c98"},{url:"/windows11/LargeTile.scale-100.png",revision:"5586a7d2fef9ac13ebc2be7b30932c7e"},{url:"/windows11/LargeTile.scale-125.png",revision:"41fc55112f4a512ec7b09774c219d966"},{url:"/windows11/LargeTile.scale-150.png",revision:"ec44da86cdcd5f88ac91f2e2a34e3a25"},{url:"/windows11/LargeTile.scale-200.png",revision:"b715717faac5df39399a0a63e1c1b1b5"},{url:"/windows11/LargeTile.scale-400.png",revision:"d0990bd3550b0b945b4391f8e98515c8"},{url:"/windows11/SmallTile.scale-100.png",revision:"c6d461c922fabc38078a9783aa8c06ab"},{url:"/windows11/SmallTile.scale-125.png",revision:"887dab248a3cf0f178ede117b7a1970b"},{url:"/windows11/SmallTile.scale-150.png",revision:"f694e5fa32701165d03b5733ca498e7f"},{url:"/windows11/SmallTile.scale-200.png",revision:"9d43088222f764e216c433a75b0de920"},{url:"/windows11/SmallTile.scale-400.png",revision:"5b0739751c9246548fe6ffdf81a492d9"},{url:"/windows11/SplashScreen.scale-100.png",revision:"a97ed3c25f3dc9ccada7f62e2eb6282d"},{url:"/windows11/SplashScreen.scale-125.png",revision:"e50eb50af253ea569a1fd7e72b687525"},{url:"/windows11/SplashScreen.scale-150.png",revision:"f420b2190b7e3296dc3a64fffb15cea5"},{url:"/windows11/SplashScreen.scale-200.png",revision:"fb1826d4534713d767af42bb6903cce6"},{url:"/windows11/SplashScreen.scale-400.png",revision:"c075010679752cef7aead42145b4082e"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"6e8fe9eb628f33952a0ea682382d1257"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"6b421af592a38db50edd74c274594eec"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"9208811f772506259b764fb12e664a56"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"69a4c236f2b8121f1af6b115f46401bc"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"f5e64f0c5abd2541f802af1ab97fed1d"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"38a67784c962127aa65e2e81f57d895e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"b94db854d8396e21ee3d16eb06d09b8c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"f1f64eef9ad19850d8580936e4f19044"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"d96560cdd6f08c0988b835e6fc637500"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"dc3975c68db40cac048980f3fca7c1bd"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"cda3440a7f43b299640920725afe171e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"d8f46d5d9eae1afb617d9965dfa95bf3"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"8d1e25292c407ceff2bea674cc80193f"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"3a8af90368fa7231bd2a51997b7a9f97"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"cdc6dcaa7c1c8609465feb8edc0fc236"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"06f814ad1e43604f5a1e8e1cee8342e4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"3c45b91ae043922a4aa9ea0afa5cbe77"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"ae70a59c5badf1c65100c037200ee0f6"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"db405a6c8a45ab68ac5c4b1a6a1feabf"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"b458ac2c1f135333e8bcd6be7409fecd"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"38a67784c962127aa65e2e81f57d895e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"b94db854d8396e21ee3d16eb06d09b8c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"f1f64eef9ad19850d8580936e4f19044"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"d96560cdd6f08c0988b835e6fc637500"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"dc3975c68db40cac048980f3fca7c1bd"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"cda3440a7f43b299640920725afe171e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"d8f46d5d9eae1afb617d9965dfa95bf3"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"8d1e25292c407ceff2bea674cc80193f"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"3a8af90368fa7231bd2a51997b7a9f97"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"cdc6dcaa7c1c8609465feb8edc0fc236"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"06f814ad1e43604f5a1e8e1cee8342e4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"3c45b91ae043922a4aa9ea0afa5cbe77"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"ae70a59c5badf1c65100c037200ee0f6"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"db405a6c8a45ab68ac5c4b1a6a1feabf"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"b458ac2c1f135333e8bcd6be7409fecd"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"3a8af90368fa7231bd2a51997b7a9f97"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"cea585a45c38c923d5baeccf23bd13bc"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"f7b1eedfc6b92fb7d9b1c61d328f2691"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"f8f1875472b83eae8ffd58e4c0a89ceb"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"f50df0bf2dbac7cc197b3d0138d6ed82"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"38a67784c962127aa65e2e81f57d895e"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"b94db854d8396e21ee3d16eb06d09b8c"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"f1f64eef9ad19850d8580936e4f19044"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"d96560cdd6f08c0988b835e6fc637500"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"dc3975c68db40cac048980f3fca7c1bd"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"cda3440a7f43b299640920725afe171e"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"d8f46d5d9eae1afb617d9965dfa95bf3"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"8d1e25292c407ceff2bea674cc80193f"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"3a8af90368fa7231bd2a51997b7a9f97"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"cdc6dcaa7c1c8609465feb8edc0fc236"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"06f814ad1e43604f5a1e8e1cee8342e4"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"3c45b91ae043922a4aa9ea0afa5cbe77"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"ae70a59c5badf1c65100c037200ee0f6"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"db405a6c8a45ab68ac5c4b1a6a1feabf"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"b458ac2c1f135333e8bcd6be7409fecd"},{url:"/windows11/StoreLogo.scale-100.png",revision:"bca4fc8920dc3fa21d6a555cf46502e5"},{url:"/windows11/StoreLogo.scale-125.png",revision:"cb962140f56450e88f692d81efcec516"},{url:"/windows11/StoreLogo.scale-150.png",revision:"585b0e1c1e4756eb52e5f5009793a2ac"},{url:"/windows11/StoreLogo.scale-200.png",revision:"c492f77bf207439add279c3fbfaaee42"},{url:"/windows11/StoreLogo.scale-400.png",revision:"19bd8cf5cec4946c423009d1e141985f"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"ac48b670288942d0e0f975c640fa38fd"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"2553c5b019a0e939eb45d796bb8bfbf2"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"affc641a73f7278647f98fc1d80627bc"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"a97ed3c25f3dc9ccada7f62e2eb6282d"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"fb1826d4534713d767af42bb6903cce6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
