/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 17:39:02 
 */
import{_ as A}from"./index-DU3WPBGi.js";import{_ as W}from"./index-BbKQSpTb.js";import{_ as j}from"./VabQueryFormRightPanel.vue_vue_type_script_setup_true_lang-BToSE4-Z.js";import{_ as z}from"./VabQueryFormLeftPanel.vue_vue_type_script_setup_true_lang-DxKnGS_H.js";import{d as H,r as w,p as O,a7 as R,$ as G,o as d,b as I,W as t,T as n,u as a,aA as J,aS as K,a8 as r,bp as Q,c4 as X,a3 as Y,aj as Z,S as m,a1 as V,e as l,aO as h,aq as ee,bs as te,a9 as ne,au as oe,aH as ae,bd as le,cW as se,b7 as re,b8 as ie}from"./vsv-element-plus-DDEqdpLt.js";import{k as de,f as p,_ as ue}from"./index-D5j7Mtop.js";import{i as me}from"./task-Cv62xVEn.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const pe=f=>de({url:"/iotManagement/getList",method:"get",params:f}),_e={class:"iot-management-container no-background-container"},ce={class:"Iot-item-content"},fe={class:"Iot-item-bottom"},ye=H({name:"IotManagement",__name:"index",setup(f){const y=w([]),g=w(!0),i=O({taskName:"",date:"",pageNo:1,pageSize:8}),b=async()=>{g.value=!0;const{data:_}=await pe(i);y.value=_.list,g.value=!1},N=()=>{i.pageNo=1,b()},q=_=>{_?p("模拟停用成功","success","hey"):p("模拟开启成功","success","hey")},B=()=>{p("模拟删除成功","success","hey")},k=()=>{p("模拟添加成功","success","hey")},M=()=>{p("模拟导出成功","success","hey")};return R(()=>{b()}),(_,e)=>{const D=h,c=ee,S=te,s=ne,$=oe,F=z,L=j,P=W,u=G("vab-icon"),v=ae,T=le,x=se,E=A,C=re,U=ie;return d(),I("div",_e,[t(P,{class:"page-header"},{default:n(()=>[t(F,null,{default:n(()=>[t($,{inline:"",model:a(i),onSubmit:e[2]||(e[2]=J(()=>{},["prevent"]))},{default:n(()=>[t(c,{label:"名称"},{default:n(()=>[t(D,{modelValue:a(i).taskName,"onUpdate:modelValue":e[0]||(e[0]=o=>a(i).taskName=o),modelModifiers:{trim:!0},clearable:"",placeholder:"请输入名称"},null,8,["modelValue"])]),_:1}),t(c,{label:"周期"},{default:n(()=>[t(S,{modelValue:a(i).date,"onUpdate:modelValue":e[1]||(e[1]=o=>a(i).date=o),"end-placeholder":"结束日期","start-placeholder":"开始日期",type:"daterange"},null,8,["modelValue"])]),_:1}),t(c,null,{default:n(()=>[t(s,{icon:a(K),type:"primary",onClick:N},{default:n(()=>e[3]||(e[3]=[r("查询")])),_:1},8,["icon"])]),_:1})]),_:1},8,["model"])]),_:1}),t(L,null,{default:n(()=>[t(s,{icon:a(Q),type:"primary",onClick:k},{default:n(()=>e[4]||(e[4]=[r("新增")])),_:1},8,["icon"]),t(s,{icon:a(X),type:"primary",onClick:M},{default:n(()=>e[5]||(e[5]=[r("导出")])),_:1},8,["icon"])]),_:1})]),_:1}),t(U,{gutter:20},{default:n(()=>[(d(!0),I(Y,null,Z(a(y),o=>(d(),m(C,{key:o.id,lg:8,md:8,sm:12,xl:8,xs:24},{default:n(()=>[t(E,{class:"Iot-item"},{header:n(()=>[t(u,{icon:"color-filter-line"}),r(" 产品名称 - "+V(o.id)+" ",1),o.status==1?(d(),m(v,{key:0,class:"card-header-tag",type:"success"},{default:n(()=>e[6]||(e[6]=[r("已开启")])),_:1})):(d(),m(v,{key:1,class:"card-header-tag",type:"danger"},{default:n(()=>e[7]||(e[7]=[r("已停用")])),_:1}))]),default:n(()=>[l("div",ce,[l("div",null,[l("p",null,"所属门类："+V(o.status),1),e[8]||(e[8]=l("p",null,"产品类型：网关子设备",-1)),e[9]||(e[9]=l("p",null,"透传设备：否",-1)),e[10]||(e[10]=l("p",null,"设备定位：是",-1))]),t(T,{class:"Iot-item-image",src:a(me)},null,8,["src"])]),l("div",fe,[l("div",null,[t(s,{plain:"",type:"primary"},{default:n(()=>e[11]||(e[11]=[r("编辑")])),_:1}),t(s,{plain:"",type:"success"},{default:n(()=>e[12]||(e[12]=[r("详情")])),_:1}),t(s,{plain:"",type:"warning"},{default:n(()=>e[13]||(e[13]=[r("物模型")])),_:1})]),l("div",null,[t(x,{title:"您确定要执行当前操作吗？",width:"240px",onConfirm:ge=>q(o.status)},{reference:n(()=>[o.status==1?(d(),m(s,{key:0,circle:"",type:"warning"},{default:n(()=>[t(u,{icon:"pause-line"})]),_:1})):(d(),m(s,{key:1,circle:"",type:"primary"},{default:n(()=>[t(u,{icon:"play-line"})]),_:1}))]),_:2},1032,["onConfirm"]),t(x,{title:"您确定要删除吗？",width:"240px",onConfirm:B},{reference:n(()=>[t(s,{circle:"",type:"danger"},{default:n(()=>[t(u,{icon:"delete-bin-7-line"})]),_:1})]),_:1})])])]),_:2},1024)]),_:2},1024))),128)),t(C,{lg:8,md:8,sm:12,xl:8,xs:24},{default:n(()=>[t(E,{class:"task-add",onClick:k},{default:n(()=>[t(u,{icon:"add-circle-line"}),e[14]||(e[14]=l("p",null,"添加产品",-1))]),_:1})]),_:1})]),_:1})])}}}),Ne=ue(ye,[["__scopeId","data-v-ad7802c4"]]);export{Ne as default};
