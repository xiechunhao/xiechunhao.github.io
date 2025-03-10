/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-10 23:35:01 
 */
import{V as a}from"./vue-json-viewer-BhvPkNiH.js";import{_ as o}from"./index-8bsmFSvN.js";import{d as n,R as r,b as s,o as p,Z as d}from"./vsv-element-plus-BKBbsRMj.js";import"./vue.runtime.esm-bundler-CvwARPD1.js";import"./vsv-icon-BFB3gnxk.js";import"./vsv-nprogress-D6dk31gD.js";const i=n({components:{VabJsonViewer:a},props:{graphData:{type:Object,default:()=>{}}},data(){return{data:[]}},created(){this.data=JSON.parse(JSON.stringify([{edges:this.graphData.edges,nodes:this.graphData.nodes}]))}});function c(e,m,_,l,u,f){const t=r("vab-json-viewer");return p(),s("div",null,[d(t,{copyable:"","expand-depth":5,sort:"",value:e.data},null,8,["value"])])}const j=o(i,[["render",c]]);export{j as default};
