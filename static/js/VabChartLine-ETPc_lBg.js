/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 15:51:39 
 */
import{a as u}from"./index-xIgfXPDD.js";import{d,_ as t,B as a,o as _,A as f,S as r,K as s,u as h}from"./vsv-element-plus-CqWB58IK.js";import"./vsv-icon-DZFdJ319.js";import"./vsv-nprogress-CYSXMSUQ.js";const C=d({name:"VabChartLine",__name:"VabChartLine",props:{title:{type:String,default:""}},setup(i){const l=u(),{theme:n}=storeToRefs(l);let e;const o=reactive({grid:{top:20,right:20,bottom:40,left:40},tooltip:{trigger:"item"},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:{data:[t(50,100),t(10,100),t(10,100),t(10,100),t(10,100),t(50,100),t(50,200)],type:"line"}});return watch(n.value,()=>{o.color=[n.value.color]},{immediate:!0}),onMounted(()=>{e=setInterval(()=>{o.series.data=[t(50,100),t(10,100),t(10,100),t(10,100),t(10,100),t(50,100),t(50,200)]},3e3)}),onBeforeUnmount(()=>{e&&clearInterval(e)}),(v,g)=>{const c=a("vab-chart"),m=a("vab-card"),p=a("el-col");return _(),f(p,{lg:8,md:12,sm:24,xl:6,xs:24},{default:r(()=>[s(m,{"body-style":{height:"240px"},skeleton:"",title:i.title},{default:r(()=>[s(c,{option:h(o)},null,8,["option"])]),_:1},8,["title"])]),_:1})}}});export{C as default};
