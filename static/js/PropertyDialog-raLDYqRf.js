/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-04-22 10:29:50 
 */
import a from"./CommonProperty-DJIHt-yK.js";import r from"./User-BXxOGCzj.js";import{_ as l}from"./index-CYCwqjW3.js";import{d as p,b as d,o,S as n}from"./vsv-element-plus-DhTKPhs0.js";import"./vsv-icon-DsDu4bUA.js";import"./vsv-nprogress-DdytmWMx.js";const i=p({name:"PropertyDialog",props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object,default:()=>{}}},emits:["setPropertiesFinish"],data(){return{}},methods:{handleClose(){this.$emit("setPropertiesFinish")}}}),m={class:"property-dialog"};function _(e,c,f,u,h,y){const t=r,s=a;return o(),d("div",m,[e.nodeData.type==="user"?(o(),n(t,{key:0,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"])):(o(),n(s,{key:1,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"]))])}const b=l(i,[["render",_]]);export{b as default};
