/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 21:23:19 
 */
import{a as b,J as v,_ as h}from"./index-wMoNB7-P.js";import{$ as _}from"./vsv-echarts-DsY13D_e.js";import{d as y,B as i,o as w,A as D,S as d,K as p,Y as u,u as S,e as m,_ as A}from"./vsv-element-plus-CleF0dO9.js";import"./vsv-icon-DrZkBOPN.js";import"./vsv-nprogress-D5kd6v05.js";const B=y({__name:"Develop",setup(C){const x=b(),{theme:a}=storeToRefs(x);let c;const g=ref(),o=reactive({tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"5%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[],axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},series:{name:"浏览量",type:"line",data:[],smooth:!0,areaStyle:{},itemStyle:{borderRadius:[0,5,5,0],color:new _(0,0,1,0,[{offset:0,color:v(a.value.color,50)},{offset:1,color:a.value.color}])}}});return watch(a.value,()=>{o.series.itemStyle.color=new _(0,0,1,0,[{offset:0,color:v(a.value.color,50)},{offset:1,color:a.value.color}])},{immediate:!0}),onMounted(()=>{const f=+new Date(2023,10,1),t=24*3600*1e3,s=[],n=[Math.random()*1500];let e=new Date(f);g.value=e;const r=l=>{e=[e.getFullYear(),e.getMonth()+1,e.getDate()].join("/"),s.push(e),n.push(A(2e3,4e3)),l&&(s.shift(),n.shift()),e=new Date(+new Date(e)+t),o.xAxis.data=[],o.series.data=[],o.xAxis.data=s,o.series.data=n};for(let l=1;l<6;l++)r(!1);c=setInterval(()=>{r(!0)},5e3)}),onBeforeUnmount(()=>{c&&clearInterval(c)}),(f,t)=>{const s=i("vab-icon"),n=i("el-tag"),e=i("vab-chart"),r=i("vab-card");return w(),D(r,{"body-style":{height:"222px"},skeleton:""},{header:d(()=>[p(s,{icon:"line-chart-line"}),t[1]||(t[1]=u(" 流量概况 ")),p(n,{class:"card-header-tag",type:"success"},{default:d(()=>t[0]||(t[0]=[u("日")])),_:1})]),default:d(()=>[p(e,{option:S(o)},null,8,["option"]),t[2]||(t[2]=m("div",{class:"bottom"},[m("div",{class:"line-two"},[u(" 自上周以来 "),m("span",null,"提升 44%")])],-1))]),_:1})}}}),N=h(B,[["__scopeId","data-v-2614b224"]]);export{N as default};
