/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:20:55 
 */
import{d as _,a as c,J as i,U as n,A as o,u as a,D as b,Z as m,G as y,a2 as k,o as l,z as x}from"./vsv-element-plus-CWjYVfvE.js";const C={class:"guid-container"},A=_({name:"Guide",__name:"index",setup(V){const r=ref(!0),s=ref("primary"),f=ref([{target:".vab-buy",title:"购买源码",description:"这里是购买源码"},{target:".vab-dark",title:"暗黑模式",description:"这里是暗黑模式"},{target:".vab-color-picker",title:"配色",description:"这里是配色"},{target:".ri-t-shirt-line",title:"主题配置",description:"这里是主题配置"},{target:".vab-lock i",title:"锁屏",description:"这里是锁屏"},{target:".ri-notification-2-line",title:"通知",description:"这里是通知"},{target:".ri-translate-2",title:"国际化",description:"这里是国际化"},{target:".vab-fullscreen",title:"全屏",description:"这里是全屏"},{target:".ri-refresh-line",title:"刷新",description:"这里是刷新"},{target:".vab-tabs-more-icon",title:"操作",description:"这里是操作"},{target:".vab-buy",title:"购买源码",description:"这里是购买源码"}]),p=d=>{r.value=!0,s.value=d};return onActivated(()=>{r.value=!0}),(d,t)=>{const u=o("el-button"),g=o("el-tour-step"),v=o("el-tour");return l(),c("div",C,[i(u,{type:"primary",onClick:t[0]||(t[0]=e=>p("primary"))},{default:n(()=>t[3]||(t[3]=[m("打开页面引导（主题色）")])),_:1}),i(u,{plain:"",type:"primary",onClick:t[1]||(t[1]=e=>p("default"))},{default:n(()=>t[4]||(t[4]=[m("打开页面引导（默认）")])),_:1}),i(v,{modelValue:a(r),"onUpdate:modelValue":t[2]||(t[2]=e=>b(r)?r.value=e:null),type:a(s)},{default:n(()=>[(l(!0),c(y,null,k(a(f),e=>(l(),x(g,{key:e,description:e.description,target:e.target,title:e.title},null,8,["description","target","title"]))),128))]),_:1},8,["modelValue","type"])])}}});export{A as default};
