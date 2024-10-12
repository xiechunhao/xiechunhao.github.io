/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 16:13:56 
 */
import{V as a}from"./vue-json-viewer-CxL0KtcC.js";import{_ as o}from"./index-BmNxnkLm.js";import{d as n,$ as r,o as s,b as p,W as d}from"./vsv-element-plus-OoOmiKKG.js";import"./vue.runtime.esm-bundler-NyJMfjs9.js";import"./vsv-icon-Df9CwUcM.js";import"./vsv-nprogress-CNnfF26O.js";const i=n({components:{VabJsonViewer:a},props:{graphData:{type:Object,default:()=>{}}},data(){return{data:[]}},created(){this.data=JSON.parse(JSON.stringify([{edges:this.graphData.edges,nodes:this.graphData.nodes}]))}});function c(e,m,_,l,u,f){const t=r("vab-json-viewer");return s(),p("div",null,[d(t,{copyable:"","expand-depth":5,sort:"",value:e.data},null,8,["value"])])}const j=o(i,[["render",c]]);export{j as default};
