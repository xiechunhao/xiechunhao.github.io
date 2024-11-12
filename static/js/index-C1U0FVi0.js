/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 16:06:55 
 */
import{d as C,o as H,b as O,e as d,b0 as L,ac as y,u as g,n as P}from"./vsv-element-plus-Brnt1GMz.js";import{_ as R}from"./index-D0bnGtHt.js";import"./vsv-icon-CX0cXpax.js";import"./vsv-nprogress-Cnw-SRAI.js";const V=C({name:"VabPaneSplit",__name:"index",props:{horizontal:{type:Boolean,default:!1},ratio:{}},emits:["resize"],setup(E,{emit:G}){const a=E,k=e=>{var r,l;const n=(l=(r=e==null?void 0:e.split("/"))==null?void 0:r.map(Number))==null?void 0:l.filter(c=>!isNaN(c));return!n||n.length!==2?[1,1]:n},s=ref(),o=ref(),x=G,[B,M]=k(a.ratio),i=ref(B),f=ref(M),N=e=>{var p,m,z,h,b,_;(p=s.value)==null||p.classList.add("forbid-select"),(m=o.value)==null||m.classList.add("forbid-select");const n=a.horizontal?e.clientY:e==null?void 0:e.clientX,r=a.horizontal?(z=s==null?void 0:s.value)==null?void 0:z.offsetHeight:(h=s==null?void 0:s.value)==null?void 0:h.offsetWidth,l=a.horizontal?(b=o==null?void 0:o.value)==null?void 0:b.offsetHeight:(_=o==null?void 0:o.value)==null?void 0:_.offsetWidth,c=t=>{const u=a.horizontal?t.clientY:t==null?void 0:t.clientX,S=r+u-n,w=i.value+f.value;i.value=w*(S/(r+l)),f.value=w-i.value},v=()=>{var t,u;(t=s.value)==null||t.classList.remove("forbid-select"),(u=o.value)==null||u.classList.remove("forbid-select"),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",v),x("resize")};document.addEventListener("mousemove",c),document.addEventListener("mouseup",v)};return(e,n)=>(H(),O("div",{class:P(["split",{horizontal:e.horizontal}])},[d("div",{ref_key:"one",ref:s,class:"sub",style:y({flexGrow:g(i)})},[L(e.$slots,"one",{},void 0,!0)],4),d("div",{class:"resizer",onMousedown:N},null,32),d("div",{ref_key:"two",ref:o,class:"sub",style:y({flexGrow:g(f)})},[L(e.$slots,"two",{},void 0,!0)],4)],2))}}),I=R(V,[["__scopeId","data-v-3e2b5529"]]);export{I as default};
