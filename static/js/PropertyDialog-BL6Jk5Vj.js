/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{_ as r}from"./index-BnT9uhJE.js";import{F as n,o,b as l,D as t}from"./vsv-element-plus-CbS2IxKo.js";import"./vsv-icon-93gfr_RM.js";import"./vsv-nprogress-DzPgnd7z.js";const p=defineComponent({name:"PropertyDialog",props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object,default:()=>{}}},emits:["setPropertiesFinish"],data(){return{}},methods:{handleClose(){this.$emit("setPropertiesFinish")}}}),d={class:"property-dialog"};function i(e,m,c,f,u,y){const a=n("user"),s=n("common-property");return o(),l("div",d,[e.nodeData.type==="user"?(o(),t(a,{key:0,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"])):(o(),t(s,{key:1,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"]))])}const O=r(p,[["render",i]]);export{O as default};
