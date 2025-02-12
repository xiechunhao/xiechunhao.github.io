/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-12 09:55:11 
 */
import{aw as H,ax as I,_ as O}from"./index-I0Q3W04Q.js";import{d as D,r as G,h,G as M,a as m,b as p,o as _,Z as e,e as u,T as t,b6 as U,ao as W,u as a,ap as q,aG as J,a7 as f,Y as c,aL as P,a8 as Y,av as Z,a2 as j,ai as z,b7 as A}from"./vsv-element-plus-B-S50adB.js";import"./vsv-icon-BcEnJ7dJ.js";import"./vsv-nprogress-Bmiy9T8n.js";const K={class:"web-socket-container"},Q={class:"list-content"},X=D({name:"WebSocket",__name:"index",setup($){const b=G(),l=h({server:"ws://127.0.0.1:7002",serverHide:"ws://*.*.*.*",sendValue:"你好！",recordList:[]}),{status:v,data:i,send:E,close:w,open:k}=H(l.server,{autoReconnect:!1,heartbeat:!0}),L=h({sendValue:[{required:!0,trigger:"blur",message:"请输入内容"}]});M(()=>{if(i.value)try{const r=JSON.parse(i.value);l.recordList.push(r)}catch{l.recordList.push({res:i.value,id:Math.ceil(Math.random()*1e3),time:Date.now()})}});const n=m(()=>v.value==="OPEN"),S=m(()=>n.value?"success":"danger"),T=m(()=>[...l.recordList].reverse()),B=()=>{var r;(r=b.value)==null||r.validate(async s=>{s&&(E(l.sendValue),l.sendValue="你好")})},C=()=>{n.value?w():k()};return(r,s)=>{const N=J,d=q,g=P,V=Y,y=W,x=U,R=Z,F=A;return _(),p("div",K,[e(F,{gutter:20},{default:t(()=>[e(x,{lg:12,md:24,sm:24,xl:12,xs:24},{default:t(()=>[e(y,{ref_key:"formRef",ref:b,"label-position":"top",model:a(l),rules:a(L)},{default:t(()=>[e(d,{label:"连接状态"},{default:t(()=>[e(N,{type:a(S)},{default:t(()=>[f(c(a(v)),1)]),_:1},8,["type"])]),_:1}),e(d,{label:"服务地址"},{default:t(()=>[e(g,{modelValue:a(l).serverHide,"onUpdate:modelValue":s[0]||(s[0]=o=>a(l).serverHide=o),clearable:"",disabled:""},null,8,["modelValue"])]),_:1}),e(d,{label:"内容",prop:"sendValue"},{default:t(()=>[e(g,{modelValue:a(l).sendValue,"onUpdate:modelValue":s[1]||(s[1]=o=>a(l).sendValue=o),clearable:"",disabled:!a(n),placeholder:"需要发送到服务器的内容",rows:3,type:"textarea"},null,8,["modelValue","disabled"])]),_:1}),e(d,{label:"操作"},{default:t(()=>[e(V,{type:a(n)?"danger":"primary",onClick:C},{default:t(()=>[f(c(a(n)?"关闭连接":"开启连接"),1)]),_:1},8,["type"]),e(V,{disabled:!a(n),type:"primary",onClick:B},{default:t(()=>s[2]||(s[2]=[f("发送")])),_:1},8,["disabled"])]),_:1})]),_:1},8,["model","rules"])]),_:1}),e(x,{lg:12,md:24,sm:24,xl:12,xs:24},{default:t(()=>[e(y,{"label-position":"top"},{default:t(()=>[e(d,{label:"消息记录"},{default:t(()=>[u("div",Q,[e(R,{style:{height:"calc(var(--el-container-height) - var(--el-margin) * 6)"}},{default:t(()=>[u("ul",null,[(_(!0),p(j,null,z(a(T),o=>(_(),p("li",{key:o.time},[u("div",null,c(a(I)(o.time)),1),u("div",null,c(o.res),1)]))),128))])]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),s[3]||(s[3]=u("p",null,null,-1))])}}}),se=O(X,[["__scopeId","data-v-ecc1d2fd"]]);export{se as default};
