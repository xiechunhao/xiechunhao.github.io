import{L as t}from"./leaflet-src.347f22be.js";import{A as s}from"./index.a511ac44.js";import{d as f,p as v,a3 as y,D as x,o as b,c as h,z as l,G as d,B as i,F as T,a as p,M as I,N as S,_ as g}from"./framework.efc265d9.js";import"./commonjsHelpers.042e6b4d.js";const k=a=>(I("data-v-1a58c4ea"),a=a(),S(),a),B={class:"top-bar"},C=k(()=>l("div",{id:"map"},null,-1)),F=f({__name:"index",setup(a){let e,r,n;const _=()=>{e=t.map("map",{crs:t.CRS.EPSG3857,center:[30.5217,114.3948],zoom:18}),t.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=55b4d4eaef95384c946e9bd1b99c5610",{noWrap:!0,attribution:s}).addTo(e),t.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=55b4d4eaef95384c946e9bd1b99c5610",{noWrap:!0,attribution:s}).addTo(e),r=t.rectangle([[30.52172,114.39359],[30.52153,114.39428]],{color:"red"}).addTo(e)};function u(){let o=!0;n=setInterval(function(){e&&(o?(e.removeLayer(r),o=!1):(e.addLayer(r),o=!0))},1e3)}function m(){clearInterval(n)}return v(()=>{_()}),y(()=>{e&&(e.remove(),e=null)}),(o,L)=>{const c=x("el-button");return b(),h(T,null,[l("div",B,[d(c,{type:"primary",onClick:u},{default:i(()=>[p("开始闪烁")]),_:1}),d(c,{type:"primary",onClick:m},{default:i(()=>[p("停止闪烁")]),_:1})]),C],64)}}});const M=g(F,[["__scopeId","data-v-1a58c4ea"]]);export{M as default};
