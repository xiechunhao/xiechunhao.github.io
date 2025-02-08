/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{f as c,_ as n}from"./index-BL5slC2T.js";import{d as m,b as i,e as u,u as _,o as f}from"./vsv-element-plus-D84I6Pnf.js";import"./vsv-icon-DZABqXig.js";import"./vsv-nprogress-0btfRK0G.js";const p={class:"iframe-container"},l=["src"],d=m({name:"Iframe",__name:"view",setup(h){const s=c(),{changeTabsMeta:o}=s,e=useRoute(),t=ref(""),r=()=>{t.value=`https://${e.query.url}`;const a={...e.meta,...e.query};nextTick(()=>{o({title:"Iframe",meta:a})})};return watch(e,()=>{r()},{immediate:!0}),(a,v)=>(f(),i("div",p,[u("iframe",{src:_(t)},null,8,l)]))}}),w=n(d,[["__scopeId","data-v-39f74e7c"]]);export{w as default};
