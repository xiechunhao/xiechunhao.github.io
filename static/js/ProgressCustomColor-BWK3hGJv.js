/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{d as m,b as g,L as o,e as d,u as r,D as n,V as f,o as v,bk as C,a7 as b}from"./vsv-element-plus-DQNbQgVr.js";import{_ as k}from"./index-DXRDwnmL.js";import"./vsv-icon-BSoeDgwL.js";import"./vsv-nprogress-BCb6Y0ID.js";const h={class:"demo-progress"},x=m({__name:"ProgressCustomColor",setup(B){const e=ref(20),s=ref("var(----el-color-primary)"),l=[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"var(----el-color-primary)",percentage:80},{color:"#6f7ad3",percentage:100}],u=t=>t<30?"#909399":t<70?"#e6a23c":"#67c23a",p=()=>{e.value+=10,e.value>100&&(e.value=100)},_=()=>{e.value-=10,e.value<0&&(e.value=0)};return(t,V)=>{const c=n("el-progress"),a=n("el-button"),i=n("el-button-group");return v(),g("div",h,[o(c,{color:r(s),percentage:r(e)},null,8,["color","percentage"]),o(c,{color:u,percentage:r(e)},null,8,["percentage"]),o(c,{color:l,percentage:r(e)},null,8,["percentage"]),o(c,{color:l,percentage:r(e)},null,8,["percentage"]),d("div",null,[o(i,null,{default:f(()=>[o(a,{icon:r(C),onClick:_},null,8,["icon"]),o(a,{icon:r(b),onClick:p},null,8,["icon"])]),_:1})])])}}}),D=k(x,[["__scopeId","data-v-83b793d3"]]);export{D as default};
