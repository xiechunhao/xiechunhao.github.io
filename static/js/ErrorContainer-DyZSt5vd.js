/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:39:13 
 */
import{d,N as n,o as _,b as u,e as t,T as s,a3 as o,$ as i,a4 as h}from"./vsv-element-plus-CxGOTlXz.js";const p={class:"error-container"},f={class:"error-content"},m={class:"pic-error"},v={class:"bullshit"},b={class:"bullshit-oops"},g={class:"bullshit-headline"},y={class:"bullshit-info"},x=d({name:"ErrorContainer",__name:"ErrorContainer",props:{oops:{type:String,default:""},headline:{type:String,default:""},info:{type:String,default:""},btn:{type:String,default:""},icon:{type:String,default:""}},setup(e){return(C,k)=>{const a=n("vab-icon"),c=n("el-button"),r=n("router-link");return _(),u("div",p,[t("div",f,[t("div",m,[s(a,{class:"error-svg",icon:e.icon,"is-custom-svg":""},null,8,["icon"])]),t("div",v,[t("div",b,o(e.oops),1),t("div",g,o(e.headline),1),t("div",y,o(e.info),1),s(r,{custom:"",to:"/"},{default:i(({navigate:l})=>[s(c,{type:"primary",onClick:l},{default:i(()=>[h(o(e.btn),1)]),_:2},1032,["onClick"])]),_:1})])])])}}});export{x as default};
