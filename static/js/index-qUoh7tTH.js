/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:20:55 
 */
import{f as u,j as p,_ as d}from"./index-CuM47huV.js";import{d as m,a as f,J as e,U as h,u as v,A as t,o as x}from"./vsv-element-plus-CWjYVfvE.js";import"./vsv-icon-CzoHxvAi.js";import"./vsv-nprogress-D-M_H-zP.js";const b={class:"no-layout-container"},k=m({name:"NoLayout",__name:"index",setup(y){const o=u(),a=useRoute(),{delVisitedRoute:s}=o,{exit:n,isFullscreen:c}=useFullscreen(),r=async()=>{await n(),await s(p(a,!0)),await history.back()};return(w,B)=>{const _=t("vab-fullscreen"),i=t("el-page-header"),l=t("vab-alert");return x(),f("div",b,[e(i,{content:"全屏",title:v(c)?"退出全屏并返回上一页":"返回上一页",onBack:r},{extra:h(()=>[e(_)]),_:1},8,["title"]),e(l,{title:"刷新浏览器自动退出全屏",type:"success"})])}}}),N=d(k,[["__scopeId","data-v-e7f2f52e"]]);export{N as default};
