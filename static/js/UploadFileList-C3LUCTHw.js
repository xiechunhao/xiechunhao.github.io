/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:17:33 
 */
import{d as i,N as o,o as d,M as u,$ as a,e as f,T as r,a4 as m,u as c,k as g}from"./vsv-element-plus-CxGOTlXz.js";const x=i({__name:"UploadFileList",setup(_){const t=ref([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),l=()=>{t.value=t.value.slice(-3)};return(b,e)=>{const n=o("el-button"),s=o("el-upload");return d(),u(s,{"file-list":c(t),"onUpdate:fileList":e[0]||(e[0]=p=>g(t)?t.value=p:null),action:"/uploadFile","on-change":l},{tip:a(()=>e[2]||(e[2]=[f("div",{class:"el-upload__tip"},"jpg/png 文件需小于500kb",-1)])),default:a(()=>[r(n,{type:"primary"},{default:a(()=>e[1]||(e[1]=[m("点击上传")])),_:1})]),_:1},8,["file-list"])}}});export{x as default};
