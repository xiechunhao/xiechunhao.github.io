/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:33:27 
 */
import{_ as m}from"./index-DGkTrGHB.js";import g from"./index-BRq7I4Kl.js";import{d as p,R as C,S as v,o as s,T as y,a7 as c,V as l,X as a,e as o,b,Y as u,Z as n,aC as S,n as x,b5 as V}from"./vsv-element-plus-B-S50adB.js";import{_ as k}from"./index-Ba9EqH5M.js";import"./vsv-icon-BcEnJ7dJ.js";import"./vsv-nprogress-Bmiy9T8n.js";const h={class:"bottom"},$=p({name:"GoodsCard",__name:"GoodsCard",props:{background:{type:String,default:"white"},title:{type:String,default:"Test"},icon:{type:String,default:""},iconStyle:{type:Object,default:()=>({})},percentage:{type:String,default:"10%"},countConfig:{type:Object,default:()=>({startValue:0,endValue:V(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3})}},setup(e){return(t,i)=>{const d=g,r=C("vab-icon"),f=m;return s(),v(f,{class:x(["goods-card","top-card-"+e.background])},{default:y(()=>[c(u(e.title)+" ",1),t.$slots.tag?l(t.$slots,"tag",{key:0},void 0,!0):a("",!0),o("p",null,[n(d,{decimals:e.countConfig.decimals,duration:e.countConfig.duration,"end-value":e.countConfig.endValue,prefix:e.countConfig.prefix,separator:e.countConfig.separator,"start-value":e.countConfig.startValue,suffix:e.countConfig.suffix},null,8,["decimals","duration","end-value","prefix","separator","start-value","suffix"])]),e.icon?(s(),b("div",{key:1,class:"right-icon",style:S(e.iconStyle)},[n(r,{icon:e.icon},null,8,["icon"])],4)):a("",!0),o("div",h,[i[0]||(i[0]=c(" 自上周以来 ")),n(r,{icon:"arrow-up-line"}),o("span",null,u(e.percentage),1),t.$slots.chart?l(t.$slots,"chart",{key:0},void 0,!0):a("",!0)])]),_:3},8,["class"])}}}),z=k($,[["__scopeId","data-v-5fd67532"]]);export{z as default};
