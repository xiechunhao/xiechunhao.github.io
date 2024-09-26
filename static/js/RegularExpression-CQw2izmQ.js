/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 15:53:45 
 */
import{_ as U}from"./index-Cq5UKYJQ.js";import{az as h,d as w,aA as c,M as x,aB as q,aC as R,aD as y,f as m}from"./index-CQIU_Sxf.js";import{d as F,r as I,p,o as N,b as B,W as r,T as t,u as a,a8 as g,aO as L,aq as P,a9 as M,au as T,b7 as z,b8 as A}from"./vsv-element-plus-DDEqdpLt.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const D={class:"regular-expression-container no-background-container"},k=F({name:"RegularExpression",__name:"RegularExpression",setup(O){const i=I(null),o=p({email:"",phone:"",idCard:"",number:"",english:"",chinese:"",url:""}),f=p({email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{validator:(n,e,l)=>{h(e)?l():l(new Error("请输入有效的邮箱地址"))},trigger:"blur"}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{validator:(n,e,l)=>{w(e)?l():l(new Error("请输入有效的手机号"))},trigger:"blur"}],idCard:[{required:!0,message:"请输入身份证号码",trigger:"blur"},{validator:(n,e,l)=>{c(e)?l():l(new Error("请输入有效的身份证号"))},trigger:"blur"}],number:[{required:!0,message:"请输入数字",trigger:"blur"},{validator:(n,e,l)=>{x(e)?l():l(new Error("请输入有效的数字"))},trigger:"blur"}],english:[{required:!0,message:"请输入英文字符",trigger:"blur"},{validator:(n,e,l)=>{q(e)?l():l(new Error("请输入有效的英文字符"))},trigger:"blur"}],chinese:[{required:!0,message:"请输入中文字符",trigger:"blur"},{validator:(n,e,l)=>{R(e)?l():l(new Error("请输入有效的中文字符"))},trigger:"blur"}],url:[{required:!0,message:"请输入URL",trigger:"blur"},{validator:(n,e,l)=>{y(e)?l():l(new Error("请输入有效的URL"))},trigger:"blur"}]}),b=()=>{var n;(n=i.value)==null||n.validate(e=>{e?m("表单校验通过","success","hey"):m("表单校验失败","error","hey")})},_=()=>{var n;(n=i.value)==null||n.resetFields()};return(n,e)=>{const l=L,u=P,d=M,v=T,V=U,E=z,C=A;return N(),B("div",D,[r(C,{gutter:20},{default:t(()=>[r(E,{lg:8,md:12,sm:24,xl:8,xs:24},{default:t(()=>[r(V,{title:"正则校验"},{default:t(()=>[r(v,{ref_key:"formRef",ref:i,"label-width":"100px",model:a(o),rules:a(f)},{default:t(()=>[r(u,{label:"邮箱",prop:"email"},{default:t(()=>[r(l,{modelValue:a(o).email,"onUpdate:modelValue":e[0]||(e[0]=s=>a(o).email=s),clearable:""},null,8,["modelValue"])]),_:1}),r(u,{label:"手机号码",prop:"phone"},{default:t(()=>[r(l,{modelValue:a(o).phone,"onUpdate:modelValue":e[1]||(e[1]=s=>a(o).phone=s),clearable:""},null,8,["modelValue"])]),_:1}),r(u,{label:"身份证号码",prop:"idCard"},{default:t(()=>[r(l,{modelValue:a(o).idCard,"onUpdate:modelValue":e[2]||(e[2]=s=>a(o).idCard=s),clearable:""},null,8,["modelValue"])]),_:1}),r(u,{label:"数字",prop:"number"},{default:t(()=>[r(l,{modelValue:a(o).number,"onUpdate:modelValue":e[3]||(e[3]=s=>a(o).number=s),clearable:""},null,8,["modelValue"])]),_:1}),r(u,{label:"英文字符",prop:"english"},{default:t(()=>[r(l,{modelValue:a(o).english,"onUpdate:modelValue":e[4]||(e[4]=s=>a(o).english=s),clearable:""},null,8,["modelValue"])]),_:1}),r(u,{label:"中文字符",prop:"chinese"},{default:t(()=>[r(l,{modelValue:a(o).chinese,"onUpdate:modelValue":e[5]||(e[5]=s=>a(o).chinese=s),clearable:""},null,8,["modelValue"])]),_:1}),r(u,{label:"URL",prop:"url"},{default:t(()=>[r(l,{modelValue:a(o).url,"onUpdate:modelValue":e[6]||(e[6]=s=>a(o).url=s),clearable:""},null,8,["modelValue"])]),_:1}),r(u,null,{default:t(()=>[r(d,{type:"primary",onClick:b},{default:t(()=>e[7]||(e[7]=[g("提交")])),_:1}),r(d,{type:"warning",onClick:_},{default:t(()=>e[8]||(e[8]=[g("重置")])),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})]),_:1})])}}});export{k as default};
