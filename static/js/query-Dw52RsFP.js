/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{V as i}from"./vue-json-viewer-Bsx0nH-X.js";import{k as c}from"./index-DXRDwnmL.js";import{d as m,b as l,L as r,u as a,D as p,o as d}from"./vsv-element-plus-DQNbQgVr.js";import"./vue.runtime.esm-bundler-Vd8xTem-.js";import"./vsv-icon-BSoeDgwL.js";import"./vsv-nprogress-BCb6Y0ID.js";const _={class:"test2-container"},x=m({name:"Query",__name:"query",setup(y){const e=useRoute(),n=c(),{changeTabsMeta:s}=n,t=reactive({name:"",path:"",query:{}}),o=()=>{t.name=e.name,t.path=e.path,t.query=e.query,s({title:"Query",meta:{title:`Query id=${e.query.id} `}})};return watch(t,()=>{o()},{immediate:!0}),onActivated(()=>{o()}),(h,b)=>{const u=p("vab-alert");return d(),l("div",_,[r(u,{title:"Query id="+a(e).query.id},null,8,["title"]),r(a(i),{copyable:"","expand-depth":5,value:a(t)},null,8,["value"])])}}});export{x as default};
