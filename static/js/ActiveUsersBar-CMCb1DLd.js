/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-12 09:55:11 
 */
import i from"./index-ChGm8scv.js";import{a as c,s as p,I as a,_ as m}from"./index-I0Q3W04Q.js";import{L as r}from"./vsv-echarts-BbmB9jGw.js";import{d as f,h as u,b5 as e,w as _,C as d,aM as v,bI as b,E as h,b as x,o as y,Z as g,u as w}from"./vsv-element-plus-B-S50adB.js";import"./vsv-icon-BcEnJ7dJ.js";import"./vsv-nprogress-Bmiy9T8n.js";const I=f({__name:"ActiveUsersBar",setup(L){const n=c(),{theme:o}=p(n);let s;const t=u({grid:{left:"20px",top:"5px",right:"20px",bottom:0},xAxis:{type:"category",data:["00:00","1:00","2:00","3:00","4:00","5:00"],boundaryGap:!1},yAxis:{type:"value",splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}},series:{barWidth:18,name:"",type:"bar",data:[e(50,100),e(10,100),e(10,100),e(10,100),e(10,100),e(50,100)],itemStyle:{color:new r(0,0,1,0,[{offset:0,color:a(o.value.color,20)},{offset:1,color:o.value.color}])}}});return _(o.value,()=>{t.series.itemStyle.color=new r(0,0,1,0,[{offset:0,color:a(o.value.color,20)},{offset:1,color:o.value.color}])},{immediate:!0}),d(()=>{s=setInterval(()=>{t.series.data=[e(50,100),e(10,100),e(10,100),e(10,100),e(10,100),e(50,100)],t.series.type=v(b(["bar","line"],t.series.type))},3e3)}),h(()=>{s&&clearInterval(s)}),(S,B)=>{const l=i;return y(),x("div",null,[g(l,{option:w(t)},null,8,["option"])])}}}),T=m(I,[["__scopeId","data-v-161b81db"]]);export{T as default};
