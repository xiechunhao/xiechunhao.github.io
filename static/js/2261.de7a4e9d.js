/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-12 01:02:20
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2261],{62261:function(e,d,t){t.r(d),t.d(d,{default:function(){return c}});var a=t(4197),o=(t(27322),t(12208),t(98803),t(73120)),n=(t(52539),t(34641)),i=t(27386);function r(e,d,t,r,s,l){const p=o.S2,u=a.v$,c=a.q;return(0,n.uX)(),(0,n.Wv)(c,{"tab-position":"left"},{default:(0,n.k6)((()=>[(0,n.bF)(u,{label:"添加动作"},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.nodeList,(d=>((0,n.uX)(),(0,n.CE)("div",{key:d.type},[(0,n.bF)(p,{class:"add-node-btn",type:"primary",onClick:t=>e.$_addNode(d)},{default:(0,n.k6)((()=>[(0,n.eW)((0,i.v_)(d.label),1)])),_:2},1032,["onClick"])])))),128))])),_:1}),(0,n.bF)(u,{label:"添加组"},{default:(0,n.k6)((()=>[(0,n.bF)(p,{class:"add-node-btn",type:"primary",onClick:e.$_addTempalte},{default:(0,n.k6)((()=>d[0]||(d[0]=[(0,n.eW)(" 模板 ")]))),_:1},8,["onClick"])])),_:1})])),_:1})}var s=(0,n.pM)({name:"AddPanel",props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object||String,default:()=>{}}},emits:["addNodeFinish"],data(){return{nodeList:[{type:"user",label:"用户"},{type:"push",label:"推送"}]}},methods:{$_addNode(e){const{lf:d,nodeData:t}=this.$props,{id:a,x:o,y:n}=t,i=d.addNode({type:e.type,x:o+150,y:n+150}),r=i.id;d.createEdge({sourceNodeId:a,targetNodeId:r}),this.$emit("addNodeFinish")},$_addTempalte(){const{lf:e,nodeData:d}=this.$props,{id:t,x:a,y:o}=d,n=e.addNode({type:"download",x:a,y:o+150}),i=e.addNode({type:"user",x:a+150,y:o+150}),r=e.addNode({type:"push",x:a+150,y:o+300,properties:{}}),s=e.addNode({type:"end",x:a+300,y:o+150}),l=e.addNode({type:"end",x:a+300,y:o+300});e.createEdge({sourceNodeId:t,targetNodeId:n.id}),e.createEdge({sourceNodeId:n.id,targetNodeId:i.id}),e.createEdge({sourceNodeId:i.id,targetNodeId:s.id,endPoint:{x:a+280,y:o+150},text:{value:"Y",x:a+230,y:o+140}}),e.createEdge({sourceNodeId:i.id,targetNodeId:r.id,text:{value:"N",x:a+160,y:o+230}}),e.createEdge({sourceNodeId:r.id,targetNodeId:l.id,endPoint:{x:a+280,y:o+300}}),this.$emit("addNodeFinish")}}});function l(e){e.__source="src/views/other/workflow/components/lFComponents/AddPanel.vue"}var p=t(48499);"function"===typeof l&&l(s);const u=(0,p.A)(s,[["render",r],["__scopeId","data-v-5ea176c8"]]);var c=u}}]);