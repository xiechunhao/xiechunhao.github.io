/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:39:13 
 */
import{a as F}from"./table-DhyfOoHm.js";import{d as N,N as n,o as f,M as _,$ as u,T as o,a4 as R,u as t,b as q,P as D,aa as $,k as j}from"./vsv-element-plus-CxGOTlXz.js";import"./index-BKznZfTt.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const I=N({name:"DefaultTableEdit",__name:"DefaultTableEdit",emits:["fetch-data"],setup(L,{expose:b,emit:V}){const v=V,i=ref(),p=ref(""),d=ref(!1),a=reactive({title:"",author:"",rate:0,datetime:"",status:"",switch:!1,count:0}),g=reactive({title:[{required:!0,trigger:"blur",message:"请输入标题"}],author:[{required:!0,trigger:"blur",message:"请输入作者"}]}),w=ref([{value:"published",label:"published"},{value:"draft",label:"draft"},{value:"deleted",label:"deleted"}]);b({showEdit:r=>{d.value=!0,nextTick(()=>{r?(p.value="编辑",Object.assign(a,r)):p.value="添加"})}});const c=()=>{var r,e;(r=i.value)==null||r.clearValidate(),(e=i.value)==null||e.resetFields(),v("fetch-data")},k=()=>{var r;(r=i.value)==null||r.validate(async e=>{if(e){const{msg:m}=await F(a);await $baseMessage(m,"success","hey"),await c(),d.value=!1}})};return(r,e)=>{const m=n("el-input"),s=n("el-form-item"),x=n("el-date-picker"),y=n("el-option"),U=n("el-select"),E=n("el-input-number"),h=n("el-rate"),C=n("el-switch"),T=n("el-form"),M=n("el-button"),B=n("vab-dialog");return f(),_(B,{modelValue:t(d),"onUpdate:modelValue":e[7]||(e[7]=l=>j(d)?d.value=l:null),"append-to-body":"",title:t(p),width:"500px",onClose:c},{footer:u(()=>[o(M,{type:"primary",onClick:k},{default:u(()=>e[8]||(e[8]=[R("保存")])),_:1})]),default:u(()=>[o(T,{ref_key:"formRef",ref:i,"label-width":"80px",model:t(a),rules:t(g)},{default:u(()=>[o(s,{label:"标题",prop:"title"},{default:u(()=>[o(m,{modelValue:t(a).title,"onUpdate:modelValue":e[0]||(e[0]=l=>t(a).title=l),modelModifiers:{trim:!0},clearable:""},null,8,["modelValue"])]),_:1}),o(s,{label:"作者",prop:"author"},{default:u(()=>[o(m,{modelValue:t(a).author,"onUpdate:modelValue":e[1]||(e[1]=l=>t(a).author=l),modelModifiers:{trim:!0},clearable:""},null,8,["modelValue"])]),_:1}),o(s,{label:"时间",prop:"datetime"},{default:u(()=>[o(x,{modelValue:t(a).datetime,"onUpdate:modelValue":e[2]||(e[2]=l=>t(a).datetime=l),placeholder:"选择日期时间",type:"datetime"},null,8,["modelValue"])]),_:1}),o(s,{label:"状态",prop:"status"},{default:u(()=>[o(U,{modelValue:t(a).status,"onUpdate:modelValue":e[3]||(e[3]=l=>t(a).status=l),clearable:""},{default:u(()=>[(f(!0),q(D,null,$(t(w),l=>(f(),_(y,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(s,{label:"数量",prop:"count"},{default:u(()=>[o(E,{modelValue:t(a).count,"onUpdate:modelValue":e[4]||(e[4]=l=>t(a).count=l)},null,8,["modelValue"])]),_:1}),o(s,{label:"评级",prop:"rate"},{default:u(()=>[o(h,{modelValue:t(a).rate,"onUpdate:modelValue":e[5]||(e[5]=l=>t(a).rate=l)},null,8,["modelValue"])]),_:1}),o(s,{label:"开关",prop:"switch"},{default:u(()=>[o(C,{modelValue:t(a).switch,"onUpdate:modelValue":e[6]||(e[6]=l=>t(a).switch=l)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});export{I as default};
