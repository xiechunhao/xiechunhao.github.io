(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["receiptinfo","receiptinfo-form"],{"6aa5":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"l-rblock l-form-viewer",staticStyle:{padding:"8px"}},[a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,size:"mini",labelPosition:"left",labelWidth:"80px"}},[a("div",{staticClass:"l-auto-window only-tabs"},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{staticClass:"l-tabs-container",attrs:{label:e.$t("新增采购申请单"),name:"tab0"}},[a("el-row",{attrs:{gutter:5}},[a("div",{staticClass:"l-rblock"},[e.lr_formLookAuth("f_PurchaseNo")?a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("单据编码"),prop:"f_PurchaseNo"}},[a("el-input",{attrs:{placeholder:e.$t("请输入")},model:{value:e.formData.f_PurchaseNo,callback:function(t){e.$set(e.formData,"f_PurchaseNo",t)},expression:"formData.f_PurchaseNo"}})],1)],1):e._e(),e.lr_formLookAuth("f_Theme")?a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("主题"),prop:"f_Theme"}},[a("el-input",{attrs:{placeholder:e.$t("请输入")},model:{value:e.formData.f_Theme,callback:function(t){e.$set(e.formData,"f_Theme",t)},expression:"formData.f_Theme"}})],1)],1):e._e(),e.lr_formLookAuth("f_PaymentType")?a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("支付方式"),prop:"f_PaymentType"}},[a("l-select",{attrs:{options:e.f_PaymentTypeOptions},model:{value:e.formData.f_PaymentType,callback:function(t){e.$set(e.formData,"f_PaymentType",t)},expression:"formData.f_PaymentType"}})],1)],1):e._e(),e.lr_formLookAuth("f_ApplyDate")?a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("收款日期"),prop:"f_ApplyDate"}},[a("l-date",{attrs:{format:"yyyy-MM-dd HH:mm:ss",dateType:"datetime",clearable:!0,placeholder:e.$t("请选择")},model:{value:e.formData.f_ApplyDate,callback:function(t){e.$set(e.formData,"f_ApplyDate",t)},expression:"formData.f_ApplyDate"}})],1)],1):e._e(),e.lr_formLookAuth("f_Appler")?a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("收款人"),prop:"f_Appler"}},[a("l-user-select",{model:{value:e.formData.f_Appler,callback:function(t){e.$set(e.formData,"f_Appler",t)},expression:"formData.f_Appler"}})],1)],1):e._e(),e.lr_formLookAuth("f_Department")?a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("收款单位"),prop:"f_Department"}},[a("l-company-select",{model:{value:e.formData.f_Department,callback:function(t){e.$set(e.formData,"f_Department",t)},expression:"formData.f_Department"}})],1)],1):e._e(),e.lr_formLookAuth("f_Total")?a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("收款金额"),prop:"f_Total"}},[a("el-input",{attrs:{placeholder:e.$t("请输入")},model:{value:e.formData.f_Total,callback:function(t){e.$set(e.formData,"f_Total",t)},expression:"formData.f_Total"}})],1)],1):e._e(),e.lr_formLookAuth("f_Description")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("备注"),prop:"f_Description"}},[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:e.$t("请输入")},model:{value:e.formData.f_Description,callback:function(t){e.$set(e.formData,"f_Description",t)},expression:"formData.f_Description"}})],1)],1):e._e(),a("el-col",{attrs:{span:24}},[a("div",{staticClass:"l-title"},[e._v(e._s(e.$t("商品信息")))]),a("l-edit-table",{ref:"lr_erp_receiptinfodetail_table",attrs:{addBtnText:"新增",isAddBtn:!0,isRemoveBtn:!0,isShowNum:!0,dataSource:e.lr_erp_receiptinfodetail_data,columns:e.lr_erp_receiptinfodetail_columns},on:{addRow:e.handleLr_erp_receiptinfodetailAddRow,deleteRow:e.handleLr_erp_receiptinfodetailDeleteRow},scopedSlots:e._u([{key:"f_Code",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:e.$t("请输入")},model:{value:t.row.f_Code,callback:function(a){e.$set(t.row,"f_Code",a)},expression:"scope.row.f_Code"}})]}},{key:"f_Name",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:e.$t("请输入")},model:{value:t.row.f_Name,callback:function(a){e.$set(t.row,"f_Name",a)},expression:"scope.row.f_Name"}})]}},{key:"f_BarCode",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:e.$t("请输入")},model:{value:t.row.f_BarCode,callback:function(a){e.$set(t.row,"f_BarCode",a)},expression:"scope.row.f_BarCode"}})]}},{key:"f_Place",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:e.$t("请输入")},model:{value:t.row.f_Place,callback:function(a){e.$set(t.row,"f_Place",a)},expression:"scope.row.f_Place"}})]}},{key:"f_Specification",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:e.$t("请输入")},model:{value:t.row.f_Specification,callback:function(a){e.$set(t.row,"f_Specification",a)},expression:"scope.row.f_Specification"}})]}},{key:"f_Type",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:e.$t("请输入")},model:{value:t.row.f_Type,callback:function(a){e.$set(t.row,"f_Type",a)},expression:"scope.row.f_Type"}})]}},{key:"f_Number",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:e.$t("请输入")},model:{value:t.row.f_Number,callback:function(a){e.$set(t.row,"f_Number",a)},expression:"scope.row.f_Number"}})]}},{key:"f_Unit",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:e.$t("请输入")},model:{value:t.row.f_Unit,callback:function(a){e.$set(t.row,"f_Unit",a)},expression:"scope.row.f_Unit"}})]}},{key:"f_Count",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:e.$t("请输入")},model:{value:t.row.f_Count,callback:function(a){e.$set(t.row,"f_Count",a)},expression:"scope.row.f_Count"}})]}},{key:"f_Price",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:e.$t("请输入")},model:{value:t.row.f_Price,callback:function(a){e.$set(t.row,"f_Price",a)},expression:"scope.row.f_Price"}})]}},{key:"f_Amount",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:e.$t("请输入")},model:{value:t.row.f_Amount,callback:function(a){e.$set(t.row,"f_Amount",a)},expression:"scope.row.f_Amount"}})]}}])})],1)],1)])],1)],1)],1)])],1)},l=[],o=(a("a434"),a("d3b7"),{data:function(){return{activeName:"tab0",formData:{f_PurchaseNo:"",f_Theme:"",f_PaymentType:"",f_ApplyDate:"",f_Appler:"",f_Department:"",f_Total:"",f_Description:"",f_ModifyDate:""},rules:{f_PurchaseNo:[{required:!0,message:"请输入单据编码"}],f_Theme:[{required:!0,message:"请输入主题"}],f_PaymentType:[{required:!0,message:"请选择支付方式"}],f_ApplyDate:[{required:!0,message:"请选择收款日期"}],f_Appler:[{required:!0,message:"请选择收款人"}],f_Department:[{required:!0,message:"请选择收款单位"}],f_Total:[{required:!0,message:"请输入收款金额"},{pattern:/^\d+(\.\d+)?$/,message:"请输入数字"}]},lr_erp_receiptinfodetail_columns:[{id:"lr_erp_receiptinfodetail_F_Code",prop:"f_Code",label:"商品编号",width:void 0},{id:"lr_erp_receiptinfodetail_F_Name",prop:"f_Name",label:"商品名称",width:void 0},{id:"lr_erp_receiptinfodetail_F_BarCode",prop:"f_BarCode",label:"条码",width:void 0},{id:"lr_erp_receiptinfodetail_F_Place",prop:"f_Place",label:"产地",width:void 0},{id:"lr_erp_receiptinfodetail_F_Specification",prop:"f_Specification",label:"规格",width:void 0},{id:"lr_erp_receiptinfodetail_F_Type",prop:"f_Type",label:"型号",width:void 0},{id:"lr_erp_receiptinfodetail_F_Number",prop:"f_Number",label:"批次号",width:void 0},{id:"lr_erp_receiptinfodetail_F_Unit",prop:"f_Unit",label:"单位",width:void 0},{id:"lr_erp_receiptinfodetail_F_Count",prop:"f_Count",label:"数量",width:void 0},{id:"lr_erp_receiptinfodetail_F_Price",prop:"f_Price",label:"单价",width:void 0},{id:"lr_erp_receiptinfodetail_F_Amount",prop:"f_Amount",label:"金额",width:void 0}],lr_erp_receiptinfodetail_data:[]}},computed:{f_PaymentTypeOptions:function(){return[{value:"0",label:"现金"},{value:"1",label:"票汇"},{label:"信汇",value:"2"},{label:"电汇",value:"3"},{label:"承兑",value:"4"},{label:"信用证",value:"5"}]}},mounted:function(){},methods:{handleLr_erp_receiptinfodetailAddRow:function(){var e={f_Code:"",f_Name:"",f_BarCode:"",f_Place:"",f_Specification:"",f_Type:"",f_Number:"",f_Unit:"",f_Count:"",f_Price:"",f_Amount:""};this.lr_erp_receiptinfodetail_data.push(e)},handleLr_erp_receiptinfodetailDeleteRow:function(e){this.lr_erp_receiptinfodetail_data.splice(e.index,1)},resetForm:function(){this.formData.f_Id="",this.$formClear(this.$refs.form),this.lr_erp_receiptinfodetail_data=[]},validateForm:function(){var e=this;return new Promise((function(t){e.$refs.form.validate((function(a){if(a){if(!e.$refs.lr_erp_receiptinfodetail_table.validate())return void t(!1);t(!0)}else t(!1)}))}))},setForm:function(e){this.formData=e.erp_receiptinfoEntity,this.lr_erp_receiptinfodetail_data=e.erp_receiptinfo_detailList},getForm:function(){var e={};return e.erp_receiptinfoEntity=this.$deepClone(this.formData),e.erp_receiptinfo_detailList=this.$deepClone(this.lr_erp_receiptinfodetail_data),e}}}),n=o,i=a("2877"),f=Object(i["a"])(n,r,l,!1,null,null,null);t["default"]=f.exports},d8af:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("l-layout",{staticClass:"l-tab-page"},[a("l-panel",{scopedSlots:e._u([{key:"toolLeft",fn:function(){return[a("l-query2",{attrs:{items:e.queryItems,formData:e.queryData,loading:e.tableLoading},on:{search:e.handleSearch},scopedSlots:e._u([{key:"f_ApplyDate",fn:function(){return[a("l-date",{attrs:{format:"yyyy-MM-dd HH:mm:ss",dateType:"datetimerange",placeholder:e.$t("请选择")},model:{value:e.queryData.f_ApplyDate,callback:function(t){e.$set(e.queryData,"f_ApplyDate",t)},expression:"queryData.f_ApplyDate"}})]},proxy:!0},{key:"f_PurchaseNo",fn:function(){return[a("el-input",{attrs:{placeholder:e.$t("请输入")},model:{value:e.queryData.f_PurchaseNo,callback:function(t){e.$set(e.queryData,"f_PurchaseNo",t)},expression:"queryData.f_PurchaseNo"}})]},proxy:!0},{key:"f_Theme",fn:function(){return[a("el-input",{attrs:{placeholder:e.$t("请输入")},model:{value:e.queryData.f_Theme,callback:function(t){e.$set(e.queryData,"f_Theme",t)},expression:"queryData.f_Theme"}})]},proxy:!0},{key:"f_PaymentType",fn:function(){return[a("l-select",{attrs:{options:e.f_PaymentTypeOptions},model:{value:e.queryData.f_PaymentType,callback:function(t){e.$set(e.queryData,"f_PaymentType",t)},expression:"queryData.f_PaymentType"}})]},proxy:!0},{key:"f_Appler",fn:function(){return[a("l-user-select",{model:{value:e.queryData.f_Appler,callback:function(t){e.$set(e.queryData,"f_Appler",t)},expression:"queryData.f_Appler"}})]},proxy:!0}])})]},proxy:!0},{key:"toolRight",fn:function(){return[a("l-tool-btns",{on:{click:function(t){return e.handleAdd()}}})]},proxy:!0}])},[a("l-table",{ref:"mainTable",attrs:{loading:e.tableLoading,columns:e.lr_getPageColumns(e.columns),dataSource:e.tableData,isPage:!0,pageTotal:e.tableTotal,tablePage:e.tableCurrentPage},on:{"update:tablePage":function(t){e.tableCurrentPage=t},"update:table-page":function(t){e.tableCurrentPage=t},loadPageData:e.turnTablePage}},[a("l-table-btns",{attrs:{btns:e.tableBtns},on:{click:e.lr_handleTableBtnClick}})],1)],1),a("l-dialog",{attrs:{title:e.$t(e.formTitle),visible:e.formVisible,height:600,width:1024},on:{"update:visible":function(t){e.formVisible=t},ok:e.handleSave,close:e.handleCloseForm,opened:e.handleOpenedForm}},[a("my-form",{ref:"form"})],1)],1)},l=[],o=(a("a434"),a("ac1f"),a("1276"),a("96cf"),a("1da1")),n=a("6aa5"),i=window.$api.erp.receiptinfo,f={components:{MyForm:n["default"]},data:function(){return{lr_isPage:!0,queryData:{f_ApplyDate:"",f_PurchaseNo:"",f_Theme:"",f_PaymentType:"",f_Appler:""},queryItems:[{label:"收款日期",prop:"f_ApplyDate",span:24},{label:"单据编码",prop:"f_PurchaseNo"},{label:"主题",prop:"f_Theme"},{label:"支付方式",prop:"f_PaymentType"},{label:"收款人",prop:"f_Appler"}],tableLoading:!1,tableData:[],tableTotal:0,tableCurrentPage:1,tablePageSize:50,columns:[{label:"单据编码",prop:"f_PurchaseNo",minWidth:120,align:"left"},{label:"主题",prop:"f_Theme",minWidth:120,align:"left"},{label:"支付方式",prop:"f_PaymentType",minWidth:120,align:"left",dataType:"mydata",options:[{value:"0",label:"现金"},{value:"1",label:"票汇"},{label:"信汇",value:"2"},{label:"电汇",value:"3"},{label:"承兑",value:"4"},{label:"信用证",value:"5"}]},{label:"收款日期",prop:"f_ApplyDate",width:160,align:"left",dataType:"datetime"},{label:"收款人",prop:"f_Appler",minWidth:120,align:"left",dataType:"user"},{label:"收款单位",prop:"f_Department",minWidth:120,align:"left",dataType:"company"},{label:"收款金额",prop:"f_Total",minWidth:120,align:"left"},{label:"备注",prop:"f_Description",minWidth:120,align:"left"}],tableBtns:[{prop:"Edit",label:"编辑",width:40},{prop:"Delete",label:"删除",width:40}],formVisible:!1,formTitle:"",formEditRow:null,formEdit:!1}},computed:{f_PaymentTypeOptions:function(){return[{value:"0",label:"现金"},{value:"1",label:"票汇"},{label:"信汇",value:"2"},{label:"电汇",value:"3"},{label:"承兑",value:"4"},{label:"信用证",value:"5"}]}},mounted:function(){this.init()},methods:{init:function(){this.loadTableData()},handleSearch:function(){this.loadTableData(!0)},turnTablePage:function(e){var t=e.rows;this.tablePageSize=t,this.loadTableData(!0)},loadTableData:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e||(t.tableCurrentPage=1),t.tableLoading=!0,r=t.$deepClone(t.queryData),t.$validatenull(r.f_ApplyDate)||(r.f_ApplyDate_end=r.f_ApplyDate.split(" - ")[1],r.f_ApplyDate=r.f_ApplyDate.split(" - ")[0]),r.rows=t.tablePageSize,r.page=t.tableCurrentPage,r.sidx="F_Id",a.next=9,t.$awaitWraper(i.getPage(r));case 9:l=a.sent,null!=l?(t.tableData=l.rows,t.tableTotal=l.records):t.tableData=[],t.tableLoading=!1;case 12:case"end":return a.stop()}}),a)})))()},handleAdd:function(){this.formEdit=!1,this.handleShowForm()},handleEdit:function(e,t){this.formEdit=!0,this.formEditRow=t,this.handleShowForm()},handleDelete:function(e,t){var a=this;this.$confirm(this.$t("此操作将永久删除该数据, 是否继续?"),this.$t("提示"),{confirmButtonText:this.$t("确定"),cancelButtonText:this.$t("取消"),type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a.tableData.splice(e,1),a.tableTotal--,r.next=4,i.remove(t.f_Id);case 4:a.$message({type:"success",message:a.$t("删除成功!")});case 5:case"end":return r.stop()}}),r)})))).catch((function(){a.$message({type:"info",message:a.$t("已取消删除!")})}))},handleSave:function(e,t){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var l,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,a.$refs.form.validateForm();case 2:if(!r.sent){r.next=17;break}if(e(),l=a.$refs.form.getForm(),o="",!a.formEdit){r.next=12;break}return r.next=9,a.$awaitWraper(i.update(a.formEditRow.f_Id,l));case 9:o=r.sent,r.next=15;break;case 12:return r.next=14,a.$awaitWraper(i.add(l));case 14:o=r.sent;case 15:o&&(a.$message({type:"success",message:a.$t("保存成功!")}),a.loadTableData(),a.formVisible=!1),t();case 17:case"end":return r.stop()}}),r)})))()},handleShowForm:function(e){this.formTitle=e,this.formVisible=!0},handleOpenedForm:function(e,t){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!a.formEdit){r.next=7;break}return e("加载数据中..."),r.next=4,a.$awaitWraper(i.get(a.formEditRow.f_Id));case 4:l=r.sent,l&&a.$refs.form.setForm(l),t();case 7:case"end":return r.stop()}}),r)})))()},handleCloseForm:function(){this.$refs.form.resetForm()}}},p=f,s=a("2877"),c=Object(s["a"])(p,r,l,!1,null,null,null);t["default"]=c.exports}}]);