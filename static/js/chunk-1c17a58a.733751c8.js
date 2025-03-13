/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-14 00:09:08
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c17a58a"],{"5b0f":function(e,t,n){},"5dc6":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{ref:"tool",staticClass:"flow-menu"},e._l(e.menuList,(function(n){return t("div",{key:n.id},[t("span",{staticClass:"vab-node-pmenu",on:{click:function(e){n.open=!n.open}}},[t("i",{class:{"el-icon-caret-bottom":n.open,"el-icon-caret-right":!n.open}}),e._v("  "+e._s(n.name)+" ")]),t("ul",{directives:[{name:"show",rawName:"v-show",value:n.open,expression:"menu.open"}],staticClass:"vab-node-menu-ul"},[t("draggable",e._b({on:{end:e.end,start:e.move},model:{value:n.children,callback:function(t){e.$set(n,"children",t)},expression:"menu.children"}},"draggable",e.draggableOptions,!1),e._l(n.children,(function(n){return t("li",{key:n.id,staticClass:"vab-node-menu-li",attrs:{type:n.type}},[t("i",{class:n.ico}),e._v(" "+e._s(n.name)+" ")])})),0)],1)])})),0)},i=[],s=n("3335"),l=n.n(s);const a={left:-1,top:-1};var r={components:{draggable:l.a},data(){return{activeNames:"1",draggableOptions:{preventOnFilter:!1,sort:!1,disabled:!1,ghostClass:"tt",forceFallback:!0},defaultOpeneds:["1","2"],menuList:[{id:"1",type:"group",name:"开始节点",ico:"el-icon-video-play",open:!0,children:[{id:"11",type:"timer",name:"数据接入",ico:"el-icon-time",style:{}},{id:"12",type:"task",name:"接口调用",ico:"el-icon-odometer",style:{}}]},{id:"2",type:"group",name:"结束节点",ico:"el-icon-video-pause",open:!0,children:[{id:"21",type:"end",name:"流程结束",ico:"el-icon-caret-right",style:{}},{id:"22",type:"over",name:"数据清理",ico:"el-icon-shopping-cart-full",style:{}}]}],nodeMenu:{}}},methods:{getMenuByType(e){for(let t=0;t<this.menuList.length;t++){const n=this.menuList[t].children;for(let t=0;t<n.length;t++)if(n[t].type===e)return n[t]}return{}},move(e){const t=e.item.attributes.type.nodeValue;this.nodeMenu=this.getMenuByType(t)},end(e){this.$emit("add-node",e,this.nodeMenu,a)},isFirefox(){const e=navigator.userAgent;return e.indexOf("Firefox")>-1}}},d=r,c=n("829d"),u=Object(c["a"])(d,o,i,!1,null,null,null);t["default"]=u.exports},6823:function(e,t,n){"use strict";n.r(t),n.d(t,"getData",(function(){return i}));const o={name:"流程图",nodeList:[{id:"nodeA",name:"节点A-不可拖拽",type:"task",left:"18px",top:"223px",ico:"el-icon-user-solid",state:"success",viewOnly:!0},{id:"nodeB",type:"task",name:"流程B-节点B",left:"351px",top:"96px",ico:"el-icon-goods",state:"error"},{id:"nodeC",name:"流程B-节点C",type:"task",left:"354px",top:"351px",ico:"el-icon-present",state:"warning"},{id:"nodeD",name:"流程B-节点D",type:"task",left:"723px",top:"215px",ico:"el-icon-present",state:"running"}],lineList:[{from:"nodeA",to:"nodeB",label:"条件A"},{from:"nodeA",to:"nodeC",label:"条件B"},{from:"nodeB",to:"nodeD"},{from:"nodeC",to:"nodeD"}]};function i(){return o}},"740a":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{ref:"node",class:e.nodeContentClass,style:e.nodeContentStyle,on:{click:e.clickNode,mouseup:e.changeNodeSite}},[t("div",{staticClass:"vab-node-left"}),t("div",{staticClass:"vab-node-left-ico flow-node-drag"},[t("i",{class:e.nodeIcoClass})]),t("div",{staticClass:"vab-node-text",attrs:{"show-overflow-tooltip":!0}},[e._v(" "+e._s(e.node.name)+" ")]),t("div",{staticClass:"vab-node-right-ico"},[t("i",{directives:[{name:"show",rawName:"v-show",value:"success"===e.node.state,expression:"node.state === 'success'"}],staticClass:"el-icon-circle-check el-node-state-success"}),t("i",{directives:[{name:"show",rawName:"v-show",value:"error"===e.node.state,expression:"node.state === 'error'"}],staticClass:"el-icon-circle-close el-node-state-error"}),t("i",{directives:[{name:"show",rawName:"v-show",value:"warning"===e.node.state,expression:"node.state === 'warning'"}],staticClass:"el-icon-warning-outline el-node-state-warning"}),t("i",{directives:[{name:"show",rawName:"v-show",value:"running"===e.node.state,expression:"node.state === 'running'"}],staticClass:"el-icon-loading el-node-state-running"})])])},i=[],s={props:{node:{type:Object,default:()=>{}},activeElement:{type:Object,default:()=>{}}},data(){return{}},computed:{nodeContentClass(){return{"vab-node-content":!0,"vab-node-active":"node"===this.activeElement.type&&this.activeElement.nodeId===this.node.id}},nodeContentStyle(){return{top:this.node.top,left:this.node.left}},nodeIcoClass(){const e={};return e[this.node.ico]=!0,e["flow-node-drag"]=!this.node.viewOnly,e}},methods:{clickNode(){this.$emit("click-node",this.node.id)},changeNodeSite(){this.node.left===this.$refs.node.style.left&&this.node.top===this.$refs.node.style.top||this.$emit("change-node-site",{nodeId:this.node.id,left:this.$refs.node.style.left,top:this.$refs.node.style.top})}}},l=s,a=n("829d"),r=Object(a["a"])(l,o,i,!1,null,null,null);t["default"]=r.exports},aa3a:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;return t("div",[t("el-form",{directives:[{name:"show",rawName:"v-show",value:"node"===e.type,expression:"type === 'node'"}],ref:"dataForm",attrs:{"label-width":"80px",model:e.node}},[t("el-form-item",{attrs:{label:"类型"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.node.type,callback:function(t){e.$set(e.node,"type",t)},expression:"node.type"}})],1),t("el-form-item",{attrs:{label:"名称"}},[t("el-input",{model:{value:e.node.name,callback:function(t){e.$set(e.node,"name",t)},expression:"node.name"}})],1),t("el-form-item",{attrs:{label:"left坐标"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.node.left,callback:function(t){e.$set(e.node,"left",t)},expression:"node.left"}})],1),t("el-form-item",{attrs:{label:"top坐标"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.node.top,callback:function(t){e.$set(e.node,"top",t)},expression:"node.top"}})],1),t("el-form-item",{attrs:{label:"ico图标"}},[t("el-input",{model:{value:e.node.ico,callback:function(t){e.$set(e.node,"ico",t)},expression:"node.ico"}})],1),t("el-form-item",{attrs:{label:"状态"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.node.state,callback:function(t){e.$set(e.node,"state",t)},expression:"node.state"}},e._l(e.stateList,(function(e){return t("el-option",{key:e.state,attrs:{label:e.label,value:e.state}})})),1)],1),t("el-form-item",[t("el-button",{attrs:{icon:"el-icon-close"}},[e._v("重置")]),t("el-button",{attrs:{icon:"el-icon-check",type:"primary"},on:{click:e.save}},[e._v(" 保存 ")])],1)],1),t("el-form",{directives:[{name:"show",rawName:"v-show",value:"line"===e.type,expression:"type === 'line'"}],ref:"dataForm",attrs:{"label-width":"80px",model:e.line}},[t("el-form-item",{attrs:{label:"条件"}},[t("el-input",{model:{value:e.line.label,callback:function(t){e.$set(e.line,"label",t)},expression:"line.label"}})],1),t("el-form-item",[t("el-button",{attrs:{icon:"el-icon-close"}},[e._v("重置")]),t("el-button",{attrs:{icon:"el-icon-check",type:"primary"},on:{click:e.saveLine}},[e._v(" 保存 ")])],1)],1)],1)},i=[],s=(n("05a0"),n("4ebe"),n("de68"),n("7c98")),l={data(){return{visible:!0,type:"node",node:{},line:{},data:{},stateList:[{state:"success",label:"成功"},{state:"warning",label:"警告"},{state:"error",label:"错误"},{state:"running",label:"运行中"}]}},methods:{nodeInit(e,t){this.type="node",this.data=e,this.node=Object(s["cloneDeep"])(e.nodeList.find(e=>e.id===t))},lineInit(e){this.type="line",this.line=e},saveLine(){this.$emit("set-line-label",this.line.from,this.line.to,this.line.label)},save(){this.data.nodeList.forEach(e=>{e.id===this.node.id&&(e.name=this.node.name,e.left=this.node.left,e.top=this.node.top,e.ico=this.node.ico,e.state=this.node.state,this.$emit("repaint-everything"))})}}},a=l,r=n("829d"),d=Object(r["a"])(a,o,i,!1,null,null,null);t["default"]=d.exports},cabd:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;return e.easyFlowVisible?t("div",{staticStyle:{"min-width":"1500px",overflow:"hidden"}},[t("el-row",[t("el-col",{attrs:{span:24}},[t("div",{staticClass:"vab-tooltar"},[t("el-button",{attrs:{icon:"el-icon-plus"},on:{click:e.zoomAdd}},[e._v("放大")]),t("el-button",{attrs:{icon:"el-icon-minus"},on:{click:e.zoomSubtract}},[e._v("缩小")]),t("el-button",{on:{click:e.downloadData}},[t("vab-icon",{attrs:{icon:"download-2-line"}}),e._v(" 下载 ")],1),t("el-button",{attrs:{disabled:!e.activeElement.type},on:{click:e.deleteElement}},[t("vab-icon",{attrs:{icon:"delete-bin-4-line"}}),e._v(" 删除 ")],1)],1)])],1),t("div",{staticStyle:{display:"flex",height:"calc(100vh - 300px)"}},[t("node-menu",{ref:"nodeMenu",on:{"add-node":e.addNode}}),t("div",{directives:[{name:"flowDrag",rawName:"v-flowDrag"}],ref:"efContainer",staticClass:"content",staticStyle:{overflow:"hidden"},attrs:{id:"efContainer"}},[e._l(e.data.nodeList,(function(n){return[t("node",{key:n.id,attrs:{id:n.id,"active-element":e.activeElement,node:n},on:{"change-node-site":e.changeNodeSite,"click-node":e.clickNode,nodeRightMenu:e.nodeRightMenu}})]}))],2),t("div",{staticStyle:{"padding-top":"20px"}},[t("node-form",{ref:"nodeForm",on:{repaintEverything:e.repaintEverything,"set-line-label":e.setLineLabel}})],1)],1)],1):e._e()},i=[],s=(n("ca7c"),n("05a0"),n("10fa"),n("de68"),n("46f3")),l=n("ee50"),a=n("740a"),r=n("5dc6"),d=n("aa3a"),c=n("7c98"),u=n.n(c),h=n("6823"),m={components:{NodeMenu:r["default"],Node:a["default"],NodeForm:d["default"]},directives:{flowDrag:{bind(e,t){t&&(e.onmousedown=t=>{if(2===t.button)return;let n=t.clientX,o=t.clientY;e.style.cursor="move",document.onmousemove=function(t){t.preventDefault();const i=t.clientX-n;n=t.clientX,e.scrollLeft+=-i;const s=t.clientY-o;o=t.clientY,e.scrollTop+=-s},document.onmouseup=function(){e.style.cursor="auto",document.onmousemove=null,document.onmouseup=null}})}}},mixins:[l["easyFlowMixin"]],data(){return{jsPlumb:null,easyFlowVisible:!0,flowInfoVisible:!1,loadEasyFlowFinish:!1,flowHelpVisible:!1,data:{},activeElement:{type:void 0,nodeId:void 0,sourceId:void 0,targetId:void 0},zoom:.5}},mounted(){this.jsPlumb=s["jsPlumb"].getInstance(),this.dataReload(Object(h["getData"])())},methods:{getUUID(){return Math.random().toString(36).substr(3,10)},jsPlumbInit(){this.jsPlumb.ready(()=>{this.jsPlumb.importDefaults(this.jsplumbSetting),this.jsPlumb.setSuspendDrawing(!1,!0),this.loadEasyFlow(),this.jsPlumb.bind("click",e=>{this.activeElement.type="line",this.activeElement.sourceId=e.sourceId,this.activeElement.targetId=e.targetId,this.$refs.nodeForm.lineInit({from:e.sourceId,to:e.targetId,label:e.getLabel()})}),this.jsPlumb.bind("connection",e=>{const t=e.source.id,n=e.target.id;this.loadEasyFlowFinish&&this.data.lineList.push({from:t,to:n})}),this.jsPlumb.bind("connectionDetached",e=>{this.deleteLine(e.sourceId,e.targetId)}),this.jsPlumb.bind("connectionMoved",e=>{this.changeLine(e.originalSourceId,e.originalTargetId)}),this.jsPlumb.bind("contextmenu",()=>{}),this.jsPlumb.bind("beforeDrop",e=>{const t=e.sourceId,n=e.targetId;return t===n?(this.$message.error("节点不支持连接自己"),!1):this.hasLine(t,n)?(this.$message.error("该关系已存在,不允许重复创建"),!1):this.hashOppositeLine(t,n)?(this.$message.error("不支持两个节点之间连线回环"),!1):(this.$message.success("连接成功"),!0)}),this.jsPlumb.bind("beforeDetach",()=>{}),this.jsPlumb.setContainer(this.$refs.efContainer)})},loadEasyFlow(){for(let e=0;e<this.data.nodeList.length;e++){const t=this.data.nodeList[e];this.jsPlumb.makeSource(t.id,u.a.merge(this.jsplumbSourceOptions,{})),this.jsPlumb.makeTarget(t.id,this.jsplumbTargetOptions),t.viewOnly||this.jsPlumb.draggable(t.id,{containment:"parent",stop:function(){}})}for(let e=0;e<this.data.lineList.length;e++){const t=this.data.lineList[e],n={source:t.from,target:t.to,label:t.label?t.label:"",connector:t.connector?t.connector:"",anchors:t.anchors?t.anchors:void 0,paintStyle:t.paintStyle?t.paintStyle:void 0};this.jsPlumb.connect(n,this.jsplumbConnectOptions)}this.loadEasyFlowFinish=!0},setLineLabel(e,t,n){const o=this.jsPlumb.getConnections({source:e,target:t})[0];n&&""!==n?o.addClass("flowLabel"):(o.removeClass("flowLabel"),o.addClass("emptyFlowLabel")),o.setLabel({label:n}),this.data.lineList.forEach((function(o){o.from===e&&o.to===t&&(o.label=n)}))},deleteElement(){"node"===this.activeElement.type?this.deleteNode(this.activeElement.nodeId):"line"===this.activeElement.type&&this.$confirm("确定删除所点击的线吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{const e=this.jsPlumb.getConnections({source:this.activeElement.sourceId,target:this.activeElement.targetId})[0];this.jsPlumb.deleteConnection(e)}).catch(()=>{})},deleteLine(e,t){this.data.lineList=this.data.lineList.filter((function(n){return!(n.from===e&&n.to===t)}))},changeLine(e,t){this.deleteLine(e,t)},changeNodeSite(e){for(let t=0;t<this.data.nodeList.length;t++){const n=this.data.nodeList[t];n.id===e.nodeId&&(n.left=e.left,n.top=e.top)}},addNode(e,t){const n=e.originalEvent.clientX,o=e.originalEvent.clientY,i=this.$refs.efContainer,s=i.getBoundingClientRect();let l=n,a=o;if(l<s.x||l>s.width+s.x||a<s.y||s.y>s.y+s.height)return void this.$message.error("请把节点拖入到画布中");l=l-s.x+i.scrollLeft,a=a-s.y+i.scrollTop,l-=85,a-=16;const r=this.getUUID(),d=t.name;let c=d,u=1;while(u<1e4){let e=!1;for(let t=0;t<this.data.nodeList.length;t++){const n=this.data.nodeList[t];n.name===c&&(c=d+u,e=!0)}if(!e)break;u++}const h={id:r,name:c,type:t.type,left:l+"px",top:a+"px",ico:t.ico,state:"success"};this.data.nodeList.push(h),this.$nextTick(()=>{this.jsPlumb.makeSource(r,this.jsplumbSourceOptions),this.jsPlumb.makeTarget(r,this.jsplumbTargetOptions),this.jsPlumb.draggable(r,{containment:"parent",stop:function(){}})})},deleteNode(e){return this.$confirm("确定要删除节点"+e+"?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then(()=>{this.data.nodeList=this.data.nodeList.filter((function(t){return t.id!==e})),this.$nextTick(()=>{this.jsPlumb.removeAllEndpoints(e)})}).catch(()=>{}),!0},clickNode(e){this.activeElement.type="node",this.activeElement.nodeId=e,this.$refs.nodeForm.nodeInit(this.data,e)},hasLine(e,t){for(let n=0;n<this.data.lineList.length;n++){const o=this.data.lineList[n];if(o.from===e&&o.to===t)return!0}return!1},hashOppositeLine(e,t){return this.hasLine(t,e)},nodeRightMenu(e,t){this.menu.show=!0,this.menu.curNodeId=e,this.menu.left=t.x+"px",this.menu.top=t.y+"px"},repaintEverything(){this.jsPlumb.repaint()},dataReload(e){this.easyFlowVisible=!1,this.data.nodeList=[],this.data.lineList=[],e=u.a.cloneDeep(e),this.easyFlowVisible=!0,this.data=e,this.$nextTick(()=>{this.jsPlumb=s["jsPlumb"].getInstance(),this.jsPlumbInit()})},zoomAdd(){this.zoom>=1||(this.zoom=this.zoom+.1,this.$refs.efContainer.style.transform=`scale(${this.zoom})`,this.jsPlumb.setZoom(this.zoom))},zoomSubtract(){this.zoom<=0||(this.zoom=this.zoom-.1,this.$refs.efContainer.style.transform=`scale(${this.zoom})`,this.jsPlumb.setZoom(this.zoom))},downloadData(){this.$confirm("确定要下载该流程数据吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then(()=>{const e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.data,null,"\t")),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","data.json"),t.click(),t.remove(),this.$message.success("正在下载中,请稍后...")}).catch(()=>{})}}},p=m,f=n("829d"),b=Object(f["a"])(p,o,i,!1,null,null,null);t["default"]=b.exports},ee50:function(e,t,n){"use strict";n.r(t),n.d(t,"easyFlowMixin",(function(){return o}));const o={data(){return{jsplumbSetting:{Anchors:["Top","TopCenter","TopRight","TopLeft","Right","RightMiddle","Bottom","BottomCenter","BottomRight","BottomLeft","Left","LeftMiddle"],Container:"efContainer",Connector:["Flowchart",{stub:30,gap:1,alwaysRespectStubs:!1,midpoint:.5,cornerRadius:10}],ConnectionsDetachable:!1,DeleteEndpointsOnDetach:!1,Endpoint:["Blank",{Overlays:""}],EndpointStyle:{fill:"#1879ffa1",outlineWidth:1},LogEnabled:!0,PaintStyle:{stroke:"#E0E3E7",strokeWidth:1,outlineStroke:"transparent",outlineWidth:10},DragOptions:{cursor:"pointer",zIndex:2e3},Overlays:[["Arrow",{width:10,length:8,location:1,direction:1,foldback:.623}],["Label",{label:"",location:.1,cssClass:"aLabel"}]],RenderMode:"svg",HoverPaintStyle:{stroke:"#b0b2b5",strokeWidth:1},Scope:"jsPlumb_DefaultScope"},jsplumbConnectOptions:{isSource:!0,isTarget:!0,anchor:"Continuous",labelStyle:{cssClass:"flowLabel"},emptyLabelStyle:{cssClass:"emptyFlowLabel"}},jsplumbSourceOptions:{filter:".flow-node-drag",filterExclude:!1,anchor:"Continuous",allowLoopback:!1,maxConnections:-1,onMaxConnections:function(e){console.log("超过了最大值连线: "+e.maxConnections)}},jsplumbSourceOptions2:{filter:".flow-node-drag",filterExclude:!1,allowLoopback:!1,connector:["Flowchart",{curviness:50}],connectorStyle:{stroke:"red",strokeWidth:1,outlineStroke:"transparent",outlineWidth:10},connectorHoverStyle:{stroke:"red",strokeWidth:2}},jsplumbTargetOptions:{filter:".flow-node-drag",filterExclude:!1,anchor:"Continuous",allowLoopback:!1,dropOptions:{hoverClass:"vab-drop-hover"}}}}}},f291:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"flowSheet-drag-container"},[t("el-scrollbar",[t("panel")],1)],1)},i=[],s=n("cabd"),l=(n("5b0f"),{name:"FlowSheetDrag",components:{Panel:s["default"]}}),a=l,r=n("829d"),d=Object(r["a"])(a,o,i,!1,null,null,null);t["default"]=d.exports}}]);