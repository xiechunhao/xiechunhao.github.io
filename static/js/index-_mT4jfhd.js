/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{d as M,b as Y,e as u,L as m,Y as v,u as y,V as _,D as R,o as T,_ as g}from"./vsv-element-plus-DQNbQgVr.js";import{_ as X}from"./index-DXRDwnmL.js";import"./vsv-icon-BSoeDgwL.js";import"./vsv-nprogress-BCb6Y0ID.js";const B=""+new URL("../png/cat-Cj_eEYnY.png",import.meta.url).href,L={class:"signature-container"},S={class:"signature-canvas-box"},U=["src"],D=M({name:"Signature",__name:"index",setup(V){const s=ref();let l,r=!1;const d=e=>{let t;if(e.offsetX){const{offsetX:n,offsetY:a}=e;t=[n,a]}else{const{top:n,left:a}=s.value.getBoundingClientRect(),o=e.touches[0].clientX-a,b=e.touches[0].clientY-n;t=[o,b]}return t};let i=0,c=0;const f=e=>{[i,c]=d(e),r=!0},p=e=>{if(r){const[t,n]=d(e);E(i,c,t,n,l),i=t,c=n}},h=()=>{r&&(r=!1)};onMounted(()=>{l=s.value.getContext("2d")});const w=()=>{l.clearRect(0,0,s.value.width,s.value.height)},k=e=>{const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.toDataURL()==t.toDataURL()},C=()=>{if(k(s.value)){$baseMessage("当前签名文件为空","warning","hey");return}const e=document.createElement("a");e.href=s.value.toDataURL(),e.download="签名";const t=new MouseEvent("click");e.dispatchEvent(t)},E=(e,t,n,a,o)=>{o.beginPath(),o.globalAlpha=1,o.lineWidth=2,o.strokeStyle="#000",o.moveTo(e,t),o.lineTo(n,a),o.closePath(),o.stroke()};return(e,t)=>{const n=R("el-button");return T(),Y("div",L,[u("div",S,[u("canvas",{ref_key:"canvas",ref:s,height:"200",width:"500",onMousedown:f,onMousemove:v(p,["stop","prevent"]),onMouseup:h,onTouchend:h,onTouchmove:v(p,["stop","prevent"]),onTouchstart:f},null,544),u("img",{alt:"",src:y(B)},null,8,U)]),m(n,{type:"primary",onClick:C},{default:_(()=>t[0]||(t[0]=[g("存为图片")])),_:1}),m(n,{type:"danger",onClick:w},{default:_(()=>t[1]||(t[1]=[g("清空签名")])),_:1})])}}}),j=X(D,[["__scopeId","data-v-9753867b"]]);export{j as default};
