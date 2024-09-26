/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{d as A,b as F,M as e,V as o,F as n,Y as T,o as p,u as r,ad as G,_,R as P,D as g,U}from"./vsv-element-plus-CbS2IxKo.js";import{g as Y,d as j}from"./menuManagement-r2eyrBzH.js";import{G as z}from"./index-BnT9uhJE.js";import"./vsv-icon-93gfr_RM.js";import"./vsv-nprogress-DzPgnd7z.js";const H={class:"menu-management-container no-background-container auto-height-container"},W=A({name:"MenuManagement",__name:"index",setup(I){const u=ref(),i=ref(null),f=ref([]),y=reactive({children:"children",label:"label"}),h=ref([]),d=ref(!0),w=()=>{i.value.showEdit()},k=(t={})=>{i.value.showEdit(t)},C=(t={})=>{t.path&&$baseConfirm("您确定要删除当前项吗",null,async()=>{const{msg:a}=await j({paths:t.path});$baseMessage(a,"success","hey"),await c()})},c=async(t={})=>{d.value=!0;const{data:a}=await z({role:t});h.value=a.list,d.value=!1},x=({role:t})=>{c(t)};return onActivated(()=>{var t;(t=u.value)==null||t.doLayout()}),onBeforeMount(()=>{Y().then(({data:t})=>{f.value=t.list}),c()}),(t,a)=>{const D=n("el-tree"),v=n("vab-card"),b=n("el-col"),m=n("el-button"),M=n("vab-query-form-top-panel"),N=n("vab-query-form"),l=n("el-table-column"),R=n("vab-icon"),q=n("el-empty"),B=n("el-table"),E=n("el-row"),L=n("menu-management-edit"),V=T("loading");return p(),F("div",H,[e(E,{gutter:20},{default:o(()=>[e(b,{lg:4,md:8,sm:24,xl:4,xs:24},{default:o(()=>[e(v,{class:"auto-height-card"},{default:o(()=>[e(D,{data:r(f),"default-expanded-keys":["root"],"node-key":"id",props:r(y),onNodeClick:x},null,8,["data","props"])]),_:1})]),_:1}),e(b,{lg:20,md:16,sm:24,xl:20,xs:24},{default:o(()=>[e(v,{class:"auto-height-card"},{default:o(()=>[e(N,null,{default:o(()=>[e(M,{span:12},{default:o(()=>[e(m,{icon:r(G),type:"primary",onClick:w},{default:o(()=>a[0]||(a[0]=[_("添加")])),_:1},8,["icon"])]),_:1})]),_:1}),P((p(),g(B,{ref_key:"tableRef",ref:u,border:"",data:r(h),"row-key":"path","tree-props":{children:"children",hasChildren:"hasChildren"}},{empty:o(()=>[e(q,{class:"vab-data-empty",description:"暂无数据"})]),default:o(()=>[e(l,{align:"center",label:"标题","min-width":"140",prop:"meta.title","show-overflow-tooltip":""}),e(l,{align:"center",label:"name","min-width":"120",prop:"name","show-overflow-tooltip":""}),e(l,{align:"center",label:"路径","min-width":"140",prop:"path","show-overflow-tooltip":""}),e(l,{align:"center",label:"vue文件路径","min-width":"120",prop:"component","show-overflow-tooltip":""}),e(l,{align:"center",label:"图标"},{default:o(({row:s})=>[s.meta.icon?(p(),g(R,{key:0,icon:s.meta.icon},null,8,["icon"])):U("",!0)]),_:1}),e(l,{align:"center",label:"操作",width:"150"},{default:o(({row:s})=>[e(m,{text:"",type:"primary",onClick:$=>k(s)},{default:o(()=>a[1]||(a[1]=[_("编辑")])),_:2},1032,["onClick"]),e(m,{text:"",type:"danger",onClick:$=>C(s)},{default:o(()=>a[2]||(a[2]=[_("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[V,r(d)]])]),_:1})]),_:1})]),_:1}),e(L,{ref_key:"editRef",ref:i,onFetchData:c},null,512)])}}});export{W as default};
