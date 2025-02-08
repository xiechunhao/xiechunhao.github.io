/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:47:29 
 */
import{d as p,r as d,S as u,o as f,T as o,Z as m,a8 as c,a7 as _,e as g,i as x,u as B,c0 as b,J as E,H as v}from"./vsv-element-plus-B-S50adB.js";const N=p({__name:"UploadBasic",setup($){const a=d([]),s=(t,e)=>{E.warning(`限制为3个文件，您选择了${t.length}个文件，加起来总共$${t.length+e.length}个文件`)},n=t=>v.confirm(`是否取消上传 ${t.name} ？`,{draggable:!0}).then(()=>!0,()=>!1);return(t,e)=>{const l=c,r=b;return f(),u(r,{"file-list":B(a),"onUpdate:fileList":e[0]||(e[0]=i=>x(a)?a.value=i:null),action:"/uploadFile","before-remove":n,limit:3,multiple:"","on-exceed":s},{tip:o(()=>e[2]||(e[2]=[g("div",{class:"el-upload__tip"},"jpg/png 文件需小于500kb",-1)])),default:o(()=>[m(l,{type:"primary"},{default:o(()=>e[1]||(e[1]=[_("点击上传")])),_:1})]),_:1},8,["file-list"])}}});export{N as _};
