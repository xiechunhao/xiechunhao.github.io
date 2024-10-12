/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 15:51:39 
 */
import{V as t}from"./vue-json-viewer-CEUKTOzi.js";import{_ as o}from"./index-xIgfXPDD.js";import{B as r,o as s,b as n,K as p}from"./vsv-element-plus-CqWB58IK.js";import"./vue.runtime.esm-bundler-C_Jw11Df.js";import"./vsv-icon-DZFdJ319.js";import"./vsv-nprogress-CYSXMSUQ.js";const i=defineComponent({components:{VabJsonViewer:t},props:{graphData:{type:Object,default:()=>{}}},data(){return{data:[]}},created(){this.data=JSON.parse(JSON.stringify([{edges:this.graphData.edges,nodes:this.graphData.nodes}]))}});function d(e,c,m,l,_,f){const a=r("vab-json-viewer");return s(),n("div",null,[p(a,{copyable:"","expand-depth":5,sort:"",value:e.data},null,8,["value"])])}const V=o(i,[["render",d]]);export{V as default};
