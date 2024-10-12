/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 15:51:39 
 */
import{t as O}from"./index-CltMZZBk.js";import{d as R,b as p,K as e,S as t,e as c,B as s,o as _,u as l,Y as f,X as i,F as D,a2 as F}from"./vsv-element-plus-CqWB58IK.js";import{_ as M}from"./index-xIgfXPDD.js";import"./vsv-icon-DZFdJ319.js";import"./vsv-nprogress-CYSXMSUQ.js";const U={class:"web-socket-container"},W={class:"list-content"},q=R({name:"WebSocket",__name:"index",setup(I){const b=ref(),o=reactive({server:"ws://127.0.0.1:7002",serverHide:"ws://*.*.*.*",sendValue:"你好！",recordList:[]}),{status:v,data:m,send:h,close:k,open:w}=useWebSocket(o.server,{autoReconnect:!1,heartbeat:!0}),L=reactive({sendValue:[{required:!0,trigger:"blur",message:"请输入内容"}]});watchEffect(()=>{if(m.value)try{const d=JSON.parse(m.value);o.recordList.push(d)}catch{o.recordList.push({res:m.value,id:Math.ceil(Math.random()*1e3),time:Date.now()})}});const r=computed(()=>v.value==="OPEN"),S=computed(()=>r.value?"success":"danger"),B=computed(()=>[...o.recordList].reverse()),C=()=>{var d;(d=b.value)==null||d.validate(async a=>{a&&(h(o.sendValue),o.sendValue="你好")})},N=()=>{r.value?k():w()};return(d,a)=>{const T=s("el-tag"),u=s("el-form-item"),g=s("el-input"),V=s("el-button"),y=s("el-form"),x=s("el-col"),E=s("el-scrollbar"),H=s("el-row");return _(),p("div",U,[e(H,{gutter:20},{default:t(()=>[e(x,{lg:12,md:24,sm:24,xl:12,xs:24},{default:t(()=>[e(y,{ref_key:"formRef",ref:b,"label-position":"top",model:l(o),rules:l(L)},{default:t(()=>[e(u,{label:"连接状态"},{default:t(()=>[e(T,{type:l(S)},{default:t(()=>[f(i(l(v)),1)]),_:1},8,["type"])]),_:1}),e(u,{label:"服务地址"},{default:t(()=>[e(g,{modelValue:l(o).serverHide,"onUpdate:modelValue":a[0]||(a[0]=n=>l(o).serverHide=n),clearable:"",disabled:""},null,8,["modelValue"])]),_:1}),e(u,{label:"内容",prop:"sendValue"},{default:t(()=>[e(g,{modelValue:l(o).sendValue,"onUpdate:modelValue":a[1]||(a[1]=n=>l(o).sendValue=n),clearable:"",disabled:!l(r),placeholder:"需要发送到服务器的内容",rows:3,type:"textarea"},null,8,["modelValue","disabled"])]),_:1}),e(u,{label:"操作"},{default:t(()=>[e(V,{type:l(r)?"danger":"primary",onClick:N},{default:t(()=>[f(i(l(r)?"关闭连接":"开启连接"),1)]),_:1},8,["type"]),e(V,{disabled:!l(r),type:"primary",onClick:C},{default:t(()=>a[2]||(a[2]=[f("发送")])),_:1},8,["disabled"])]),_:1})]),_:1},8,["model","rules"])]),_:1}),e(x,{lg:12,md:24,sm:24,xl:12,xs:24},{default:t(()=>[e(y,{"label-position":"top"},{default:t(()=>[e(u,{label:"消息记录"},{default:t(()=>[c("div",W,[e(E,{style:{height:"calc(var(--el-container-height) - var(--el-margin) * 6)"}},{default:t(()=>[c("ul",null,[(_(!0),p(D,null,F(l(B),n=>(_(),p("li",{key:n.time},[c("div",null,i(l(O)(n.time)),1),c("div",null,i(n.res),1)]))),128))])]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),a[3]||(a[3]=c("p",null,null,-1))])}}}),j=M(q,[["__scopeId","data-v-ecc1d2fd"]]);export{j as default};
