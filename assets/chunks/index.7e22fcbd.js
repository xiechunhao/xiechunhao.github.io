import{L as o}from"./leaflet-src.347f22be.js";import{A as m}from"./index.a511ac44.js";import{d as g,h as p,p as y,a3 as b,D as I,o as V,c as h,z as n,a as u,G as _,F as S,M as T,N as L,_ as B}from"./framework.efc265d9.js";import"./commonjsHelpers.042e6b4d.js";const C=t=>(T("data-v-ee409cf5"),t=t(),L(),t),N={class:"top-bar"},k={style:{"margin-bottom":"20px"}},z=C(()=>n("div",{id:"map"},null,-1)),U=g({__name:"index",setup(t){const d=p(1),l=p(1);let r,i,e=null;const v=()=>{e=o.map("map",{crs:o.CRS.EPSG3857,center:[22.548857,114.064839],zoom:10}),r=o.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=55b4d4eaef95384c946e9bd1b99c5610",{noWrap:!0,attribution:m}).addTo(e),i=o.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=55b4d4eaef95384c946e9bd1b99c5610",{noWrap:!0,attribution:m}).addTo(e)},x=()=>{r.setZIndex(d.value)},f=()=>{i.setZIndex(l.value)};return y(()=>{v()}),b(()=>{e&&(e.remove(),e=null)}),(Z,a)=>{const c=I("el-input-number");return V(),h(S,null,[n("div",N,[n("div",k,[u(" 矢量图层 Z-index： "),_(c,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=s=>d.value=s),min:-99,max:99,onChange:x},null,8,["modelValue"])]),n("div",null,[u(" 影像图层 Z-index： "),_(c,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=s=>l.value=s),min:-99,max:99,onChange:f},null,8,["modelValue"])])]),z],64)}}});const E=B(U,[["__scopeId","data-v-ee409cf5"]]);export{E as default};
