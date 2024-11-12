/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 17:39:02 
 */
import{g as j,_ as J,d as w}from"./DepartmentManagementEdit-BFmCXhFm.js";import{_ as O}from"./index.vue_vue_type_script_setup_true_lang-CsTYoAB6.js";import{_ as P}from"./index-BbKQSpTb.js";import{_ as Q}from"./VabQueryFormRightPanel.vue_vue_type_script_setup_true_lang-BToSE4-Z.js";import{_ as U}from"./VabQueryFormLeftPanel.vue_vue_type_script_setup_true_lang-DxKnGS_H.js";import{d as W,r as p,p as Z,Q as G,a7 as H,o as C,b as K,W as e,T as n,u as o,bp as X,a8 as c,bq as Y,aA as ee,aS as te,Z as ae,S as ne,a9 as oe,aO as le,aq as se,au as ie,aP as re,aJ as pe,aR as de,a0 as ce}from"./vsv-element-plus-DDEqdpLt.js";import{$ as k,f}from"./index-D5j7Mtop.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const me={class:"department-management-container auto-height-container"},ke=W({label:"DepartmentManagement",__name:"index",setup(_e){const g=p(),_=p(null),b=p([]),m=p(!0),y=p(0),u=p([]),l=Z({pageNo:1,pageSize:20,label:""}),E=a=>{u.value=a},S=()=>{_.value.showEdit()},x=(a={})=>{_.value.showEdit(a)},v=(a={})=>{if(a.id)k("您确定要删除当前项吗",null,async()=>{const{msg:t}=await w({ids:a.id});f(t,"success","hey"),await i()});else if(u.value.length>0){const t=u.value.map(s=>s.id).join(",");k("您确定要删除选中项吗",null,async()=>{const{msg:s}=await w({ids:t});f(s,"success","hey"),await i()})}else f("您未选中任何行","warning","hey")},V=a=>{l.pageNo=1,l.pageSize=a,i()},$=a=>{l.pageNo=a,i()},q=()=>{l.pageNo=1,i()},i=async()=>{m.value=!0;const{data:a}=await j(l);b.value=a.list,y.value=a.total,m.value=!1};return G(()=>{var a;(a=g.value)==null||a.doLayout()}),H(()=>{i()}),(a,t)=>{const s=oe,z=U,D=le,h=se,N=ie,R=Q,B=P,r=re,M=pe,T=de,F=O,L=J,A=ce;return C(),K("div",me,[e(B,null,{default:n(()=>[e(z,{span:12},{default:n(()=>[e(s,{icon:o(X),type:"primary",onClick:S},{default:n(()=>t[2]||(t[2]=[c("添加")])),_:1},8,["icon"]),e(s,{icon:o(Y),type:"danger",onClick:v},{default:n(()=>t[3]||(t[3]=[c("批量删除")])),_:1},8,["icon"])]),_:1}),e(R,{span:12},{default:n(()=>[e(N,{inline:"",model:o(l),onSubmit:t[1]||(t[1]=ee(()=>{},["prevent"]))},{default:n(()=>[e(h,null,{default:n(()=>[e(D,{modelValue:o(l).label,"onUpdate:modelValue":t[0]||(t[0]=d=>o(l).label=d),modelModifiers:{trim:!0},clearable:"",placeholder:"请输入名称"},null,8,["modelValue"])]),_:1}),e(h,null,{default:n(()=>[e(s,{icon:o(te),loading:o(m),type:"primary",onClick:q},{default:n(()=>t[4]||(t[4]=[c("查询")])),_:1},8,["icon","loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),ae((C(),ne(T,{ref_key:"tableRef",ref:g,border:"",data:o(b),"default-expand-all":"","row-key":"id","tree-props":{children:"children"},onSelectionChange:E},{empty:n(()=>[e(M,{class:"vab-data-empty",description:"暂无数据"})]),default:n(()=>[e(r,{type:"selection",width:"38"}),e(r,{align:"center",label:"名称","min-width":"120",prop:"label"}),e(r,{align:"center",label:"父节点Value","min-width":"120",prop:"parentValue"}),e(r,{align:"center",label:"排序",prop:"order"}),e(r,{align:"center",label:"创建时间","min-width":"160",prop:"createTime","show-overflow-tooltip":""}),e(r,{align:"center",label:"操作",width:"150"},{default:n(({row:d})=>[e(s,{text:"",type:"primary",onClick:I=>x(d)},{default:n(()=>t[5]||(t[5]=[c("编辑")])),_:2},1032,["onClick"]),e(s,{disabled:!d.parentValue,text:"",type:"primary",onClick:I=>v(d)},{default:n(()=>t[6]||(t[6]=[c("删除")])),_:2},1032,["disabled","onClick"])]),_:1})]),_:1},8,["data"])),[[A,o(m)]]),e(F,{"current-page":o(l).pageNo,"page-size":o(l).pageSize,total:o(y),onCurrentChange:$,onSizeChange:V},null,8,["current-page","page-size","total"]),e(L,{ref_key:"editRef",ref:_,onFetchData:i},null,512)])}}});export{ke as default};
