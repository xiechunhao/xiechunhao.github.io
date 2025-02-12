/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-12 09:55:11 
 */
import{V as a}from"./vue-json-viewer-2LK6abYd.js";import{_ as o}from"./index-I0Q3W04Q.js";import{d as n,R as r,b as s,o as p,Z as d}from"./vsv-element-plus-B-S50adB.js";import"./vue.runtime.esm-bundler-Ce_iZ8b_.js";import"./vsv-icon-BcEnJ7dJ.js";import"./vsv-nprogress-Bmiy9T8n.js";const i=n({components:{VabJsonViewer:a},props:{graphData:{type:Object,default:()=>{}}},data(){return{data:[]}},created(){this.data=JSON.parse(JSON.stringify([{edges:this.graphData.edges,nodes:this.graphData.nodes}]))}});function c(e,m,_,l,u,f){const t=r("vab-json-viewer");return p(),s("div",null,[d(t,{copyable:"","expand-depth":5,sort:"",value:e.data},null,8,["value"])])}const j=o(i,[["render",c]]);export{j as default};
