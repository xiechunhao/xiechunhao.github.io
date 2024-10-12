/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 16:06:30 
 */
import{c as _,s as w,ap as S,f as g,q as B}from"./index-D08hoOyC.js";import{d as k,o as x,b as C,W as n,T as c,a8 as r,a9 as N}from"./vsv-element-plus-OoOmiKKG.js";import"./vsv-icon-Df9CwUcM.js";import"./vsv-nprogress-CNnfF26O.js";const F={class:"random-theme-container"},M=k({name:"RandomTheme",__name:"index",setup(I){const l=_(),{theme:e,device:u}=w(l),{saveTheme:m,updateTheme:i,setCssVar:f}=l,t=(s,o)=>o.filter(a=>a!==s)[Math.random()*(o.length-1)|0],v=async()=>{const s=S();setTimeout(()=>{const o=t(e.value.themeName,["default","plain","technology"]),a=t(e.value.columnStyle,["vertical","horizontal","card","arrow","semicircle"]),h=t(e.value.tabsBarStyle,["card","smart","smooth","rect"]),p=t(e.value.showTabsIcon,[!0,!1]),y=u.value==="desktop"?t(e.value.layout,["horizontal","vertical","column","comprehensive","fall"]):"vertical",b=t(e.value.color,["#1e90ff","#4e88f3","#0052d9","#3fb884","#16baa9","#07c160","#009688","#6954f0","#7b40f2","#f01414"]),T=t(e.value.isFollow,[!0,!1]);e.value.themeName=o,e.value.columnStyle=a,e.value.tabsBarStyle=h,e.value.showTabsIcon=p,e.value.layout=y,o==="technology"?e.value.color="#4e88f3":e.value.color=b,o==="default"?e.value.isFollow=T:e.value.isFollow=!1,f(),i(),m(),setTimeout(()=>{s.close(),g("切换成功","success","hey")},1e3)},100)},d=()=>{B("shop-vite-reset-theme")};return(s,o)=>{const a=N;return x(),C("div",F,[n(a,{type:"primary",onClick:v},{default:c(()=>o[0]||(o[0]=[r("随机换肤")])),_:1}),n(a,{type:"primary",onClick:d},{default:c(()=>o[1]||(o[1]=[r("默认主题")])),_:1})])}}});export{M as default};
