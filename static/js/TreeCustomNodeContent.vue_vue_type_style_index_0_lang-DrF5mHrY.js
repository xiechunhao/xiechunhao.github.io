/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-15 13:32:11 
 */
import{d as _,r as f,o as h,b as k,e as t,W as r,u as p,T as m,a1 as x,bv as C}from"./vsv-element-plus-OoOmiKKG.js";const v={class:"custom-tree-container"},y={class:"custom-tree-node"},w=["onClick"],g=["onClick"],T=_({__name:"TreeCustomNodeContent",setup(B){let u=1e3;const i=e=>{const n={id:u++,label:"test",children:[]};e.children||(e.children=[]),e.children.push(n),a.value=[...a.value]},c=(e,n)=>{const l=e.parent,o=l.data.children||l.data,s=o.findIndex(d=>d.id===n.id);o.splice(s,1),a.value=[...a.value]},b=(e,{node:n,data:l})=>e("span",{class:"custom-tree-node"},e("span",null,n.label),e("span",null,e("a",{onClick:()=>i(l)},"添加 "),e("a",{style:"margin-left: 8px",onClick:()=>c(n,l)},"删除"))),a=f([{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}]);return(e,n)=>{const l=C;return h(),k("div",v,[n[0]||(n[0]=t("p",null,"使用 render-content",-1)),r(l,{data:p(a),"default-expand-all":"","expand-on-click-node":!1,"node-key":"id","render-content":b,"show-checkbox":""},null,8,["data"]),n[1]||(n[1]=t("p",null,"使用 scoped slot",-1)),r(l,{data:p(a),"default-expand-all":"","expand-on-click-node":!1,"node-key":"id","show-checkbox":""},{default:m(({node:o,data:s})=>[t("span",y,[t("span",null,x(o.label),1),t("span",null,[t("a",{onClick:d=>i(s)},"添加",8,w),t("a",{style:{"margin-left":"8px"},onClick:d=>c(o,s)},"删除",8,g)])])]),_:1},8,["data"])])}}});export{T as _};
