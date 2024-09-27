/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:46:00 
 */
import{P as i}from"./index.min-BGEJYna3.js";import{d as c,o as l,b as s}from"./vsv-element-plus-CxGOTlXz.js";const u=["id"],y=c({name:"VabPlayer",__name:"index",props:{config:{type:Object,default:()=>({id:"mse",url:""})}},emits:["player"],setup(t,{emit:r}){const o=t,e=ref(null),a=r,n=()=>{o.config.url&&o.config.url!==""&&(e.value=new i(o.config),a("player",e.value))};return watch(o.config,()=>{n()},{deep:!0}),onMounted(()=>{n()}),onBeforeMount(()=>{e.value&&typeof e.value.destroy=="function"&&e.value.destroy()}),(f,d)=>(l(),s("div",{id:t.config.id},null,8,u))}});export{y as default};
