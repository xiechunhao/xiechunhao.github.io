/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 15:51:39 
 */
import{a as m,J as d,_ as v}from"./index-xIgfXPDD.js";import{$ as p}from"./vsv-echarts-DsY13D_e.js";import{d as _,B as h,o as x,b as g,K as b,u as y,_ as w}from"./vsv-element-plus-CqWB58IK.js";import"./vsv-icon-DZFdJ319.js";import"./vsv-nprogress-CYSXMSUQ.js";const D=_({__name:"Transactions",setup(S){const u=m(),{theme:a}=storeToRefs(u);let r;const f=ref(),t=reactive({tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"5%",left:"0%",right:"0%",bottom:"0%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[],axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},series:{name:"交易笔数",type:"line",data:[],smooth:!0,areaStyle:{},itemStyle:{borderRadius:[0,5,5,0],color:new p(0,0,1,0,[{offset:0,color:d(a.value.color,50)},{offset:1,color:a.value.color}])}}});return watch(a.value,()=>{t.series.itemStyle.color=new p(0,0,1,0,[{offset:0,color:d(a.value.color,50)},{offset:1,color:a.value.color}])},{immediate:!0}),onActivated(()=>{const i=+new Date(2023,10,1),c=24*3600*1e3,o=[],n=[Math.random()*1500];let e=new Date(i);f.value=e;const l=s=>{e=[e.getFullYear(),e.getMonth()+1,e.getDate()].join("/"),o.push(e),n.push(w(0,4e3)),s&&(o.shift(),n.shift()),e=new Date(+new Date(e)+c),t.xAxis.data=[],t.series.data=[],t.xAxis.data=o,t.series.data=n};for(let s=1;s<6;s++)l(!1);r=setInterval(()=>{l(!0)},5e3)}),onDeactivated(()=>{r&&clearInterval(r)}),(i,c)=>{const o=h("vab-chart");return x(),g("div",null,[b(o,{option:y(t)},null,8,["option"])])}}}),I=v(D,[["__scopeId","data-v-0ecbac29"]]);export{I as default};
