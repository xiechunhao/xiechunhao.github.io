/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:50:12 
 */
import{_}from"./index-Vqsrehqx.js";import p from"./index-LTkvlUT2.js";import{c as u,s as d}from"./index-6xtryadw.js";import{d as f,p as g,b6 as e,w as h,E as v,D as b,o as x,S as C,T as n,W as r,u as S,b7 as y}from"./vsv-element-plus-DDEqdpLt.js";const I=f({name:"VabChartRadar",__name:"VabChartRadar",props:{title:{type:String,default:""}},setup(s){const m=u(),{theme:o}=d(m);let t;const a=g({grid:{top:20,right:20,bottom:40,left:40},tooltip:{trigger:"item"},radar:{indicator:[{name:"销售"},{name:"管理"},{name:"信息技术"},{name:"客服"},{name:"研发"}]},series:{name:"预算分配",type:"radar",data:[{value:[e(50,1e3),e(50,1e3),e(50,1e3),e(50,1e3),e(50,1e3)],name:"预算分配"}]}});return h(o.value,()=>{a.color=[o.value.color]},{immediate:!0}),v(()=>{t=setInterval(()=>{a.series.data=[{value:[e(50,1e3),e(50,1e3),e(50,1e3),e(50,1e3),e(50,1e3)],name:"预算分配"}]},3e3)}),b(()=>{t&&clearInterval(t)}),(k,w)=>{const i=p,l=_,c=y;return x(),C(c,{lg:8,md:12,sm:24,xl:6,xs:24},{default:n(()=>[r(l,{"body-style":{height:"240px"},skeleton:"",title:s.title},{default:n(()=>[r(i,{option:S(a)},null,8,["option"])]),_:1},8,["title"])]),_:1})}}});export{I as _};
