/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:17:33 
 */
import{d as n,N as o,o as i,M as u,$ as a,e as d,T as r,a4 as f,u as m,k as c}from"./vsv-element-plus-CxGOTlXz.js";const j=n({__name:"UploadFileListWithThumbnail",setup(b){const t=ref([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]);return(g,e)=>{const l=o("el-button"),s=o("el-upload");return i(),u(s,{"file-list":m(t),"onUpdate:fileList":e[0]||(e[0]=p=>c(t)?t.value=p:null),action:"/uploadFile","list-type":"picture"},{tip:a(()=>e[2]||(e[2]=[d("div",{class:"el-upload__tip"},"jpg/png 文件需小于500kb",-1)])),default:a(()=>[r(l,{type:"primary"},{default:a(()=>e[1]||(e[1]=[f("点击上传")])),_:1})]),_:1},8,["file-list"])}}});export{j as default};
