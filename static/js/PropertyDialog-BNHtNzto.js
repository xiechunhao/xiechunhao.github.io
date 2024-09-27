/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 21:23:19 
 */
import{_ as r}from"./index-wMoNB7-P.js";import{B as n,o,b as l,A as t}from"./vsv-element-plus-CleF0dO9.js";import"./vsv-icon-DrZkBOPN.js";import"./vsv-nprogress-D5kd6v05.js";const p=defineComponent({name:"PropertyDialog",props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object,default:()=>{}}},emits:["setPropertiesFinish"],data(){return{}},methods:{handleClose(){this.$emit("setPropertiesFinish")}}}),d={class:"property-dialog"};function i(e,m,c,f,u,y){const a=n("user"),s=n("common-property");return o(),l("div",d,[e.nodeData.type==="user"?(o(),t(a,{key:0,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"])):(o(),t(s,{key:1,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"]))])}const O=r(p,[["render",i]]);export{O as default};
