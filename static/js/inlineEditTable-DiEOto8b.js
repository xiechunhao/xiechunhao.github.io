/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:50:12 
 */
import{_ as D}from"./index.vue_vue_type_script_setup_true_lang-CsTYoAB6.js";import{_ as F}from"./index-DnOH92CS.js";import{_ as I}from"./VabQueryFormRightPanel.vue_vue_type_script_setup_true_lang-BToSE4-Z.js";import{d as L,r as g,p as M,a7 as J,o as s,b as y,W as l,T as n,u as i,aA as O,aS as P,a8 as p,Z as R,S as u,a1 as h,Y as b,aO as W,aq as Y,a9 as Z,au as j,aP as G,aJ as H,aR as K,a0 as Q}from"./vsv-element-plus-DDEqdpLt.js";import{g as X}from"./table-DcWiuwL0.js";import"./index-6xtryadw.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const w={class:"inline-edit-table-container auto-height-container"},ee=["onClick"],te=["onClick"],pe=L({name:"InlineEditTable",__name:"inlineEditTable",setup(ae){const k=g([]),c=g(!0),C=g(0),o=M({pageNo:1,pageSize:20,title:""}),_=async()=>{c.value=!0;const{data:t}=await X(o);k.value=t.list.map(a=>(a.edit=!1,a.originalTitle=a.title,a.originalAuthor=a.author,a)),C.value=t.total,c.value=!1},V=t=>{o.pageNo=1,o.pageSize=t,_()},E=t=>{o.pageNo=t,_()},S=()=>{o.pageNo=1,_()},T=t=>{t.title=t.originalTitle,t.author=t.originalAuthor,t.edit=!1},N=t=>{t.edit=!1,t.originalTitle=t.title,t.originalAuthor=t.author};return J(()=>{_()}),(t,a)=>{const f=W,v=Y,m=Z,x=j,z=I,$=F,r=G,q=H,B=K,U=D,A=Q;return s(),y("div",w,[l($,null,{default:n(()=>[l(z,{span:24},{default:n(()=>[l(x,{inline:"",model:i(o),onSubmit:a[1]||(a[1]=O(()=>{},["prevent"]))},{default:n(()=>[l(v,null,{default:n(()=>[l(f,{modelValue:i(o).title,"onUpdate:modelValue":a[0]||(a[0]=e=>i(o).title=e),clearable:"",placeholder:"标题"},null,8,["modelValue"])]),_:1}),l(v,null,{default:n(()=>[l(m,{icon:i(P),loading:i(c),"native-type":"submit",type:"primary",onClick:S},{default:n(()=>a[2]||(a[2]=[p("查询")])),_:1},8,["icon","loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),R((s(),u(B,{border:"",data:i(k)},{empty:n(()=>[l(q,{class:"vab-data-empty",description:"暂无数据"})]),default:n(()=>[l(r,{type:"selection",width:"38"}),l(r,{align:"center",label:"序号",width:"55"},{default:n(({$index:e})=>[p(h(e+1),1)]),_:1}),l(r,{align:"center",label:"标题","min-width":"240"},{default:n(({row:e})=>[e.edit?(s(),u(f,{key:0,modelValue:e.title,"onUpdate:modelValue":d=>e.title=d,clearable:"",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):(s(),y("span",{key:1,onClick:d=>e.edit=!e.edit},h(e.title),9,ee))]),_:1}),l(r,{align:"center",label:"作者","min-width":"140",prop:"author"},{default:n(({row:e})=>[e.edit?(s(),u(f,{key:0,modelValue:e.author,"onUpdate:modelValue":d=>e.author=d,clearable:"",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):(s(),y("span",{key:1,onClick:d=>e.edit=!e.edit},h(e.author),9,te))]),_:1}),l(r,{align:"center",label:"操作",width:"150"},{default:n(({row:e})=>[e.edit?b("",!0):(s(),u(m,{key:0,text:"",type:"primary",onClick:d=>e.edit=!e.edit},{default:n(()=>a[3]||(a[3]=[p("编辑")])),_:2},1032,["onClick"])),e.edit?(s(),u(m,{key:1,text:"",type:"primary",onClick:d=>N(e)},{default:n(()=>a[4]||(a[4]=[p("保存")])),_:2},1032,["onClick"])):b("",!0),e.edit?(s(),u(m,{key:2,text:"",type:"danger",onClick:d=>T(e)},{default:n(()=>a[5]||(a[5]=[p("取消")])),_:2},1032,["onClick"])):b("",!0)]),_:1})]),_:1},8,["data"])),[[A,i(c)]]),l(U,{"current-page":i(o).pageNo,"page-size":i(o).pageSize,total:i(C),onCurrentChange:E,onSizeChange:V},null,8,["current-page","page-size","total"])])}}});export{pe as default};
