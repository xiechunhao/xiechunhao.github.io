/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:46:00 
 */
import{d as u,N as n,o as d,M as f,$ as a,e as m,T as c,a4 as _,u as g,k as x,B as b,E as B}from"./vsv-element-plus-CxGOTlXz.js";const k=u({__name:"UploadBasic",setup(v){const o=ref([]),l=(t,e)=>{b.warning(`限制为3个文件，您选择了${t.length}个文件，加起来总共$${t.length+e.length}个文件`)},s=t=>B.confirm(`是否取消上传 ${t.name} ？`,{draggable:!0}).then(()=>!0,()=>!1);return(t,e)=>{const r=n("el-button"),i=n("el-upload");return d(),f(i,{"file-list":g(o),"onUpdate:fileList":e[0]||(e[0]=p=>x(o)?o.value=p:null),action:"/uploadFile","before-remove":s,limit:3,multiple:"","on-exceed":l},{tip:a(()=>e[2]||(e[2]=[m("div",{class:"el-upload__tip"},"jpg/png 文件需小于500kb",-1)])),default:a(()=>[c(r,{type:"primary"},{default:a(()=>e[1]||(e[1]=[_("点击上传")])),_:1})]),_:1},8,["file-list"])}}});export{k as default};
