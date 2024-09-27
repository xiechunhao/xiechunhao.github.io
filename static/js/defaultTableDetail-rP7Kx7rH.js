/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:50:12 
 */
import{d as N,p as P,r as F,E as U,o as $,b as j,W as l,u as a,T as t,a8 as o,e as T,bl as y,br as E,aA as H,a1 as r,h as O,bj as W,by as z,aO as G,aq as J,_ as K,a9 as L,ag as Q,ah as X,ai as Y,au as Z,bB as h,bt as ee,bC as te}from"./vsv-element-plus-DDEqdpLt.js";import{u as le,x as oe,w as ae,B as ne,q as se,_ as de}from"./index-6xtryadw.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const ue={class:"default-table-detail-container"},re={class:"el-dropdown-link"},me={class:"el-dropdown-link"},ie=N({name:"DefaultTableDetail",__name:"defaultTableDetail",setup(pe){const s=le(),v=oe(),{changeTabsMeta:D,delVisitedRoute:g}=v,m=P({text:""}),x=ae(),{changeActiveMenu:V}=x,i=F(Number.parseInt(s.query.rate)),q=async()=>{await g(ne(s,!0)),history.back()},B=u=>{se("reload-router-view",u)},k=u=>{V(u)};return U(()=>{D({title:"详情页",meta:{title:`${s.query.title} 详情页`}})}),(u,e)=>{const C=W,I=z,M=G,p=J,f=K,b=L,n=Q,c=X,w=Y,S=Z,d=h,R=ee,A=te;return $(),j("div",ue,[l(C,{content:"【"+a(s).query.title+"】详情页",onBack:q},null,8,["content"]),l(I,{closable:!1,title:"默认表格、左树右表、分类表格、自定义表格、分割表格共用的详情页demo，所有表格都会跳转详情至此页面，当前详情页允许多开。"}),l(S,{inline:"",model:a(m),onSubmit:e[1]||(e[1]=H(()=>{},["prevent"]))},{default:t(()=>[l(p,{label:"输入框缓存"},{default:t(()=>[l(M,{modelValue:a(m).text,"onUpdate:modelValue":e[0]||(e[0]=_=>a(m).text=_),clearable:"",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),l(p,null,{default:t(()=>[l(w,{onCommand:B},{dropdown:t(()=>[l(c,null,{default:t(()=>[l(n,{command:"DefaultTable"},{default:t(()=>e[4]||(e[4]=[o("默认表格")])),_:1}),l(n,{command:"ColumnTable"},{default:t(()=>e[5]||(e[5]=[o("左树右表")])),_:1}),l(n,{command:"TabsTable"},{default:t(()=>e[6]||(e[6]=[o("分类表格")])),_:1}),l(n,{command:"CustomTable"},{default:t(()=>e[7]||(e[7]=[o("自定义表格")])),_:1}),l(n,{command:"SplitTable"},{default:t(()=>e[8]||(e[8]=[o("分割表格")])),_:1})]),_:1})]),default:t(()=>[T("span",re,[l(b,{icon:a(y),type:"primary"},{default:t(()=>[e[3]||(e[3]=o(" 选择要刷新的表格 ")),l(f,{class:"el-icon--right"},{default:t(()=>[l(a(E))]),_:1})]),_:1},8,["icon"])])]),_:1})]),_:1}),l(p,null,{default:t(()=>[l(w,{onCommand:k},{dropdown:t(()=>[l(c,null,{default:t(()=>[l(n,{command:"/vab/table/defaultTable"},{default:t(()=>e[10]||(e[10]=[o("默认表格")])),_:1}),l(n,{command:"/vab/table/columnTable"},{default:t(()=>e[11]||(e[11]=[o("左树右表")])),_:1}),l(n,{command:"/vab/table/tabsTable"},{default:t(()=>e[12]||(e[12]=[o("分类表格")])),_:1}),l(n,{command:"/vab/table/customTable"},{default:t(()=>e[13]||(e[13]=[o("自定义表格")])),_:1}),l(n,{command:"/vab/table/splitTable"},{default:t(()=>e[14]||(e[14]=[o("分割表格")])),_:1})]),_:1})]),default:t(()=>[T("span",me,[l(b,{icon:a(y),type:"primary"},{default:t(()=>[e[9]||(e[9]=o(" 选择要高亮菜单的表格 ")),l(f,{class:"el-icon--right"},{default:t(()=>[l(a(E))]),_:1})]),_:1},8,["icon"])])]),_:1})]),_:1})]),_:1},8,["model"]),l(A,{border:"",column:2,title:"详情"},{default:t(()=>[l(d,null,{label:t(()=>e[15]||(e[15]=[o("标题")])),default:t(()=>[o(" "+r(a(s).query.title),1)]),_:1}),l(d,null,{label:t(()=>e[16]||(e[16]=[o("作者")])),default:t(()=>[o(" "+r(a(s).query.author),1)]),_:1}),l(d,null,{label:t(()=>e[17]||(e[17]=[o("时间")])),default:t(()=>[o(" "+r(a(s).query.datetime),1)]),_:1}),l(d,null,{label:t(()=>e[18]||(e[18]=[o("评级")])),default:t(()=>[l(R,{modelValue:a(i),"onUpdate:modelValue":e[2]||(e[2]=_=>O(i)?i.value=_:null),disabled:""},null,8,["modelValue"])]),_:1}),l(d,null,{label:t(()=>e[19]||(e[19]=[o("备注")])),default:t(()=>[o(" "+r(a(s).query.description),1)]),_:1})]),_:1})])}}}),we=de(ie,[["__scopeId","data-v-d019c99f"]]);export{we as default};
