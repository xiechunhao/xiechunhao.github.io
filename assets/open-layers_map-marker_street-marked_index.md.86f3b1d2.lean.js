import{G as y}from"./chunks/GeoJSON.2b49e2fc.js";import{M as D,V as A,az as C,B as i}from"./chunks/reproj.50e0d4ab.js";import{A as u,M as m}from"./chunks/index.47495de9.js";import{S as f,T as d,F as _,V as E}from"./chunks/Vector.f72cf874.js";import{T as q}from"./chunks/TileImage.36abd4f0.js";import{X as x}from"./chunks/XYZ.eaf43adc.js";import{V as g}from"./chunks/Vector.0afd591d.js";import{F as w}from"./chunks/FullScreen.9a3e590b.js";import{d as T,p as S,a3 as h,o as t,c,_ as v,G as V,z as s,a as l,O as M}from"./chunks/framework.166469be.js";import"./chunks/GeometryCollection.2da265b8.js";import"./chunks/Feature.4c59703c.js";import"./chunks/LineString.e8af5305.js";import"./chunks/MultiLineString.5776de5d.js";const b={id:"map"},B=T({__name:"index",setup(r){const a=new f({text:new d({font:'bold 11px "Open Sans", "Arial Unicode MS", "sans-serif"',placement:"line",fill:new _({color:"white"})})}),o=new q({source:new x({attributions:u,url:m,maxZoom:20})}),p=[1817379,6139595,1827851,6143616];let n=null;const F=()=>{n=new D({target:"map",layers:[o,new g({declutter:!0,source:new E({format:new y,url:"/geojson/vienna-streets.geojson"}),style:function(e){return a.getText().setText(e.get("name")),a}})],view:new A({extent:p,center:C(p),zoom:17,minZoom:14}),controls:i().extend([new w])})};return S(()=>{F()}),h(()=>{n&&(n.dispose(),n=null)}),(e,P)=>(t(),c("div",b))}});const k=v(B,[["__scopeId","data-v-f6d0c87b"]]),N=s("h1",{id:"街道标注",tabindex:"-1"},[l("街道标注 "),s("a",{class:"header-anchor",href:"#街道标注","aria-label":'Permalink to "街道标注"'},"​")],-1),O=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[l("通过加载 "),s("code",null,"geojson"),l(" 数据渲染街道标注。")])],-1),I=M("",2),W=JSON.parse('{"title":"街道标注","description":"","frontmatter":{},"headers":[],"relativePath":"open-layers/map-marker/street-marked/index.md","filePath":"open-layers/map-marker/street-marked/index.md"}'),U={name:"open-layers/map-marker/street-marked/index.md"},ss=Object.assign(U,{setup(r){return(a,o)=>(t(),c("div",null,[N,O,V(k),I]))}});export{W as __pageData,ss as default};
