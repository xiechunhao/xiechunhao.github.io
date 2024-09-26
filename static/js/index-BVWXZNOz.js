/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{l as g}from"./vue-draggable-plus-DDty0LIo.js";import{g as q}from"./icon-C5xv5im0.js";import{d as D,b as c,M as n,V as t,u as r,K as v,F as a,a9 as N,o as s,_ as E,H as y,a4 as x,D as b,a6 as B,e as V}from"./vsv-element-plus-CbS2IxKo.js";import{_ as L}from"./index-BnT9uhJE.js";import"./vsv-icon-93gfr_RM.js";import"./vsv-nprogress-DzPgnd7z.js";const z={class:"card-drag-container no-transition-container"},H=D({name:"Drag",__name:"index",setup(I){const l=ref([]),C=()=>N(["#1890FF","#36CBCB","#4ECB73","#FBD437","#F2637B","#975FE5"])[0],d=async()=>{const{data:i}=await q({pageNo:1,pageSize:89});l.value=i.list.filter(o=>o.includes("-fill")).map((o,u)=>({icon:o,color:C(),order:u+1}))},w=()=>{d()};return onBeforeMount(()=>{d()}),(i,o)=>{const u=a("el-button"),F=a("vab-query-form-left-panel"),k=a("vab-query-form"),_=a("vab-icon"),m=a("vab-card"),f=a("el-col"),p=a("el-row");return s(),c("div",z,[n(k,null,{default:t(()=>[n(F,null,{default:t(()=>[n(u,{type:"warning",onClick:w},{default:t(()=>o[2]||(o[2]=[E("重置")])),_:1})]),_:1})]),_:1}),n(r(g),{modelValue:r(l),"onUpdate:modelValue":o[0]||(o[0]=e=>v(l)?l.value=e:null),animation:600,target:".el-row"},{default:t(()=>[n(p,{gutter:20},{default:t(()=>[(s(!0),c(y,null,x(r(l),e=>(s(),b(f,{key:e.icon,lg:3,md:3,sm:6,xl:3,xs:12},{default:t(()=>[n(m,{class:"icon-panel"},{default:t(()=>[n(_,{icon:e.icon,style:B({color:e.color})},null,8,["icon","style"]),o[3]||(o[3]=V("p",null,"按住拖拽",-1))]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"]),n(r(g),{modelValue:r(l),"onUpdate:modelValue":o[1]||(o[1]=e=>v(l)?l.value=e:null),animation:600,target:".el-row"},{default:t(()=>[n(p,{gutter:20},{default:t(()=>[(s(!0),c(y,null,x(r(l),e=>(s(),b(f,{key:e.icon,lg:3,md:3,sm:6,xl:3,xs:12},{default:t(()=>[n(m,{class:"icon-panel"},{default:t(()=>[n(_,{icon:e.icon,style:B({color:e.color})},null,8,["icon","style"]),o[4]||(o[4]=V("p",null,"按住拖拽",-1))]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])])}}}),j=L(H,[["__scopeId","data-v-5708dfd0"]]);export{j as default};
