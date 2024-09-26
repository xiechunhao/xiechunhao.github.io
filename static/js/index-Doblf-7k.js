/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{f as u,j as p,_ as d}from"./index-BnT9uhJE.js";import{d as m,b as f,M as e,V as b,u as h,F as t,o as v}from"./vsv-element-plus-CbS2IxKo.js";import"./vsv-icon-93gfr_RM.js";import"./vsv-nprogress-DzPgnd7z.js";const x={class:"no-layout-container"},k=m({name:"NoLayout",__name:"index",setup(y){const o=u(),a=useRoute(),{delVisitedRoute:s}=o,{exit:n,isFullscreen:c}=useFullscreen(),r=async()=>{await n(),await s(p(a,!0)),await history.back()};return(w,B)=>{const _=t("vab-fullscreen"),i=t("el-page-header"),l=t("vab-alert");return v(),f("div",x,[e(i,{content:"全屏",title:h(c)?"退出全屏并返回上一页":"返回上一页",onBack:r},{extra:b(()=>[e(_)]),_:1},8,["title"]),e(l,{title:"刷新浏览器自动退出全屏",type:"success"})])}}}),N=d(k,[["__scopeId","data-v-e7f2f52e"]]);export{N as default};
