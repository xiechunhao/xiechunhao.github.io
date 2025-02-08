/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{d as z,b as M,K as t,U as n,B as o,X as H,u as a,a9 as K,Z as i,ab as P,b4 as T,H as X,a2 as Y,A as m,e as s,Y as V,o as u}from"./vsv-element-plus-D84I6Pnf.js";import{d as Z,_ as j}from"./index-BL5slC2T.js";import{i as G}from"./task-Cv62xVEn.js";import"./vsv-icon-DZABqXig.js";import"./vsv-nprogress-0btfRK0G.js";const J=f=>Z({url:"/iotManagement/getList",method:"get",params:f}),O={class:"iot-management-container no-background-container"},Q={class:"Iot-item-content"},R={class:"Iot-item-bottom"},W=z({name:"IotManagement",__name:"index",setup(f){const y=ref([]),g=ref(!0),d=reactive({taskName:"",date:"",pageNo:1,pageSize:8}),b=async()=>{g.value=!0;const{data:c}=await J(d);y.value=c.list,g.value=!1},q=()=>{d.pageNo=1,b()},N=c=>{c?$baseMessage("模拟停用成功","success","hey"):$baseMessage("模拟开启成功","success","hey")},B=()=>{$baseMessage("模拟删除成功","success","hey")},v=()=>{$baseMessage("模拟添加成功","success","hey")},I=()=>{$baseMessage("模拟导出成功","success","hey")};return onBeforeMount(()=>{b()}),(c,e)=>{const $=o("el-input"),_=o("el-form-item"),D=o("el-date-picker"),r=o("el-button"),L=o("el-form"),U=o("vab-query-form-left-panel"),S=o("vab-query-form-right-panel"),A=o("vab-query-form"),p=o("vab-icon"),k=o("el-tag"),E=o("el-image"),x=o("el-popconfirm"),w=o("vab-card"),C=o("el-col"),F=o("el-row");return u(),M("div",O,[t(A,{class:"page-header"},{default:n(()=>[t(U,null,{default:n(()=>[t(L,{inline:"",model:a(d),onSubmit:e[2]||(e[2]=H(()=>{},["prevent"]))},{default:n(()=>[t(_,{label:"名称"},{default:n(()=>[t($,{modelValue:a(d).taskName,"onUpdate:modelValue":e[0]||(e[0]=l=>a(d).taskName=l),modelModifiers:{trim:!0},clearable:"",placeholder:"请输入名称"},null,8,["modelValue"])]),_:1}),t(_,{label:"周期"},{default:n(()=>[t(D,{modelValue:a(d).date,"onUpdate:modelValue":e[1]||(e[1]=l=>a(d).date=l),"end-placeholder":"结束日期","start-placeholder":"开始日期",type:"daterange"},null,8,["modelValue"])]),_:1}),t(_,null,{default:n(()=>[t(r,{icon:a(K),type:"primary",onClick:q},{default:n(()=>e[3]||(e[3]=[i("查询")])),_:1},8,["icon"])]),_:1})]),_:1},8,["model"])]),_:1}),t(S,null,{default:n(()=>[t(r,{icon:a(P),type:"primary",onClick:v},{default:n(()=>e[4]||(e[4]=[i("新增")])),_:1},8,["icon"]),t(r,{icon:a(T),type:"primary",onClick:I},{default:n(()=>e[5]||(e[5]=[i("导出")])),_:1},8,["icon"])]),_:1})]),_:1}),t(F,{gutter:20},{default:n(()=>[(u(!0),M(X,null,Y(a(y),l=>(u(),m(C,{key:l.id,lg:8,md:8,sm:12,xl:8,xs:24},{default:n(()=>[t(w,{class:"Iot-item"},{header:n(()=>[t(p,{icon:"color-filter-line"}),i(" 产品名称 - "+V(l.id)+" ",1),l.status==1?(u(),m(k,{key:0,class:"card-header-tag",type:"success"},{default:n(()=>e[6]||(e[6]=[i("已开启")])),_:1})):(u(),m(k,{key:1,class:"card-header-tag",type:"danger"},{default:n(()=>e[7]||(e[7]=[i("已停用")])),_:1}))]),default:n(()=>[s("div",Q,[s("div",null,[s("p",null,"所属门类："+V(l.status),1),e[8]||(e[8]=s("p",null,"产品类型：网关子设备",-1)),e[9]||(e[9]=s("p",null,"透传设备：否",-1)),e[10]||(e[10]=s("p",null,"设备定位：是",-1))]),t(E,{class:"Iot-item-image",src:a(G)},null,8,["src"])]),s("div",R,[s("div",null,[t(r,{plain:"",type:"primary"},{default:n(()=>e[11]||(e[11]=[i("编辑")])),_:1}),t(r,{plain:"",type:"success"},{default:n(()=>e[12]||(e[12]=[i("详情")])),_:1}),t(r,{plain:"",type:"warning"},{default:n(()=>e[13]||(e[13]=[i("物模型")])),_:1})]),s("div",null,[t(x,{title:"您确定要执行当前操作吗？",width:"240px",onConfirm:h=>N(l.status)},{reference:n(()=>[l.status==1?(u(),m(r,{key:0,circle:"",type:"warning"},{default:n(()=>[t(p,{icon:"pause-line"})]),_:1})):(u(),m(r,{key:1,circle:"",type:"primary"},{default:n(()=>[t(p,{icon:"play-line"})]),_:1}))]),_:2},1032,["onConfirm"]),t(x,{title:"您确定要删除吗？",width:"240px",onConfirm:B},{reference:n(()=>[t(r,{circle:"",type:"danger"},{default:n(()=>[t(p,{icon:"delete-bin-7-line"})]),_:1})]),_:1})])])]),_:2},1024)]),_:2},1024))),128)),t(C,{lg:8,md:8,sm:12,xl:8,xs:24},{default:n(()=>[t(w,{class:"task-add",onClick:v},{default:n(()=>[t(p,{icon:"add-circle-line"}),e[14]||(e[14]=s("p",null,"添加产品",-1))]),_:1})]),_:1})]),_:1})])}}}),ae=j(W,[["__scopeId","data-v-ad7802c4"]]);export{ae as default};
