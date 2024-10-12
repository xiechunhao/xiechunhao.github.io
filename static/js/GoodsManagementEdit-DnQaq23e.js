/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 15:51:39 
 */
import{d as A,B as r,o as p,A as c,S as o,K as a,Y as y,u as t,I as k,e as _,b3 as I,b as x,a2 as w,F as U}from"./vsv-element-plus-CqWB58IK.js";import{a as K}from"./workOrder-CdQ9tKtl.js";import"./index-xIgfXPDD.js";import"./vsv-icon-DZFdJ319.js";import"./vsv-nprogress-CYSXMSUQ.js";const J=A({name:"GoodsManagementEdit",__name:"GoodsManagementEdit",emits:["fetch-data"],setup(O,{expose:E,emit:M}){const q=M,f=ref(),b=ref(""),d=ref(!1),u=reactive({}),B=reactive({name:[{required:!0,trigger:"blur",message:"请输入商品名称"}],type:[{required:!0,trigger:"blur",message:"请输入商品类型"}],price:[{required:!0,trigger:"blur",message:"请输入商品售价"}],stock:[{required:!0,trigger:"blur",message:"请输入库存"}],status:[{required:!0,trigger:"blur",message:"请输入状态"}]}),C=ref([{value:"1",label:"家用电器"},{value:"2",label:"食品饮料"},{value:"3",label:"其他"}]),F=ref([{value:"1",label:"待上架"},{value:"2",label:"已上架"},{value:"3",label:"已下架"}]),i=ref([]);E({showEdit:s=>{d.value=!0,nextTick(()=>{s?(b.value="编辑",Object.assign(u,s),i.value=[{name:"商品图",url:s.image}]):(b.value="添加",i.value=[])})}});const v=()=>{var s,e;(s=f.value)==null||s.clearValidate(),(e=f.value)==null||e.resetFields(),q("fetch-data")},L=()=>{var s;(s=f.value)==null||s.validate(async e=>{if(e){const{msg:m}=await K(u);await $baseMessage(m,"success","hey"),await v(),d.value=!1}})};return(s,e)=>{const m=r("el-input"),n=r("el-form-item"),N=r("el-icon"),R=r("el-upload"),g=r("el-option"),V=r("el-select"),j=r("el-form"),G=r("el-button"),T=r("vab-dialog");return p(),c(T,{modelValue:t(d),"onUpdate:modelValue":e[6]||(e[6]=l=>k(d)?d.value=l:null),"append-to-body":"",title:t(b),width:"500px",onClose:v},{footer:o(()=>[a(G,{type:"primary",onClick:L},{default:o(()=>e[9]||(e[9]=[y("保存")])),_:1})]),default:o(()=>[a(j,{ref_key:"formRef",ref:f,"label-width":"80px",model:t(u),rules:t(B)},{default:o(()=>[a(n,{label:"商品名称",prop:"name"},{default:o(()=>[a(m,{modelValue:t(u).name,"onUpdate:modelValue":e[0]||(e[0]=l=>t(u).name=l),modelModifiers:{trim:!0},clearable:""},null,8,["modelValue"])]),_:1}),a(n,{label:"商品图"},{default:o(()=>[a(R,{"file-list":t(i),"onUpdate:fileList":e[1]||(e[1]=l=>k(i)?i.value=l:null),action:"/uploadFile",drag:"",multiple:"",style:{width:"100%"}},{tip:o(()=>e[7]||(e[7]=[_("div",{class:"el-upload__tip"},"jpg/png 文件需小于500kb",-1)])),default:o(()=>[a(N,{class:"el-icon--upload"},{default:o(()=>[a(t(I))]),_:1}),e[8]||(e[8]=_("div",{class:"el-upload__text"},[y(" 将商品图拖拽至此处或 "),_("em",null,"点击上传")],-1))]),_:1},8,["file-list"])]),_:1}),a(n,{label:"商品类型",prop:"type"},{default:o(()=>[a(V,{modelValue:t(u).type,"onUpdate:modelValue":e[2]||(e[2]=l=>t(u).type=l)},{default:o(()=>[(p(!0),x(U,null,w(t(C),l=>(p(),c(g,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(n,{label:"状态",prop:"status"},{default:o(()=>[a(V,{modelValue:t(u).status,"onUpdate:modelValue":e[3]||(e[3]=l=>t(u).status=l)},{default:o(()=>[(p(!0),x(U,null,w(t(F),l=>(p(),c(g,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(n,{label:"商品售价",prop:"price"},{default:o(()=>[a(m,{modelValue:t(u).price,"onUpdate:modelValue":e[4]||(e[4]=l=>t(u).price=l),modelModifiers:{trim:!0},clearable:""},null,8,["modelValue"])]),_:1}),a(n,{label:"库存",prop:"stock"},{default:o(()=>[a(m,{modelValue:t(u).stock,"onUpdate:modelValue":e[5]||(e[5]=l=>t(u).stock=l),modelModifiers:{trim:!0},clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});export{J as default};
