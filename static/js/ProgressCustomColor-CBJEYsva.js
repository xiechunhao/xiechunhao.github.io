/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:17:33 
 */
import{d as m,N as n,o as g,b as d,T as o,u as r,e as f,$ as v,bj as C,aj as b}from"./vsv-element-plus-CxGOTlXz.js";import{_ as h}from"./index-vqJMV2wg.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const k={class:"demo-progress"},x=m({__name:"ProgressCustomColor",setup(B){const e=ref(20),s=ref("var(----el-color-primary)"),l=[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"var(----el-color-primary)",percentage:80},{color:"#6f7ad3",percentage:100}],u=t=>t<30?"#909399":t<70?"#e6a23c":"#67c23a",p=()=>{e.value+=10,e.value>100&&(e.value=100)},_=()=>{e.value-=10,e.value<0&&(e.value=0)};return(t,N)=>{const c=n("el-progress"),a=n("el-button"),i=n("el-button-group");return g(),d("div",k,[o(c,{color:r(s),percentage:r(e)},null,8,["color","percentage"]),o(c,{color:u,percentage:r(e)},null,8,["percentage"]),o(c,{color:l,percentage:r(e)},null,8,["percentage"]),o(c,{color:l,percentage:r(e)},null,8,["percentage"]),f("div",null,[o(i,null,{default:v(()=>[o(a,{icon:r(C),onClick:_},null,8,["icon"]),o(a,{icon:r(b),onClick:p},null,8,["icon"])]),_:1})])])}}}),w=h(x,[["__scopeId","data-v-83b793d3"]]);export{w as default};
