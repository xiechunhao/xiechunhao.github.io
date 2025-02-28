/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{d,b as e,Q as _,S as a,u as i,I as f,a9 as p,o as t,Z as m,X as v}from"./vsv-element-plus-DQNbQgVr.js";const h={class:"infinite-list-wrapper",style:{overflow:"auto"}},b=["infinite-scroll-disabled"],k={key:0},y={key:1},x=d({__name:"InfiniteScrollDisableLoading",setup(g){const o=ref(10),s=ref(!1),n=computed(()=>o.value>=20),r=computed(()=>s.value||n.value),c=()=>{s.value=!0,setTimeout(()=>{o.value+=2,s.value=!1},1e3*2)};return(D,w)=>{const u=v("infinite-scroll");return t(),e("div",h,[_((t(),e("ul",{class:"list","infinite-scroll-disabled":i(r)},[(t(!0),e(f,null,p(i(o),l=>(t(),e("li",{key:l,class:"list-item"},m(l),1))),128))],8,b)),[[u,c]]),i(s)?(t(),e("p",k,"加载中...")):a("",!0),i(n)?(t(),e("p",y,"没有更多了")):a("",!0)])}}});export{x as default};
