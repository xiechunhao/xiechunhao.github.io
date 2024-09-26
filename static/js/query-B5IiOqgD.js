/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{V as i}from"./vue-json-viewer-DtoI9Jsr.js";import{f as c}from"./index-BnT9uhJE.js";import{d as m,b as l,M as r,u as a,F as p,o as d}from"./vsv-element-plus-CbS2IxKo.js";import"./vue.runtime.esm-bundler-lC7zizrY.js";import"./vsv-icon-93gfr_RM.js";import"./vsv-nprogress-DzPgnd7z.js";const _={class:"test2-container"},k=m({name:"Query",__name:"query",setup(y){const e=useRoute(),n=c(),{changeTabsMeta:s}=n,t=reactive({name:"",path:"",query:{}}),o=()=>{t.name=e.name,t.path=e.path,t.query=e.query,s({title:"Query",meta:{title:`Query id=${e.query.id} `}})};return watch(t,()=>{o()},{immediate:!0}),onActivated(()=>{o()}),(f,h)=>{const u=p("vab-alert");return d(),l("div",_,[r(u,{title:"Query id="+a(e).query.id},null,8,["title"]),r(a(i),{copyable:"","expand-depth":5,value:a(t)},null,8,["value"])])}}});export{k as default};
