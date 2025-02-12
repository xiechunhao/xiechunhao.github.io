/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-12 09:55:11 
 */
import a from"./CommonProperty-B5ammR2F.js";import r from"./User-CmX6GIVb.js";import{_ as l}from"./index-I0Q3W04Q.js";import{d as p,b as d,o,S as n}from"./vsv-element-plus-B-S50adB.js";import"./vsv-icon-BcEnJ7dJ.js";import"./vsv-nprogress-Bmiy9T8n.js";const i=p({name:"PropertyDialog",props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object,default:()=>{}}},emits:["setPropertiesFinish"],data(){return{}},methods:{handleClose(){this.$emit("setPropertiesFinish")}}}),m={class:"property-dialog"};function _(e,c,f,u,h,y){const t=r,s=a;return o(),d("div",m,[e.nodeData.type==="user"?(o(),n(t,{key:0,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"])):(o(),n(s,{key:1,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"]))])}const b=l(i,[["render",_]]);export{b as default};
