/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{d as l,b as u,K as t,B as r,u as s,U as d,o as _,be as f,ab as m}from"./vsv-element-plus-D84I6Pnf.js";import{_ as g}from"./index-BL5slC2T.js";import"./vsv-icon-DZABqXig.js";import"./vsv-nprogress-0btfRK0G.js";const v={class:"demo-progress"},w=l({__name:"ProgressStripedProgress",setup(h){const e=ref(70),a=computed(()=>Math.floor(e.value/10)),c=()=>{e.value+=10,e.value>100&&(e.value=100)},p=()=>{e.value-=10,e.value<0&&(e.value=0)};return(k,b)=>{const o=r("el-progress"),n=r("el-button"),i=r("el-button-group");return _(),u("div",v,[t(o,{percentage:50,striped:"","stroke-width":15}),t(o,{percentage:30,status:"warning",striped:"","striped-flow":"","stroke-width":15}),t(o,{duration:10,percentage:100,status:"success",striped:"","striped-flow":"","stroke-width":15}),t(o,{duration:s(a),percentage:s(e),status:"exception",striped:"","striped-flow":"","stroke-width":15},null,8,["duration","percentage"]),t(i,null,{default:d(()=>[t(n,{icon:s(f),onClick:p},null,8,["icon"]),t(n,{icon:s(m),onClick:c},null,8,["icon"])]),_:1})])}}}),S=g(w,[["__scopeId","data-v-ec717a9a"]]);export{S as default};
