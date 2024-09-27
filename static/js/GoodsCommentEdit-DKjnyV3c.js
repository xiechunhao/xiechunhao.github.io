/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:39:13 
 */
import{a as C}from"./goodsComment-BIQfOLla.js";import{d as R,N as r,o as g,M as k,$ as m,T as a,a4 as E,u as o,k as M}from"./vsv-element-plus-CxGOTlXz.js";import"./index-BKznZfTt.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const $=R({name:"GoodsCommentEdit",__name:"GoodsCommentEdit",emits:["fetch-data"],setup(U,{expose:c,emit:_}){const V=_,d=ref(),u=ref(""),n=ref(!1),t=reactive({}),b=reactive({});c({showEdit:l=>{n.value=!0,nextTick(()=>{l?(u.value="回复",Object.assign(t,l),t.replyStatus==="未回复"&&(t.reply="")):u.value="添加"})}});const f=()=>{var l,e;(l=d.value)==null||l.clearValidate(),(e=d.value)==null||e.resetFields(),V("fetch-data")},v=()=>{var l;(l=d.value)==null||l.validate(async e=>{if(e){const{msg:i}=await C(t);await $baseMessage(i,"success","hey"),await f(),n.value=!1}})};return(l,e)=>{const i=r("el-input"),p=r("el-form-item"),y=r("el-form"),x=r("el-button"),w=r("vab-dialog");return g(),k(w,{modelValue:o(n),"onUpdate:modelValue":e[3]||(e[3]=s=>M(n)?n.value=s:null),"append-to-body":"",title:o(u),width:"500px",onClose:f},{footer:m(()=>[a(x,{type:"primary",onClick:v},{default:m(()=>e[4]||(e[4]=[E("保存")])),_:1})]),default:m(()=>[a(y,{ref_key:"formRef",ref:d,"label-width":"80px",model:o(t),rules:o(b)},{default:m(()=>[a(p,{label:"商品名称",prop:"name"},{default:m(()=>[a(i,{modelValue:o(t).name,"onUpdate:modelValue":e[0]||(e[0]=s=>o(t).name=s),modelModifiers:{trim:!0},disabled:""},null,8,["modelValue"])]),_:1}),a(p,{label:"评论内容",prop:"comment"},{default:m(()=>[a(i,{modelValue:o(t).comment,"onUpdate:modelValue":e[1]||(e[1]=s=>o(t).comment=s),modelModifiers:{trim:!0},autosize:{minRows:4,maxRows:12},disabled:"",type:"textarea"},null,8,["modelValue"])]),_:1}),a(p,{label:"回复内容",prop:"reply"},{default:m(()=>[a(i,{modelValue:o(t).reply,"onUpdate:modelValue":e[2]||(e[2]=s=>o(t).reply=s),modelModifiers:{trim:!0},autosize:{minRows:4,maxRows:12},clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});export{$ as default};
