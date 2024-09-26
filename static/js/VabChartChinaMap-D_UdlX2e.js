/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{d as l,F as t,o as m,D as h,V as a,M as n,u as _}from"./vsv-element-plus-CbS2IxKo.js";import{a0 as u}from"./vsv-echarts-DsY13D_e.js";const b=l({name:"VabChartChinaMap",__name:"VabChartChinaMap",props:{title:{type:String,default:""}},setup(s){const o=reactive({grid:{top:20,right:20,bottom:40,left:40}}),c=async()=>{const{data:e}=await axios({url:"https://unpkg.com/echarts@4.9.0/map/json/china.json",method:"get"});setTimeout(()=>{u("china",e),o.geo={map:"china",type:"map",zoom:1.2,roam:!0}},500)};return onBeforeMount(()=>{c()}),(e,d)=>{const r=t("vab-chart"),p=t("vab-card"),i=t("el-col");return m(),h(i,{lg:8,md:12,sm:24,xl:6,xs:24},{default:a(()=>[n(p,{"body-style":{height:"240px"},skeleton:"",title:s.title},{default:a(()=>[n(r,{option:_(o)},null,8,["option"])]),_:1},8,["title"])]),_:1})}}});export{b as default};
