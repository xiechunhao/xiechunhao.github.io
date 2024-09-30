/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-30 14:06:07 
 */
import{V as i}from"./vue-json-viewer-I94czhQz.js";import{f as c}from"./index-DMdRIM5p.js";import{d as m,N as l,o as p,b as d,T as r,u as a}from"./vsv-element-plus-CxGOTlXz.js";import"./vue.runtime.esm-bundler-DREBQweE.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const _={class:"test2-container"},T=m({name:"Query",__name:"query",setup(y){const e=useRoute(),n=c(),{changeTabsMeta:s}=n,t=reactive({name:"",path:"",query:{}}),o=()=>{t.name=e.name,t.path=e.path,t.query=e.query,s({title:"Query",meta:{title:`Query id=${e.query.id} `}})};return watch(t,()=>{o()},{immediate:!0}),onActivated(()=>{o()}),(f,h)=>{const u=l("vab-alert");return p(),d("div",_,[r(u,{title:"Query id="+a(e).query.id},null,8,["title"]),r(a(i),{copyable:"","expand-depth":5,value:a(t)},null,8,["value"])])}}});export{T as default};
