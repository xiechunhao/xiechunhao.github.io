import{i as I}from"./index-p1XoTQj1.js";import{b4 as N,r as M,o as m,c as f,w as e,b as t,cM as O,aF as $,u as w,e as c,aH as F,aG as P,aB as B,aK as z,_ as K,a as U,ce as Y,d as g,t as u,l as j,a7 as D,k as R,v as q,aD as H,s as W,bb as G,E as S,aX as L,aW as X,ax as A}from"./index-BF2fBoPb.js";import{i as C}from"./index-Cjr4ibGp.js";import{i as J}from"./index-DG03PXF-.js";import"./index-CcYpqHDV.js";import"./index-B-b3I1wI.js";import"./index-BnIMXyIx.js";import"./virtual-list-B6G0p9cv.js";import"./index-BWYZqqjh.js";import"./index-DuliLu7F.js";import{E as Q,a as Z}from"./col-DirwGu8S.js";import{E as ee}from"./date-picker-BzLnEAo6.js";import{E as te,a as ae}from"./descriptions-item-JFOK6u53.js";import"./isArrayLikeObject-j402kJv_.js";import"./vuedraggable.umd-DLnsjw3h.js";import"./arrays-6TrVLtTe.js";import"./index-DOwINDGR.js";const le={__name:"operation-record-search",emits:["search"],setup(o,{emit:i}){const E=i,[p,_]=N({username:"",module:""}),b=M(["",""]),y=()=>{const[s,a]=b.value||[];E("search",{...p,createTimeStart:s,createTimeEnd:a})},x=()=>{_(),b.value=["",""],y()};return(s,a)=>{const l=F,n=P,d=Q,V=ee,h=B,T=Z,v=z,r=C;return m(),f(r,{"body-style":{paddingBottom:"2px"}},{default:e(()=>[t(v,{"label-width":"72px",onKeyup:O(y,["enter"]),onSubmit:a[3]||(a[3]=$(()=>{},["prevent"]))},{default:e(()=>[t(T,{gutter:8},{default:e(()=>[t(d,{lg:6,md:12,sm:12,xs:24},{default:e(()=>[t(n,{label:"用户账号"},{default:e(()=>[t(l,{clearable:"",modelValue:w(p).username,"onUpdate:modelValue":a[0]||(a[0]=k=>w(p).username=k),modelModifiers:{trim:!0},placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1}),t(d,{lg:6,md:12,sm:12,xs:24},{default:e(()=>[t(n,{label:"操作模块"},{default:e(()=>[t(l,{clearable:"",modelValue:w(p).module,"onUpdate:modelValue":a[1]||(a[1]=k=>w(p).module=k),modelModifiers:{trim:!0},placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1}),t(d,{lg:6,md:12,sm:12,xs:24},{default:e(()=>[t(n,{label:"操作时间"},{default:e(()=>[t(V,{"unlink-panels":"",type:"datetimerange",modelValue:b.value,"onUpdate:modelValue":a[2]||(a[2]=k=>b.value=k),"range-separator":"-","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":"开始时间","end-placeholder":"结束时间",class:"ele-fluid"},null,8,["modelValue"])]),_:1})]),_:1}),t(d,{lg:6,md:12,sm:12,xs:24},{default:e(()=>[t(n,{"label-width":"16px"},{default:e(()=>[t(h,{type:"primary",onClick:y},{default:e(()=>a[4]||(a[4]=[c("查询")])),_:1}),t(h,{onClick:x},{default:e(()=>a[5]||(a[5]=[c("重置")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},oe={key:0},se={style:{"word-break":"break-all"}},ne={style:{"word-break":"break-all"}},re={__name:"operation-record-detail",props:{modelValue:Boolean,data:Object},emits:["update:modelValue"],setup(o,{emit:i}){const E=i,p=y=>{E("update:modelValue",y)},_=U({popperStyle:{width:"580px",maxWidth:"90%",wordBreak:"break-all"},bodyStyle:{maxWidth:"calc(100vw - 32px)",maxHeight:"252px",overflowY:"auto","--ele-scrollbar-color":"#5e5e5e","--ele-scrollbar-hover-color":"#707070","--ele-scrollbar-size":"8px"},offset:4,placement:"top"}),{mobile:b}=Y();return(y,x)=>{const s=te,a=R,l=q,n=ae,d=H;return m(),f(d,{title:"详情",width:720,"model-value":o.modelValue,"onUpdate:modelValue":p},{default:e(()=>[o.data?(m(),f(n,{key:0,border:!0,column:w(b)?1:2,class:"detail-table"},{default:e(()=>[t(s,{label:"操作人"},{default:e(()=>[g("div",null,u(o.data.nickname)+"("+u(o.data.username)+")",1)]),_:1}),t(s,{label:"IP地址"},{default:e(()=>[g("div",null,u(o.data.ip),1)]),_:1}),t(s,{label:"操作模块"},{default:e(()=>[g("div",null,u(o.data.module),1)]),_:1}),t(s,{label:"操作功能"},{default:e(()=>[g("div",null,u(o.data.description),1)]),_:1}),t(s,{label:"操作时间"},{default:e(()=>[g("div",null,u(o.data.createTime),1)]),_:1}),t(s,{label:"请求耗时"},{default:e(()=>[isNaN(o.data.spendTime)?D("",!0):(m(),j("div",oe,u(o.data.spendTime/1e3)+"s",1))]),_:1}),t(s,{label:"请求方式"},{default:e(()=>[g("div",null,u(o.data.requestMethod),1)]),_:1}),t(s,{label:"请求状态"},{default:e(()=>[o.data.status===0?(m(),f(a,{key:0,size:"small",type:"success","disable-transitions":!0},{default:e(()=>x[0]||(x[0]=[c(" 正常 ")])),_:1})):o.data.status===1?(m(),f(a,{key:1,size:"small",type:"danger","disable-transitions":!0},{default:e(()=>x[1]||(x[1]=[c(" 异常 ")])),_:1})):D("",!0)]),_:1}),t(s,{label:"请求地址",span:2},{default:e(()=>[g("div",se,u(o.data.url),1)]),_:1}),t(s,{label:"调用方法",span:2},{default:e(()=>[g("div",ne,u(o.data.method),1)]),_:1}),t(s,{label:"请求参数",span:2},{default:e(()=>[t(l,{"max-line":4,tooltip:_},{default:e(()=>[c(u(o.data.params),1)]),_:1},8,["tooltip"])]),_:1}),o.data.status===0?(m(),f(s,{key:0,label:"返回结果",span:2},{default:e(()=>[t(l,{"max-line":4,tooltip:_},{default:e(()=>[c(u(o.data.result),1)]),_:1},8,["tooltip"])]),_:1})):(m(),f(s,{key:1,label:"异常信息",span:2},{default:e(()=>[t(l,{"max-line":4,tooltip:_},{default:e(()=>[c(u(o.data.error),1)]),_:1},8,["tooltip"])]),_:1}))]),_:1},8,["column"])):D("",!0)]),_:1},8,["model-value"])}}},ie=K(re,[["__scopeId","data-v-04022ba2"]]);async function de(o){const i=await W.get("/system/operation-record/page",{params:o});return i.data.code===0?i.data.data:Promise.reject(new Error(i.data.message))}async function ue(o){const i=await W.get("/system/operation-record",{params:o});return i.data.code===0&&i.data.data?i.data.data:Promise.reject(new Error(i.data.message))}const me={name:"SystemOperationRecord"},Se=Object.assign(me,{setup(o){const i=M(null),E=M([{type:"index",columnKey:"index",width:50,align:"center",fixed:"left"},{prop:"username",label:"账号",sortable:"custom",minWidth:110},{prop:"nickname",label:"用户名",sortable:"custom",minWidth:110},{prop:"module",label:"操作模块",sortable:"custom",minWidth:110},{prop:"description",label:"操作功能",sortable:"custom",minWidth:110},{prop:"url",label:"请求地址",sortable:"custom",minWidth:110},{prop:"requestMethod",label:"请求方式",sortable:"custom",width:110,align:"center"},{prop:"status",label:"状态",sortable:"custom",width:100,align:"center",slot:"status",filters:[{text:"正常",value:"0"},{text:"异常",value:"1"}],filterMultiple:!1},{prop:"spendTime",label:"耗时",sortable:"custom",width:100,formatter:a=>`${a.spendTime/1e3}s`},{prop:"createTime",label:"操作时间",sortable:"custom",align:"center",minWidth:110},{columnKey:"action",label:"操作",width:90,align:"center",slot:"action",fixed:"right",hideInPrint:!0,hideInExport:!0}]),p=M({module:"",description:"",url:"",requestMethod:"",method:"",params:"",result:"",error:"",spendTime:0,os:"",device:"",browser:"",ip:"",status:0,createTime:"",nickname:"",username:""}),_=M(!1),b=({pages:a,where:l,orders:n,filters:d})=>de({...l,...n,...d,...a}),y=a=>{var l,n;(n=(l=i.value)==null?void 0:l.reload)==null||n.call(l,{page:1,where:a})},x=a=>{p.value=a,_.value=!0},s=()=>{var n,d;const a=[["账号","用户名","操作模块","操作功能","请求地址","请求方式","状态","耗时","操作时间"]],l=S.loading("请求中..");(d=(n=i.value)==null?void 0:n.fetch)==null||d.call(n,({where:V,orders:h,filters:T})=>{ue({...V,...h,...T}).then(v=>{l.close(),v.forEach(r=>{a.push([r.username,r.nickname,r.module,r.description,r.url,r.requestMethod,["正常","异常"][r.status],r.spendTime/1e3+"s",r.createTime])}),L({SheetNames:["Sheet1"],Sheets:{Sheet1:X.aoa_to_sheet(a)}},"操作日志.xlsx")}).catch(v=>{l.close(),S.error(v.message)})})};return(a,l)=>{const n=B,d=R,V=A,h=J,T=C,v=I;return m(),f(v,null,{default:e(()=>[t(le,{onSearch:y}),t(T,{"body-style":{paddingTop:"8px"}},{default:e(()=>[t(h,{ref_key:"tableRef",ref:i,"row-key":"id",columns:E.value,datasource:b,"show-overflow-tooltip":!0,"highlight-current-row":!0,"export-config":{fileName:"操作日志数据"},"cache-key":"systemOperationRecordTable"},{toolbar:e(()=>[t(n,{type:"primary",class:"ele-btn-icon",icon:w(G),onClick:s},{default:e(()=>l[1]||(l[1]=[c(" 导出 ")])),_:1},8,["icon"])]),status:e(({row:r})=>[r.status===0?(m(),f(d,{key:0,size:"small",type:"success","disable-transitions":!0},{default:e(()=>l[2]||(l[2]=[c(" 正常 ")])),_:1})):r.status===1?(m(),f(d,{key:1,size:"small",type:"danger","disable-transitions":!0},{default:e(()=>l[3]||(l[3]=[c(" 异常 ")])),_:1})):D("",!0)]),action:e(({row:r})=>[t(V,{type:"primary",underline:!1,onClick:k=>x(r)},{default:e(()=>l[4]||(l[4]=[c(" 详情 ")])),_:2},1032,["onClick"])]),_:1},8,["columns"])]),_:1}),t(ie,{modelValue:_.value,"onUpdate:modelValue":l[0]||(l[0]=r=>_.value=r),data:p.value},null,8,["modelValue","data"])]),_:1})}}});export{Se as default};
