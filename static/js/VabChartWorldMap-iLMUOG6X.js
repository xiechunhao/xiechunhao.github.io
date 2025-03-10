/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{d as m,z as i,U as a,A as t,o as d,J as n,u as _}from"./vsv-element-plus-CWjYVfvE.js";import{a0 as u}from"./vsv-echarts-COUWirqE.js";const b=m({name:"VabChartWorldMap",__name:"VabChartWorldMap",props:{title:{type:String,default:""}},setup(r){const o=reactive({grid:{top:20,right:20,bottom:40,left:40}}),s=async()=>{const{data:e}=await axios({url:"https://unpkg.com/echarts@4.9.0/map/json/world.json",method:"get"});setTimeout(()=>{u("world",e),o.geo={map:"world",type:"map",zoom:1.2,roam:!0}},500)};return onBeforeMount(()=>{s()}),(e,h)=>{const c=t("vab-chart"),l=t("vab-card"),p=t("el-col");return d(),i(p,{lg:8,md:12,sm:24,xl:6,xs:24},{default:a(()=>[n(l,{"body-style":{height:"240px"},skeleton:"",title:r.title},{default:a(()=>[n(c,{option:_(o)},null,8,["option"])]),_:1},8,["title"])]),_:1})}}});export{b as default};
