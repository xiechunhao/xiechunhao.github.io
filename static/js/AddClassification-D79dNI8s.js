/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{d as z,C as u,V as o,u as t,D as n,o as m,L as l,S as v,e as x,_ as r}from"./vsv-element-plus-DQNbQgVr.js";const F={class:"dialog-footer"},D=z({name:"uploadImageList",__name:"AddClassification",props:{dialogVisible:{type:Boolean,default:!1}},emits:["dialogVisibleF"],setup(y,{emit:c}){const C=c;let p=y;ref(1);const s=ref(!1),d=ref({}),f=()=>{C("dialogVisibleF",!1)};return ref(!1),ref(!0),ref(["Shanghai","Beijing"]),(S,e)=>{const _=n("el-option"),w=n("el-select"),i=n("el-form-item"),b=n("el-input"),k=n("vab-icon"),V=n("el-radio"),B=n("el-radio-group"),U=n("el-form"),g=n("el-button"),I=n("upload-image-list"),N=n("vab-dialog");return m(),u(N,{modelValue:t(p).dialogVisible,"onUpdate:modelValue":e[7]||(e[7]=a=>t(p).dialogVisible=a),"append-to-body":"",title:"添加分类",width:"1000px","before-close":f},{footer:o(()=>[x("div",F,[l(g,{onClick:e[5]||(e[5]=a=>f())},{default:o(()=>e[10]||(e[10]=[r("取消")])),_:1}),l(g,{type:"primary"},{default:o(()=>e[11]||(e[11]=[r("保存")])),_:1})])]),default:o(()=>[l(U,{model:t(d),"label-width":"100px"},{default:o(()=>[l(i,{label:"上级分类"},{default:o(()=>[l(w,{modelValue:t(d).region,"onUpdate:modelValue":e[0]||(e[0]=a=>t(d).region=a),placeholder:"不选则为一级分类",style:{width:"200px"}},{default:o(()=>[l(_,{label:"区域一",value:"shanghai"}),l(_,{label:"区域二",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),t(d).region?(m(),u(i,{key:0,label:"分类标签"},{default:o(()=>[l(b,{modelValue:t(d).a,"onUpdate:modelValue":e[1]||(e[1]=a=>t(d).a=a),style:{"max-width":"200px"},placeholder:"(可不填)请输入分类标签",clearable:""},null,8,["modelValue"])]),_:1})):v("",!0),l(i,{label:"分类名称"},{default:o(()=>[l(b,{modelValue:t(d).merchantOrderId,"onUpdate:modelValue":e[2]||(e[2]=a=>t(d).merchantOrderId=a),style:{"max-width":"200px"},placeholder:"",clearable:""},null,8,["modelValue"])]),_:1}),l(i,{label:"分类图片"},{default:o(()=>[x("div",{class:"zy-upload-btn",onClick:e[3]||(e[3]=a=>s.value=!0)},[l(k,{icon:"add-large-fill"})])]),_:1}),l(i,{label:"状态"},{default:o(()=>[l(B,{modelValue:t(d).radio1,"onUpdate:modelValue":e[4]||(e[4]=a=>t(d).radio1=a)},{default:o(()=>[l(V,{value:"1",size:"large"},{default:o(()=>e[8]||(e[8]=[r("开启")])),_:1}),l(V,{value:"2",size:"large"},{default:o(()=>e[9]||(e[9]=[r("关闭")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),t(s)?(m(),u(I,{key:0,dialogVisible:t(s),onDialogVisibleF:e[6]||(e[6]=a=>s.value=a)},null,8,["dialogVisible"])):v("",!0)]),_:1},8,["modelValue"])}}});export{D as default};
