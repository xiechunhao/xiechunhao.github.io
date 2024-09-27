/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 21:23:19 
 */
import{V as i}from"./vue-json-viewer-Ds6AD0x_.js";import{f as c}from"./index-wMoNB7-P.js";import{d as m,b as l,K as r,u as a,B as p,o as d}from"./vsv-element-plus-CleF0dO9.js";import"./vue.runtime.esm-bundler-C4sU6E6-.js";import"./vsv-icon-DrZkBOPN.js";import"./vsv-nprogress-D5kd6v05.js";const _={class:"test2-container"},B=m({name:"Query",__name:"query",setup(y){const e=useRoute(),n=c(),{changeTabsMeta:s}=n,t=reactive({name:"",path:"",query:{}}),o=()=>{t.name=e.name,t.path=e.path,t.query=e.query,s({title:"Query",meta:{title:`Query id=${e.query.id} `}})};return watch(t,()=>{o()},{immediate:!0}),onActivated(()=>{o()}),(f,h)=>{const u=p("vab-alert");return d(),l("div",_,[r(u,{title:"Query id="+a(e).query.id},null,8,["title"]),r(a(i),{copyable:"","expand-depth":5,value:a(t)},null,8,["value"])])}}});export{B as default};
