/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:42:24 
 */
import{V as a}from"./vue-json-viewer-CYH9DI1m.js";import{_ as o}from"./index-CaYPvDrq.js";import{d as n,$ as r,o as s,b as p,W as d}from"./vsv-element-plus-DDEqdpLt.js";import"./vue.runtime.esm-bundler-CFlbZaFX.js";import"./vsv-icon-PU6rYWNa.js";import"./vsv-nprogress-CAgsOcyS.js";const i=n({components:{VabJsonViewer:a},props:{graphData:{type:Object,default:()=>{}}},data(){return{data:[]}},created(){this.data=JSON.parse(JSON.stringify([{edges:this.graphData.edges,nodes:this.graphData.nodes}]))}});function c(e,m,_,l,u,f){const t=r("vab-json-viewer");return s(),p("div",null,[d(t,{copyable:"","expand-depth":5,sort:"",value:e.data},null,8,["value"])])}const j=o(i,[["render",c]]);export{j as default};
