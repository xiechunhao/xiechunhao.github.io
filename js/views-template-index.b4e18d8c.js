(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-template-index"],{"83a9":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.lr_loadPage?e._e():a("l-layout",{staticClass:"l-tab-page",scopedSlots:e._u([{key:"left",fn:function(){return[a("l-panel",{staticStyle:{"padding-right":"0"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s(e.$t("模板分类"))+" "),a("div",{staticClass:"tree-setting-btn"},[a("el-tooltip",{attrs:{effect:"dark",content:e.$t("设置"),placement:"top"}},[a("el-button",{attrs:{type:"text",icon:"el-icon-setting"},on:{click:e.handleSettingClick}})],1)],1)]},proxy:!0}],null,!1,659569791)},[a("div",{staticClass:"l-rblock",staticStyle:{"padding-bottom":"32px"}},[a("div",{staticClass:"l-rblock",staticStyle:{overflow:"hidden auto"}},[a("el-tree",{attrs:{data:e.treeData,"expand-on-click-node":!1},on:{"node-click":e.handleNodeClick},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.node;return a("span",{staticClass:"lr-tree-node"},[a("i",{staticClass:"el-icon-notebook-2"}),e._v(" "+e._s(r.label)+" ")])}}],null,!1,1970407520)})],1),a("div",{staticClass:"l-bottom"},[a("el-input",{attrs:{placeholder:e.$t("请输入名称"),size:"mini"},model:{value:e.searchCategoryWord,callback:function(t){e.searchCategoryWord=t},expression:"searchCategoryWord"}})],1)])])]},proxy:!0}],null,!1,4145284438)},[a("l-panel",{staticStyle:{"padding-left":"0"},scopedSlots:e._u([{key:"toolLeft",fn:function(){return[a("div",{staticClass:"l-panel--item"},[a("el-input",{attrs:{placeholder:e.$t("请输入名称/编码"),size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.hanleSearch.apply(null,arguments)}},model:{value:e.keyWord,callback:function(t){e.keyWord=t},expression:"keyWord"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(t){return e.hanleSearch.apply(null,arguments)}},slot:"append"})],1)],1)]},proxy:!0},{key:"toolRight",fn:function(){return[a("l-tool-btns",{attrs:{btnText:"新增"},on:{click:function(t){return e.handleAdd()}}})]},proxy:!0}],null,!1,2798173403)},[a("l-table",{attrs:{loading:e.tableLoading,columns:e.columns,dataSource:e.tableData,"row-key":"F_Id",isPage:!0,pageTotal:e.tableTotal,tablePage:e.tableCurrentPage},on:{"update:tablePage":function(t){e.tableCurrentPage=t},"update:table-page":function(t){e.tableCurrentPage=t},loadPageData:e.turnTablePage},scopedSlots:e._u([{key:"f_EnabledMark",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return e.handleEnableChange(t.row)}},model:{value:t.row.f_EnabledMark,callback:function(a){e.$set(t.row,"f_EnabledMark",a)},expression:"scope.row.f_EnabledMark"}})]}}],null,!1,2974089236)},[a("l-table-btns",{attrs:{btns:e.tableBtns},on:{click:e.lr_handleTableBtnClick}})],1)],1),a("l-fullscreen-dialog",{ref:"formDialog",attrs:{title:e.formTitle,visible:e.formVisible},on:{ok:e.handleSave,closed:e.handleClosed,opened:e.handleOpened,"update:visible":function(t){e.formVisible=t}}},[a("my-form",{ref:"form"})],1),a("l-drawer",{attrs:{title:e.$t("分类管理"),visible:e.categoryVisible,showOk:!1,showClose:!1,size:"800px"},on:{"update:visible":function(t){e.categoryVisible=t}}},[a("l-dataitem-index",{attrs:{classifyCode:"printSort"}})],1)],1)},n=[],i=(a("4de4"),a("96cf"),a("1da1")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"l-rblock"},[a("l-layout",{attrs:{right:320},scopedSlots:e._u([{key:"right",fn:function(){return[a("l-panel",{staticStyle:{padding:"0"},attrs:{title:e.$t("信息填写")}},[a("el-form",{ref:"form",staticClass:"pd-16",attrs:{model:e.formData,rules:e.rules,size:"mini","label-width":"56px"}},[a("el-row",{attrs:{gutter:0}},[a("el-col",[a("el-form-item",{attrs:{label:e.$t("名称"),prop:"f_Name"}},[a("el-input",{model:{value:e.formData.f_Name,callback:function(t){e.$set(e.formData,"f_Name",t)},expression:"formData.f_Name"}})],1)],1),a("el-col",[a("el-form-item",{attrs:{label:e.$t("编码"),prop:"f_Code"}},[a("el-input",{model:{value:e.formData.f_Code,callback:function(t){e.$set(e.formData,"f_Code",t)},expression:"formData.f_Code"}})],1)],1),a("el-col",[a("el-form-item",{attrs:{label:e.$t("分类"),prop:"f_Category"}},[a("l-select",{attrs:{options:e.lr_dataItemOptions(e.lr_dataItem["printSort"])},model:{value:e.formData.f_Category,callback:function(t){e.$set(e.formData,"f_Category",t)},expression:"formData.f_Category"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("状态"),prop:"f_EnabledMark"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.formData.f_EnabledMark,callback:function(t){e.$set(e.formData,"f_EnabledMark",t)},expression:"formData.f_EnabledMark"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("模版"),prop:"f_FileId"}},[a("l-upload",{attrs:{accept:".docx",isSecretLevel:!1},on:{load:e.handleFileLoad,success:e.handleFileSuccess,delete:e.handleFileDelete},model:{value:e.formData.f_FileId,callback:function(t){e.$set(e.formData,"f_FileId",t)},expression:"formData.f_FileId"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-alert",{attrs:{title:e.$t("标记说明"),type:"info",description:e.$t("1.自定义表单:标记为$组件id$;  2.系统表单:需要提供getPrintData方法,标记为$字段key$;  3.子表数据:$表格id.行号.列组件id$;  4.流程审核信息:节点名称$WFName节点id$、节点审核人$WFUser节点id$、节点审核说明$WFDes节点id$、节点审核时间$WFTime节点id$;"),"show-icon":"",closable:!1}})],1)],1)],1)],1)]},proxy:!0}])},[a("div",{staticClass:"l-rblock"},[a("iframe",{ref:"iframe",staticClass:"l-iframe",attrs:{frameborder:"0"}})])])],1)},l=[],s=(a("ac1f"),a("5319"),window.$api.wordPrint.template),c=window.$api.system.annexesFile,d={data:function(){var e=this;return{formData:{f_Name:"",f_Code:"",f_Category:"",f_EnabledMark:1,f_FileId:""},rules:{f_Name:[{required:!0,message:this.$t("请输入")}],f_Code:[{required:!0,message:this.$t("请输入")},{validator:this.lr_existDbFiled,keyValue:function(){return e.formData.f_Id},tableName:"lr_print_word",keyName:"f_Id"}],f_Category:[{required:!0,message:this.$t("请选择")}],f_FileId:[{required:!0,message:this.$t("请上传")}]},des:""}},computed:{},methods:{handleFileLoad:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=e.list,!(r&&r.length>0)){a.next=6;break}return a.next=4,t.$awaitWraper(c.getHtml(r[0].id));case 4:n=a.sent,t.write(n);case 6:case"end":return a.stop()}}),a)})))()},handleFileSuccess:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$awaitWraper(c.getHtml(e.fileId||e.file.id));case 2:r=a.sent,t.write(r);case 4:case"end":return a.stop()}}),a)})))()},handleFileDelete:function(){this.write("")},write:function(e){e=e.replace("</style>","td{word-break: break-all;}</style>");var t=this.$refs.iframe,a=t.contentWindow.document?t.contentWindow.document:t.contentDocument;a.open(),a.write(e),a.close()},resetForm:function(){this.$formClear(this.$refs.form),this.formData.f_Id=""},validateForm:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$formValidateWraper(e.$refs.form);case 2:if(t.sent){t.next=4;break}return t.abrupt("return",!1);case 4:return t.abrupt("return",!0);case 5:case"end":return t.stop()}}),t)})))()},setForm:function(e){this.formData=e},getForm:function(){return this.$deepClone(this.formData)},loadFormData:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.keyValue,a.next=3,t.$awaitWraper(s.get(r));case 3:if(n=a.sent,!n){a.next=9;break}return t.setForm(n),a.abrupt("return",!0);case 9:return a.abrupt("return",!1);case 10:case"end":return a.stop()}}),a)})))()},saveForm:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=e.keyValue,n=e.isEdit,i=t.getForm(),!n){a.next=8;break}return a.next=5,t.$awaitWraper(s.update(r,i));case 5:return a.abrupt("return",a.sent);case 8:return a.next=10,t.$awaitWraper(s.add(i));case 10:return a.abrupt("return",a.sent);case 11:case"end":return a.stop()}}),a)})))()}}},u=d,f=a("2877"),m=Object(f["a"])(u,o,l,!1,null,null,null),p=m.exports,h=window.$api.wordPrint.template,b={components:{MyForm:p},data:function(){return{searchCategoryWord:"",categoryVisible:!1,categoryId:"",keyWord:"",tableData:[],tableLoading:!1,tableTotal:0,tablePageSize:50,tableCurrentPage:1,columns:[{label:"编码",prop:"f_Code",width:"150"},{label:"名称",prop:"f_Name",minWidth:"150"},{label:"分类",prop:"f_Category",width:"120",dataType:"dataItem",dataCode:"printSort",align:"center"},{label:"状态",prop:"f_EnabledMark",width:"64",align:"center"},{label:"最后修改人",prop:"f_ModifyUserName",width:"100",align:"center"},{label:"最后修改时间",prop:"f_ModifyDateTime",width:"160",dataType:"datetime"}],tableBtns:[{prop:"Edit",label:"编辑",width:40},{prop:"Delete",label:"删除",width:40}],formEdit:!1,formEditRow:null,formVisible:!1,formTitle:""}},mounted:function(){this.lr_loadDataItem("printSort",!1),this.loadTablePageData()},computed:{printSortList:function(){return this.lr_dataItem["printSort"]||[]},treeData:function(){var e=this;return this.lr_dataItemTree(this.printSortList.filter((function(t){return t.f_ItemName.indexOf(e.searchCategoryWord)>-1})))}},methods:{hanleSearch:function(){this.loadTablePageData()},loadTablePageData:function(e){var t=this;e||(this.tableCurrentPage=1),this.tableLoading=!0;var a={rows:this.tablePageSize,page:this.tableCurrentPage,sidx:"f_ModifyDateTime DESC",f_Type:this.categoryId,keyword:this.keyWord};h.getPage(a).then((function(e){var a=t.$deepClone(e.data.data);t.tableData=a.rows,t.tableTotal=a.records,t.tableLoading=!1})).catch((function(){t.tableData=[],t.tableLoading=!1}))},turnTablePage:function(e){var t=e.rows;this.tablePageSize=t,this.loadTablePageData(!0)},handleAdd:function(){this.formEdit=!1,this.showForm("新增模板")},handleEdit:function(e,t){this.formEdit=!0,this.formEditRow=t,this.showForm("编辑模板【".concat(this.formEditRow.f_Name,"】"))},handleDelete:function(e,t){var a=this;this.$confirm(this.$t("此操作将永久删除该数据, 是否继续?"),this.$t("提示"),{confirmButtonText:this.$t("确定"),cancelButtonText:this.$t("取消"),type:"warning"}).then((function(){h.remove(t.f_Id).then((function(){a.$message({type:"success",message:a.$t("删除成功!")}),a.loadTablePageData()})).catch((function(){}))}))},handleSettingClick:function(){this.categoryVisible=!0},handleNodeClick:function(e){this.categoryId=e.value,this.loadTablePageData()},showForm:function(e){this.formTitle=e,this.formVisible=!0},handleSave:function(e,t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e("保存数据中..."),r.next=3,a.$refs.form.validateForm();case 3:if(!r.sent){r.next=8;break}return r.next=6,a.$refs.form.saveForm({keyValue:a.formEdit?a.formEditRow.f_Id:"",isEdit:a.formEdit});case 6:n=r.sent,n&&(i=a.formEdit?"更新成功!":"新增成功!",a.$message({type:"success",message:a.$t(i)}),a.loadTablePageData(),a.formVisible=!1);case 8:t();case 9:case"end":return r.stop()}}),r)})))()},handleClosed:function(){this.$refs.form.resetForm()},handleOpened:function(e,t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!a.formEdit){r.next=5;break}return e("加载数据中..."),r.next=4,a.$refs.form.loadFormData({keyValue:a.formEditRow.f_Id});case 4:t();case 5:case"end":return r.stop()}}),r)})))()},handleEnableChange:function(e){var t=this;h.update(e.f_Id,e).then((function(){t.$message({type:"success",message:t.$t("更新成功!")})}))}}},g=b,w=Object(f["a"])(g,r,n,!1,null,null,null);t["default"]=w.exports}}]);