/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 21:23:19 
 */
import{d as A,b as O,K as e,S as t,P as j,u as s,A as E,B as o,W as F,o as y,ac as I,Y as u,Z as K,a9 as P,X as h}from"./vsv-element-plus-CleF0dO9.js";import{g as T,d as w}from"./workOrder-DnuufR25.js";import"./index-wMoNB7-P.js";import"./vsv-icon-DrZkBOPN.js";import"./vsv-nprogress-D5kd6v05.js";const U={class:"work-order-container auto-height-container"},ee=A({name:"WorkOrder",__name:"WorkOrder",setup(X){const m=ref(),f=ref([]),d=ref(!0),g=ref(0),_=ref([]),i=reactive({pageNo:1,pageSize:20});onActivated(()=>{var a;(a=m.value)==null||a.doLayout()});const p=async()=>{d.value=!0;const{data:a}=await T(i);f.value=a.list,g.value=a.total,d.value=!1},C=a=>{i.pageNo=1,i.pageSize=a,p()},k=a=>{i.pageNo=a,p()},S=()=>{i.pageNo=1,p()},q=a=>{_.value=a},b=a=>{if(a.id)$baseConfirm("您确定要删除当前项吗",null,async()=>{const{msg:n}=await w({ids:a.id});$baseMessage(n,"success","hey"),await p()});else if(_.value.length>0){const n=_.value.map(c=>c.id).join(",");$baseConfirm("您确定要删除选中项吗",null,async()=>{const{msg:c}=await w({ids:n});$baseMessage(c,"success","hey"),await p()})}else $baseMessage("您未选中任何行","warning","hey")};return onBeforeMount(()=>{p()}),(a,n)=>{const c=o("el-button"),z=o("vab-query-form-left-panel"),D=o("el-input"),v=o("el-form-item"),N=o("el-form"),$=o("vab-query-form-right-panel"),x=o("vab-query-form"),r=o("el-table-column"),B=o("el-progress"),M=o("el-tag"),V=o("el-empty"),R=o("el-table"),L=o("vab-pagination"),W=F("loading");return y(),O("div",U,[e(x,null,{default:t(()=>[e(z,null,{default:t(()=>[e(c,{icon:s(I),type:"danger",onClick:b},{default:t(()=>n[2]||(n[2]=[u("删除")])),_:1},8,["icon"])]),_:1}),e($,null,{default:t(()=>[e(N,{inline:"",model:s(i),onSubmit:n[1]||(n[1]=K(()=>{},["prevent"]))},{default:t(()=>[e(v,{label:"工单标题"},{default:t(()=>[e(D,{modelValue:s(i).title,"onUpdate:modelValue":n[0]||(n[0]=l=>s(i).title=l),clearable:"",placeholder:"请输入工单标题"},null,8,["modelValue"])]),_:1}),e(v,null,{default:t(()=>[e(c,{icon:s(P),loading:s(d),"native-type":"submit",type:"primary",onClick:S},{default:t(()=>n[3]||(n[3]=[u("查询")])),_:1},8,["icon","loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),j((y(),E(R,{ref_key:"tableRef",ref:m,border:"",data:s(f),onSelectionChange:q},{empty:t(()=>[e(V,{class:"vab-data-empty",description:"暂无数据"})]),default:t(()=>[e(r,{type:"selection",width:"38"}),e(r,{align:"center",label:"序号",width:"55"},{default:t(({$index:l})=>[u(h(l+1),1)]),_:1}),e(r,{align:"center",label:"工单号","min-width":"200",prop:"uuid","show-overflow-tooltip":""}),e(r,{align:"center",label:"标题","min-width":"200",prop:"title","show-overflow-tooltip":""}),e(r,{align:"center",label:"进度","min-width":"180"},{default:t(({row:l})=>[e(B,{percentage:parseInt(l.progress),status:l.progress=="100"?"success":""},null,8,["percentage","status"])]),_:1}),e(r,{align:"center",label:"提交者",prop:"submit"}),e(r,{align:"center",label:"受理人员","min-width":"90",prop:"accept","show-overflow-tooltip":""}),e(r,{align:"center",label:"工单状态","min-width":"90"},{default:t(({row:l})=>[e(M,{effect:"dark",type:l.status=="处理中"?"warning":l.status=="已处理"?"success":"primary"},{default:t(()=>[u(h(l.status),1)]),_:2},1032,["type"])]),_:1}),e(r,{align:"center",label:"操作",width:"80"},{default:t(({row:l})=>[e(c,{text:"",type:"danger",onClick:Y=>b(l)},{default:t(()=>n[4]||(n[4]=[u("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[W,s(d)]]),e(L,{"current-page":s(i).pageNo,"page-size":s(i).pageSize,total:s(g),onCurrentChange:k,onSizeChange:C},null,8,["current-page","page-size","total"])])}}});export{ee as default};
