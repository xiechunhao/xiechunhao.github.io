/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{d as u,C as d,V as n,G as f,u as m,D as a,o as _,L as c,_ as g,e as x,j as b,E as v}from"./vsv-element-plus-DQNbQgVr.js";const E=u({__name:"UploadBasic",setup(B){const o=ref([]),l=(t,e)=>{b.warning(`限制为3个文件，您选择了${t.length}个文件，加起来总共$${t.length+e.length}个文件`)},s=t=>v.confirm(`是否取消上传 ${t.name} ？`,{draggable:!0}).then(()=>!0,()=>!1);return(t,e)=>{const r=a("el-button"),i=a("el-upload");return _(),d(i,{"file-list":m(o),"onUpdate:fileList":e[0]||(e[0]=p=>f(o)?o.value=p:null),action:"/uploadFile","before-remove":s,limit:3,multiple:"","on-exceed":l},{tip:n(()=>e[2]||(e[2]=[x("div",{class:"el-upload__tip"},"jpg/png 文件需小于500kb",-1)])),default:n(()=>[c(r,{type:"primary"},{default:n(()=>e[1]||(e[1]=[g("点击上传")])),_:1})]),_:1},8,["file-list"])}}});export{E as default};
