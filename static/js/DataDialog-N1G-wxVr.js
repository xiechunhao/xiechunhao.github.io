/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{V as t}from"./vue-json-viewer-DtoI9Jsr.js";import{_ as o}from"./index-BnT9uhJE.js";import{F as r,o as s,b as n,M as p}from"./vsv-element-plus-CbS2IxKo.js";import"./vue.runtime.esm-bundler-lC7zizrY.js";import"./vsv-icon-93gfr_RM.js";import"./vsv-nprogress-DzPgnd7z.js";const i=defineComponent({components:{VabJsonViewer:t},props:{graphData:{type:Object,default:()=>{}}},data(){return{data:[]}},created(){this.data=JSON.parse(JSON.stringify([{edges:this.graphData.edges,nodes:this.graphData.nodes}]))}});function d(e,c,m,l,_,f){const a=r("vab-json-viewer");return s(),n("div",null,[p(a,{copyable:"","expand-depth":5,sort:"",value:e.data},null,8,["value"])])}const V=o(i,[["render",d]]);export{V as default};
