/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 21:23:19 
 */
import{V as t}from"./vue-json-viewer-Ds6AD0x_.js";import{_ as o}from"./index-wMoNB7-P.js";import{B as r,o as s,b as n,K as p}from"./vsv-element-plus-CleF0dO9.js";import"./vue.runtime.esm-bundler-C4sU6E6-.js";import"./vsv-icon-DrZkBOPN.js";import"./vsv-nprogress-D5kd6v05.js";const i=defineComponent({components:{VabJsonViewer:t},props:{graphData:{type:Object,default:()=>{}}},data(){return{data:[]}},created(){this.data=JSON.parse(JSON.stringify([{edges:this.graphData.edges,nodes:this.graphData.nodes}]))}});function d(e,c,m,l,_,f){const a=r("vab-json-viewer");return s(),n("div",null,[p(a,{copyable:"","expand-depth":5,sort:"",value:e.data},null,8,["value"])])}const V=o(i,[["render",d]]);export{V as default};
