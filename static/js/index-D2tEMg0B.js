/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{m as Y,u as Z,n as H,o as K,q as Q,s as b,w as X,x as h,y as ee}from"./index-D_keMk_X.js";import{u as te}from"./index-CltMZZBk.js";import{d as oe,a as T,z as s,R as y,J as o,u as a,A as m,U as t,D as le,Z as l,Y as x,P as d,G as ne,a2 as se,W as re,o as n}from"./vsv-element-plus-CWjYVfvE.js";import"./vsv-icon-CzoHxvAi.js";import"./vsv-nprogress-D-M_H-zP.js";const ae={class:"permission-container"},fe=oe({name:"Permission",__name:"index",setup(ie){const $=Y(),{role:B,permission:D}=storeToRefs($),N=Z(),{username:C,token:c}=storeToRefs(N),f=reactive({account:C.value}),R=ref(!1),O=[{yes:"yes-1",no:"no-1"},{yes:"yes-2",no:"no-2"}],E=ref("当前登录的账号非admin，如需查看演示地址全部功能，请使用admin账号登录。"),_=ref(!1),U=ref("primary"),I=ref([{target:"#vsv-admin",title:"切换账号",description:E.value}]),J=()=>{_.value=!0},L=async()=>{$baseLoading("正在切换账号请稍后..."),await localStorage.setItem(X,`${f.account}-token-${te()}-${Date.now()}`),await location.reload(!0)},P=async()=>{await h()},j=async()=>{await ee()};return watch(c,V=>{$baseMessage(`token：${V}，刷新成功！`,"success","hey")}),onActivated(()=>{C.value!=="admin"&&(R.value=!0,J())}),(V,e)=>{const g=m("vab-alert"),A=m("el-radio-button"),q=m("el-radio-group"),p=m("el-form-item"),r=m("el-button"),k=m("el-tag"),v=m("el-descriptions-item"),z=m("el-descriptions"),w=m("el-space"),S=m("el-table-column"),F=m("el-table"),G=m("el-form"),M=m("el-tour-step"),W=m("el-tour"),i=re("permissions");return n(),T("div",ae,[a(R)?(n(),s(g,{key:0,title:a(E),type:"error"},null,8,["title"])):y("",!0),a(H)?y("",!0):(n(),s(g,{key:1,title:"检测到您当前的登录拦截已关闭，无法模拟切换角色功能，请在src/config/setting.config.js中配置loginInterception为true，开启登录拦截",type:"error"})),o(g,{title:`当前路由模式为：${a(K)==="all"?"后端路由":"前端路由"} ，是否开启前端角色权限控制：${a(Q)===!0?"是":"否"}`},null,8,["title"]),o(G,{"label-position":"top",model:a(f)},{default:t(()=>[o(p,{label:"账号切换"},{default:t(()=>[o(q,{modelValue:a(f).account,"onUpdate:modelValue":e[0]||(e[0]=u=>a(f).account=u),onChange:L},{default:t(()=>[o(A,{id:"vsv-admin",label:"admin",value:"admin"},{default:t(()=>e[2]||(e[2]=[l("admin")])),_:1}),o(A,{label:"editor",value:"editor"},{default:t(()=>e[3]||(e[3]=[l("editor")])),_:1}),o(A,{label:"test",value:"test"},{default:t(()=>e[4]||(e[4]=[l("test")])),_:1})]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"token续期（每隔5s可刷新token）"},{default:t(()=>[o(r,{type:"primary",onClick:P},{default:t(()=>e[5]||(e[5]=[l("刷新token")])),_:1})]),_:1}),o(p,{label:"当前账号"},{default:t(()=>[o(z,{border:"",column:3,direction:"vertical"},{default:t(()=>[o(v,null,{label:t(()=>e[6]||(e[6]=[l("角色")])),default:t(()=>[o(k,null,{default:t(()=>[l(x(JSON.stringify(a(B))),1)]),_:1})]),_:1}),o(v,null,{label:t(()=>e[7]||(e[7]=[l("权限点")])),default:t(()=>[o(k,null,{default:t(()=>[l(x(JSON.stringify(a(D))),1)]),_:1})]),_:1}),o(v,null,{label:t(()=>e[8]||(e[8]=[l("token")])),default:t(()=>[o(k,null,{default:t(()=>[l(x(a(c)),1)]),_:1})]),_:1})]),_:1})]),_:1}),o(p,{label:"RBAC 角色控制"},{default:t(()=>[o(w,{wrap:""},{default:t(()=>[d((n(),s(r,{type:"primary"},{default:t(()=>e[9]||(e[9]=[l('拥有["Admin"]的按钮')])),_:1})),[[i,["Admin"]]]),d((n(),s(r,{type:"danger"},{default:t(()=>e[10]||(e[10]=[l('未拥有["Admin"]的按钮')])),_:1})),[[i,{role:["Admin"],mode:"except"}]]),d((n(),s(r,{type:"primary"},{default:t(()=>e[11]||(e[11]=[l('拥有["Editor"]的按钮')])),_:1})),[[i,["Editor"]]]),d((n(),s(r,{type:"danger"},{default:t(()=>e[12]||(e[12]=[l('未拥有["Editor"]的按钮')])),_:1})),[[i,{role:["Editor"],mode:"except"}]]),d((n(),s(r,{type:"primary"},{default:t(()=>e[13]||(e[13]=[l(' 同时拥有["Admin","Editor"]的按钮 ')])),_:1})),[[i,{role:["Admin","Editor"],mode:"allOf"}]]),d((n(),s(r,{type:"primary"},{default:t(()=>e[14]||(e[14]=[l('拥有["Test"]的按钮')])),_:1})),[[i,["Test"]]])]),_:1})]),_:1}),o(p,{label:"RBAC 权限点控制"},{default:t(()=>[o(w,{wrap:""},{default:t(()=>[d((n(),s(r,{type:"primary"},{default:t(()=>e[15]||(e[15]=[l('拥有["read:system"]的按钮')])),_:1})),[[i,{permission:["read:system"]}]]),d((n(),s(r,{type:"danger"},{default:t(()=>e[16]||(e[16]=[l(`未拥有["'read:system'"]的按钮`)])),_:1})),[[i,{permission:["read:system"],mode:"except"}]]),d((n(),s(r,{type:"primary"},{default:t(()=>e[17]||(e[17]=[l('拥有["write:system"]的按钮')])),_:1})),[[i,{permission:["write:system"]}]]),d((n(),s(r,{type:"danger"},{default:t(()=>e[18]||(e[18]=[l('未拥有["write:system"]的按钮')])),_:1})),[[i,{permission:["write:system"],mode:"except"}]]),d((n(),s(r,{type:"primary"},{default:t(()=>e[19]||(e[19]=[l('拥有["delete:system"]的按钮')])),_:1})),[[i,{permission:["delete:system"]}]]),d((n(),s(r,{type:"danger"},{default:t(()=>e[20]||(e[20]=[l(' 未拥有["delete:system"]的按钮 ')])),_:1})),[[i,{permission:["delete:system"],mode:"except"}]])]),_:1})]),_:1}),o(p,{label:"RBAC 角色&权限点控制"},{default:t(()=>[o(w,{wrap:""},{default:t(()=>[d((n(),s(r,{type:"primary"},{default:t(()=>e[21]||(e[21]=[l(' 拥有["Admin"]或["delete:system"]的按钮 ')])),_:1})),[[i,{role:["Admin"],permission:["delete:system"]}]]),d((n(),s(r,{type:"primary"},{default:t(()=>e[22]||(e[22]=[l(' 拥有["Editor"]和["read:system"]的按钮 ')])),_:1})),[[i,{role:["Editor"],permission:["read:system"],mode:"allOf"}]]),d((n(),s(r,{type:"danger"},{default:t(()=>e[23]||(e[23]=[l(' 未拥有["Admin"]和["delete:system"]的按钮 ')])),_:1})),[[i,{role:["Admin"],permission:["delete:system"],mode:"except"}]])]),_:1})]),_:1}),o(p,{label:"RBAC 自定义按钮&表格列权限控制"},{default:t(()=>[a(b)(["Admin"])?(n(),s(r,{key:0,type:"primary"},{default:t(()=>e[24]||(e[24]=[l('拥有["Admin"]的按钮')])),_:1})):y("",!0),a(b)({role:["Admin"],mode:"except"})?(n(),s(r,{key:1,type:"danger"},{default:t(()=>e[25]||(e[25]=[l('未拥有["Admin"]的按钮')])),_:1})):y("",!0),o(F,{border:"",data:O,style:{display:"block","margin-top":"var(--el-margin)"}},{default:t(()=>[a(b)(["Admin"])?(n(),s(S,{key:0,label:"拥有['Admin']的表格列",prop:"yes"})):y("",!0),a(b)({role:["Admin"],mode:"except"})?(n(),s(S,{key:1,label:"未拥有['Admin']的表格列",prop:"no"})):y("",!0)]),_:1})]),_:1}),o(p,{label:"后端code指令强制开启锁屏"},{default:t(()=>[o(r,{type:"primary",onClick:j},{default:t(()=>e[26]||(e[26]=[l("点击锁屏")])),_:1})]),_:1})]),_:1},8,["model"]),o(W,{modelValue:a(_),"onUpdate:modelValue":e[1]||(e[1]=u=>le(_)?_.value=u:null),type:a(U)},{default:t(()=>[(n(!0),T(ne,null,se(a(I),u=>(n(),s(M,{key:u,description:u.description,target:u.target,title:u.title},null,8,["description","target","title"]))),128))]),_:1},8,["modelValue","type"])])}}});export{fe as default};
