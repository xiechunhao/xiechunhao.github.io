/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:17:33 
 */
import{A as R,b as y,B as N,C as F,D as B,E as L,F as $}from"./index-vqJMV2wg.js";import{d as I,N as i,o as M,b as P,T as r,$ as t,u as o,a4 as p}from"./vsv-element-plus-CxGOTlXz.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const T={class:"regular-expression-container no-background-container"},H=I({name:"RegularExpression",__name:"RegularExpression",setup(A){const d=ref(null),a=reactive({email:"",phone:"",idCard:"",number:"",english:"",chinese:"",url:""}),g=(n,e,l)=>{R(e)?l():l(new Error("请输入有效的邮箱地址"))},f=(n,e,l)=>{y(e)?l():l(new Error("请输入有效的手机号"))},b=(n,e,l)=>{N(e)?l():l(new Error("请输入有效的身份证号"))},_=(n,e,l)=>{F(e)?l():l(new Error("请输入有效的数字"))},v=(n,e,l)=>{B(e)?l():l(new Error("请输入有效的英文字符"))},V=(n,e,l)=>{L(e)?l():l(new Error("请输入有效的中文字符"))},C=(n,e,l)=>{$(e)?l():l(new Error("请输入有效的URL"))},E=reactive({email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{validator:g,trigger:"blur"}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{validator:f,trigger:"blur"}],idCard:[{required:!0,message:"请输入身份证号码",trigger:"blur"},{validator:b,trigger:"blur"}],number:[{required:!0,message:"请输入数字",trigger:"blur"},{validator:_,trigger:"blur"}],english:[{required:!0,message:"请输入英文字符",trigger:"blur"},{validator:v,trigger:"blur"}],chinese:[{required:!0,message:"请输入中文字符",trigger:"blur"},{validator:V,trigger:"blur"}],url:[{required:!0,message:"请输入URL",trigger:"blur"},{validator:C,trigger:"blur"}]}),c=()=>{var n;(n=d.value)==null||n.validate(e=>{e?$baseMessage("表单校验通过","success","hey"):$baseMessage("表单校验失败","error","hey")})},w=()=>{var n;(n=d.value)==null||n.resetFields()};return(n,e)=>{const l=i("el-input"),s=i("el-form-item"),m=i("el-button"),U=i("el-form"),x=i("vab-card"),h=i("el-col"),q=i("el-row");return M(),P("div",T,[r(q,{gutter:20},{default:t(()=>[r(h,{lg:8,md:12,sm:24,xl:8,xs:24},{default:t(()=>[r(x,{title:"正则校验"},{default:t(()=>[r(U,{ref_key:"formRef",ref:d,"label-width":"100px",model:o(a),rules:o(E)},{default:t(()=>[r(s,{label:"邮箱",prop:"email"},{default:t(()=>[r(l,{modelValue:o(a).email,"onUpdate:modelValue":e[0]||(e[0]=u=>o(a).email=u),clearable:""},null,8,["modelValue"])]),_:1}),r(s,{label:"手机号码",prop:"phone"},{default:t(()=>[r(l,{modelValue:o(a).phone,"onUpdate:modelValue":e[1]||(e[1]=u=>o(a).phone=u),clearable:""},null,8,["modelValue"])]),_:1}),r(s,{label:"身份证号码",prop:"idCard"},{default:t(()=>[r(l,{modelValue:o(a).idCard,"onUpdate:modelValue":e[2]||(e[2]=u=>o(a).idCard=u),clearable:""},null,8,["modelValue"])]),_:1}),r(s,{label:"数字",prop:"number"},{default:t(()=>[r(l,{modelValue:o(a).number,"onUpdate:modelValue":e[3]||(e[3]=u=>o(a).number=u),clearable:""},null,8,["modelValue"])]),_:1}),r(s,{label:"英文字符",prop:"english"},{default:t(()=>[r(l,{modelValue:o(a).english,"onUpdate:modelValue":e[4]||(e[4]=u=>o(a).english=u),clearable:""},null,8,["modelValue"])]),_:1}),r(s,{label:"中文字符",prop:"chinese"},{default:t(()=>[r(l,{modelValue:o(a).chinese,"onUpdate:modelValue":e[5]||(e[5]=u=>o(a).chinese=u),clearable:""},null,8,["modelValue"])]),_:1}),r(s,{label:"URL",prop:"url"},{default:t(()=>[r(l,{modelValue:o(a).url,"onUpdate:modelValue":e[6]||(e[6]=u=>o(a).url=u),clearable:""},null,8,["modelValue"])]),_:1}),r(s,null,{default:t(()=>[r(m,{type:"primary",onClick:c},{default:t(()=>e[7]||(e[7]=[p("提交")])),_:1}),r(m,{type:"warning",onClick:w},{default:t(()=>e[8]||(e[8]=[p("重置")])),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})]),_:1})])}}});export{H as default};
