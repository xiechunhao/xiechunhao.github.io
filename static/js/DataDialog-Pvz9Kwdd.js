/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 13:58:02 
 */
import{V as t}from"./vue-json-viewer-CoEMWtWz.js";import{_ as o}from"./index-DuUxtc1j.js";import{d as n,Q as r,a as s,o as p,Y as d}from"./vsv-element-plus-CcCXTk6v.js";import"./index-79o-Uh7M.js";import"./vsv-icon-1Y3OapYK.js";import"./vsv-nprogress-D-M_H-zP.js";const i=n({components:{VabJsonViewer:t},props:{graphData:{type:Object,default:()=>{}}},data(){return{data:[]}},created(){this.data=JSON.parse(JSON.stringify([{edges:this.graphData.edges,nodes:this.graphData.nodes}]))}});function c(e,m,_,l,u,f){const a=r("vab-json-viewer");return p(),s("div",null,[d(a,{copyable:"","expand-depth":5,sort:"",value:e.data},null,8,["value"])])}const j=o(i,[["render",c]]);export{j as default};
