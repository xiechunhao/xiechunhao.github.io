import{i as H}from"./index-p1XoTQj1.js";import{r as k,a as N,o as d,c as y,w as e,d as _,b as t,l as I,F as z,m as K,e as h,t as E,k as D,aB as $,aN as M,q as A,_ as L,b4 as Q,u as B,aF as W,aH as X,aG as Y,c8 as Z,aK as ee,a7 as te,J as le}from"./index-BF2fBoPb.js";import{i as U}from"./index-Cjr4ibGp.js";import"./index-BFNslPul.js";import"./index-DG03PXF-.js";import"./index-CcYpqHDV.js";import"./index-B-b3I1wI.js";import"./index-BnIMXyIx.js";import"./virtual-list-B6G0p9cv.js";import"./index-BWYZqqjh.js";import"./index-DuliLu7F.js";import{i as O}from"./index-CBaOCMfZ.js";import{l as P,p as G}from"./index-AC-OHBhs.js";import{E as oe,a as ae}from"./col-DirwGu8S.js";import{i as se}from"./index-CdRmj7H0.js";import"./isArrayLikeObject-j402kJv_.js";import"./vuedraggable.umd-DLnsjw3h.js";const ne={style:{"max-width":"260px"}},re={style:{"margin-top":"14px"}},ie={__name:"demo-basic",setup(S){const n=k(),m=N({datasource:[],columns:[{type:"index",columnKey:"index",width:50,align:"center",fixed:"left"},{prop:"username",label:"用户账号",sortable:"custom"},{prop:"nickname",label:"用户名",sortable:"custom",slot:"nickname"},{prop:"sexName",label:"性别",sortable:"custom",width:80},{columnKey:"roles",label:"角色",slot:"roles"}],showOverflowTooltip:!0,highlightCurrentRow:!0,toolbar:!1,pagination:{pageSize:6,layout:"total, prev, pager, next, jumper",style:{padding:"0px"}},rowStyle:{cursor:"pointer"}});P().then(x=>{m.datasource=x});const i=()=>{n.value=40};return(x,p)=>{const s=D,b=O,l=$,c=U;return d(),y(c,{header:"基础用法"},{default:e(()=>[_("div",ne,[t(b,{clearable:"",placeholder:"请选择","value-key":"userId","label-key":"nickname",modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=u=>n.value=u),"table-props":m,"popper-width":580},{roles:e(({row:u})=>[(d(!0),I(z,null,K(u.roles,g=>(d(),y(s,{key:g.roleId,size:"small","disable-transitions":!0},{default:e(()=>[h(E(g.roleName),1)]),_:2},1024))),128))]),_:1},8,["modelValue","table-props"])]),_("div",re,[t(l,{type:"primary",onClick:i},{default:e(()=>p[1]||(p[1]=[h("回显数据")])),_:1})])]),_:1})}}},pe={style:{"max-width":"260px"}},ue={style:{"margin-top":"12px",display:"flex","align-items":"center"}},de={style:{"margin-top":"8px"}},ce={__name:"demo-basic-page",setup(S){const n=k(),m=N({datasource:({pages:b,where:l,orders:c})=>G({...l,...c,...b}),columns:[{type:"index",columnKey:"index",width:50,align:"center",fixed:"left"},{prop:"username",label:"用户账号",sortable:"custom"},{prop:"nickname",label:"用户名",sortable:"custom",slot:"nickname"},{prop:"sexName",label:"性别",sortable:"custom",width:80},{columnKey:"roles",label:"角色",slot:"roles"}],showOverflowTooltip:!0,highlightCurrentRow:!0,toolbar:!1,pagination:{pageSize:6,layout:"total, prev, pager, next, jumper",style:{padding:"0px"}},rowStyle:{cursor:"pointer"}}),i=k(!1),x=k(),p=()=>{x.value=[{userId:40,nickname:"管理员"}],n.value=40},s=b=>{console.log(JSON.parse(JSON.stringify(b)))};return(b,l)=>{const c=D,u=O,g=M,V=A,o=$,a=U;return d(),y(a,{header:"表格后端分页"},{default:e(()=>[_("div",pe,[t(u,{clearable:"",placeholder:"请选择","value-key":"userId","label-key":"nickname",modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=r=>n.value=r),"table-props":m,"popper-width":580,disabled:i.value,"cache-data":x.value,onSelect:s},{roles:e(({row:r})=>[(d(!0),I(z,null,K(r.roles,f=>(d(),y(c,{key:f.roleId,size:"small","disable-transitions":!0},{default:e(()=>[h(E(f.roleName),1)]),_:2},1024))),128))]),_:1},8,["modelValue","table-props","disabled","cache-data"])]),_("div",ue,[l[2]||(l[2]=_("div",{style:{"padding-right":"12px"}},"禁用:",-1)),t(V,{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=r=>i.value=r)},{default:e(()=>[t(g,{value:!1,label:"否"}),t(g,{value:!0,label:"是"})]),_:1},8,["modelValue"])]),_("div",de,[t(o,{type:"primary",onClick:p},{default:e(()=>l[3]||(l[3]=[h("回显数据")])),_:1})])]),_:1})}}},me={style:{"max-width":"260px"}},_e={style:{"margin-top":"12px",display:"flex","align-items":"center"}},be={style:{"margin-top":"8px"}},fe={__name:"demo-multiple",setup(S){const n=k([]),m=N({datasource:[],columns:[{type:"selection",columnKey:"selection",width:50,align:"center",fixed:"left",reserveSelection:!0},{type:"index",columnKey:"index",width:50,align:"center",fixed:"left"},{prop:"username",label:"用户账号",sortable:"custom"},{prop:"nickname",label:"用户名",sortable:"custom",slot:"nickname"},{prop:"sexName",label:"性别",sortable:"custom",width:80},{columnKey:"roles",label:"角色",slot:"roles"}],showOverflowTooltip:!0,toolbar:!1,pagination:{pageSize:6,layout:"total, prev, pager, next, jumper",style:{padding:"0px"}},rowClickChecked:!0}),i=k(!1);P().then(p=>{m.datasource=p});const x=()=>{n.value=[40,44,45]};return(p,s)=>{const b=D,l=O,c=M,u=A,g=$,V=U;return d(),y(V,{header:"多选"},{default:e(()=>[_("div",me,[t(l,{multiple:"",clearable:"",placeholder:"请选择","value-key":"userId","label-key":"nickname",modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=o=>n.value=o),"table-props":m,"popper-width":580,disabled:i.value,"max-tag-count":5},{roles:e(({row:o})=>[(d(!0),I(z,null,K(o.roles,a=>(d(),y(b,{key:a.roleId,size:"small","disable-transitions":!0},{default:e(()=>[h(E(a.roleName),1)]),_:2},1024))),128))]),_:1},8,["modelValue","table-props","disabled"])]),_("div",_e,[s[2]||(s[2]=_("div",{style:{"padding-right":"12px"}},"禁用:",-1)),t(u,{modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=o=>i.value=o)},{default:e(()=>[t(c,{value:!1,label:"否"}),t(c,{value:!0,label:"是"})]),_:1},8,["modelValue"])]),_("div",be,[t(g,{type:"primary",onClick:x},{default:e(()=>s[3]||(s[3]=[h("回显数据")])),_:1})])]),_:1})}}},xe={__name:"demo-advanced-search",emits:["search"],setup(S,{emit:n}){const m=n,[i,x]=Q({username:"",nickname:"",sexName:""}),p=()=>{m("search",{...i})},s=()=>{x(),p()};return(b,l)=>{const c=X,u=Y,g=oe,V=Z,o=$,a=ae,r=ee;return d(),y(r,{"label-width":"60px",size:"small",class:"demo-search",onSubmit:l[2]||(l[2]=W(()=>{},["prevent"]))},{default:e(()=>[t(a,null,{default:e(()=>[t(g,{lg:8,md:8,sm:24,xs:24},{default:e(()=>[t(u,{label:"用户名"},{default:e(()=>[t(c,{clearable:"",modelValue:B(i).nickname,"onUpdate:modelValue":l[0]||(l[0]=f=>B(i).nickname=f),modelModifiers:{trim:!0},placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1}),t(g,{lg:8,md:8,sm:24,xs:24},{default:e(()=>[t(u,{label:"性别"},{default:e(()=>[t(V,{code:"sex",modelValue:B(i).sex,"onUpdate:modelValue":l[1]||(l[1]=f=>B(i).sex=f),placeholder:"请选择",teleported:!1},null,8,["modelValue"])]),_:1})]),_:1}),t(g,{lg:8,md:8,sm:24,xs:24},{default:e(()=>[t(u,{"label-width":"12px"},{default:e(()=>[t(o,{type:"primary",onClick:p},{default:e(()=>l[3]||(l[3]=[h("查询")])),_:1}),t(o,{onClick:s},{default:e(()=>l[4]||(l[4]=[h("重置")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},ye=L(xe,[["__scopeId","data-v-998c1e23"]]),ge={style:{"max-width":"260px"}},ve={style:{"margin-top":"14px"}},he={style:{"max-width":"260px"}},ke={__name:"demo-advanced",setup(S){const n=k([]),m=k(null),i=N({datasource:({pages:o,where:a,orders:r})=>G({...a,...r,...o}),columns:[{type:"selection",columnKey:"selection",width:50,align:"center",fixed:"left",reserveSelection:!0},{type:"index",columnKey:"index",width:50,align:"center",fixed:"left"},{prop:"username",label:"用户账号",sortable:"custom"},{prop:"nickname",label:"用户名",sortable:"custom",slot:"nickname"},{prop:"sexName",label:"性别",sortable:"custom",width:80},{columnKey:"roles",label:"角色",slot:"roles"}],showOverflowTooltip:!0,toolbar:!1,pagination:{pageSize:6,layout:"total, prev, pager, next, jumper",style:{padding:"0px"}},rowClickChecked:!0}),x=k(),p=()=>{x.value=[{userId:40,nickname:"管理员"},{userId:44,nickname:"用户四"},{userId:45,nickname:"用户五"}],n.value=[40,44,45]},s=o=>{var a,r,f;(f=(r=(a=m.value)==null?void 0:a.tableRef)==null?void 0:r.reload)==null||f.call(r,{where:o,page:1})},b=o=>{console.log(JSON.parse(JSON.stringify(o)))},l=k(),c=N({datasource:[],columns:[{type:"index",columnKey:"index",width:50,align:"center",fixed:"left"},{prop:"username",label:"用户账号",sortable:"custom"},{prop:"nickname",label:"用户名",sortable:"custom",slot:"nickname"},{prop:"sexName",label:"性别",sortable:"custom",width:80},{columnKey:"roles",label:"角色",slot:"roles"}],showOverflowTooltip:!0,highlightCurrentRow:!0,toolbar:!1,pagination:{pageSize:6,layout:"total, prev, pager, next, jumper",style:{padding:"0px"}},rowStyle:{cursor:"pointer"}});let u=[];P().then(o=>{c.datasource=o,u=o});const g=o=>{c.datasource=u.filter(a=>{var r,f,C,F,v,w,R,j;return((f=(r=a.username)==null?void 0:r.includes)==null?void 0:f.call(r,o))||((F=(C=a.nickname)==null?void 0:C.includes)==null?void 0:F.call(C,o))||((w=(v=a.sexName)==null?void 0:v.includes)==null?void 0:w.call(v,o))||((j=(R=a.roles)==null?void 0:R.some)==null?void 0:j.call(R,q=>{var T,J;return(J=(T=q.roleName)==null?void 0:T.includes)==null?void 0:J.call(T,o)}))})},V=o=>{o&&(c.datasource=u)};return(o,a)=>{const r=D,f=O,C=$,F=U;return d(),y(F,{header:"可搜索"},{default:e(()=>[_("div",ge,[t(f,{ref_key:"selectRef",ref:m,multiple:"",clearable:"",placeholder:"请选择","value-key":"userId","label-key":"nickname",modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=v=>n.value=v),"table-props":i,"popper-width":580,"cache-data":x.value,onSelect:b},{topExtra:e(()=>[t(ye,{onSearch:s})]),roles:e(({row:v})=>[(d(!0),I(z,null,K(v.roles,w=>(d(),y(r,{key:w.roleId,size:"small","disable-transitions":!0},{default:e(()=>[h(E(w.roleName),1)]),_:2},1024))),128))]),_:1},8,["modelValue","table-props","cache-data"])]),_("div",ve,[t(C,{type:"primary",onClick:p},{default:e(()=>a[2]||(a[2]=[h("回显数据")])),_:1})]),a[3]||(a[3]=_("div",{style:{margin:"22px 0 8px 0"}},"使用默认的搜索框:",-1)),_("div",he,[t(f,{filterable:"",clearable:"",placeholder:"请选择","value-key":"userId","label-key":"nickname",modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=v=>l.value=v),"table-props":c,"popper-width":580,onFilterChange:g,onVisibleChange:V},{roles:e(({row:v})=>[(d(!0),I(z,null,K(v.roles,w=>(d(),y(r,{key:w.roleId,size:"small","disable-transitions":!0},{default:e(()=>[h(E(w.roleName),1)]),_:2},1024))),128))]),_:1},8,["modelValue","table-props"])])]),_:1})}}},we={style:{"max-width":"260px"}},Ve={style:{"margin-top":"12px"}},Se={__name:"demo-virtual",setup(S){const n=k([]),m=N({virtual:!0,height:288,datasource:[],columns:[{type:"selection",columnKey:"selection",width:50,align:"center",fixed:"left",reserveSelection:!0},{prop:"username",label:"用户账号",sortable:"custom"},{prop:"nickname",label:"用户名",sortable:"custom",slot:"nickname"},{prop:"sex",label:"性别",sortable:"custom",width:80},{prop:"status",label:"状态",width:120,sortable:"custom",slot:"status"}],showOverflowTooltip:!0,toolbar:!1,pagination:{pageSize:1e3,pageSizes:[1e3,2e3],layout:"total, prev, pager, next, sizes",teleported:!1,style:{padding:"0px"}},rowClickChecked:!0}),i=()=>{n.value=[40,44,45]};return m.datasource=Array.from({length:2e3}).map((x,p)=>{const s=p+1,b="user-"+String(s).padStart(6,"0"),l=Math.random();return{userId:s,username:b,nickname:"用户"+s,sex:l<.8?"男":"女",status:l<.2?"1":"0"}}),(x,p)=>{const s=se,b=O,l=$,c=U;return d(),y(c,{header:"虚拟滚动表格"},{default:e(()=>[_("div",we,[t(b,{multiple:"",clearable:"",placeholder:"请选择","value-key":"userId","label-key":"nickname",modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=u=>n.value=u),"table-props":m,"popper-width":580,"max-tag-count":5},{status:e(({row:u})=>[u.status==0?(d(),y(s,{key:0,text:"正常",size:"8px"})):u.status==1?(d(),y(s,{key:1,text:"冻结",type:"danger",ripple:!1,size:"8px"})):te("",!0)]),_:1},8,["modelValue","table-props"])]),_("div",Ve,[t(l,{type:"primary",onClick:i},{default:e(()=>p[1]||(p[1]=[h("回显数据")])),_:1})])]),_:1})}}},Ce={name:"ExtensionTableSelect"},Ae=le({...Ce,setup(S){return(n,m)=>{const i=H;return d(),y(i,null,{default:e(()=>[t(ie),t(ce),t(fe),t(ke),t(Se)]),_:1})}}});export{Ae as default};
