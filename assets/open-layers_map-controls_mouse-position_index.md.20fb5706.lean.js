import{T as D,X as F,q as y,r as C,M as i,c as A,i as u}from"../js/ol@7.4.0@ol/ol@7.4.0@ol.2a99620d.js";import{A as m,M as d}from"../js/index/index.47495de9.js";import{D as f,n as E,v as _,o as p,c as t,a as s,j as q,N as g,a0 as B}from"../js/@vue_runtime-core@3.3.4@@vue/@vue_runtime-core@3.3.4@@vue.35efc880.js";import{k as h}from"../js/@vue_reactivity@3.3.4@@vue/@vue_reactivity@3.3.4@@vue.e6fc7fe8.js";import{_ as T}from"./app.f296b152.js";import"../js/earcut@2.2.4@earcut/earcut@2.2.4@earcut.e6a9c857.js";import"../js/rbush@3.0.1@rbush/rbush@3.0.1@rbush.75a05972.js";import"../js/quickselect@2.0.0@quickselect/quickselect@2.0.0@quickselect.f3892974.js";import"../js/@vue_shared@3.3.4@@vue/@vue_shared@3.3.4@@vue.5a5848fd.js";import"../js/@docsearch_css@3.5.1@@docsearch/@docsearch_css@3.5.1@@docsearch.4ed993c7.js";import"../js/body-scroll-lock@4.0.0-beta.0@body-scroll-lock/body-scroll-lock@4.0.0-beta.0@body-scroll-lock.e1f8a6eb.js";import"../js/geotiff@2.0.7@geotiff/geotiff@2.0.7@geotiff.101896b7.js";import"../js/@vue_runtime-dom@3.3.4@@vue/@vue_runtime-dom@3.3.4@@vue.5dd85bb5.js";import"../js/@vueuse_core@10.2.0@@vueuse/@vueuse_core@10.2.0@@vueuse.8a5d8129.js";import"../js/@vueuse_shared@10.2.0@@vueuse/@vueuse_shared@10.2.0@@vueuse.9afec68c.js";import"../js/es/element-plus@2.3.7@element-plus.9cf0a975.js";import"../js/lodash-es@4.17.21@lodash-es/lodash-es@4.17.21@lodash-es.36eb724a.js";import"../js/@vueuse_core@9.13.0@@vueuse/@vueuse_core@9.13.0@@vueuse.604f33c6.js";import"../js/@vueuse_shared@9.13.0@@vueuse/@vueuse_shared@9.13.0@@vueuse.740d90d5.js";import"../js/@element-plus_icons-vue@2.1.0@@element-plus/@element-plus_icons-vue@2.1.0@@element-plus.1b5ed4e9.js";import"../js/@sxzz_popperjs-es@2.11.7@@sxzz/@sxzz_popperjs-es@2.11.7@@sxzz.c75af06c.js";import"../js/@ctrl_tinycolor@3.6.0@@ctrl/@ctrl_tinycolor@3.6.0@@ctrl.f8748455.js";import"../js/dayjs@1.11.8@dayjs/dayjs@1.11.8@dayjs.ab63237d.js";import"../js/async-validator@4.2.5@async-validator/async-validator@4.2.5@async-validator.dee29e8b.js";import"../js/memoize-one@6.0.0@memoize-one/memoize-one@6.0.0@memoize-one.297ddbcb.js";import"../js/escape-html@1.0.3@escape-html/escape-html@1.0.3@escape-html.3a386d15.js";import"../js/normalize-wheel-es@1.2.0@normalize-wheel-es/normalize-wheel-es@1.2.0@normalize-wheel-es.ed76fb12.js";import"../js/@floating-ui_dom@1.4.2@@floating-ui/@floating-ui_dom@1.4.2@@floating-ui.4bb7de12.js";import"../js/@floating-ui_core@1.3.1@@floating-ui/@floating-ui_core@1.3.1@@floating-ui.a8b4680c.js";const v={id:"map"},P=f({__name:"index",setup(e){const o=new D({source:new F({attributions:m,url:d,maxZoom:20})}),n=h(null);let a=null;const c=l=>new y({coordinateFormat:C(4),projection:"EPSG:4326",className:"custom-mouse-position",target:l,undefinedHTML:"&nbsp;"}),r=l=>{a=new i({target:"map",layers:[o],view:new A({projection:"EPSG:4326",center:[0,0],zoom:5}),controls:u({attributionOptions:{collapsible:!0}}).extend([l])})};return E(()=>{n.value!==null&&r(c(n.value))}),_(()=>{a&&(a.dispose(),a=null)}),(l,N)=>(p(),t("div",v,[s("div",{id:"mouse-position",ref_key:"mouse",ref:n},null,512)]))}});const M=T(P,[["__scopeId","data-v-e7da45d1"]]),b=s("h1",{id:"鼠标位置",tabindex:"-1"},[g("鼠标位置 "),s("a",{class:"header-anchor",href:"#鼠标位置","aria-label":'Permalink to "鼠标位置"'},"​")],-1),x=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"鼠标滑过地图显示坐标位置。")],-1),S=B("",2),Ds=JSON.parse('{"title":"鼠标位置","description":"","frontmatter":{},"headers":[],"relativePath":"open-layers/map-controls/mouse-position/index.md","filePath":"open-layers/map-controls/mouse-position/index.md","lastUpdated":1687683239000}'),w={name:"open-layers/map-controls/mouse-position/index.md"},Fs=Object.assign(w,{setup(e){return(o,n)=>(p(),t("div",null,[b,x,q(M),S]))}});export{Ds as __pageData,Fs as default};
