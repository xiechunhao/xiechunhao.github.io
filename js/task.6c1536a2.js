(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["task","create","task-auditBatchIndex","task-completedTask","task-delegateTask","task-myDraft","task-myTask","task-readTask","task-uncompletedTask"],{"03b5":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.lr_loadPage?e._e():a("l-layout",{staticClass:"l-tab-page"},[a("l-panel",{style:{padding:e.isChild?0:null},scopedSlots:e._u([{key:"toolLeft",fn:function(){return[a("div",{staticClass:"l-panel--item"},[a("el-input",{attrs:{placeholder:e.$t("请输入模版名称"),size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch.apply(null,arguments)}},model:{value:e.searchWord,callback:function(t){e.searchWord=t},expression:"searchWord"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(t){return e.handleSearch.apply(null,arguments)}},slot:"append"})],1)],1)]},proxy:!0},{key:"toolRight",fn:function(){return[a("l-tool-btns",{attrs:{hasAdd:!1}})]},proxy:!0}],null,!1,1990893238)},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"l-rblock l-overflow-y",staticStyle:{padding:"0 16px"}},[e._l(e.categorys,(function(t,n){return[e.getSchemeList(t.f_ItemValue).length>0?a("div",{key:n},[a("div",{staticClass:"title"},[e._v(e._s(e.$t(t.f_ItemName))+"【"+e._s(e.getSchemeList(t.f_ItemValue).length)+"】")]),a("div",{staticClass:"content-list"},e._l(e.getSchemeList(t.f_ItemValue),(function(t,n){return a("div",{key:n,staticClass:"content-item",on:{click:function(a){return e.handleCreate(t)}}},[a("div",{staticClass:"content-icon",style:{"background-color":t.f_Color}},[a("i",{class:t.f_Icon})]),a("div",{staticClass:"content-text"},[e._v(e._s(e.$t(t.f_Name)))])])})),0)]):e._e()]}))],2)]),a("wf-create-form",{ref:"form",attrs:{code:e.code,title:e.dialogTitle,visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}})],1)},r=[],l=(a("4de4"),a("96cf"),a("1da1")),i=window.$api.workflow.scheme,s={props:{isChild:{type:Boolean,default:!1}},data:function(){return{list:[],list2:[],searchWord:"",loading:!1,code:"",dialogTitle:"",dialogVisible:!1}},computed:{categorys:function(){return this.lr_dataItem["FlowSort"]||[]}},mounted:function(){this.loadData()},methods:{loadData:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,e.lr_loadDataItem("FlowSort"),t.next=4,e.$awaitWraper(i.getMyList());case 4:if(t.t0=t.sent,t.t0){t.next=7;break}t.t0=[];case 7:e.list=t.t0,e.list2=e.list,e.loading=!1;case 10:case"end":return t.stop()}}),t)})))()},getSchemeList:function(e){return this.list.filter((function(t){return t.f_Category==e}))},handleSearch:function(){var e=this;this.list=this.list2.filter((function(t){return-1!=t.f_Name.indexOf(e.searchWord)}))},handleCreate:function(e){this.code=e.f_Code,this.dialogTitle=e.f_Name,this.dialogVisible=!0}}},o=s,c=(a("cfc9"),a("2877")),u=Object(c["a"])(o,n,r,!1,null,"76b33d27",null);t["default"]=u.exports},"10f5":function(e,t,a){},"16d4":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("l-layout",{staticClass:"l-tab-page"},[a("l-select-panel",{ref:"selectPanel",staticStyle:{padding:"8px"},attrs:{valueKey:"f_Id",multiple:!0,columns:e.columns,isPage:!0,loadSelectTable:e.loadSelectTable,isSaveSelectData:""},scopedSlots:e._u([{key:"f_IsUrge",fn:function(t){return[1==t.row.f_IsUrge?a("el-tag",{attrs:{size:"mini",type:"warning"}},[e._v(e._s(e.$t("催办")))]):a("el-tag",{attrs:{size:"mini",type:"success"}},[e._v(e._s(e.$t("正常")))])]}},{key:"f_CreateDate",fn:function(t){return[e._v(" "+e._s(e.lr_dateFormat(t.row.f_CreateDate))+" ")]}}])})],1)},r=[],l=(a("96cf"),a("1da1")),i=window.$api.workflow.process,s={props:{},data:function(){return{columns:[{label:"任务",prop:"f_UnitName",minWidth:100,align:"left"},{label:"标题",prop:"f_ProcessTitle",minWidth:100,align:"left"},{label:"状态",prop:"f_IsUrge",width:60,align:"center"},{label:"提交人",prop:"f_ProcessUserName",width:100,align:"left"},{label:"时间",prop:"f_CreateDate",width:160,align:"left"}]}},created:function(){},mounted:function(){},computed:{},methods:{refreshData:function(){this.$refs.selectPanel.init()},loadSelectTable:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.sidx="f_IsUrge DESC,t.F_CreateDate DESC",a.next=3,t.$awaitWraper(i.getUnCompletedBatchPage(e));case 3:return n=a.sent,a.abrupt("return",n);case 5:case"end":return a.stop()}}),a)})))()},reset:function(){this.$refs.selectPanel.reset(),this.$refs.selectPanel.init()},get:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.selectPanel.getSelected(!1);case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})))()}}},o=s,c=a("2877"),u=Object(c["a"])(o,n,r,!1,null,null,null);t["default"]=u.exports},"1d14":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("l-panel",{staticStyle:{padding:"0"},scopedSlots:e._u([{key:"toolLeft",fn:function(){return[a("l-query2",{attrs:{labelWidth:0,popoverWidth:240,items:e.queryItems,formData:e.queryData,loading:e.tableLoading},on:{search:e.handleSearch},scopedSlots:e._u([{key:"keyWord",fn:function(){return[a("el-input",{attrs:{placeholder:e.$t("请输入查询关键字")},model:{value:e.queryData.keyWord,callback:function(t){e.$set(e.queryData,"keyWord",t)},expression:"queryData.keyWord"}})]},proxy:!0},{key:"seachDate",fn:function(){return[a("l-date",{attrs:{format:"yyyy-MM-dd",dateType:"daterange",startPlaceholder:e.$t("开始时间"),endPlaceholder:e.$t("结束时间")},model:{value:e.queryData.seachDate,callback:function(t){e.$set(e.queryData,"seachDate",t)},expression:"queryData.seachDate"}})]},proxy:!0}])})]},proxy:!0},{key:"toolRight",fn:function(){return[a("l-tool-btns",{attrs:{hasAdd:!1}},[a("el-button-group",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.openBatchAudit()}}},[e._v(e._s(e.$t("批量审核")))])],1)],1)]},proxy:!0}])},[a("l-table",{ref:"mainTable",attrs:{loading:e.tableLoading,columns:e.columns,dataSource:e.tableData,isPage:!0,pageTotal:e.tableTotal,tablePage:e.tableCurrentPage},on:{"update:tablePage":function(t){e.tableCurrentPage=t},"update:table-page":function(t){e.tableCurrentPage=t},loadPageData:e.turnTablePage},scopedSlots:e._u([{key:"f_UnitName",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.handleAudit(t.row)}}},[e._v(e._s(t.row.f_UnitName))])]}},{key:"f_IsUrge",fn:function(t){return[1==t.row.f_IsUrge?a("el-tag",{attrs:{size:"mini",type:"warning"}},[e._v(e._s(e.$t("催办")))]):a("el-tag",{attrs:{size:"mini",type:"success"}},[e._v(e._s(e.$t("正常")))])]}},{key:"f_CreateDate",fn:function(t){return[e._v(" "+e._s(e.lr_dateFormat(t.row.f_CreateDate))+" ")]}}])}),a("wf-audit-form",{ref:"form",attrs:{type:"audit",isCreateAgain:e.isCreateAgain,isCreateSub:e.isCreateSub,params:{taskId:e.taskId},isLoadFormData:!0,title:e.title,visible:e.visible},on:{"update:visible":function(t){e.visible=t},refresh:function(t){return e.loadTableData(!0)}}}),a("l-dialog",{ref:"batchDialog",attrs:{title:e.$t("批量审核"),visible:e.batchVisible,width:1e3,height:600},on:{"update:visible":function(t){e.batchVisible=t},close:e.handleBatchCloseForm,opened:e.handleBatchOpenedForm},scopedSlots:e._u([{key:"btns",fn:function(){return[a("el-button",{attrs:{size:"mini"},on:{click:e.handleBatchClose}},[e._v(e._s(e.$t("取消")))]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleBatchAudit(!1)}}},[e._v(e._s(e.$t("不同意")))]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.handleBatchAudit(!0)}}},[e._v(e._s(e.$t("同意")))])]},proxy:!0}])},[a("audit-batch-index",{ref:"batchAudit"})],1)],1)},r=[],l=(a("99af"),a("ac1f"),a("1276"),a("96cf"),a("1da1")),i=a("16d4"),s=window.$api.workflow.process,o={components:{AuditBatchIndex:i["default"]},data:function(){return{queryItems:[{prop:"seachDate",span:24},{prop:"keyWord",span:24}],queryData:{keyWord:"",seachDate:""},tableLoading:!1,tableData:[],tableTotal:0,tableCurrentPage:1,tablePageSize:50,columns:[{label:"任务",prop:"f_UnitName",minWidth:100,align:"left"},{label:"标题",prop:"f_ProcessTitle",minWidth:100,align:"left"},{label:"状态",prop:"f_IsUrge",width:80,align:"center"},{label:"提交人",prop:"f_ProcessUserId",width:250,align:"left",dataType:"fullUser",isNotAutoWrap:!0},{label:"时间",prop:"f_CreateDate",width:160,align:"left"}],taskId:"",title:"",visible:!1,isCreateAgain:!1,isCreateSub:!1,batchVisible:!1}},computed:{},mounted:function(){this.init()},methods:{init:function(){this.loadTableData()},handleSearch:function(){this.loadTableData()},turnTablePage:function(e){var t=e.rows;this.tablePageSize=t,this.loadTableData(!0)},loadTableData:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var n,r,l,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e||(t.tableCurrentPage=1),t.tableLoading=!0,n=t.$deepClone(t.queryData),n.seachDate&&(r=n.seachDate.split(" - "),n.startDate=r[0],n.endDate=r[1],n.seachDate=null),l={rows:t.tablePageSize,page:t.tableCurrentPage,sidx:"f_IsUrge DESC,t.F_CreateDate DESC"},a.next=7,t.$awaitWraper(s.getUnCompletedMyPage(l,n));case 7:i=a.sent,null!=i?(t.tableData=i.rows,t.tableTotal=i.records):t.tableData=[],t.tableLoading=!1;case 10:case"end":return a.stop()}}),a)})))()},handleAudit:function(e){this.isCreateAgain=4==e.f_Type,this.isCreateSub=3==e.f_Type,this.taskId=e.f_Id,this.title="".concat(e.f_ProcessTitle,"【").concat(e.f_UnitName,"】"),this.visible=!0},openBatchAudit:function(){this.batchVisible=!0},handleBatchOpenedForm:function(){this.$refs.batchAudit.reset()},handleBatchCloseForm:function(){},handleBatchClose:function(){this.batchVisible=!1},handleBatchAudit:function(e){var t=this,a=this.$refs.batchAudit.value;a&&this.$confirm(this.$t("是否".concat(e?"同意":"不同意","所选流程?")),this.$t("提示"),{confirmButtonText:this.$t("确定"),cancelButtonText:this.$t("取消"),type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.$refs.batchDialog.showLoading("审核中..."),n.next=3,s.audits(e?"agree":"disagree",{ids:a});case 3:t.$refs.batchDialog.hideLoading(),t.$refs.batchAudit.reset();case 5:case"end":return n.stop()}}),n)})))).catch((function(){}))}}},c=o,u=a("2877"),d=Object(u["a"])(c,n,r,!1,null,null,null);t["default"]=d.exports},"1f9c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"l-tab-page",staticStyle:{padding:"8px"}},[a("div",{staticClass:"l-rblock"},[a("el-tabs",{attrs:{"tab-position":"left",stretch:!0},on:{"tab-click":e.handleClick},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[a("el-tab-pane",{attrs:{lazy:"",name:"uncompleted",label:e.$t("待办任务")}},["uncompleted"==e.activeTab?a("uncompleted-task",{ref:"uncompleted"}):e._e()],1),a("el-tab-pane",{attrs:{lazy:"",name:"create",label:e.$t("发起任务")}},["create"==e.activeTab?a("create-flow",{attrs:{isChild:!0}}):e._e()],1),a("el-tab-pane",{attrs:{lazy:"",name:"delegate",label:e.$t("委托任务")}},["delegate"==e.activeTab?a("delegate-task",{ref:"delegate"}):e._e()],1),a("el-tab-pane",{attrs:{lazy:"",name:"completed",label:e.$t("已办任务")}},["completed"==e.activeTab?a("completed-task",{ref:"completed"}):e._e()],1),a("el-tab-pane",{attrs:{lazy:"",name:"my",label:e.$t("我的流程")}},["my"==e.activeTab?a("my-task",{ref:"my"}):e._e()],1),a("el-tab-pane",{attrs:{lazy:"",name:"read",label:e.$t("我的传阅")}},["read"==e.activeTab?a("read-task",{ref:"read"}):e._e()],1),a("el-tab-pane",{attrs:{lazy:"",name:"draft",label:e.$t("我的草稿")}},["draft"==e.activeTab?a("my-draft",{ref:"draft"}):e._e()],1)],1)],1)])},r=[],l=a("03b5"),i=a("1d14"),s=a("80e6"),o=a("4764"),c=a("bbaa"),u=a("5eef"),d=a("476f"),f={components:{CreateFlow:l["default"],UncompletedTask:i["default"],CompletedTask:s["default"],MyTask:o["default"],ReadTask:c["default"],MyDraft:u["default"],DelegateTask:d["default"]},data:function(){return{lr_isPage:!0,activeTab:"uncompleted"}},computed:{},mounted:function(){var e=this,t=this.$route.query.type;t&&this.$nextTick((function(){e.activeTab=t}))},methods:{handleClick:function(){this.$refs[this.activeTab]&&this.$refs[this.activeTab].loadTableData&&this.$refs[this.activeTab].loadTableData()}}},p=f,b=a("2877"),h=Object(b["a"])(p,n,r,!1,null,null,null);t["default"]=h.exports},4764:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("l-panel",{staticStyle:{padding:"0"},scopedSlots:e._u([{key:"toolLeft",fn:function(){return[a("l-query2",{attrs:{labelWidth:0,popoverWidth:240,items:e.queryItems,formData:e.queryData,loading:e.tableLoading},on:{search:e.handleSearch},scopedSlots:e._u([{key:"keyWord",fn:function(){return[a("el-input",{attrs:{placeholder:e.$t("请输入查询关键字")},model:{value:e.queryData.keyWord,callback:function(t){e.$set(e.queryData,"keyWord",t)},expression:"queryData.keyWord"}})]},proxy:!0},{key:"seachDate",fn:function(){return[a("l-date",{attrs:{format:"yyyy-MM-dd",dateType:"daterange",startPlaceholder:e.$t("开始时间"),endPlaceholder:e.$t("结束时间")},model:{value:e.queryData.seachDate,callback:function(t){e.$set(e.queryData,"seachDate",t)},expression:"queryData.seachDate"}})]},proxy:!0}])})]},proxy:!0},{key:"toolRight",fn:function(){return[a("l-tool-btns",{attrs:{hasAdd:!1}})]},proxy:!0}])},[a("l-table",{ref:"mainTable",attrs:{loading:e.tableLoading,columns:e.columns,dataSource:e.tableData,isPage:!0,pageTotal:e.tableTotal,tablePage:e.tableCurrentPage},on:{"update:tablePage":function(t){e.tableCurrentPage=t},"update:table-page":function(t){e.tableCurrentPage=t},loadPageData:e.turnTablePage},scopedSlots:e._u([{key:"f_Title",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.handleLook(t.row)}}},[e._v(e._s(t.row.f_Title))])]}},{key:"f_IsFinished",fn:function(t){return[3==t.row.f_EnabledMark?a("el-tag",{attrs:{size:"mini",type:"danger"}},[e._v(e._s(e.$t("作废")))]):1==t.row.f_IsFinished?a("el-tag",{attrs:{size:"mini",type:"warning"}},[e._v(e._s(e.$t("结束")))]):1==t.row.f_IsAgain?a("el-tag",{attrs:{size:"mini",type:"primary"}},[e._v(e._s(e.$t("重新提交")))]):a("el-tag",{attrs:{size:"mini",type:"success"}},[e._v(e._s(e.$t("审批中")))])]}},{key:"f_CreateDate",fn:function(t){return[e._v(" "+e._s(e.lr_dateFormat(t.row.f_CreateDate))+" ")]}}])},[a("l-table-btns",{attrs:{isAuth:!1,isFixed:!1,filterBtns:e.filterBtns,btns:e.tableBtns},on:{click:e.lr_handleTableBtnClick}})],1),a("wf-look-form",{ref:"form",attrs:{type:"lookmy",params:{processId:e.processId},isLoadFormData:!0,title:e.title,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}})],1)},r=[],l=(a("a434"),a("ac1f"),a("1276"),a("96cf"),a("1da1")),i=window.$api.workflow.process,s={data:function(){return{queryItems:[{prop:"seachDate",span:24},{prop:"keyWord",span:24}],queryData:{keyWord:"",seachDate:""},tableLoading:!1,tableData:[],tableTotal:0,tableCurrentPage:1,tablePageSize:50,columns:[{label:"编号",prop:"f_LongId",width:160,align:"left"},{label:"标题",prop:"f_Title",minWidth:100,align:"left"},{label:"流程模版",prop:"f_SchemeName",minWidth:100,align:"left"},{label:"状态",prop:"f_IsFinished",width:120,align:"center"},{label:"提交人",prop:"f_UserId",width:250,align:"left",dataType:"fullUser",isNotAutoWrap:!0},{label:"提交时间",prop:"f_CreateDate",width:160,align:"left"}],tableBtns:[{prop:"Urge",label:"催办",width:100},{prop:"Revoke",label:"撤销",width:100}],visible:!1,title:"",processId:""}},computed:{},mounted:function(){this.init()},methods:{init:function(){this.loadTableData()},handleSearch:function(){this.loadTableData()},turnTablePage:function(e){var t=e.rows;this.tablePageSize=t,this.loadTableData(!0)},loadTableData:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var n,r,l,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e||(t.tableCurrentPage=1),t.tableLoading=!0,n=t.$deepClone(t.queryData),n.seachDate&&(r=n.seachDate.split(" - "),n.startDate=r[0],n.endDate=r[1],n.seachDate=null),l={rows:t.tablePageSize,page:t.tableCurrentPage,sidx:"F_CreateDate DESC"},a.next=7,t.$awaitWraper(i.getMyPage(l,n));case 7:s=a.sent,null!=s?(t.tableData=s.rows,t.tableTotal=s.records):t.tableData=[],t.tableLoading=!1;case 10:case"end":return a.stop()}}),a)})))()},filterBtns:function(e,t){return 1==e.f_IsFinished||1==e.f_IsAgain||3==e.f_EnabledMark?[]:0!=e.f_IsStart&&1!=e.f_IsCancel?[{prop:"Urge",label:"催办"}]:t},handleLook:function(e){this.title=e.f_Title,this.processId=e.f_Id,this.visible=!0},handleRevoke:function(e,t){var a=this;this.$confirm(this.$t("是否撤销流程?"),this.$t("提示"),{confirmButtonText:this.$t("确定"),cancelButtonText:this.$t("取消"),type:"warning"}).then((function(){0==t.f_IsStart?i.revoke(t.f_Id).then((function(){a.tableData.splice(e,1),a.tableTotal--,a.$message({type:"success",message:a.$t("撤销成功!")})})):1==t.f_IsCancel&&(t.f_IsCancel=0,i.revokeAudit(t.f_Id).then((function(){a.$message({type:"success",message:a.$t("撤销成功!")})})))})).catch((function(){a.$message({type:"info",message:a.$t("已取消撤销")})}))},handleUrge:function(e,t){var a=this;i.urge(t.f_Id).then((function(){a.$message({type:"success",message:a.$t("催办成功!")})}))}}},o=s,c=a("2877"),u=Object(c["a"])(o,n,r,!1,null,null,null);t["default"]=u.exports},"476f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("l-panel",{staticStyle:{padding:"0"},scopedSlots:e._u([{key:"toolLeft",fn:function(){return[a("l-query2",{attrs:{labelWidth:0,popoverWidth:240,items:e.queryItems,formData:e.queryData,loading:e.tableLoading},on:{search:e.handleSearch},scopedSlots:e._u([{key:"keyWord",fn:function(){return[a("el-input",{attrs:{placeholder:e.$t("请输入查询关键字")},model:{value:e.queryData.keyWord,callback:function(t){e.$set(e.queryData,"keyWord",t)},expression:"queryData.keyWord"}})]},proxy:!0},{key:"seachDate",fn:function(){return[a("l-date",{attrs:{format:"yyyy-MM-dd",dateType:"daterange",startPlaceholder:e.$t("开始时间"),endPlaceholder:e.$t("结束时间")},model:{value:e.queryData.seachDate,callback:function(t){e.$set(e.queryData,"seachDate",t)},expression:"queryData.seachDate"}})]},proxy:!0}])})]},proxy:!0},{key:"toolRight",fn:function(){return[a("l-tool-btns",{attrs:{hasAdd:!1}})]},proxy:!0}])},[a("l-table",{ref:"mainTable",attrs:{loading:e.tableLoading,columns:e.columns,dataSource:e.tableData,isPage:!0,pageTotal:e.tableTotal,tablePage:e.tableCurrentPage},on:{"update:tablePage":function(t){e.tableCurrentPage=t},"update:table-page":function(t){e.tableCurrentPage=t},loadPageData:e.turnTablePage},scopedSlots:e._u([{key:"f_UnitName",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.handleAudit(t.row)}}},[e._v(e._s(t.row.f_UnitName))])]}},{key:"f_IsUrge",fn:function(t){return[1==t.row.f_IsUrge?a("el-tag",{attrs:{size:"mini",type:"warning"}},[e._v(e._s(e.$t("催办")))]):a("el-tag",{attrs:{size:"mini",type:"success"}},[e._v(e._s(e.$t("正常")))])]}},{key:"f_CreateDate",fn:function(t){return[e._v(" "+e._s(e.lr_dateFormat(t.row.f_CreateDate))+" ")]}}])}),a("wf-audit-form",{ref:"form",attrs:{type:"audit",isCreateAgain:e.isCreateAgain,params:{taskId:e.taskId},isLoadFormData:!0,title:e.title,visible:e.visible},on:{"update:visible":function(t){e.visible=t},refresh:function(t){return e.loadTableData(!0)}}})],1)},r=[],l=(a("99af"),a("ac1f"),a("1276"),a("96cf"),a("1da1")),i=window.$api.workflow.process,s={components:{},data:function(){return{queryItems:[{prop:"seachDate",span:24},{prop:"keyWord",span:24}],queryData:{keyWord:"",seachDate:""},tableLoading:!1,tableData:[],tableTotal:0,tableCurrentPage:1,tablePageSize:50,columns:[{label:"任务",prop:"f_UnitName",minWidth:100,align:"left"},{label:"标题",prop:"f_ProcessTitle",minWidth:100,align:"left"},{label:"状态",prop:"f_IsUrge",width:60,align:"center"},{label:"提交人",prop:"f_ProcessUserId",width:200,align:"left",dataType:"fullUser",isNotAutoWrap:!0},{label:"时间",prop:"f_CreateDate",width:160,align:"left"}],taskId:"",title:"",visible:!1,isCreateAgain:!1}},computed:{},mounted:function(){this.init()},methods:{init:function(){this.loadTableData()},handleSearch:function(){this.loadTableData()},turnTablePage:function(e){var t=e.rows;this.tablePageSize=t,this.loadTableData(!0)},loadTableData:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var n,r,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e||(t.tableCurrentPage=1),t.tableLoading=!0,n=t.$deepClone(t.queryData),n.seachDate&&(r=n.seachDate.split(" - "),n.startDate=r[0],n.endDate=r[1],n.seachDate=null),n.rows=t.tablePageSize,n.page=t.tableCurrentPage,n.sidx="F_CreateDate DESC",a.next=9,t.$awaitWraper(i.getDelegateMyPage(n));case 9:l=a.sent,null!=l?(t.tableData=l.rows,t.tableTotal=l.records):t.tableData=[],t.tableLoading=!1;case 12:case"end":return a.stop()}}),a)})))()},handleAudit:function(e){this.isCreateAgain=4==e.f_Type,this.taskId=e.f_Id,this.title="".concat(e.f_ProcessTitle,"【").concat(e.f_UnitName,"】"),this.visible=!0},handleOpened:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$awaitWraper(i.get(e.taskId));case 2:a=t.sent,a&&console.log(a),e.dialogLoading=!1;case 5:case"end":return t.stop()}}),t)})))()},handleClosed:function(){}}},o=s,c=a("2877"),u=Object(c["a"])(o,n,r,!1,null,null,null);t["default"]=u.exports},"5eef":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("l-panel",{staticStyle:{padding:"0"},scopedSlots:e._u([{key:"toolLeft",fn:function(){return[a("l-query2",{attrs:{labelWidth:0,popoverWidth:240,items:e.queryItems,formData:e.queryData,loading:e.tableLoading},on:{search:e.handleSearch},scopedSlots:e._u([{key:"keyWord",fn:function(){return[a("el-input",{attrs:{placeholder:e.$t("请输入查询关键字")},model:{value:e.queryData.keyWord,callback:function(t){e.$set(e.queryData,"keyWord",t)},expression:"queryData.keyWord"}})]},proxy:!0},{key:"seachDate",fn:function(){return[a("l-date",{attrs:{format:"yyyy-MM-dd",dateType:"daterange",startPlaceholder:e.$t("开始时间"),endPlaceholder:e.$t("结束时间")},model:{value:e.queryData.seachDate,callback:function(t){e.$set(e.queryData,"seachDate",t)},expression:"queryData.seachDate"}})]},proxy:!0}])})]},proxy:!0},{key:"toolRight",fn:function(){return[a("l-tool-btns",{attrs:{hasAdd:!1}})]},proxy:!0}])},[a("l-table",{ref:"mainTable",attrs:{loading:e.tableLoading,columns:e.columns,dataSource:e.tableData,isPage:!0,pageTotal:e.tableTotal,tablePage:e.tableCurrentPage},on:{"update:tablePage":function(t){e.tableCurrentPage=t},"update:table-page":function(t){e.tableCurrentPage=t},loadPageData:e.turnTablePage},scopedSlots:e._u([{key:"f_Title",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.handleCreate(t.row)}}},[e._v(e._s(t.row.f_Title))])]}},{key:"f_CreateDate",fn:function(t){return[e._v(" "+e._s(e.lr_dateFormat(t.row.f_CreateDate))+" ")]}}])},[a("l-table-btns",{attrs:{isAuth:!1,isFixed:!1,btns:e.tableBtns},on:{click:e.lr_handleTableBtnClick}})],1),a("wf-create-form",{ref:"form",attrs:{type:"draft",params:{processId:e.processId},isLoadFormData:!0,title:e.title,visible:e.visible},on:{"update:visible":function(t){e.visible=t},refresh:function(t){return e.loadTableData(!0)}}})],1)},r=[],l=(a("a434"),a("ac1f"),a("1276"),a("96cf"),a("1da1")),i=window.$api.workflow.process,s={data:function(){return{queryItems:[{prop:"seachDate",span:24},{prop:"keyWord",span:24}],queryData:{keyWord:"",seachDate:""},tableLoading:!1,tableData:[],tableTotal:0,tableCurrentPage:1,tablePageSize:50,columns:[{label:"标题",prop:"f_Title",minWidth:100,align:"left"},{label:"流程模版",prop:"f_SchemeName",minWidth:60,align:"left"},{label:"提交者",prop:"f_UserId",width:200,align:"left",dataType:"fullUser",isNotAutoWrap:!0},{label:"提交时间",prop:"f_CreateDate",width:160,align:"left"}],tableBtns:[{prop:"Delete",label:"删除",width:100}],visible:!1,title:"",processId:""}},computed:{},mounted:function(){this.init()},methods:{init:function(){this.loadTableData()},handleSearch:function(){this.loadTableData()},turnTablePage:function(e){var t=e.rows;this.tablePageSize=t,this.loadTableData(!0)},loadTableData:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var n,r,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e||(t.tableCurrentPage=1),t.tableLoading=!0,n=t.$deepClone(t.queryData),n.seachDate&&(r=n.seachDate.split(" - "),n.startDate=r[0],n.endDate=r[1],n.seachDate=null),n.rows=t.tablePageSize,n.page=t.tableCurrentPage,n.sidx="F_CreateDate DESC",a.next=9,t.$awaitWraper(i.getMyDraftPage(n));case 9:l=a.sent,null!=l?(t.tableData=l.rows,t.tableTotal=l.records):t.tableData=[],t.tableLoading=!1;case 12:case"end":return a.stop()}}),a)})))()},handleCreate:function(e){this.title=e.f_SchemeName,this.processId=e.f_Id,this.visible=!0},handleDelete:function(e,t){var a=this;this.$confirm(this.$t("此操作将永久删除该数据, 是否继续?"),this.$t("提示"),{confirmButtonText:this.$t("确定"),cancelButtonText:this.$t("取消"),type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.tableData.splice(e,1),a.tableTotal--,n.next=4,i.deleteDraft(t.f_Id);case 4:a.$message({type:"success",message:a.$t("删除成功!")});case 5:case"end":return n.stop()}}),n)})))).catch((function(){a.$message({type:"info",message:a.$t("已取消删除")})}))}}},o=s,c=a("2877"),u=Object(c["a"])(o,n,r,!1,null,null,null);t["default"]=u.exports},"80e6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("l-panel",{staticStyle:{padding:"0"},scopedSlots:e._u([{key:"toolLeft",fn:function(){return[a("l-query2",{attrs:{labelWidth:0,popoverWidth:240,items:e.queryItems,formData:e.queryData,loading:e.tableLoading},on:{search:e.handleSearch},scopedSlots:e._u([{key:"keyWord",fn:function(){return[a("el-input",{attrs:{placeholder:e.$t("请输入查询关键字")},model:{value:e.queryData.keyWord,callback:function(t){e.$set(e.queryData,"keyWord",t)},expression:"queryData.keyWord"}})]},proxy:!0},{key:"seachDate",fn:function(){return[a("l-date",{attrs:{format:"yyyy-MM-dd",dateType:"daterange",startPlaceholder:e.$t("开始时间"),endPlaceholder:e.$t("结束时间")},model:{value:e.queryData.seachDate,callback:function(t){e.$set(e.queryData,"seachDate",t)},expression:"queryData.seachDate"}})]},proxy:!0}])})]},proxy:!0},{key:"toolRight",fn:function(){return[a("l-tool-btns",{attrs:{hasAdd:!1}})]},proxy:!0}])},[a("l-table",{ref:"mainTable",attrs:{loading:e.tableLoading,columns:e.columns,dataSource:e.tableData,isPage:!0,isMultiSelect:!0,pageTotal:e.tableTotal,tablePage:e.tableCurrentPage,rowKey:"id"},on:{"update:tablePage":function(t){e.tableCurrentPage=t},"update:table-page":function(t){e.tableCurrentPage=t},loadPageData:e.turnTablePage},scopedSlots:e._u([{key:"f_UnitName",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.handleLook(t.row)}}},[e._v(e._s(t.row.f_UnitName))])]}},{key:"f_MakeTime",fn:function(t){return[e._v(" "+e._s(e.lr_dateFormat(t.row.f_MakeTime))+" ")]}},{key:"f_IsFinished",fn:function(t){return[3==t.row.isDelete?a("el-tag",{attrs:{size:"mini",type:"danger"}},[e._v(e._s(e.$t("作废")))]):1==t.row.f_IsFinished?a("el-tag",{attrs:{size:"mini",type:"warning"}},[e._v(e._s(e.$t("结束")))]):a("el-tag",{attrs:{size:"mini",type:"success"}},[e._v(e._s(e.$t("审批中")))])]}}])},[a("l-table-btns",{attrs:{isAuth:!1,filterBtns:e.filterBtns,btns:e.tableBtns},on:{click:e.lr_handleTableBtnClick}})],1),a("wf-look-form",{ref:"form",attrs:{type:"look",params:{taskId:e.taskId},isLoadFormData:!0,title:e.title,visible:e.visible,wfIsPrints:e.isPrints},on:{"update:visible":function(t){e.visible=t},printDataLoaded:e.printDataLoaded}})],1)},r=[],l=(a("99af"),a("d81d"),a("ac1f"),a("1276"),a("5530")),i=(a("96cf"),a("1da1")),s=window.$api.workflow.process,o={data:function(){return{queryItems:[{prop:"seachDate",span:24},{prop:"keyWord",span:24}],queryData:{keyWord:"",seachDate:""},tableLoading:!1,tableData:[],tableTotal:0,tableCurrentPage:1,tablePageSize:50,columns:[{label:"任务",prop:"f_UnitName",minWidth:100,align:"left"},{label:"标题",prop:"f_ProcessTitle",minWidth:100,align:"left"},{label:"审核",prop:"f_OperationName",width:100,align:"center"},{label:"状态",prop:"f_IsFinished",width:80,align:"center"},{label:"提交人",prop:"f_ProcessUserId",width:200,align:"left",dataType:"fullUser",isNotAutoWrap:!0},{label:"时间",prop:"f_MakeTime",width:160,align:"left"}],tableBtns:[{prop:"Revoke",label:"撤销",width:100}],taskId:"",title:"",visible:!1}},computed:{},mounted:function(){this.init()},methods:{init:function(){this.loadTableData()},handleSearch:function(){this.loadTableData()},turnTablePage:function(e){var t=e.rows;this.tablePageSize=t,this.loadTableData(!0)},loadTableData:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e||(t.tableCurrentPage=1),t.tableLoading=!0,n=t.$deepClone(t.queryData),n.seachDate&&(r=n.seachDate.split(" - "),n.startDate=r[0],n.endDate=r[1],n.seachDate=null),i={rows:t.tablePageSize,page:t.tableCurrentPage,sidx:"t1.F_CreateDate DESC"},a.next=7,t.$awaitWraper(s.getCompletedMyPage(i,n));case 7:o=a.sent,null!=o?(t.tableData=o.rows.map((function(e,t){return Object(l["a"])(Object(l["a"])({},e),{},{id:e.f_Id+t})})),t.tableTotal=o.records):t.tableData=[],t.tableLoading=!1;case 10:case"end":return a.stop()}}),a)})))()},filterBtns:function(e,t){return 1==e.f_IsCancel&&1!=e.f_IsFinished&&3!=e.isDelete?t:[]},handleRevoke:function(e,t){var a=this;this.$confirm("是否撤销审核?","提示",{confirmButtonText:this.$t("确定"),cancelButtonText:this.$t("取消"),type:"warning"}).then((function(){s.revokeAudit(t.f_ProcessId,t.f_Id).then((function(){a.loadTableData(a.tableTotal>1),a.$message({type:"success",message:a.$t("撤销成功!")})}))})).catch((function(){a.$message({type:"info",message:a.$t("已取消撤销")})}))},handleLook:function(e){this.isPrints=!1,this.taskId=e.f_Id,this.title="".concat(e.f_ProcessTitle,"【").concat(e.f_UnitName,"】"),this.visible=!0}}},c=o,u=a("2877"),d=Object(u["a"])(c,n,r,!1,null,null,null);t["default"]=d.exports},bbaa:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("l-panel",{staticStyle:{padding:"0"},scopedSlots:e._u([{key:"toolLeft",fn:function(){return[a("l-query2",{attrs:{labelWidth:0,popoverWidth:240,items:e.queryItems,formData:e.queryData,loading:e.tableLoading},on:{search:e.handleSearch},scopedSlots:e._u([{key:"keyWord",fn:function(){return[a("el-input",{attrs:{placeholder:e.$t("请输入查询关键字")},model:{value:e.queryData.keyWord,callback:function(t){e.$set(e.queryData,"keyWord",t)},expression:"queryData.keyWord"}})]},proxy:!0},{key:"seachDate",fn:function(){return[a("l-date",{attrs:{format:"yyyy-MM-dd",dateType:"daterange",startPlaceholder:e.$t("开始时间"),endPlaceholder:e.$t("结束时间")},model:{value:e.queryData.seachDate,callback:function(t){e.$set(e.queryData,"seachDate",t)},expression:"queryData.seachDate"}})]},proxy:!0}])})]},proxy:!0},{key:"toolRight",fn:function(){return[a("l-tool-btns",{attrs:{hasAdd:!1}})]},proxy:!0}])},[a("l-table",{ref:"mainTable",attrs:{loading:e.tableLoading,columns:e.columns,dataSource:e.tableData,isPage:!0,pageTotal:e.tableTotal,tablePage:e.tableCurrentPage},on:{"update:tablePage":function(t){e.tableCurrentPage=t},"update:table-page":function(t){e.tableCurrentPage=t},loadPageData:e.turnTablePage},scopedSlots:e._u([{key:"f_UnitName",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.handleRead(t.row)}}},[e._v(e._s(t.row.f_UnitName))])]}},{key:"f_CreateDate",fn:function(t){return[e._v(" "+e._s(e.lr_dateFormat(t.row.f_CreateDate))+" ")]}},{key:"f_State",fn:function(t){return[1==t.row.f_State?a("el-tag",{attrs:{size:"mini",type:"warning"}},[e._v(e._s(e.$t("未阅")))]):a("el-tag",{attrs:{size:"mini",type:"success"}},[e._v(e._s(e.$t("已阅")))])]}}])}),a("wf-audit-form",{ref:"form",attrs:{type:"look",isRead:!0,params:{taskId:e.taskId},isLoadFormData:!0,title:e.title,visible:e.visible},on:{"update:visible":function(t){e.visible=t},refresh:function(t){return e.loadTableData(!0)}}})],1)},r=[],l=(a("99af"),a("ac1f"),a("1276"),a("96cf"),a("1da1")),i=window.$api.workflow.process,s={components:{},data:function(){return{queryItems:[{prop:"seachDate",span:24},{prop:"keyWord",span:24}],queryData:{keyWord:"",seachDate:""},tableLoading:!1,tableData:[],tableTotal:0,tableCurrentPage:1,tablePageSize:50,columns:[{label:"任务",prop:"f_UnitName",minWidth:100,align:"left"},{label:"标题",prop:"f_ProcessTitle",minWidth:100,align:"left"},{label:"状态",prop:"f_State",width:60,align:"center"},{label:"提交人",prop:"f_ProcessUserId",width:200,align:"left",dataType:"fullUser",isNotAutoWrap:!0},{label:"时间",prop:"f_CreateDate",width:160,align:"left"}],taskId:"",title:"",visible:!1}},computed:{},mounted:function(){this.init()},methods:{init:function(){this.loadTableData()},handleSearch:function(){this.loadTableData()},turnTablePage:function(e){var t=e.rows;this.tablePageSize=t,this.loadTableData(!0)},loadTableData:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var n,r,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e||(t.tableCurrentPage=1),t.tableLoading=!0,n=t.$deepClone(t.queryData),n.seachDate&&(r=n.seachDate.split(" - "),n.startDate=r[0],n.endDate=r[1],n.seachDate=null),n.rows=t.tablePageSize,n.page=t.tableCurrentPage,n.sidx="f_State,t.f_CreateDate DESC",a.next=9,t.$awaitWraper(i.getReadMyPage(n));case 9:l=a.sent,null!=l?(t.tableData=l.rows,t.tableTotal=l.records):t.tableData=[],t.tableLoading=!1;case 12:case"end":return a.stop()}}),a)})))()},handleRead:function(e){this.taskId=e.f_Id,this.title="".concat(e.f_ProcessTitle,"【").concat(e.f_UnitName,"】"),this.visible=!0}}},o=s,c=a("2877"),u=Object(c["a"])(o,n,r,!1,null,null,null);t["default"]=u.exports},cfc9:function(e,t,a){"use strict";a("10f5")}}]);