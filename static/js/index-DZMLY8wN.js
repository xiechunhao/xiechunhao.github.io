/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 13:58:02 
 */
import{_ as B}from"./index-DK68u2cP.js";import{c as L,b as O,x as $,s as q,B as u,q as E}from"./index-DuUxtc1j.js";import{d as N,r as P,a as Q,o as Y,Y as e,S as a,ca as j,a7 as z,a6 as i,u as D,b6 as v}from"./vsv-element-plus-CcCXTk6v.js";import"./vsv-icon-1Y3OapYK.js";import"./vsv-nprogress-D-M_H-zP.js";const F={class:"tabs-container no-background-container"},W=N({name:"Tabs",__name:"index",setup(G){const l=L(),r=O(),d=$(),{getVisitedRoutes:w}=q(d),{delVisitedRoute:_,delOthersVisitedRoutes:m,delLeftVisitedRoutes:c,delRightVisitedRoutes:f,delAllVisitedRoutes:b}=d,s=P(null),R=async o=>{h(o)&&await y(),await _(o)},k=async()=>{s.value?(await r.push(s.value),await m(s.value.path)):await m(u(l,!0))},T=async()=>{s.value?(await r.push(s.value),await c(s.value.path)):await c(u(l,!0))},C=async()=>{s.value?(await r.push(s.value),await f(s.value.path)):await f(u(l,!0))},V=async()=>{await b(),await y()},y=async()=>{const o=w.value.findLast(t=>t.path!==u(l,!0));o?await r.push(o):await r.push("/")},h=o=>o===u(l,!0),g=()=>{E("reload-router-view","Tabs")},x=()=>{r.push(`/operate/dynamicSegment/params/${v(0,100)}`)},S=()=>{r.push(`/operate/dynamicSegment/query?id=${v(0,100)}`)};return(o,t)=>{const n=z,A=j,p=B;return Y(),Q("div",F,[e(p,{title:"标签页操作"},{default:a(()=>[e(A,{wrap:""},{default:a(()=>[e(n,{type:"primary",onClick:k},{default:a(()=>t[1]||(t[1]=[i("关闭其他")])),_:1}),e(n,{type:"primary",onClick:T},{default:a(()=>t[2]||(t[2]=[i("关闭左侧")])),_:1}),e(n,{type:"primary",onClick:C},{default:a(()=>t[3]||(t[3]=[i("关闭右侧")])),_:1}),e(n,{type:"primary",onClick:V},{default:a(()=>t[4]||(t[4]=[i("关闭全部")])),_:1}),e(n,{type:"primary",onClick:t[0]||(t[0]=H=>R(D(l).path))},{default:a(()=>t[5]||(t[5]=[i("关闭当前")])),_:1}),e(n,{type:"primary",onClick:g},{default:a(()=>t[6]||(t[6]=[i("刷新当前")])),_:1})]),_:1})]),_:1}),e(p,{title:"params传参(支持多开)"},{default:a(()=>[e(n,{type:"primary",onClick:x},{default:a(()=>t[7]||(t[7]=[i("点击跳转")])),_:1})]),_:1}),e(p,{title:"query传参(支持多开)"},{default:a(()=>[e(n,{type:"primary",onClick:S},{default:a(()=>t[8]||(t[8]=[i("点击跳转")])),_:1})]),_:1})])}}});export{W as default};
