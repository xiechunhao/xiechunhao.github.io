/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{d as s,A as c,B as m,o as i}from"./vsv-element-plus-D84I6Pnf.js";const _=s({__name:"TreeSelectable",setup(f){let n=1;const l={label:"name",children:"zones"},r=(a,t)=>{if(a.level===0)return t([{name:"Root1"},{name:"Root2"}]);if(a.level>3)return t([]);let e=!1;a.data.name==="region1"?e=!0:a.data.name==="region2"?e=!1:e=Math.random()>.5,setTimeout(()=>{let o;e?o=[{name:`zone${n++}`},{name:`zone${n++}`}]:o=[],t(o)},500)};return(a,t)=>{const e=m("el-tree");return i(),c(e,{lazy:"",load:r,props:l,"show-checkbox":""})}}});export{_ as default};
