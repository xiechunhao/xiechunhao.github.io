/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{d as r,a0 as e,F as l,o as s,D as c,u as m}from"./vsv-element-plus-CbS2IxKo.js";const p=r({name:"DataScreenLeft2",__name:"DataScreenLeft2",setup(i){const a=reactive({grid:{left:"20px",right:"20px",bottom:"20px",top:"20px",containLabel:!0},tooltip:{trigger:"item"},series:{name:"人群画像",type:"pie",radius:["40%","80%"],itemStyle:{borderRadius:10,borderColor:"#01ffff",borderWidth:2,color:t=>["#385afe","#95de64","#ff7a45","#101e57","#2c3e50"][t.dataIndex]},label:{show:!0,color:"#fff"},data:[{value:e(200,500),name:"学生"},{value:e(200,500),name:"职场青年"},{value:e(200,500),name:"家庭主妇"},{value:e(200,500),name:"退休人员"},{value:e(200,500),name:"企业高管"}]}});return setInterval(()=>{a.series.data=[{value:e(200,500),name:"学生"},{value:e(200,500),name:"职场青年"},{value:e(200,500),name:"家庭主妇"},{value:e(200,500),name:"退休人员"},{value:e(200,500),name:"企业高管"}]},1e3*5),(t,o)=>{const n=l("vab-chart");return s(),c(n,{option:m(a)},null,8,["option"])}}});export{p as default};
