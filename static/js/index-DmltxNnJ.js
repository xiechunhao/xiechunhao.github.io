/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{d as u,b as p,Q as s,C as n,V as c,D as m,o as t,_ as r,X as a}from"./vsv-element-plus-DQNbQgVr.js";const b={class:"throttle-debounce-container"},y=u({name:"ThrottleDebounce",__name:"index",setup(h){const i=()=>{$baseMessage("节流函数，2秒后允许再次触发","success","hey")},l=()=>{$baseMessage("防抖函数，每隔1秒允许触发一次","success","hey")};return(v,e)=>{const o=m("el-button"),_=a("throttle"),d=a("debounce");return t(),p("div",b,[s((t(),n(o,{type:"primary"},{default:c(()=>e[0]||(e[0]=[r("节流函数")])),_:1})),[[_,i]]),s((t(),n(o,{type:"primary"},{default:c(()=>e[1]||(e[1]=[r("防抖函数")])),_:1})),[[d,l]])])}}});export{y as default};
