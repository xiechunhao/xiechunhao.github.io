import{y as u,f as a,d,H as y,X as f,Y as S,A as l,C as m,W as x,V as g}from"../js/index.dc884249.js";const[p,r]=u("loading"),v=Array(12).fill(null).map((e,n)=>a("i",{class:r("line",String(n+1))},null)),z=a("svg",{class:r("circular"),viewBox:"25 25 50 50"},[a("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),C={size:l,type:m("circular"),color:String,vertical:Boolean,textSize:l,textColor:String};var I=d({name:p,props:C,setup(e,{slots:n}){const c=y(()=>f({color:e.color},S(e.size))),i=()=>{const t=e.type==="spinner"?v:z;return a("span",{class:r("spinner",e.type),style:c.value},[n.icon?n.icon():t])},o=()=>{var t;if(n.default)return a("span",{class:r("text"),style:{fontSize:x(e.textSize),color:(t=e.textColor)!=null?t:e.color}},[n.default()])};return()=>{const{type:t,vertical:s}=e;return a("div",{class:r([t,{vertical:s}]),"aria-live":"polite","aria-busy":!0},[i(),o()])}}});const _=g(I);export{_ as L};
