/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 15:51:39 
 */
import{a as _}from"./index-xIgfXPDD.js";import{d,_ as t,B as a,o as u,A as f,S as n,K as s,u as h}from"./vsv-element-plus-CqWB58IK.js";import"./vsv-icon-DZFdJ319.js";import"./vsv-nprogress-CYSXMSUQ.js";const C=d({name:"VabChartScatter",__name:"VabChartScatter",props:{title:{type:String,default:""}},setup(i){const c=_(),{theme:r}=storeToRefs(c);let e;const o=reactive({grid:{top:20,right:20,bottom:40,left:40},xAxis:{},yAxis:{},tooltip:{trigger:"item"},series:{symbolSize:10,data:[[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)]],type:"scatter"}});return watch(r.value,()=>{o.color=[r.value.color]},{immediate:!0}),onMounted(()=>{e=setInterval(()=>{o.series.data=[[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)],[t(1,20),t(1,20)]]},3e3)}),onBeforeUnmount(()=>{e&&clearInterval(e)}),(v,b)=>{const l=a("vab-chart"),m=a("vab-card"),p=a("el-col");return u(),f(p,{lg:8,md:12,sm:24,xl:6,xs:24},{default:n(()=>[s(m,{"body-style":{height:"240px"},skeleton:"",title:i.title},{default:n(()=>[s(l,{option:h(o)},null,8,["option"])]),_:1},8,["title"])]),_:1})}}});export{C as default};
