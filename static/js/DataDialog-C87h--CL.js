/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-30 14:06:07 
 */
import{V as t}from"./vue-json-viewer-I94czhQz.js";import{_ as o}from"./index-DMdRIM5p.js";import{N as r,o as s,b as n,T as p}from"./vsv-element-plus-CxGOTlXz.js";import"./vue.runtime.esm-bundler-DREBQweE.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const i=defineComponent({components:{VabJsonViewer:t},props:{graphData:{type:Object,default:()=>{}}},data(){return{data:[]}},created(){this.data=JSON.parse(JSON.stringify([{edges:this.graphData.edges,nodes:this.graphData.nodes}]))}});function d(e,c,m,l,_,f){const a=r("vab-json-viewer");return s(),n("div",null,[p(a,{copyable:"","expand-depth":5,sort:"",value:e.data},null,8,["value"])])}const N=o(i,[["render",d]]);export{N as default};
