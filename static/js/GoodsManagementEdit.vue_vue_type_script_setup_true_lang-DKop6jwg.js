/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:42:24 
 */
import{f as G,C as S}from"./index-CaYPvDrq.js";import{d as $,r as n,p as y,o as p,S as c,T as o,W as t,a8 as E,u as a,h as k,e as b,c2 as W,b as x,a3 as U,aj as w,x as z,aO as A,aq as D,_ as H,c1 as J,ar as K,as as P,au as Q,a9 as X}from"./vsv-element-plus-DDEqdpLt.js";import{d as Y}from"./workOrder-Dn_Be0JD.js";const te=$({name:"GoodsManagementEdit",__name:"GoodsManagementEdit",emits:["fetch-data"],setup(Z,{expose:q,emit:F}){const M=F,f=n(),_=n(""),d=n(!1),s=y({}),B=y({name:[{required:!0,trigger:"blur",message:"请输入商品名称"}],type:[{required:!0,trigger:"blur",message:"请输入商品类型"}],price:[{required:!0,trigger:"blur",message:"请输入商品售价"}],stock:[{required:!0,trigger:"blur",message:"请输入库存"}],status:[{required:!0,trigger:"blur",message:"请输入状态"}]}),C=n([{value:"1",label:"家用电器"},{value:"2",label:"食品饮料"},{value:"3",label:"其他"}]),L=n([{value:"1",label:"待上架"},{value:"2",label:"已上架"},{value:"3",label:"已下架"}]),i=n([]);q({showEdit:u=>{d.value=!0,z(()=>{u?(_.value="编辑",Object.assign(s,u),i.value=[{name:"商品图",url:u.image}]):(_.value="添加",i.value=[])})}});const v=()=>{var u,e;(u=f.value)==null||u.clearValidate(),(e=f.value)==null||e.resetFields(),M("fetch-data")},j=()=>{var u;(u=f.value)==null||u.validate(async e=>{if(e){const{msg:m}=await Y(s);await G(m,"success","hey"),await v(),d.value=!1}})};return(u,e)=>{const m=A,r=D,I=H,N=J,g=K,V=P,O=Q,R=X,T=S;return p(),c(T,{modelValue:a(d),"onUpdate:modelValue":e[6]||(e[6]=l=>k(d)?d.value=l:null),"append-to-body":"",title:a(_),width:"500px",onClose:v},{footer:o(()=>[t(R,{type:"primary",onClick:j},{default:o(()=>e[9]||(e[9]=[E("保存")])),_:1})]),default:o(()=>[t(O,{ref_key:"formRef",ref:f,"label-width":"80px",model:a(s),rules:a(B)},{default:o(()=>[t(r,{label:"商品名称",prop:"name"},{default:o(()=>[t(m,{modelValue:a(s).name,"onUpdate:modelValue":e[0]||(e[0]=l=>a(s).name=l),modelModifiers:{trim:!0},clearable:""},null,8,["modelValue"])]),_:1}),t(r,{label:"商品图"},{default:o(()=>[t(N,{"file-list":a(i),"onUpdate:fileList":e[1]||(e[1]=l=>k(i)?i.value=l:null),action:"/uploadFile",drag:"",multiple:"",style:{width:"100%"}},{tip:o(()=>e[7]||(e[7]=[b("div",{class:"el-upload__tip"},"jpg/png 文件需小于500kb",-1)])),default:o(()=>[t(I,{class:"el-icon--upload"},{default:o(()=>[t(a(W))]),_:1}),e[8]||(e[8]=b("div",{class:"el-upload__text"},[E(" 将商品图拖拽至此处或 "),b("em",null,"点击上传")],-1))]),_:1},8,["file-list"])]),_:1}),t(r,{label:"商品类型",prop:"type"},{default:o(()=>[t(V,{modelValue:a(s).type,"onUpdate:modelValue":e[2]||(e[2]=l=>a(s).type=l)},{default:o(()=>[(p(!0),x(U,null,w(a(C),l=>(p(),c(g,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(r,{label:"状态",prop:"status"},{default:o(()=>[t(V,{modelValue:a(s).status,"onUpdate:modelValue":e[3]||(e[3]=l=>a(s).status=l)},{default:o(()=>[(p(!0),x(U,null,w(a(L),l=>(p(),c(g,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(r,{label:"商品售价",prop:"price"},{default:o(()=>[t(m,{modelValue:a(s).price,"onUpdate:modelValue":e[4]||(e[4]=l=>a(s).price=l),modelModifiers:{trim:!0},clearable:""},null,8,["modelValue"])]),_:1}),t(r,{label:"库存",prop:"stock"},{default:o(()=>[t(m,{modelValue:a(s).stock,"onUpdate:modelValue":e[5]||(e[5]=l=>a(s).stock=l),modelModifiers:{trim:!0},clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});export{te as _};
