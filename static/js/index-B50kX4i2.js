/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{P as i}from"./index.min-DfVaEGNS.js";import{d as c,b as l,o as s}from"./vsv-element-plus-DQNbQgVr.js";const u=["id"],y=c({name:"VabPlayer",__name:"index",props:{config:{type:Object,default:()=>({id:"mse",url:""})}},emits:["player"],setup(t,{emit:r}){const o=t,e=ref(null),a=r,n=()=>{o.config.url&&o.config.url!==""&&(e.value=new i(o.config),a("player",e.value))};return watch(o.config,()=>{n()},{deep:!0}),onMounted(()=>{n()}),onBeforeMount(()=>{e.value&&typeof e.value.destroy=="function"&&e.value.destroy()}),(f,d)=>(s(),l("div",{id:t.config.id},null,8,u))}});export{y as default};
