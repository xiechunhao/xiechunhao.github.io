/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 13:58:02 
 */
import a from"./CommonProperty-B9yX7iOi.js";import r from"./User-HW9JDo9F.js";import{_ as l}from"./index-DuUxtc1j.js";import{d as p,a as d,o,R as n}from"./vsv-element-plus-CcCXTk6v.js";import"./vsv-icon-1Y3OapYK.js";import"./vsv-nprogress-D-M_H-zP.js";const i=p({name:"PropertyDialog",props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object,default:()=>{}}},emits:["setPropertiesFinish"],data(){return{}},methods:{handleClose(){this.$emit("setPropertiesFinish")}}}),m={class:"property-dialog"};function _(e,c,f,u,h,y){const t=r,s=a;return o(),d("div",m,[e.nodeData.type==="user"?(o(),n(t,{key:0,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"])):(o(),n(s,{key:1,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"]))])}const B=l(i,[["render",_]]);export{B as default};
