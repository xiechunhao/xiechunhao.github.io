/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{d as n,F as o,o as i,D as u,V as a,e as d,M as r,_ as f,u as m,K as c}from"./vsv-element-plus-CbS2IxKo.js";const j=n({__name:"UploadFileListWithThumbnail",setup(_){const t=ref([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]);return(b,e)=>{const l=o("el-button"),s=o("el-upload");return i(),u(s,{"file-list":m(t),"onUpdate:fileList":e[0]||(e[0]=p=>c(t)?t.value=p:null),action:"/uploadFile","list-type":"picture"},{tip:a(()=>e[2]||(e[2]=[d("div",{class:"el-upload__tip"},"jpg/png 文件需小于500kb",-1)])),default:a(()=>[r(l,{type:"primary"},{default:a(()=>e[1]||(e[1]=[f("点击上传")])),_:1})]),_:1},8,["file-list"])}}});export{j as default};
