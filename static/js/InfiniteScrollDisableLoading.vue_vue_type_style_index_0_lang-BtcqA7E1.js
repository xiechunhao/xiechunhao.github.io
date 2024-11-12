/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 17:39:02 
 */
import{d as f,r as l,a as r,o as e,b as s,Z as p,u as a,a3 as m,aj as v,Y as c,ck as h,a1 as k}from"./vsv-element-plus-DDEqdpLt.js";const b={class:"infinite-list-wrapper",style:{overflow:"auto"}},y=["infinite-scroll-disabled"],g={key:0},w={key:1},C=f({__name:"InfiniteScrollDisableLoading",setup(D){const o=l(10),t=l(!1),i=r(()=>o.value>=20),u=r(()=>t.value||i.value),d=()=>{t.value=!0,setTimeout(()=>{o.value+=2,t.value=!1},1e3*2)};return(S,x)=>{const _=h;return e(),s("div",b,[p((e(),s("ul",{class:"list","infinite-scroll-disabled":a(u)},[(e(!0),s(m,null,v(a(o),n=>(e(),s("li",{key:n,class:"list-item"},k(n),1))),128))],8,y)),[[_,d]]),a(t)?(e(),s("p",g,"加载中...")):c("",!0),a(i)?(e(),s("p",w,"没有更多了")):c("",!0)])}}});export{C as _};
