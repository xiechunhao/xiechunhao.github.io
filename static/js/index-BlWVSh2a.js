/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 16:06:55 
 */
import{f as u,j as p,_ as d}from"./index-D0bnGtHt.js";import{d as m,N as e,o as f,b,T as t,$ as h,u as v}from"./vsv-element-plus-Brnt1GMz.js";import"./vsv-icon-CX0cXpax.js";import"./vsv-nprogress-Cnw-SRAI.js";const x={class:"no-layout-container"},k=m({name:"NoLayout",__name:"index",setup(y){const o=u(),a=useRoute(),{delVisitedRoute:s}=o,{exit:n,isFullscreen:c}=useFullscreen(),r=async()=>{await n(),await s(p(a,!0)),await history.back()};return(w,B)=>{const _=e("vab-fullscreen"),i=e("el-page-header"),l=e("vab-alert");return f(),b("div",x,[t(i,{content:"全屏",title:v(c)?"退出全屏并返回上一页":"返回上一页",onBack:r},{extra:h(()=>[t(_)]),_:1},8,["title"]),t(l,{title:"刷新浏览器自动退出全屏",type:"success"})])}}}),R=d(k,[["__scopeId","data-v-e7f2f52e"]]);export{R as default};
