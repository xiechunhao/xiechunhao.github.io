/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 17:39:02 
 */
import{u,x as m,B as p,e as h,_ as v}from"./index-D5j7Mtop.js";import{d as f,$ as g,o as y,b,W as a,T as w,e as t,a1 as o,u as s,bj as q,aE as x}from"./vsv-element-plus-DDEqdpLt.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const B={class:"news-detail-container"},k={class:"title"},N={class:"logo"},D={class:"user"},E={class:"time"},C=["src"],S={class:"article"},V=f({name:"NewsDetail",__name:"NewsDetail",setup(A){const e=u(),c=m(),{delVisitedRoute:n}=c,i=async()=>{await n(p(e,!0)),await history.back()};return(P,R)=>{const r=h,_=q,l=x,d=g("vab-icon");return y(),b("div",B,[a(_,{content:"详情",title:"返回上一页",onBack:i},{extra:w(()=>[a(r)]),_:1}),t("div",k,o(s(e).query.title),1),t("div",N,[a(l,{size:18,src:s(e).query.logo},null,8,["src"]),t("div",D,o(s(e).query.user),1),a(d,{icon:"time-line"}),t("div",E,o(s(e).query.time),1)]),t("img",{alt:"",class:"image",src:s(e).query.image},null,8,C),t("article",S,o(s(e).query.content),1)])}}}),H=v(V,[["__scopeId","data-v-dce32d2a"]]);export{H as default};
