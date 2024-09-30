/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-30 14:06:07 
 */
import{d as V,N as u,o as h,b as k,T as e,$ as a,a4 as l,a3 as i,e as _,u as n}from"./vsv-element-plus-CxGOTlXz.js";import{_ as C}from"./index-DMdRIM5p.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const N={class:"pay-button-group"},S=V({name:"Step2",__name:"Step2",props:{infoData:{type:Object,default:()=>({})}},emits:["change-step"],setup(s,{emit:g}){const m=g,p=ref(),d=reactive({password:"123456"}),b=reactive({password:[{required:!0,message:"请输入支付密码",trigger:"blur"}]}),r=ref(!1),v=()=>{var f;(f=p.value)==null||f.validate(t=>{t?(r.value=!0,setTimeout(()=>{m("change-step",2),r.value=!1},2e3)):r.value=!1})},w=()=>{m("change-step",0)};return(f,t)=>{const o=u("el-form-item"),y=u("el-input"),x=u("el-form"),c=u("el-button");return h(),k("div",null,[e(x,{ref_key:"formRef",ref:p,"label-width":"100px",model:n(d),rules:n(b)},{default:a(()=>[e(o,{label:"付款账户"},{default:a(()=>[l(i(s.infoData.payAccount),1)]),_:1}),e(o,{label:"收款账户"},{default:a(()=>[l(i(s.infoData.gatheringAccount),1)]),_:1}),e(o,{label:"收款人姓名"},{default:a(()=>[l(i(s.infoData.gatheringName),1)]),_:1}),e(o,{label:"转账金额"},{default:a(()=>[_("strong",null,"￥"+i(s.infoData.price)+"元",1)]),_:1}),e(o,{label:"支付密码",prop:"password"},{default:a(()=>[e(y,{modelValue:n(d).password,"onUpdate:modelValue":t[0]||(t[0]=D=>n(d).password=D),clearable:"",type:"password"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),_("div",N,[e(c,{loading:n(r),type:"primary",onClick:v},{default:a(()=>t[1]||(t[1]=[l("提交")])),_:1},8,["loading"]),e(c,{onClick:w},{default:a(()=>t[2]||(t[2]=[l("上一步")])),_:1})])])}}}),j=C(S,[["__scopeId","data-v-da705ea1"]]);export{j as default};
