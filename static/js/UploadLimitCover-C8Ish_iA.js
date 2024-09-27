/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:46:00 
 */
import{d as i,N as n,o as c,M as _,$ as a,T as d,a4 as u,e as m,bu as f}from"./vsv-element-plus-CxGOTlXz.js";const b=i({__name:"UploadLimitCover",setup(v){const l=ref(),p=t=>{var o,s;(o=l.value)==null||o.clearFiles();const e=t[0];e.uid=f(),(s=l.value)==null||s.handleStart(e)},r=()=>{var t;(t=l.value)==null||t.submit()};return(t,e)=>{const o=n("el-button"),s=n("el-upload");return c(),_(s,{ref_key:"upload",ref:l,action:"/uploadFile","auto-upload":!1,limit:1,"on-exceed":p},{trigger:a(()=>[d(o,{type:"primary"},{default:a(()=>e[0]||(e[0]=[u("选择文件")])),_:1})]),tip:a(()=>e[2]||(e[2]=[m("div",{class:"el-upload__tip"},"限制1个文件，新文件将覆盖旧文件",-1)])),default:a(()=>[d(o,{type:"success",onClick:r},{default:a(()=>e[1]||(e[1]=[u("上传到服务器")])),_:1})]),_:1},512)}}});export{b as default};
