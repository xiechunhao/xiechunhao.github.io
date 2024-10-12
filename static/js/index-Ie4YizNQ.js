/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 16:06:30 
 */
import{g as q,_ as A,d as P}from"./MenuManagementEdit-Z40Qfxei.js";import{_ as F}from"./index-Bxa3JjgG.js";import{_ as J}from"./VabQueryFormTopPanel-3SShBhiq.js";import{_ as Q}from"./index-Cb-9Eo_O.js";import{d as S,r as s,p as W,Q as Y,a7 as Z,$ as j,o as d,b as z,W as e,T as o,u as i,bp as G,a8 as m,Z as H,S as v,Y as I,bv as K,b7 as O,a9 as U,aP as X,aJ as ee,aR as te,b8 as oe,a0 as ne}from"./vsv-element-plus-OoOmiKKG.js";import{$ as ae,aE as le,f as se}from"./index-D08hoOyC.js";import"./index.vue_vue_type_style_index_0_lang-BCEIjMD4.js";import"./index.vue_vue_type_script_setup_true_lang-BwKkUDxi.js";import"./icon-DUUziWOL.js";import"./vsv-icon-Df9CwUcM.js";import"./vsv-nprogress-CNnfF26O.js";const ie={class:"menu-management-container no-background-container auto-height-container"},ye=S({name:"MenuManagement",__name:"index",setup(ce){const u=s(),r=s(null),f=s([]),y=W({children:"children",label:"label"}),h=s([]),_=s(!0),w=()=>{r.value.showEdit()},k=(t={})=>{r.value.showEdit(t)},C=(t={})=>{t.path&&ae("您确定要删除当前项吗",null,async()=>{const{msg:n}=await P({paths:t.path});se(n,"success","hey"),await c()})},c=async(t={})=>{_.value=!0;const{data:n}=await le({role:t});h.value=n.list,_.value=!1},E=({role:t})=>{c(t)};return Y(()=>{var t;(t=u.value)==null||t.doLayout()}),Z(()=>{q().then(({data:t})=>{f.value=t.list}),c()}),(t,n)=>{const x=K,b=Q,g=O,p=U,R=J,T=F,a=X,$=j("vab-icon"),B=ee,D=te,L=oe,N=A,M=ne;return d(),z("div",ie,[e(L,{gutter:20},{default:o(()=>[e(g,{lg:4,md:8,sm:24,xl:4,xs:24},{default:o(()=>[e(b,{class:"auto-height-card"},{default:o(()=>[e(x,{data:i(f),"default-expanded-keys":["root"],"node-key":"id",props:i(y),onNodeClick:E},null,8,["data","props"])]),_:1})]),_:1}),e(g,{lg:20,md:16,sm:24,xl:20,xs:24},{default:o(()=>[e(b,{class:"auto-height-card"},{default:o(()=>[e(T,null,{default:o(()=>[e(R,{span:12},{default:o(()=>[e(p,{icon:i(G),type:"primary",onClick:w},{default:o(()=>n[0]||(n[0]=[m("添加")])),_:1},8,["icon"])]),_:1})]),_:1}),H((d(),v(D,{ref_key:"tableRef",ref:u,border:"",data:i(h),"row-key":"path","tree-props":{children:"children",hasChildren:"hasChildren"}},{empty:o(()=>[e(B,{class:"vab-data-empty",description:"暂无数据"})]),default:o(()=>[e(a,{align:"center",label:"标题","min-width":"140",prop:"meta.title","show-overflow-tooltip":""}),e(a,{align:"center",label:"name","min-width":"120",prop:"name","show-overflow-tooltip":""}),e(a,{align:"center",label:"路径","min-width":"140",prop:"path","show-overflow-tooltip":""}),e(a,{align:"center",label:"vue文件路径","min-width":"120",prop:"component","show-overflow-tooltip":""}),e(a,{align:"center",label:"图标"},{default:o(({row:l})=>[l.meta.icon?(d(),v($,{key:0,icon:l.meta.icon},null,8,["icon"])):I("",!0)]),_:1}),e(a,{align:"center",label:"操作",width:"150"},{default:o(({row:l})=>[e(p,{text:"",type:"primary",onClick:V=>k(l)},{default:o(()=>n[1]||(n[1]=[m("编辑")])),_:2},1032,["onClick"]),e(p,{text:"",type:"danger",onClick:V=>C(l)},{default:o(()=>n[2]||(n[2]=[m("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[M,i(_)]])]),_:1})]),_:1})]),_:1}),e(N,{ref_key:"editRef",ref:r,onFetchData:c},null,512)])}}});export{ye as default};
