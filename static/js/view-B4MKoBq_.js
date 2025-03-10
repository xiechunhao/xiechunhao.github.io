/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{f as c,_ as n}from"./index-D_keMk_X.js";import{d as m,a as i,b as u,u as _,o as f}from"./vsv-element-plus-CWjYVfvE.js";import"./vsv-icon-CzoHxvAi.js";import"./vsv-nprogress-D-M_H-zP.js";const p={class:"iframe-container"},l=["src"],d=m({name:"Iframe",__name:"view",setup(h){const s=c(),{changeTabsMeta:o}=s,e=useRoute(),t=ref(""),r=()=>{t.value=`https://${e.query.url}`;const a={...e.meta,...e.query};nextTick(()=>{o({title:"Iframe",meta:a})})};return watch(e,()=>{r()},{immediate:!0}),(a,v)=>(f(),i("div",p,[u("iframe",{src:_(t)},null,8,l)]))}}),w=n(d,[["__scopeId","data-v-39f74e7c"]]);export{w as default};
