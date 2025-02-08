/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{V as i}from"./vue-json-viewer-DpAkHSjH.js";import{f as c}from"./index-BL5slC2T.js";import{d as m,b as l,K as r,u as a,B as p,o as d}from"./vsv-element-plus-D84I6Pnf.js";import"./vue.runtime.esm-bundler-BVyvUwQO.js";import"./vsv-icon-DZABqXig.js";import"./vsv-nprogress-0btfRK0G.js";const _={class:"test2-container"},B=m({name:"Query",__name:"query",setup(y){const e=useRoute(),n=c(),{changeTabsMeta:s}=n,t=reactive({name:"",path:"",query:{}}),o=()=>{t.name=e.name,t.path=e.path,t.query=e.query,s({title:"Query",meta:{title:`Query id=${e.query.id} `}})};return watch(t,()=>{o()},{immediate:!0}),onActivated(()=>{o()}),(f,h)=>{const u=p("vab-alert");return d(),l("div",_,[r(u,{title:"Query id="+a(e).query.id},null,8,["title"]),r(a(i),{copyable:"","expand-depth":5,value:a(t)},null,8,["value"])])}}});export{B as default};
