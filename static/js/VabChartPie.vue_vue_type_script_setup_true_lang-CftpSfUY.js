/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 16:06:30 
 */
import{_ as c}from"./index-Cb-9Eo_O.js";import p from"./index-Bgr4NDc5.js";import{c as _,s as d}from"./index-D08hoOyC.js";import{d as f,p as v,b6 as e,w as b,E as g,D as h,o as x,S as C,T as n,W as r,u as S,b7 as y}from"./vsv-element-plus-OoOmiKKG.js";const P=f({name:"VabChartPie",__name:"VabChartPie",props:{title:{type:String,default:""}},setup(s){const l=_(),{theme:o}=d(l);let t;const a=v({grid:{top:20,right:20,bottom:40,left:40},tooltip:{trigger:"item"},series:{name:"访问来源",type:"pie",radius:["40%","80%"],itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:[{value:e(0,100),name:"搜索引擎"},{value:e(0,100),name:"直接访问"},{value:e(0,100),name:"邮件营销"},{value:e(0,100),name:"联盟广告"},{value:e(0,100),name:"视频广告"}]}});return b(o.value,()=>{a.color=[o.value.color]},{immediate:!0}),g(()=>{t=setInterval(()=>{a.series.data=[{value:e(0,100),name:"搜索引擎"},{value:e(0,100),name:"直接访问"},{value:e(0,100),name:"邮件营销"},{value:e(0,100),name:"联盟广告"},{value:e(0,100),name:"视频广告"}]},3e3)}),h(()=>{t&&clearInterval(t)}),(k,w)=>{const i=p,m=c,u=y;return x(),C(u,{lg:8,md:12,sm:24,xl:6,xs:24},{default:n(()=>[r(m,{"body-style":{height:"240px"},skeleton:"",title:s.title},{default:n(()=>[r(i,{option:S(a)},null,8,["option"])]),_:1},8,["title"])]),_:1})}}});export{P as _};
