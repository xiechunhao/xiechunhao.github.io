/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{P as i}from"./index.min-CqY9RVoA.js";import{d as c,a as l,o as s}from"./vsv-element-plus-CWjYVfvE.js";const u=["id"],y=c({name:"VabPlayer",__name:"index",props:{config:{type:Object,default:()=>({id:"mse",url:""})}},emits:["player"],setup(t,{emit:a}){const o=t,e=ref(null),r=a,n=()=>{o.config.url&&o.config.url!==""&&(e.value=new i(o.config),r("player",e.value))};return watch(o.config,()=>{n()},{deep:!0}),onMounted(()=>{n()}),onBeforeMount(()=>{e.value&&typeof e.value.destroy=="function"&&e.value.destroy()}),(f,d)=>(s(),l("div",{id:t.config.id},null,8,u))}});export{y as default};
