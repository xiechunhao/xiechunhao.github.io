/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 16:06:55 
 */
import{f as c,_ as n}from"./index-D0bnGtHt.js";import{d as m,o as i,b as u,e as _,u as f}from"./vsv-element-plus-Brnt1GMz.js";import"./vsv-icon-CX0cXpax.js";import"./vsv-nprogress-Cnw-SRAI.js";const p={class:"iframe-container"},l=["src"],d=m({name:"Iframe",__name:"view",setup(h){const s=c(),{changeTabsMeta:o}=s,e=useRoute(),t=ref(""),r=()=>{t.value=`https://${e.query.url}`;const a={...e.meta,...e.query};nextTick(()=>{o({title:"Iframe",meta:a})})};return watch(e,()=>{r()},{immediate:!0}),(a,v)=>(i(),u("div",p,[_("iframe",{src:f(t)},null,8,l)]))}}),w=n(d,[["__scopeId","data-v-39f74e7c"]]);export{w as default};
