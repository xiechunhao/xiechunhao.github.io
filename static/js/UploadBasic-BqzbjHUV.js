/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 15:51:39 
 */
import{d as u,B as a,o as d,A as f,S as n,e as m,K as c,Y as _,u as g,I as x,h as b,E as B}from"./vsv-element-plus-CqWB58IK.js";const $=u({__name:"UploadBasic",setup(v){const o=ref([]),l=(t,e)=>{b.warning(`限制为3个文件，您选择了${t.length}个文件，加起来总共$${t.length+e.length}个文件`)},s=t=>B.confirm(`是否取消上传 ${t.name} ？`,{draggable:!0}).then(()=>!0,()=>!1);return(t,e)=>{const r=a("el-button"),i=a("el-upload");return d(),f(i,{"file-list":g(o),"onUpdate:fileList":e[0]||(e[0]=p=>x(o)?o.value=p:null),action:"/uploadFile","before-remove":s,limit:3,multiple:"","on-exceed":l},{tip:n(()=>e[2]||(e[2]=[m("div",{class:"el-upload__tip"},"jpg/png 文件需小于500kb",-1)])),default:n(()=>[c(r,{type:"primary"},{default:n(()=>e[1]||(e[1]=[_("点击上传")])),_:1})]),_:1},8,["file-list"])}}});export{$ as default};
