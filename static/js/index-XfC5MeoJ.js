/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 15:53:45 
 */
import{_ as B}from"./index-Cq5UKYJQ.js";import{u as L,a as O,x as $,s as q,B as u,q as E}from"./index-CQIU_Sxf.js";import{d as N,r as W,o as P,b as Q,W as e,T as a,a8 as i,u as j,b6 as v,a9 as z,bW as D}from"./vsv-element-plus-DDEqdpLt.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const F={class:"tabs-container no-background-container"},X=N({name:"Tabs",__name:"index",setup(G){const l=L(),r=O(),d=$(),{getVisitedRoutes:b}=q(d),{delVisitedRoute:w,delOthersVisitedRoutes:m,delLeftVisitedRoutes:f,delRightVisitedRoutes:c,delAllVisitedRoutes:_}=d,s=W(null),R=async o=>{h(o)&&await y(),await w(o)},T=async()=>{s.value?(await r.push(s.value),await m(s.value.path)):await m(u(l,!0))},k=async()=>{s.value?(await r.push(s.value),await f(s.value.path)):await f(u(l,!0))},C=async()=>{s.value?(await r.push(s.value),await c(s.value.path)):await c(u(l,!0))},V=async()=>{await _(),await y()},y=async()=>{const o=b.value.findLast(t=>t.path!==u(l,!0));o?await r.push(o):await r.push("/")},h=o=>o===u(l,!0),g=()=>{E("reload-router-view","Tabs")},x=()=>{r.push(`/operate/dynamicSegment/params/${v(0,100)}`)},S=()=>{r.push(`/operate/dynamicSegment/query?id=${v(0,100)}`)};return(o,t)=>{const n=z,A=D,p=B;return P(),Q("div",F,[e(p,{title:"标签页操作"},{default:a(()=>[e(A,{wrap:""},{default:a(()=>[e(n,{type:"primary",onClick:T},{default:a(()=>t[1]||(t[1]=[i("关闭其他")])),_:1}),e(n,{type:"primary",onClick:k},{default:a(()=>t[2]||(t[2]=[i("关闭左侧")])),_:1}),e(n,{type:"primary",onClick:C},{default:a(()=>t[3]||(t[3]=[i("关闭右侧")])),_:1}),e(n,{type:"primary",onClick:V},{default:a(()=>t[4]||(t[4]=[i("关闭全部")])),_:1}),e(n,{type:"primary",onClick:t[0]||(t[0]=H=>R(j(l).path))},{default:a(()=>t[5]||(t[5]=[i("关闭当前")])),_:1}),e(n,{type:"primary",onClick:g},{default:a(()=>t[6]||(t[6]=[i("刷新当前")])),_:1})]),_:1})]),_:1}),e(p,{title:"params传参(支持多开)"},{default:a(()=>[e(n,{type:"primary",onClick:x},{default:a(()=>t[7]||(t[7]=[i("点击跳转")])),_:1})]),_:1}),e(p,{title:"query传参(支持多开)"},{default:a(()=>[e(n,{type:"primary",onClick:S},{default:a(()=>t[8]||(t[8]=[i("点击跳转")])),_:1})]),_:1})])}}});export{X as default};
