/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:39:13 
 */
import{d as g,N as d,o as u,b as _,T as e,$ as a,e as t,u as l,bt as h,b9 as k,_ as m,ak as C,aj as V,k as w,P as y}from"./vsv-element-plus-CxGOTlXz.js";const N=["src"],P={class:"el-upload-list__item-actions"},x=["onClick"],B={key:0,class:"el-upload-list__item-delete"},U={key:1,class:"el-upload-list__item-delete"},F=["src"],j=g({__name:"UploadCustomThumbnail",setup(I){const i=ref(""),o=ref(!1),c=ref(!1),f=r=>{i.value=r.url,o.value=!0};return(r,p)=>{const s=d("el-icon"),v=d("el-upload"),b=d("vab-dialog");return u(),_(y,null,[e(v,{action:"/uploadFile","auto-upload":!1,"list-type":"picture-card"},{file:a(({file:n})=>[t("div",null,[t("img",{alt:"",class:"el-upload-list__item-thumbnail",src:n.url},null,8,N),t("span",P,[t("span",{class:"el-upload-list__item-preview",onClick:T=>f(n)},[e(s,null,{default:a(()=>[e(l(h))]),_:1})],8,x),l(c)?m("",!0):(u(),_("span",B,[e(s,null,{default:a(()=>[e(l(k))]),_:1})])),l(c)?m("",!0):(u(),_("span",U,[e(s,null,{default:a(()=>[e(l(C))]),_:1})]))])])]),default:a(()=>[e(s,null,{default:a(()=>[e(l(V))]),_:1})]),_:1}),e(b,{modelValue:l(o),"onUpdate:modelValue":p[0]||(p[0]=n=>w(o)?o.value=n:null),"append-to-body":""},{default:a(()=>[t("img",{alt:"Preview Image",src:l(i)},null,8,F)]),_:1},8,["modelValue"])],64)}}});export{j as default};
