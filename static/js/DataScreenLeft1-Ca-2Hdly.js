/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{d as t,_ as e,z as s,u as r,A as i,o as n}from"./vsv-element-plus-CWjYVfvE.js";import{$ as l}from"./vsv-echarts-COUWirqE.js";const u=t({name:"DataScreenLeft1",__name:"DataScreenLeft1",setup(c){const a=reactive({grid:{left:"0",right:"0",bottom:"0",top:"10px",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{show:!1,type:"value",axisLabel:{color:"#eee"},boundaryGap:!1,splitLine:{show:!1}},yAxis:[{type:"category",inverse:!0,data:["访客数量","订单数量","GPT模型数量","Claude模型数"],axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{color:"#eee"}}],series:{name:"",type:"bar",zlevel:1,itemStyle:{borderRadius:10,color:new l(0,0,1,0,[{offset:0,color:"rgb(57,89,255,1)"},{offset:1,color:"rgb(46,200,207,1)"}])},barWidth:15,data:[e(100,2e3),e(100,2e3),e(100,2e3),e(100,2e3)],label:{show:!0,position:"inside",color:"#fff"}}});return setInterval(()=>{a.series.data=[e(100,2e3),e(100,2e3),e(100,2e3),e(100,2e3)]},1e3*5),(p,f)=>{const o=i("vab-chart");return n(),s(o,{option:r(a)},null,8,["option"])}}});export{u as default};
