/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:46:00 
 */
import{a as i,_ as c}from"./index-BxCyh4rX.js";import{d,N as p,o as _,b as m,e,T as l}from"./vsv-element-plus-CxGOTlXz.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const u={class:"poster-design-container"},f={class:"hidden-sm-and-up",style:{padding:"15px"}},v=d({name:"PosterDesign",__name:"PosterDesign",setup(g){const t=useRoute(),o=i(),{mode:n}=storeToRefs(o),a=()=>{t.path==="/goods/posterDesign"&&$pub("shop-vite-reset-dark")};return onActivated(()=>{nextTick(()=>{n.value=="dark"&&$baseMessage("海报设计不支持暗黑模式，已为您重置","success","hey"),a()})}),(h,s)=>{const r=p("vab-alert");return _(),m("div",u,[e("div",f,[l(r,{title:"手机端不支持海报设计演示",type:"warning"})]),s[0]||(s[0]=e("div",{class:"hidden-xs-only"},[e("iframe",{src:"https://vuejs-core.cn/vue-fabric-editor/#/"})],-1))])}}}),y=c(v,[["__scopeId","data-v-70b50fd7"]]);export{y as default};
