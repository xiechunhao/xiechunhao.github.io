/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:33:27 
 */
import{f as n,_ as b}from"./index-Ba9EqH5M.js";import{d as y,r as m,b as C,o as _,a2 as h,Z as t,e as g,u as x,bu as N,a8 as v,T as d,a7 as o}from"./vsv-element-plus-B-S50adB.js";import"./vsv-icon-BcEnJ7dJ.js";import"./vsv-nprogress-Bmiy9T8n.js";const K={style:{"margin-top":"20px"}},T=y({__name:"TreeCheckingTreeNodes",setup(B){const s=m(),r=()=>{var e;n((e=s.value)==null?void 0:e.getCheckedNodes(!1,!1),"success","hey")},i=()=>{var e;n((e=s.value)==null?void 0:e.getCheckedKeys(!1),"success","hey")},c=()=>{var e;(e=s.value)==null||e.setCheckedNodes([{id:5,label:"二级 2-1"},{id:9,label:"三级 1-1-1"}],!1)},p=()=>{var e;(e=s.value)==null||e.setCheckedKeys([3],!1)},u=()=>{var e;(e=s.value)==null||e.setCheckedKeys([],!1)},f={children:"children",label:"label"},k=[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}];return(e,l)=>{const a=v;return _(),C(h,null,[t(x(N),{ref_key:"treeRef",ref:s,data:k,"default-expand-all":"","highlight-current":"","node-key":"id",props:f,"show-checkbox":""},null,512),g("div",K,[t(a,{type:"primary",onClick:r},{default:d(()=>l[0]||(l[0]=[o("按节点获取")])),_:1}),t(a,{type:"primary",onClick:i},{default:d(()=>l[1]||(l[1]=[o("按键获取")])),_:1}),t(a,{type:"primary",onClick:c},{default:d(()=>l[2]||(l[2]=[o("按节点设置")])),_:1}),t(a,{type:"primary",onClick:p},{default:d(()=>l[3]||(l[3]=[o("按键设置")])),_:1}),t(a,{type:"warning",onClick:u},{default:d(()=>l[4]||(l[4]=[o("重置")])),_:1})])],64)}}}),F=b(T,[["__scopeId","data-v-8a2a85fe"]]);export{F as default};
