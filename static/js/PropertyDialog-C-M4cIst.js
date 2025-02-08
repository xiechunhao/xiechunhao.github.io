/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:42:24 
 */
import a from"./CommonProperty-jik91N8Y.js";import r from"./User-NnDcehBc.js";import{_ as l}from"./index-CaYPvDrq.js";import{d as p,o,b as d,S as n}from"./vsv-element-plus-DDEqdpLt.js";import"./vsv-icon-PU6rYWNa.js";import"./vsv-nprogress-CAgsOcyS.js";const i=p({name:"PropertyDialog",props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object,default:()=>{}}},emits:["setPropertiesFinish"],data(){return{}},methods:{handleClose(){this.$emit("setPropertiesFinish")}}}),m={class:"property-dialog"};function _(e,c,f,u,h,y){const t=r,s=a;return o(),d("div",m,[e.nodeData.type==="user"?(o(),n(t,{key:0,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"])):(o(),n(s,{key:1,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"]))])}const b=l(i,[["render",_]]);export{b as default};
