/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:50:12 
 */
import{d as M,r as T,E as Y,o as y,b as B,e as u,aA as m,u as R,W as v,T as g,a8 as _,a9 as X}from"./vsv-element-plus-DDEqdpLt.js";import{f as S,_ as U}from"./index-6xtryadw.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const L=""+new URL("../png/cat-Cj_eEYnY.png",import.meta.url).href,x={class:"signature-container"},D={class:"signature-canvas-box"},N=["src"],V=M({name:"Signature",__name:"index",setup(A){const s=T();let i,r=!1;const d=e=>{let t;if(e.offsetX){const{offsetX:n,offsetY:a}=e;t=[n,a]}else{const{top:n,left:a}=s.value.getBoundingClientRect(),o=e.touches[0].clientX-a,b=e.touches[0].clientY-n;t=[o,b]}return t};let l=0,c=0;const f=e=>{[l,c]=d(e),r=!0},h=e=>{if(r){const[t,n]=d(e);C(l,c,t,n,i),l=t,c=n}},p=()=>{r&&(r=!1)};Y(()=>{i=s.value.getContext("2d")});const E=()=>{i.clearRect(0,0,s.value.width,s.value.height)},w=e=>{const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.toDataURL()==t.toDataURL()},k=()=>{if(w(s.value)){S("当前签名文件为空","warning","hey");return}const e=document.createElement("a");e.href=s.value.toDataURL(),e.download="签名";const t=new MouseEvent("click");e.dispatchEvent(t)},C=(e,t,n,a,o)=>{o.beginPath(),o.globalAlpha=1,o.lineWidth=2,o.strokeStyle="#000",o.moveTo(e,t),o.lineTo(n,a),o.closePath(),o.stroke()};return(e,t)=>{const n=X;return y(),B("div",x,[u("div",D,[u("canvas",{ref_key:"canvas",ref:s,height:"200",width:"500",onMousedown:f,onMousemove:m(h,["stop","prevent"]),onMouseup:p,onTouchend:p,onTouchmove:m(h,["stop","prevent"]),onTouchstart:f},null,544),u("img",{alt:"",src:R(L)},null,8,N)]),v(n,{type:"primary",onClick:k},{default:g(()=>t[0]||(t[0]=[_("存为图片")])),_:1}),v(n,{type:"danger",onClick:E},{default:g(()=>t[1]||(t[1]=[_("清空签名")])),_:1})])}}}),O=U(V,[["__scopeId","data-v-9753867b"]]);export{O as default};
