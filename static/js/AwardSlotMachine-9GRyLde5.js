/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:42:24 
 */
import{H as i,a as u}from"./award_1-lBxv1HXL.js";import{a as f}from"./award_2-BVQTkk6Y.js";import{d as l,r as m,o as _,b as g,W as o,u as b,T as x,a8 as h,a3 as k,a9 as w}from"./vsv-element-plus-DDEqdpLt.js";import{_ as R}from"./index-CaYPvDrq.js";import"./vsv-icon-PU6rYWNa.js";import"./vsv-nprogress-CAgsOcyS.js";const C=l({__name:"AwardSlotMachine",setup(M){const t=[{padding:"15px",background:"#ffc27a",borderRadius:28},{padding:"25px",background:"#ff4a4c",borderRadius:23},{padding:"15px",background:"#ff625b",borderRadius:20}],r=[{background:"#fefaea",borderRadius:"10px",imgs:[{width:"40%",top:"20%",src:u}]},{background:"#fefaea",borderRadius:"10px",imgs:[{width:"40%",top:"30%",src:f}]}],n=[{speed:1},{speed:4},{speed:5}],s={rowSpacing:"10px",colSpacing:"10px"},e=m(null),c=()=>{e.value.play(),setTimeout(()=>{const a=[[9,9,6],[0,0,7],[6,6,6],[8,8,8]][Math.trunc(Math.random()*4)];e.value.stop(a)},3e3)};return(d,a)=>{const p=w;return _(),g(k,null,[o(b(i),{ref_key:"awardSlotMachineRef",ref:e,blocks:t,"default-config":s,height:"300px",prizes:r,slots:n,width:"300px"},null,512),o(p,{class:"machine-button",onClick:c},{default:x(()=>a[0]||(a[0]=[h("点击抽奖")])),_:1})],64)}}}),N=R(C,[["__scopeId","data-v-97cfc04a"]]);export{N as default};
