/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 13:58:02 
 */
import{d as f,r as l,c as r,a as e,o as s,T as p,W as c,cH as m,u as o,a1 as v,aj as h,X as k}from"./vsv-element-plus-CcCXTk6v.js";const y={class:"infinite-list-wrapper",style:{overflow:"auto"}},b=["infinite-scroll-disabled"],g={key:0},w={key:1},C=f({__name:"InfiniteScrollDisableLoading",setup(D){const a=l(10),t=l(!1),i=r(()=>a.value>=20),u=r(()=>t.value||i.value),d=()=>{t.value=!0,setTimeout(()=>{a.value+=2,t.value=!1},1e3*2)};return(S,x)=>{const _=m;return s(),e("div",y,[p((s(),e("ul",{class:"list","infinite-scroll-disabled":o(u)},[(s(!0),e(v,null,h(o(a),n=>(s(),e("li",{key:n,class:"list-item"},k(n),1))),128))],8,b)),[[_,d]]),o(t)?(s(),e("p",g,"加载中...")):c("",!0),o(i)?(s(),e("p",w,"没有更多了")):c("",!0)])}}});export{C as _};
