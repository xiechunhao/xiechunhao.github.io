/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-12 16:08:16 
 */
import{d as i,r as u,S as c,o as _,T as o,Z as n,a8 as m,a7 as d,e as f,c0 as x,c4 as v}from"./vsv-element-plus-B-S50adB.js";const B=i({__name:"UploadLimitCover",setup(k){const l=u(),p=t=>{var a,s;(a=l.value)==null||a.clearFiles();const e=t[0];e.uid=v(),(s=l.value)==null||s.handleStart(e)},r=()=>{var t;(t=l.value)==null||t.submit()};return(t,e)=>{const a=m,s=x;return _(),c(s,{ref_key:"upload",ref:l,action:"/uploadFile","auto-upload":!1,limit:1,"on-exceed":p},{trigger:o(()=>[n(a,{type:"primary"},{default:o(()=>e[0]||(e[0]=[d("选择文件")])),_:1})]),tip:o(()=>e[2]||(e[2]=[f("div",{class:"el-upload__tip"},"限制1个文件，新文件将覆盖旧文件",-1)])),default:o(()=>[n(a,{type:"success",onClick:r},{default:o(()=>e[1]||(e[1]=[d("上传到服务器")])),_:1})]),_:1},512)}}});export{B as _};
