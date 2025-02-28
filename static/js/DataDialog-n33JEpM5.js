/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{V as t}from"./vue-json-viewer-Bsx0nH-X.js";import{_ as o}from"./index-DXRDwnmL.js";import{b as r,o as s,L as n,D as p}from"./vsv-element-plus-DQNbQgVr.js";import"./vue.runtime.esm-bundler-Vd8xTem-.js";import"./vsv-icon-BSoeDgwL.js";import"./vsv-nprogress-BCb6Y0ID.js";const i=defineComponent({components:{VabJsonViewer:t},props:{graphData:{type:Object,default:()=>{}}},data(){return{data:[]}},created(){this.data=JSON.parse(JSON.stringify([{edges:this.graphData.edges,nodes:this.graphData.nodes}]))}});function d(e,c,m,l,_,f){const a=p("vab-json-viewer");return s(),r("div",null,[n(a,{copyable:"","expand-depth":5,sort:"",value:e.data},null,8,["value"])])}const V=o(i,[["render",d]]);export{V as default};
