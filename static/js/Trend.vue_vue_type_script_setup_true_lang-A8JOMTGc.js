/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 16:06:30 
 */
import{_ as c}from"./index-Cb-9Eo_O.js";import p from"./index-Bgr4NDc5.js";import{c as m,s as _,I as u}from"./index-D08hoOyC.js";import{d as y,p as d,w as x,$ as f,o as h,S as b,T as a,W as n,a8 as g,u as v}from"./vsv-element-plus-OoOmiKKG.js";const I=y({__name:"Trend",setup(S){const s=m(),{theme:e}=_(s),o=d({tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"4%",left:"2%",right:"2%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],boundaryGap:!1}],yAxis:[{type:"value"}],series:[{name:"签单",type:"line",data:[1295,3020,1330,512,4463,2214,3330,2412,1205,820,3330,912],symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,areaStyle:{opacity:.8}},{name:"回款",type:"line",data:[2905,2020,1730,128,963,4614,630,1912,1005,1782,1530,912],symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,areaStyle:{opacity:.8}}]});return x(e.value,()=>{o.color=[e.value.color,u(e.value.color,50)]},{immediate:!0}),(w,t)=>{const r=f("vab-icon"),i=p,l=c;return h(),b(l,{"body-style":{height:"210px"},skeleton:""},{header:a(()=>[n(r,{icon:"line-chart-fill"}),t[0]||(t[0]=g(" 趋势 "))]),default:a(()=>[n(i,{option:v(o)},null,8,["option"])]),_:1})}}});export{I as _};
