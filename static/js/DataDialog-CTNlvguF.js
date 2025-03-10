/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{V as t}from"./vue-json-viewer-BA7cfJ1t.js";import{_ as o}from"./index-D_keMk_X.js";import{a as r,o as s,J as n,A as p}from"./vsv-element-plus-CWjYVfvE.js";import"./index-1E7OnknW.js";import"./vsv-icon-CzoHxvAi.js";import"./vsv-nprogress-D-M_H-zP.js";const i=defineComponent({components:{VabJsonViewer:t},props:{graphData:{type:Object,default:()=>{}}},data(){return{data:[]}},created(){this.data=JSON.parse(JSON.stringify([{edges:this.graphData.edges,nodes:this.graphData.nodes}]))}});function d(e,c,m,l,_,f){const a=p("vab-json-viewer");return s(),r("div",null,[n(a,{copyable:"","expand-depth":5,sort:"",value:e.data},null,8,["value"])])}const J=o(i,[["render",d]]);export{J as default};
