/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 13:58:02 
 */
import{d,Q as f,a as b,o as g,b as s,Y as t,ap as y,S as e,aq as v,a6 as l,X as c,a7 as h}from"./vsv-element-plus-CcCXTk6v.js";import{_ as x}from"./index-DuUxtc1j.js";import"./vsv-icon-1Y3OapYK.js";import"./vsv-nprogress-D-M_H-zP.js";const D={class:"pay-top-content"},k={class:"pay-button-group"},B=d({name:"Step3",__name:"Step3",props:{infoData:{type:Object,default:()=>({})}},emits:["change-step"],setup(a,{emit:i}){const p=i,r=()=>{p("change-step",0)};return(C,o)=>{const m=f("vab-icon"),n=v,_=y,u=h;return g(),b("div",null,[s("div",D,[t(m,{class:"pay-success",icon:"checkbox-circle-line"}),o[0]||(o[0]=s("p",null,"支付成功",-1))]),t(_,{class:"pay-bottom","label-width":"100px"},{default:e(()=>[t(n,{label:"付款账户"},{default:e(()=>[l(c(a.infoData.payAccount),1)]),_:1}),t(n,{label:"收款账户"},{default:e(()=>[l(c(a.infoData.gatheringAccount),1)]),_:1}),t(n,{label:"收款人姓名"},{default:e(()=>[l(c(a.infoData.gatheringName),1)]),_:1}),t(n,{label:"转账金额"},{default:e(()=>[s("strong",null,"￥"+c(a.infoData.price)+"元",1)]),_:1})]),_:1}),s("div",k,[t(u,{type:"primary",onClick:r},{default:e(()=>o[1]||(o[1]=[l("再转一笔")])),_:1})])])}}}),w=x(B,[["__scopeId","data-v-745c553a"]]);export{w as default};
