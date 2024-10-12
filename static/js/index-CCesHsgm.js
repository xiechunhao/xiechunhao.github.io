/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 15:51:39 
 */
import{f as u,j as p,_ as d}from"./index-xIgfXPDD.js";import{d as m,b as f,K as e,S as b,u as h,B as t,o as v}from"./vsv-element-plus-CqWB58IK.js";import"./vsv-icon-DZFdJ319.js";import"./vsv-nprogress-CYSXMSUQ.js";const x={class:"no-layout-container"},k=m({name:"NoLayout",__name:"index",setup(y){const o=u(),a=useRoute(),{delVisitedRoute:s}=o,{exit:n,isFullscreen:c}=useFullscreen(),r=async()=>{await n(),await s(p(a,!0)),await history.back()};return(B,w)=>{const _=t("vab-fullscreen"),i=t("el-page-header"),l=t("vab-alert");return v(),f("div",x,[e(i,{content:"全屏",title:h(c)?"退出全屏并返回上一页":"返回上一页",onBack:r},{extra:b(()=>[e(_)]),_:1},8,["title"]),e(l,{title:"刷新浏览器自动退出全屏",type:"success"})])}}}),N=d(k,[["__scopeId","data-v-e7f2f52e"]]);export{N as default};
