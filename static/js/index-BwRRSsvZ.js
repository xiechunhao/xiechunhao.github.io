/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:17:33 
 */
import{d as H,N as o,a2 as I,o as m,b as C,T as e,$ as a,u as l,aj as J,a4 as c,ak as K,a5 as O,ag as Q,Y as W,M as k,a3 as S,P as X,aa as Z}from"./vsv-element-plus-CxGOTlXz.js";import{d as q,g as ee}from"./userManagement-eTLC3qh1.js";import"./index-vqJMV2wg.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const te={class:"user-management-container auto-height-container"},re=H({name:"UserManagement",__name:"index",setup(ae){const b=ref(),_=ref(null),v=ref([]),p=ref(!0),y=ref(0),f=ref([]),i=reactive({pageNo:1,pageSize:20,username:""}),D=n=>{f.value=n},M=()=>{_.value.showEdit()},N=(n={})=>{_.value.showEdit(n)},h=(n={})=>{if(n.id)$baseConfirm("您确定要删除当前项吗",null,async()=>{const{msg:t}=await q({ids:n.id});$baseMessage(t,"success","hey"),await u()});else if(f.value.length>0){const t=f.value.map(s=>s.id).join(",");$baseConfirm("您确定要删除选中项吗",null,async()=>{const{msg:s}=await q({ids:t});$baseMessage(s,"success","hey"),await u()})}else $baseMessage("您未选中任何行","warning","hey")},$=n=>{i.pageNo=1,i.pageSize=n,u()},x=n=>{i.pageNo=n,u()},z=()=>{i.pageNo=1,u()},u=async()=>{p.value=!0;const{data:n}=await ee(i);v.value=n.list,y.value=n.total,p.value=!1};return onActivated(()=>{var n;(n=b.value)==null||n.doLayout()}),onBeforeMount(()=>{u()}),(n,t)=>{const s=o("el-button"),R=o("vab-query-form-left-panel"),V=o("el-input"),w=o("el-form-item"),B=o("el-form"),E=o("vab-query-form-right-panel"),L=o("vab-query-form"),r=o("el-table-column"),F=o("el-tag"),j=o("el-space"),A=o("el-empty"),T=o("el-table"),U=o("vab-pagination"),P=o("user-management-edit"),Y=I("loading");return m(),C("div",te,[e(L,null,{default:a(()=>[e(R,{span:12},{default:a(()=>[e(s,{icon:l(J),type:"primary",onClick:M},{default:a(()=>t[2]||(t[2]=[c("添加")])),_:1},8,["icon"]),e(s,{icon:l(K),type:"danger",onClick:h},{default:a(()=>t[3]||(t[3]=[c("批量删除")])),_:1},8,["icon"])]),_:1}),e(E,{span:12},{default:a(()=>[e(B,{inline:"",model:l(i),onSubmit:t[1]||(t[1]=O(()=>{},["prevent"]))},{default:a(()=>[e(w,null,{default:a(()=>[e(V,{modelValue:l(i).username,"onUpdate:modelValue":t[0]||(t[0]=d=>l(i).username=d),modelModifiers:{trim:!0},clearable:"",placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),e(w,null,{default:a(()=>[e(s,{icon:l(Q),loading:l(p),type:"primary",onClick:z},{default:a(()=>t[4]||(t[4]=[c("查询")])),_:1},8,["icon","loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),W((m(),k(T,{ref_key:"tableRef",ref:b,border:"",data:l(v),onSelectionChange:D},{empty:a(()=>[e(A,{class:"vab-data-empty",description:"暂无数据"})]),default:a(()=>[e(r,{type:"selection",width:"38"}),e(r,{align:"center",label:"序号",width:"55"},{default:a(({$index:d})=>[c(S(d+1),1)]),_:1}),e(r,{align:"center",label:"id","min-width":"180",prop:"id","show-overflow-tooltip":""}),e(r,{align:"center",label:"用户名","min-width":"120",prop:"username"}),e(r,{align:"center",label:"邮箱","min-width":"120",prop:"email","show-overflow-tooltip":""}),e(r,{align:"center",label:"角色","min-width":"155"},{default:a(({row:d})=>[e(j,{wrap:""},{default:a(()=>[(m(!0),C(X,null,Z(d.roles,(g,G)=>(m(),k(F,{key:G},{default:a(()=>[c(S(g),1)]),_:2},1024))),128))]),_:2},1024)]),_:1}),e(r,{align:"center",label:"修改时间","min-width":"160",prop:"datetime","show-overflow-tooltip":""}),e(r,{align:"center",label:"操作",width:"150"},{default:a(({row:d})=>[e(s,{text:"",type:"primary",onClick:g=>N(d)},{default:a(()=>t[5]||(t[5]=[c("编辑")])),_:2},1032,["onClick"]),e(s,{text:"",type:"danger",onClick:g=>h(d)},{default:a(()=>t[6]||(t[6]=[c("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[Y,l(p)]]),e(U,{"current-page":l(i).pageNo,"page-size":l(i).pageSize,total:l(y),onCurrentChange:x,onSizeChange:$},null,8,["current-page","page-size","total"]),e(P,{ref_key:"editRef",ref:_,onFetchData:u},null,512)])}}});export{re as default};
