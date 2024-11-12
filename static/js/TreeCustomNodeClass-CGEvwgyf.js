/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 16:06:55 
 */
import{d as n,N as o,o as s,b as i,T as d}from"./vsv-element-plus-Brnt1GMz.js";const r={class:"custom-tree-node-container"},p=n({__name:"TreeCustomNodeClass",setup(c){const l=e=>e.isPenultimate?"is-penultimate":null,t=[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",isPenultimate:!0,children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",isPenultimate:!0,children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",isPenultimate:!0,children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}];return(e,u)=>{const a=o("el-tree");return s(),i("div",r,[d(a,{data:t,"default-expand-all":"","expand-on-click-node":!1,"node-key":"id",props:{class:l},"show-checkbox":""},null,8,["props"])])}}});export{p as default};
