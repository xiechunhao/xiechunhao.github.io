/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{d as v,_ as l,A as V,U as t,B as f,o as b,K as e,u as n,e as s}from"./vsv-element-plus-D84I6Pnf.js";import{_ as g}from"./index-BL5slC2T.js";import"./vsv-icon-DZABqXig.js";import"./vsv-nprogress-0btfRK0G.js";const B=""+new URL("../png/bottom_01-CLe2VpsK.png",import.meta.url).href,C=""+new URL("../png/bottom_02-BbCWwysd.png",import.meta.url).href,w=""+new URL("../png/bottom_03-Bo8Nj7cf.png",import.meta.url).href,x=""+new URL("../png/bottom_04-CyZXqOPL.png",import.meta.url).href,L={class:"data-screen-bottom-text"},U={class:"data-screen-bottom-text"},R={class:"data-screen-bottom-text"},D={class:"data-screen-bottom-text"},I=v({name:"DataScreenBottom",__name:"DataScreenBottom",setup(N){const r=reactive({startValue:0,endValue:l(1e3,2e3)}),d=reactive({startValue:0,endValue:l(1e3,2e3)}),c=reactive({startValue:0,endValue:l(1e3,2e3)}),_=reactive({startValue:0,endValue:l(1e3,2e3)}),i=setInterval(()=>{r.endValue=r.endValue+l(0,100),d.endValue=d.endValue+l(0,100),c.endValue=c.endValue+l(0,100),_.endValue=_.endValue+l(0,100)},1e3*5);return onBeforeUnmount(()=>{clearInterval(i)}),(S,o)=>{const m=f("el-image"),a=f("el-col"),p=f("vab-count"),u=f("el-row");return b(),V(u,{class:"data-screen-bottom"},{default:t(()=>[e(a,{span:6},{default:t(()=>[e(u,null,{default:t(()=>[e(a,{span:12},{default:t(()=>[e(m,{class:"data-screen-bottom-icon",src:n(B)},null,8,["src"])]),_:1}),e(a,{span:12},{default:t(()=>[s("div",L,[e(p,{"end-value":n(r).endValue,"start-value":n(r).startValue},null,8,["end-value","start-value"]),o[0]||(o[0]=s("p",null,"累计访问量",-1))])]),_:1})]),_:1})]),_:1}),e(a,{span:6},{default:t(()=>[e(u,null,{default:t(()=>[e(a,{span:12},{default:t(()=>[e(m,{class:"data-screen-bottom-icon",src:n(C)},null,8,["src"])]),_:1}),e(a,{span:12},{default:t(()=>[s("div",U,[e(p,{"end-value":n(d).endValue,"start-value":n(d).startValue},null,8,["end-value","start-value"]),o[1]||(o[1]=s("p",null,"累计用户数",-1))])]),_:1})]),_:1})]),_:1}),e(a,{span:6},{default:t(()=>[e(u,null,{default:t(()=>[e(a,{span:12},{default:t(()=>[e(m,{class:"data-screen-bottom-icon",src:n(w)},null,8,["src"])]),_:1}),e(a,{span:12},{default:t(()=>[s("div",R,[e(p,{"end-value":n(c).endValue,"start-value":n(c).startValue},null,8,["end-value","start-value"]),o[2]||(o[2]=s("p",null,"累计产出模型",-1))])]),_:1})]),_:1})]),_:1}),e(a,{span:6},{default:t(()=>[e(u,null,{default:t(()=>[e(a,{span:12},{default:t(()=>[e(m,{class:"data-screen-bottom-icon",src:n(x)},null,8,["src"])]),_:1}),e(a,{span:12},{default:t(()=>[s("div",D,[e(p,{"end-value":n(_).endValue,"start-value":n(_).startValue},null,8,["end-value","start-value"]),o[3]||(o[3]=s("p",null,"累计评估模型",-1))])]),_:1})]),_:1})]),_:1})]),_:1})}}}),j=g(I,[["__scopeId","data-v-42403c68"]]);export{j as default};
