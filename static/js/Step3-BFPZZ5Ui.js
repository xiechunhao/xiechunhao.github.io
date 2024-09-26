/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{d as u,F as l,o as b,b as g,e as s,M as t,V as e,_ as c,Z as i}from"./vsv-element-plus-CbS2IxKo.js";import{_ as y}from"./index-BnT9uhJE.js";import"./vsv-icon-93gfr_RM.js";import"./vsv-nprogress-DzPgnd7z.js";const v={class:"pay-top-content"},h={class:"pay-button-group"},x=u({name:"Step3",__name:"Step3",props:{infoData:{type:Object,default:()=>({})}},emits:["change-step"],setup(o,{emit:r}){const p=r,m=()=>{p("change-step",0)};return(D,a)=>{const _=l("vab-icon"),n=l("el-form-item"),d=l("el-form"),f=l("el-button");return b(),g("div",null,[s("div",v,[t(_,{class:"pay-success",icon:"checkbox-circle-line"}),a[0]||(a[0]=s("p",null,"支付成功",-1))]),t(d,{class:"pay-bottom","label-width":"100px"},{default:e(()=>[t(n,{label:"付款账户"},{default:e(()=>[c(i(o.infoData.payAccount),1)]),_:1}),t(n,{label:"收款账户"},{default:e(()=>[c(i(o.infoData.gatheringAccount),1)]),_:1}),t(n,{label:"收款人姓名"},{default:e(()=>[c(i(o.infoData.gatheringName),1)]),_:1}),t(n,{label:"转账金额"},{default:e(()=>[s("strong",null,"￥"+i(o.infoData.price)+"元",1)]),_:1})]),_:1}),s("div",h,[t(f,{type:"primary",onClick:m},{default:e(()=>a[1]||(a[1]=[c("再转一笔")])),_:1})])])}}}),V=y(x,[["__scopeId","data-v-745c553a"]]);export{V as default};
