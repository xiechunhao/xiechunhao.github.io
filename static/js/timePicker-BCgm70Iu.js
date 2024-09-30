/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-30 14:06:07 
 */
import{d as c,N as i,o as _,b as f,T as t,$ as u,u as a,k as m}from"./vsv-element-plus-CxGOTlXz.js";import{_ as V}from"./index-DMdRIM5p.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const k={class:"time-picker-container no-background-container"},v=c({name:"Timepicker",__name:"timePicker",setup(x){const o=ref(""),n=ref(""),r=ref("");return(b,e)=>{const d=i("el-time-select"),s=i("vab-card"),p=i("el-time-picker");return _(),f("div",k,[t(s,{title:"固定时间点"},{default:u(()=>[t(d,{modelValue:a(o),"onUpdate:modelValue":e[0]||(e[0]=l=>m(o)?o.value=l:null),end:"18:30",placeholder:"选择时间",start:"08:30",step:"00:15"},null,8,["modelValue"])]),_:1}),t(s,{title:"固定时间范围"},{default:u(()=>[t(d,{modelValue:a(n),"onUpdate:modelValue":e[1]||(e[1]=l=>m(n)?n.value=l:null),end:"18:30",placeholder:"开始时间",start:"08:30",step:"00:15",style:{"margin-right":"10px"}},null,8,["modelValue"]),t(d,{modelValue:a(r),"onUpdate:modelValue":e[2]||(e[2]=l=>m(r)?r.value=l:null),end:"18:30","min-time":a(n),placeholder:"结束时间",start:"08:30",step:"00:15"},null,8,["modelValue","min-time"])]),_:1}),t(s,{title:"任意时间点"},{default:u(()=>[t(p,{modelValue:a(o),"onUpdate:modelValue":e[3]||(e[3]=l=>m(o)?o.value=l:null),placeholder:"任意时间点"},null,8,["modelValue"])]),_:1})])}}}),B=V(v,[["__scopeId","data-v-8ad04991"]]);export{B as default};
