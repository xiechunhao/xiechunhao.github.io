/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{a as l}from"./index-BL5slC2T.js";import{d as p,A as u,U as n,B as e,o as d,K as r,u as _,Z as v}from"./vsv-element-plus-D84I6Pnf.js";import"./vsv-icon-DZABqXig.js";import"./vsv-nprogress-0btfRK0G.js";const B=p({__name:"Branch",setup(f){const s=l(),{theme:t}=storeToRefs(s),o=reactive({tooltip:{trigger:"item"},series:[{name:"访问来源",type:"pie",radius:["40%","80%"],itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:[{value:1048,name:"搜索引擎"},{value:735,name:"直接访问"},{value:580,name:"邮件营销"},{value:484,name:"联盟广告"},{value:300,name:"视频广告"}]}]});return watch(t.value,()=>{o.color=[t.value.color]},{immediate:!0}),(b,a)=>{const i=e("vab-icon"),c=e("vab-chart"),m=e("vab-card");return d(),u(m,{"body-style":{height:"210px"},skeleton:""},{header:n(()=>[r(i,{icon:"donut-chart-fill"}),a[0]||(a[0]=v(" 分布 "))]),default:n(()=>[r(c,{option:_(o)},null,8,["option"])]),_:1})}}});export{B as default};
