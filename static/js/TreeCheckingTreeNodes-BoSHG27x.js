/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{d as k,F as b,o as C,b as y,M as t,u as h,ag as m,e as _,V as o,_ as d,H as g}from"./vsv-element-plus-CbS2IxKo.js";import{_ as N}from"./index-BnT9uhJE.js";import"./vsv-icon-93gfr_RM.js";import"./vsv-nprogress-DzPgnd7z.js";const v={style:{"margin-top":"20px"}},x=k({__name:"TreeCheckingTreeNodes",setup(T){const s=ref(),r=()=>{var e;$baseMessage((e=s.value)==null?void 0:e.getCheckedNodes(!1,!1),"success","hey")},n=()=>{var e;$baseMessage((e=s.value)==null?void 0:e.getCheckedKeys(!1),"success","hey")},i=()=>{var e;(e=s.value)==null||e.setCheckedNodes([{id:5,label:"二级 2-1"},{id:9,label:"三级 1-1-1"}],!1)},c=()=>{var e;(e=s.value)==null||e.setCheckedKeys([3],!1)},p=()=>{var e;(e=s.value)==null||e.setCheckedKeys([],!1)},f={children:"children",label:"label"},u=[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}];return(e,l)=>{const a=b("el-button");return C(),y(g,null,[t(h(m),{ref_key:"treeRef",ref:s,data:u,"default-expand-all":"","highlight-current":"","node-key":"id",props:f,"show-checkbox":""},null,512),_("div",v,[t(a,{type:"primary",onClick:r},{default:o(()=>l[0]||(l[0]=[d("按节点获取")])),_:1}),t(a,{type:"primary",onClick:n},{default:o(()=>l[1]||(l[1]=[d("按键获取")])),_:1}),t(a,{type:"primary",onClick:i},{default:o(()=>l[2]||(l[2]=[d("按节点设置")])),_:1}),t(a,{type:"primary",onClick:c},{default:o(()=>l[3]||(l[3]=[d("按键设置")])),_:1}),t(a,{type:"warning",onClick:p},{default:o(()=>l[4]||(l[4]=[d("重置")])),_:1})])],64)}}}),M=N(x,[["__scopeId","data-v-8a2a85fe"]]);export{M as default};
