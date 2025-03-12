/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-13 00:18:02
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39278586"],{"0414":function(e,t,o){},16270:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"node-panel"},e._l(e.nodeList,(function(o){return t("div",{key:o.text,staticClass:"node-item",on:{mousedown:function(t){return e.$_dragNode(o)}}},[t("div",{staticClass:"node-item-icon",class:o.class},["user"===o.type||"time"===o.type?t("div",{staticClass:"shape"}):e._e()]),t("span",{staticClass:"node-label"},[e._v(e._s(o.text))])])})),0)},l=[],s={name:"NodePanel",props:{lf:{type:Object,default:()=>{}}},data(){return{nodeList:[{text:"开始",type:"start",class:"node-start"},{text:"矩形",type:"rect",class:"node-rect"},{type:"user",text:"用户",class:"node-user"},{type:"push",text:"推送",class:"node-push"},{type:"download",text:"位置",class:"node-download"},{type:"end",text:"结束",class:"node-end"}]}},methods:{$_dragNode(e){this.$props.lf.dnd.startDrag({type:e.type,text:e.label})}}},n=s,i=(o("ca4e"),o("829d")),r=Object(i["a"])(n,a,l,!1,null,"356ca9d4",null);t["default"]=r.exports},2585:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"workflow-container"},[e.lf?t("Control",{staticClass:"vab-control",attrs:{lf:e.lf},on:{"cat-data":e.catData}}):e._e(),t("NodePanel",{attrs:{lf:e.lf}}),t("div",{ref:"container",attrs:{id:"container"}}),e.showAddPanel?t("AddPanel",{staticClass:"add-panel",style:e.addPanelStyle,attrs:{lf:e.lf,"node-data":e.addClickNode},on:{addNodeFinish:e.hideAddPanel}}):e._e(),t("el-drawer",{attrs:{"before-close":e.closeDialog,direction:"rtl",size:"400px",title:"设置节点属性",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[e.dialogVisible?t("PropertyDialog",{attrs:{lf:e.lf,"node-data":e.clickNode},on:{setPropertiesFinish:e.closeDialog}}):e._e()],1),t("el-dialog",{attrs:{title:"数据",visible:e.dataVisible,width:"50%"},on:{"update:visible":function(t){e.dataVisible=t}}},[t("DataDialog",{attrs:{"graph-data":e.graphData}})],1)],1)},l=[],s=o("f36f"),n=o("316d"),i=o.n(n),r=o("bd1f"),d=(o("fe3b"),o("9654"),o("16270")),c=o("3457"),u=o("8adc"),f=o("6af9"),p=o("72df"),h=o("9f20"),m={name:"Workflow",components:{NodePanel:d["default"],AddPanel:c["default"],Control:u["default"],PropertyDialog:f["default"],DataDialog:p["default"]},data(){return{data:[],lf:null,showAddPanel:!1,addPanelStyle:{top:0,left:0},addClickNode:null,clickNode:null,dialogVisible:!1,graphData:null,dataVisible:!1}},created(){this.fetchData()},methods:{async fetchData(){const{data:e}=await Object(s["getList"])();this.data=e,this.$nextTick(()=>{this.$_initLf()})},$_initLf(){const e=this,t={container:this.$refs.container,background:{backgroundColor:"#f7f9ff"},grid:{size:10,visible:!1},keyboard:{enabled:!0},edgeTextDraggable:!0,guards:{beforeClone(e){return console.log("beforeClone",e),!0},beforeDelete(e){return console.log("beforeDelete",e),!0}}};i.a.use(r["a"]),i.a.use(r["b"]),this.lf=new i.a({...t}),this.lf.setMenuConfig({nodeMenu:[],edgeMenu:[]}),this.lf.addMenuConfig({nodeMenu:[{text:"分享",callback(){e.$baseAlert("分享成功！")}},{text:"属性",callback(t){e.$baseAlert(`\n                节点id：${t.id}\n                节点类型：${t.type}\n                节点坐标：(x: ${t.x}, y: ${t.y})`)}}],edgeMenu:[{text:"属性",callback(t){e.$baseAlert(`\n                边id：${t.id}\n                边类型：${t.type}\n                边坐标：(x: ${t.x}, y: ${t.y})\n                源节点id：${t.sourceNodeId}\n                目标节点id：${t.targetNodeId}`)}}]}),this.lf.setTheme({circle:{r:20,stroke:"#000000",outlineColor:"#88f",strokeWidth:1},rect:{outlineColor:"#88f",strokeWidth:1},polygon:{strokeWidth:1},polyline:{stroke:"#000000",hoverStroke:"#000000",selectedStroke:"#000000",outlineColor:"#88f",strokeWidth:1},nodeText:{color:"#000000"},edgeText:{color:"#000000",background:{fill:"#f7f9ff"}}}),this.registerNode()},registerNode(){Object(h["registerStart"])(this.lf),Object(h["registerUser"])(this.lf),Object(h["registerEnd"])(this.lf),Object(h["registerPush"])(this.lf,this.clickPlus,this.mouseDownPlus),Object(h["registerDownload"])(this.lf),Object(h["registerPolyline"])(this.lf),this.render()},render(){this.lf.render(this.data),this.event()},getData(){const e=this.lf.getGraphData();console.log(JSON.stringify(e))},event(){this.lf.on("node:click",({data:e})=>{console.log("node:click",e),this.clickNode=e,this.dialogVisible=!0}),this.lf.on("edge:click",({data:e})=>{console.log("edge:click",e),this.clickNode=e,this.dialogVisible=!0}),this.lf.on("element:click",()=>{this.hideAddPanel()}),this.lf.on("blank:click",()=>{this.hideAddPanel()}),this.lf.on("connection:not-allowed",e=>{this.$message({type:"error",message:e.msg})}),this.lf.on("node:mousemove",()=>{console.log("on mousemove")})},clickPlus(e,t){e.stopPropagation(),console.log("clickPlus",e,t);const{clientX:o,clientY:a}=e;console.log(o,a),this.addPanelStyle.top=a-40+"px",this.addPanelStyle.left=o+"px",this.showAddPanel=!0,this.addClickNode=t},mouseDownPlus(e,t){e.stopPropagation(),console.log("mouseDownPlus",e,t)},hideAddPanel(){this.showAddPanel=!1,this.addPanelStyle.top=0,this.addPanelStyle.left=0,this.addClickNode=null},closeDialog(){this.dialogVisible=!1},catData(){this.graphData=this.lf.getGraphData(),this.dataVisible=!0}}},g=m,b=(o("86ad"),o("829d")),y=Object(b["a"])(g,a,l,!1,null,"4c903832",null);t["default"]=y.exports},3457:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("el-tabs",{attrs:{"tab-position":"left"}},[t("el-tab-pane",{attrs:{label:"添加动作"}},e._l(e.nodeList,(function(o){return t("div",{key:o.type},[t("el-button",{staticClass:"add-node-btn",attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.$_addNode(o)}}},[e._v(" "+e._s(o.label)+" ")])],1)})),0),t("el-tab-pane",{attrs:{label:"添加组"}},[t("el-button",{staticClass:"add-node-btn",attrs:{size:"mini",type:"primary"},on:{click:e.$_addTempalte}},[e._v(" 模板 ")])],1)],1)},l=[],s={name:"AddPanel",props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object||String,default:()=>{}}},data(){return{nodeList:[{type:"user",label:"用户"},{type:"push",label:"推送"}]}},methods:{$_addNode(e){const{lf:t,nodeData:o}=this.$props,{id:a,x:l,y:s}=o,n=t.addNode({type:e.type,x:l+150,y:s+150}),i=n.id;t.createEdge({sourceNodeId:a,targetNodeId:i}),this.$emit("addNodeFinish")},$_addTempalte(){const{lf:e,nodeData:t}=this.$props,{id:o,x:a,y:l}=t,s=e.addNode({type:"download",x:a,y:l+150}),n=e.addNode({type:"user",x:a+150,y:l+150}),i=e.addNode({type:"push",x:a+150,y:l+300,properties:{}}),r=e.addNode({type:"end",x:a+300,y:l+150}),d=e.addNode({type:"end",x:a+300,y:l+300});e.createEdge({sourceNodeId:o,targetNodeId:s.id}),e.createEdge({sourceNodeId:s.id,targetNodeId:n.id}),e.createEdge({sourceNodeId:n.id,targetNodeId:r.id,endPoint:{x:a+280,y:l+150},text:{value:"Y",x:a+230,y:l+140}}),e.createEdge({sourceNodeId:n.id,targetNodeId:i.id,text:{value:"N",x:a+160,y:l+230}}),e.createEdge({sourceNodeId:i.id,targetNodeId:d.id,endPoint:{x:a+280,y:l+300}}),this.$emit("addNodeFinish")}}},n=s,i=(o("5731"),o("829d")),r=Object(i["a"])(n,a,l,!1,null,"502b06a0",null);t["default"]=r.exports},"4d06":function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return a}));o("ca7c");function a(e){e.register("end",({CircleNode:e,CircleNodeModel:t,h:o})=>{class a extends e{getIconShape(){const{x:e,y:t,width:a,height:l}=this.props.model,s="#404040";return o("svg",{x:e-a/4,y:t-l/4,width:a/2,height:a/2,viewBox:"0 0 1024 1024"},o("path",{fill:s,d:"M212.992 526.336 212.992 526.336 212.992 526.336 215.04 526.336 212.992 526.336Z"}),o("path",{fill:s,d:"M724.992 296.96 724.992 296.96 296.96 296.96 296.96 724.992 724.992 724.992 724.992 296.96Z"}))}getShape(){const{model:e}=this.props,{x:t,y:a}=e,l=e.getNodeStyle();return o("g",{},[o("circle",{...l,cx:t,cy:a}),this.getIconShape()])}}class l extends t{constructor(e,t){e.text={value:e.text&&e.text.value||"",x:e.x,y:e.y+35},super(e,t)}getConnectedSourceRules(){const e=super.getConnectedSourceRules(),t={message:"终止节点不能作为连线的起点",validate:()=>!1};return e.push(t),e}}return{view:a,model:l}})}},5105:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return a}));o("05a0"),o("5614");function a(e){e.register("user",({PolygonNode:t,PolygonNodeModel:o,h:a})=>{class l extends t{getIconShape(){const{stroke:e}=this.props.model;return a("svg",{x:20,y:18,width:30,height:30,viewBox:"0 0 1126 1024"},a("path",{fill:e,d:"M792.576 379.392a25.6 25.6 0 0 0 25.2928 25.8048h283.2384A25.6 25.6 0 0 0 1126.4 379.392a25.6 25.6 0 0 0-25.2928-25.8048h-283.2384a25.6 25.6 0 0 0-25.344 25.8048z m303.9232 80.7424H761.856c-16.5376 0-29.9008 11.6224-29.9008 25.7536 0 14.1824 13.312 25.7536 29.9008 25.7536h334.6432c16.4864 0 29.9008-11.5712 29.9008-25.7536 0-14.1312-13.4144-25.7536-29.9008-25.7536z m4.608 106.496h-283.2384a25.6 25.6 0 0 0-25.344 25.7536 25.6 25.6 0 0 0 25.344 25.7536h283.2384A25.6 25.6 0 0 0 1126.4 592.384a25.6 25.6 0 0 0-25.2928-25.8048zM543.0272 1024H341.6576C150.8352 1024 0 1024 0 923.648v-20.1216c0-188.16 153.2928-341.1968 341.7088-341.1968h201.2672c188.416 0 341.76 153.0368 341.76 341.1968v20.0704C884.6848 1024 726.3232 1024 542.976 1024z m-203.1616-405.1456c-158.464 0-287.4368 128.4096-287.4368 286.208v20.48c0 40.9088 166.0928 40.9088 287.4368 40.9088h204.9536c100.4544 0 287.4368 0 287.4368-40.96v-20.3776c0-157.8496-128.9728-286.208-287.4368-286.208H339.8656z m92.416-76.7488a271.4112 271.4112 0 0 1-271.2064-271.0528A271.36 271.36 0 0 1 432.2816 0a271.36 271.36 0 0 1 271.2064 271.0528 271.4624 271.4624 0 0 1-271.2064 271.0528z m-215.3472-271.872c0 118.1696 96.6144 214.3232 215.3472 214.3232 118.784 0 215.3984-96.1536 215.3984-214.3232 0-118.2208-96.6144-214.3232-215.3984-214.3232S216.9344 152.0128 216.9344 270.2336z"}))}getShape(){const{model:e}=this.props,{width:t,height:o,x:l,y:s,fillOpacity:n,strokeOpacity:i,points:r}=e,d=e.getNodeStyle(),c=`matrix(1 0 0 1 ${l-t/2} ${s-o/2})`,u=r.map(e=>e.join(",")).join(" ");return a("g",{transform:c},[a("polygon",{...d,points:u,strokeOpacity:i,fillOpacity:n}),this.getIconShape()])}}class s extends o{constructor(t,o){t.text={value:t.text&&t.text.value||"",x:t.x,y:t.y+50},super(t,o);const a=35;this.points=[[a,0],[2*a,a],[a,2*a],[0,a]],this.menu=[{text:"删除",className:"lf-menu-delete",icon:!0,callback(t){const o=window.confirm("你确定要删除吗？");o&&e.deleteNode(t.id)}},{text:"编辑",className:"lf-menu-item",callback(t){e.editText(t.id)}},{text:"复制",className:"lf-menu-item",callback(t){e.cloneNode(t.id)}}]}}return{view:l,model:s}})}},5731:function(e,t,o){"use strict";o("7419")},"66ab":function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return a}));o("05a0"),o("5614"),o("446d");function a(e,t,o){e.register("push",({PolygonNode:a,PolygonNodeModel:l,h:s})=>{class n extends a{getIconShape(){const{model:e}=this.props,{stroke:t}=e;return s("svg",{x:18,y:18,width:30,height:30,viewBox:"0 0 1024 1024"},s("path",{fill:t,d:"M866.461538 39.384615H393.846154c-43.323077 0-78.769231 35.446154-78.769231 78.769231v1.969231c0 13.784615 7.876923 27.569231 19.692308 35.446154 5.907692 3.938462 80.738462 78.769231 80.738461 78.769231 5.907692 5.907692 15.753846 0 15.753846-7.876924 0-15.753846 13.784615-31.507692 29.538462-31.507692h334.769231c15.753846 0 31.507692 15.753846 31.507692 31.507692v531.692308c0 15.753846-15.753846 27.569231-31.507692 27.569231h-334.769231c-15.753846 0-27.569231-11.815385-27.569231-27.569231v-1.969231c0-7.876923-9.846154-11.815385-15.753846-5.907692 0 0-74.830769 74.830769-82.707692 78.769231-11.815385 7.876923-19.692308 19.692308-19.692308 35.446154v39.384615c0 43.323077 33.476923 78.769231 76.8 78.769231h472.615385c43.323077 0 80.738462-35.446154 80.738461-78.769231V118.153846c0-43.323077-35.446154-78.769231-78.769231-78.769231zM630.153846 945.230769c-33.476923 0-59.076923-25.6-59.076923-59.076923s25.6-59.076923 59.076923-59.076923 59.076923 25.6 59.076923 59.076923-25.6 59.076923-59.076923 59.076923z m-86.646154-474.584615L297.353846 224.492308c-11.815385-11.815385-29.538462-11.815385-41.353846 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l90.584615 90.584615c11.815385 11.815385 3.938462 33.476923-13.784615 33.476923H29.538462c-15.753846 1.969231-29.538462 15.753846-29.538462 31.507693v59.076923c0 15.753846 13.784615 29.538462 29.538462 29.538461h259.938461c17.723077 0 25.6 21.661538 13.784615 33.476923l-90.584615 90.584616c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L543.507692 512c9.846154-9.846154 9.846154-29.538462 0-41.353846z"}))}getPlusShape(){const{model:a}=this.props,l=e.getGraphData(),n=l.edges,i=n.some(e=>e.sourceNodeId===a.id);return!i&&s("svg",{x:70,y:20,width:30,height:30,viewBox:"0 0 1024 1024",class:"time-plus",onClick:e=>t(e,a),onMousedown:e=>o(e,a),onMouseUp:e=>o(e,a)},s("path",{fill:"#f17611",d:"M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z"}),s("path",{fill:"#ffffff",d:"M448 298.666667h128v426.666666h-128z"}),s("path",{fill:"#ffffff",d:"M298.666667 448h426.666666v128H298.666667z"}))}getShape(){const{model:e}=this.props,{width:t,height:o,x:a,y:l,fillOpacity:n,strokeOpacity:i,points:r}=e,d=e.getNodeStyle(),c=`matrix(1 0 0 1 ${a-t/2} ${l-o/2})`,u=r.map(e=>e.join(",")).join(" ");return s("g",{transform:c},[s("polygon",{...d,points:u,strokeOpacity:i,fillOpacity:n}),this.getIconShape(),this.getPlusShape()])}}class i extends l{constructor(e,t){e.text={value:e.text&&e.text.value||"",x:e.x,y:e.y+50},super(e,t);const o=35;this.points=[[o,0],[2*o,o],[o,2*o],[0,o]]}}return{view:n,model:i}})}},"6af9":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"property-dialog"},["user"===e.nodeData.type?t("User",{attrs:{lf:e.lf,"node-data":e.nodeData},on:{onClose:e.handleClose}}):t("CommonProperty",{attrs:{lf:e.lf,"node-data":e.nodeData},on:{onClose:e.handleClose}})],1)},l=[],s=o("d6a4"),n=o("a41e"),i={name:"PropertyDialog",components:{CommonProperty:s["default"],User:n["default"]},props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object,default:()=>{}}},data(){return{}},methods:{handleClose(){this.$emit("setPropertiesFinish")}}},r=i,d=(o("79eb"),o("829d")),c=Object(d["a"])(r,a,l,!1,null,null,null);t["default"]=c.exports},"72df":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("vab-json-viewer",{attrs:{copyable:"","expand-depth":5,sort:"",value:e.data}})],1)},l=[],s=o("258b"),n=o.n(s),i={components:{VabJsonViewer:n.a},props:{graphData:{type:Object,default:()=>{}}},data(){return{data:[]}},created(){this.data=JSON.parse(JSON.stringify([{edges:this.graphData.edges,nodes:this.graphData.nodes}]))}},r=i,d=o("829d"),c=Object(d["a"])(r,a,l,!1,null,"340e6573",null);t["default"]=c.exports},"73bb":function(e,t,o){"use strict";function a(e){e.register("polyline",({PolylineEdge:e,PolylineEdgeModel:t})=>{class o extends t{constructor(e,t){super(e,t)}}return{view:e,model:o}})}o.r(t),o.d(t,"default",(function(){return a}))},7419:function(e,t,o){},"79eb":function(e,t,o){"use strict";o("0414")},"86ad":function(e,t,o){"use strict";o("bb5f")},"8adc":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("el-button-group",[t("el-button",{attrs:{size:"small",type:"plain"},on:{click:e.$_zoomIn}},[e._v("放大")]),t("el-button",{attrs:{size:"small",type:"plain"},on:{click:e.$_zoomOut}},[e._v("缩小")]),t("el-button",{attrs:{size:"small",type:"plain"},on:{click:e.$_zoomReset}},[e._v(" 大小适应 ")]),t("el-button",{attrs:{size:"small",type:"plain"},on:{click:e.$_translateRest}},[e._v(" 定位还原 ")]),t("el-button",{attrs:{size:"small",type:"plain"},on:{click:e.$_reset}},[e._v(" 还原(大小&定位) ")]),t("el-button",{attrs:{disabled:e.undoDisable,size:"small",type:"plain"},on:{click:e.$_undo}},[e._v(" 上一步(ctrl+z) ")]),t("el-button",{attrs:{disabled:e.redoDisable,size:"small",type:"plain"},on:{click:e.$_redo}},[e._v(" 下一步(ctrl+y) ")]),t("el-button",{attrs:{size:"small",type:"plain"},on:{click:e.$_download}},[e._v(" 下载图片 ")]),t("el-button",{attrs:{size:"small",type:"plain"},on:{click:e.$_catData}},[e._v(" 查看数据 ")])],1)],1)},l=[],s={name:"Control",props:{lf:{type:Object||String,default:()=>{}}},data(){return{undoDisable:!0,redoDisable:!0,graphData:null,dataVisible:!1}},mounted(){this.$props.lf.on("history:change",({data:{undoAble:e,redoAble:t}})=>{this.$data.undoDisable=!e,this.$data.redoDisable=!t})},methods:{$_zoomIn(){this.$props.lf.zoom(!0)},$_zoomOut(){this.$props.lf.zoom(!1)},$_zoomReset(){this.$props.lf.resetZoom()},$_translateRest(){this.$props.lf.resetTranslate()},$_reset(){this.$props.lf.resetZoom(),this.$props.lf.resetTranslate()},$_undo(){this.$props.lf.undo()},$_redo(){this.$props.lf.redo()},$_download(){this.$props.lf.getSnapshot()},$_catData(){this.$emit("cat-data")}}},n=s,i=o("829d"),r=Object(i["a"])(n,a,l,!1,null,"542a0d68",null);t["default"]=r.exports},"8dff":function(e,t,o){},"9f20":function(e,t,o){"use strict";o.r(t);var a=o("ca06");o.d(t,"registerStart",(function(){return a["default"]}));var l=o("5105");o.d(t,"registerUser",(function(){return l["default"]}));var s=o("4d06");o.d(t,"registerEnd",(function(){return s["default"]}));var n=o("66ab");o.d(t,"registerPush",(function(){return n["default"]}));var i=o("e193");o.d(t,"registerDownload",(function(){return i["default"]}));var r=o("73bb");o.d(t,"registerPolyline",(function(){return r["default"]}))},a41e:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("el-form",{ref:"form",attrs:{"label-width":"80px",model:e.form}},[t("el-form-item",{attrs:{label:"活动名称"}},[t("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"活动区域"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t("el-form-item",{attrs:{label:"活动时间"}},[t("el-col",{attrs:{span:11}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择日期",type:"date"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),t("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),t("el-col",{attrs:{span:11}},[t("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),t("el-form-item",{attrs:{label:"即时配送"}},[t("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),t("el-form-item",{attrs:{label:"活动性质"}},[t("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[t("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),t("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),t("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),t("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),t("el-form-item",{attrs:{label:"特殊资源"}},[t("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[t("el-radio",{attrs:{label:"线上品牌商赞助"}}),t("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),t("el-form-item",{attrs:{label:"活动形式"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],1)],1)],1)},l=[],s={name:"",props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object||String,default:()=>{}}},data(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},mounted(){const{properties:e}=this.$props.nodeData;e&&(this.$data.form=Object.assign({},this.$data.form,e))},methods:{onSubmit(){console.log("submit!");const{id:e}=this.$props.nodeData;this.$props.lf.setProperties(e,this.$data.form),this.$emit("onClose")}}},n=s,i=o("829d"),r=Object(i["a"])(n,a,l,!1,null,"5d0f657f",null);t["default"]=r.exports},bb5f:function(e,t,o){},ca06:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return a}));o("ca7c");function a(e){e.register("start",({CircleNode:e,CircleNodeModel:t,h:o})=>{class a extends e{getLabelShape(){const{x:e,y:t}=this.props.model;return o("text",{fill:"#000000",fontSize:12,x:e-13,y:t+4,width:50,height:25},"Start")}getShape(){const{model:e}=this.props,{x:t,y:a}=e,l=e.getNodeStyle();return o("g",{},[o("circle",{...l,cx:t,cy:a}),this.getLabelShape()])}}class l extends t{constructor(e,t){e.text={value:e.text&&e.text.value||"",x:e.x,y:e.y+35,dragable:!1,editable:!0},super(e,t)}getConnectedTargetRules(){const e=super.getConnectedTargetRules(),t={message:"起始节点不能作为连线的终点",validate:()=>!1};return e.push(t),e}}return{view:a,model:l}})}},ca4e:function(e,t,o){"use strict";o("8dff")},d6a4:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("el-form",{attrs:{"label-width":"80px",model:e.formData}},[t("el-form-item",{attrs:{label:"名称"}},[t("el-input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),t("el-form-item",{attrs:{label:"活动区域"}},[t("el-input",{model:{value:e.formData.region,callback:function(t){e.$set(e.formData,"region",t)},expression:"formData.region"}})],1),t("el-form-item",{attrs:{label:"活动形式"}},[t("el-input",{model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],1)],1)],1)},l=[],s={name:"",props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object||String,default:()=>{}}},data(){return{formData:{name:"",region:"",type:""}}},mounted(){const{properties:e}=this.$props.nodeData;e&&(this.$data.formData=Object.assign({},this.$data.formData,e))},methods:{onSubmit(){console.log("submit!");const{id:e}=this.$props.nodeData;this.$props.lf.setProperties(e,this.$data.formData),this.$emit("onClose")}}},n=s,i=o("829d"),r=Object(i["a"])(n,a,l,!1,null,"9e069cd4",null);t["default"]=r.exports},e193:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return l}));o("05a0"),o("5614");const a="#9932CC";function l(e){e.register("download",({PolygonNode:e,PolygonNodeModel:t,h:o})=>{class l extends e{getIconShape(){return o("svg",{x:14,y:13,width:23,height:23,viewBox:"0 0 1024 1024"},o("path",{fill:a,d:"M831.513034 319.863005h-95.945189c-17.662265 0-31.980365 14.3181-31.980365 31.980365 0 17.662265 14.3181 31.980365 31.980365 31.980366h64.218604c17.520025 0 31.722492 14.202467 31.722492 31.722492V863.786065c0 17.520025-14.202467 31.722492-31.722492 31.722492H159.66442c-17.520025 0-31.722492-14.202467-31.722493-31.722492V415.546228c0-17.520025 14.202467-31.722492 31.722493-31.722492h64.218603c17.662265 0 31.980365-14.3181 31.980366-31.980366 0-17.662265-14.3181-31.980365-31.980366-31.980365H127.937834c-35.322483 0-63.956637 28.634154-63.956637 63.956637v511.693008c0 35.322483 28.634154 63.956637 63.956637 63.956638h703.5752c35.322483 0 63.956637-28.634154 63.956638-63.956638V383.819642c0-35.32146-28.634154-63.956637-63.956638-63.956637z"}),o("path",{fill:a,d:"M310.382073 521.036817c-12.388145-12.388145-32.473599-12.388145-44.862767 0l-0.364297 0.364297c-12.388145 12.388145-12.388145 32.473599 0 44.862767l190.186573 190.186574c5.818519 6.813173 14.465456 11.137665 24.126491 11.137664h0.515746c9.662057 0 18.307971-4.324492 24.12649-11.137664L694.296883 566.263881c12.388145-12.388145 12.388145-32.473599 0-44.862767l-0.364297-0.364297c-12.388145-12.388145-32.473599-12.388145-44.862767 0L511.706311 658.400325V95.743598c0-17.520025-14.202467-31.722492-31.722492-31.722492h-0.515746c-17.520025 0-31.722492 14.202467-31.722493 31.722492v562.656727L310.382073 521.036817z"}))}getShape(){const{model:e}=this.props,{width:t,height:a,x:l,y:s,fillOpacity:n,strokeOpacity:i,points:r}=e,d=e.getNodeStyle(),c=`matrix(1 0 0 1 ${l-t/2} ${s-a/2})`,u=r.map(e=>e.join(",")).join(" ");return o("g",{transform:c},[o("polygon",{...d,points:u,strokeOpacity:i,fillOpacity:n}),this.getIconShape()])}}class s extends t{constructor(e,t){e.text={value:e.text&&e.text.value||"",x:e.x,y:e.y+50},super(e,t);const o=25;this.points=[[o,0],[2*o,o],[o,2*o],[0,o]],this.stroke=a}}return{view:l,model:s}})}},f36f:function(e,t,o){"use strict";o.r(t),o.d(t,"getList",(function(){return l})),o.d(t,"doEdit",(function(){return s}));var a=o("b775");function l(e){return Object(a["default"])({url:"/workflow/getList",method:"get",params:e})}function s(e){return Object(a["default"])({url:"/workflow/doEdit",method:"post",data:e})}}}]);