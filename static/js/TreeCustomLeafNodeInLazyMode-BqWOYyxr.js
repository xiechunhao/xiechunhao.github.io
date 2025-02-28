/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{d as r,C as s,D as l,o as c}from"./vsv-element-plus-DQNbQgVr.js";const p=r({__name:"TreeCustomLeafNodeInLazyMode",setup(m){const n={label:"name",children:"zones",isLeaf:"leaf"},t=(o,e)=>{if(o.level===0)return e([{name:"region"}]);if(o.level>1)return e([]);setTimeout(()=>{e([{name:"leaf",leaf:!0},{name:"zone"}])},500)};return(o,e)=>{const a=l("el-tree");return c(),s(a,{lazy:"",load:t,props:n,"show-checkbox":""})}}});export{p as default};
