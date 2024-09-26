/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 15:53:45 
 */
import r from"./index-oh0Whtx1.js";import{d as l,p as s,b6 as e,o as i,S as n,u as c}from"./vsv-element-plus-DDEqdpLt.js";import{L as a}from"./vsv-echarts-DDaYnjiH.js";const h=l({name:"DataScreenRight2",__name:"DataScreenRight2",setup(f){const o=s({grid:{left:"0",right:"0",bottom:"20px",top:"40px",containLabel:!0},tooltip:{trigger:"axis"},xAxis:[{type:"category",axisLine:{show:!0,lineStyle:{color:"#00a1ff"}},boundaryGap:!1,splitLine:{show:!1},axisLabel:{color:"#eee"},data:["一月","二月","三月","四月","五月","六月"]}],yAxis:[{type:"value",name:"销售额",axisLabel:{formatter:"{value} 万元",color:"#eee"},axisLine:{show:!0,lineStyle:{color:"#00a1ff"}},splitLine:{show:!1}},{type:"value",name:"增长率",smooth:!0,showAllSymbol:!1,symbol:"circle",symbolSize:2,axisLabel:{formatter:"{value} %",color:"#eee"},axisLine:{show:!0,lineStyle:{color:"#00a1ff"}},splitLine:{show:!1}}],series:[{name:"销售额",type:"bar",data:[e(20,50),e(20,50),e(20,50),e(20,50),e(20,50),e(20,50)],itemStyle:{borderRadius:[10,10,0,0],color:new a(0,0,1,0,[{offset:0,color:"rgb(57,89,255,1)"},{offset:1,color:"rgb(46,200,207,1)"}])},barWidth:15},{name:"增长率",type:"line",yAxisIndex:1,smooth:!0,showAllSymbol:!1,symbol:"circle",symbolSize:2,lineStyle:{color:"#00b3f4"},itemStyle:{color:"#00b3f4"},tooltip:{show:!0},areaStyle:{color:new a(0,0,0,1,[{offset:0,color:"rgba(0,179,244,0.3)"},{offset:1,color:"rgba(0,179,244,0)"}],!1),shadowColor:"rgba(0,179,244, 0.9)",shadowBlur:20},data:[e(0,100),e(0,100),e(0,100),e(0,100),e(0,100),e(0,100)]}]});return setInterval(()=>{o.series[0].data=[e(20,50),e(20,50),e(20,50),e(20,50),e(20,50),e(20,50)],o.series[1].data=[e(0,100),e(0,100),e(0,100),e(0,100),e(0,100),e(0,100)]},1e3*5),(m,p)=>{const t=r;return i(),n(t,{option:c(o)},null,8,["option"])}}});export{h as _};
