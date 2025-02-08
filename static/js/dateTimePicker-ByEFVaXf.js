/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{d as p,b as c,K as t,U as m,B as i,u as o,F as s,o as f}from"./vsv-element-plus-D84I6Pnf.js";const _={class:"date-time-picker-container no-background-container"},b=p({name:"DateTimePicker",__name:"dateTimePicker",setup(v){const n=ref(""),l=ref([new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)]),d=ref("");return(V,e)=>{const r=i("el-date-picker"),u=i("vab-card");return f(),c("div",_,[t(u,{title:"日期和时间点"},{default:m(()=>[t(r,{modelValue:o(n),"onUpdate:modelValue":e[0]||(e[0]=a=>s(n)?n.value=a:null),placeholder:"选择日期时间",type:"datetime"},null,8,["modelValue"])]),_:1}),t(u,{title:"日期和时间范围"},{default:m(()=>[t(r,{modelValue:o(l),"onUpdate:modelValue":e[1]||(e[1]=a=>s(l)?l.value=a:null),"end-placeholder":"结束日期","range-separator":"至","start-placeholder":"开始日期",type:"datetimerange"},null,8,["modelValue"])]),_:1}),t(u,{title:"默认的起始与结束时刻"},{default:m(()=>[t(r,{modelValue:o(d),"onUpdate:modelValue":e[2]||(e[2]=a=>s(d)?d.value=a:null),"default-time":o(l),"end-placeholder":"结束日期","start-placeholder":"开始日期",type:"datetimerange"},null,8,["modelValue","default-time"])]),_:1})])}}});export{b as default};
