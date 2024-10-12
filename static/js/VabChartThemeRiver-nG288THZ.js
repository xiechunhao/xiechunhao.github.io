/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 15:51:39 
 */
import{a as G}from"./index-xIgfXPDD.js";import{d as s,_ as S,B as e,o as l,A as c,S as Y,K as o,u as m}from"./vsv-element-plus-CqWB58IK.js";import"./vsv-icon-DZFdJ319.js";import"./vsv-nprogress-CYSXMSUQ.js";const v=s({name:"VabChartThemeRiver",__name:"VabChartThemeRiver",props:{title:{type:String,default:""}},setup(a){const r=G(),{theme:Q}=storeToRefs(r);let D;const t=reactive({grid:{top:20,right:20,bottom:40,left:40},tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{color:"rgba(0,0,0,0.2)",width:1,type:"solid"}}},singleAxis:{top:20,bottom:20,type:"time"},series:{type:"themeRiver",data:[["2015/11/08",S(0,100),"DQ"],["2015/11/09",S(0,100),"DQ"],["2015/11/10",S(0,100),"DQ"],["2015/11/11",S(0,100),"DQ"],["2015/11/12",S(0,100),"DQ"],["2015/11/13",S(0,100),"DQ"],["2015/11/14",S(0,100),"DQ"],["2015/11/15",S(0,100),"DQ"],["2015/11/16",S(0,100),"DQ"],["2015/11/17",S(0,100),"DQ"],["2015/11/18",S(0,100),"DQ"],["2015/11/19",S(0,100),"DQ"],["2015/11/20",S(0,100),"DQ"],["2015/11/21",S(0,100),"DQ"],["2015/11/22",S(0,100),"DQ"],["2015/11/23",S(0,100),"DQ"],["2015/11/24",S(0,100),"DQ"],["2015/11/25",S(0,100),"DQ"],["2015/11/26",S(0,100),"DQ"],["2015/11/27",S(0,100),"DQ"],["2015/11/28",S(0,100),"DQ"],["2015/11/08",S(0,100),"TY"],["2015/11/09",S(0,100),"TY"],["2015/11/10",S(0,100),"TY"],["2015/11/11",S(0,100),"TY"],["2015/11/12",S(0,100),"TY"],["2015/11/13",S(0,100),"TY"],["2015/11/14",S(0,100),"TY"],["2015/11/15",S(0,100),"TY"],["2015/11/16",S(0,100),"TY"],["2015/11/17",S(0,100),"TY"],["2015/11/18",S(0,100),"TY"],["2015/11/19",S(0,100),"TY"],["2015/11/20",S(0,100),"TY"],["2015/11/21",S(0,100),"TY"],["2015/11/22",S(0,100),"TY"],["2015/11/23",S(0,100),"TY"],["2015/11/24",S(0,100),"TY"],["2015/11/25",S(0,100),"TY"],["2015/11/26",S(0,100),"TY"],["2015/11/27",S(0,100),"TY"],["2015/11/28",S(0,100),"TY"],["2015/11/08",S(0,100),"SS"],["2015/11/09",S(0,100),"SS"],["2015/11/10",S(0,100),"SS"],["2015/11/11",S(0,100),"SS"],["2015/11/12",S(0,100),"SS"],["2015/11/13",S(0,100),"SS"],["2015/11/14",S(0,100),"SS"],["2015/11/15",S(0,100),"SS"],["2015/11/16",S(0,100),"SS"],["2015/11/17",S(0,100),"SS"],["2015/11/18",S(0,100),"SS"],["2015/11/19",S(0,100),"SS"],["2015/11/20",S(0,100),"SS"],["2015/11/21",S(0,100),"SS"],["2015/11/22",S(0,100),"SS"],["2015/11/23",S(0,100),"SS"],["2015/11/24",S(0,100),"SS"],["2015/11/25",S(0,100),"SS"],["2015/11/26",S(0,100),"SS"],["2015/11/27",S(0,100),"SS"],["2015/11/28",S(0,100),"SS"],["2015/11/08",S(0,100),"QG"],["2015/11/09",S(0,100),"QG"],["2015/11/10",S(0,100),"QG"],["2015/11/11",S(0,100),"QG"],["2015/11/12",S(0,100),"QG"],["2015/11/13",S(0,100),"QG"],["2015/11/14",S(0,100),"QG"],["2015/11/15",S(0,100),"QG"],["2015/11/16",S(0,100),"QG"],["2015/11/17",S(0,100),"QG"],["2015/11/18",S(0,100),"QG"],["2015/11/19",S(0,100),"QG"],["2015/11/20",S(0,100),"QG"],["2015/11/21",S(0,100),"QG"],["2015/11/22",S(0,100),"QG"],["2015/11/23",S(0,100),"QG"],["2015/11/24",S(0,100),"QG"],["2015/11/25",S(0,100),"QG"],["2015/11/26",S(0,100),"QG"],["2015/11/27",S(0,100),"QG"],["2015/11/28",S(0,100),"QG"],["2015/11/08",S(0,100),"SY"],["2015/11/09",S(0,100),"SY"],["2015/11/10",S(0,100),"SY"],["2015/11/11",S(0,100),"SY"],["2015/11/12",S(0,100),"SY"],["2015/11/13",S(0,100),"SY"],["2015/11/14",S(0,100),"SY"],["2015/11/15",S(0,100),"SY"],["2015/11/16",S(0,100),"SY"],["2015/11/17",S(0,100),"SY"],["2015/11/18",S(0,100),"SY"],["2015/11/19",S(0,100),"SY"],["2015/11/20",S(0,100),"SY"],["2015/11/21",S(0,100),"SY"],["2015/11/22",S(0,100),"SY"],["2015/11/23",S(0,100),"SY"],["2015/11/24",S(0,100),"SY"],["2015/11/25",S(0,100),"SY"],["2015/11/26",S(0,100),"SY"],["2015/11/27",S(0,100),"SY"],["2015/11/28",S(0,100),"SY"],["2015/11/08",S(0,100),"DD"],["2015/11/09",S(0,100),"DD"],["2015/11/10",S(0,100),"DD"],["2015/11/11",S(0,100),"DD"],["2015/11/12",S(0,100),"DD"],["2015/11/13",S(0,100),"DD"],["2015/11/14",S(0,100),"DD"],["2015/11/15",S(0,100),"DD"],["2015/11/16",S(0,100),"DD"],["2015/11/17",S(0,100),"DD"],["2015/11/18",S(0,100),"DD"],["2015/11/19",S(0,100),"DD"],["2015/11/20",S(0,100),"DD"],["2015/11/21",S(0,100),"DD"],["2015/11/22",S(0,100),"DD"],["2015/11/23",S(0,100),"DD"],["2015/11/24",S(0,100),"DD"],["2015/11/25",S(0,100),"DD"],["2015/11/26",S(0,100),"DD"],["2015/11/27",S(0,100),"DD"],["2015/11/28",S(0,100),"DD"]]}});return watch(Q.value,()=>{t.color=[Q.value.color]},{immediate:!0}),onMounted(()=>{D=setInterval(()=>{t.series.data=[["2015/11/08",S(0,100),"DQ"],["2015/11/09",S(0,100),"DQ"],["2015/11/10",S(0,100),"DQ"],["2015/11/11",S(0,100),"DQ"],["2015/11/12",S(0,100),"DQ"],["2015/11/13",S(0,100),"DQ"],["2015/11/14",S(0,100),"DQ"],["2015/11/15",S(0,100),"DQ"],["2015/11/16",S(0,100),"DQ"],["2015/11/17",S(0,100),"DQ"],["2015/11/18",S(0,100),"DQ"],["2015/11/19",S(0,100),"DQ"],["2015/11/20",S(0,100),"DQ"],["2015/11/21",S(0,100),"DQ"],["2015/11/22",S(0,100),"DQ"],["2015/11/23",S(0,100),"DQ"],["2015/11/24",S(0,100),"DQ"],["2015/11/25",S(0,100),"DQ"],["2015/11/26",S(0,100),"DQ"],["2015/11/27",S(0,100),"DQ"],["2015/11/28",S(0,100),"DQ"],["2015/11/08",S(0,100),"TY"],["2015/11/09",S(0,100),"TY"],["2015/11/10",S(0,100),"TY"],["2015/11/11",S(0,100),"TY"],["2015/11/12",S(0,100),"TY"],["2015/11/13",S(0,100),"TY"],["2015/11/14",S(0,100),"TY"],["2015/11/15",S(0,100),"TY"],["2015/11/16",S(0,100),"TY"],["2015/11/17",S(0,100),"TY"],["2015/11/18",S(0,100),"TY"],["2015/11/19",S(0,100),"TY"],["2015/11/20",S(0,100),"TY"],["2015/11/21",S(0,100),"TY"],["2015/11/22",S(0,100),"TY"],["2015/11/23",S(0,100),"TY"],["2015/11/24",S(0,100),"TY"],["2015/11/25",S(0,100),"TY"],["2015/11/26",S(0,100),"TY"],["2015/11/27",S(0,100),"TY"],["2015/11/28",S(0,100),"TY"],["2015/11/08",S(0,100),"SS"],["2015/11/09",S(0,100),"SS"],["2015/11/10",S(0,100),"SS"],["2015/11/11",S(0,100),"SS"],["2015/11/12",S(0,100),"SS"],["2015/11/13",S(0,100),"SS"],["2015/11/14",S(0,100),"SS"],["2015/11/15",S(0,100),"SS"],["2015/11/16",S(0,100),"SS"],["2015/11/17",S(0,100),"SS"],["2015/11/18",S(0,100),"SS"],["2015/11/19",S(0,100),"SS"],["2015/11/20",S(0,100),"SS"],["2015/11/21",S(0,100),"SS"],["2015/11/22",S(0,100),"SS"],["2015/11/23",S(0,100),"SS"],["2015/11/24",S(0,100),"SS"],["2015/11/25",S(0,100),"SS"],["2015/11/26",S(0,100),"SS"],["2015/11/27",S(0,100),"SS"],["2015/11/28",S(0,100),"SS"],["2015/11/08",S(0,100),"QG"],["2015/11/09",S(0,100),"QG"],["2015/11/10",S(0,100),"QG"],["2015/11/11",S(0,100),"QG"],["2015/11/12",S(0,100),"QG"],["2015/11/13",S(0,100),"QG"],["2015/11/14",S(0,100),"QG"],["2015/11/15",S(0,100),"QG"],["2015/11/16",S(0,100),"QG"],["2015/11/17",S(0,100),"QG"],["2015/11/18",S(0,100),"QG"],["2015/11/19",S(0,100),"QG"],["2015/11/20",S(0,100),"QG"],["2015/11/21",S(0,100),"QG"],["2015/11/22",S(0,100),"QG"],["2015/11/23",S(0,100),"QG"],["2015/11/24",S(0,100),"QG"],["2015/11/25",S(0,100),"QG"],["2015/11/26",S(0,100),"QG"],["2015/11/27",S(0,100),"QG"],["2015/11/28",S(0,100),"QG"],["2015/11/08",S(0,100),"SY"],["2015/11/09",S(0,100),"SY"],["2015/11/10",S(0,100),"SY"],["2015/11/11",S(0,100),"SY"],["2015/11/12",S(0,100),"SY"],["2015/11/13",S(0,100),"SY"],["2015/11/14",S(0,100),"SY"],["2015/11/15",S(0,100),"SY"],["2015/11/16",S(0,100),"SY"],["2015/11/17",S(0,100),"SY"],["2015/11/18",S(0,100),"SY"],["2015/11/19",S(0,100),"SY"],["2015/11/20",S(0,100),"SY"],["2015/11/21",S(0,100),"SY"],["2015/11/22",S(0,100),"SY"],["2015/11/23",S(0,100),"SY"],["2015/11/24",S(0,100),"SY"],["2015/11/25",S(0,100),"SY"],["2015/11/26",S(0,100),"SY"],["2015/11/27",S(0,100),"SY"],["2015/11/28",S(0,100),"SY"],["2015/11/08",S(0,100),"DD"],["2015/11/09",S(0,100),"DD"],["2015/11/10",S(0,100),"DD"],["2015/11/11",S(0,100),"DD"],["2015/11/12",S(0,100),"DD"],["2015/11/13",S(0,100),"DD"],["2015/11/14",S(0,100),"DD"],["2015/11/15",S(0,100),"DD"],["2015/11/16",S(0,100),"DD"],["2015/11/17",S(0,100),"DD"],["2015/11/18",S(0,100),"DD"],["2015/11/19",S(0,100),"DD"],["2015/11/20",S(0,100),"DD"],["2015/11/21",S(0,100),"DD"],["2015/11/22",S(0,100),"DD"],["2015/11/23",S(0,100),"DD"],["2015/11/24",S(0,100),"DD"],["2015/11/25",S(0,100),"DD"],["2015/11/26",S(0,100),"DD"],["2015/11/27",S(0,100),"DD"],["2015/11/28",S(0,100),"DD"]]},3e3)}),onBeforeUnmount(()=>{D&&clearTimeout(D)}),(p,d)=>{const T=e("vab-chart"),n=e("vab-card"),i=e("el-col");return l(),c(i,{lg:8,md:12,sm:24,xl:6,xs:24},{default:Y(()=>[o(n,{"body-style":{height:"240px"},skeleton:"",title:a.title},{default:Y(()=>[o(T,{option:m(t)},null,8,["option"])]),_:1},8,["title"])]),_:1})}}});export{v as default};
