/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 21:23:19 
 */
import{a as y,J as p,_ as h}from"./index-wMoNB7-P.js";import{d as S,_ as V,b7 as A,b8 as C,B as r,o as w,A as B,S as l,K as s,Y as c,u as e,e as f,X as k}from"./vsv-element-plus-CleF0dO9.js";import{$ as m}from"./vsv-echarts-DsY13D_e.js";import"./vsv-icon-DrZkBOPN.js";import"./vsv-nprogress-D5kd6v05.js";const z={class:"bottom"},T=S({name:"Authorization",__name:"Authorization",setup(I){const v=y(),{theme:a}=storeToRefs(v);let u;const n=ref(5),t=reactive({startValue:0,endValue:V(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3}),i=reactive({tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"5%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:{type:"category",data:["0时","4时","8时","12时","16时","20时","24时"],axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},series:{name:"授权数",type:"bar",barWidth:"60%",data:[10,52,20,33,39,33,22],itemStyle:{borderRadius:[2,2,0,0],color:new m(0,0,1,0,[{offset:0,color:p(a.value.color,50)},{offset:1,color:a.value.color}])}}});return watch(a.value,()=>{i.series.itemStyle.color=new m(0,0,1,0,[{offset:0,color:p(a.value.color,50)},{offset:1,color:a.value.color}])},{immediate:!0}),onMounted(()=>{u=setInterval(()=>{n.value>0?n.value--:(i.series.type=A(C(["bar","line","scatter"],i.series.type)),n.value=5)},1e3)}),onBeforeUnmount(()=>{u&&clearInterval(u)}),(L,o)=>{const _=r("vab-icon"),d=r("el-tag"),x=r("vab-chart"),b=r("vab-count"),g=r("vab-card");return w(),B(g,{"body-style":{height:"222px"},skeleton:""},{header:l(()=>[s(_,{icon:"bar-chart-2-line"}),o[1]||(o[1]=c(" 授权数 ")),s(d,{class:"card-header-tag",type:"warning"},{default:l(()=>o[0]||(o[0]=[c("周")])),_:1})]),default:l(()=>[s(x,{option:e(i)},null,8,["option"]),f("div",z,[f("span",null,[o[2]||(o[2]=c(" 授权数: ")),s(b,{decimals:e(t).decimals,duration:e(t).duration,"end-value":e(t).endValue,prefix:e(t).prefix,separator:e(t).separator,"start-value":e(t).startValue,suffix:e(t).suffix},null,8,["decimals","duration","end-value","prefix","separator","start-value","suffix"]),s(d,{class:"card-footer-tag",type:"success"},{default:l(()=>[c("倒计时 "+k(e(n))+"s",1)]),_:1})])])]),_:1})}}}),J=h(T,[["__scopeId","data-v-f948dc64"]]);export{J as default};
