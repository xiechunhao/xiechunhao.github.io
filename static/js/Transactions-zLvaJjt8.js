/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:42:24 
 */
import f from"./index-CmP64QtQ.js";import{c as _,s as v,I as p,_ as x}from"./index-CaYPvDrq.js";import{L as u}from"./vsv-echarts-DDaYnjiH.js";import{d as g,r as h,p as b,w as y,Q as w,P as D,o as S,b as A,W as T,u as I,b6 as L}from"./vsv-element-plus-DDEqdpLt.js";import"./vsv-icon-PU6rYWNa.js";import"./vsv-nprogress-CAgsOcyS.js";const k=g({__name:"Transactions",setup(C){const d=_(),{theme:o}=v(d);let r;const m=h(),t=b({tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"5%",left:"0%",right:"0%",bottom:"0%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[],axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},series:{name:"交易笔数",type:"line",data:[],smooth:!0,areaStyle:{},itemStyle:{borderRadius:[0,5,5,0],color:new u(0,0,1,0,[{offset:0,color:p(o.value.color,50)},{offset:1,color:o.value.color}])}}});return y(o.value,()=>{t.series.itemStyle.color=new u(0,0,1,0,[{offset:0,color:p(o.value.color,50)},{offset:1,color:o.value.color}])},{immediate:!0}),w(()=>{const i=+new Date(2023,10,1),c=24*3600*1e3,a=[],n=[Math.random()*1500];let e=new Date(i);m.value=e;const l=s=>{e=[e.getFullYear(),e.getMonth()+1,e.getDate()].join("/"),a.push(e),n.push(L(0,4e3)),s&&(a.shift(),n.shift()),e=new Date(+new Date(e)+c),t.xAxis.data=[],t.series.data=[],t.xAxis.data=a,t.series.data=n};for(let s=1;s<6;s++)l(!1);r=setInterval(()=>{l(!0)},5e3)}),D(()=>{r&&clearInterval(r)}),(i,c)=>{const a=f;return S(),A("div",null,[T(a,{option:I(t)},null,8,["option"])])}}}),z=x(k,[["__scopeId","data-v-0ecbac29"]]);export{z as default};
