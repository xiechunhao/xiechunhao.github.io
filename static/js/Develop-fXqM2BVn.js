/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 15:53:45 
 */
import{_ as x}from"./index-Cq5UKYJQ.js";import b from"./index-oh0Whtx1.js";import{c as h,s as y,I as _,_ as w}from"./index-CQIU_Sxf.js";import{L as f}from"./vsv-echarts-DDaYnjiH.js";import{d as D,r as S,p as T,w as C,E as k,D as A,$ as B,o as I,S as L,T as c,W as p,a8 as d,u as M,e as u,b6 as N,aH as V}from"./vsv-element-plus-DDEqdpLt.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const E=D({__name:"Develop",setup(G){const g=h(),{theme:a}=y(g);let l;const v=S(),o=T({tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"5%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[],axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},series:{name:"浏览量",type:"line",data:[],smooth:!0,areaStyle:{},itemStyle:{borderRadius:[0,5,5,0],color:new f(0,0,1,0,[{offset:0,color:_(a.value.color,50)},{offset:1,color:a.value.color}])}}});return C(a.value,()=>{o.series.itemStyle.color=new f(0,0,1,0,[{offset:0,color:_(a.value.color,50)},{offset:1,color:a.value.color}])},{immediate:!0}),k(()=>{const m=+new Date(2023,10,1),t=24*3600*1e3,s=[],n=[Math.random()*1500];let e=new Date(m);v.value=e;const r=i=>{e=[e.getFullYear(),e.getMonth()+1,e.getDate()].join("/"),s.push(e),n.push(N(2e3,4e3)),i&&(s.shift(),n.shift()),e=new Date(+new Date(e)+t),o.xAxis.data=[],o.series.data=[],o.xAxis.data=s,o.series.data=n};for(let i=1;i<6;i++)r(!1);l=setInterval(()=>{r(!0)},5e3)}),A(()=>{l&&clearInterval(l)}),(m,t)=>{const s=B("vab-icon"),n=V,e=b,r=x;return I(),L(r,{"body-style":{height:"222px"},skeleton:""},{header:c(()=>[p(s,{icon:"line-chart-line"}),t[1]||(t[1]=d(" 流量概况 ")),p(n,{class:"card-header-tag",type:"success"},{default:c(()=>t[0]||(t[0]=[d("日")])),_:1})]),default:c(()=>[p(e,{option:M(o)},null,8,["option"]),t[2]||(t[2]=u("div",{class:"bottom"},[u("div",{class:"line-two"},[d(" 自上周以来 "),u("span",null,"提升 44%")])],-1))]),_:1})}}}),Y=w(E,[["__scopeId","data-v-2614b224"]]);export{Y as default};
