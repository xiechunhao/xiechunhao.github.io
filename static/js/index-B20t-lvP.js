/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-30 14:06:07 
 */
import{d as p,N as d,o as f,b as _,e as V,T as a,u as l,$ as n}from"./vsv-element-plus-CxGOTlXz.js";import{_ as x}from"./index-DMdRIM5p.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const c={class:"count-container"},b={class:"count-text"},v=p({name:"Count",__name:"index",setup(U){const e=reactive({startValue:0,endValue:999,decimals:0,prefix:"",suffix:"",separator:",",duration:5e3});return(C,o)=>{const s=d("vab-count"),m=d("el-input-number"),u=d("el-form-item"),r=d("el-input"),i=d("el-form");return f(),_("div",c,[V("div",b,[a(s,{decimals:l(e).decimals,duration:l(e).duration,"end-value":l(e).endValue,prefix:l(e).prefix,separator:l(e).separator,"start-value":l(e).startValue,suffix:l(e).suffix},null,8,["decimals","duration","end-value","prefix","separator","start-value","suffix"])]),a(i,{inline:"","label-width":"80px",model:l(e)},{default:n(()=>[a(u,{label:"起始值"},{default:n(()=>[a(m,{modelValue:l(e).startValue,"onUpdate:modelValue":o[0]||(o[0]=t=>l(e).startValue=t),min:0},null,8,["modelValue"])]),_:1}),a(u,{label:"最终值"},{default:n(()=>[a(m,{modelValue:l(e).endValue,"onUpdate:modelValue":o[1]||(o[1]=t=>l(e).endValue=t),min:0},null,8,["modelValue"])]),_:1}),a(u,{label:"持续时间"},{default:n(()=>[a(m,{modelValue:l(e).duration,"onUpdate:modelValue":o[2]||(o[2]=t=>l(e).duration=t),min:0},null,8,["modelValue"])]),_:1}),a(u,{label:"小数位数"},{default:n(()=>[a(m,{modelValue:l(e).decimals,"onUpdate:modelValue":o[3]||(o[3]=t=>l(e).decimals=t),max:2,min:0},null,8,["modelValue"])]),_:1}),a(u,{label:"前缀"},{default:n(()=>[a(r,{modelValue:l(e).prefix,"onUpdate:modelValue":o[4]||(o[4]=t=>l(e).prefix=t),clearable:""},null,8,["modelValue"])]),_:1}),a(u,{label:"后缀"},{default:n(()=>[a(r,{modelValue:l(e).suffix,"onUpdate:modelValue":o[5]||(o[5]=t=>l(e).suffix=t),clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])}}}),E=x(v,[["__scopeId","data-v-82e876c4"]]);export{E as default};
