/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-15 13:32:11 
 */
import{d as p,r as d,o as u,S as f,T as o,e as m,W as c,a8 as _,u as g,h as x,K as B,I as b,a9 as E,c1 as v}from"./vsv-element-plus-OoOmiKKG.js";const N=p({__name:"UploadBasic",setup($){const a=d([]),s=(t,e)=>{B.warning(`限制为3个文件，您选择了${t.length}个文件，加起来总共$${t.length+e.length}个文件`)},n=t=>b.confirm(`是否取消上传 ${t.name} ？`,{draggable:!0}).then(()=>!0,()=>!1);return(t,e)=>{const l=E,r=v;return u(),f(r,{"file-list":g(a),"onUpdate:fileList":e[0]||(e[0]=i=>x(a)?a.value=i:null),action:"/uploadFile","before-remove":n,limit:3,multiple:"","on-exceed":s},{tip:o(()=>e[2]||(e[2]=[m("div",{class:"el-upload__tip"},"jpg/png 文件需小于500kb",-1)])),default:o(()=>[c(l,{type:"primary"},{default:o(()=>e[1]||(e[1]=[_("点击上传")])),_:1})]),_:1},8,["file-list"])}}});export{N as _};
