/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:33:27 
 */
import{d as V,r as d,b as H,o as O,n as P,e as f,V as g,aC as y,u as E}from"./vsv-element-plus-B-S50adB.js";import{_ as R}from"./index-Ba9EqH5M.js";import"./vsv-icon-BcEnJ7dJ.js";import"./vsv-nprogress-Bmiy9T8n.js";const W=V({name:"VabPaneSplit",__name:"index",props:{horizontal:{type:Boolean,default:!1},ratio:{}},emits:["resize"],setup(G,{emit:k}){const a=G,B=e=>{var l,i;const n=(i=(l=e==null?void 0:e.split("/"))==null?void 0:l.map(Number))==null?void 0:i.filter(c=>!isNaN(c));return!n||n.length!==2?[1,1]:n},s=d(),o=d(),M=k,[N,S]=B(a.ratio),r=d(N),v=d(S),x=e=>{var m,z,h,_,b,w;(m=s.value)==null||m.classList.add("forbid-select"),(z=o.value)==null||z.classList.add("forbid-select");const n=a.horizontal?e.clientY:e==null?void 0:e.clientX,l=a.horizontal?(h=s==null?void 0:s.value)==null?void 0:h.offsetHeight:(_=s==null?void 0:s.value)==null?void 0:_.offsetWidth,i=a.horizontal?(b=o==null?void 0:o.value)==null?void 0:b.offsetHeight:(w=o==null?void 0:o.value)==null?void 0:w.offsetWidth,c=t=>{const u=a.horizontal?t.clientY:t==null?void 0:t.clientX,C=l+u-n,L=r.value+v.value;r.value=L*(C/(l+i)),v.value=L-r.value},p=()=>{var t,u;(t=s.value)==null||t.classList.remove("forbid-select"),(u=o.value)==null||u.classList.remove("forbid-select"),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",p),M("resize")};document.addEventListener("mousemove",c),document.addEventListener("mouseup",p)};return(e,n)=>(O(),H("div",{class:P(["split",{horizontal:e.horizontal}])},[f("div",{ref_key:"one",ref:s,class:"sub",style:y({flexGrow:E(r)})},[g(e.$slots,"one",{},void 0,!0)],4),f("div",{class:"resizer",onMousedown:x},null,32),f("div",{ref_key:"two",ref:o,class:"sub",style:y({flexGrow:E(v)})},[g(e.$slots,"two",{},void 0,!0)],4)],2))}}),T=R(W,[["__scopeId","data-v-3e2b5529"]]);export{T as default};
