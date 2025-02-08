/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{a as C}from"./goodsComment-CRcDrLzg.js";import{d as R,A as g,U as m,u as o,F as k,B as r,o as E,K as a,Z as U}from"./vsv-element-plus-D84I6Pnf.js";import"./index-BL5slC2T.js";import"./vsv-icon-DZABqXig.js";import"./vsv-nprogress-0btfRK0G.js";const j=R({name:"GoodsCommentEdit",__name:"GoodsCommentEdit",emits:["fetch-data"],setup(M,{expose:c,emit:_}){const V=_,d=ref(),u=ref(""),n=ref(!1),t=reactive({}),b=reactive({});c({showEdit:l=>{n.value=!0,nextTick(()=>{l?(u.value="回复",Object.assign(t,l),t.replyStatus==="未回复"&&(t.reply="")):u.value="添加"})}});const f=()=>{var l,e;(l=d.value)==null||l.clearValidate(),(e=d.value)==null||e.resetFields(),V("fetch-data")},v=()=>{var l;(l=d.value)==null||l.validate(async e=>{if(e){const{msg:i}=await C(t);await $baseMessage(i,"success","hey"),await f(),n.value=!1}})};return(l,e)=>{const i=r("el-input"),p=r("el-form-item"),y=r("el-form"),x=r("el-button"),w=r("vab-dialog");return E(),g(w,{modelValue:o(n),"onUpdate:modelValue":e[3]||(e[3]=s=>k(n)?n.value=s:null),"append-to-body":"",title:o(u),width:"500px",onClose:f},{footer:m(()=>[a(x,{type:"primary",onClick:v},{default:m(()=>e[4]||(e[4]=[U("保存")])),_:1})]),default:m(()=>[a(y,{ref_key:"formRef",ref:d,"label-width":"80px",model:o(t),rules:o(b)},{default:m(()=>[a(p,{label:"商品名称",prop:"name"},{default:m(()=>[a(i,{modelValue:o(t).name,"onUpdate:modelValue":e[0]||(e[0]=s=>o(t).name=s),modelModifiers:{trim:!0},disabled:""},null,8,["modelValue"])]),_:1}),a(p,{label:"评论内容",prop:"comment"},{default:m(()=>[a(i,{modelValue:o(t).comment,"onUpdate:modelValue":e[1]||(e[1]=s=>o(t).comment=s),modelModifiers:{trim:!0},autosize:{minRows:4,maxRows:12},disabled:"",type:"textarea"},null,8,["modelValue"])]),_:1}),a(p,{label:"回复内容",prop:"reply"},{default:m(()=>[a(i,{modelValue:o(t).reply,"onUpdate:modelValue":e[2]||(e[2]=s=>o(t).reply=s),modelModifiers:{trim:!0},autosize:{minRows:4,maxRows:12},clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});export{j as default};
