/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:50:12 
 */
import t from"./index-LTkvlUT2.js";import{L as s}from"./vsv-echarts-DDaYnjiH.js";import{d as r,p as i,b6 as e,o as n,S as l,u as p}from"./vsv-element-plus-DDEqdpLt.js";const b=r({name:"DataScreenLeft1",__name:"DataScreenLeft1",setup(c){const o=i({grid:{left:"0",right:"0",bottom:"0",top:"10px",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{show:!1,type:"value",axisLabel:{color:"#eee"},boundaryGap:!1,splitLine:{show:!1}},yAxis:[{type:"category",inverse:!0,data:["访客数量","订单数量","GPT模型数量","Claude模型数"],axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{color:"#eee"}}],series:{name:"",type:"bar",zlevel:1,itemStyle:{borderRadius:10,color:new s(0,0,1,0,[{offset:0,color:"rgb(57,89,255,1)"},{offset:1,color:"rgb(46,200,207,1)"}])},barWidth:15,data:[e(100,2e3),e(100,2e3),e(100,2e3),e(100,2e3)],label:{show:!0,position:"inside",color:"#fff"}}});return setInterval(()=>{o.series.data=[e(100,2e3),e(100,2e3),e(100,2e3),e(100,2e3)]},1e3*5),(f,m)=>{const a=t;return n(),l(a,{option:p(o)},null,8,["option"])}}});export{b as _};
