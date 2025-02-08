/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{a as i,_ as c}from"./index-BL5slC2T.js";import{d,b as p,e,K as _,B as m,o as l}from"./vsv-element-plus-D84I6Pnf.js";import"./vsv-icon-DZABqXig.js";import"./vsv-nprogress-0btfRK0G.js";const u={class:"poster-design-container"},f={class:"hidden-sm-and-up",style:{padding:"15px"}},v=d({name:"PosterDesign",__name:"PosterDesign",setup(g){const t=useRoute(),o=i(),{mode:n}=storeToRefs(o),a=()=>{t.path==="/goods/posterDesign"&&$pub("shop-vite-reset-dark")};return onActivated(()=>{nextTick(()=>{n.value=="dark"&&$baseMessage("海报设计不支持暗黑模式，已为您重置","success","hey"),a()})}),(h,s)=>{const r=m("vab-alert");return l(),p("div",u,[e("div",f,[_(r,{title:"手机端不支持海报设计演示",type:"warning"})]),s[0]||(s[0]=e("div",{class:"hidden-xs-only"},[e("iframe",{src:"https://vuejs-core.cn/vue-fabric-editor/#/"})],-1))])}}}),y=c(v,[["__scopeId","data-v-70b50fd7"]]);export{y as default};
