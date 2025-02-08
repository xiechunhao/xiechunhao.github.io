/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{V as t}from"./vue-json-viewer-DpAkHSjH.js";import{_ as o}from"./index-BL5slC2T.js";import{b as r,o as s,K as n,B as p}from"./vsv-element-plus-D84I6Pnf.js";import"./vue.runtime.esm-bundler-BVyvUwQO.js";import"./vsv-icon-DZABqXig.js";import"./vsv-nprogress-0btfRK0G.js";const i=defineComponent({components:{VabJsonViewer:t},props:{graphData:{type:Object,default:()=>{}}},data(){return{data:[]}},created(){this.data=JSON.parse(JSON.stringify([{edges:this.graphData.edges,nodes:this.graphData.nodes}]))}});function d(e,c,m,l,_,f){const a=p("vab-json-viewer");return s(),r("div",null,[n(a,{copyable:"","expand-depth":5,sort:"",value:e.data},null,8,["value"])])}const V=o(i,[["render",d]]);export{V as default};
