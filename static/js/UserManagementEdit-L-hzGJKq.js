/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{a as y}from"./userManagement-NPAM9lzj.js";import{d as M,A as C,U as s,u as l,F as E,B as m,o as q,K as o,Z as B}from"./vsv-element-plus-D84I6Pnf.js";import"./index-BL5slC2T.js";import"./vsv-icon-DZABqXig.js";import"./vsv-nprogress-0btfRK0G.js";const K=M({name:"UserManagementEdit",__name:"UserManagementEdit",emits:["fetch-data"],setup(F,{expose:_,emit:b}){const g=b,d=ref(),t=reactive({username:"",password:"",email:"",roles:[]}),V=reactive({username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}],email:[{required:!0,trigger:"blur",message:"请输入邮箱"}],roles:[{required:!0,trigger:"blur",message:"请选择角色"}]}),p=ref(""),n=ref(!1);_({showEdit:a=>{n.value=!0,nextTick(()=>{a?(p.value="编辑",Object.assign(t,a)):p.value="添加"})}});const f=()=>{var a,e;(a=d.value)==null||a.clearValidate(),(e=d.value)==null||e.resetFields(),g("fetch-data")},v=()=>{var a;(a=d.value)==null||a.validate(async e=>{if(e){const{msg:u}=await y(t);await $baseMessage(u,"success","hey"),await f(),n.value=!1}})};return(a,e)=>{const u=m("el-input"),i=m("el-form-item"),c=m("el-checkbox"),w=m("el-checkbox-group"),x=m("el-form"),k=m("el-button"),U=m("vab-dialog");return q(),C(U,{modelValue:l(n),"onUpdate:modelValue":e[4]||(e[4]=r=>E(n)?n.value=r:null),"append-to-body":"",title:l(p),width:"500px",onClose:f},{footer:s(()=>[o(k,{type:"primary",onClick:v},{default:s(()=>e[5]||(e[5]=[B("保存")])),_:1})]),default:s(()=>[o(x,{ref_key:"formRef",ref:d,"label-width":"80px",model:l(t),rules:l(V)},{default:s(()=>[o(i,{label:"用户名",prop:"username"},{default:s(()=>[o(u,{modelValue:l(t).username,"onUpdate:modelValue":e[0]||(e[0]=r=>l(t).username=r),modelModifiers:{trim:!0},clearable:""},null,8,["modelValue"])]),_:1}),o(i,{label:"密码",prop:"password"},{default:s(()=>[o(u,{modelValue:l(t).password,"onUpdate:modelValue":e[1]||(e[1]=r=>l(t).password=r),modelModifiers:{trim:!0},clearable:"",type:"password"},null,8,["modelValue"])]),_:1}),o(i,{label:"邮箱",prop:"email"},{default:s(()=>[o(u,{modelValue:l(t).email,"onUpdate:modelValue":e[2]||(e[2]=r=>l(t).email=r),modelModifiers:{trim:!0},clearable:""},null,8,["modelValue"])]),_:1}),o(i,{label:"角色",prop:"roles"},{default:s(()=>[o(w,{modelValue:l(t).roles,"onUpdate:modelValue":e[3]||(e[3]=r=>l(t).roles=r)},{default:s(()=>[o(c,{label:"admin"}),o(c,{label:"editor"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});export{K as default};
