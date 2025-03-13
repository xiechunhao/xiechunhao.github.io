/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-14 01:23:41
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6011],{27486:function(e,l,r){r.r(l),r.d(l,{default:function(){return f}});var a=r(58335),u=(r(27322),r(12873),r(73120)),t=(r(52539),r(44134)),n=(r(92498),r(5309),r(46137)),o=(r(30957),r(34641));const m={class:"pay-button-group"};function c(e,l,r,c,d,i){const p=n.WK,g=t.xE,s=t.US,f=u.S2,b=a.KR;return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(s,{ref:"formRef","label-width":"100px",model:e.form,rules:e.rules},{default:(0,o.k6)((()=>[(0,o.bF)(g,{label:"付款账户",prop:"payAccount"},{default:(0,o.k6)((()=>[(0,o.bF)(p,{modelValue:e.form.payAccount,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.payAccount=l)},null,8,["modelValue"])])),_:1}),(0,o.bF)(g,{label:"收款账户",prop:"gatheringAccount"},{default:(0,o.k6)((()=>[(0,o.bF)(p,{modelValue:e.form.gatheringAccount,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.gatheringAccount=l)},null,8,["modelValue"])])),_:1}),(0,o.bF)(g,{label:"收款人姓名",prop:"gatheringName"},{default:(0,o.k6)((()=>[(0,o.bF)(p,{modelValue:e.form.gatheringName,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.gatheringName=l)},null,8,["modelValue"])])),_:1}),(0,o.bF)(g,{label:"转账金额",prop:"price"},{default:(0,o.k6)((()=>[(0,o.bF)(p,{modelValue:e.form.price,"onUpdate:modelValue":l[3]||(l[3]=l=>e.form.price=l)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"]),(0,o.Lk)("div",m,[(0,o.bF)(f,{type:"primary",onClick:e.handleSubmit},{default:(0,o.k6)((()=>l[4]||(l[4]=[(0,o.eW)("下一步")]))),_:1},8,["onClick"])]),(0,o.bF)(b,{closable:!1},{default:(0,o.k6)((()=>l[5]||(l[5]=[(0,o.Lk)("h3",null,"转账到支付宝",-1),(0,o.Lk)("p",null,"生活好，支付宝。生活好，支付宝。生活好，支付宝。生活好，支付宝。",-1),(0,o.Lk)("h3",null,"转账到微信",-1),(0,o.Lk)("p",null," 微不可挡，万众一信。微不可挡，万众一信。微不可挡，万众一信。微不可挡，万众一信。 ",-1)]))),_:1})])}var d=r(37489),i=(0,o.pM)({name:"Step1",emits:["change-step"],setup(e,{emit:l}){const r=(0,d.Kh)({formRef:null,form:{payAccount:"****************",gatheringAccount:"****************",gatheringName:"***",price:"100"},rules:{payAccount:[{required:!0,message:"请选择付款账户",trigger:"blur"}],gatheringAccount:[{required:!0,message:"请输入收款账户",trigger:"blur"},{required:!0,message:"账户名应为邮箱格式",trigger:"blur"}],gatheringName:[{required:!0,message:"请输入收款人姓名",trigger:"blur"}],price:[{required:!0,message:"请输入转账金额",trigger:"blur"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"请输入合法金额数字"}]}}),a=()=>{r["formRef"].validate((e=>{e&&l("change-step",1,r.form)}))};return{...(0,d.QW)(r),handleSubmit:a}}});function p(e){e.__source="src/views/vab/form/components/Step1.vue"}var g=r(48499);"function"===typeof p&&p(i);const s=(0,g.A)(i,[["render",c],["__scopeId","data-v-2b5ad762"]]);var f=s}}]);