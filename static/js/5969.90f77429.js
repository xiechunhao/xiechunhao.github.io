/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-12 00:44:12
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5969],{15969:function(e,t,s){s.r(t),s.d(t,{default:function(){return y}});var n=s(34641),o=s(27386);const a={class:"node-panel"},d=["onMousedown"],l={key:0,class:"shape"},p={class:"node-label"};function r(e,t,s,r,c,u){return(0,n.uX)(),(0,n.CE)("div",a,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.nodeList,(t=>((0,n.uX)(),(0,n.CE)("div",{key:t.text,class:"node-item",onMousedown:s=>e.$_dragNode(t)},[(0,n.Lk)("div",{class:(0,o.C4)(["node-item-icon",t.class])},["user"===t.type||"time"===t.type?((0,n.uX)(),(0,n.CE)("div",l)):(0,n.Q3)("",!0)],2),(0,n.Lk)("span",p,(0,o.v_)(t.text),1)],40,d)))),128))])}var c=(0,n.pM)({name:"NodePanel",props:{lf:{type:Object,default:()=>{}}},data(){return{nodeList:[{text:"开始",type:"start",class:"node-start"},{text:"矩形",type:"rect",class:"node-rect"},{type:"user",text:"用户",class:"node-user"},{type:"push",text:"推送",class:"node-push"},{type:"download",text:"位置",class:"node-download"},{type:"end",text:"结束",class:"node-end"}]}},methods:{$_dragNode(e){this.$props.lf.dnd.startDrag({type:e.type,text:e.label})}}});function u(e){e.__source="src/views/other/workflow/components/lFComponents/NodePanel.vue"}var i=s(48499);"function"===typeof u&&u(c);const f=(0,i.A)(c,[["render",r],["__scopeId","data-v-7234497f"]]);var y=f}}]);