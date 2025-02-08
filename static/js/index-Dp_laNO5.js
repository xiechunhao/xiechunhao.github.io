/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:17:33 
 */
import{m as H,u as K,n as Q,o as W,q as X,s as b,w as Z,x as h,y as ee}from"./index-vqJMV2wg.js";import{u as te}from"./index-CltMZZBk.js";import{d as oe,N as m,a2 as le,o as n,b as $,u as a,M as s,_ as y,T as o,$ as t,a4 as l,a3 as x,Y as d,P as ne,aa as se,k as re}from"./vsv-element-plus-CxGOTlXz.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const ae={class:"permission-container"},fe=oe({name:"Permission",__name:"index",setup(ie){const S=H(),{role:B,permission:N}=storeToRefs(S),D=K(),{username:C,token:c}=storeToRefs(D),f=reactive({account:C.value}),E=ref(!1),O=[{yes:"yes-1",no:"no-1"},{yes:"yes-2",no:"no-2"}],R=ref("当前登录的账号非admin，如需查看演示地址全部功能，请使用admin账号登录。"),_=ref(!1),I=ref("primary"),L=ref([{target:"#vsv-admin",title:"切换账号",description:R.value}]),P=()=>{_.value=!0},U=async()=>{$baseLoading("正在切换账号请稍后..."),await localStorage.setItem(Z,`${f.account}-token-${te()}-${Date.now()}`),await location.reload(!0)},J=async()=>{await h()},M=async()=>{await ee()};return watch(c,T=>{$baseMessage(`token：${T}，刷新成功！`,"success","hey")}),onActivated(()=>{C.value!=="admin"&&(E.value=!0,P())}),(T,e)=>{const g=m("vab-alert"),k=m("el-radio-button"),j=m("el-radio-group"),p=m("el-form-item"),r=m("el-button"),v=m("el-tag"),A=m("el-descriptions-item"),q=m("el-descriptions"),w=m("el-space"),V=m("el-table-column"),F=m("el-table"),Y=m("el-form"),z=m("el-tour-step"),G=m("el-tour"),i=le("permissions");return n(),$("div",ae,[a(E)?(n(),s(g,{key:0,title:a(R),type:"error"},null,8,["title"])):y("",!0),a(Q)?y("",!0):(n(),s(g,{key:1,title:"检测到您当前的登录拦截已关闭，无法模拟切换角色功能，请在src/config/setting.config.js中配置loginInterception为true，开启登录拦截",type:"error"})),o(g,{title:`当前路由模式为：${a(W)==="all"?"后端路由":"前端路由"} ，是否开启前端角色权限控制：${a(X)===!0?"是":"否"}`},null,8,["title"]),o(Y,{"label-position":"top",model:a(f)},{default:t(()=>[o(p,{label:"账号切换"},{default:t(()=>[o(j,{modelValue:a(f).account,"onUpdate:modelValue":e[0]||(e[0]=u=>a(f).account=u),onChange:U},{default:t(()=>[o(k,{id:"vsv-admin",label:"admin",value:"admin"},{default:t(()=>e[2]||(e[2]=[l("admin")])),_:1}),o(k,{label:"editor",value:"editor"},{default:t(()=>e[3]||(e[3]=[l("editor")])),_:1}),o(k,{label:"test",value:"test"},{default:t(()=>e[4]||(e[4]=[l("test")])),_:1})]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"token续期（每隔5s可刷新token）"},{default:t(()=>[o(r,{type:"primary",onClick:J},{default:t(()=>e[5]||(e[5]=[l("刷新token")])),_:1})]),_:1}),o(p,{label:"当前账号"},{default:t(()=>[o(q,{border:"",column:3,direction:"vertical"},{default:t(()=>[o(A,null,{label:t(()=>e[6]||(e[6]=[l("角色")])),default:t(()=>[o(v,null,{default:t(()=>[l(x(JSON.stringify(a(B))),1)]),_:1})]),_:1}),o(A,null,{label:t(()=>e[7]||(e[7]=[l("权限点")])),default:t(()=>[o(v,null,{default:t(()=>[l(x(JSON.stringify(a(N))),1)]),_:1})]),_:1}),o(A,null,{label:t(()=>e[8]||(e[8]=[l("token")])),default:t(()=>[o(v,null,{default:t(()=>[l(x(a(c)),1)]),_:1})]),_:1})]),_:1})]),_:1}),o(p,{label:"RBAC 角色控制"},{default:t(()=>[o(w,{wrap:""},{default:t(()=>[d((n(),s(r,{type:"primary"},{default:t(()=>e[9]||(e[9]=[l('拥有["Admin"]的按钮')])),_:1})),[[i,["Admin"]]]),d((n(),s(r,{type:"danger"},{default:t(()=>e[10]||(e[10]=[l('未拥有["Admin"]的按钮')])),_:1})),[[i,{role:["Admin"],mode:"except"}]]),d((n(),s(r,{type:"primary"},{default:t(()=>e[11]||(e[11]=[l('拥有["Editor"]的按钮')])),_:1})),[[i,["Editor"]]]),d((n(),s(r,{type:"danger"},{default:t(()=>e[12]||(e[12]=[l('未拥有["Editor"]的按钮')])),_:1})),[[i,{role:["Editor"],mode:"except"}]]),d((n(),s(r,{type:"primary"},{default:t(()=>e[13]||(e[13]=[l(' 同时拥有["Admin","Editor"]的按钮 ')])),_:1})),[[i,{role:["Admin","Editor"],mode:"allOf"}]]),d((n(),s(r,{type:"primary"},{default:t(()=>e[14]||(e[14]=[l('拥有["Test"]的按钮')])),_:1})),[[i,["Test"]]])]),_:1})]),_:1}),o(p,{label:"RBAC 权限点控制"},{default:t(()=>[o(w,{wrap:""},{default:t(()=>[d((n(),s(r,{type:"primary"},{default:t(()=>e[15]||(e[15]=[l('拥有["read:system"]的按钮')])),_:1})),[[i,{permission:["read:system"]}]]),d((n(),s(r,{type:"danger"},{default:t(()=>e[16]||(e[16]=[l(`未拥有["'read:system'"]的按钮`)])),_:1})),[[i,{permission:["read:system"],mode:"except"}]]),d((n(),s(r,{type:"primary"},{default:t(()=>e[17]||(e[17]=[l('拥有["write:system"]的按钮')])),_:1})),[[i,{permission:["write:system"]}]]),d((n(),s(r,{type:"danger"},{default:t(()=>e[18]||(e[18]=[l('未拥有["write:system"]的按钮')])),_:1})),[[i,{permission:["write:system"],mode:"except"}]]),d((n(),s(r,{type:"primary"},{default:t(()=>e[19]||(e[19]=[l('拥有["delete:system"]的按钮')])),_:1})),[[i,{permission:["delete:system"]}]]),d((n(),s(r,{type:"danger"},{default:t(()=>e[20]||(e[20]=[l(' 未拥有["delete:system"]的按钮 ')])),_:1})),[[i,{permission:["delete:system"],mode:"except"}]])]),_:1})]),_:1}),o(p,{label:"RBAC 角色&权限点控制"},{default:t(()=>[o(w,{wrap:""},{default:t(()=>[d((n(),s(r,{type:"primary"},{default:t(()=>e[21]||(e[21]=[l(' 拥有["Admin"]或["delete:system"]的按钮 ')])),_:1})),[[i,{role:["Admin"],permission:["delete:system"]}]]),d((n(),s(r,{type:"primary"},{default:t(()=>e[22]||(e[22]=[l(' 拥有["Editor"]和["read:system"]的按钮 ')])),_:1})),[[i,{role:["Editor"],permission:["read:system"],mode:"allOf"}]]),d((n(),s(r,{type:"danger"},{default:t(()=>e[23]||(e[23]=[l(' 未拥有["Admin"]和["delete:system"]的按钮 ')])),_:1})),[[i,{role:["Admin"],permission:["delete:system"],mode:"except"}]])]),_:1})]),_:1}),o(p,{label:"RBAC 自定义按钮&表格列权限控制"},{default:t(()=>[a(b)(["Admin"])?(n(),s(r,{key:0,type:"primary"},{default:t(()=>e[24]||(e[24]=[l('拥有["Admin"]的按钮')])),_:1})):y("",!0),a(b)({role:["Admin"],mode:"except"})?(n(),s(r,{key:1,type:"danger"},{default:t(()=>e[25]||(e[25]=[l('未拥有["Admin"]的按钮')])),_:1})):y("",!0),o(F,{border:"",data:O,style:{display:"block","margin-top":"var(--el-margin)"}},{default:t(()=>[a(b)(["Admin"])?(n(),s(V,{key:0,label:"拥有['Admin']的表格列",prop:"yes"})):y("",!0),a(b)({role:["Admin"],mode:"except"})?(n(),s(V,{key:1,label:"未拥有['Admin']的表格列",prop:"no"})):y("",!0)]),_:1})]),_:1}),o(p,{label:"后端code指令强制开启锁屏"},{default:t(()=>[o(r,{type:"primary",onClick:M},{default:t(()=>e[26]||(e[26]=[l("点击锁屏")])),_:1})]),_:1})]),_:1},8,["model"]),o(G,{modelValue:a(_),"onUpdate:modelValue":e[1]||(e[1]=u=>re(_)?_.value=u:null),type:a(I)},{default:t(()=>[(n(!0),$(ne,null,se(a(L),u=>(n(),s(z,{key:u,description:u.description,target:u.target,title:u.title},null,8,["description","target","title"]))),128))]),_:1},8,["modelValue","type"])])}}});export{fe as default};
