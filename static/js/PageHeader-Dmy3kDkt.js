/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 16:06:30 
 */
import{_ as v}from"./index-DcmXfeCl.js";import{g}from"./description-obnznQOA.js";import{b as h,s as f,_ as $}from"./index-D08hoOyC.js";import{d as T,r as o,a7 as x,o as y,S as w,T as B,W as H,u as n,e as t,a1 as S,aE as b}from"./vsv-element-plus-OoOmiKKG.js";import"./vsv-icon-Df9CwUcM.js";import"./vsv-nprogress-CNnfF26O.js";const k={class:"page-header-tip"},D={class:"page-header-tip-title"},L=["innerHTML"],M=T({__name:"PageHeader",setup(C){const c=h(),{avatar:l,username:a}=f(c),s=o(""),i=()=>{const e=new Date().getHours();return e<8?`早上好 ${a.value}，又是元气满满的一天。`:e<=11?`上午好 ${a.value}，看到您我好开心。`:e<=13?`中午好 ${a.value}，忙碌了一上午，记得吃午饭哦。`:e<18?`下午好 ${a.value}，您一定有些累了，喝杯咖啡提提神。`:`晚上好 ${a.value}，愿您天黑有灯，下雨有伞。`},_=async()=>{const{data:e}=await g();s.value=e.description};x(()=>{_()});const p=o("var(--el-color-primary-light-9)"),r=o("var(--el-color-white)"),d={background:`${r.value} linear-gradient(120deg, ${p.value} 10%, ${r.value}) no-repeat`};return(e,E)=>{const u=b,m=v;return y(),w(m,{class:"page-header",style:d},{default:B(()=>[H(u,{class:"page-header-avatar hidden-xs-only",src:n(l)},null,8,["src"]),t("div",k,[t("div",D,S(i()),1),t("div",{class:"page-header-tip-description",innerHTML:n(s)},null,8,L)])]),_:1})}}}),R=$(M,[["__scopeId","data-v-3453ae05"]]);export{R as default};
