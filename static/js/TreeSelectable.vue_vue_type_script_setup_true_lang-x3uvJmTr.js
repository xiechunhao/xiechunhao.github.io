/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:42:24 
 */
import{d as s,o as c,S as m,bv as i}from"./vsv-element-plus-DDEqdpLt.js";const p=s({__name:"TreeSelectable",setup(_){let n=1;const l={label:"name",children:"zones"},r=(a,t)=>{if(a.level===0)return t([{name:"Root1"},{name:"Root2"}]);if(a.level>3)return t([]);let e=!1;a.data.name==="region1"?e=!0:a.data.name==="region2"?e=!1:e=Math.random()>.5,setTimeout(()=>{let o;e?o=[{name:`zone${n++}`},{name:`zone${n++}`}]:o=[],t(o)},500)};return(a,t)=>{const e=i;return c(),m(e,{lazy:"",load:r,props:l,"show-checkbox":""})}}});export{p as _};
