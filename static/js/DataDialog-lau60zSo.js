/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 16:06:55 
 */
import{V as t}from"./vue-json-viewer-oFDMWIR8.js";import{_ as o}from"./index-D0bnGtHt.js";import{N as r,o as s,b as n,T as p}from"./vsv-element-plus-Brnt1GMz.js";import"./vue.runtime.esm-bundler-DA1npKoc.js";import"./vsv-icon-CX0cXpax.js";import"./vsv-nprogress-Cnw-SRAI.js";const i=defineComponent({components:{VabJsonViewer:t},props:{graphData:{type:Object,default:()=>{}}},data(){return{data:[]}},created(){this.data=JSON.parse(JSON.stringify([{edges:this.graphData.edges,nodes:this.graphData.nodes}]))}});function d(e,c,m,l,_,f){const a=r("vab-json-viewer");return s(),n("div",null,[p(a,{copyable:"","expand-depth":5,sort:"",value:e.data},null,8,["value"])])}const N=o(i,[["render",d]]);export{N as default};
