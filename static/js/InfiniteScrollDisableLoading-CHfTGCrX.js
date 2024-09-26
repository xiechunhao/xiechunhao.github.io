/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{d,Y as _,o as e,b as t,R as f,u as i,H as p,a4 as m,Z as v,U as a}from"./vsv-element-plus-CbS2IxKo.js";const h={class:"infinite-list-wrapper",style:{overflow:"auto"}},b=["infinite-scroll-disabled"],k={key:0},y={key:1},B=d({__name:"InfiniteScrollDisableLoading",setup(g){const o=ref(10),s=ref(!1),n=computed(()=>o.value>=20),r=computed(()=>s.value||n.value),c=()=>{s.value=!0,setTimeout(()=>{o.value+=2,s.value=!1},1e3*2)};return(D,w)=>{const u=_("infinite-scroll");return e(),t("div",h,[f((e(),t("ul",{class:"list","infinite-scroll-disabled":i(r)},[(e(!0),t(p,null,m(i(o),l=>(e(),t("li",{key:l,class:"list-item"},v(l),1))),128))],8,b)),[[u,c]]),i(s)?(e(),t("p",k,"加载中...")):a("",!0),i(n)?(e(),t("p",y,"没有更多了")):a("",!0)])}}});export{B as default};
