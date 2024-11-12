/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 16:06:55 
 */
import{d,a2 as _,o as e,b as t,Y as f,u as i,P as p,aa as m,a3 as v,_ as l}from"./vsv-element-plus-Brnt1GMz.js";const h={class:"infinite-list-wrapper",style:{overflow:"auto"}},b=["infinite-scroll-disabled"],k={key:0},y={key:1},B=d({__name:"InfiniteScrollDisableLoading",setup(g){const o=ref(10),s=ref(!1),a=computed(()=>o.value>=20),r=computed(()=>s.value||a.value),c=()=>{s.value=!0,setTimeout(()=>{o.value+=2,s.value=!1},1e3*2)};return(D,w)=>{const u=_("infinite-scroll");return e(),t("div",h,[f((e(),t("ul",{class:"list","infinite-scroll-disabled":i(r)},[(e(!0),t(p,null,m(i(o),n=>(e(),t("li",{key:n,class:"list-item"},v(n),1))),128))],8,b)),[[u,c]]),i(s)?(e(),t("p",k,"加载中...")):l("",!0),i(a)?(e(),t("p",y,"没有更多了")):l("",!0)])}}});export{B as default};
