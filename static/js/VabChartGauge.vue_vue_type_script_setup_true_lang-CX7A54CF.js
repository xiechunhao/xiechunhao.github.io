/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 16:06:30 
 */
import{_ as u}from"./index-Cb-9Eo_O.js";import p from"./index-Bgr4NDc5.js";import{c as _,s as f}from"./index-D08hoOyC.js";import{d,p as g,b6 as a,w as h,E as v,D as b,o as C,S,T as n,W as r,u as x,b7 as w}from"./vsv-element-plus-OoOmiKKG.js";const G=d({name:"VabChartGauge",__name:"VabChartGauge",props:{title:{type:String,default:""}},setup(s){const l=_(),{theme:o}=f(l);let e;const t=g({grid:{top:20,right:20,bottom:20,left:20},tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:{name:"Pressure",type:"gauge",radius:"100%",progress:{show:!0},detail:{formatter:"{value}",valueAnimation:!0,fontSize:14,offsetCenter:[0,"70%"]},data:[{value:a(0,100),name:"SCORE"}]}});return h(o.value,()=>{t.color=o.value.color},{immediate:!0}),v(()=>{e=setInterval(()=>{t.series.data=[{value:a(0,100),name:"SCORE"}]},3e3)}),b(()=>{e&&clearInterval(e)}),(y,E)=>{const i=p,m=u,c=w;return C(),S(c,{lg:8,md:12,sm:24,xl:6,xs:24},{default:n(()=>[r(m,{"body-style":{height:"240px"},skeleton:"",title:s.title},{default:n(()=>[r(i,{option:x(t)},null,8,["option"])]),_:1},8,["title"])]),_:1})}}});export{G as _};
