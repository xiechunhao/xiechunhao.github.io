/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 16:06:55 
 */
import{Q as l}from"./QR-h4reQUnJ.js";import{d as u,N as t,o as f,b,T as e,$ as o,u as v,e as y,a4 as C}from"./vsv-element-plus-Brnt1GMz.js";import{_ as x}from"./index-D0bnGtHt.js";import"./vsv-icon-CX0cXpax.js";import"./vsv-nprogress-Cnw-SRAI.js";const g={class:"cashier-container no-background-container"},h=u({name:"Cashier",__name:"Cashier",setup(k){const n=ref(l);let s;const _=()=>{n.value="",s=setTimeout(()=>{n.value=l},150)};return onBeforeUnmount(()=>{s&&clearTimeout(s)}),(B,a)=>{const c=t("vab-alert"),m=t("el-image"),i=t("el-button"),r=t("el-tab-pane"),p=t("el-empty"),d=t("el-tabs");return f(),b("div",g,[e(d,{type:"border-card"},{default:o(()=>[e(r,{label:"支付宝"},{default:o(()=>[e(c,{title:"订单提交成功，请扫码下单，应付金额 1899.00 元"}),e(m,{lazy:!0,src:v(n)},{error:o(()=>a[0]||(a[0]=[y("div",{class:"image-slot"},"加载中...",-1)])),_:1},8,["src"]),e(i,{type:"primary",onClick:_},{default:o(()=>a[1]||(a[1]=[C("刷新二维码")])),_:1})]),_:1}),e(r,{label:"微信"},{default:o(()=>[e(p,{class:"vab-data-empty",description:"暂无数据"})]),_:1})]),_:1})])}}}),$=x(h,[["__scopeId","data-v-d0a8fefd"]]);export{$ as default};
