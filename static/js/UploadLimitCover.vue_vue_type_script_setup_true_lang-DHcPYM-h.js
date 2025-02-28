/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 13:58:02 
 */
import{d as i,r as u,R as c,o as _,S as a,Y as n,a7 as m,a6 as d,b as f,co as x,cs as v}from"./vsv-element-plus-CcCXTk6v.js";const y=i({__name:"UploadLimitCover",setup(b){const l=u(),p=t=>{var o,s;(o=l.value)==null||o.clearFiles();const e=t[0];e.uid=v(),(s=l.value)==null||s.handleStart(e)},r=()=>{var t;(t=l.value)==null||t.submit()};return(t,e)=>{const o=m,s=x;return _(),c(s,{ref_key:"upload",ref:l,action:"/uploadFile","auto-upload":!1,limit:1,"on-exceed":p},{trigger:a(()=>[n(o,{type:"primary"},{default:a(()=>e[0]||(e[0]=[d("选择文件")])),_:1})]),tip:a(()=>e[2]||(e[2]=[f("div",{class:"el-upload__tip"},"限制1个文件，新文件将覆盖旧文件",-1)])),default:a(()=>[n(o,{type:"success",onClick:r},{default:a(()=>e[1]||(e[1]=[d("上传到服务器")])),_:1})]),_:1},512)}}});export{y as _};
