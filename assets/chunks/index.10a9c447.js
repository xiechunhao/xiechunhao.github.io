import{K as t}from"./KML.37535b8a.js";import{M as a,V as s}from"./reproj.50e0d4ab.js";import{V as n}from"./Vector.f72cf874.js";import{X as m}from"./XYZ.eaf43adc.js";import{A as p,M as i}from"./index.47495de9.js";import{T as c}from"./TileImage.36abd4f0.js";import{V as _}from"./Vector.0afd591d.js";import{d as l,p as d,a3 as f,o as u,c as w,_ as x}from"./framework.166469be.js";import"./GeometryCollection.2da265b8.js";import"./LineString.e8af5305.js";import"./MultiLineString.5776de5d.js";import"./xsd.5dc9ad32.js";import"./Feature.4c59703c.js";const v={id:"map",class:"map"},M=l({__name:"index",setup(V){const e=new c({source:new m({attributions:p,url:i,maxZoom:20})}),r=new _({source:new n({url:"/kml/2022.kml",format:new t})});let o=null;return d(()=>{o=new a({layers:[e,r],target:"map",view:new s({center:[876970.8463461736,5859807853963373e-9],projection:"EPSG:3857",zoom:10})})}),f(()=>{o&&(o.dispose(),o=null)}),(y,T)=>(u(),w("div",v))}});const X=x(M,[["__scopeId","data-v-d9726f53"]]);export{X as default};
