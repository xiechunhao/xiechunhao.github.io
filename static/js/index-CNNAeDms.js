/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-30 14:06:07 
 */
import{d as A,N as o,a2 as F,o as h,b as U,T as e,$ as n,u as l,aj as Y,a4 as c,ak as G,a5 as H,ag as I,Y as J,M as K}from"./vsv-element-plus-CxGOTlXz.js";import{d as C,g as O}from"./departmentManagement-uIzFdlWm.js";import"./index-DMdRIM5p.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const P={class:"department-management-container auto-height-container"},ae=A({label:"DepartmentManagement",__name:"index",setup(Q){const f=ref(),m=ref(null),g=ref([]),u=ref(!0),b=ref(0),_=ref([]),i=reactive({pageNo:1,pageSize:20,label:""}),w=a=>{_.value=a},k=()=>{m.value.showEdit()},q=(a={})=>{m.value.showEdit(a)},y=(a={})=>{if(a.id)$baseConfirm("您确定要删除当前项吗",null,async()=>{const{msg:t}=await C({ids:a.id});$baseMessage(t,"success","hey"),await r()});else if(_.value.length>0){const t=_.value.map(s=>s.id).join(",");$baseConfirm("您确定要删除选中项吗",null,async()=>{const{msg:s}=await C({ids:t});$baseMessage(s,"success","hey"),await r()})}else $baseMessage("您未选中任何行","warning","hey")},x=a=>{i.pageNo=1,i.pageSize=a,r()},D=a=>{i.pageNo=a,r()},M=()=>{i.pageNo=1,r()},r=async()=>{u.value=!0;const{data:a}=await O(i);g.value=a.list,b.value=a.total,u.value=!1};return onActivated(()=>{var a;(a=f.value)==null||a.doLayout()}),onBeforeMount(()=>{r()}),(a,t)=>{const s=o("el-button"),N=o("vab-query-form-left-panel"),S=o("el-input"),v=o("el-form-item"),V=o("el-form"),$=o("vab-query-form-right-panel"),z=o("vab-query-form"),d=o("el-table-column"),R=o("el-empty"),B=o("el-table"),E=o("vab-pagination"),L=o("department-management-edit"),T=F("loading");return h(),U("div",P,[e(z,null,{default:n(()=>[e(N,{span:12},{default:n(()=>[e(s,{icon:l(Y),type:"primary",onClick:k},{default:n(()=>t[2]||(t[2]=[c("添加")])),_:1},8,["icon"]),e(s,{icon:l(G),type:"danger",onClick:y},{default:n(()=>t[3]||(t[3]=[c("批量删除")])),_:1},8,["icon"])]),_:1}),e($,{span:12},{default:n(()=>[e(V,{inline:"",model:l(i),onSubmit:t[1]||(t[1]=H(()=>{},["prevent"]))},{default:n(()=>[e(v,null,{default:n(()=>[e(S,{modelValue:l(i).label,"onUpdate:modelValue":t[0]||(t[0]=p=>l(i).label=p),modelModifiers:{trim:!0},clearable:"",placeholder:"请输入名称"},null,8,["modelValue"])]),_:1}),e(v,null,{default:n(()=>[e(s,{icon:l(I),loading:l(u),type:"primary",onClick:M},{default:n(()=>t[4]||(t[4]=[c("查询")])),_:1},8,["icon","loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),J((h(),K(B,{ref_key:"tableRef",ref:f,border:"",data:l(g),"default-expand-all":"","row-key":"id","tree-props":{children:"children"},onSelectionChange:w},{empty:n(()=>[e(R,{class:"vab-data-empty",description:"暂无数据"})]),default:n(()=>[e(d,{type:"selection",width:"38"}),e(d,{align:"center",label:"名称","min-width":"120",prop:"label"}),e(d,{align:"center",label:"父节点Value","min-width":"120",prop:"parentValue"}),e(d,{align:"center",label:"排序",prop:"order"}),e(d,{align:"center",label:"创建时间","min-width":"160",prop:"createTime","show-overflow-tooltip":""}),e(d,{align:"center",label:"操作",width:"150"},{default:n(({row:p})=>[e(s,{text:"",type:"primary",onClick:j=>q(p)},{default:n(()=>t[5]||(t[5]=[c("编辑")])),_:2},1032,["onClick"]),e(s,{disabled:!p.parentValue,text:"",type:"primary",onClick:j=>y(p)},{default:n(()=>t[6]||(t[6]=[c("删除")])),_:2},1032,["disabled","onClick"])]),_:1})]),_:1},8,["data"])),[[T,l(u)]]),e(E,{"current-page":l(i).pageNo,"page-size":l(i).pageSize,total:l(b),onCurrentChange:D,onSizeChange:x},null,8,["current-page","page-size","total"]),e(L,{ref_key:"editRef",ref:m,onFetchData:r},null,512)])}}});export{ae as default};
