(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["productlog","productlog-form"],{"1b20":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("l-layout",{directives:[{name:"show",rawName:"v-show",value:!e.lr_loadPage,expression:"!lr_loadPage"}],staticClass:"l-tab-page"},[a("l-panel",{scopedSlots:e._u([{key:"toolLeft",fn:function(){return[a("l-query2",{attrs:{items:e.queryItems,formData:e.queryData,loading:e.tableLoading},on:{search:e.handleSearch},scopedSlots:e._u([{key:"f_Theme",fn:function(){return[a("el-input",{attrs:{placeholder:e.$t("请输入")},model:{value:e.queryData.f_Theme,callback:function(t){e.$set(e.queryData,"f_Theme",t)},expression:"queryData.f_Theme"}})]},proxy:!0},{key:"f_Type",fn:function(){return[a("l-select",{attrs:{options:e.f_TypeOptions},model:{value:e.queryData.f_Type,callback:function(t){e.$set(e.queryData,"f_Type",t)},expression:"queryData.f_Type"}})]},proxy:!0},{key:"f_DateQRange",fn:function(){return[a("l-date",{attrs:{format:"yyyy-MM-dd",dateType:"daterange",placeholder:e.$t("请选择")},model:{value:e.queryData.f_DateQRange,callback:function(t){e.$set(e.queryData,"f_DateQRange",t)},expression:"queryData.f_DateQRange"}})]},proxy:!0}])})]},proxy:!0},{key:"toolRight",fn:function(){return[a("l-tool-btns",{attrs:{hasTableSetting:!0},on:{setting:e.lr_handleSettingTable,click:function(t){return e.handleAdd()}}},[a("l-excel-btns")],1)]},proxy:!0}])},[a("l-table",{ref:"mainTable",attrs:{loading:e.tableLoading,columns:e.lr_getPageColumns(e.columns),dataSource:e.tableData,isPage:!0,pageTotal:e.tableTotal,tablePage:e.tableCurrentPage},on:{"update:tablePage":function(t){e.tableCurrentPage=t},"update:table-page":function(t){e.tableCurrentPage=t},loadPageData:e.turnTablePage},scopedSlots:e._u([e._l(e.lr_tableColumnsByToLabel(e.lr_getPageColumns(e.columns)),(function(e,t){return{key:e.prop,fn:function(r){return[a("l-value-to-label",{key:t,attrs:{value:r.row[e.prop],type:e.dataType,code:e.dataCode,valueKey:e.valueKey,labelKey:e.labelKey,options:e.options,format:e.format,setting:e.setting}})]}}}))],null,!0)},[a("l-table-btns",{attrs:{btns:e.tableBtns},on:{click:e.lr_handleTableBtnClick}})],1)],1),a("l-dialog",{attrs:{title:e.$t(e.formTitle),visible:e.formVisible,height:550,width:800},on:{"update:visible":function(t){e.formVisible=t},ok:e.handleSave,close:e.handleCloseForm,opened:e.handleOpenedForm}},[a("my-form",{ref:"form",attrs:{isReadOnly:e.formDetails}})],1)],1)},o=[],l=(a("a434"),a("96cf"),a("1da1")),n=a("78d8"),s=window.$api.erpcase.productlog,i={components:{MyForm:n["default"]},data:function(){return{lr_isPage:!0,moduleCode:"ERP_ProductLogs",queryData:{f_Theme:"",f_Type:"",f_DateQRange:""},queryItems:[{label:"生产主题",prop:"f_Theme"},{label:"生产类型",prop:"f_Type"},{label:"单据日期",prop:"f_DateQRange"}],tableLoading:!1,tableData:[],tableTotal:0,tableCurrentPage:1,tablePageSize:50,columns:[{label:"生产编号",prop:"f_Number",minWidth:120,align:"left",dataType:"encode",isNotAutoWrap:!0},{label:"生产主题",prop:"f_Theme",minWidth:150,align:"left",dataType:"input",isNotAutoWrap:!0},{label:"生产类型",prop:"f_Type",minWidth:120,align:"left",dataType:"mydata",options:[{value:"内部生产",label:"内部生产"},{value:"委外生产",label:"委外生产"}]},{label:"单据日期",prop:"f_Date",minWidth:100,align:"left",dataType:"datetime",format:"yyyy-MM-dd"},{label:"负责人",prop:"f_Person",minWidth:100,align:"left",dataType:"user"},{label:"生产部门",prop:"f_Dep",minWidth:100,align:"left",dataType:"department"},{label:"生产状态",prop:"f_State",minWidth:80,align:"left",dataType:"mydata",options:[{value:0,label:"已完成"},{value:1,label:"未完成"}]},{label:"销售订单",prop:"f_SaleId",minWidth:120,align:"left",dataType:"dataSource",dataCode:"ERP_SaleList",valueKey:"f_id",labelKey:"f_theme",isNotAutoWrap:!0},{label:"备注",prop:"f_Description",minWidth:180,align:"left",dataType:"textarea"},{label:"创建时间",prop:"f_CreateDate",minWidth:100,align:"left",dataType:"datetime",format:"yyyy-MM-dd HH:mm:ss",isNotAutoWrap:!0},{label:"创建人",prop:"f_CreateUserId",minWidth:90,dataType:"user"}],tableBtns:[{prop:"Edit",label:"编辑",width:40},{prop:"Delete",label:"删除",width:40},{prop:"Details",label:"详情",width:40}],formVisible:!1,formTitle:"",formEditRow:null,formEdit:!1,formDetails:!1}},computed:{f_TypeOptions:function(){return[{value:"内部生产",label:"内部生产"},{value:"委外生产",label:"委外生产"}]}},mounted:function(){this.init()},methods:{init:function(){this.loadTableData()},handleSearch:function(){this.loadTableData()},turnTablePage:function(e){var t=e.rows;this.tablePageSize=t,this.loadTableData(!0)},loadTableData:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e||(t.tableCurrentPage=1),t.tableLoading=!0,r=t.$deepClone(t.queryData),r.rows=t.tablePageSize,r.page=t.tableCurrentPage,r.sidx="F_CreateDate DESC",a.next=8,t.$awaitWraper(s.getPage(r));case 8:o=a.sent,null!=o?(t.tableData=o.rows,t.tableTotal=o.records):t.tableData=[],t.tableLoading=!1;case 11:case"end":return a.stop()}}),a)})))()},handleDelete:function(e,t){var a=this;this.$confirm(this.$t("此操作将永久删除该数据, 是否继续?"),this.$t("提示"),{confirmButtonText:this.$t("确定"),cancelButtonText:this.$t("取消"),type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a.tableData.splice(e,1),a.tableTotal--,r.next=4,s.remove(t.f_Id);case 4:a.$message({type:"success",message:a.$t("删除成功!")});case 5:case"end":return r.stop()}}),r)})))).catch((function(){a.$message({type:"info",message:a.$t("已取消删除!")})}))},handleDetails:function(e,t){this.formEdit=!0,this.formDetails=!0,this.formEditRow=t,this.handleShowForm("详情")},handleEdit:function(e,t){this.formEdit=!0,this.formDetails=!1,this.formEditRow=t,this.handleShowForm("编辑")},handleAdd:function(){this.formEdit=!1,this.formDetails=!1,this.handleShowForm("新增")},handleSave:function(e,t){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){var o,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e("保存数据中..."),r.next=3,a.$refs.form.validateForm();case 3:if(!r.sent){r.next=8;break}return r.next=6,a.$refs.form.saveForm({keyValue:a.formEdit?a.formEditRow.f_Id:"",isEdit:a.formEdit});case 6:o=r.sent,o&&(l=a.formEdit?"更新成功!":"新增成功!",a.$message({type:"success",message:a.$t(l)}),a.loadTableData(),a.formVisible=!1);case 8:t();case 9:case"end":return r.stop()}}),r)})))()},handleShowForm:function(e){this.formTitle=e,this.formVisible=!0},handleOpenedForm:function(e,t){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!a.formEdit){r.next=5;break}return e("加载数据中..."),r.next=4,a.$refs.form.loadFormData({keyValue:a.formEditRow.f_Id});case 4:t();case 5:case"end":return r.stop()}}),r)})))()},handleCloseForm:function(){this.$refs.form.resetForm()}}},p=i,c=a("2877"),_=Object(c["a"])(p,r,o,!1,null,null,null);t["default"]=_.exports},"78d8":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"l-rblock l-form-viewer",staticStyle:{padding:"8px"}},[a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,size:"mini",labelPosition:"right",labelWidth:"95px"}},[a("div",{staticClass:"l-auto-window only-tabs"},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{staticClass:"l-tabs-container",attrs:{label:e.$t("主表信息"),name:"tab0"}},[a("el-row",{attrs:{gutter:0}},[a("div",{staticClass:"l-rblock"},[e.lr_formLookAuth("case_erp_productlog_f_Number")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("生产编号"),prop:"case_erp_productlog_f_Number"}},[a("l-code",{attrs:{size:"mini",code:"erp_productlog_number"},model:{value:e.formData.case_erp_productlog_f_Number,callback:function(t){e.$set(e.formData,"case_erp_productlog_f_Number",t)},expression:"formData.case_erp_productlog_f_Number"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_productlog_f_Theme")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("生产主题"),prop:"case_erp_productlog_f_Theme"}},[a("el-input",{attrs:{disabled:!e.lr_formEditAuth("case_erp_productlog_f_Theme",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_productlog_f_Theme,callback:function(t){e.$set(e.formData,"case_erp_productlog_f_Theme",t)},expression:"formData.case_erp_productlog_f_Theme"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_productlog_f_Type")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("生产类型"),prop:"case_erp_productlog_f_Type"}},[a("l-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_productlog_f_Type",e.isReadOnly),options:e.case_erp_productlog_f_TypeOptions},model:{value:e.formData.case_erp_productlog_f_Type,callback:function(t){e.$set(e.formData,"case_erp_productlog_f_Type",t)},expression:"formData.case_erp_productlog_f_Type"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_productlog_f_Date")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("单据日期"),prop:"case_erp_productlog_f_Date"}},[a("l-date",{attrs:{disabled:!e.lr_formEditAuth("case_erp_productlog_f_Date",e.isReadOnly),readonly:!1,format:"yyyy-MM-dd",dateType:"date",clearable:!0,placeholder:e.$t("请选择")},model:{value:e.formData.case_erp_productlog_f_Date,callback:function(t){e.$set(e.formData,"case_erp_productlog_f_Date",t)},expression:"formData.case_erp_productlog_f_Date"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_productlog_f_Person")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("负责人"),prop:"case_erp_productlog_f_Person"}},[a("l-user-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_productlog_f_Person",e.isReadOnly)},model:{value:e.formData.case_erp_productlog_f_Person,callback:function(t){e.$set(e.formData,"case_erp_productlog_f_Person",t)},expression:"formData.case_erp_productlog_f_Person"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_productlog_f_Dep")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("生产部门"),prop:"case_erp_productlog_f_Dep"}},[a("l-department-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_productlog_f_Dep",e.isReadOnly)},model:{value:e.formData.case_erp_productlog_f_Dep,callback:function(t){e.$set(e.formData,"case_erp_productlog_f_Dep",t)},expression:"formData.case_erp_productlog_f_Dep"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_productlog_f_State")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("生产状态"),prop:"case_erp_productlog_f_State"}},[a("l-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_productlog_f_State",e.isReadOnly),options:e.case_erp_productlog_f_StateOptions},model:{value:e.formData.case_erp_productlog_f_State,callback:function(t){e.$set(e.formData,"case_erp_productlog_f_State",t)},expression:"formData.case_erp_productlog_f_State"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_productlog_f_SaleId")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("销售订单"),prop:"case_erp_productlog_f_SaleId"}},[a("l-layer-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_productlog_f_SaleId",e.isReadOnly),isPage:!0,height:504,width:960,columns:[{label:"销售单号",prop:"f_number",valueKey:"",minWidth:"120",align:"left",hidden:!1},{label:"订单主题",prop:"f_theme",valueKey:"",minWidth:"150",align:"left",hidden:!1},{label:"采购日期",prop:"f_saledate",valueKey:"",minWidth:"150",align:"left",hidden:!1},{label:"客户名称",prop:"f_clientname",valueKey:"",minWidth:"120",align:"left",hidden:!1,dataType:"dataSource",dataCode:"ERP_Customers",valueKey:"f_id",labelKey:"f_name",isNotAutoWrap:!0},{label:"联系人",prop:"f_clientperson",valueKey:"",minWidth:"120",align:"left",hidden:!1},{label:"联系方式",prop:"f_clientway",valueKey:"",minWidth:"120",align:"left",hidden:!1}],options:e.case_erp_productlog_f_SaleIdOptions},model:{value:e.formData.case_erp_productlog_f_SaleId,callback:function(t){e.$set(e.formData,"case_erp_productlog_f_SaleId",t)},expression:"formData.case_erp_productlog_f_SaleId"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_productlog_f_Description")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("备注"),prop:"case_erp_productlog_f_Description"}},[a("el-input",{attrs:{type:"textarea",disabled:!e.lr_formEditAuth("case_erp_productlog_f_Description",e.isReadOnly),rows:10,placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_productlog_f_Description,callback:function(t){e.$set(e.formData,"case_erp_productlog_f_Description",t)},expression:"formData.case_erp_productlog_f_Description"}})],1)],1):e._e()],1)])],1)],1)],1)])],1)},o=[],l=(a("96cf"),a("1da1")),n=window.$api.erpcase.productlog,s={props:{isReadOnly:{type:Boolean,default:!1}},data:function(){return{moduleCode:"ERP_ProductLogs",activeName:"tab0",formData:{case_erp_productlog_f_Number:"",case_erp_productlog_f_Theme:"",case_erp_productlog_f_Type:"",case_erp_productlog_f_Date:"",case_erp_productlog_f_Person:"",case_erp_productlog_f_Dep:"",case_erp_productlog_f_State:"",case_erp_productlog_f_SaleId:"",case_erp_productlog_f_Description:""},rules:{case_erp_productlog_f_Theme:[{required:!0,message:"请输入生产主题"}],case_erp_productlog_f_Type:[{required:!0,message:"请选择生产类型"}],case_erp_productlog_f_Date:[{required:!0,message:"请选择单据日期"}],case_erp_productlog_f_Person:[{required:!0,message:"请选择负责人"}],case_erp_productlog_f_State:[{required:!0,message:"请选择生产状态"}],case_erp_productlog_f_SaleId:[{required:!0,message:"请选择销售订单"}]}}},computed:{case_erp_productlog_f_TypeOptions:function(){return[{value:"内部生产",label:"内部生产"},{value:"委外生产",label:"委外生产"}]},case_erp_productlog_f_StateOptions:function(){return[{value:0,label:"已完成"},{value:1,label:"未完成"}]},case_erp_productlog_f_SaleIdOptions:function(){var e=this.lr_DataSource("ERP_SaleList");return this.lr_DataSourceOptions(e,"f_id","f_theme")}},methods:{resetForm:function(){this.$formClear(this.$refs.form),this.activeName="tab0"},validateForm:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$formValidateWraper(e.$refs.form);case 2:if(t.sent){t.next=4;break}return t.abrupt("return",!1);case 4:return t.abrupt("return",!0);case 5:case"end":return t.stop()}}),t)})))()},setForm:function(e){this.$setFormData(this.formData,e,"case_erp_productlog")},getForm:function(){return this.$getFormData(this.formData,"case_erp_productlog")},loadFormData:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.keyValue,a.next=3,t.$awaitWraper(n.get(r));case 3:if(o=a.sent,!o){a.next=9;break}return t.setForm(o),a.abrupt("return",!0);case 9:return a.abrupt("return",!1);case 10:case"end":return a.stop()}}),a)})))()},saveForm:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r,o,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=e.keyValue,o=e.isEdit,l=t.getForm(),!o){a.next=8;break}return a.next=5,t.$awaitWraper(n.update(r,l));case 5:return a.abrupt("return",a.sent);case 8:return l.f_Id=r,a.next=11,t.$awaitWraper(n.add(l));case 11:return a.abrupt("return",a.sent);case 12:case"end":return a.stop()}}),a)})))()}}},i=s,p=a("2877"),c=Object(p["a"])(i,r,o,!1,null,null,null);t["default"]=c.exports}}]);