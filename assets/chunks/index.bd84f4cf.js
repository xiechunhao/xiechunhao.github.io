import{L as e}from"./leaflet-src.347f22be.js";import{M as p,A as a}from"./index.a511ac44.js";import{d as r,p as d,a4 as s,o as _,c as i,_ as c}from"./framework.57763b9a.js";import"./commonjsHelpers.042e6b4d.js";const m={id:"map"},l=r({__name:"index",setup(u){let o=null;const n=()=>{o=e.map("map",{crs:e.CRS.EPSG3857,center:[22.548857,114.064839],zoom:10}),e.marker([22.548857,114.064839]).addTo(o).bindPopup("<b>Hello world!</b>"),e.tileLayer(p,{noWrap:!0,attribution:a}).addTo(o),o.on("popupopen",t=>{alert("Popup弹出！")}),o.on("popupclose",t=>{alert("Popup关闭！")})};return d(()=>{n()}),s(()=>{o&&(o.remove(),o=null)}),(t,f)=>(_(),i("div",m))}});const b=c(l,[["__scopeId","data-v-1d51834d"]]);export{b as default};
