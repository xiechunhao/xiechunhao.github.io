import{D as q,c as g}from"./chunks/Draw.15ac7265.js";import{A as v,M as B}from"./chunks/index.a511ac44.js";import{V as D,S as h,F as C,a as _,C as w}from"./chunks/Vector.e7fd2c77.js";import{V as S}from"./chunks/Vector.ef038271.js";import{T}from"./chunks/TileImage.70f39159.js";import{X as b}from"./chunks/XYZ.94b2552a.js";import{M as P,V as x,P as G}from"./chunks/reproj.9b488601.js";import{d as V,a2 as I,p as L,a3 as M,o as A,c as i,_ as N,G as k,z as o,a as R,O as U}from"./chunks/framework.efc265d9.js";import"./chunks/Circle.fe3ab237.js";import"./chunks/GeometryCollection.bd3c0be4.js";import"./chunks/LineString.2b94a2e9.js";import"./chunks/MultiLineString.f00700b3.js";const X=V({__name:"index",setup(u){let s=null,c=null;const f=I({value:"Point",options:[{label:"无",value:"None"},{label:"点",value:"Point"},{label:"线",value:"LineString"},{label:"多边形",value:"Polygon"},{label:"圆",value:"Circle"},{label:"正方形",value:"Square"},{label:"长方形",value:"Box"}]});let a=new D({wrapX:!1});const r=new S({source:a,style:new h({fill:new C({color:"rgba(255, 255, 255, 0.2)"}),stroke:new _({color:"#ff0000",width:2}),image:new w({radius:7,fill:new C({color:"#ff0000"})})})}),m=new T({source:new b({attributions:v,url:B,maxZoom:20})}),d=()=>{s=new P({target:"map",layers:[m],view:new x({projection:"EPSG:4326",center:[0,0],zoom:5})})},E=()=>{let l=f.value;if(l!=="None"){a==null&&(a=new D({wrapX:!1}),r.setSource(a));let e,F;l==="Square"?(l="Circle",e=g(4)):l==="Box"&&(l="LineString",F=2,e=(y,t)=>{const n=y[0],p=y[1];return t||(t=new G([[n,[n[0],p[1]],p,[p[0],n[1]],n]])),t.setCoordinates([[n,[n[0],p[1]],p,[p[0],n[1]],n]]),t}),c=new q({source:a,type:l,geometryFunction:e,maxPoints:F}),s==null||s.addInteraction(c)}else a=null,r.setSource(a)};return L(()=>{d(),s==null||s.addLayer(r),E()}),M(()=>{s&&(s.dispose(),s=null)}),(l,e)=>(A(),i("div",null,"11111"))}});const O=N(X,[["__scopeId","data-v-19b3209b"]]),Z=o("h1",{id:"绘制几何图形",tabindex:"-1"},[R("绘制几何图形 "),o("a",{class:"header-anchor",href:"#绘制几何图形","aria-label":'Permalink to "绘制几何图形"'},"​")],-1),z=o("div",{class:"tip custom-block"},[o("p",{class:"custom-block-title"},"TIP"),o("p",null,"可以选择不同的类型，绘制不同的几何图形。")],-1),j=U("",2),es=JSON.parse('{"title":"绘制几何图形","description":"","frontmatter":{},"headers":[],"relativePath":"datav/highte/test2/index.md","filePath":"datav/highte/test2/index.md","lastUpdated":1687749336000}'),Y={name:"datav/highte/test2/index.md"},ts=Object.assign(Y,{setup(u){return(s,c)=>(A(),i("div",null,[Z,z,k(O),j]))}});export{es as __pageData,ts as default};
