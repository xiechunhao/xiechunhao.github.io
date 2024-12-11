/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-12-11 15:03:04
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[1293,3878,5597,6169,8998,9816],{11293:function(e,t,o){o.r(t),o.d(t,{default:function(){return p}});var l=o(35835),a=(o(72688),o(10366),o(11877),o(31542)),s=(o(87157),o(34641)),n=o(27386);function d(e,t,o,d,i,r){const c=a.S2,u=l.v$,p=l.q;return(0,s.uX)(),(0,s.Wv)(p,{"tab-position":"left"},{default:(0,s.k6)((()=>[(0,s.bF)(u,{label:"添加动作"},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.nodeList,(t=>((0,s.uX)(),(0,s.CE)("div",{key:t.type},[(0,s.bF)(c,{class:"add-node-btn",type:"primary",onClick:o=>e.$_addNode(t)},{default:(0,s.k6)((()=>[(0,s.eW)((0,n.v_)(t.label),1)])),_:2},1032,["onClick"])])))),128))])),_:1}),(0,s.bF)(u,{label:"添加组"},{default:(0,s.k6)((()=>[(0,s.bF)(c,{class:"add-node-btn",type:"primary",onClick:e.$_addTempalte},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)(" 模板 ")]))),_:1},8,["onClick"])])),_:1})])),_:1})}var i=(0,s.pM)({name:"AddPanel",props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object||String,default:()=>{}}},emits:["addNodeFinish"],data(){return{nodeList:[{type:"user",label:"用户"},{type:"push",label:"推送"}]}},methods:{$_addNode(e){const{lf:t,nodeData:o}=this.$props,{id:l,x:a,y:s}=o,n=t.addNode({type:e.type,x:a+150,y:s+150}),d=n.id;t.createEdge({sourceNodeId:l,targetNodeId:d}),this.$emit("addNodeFinish")},$_addTempalte(){const{lf:e,nodeData:t}=this.$props,{id:o,x:l,y:a}=t,s=e.addNode({type:"download",x:l,y:a+150}),n=e.addNode({type:"user",x:l+150,y:a+150}),d=e.addNode({type:"push",x:l+150,y:a+300,properties:{}}),i=e.addNode({type:"end",x:l+300,y:a+150}),r=e.addNode({type:"end",x:l+300,y:a+300});e.createEdge({sourceNodeId:o,targetNodeId:s.id}),e.createEdge({sourceNodeId:s.id,targetNodeId:n.id}),e.createEdge({sourceNodeId:n.id,targetNodeId:i.id,endPoint:{x:l+280,y:a+150},text:{value:"Y",x:l+230,y:a+140}}),e.createEdge({sourceNodeId:n.id,targetNodeId:d.id,text:{value:"N",x:l+160,y:a+230}}),e.createEdge({sourceNodeId:d.id,targetNodeId:r.id,endPoint:{x:l+280,y:a+300}}),this.$emit("addNodeFinish")}}});function r(e){e.__source="src/views/other/workflow/components/lFComponents/AddPanel.vue"}var c=o(48499);"function"===typeof r&&r(i);const u=(0,c.A)(i,[["render",d],["__scopeId","data-v-5ea176c8"]]);var p=u},8998:function(e,t,o){o.r(t),o.d(t,{default:function(){return c}});var l=o(31542),a=(o(72688),o(3851),o(87157),o(34641));function s(e,t,o,s,n,d){const i=l.S2,r=l.fg;return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(r,null,{default:(0,a.k6)((()=>[(0,a.bF)(i,{plain:"",size:"small",onClick:e.$_zoomIn},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("放大")]))),_:1},8,["onClick"]),(0,a.bF)(i,{plain:"",size:"small",onClick:e.$_zoomOut},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("缩小")]))),_:1},8,["onClick"]),(0,a.bF)(i,{plain:"",size:"small",onClick:e.$_zoomReset},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)("大小适应")]))),_:1},8,["onClick"]),(0,a.bF)(i,{plain:"",size:"small",onClick:e.$_translateRest},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)(" 定位还原 ")]))),_:1},8,["onClick"]),(0,a.bF)(i,{plain:"",size:"small",onClick:e.$_reset},{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.eW)("还原(大小&定位)")]))),_:1},8,["onClick"]),(0,a.bF)(i,{disabled:e.undoDisable,plain:"",size:"small",onClick:e.$_undo},{default:(0,a.k6)((()=>t[5]||(t[5]=[(0,a.eW)(" 上一步(ctrl+z) ")]))),_:1},8,["disabled","onClick"]),(0,a.bF)(i,{disabled:e.redoDisable,plain:"",size:"small",onClick:e.$_redo},{default:(0,a.k6)((()=>t[6]||(t[6]=[(0,a.eW)(" 下一步(ctrl+y) ")]))),_:1},8,["disabled","onClick"]),(0,a.bF)(i,{plain:"",size:"small",onClick:e.$_download},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("下载图片")]))),_:1},8,["onClick"]),(0,a.bF)(i,{plain:"",size:"small",onClick:e.$_catData},{default:(0,a.k6)((()=>t[8]||(t[8]=[(0,a.eW)("查看数据")]))),_:1},8,["onClick"])])),_:1})])}var n=(0,a.pM)({name:"Control",props:{lf:{type:Object||String,default:()=>{}}},emits:["cat-data"],data(){return{undoDisable:!0,redoDisable:!0,graphData:null,dataVisible:!1}},mounted(){this.$props.lf.on("history:change",(({data:{undoAble:e,redoAble:t}})=>{this.$data.undoDisable=!e,this.$data.redoDisable=!t}))},methods:{$_zoomIn(){this.$props.lf.zoom(!0)},$_zoomOut(){this.$props.lf.zoom(!1)},$_zoomReset(){this.$props.lf.resetZoom()},$_translateRest(){this.$props.lf.resetTranslate()},$_reset(){this.$props.lf.resetZoom(),this.$props.lf.resetTranslate()},$_undo(){this.$props.lf.undo()},$_redo(){this.$props.lf.redo()},$_download(){this.$props.lf.getSnapshot()},$_catData(){this.$emit("cat-data")}}});function d(e){e.__source="src/views/other/workflow/components/lFComponents/Control.vue"}var i=o(48499);"function"===typeof d&&d(n);const r=(0,i.A)(n,[["render",s]]);var c=r},95597:function(e,t,o){o.r(t),o.d(t,{default:function(){return u}});var l=o(34641);function a(e,t,o,a,s,n){const d=(0,l.g2)("vab-json-viewer");return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.bF)(d,{copyable:"","expand-depth":5,sort:"",value:e.data},null,8,["value"])])}var s=o(98969),n=o.n(s),d=(0,l.pM)({components:{VabJsonViewer:n()},props:{graphData:{type:Object,default:()=>{}}},data(){return{data:[]}},created(){this.data=JSON.parse(JSON.stringify([{edges:this.graphData.edges,nodes:this.graphData.nodes}]))}});function i(e){e.__source="src/views/other/workflow/components/lFComponents/DataDialog.vue"}var r=o(48499);"function"===typeof i&&i(d);const c=(0,r.A)(d,[["render",a]]);var u=c},29816:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var l=o(34641),a=o(27386);const s={class:"node-panel"},n=["onMousedown"],d={key:0,class:"shape"},i={class:"node-label"};function r(e,t,o,r,c,u){return(0,l.uX)(),(0,l.CE)("div",s,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.nodeList,(t=>((0,l.uX)(),(0,l.CE)("div",{key:t.text,class:"node-item",onMousedown:o=>e.$_dragNode(t)},[(0,l.Lk)("div",{class:(0,a.C4)(["node-item-icon",t.class])},["user"===t.type||"time"===t.type?((0,l.uX)(),(0,l.CE)("div",d)):(0,l.Q3)("",!0)],2),(0,l.Lk)("span",i,(0,a.v_)(t.text),1)],40,n)))),128))])}var c=(0,l.pM)({name:"NodePanel",props:{lf:{type:Object,default:()=>{}}},data(){return{nodeList:[{text:"开始",type:"start",class:"node-start"},{text:"矩形",type:"rect",class:"node-rect"},{type:"user",text:"用户",class:"node-user"},{type:"push",text:"推送",class:"node-push"},{type:"download",text:"位置",class:"node-download"},{type:"end",text:"结束",class:"node-end"}]}},methods:{$_dragNode(e){this.$props.lf.dnd.startDrag({type:e.type,text:e.label})}}});function u(e){e.__source="src/views/other/workflow/components/lFComponents/NodePanel.vue"}var p=o(48499);"function"===typeof u&&u(c);const h=(0,p.A)(c,[["render",r],["__scopeId","data-v-7234497f"]]);var f=h},88142:function(e,t,o){o.r(t),o.d(t,{default:function(){return F}});var l=o(60013),a=(o(72688),o(8732),o(50550)),s=(o(31020),o(34641)),n=o(27386);const d={class:"workflow-container"},i={id:"container",ref:"container"};function r(e,t,o,r,c,u){const p=(0,s.g2)("Control"),h=(0,s.g2)("NodePanel"),f=(0,s.g2)("AddPanel"),g=(0,s.g2)("PropertyDialog"),y=a.pw,m=(0,s.g2)("DataDialog"),k=l.kZ;return(0,s.uX)(),(0,s.CE)("div",d,[e.lf?((0,s.uX)(),(0,s.Wv)(p,{key:0,class:"vab-control",lf:e.lf,onCatData:e.catData},null,8,["lf","onCatData"])):(0,s.Q3)("",!0),(0,s.bF)(h,{lf:e.lf},null,8,["lf"]),(0,s.Lk)("div",i,null,512),e.showAddPanel?((0,s.uX)(),(0,s.Wv)(f,{key:1,class:"add-panel",lf:e.lf,"node-data":e.addClickNode,style:(0,n.Tr)(e.addPanelStyle),onAddNodeFinish:e.hideAddPanel},null,8,["lf","node-data","style","onAddNodeFinish"])):(0,s.Q3)("",!0),(0,s.bF)(y,{modelValue:e.dialogVisible,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dialogVisible=t),"before-close":e.closeDialog,direction:"rtl",size:"400px",title:"设置节点属性"},{default:(0,s.k6)((()=>[e.dialogVisible?((0,s.uX)(),(0,s.Wv)(g,{key:0,lf:e.lf,"node-data":e.clickNode,onSetPropertiesFinish:e.closeDialog},null,8,["lf","node-data","onSetPropertiesFinish"])):(0,s.Q3)("",!0)])),_:1},8,["modelValue","before-close"]),(0,s.bF)(k,{modelValue:e.dataVisible,"onUpdate:modelValue":t[1]||(t[1]=t=>e.dataVisible=t),title:"数据",width:"50%"},{default:(0,s.k6)((()=>[(0,s.bF)(m,{"graph-data":e.graphData},null,8,["graph-data"])])),_:1},8,["modelValue"])])}var c=o(80085);function u(e){return(0,c.A)({url:"/workflow/getList",method:"get",params:e})}var p=o(2807),h=o.n(p),f=o(38320),g=(o(97073),o(29816)),y=o(11293),m=o(8998),k=o(85684),v=o(95597);o(43027);function x(e){e.register("start",(({CircleNode:e,CircleNodeModel:t,h:o})=>{class l extends e{getLabelShape(){const{x:e,y:t}=this.props.model;return o("text",{fill:"#000000",fontSize:12,x:e-13,y:t+4,width:50,height:25},"Start")}getShape(){const{model:e}=this.props,{x:t,y:l}=e,a=e.getNodeStyle();return o("g",{},[o("circle",{...a,cx:t,cy:l}),this.getLabelShape()])}}class a extends t{constructor(e,t){e.text={value:e.text&&e.text.value||"",x:e.x,y:e.y+35,dragable:!1,editable:!0},super(e,t)}getConnectedTargetRules(){const e=super.getConnectedTargetRules(),t={message:"起始节点不能作为连线的终点",validate:()=>!1};return e.push(t),e}}return{view:l,model:a}}))}o(58607);function b(e){e.register("user",(({PolygonNode:t,PolygonNodeModel:o,h:l})=>{class a extends t{getIconShape(){const{stroke:e}=this.props.model;return l("svg",{x:20,y:18,width:30,height:30,viewBox:"0 0 1126 1024"},l("path",{fill:e,d:"M792.576 379.392a25.6 25.6 0 0 0 25.2928 25.8048h283.2384A25.6 25.6 0 0 0 1126.4 379.392a25.6 25.6 0 0 0-25.2928-25.8048h-283.2384a25.6 25.6 0 0 0-25.344 25.8048z m303.9232 80.7424H761.856c-16.5376 0-29.9008 11.6224-29.9008 25.7536 0 14.1824 13.312 25.7536 29.9008 25.7536h334.6432c16.4864 0 29.9008-11.5712 29.9008-25.7536 0-14.1312-13.4144-25.7536-29.9008-25.7536z m4.608 106.496h-283.2384a25.6 25.6 0 0 0-25.344 25.7536 25.6 25.6 0 0 0 25.344 25.7536h283.2384A25.6 25.6 0 0 0 1126.4 592.384a25.6 25.6 0 0 0-25.2928-25.8048zM543.0272 1024H341.6576C150.8352 1024 0 1024 0 923.648v-20.1216c0-188.16 153.2928-341.1968 341.7088-341.1968h201.2672c188.416 0 341.76 153.0368 341.76 341.1968v20.0704C884.6848 1024 726.3232 1024 542.976 1024z m-203.1616-405.1456c-158.464 0-287.4368 128.4096-287.4368 286.208v20.48c0 40.9088 166.0928 40.9088 287.4368 40.9088h204.9536c100.4544 0 287.4368 0 287.4368-40.96v-20.3776c0-157.8496-128.9728-286.208-287.4368-286.208H339.8656z m92.416-76.7488a271.4112 271.4112 0 0 1-271.2064-271.0528A271.36 271.36 0 0 1 432.2816 0a271.36 271.36 0 0 1 271.2064 271.0528 271.4624 271.4624 0 0 1-271.2064 271.0528z m-215.3472-271.872c0 118.1696 96.6144 214.3232 215.3472 214.3232 118.784 0 215.3984-96.1536 215.3984-214.3232 0-118.2208-96.6144-214.3232-215.3984-214.3232S216.9344 152.0128 216.9344 270.2336z"}))}getShape(){const{model:e}=this.props,{width:t,height:o,x:a,y:s,fillOpacity:n,strokeOpacity:d,points:i}=e,r=e.getNodeStyle(),c=`matrix(1 0 0 1 ${a-t/2} ${s-o/2})`,u=i.map((e=>e.join(","))).join(" ");return l("g",{transform:c},[l("polygon",{...r,points:u,strokeOpacity:d,fillOpacity:n}),this.getIconShape()])}}class s extends o{constructor(t,o){t.text={value:t.text&&t.text.value||"",x:t.x,y:t.y+50},super(t,o);const l=35;this.points=[[l,0],[2*l,l],[l,2*l],[0,l]],this.menu=[{text:"删除",className:"lf-menu-delete",icon:!0,callback(t){const o=window.confirm("你确定要删除吗？");o&&e.deleteNode(t.id)}},{text:"编辑",className:"lf-menu-item",callback(t){e.editText(t.id)}},{text:"复制",className:"lf-menu-item",callback(t){e.cloneNode(t.id)}}]}}return{view:a,model:s}}))}function C(e){e.register("end",(({CircleNode:e,CircleNodeModel:t,h:o})=>{class l extends e{getIconShape(){const{x:e,y:t,width:l,height:a}=this.props.model,s="#404040";return o("svg",{x:e-l/4,y:t-a/4,width:l/2,height:l/2,viewBox:"0 0 1024 1024"},o("path",{fill:s,d:"M212.992 526.336 212.992 526.336 212.992 526.336 215.04 526.336 212.992 526.336Z"}),o("path",{fill:s,d:"M724.992 296.96 724.992 296.96 296.96 296.96 296.96 724.992 724.992 724.992 724.992 296.96Z"}))}getShape(){const{model:e}=this.props,{x:t,y:l}=e,a=e.getNodeStyle();return o("g",{},[o("circle",{...a,cx:t,cy:l}),this.getIconShape()])}}class a extends t{constructor(e,t){e.text={value:e.text&&e.text.value||"",x:e.x,y:e.y+35},super(e,t)}getConnectedSourceRules(){const e=super.getConnectedSourceRules(),t={message:"终止节点不能作为连线的起点",validate:()=>!1};return e.push(t),e}}return{view:l,model:a}}))}o(98729),o(99817);function w(e,t,o){e.register("push",(({PolygonNode:l,PolygonNodeModel:a,h:s})=>{class n extends l{getIconShape(){const{model:e}=this.props,{stroke:t}=e;return s("svg",{x:18,y:18,width:30,height:30,viewBox:"0 0 1024 1024"},s("path",{fill:t,d:"M866.461538 39.384615H393.846154c-43.323077 0-78.769231 35.446154-78.769231 78.769231v1.969231c0 13.784615 7.876923 27.569231 19.692308 35.446154 5.907692 3.938462 80.738462 78.769231 80.738461 78.769231 5.907692 5.907692 15.753846 0 15.753846-7.876924 0-15.753846 13.784615-31.507692 29.538462-31.507692h334.769231c15.753846 0 31.507692 15.753846 31.507692 31.507692v531.692308c0 15.753846-15.753846 27.569231-31.507692 27.569231h-334.769231c-15.753846 0-27.569231-11.815385-27.569231-27.569231v-1.969231c0-7.876923-9.846154-11.815385-15.753846-5.907692 0 0-74.830769 74.830769-82.707692 78.769231-11.815385 7.876923-19.692308 19.692308-19.692308 35.446154v39.384615c0 43.323077 33.476923 78.769231 76.8 78.769231h472.615385c43.323077 0 80.738462-35.446154 80.738461-78.769231V118.153846c0-43.323077-35.446154-78.769231-78.769231-78.769231zM630.153846 945.230769c-33.476923 0-59.076923-25.6-59.076923-59.076923s25.6-59.076923 59.076923-59.076923 59.076923 25.6 59.076923 59.076923-25.6 59.076923-59.076923 59.076923z m-86.646154-474.584615L297.353846 224.492308c-11.815385-11.815385-29.538462-11.815385-41.353846 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l90.584615 90.584615c11.815385 11.815385 3.938462 33.476923-13.784615 33.476923H29.538462c-15.753846 1.969231-29.538462 15.753846-29.538462 31.507693v59.076923c0 15.753846 13.784615 29.538462 29.538462 29.538461h259.938461c17.723077 0 25.6 21.661538 13.784615 33.476923l-90.584615 90.584616c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L543.507692 512c9.846154-9.846154 9.846154-29.538462 0-41.353846z"}))}getPlusShape(){const{model:l}=this.props,a=e.getGraphData(),n=a.edges,d=n.some((e=>e.sourceNodeId===l.id));return!d&&s("svg",{x:70,y:20,width:30,height:30,viewBox:"0 0 1024 1024",class:"time-plus",onClick:e=>t(e,l),onMousedown:e=>o(e,l),onMouseUp:e=>o(e,l)},s("path",{fill:"#f17611",d:"M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z"}),s("path",{fill:"#ffffff",d:"M448 298.666667h128v426.666666h-128z"}),s("path",{fill:"#ffffff",d:"M298.666667 448h426.666666v128H298.666667z"}))}getShape(){const{model:e}=this.props,{width:t,height:o,x:l,y:a,fillOpacity:n,strokeOpacity:d,points:i}=e,r=e.getNodeStyle(),c=`matrix(1 0 0 1 ${l-t/2} ${a-o/2})`,u=i.map((e=>e.join(","))).join(" ");return s("g",{transform:c},[s("polygon",{...r,points:u,strokeOpacity:d,fillOpacity:n}),this.getIconShape(),this.getPlusShape()])}}class d extends a{constructor(e,t){e.text={value:e.text&&e.text.value||"",x:e.x,y:e.y+50},super(e,t);const o=35;this.points=[[o,0],[2*o,o],[o,2*o],[0,o]]}}return{view:n,model:d}}))}const N="#9932CC";function $(e){e.register("download",(({PolygonNode:e,PolygonNodeModel:t,h:o})=>{class l extends e{getIconShape(){return o("svg",{x:14,y:13,width:23,height:23,viewBox:"0 0 1024 1024"},o("path",{fill:N,d:"M831.513034 319.863005h-95.945189c-17.662265 0-31.980365 14.3181-31.980365 31.980365 0 17.662265 14.3181 31.980365 31.980365 31.980366h64.218604c17.520025 0 31.722492 14.202467 31.722492 31.722492V863.786065c0 17.520025-14.202467 31.722492-31.722492 31.722492H159.66442c-17.520025 0-31.722492-14.202467-31.722493-31.722492V415.546228c0-17.520025 14.202467-31.722492 31.722493-31.722492h64.218603c17.662265 0 31.980365-14.3181 31.980366-31.980366 0-17.662265-14.3181-31.980365-31.980366-31.980365H127.937834c-35.322483 0-63.956637 28.634154-63.956637 63.956637v511.693008c0 35.322483 28.634154 63.956637 63.956637 63.956638h703.5752c35.322483 0 63.956637-28.634154 63.956638-63.956638V383.819642c0-35.32146-28.634154-63.956637-63.956638-63.956637z"}),o("path",{fill:N,d:"M310.382073 521.036817c-12.388145-12.388145-32.473599-12.388145-44.862767 0l-0.364297 0.364297c-12.388145 12.388145-12.388145 32.473599 0 44.862767l190.186573 190.186574c5.818519 6.813173 14.465456 11.137665 24.126491 11.137664h0.515746c9.662057 0 18.307971-4.324492 24.12649-11.137664L694.296883 566.263881c12.388145-12.388145 12.388145-32.473599 0-44.862767l-0.364297-0.364297c-12.388145-12.388145-32.473599-12.388145-44.862767 0L511.706311 658.400325V95.743598c0-17.520025-14.202467-31.722492-31.722492-31.722492h-0.515746c-17.520025 0-31.722492 14.202467-31.722493 31.722492v562.656727L310.382073 521.036817z"}))}getShape(){const{model:e}=this.props,{width:t,height:l,x:a,y:s,fillOpacity:n,strokeOpacity:d,points:i}=e,r=e.getNodeStyle(),c=`matrix(1 0 0 1 ${a-t/2} ${s-l/2})`,u=i.map((e=>e.join(","))).join(" ");return o("g",{transform:c},[o("polygon",{...r,points:u,strokeOpacity:d,fillOpacity:n}),this.getIconShape()])}}class a extends t{constructor(e,t){e.text={value:e.text&&e.text.value||"",x:e.x,y:e.y+50},super(e,t);const o=25;this.points=[[o,0],[2*o,o],[o,2*o],[0,o]],this.stroke=N}}return{view:l,model:a}}))}function _(e){e.register("polyline",(({PolylineEdge:e,PolylineEdgeModel:t})=>{class o extends t{constructor(e,t){super(e,t)}}return{view:e,model:o}}))}var D=(0,s.pM)({name:"Workflow",components:{NodePanel:g["default"],AddPanel:y["default"],Control:m["default"],PropertyDialog:k["default"],DataDialog:v["default"]},data(){return{data:[],lf:null,showAddPanel:!1,addPanelStyle:{top:0,left:0},addClickNode:null,clickNode:null,dialogVisible:!1,graphData:null,dataVisible:!1}},created(){this.fetchData()},methods:{async fetchData(){const{data:e}=await u();this.data=e,this.$_initLf()},$_initLf(){const e=this,t={container:this.$refs.container,background:{backgroundColor:"#f7f9ff"},grid:{size:10,visible:!1},keyboard:{enabled:!0},edgeTextDraggable:!0,guards:{beforeClone(e){return console.log("beforeClone",e),!0},beforeDelete(e){return console.log("beforeDelete",e),!0}}};h().use(f.W1),h().use(f.Fm),this.lf=new(h())({...t}),this.lf.setMenuConfig({nodeMenu:[],edgeMenu:[]}),this.lf.addMenuConfig({nodeMenu:[{text:"分享",callback(){e.$baseAlert("分享成功！")}},{text:"属性",callback(t){e.$baseAlert(`\n                节点id：${t.id}\n                节点类型：${t.type}\n                节点坐标：(x: ${t.x}, y: ${t.y})`)}}],edgeMenu:[{text:"属性",callback(t){e.$baseAlert(`\n                边id：${t.id}\n                边类型：${t.type}\n                边坐标：(x: ${t.x}, y: ${t.y})\n                源节点id：${t.sourceNodeId}\n                目标节点id：${t.targetNodeId}`)}}]}),this.lf.setTheme({circle:{r:20,stroke:"#000000",outlineColor:"#88f",strokeWidth:1},rect:{outlineColor:"#88f",strokeWidth:1},polygon:{strokeWidth:1},polyline:{stroke:"#000000",hoverStroke:"#000000",selectedStroke:"#000000",outlineColor:"#88f",strokeWidth:1},nodeText:{color:"#000000"},edgeText:{color:"#000000",background:{fill:"#f7f9ff"}}}),this.registerNode()},registerNode(){x(this.lf),b(this.lf),C(this.lf),w(this.lf,this.clickPlus,this.mouseDownPlus),$(this.lf),_(this.lf),this.render()},render(){this.lf.render(this.data),this.event()},getData(){const e=this.lf.getGraphData();console.log(JSON.stringify(e))},event(){this.lf.on("node:click",(({data:e})=>{console.log("node:click",e),this.clickNode=e,this.dialogVisible=!0})),this.lf.on("edge:click",(({data:e})=>{console.log("edge:click",e),this.clickNode=e,this.dialogVisible=!0})),this.lf.on("element:click",(()=>{this.hideAddPanel()})),this.lf.on("blank:click",(()=>{this.hideAddPanel()})),this.lf.on("connection:not-allowed",(e=>{this.$message({type:"error",message:e.msg})})),this.lf.on("node:mousemove",(()=>{console.log("on mousemove")}))},clickPlus(e,t){e.stopPropagation(),console.log("clickPlus",e,t);const{clientX:o,clientY:l}=e;console.log(o,l),this.addPanelStyle.top=l-40+"px",this.addPanelStyle.left=`${o}px`,this.showAddPanel=!0,this.addClickNode=t},mouseDownPlus(e,t){e.stopPropagation(),console.log("mouseDownPlus",e,t)},hideAddPanel(){this.showAddPanel=!1,this.addPanelStyle.top=0,this.addPanelStyle.left=0,this.addClickNode=null},closeDialog(){this.dialogVisible=!1},catData(){this.graphData=this.lf.getGraphData(),this.dataVisible=!0}}});function P(e){e.__source="src/views/other/workflow/index.vue"}var S=o(48499);"function"===typeof P&&P(D);const z=(0,S.A)(D,[["render",r],["__scopeId","data-v-0b094b3b"]]);var F=z}}]);