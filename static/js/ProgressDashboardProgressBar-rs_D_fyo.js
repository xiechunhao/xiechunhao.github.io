/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:42:24 
 */
import{d,r as l,a7 as i,D as f,o as g,b as m,W as o,u as a,e as v,T as b,c7 as B,bp as h,bD as k,a9 as x,bX as C}from"./vsv-element-plus-DDEqdpLt.js";import{_ as E}from"./index-CaYPvDrq.js";import"./vsv-icon-PU6rYWNa.js";import"./vsv-nprogress-CAgsOcyS.js";const D={class:"demo-progress"},I=d({__name:"ProgressDashboardProgressBar",setup(P){const e=l(10),n=l(0),t=[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}],p=()=>{e.value+=10,e.value>100&&(e.value=100)},u=()=>{e.value-=10,e.value<0&&(e.value=0)};let r;return i(()=>{r=setInterval(()=>{n.value=n.value%100+10},500)}),f(()=>{clearInterval(r)}),(y,N)=>{const c=k,s=x,_=C;return g(),m("div",D,[o(c,{color:t,percentage:a(e),type:"dashboard"},null,8,["percentage"]),o(c,{color:t,percentage:a(n),type:"dashboard"},null,8,["percentage"]),v("div",null,[o(_,null,{default:b(()=>[o(s,{icon:a(B),onClick:u},null,8,["icon"]),o(s,{icon:a(h),onClick:p},null,8,["icon"])]),_:1})])])}}}),T=E(I,[["__scopeId","data-v-ad886539"]]);export{T as default};
