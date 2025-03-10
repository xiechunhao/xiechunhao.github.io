/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{d as u,a as b,b as l,J as t,A as s,U as e,o as g,Z as c,Y as i}from"./vsv-element-plus-CWjYVfvE.js";import{_ as y}from"./index-D_keMk_X.js";import"./vsv-icon-CzoHxvAi.js";import"./vsv-nprogress-D-M_H-zP.js";const v={class:"pay-top-content"},h={class:"pay-button-group"},x=u({name:"Step3",__name:"Step3",props:{infoData:{type:Object,default:()=>({})}},emits:["change-step"],setup(o,{emit:r}){const p=r,m=()=>{p("change-step",0)};return(D,a)=>{const _=s("vab-icon"),n=s("el-form-item"),d=s("el-form"),f=s("el-button");return g(),b("div",null,[l("div",v,[t(_,{class:"pay-success",icon:"checkbox-circle-line"}),a[0]||(a[0]=l("p",null,"支付成功",-1))]),t(d,{class:"pay-bottom","label-width":"100px"},{default:e(()=>[t(n,{label:"付款账户"},{default:e(()=>[c(i(o.infoData.payAccount),1)]),_:1}),t(n,{label:"收款账户"},{default:e(()=>[c(i(o.infoData.gatheringAccount),1)]),_:1}),t(n,{label:"收款人姓名"},{default:e(()=>[c(i(o.infoData.gatheringName),1)]),_:1}),t(n,{label:"转账金额"},{default:e(()=>[l("strong",null,"￥"+i(o.infoData.price)+"元",1)]),_:1})]),_:1}),l("div",h,[t(f,{type:"primary",onClick:m},{default:e(()=>a[1]||(a[1]=[c("再转一笔")])),_:1})])])}}}),A=y(x,[["__scopeId","data-v-745c553a"]]);export{A as default};
