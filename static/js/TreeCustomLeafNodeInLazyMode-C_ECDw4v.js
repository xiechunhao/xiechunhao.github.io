/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{d as r,z as s,A as l,o as c}from"./vsv-element-plus-CWjYVfvE.js";const p=r({__name:"TreeCustomLeafNodeInLazyMode",setup(m){const n={label:"name",children:"zones",isLeaf:"leaf"},t=(o,e)=>{if(o.level===0)return e([{name:"region"}]);if(o.level>1)return e([]);setTimeout(()=>{e([{name:"leaf",leaf:!0},{name:"zone"}])},500)};return(o,e)=>{const a=l("el-tree");return c(),s(a,{lazy:"",load:t,props:n,"show-checkbox":""})}}});export{p as default};
