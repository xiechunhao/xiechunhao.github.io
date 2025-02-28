/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 13:58:02 
 */
import{P as i}from"./index.min-DFX9Vzyd.js";import{d as s,r as c,w as l,B as u,a5 as f,a as d,o as p}from"./vsv-element-plus-CcCXTk6v.js";const m=["id"],B=s({name:"VabPlayer",__name:"index",props:{config:{type:Object,default:()=>({id:"mse",url:""})}},emits:["player"],setup(n,{emit:a}){const o=n,e=c(null),r=a,t=()=>{o.config.url&&o.config.url!==""&&(e.value=new i(o.config),r("player",e.value))};return l(o.config,()=>{t()},{deep:!0}),u(()=>{t()}),f(()=>{e.value&&typeof e.value.destroy=="function"&&e.value.destroy()}),(y,_)=>(p(),d("div",{id:n.config.id},null,8,m))}});export{B as _};
