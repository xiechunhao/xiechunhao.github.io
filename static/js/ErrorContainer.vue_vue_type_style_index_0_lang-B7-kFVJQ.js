/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-12 16:08:16 
 */
import{d,b as _,e as t,Z as n,R as s,Y as e,T as i,a8 as u,a7 as h,o as p}from"./vsv-element-plus-B-S50adB.js";const m={class:"error-container"},f={class:"error-content"},v={class:"pic-error"},b={class:"bullshit"},g={class:"bullshit-oops"},y={class:"bullshit-headline"},C={class:"bullshit-info"},B=d({name:"ErrorContainer",__name:"ErrorContainer",props:{oops:{type:String,default:""},headline:{type:String,default:""},info:{type:String,default:""},btn:{type:String,default:""},icon:{type:String,default:""}},setup(o){return(k,S)=>{const a=s("vab-icon"),c=u,r=s("router-link");return p(),_("div",m,[t("div",f,[t("div",v,[n(a,{class:"error-svg",icon:o.icon,"is-custom-svg":""},null,8,["icon"])]),t("div",b,[t("div",g,e(o.oops),1),t("div",y,e(o.headline),1),t("div",C,e(o.info),1),n(r,{custom:"",to:"/"},{default:i(({navigate:l})=>[n(c,{type:"primary",onClick:l},{default:i(()=>[h(e(o.btn),1)]),_:2},1032,["onClick"])]),_:1})])])])}}});export{B as _};
