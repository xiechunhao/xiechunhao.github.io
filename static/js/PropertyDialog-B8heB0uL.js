/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{_ as r}from"./index-D_keMk_X.js";import{a as l,o,z as n,A as t}from"./vsv-element-plus-CWjYVfvE.js";import"./vsv-icon-CzoHxvAi.js";import"./vsv-nprogress-D-M_H-zP.js";const p=defineComponent({name:"PropertyDialog",props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object,default:()=>{}}},emits:["setPropertiesFinish"],data(){return{}},methods:{handleClose(){this.$emit("setPropertiesFinish")}}}),d={class:"property-dialog"};function i(e,m,c,f,u,y){const a=t("user"),s=t("common-property");return o(),l("div",d,[e.nodeData.type==="user"?(o(),n(a,{key:0,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"])):(o(),n(s,{key:1,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"]))])}const O=r(p,[["render",i]]);export{O as default};
