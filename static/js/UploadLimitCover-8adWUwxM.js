/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{d as i,A as c,U as a,B as n,o as _,K as d,Z as p,e as m,bp as f}from"./vsv-element-plus-D84I6Pnf.js";const b=i({__name:"UploadLimitCover",setup(v){const l=ref(),u=t=>{var o,s;(o=l.value)==null||o.clearFiles();const e=t[0];e.uid=f(),(s=l.value)==null||s.handleStart(e)},r=()=>{var t;(t=l.value)==null||t.submit()};return(t,e)=>{const o=n("el-button"),s=n("el-upload");return _(),c(s,{ref_key:"upload",ref:l,action:"/uploadFile","auto-upload":!1,limit:1,"on-exceed":u},{trigger:a(()=>[d(o,{type:"primary"},{default:a(()=>e[0]||(e[0]=[p("选择文件")])),_:1})]),tip:a(()=>e[2]||(e[2]=[m("div",{class:"el-upload__tip"},"限制1个文件，新文件将覆盖旧文件",-1)])),default:a(()=>[d(o,{type:"success",onClick:r},{default:a(()=>e[1]||(e[1]=[p("上传到服务器")])),_:1})]),_:1},512)}}});export{b as default};
