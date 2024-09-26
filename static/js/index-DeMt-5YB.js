/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 15:53:45 
 */
import{aw as R,ax as F,_ as I}from"./index-CQIU_Sxf.js";import{d as W,r as q,p as E,H as D,a as m,o as p,b as _,W as e,T as t,u as a,a8 as f,a1 as c,e as u,a3 as M,aj as U,aH as j,aq as J,aO as P,a9 as z,au as A,b7 as G,av as K,b8 as Q}from"./vsv-element-plus-DDEqdpLt.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const X={class:"web-socket-container"},Y={class:"list-content"},Z=W({name:"WebSocket",__name:"index",setup($){const b=q(),l=E({server:"ws://127.0.0.1:7002",serverHide:"ws://*.*.*.*",sendValue:"你好！",recordList:[]}),{status:v,data:i,send:h,close:w,open:k}=R(l.server,{autoReconnect:!1,heartbeat:!0}),L=E({sendValue:[{required:!0,trigger:"blur",message:"请输入内容"}]});D(()=>{if(i.value)try{const r=JSON.parse(i.value);l.recordList.push(r)}catch{l.recordList.push({res:i.value,id:Math.ceil(Math.random()*1e3),time:Date.now()})}});const n=m(()=>v.value==="OPEN"),S=m(()=>n.value?"success":"danger"),T=m(()=>[...l.recordList].reverse()),B=()=>{var r;(r=b.value)==null||r.validate(async s=>{s&&(h(l.sendValue),l.sendValue="你好")})},C=()=>{n.value?w():k()};return(r,s)=>{const H=j,d=J,g=P,V=z,y=A,x=G,N=K,O=Q;return p(),_("div",X,[e(O,{gutter:20},{default:t(()=>[e(x,{lg:12,md:24,sm:24,xl:12,xs:24},{default:t(()=>[e(y,{ref_key:"formRef",ref:b,"label-position":"top",model:a(l),rules:a(L)},{default:t(()=>[e(d,{label:"连接状态"},{default:t(()=>[e(H,{type:a(S)},{default:t(()=>[f(c(a(v)),1)]),_:1},8,["type"])]),_:1}),e(d,{label:"服务地址"},{default:t(()=>[e(g,{modelValue:a(l).serverHide,"onUpdate:modelValue":s[0]||(s[0]=o=>a(l).serverHide=o),clearable:"",disabled:""},null,8,["modelValue"])]),_:1}),e(d,{label:"内容",prop:"sendValue"},{default:t(()=>[e(g,{modelValue:a(l).sendValue,"onUpdate:modelValue":s[1]||(s[1]=o=>a(l).sendValue=o),clearable:"",disabled:!a(n),placeholder:"需要发送到服务器的内容",rows:3,type:"textarea"},null,8,["modelValue","disabled"])]),_:1}),e(d,{label:"操作"},{default:t(()=>[e(V,{type:a(n)?"danger":"primary",onClick:C},{default:t(()=>[f(c(a(n)?"关闭连接":"开启连接"),1)]),_:1},8,["type"]),e(V,{disabled:!a(n),type:"primary",onClick:B},{default:t(()=>s[2]||(s[2]=[f("发送")])),_:1},8,["disabled"])]),_:1})]),_:1},8,["model","rules"])]),_:1}),e(x,{lg:12,md:24,sm:24,xl:12,xs:24},{default:t(()=>[e(y,{"label-position":"top"},{default:t(()=>[e(d,{label:"消息记录"},{default:t(()=>[u("div",Y,[e(N,{style:{height:"calc(var(--el-container-height) - var(--el-margin) * 6)"}},{default:t(()=>[u("ul",null,[(p(!0),_(M,null,U(a(T),o=>(p(),_("li",{key:o.time},[u("div",null,c(a(F)(o.time)),1),u("div",null,c(o.res),1)]))),128))])]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),s[3]||(s[3]=u("p",null,null,-1))])}}}),se=I(Z,[["__scopeId","data-v-ecc1d2fd"]]);export{se as default};
