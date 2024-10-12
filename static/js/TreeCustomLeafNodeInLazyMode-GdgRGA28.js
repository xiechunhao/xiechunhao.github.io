/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 15:51:39 
 */
import{d as r,B as s,o as l,A as c}from"./vsv-element-plus-CqWB58IK.js";const p=r({__name:"TreeCustomLeafNodeInLazyMode",setup(m){const n={label:"name",children:"zones",isLeaf:"leaf"},t=(o,e)=>{if(o.level===0)return e([{name:"region"}]);if(o.level>1)return e([]);setTimeout(()=>{e([{name:"leaf",leaf:!0},{name:"zone"}])},500)};return(o,e)=>{const a=s("el-tree");return l(),c(a,{lazy:"",load:t,props:n,"show-checkbox":""})}}});export{p as default};
