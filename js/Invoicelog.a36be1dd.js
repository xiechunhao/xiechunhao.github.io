(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Invoicelog","Invoicelog-form"],{"05bc":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("l-layout",{directives:[{name:"show",rawName:"v-show",value:!e.lr_loadPage,expression:"!lr_loadPage"}],staticClass:"l-tab-page"},[t("l-panel",{scopedSlots:e._u([{key:"toolLeft",fn:function(){return[t("l-query2",{attrs:{items:e.queryItems,formData:e.queryData,loading:e.tableLoading},on:{search:e.handleSearch},scopedSlots:e._u([{key:"f_Theme",fn:function(){return[t("el-input",{attrs:{placeholder:e.$t("请输入")},model:{value:e.queryData.f_Theme,callback:function(a){e.$set(e.queryData,"f_Theme",a)},expression:"queryData.f_Theme"}})]},proxy:!0},{key:"f_DateQRange",fn:function(){return[t("l-date",{attrs:{format:"yyyy-MM-dd",dateType:"daterange",placeholder:e.$t("请选择")},model:{value:e.queryData.f_DateQRange,callback:function(a){e.$set(e.queryData,"f_DateQRange",a)},expression:"queryData.f_DateQRange"}})]},proxy:!0},{key:"f_InvoiceName",fn:function(){return[t("l-select",{attrs:{options:e.f_InvoiceNameOptions},model:{value:e.queryData.f_InvoiceName,callback:function(a){e.$set(e.queryData,"f_InvoiceName",a)},expression:"queryData.f_InvoiceName"}})]},proxy:!0}])})]},proxy:!0},{key:"toolRight",fn:function(){return[t("l-tool-btns",{attrs:{hasTableSetting:!0},on:{setting:e.lr_handleSettingTable,click:function(a){return e.handleAdd()}}},[t("l-excel-btns")],1)]},proxy:!0}])},[t("l-table",{ref:"mainTable",attrs:{loading:e.tableLoading,columns:e.lr_getPageColumns(e.columns),dataSource:e.tableData,isPage:!0,pageTotal:e.tableTotal,tablePage:e.tableCurrentPage},on:{"update:tablePage":function(a){e.tableCurrentPage=a},"update:table-page":function(a){e.tableCurrentPage=a},loadPageData:e.turnTablePage},scopedSlots:e._u([e._l(e.lr_tableColumnsByToLabel(e.lr_getPageColumns(e.columns)),(function(e,a){return{key:e.prop,fn:function(r){return[t("l-value-to-label",{key:a,attrs:{value:r.row[e.prop],type:e.dataType,code:e.dataCode,valueKey:e.valueKey,labelKey:e.labelKey,options:e.options,format:e.format,setting:e.setting}})]}}}))],null,!0)},[t("l-table-btns",{attrs:{btns:e.tableBtns},on:{click:e.lr_handleTableBtnClick}})],1)],1),t("l-dialog",{attrs:{title:e.$t(e.formTitle),visible:e.formVisible,height:550,width:800},on:{"update:visible":function(a){e.formVisible=a},ok:e.handleSave,close:e.handleCloseForm,opened:e.handleOpenedForm}},[t("my-form",{ref:"form",attrs:{isReadOnly:e.formDetails}})],1)],1)},o=[],i=(t("a434"),t("96cf"),t("1da1")),l=t("efe9"),n=window.$api.erpcase.invoicelog,s={components:{MyForm:l["default"]},data:function(){return{lr_isPage:!0,moduleCode:"ERP_InvoiceLogs",queryData:{f_Theme:"",f_DateQRange:"",f_InvoiceName:""},queryItems:[{label:"开票主题",prop:"f_Theme"},{label:"开票日期",prop:"f_DateQRange"},{label:"发票类型",prop:"f_InvoiceName"}],tableLoading:!1,tableData:[],tableTotal:0,tableCurrentPage:1,tablePageSize:50,columns:[{label:"开票编号",prop:"f_Number",minWidth:120,align:"left",dataType:"encode",isNotAutoWrap:!0},{label:"开票主题",prop:"f_Theme",minWidth:150,align:"left",dataType:"input",isNotAutoWrap:!0},{label:"开票日期",prop:"f_Date",minWidth:100,align:"left",dataType:"datetime",format:"yyyy-MM-dd"},{label:"发票类型",prop:"f_InvoiceName",minWidth:100,align:"left",dataType:"mydata",options:[{value:"增值税专用发票",label:"增值税专用发票"},{value:"普通发票",label:"普通发票"}]},{label:"发票号码",prop:"f_TicketNum",minWidth:150,align:"left",dataType:"input",isNotAutoWrap:!0},{label:"发票金额",prop:"f_TicketAmount",minWidth:90,align:"left",dataType:"input"},{label:"收票方",prop:"f_TicketName",minWidth:120,align:"left",dataType:"input",isNotAutoWrap:!0},{label:"销售订单",prop:"f_SaleId",minWidth:150,align:"left",dataType:"dataSource",dataCode:"ERP_SaleList",valueKey:"f_id",labelKey:"f_theme",isNotAutoWrap:!0},{label:"备注",prop:"f_Description",minWidth:180,align:"left",dataType:"textarea"},{label:"创建时间",prop:"f_CreateDate",minWidth:100,align:"left",dataType:"datetime",format:"yyyy-MM-dd HH:mm:ss",isNotAutoWrap:!0},{label:"创建人",prop:"f_CreateUserId",minWidth:90,dataType:"user"}],tableBtns:[{prop:"Edit",label:"编辑",width:40},{prop:"Delete",label:"删除",width:40},{prop:"Details",label:"详情",width:40}],formVisible:!1,formTitle:"",formEditRow:null,formEdit:!1,formDetails:!1}},computed:{f_InvoiceNameOptions:function(){return[{value:"增值税专用发票",label:"增值税专用发票"},{value:"普通发票",label:"普通发票"}]}},mounted:function(){this.init()},methods:{init:function(){this.loadTableData()},handleSearch:function(){this.loadTableData()},turnTablePage:function(e){var a=e.rows;this.tablePageSize=a,this.loadTableData(!0)},loadTableData:function(e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e||(a.tableCurrentPage=1),a.tableLoading=!0,r=a.$deepClone(a.queryData),r.rows=a.tablePageSize,r.page=a.tableCurrentPage,r.sidx="F_CreateDate DESC",t.next=8,a.$awaitWraper(n.getPage(r));case 8:o=t.sent,null!=o?(a.tableData=o.rows,a.tableTotal=o.records):a.tableData=[],a.tableLoading=!1;case 11:case"end":return t.stop()}}),t)})))()},handleDelete:function(e,a){var t=this;this.$confirm(this.$t("此操作将永久删除该数据, 是否继续?"),this.$t("提示"),{confirmButtonText:this.$t("确定"),cancelButtonText:this.$t("取消"),type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.tableData.splice(e,1),t.tableTotal--,r.next=4,n.remove(a.f_Id);case 4:t.$message({type:"success",message:t.$t("删除成功!")});case 5:case"end":return r.stop()}}),r)})))).catch((function(){t.$message({type:"info",message:t.$t("已取消删除!")})}))},handleDetails:function(e,a){this.formEdit=!0,this.formDetails=!0,this.formEditRow=a,this.handleShowForm("详情")},handleEdit:function(e,a){this.formEdit=!0,this.formDetails=!1,this.formEditRow=a,this.handleShowForm("编辑")},handleAdd:function(){this.formEdit=!1,this.formDetails=!1,this.handleShowForm("新增")},handleSave:function(e,a){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e("保存数据中..."),r.next=3,t.$refs.form.validateForm();case 3:if(!r.sent){r.next=8;break}return r.next=6,t.$refs.form.saveForm({keyValue:t.formEdit?t.formEditRow.f_Id:"",isEdit:t.formEdit});case 6:o=r.sent,o&&(i=t.formEdit?"更新成功!":"新增成功!",t.$message({type:"success",message:t.$t(i)}),t.loadTableData(),t.formVisible=!1);case 8:a();case 9:case"end":return r.stop()}}),r)})))()},handleShowForm:function(e){this.formTitle=e,this.formVisible=!0},handleOpenedForm:function(e,a){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!t.formEdit){r.next=5;break}return e("加载数据中..."),r.next=4,t.$refs.form.loadFormData({keyValue:t.formEditRow.f_Id});case 4:a();case 5:case"end":return r.stop()}}),r)})))()},handleCloseForm:function(){this.$refs.form.resetForm()}}},c=s,_=t("2877"),f=Object(_["a"])(c,r,o,!1,null,null,null);a["default"]=f.exports},efe9:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"l-rblock l-form-viewer",staticStyle:{padding:"8px"}},[t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,size:"mini",labelPosition:"right",labelWidth:"95px"}},[t("div",{staticClass:"l-auto-window only-tabs"},[t("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[t("el-tab-pane",{staticClass:"l-tabs-container",attrs:{label:e.$t("主表信息"),name:"tab0"}},[t("el-row",{attrs:{gutter:0}},[t("div",{staticClass:"l-rblock"},[e.lr_formLookAuth("case_erp_invoicelog_f_Number")?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:e.$t("开票编号"),prop:"case_erp_invoicelog_f_Number"}},[t("l-code",{attrs:{size:"mini",code:"erp_Invoicelog_number"},model:{value:e.formData.case_erp_invoicelog_f_Number,callback:function(a){e.$set(e.formData,"case_erp_invoicelog_f_Number",a)},expression:"formData.case_erp_invoicelog_f_Number"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_invoicelog_f_Theme")?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:e.$t("开票主题"),prop:"case_erp_invoicelog_f_Theme"}},[t("el-input",{attrs:{disabled:!e.lr_formEditAuth("case_erp_invoicelog_f_Theme",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_invoicelog_f_Theme,callback:function(a){e.$set(e.formData,"case_erp_invoicelog_f_Theme",a)},expression:"formData.case_erp_invoicelog_f_Theme"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_invoicelog_f_Date")?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:e.$t("开票日期"),prop:"case_erp_invoicelog_f_Date"}},[t("l-date",{attrs:{disabled:!e.lr_formEditAuth("case_erp_invoicelog_f_Date",e.isReadOnly),readonly:!1,format:"yyyy-MM-dd",dateType:"date",clearable:!0,placeholder:e.$t("请选择")},model:{value:e.formData.case_erp_invoicelog_f_Date,callback:function(a){e.$set(e.formData,"case_erp_invoicelog_f_Date",a)},expression:"formData.case_erp_invoicelog_f_Date"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_invoicelog_f_InvoiceName")?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:e.$t("发票类型"),prop:"case_erp_invoicelog_f_InvoiceName"}},[t("l-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_invoicelog_f_InvoiceName",e.isReadOnly),options:e.case_erp_invoicelog_f_InvoiceNameOptions},model:{value:e.formData.case_erp_invoicelog_f_InvoiceName,callback:function(a){e.$set(e.formData,"case_erp_invoicelog_f_InvoiceName",a)},expression:"formData.case_erp_invoicelog_f_InvoiceName"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_invoicelog_f_TicketNum")?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:e.$t("发票号码"),prop:"case_erp_invoicelog_f_TicketNum"}},[t("el-input",{attrs:{disabled:!e.lr_formEditAuth("case_erp_invoicelog_f_TicketNum",e.isReadOnly),readonly:!1,placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_invoicelog_f_TicketNum,callback:function(a){e.$set(e.formData,"case_erp_invoicelog_f_TicketNum",a)},expression:"formData.case_erp_invoicelog_f_TicketNum"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_invoicelog_f_TicketAmount")?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:e.$t("发票金额"),prop:"case_erp_invoicelog_f_TicketAmount"}},[t("el-input",{attrs:{disabled:!e.lr_formEditAuth("case_erp_invoicelog_f_TicketAmount",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_invoicelog_f_TicketAmount,callback:function(a){e.$set(e.formData,"case_erp_invoicelog_f_TicketAmount",a)},expression:"formData.case_erp_invoicelog_f_TicketAmount"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_invoicelog_f_TicketName")?t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:e.$t("收票方"),prop:"case_erp_invoicelog_f_TicketName"}},[t("el-input",{attrs:{disabled:!e.lr_formEditAuth("case_erp_invoicelog_f_TicketName",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_invoicelog_f_TicketName,callback:function(a){e.$set(e.formData,"case_erp_invoicelog_f_TicketName",a)},expression:"formData.case_erp_invoicelog_f_TicketName"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_invoicelog_f_SaleId")?t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:e.$t("销售订单"),prop:"case_erp_invoicelog_f_SaleId"}},[t("l-layer-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_invoicelog_f_SaleId",e.isReadOnly),isPage:!0,height:504,width:960,columns:[{label:"销售单号",prop:"f_number",valueKey:"",minWidth:"120",align:"left",hidden:!1},{label:"订单主题",prop:"f_theme",valueKey:"",minWidth:"150",align:"left",hidden:!1},{label:"采购日期",prop:"f_saledate",valueKey:"",minWidth:"150",align:"left",hidden:!1},{label:"客户名称",prop:"f_clientname",valueKey:"",minWidth:"120",align:"left",hidden:!1,dataType:"dataSource",dataCode:"ERP_Customers",valueKey:"f_id",labelKey:"f_name",isNotAutoWrap:!0},{label:"联系人",prop:"f_clientperson",valueKey:"",minWidth:"120",align:"left",hidden:!1},{label:"联系方式",prop:"f_clientway",valueKey:"",minWidth:"120",align:"left",hidden:!1}],options:e.case_erp_invoicelog_f_SaleIdOptions},model:{value:e.formData.case_erp_invoicelog_f_SaleId,callback:function(a){e.$set(e.formData,"case_erp_invoicelog_f_SaleId",a)},expression:"formData.case_erp_invoicelog_f_SaleId"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_invoicelog_f_Description")?t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:e.$t("备注"),prop:"case_erp_invoicelog_f_Description"}},[t("el-input",{attrs:{type:"textarea",disabled:!e.lr_formEditAuth("case_erp_invoicelog_f_Description",e.isReadOnly),rows:10,placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_invoicelog_f_Description,callback:function(a){e.$set(e.formData,"case_erp_invoicelog_f_Description",a)},expression:"formData.case_erp_invoicelog_f_Description"}})],1)],1):e._e()],1)])],1)],1)],1)])],1)},o=[],i=(t("96cf"),t("1da1")),l=window.$api.erpcase.invoicelog,n={props:{isReadOnly:{type:Boolean,default:!1}},data:function(){return{moduleCode:"ERP_InvoiceLogs",activeName:"tab0",formData:{case_erp_invoicelog_f_Number:"",case_erp_invoicelog_f_Theme:"",case_erp_invoicelog_f_Date:"",case_erp_invoicelog_f_InvoiceName:"",case_erp_invoicelog_f_TicketNum:"",case_erp_invoicelog_f_TicketAmount:"",case_erp_invoicelog_f_TicketName:"",case_erp_invoicelog_f_SaleId:"",case_erp_invoicelog_f_Description:""},rules:{case_erp_invoicelog_f_Theme:[{required:!0,message:"请输入开票主题"}],case_erp_invoicelog_f_Date:[{required:!0,message:"请选择开票日期"}],case_erp_invoicelog_f_InvoiceName:[{required:!0,message:"请选择发票类型"}],case_erp_invoicelog_f_TicketNum:[{required:!0,message:"请输入发票号码"},{pattern:/^[0-9a-zA-Z_]{1,}$/,message:"请输入正确发票号码"}],case_erp_invoicelog_f_TicketAmount:[{required:!0,message:"请输入发票金额"},{pattern:/^\d+$|^\d*\.\d+$/,message:"请输入数字"}],case_erp_invoicelog_f_TicketName:[{required:!0,message:"请输入收票方"}],case_erp_invoicelog_f_SaleId:[{required:!0,message:"请选择销售订单"}]}}},computed:{case_erp_invoicelog_f_InvoiceNameOptions:function(){return[{value:"增值税专用发票",label:"增值税专用发票"},{value:"普通发票",label:"普通发票"}]},case_erp_invoicelog_f_SaleIdOptions:function(){var e=this.lr_DataSource("ERP_SaleList");return this.lr_DataSourceOptions(e,"f_id","f_theme")}},methods:{resetForm:function(){this.$formClear(this.$refs.form),this.activeName="tab0"},validateForm:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$formValidateWraper(e.$refs.form);case 2:if(a.sent){a.next=4;break}return a.abrupt("return",!1);case 4:return a.abrupt("return",!0);case 5:case"end":return a.stop()}}),a)})))()},setForm:function(e){this.$setFormData(this.formData,e,"case_erp_invoicelog")},getForm:function(){return this.$getFormData(this.formData,"case_erp_invoicelog")},loadFormData:function(e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.keyValue,t.next=3,a.$awaitWraper(l.get(r));case 3:if(o=t.sent,!o){t.next=9;break}return a.setForm(o),t.abrupt("return",!0);case 9:return t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})))()},saveForm:function(e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.keyValue,o=e.isEdit,i=a.getForm(),!o){t.next=8;break}return t.next=5,a.$awaitWraper(l.update(r,i));case 5:return t.abrupt("return",t.sent);case 8:return i.f_Id=r,t.next=11,a.$awaitWraper(l.add(i));case 11:return t.abrupt("return",t.sent);case 12:case"end":return t.stop()}}),t)})))()}}},s=n,c=t("2877"),_=Object(c["a"])(s,r,o,!1,null,null,null);a["default"]=_.exports}}]);