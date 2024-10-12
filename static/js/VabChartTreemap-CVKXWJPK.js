/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 15:51:39 
 */
import{a as p}from"./index-xIgfXPDD.js";import{d as u,_ as e,B as a,o as _,A as v,S as r,K as l,u as f}from"./vsv-element-plus-CqWB58IK.js";import"./vsv-icon-DZFdJ319.js";import"./vsv-nprogress-CYSXMSUQ.js";const S=u({name:"VabChartTreemap",__name:"VabChartTreemap",props:{title:{type:String,default:""}},setup(s){const m=p(),{theme:n}=storeToRefs(m);let t;const o=reactive({grid:{top:20,right:20,bottom:60,left:40},tooltip:{trigger:"item"},series:{type:"treemap",data:[{name:"nodeA",value:e(0,10),children:[{name:"nodeAa",value:e(0,10)},{name:"nodeAb",value:e(0,10)}]}]}});return watch(n.value,()=>{setTimeout(()=>{o.color=[n.value.color]},200)},{immediate:!0}),onMounted(()=>{t=setInterval(()=>{o.series.data=[{name:"nodeA",value:e(0,10),children:[{name:"nodeAa",value:e(0,10)},{name:"nodeAb",value:e(0,10)}]}]},3e3)}),onBeforeUnmount(()=>{t&&clearTimeout(t)}),(h,b)=>{const i=a("vab-chart"),c=a("vab-card"),d=a("el-col");return _(),v(d,{lg:8,md:12,sm:24,xl:6,xs:24},{default:r(()=>[l(c,{"body-style":{height:"240px"},skeleton:"",title:s.title},{default:r(()=>[l(i,{option:f(o)},null,8,["option"])]),_:1},8,["title"])]),_:1})}}});export{S as default};
