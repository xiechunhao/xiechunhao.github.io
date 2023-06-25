import{C as g}from"./chunks/Circle.958b1633.js";import{G as q}from"./chunks/GeoJSON.2b49e2fc.js";import{A as f,M as w}from"./chunks/index.47495de9.js";import{T as S}from"./chunks/TileImage.36abd4f0.js";import{X as E}from"./chunks/XYZ.eaf43adc.js";import{C as y,a as s,S as n,F as p,V as _,c as h}from"./chunks/Vector.f72cf874.js";import{V as k}from"./chunks/Vector.0afd591d.js";import{M as P,V as b}from"./chunks/reproj.50e0d4ab.js";import{d as L,p as v,a3 as T,o as F,c as C,_ as M,G as B,z as a,a as t,O as V}from"./chunks/framework.166469be.js";import"./chunks/GeometryCollection.2da265b8.js";import"./chunks/Feature.4c59703c.js";import"./chunks/LineString.e8af5305.js";import"./chunks/MultiLineString.5776de5d.js";const G={id:"map"},N=L({__name:"index",setup(A){const c=new S({source:new E({attributions:f,url:w,maxZoom:20})}),o=new y({radius:5,fill:void 0,stroke:new s({color:"red",width:1})}),i={Point:new n({image:o}),LineString:new n({stroke:new s({color:"green",width:1})}),MultiLineString:new n({stroke:new s({color:"green",width:1})}),MultiPoint:new n({image:o}),MultiPolygon:new n({stroke:new s({color:"yellow",width:1}),fill:new p({color:"rgba(255, 255, 0, 0.1)"})}),Polygon:new n({stroke:new s({color:"blue",lineDash:[4],width:3}),fill:new p({color:"rgba(0, 0, 255, 0.1)"})}),GeometryCollection:new n({stroke:new s({color:"magenta",width:2}),fill:new p({color:"magenta"}),image:new y({radius:10,fill:void 0,stroke:new s({color:"magenta"})})}),Circle:new n({stroke:new s({color:"red",width:2}),fill:new p({color:"rgba(255,0,0,0.2)"})})},u=function(r){const e=r.getGeometry();if(e)return i[e.getType()]},m={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:3857"}},features:[{type:"Feature",geometry:{type:"Point",coordinates:[0,0]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,2e6],[8e6,-2e6]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-5e6,-1e6],[-3e6,-1e6],[-4e6,1e6],[-5e6,-1e6]]]}},{type:"Feature",geometry:{type:"MultiLineString",coordinates:[[[-1e6,-75e4],[-1e6,75e4]],[[1e6,-75e4],[1e6,75e4]],[[-75e4,-1e6],[75e4,-1e6]],[[-75e4,1e6],[75e4,1e6]]]}},{type:"Feature",geometry:{type:"MultiPolygon",coordinates:[[[[-5e6,6e6],[-3e6,6e6],[-3e6,8e6],[-5e6,8e6],[-5e6,6e6]]],[[[-2e6,6e6],[0,6e6],[0,8e6],[-2e6,8e6],[-2e6,6e6]]],[[[1e6,6e6],[3e6,6e6],[3e6,8e6],[1e6,8e6],[1e6,6e6]]]]}},{type:"Feature",geometry:{type:"GeometryCollection",geometries:[{type:"LineString",coordinates:[[-5e6,-5e6],[0,-5e6]]},{type:"Point",coordinates:[4e6,-5e6]},{type:"Polygon",coordinates:[[[1e6,-6e6],[3e6,-6e6],[2e6,-4e6],[1e6,-6e6]]]}]}}]},D=new _({features:new q().readFeatures(m)});D.addFeature(new h(new g([5e6,7e6],1e6)));const d=new k({source:D,style:u});let l=null;return v(()=>{l=new P({layers:[c,d],target:"map",view:new b({center:[0,0],zoom:2})})}),T(()=>{l&&(l.dispose(),l=null)}),(r,e)=>(F(),C("div",G))}});const O=M(N,[["__scopeId","data-v-26fc7bb8"]]),x=a("h1",{id:"geojson",tabindex:"-1"},[t("GeoJSON "),a("a",{class:"header-anchor",href:"#geojson","aria-label":'Permalink to "GeoJSON"'},"​")],-1),j=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"TIP"),a("p",null,[t("加载 "),a("code",null,"GeoJSON"),t(" 数据")])],-1),I=V("",2),as=JSON.parse('{"title":"GeoJSON","description":"","frontmatter":{},"headers":[],"relativePath":"open-layers/third-party-map-display/geo-json/index.md","filePath":"open-layers/third-party-map-display/geo-json/index.md"}'),J={name:"open-layers/third-party-map-display/geo-json/index.md"},ls=Object.assign(J,{setup(A){return(c,o)=>(F(),C("div",null,[x,j,B(O),I]))}});export{as as __pageData,ls as default};
