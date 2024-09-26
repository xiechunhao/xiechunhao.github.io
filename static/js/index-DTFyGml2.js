/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{d as A,b as C,M as t,V as n,F as o,o as u,u as a,$ as H,ab as P,_ as i,ad as T,b3 as Z,H as j,a4 as G,D as m,Z as V,e as s}from"./vsv-element-plus-CbS2IxKo.js";import{d as J,_ as K}from"./index-BnT9uhJE.js";import{i as O}from"./task-Cv62xVEn.js";import"./vsv-icon-93gfr_RM.js";import"./vsv-nprogress-DzPgnd7z.js";const Q=f=>J({url:"/iotManagement/getList",method:"get",params:f}),R={class:"iot-management-container no-background-container"},W={class:"Iot-item-content"},X={class:"Iot-item-bottom"},Y=A({name:"IotManagement",__name:"index",setup(f){const y=ref([]),g=ref(!0),d=reactive({taskName:"",date:"",pageNo:1,pageSize:8}),b=async()=>{g.value=!0;const{data:c}=await Q(d);y.value=c.list,g.value=!1},q=()=>{d.pageNo=1,b()},N=c=>{c?$baseMessage("模拟停用成功","success","hey"):$baseMessage("模拟开启成功","success","hey")},$=()=>{$baseMessage("模拟删除成功","success","hey")},v=()=>{$baseMessage("模拟添加成功","success","hey")},I=()=>{$baseMessage("模拟导出成功","success","hey")};return onBeforeMount(()=>{b()}),(c,e)=>{const B=o("el-input"),_=o("el-form-item"),D=o("el-date-picker"),r=o("el-button"),L=o("el-form"),F=o("vab-query-form-left-panel"),S=o("vab-query-form-right-panel"),U=o("vab-query-form"),p=o("vab-icon"),k=o("el-tag"),E=o("el-image"),x=o("el-popconfirm"),M=o("vab-card"),w=o("el-col"),z=o("el-row");return u(),C("div",R,[t(U,{class:"page-header"},{default:n(()=>[t(F,null,{default:n(()=>[t(L,{inline:"",model:a(d),onSubmit:e[2]||(e[2]=H(()=>{},["prevent"]))},{default:n(()=>[t(_,{label:"名称"},{default:n(()=>[t(B,{modelValue:a(d).taskName,"onUpdate:modelValue":e[0]||(e[0]=l=>a(d).taskName=l),modelModifiers:{trim:!0},clearable:"",placeholder:"请输入名称"},null,8,["modelValue"])]),_:1}),t(_,{label:"周期"},{default:n(()=>[t(D,{modelValue:a(d).date,"onUpdate:modelValue":e[1]||(e[1]=l=>a(d).date=l),"end-placeholder":"结束日期","start-placeholder":"开始日期",type:"daterange"},null,8,["modelValue"])]),_:1}),t(_,null,{default:n(()=>[t(r,{icon:a(P),type:"primary",onClick:q},{default:n(()=>e[3]||(e[3]=[i("查询")])),_:1},8,["icon"])]),_:1})]),_:1},8,["model"])]),_:1}),t(S,null,{default:n(()=>[t(r,{icon:a(T),type:"primary",onClick:v},{default:n(()=>e[4]||(e[4]=[i("新增")])),_:1},8,["icon"]),t(r,{icon:a(Z),type:"primary",onClick:I},{default:n(()=>e[5]||(e[5]=[i("导出")])),_:1},8,["icon"])]),_:1})]),_:1}),t(z,{gutter:20},{default:n(()=>[(u(!0),C(j,null,G(a(y),l=>(u(),m(w,{key:l.id,lg:8,md:8,sm:12,xl:8,xs:24},{default:n(()=>[t(M,{class:"Iot-item"},{header:n(()=>[t(p,{icon:"color-filter-line"}),i(" 产品名称 - "+V(l.id)+" ",1),l.status==1?(u(),m(k,{key:0,class:"card-header-tag",type:"success"},{default:n(()=>e[6]||(e[6]=[i("已开启")])),_:1})):(u(),m(k,{key:1,class:"card-header-tag",type:"danger"},{default:n(()=>e[7]||(e[7]=[i("已停用")])),_:1}))]),default:n(()=>[s("div",W,[s("div",null,[s("p",null,"所属门类："+V(l.status),1),e[8]||(e[8]=s("p",null,"产品类型：网关子设备",-1)),e[9]||(e[9]=s("p",null,"透传设备：否",-1)),e[10]||(e[10]=s("p",null,"设备定位：是",-1))]),t(E,{class:"Iot-item-image",src:a(O)},null,8,["src"])]),s("div",X,[s("div",null,[t(r,{plain:"",type:"primary"},{default:n(()=>e[11]||(e[11]=[i("编辑")])),_:1}),t(r,{plain:"",type:"success"},{default:n(()=>e[12]||(e[12]=[i("详情")])),_:1}),t(r,{plain:"",type:"warning"},{default:n(()=>e[13]||(e[13]=[i("物模型")])),_:1})]),s("div",null,[t(x,{title:"您确定要执行当前操作吗？",width:"240px",onConfirm:h=>N(l.status)},{reference:n(()=>[l.status==1?(u(),m(r,{key:0,circle:"",type:"warning"},{default:n(()=>[t(p,{icon:"pause-line"})]),_:1})):(u(),m(r,{key:1,circle:"",type:"primary"},{default:n(()=>[t(p,{icon:"play-line"})]),_:1}))]),_:2},1032,["onConfirm"]),t(x,{title:"您确定要删除吗？",width:"240px",onConfirm:$},{reference:n(()=>[t(r,{circle:"",type:"danger"},{default:n(()=>[t(p,{icon:"delete-bin-7-line"})]),_:1})]),_:1})])])]),_:2},1024)]),_:2},1024))),128)),t(w,{lg:8,md:8,sm:12,xl:8,xs:24},{default:n(()=>[t(M,{class:"task-add",onClick:v},{default:n(()=>[t(p,{icon:"add-circle-line"}),e[14]||(e[14]=s("p",null,"添加产品",-1))]),_:1})]),_:1})]),_:1})])}}}),ae=K(Y,[["__scopeId","data-v-ad7802c4"]]);export{ae as default};
