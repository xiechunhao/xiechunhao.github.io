import{L as e}from"./leaflet-src.347f22be.js";import"./leaflet.ChineseTmsProviders.217704b0.js";import{A as n}from"./index.a511ac44.js";import{d as m,p as r,a3 as i,o as _,c as p,_ as s}from"./framework.efc265d9.js";import"./commonjsHelpers.042e6b4d.js";const c={id:"map"},d=m({__name:"index",setup(l){let o=null;const a=()=>{o=e.map("map",{crs:e.CRS.EPSG3857,center:[22.548857,114.064839],minZoom:1,maxZoom:18,zoom:12});const t=e.tileLayer.chinaProvider("GaoDe.Normal.Map",{maxZoom:18,minZoom:1,attribution:n});o.addLayer(t)};return r(()=>{a()}),i(()=>{o&&(o.remove(),o=null)}),(t,u)=>(_(),p("div",c))}});const M=s(d,[["__scopeId","data-v-14777824"]]);export{M as default};
