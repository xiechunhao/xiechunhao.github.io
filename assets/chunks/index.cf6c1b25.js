import{L as t}from"./leaflet-src.347f22be.js";import{A as d}from"./index.a511ac44.js";import{d as y,a4 as b,p as g,D as h,o as v,c as x,z as _,G as l,B as p,F as S,a as i,M as T,N as M,_ as C}from"./framework.57763b9a.js";import"./commonjsHelpers.042e6b4d.js";const I=n=>(T("data-v-ecb23cfb"),n=n(),M(),n),L={class:"top-bar"},k=I(()=>_("div",{id:"map"},null,-1)),w=y({__name:"index",setup(n){let e=null;const a=new t.FeatureGroup,m=()=>{e=t.map("map",{crs:t.CRS.EPSG3857,center:[30.5217,114.3948],dragging:!1,zoom:18}),t.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=55b4d4eaef95384c946e9bd1b99c5610",{noWrap:!0,attribution:d}).addTo(e),t.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=55b4d4eaef95384c946e9bd1b99c5610",{noWrap:!0,attribution:d}).addTo(e),t.polyline([[30.52247,114.39332],[30.5209,114.39332]],{color:"blue"}).addTo(a),t.rectangle([[30.52172,114.39359],[30.52153,114.39428]],{color:"red"}).addTo(a),e.addLayer(a)};b(()=>{e&&(e.remove(),e=null)});const u=()=>{const o=c();a.getLayers()[0].setStyle({color:o})},f=()=>{const o=c();a.getLayers()[1].setStyle({color:o})};g(()=>{m()});function c(){const o=Math.floor(Math.random()*256),s=Math.floor(Math.random()*256),r=Math.floor(Math.random()*256);return"rgb("+o+","+s+","+r+")"}return(o,s)=>{const r=h("el-button");return v(),x(S,null,[_("div",L,[l(r,{type:"primary",onClick:u},{default:p(()=>[i("修改线样式")]),_:1}),l(r,{type:"primary",onClick:f},{default:p(()=>[i("修改矩形样式")]),_:1})]),k],64)}}});const F=C(w,[["__scopeId","data-v-ecb23cfb"]]);export{F as default};
