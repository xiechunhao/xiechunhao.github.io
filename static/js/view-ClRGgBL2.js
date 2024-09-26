/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{f as c,_ as n}from"./index-BnT9uhJE.js";import{d as m,b as i,e as u,u as _,o as f}from"./vsv-element-plus-CbS2IxKo.js";import"./vsv-icon-93gfr_RM.js";import"./vsv-nprogress-DzPgnd7z.js";const p={class:"iframe-container"},l=["src"],d=m({name:"Iframe",__name:"view",setup(h){const s=c(),{changeTabsMeta:o}=s,e=useRoute(),t=ref(""),r=()=>{t.value=`https://${e.query.url}`;const a={...e.meta,...e.query};nextTick(()=>{o({title:"Iframe",meta:a})})};return watch(e,()=>{r()},{immediate:!0}),(a,v)=>(f(),i("div",p,[u("iframe",{src:_(t)},null,8,l)]))}}),w=n(d,[["__scopeId","data-v-39f74e7c"]]);export{w as default};
