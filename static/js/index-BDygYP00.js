/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{d as x,a as N,J as l,U as t,A as s,u as o,D as k,b as m,bt as D,Z as _,o as q}from"./vsv-element-plus-CWjYVfvE.js";const A={class:"website-setting-container no-background-container"},M=x({name:"WebsiteSetting",__name:"index",setup(E){const a=reactive({siteName:"Vue Shop Vite",siteUrl:"https://vuejs-core.cn/shop-vite",metaKeywords:"",metaDesc:"",copyright:""}),i=ref([]),p=ref(),c=reactive({siteName:[{required:!0,message:"请输入网站名称",trigger:"blur"}],siteUrl:[{required:!0,message:"请输入网址",trigger:"blur"},{pattern:/^https?:\/\/.*/,message:"请输入正确的网址",trigger:"blur"}],metaKeywords:[{required:!0,message:"请输入META关键词",trigger:"blur"}],metaDesc:[{required:!0,message:"请输入META描述",trigger:"blur"}],copyright:[{required:!0,message:"请输入版权信息",trigger:"blur"}]}),f=()=>{var d;(d=p.value)==null||d.validate(e=>{e&&$baseMessage("表单提交成功","success","hey")})};return(d,e)=>{const u=s("el-input"),n=s("el-form-item"),g=s("el-icon"),b=s("el-upload"),V=s("el-button"),y=s("el-form"),v=s("vab-card"),U=s("el-col"),w=s("el-row");return q(),N("div",A,[l(w,{gutter:20},{default:t(()=>[l(U,{lg:12,md:20,sm:24,xl:10,xs:24},{default:t(()=>[l(v,{title:"网站设置"},{default:t(()=>[l(y,{ref_key:"formRef",ref:p,"label-position":"top",model:o(a),rules:o(c),onSubmit:f},{default:t(()=>[l(n,{label:"网站名称",prop:"siteName"},{default:t(()=>[l(u,{modelValue:o(a).siteName,"onUpdate:modelValue":e[0]||(e[0]=r=>o(a).siteName=r),clearable:""},null,8,["modelValue"])]),_:1}),l(n,{label:"logo",prop:"logo"},{default:t(()=>[l(b,{"file-list":o(i),"onUpdate:fileList":e[1]||(e[1]=r=>k(i)?i.value=r:null),action:"/uploadFile",drag:"",multiple:"",style:{width:"100%"}},{tip:t(()=>e[6]||(e[6]=[m("div",{class:"el-upload__tip"},"jpg/png 文件需小于500kb",-1)])),default:t(()=>[l(g,{class:"el-icon--upload"},{default:t(()=>[l(o(D))]),_:1}),e[7]||(e[7]=m("div",{class:"el-upload__text"},[_(" 将logo拽至此处或 "),m("em",null,"点击上传")],-1))]),_:1},8,["file-list"])]),_:1}),l(n,{label:"网址",prop:"siteUrl"},{default:t(()=>[l(u,{modelValue:o(a).siteUrl,"onUpdate:modelValue":e[2]||(e[2]=r=>o(a).siteUrl=r),clearable:""},null,8,["modelValue"])]),_:1}),l(n,{label:"META关键词",prop:"metaKeywords"},{default:t(()=>[l(u,{modelValue:o(a).metaKeywords,"onUpdate:modelValue":e[3]||(e[3]=r=>o(a).metaKeywords=r),clearable:""},null,8,["modelValue"])]),_:1}),l(n,{label:"META描述",prop:"metaDesc"},{default:t(()=>[l(u,{modelValue:o(a).metaDesc,"onUpdate:modelValue":e[4]||(e[4]=r=>o(a).metaDesc=r),clearable:""},null,8,["modelValue"])]),_:1}),l(n,{label:"版权信息",prop:"copyright"},{default:t(()=>[l(u,{modelValue:o(a).copyright,"onUpdate:modelValue":e[5]||(e[5]=r=>o(a).copyright=r),clearable:""},null,8,["modelValue"])]),_:1}),l(n,null,{default:t(()=>[l(V,{type:"primary",onClick:f},{default:t(()=>e[8]||(e[8]=[_("保存")])),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})]),_:1})])}}});export{M as default};
