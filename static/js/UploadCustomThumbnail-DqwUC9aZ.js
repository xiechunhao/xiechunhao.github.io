/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:20:55 
 */
import{d as h,a as d,J as e,U as a,A as u,D as g,u as l,G as C,o as i,ab as V,b as t,R as m,bM as k,bs as w,ac as y}from"./vsv-element-plus-CWjYVfvE.js";const U=["src"],x={class:"el-upload-list__item-actions"},B=["onClick"],N={key:0,class:"el-upload-list__item-delete"},P={key:1,class:"el-upload-list__item-delete"},F=["src"],A=h({__name:"UploadCustomThumbnail",setup(I){const _=ref(""),s=ref(!1),c=ref(!1),f=r=>{_.value=r.url,s.value=!0};return(r,p)=>{const o=u("el-icon"),b=u("el-upload"),v=u("vab-dialog");return i(),d(C,null,[e(b,{action:"/uploadFile","auto-upload":!1,"list-type":"picture-card"},{file:a(({file:n})=>[t("div",null,[t("img",{alt:"",class:"el-upload-list__item-thumbnail",src:n.url},null,8,U),t("span",x,[t("span",{class:"el-upload-list__item-preview",onClick:R=>f(n)},[e(o,null,{default:a(()=>[e(l(k))]),_:1})],8,B),l(c)?m("",!0):(i(),d("span",N,[e(o,null,{default:a(()=>[e(l(w))]),_:1})])),l(c)?m("",!0):(i(),d("span",P,[e(o,null,{default:a(()=>[e(l(y))]),_:1})]))])])]),default:a(()=>[e(o,null,{default:a(()=>[e(l(V))]),_:1})]),_:1}),e(v,{modelValue:l(s),"onUpdate:modelValue":p[0]||(p[0]=n=>g(s)?s.value=n:null),"append-to-body":""},{default:a(()=>[t("img",{alt:"Preview Image",src:l(_),style:{width:"100%"}},null,8,F)]),_:1},8,["modelValue"])],64)}}});export{A as default};
