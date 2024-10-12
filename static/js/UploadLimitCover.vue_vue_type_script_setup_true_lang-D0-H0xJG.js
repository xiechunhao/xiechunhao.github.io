/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 16:13:56 
 */
import{d as i,r as u,o as c,S as _,T as o,W as n,a8 as d,e as m,c5 as f,a9 as x,c1 as v}from"./vsv-element-plus-OoOmiKKG.js";const B=i({__name:"UploadLimitCover",setup(k){const l=u(),p=t=>{var a,s;(a=l.value)==null||a.clearFiles();const e=t[0];e.uid=f(),(s=l.value)==null||s.handleStart(e)},r=()=>{var t;(t=l.value)==null||t.submit()};return(t,e)=>{const a=x,s=v;return c(),_(s,{ref_key:"upload",ref:l,action:"/uploadFile","auto-upload":!1,limit:1,"on-exceed":p},{trigger:o(()=>[n(a,{type:"primary"},{default:o(()=>e[0]||(e[0]=[d("选择文件")])),_:1})]),tip:o(()=>e[2]||(e[2]=[m("div",{class:"el-upload__tip"},"限制1个文件，新文件将覆盖旧文件",-1)])),default:o(()=>[n(a,{type:"success",onClick:r},{default:o(()=>e[1]||(e[1]=[d("上传到服务器")])),_:1})]),_:1},512)}}});export{B as _};
