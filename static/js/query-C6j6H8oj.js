/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{V as i}from"./vue-json-viewer-BA7cfJ1t.js";import{f as c}from"./index-D_keMk_X.js";import{d as m,a as l,J as r,u as a,A as p,o as d}from"./vsv-element-plus-CWjYVfvE.js";import"./index-1E7OnknW.js";import"./vsv-icon-CzoHxvAi.js";import"./vsv-nprogress-D-M_H-zP.js";const _={class:"test2-container"},k=m({name:"Query",__name:"query",setup(y){const e=useRoute(),n=c(),{changeTabsMeta:s}=n,t=reactive({name:"",path:"",query:{}}),o=()=>{t.name=e.name,t.path=e.path,t.query=e.query,s({title:"Query",meta:{title:`Query id=${e.query.id} `}})};return watch(t,()=>{o()},{immediate:!0}),onActivated(()=>{o()}),(f,h)=>{const u=p("vab-alert");return d(),l("div",_,[r(u,{title:"Query id="+a(e).query.id},null,8,["title"]),r(a(i),{copyable:"","expand-depth":5,value:a(t)},null,8,["value"])])}}});export{k as default};
