import{V as B,bY as y,M as T,aP as i,bZ as u}from"./chunks/reproj.9b488601.js";import{A as P,M as L}from"./chunks/index.a511ac44.js";import{X as x}from"./chunks/XYZ.94b2552a.js";import{T as k}from"./chunks/TileImage.70f39159.js";import{d as S,p as z,a3 as R,D as N,o as f,c as m,z as p,G as o,B as D,F as O,a as t,M as U,N as V,_ as Z,O as j}from"./chunks/framework.efc265d9.js";const X=e=>(U("data-v-07742da1"),e=e(),V(),e),Y={class:"btns"},$=X(()=>p("div",{id:"map"},null,-1)),G=S({__name:"index",setup(e){let c=null;const C=new k({source:new x({attributions:P,url:L,maxZoom:20})}),a=new B({center:[1295e4,486e4],zoom:11}),d=()=>{c=new T({target:"map",layers:[C],view:a})},r=y([123.24,41.5]),E=y([116.28,39.54]),h=y([121.29,31.14]),A=y([114.21,30.37]),g=y([113.15,23.08]);function _(s){let l=7.5625,n=2.75,F;return s<1/n?F=l*s*s:s<2/n?(s-=1.5/n,F=l*s*s+.75):s<2.5/n?(s-=2.25/n,F=l*s*s+.9375):(s-=2.625/n,F=l*s*s+.984375),F}function q(s){return Math.pow(2,-10*s)*Math.sin((s-.075)*(2*Math.PI)/.3)+1}const b=()=>{const s=a.getCenter();s&&a.animate({center:[s[0]+(r[0]-r[0])/2,s[1]+(r[1]-r[1])/2],rotation:Math.PI,easing:i},{center:r,rotation:2*Math.PI,easing:u})},w=()=>{a.animate({center:E,duration:2e3,easing:q})},v=()=>{a.animate({center:h,duration:2e3,easing:_})},M=()=>{const s=a.getRotation();a.animate({rotation:s+Math.PI,anchor:A,easing:i},{rotation:s+2*Math.PI,anchor:A,easing:u})},I=()=>{const l=a.getZoom();l&&(a.animate({center:g,duration:2e3}),a.animate({zoom:l-1,duration:2e3/2},{zoom:l,duration:2e3/2}))};return z(()=>{d()}),R(()=>{c&&(c.dispose(),c=null)}),(s,l)=>{const n=N("el-button");return f(),m(O,null,[p("div",Y,[o(n,{type:"primary",onClick:b},{default:D(()=>[t("旋转定位到沈阳")]),_:1}),o(n,{type:"primary",onClick:w},{default:D(()=>[t("弹性定位到北京")]),_:1}),o(n,{type:"primary",onClick:v},{default:D(()=>[t("反弹定位到上海")]),_:1}),o(n,{type:"primary",onClick:M},{default:D(()=>[t("围绕武汉旋转")]),_:1}),o(n,{type:"primary",onClick:I},{default:D(()=>[t("飞行定位到广州")]),_:1})]),$],64)}}});const J=Z(G,[["__scopeId","data-v-07742da1"]]),H=p("h1",{id:"动画效果",tabindex:"-1"},[t("动画效果 "),p("a",{class:"header-anchor",href:"#动画效果","aria-label":'Permalink to "动画效果"'},"​")],-1),K=p("div",{class:"tip custom-block"},[p("p",{class:"custom-block-title"},"TIP"),p("p",null,"点击按钮触发动画效果。")],-1),Q=j("",2),os=JSON.parse('{"title":"动画效果","description":"","frontmatter":{},"headers":[],"relativePath":"open-layers/map-controls/map-animation/index.md","filePath":"open-layers/map-controls/map-animation/index.md","lastUpdated":1687662745000}'),W={name:"open-layers/map-controls/map-animation/index.md"},ts=Object.assign(W,{setup(e){return(c,C)=>(f(),m("div",null,[H,K,o(J),Q]))}});export{os as __pageData,ts as default};
