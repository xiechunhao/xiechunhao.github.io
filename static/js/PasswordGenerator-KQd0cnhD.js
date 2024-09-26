/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 15:53:45 
 */
import{_ as U}from"./index-Cq5UKYJQ.js";import{_ as x}from"./index-B4mrgrgW.js";import{d as E,p as v,r as y,o as N,b as I,W as l,T as n,a8 as _,u as a,h as P,a9 as S,at as k,aq as C,an as L,aO as B,au as G,b7 as F,b8 as M}from"./vsv-element-plus-DDEqdpLt.js";import{_ as R}from"./index-CQIU_Sxf.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const T={class:"password-generator-container no-background-container"},q=E({name:"PasswordGenerator",__name:"PasswordGenerator",setup(A){const o=v({length:16,includeUppercase:!0,includeLowercase:!0,includeNumbers:!0,includeSymbols:!1}),u=y(""),c=()=>{let s="",e="";o.includeUppercase&&(s+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),o.includeLowercase&&(s+="abcdefghijklmnopqrstuvwxyz"),o.includeNumbers&&(s+="0123456789"),o.includeSymbols&&(s+="!@#$%^&*()_+~`|}{[]:;?><,./-=");for(let d=0;d<o.length;d++){const p=Math.floor(Math.random()*s.length);e+=s.charAt(p)}u.value=e};return(s,e)=>{const d=S,p=k,r=C,m=L,i=x,f=B,b=G,V=U,w=F,g=M;return N(),I("div",T,[l(g,{gutter:20},{default:n(()=>[l(w,{lg:6,md:12,sm:12,xl:6,xs:24},{default:n(()=>[l(V,null,{header:n(()=>[e[7]||(e[7]=_(" 密码生成器 ")),l(d,{class:"password-generator-button",type:"primary",onClick:c},{default:n(()=>e[6]||(e[6]=[_("生成密码")])),_:1})]),default:n(()=>[l(b,{model:a(o)},{default:n(()=>[l(r,{label:"密码长度"},{default:n(()=>[l(p,{modelValue:a(o).length,"onUpdate:modelValue":e[0]||(e[0]=t=>a(o).length=t),max:32,min:6},null,8,["modelValue"])]),_:1}),l(r,{label:"包含大写字母"},{default:n(()=>[l(m,{modelValue:a(o).includeUppercase,"onUpdate:modelValue":e[1]||(e[1]=t=>a(o).includeUppercase=t)},null,8,["modelValue"])]),_:1}),l(r,{label:"包含小写字母"},{default:n(()=>[l(m,{modelValue:a(o).includeLowercase,"onUpdate:modelValue":e[2]||(e[2]=t=>a(o).includeLowercase=t)},null,8,["modelValue"])]),_:1}),l(r,{label:"包含数字"},{default:n(()=>[l(m,{modelValue:a(o).includeNumbers,"onUpdate:modelValue":e[3]||(e[3]=t=>a(o).includeNumbers=t)},null,8,["modelValue"])]),_:1}),l(r,{label:"包含符号"},{default:n(()=>[l(m,{modelValue:a(o).includeSymbols,"onUpdate:modelValue":e[4]||(e[4]=t=>a(o).includeSymbols=t)},null,8,["modelValue"])]),_:1}),l(i),l(r,{label:"生成的密码"},{default:n(()=>[l(f,{modelValue:a(u),"onUpdate:modelValue":e[5]||(e[5]=t=>P(u)?u.value=t:null),clearable:"",readonly:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})])}}}),H=R(q,[["__scopeId","data-v-fcb9eafe"]]);export{H as default};
