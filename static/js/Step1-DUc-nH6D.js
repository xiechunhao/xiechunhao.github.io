/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 17:39:02 
 */
import{_ as A}from"./index.vue_vue_type_script_setup_true_lang-kw-wsGJ1.js";import{d as y,r as v,p as i,o as N,b as h,W as t,T as o,u as l,aA as q,e as n,a8 as x,aO as E,aq as k,au as B,a9 as S}from"./vsv-element-plus-DDEqdpLt.js";import{_ as U}from"./index-D5j7Mtop.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const w={class:"pay-button-group"},C=y({name:"Step1",__name:"Step1",emits:["change-step"],setup(I,{emit:d}){const g=d,p=v(),a=i({payAccount:"****************",gatheringAccount:"****************",gatheringName:"***",price:"100"}),c=i({payAccount:[{required:!0,message:"请选择付款账户",trigger:"blur"}],gatheringAccount:[{required:!0,message:"请输入收款账户",trigger:"blur"},{required:!0,message:"账户名应为邮箱格式",trigger:"blur"}],gatheringName:[{required:!0,message:"请输入收款人姓名",trigger:"blur"}],price:[{required:!0,message:"请输入转账金额",trigger:"blur"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"请输入合法金额数字"}]}),_=()=>{var m;(m=p.value)==null||m.validate(e=>{e&&g("change-step",1,a)})};return(m,e)=>{const u=E,s=k,f=B,b=S,V=A;return N(),h("div",null,[t(f,{ref_key:"formRef",ref:p,"label-width":"100px",model:l(a),rules:l(c),onSubmit:e[4]||(e[4]=q(()=>{},["prevent"]))},{default:o(()=>[t(s,{label:"付款账户",prop:"payAccount"},{default:o(()=>[t(u,{modelValue:l(a).payAccount,"onUpdate:modelValue":e[0]||(e[0]=r=>l(a).payAccount=r),clearable:""},null,8,["modelValue"])]),_:1}),t(s,{label:"收款账户",prop:"gatheringAccount"},{default:o(()=>[t(u,{modelValue:l(a).gatheringAccount,"onUpdate:modelValue":e[1]||(e[1]=r=>l(a).gatheringAccount=r),clearable:""},null,8,["modelValue"])]),_:1}),t(s,{label:"收款人姓名",prop:"gatheringName"},{default:o(()=>[t(u,{modelValue:l(a).gatheringName,"onUpdate:modelValue":e[2]||(e[2]=r=>l(a).gatheringName=r),clearable:""},null,8,["modelValue"])]),_:1}),t(s,{label:"转账金额",prop:"price"},{default:o(()=>[t(u,{modelValue:l(a).price,"onUpdate:modelValue":e[3]||(e[3]=r=>l(a).price=r),clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),n("div",w,[t(b,{"native-type":"submit",type:"primary",onClick:_},{default:o(()=>e[5]||(e[5]=[x("下一步")])),_:1})]),t(V,null,{default:o(()=>e[6]||(e[6]=[n("h3",null,"转账到支付宝",-1),n("p",null,"生活好，支付宝。生活好，支付宝。生活好，支付宝。生活好，支付宝。",-1),n("h3",null,"转账到微信",-1),n("p",null,"微不可挡，万众一信。微不可挡，万众一信。微不可挡，万众一信。微不可挡，万众一信。",-1)])),_:1})])}}}),O=U(C,[["__scopeId","data-v-e2a02049"]]);export{O as default};
