/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-30 14:06:07 
 */
import{$ as t}from"./vsv-echarts-CilbVqts.js";import{d as s,a6 as e,N as r,o as i,M as n,u as l}from"./vsv-element-plus-CxGOTlXz.js";const u=s({name:"DataScreenLeft1",__name:"DataScreenLeft1",setup(c){const a=reactive({grid:{left:"0",right:"0",bottom:"0",top:"10px",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{show:!1,type:"value",axisLabel:{color:"#eee"},boundaryGap:!1,splitLine:{show:!1}},yAxis:[{type:"category",inverse:!0,data:["访客数量","订单数量","GPT模型数量","Claude模型数"],axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{color:"#eee"}}],series:{name:"",type:"bar",zlevel:1,itemStyle:{borderRadius:10,color:new t(0,0,1,0,[{offset:0,color:"rgb(57,89,255,1)"},{offset:1,color:"rgb(46,200,207,1)"}])},barWidth:15,data:[e(100,2e3),e(100,2e3),e(100,2e3),e(100,2e3)],label:{show:!0,position:"inside",color:"#fff"}}});return setInterval(()=>{a.series.data=[e(100,2e3),e(100,2e3),e(100,2e3),e(100,2e3)]},1e3*5),(p,f)=>{const o=r("vab-chart");return i(),n(o,{option:l(a)},null,8,["option"])}}});export{u as default};
