import{A as l}from"../js/index/index.47495de9.js";import{J as w,v,a as p,V as o,G as t,M as e,T as c,X as r,c as F,K as B,i as h,k as x}from"../js/ol@7.4.0@ol/ol@7.4.0@ol.2a99620d.js";import{p as D}from"../js/proj4@2.9.0@proj4/proj4@2.9.0@proj4.4b97899e.js";import{D as b,n as S,v as j,V as T,o as C,c as A,a as s,j as i,J as P,F as M,a0 as u,N as m}from"../js/@vue_runtime-core@3.3.4@@vue/@vue_runtime-core@3.3.4@@vue.35efc880.js";import{_ as I}from"./app.f296b152.js";import"../js/earcut@2.2.4@earcut/earcut@2.2.4@earcut.e6a9c857.js";import"../js/rbush@3.0.1@rbush/rbush@3.0.1@rbush.75a05972.js";import"../js/quickselect@2.0.0@quickselect/quickselect@2.0.0@quickselect.f3892974.js";import"../js/wkt-parser@1.3.3@wkt-parser/wkt-parser@1.3.3@wkt-parser.066458bd.js";import"../js/mgrs@1.0.0@mgrs/mgrs@1.0.0@mgrs.6757eb45.js";import"../js/@vue_reactivity@3.3.4@@vue/@vue_reactivity@3.3.4@@vue.e6fc7fe8.js";import"../js/@vue_shared@3.3.4@@vue/@vue_shared@3.3.4@@vue.5a5848fd.js";import"../js/@docsearch_css@3.5.1@@docsearch/@docsearch_css@3.5.1@@docsearch.4ed993c7.js";import"../js/body-scroll-lock@4.0.0-beta.0@body-scroll-lock/body-scroll-lock@4.0.0-beta.0@body-scroll-lock.e1f8a6eb.js";import"../js/geotiff@2.0.7@geotiff/geotiff@2.0.7@geotiff.101896b7.js";import"../js/@vue_runtime-dom@3.3.4@@vue/@vue_runtime-dom@3.3.4@@vue.5dd85bb5.js";import"../js/@vueuse_core@10.2.0@@vueuse/@vueuse_core@10.2.0@@vueuse.8a5d8129.js";import"../js/@vueuse_shared@10.2.0@@vueuse/@vueuse_shared@10.2.0@@vueuse.9afec68c.js";import"../js/es/element-plus@2.3.7@element-plus.9cf0a975.js";import"../js/lodash-es@4.17.21@lodash-es/lodash-es@4.17.21@lodash-es.36eb724a.js";import"../js/@vueuse_core@9.13.0@@vueuse/@vueuse_core@9.13.0@@vueuse.604f33c6.js";import"../js/@vueuse_shared@9.13.0@@vueuse/@vueuse_shared@9.13.0@@vueuse.740d90d5.js";import"../js/@element-plus_icons-vue@2.1.0@@element-plus/@element-plus_icons-vue@2.1.0@@element-plus.1b5ed4e9.js";import"../js/@sxzz_popperjs-es@2.11.7@@sxzz/@sxzz_popperjs-es@2.11.7@@sxzz.c75af06c.js";import"../js/@ctrl_tinycolor@3.6.0@@ctrl/@ctrl_tinycolor@3.6.0@@ctrl.f8748455.js";import"../js/dayjs@1.11.8@dayjs/dayjs@1.11.8@dayjs.ab63237d.js";import"../js/async-validator@4.2.5@async-validator/async-validator@4.2.5@async-validator.dee29e8b.js";import"../js/memoize-one@6.0.0@memoize-one/memoize-one@6.0.0@memoize-one.297ddbcb.js";import"../js/escape-html@1.0.3@escape-html/escape-html@1.0.3@escape-html.3a386d15.js";import"../js/normalize-wheel-es@1.2.0@normalize-wheel-es/normalize-wheel-es@1.2.0@normalize-wheel-es.ed76fb12.js";import"../js/@floating-ui_dom@1.4.2@@floating-ui/@floating-ui_dom@1.4.2@@floating-ui.4bb7de12.js";import"../js/@floating-ui_core@1.3.1@@floating-ui/@floating-ui_core@1.3.1@@floating-ui.a8b4680c.js";const V={class:"top"},k=u('<div class="mapBox" data-v-3c1a9c6a><div class="map" id="map1" data-v-3c1a9c6a><div class="title" data-v-3c1a9c6a>投影坐标系（EPSG:3857）</div></div><div class="map" id="map2" data-v-3c1a9c6a><div class="title" data-v-3c1a9c6a>投影坐标系（ESRI:53009）</div></div></div>',1),y="/geojson/countries.geojson",N=b({__name:"index",setup(d){let n=null,a=null;D.defs("ESRI:53009","+proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=6371000 +b=6371000 +units=m +no_defs"),w(D);const f=new v({code:"ESRI:53009",extent:[-9009954605703328e-9,-9009954605703328e-9,9009954605703328e-9,9009954605703328e-9],worldExtent:[-179,-90,179,90]}),E=new p({source:new o({url:y,format:new t,wrapX:!1})}),_=()=>{n=new e({target:"map1",layers:[new c({source:new r({attributions:l,url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1})}),E,new c({source:new r({attributions:l,url:"http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1})})],view:new F({projection:B("EPSG:3857"),center:[0,0],zoom:1}),controls:h().extend([new x])})},q=()=>{a=new e({layers:[new p({source:new o({url:y,format:new t})})],target:"map2",view:new F({projection:f,center:[120,40],zoom:1})})};return S(()=>{_()}),j(()=>{n&&(n.dispose(),n=null),a&&(a.dispose(),a=null)}),(z,O)=>{const g=T("el-button");return C(),A(M,null,[s("div",V,[i(g,{type:"primary",onClick:q},{default:P(()=>[m("动态投影转换")]),_:1})]),k],64)}}});const R=I(N,[["__scopeId","data-v-3c1a9c6a"]]),G=s("h1",{id:"动态投影转换",tabindex:"-1"},[m("动态投影转换 "),s("a",{class:"header-anchor",href:"#动态投影转换","aria-label":'Permalink to "动态投影转换"'},"​")],-1),U=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"将投影坐标系（EPSG:3857）转换为 投影坐标系（ESRI:53009）。")],-1),X=u("",2),ws=JSON.parse('{"title":"动态投影转换","description":"","frontmatter":{},"headers":[],"relativePath":"open-layers/others/projection-transformation/index.md","filePath":"open-layers/others/projection-transformation/index.md","lastUpdated":1687683239000}'),L={name:"open-layers/others/projection-transformation/index.md"},vs=Object.assign(L,{setup(d){return(n,a)=>(C(),A("div",null,[G,U,i(R),X]))}});export{ws as __pageData,vs as default};
