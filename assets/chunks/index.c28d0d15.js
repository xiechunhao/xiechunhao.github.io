import{L as e}from"./leaflet-src.347f22be.js";import"./leaflet.ChineseTmsProviders.217704b0.js";import{A as n}from"./index.a511ac44.js";import{d as m,p as r,a4 as c,o as i,c as _,_ as p}from"./framework.57763b9a.js";import"./commonjsHelpers.042e6b4d.js";const s={id:"map"},d=m({__name:"index",setup(l){let o=null;const t=()=>{o=e.map("map",{crs:e.CRS.EPSG3857,center:[22.548857,114.064839],minZoom:1,maxZoom:18,zoom:12});const a=e.tileLayer.chinaProvider("GaoDe.Normal.Map",{maxZoom:18,minZoom:1,attribution:n});o.addLayer(a)};return r(()=>{t()}),c(()=>{o&&(o.remove(),o=null)}),(a,u)=>(i(),_("div",s))}});const M=p(d,[["__scopeId","data-v-2c0ca618"]]);export{M as default};
