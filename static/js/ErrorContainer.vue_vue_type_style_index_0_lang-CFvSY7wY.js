/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:42:24 
 */
import{d,o as _,b as u,e as t,W as n,a1 as e,T as s,a8 as h,$ as i,a9 as p}from"./vsv-element-plus-DDEqdpLt.js";const m={class:"error-container"},f={class:"error-content"},v={class:"pic-error"},b={class:"bullshit"},g={class:"bullshit-oops"},y={class:"bullshit-headline"},C={class:"bullshit-info"},B=d({name:"ErrorContainer",__name:"ErrorContainer",props:{oops:{type:String,default:""},headline:{type:String,default:""},info:{type:String,default:""},btn:{type:String,default:""},icon:{type:String,default:""}},setup(o){return(k,S)=>{const a=i("vab-icon"),c=p,r=i("router-link");return _(),u("div",m,[t("div",f,[t("div",v,[n(a,{class:"error-svg",icon:o.icon,"is-custom-svg":""},null,8,["icon"])]),t("div",b,[t("div",g,e(o.oops),1),t("div",y,e(o.headline),1),t("div",C,e(o.info),1),n(r,{custom:"",to:"/"},{default:s(({navigate:l})=>[n(c,{type:"primary",onClick:l},{default:s(()=>[h(e(o.btn),1)]),_:2},1032,["onClick"])]),_:1})])])])}}});export{B as _};
