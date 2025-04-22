/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-04-22 10:29:50 
 */
import{V as a}from"./vue-json-viewer-BgZZZpqc.js";import{_ as o}from"./index-CYCwqjW3.js";import{d as n,R as r,b as s,o as p,Z as d}from"./vsv-element-plus-DhTKPhs0.js";import"./vue.runtime.esm-bundler-FUqzvjd_.js";import"./vsv-icon-DsDu4bUA.js";import"./vsv-nprogress-DdytmWMx.js";const i=n({components:{VabJsonViewer:a},props:{graphData:{type:Object,default:()=>{}}},data(){return{data:[]}},created(){this.data=JSON.parse(JSON.stringify([{edges:this.graphData.edges,nodes:this.graphData.nodes}]))}});function c(e,m,_,l,u,f){const t=r("vab-json-viewer");return p(),s("div",null,[d(t,{copyable:"","expand-depth":5,sort:"",value:e.data},null,8,["value"])])}const j=o(i,[["render",c]]);export{j as default};
