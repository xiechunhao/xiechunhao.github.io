import{L as o}from"./leaflet-src.347f22be.js";import{A as n}from"./index.a511ac44.js";import{d as i,p,a3 as l,D as _,o as u,c as m,z as d,G as f,B as v,F as x,a as y,M as b,N as T,_ as h}from"./framework.efc265d9.js";import"./commonjsHelpers.042e6b4d.js";const S=a=>(b("data-v-98d9de5a"),a=a(),T(),a),B={class:"top-bar"},I=S(()=>d("div",{id:"map"},null,-1)),k=i({__name:"index",setup(a){let t=null;const r=()=>{t=o.map("map",{crs:o.CRS.EPSG3857,center:[30.5217,114.3948],zoom:18}),o.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=55b4d4eaef95384c946e9bd1b99c5610",{noWrap:!0,attribution:n}).addTo(t),o.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=55b4d4eaef95384c946e9bd1b99c5610",{noWrap:!0,attribution:n}).addTo(t)};p(()=>{r()}),l(()=>{t&&(t.remove(),t=null)});function c(){if(t){for(let e=0;e<9;e++)o.polyline([[30.5207,114.3938+e*5e-4],[30.5227,114.3938+(e+1)*5e-4]],{color:"red"}).addTo(t);for(let e=0;e<9;e++)o.polyline([[30.5207+e*25e-5,114.3938+e*5e-4/8],[30.5207+e*25e-5,114.3978+e*5e-4/8]],{color:"red"}).addTo(t)}}return(e,C)=>{const s=_("el-button");return u(),m(x,null,[d("div",B,[f(s,{type:"primary",onClick:c},{default:v(()=>[y(" 添加平行四边形网格 ")]),_:1})]),I],64)}}});const D=h(k,[["__scopeId","data-v-98d9de5a"]]);export{D as default};
