/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{d,z as i,U as o,A as s,o as _,J as p,Z as n,b as f}from"./vsv-element-plus-CWjYVfvE.js";const b=d({__name:"UploadManual",setup(m){const a=ref(),u=()=>{var t;(t=a.value)==null||t.submit()};return(t,e)=>{const l=s("el-button"),r=s("el-upload");return _(),i(r,{ref_key:"uploadRef",ref:a,action:"/uploadFile","auto-upload":!1},{trigger:o(()=>[p(l,{type:"primary"},{default:o(()=>e[0]||(e[0]=[n("选择文件")])),_:1})]),tip:o(()=>e[2]||(e[2]=[f("div",{class:"el-upload__tip"},"jpg/png 文件需小于500kb",-1)])),default:o(()=>[p(l,{type:"success",onClick:u},{default:o(()=>e[1]||(e[1]=[n("上传到服务器")])),_:1})]),_:1},512)}}});export{b as default};
