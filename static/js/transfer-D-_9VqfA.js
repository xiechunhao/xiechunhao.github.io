/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{d as g,b as x,M as s,V as l,F as m,o as D,_ as i,u as n,K as c,e as p,Z as b,n as T}from"./vsv-element-plus-CbS2IxKo.js";import{_ as L}from"./index-BnT9uhJE.js";import"./vsv-icon-93gfr_RM.js";import"./vsv-nprogress-DzPgnd7z.js";const M={class:"transfer-container"},$=g({name:"Transfer",__name:"transfer",setup(w){const k=()=>{const t=[];for(let e=1;e<=15;e++)t.push({key:e,label:`Option ${e}`,disabled:e%4===0});return t},C=ref(k()),d=ref([]),_=()=>{const t=[],e=["California","Illinois","Maryland","Texas","Florida","Colorado","Connecticut "],o=["CA","IL","MD","TX","FL","CO","CT"];return e.forEach((r,a)=>{t.push({label:r,key:a,initial:o[a]})}),t},v=ref(_()),u=ref([]),V=(t,e)=>e.initial.toLowerCase().includes(t.toLowerCase()),y=()=>[{key:1,label:"曲丽丽",disabled:!1},{key:2,label:"付小小",disabled:!1},{key:3,label:"林东东",disabled:!1},{key:4,label:"周星星",disabled:!1},{key:5,label:"朱偏右",disabled:!0}],h=ref(y()),f=ref([1]);return(t,e)=>{const o=m("el-transfer"),r=m("vab-card");return D(),x("div",M,[s(r,null,{header:l(()=>e[3]||(e[3]=[i("自定义")])),default:l(()=>[s(o,{modelValue:n(f),"onUpdate:modelValue":e[0]||(e[0]=a=>c(f)?f.value=a:null),class:"custom-transfer",data:n(h),filterable:"",format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},"left-default-checked":[2,3],"right-default-checked":[1],titles:["左列表","右列表"]},{default:l(({option:a})=>[p("span",{class:T(["transfer-avatar","transfer-avatar-"+a.key])},b(a.label.slice(0,1)),3),p("span",null,b(a.label),1)]),_:1},8,["modelValue","data"])]),_:1}),s(r,null,{header:l(()=>e[4]||(e[4]=[i("基础用法")])),default:l(()=>[s(o,{modelValue:n(d),"onUpdate:modelValue":e[1]||(e[1]=a=>c(d)?d.value=a:null),data:n(C)},null,8,["modelValue","data"])]),_:1}),s(r,null,{header:l(()=>e[5]||(e[5]=[i("可搜索过滤")])),default:l(()=>[s(o,{modelValue:n(u),"onUpdate:modelValue":e[2]||(e[2]=a=>c(u)?u.value=a:null),data:n(v),"filter-method":V,filterable:""},null,8,["modelValue","data"])]),_:1})])}}}),U=L($,[["__scopeId","data-v-7db0fc09"]]);export{U as default};
