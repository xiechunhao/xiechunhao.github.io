(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-homeSetting-index"],{"0ceb":function(e,t,a){},2504:function(e,t,a){"use strict";a("0ceb")},"45ed":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("l-layout",{staticClass:"l-tab-page l-desktop-setting-index"},[a("l-panel",{scopedSlots:e._u([{key:"toolLeft",fn:function(){return[a("div",{staticClass:"l-panel--item"},[a("el-input",{attrs:{placeholder:e.$t("请输入名称"),size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.hanleSearch.apply(null,arguments)}},model:{value:e.searchWord,callback:function(t){e.searchWord=t},expression:"searchWord"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.hanleSearch},slot:"append"})],1)],1)]},proxy:!0},{key:"toolRight",fn:function(){return[a("l-tool-btns",{attrs:{btnText:"新增配置"},on:{click:function(t){return e.handleAdd()}}})]},proxy:!0}])},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticClass:"l-rblock",staticStyle:{"padding-bottom":"48px","background-color":"#f0f2f5"}},[a("div",{staticClass:"l-rblock",staticStyle:{overflow:"hidden auto"}},[e._l(e.tableData,(function(t){return a("div",{directives:[{name:"show",rawName:"v-show",value:e.tableData.length>0,expression:"tableData.length > 0"}],key:t.f_Id,staticClass:"l-v-item"},[a("el-image",{attrs:{src:e.apiUrl+"system/annexesfile/"+t.f_SchemeId+"?token="+e.token}}),a("div",{staticClass:"content__btn",on:{click:function(a){return e.handleDesign(t)}}},[e._v(" "+e._s(e.$t("设计"))+" ")]),a("div",{staticStyle:{position:"absolute",top:"8px",right:"8px"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return e.handleEnableChange(t)}},model:{value:t.f_EnabledMark,callback:function(a){e.$set(t,"f_EnabledMark",a)},expression:"item.f_EnabledMark"}})],1),a("div",{staticClass:"content__main"},[a("span",{staticClass:"content__name"},[e._v(e._s(t.f_Name))]),a("div",{staticClass:"content__menulist"},[a("div",{staticClass:"content__view"},[a("el-tooltip",{attrs:{content:e.$t("删除")}},[a("i",{staticClass:"el-icon-delete",on:{click:function(a){return e.handleDelete(t)}}})]),a("el-tooltip",{attrs:{content:e.$t("预览")}},[a("i",{staticClass:"el-icon-view",on:{click:function(a){return e.handleViews(t)}}})]),a("el-tooltip",{attrs:{content:e.$t("复制")}},[a("i",{staticClass:"el-icon-copy-document",on:{click:function(a){return e.handleCopy(t)}}})]),a("el-tooltip",{attrs:{content:e.$t("历史")}},[a("i",{staticClass:"el-icon-time",on:{click:function(a){return e.handleHistory(t)}}})])],1)])])],1)})),a("el-empty",{directives:[{name:"show",rawName:"v-show",value:0==e.tableData.length,expression:"tableData.length == 0"}],attrs:{description:e.$t("暂无数据")}})],2),a("div",{staticClass:"l-table--pagination",staticStyle:{border:"0"}},[a("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper",background:"","page-sizes":[10,20,30,50],"page-size":e.tablePageSize,"current-page":e.tableCurrentPage,total:e.tableTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.tableCurrentPage=t},"update:current-page":function(t){e.tableCurrentPage=t}}})],1)])]),a("l-fullscreen-dialog",{attrs:{title:e.$t(e.formTitle),headerMidWidth:320,visible:e.formVisible,isStep:!0,steps:["基本配置","桌面设计"],stepActive:e.stepActive,validateSteps:e.handleValidateSteps},on:{"update:visible":function(t){e.formVisible=t},"update:stepActive":function(t){e.stepActive=t},"update:step-active":function(t){e.stepActive=t},ok:e.handleSave,closed:e.handleCloseForm,opened:e.handleOpenedForm}},[a("my-form",{ref:"form",attrs:{stepActive:e.stepActive}})],1),a("l-fullscreen-dialog",{attrs:{title:e.$t("预览"),visible:e.preveiwVisible,showOk:!1},on:{"update:visible":function(t){e.preveiwVisible=t},closed:e.handleClosePreviewForm,opened:e.handleOpenedPreviewForm}},[a("preview-form",{ref:"previewForm"})],1),a("l-drawer",{attrs:{title:e.$t("历史记录")+"-"+e.$t(e.historyTitle),visible:e.historyVisible,showOk:!1,showClose:!1,size:"640px"},on:{"update:visible":function(t){e.historyVisible=t},opened:e.HistoryOpened}},[a("history",{ref:"HistoryForm",attrs:{schemeInfoId:e.schemeInfoId,schemeId:e.schemeId,updateSchemeId:e.updateSchemeId}})],1)],1)},i=[],r=(a("96cf"),a("1da1")),o=a("7668"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("l-quick-bi-viewer",{ref:"quickViewer",attrs:{isPreview:!0,isApp:""}})},l=[],c={mounted:function(){},methods:{resetForm:function(){this.$refs.quickViewer.reset()},setForm:function(e){this.$refs.quickViewer.set(e)}}},d=c,u=a("2877"),f=Object(u["a"])(d,s,l,!1,null,null,null),h=f.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("l-layout",{staticClass:"l-tab-page"},[a("l-panel",{staticStyle:{padding:"0"},scopedSlots:e._u([{key:"toolRight",fn:function(){return[a("el-button-group",[a("el-button",{attrs:{size:"mini",icon:"el-icon-refresh-left"},on:{click:e.handleRefresh}})],1)]},proxy:!0}])},[a("div",{staticClass:"l-rblock"},[a("l-table",{attrs:{loading:e.tableLoading,columns:e.columns,dataSource:e.tableData,"row-key":"f_Id",isPage:!0,pageTotal:e.tableTotal,tablePage:e.tableCurrentPage},on:{"update:tablePage":function(t){e.tableCurrentPage=t},"update:table-page":function(t){e.tableCurrentPage=t},loadPageData:e.turnTablePage},scopedSlots:e._u([{key:"f_CreateTime",fn:function(t){return[e._v(" "+e._s(e.lr_dateFormat(t.row.f_CreateTime))+" ")]}},{key:"f_IsVerison",fn:function(t){return[a("el-switch",{attrs:{disabled:t.row.f_IsVerison},on:{change:function(a){return e.handleEnableChange(t.row)}},model:{value:t.row.f_IsVerison,callback:function(a){e.$set(t.row,"f_IsVerison",a)},expression:"scope.row.f_IsVerison"}})]}}])},[a("l-table-btns",{attrs:{btns:e.tableBtns},on:{click:e.lr_handleTableBtnClick}})],1)],1)]),a("l-fullscreen-dialog",{attrs:{title:e.$t("预览")+"-"+e.previewTitle,visible:e.previewVisible,showOk:!1},on:{"update:visible":function(t){e.previewVisible=t},closed:e.handlePreviewClosed,opened:e.handlePreviewOpened}},[a("preview-form",{ref:"previewForm"})],1)],1)},m=[],b=(a("d81d"),a("159b"),a("5530")),g=window.$api.desktop.setting,v={components:{PreviewForm:h},props:{schemeInfoId:String,schemeId:String,updateSchemeId:Function},data:function(){return{noAuth:!0,columns:[{label:"创建人",prop:"f_CreateUserId",minWidth:"160",dataType:"user"},{label:"创建时间",prop:"f_CreateTime",minWidth:"160"},{label:"当前版本",prop:"f_IsVerison",width:"80",align:"center"}],tableBtns:[{prop:"Preview",label:this.$t("预览")}],tableLoading:!1,tableTotal:0,tablePageSize:50,tableCurrentPage:1,tableData:[],previewVisible:!1,previewTitle:"",formEditRow:null}},computed:{},methods:{handleRefresh:function(){this.loadTablePageData()},loadTablePageData:function(e){var t=this;e||(this.tableCurrentPage=1),this.tableLoading=!0;var a={rows:this.tablePageSize,page:this.tableCurrentPage,sidx:"F_CreateTime DESC"};g.getHistoryPage(this.schemeInfoId,a).then((function(e){var a=t.$deepClone(e.data.data);t.tableData=a.rows.map((function(e){return Object(b["a"])(Object(b["a"])({},e),{},{f_IsVerison:e.f_Id==t.schemeId})})),t.tableTotal=a.records,t.tableLoading=!1})).catch((function(){t.tableData=[],t.tableLoading=!1}))},turnTablePage:function(e){var t=e.rows;this.tablePageSize=t,this.loadTablePageData(!0)},handleEnableChange:function(e){var t=this;this.updateSchemeId(e.f_Id),this.tableData.forEach((function(t){t.f_Id!=e.f_Id&&(t.f_IsVerison=!1)})),this.$nextTick((function(){g.updateHistory(t.schemeInfoId,e.f_Id).then((function(){t.$message({type:"success",message:t.$t("更新成功!")})}))}))},handlePreview:function(e,t){this.formEditRow=t,this.previewTitle=this.lr_dateFormat(t.f_CreateTime),this.previewVisible=!0},handlePreviewOpened:function(e,t){var a=this;e("加载数据中..."),this.$nextTick(Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$awaitWraper(g.getHistory(a.formEditRow.f_Id));case 2:n=e.sent,a.$refs.previewForm.setForm(JSON.parse(n.f_Content)),t();case 5:case"end":return e.stop()}}),e)}))))},handlePreviewClosed:function(){var e=this;this.$nextTick((function(){e.$refs.previewForm.resetForm()}))}}},w=v,_=Object(u["a"])(w,p,m,!1,null,null,null),k=_.exports,y=window.$api.desktop.setting,C={inject:["admin"],components:{MyForm:o["a"],PreviewForm:h,History:k},props:{},data:function(){return{searchWord:"",searchTableData:null,treeLoading:!1,treeData:[],treeShowData:[],searchCategoryWord:"",categoryVisible:!1,categoryId:"",tableLoading:!1,tableData:[],tableTotal:0,tablePageSize:10,tableCurrentPage:1,stepActive:0,stepPrevBtn:!0,stepNextBtn:!1,stepSaveBtn:!0,formVisible:!1,formTitle:"",formEditRow:null,formEdit:!1,formCopy:!1,preveiwVisible:!1,historyVisible:!1,historyTitle:"",schemeInfoId:"",schemeId:""}},created:function(){},mounted:function(){this.loadTablePageData()},computed:{},methods:{handleCurrentChange:function(e){this.tableCurrentPage=e,this.loadTablePageData(!0)},handleSizeChange:function(e){this.tablePageSize=e,this.loadTablePageData()},loadTablePageData:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,i,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.$loading({lock:!0,text:t.$t("加载数据中..."),spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.2)"}),e||(t.tableCurrentPage=1),i={rows:t.tablePageSize,page:t.tableCurrentPage,sidx:"F_CreateTime DESC",f_Name:t.searchWord,f_Type:2},a.next=5,t.$awaitWraper(y.getPage(i));case 5:r=a.sent,t.tableData=r.rows,t.tableTotal=r.records,n.close();case 9:case"end":return a.stop()}}),a)})))()},hanleSearch:function(){this.loadTablePageData()},handleEnableChange:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,y.updateState(e.f_Id,e.f_EnabledMark);case 2:t.$message({type:"success",message:t.$t("更新成功!")});case 3:case"end":return a.stop()}}),a)})))()},handleDesign:function(e){this.formEdit=!0,this.formCopy=!1,this.formEditRow=e,this.showForm("编辑桌面")},handleAdd:function(){this.formEdit=!1,this.formCopy=!1,this.showForm("新建桌面")},handleDelete:function(e){var t=this;this.$confirm(this.$t("此操作将永久删除该数据, 是否继续?"),this.$t("提示"),{confirmButtonText:this.$t("确定"),cancelButtonText:this.$t("取消"),type:"warning"}).then((function(){y.remove(e.f_Id).then((function(){t.$message({type:"success",message:t.$t("删除成功!")}),t.loadTablePageData()}))})).catch((function(){t.$message({type:"info",message:t.$t("已取消删除")})}))},handleCopy:function(e){this.formEdit=!1,this.formCopy=!0,this.formEditRow=e,this.showForm("新建桌面")},handleViews:function(e){this.formEditRow=e,this.preveiwVisible=!0},handleHistory:function(e){this.formEditRow=e,this.historyTitle=e.f_Name,this.schemeId=e.f_SchemeId,this.schemeInfoId=e.f_Id,this.historyVisible=!0},showForm:function(e){this.formTitle=e,this.formVisible=!0},handleSave:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.$loading({lock:!0,text:e.$t("正在保存配置，请稍后"),spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.2)"}),e.$nextTick(Object(r["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.form.getForm();case 2:if(n=t.sent,i=null,!e.formEdit){t.next=10;break}return t.next=7,e.$awaitWraper(y.update(e.formEditRow.f_Id,n));case 7:i=t.sent,t.next=13;break;case 10:return t.next=12,e.$awaitWraper(y.add(n));case 12:i=t.sent;case 13:i&&(e.$message({type:"success",message:e.formEdit?e.$t("编辑成功!"):e.$t("新增成功!")}),e.formVisible=!1,e.loadTablePageData()),a.close();case 15:case"end":return t.stop()}}),t)}))));case 2:case"end":return t.stop()}}),t)})))()},handleOpenedForm:function(e,t){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!a.formEdit&&!a.formCopy){n.next=8;break}return e("加载数据中..."),n.next=4,a.$awaitWraper(y.get(a.formEditRow.f_Id));case 4:i=n.sent,a.formCopy&&(i.lr_desktop_infoEntity.f_Id="",i.lr_desktop_infoEntity.f_ModuleId="",i.lr_desktop_infoEntity.f_Code="".concat(i.lr_desktop_infoEntity.f_Code,"-copy"),i.lr_desktop_infoEntity.f_Name="".concat(i.lr_desktop_infoEntity.f_Name,"-复制")),a.$refs.form.setForm(i),t();case 8:case"end":return n.stop()}}),n)})))()},handleCloseForm:function(){this.$refs.form.resetForm()},handleValidateSteps:function(){return this.$refs.form.validateSteps()},handleOpenedPreviewForm:function(e,t){var a=this;e("加载数据中..."),this.$nextTick(Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$awaitWraper(y.get(a.formEditRow.f_Id));case 2:n=e.sent,a.$refs.previewForm.setForm(JSON.parse(n.lr_desktop_schemeEntity.f_Content)),t();case 5:case"end":return e.stop()}}),e)}))))},handleClosePreviewForm:function(){this.$refs.previewForm.resetForm()},HistoryOpened:function(){this.$refs.HistoryForm.loadTablePageData()},updateSchemeId:function(e){this.schemeId=e,this.formEditRow.f_SchemeId=e}}},$=C,I=(a("2504"),Object(u["a"])($,n,i,!1,null,null,null));t["default"]=I.exports}}]);