/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 21:23:19 
 */
import{g as f}from"./description-CpUkuY1g.js";import{u as m,_ as h}from"./index-wMoNB7-P.js";import{d as g,B as s,o as $,A as x,S as y,K as B,u as n,e as o,X as H}from"./vsv-element-plus-CleF0dO9.js";import"./vsv-icon-DrZkBOPN.js";import"./vsv-nprogress-D5kd6v05.js";const T={class:"page-header-tip"},w={class:"page-header-tip-title"},S=["innerHTML"],b=g({__name:"PageHeader",setup(k){const c=m(),{avatar:l,username:a}=storeToRefs(c),t=ref(""),i=()=>{const e=new Date().getHours();return e<8?`早上好 ${a.value}，又是元气满满的一天。`:e<=11?`上午好 ${a.value}，看到您我好开心。`:e<=13?`中午好 ${a.value}，忙碌了一上午，记得吃午饭哦。`:e<18?`下午好 ${a.value}，您一定有些累了，喝杯咖啡提提神。`:`晚上好 ${a.value}，愿您天黑有灯，下雨有伞。`},d=async()=>{const{data:e}=await f();t.value=e.description};onBeforeMount(()=>{d()});const p=ref("var(--el-color-primary-light-9)"),r=ref("var(--el-color-white)"),u={background:`${r.value} linear-gradient(120deg, ${p.value} 10%, ${r.value}) no-repeat`};return(e,C)=>{const _=s("el-avatar"),v=s("vab-colorful-card");return $(),x(v,{class:"page-header",style:u},{default:y(()=>[B(_,{class:"page-header-avatar hidden-xs-only",src:n(l)},null,8,["src"]),o("div",T,[o("div",w,H(i()),1),o("div",{class:"page-header-tip-description",innerHTML:n(t)},null,8,S)])]),_:1})}}}),V=h(b,[["__scopeId","data-v-3453ae05"]]);export{V as default};
