/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:17:33 
 */
import{d as v,a6 as l,N as f,o as V,M as b,$ as t,T as e,u as n,e as s}from"./vsv-element-plus-CxGOTlXz.js";import{_ as g}from"./index-vqJMV2wg.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const C=""+new URL("../png/bottom_01-CLe2VpsK.png",import.meta.url).href,B=""+new URL("../png/bottom_02-BbCWwysd.png",import.meta.url).href,w=""+new URL("../png/bottom_03-Bo8Nj7cf.png",import.meta.url).href,x=""+new URL("../png/bottom_04-CyZXqOPL.png",import.meta.url).href,L={class:"data-screen-bottom-text"},U={class:"data-screen-bottom-text"},N={class:"data-screen-bottom-text"},R={class:"data-screen-bottom-text"},D=v({name:"DataScreenBottom",__name:"DataScreenBottom",setup(I){const r=reactive({startValue:0,endValue:l(1e3,2e3)}),d=reactive({startValue:0,endValue:l(1e3,2e3)}),c=reactive({startValue:0,endValue:l(1e3,2e3)}),_=reactive({startValue:0,endValue:l(1e3,2e3)}),i=setInterval(()=>{r.endValue=r.endValue+l(0,100),d.endValue=d.endValue+l(0,100),c.endValue=c.endValue+l(0,100),_.endValue=_.endValue+l(0,100)},1e3*5);return onBeforeUnmount(()=>{clearInterval(i)}),(S,o)=>{const m=f("el-image"),a=f("el-col"),p=f("vab-count"),u=f("el-row");return V(),b(u,{class:"data-screen-bottom"},{default:t(()=>[e(a,{span:6},{default:t(()=>[e(u,null,{default:t(()=>[e(a,{span:12},{default:t(()=>[e(m,{class:"data-screen-bottom-icon",src:n(C)},null,8,["src"])]),_:1}),e(a,{span:12},{default:t(()=>[s("div",L,[e(p,{"end-value":n(r).endValue,"start-value":n(r).startValue},null,8,["end-value","start-value"]),o[0]||(o[0]=s("p",null,"累计访问量",-1))])]),_:1})]),_:1})]),_:1}),e(a,{span:6},{default:t(()=>[e(u,null,{default:t(()=>[e(a,{span:12},{default:t(()=>[e(m,{class:"data-screen-bottom-icon",src:n(B)},null,8,["src"])]),_:1}),e(a,{span:12},{default:t(()=>[s("div",U,[e(p,{"end-value":n(d).endValue,"start-value":n(d).startValue},null,8,["end-value","start-value"]),o[1]||(o[1]=s("p",null,"累计用户数",-1))])]),_:1})]),_:1})]),_:1}),e(a,{span:6},{default:t(()=>[e(u,null,{default:t(()=>[e(a,{span:12},{default:t(()=>[e(m,{class:"data-screen-bottom-icon",src:n(w)},null,8,["src"])]),_:1}),e(a,{span:12},{default:t(()=>[s("div",N,[e(p,{"end-value":n(c).endValue,"start-value":n(c).startValue},null,8,["end-value","start-value"]),o[2]||(o[2]=s("p",null,"累计产出模型",-1))])]),_:1})]),_:1})]),_:1}),e(a,{span:6},{default:t(()=>[e(u,null,{default:t(()=>[e(a,{span:12},{default:t(()=>[e(m,{class:"data-screen-bottom-icon",src:n(x)},null,8,["src"])]),_:1}),e(a,{span:12},{default:t(()=>[s("div",R,[e(p,{"end-value":n(_).endValue,"start-value":n(_).startValue},null,8,["end-value","start-value"]),o[3]||(o[3]=s("p",null,"累计评估模型",-1))])]),_:1})]),_:1})]),_:1})]),_:1})}}}),q=g(D,[["__scopeId","data-v-42403c68"]]);export{q as default};
