/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 21:23:19 
 */
import{a as p,J as m}from"./index-wMoNB7-P.js";import{d,B as t,o as y,A as u,S as r,K as s,Y as x,u as _}from"./vsv-element-plus-CleF0dO9.js";import"./vsv-icon-DrZkBOPN.js";import"./vsv-nprogress-D5kd6v05.js";const A=d({__name:"Trend",setup(b){const n=p(),{theme:e}=storeToRefs(n),o=reactive({tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"4%",left:"2%",right:"2%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],boundaryGap:!1}],yAxis:[{type:"value"}],series:[{name:"签单",type:"line",data:[1295,3020,1330,512,4463,2214,3330,2412,1205,820,3330,912],symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,areaStyle:{opacity:.8}},{name:"回款",type:"line",data:[2905,2020,1730,128,963,4614,630,1912,1005,1782,1530,912],symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,areaStyle:{opacity:.8}}]});return watch(e.value,()=>{o.color=[e.value.color,m(e.value.color,50)]},{immediate:!0}),(h,a)=>{const i=t("vab-icon"),l=t("vab-chart"),c=t("vab-card");return y(),u(c,{"body-style":{height:"210px"},skeleton:""},{header:r(()=>[s(i,{icon:"line-chart-fill"}),a[0]||(a[0]=x(" 趋势 "))]),default:r(()=>[s(l,{option:_(o)},null,8,["option"])]),_:1})}}});export{A as default};
