if(!self.define){let s,i={};const l=(l,c)=>(l=new URL(l+".js",c).href,i[l]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=i,document.head.appendChild(s)}else s=l,importScripts(l),i()})).then((()=>{let s=i[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(c,n)=>{const u=s||("document"in self?document.currentScript.src:"")||location.href;if(i[u])return;let r={};const t=s=>l(s,u),e={module:{uri:u},exports:r,require:t};i[u]=Promise.all(c.map((s=>e[s]||t(s)))).then((s=>(n(...s),r)))}}define(["./workbox-fe6ce349"],(function(s){"use strict";s.setCacheNameDetails({prefix:"admin-plus"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"index.html",revision:"aade9e160fc5e974a7bca6f1968bd62f"},{url:"json/china.json",revision:"32a9d07a4892a8ad7666cb6c4d1a4bdb"},{url:"manifest.json",revision:"76b3625bb9dd0cf9b7e3873b860c21ed"},{url:"static/css/104.336addbc.css",revision:null},{url:"static/css/1113.9f5ae1bd.css",revision:null},{url:"static/css/1214.43be7048.css",revision:null},{url:"static/css/1290.8a8dc4ee.css",revision:null},{url:"static/css/1329.6d335e88.css",revision:null},{url:"static/css/1348.efc83f90.css",revision:null},{url:"static/css/14.214528c9.css",revision:null},{url:"static/css/1649.c5a45200.css",revision:null},{url:"static/css/1671.214528c9.css",revision:null},{url:"static/css/184.3db150da.css",revision:null},{url:"static/css/1975.5eb9cdeb.css",revision:null},{url:"static/css/2016.48dd86ca.css",revision:null},{url:"static/css/2067.3e176d81.css",revision:null},{url:"static/css/2126.c35fb6c6.css",revision:null},{url:"static/css/220.5dff0bab.css",revision:null},{url:"static/css/2219.a61b42da.css",revision:null},{url:"static/css/2261.40e47662.css",revision:null},{url:"static/css/2291.a85e7b5a.css",revision:null},{url:"static/css/2292.97f22d67.css",revision:null},{url:"static/css/2305.4b6c1f4e.css",revision:null},{url:"static/css/2351.6db0bf75.css",revision:null},{url:"static/css/2367.9f4d64bd.css",revision:null},{url:"static/css/2385.7fc7f80b.css",revision:null},{url:"static/css/240.261e0d44.css",revision:null},{url:"static/css/2471.b93c2a13.css",revision:null},{url:"static/css/2585.261e0d44.css",revision:null},{url:"static/css/2638.8854c611.css",revision:null},{url:"static/css/2644.214528c9.css",revision:null},{url:"static/css/2697.09dc7eb4.css",revision:null},{url:"static/css/272.eca5bca8.css",revision:null},{url:"static/css/2780.7ebb23fc.css",revision:null},{url:"static/css/2923.a854c7a9.css",revision:null},{url:"static/css/2933.a49ebb2a.css",revision:null},{url:"static/css/3054.3e476ac4.css",revision:null},{url:"static/css/3075.59024c35.css",revision:null},{url:"static/css/3087.d3573e03.css",revision:null},{url:"static/css/3166.affb5e85.css",revision:null},{url:"static/css/3315.fb7895fa.css",revision:null},{url:"static/css/3319.237fd6b7.css",revision:null},{url:"static/css/359.57589ea7.css",revision:null},{url:"static/css/3618.17057467.css",revision:null},{url:"static/css/3619.ad80f370.css",revision:null},{url:"static/css/368.aa1713d8.css",revision:null},{url:"static/css/3697.efe6ec7f.css",revision:null},{url:"static/css/3704.ceb1aeee.css",revision:null},{url:"static/css/3795.c1e2c391.css",revision:null},{url:"static/css/3923.a9c5173e.css",revision:null},{url:"static/css/4007.9c5e6149.css",revision:null},{url:"static/css/4049.b60a2e75.css",revision:null},{url:"static/css/4063.1e238329.css",revision:null},{url:"static/css/4122.2d942ce3.css",revision:null},{url:"static/css/415.3a26b61c.css",revision:null},{url:"static/css/4185.35a96c77.css",revision:null},{url:"static/css/4286.d3206a6b.css",revision:null},{url:"static/css/4290.1fc4c9b5.css",revision:null},{url:"static/css/4315.59024c35.css",revision:null},{url:"static/css/4395.8ef396cb.css",revision:null},{url:"static/css/4477.214528c9.css",revision:null},{url:"static/css/4596.9695f869.css",revision:null},{url:"static/css/4675.9f7bf363.css",revision:null},{url:"static/css/4686.eb5091ad.css",revision:null},{url:"static/css/4726.0839b28b.css",revision:null},{url:"static/css/4731.f8c52f3e.css",revision:null},{url:"static/css/4789.1b7516c8.css",revision:null},{url:"static/css/4829.2dd25eb8.css",revision:null},{url:"static/css/4855.bcdf2934.css",revision:null},{url:"static/css/4863.f75098d6.css",revision:null},{url:"static/css/4937.de5f8f8d.css",revision:null},{url:"static/css/4956.43a52aa3.css",revision:null},{url:"static/css/4973.214528c9.css",revision:null},{url:"static/css/4981.658c49ad.css",revision:null},{url:"static/css/5057.1a8954ea.css",revision:null},{url:"static/css/5095.221ac951.css",revision:null},{url:"static/css/5111.261e0d44.css",revision:null},{url:"static/css/5177.a281335f.css",revision:null},{url:"static/css/5250.214528c9.css",revision:null},{url:"static/css/5278.214528c9.css",revision:null},{url:"static/css/5327.102c4adb.css",revision:null},{url:"static/css/5418.6d335e88.css",revision:null},{url:"static/css/5446.d1be66c3.css",revision:null},{url:"static/css/5502.019df4a1.css",revision:null},{url:"static/css/563.ba8148bd.css",revision:null},{url:"static/css/5658.e525694c.css",revision:null},{url:"static/css/5696.fb7895fa.css",revision:null},{url:"static/css/5700.237fd6b7.css",revision:null},{url:"static/css/5813.c2b92325.css",revision:null},{url:"static/css/592.e48f55cc.css",revision:null},{url:"static/css/5999.138a0e03.css",revision:null},{url:"static/css/6011.f6a1f5a9.css",revision:null},{url:"static/css/603.73d607bb.css",revision:null},{url:"static/css/6121.214528c9.css",revision:null},{url:"static/css/6203.214528c9.css",revision:null},{url:"static/css/6239.70bd3064.css",revision:null},{url:"static/css/6267.214528c9.css",revision:null},{url:"static/css/6304.a9c5173e.css",revision:null},{url:"static/css/6361.6d335e88.css",revision:null},{url:"static/css/638.20a8f5e5.css",revision:null},{url:"static/css/6529.3f63c668.css",revision:null},{url:"static/css/6583.c4e33517.css",revision:null},{url:"static/css/6830.1a731867.css",revision:null},{url:"static/css/6839.4c1586ad.css",revision:null},{url:"static/css/6843.182b8f29.css",revision:null},{url:"static/css/69.d18bef41.css",revision:null},{url:"static/css/7013.f6ceb224.css",revision:null},{url:"static/css/7066.52935109.css",revision:null},{url:"static/css/7092.26810700.css",revision:null},{url:"static/css/7096.214528c9.css",revision:null},{url:"static/css/7144.214528c9.css",revision:null},{url:"static/css/7146.18a5dd0f.css",revision:null},{url:"static/css/7215.340f5a9e.css",revision:null},{url:"static/css/7267.4bddd355.css",revision:null},{url:"static/css/7268.b8e13180.css",revision:null},{url:"static/css/7299.1c106389.css",revision:null},{url:"static/css/7448.6171e32e.css",revision:null},{url:"static/css/7479.214528c9.css",revision:null},{url:"static/css/7589.b2aa2d37.css",revision:null},{url:"static/css/7675.635991e3.css",revision:null},{url:"static/css/7686.9abaf98e.css",revision:null},{url:"static/css/7748.6a1b5feb.css",revision:null},{url:"static/css/7802.a17eba0d.css",revision:null},{url:"static/css/7805.c19f4e8d.css",revision:null},{url:"static/css/7918.9516d93c.css",revision:null},{url:"static/css/7944.7def5c39.css",revision:null},{url:"static/css/8155.59024c35.css",revision:null},{url:"static/css/8199.ebbbab28.css",revision:null},{url:"static/css/8272.c99fb4c1.css",revision:null},{url:"static/css/83.c1368562.css",revision:null},{url:"static/css/8357.214528c9.css",revision:null},{url:"static/css/8407.8a8dc4ee.css",revision:null},{url:"static/css/8519.1e7a1a75.css",revision:null},{url:"static/css/8565.ec36f5df.css",revision:null},{url:"static/css/867.214528c9.css",revision:null},{url:"static/css/8681.7a5309d0.css",revision:null},{url:"static/css/8775.869959e7.css",revision:null},{url:"static/css/8783.7d6f3fa4.css",revision:null},{url:"static/css/8809.261e0d44.css",revision:null},{url:"static/css/8846.fb8092f2.css",revision:null},{url:"static/css/8863.91a26582.css",revision:null},{url:"static/css/8929.690423f6.css",revision:null},{url:"static/css/9018.214528c9.css",revision:null},{url:"static/css/9046.5211ab44.css",revision:null},{url:"static/css/9102.c35fb6c6.css",revision:null},{url:"static/css/9109.6ec0d0c3.css",revision:null},{url:"static/css/9159.214528c9.css",revision:null},{url:"static/css/9207.4b68768e.css",revision:null},{url:"static/css/9333.584ac5fe.css",revision:null},{url:"static/css/9424.653d507b.css",revision:null},{url:"static/css/9433.282aa410.css",revision:null},{url:"static/css/9591.e2234d90.css",revision:null},{url:"static/css/9625.59024c35.css",revision:null},{url:"static/css/9687.b8e13180.css",revision:null},{url:"static/css/9806.e43861b5.css",revision:null},{url:"static/css/9973.46589700.css",revision:null},{url:"static/css/app.6d0ce22b.css",revision:null},{url:"static/css/loading.css",revision:"deb843e8a179e15d936633e759d8d308"},{url:"static/fonts/remixicon.31d28485.f12fd1a0.eot",revision:null},{url:"static/fonts/remixicon.881fbc46.1e0fb76b.woff",revision:null},{url:"static/fonts/remixicon.888e61f0.e313410c.ttf",revision:null},{url:"static/fonts/remixicon.9915fef9.5400338c.woff2",revision:null},{url:"static/img/403.d6bd8853.png",revision:null},{url:"static/img/404.f02775f8.png",revision:null},{url:"static/img/background-1.31e3a0ac.png",revision:null},{url:"static/img/background.2f742bae.jpg",revision:null},{url:"static/img/login_form.242d2e10.png",revision:null},{url:"static/img/mobile.99d37427.png",revision:null},{url:"static/img/remixicon.95138f36.2b2ee314.svg",revision:null},{url:"static/img/user.2e7840a2.png",revision:null},{url:"static/js/1113.6c20bf88.js",revision:null},{url:"static/js/1329.d2886ac6.js",revision:null},{url:"static/js/1348.c7760626.js",revision:null},{url:"static/js/1352.ec140ef7.js",revision:null},{url:"static/js/14.e489b4bc.js",revision:null},{url:"static/js/1649.73737936.js",revision:null},{url:"static/js/1671.4a145ac1.js",revision:null},{url:"static/js/1752.76b17518.js",revision:null},{url:"static/js/184.d6427142.js",revision:null},{url:"static/js/1975.c87a8d0b.js",revision:null},{url:"static/js/2016.bcc0c856.js",revision:null},{url:"static/js/2067.6aec5148.js",revision:null},{url:"static/js/2126.b603d829.js",revision:null},{url:"static/js/220.55dbb39e.js",revision:null},{url:"static/js/2219.5a67cb4e.js",revision:null},{url:"static/js/2261.de7a4e9d.js",revision:null},{url:"static/js/2291.d972a696.js",revision:null},{url:"static/js/2292.c341986e.js",revision:null},{url:"static/js/2305.30f561e7.js",revision:null},{url:"static/js/2351.8db1a705.js",revision:null},{url:"static/js/2367.b69e3113.js",revision:null},{url:"static/js/2385.59132bef.js",revision:null},{url:"static/js/240.aa06a391.js",revision:null},{url:"static/js/2471.1fc10915.js",revision:null},{url:"static/js/2585.08b03d41.js",revision:null},{url:"static/js/2638.db3a8a3d.js",revision:null},{url:"static/js/2644.e7a10714.js",revision:null},{url:"static/js/2697.f3515c90.js",revision:null},{url:"static/js/272.3fdc294e.js",revision:null},{url:"static/js/2780.98675ec9.js",revision:null},{url:"static/js/2923.bf9b5ab6.js",revision:null},{url:"static/js/2933.5c08bc61.js",revision:null},{url:"static/js/3047.b7d4f180.js",revision:null},{url:"static/js/3054.8905f170.js",revision:null},{url:"static/js/3075.cf91fcdb.js",revision:null},{url:"static/js/3087.507b4e4d.js",revision:null},{url:"static/js/3315.a548918a.js",revision:null},{url:"static/js/3319.9318ad19.js",revision:null},{url:"static/js/348.23b86459.js",revision:null},{url:"static/js/359.425eddc2.js",revision:null},{url:"static/js/3618.a49c61ff.js",revision:null},{url:"static/js/3619.e378e439.js",revision:null},{url:"static/js/368.cc38809d.js",revision:null},{url:"static/js/3697.5e3ec55b.js",revision:null},{url:"static/js/3704.7f4d5f69.js",revision:null},{url:"static/js/3795.eabed570.js",revision:null},{url:"static/js/3923.5193a781.js",revision:null},{url:"static/js/4007.776f1bfd.js",revision:null},{url:"static/js/4049.d5a23208.js",revision:null},{url:"static/js/4063.75714668.js",revision:null},{url:"static/js/415.e56367a7.js",revision:null},{url:"static/js/4177.56b6f3da.js",revision:null},{url:"static/js/4185.75d3a67f.js",revision:null},{url:"static/js/4286.5b31943b.js",revision:null},{url:"static/js/4290.76c2522d.js",revision:null},{url:"static/js/4315.a3ddc043.js",revision:null},{url:"static/js/4395.269afe35.js",revision:null},{url:"static/js/4466.78c77396.js",revision:null},{url:"static/js/4477.31aa3a78.js",revision:null},{url:"static/js/4589.ba088972.js",revision:null},{url:"static/js/4596.3711d663.js",revision:null},{url:"static/js/4675.8a0f9f52.js",revision:null},{url:"static/js/4686.a83b446b.js",revision:null},{url:"static/js/4726.d941564b.js",revision:null},{url:"static/js/4731.406e0424.js",revision:null},{url:"static/js/4789.ed5b09b4.js",revision:null},{url:"static/js/4829.603dac2b.js",revision:null},{url:"static/js/4855.c6588dae.js",revision:null},{url:"static/js/4863.1fa2b03e.js",revision:null},{url:"static/js/4937.8936ba5d.js",revision:null},{url:"static/js/4956.f9494570.js",revision:null},{url:"static/js/4973.2b11fad5.js",revision:null},{url:"static/js/4981.ffee8dd8.js",revision:null},{url:"static/js/5057.b55951be.js",revision:null},{url:"static/js/5095.3dd1df8e.js",revision:null},{url:"static/js/5111.fb47f0b0.js",revision:null},{url:"static/js/5177.3f1f6185.js",revision:null},{url:"static/js/5178.e82a6286.js",revision:null},{url:"static/js/5250.3688a172.js",revision:null},{url:"static/js/5278.99c0bdf7.js",revision:null},{url:"static/js/5327.e593ccfc.js",revision:null},{url:"static/js/5418.d13fb39c.js",revision:null},{url:"static/js/5428.7e7e44d7.js",revision:null},{url:"static/js/5446.ac04adc2.js",revision:null},{url:"static/js/5502.98100e8d.js",revision:null},{url:"static/js/5536.93ce8b7b.js",revision:null},{url:"static/js/563.ebdc76b1.js",revision:null},{url:"static/js/5658.ada119b2.js",revision:null},{url:"static/js/5696.afd60647.js",revision:null},{url:"static/js/5700.e6e95a5e.js",revision:null},{url:"static/js/5704.f992580e.js",revision:null},{url:"static/js/5813.8192c7c1.js",revision:null},{url:"static/js/592.79af102b.js",revision:null},{url:"static/js/5942.0d6be49e.js",revision:null},{url:"static/js/5999.a853fd2c.js",revision:null},{url:"static/js/6008.0549e654.js",revision:null},{url:"static/js/6011.acc7627d.js",revision:null},{url:"static/js/603.66c6ed5b.js",revision:null},{url:"static/js/6121.9d86db2c.js",revision:null},{url:"static/js/6203.dc682ea6.js",revision:null},{url:"static/js/6239.b08e0359.js",revision:null},{url:"static/js/6259.b2ff7906.js",revision:null},{url:"static/js/6267.1e0e8a97.js",revision:null},{url:"static/js/6304.7fe4d61f.js",revision:null},{url:"static/js/6361.f6593934.js",revision:null},{url:"static/js/638.d85516d0.js",revision:null},{url:"static/js/6583.8327b7a5.js",revision:null},{url:"static/js/6682.8bc6427e.js",revision:null},{url:"static/js/6819.3772f58b.js",revision:null},{url:"static/js/6830.bbaa1fa0.js",revision:null},{url:"static/js/6839.b32317fb.js",revision:null},{url:"static/js/6843.a297efd9.js",revision:null},{url:"static/js/69.e45ee79f.js",revision:null},{url:"static/js/7013.6fa4cec8.js",revision:null},{url:"static/js/7066.6966739e.js",revision:null},{url:"static/js/7092.dc1bfa49.js",revision:null},{url:"static/js/7096.91bec247.js",revision:null},{url:"static/js/7144.4905e91f.js",revision:null},{url:"static/js/7146.32ef14d2.js",revision:null},{url:"static/js/7162.66c7870a.js",revision:null},{url:"static/js/7267.1d3b4b81.js",revision:null},{url:"static/js/7299.33c80ee2.js",revision:null},{url:"static/js/7448.9fd0afee.js",revision:null},{url:"static/js/7479.7831505b.js",revision:null},{url:"static/js/7589.06503a3f.js",revision:null},{url:"static/js/7675.9ab8ed7f.js",revision:null},{url:"static/js/7686.8078d627.js",revision:null},{url:"static/js/7748.658d8364.js",revision:null},{url:"static/js/7802.2133e10b.js",revision:null},{url:"static/js/7805.eb3dcd18.js",revision:null},{url:"static/js/7918.28be9c8a.js",revision:null},{url:"static/js/7944.1541b471.js",revision:null},{url:"static/js/7967.540ba0ba.js",revision:null},{url:"static/js/8106.af69bd7c.js",revision:null},{url:"static/js/8155.d016adcb.js",revision:null},{url:"static/js/8199.2f51f3ee.js",revision:null},{url:"static/js/8272.247fbb23.js",revision:null},{url:"static/js/83.ebeab46d.js",revision:null},{url:"static/js/8357.494fb079.js",revision:null},{url:"static/js/8376.ab69a8bf.js",revision:null},{url:"static/js/8407.ec8c2141.js",revision:null},{url:"static/js/8500.add6da96.js",revision:null},{url:"static/js/8519.7d436926.js",revision:null},{url:"static/js/8523.31ede101.js",revision:null},{url:"static/js/8565.2061dd7a.js",revision:null},{url:"static/js/858.c5077d74.js",revision:null},{url:"static/js/867.7ebfff06.js",revision:null},{url:"static/js/8681.34ca94dc.js",revision:null},{url:"static/js/8775.2bf1498d.js",revision:null},{url:"static/js/8783.c66059ae.js",revision:null},{url:"static/js/8809.d4ceacad.js",revision:null},{url:"static/js/8846.7ddbbcac.js",revision:null},{url:"static/js/8863.d152784b.js",revision:null},{url:"static/js/8929.71db6e61.js",revision:null},{url:"static/js/894.00acb391.js",revision:null},{url:"static/js/9018.c2c75560.js",revision:null},{url:"static/js/9046.bd2c6d51.js",revision:null},{url:"static/js/9102.155f6cad.js",revision:null},{url:"static/js/9109.a9e0c9ac.js",revision:null},{url:"static/js/9159.9e815a6a.js",revision:null},{url:"static/js/9207.4de00578.js",revision:null},{url:"static/js/9333.f18992af.js",revision:null},{url:"static/js/9342.2f3a374c.js",revision:null},{url:"static/js/9396.50772c1b.js",revision:null},{url:"static/js/9414.92d25035.js",revision:null},{url:"static/js/9424.3e0e46c9.js",revision:null},{url:"static/js/9566.145d4c01.js",revision:null},{url:"static/js/9591.621b58fd.js",revision:null},{url:"static/js/9625.04569026.js",revision:null},{url:"static/js/9687.f6ae9f55.js",revision:null},{url:"static/js/9806.e6877749.js",revision:null},{url:"static/js/9973.0a0aba0c.js",revision:null},{url:"static/js/app.0a945c08.js",revision:null},{url:"static/js/vab-chunk-0556e14f.a283169b.js",revision:null},{url:"static/js/vab-chunk-0e87ff2e.a829fab3.js",revision:null},{url:"static/js/vab-chunk-2e102be9.5b047c34.js",revision:null},{url:"static/js/vab-chunk-312fe4b4.a6ffc2a8.js",revision:null},{url:"static/js/vab-chunk-54dc300e.7006fc1a.js",revision:null},{url:"static/js/vab-chunk-7faa1eb4.0c66a6b7.js",revision:null},{url:"static/js/vab-chunk-8ae15816.07512f06.js",revision:null},{url:"static/js/vab-chunk-8f5b5a08.76e0542a.js",revision:null},{url:"static/js/vab-chunk-a423003b.d5a17790.js",revision:null},{url:"static/js/vab-chunk-bb698b24.7b3c4bd9.js",revision:null},{url:"static/js/vab-chunk-bf5b02ff.b3e5b0a0.js",revision:null},{url:"static/js/vab-chunk-c6f52c3a.7f9ec0f6.js",revision:null},{url:"static/js/vab-chunk-c86ef5d8.4d913ee8.js",revision:null},{url:"static/js/vab-chunk-d9290654.3c5735e6.js",revision:null},{url:"static/js/vab-chunk-f82c9dd1.3cd745ff.js",revision:null},{url:"static/js/vab-chunk-f8c4146e.2e5ebae9.js",revision:null},{url:"static/js/vab-chunk-fc097e1a.18e1eb4b.js",revision:null},{url:"static/js/vab-plugins.4d5c7e88.js",revision:null}],{})}));
