/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:47:29 
 */
import{d,S as t,o as c,bu as b}from"./vsv-element-plus-B-S50adB.js";const _=d({__name:"TreeDraggable",setup(i){const r=(e,a,l)=>a.data.label==="二级 3-1"?l!=="inner":!0,n=e=>!e.data.label.includes("三级 3-1-1"),o=[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}];return(e,a)=>{const l=b;return c(),t(l,{"allow-drag":n,"allow-drop":r,data:o,"default-expand-all":"",draggable:"","node-key":"id"})}}});export{_};
