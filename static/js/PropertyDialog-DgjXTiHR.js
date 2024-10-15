/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-15 13:32:11 
 */
import a from"./CommonProperty-cT2bb9SR.js";import r from"./User-Cfwk7hjp.js";import{_ as l}from"./index-B-0YFqa2.js";import{d as p,o,b as d,S as n}from"./vsv-element-plus-OoOmiKKG.js";import"./vsv-icon-Beiog8Do.js";import"./vsv-nprogress-CNnfF26O.js";const i=p({name:"PropertyDialog",props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object,default:()=>{}}},emits:["setPropertiesFinish"],data(){return{}},methods:{handleClose(){this.$emit("setPropertiesFinish")}}}),m={class:"property-dialog"};function _(e,c,f,u,h,y){const t=r,s=a;return o(),d("div",m,[e.nodeData.type==="user"?(o(),n(t,{key:0,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"])):(o(),n(s,{key:1,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"]))])}const b=l(i,[["render",_]]);export{b as default};
