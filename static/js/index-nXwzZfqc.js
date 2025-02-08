/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{f as u,j as p,_ as d}from"./index-BL5slC2T.js";import{d as m,b as f,K as e,U as b,u as h,B as t,o as v}from"./vsv-element-plus-D84I6Pnf.js";import"./vsv-icon-DZABqXig.js";import"./vsv-nprogress-0btfRK0G.js";const x={class:"no-layout-container"},k=m({name:"NoLayout",__name:"index",setup(y){const o=u(),a=useRoute(),{delVisitedRoute:s}=o,{exit:n,isFullscreen:c}=useFullscreen(),r=async()=>{await n(),await s(p(a,!0)),await history.back()};return(B,w)=>{const _=t("vab-fullscreen"),i=t("el-page-header"),l=t("vab-alert");return v(),f("div",x,[e(i,{content:"全屏",title:h(c)?"退出全屏并返回上一页":"返回上一页",onBack:r},{extra:b(()=>[e(_)]),_:1},8,["title"]),e(l,{title:"刷新浏览器自动退出全屏",type:"success"})])}}}),R=d(k,[["__scopeId","data-v-e7f2f52e"]]);export{R as default};
