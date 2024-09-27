import{u as G,r as d,C as H,d as r,G as V,o as h,c as J,H as m,I as $,h as o,e,f as t,k as x,p as _,l as w,D as M,m as W,z as X,B as Y,v as Z}from"./index-BmfY8c7d.js";import ee from"./selectUser-DC2iQAxn.js";import{a as oe,b as te,c as le}from"./role-CSqEnsaa.js";const ne={class:"app-container"},ae=Y({name:"AuthUser"}),pe=Object.assign(ae,{setup(se){const R=G(),{proxy:i}=Z(),{sys_normal_disable:P}=i.useDict("sys_normal_disable"),k=d([]),y=d(!0),g=d(!0),N=d(!0),v=d(0),U=d([]),n=H({pageNum:1,pageSize:10,roleId:R.params.roleId,userName:void 0,phonenumber:void 0});function c(){y.value=!0,oe(n).then(s=>{k.value=s.rows,v.value=s.total,y.value=!1})}function A(){const s={path:"/system/role"};i.$tab.closeOpenPage(s)}function f(){n.pageNum=1,c()}function B(){i.resetForm("queryRef"),f()}function D(s){U.value=s.map(a=>a.userId),N.value=!s.length}function T(){i.$refs.selectRef.show()}function z(s){i.$modal.confirm('确认要取消该用户"'+s.userName+'"角色吗？').then(function(){return te({userId:s.userId,roleId:n.roleId})}).then(()=>{c(),i.$modal.msgSuccess("取消授权成功")}).catch(()=>{})}function j(s){const a=n.roleId,b=U.value.join(",");i.$modal.confirm("是否取消选中用户授权数据项?").then(function(){return le({roleId:a,userIds:b})}).then(()=>{c(),i.$modal.msgSuccess("取消授权成功")}).catch(()=>{})}return c(),(s,a)=>{const b=r("el-input"),C=r("el-form-item"),p=r("el-button"),q=r("el-form"),I=r("el-col"),K=r("right-toolbar"),L=r("el-row"),u=r("el-table-column"),O=r("dict-tag"),Q=r("el-table"),E=r("pagination"),S=V("hasPermi"),F=V("loading");return h(),J("div",ne,[m(e(q,{model:o(n),ref:"queryRef",inline:!0},{default:t(()=>[e(C,{label:"用户名称",prop:"userName"},{default:t(()=>[e(b,{modelValue:o(n).userName,"onUpdate:modelValue":a[0]||(a[0]=l=>o(n).userName=l),placeholder:"请输入用户名称",clearable:"",style:{width:"240px"},onKeyup:x(f,["enter"])},null,8,["modelValue"])]),_:1}),e(C,{label:"手机号码",prop:"phonenumber"},{default:t(()=>[e(b,{modelValue:o(n).phonenumber,"onUpdate:modelValue":a[1]||(a[1]=l=>o(n).phonenumber=l),placeholder:"请输入手机号码",clearable:"",style:{width:"240px"},onKeyup:x(f,["enter"])},null,8,["modelValue"])]),_:1}),e(C,null,{default:t(()=>[e(p,{type:"primary",icon:"Search",onClick:f},{default:t(()=>[_("搜索")]),_:1}),e(p,{icon:"Refresh",onClick:B},{default:t(()=>[_("重置")]),_:1})]),_:1})]),_:1},8,["model"]),[[$,o(g)]]),e(L,{gutter:10,class:"mb8"},{default:t(()=>[e(I,{span:1.5},{default:t(()=>[m((h(),w(p,{type:"primary",plain:"",icon:"Plus",onClick:T},{default:t(()=>[_("添加用户")]),_:1})),[[S,["system:role:add"]]])]),_:1}),e(I,{span:1.5},{default:t(()=>[m((h(),w(p,{type:"danger",plain:"",icon:"CircleClose",disabled:o(N),onClick:j},{default:t(()=>[_("批量取消授权")]),_:1},8,["disabled"])),[[S,["system:role:remove"]]])]),_:1}),e(I,{span:1.5},{default:t(()=>[e(p,{type:"warning",plain:"",icon:"Close",onClick:A},{default:t(()=>[_("关闭")]),_:1})]),_:1}),e(K,{showSearch:o(g),"onUpdate:showSearch":a[2]||(a[2]=l=>M(g)?g.value=l:null),onQueryTable:c},null,8,["showSearch"])]),_:1}),m((h(),w(Q,{data:o(k),onSelectionChange:D},{default:t(()=>[e(u,{type:"selection",width:"55",align:"center"}),e(u,{label:"用户名称",prop:"userName","show-overflow-tooltip":!0}),e(u,{label:"用户昵称",prop:"nickName","show-overflow-tooltip":!0}),e(u,{label:"邮箱",prop:"email","show-overflow-tooltip":!0}),e(u,{label:"手机",prop:"phonenumber","show-overflow-tooltip":!0}),e(u,{label:"状态",align:"center",prop:"status"},{default:t(l=>[e(O,{options:o(P),value:l.row.status},null,8,["options","value"])]),_:1}),e(u,{label:"创建时间",align:"center",prop:"createTime",width:"180"},{default:t(l=>[W("span",null,X(s.parseTime(l.row.createTime)),1)]),_:1}),e(u,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:t(l=>[m((h(),w(p,{link:"",type:"primary",icon:"CircleClose",onClick:re=>z(l.row)},{default:t(()=>[_("取消授权")]),_:2},1032,["onClick"])),[[S,["system:role:remove"]]])]),_:1})]),_:1},8,["data"])),[[F,o(y)]]),m(e(E,{total:o(v),page:o(n).pageNum,"onUpdate:page":a[3]||(a[3]=l=>o(n).pageNum=l),limit:o(n).pageSize,"onUpdate:limit":a[4]||(a[4]=l=>o(n).pageSize=l),onPagination:c},null,8,["total","page","limit"]),[[$,o(v)>0]]),e(o(ee),{ref:"selectRef",roleId:o(n).roleId,onOk:f},null,8,["roleId"])])}}});export{pe as default};
