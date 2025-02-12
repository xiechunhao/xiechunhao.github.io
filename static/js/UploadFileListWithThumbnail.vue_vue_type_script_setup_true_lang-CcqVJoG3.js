/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-12 16:08:16 
 */
import{d as p,r as i,S as n,o as d,T as a,Z as r,a8 as u,a7 as f,e as m,i as c,u as _,c0 as g}from"./vsv-element-plus-B-S50adB.js";const y=p({__name:"UploadFileListWithThumbnail",setup(b){const t=i([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]);return(j,e)=>{const o=u,l=g;return d(),n(l,{"file-list":_(t),"onUpdate:fileList":e[0]||(e[0]=s=>c(t)?t.value=s:null),action:"/uploadFile","list-type":"picture"},{tip:a(()=>e[2]||(e[2]=[m("div",{class:"el-upload__tip"},"jpg/png 文件需小于500kb",-1)])),default:a(()=>[r(o,{type:"primary"},{default:a(()=>e[1]||(e[1]=[f("点击上传")])),_:1})]),_:1},8,["file-list"])}}});export{y as _};
