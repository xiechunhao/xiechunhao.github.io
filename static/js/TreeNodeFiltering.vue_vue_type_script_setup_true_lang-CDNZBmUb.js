/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:33:27 
 */
import{d as f,r as n,w as p,b,o as m,a2 as _,Z as r,aL as h,u as d,i as x,bu as V}from"./vsv-element-plus-B-S50adB.js";const E=f({__name:"TreeNodeFiltering",setup(g){const a=n(""),t=n(),o={children:"children",label:"label"};p(a,l=>{var e;(e=t.value)==null||e.filter(l)});const i=(l,e)=>l?e.label.includes(l):!0,s=[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}];return(l,e)=>{const u=h;return m(),b(_,null,[r(u,{modelValue:d(a),"onUpdate:modelValue":e[0]||(e[0]=c=>x(a)?a.value=c:null),placeholder:"请输入查询条件",style:{"margin-bottom":"10px"}},null,8,["modelValue"]),r(d(V),{ref_key:"treeRef",ref:t,data:s,"default-expand-all":"","filter-node-method":i,props:o},null,512)],64)}}});export{E as _};
