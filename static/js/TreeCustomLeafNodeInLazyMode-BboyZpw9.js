/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{d as r,F as s,o as l,D as c}from"./vsv-element-plus-CbS2IxKo.js";const p=r({__name:"TreeCustomLeafNodeInLazyMode",setup(m){const n={label:"name",children:"zones",isLeaf:"leaf"},t=(o,e)=>{if(o.level===0)return e([{name:"region"}]);if(o.level>1)return e([]);setTimeout(()=>{e([{name:"leaf",leaf:!0},{name:"zone"}])},500)};return(o,e)=>{const a=s("el-tree");return l(),c(a,{lazy:"",load:t,props:n,"show-checkbox":""})}}});export{p as default};
