/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 16:06:55 
 */
import{d as g,N as s,o as b,b as _,T as l,$ as d,u as o,aj as j,k as p,e as v,P as h}from"./vsv-element-plus-Brnt1GMz.js";const w=["src"],V=g({__name:"UploadPhotoWall",setup(x){const t=ref([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),u=ref(""),e=ref(!1),m=i=>{u.value=i.url,e.value=!0};return(i,a)=>{const r=s("el-icon"),f=s("el-upload"),c=s("vab-dialog");return b(),_(h,null,[l(f,{"file-list":o(t),"onUpdate:fileList":a[0]||(a[0]=n=>p(t)?t.value=n:null),action:"/uploadFile","list-type":"picture-card","on-preview":m},{default:d(()=>[l(r,null,{default:d(()=>[l(o(j))]),_:1})]),_:1},8,["file-list"]),l(c,{modelValue:o(e),"onUpdate:modelValue":a[1]||(a[1]=n=>p(e)?e.value=n:null),"append-to-body":""},{default:d(()=>[v("img",{alt:"Preview Image",src:o(u)},null,8,w)]),_:1},8,["modelValue"])],64)}}});export{V as default};
