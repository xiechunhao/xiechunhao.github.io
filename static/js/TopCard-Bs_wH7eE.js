/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:17:33 
 */
import{d as g,a6 as p,N as a,o as c,M as v,$ as C,a4 as u,a3 as l,b0 as d,_ as o,e as n,T as r,b,n as x}from"./vsv-element-plus-CxGOTlXz.js";import{_ as y}from"./index-vqJMV2wg.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const k={key:1,class:"right-icon"},V={class:"bottom"},h=g({name:"TopCard",__name:"TopCard",props:{background:{type:String,default:"white"},title:{type:String,default:"Test"},icon:{type:String,default:""},percentage:{type:String,default:"10%"},countConfig:{type:Object,default:()=>({startValue:0,endValue:p(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3})}},setup(e){return(t,i)=>{const f=a("vab-count"),s=a("vab-icon"),m=a("vab-card");return c(),v(m,{class:x(["top-card","top-card-"+e.background])},{default:C(()=>[u(l(e.title)+" ",1),t.$slots.tag?d(t.$slots,"tag",{key:0},void 0,!0):o("",!0),n("p",null,[r(f,{decimals:e.countConfig.decimals,duration:e.countConfig.duration,"end-value":e.countConfig.endValue,prefix:e.countConfig.prefix,separator:e.countConfig.separator,"start-value":e.countConfig.startValue,suffix:e.countConfig.suffix},null,8,["decimals","duration","end-value","prefix","separator","start-value","suffix"])]),e.icon?(c(),b("div",k,[r(s,{icon:e.icon},null,8,["icon"])])):o("",!0),n("div",V,[i[0]||(i[0]=u(" 自上周以来 ")),r(s,{icon:"arrow-up-line"}),n("span",null,l(e.percentage),1),t.$slots.chart?d(t.$slots,"chart",{key:0},void 0,!0):o("",!0)])]),_:3},8,["class"])}}}),B=y(h,[["__scopeId","data-v-be657b6c"]]);export{B as default};
