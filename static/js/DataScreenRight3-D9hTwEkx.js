/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:20:55 
 */
import{d as a,_ as e,z as r,u as l,A as s,o as i}from"./vsv-element-plus-CWjYVfvE.js";import{$ as n}from"./vsv-echarts-COUWirqE.js";const h=a({name:"DataScreenRight3",__name:"DataScreenRight3",setup(c){const o=reactive({grid:{top:"30px",left:"0",right:"10px",bottom:"20px",containLabel:!0},tooltip:{trigger:"axis"},xAxis:[{type:"category",axisLine:{show:!0,lineStyle:{color:"#00a1ff"}},axisLabel:{color:"#eee"},boundaryGap:!1,splitLine:{show:!1},data:["周一","周二","周三","周四","周五","周六","周天"]}],yAxis:[{type:"value",axisLine:{show:!0,lineStyle:{color:"#00a1ff"}},axisLabel:{color:"#eee"},splitLine:{show:!1}}],series:{name:"",type:"line",smooth:!0,showAllSymbol:!1,symbol:"circle",symbolSize:2,lineStyle:{color:"#00b3f4"},itemStyle:{color:"#00b3f4"},tooltip:{show:!0},areaStyle:{color:new n(0,0,0,1,[{offset:0,color:"rgba(0,179,244,0.3)"},{offset:1,color:"rgba(0,179,244,0)"}],!1),shadowColor:"rgba(0,179,244, 0.9)",shadowBlur:20},data:[e(100,2e3),e(100,2e3),e(100,2e3),e(100,2e3),e(100,2e3),e(100,2e3),e(100,2e3),e(100,2e3)]}});return setInterval(()=>{o.series.data=[e(100,2e3),e(100,2e3),e(100,2e3),e(100,2e3),e(100,2e3),e(100,2e3),e(100,2e3),e(100,2e3)]},1e3*5),(p,f)=>{const t=s("vab-chart");return i(),r(t,{option:l(o)},null,8,["option"])}}});export{h as default};
