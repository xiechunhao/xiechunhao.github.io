/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{d as s,F as c,o as m,D as i}from"./vsv-element-plus-CbS2IxKo.js";const _=s({__name:"TreeSelectable",setup(f){let n=1;const l={label:"name",children:"zones"},r=(a,t)=>{if(a.level===0)return t([{name:"Root1"},{name:"Root2"}]);if(a.level>3)return t([]);let e=!1;a.data.name==="region1"?e=!0:a.data.name==="region2"?e=!1:e=Math.random()>.5,setTimeout(()=>{let o;e?o=[{name:`zone${n++}`},{name:`zone${n++}`}]:o=[],t(o)},500)};return(a,t)=>{const e=c("el-tree");return m(),i(e,{lazy:"",load:r,props:l,"show-checkbox":""})}}});export{_ as default};
