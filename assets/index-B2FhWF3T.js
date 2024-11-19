import{_ as q,ca as F,r as p,o as u,m as W,e as S,b as e,w as t,d as w,c as k,a8 as H,E as K,W as re,aT as le,aC as L,ay as P,j as X,cb as ie,a as ne,t as A,F as G,n as Q,k as ee,cc as oe,cd as ue,u as te,bE as ce,aG as de,aI as pe,aH as me,aJ as _e,aK as fe,aL as be,U as ve,ai as he,K as ye,ce as ge,h as xe,a_ as ke,I as j,cf as we,bW as Se,bP as Ve}from"./index-C4BxmZrN.js";import{i as Ce}from"./index-CkGVv88Q.js";import{i as $e}from"./index-DyKZEwup.js";import{i as O,a as Ne}from"./index-BCHJo1Hi.js";import"./index-DPWieFbN.js";import"./index-BY7TmcLY.js";import"./index-Cw5RFCD5.js";import"./virtual-list-CYzSvSUd.js";import"./index-CuklncWx.js";import"./index-CL6ZmOyB.js";import{O as M}from"./option-item-CidtW_KE.js";import{l as ae}from"./index-BNJnQpFL.js";import{p as se,l as Ie}from"./index-DUSysJZb.js";import{p as We}from"./index-Dchtip5k.js";import{i as Z}from"./index-BKzJx-g6.js";import{i as ze}from"./index-DSHqkOzX.js";import"./isArrayLikeObject-XYcYxEsS.js";import"./vuedraggable.umd-BuphSp9t.js";const Ee={class:"option-wrapper"},Ke={__name:"demo-base",setup(U){const _=Array.from({length:39}).map((i,s)=>{const x=s+1,C=String(x).padStart(3,"0"),N=["机密","秘密","公开","绝密","内部"],D=["永久","定期10年","定期20年"],R=["Y","D10","D20"],y=F(0,D.length),g=["纸张","光盘"],T="2020";return{pieceId:x,title:`教学档案${C}`,pieceNo:`ELE101-${R[y]}-ZM•JX-${T}-${C}`,secret:N[F(0,N.length)],location:`001-001-${Math.random()<.5?"A":"B"}0${F(1,7)}`,type:"教学组织",retention:D[y],carrier:g[F(0,g.length)],year:T,amount:F(2,10)}}),d=p(null),l=p([{type:"selection",columnKey:"selection",width:50,align:"center",fixed:"left"},{type:"index",columnKey:"index",width:50,align:"center",fixed:"left"},{prop:"pieceNo",label:"案卷档号",minWidth:260},{prop:"title",label:"案卷题名",minWidth:160},{prop:"retention",label:"保管期限",minWidth:110,align:"center",filters:[{text:"永久",value:"永久"},{text:"定期10年",value:"定期10年"},{text:"定期20年",value:"定期20年"}],filterMultiple:!1},{prop:"amount",label:"件数",minWidth:110,align:"center"},{prop:"secret",label:"密级",minWidth:110,align:"center",filters:[{text:"机密",value:"机密"},{text:"秘密",value:"秘密"},{text:"公开",value:"公开"},{text:"绝密",value:"绝密"},{text:"内部",value:"内部"}],filterMultiple:!0},{prop:"year",label:"归档年度",minWidth:110,align:"center"},{prop:"type",label:"案卷类型",minWidth:140,align:"center"},{prop:"location",label:"存放位置",minWidth:140,align:"center"},{prop:"carrier",label:"载体类型",minWidth:110,align:"center"},{columnKey:"action",label:"操作",width:160,align:"center",slot:"action",fixed:"right",hideInPrint:!0,hideInExport:!0}]),r=async({pages:i,filter:s})=>{var y,g;const x=(y=s.secret)!=null&&y.length?s.secret:null,C=(g=s.retention)!=null&&g.length?s.retention:null,N=_.filter(T=>!(x!=null&&(!T.secret||!x.includes(T.secret))||C!=null&&(!T.retention||!C.includes(T.retention)))),D=((i.page||1)-1)*(i.limit||10),R=D+(i.limit||10);return{count:z.value?"*":N.length,list:N.slice(D,R>N.length?N.length:R)}},f=p([]),c=p(null),a=p(!1),n=p(!1),o=p(!1),m=p(!0),h=p(!0),b=p(!1),v=p(!1),z=p(!1),E=i=>{K.success("编辑:"+i.pieceNo)},$=i=>{K.error("删除:"+i.pieceNo)},Y=({columns:i,data:s})=>{var N;const x=[],C=((N=i[0])==null?void 0:N.type)==="selection"?2:1;return i.forEach((D,R)=>{D.property==="amount"?x[R]=s.map(y=>Number(y[D.property])).reduce((y,g)=>{const T=Number(g);return isNaN(T)?y:y+g},0):R===C&&(x[R]="合计")}),x},J=()=>{console.log(JSON.parse(JSON.stringify(f.value))),K.success("共 "+f.value.length+" 条数据已打印在控制台")},B=()=>{c.value?(console.log(JSON.parse(JSON.stringify(c.value))),K.success(c.value.pieceNo+"的数据已打印在控制台")):K.success("未选中任何数据")},V=()=>{var i,s;f.value=[],(s=(i=d.value)==null?void 0:i.reload)==null||s.call(i,{page:1})},I=()=>{re(()=>{d.value&&d.value.doLayout()})};return(i,s)=>{const x=le,C=L,N=P,D=X,R=O;return u(),W("div",null,[S("div",Ee,[e(M,{label:"表头背景",responsive:!1},{default:t(()=>[e(x,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=y=>a.value=y),size:"small"},null,8,["modelValue"])]),_:1}),e(M,{label:"边框",responsive:!1},{default:t(()=>[e(x,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=y=>n.value=y),size:"small",onChange:I},null,8,["modelValue"])]),_:1}),e(M,{label:"斑马纹",responsive:!1},{default:t(()=>[e(x,{modelValue:o.value,"onUpdate:modelValue":s[2]||(s[2]=y=>o.value=y),size:"small",onChange:I},null,8,["modelValue"])]),_:1}),e(M,{label:"表头",responsive:!1},{default:t(()=>[e(x,{modelValue:m.value,"onUpdate:modelValue":s[3]||(s[3]=y=>m.value=y),size:"small"},null,8,["modelValue"])]),_:1}),e(M,{label:"表尾合计行",responsive:!1},{default:t(()=>[e(x,{modelValue:h.value,"onUpdate:modelValue":s[4]||(s[4]=y=>h.value=y),size:"small"},null,8,["modelValue"])]),_:1}),e(M,{label:"行点击高亮",responsive:!1},{default:t(()=>[e(x,{modelValue:b.value,"onUpdate:modelValue":s[5]||(s[5]=y=>b.value=y),size:"small"},null,8,["modelValue"])]),_:1}),e(M,{label:"行点击勾选",responsive:!1},{default:t(()=>[e(x,{modelValue:v.value,"onUpdate:modelValue":s[6]||(s[6]=y=>v.value=y),size:"small"},null,8,["modelValue"])]),_:1}),e(M,{label:"不返回总数",responsive:!1},{default:t(()=>[e(x,{modelValue:z.value,"onUpdate:modelValue":s[7]||(s[7]=y=>z.value=y),size:"small",onChange:s[8]||(s[8]=y=>V())},null,8,["modelValue"])]),_:1})]),e(R,{ref_key:"tableRef",ref:d,"row-key":"pieceId",columns:l.value,datasource:r,"show-overflow-tooltip":!0,"highlight-current-row":b.value,"row-click-checked":v.value,selections:f.value,"onUpdate:selections":s[9]||(s[9]=y=>f.value=y),current:c.value,"onUpdate:current":s[10]||(s[10]=y=>c.value=y),pagination:{pageSize:10,pageSizes:[10,20,40]},toolbar:{theme:a.value?"default":"plain"},border:n.value,stripe:o.value,"show-header":m.value,"show-summary":h.value,"summary-method":Y},{toolbar:t(()=>[e(C,{type:"primary",class:"ele-btn-icon",onClick:J},{default:t(()=>[w(" 获取多选行数据 ")]),_:1}),b.value?(u(),k(C,{key:0,type:"primary",class:"ele-btn-icon",onClick:B},{default:t(()=>[w(" 获取单选行数据 ")]),_:1})):H("",!0)]),action:t(({row:y})=>[e(N,{type:"primary",underline:!1,onClick:g=>E(y)},{default:t(()=>[w(" 修改 ")]),_:2},1032,["onClick"]),e(D,{direction:"vertical"}),e(N,{type:"danger",underline:!1,onClick:g=>$(y)},{default:t(()=>[w(" 删除 ")]),_:2},1032,["onClick"])]),_:1},8,["columns","highlight-current-row","row-click-checked","selections","current","toolbar","border","stripe","show-header","show-summary"])])}}},Ue=q(Ke,[["__scopeId","data-v-26a7d46d"]]),De={__name:"tree-table",setup(U){const _=p([{type:"index",columnKey:"index",width:50,align:"center"},{prop:"title",label:"菜单名称",minWidth:140},{prop:"path",label:"路由地址",minWidth:120},{prop:"sortNumber",label:"排序",width:100,align:"center"},{prop:"createTime",label:"创建时间",minWidth:110,align:"center"}]),d=({where:l,parent:r})=>ae({...l,parentId:(r==null?void 0:r.menuId)||0});return(l,r)=>{const f=O;return u(),W("div",null,[e(f,{"row-key":"menuId",columns:_.value,datasource:d,lazy:!0,pagination:!1,"show-overflow-tooltip":!0},null,8,["columns"])])}}},Me={__name:"default-sorter",setup(U){const _=p(null),d=p([{type:"index",columnKey:"index",width:50,align:"center"},{prop:"username",label:"用户账号",sortable:"custom",minWidth:110},{prop:"nickname",label:"用户名",sortable:"custom",minWidth:110},{prop:"sexName",label:"性别",sortable:"custom",width:110,align:"center",filterMultiple:!1,filters:[{text:"男",value:"男"},{text:"女",value:"女"}],filteredValue:["男"]},{prop:"createTime",label:"创建时间",sortable:"custom",minWidth:140,align:"center"}]),l=({pages:c,orders:a,filters:n})=>se({...a,...n,...c}),r=()=>{var c,a;(a=(c=_.value)==null?void 0:c.sort)==null||a.call(c,"username","ascending")},f=()=>{var c,a,n,o,m,h;(a=(c=_.value)==null?void 0:c.clearSort)==null||a.call(c),(o=(n=_.value)==null?void 0:n.clearFilter)==null||o.call(n),(h=(m=_.value)==null?void 0:m.reload)==null||h.call(m,{sorter:{},filter:{}})};return(c,a)=>{const n=L,o=O;return u(),W("div",null,[e(o,{ref_key:"tableRef",ref:_,"row-key":"userId",columns:d.value,datasource:l,"default-sort":{prop:"createTime",order:"descending"},"show-overflow-tooltip":!0},{toolbar:t(()=>[e(n,{type:"primary",class:"ele-btn-icon",onClick:r},{default:t(()=>[w(" 改为账号排序 ")]),_:1}),e(n,{type:"primary",class:"ele-btn-icon",onClick:f},{default:t(()=>[w(" 重置排序筛选 ")]),_:1})]),_:1},8,["columns"])])}}},Te={style:{padding:"0 16px"}},Oe={__name:"child-table",props:{dictId:Number,selections:Array},emits:["update:selections"],setup(U,{emit:_}){const d=U,l=_,r=p([{type:"selection",columnKey:"selection",width:50,align:"center",fixed:"left"},{type:"index",columnKey:"index",width:50,align:"center"},{prop:"dictDataName",label:"字典数据名称",sortable:"custom",minWidth:120},{prop:"dictDataCode",label:"字典数据代码",sortable:"custom",minWidth:120},{prop:"sortNumber",label:"排序号",sortable:"custom",width:110,align:"center"},{prop:"createTime",label:"创建时间",sortable:"custom",minWidth:110},{columnKey:"action",label:"操作",width:120,align:"center",slot:"action"}]),f=({where:n,orders:o})=>ie({...n,...o,dictId:d.dictId}),c=n=>{K.error("删除: "+n.dictDataName)},a=n=>{l("update:selections",n)};return(n,o)=>{const m=P,h=X,b=O;return u(),W("div",Te,[e(b,{columns:r.value,datasource:f,"show-overflow-tooltip":!0,toolbar:!1,pagination:!1,"empty-props":!1,selections:U.selections||[],"onUpdate:selections":a},{action:t(({row:v})=>[e(m,{type:"primary",underline:!1},{default:t(()=>[w("修改")]),_:1}),e(h,{direction:"vertical"}),e(m,{type:"danger",underline:!1,onClick:z=>c(v)},{default:t(()=>[w(" 删除 ")]),_:2},1032,["onClick"])]),_:1},8,["columns","selections"])])}}},Re={__name:"nested-table",setup(U){const _=p([{type:"expand",columnKey:"expand",width:50,align:"center",slot:"expand",fixed:"left"},{type:"index",columnKey:"index",width:50,align:"center",fixed:"left"},{prop:"dictName",label:"字典名称",sortable:"custom",minWidth:110},{prop:"dictCode",label:"字典代码",sortable:"custom",minWidth:110},{prop:"sortNumber",label:"排序号",sortable:"custom",width:120,align:"center"},{prop:"createTime",label:"创建时间",sortable:"custom",minWidth:110},{columnKey:"action",label:"操作",width:120,align:"center",slot:"action",fixed:"right",hideInPrint:!0,hideInExport:!0}]),d=({pages:c,orders:a})=>We({...a,...c}),l=c=>{K.error("删除: "+c.dictName)},r=ne({}),f=()=>{console.log(JSON.parse(JSON.stringify(r)));const c=Object.keys(r).map(a=>r[a].length).reduce((a,n)=>a+n,0);K.success(`共选中 ${c} 条数据, 已打印在控制台`)};return(c,a)=>{const n=L,o=P,m=X,h=O;return u(),W("div",null,[e(h,{"row-key":"dictId",columns:_.value,datasource:d,"show-overflow-tooltip":!0},{toolbar:t(()=>[e(n,{type:"primary",onClick:f,class:"ele-btn-icon"},{default:t(()=>[w(" 获取所有选中 ")]),_:1})]),action:t(({row:b})=>[e(o,{type:"primary",underline:!1},{default:t(()=>[w("修改")]),_:1}),e(m,{direction:"vertical"}),e(o,{type:"danger",underline:!1,onClick:v=>l(b)},{default:t(()=>[w(" 删除 ")]),_:2},1032,["onClick"])]),expand:t(({row:b})=>[e(Oe,{dictId:b.dictId,selections:r[b.dictId],"onUpdate:selections":v=>r[b.dictId]=v},null,8,["dictId","selections","onUpdate:selections"])]),_:1},8,["columns"])])}}},Ye={style:{padding:"12px 16px 12px 32px"}},Je=S("span",null,"手机号码：",-1),Ae={style:{"margin-top":"12px"}},Be=S("span",null,"所属机构：",-1),Fe={style:{"margin-top":"12px"}},He=S("span",null,"角  色：",-1),Le={style:{"margin-top":"12px"}},je=S("span",null,"状  态：",-1),qe={__name:"expandable-table",setup(U){const _=p([{type:"expand",columnKey:"expand",width:50,align:"center",slot:"expand"},{type:"index",columnKey:"index",width:50,align:"center"},{prop:"username",label:"用户账号",sortable:"custom",minWidth:110},{prop:"nickname",label:"用户名",sortable:"custom",minWidth:110},{prop:"createTime",label:"创建时间",sortable:"custom",minWidth:110}]),d=({pages:l,orders:r})=>se({...r,...l});return(l,r)=>{const f=ee,c=Z,a=O;return u(),W("div",null,[e(a,{"row-key":"userId",columns:_.value,datasource:d,"show-overflow-tooltip":!0},{expand:t(({row:n})=>[S("div",Ye,[S("div",null,[Je,S("span",null,A(n.phone),1)]),S("div",Ae,[Be,S("span",null,A(n.organizationName),1)]),S("div",Fe,[He,S("span",null,[(u(!0),W(G,null,Q(n.roles,o=>(u(),k(f,{key:o.roleId,size:"small","disable-transitions":!0},{default:t(()=>[w(A(o.roleName),1)]),_:2},1024))),128))])]),S("div",Le,[je,S("span",null,[n.status===0?(u(),k(c,{key:0,text:"正常",size:"8px"})):n.status===1?(u(),k(c,{key:1,text:"冻结",type:"danger",ripple:!1,size:"8px"})):H("",!0)])])])]),_:1},8,["columns"])])}}},Pe={__name:"merge-cell",setup(U){const _=p([{type:"index",columnKey:"index",width:50,align:"center"},{columnKey:"userName",prop:"userName",label:"姓名"},{prop:"courseName",label:"课程"},{prop:"score",label:"得分"}]),d=()=>oe(),l=({row:r,column:f})=>f.columnKey==="userName"?[r.userNameRowSpan,1]:[1,1];return(r,f)=>{const c=O;return u(),W("div",null,[e(c,{border:!0,"row-key":"userId",columns:_.value,datasource:d,"span-method":l,toolbar:{theme:"default"}},null,8,["columns"])])}}},Xe={style:{padding:"6px 0 12px 0"}},Ze={key:1,class:"editable-cell-text"},Ge={key:1,class:"editable-cell-text"},Qe={key:1,class:"editable-cell-text"},et={style:{display:"inline","align-items":"center"}},tt={__name:"editable-table",setup(U){const _=p(null),d=ne({users:[]}),l=p([{type:"index",columnKey:"index",width:50,align:"center",fixed:"left"},{columnKey:"name",label:"用户名",minWidth:120,slot:"name"},{columnKey:"number",label:"工号",minWidth:120,slot:"number"},{columnKey:"department",label:"所属部门",minWidth:120,slot:"department"},{columnKey:"action",label:"操作",width:120,align:"center",fixed:"right",slot:"action"}]),r=()=>{var o,m;(m=(o=_.value)==null?void 0:o.validate)==null||m.call(o,(h,b)=>{if(!h){const v=b?Object.keys(b).length:0;K.error(`有 ${v} 项校验不通过`);return}K.success("提交成功")})},f=()=>{d.users.push({key:Date.now()+"-"+d.users.length,number:"",name:"",department:void 0,isEdit:!0})},c=(o,m)=>{d.users.splice(m,1)},a=o=>{o.isEdit=!0},n=o=>{o.isEdit=!1};return ue().then(o=>{d.users=o}).catch(o=>{K.error(o.message)}),(o,m)=>{const h=L,b=pe,v=me,z=_e,E=fe,$=P,Y=X,J=Ne,B=be;return u(),W("div",null,[e(B,{ref_key:"formRef",ref:_,model:d,"label-width":"0px",onSubmit:m[0]||(m[0]=de(()=>{},["prevent"]))},{default:t(()=>[S("div",Xe,[e(h,{icon:te(ce),type:"primary",class:"ele-btn-icon",onClick:f},{default:t(()=>[w(" 新增一行 ")]),_:1},8,["icon"]),e(h,{type:"primary",onClick:r},{default:t(()=>[w("提交")]),_:1})]),e(J,{"row-key":"key",columns:l.value,data:d.users,"cell-class-name":"editable-table-cell",class:"editable-table"},{name:t(({row:V,$index:I})=>[e(v,{prop:"users."+I+".name",rules:{required:!0,message:"请输入用户名",type:"string",trigger:"blur"},class:"form-error-popper",style:{"margin-bottom":"0"}},{default:t(()=>[V.isEdit?(u(),k(b,{key:0,clearable:"",modelValue:V.name,"onUpdate:modelValue":i=>V.name=i,placeholder:"请输入用户名"},null,8,["modelValue","onUpdate:modelValue"])):(u(),W("div",Ze,A(V.name),1))]),_:2},1032,["prop"])]),number:t(({row:V,$index:I})=>[e(v,{prop:"users."+I+".number",rules:{required:!0,message:"请输入工号",type:"string",trigger:"blur"},class:"form-error-popper",style:{"margin-bottom":"0"}},{default:t(()=>[V.isEdit?(u(),k(b,{key:0,clearable:"",modelValue:V.number,"onUpdate:modelValue":i=>V.number=i,placeholder:"请输入工号"},null,8,["modelValue","onUpdate:modelValue"])):(u(),W("div",Ge,A(V.number),1))]),_:2},1032,["prop"])]),department:t(({row:V,$index:I})=>[e(v,{prop:"users."+I+".department",rules:{required:!0,message:"请选择部门",type:"string",trigger:"change"},class:"form-error-popper",style:{"margin-bottom":"0"}},{default:t(()=>[V.isEdit?(u(),k(E,{key:0,clearable:"",modelValue:V.department,"onUpdate:modelValue":i=>V.department=i,placeholder:"请选择部门",class:"ele-fluid"},{default:t(()=>[e(z,{value:"研发部",label:"研发部"}),e(z,{value:"测试部",label:"测试部"}),e(z,{value:"产品部",label:"产品部"})]),_:2},1032,["modelValue","onUpdate:modelValue"])):(u(),W("div",Qe,A(V.department),1))]),_:2},1032,["prop"])]),action:t(({row:V,$index:I})=>[S("div",et,[V.isEdit?(u(),k($,{key:0,type:"success",underline:!1,onClick:i=>n(V)},{default:t(()=>[w(" 完成 ")]),_:2},1032,["onClick"])):(u(),k($,{key:1,type:"primary",underline:!1,onClick:i=>a(V)},{default:t(()=>[w(" 编辑 ")]),_:2},1032,["onClick"])),e(Y,{direction:"vertical",style:{margin:"0 8px"}}),e($,{type:"danger",underline:!1,onClick:i=>c(V,I)},{default:t(()=>[w(" 删除 ")]),_:2},1032,["onClick"])])]),_:1},8,["columns","data"])]),_:1},8,["model"])])}}},lt=q(tt,[["__scopeId","data-v-93af8d5a"]]),nt={style:{"padding-top":"8px"}},ot={__name:"sortable-table",setup(U){let _=null;const d=p(null),l=p([]),r=p([{columnKey:"handle",width:58,align:"center",slot:"handle",fixed:"left",hideInSetting:!0},{type:"selection",columnKey:"selection",width:50,align:"center",fixed:"left",reserveSelection:!0},{prop:"username",label:"用户账号",minWidth:110},{prop:"nickname",label:"用户名",minWidth:110},{columnKey:"sex",prop:"sexName",label:"性别",width:110,align:"center",filters:[{text:"男",value:"1"},{text:"女",value:"2"}],filterMultiple:!1},{prop:"createTime",label:"创建时间",minWidth:140,align:"center"},{prop:"status",label:"状态",width:110,align:"center",slot:"status",fixed:"right"}]),f=({where:a,orders:n,filters:o})=>Ie({...a,...n,...o});ve(()=>{var o;const a=(o=d.value)==null?void 0:o.$el;if(!a)return;const n=a.querySelector(".el-table__inner-wrapper > .el-table__body-wrapper .el-table__body > tbody");_=new he(n,{animation:300,draggable:".el-table__row",handle:".sort-handle",forceFallback:!0,onUpdate:({oldDraggableIndex:m,newDraggableIndex:h})=>{var b,v,z,E,$;if(typeof m=="number"&&typeof h=="number"){const Y=[...(z=(v=(b=d.value)==null?void 0:b.getData)==null?void 0:v.call(b))!=null?z:[]];Y.splice(h,0,Y.splice(m,1)[0]),($=(E=d.value)==null?void 0:E.setData)==null||$.call(E,Y),Array.from(n.querySelectorAll(".el-table__row.hover-row")).forEach(J=>{J.classList.remove("hover-row")})}},setData:()=>{}})}),ye(()=>{_&&(_.destroy(),_=null)});const c=()=>{var o,m,h;const a=(h=(m=(o=d.value)==null?void 0:o.getData)==null?void 0:m.call(o))!=null?h:[],n=[...l.value].sort((b,v)=>{const z=a.findIndex($=>$.userId===b.userId),E=a.findIndex($=>$.userId===v.userId);return z-E});console.log(JSON.parse(JSON.stringify(n))),K.success(`共选中 ${l.value.length} 条数据, 已打印在控制台`)};return(a,n)=>{const o=xe,m=Z,h=L,b=O;return u(),W("div",nt,[e(b,{ref_key:"tableRef",ref:d,"row-key":"userId",columns:r.value,datasource:f,"show-overflow-tooltip":!0,pagination:!1,selections:l.value,"onUpdate:selections":n[0]||(n[0]=v=>l.value=v),class:"sortable-table"},{handle:t(()=>[e(o,{icon:te(ge),type:"placeholder",class:"sort-handle"},null,8,["icon"])]),status:t(({row:v})=>[v.status===0?(u(),k(m,{key:0,text:"正常",size:"8px"})):v.status===1?(u(),k(m,{key:1,text:"冻结",type:"danger",ripple:!1,size:"8px"})):H("",!0)]),toolbar:t(()=>[e(h,{type:"primary",onClick:c,class:"ele-btn-icon"},{default:t(()=>[w(" 获取选中 ")]),_:1})]),_:1},8,["columns","selections"])])}}},at=q(ot,[["__scopeId","data-v-09ab340e"]]),st={__name:"demo-selections",setup(U){const _=p([{type:"selection",columnKey:"selection",width:50,align:"center",fixed:"left"},{type:"index",columnKey:"index",width:50,align:"center",fixed:"left"},{prop:"pieceNo",label:"案卷档号",minWidth:260},{prop:"title",label:"案卷题名",minWidth:160},{prop:"retention",label:"保管期限",minWidth:110,align:"center"},{prop:"amount",label:"件数",minWidth:110,align:"center"},{prop:"secret",label:"密级",minWidth:110,align:"center"},{prop:"year",label:"归档年度",minWidth:110,align:"center"}]),d=p(Array.from({length:8}).map((h,b)=>{const v=b+1,z=String(v).padStart(3,"0"),E=["机密","秘密","公开","绝密","内部"],$=["永久","定期10年","定期20年"],Y=["Y","D10","D20"],J=F(0,$.length),B="2020";return{pieceId:v,title:`教学档案${z}`,pieceNo:`ELE101-${Y[J]}-ZM•JX-${B}-${z}`,secret:E[F(0,E.length)],retention:$[J],year:B,amount:F(2,10)}})),l=p([]),r=p(null),f=()=>{console.log(JSON.parse(JSON.stringify(l.value))),K.success("共 "+l.value.length+" 条数据已打印在控制台")},c=()=>{l.value=[d.value[1],d.value[2],d.value[5]]},a=()=>{l.value=[]},n=()=>{r.value?(console.log(JSON.parse(JSON.stringify(r.value))),K.success(r.value.pieceNo+"的数据已打印在控制台")):K.success("未选中任何数据")},o=()=>{r.value=d.value[3]},m=()=>{r.value=null};return(h,b)=>{const v=L,z=ke,E=O;return u(),W("div",null,[e(E,{"row-key":"pieceId",columns:_.value,datasource:d.value,"show-overflow-tooltip":!0,selections:l.value,"onUpdate:selections":b[0]||(b[0]=$=>l.value=$),current:r.value,"onUpdate:current":b[1]||(b[1]=$=>r.value=$),"highlight-current-row":"",pagination:!1},{toolbar:t(()=>[e(z,{size:12,wrap:""},{default:t(()=>[e(v,{type:"primary",class:"ele-btn-icon",onClick:f},{default:t(()=>[w(" 获取多选 ")]),_:1}),e(v,{type:"warning",class:"ele-btn-icon",onClick:c},{default:t(()=>[w(" 修改多选 ")]),_:1}),e(v,{type:"danger",class:"ele-btn-icon",onClick:a},{default:t(()=>[w(" 清空多选 ")]),_:1}),e(v,{plain:"",type:"primary",class:"ele-btn-icon",onClick:n},{default:t(()=>[w(" 获取单选 ")]),_:1}),e(v,{plain:"",type:"warning",class:"ele-btn-icon",onClick:o},{default:t(()=>[w(" 修改单选 ")]),_:1}),e(v,{plain:"",type:"danger",class:"ele-btn-icon",onClick:m},{default:t(()=>[w(" 清空单选 ")]),_:1})]),_:1})]),_:1},8,["columns","datasource","selections","current"])])}}},rt={class:"option-wrapper"},it={__name:"virtual-base",setup(U){const _=p([{type:"selection",columnKey:"selection",width:52,align:"center",fixed:"left"},{type:"index",columnKey:"index",width:68,fixed:"left"},{label:"用户账号",prop:"username",minWidth:160,sortable:"custom"},{label:"用户名",prop:"nickname",minWidth:160,sortable:"custom"},{label:"性别",prop:"sex",width:120,sortable:"custom",align:"center"},{label:"角色",prop:"roles",slot:"roles",minWidth:160,filters:[{text:"管理员",value:"管理员"},{text:"普通用户",value:"普通用户"},{text:"游客",value:"游客"}],filterMultiple:!0},{label:"手机号码",prop:"phone",minWidth:160,sortable:"custom"},{label:"邮箱",prop:"email",minWidth:180,sortable:"custom"},{prop:"status",label:"状态",width:120,sortable:"custom",slot:"status",align:"center",headerAlign:"left",filters:[{text:"正常",value:"0"},{text:"冻结",value:"1"}],filterMultiple:!1},{label:"出生日期",prop:"birthday",width:160,align:"center",sortable:"custom"},{label:"创建时间",prop:"createTime",minWidth:140,sortable:"custom"},{columnKey:"action",label:"操作",width:160,align:"center",slot:"action",fixed:"right",hideInPrint:!0,hideInExport:!0}]),d=p([]),l=p(!1),r=p([]),f=p(null),c=p(!1),a=p(!1),n=p(!1),o=p(!0),m=p(!0),h=p(!1),b=p(!1),v=I=>{K.success("编辑:"+I.nickname)},z=I=>{K.error("删除:"+I.nickname)};let E;const $=()=>{l.value=!0,setTimeout(()=>{if(E){l.value=!1;return}E=Array.from({length:1e4}).map((I,i)=>{const s=i+1,x="user-"+String(s).padStart(6,"0"),C=Math.random();return{userId:s,username:x,nickname:"用户"+s,sex:C<.8?"男":"女",roles:[C<.3?"管理员":"普通用户"],phone:String(12345678900+s),email:x+"@eleadmin.com",status:C<.2?"1":"0",birthday:j().subtract(3*s,"h").format("YYYY-MM-DD"),createTime:j().subtract(45*s,"s").format("YYYY-MM-DD HH:mm:ss")}}),d.value=E,l.value=!1},100)},Y=({columns:I,data:i})=>{const s=[];return I.forEach((x,C)=>{if(x.property==="sex"){const N=i.filter(D=>D.sex=="女").length;s[C]=(N/i.length*100).toFixed(2)+"% (女)"}else x.property==="status"?s[C]=i.filter(N=>N.status=="1").length+" (冻结)":x.property==="username"&&(s[C]="合计")}),s},J=I=>{l.value=!0,setTimeout(()=>{let i=[...E];Object.keys(I).forEach(s=>{const x=I[s];x&&x.length&&(i=i.filter(C=>Array.isArray(C[s])?C[s].some(N=>x.includes(N)):x.includes(C[s])))}),d.value=i,l.value=!1},100)},B=()=>{console.log(JSON.parse(JSON.stringify(r.value))),K.success("共 "+r.value.length+" 条数据已打印在控制台")},V=()=>{f.value?(console.log(JSON.parse(JSON.stringify(f.value))),K.success(f.value.nickname+"的数据已打印在控制台")):K.success("未选中任何数据")};return $(),(I,i)=>{const s=le,x=L,C=ee,N=Z,D=P,R=X,y=O;return u(),W("div",null,[S("div",rt,[e(M,{label:"表头背景",responsive:!1},{default:t(()=>[e(s,{modelValue:c.value,"onUpdate:modelValue":i[0]||(i[0]=g=>c.value=g),size:"small"},null,8,["modelValue"])]),_:1}),e(M,{label:"显示边框",responsive:!1},{default:t(()=>[e(s,{modelValue:a.value,"onUpdate:modelValue":i[1]||(i[1]=g=>a.value=g),size:"small"},null,8,["modelValue"])]),_:1}),e(M,{label:"显示斑马纹",responsive:!1},{default:t(()=>[e(s,{modelValue:n.value,"onUpdate:modelValue":i[2]||(i[2]=g=>n.value=g),size:"small"},null,8,["modelValue"])]),_:1}),e(M,{label:"显示表头",responsive:!1},{default:t(()=>[e(s,{modelValue:o.value,"onUpdate:modelValue":i[3]||(i[3]=g=>o.value=g),size:"small"},null,8,["modelValue"])]),_:1}),e(M,{label:"显示表尾合计行",responsive:!1},{default:t(()=>[e(s,{modelValue:m.value,"onUpdate:modelValue":i[4]||(i[4]=g=>m.value=g),size:"small"},null,8,["modelValue"])]),_:1}),e(M,{label:"行点击高亮",responsive:!1},{default:t(()=>[e(s,{modelValue:h.value,"onUpdate:modelValue":i[5]||(i[5]=g=>h.value=g),size:"small"},null,8,["modelValue"])]),_:1}),e(M,{label:"行点击勾选",responsive:!1},{default:t(()=>[e(s,{modelValue:b.value,"onUpdate:modelValue":i[6]||(i[6]=g=>b.value=g),size:"small"},null,8,["modelValue"])]),_:1})]),e(y,{height:418,virtual:!0,"row-key":"userId",columns:_.value,datasource:d.value,"show-overflow-tooltip":!0,"highlight-current-row":h.value,"row-click-checked":b.value,selections:r.value,"onUpdate:selections":i[7]||(i[7]=g=>r.value=g),current:f.value,"onUpdate:current":i[8]||(i[8]=g=>f.value=g),pagination:{pageSize:2e3,pageSizes:[1e3,2e3,5e3,1e4]},toolbar:{theme:c.value?"default":"plain"},loading:l.value,border:a.value,stripe:n.value,"show-header":o.value,"show-summary":m.value,"summary-method":Y,onRefresh:$,onFilterChange:J},{toolbar:t(()=>[e(x,{type:"primary",class:"ele-btn-icon",onClick:B},{default:t(()=>[w(" 获取多选行数据 ")]),_:1}),h.value?(u(),k(x,{key:0,type:"primary",class:"ele-btn-icon",onClick:V},{default:t(()=>[w(" 获取单选行数据 ")]),_:1})):H("",!0)]),roles:t(({row:g})=>[(u(!0),W(G,null,Q(g.roles,T=>(u(),k(C,{key:T,size:"small","disable-transitions":!0,style:{"margin-right":"6px"}},{default:t(()=>[w(A(T),1)]),_:2},1024))),128))]),status:t(({row:g})=>[g.status==0?(u(),k(N,{key:0,text:"正常",size:"8px"})):g.status==1?(u(),k(N,{key:1,text:"冻结",type:"danger",ripple:!1,size:"8px"})):H("",!0)]),action:t(({row:g})=>[e(D,{type:"primary",underline:!1,onClick:T=>v(g)},{default:t(()=>[w(" 修改 ")]),_:2},1032,["onClick"]),e(R,{direction:"vertical"}),e(D,{type:"danger",underline:!1,onClick:T=>z(g)},{default:t(()=>[w(" 删除 ")]),_:2},1032,["onClick"])]),_:1},8,["columns","datasource","highlight-current-row","row-click-checked","selections","current","toolbar","loading","border","stripe","show-header","show-summary"])])}}},ut=q(it,[["__scopeId","data-v-f9c41fce"]]),ct={__name:"virtual-header",setup(U){const _=[["浙江","杭州","西湖区"],["江苏","苏州","姑苏区"],["江西","南昌","青山湖区"],["福建","泉州","丰泽区"],["湖北","武汉","武昌区"],["安徽","黄山","黄山区"]],d=p([{type:"index",columnKey:"index",width:68,align:"center",fixed:"left"},{label:"用户账号",prop:"username",minWidth:160,sortable:"custom"},{label:"用户名",prop:"nickname",minWidth:160,sortable:"custom"},{label:"家庭住址",prop:"address",align:"center",children:[{label:"省份",prop:"province",width:120,sortable:"custom"},{label:"城市",prop:"city",width:120,sortable:"custom"},{label:"区域",prop:"zone",width:180,sortable:"custom"}]},{label:"创建时间",prop:"createTime",minWidth:180,sortable:"custom"}]),l=p([]),r=p(!1),f=()=>{r.value=!0,setTimeout(()=>{l.value=Array.from({length:2e3}).map((c,a)=>{const n=a+1,o="user-"+String(n).padStart(6,"0"),m=Math.floor(Math.random()*(0-_.length)+_.length),[h,b,v]=_[m];return{userId:n,username:o,nickname:"用户"+n,createTime:j().subtract(45*n,"s").format("YYYY-MM-DD HH:mm:ss"),province:h,city:b,zone:v}}),r.value=!1},100)};return f(),(c,a)=>{const n=O;return u(),W("div",null,[e(n,{height:418,virtual:!0,"row-key":"userId",columns:d.value,datasource:l.value,"show-overflow-tooltip":!0,pagination:{pageSize:1e3,pageSizes:[1e3,2e3]},border:!0,toolbar:{theme:"default"},loading:r.value,"table-style":{overflow:"hidden"},onRefresh:f},null,8,["columns","datasource","loading"])])}}},dt={__name:"virtual-merge",setup(U){const _=p([{type:"index",columnKey:"index",width:50,align:"center"},{columnKey:"userName",prop:"userName",label:"姓名"},{prop:"courseName",label:"课程"},{prop:"score",label:"得分"}]),d=()=>oe(),l=({row:r,column:f})=>f.columnKey==="userName"?[r.userNameRowSpan,1]:[1,1];return(r,f)=>{const c=O;return u(),W("div",null,[e(c,{height:370,border:!0,virtual:!0,"row-key":"userId",columns:_.value,datasource:d,"span-method":l,toolbar:{theme:"default"},"show-overflow-tooltip":!0},null,8,["columns"])])}}},pt={__name:"virtual-tree",setup(U){const _=p([{type:"index",columnKey:"index",width:50,align:"center"},{prop:"title",label:"菜单名称",minWidth:160},{prop:"path",label:"路由地址",minWidth:160},{prop:"sortNumber",label:"排序",width:120,align:"center"},{prop:"createTime",label:"创建时间",minWidth:140,align:"center"}]),d=({where:l,parent:r})=>ae({...l,parentId:(r==null?void 0:r.menuId)||0});return(l,r)=>{const f=O;return u(),W("div",null,[e(f,{height:378,virtual:!0,"row-key":"menuId",columns:_.value,datasource:d,lazy:!0,pagination:!1,"show-overflow-tooltip":!0},null,8,["columns"])])}}},mt={style:{padding:"12px 16px 12px 32px"}},_t=S("span",null,"角  色：",-1),ft={style:{"margin-top":"12px"}},bt=S("span",null,"出生日期：",-1),vt={style:{"margin-top":"12px"}},ht=S("span",null,"邮箱账户：",-1),yt={__name:"virtual-expandable",setup(U){const _=p([{type:"expand",columnKey:"expand",width:52,align:"center",slot:"expand",fixed:"left"},{type:"index",columnKey:"index",width:68,fixed:"left"},{label:"用户账号",prop:"username",minWidth:160,sortable:"custom"},{label:"用户名",prop:"nickname",minWidth:160,sortable:"custom"},{label:"性别",prop:"sex",width:120,sortable:"custom",align:"center"},{label:"手机号码",prop:"phone",minWidth:160,sortable:"custom"},{prop:"status",label:"状态",width:120,sortable:"custom",slot:"status"},{label:"创建时间",prop:"createTime",minWidth:180,sortable:"custom"}]),d=p([]),l=p(!1),r=()=>{l.value=!0,setTimeout(()=>{d.value=Array.from({length:2e3}).map((f,c)=>{const a=c+1,n="user-"+String(a).padStart(6,"0"),o=Math.random();return{userId:a,username:n,nickname:"用户"+a,sex:o<.5?"男":"女",roles:[o<.3?"管理员":"普通用户"],phone:String(12345678900+a),email:n+"@eleadmin.com",status:o<.2?1:0,birthday:j().subtract(3*a,"h").format("YYYY-MM-DD"),createTime:j().subtract(45*a,"s").format("YYYY-MM-DD HH:mm:ss")}}),l.value=!1},100)};return r(),(f,c)=>{const a=Z,n=ee,o=O;return u(),W("div",null,[e(o,{height:378,virtual:!0,"row-key":"userId",columns:_.value,datasource:d.value,"show-overflow-tooltip":!0,pagination:{pageSize:1e3,pageSizes:[1e3,2e3]},loading:l.value,onRefresh:r},{status:t(({row:m})=>[m.status===0?(u(),k(a,{key:0,text:"正常",size:"8px"})):m.status===1?(u(),k(a,{key:1,text:"冻结",type:"danger",ripple:!1,size:"8px"})):H("",!0)]),expand:t(({row:m})=>[S("div",mt,[S("div",null,[_t,S("span",null,[(u(!0),W(G,null,Q(m.roles,h=>(u(),k(n,{key:h,size:"small","disable-transitions":!0,style:{"margin-right":"6px"}},{default:t(()=>[w(A(h),1)]),_:2},1024))),128))])]),S("div",ft,[bt,S("span",null,A(m.birthday),1)]),S("div",vt,[ht,S("span",null,A(m.email),1)])])]),_:1},8,["columns","datasource","loading"])])}}},gt={name:"ExtensionTable"},xt=Object.assign(gt,{setup(U){const{mobile:_}=we(),d=p(null),l=p("base"),r=p([{index:"base",title:"基础示例"},{index:"tree",title:"树表格懒加载"},{index:"sorter",title:"默认排序筛选"},{index:"nested",title:"嵌套表格"},{index:"expandable",title:"可展开行"},{index:"merge",title:"合并单元格"},{index:"editable",title:"编辑表格"},{index:"sortable",title:"拖拽排序"},{index:"selections",title:"单选多选"},{index:"virtual",title:"虚拟滚动表格",group:!0,children:[{index:"virtual-base",title:"基础示例"},{index:"virtual-header",title:"多级表头"},{index:"virtual-merge",title:"合并单元格"},{index:"virtual-tree",title:"树形表格"},{index:"virtual-expandable",title:"可展开行"}]}]),f=c=>{var a,n;l.value=c.index,_.value&&((n=(a=d.value)==null?void 0:a.toggleCollapse)==null||n.call(a,!0))};return(c,a)=>{const n=Ve,o=$e,m=Ce,h=ze;return u(),k(h,{"multi-card":!1},{default:t(()=>[e(m,{"body-style":{padding:0,overflow:"hidden"}},{default:t(()=>[e(o,{ref_key:"splitRef",ref:d,space:"0px",size:"180px","allow-collapse":te(_),"custom-style":{borderWidth:"0 1px 0 0",padding:"10px 0"},"body-style":{padding:"10px 20px 14px 16px",overflow:"hidden"},"collapse-style":{marginLeft:"4px"},style:{"min-height":"688px","border-radius":"var(--ele-card-radius)"}},{body:t(()=>[e(Se,{name:"slide-right",mode:"out-in"},{default:t(()=>[l.value=="base"?(u(),k(Ue,{key:0})):l.value=="tree"?(u(),k(De,{key:1})):l.value=="sorter"?(u(),k(Me,{key:2})):l.value=="nested"?(u(),k(Re,{key:3})):l.value=="expandable"?(u(),k(qe,{key:4})):l.value=="merge"?(u(),k(Pe,{key:5})):l.value=="editable"?(u(),k(lt,{key:6})):l.value=="sortable"?(u(),k(at,{key:7})):l.value=="selections"?(u(),k(st,{key:8})):l.value=="virtual-base"?(u(),k(ut,{key:9})):l.value=="virtual-header"?(u(),k(ct,{key:10})):l.value=="virtual-merge"?(u(),k(dt,{key:11})):l.value=="virtual-tree"?(u(),k(pt,{key:12})):l.value=="virtual-expandable"?(u(),k(yt,{key:13})):H("",!0)]),_:1})]),default:t(()=>[e(n,{items:r.value,"default-active":l.value,class:"demo-menu",onItemClick:f},null,8,["items","default-active"])]),_:1},8,["allow-collapse"])]),_:1})]),_:1})}}}),Jt=q(xt,[["__scopeId","data-v-c11bf5ac"]]);export{Jt as default};
