/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{d,a as e,P as _,R as a,u as i,G as f,a2 as p,o as t,Y as m,W as v}from"./vsv-element-plus-CWjYVfvE.js";const h={class:"infinite-list-wrapper",style:{overflow:"auto"}},k=["infinite-scroll-disabled"],y={key:0},b={key:1},B=d({__name:"InfiniteScrollDisableLoading",setup(g){const o=ref(10),s=ref(!1),n=computed(()=>o.value>=20),r=computed(()=>s.value||n.value),c=()=>{s.value=!0,setTimeout(()=>{o.value+=2,s.value=!1},1e3*2)};return(D,w)=>{const u=v("infinite-scroll");return t(),e("div",h,[_((t(),e("ul",{class:"list","infinite-scroll-disabled":i(r)},[(t(!0),e(f,null,p(i(o),l=>(t(),e("li",{key:l,class:"list-item"},m(l),1))),128))],8,k)),[[u,c]]),i(s)?(t(),e("p",y,"加载中...")):a("",!0),i(n)?(t(),e("p",b,"没有更多了")):a("",!0)])}}});export{B as default};
