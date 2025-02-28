/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{k as u,B as p,_ as d}from"./index-DXRDwnmL.js";import{d as m,b as f,L as e,V as b,u as h,D as t,o as v}from"./vsv-element-plus-DQNbQgVr.js";import"./vsv-icon-BSoeDgwL.js";import"./vsv-nprogress-BCb6Y0ID.js";const x={class:"no-layout-container"},k=m({name:"NoLayout",__name:"index",setup(y){const o=u(),a=useRoute(),{delVisitedRoute:s}=o,{exit:n,isFullscreen:c}=useFullscreen(),r=async()=>{await n(),await s(p(a,!0)),await history.back()};return(B,w)=>{const _=t("vab-fullscreen"),i=t("el-page-header"),l=t("vab-alert");return v(),f("div",x,[e(i,{content:"全屏",title:h(c)?"退出全屏并返回上一页":"返回上一页",onBack:r},{extra:b(()=>[e(_)]),_:1},8,["title"]),e(l,{title:"刷新浏览器自动退出全屏",type:"success"})])}}}),L=d(k,[["__scopeId","data-v-e7f2f52e"]]);export{L as default};
