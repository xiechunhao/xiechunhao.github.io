/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 13:58:02 
 */
import{_ as m}from"./index-DK68u2cP.js";import g from"./index-BbaGYxLP.js";import{d as p,Q as C,R as v,o as s,S as y,a6 as c,U as l,W as a,b as o,a as b,X as u,Y as n,aD as S,n as x,b6 as k}from"./vsv-element-plus-CcCXTk6v.js";import{_ as V}from"./index-DuUxtc1j.js";import"./vsv-icon-1Y3OapYK.js";import"./vsv-nprogress-D-M_H-zP.js";const h={class:"bottom"},$=p({name:"GoodsCard",__name:"GoodsCard",props:{background:{type:String,default:"white"},title:{type:String,default:"Test"},icon:{type:String,default:""},iconStyle:{type:Object,default:()=>({})},percentage:{type:String,default:"10%"},countConfig:{type:Object,default:()=>({startValue:0,endValue:k(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3})}},setup(e){return(t,i)=>{const d=g,r=C("vab-icon"),f=m;return s(),v(f,{class:x(["goods-card","top-card-"+e.background])},{default:y(()=>[c(u(e.title)+" ",1),t.$slots.tag?l(t.$slots,"tag",{key:0},void 0,!0):a("",!0),o("p",null,[n(d,{decimals:e.countConfig.decimals,duration:e.countConfig.duration,"end-value":e.countConfig.endValue,prefix:e.countConfig.prefix,separator:e.countConfig.separator,"start-value":e.countConfig.startValue,suffix:e.countConfig.suffix},null,8,["decimals","duration","end-value","prefix","separator","start-value","suffix"])]),e.icon?(s(),b("div",{key:1,class:"right-icon",style:S(e.iconStyle)},[n(r,{icon:e.icon},null,8,["icon"])],4)):a("",!0),o("div",h,[i[0]||(i[0]=c(" 自上周以来 ")),n(r,{icon:"arrow-up-line"}),o("span",null,u(e.percentage),1),t.$slots.chart?l(t.$slots,"chart",{key:0},void 0,!0):a("",!0)])]),_:3},8,["class"])}}}),D=V($,[["__scopeId","data-v-5fd67532"]]);export{D as default};
