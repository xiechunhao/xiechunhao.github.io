/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{_ as r}from"./index-BL5slC2T.js";import{b as l,o,A as n,B as t}from"./vsv-element-plus-D84I6Pnf.js";import"./vsv-icon-DZABqXig.js";import"./vsv-nprogress-0btfRK0G.js";const p=defineComponent({name:"PropertyDialog",props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object,default:()=>{}}},emits:["setPropertiesFinish"],data(){return{}},methods:{handleClose(){this.$emit("setPropertiesFinish")}}}),d={class:"property-dialog"};function i(e,m,c,f,u,y){const a=t("user"),s=t("common-property");return o(),l("div",d,[e.nodeData.type==="user"?(o(),n(a,{key:0,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"])):(o(),n(s,{key:1,lf:e.lf,"node-data":e.nodeData,onOnClose:e.handleClose},null,8,["lf","node-data","onOnClose"]))])}const O=r(p,[["render",i]]);export{O as default};
