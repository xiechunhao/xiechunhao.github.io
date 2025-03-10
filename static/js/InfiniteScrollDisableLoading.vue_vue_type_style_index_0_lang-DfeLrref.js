/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-10 23:35:01 
 */
import{d as f,r as l,a as r,b as e,o as s,U as p,X as c,cj as m,u as i,a2 as v,ai as h,Y as b}from"./vsv-element-plus-BKBbsRMj.js";const k={class:"infinite-list-wrapper",style:{overflow:"auto"}},y=["infinite-scroll-disabled"],g={key:0},w={key:1},C=f({__name:"InfiniteScrollDisableLoading",setup(D){const o=l(10),t=l(!1),a=r(()=>o.value>=20),u=r(()=>t.value||a.value),d=()=>{t.value=!0,setTimeout(()=>{o.value+=2,t.value=!1},1e3*2)};return(S,x)=>{const _=m;return s(),e("div",k,[p((s(),e("ul",{class:"list","infinite-scroll-disabled":i(u)},[(s(!0),e(v,null,h(i(o),n=>(s(),e("li",{key:n,class:"list-item"},b(n),1))),128))],8,y)),[[_,d]]),i(t)?(s(),e("p",g,"加载中...")):c("",!0),i(a)?(s(),e("p",w,"没有更多了")):c("",!0)])}}});export{C as _};
