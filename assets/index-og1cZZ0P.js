import{b5 as M,o as w,c as N,w as o,b as t,cK as S,aG as K,u as v,d as b,aI as B,aH as F,aC as $,aL as O,r as f,a as W,R as T,E as k,aE as D,a6 as H,e as U,a7 as q,a8 as L,t as z,fw as A,f8 as P,W as G,dM as J,g as Q,bE as X,au as Y,aW as Z,ay as ee,j as le}from"./index-C4BxmZrN.js";import{i as j}from"./index-CkGVv88Q.js";import{i as te}from"./index-BCHJo1Hi.js";import"./index-DPWieFbN.js";import{i as oe}from"./index-BY7TmcLY.js";import"./index-Cw5RFCD5.js";import"./virtual-list-CYzSvSUd.js";import"./index-CuklncWx.js";import"./index-CL6ZmOyB.js";import{E as ae,a as ne}from"./col-DljvzS69.js";import{u as se,a as re,b as de,c as ue,p as ie,r as me}from"./index-Czf8vTYn.js";import{E as ce}from"./tree-C3JkgW2I.js";import{i as pe}from"./index-DSHqkOzX.js";import"./isArrayLikeObject-XYcYxEsS.js";import"./vuedraggable.umd-BuphSp9t.js";const fe={__name:"role-search",emits:["search"],setup(I,{emit:C}){const E=C,[r,c]=M({roleName:"",roleCode:"",comments:""}),u=()=>{E("search",{...r})},p=()=>{c(),u()};return(i,m)=>{const h=B,x=F,g=ae,a=$,e=ne,l=O,n=j;return w(),N(n,{"body-style":{paddingBottom:"2px"}},{default:o(()=>[t(l,{"label-width":"72px",onKeyup:S(u,["enter"]),onSubmit:m[2]||(m[2]=K(()=>{},["prevent"]))},{default:o(()=>[t(e,{gutter:8},{default:o(()=>[t(g,{lg:6,md:8,sm:12,xs:24},{default:o(()=>[t(x,{label:"角色名称"},{default:o(()=>[t(h,{clearable:"",modelValue:v(r).roleName,"onUpdate:modelValue":m[0]||(m[0]=d=>v(r).roleName=d),modelModifiers:{trim:!0},placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1}),t(g,{lg:6,md:8,sm:12,xs:24},{default:o(()=>[t(x,{label:"角色标识"},{default:o(()=>[t(h,{clearable:"",modelValue:v(r).roleCode,"onUpdate:modelValue":m[1]||(m[1]=d=>v(r).roleCode=d),modelModifiers:{trim:!0},placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1}),t(g,{lg:12,md:8,sm:24,xs:24},{default:o(()=>[t(x,{"label-width":"16px"},{default:o(()=>[t(a,{type:"primary",onClick:u},{default:o(()=>[b("查询")]),_:1}),t(a,{onClick:p},{default:o(()=>[b("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},_e={__name:"role-edit",props:{modelValue:Boolean,data:Object},emits:["done","update:modelValue"],setup(I,{emit:C}){const E=C,r=I,c=f(!1),u=f(!1),p=f(null),[i,m,h]=M({roleId:void 0,roleName:"",roleCode:"",comments:""}),x=W({roleName:[{required:!0,message:"请输入角色名称",type:"string",trigger:"blur"}],roleCode:[{required:!0,message:"请输入角色标识",type:"string",trigger:"blur"}]}),g=()=>{var e,l;(l=(e=p.value)==null?void 0:e.validate)==null||l.call(e,n=>{if(!n)return;u.value=!0,(c.value?se:re)(i).then(_=>{u.value=!1,k.success(_),a(!1),E("done")}).catch(_=>{u.value=!1,k.error(_.message)})})},a=e=>{E("update:modelValue",e)};return T(()=>r.modelValue,e=>{var l,n;e?r.data?(h(r.data),c.value=!0):c.value=!1:(m(),(n=(l=p.value)==null?void 0:l.clearValidate)==null||n.call(l))}),(e,l)=>{const n=B,d=F,_=O,V=$,y=D;return w(),N(y,{form:"",width:460,"model-value":I.modelValue,title:c.value?"修改角色":"添加角色","onUpdate:modelValue":a},{footer:o(()=>[t(V,{onClick:l[4]||(l[4]=s=>a(!1))},{default:o(()=>[b("取消")]),_:1}),t(V,{type:"primary",loading:u.value,onClick:g},{default:o(()=>[b(" 保存 ")]),_:1},8,["loading"])]),default:o(()=>[t(_,{ref_key:"formRef",ref:p,model:v(i),rules:x,"label-width":"80px",onSubmit:l[3]||(l[3]=K(()=>{},["prevent"]))},{default:o(()=>[t(d,{label:"角色名称",prop:"roleName"},{default:o(()=>[t(n,{clearable:"",maxlength:20,modelValue:v(i).roleName,"onUpdate:modelValue":l[0]||(l[0]=s=>v(i).roleName=s),placeholder:"请输入角色名称"},null,8,["modelValue"])]),_:1}),t(d,{label:"角色标识",prop:"roleCode"},{default:o(()=>[t(n,{clearable:"",maxlength:20,modelValue:v(i).roleCode,"onUpdate:modelValue":l[1]||(l[1]=s=>v(i).roleCode=s),placeholder:"请输入角色标识"},null,8,["modelValue"])]),_:1}),t(d,{label:"备注"},{default:o(()=>[t(n,{rows:4,type:"textarea",modelValue:v(i).comments,"onUpdate:modelValue":l[2]||(l[2]=s=>v(i).comments=s),placeholder:"请输入备注"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value","title"])}}},ve={style:{"vertical-align":"-2px"}},ge={components:A},ye=Object.assign(ge,{__name:"role-auth",props:{modelValue:Boolean,data:Object},emits:["update:modelValue"],setup(I,{emit:C}){const E=C,r=I,c=f(null),u=f([]),p=f(!1),i=f(!1),m=f([]),h=()=>{u.value=[],m.value=[],r.data&&(p.value=!0,de(r.data.roleId).then(a=>{p.value=!1,u.value=P({data:a,idField:"menuId",parentIdField:"parentId"}),G(()=>{const e=[];J(u.value,l=>{var n;l.menuId&&l.checked&&!((n=l.children)!=null&&n.length)&&e.push(l.menuId)}),m.value=e})}).catch(a=>{p.value=!1,k.error(a.message)}))},x=()=>{var e,l,n,d,_,V,y,s;i.value=!0;const a=(y=((n=(l=(e=c.value)==null?void 0:e.getCheckedKeys)==null?void 0:l.call(e))!=null?n:[]).concat((V=(_=(d=c.value)==null?void 0:d.getHalfCheckedKeys)==null?void 0:_.call(d))!=null?V:[]))!=null?y:[];ue((s=r.data)==null?void 0:s.roleId,a).then(R=>{i.value=!1,k.success(R),g(!1)}).catch(R=>{i.value=!1,k.error(R.message)})},g=a=>{E("update:modelValue",a)};return T(()=>r.modelValue,a=>{a&&h()}),(a,e)=>{const l=Q,n=ce,d=oe,_=$,V=D;return w(),N(V,{width:460,title:"分配权限",position:"center","model-value":I.modelValue,"body-style":{padding:"12px 0 12px 22px"},"onUpdate:modelValue":g},{footer:o(()=>[t(_,{onClick:e[0]||(e[0]=y=>g(!1))},{default:o(()=>[b("取消")]),_:1}),t(_,{type:"primary",loading:i.value,onClick:x},{default:o(()=>[b(" 保存 ")]),_:1},8,["loading"])]),default:o(()=>[t(d,{loading:p.value,"spinner-style":{background:"transparent"},style:H({height:"560px",paddingRight:"20px",maxHeight:"calc(100vh - 192px)",minHeight:"100px",overflow:"auto"})},{default:o(()=>[t(n,{ref_key:"treeRef",ref:c,"show-checkbox":"",data:u.value,"node-key":"menuId","default-expand-all":!0,props:{label:"title"},"default-checked-keys":m.value,style:{"--ele-tree-item-height":"28px"}},{default:o(y=>[U("div",null,[y.data.icon?(w(),N(l,{key:0,size:16,style:{"margin-right":"6px","vertical-align":"-5px"}},{default:o(()=>[(w(),N(q(y.data.icon)))]),_:2},1024)):L("",!0),U("span",ve,z(y.data.title),1)])]),_:1},8,["data","default-checked-keys"])]),_:1},8,["loading","style"])]),_:1},8,["model-value"])}}}),be={name:"SystemRole"},Fe=Object.assign(be,{setup(I){const C=f(null),E=f([{type:"selection",columnKey:"selection",width:50,align:"center",fixed:"left"},{type:"index",columnKey:"index",width:50,align:"center",fixed:"left"},{prop:"roleName",label:"角色名称",sortable:"custom",minWidth:110},{prop:"roleCode",label:"角色标识",sortable:"custom",minWidth:110},{prop:"comments",label:"备注",sortable:"custom",minWidth:110},{prop:"createTime",label:"创建时间",sortable:"custom",minWidth:110},{columnKey:"action",label:"操作",width:200,align:"center",slot:"action",hideInPrint:!0,hideInExport:!0}]),r=f([]),c=f(null),u=f(!1),p=f(!1),i=({pages:a,where:e,orders:l})=>ie({...e,...l,...a}),m=a=>{var e,l;r.value=[],(l=(e=C.value)==null?void 0:e.reload)==null||l.call(e,{page:1,where:a})},h=a=>{c.value=a!=null?a:null,u.value=!0},x=a=>{c.value=a!=null?a:null,p.value=!0},g=a=>{const e=a==null?r.value:[a];if(!e.length){k.error("请至少选择一条数据");return}Z.confirm("确定要删除“"+e.map(l=>l.roleName).join(", ")+"”吗?","系统提示",{type:"warning",draggable:!0}).then(()=>{const l=k.loading("请求中..");me(e.map(n=>n.roleId)).then(n=>{l.close(),k.success(n),m()}).catch(n=>{l.close(),k.error(n.message)})}).catch(()=>{})};return(a,e)=>{const l=$,n=ee,d=le,_=te,V=j,y=pe;return w(),N(y,null,{default:o(()=>[t(fe,{onSearch:m}),t(V,{"body-style":{paddingTop:"8px"}},{default:o(()=>[t(_,{ref_key:"tableRef",ref:C,"row-key":"roleId",columns:E.value,datasource:i,"show-overflow-tooltip":!0,selections:r.value,"onUpdate:selections":e[2]||(e[2]=s=>r.value=s),"highlight-current-row":!0,"export-config":{fileName:"角色数据"},"cache-key":"systemRoleTable"},{toolbar:o(()=>[t(l,{type:"primary",class:"ele-btn-icon",icon:v(X),onClick:e[0]||(e[0]=s=>h())},{default:o(()=>[b(" 新建 ")]),_:1},8,["icon"]),t(l,{type:"danger",class:"ele-btn-icon",icon:v(Y),onClick:e[1]||(e[1]=s=>g())},{default:o(()=>[b(" 删除 ")]),_:1},8,["icon"])]),action:o(({row:s})=>[t(n,{type:"primary",underline:!1,onClick:R=>h(s)},{default:o(()=>[b(" 修改 ")]),_:2},1032,["onClick"]),t(d,{direction:"vertical"}),t(n,{type:"primary",underline:!1,onClick:R=>x(s)},{default:o(()=>[b(" 分配权限 ")]),_:2},1032,["onClick"]),t(d,{direction:"vertical"}),t(n,{type:"danger",underline:!1,onClick:R=>g(s)},{default:o(()=>[b(" 删除 ")]),_:2},1032,["onClick"])]),_:1},8,["columns","selections"])]),_:1}),t(_e,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=s=>u.value=s),data:c.value,onDone:m},null,8,["modelValue","data"]),t(ye,{modelValue:p.value,"onUpdate:modelValue":e[4]||(e[4]=s=>p.value=s),data:c.value},null,8,["modelValue","data"])]),_:1})}}});export{Fe as default};
