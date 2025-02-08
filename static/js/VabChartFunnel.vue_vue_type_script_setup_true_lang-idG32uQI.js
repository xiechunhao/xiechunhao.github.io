/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:33:27 
 */
import{_ as c}from"./index-DGkTrGHB.js";import p from"./index-CnNQ-yyf.js";import{a as _,s as d}from"./index-Ba9EqH5M.js";import{d as f,h as v,b5 as e,w as h,C as g,E as b,S,o as x,T as o,Z as l,u as y,b6 as C}from"./vsv-element-plus-B-S50adB.js";const F=f({name:"VabChartFunnel",__name:"VabChartFunnel",props:{title:{type:String,default:""}},setup(s){const m=_(),{theme:n}=d(m);let t;const a=v({grid:{top:20,right:20,bottom:20,left:20},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}%"},series:{name:"漏斗图",type:"funnel",left:"20%",top:20,bottom:20,width:"60%",min:0,max:100,minSize:"0%",maxSize:"100%",sort:"descending",gap:2,labelLine:{length:10,lineStyle:{width:1,type:"solid"}},emphasis:{label:{fontSize:12}},data:[{value:e(0,100),name:"访问"},{value:e(20,100),name:"咨询"},{value:e(40,100),name:"订单"},{value:e(60,100),name:"点击"},{value:e(80,100),name:"展现"}]}});return h(n.value,()=>{a.color=[n.value.color]},{immediate:!0}),g(()=>{t=setInterval(()=>{a.series.data=[{value:e(0,100),name:"访问"},{value:e(20,100),name:"咨询"},{value:e(40,100),name:"订单"},{value:e(60,100),name:"点击"},{value:e(80,100),name:"展现"}]},3e3)}),b(()=>{t&&clearInterval(t)}),(w,k)=>{const r=p,i=c,u=C;return x(),S(u,{lg:8,md:12,sm:24,xl:6,xs:24},{default:o(()=>[l(i,{"body-style":{height:"240px"},skeleton:"",title:s.title},{default:o(()=>[l(r,{option:y(a)},null,8,["option"])]),_:1},8,["title"])]),_:1})}}});export{F as _};
