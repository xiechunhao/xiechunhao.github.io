/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 16:06:30 
 */
import{_ as c}from"./index-D08hoOyC.js";import{d as r,$ as i,o,b as n,a3 as d,aj as l,e as s,W as p,n as _,a1 as u}from"./vsv-element-plus-OoOmiKKG.js";import"./vsv-icon-Df9CwUcM.js";import"./vsv-nprogress-CNnfF26O.js";const m=r({name:"NodePanel",props:{lf:{type:Object,default:()=>{}}},data(){return{nodeList:[{text:"开始",type:"start",icon:"play-circle-line"},{text:"矩形",type:"rect",icon:"shape-line"},{type:"user",text:"用户",icon:"user-3-line"},{type:"push",text:"推送",icon:"share-line"},{type:"download",text:"位置",icon:"user-location-line"},{type:"end",text:"结束",icon:"stop-circle-line"}]}},methods:{$_dragNode(e){this.$props.lf.dnd.startDrag({type:e.type,text:e.label})}}}),y={class:"node-panel"},f=["onMousedown"],x={class:"node-label"};function h(e,$,v,b,g,N){const a=i("vab-icon");return o(),n("div",y,[(o(!0),n(d,null,l(e.nodeList,t=>(o(),n("div",{key:t.text,class:"node-item",onMousedown:k=>e.$_dragNode(t)},[s("div",{class:_(["node-item-icon",t.class])},[p(a,{icon:t.icon},null,8,["icon"])],2),s("span",x,u(t.text),1)],40,f))),128))])}const j=c(m,[["render",h],["__scopeId","data-v-1e516297"]]);export{j as default};
