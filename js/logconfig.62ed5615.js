(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["logconfig","logconfig-form"],{"524c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"l-rblock l-form-viewer",staticStyle:{padding:"8px"}},[a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,size:"mini",labelPosition:"right",labelWidth:"80px"}},[a("div",{staticClass:"l-auto-window "},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{staticClass:"l-tabs-container",attrs:{label:e.$t("接口信息"),name:"tab0"}},[a("el-row",{attrs:{gutter:0}},[a("div",{staticClass:"l-rblock"},[e.lr_formLookAuth("lr_other_logconfig_f_Name")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("接口名称"),prop:"lr_other_logconfig_f_Name"}},[a("el-input",{attrs:{disabled:!e.lr_formEditAuth("lr_other_logconfig_f_Name",e.isReadOnly),readonly:!1,placeholder:e.$t("请输入")},model:{value:e.formData.lr_other_logconfig_f_Name,callback:function(t){e.$set(e.formData,"lr_other_logconfig_f_Name",t)},expression:"formData.lr_other_logconfig_f_Name"}})],1)],1):e._e(),e.lr_formLookAuth("lr_other_logconfig_f_RequestMethod")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("请求方式"),prop:"lr_other_logconfig_f_RequestMethod"}},[a("l-select",{attrs:{disabled:!e.lr_formEditAuth("lr_other_logconfig_f_RequestMethod",e.isReadOnly),options:e.lr_other_logconfig_f_RequestMethodOptions},model:{value:e.formData.lr_other_logconfig_f_RequestMethod,callback:function(t){e.$set(e.formData,"lr_other_logconfig_f_RequestMethod",t)},expression:"formData.lr_other_logconfig_f_RequestMethod"}})],1)],1):e._e(),a("el-col",{attrs:{span:24}},[a("div",[a("el-alert",{attrs:{title:e.$t("接口地址说明"),type:"info",description:e.$t("系统接口格式：/system/api/page，若是请求带有参数，请按照以下格式：/system/savedata/{@parame}/{@parame}。"),"show-icon":"",closable:!1}})],1)]),e.lr_formLookAuth("lr_other_logconfig_f_Address")?a("el-col",{attrs:{span:24}},[a("el-form-item",{staticStyle:{"margin-top":"14px"},attrs:{label:e.$t("接口地址"),prop:"lr_other_logconfig_f_Address"}},[a("el-input",{attrs:{disabled:!e.lr_formEditAuth("lr_other_logconfig_f_Address",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.formData.lr_other_logconfig_f_Address,callback:function(t){e.$set(e.formData,"lr_other_logconfig_f_Address",t)},expression:"formData.lr_other_logconfig_f_Address"}})],1)],1):e._e(),e.lr_formLookAuth("lr_other_logconfig_f_IsSecretFilter")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("密级过滤"),prop:"lr_other_logconfig_f_IsSecretFilter"}},[a("el-switch",{attrs:{disabled:!e.lr_formEditAuth("lr_other_logconfig_f_IsSecretFilter"),activeValue:1,inactiveValue:0,"active-text":e.$t("启用"),"inactive-text":e.$t("禁用"),"active-color":"rgba(144, 240, 144, 0.5)","inactive-color":"#C0CCDA"},model:{value:e.formData.lr_other_logconfig_f_IsSecretFilter,callback:function(t){e.$set(e.formData,"lr_other_logconfig_f_IsSecretFilter",t)},expression:"formData.lr_other_logconfig_f_IsSecretFilter"}})],1)],1):e._e(),e.lr_formLookAuth("lr_other_logconfig_f_EnabledMark")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("接口状态"),prop:"lr_other_logconfig_f_EnabledMark"}},[a("el-switch",{attrs:{disabled:!e.lr_formEditAuth("lr_other_logconfig_f_EnabledMark"),activeValue:1,inactiveValue:0,"active-text":e.$t("启用"),"inactive-text":e.$t("禁用"),"active-color":"rgba(144, 240, 144, 0.5)","inactive-color":"#C0CCDA"},model:{value:e.formData.lr_other_logconfig_f_EnabledMark,callback:function(t){e.$set(e.formData,"lr_other_logconfig_f_EnabledMark",t)},expression:"formData.lr_other_logconfig_f_EnabledMark"}})],1)],1):e._e(),e.lr_formLookAuth("lr_other_logconfig_f_MsgType")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("描述类型"),prop:"lr_other_logconfig_f_MsgType"}},[a("l-radio",{attrs:{disabled:!e.lr_formEditAuth("lr_other_logconfig_f_MsgType",e.isReadOnly),options:e.lr_other_logconfig_f_MsgTypeOptions},model:{value:e.formData.lr_other_logconfig_f_MsgType,callback:function(t){e.$set(e.formData,"lr_other_logconfig_f_MsgType",t)},expression:"formData.lr_other_logconfig_f_MsgType"}})],1)],1):e._e(),e.lr_formLookAuth("lr_other_logconfig_f_Description")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("备注"),prop:"lr_other_logconfig_f_Description"}},[a("el-input",{attrs:{type:"textarea",disabled:!e.lr_formEditAuth("lr_other_logconfig_f_Description",e.isReadOnly),rows:7,placeholder:e.$t("请输入")},model:{value:e.formData.lr_other_logconfig_f_Description,callback:function(t){e.$set(e.formData,"lr_other_logconfig_f_Description",t)},expression:"formData.lr_other_logconfig_f_Description"}})],1)],1):e._e()],1)])],1),a("el-tab-pane",{staticClass:"l-tabs-container",attrs:{label:e.$t("日志配置"),name:"tab1"}},[a("el-row",{attrs:{gutter:0}},[a("div",{staticClass:"l-rblock"},[e.lr_formLookAuth("1679992857319_96165")?a("el-col",{attrs:{span:24}},[a("l-edit-table",{ref:"lr_other_logscheme_table",staticStyle:{"margin-top":"14px"},attrs:{addBtnText:"undefined",isAddBtn:!e.isReadOnly,isRemoveBtn:!e.isReadOnly,isShowNum:!0,dataSource:e.lr_other_logscheme_data,columns:e.lr_formTableAuth("lr_other_logscheme",e.lr_other_logscheme_columns),classType:"element"},on:{addRow:e.handleLr_other_logschemeAddRow,deleteRow:e.handleLr_other_logschemeDeleteRow},scopedSlots:e._u([{key:"f_TableName",fn:function(t){return[a("el-input",{attrs:{size:"mini",disabled:!e.lr_formTableEditAuth("lr_other_logscheme","f_TableName",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:t.row.f_TableName,callback:function(a){e.$set(t.row,"f_TableName",a)},expression:"scope.row.f_TableName"}})]}},{key:"f_FullName",fn:function(t){return[a("el-input",{attrs:{size:"mini",disabled:!e.lr_formTableEditAuth("lr_other_logscheme","f_FullName",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:t.row.f_FullName,callback:function(a){e.$set(t.row,"f_FullName",a)},expression:"scope.row.f_FullName"}})]}},{key:"f_EnCode",fn:function(t){return[a("el-input",{attrs:{size:"mini",disabled:!e.lr_formTableEditAuth("lr_other_logscheme","f_EnCode",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:t.row.f_EnCode,callback:function(a){e.$set(t.row,"f_EnCode",a)},expression:"scope.row.f_EnCode"}})]}},{key:"f_DataItemCode",fn:function(t){return[a("l-tree-select",{attrs:{disabled:!e.lr_formTableEditAuth("lr_other_logscheme","f_DataItemCode",e.isReadOnly),options:e.lr_dataItemClassifysTree,placeholder:e.$t("请选择数据字典"),size:"mini"},model:{value:t.row.f_DataItemCode,callback:function(a){e.$set(t.row,"f_DataItemCode",a)},expression:"scope.row.f_DataItemCode"}})]}}],null,!1,469106479)},[a("el-table-column",{attrs:{label:"操作",width:48},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return a.stopPropagation(),e.handleTableClick(t.$index,t.row)}}},[e._v(" "+e._s(e.$t("设置"))+" ")])]}}],null,!1,1197933383)})],1)],1):e._e()],1)])],1)],1)],1)]),a("l-dialog",{attrs:{title:e.$t("设置字段属性"),visible:e.formVisible},on:{"update:visible":function(t){e.formVisible=t},ok:e.handleSave,close:e.handleCloseForm,opened:e.handleOpenedForm}},[a("div",{staticClass:"l-from-body"},[a("el-form",{ref:"form2",attrs:{model:e.formData2,rules:e.rules2,size:"mini","label-width":"80px"}},[a("el-form-item",{attrs:{label:"字段",prop:"f_FullName"}},[a("el-input",{attrs:{readonly:""},model:{value:e.formData2.f_FullName,callback:function(t){e.$set(e.formData2,"f_FullName",t)},expression:"formData2.f_FullName"}})],1),a("el-form-item",{attrs:{label:"关联类型",prop:"f_RelationType"}},[a("l-select",{attrs:{placeholder:e.$t("请选择"),options:e.relationTypeOptions},on:{change:e.handleRelationChange},model:{value:e.formData2.f_RelationType,callback:function(t){e.$set(e.formData2,"f_RelationType",t)},expression:"formData2.f_RelationType"}})],1),1==e.formData2.f_RelationType?a("el-form-item",{attrs:{label:"数据选项",prop:"f_DataItemCode"}},[a("l-tree-select",{attrs:{placeholder:e.$t("请选择"),options:e.lr_dataItemClassifysTree},model:{value:e.formData2.f_DataItemCode,callback:function(t){e.$set(e.formData2,"f_DataItemCode",t)},expression:"formData2.f_DataItemCode"}})],1):e._e(),2==e.formData2.f_RelationType?a("el-form-item",{attrs:{label:"数据视图",prop:"f_DSourceCode"}},[a("l-select",{attrs:{placeholder:e.$t("请选择"),options:e.lr_dataSource,labelKey:"f_Name",valueKey:"f_Code"},on:{change:e.handleDataSourceChange},model:{value:e.formData2.f_DSourceCode,callback:function(t){e.$set(e.formData2,"f_DSourceCode",t)},expression:"formData2.f_DSourceCode"}})],1):e._e(),2==e.formData2.f_RelationType?a("el-form-item",{attrs:{label:"关联字段",prop:"f_DSourceRelevance"}},[a("l-select",{attrs:{placeholder:e.$t("请选择"),options:e.colNames},model:{value:e.formData2.f_DSourceRelevance,callback:function(t){e.$set(e.formData2,"f_DSourceRelevance",t)},expression:"formData2.f_DSourceRelevance"}})],1):e._e(),2==e.formData2.f_RelationType?a("el-form-item",{attrs:{label:"显示字段",prop:"f_DSourceReveal"}},[a("l-select",{attrs:{placeholder:e.$t("请选择"),options:e.colNames},model:{value:e.formData2.f_DSourceReveal,callback:function(t){e.$set(e.formData2,"f_DSourceReveal",t)},expression:"formData2.f_DSourceReveal"}})],1):e._e()],1)],1)])],1)},o=[],l=(a("d81d"),a("a434"),a("96cf"),a("1da1")),n=window.$api.system.logconfig,i={props:{isReadOnly:{type:Boolean,default:!1}},data:function(){var e=this;return{moduleCode:"learun_logconfig",activeName:"tab0",formData:{lr_other_logconfig_f_Name:"",lr_other_logconfig_f_Address:"",lr_other_logconfig_f_RequestMethod:"",lr_other_logconfig_f_EnabledMark:1,lr_other_logconfig_f_Description:"",lr_other_logconfig_f_IsSecretFilter:0,lr_other_logconfig_f_MsgType:1},rules:{lr_other_logconfig_f_Name:[{required:!0,message:this.$t("请输入接口名称")}],lr_other_logconfig_f_Address:[{required:!0,message:this.$t("请输入接口地址")},{validator:this.lr_existDbFiled,fieldName:"f_Address",keyValue:function(){return e.formData.lr_other_logconfig_f_Id},filedsJsonName:"fileNameForm_filedsJson",tableName:"lr_other_logconfig",keyName:"f_Id"}],lr_other_logconfig_f_RequestMethod:[{required:!0,message:this.$t("请选择请求方式")}]},lr_other_logscheme_columns:[{id:"lr_other_logscheme_F_TableName",prop:"f_TableName",label:this.$t("数据库名称"),required:!0},{id:"lr_other_logscheme_F_FullName",prop:"f_FullName",label:this.$t("名称"),required:!0},{id:"lr_other_logscheme_F_EnCode",prop:"f_EnCode",label:this.$t("编码"),required:!0},{id:"lr_other_logscheme_F_DataItemCode",prop:"f_DataItemCode",label:this.$t("数据字典关联项")}],lr_other_logscheme_data:[],description:this.$t("日志效果展示"),formVisible:!1,formEditRow:null,formEditIndex:0,formData2:{f_FullName:"",f_RelationType:0,f_DataItemCode:"",f_DSourceCode:"",f_DSourceRelevance:"",f_DSourceReveal:""},lr_other_logconfig_f_MsgTypeOptions:[{label:this.$t("全部"),value:1},{label:this.$t("仅操作前"),value:2},{label:this.$t("仅操作后"),value:3}],rules2:{f_RelationType:[{required:!0,message:"请输选择关联类型"}],f_DataItemCode:[{required:!0,message:"请选择数据字典"}],f_DSourceCode:[{required:!0,message:"请选择数据视图",trigger:"blur"}],f_DSourceRelevance:[{required:!0,message:"请选择关联字段",trigger:"blur"}],f_DSourceReveal:[{required:!0,message:"请选择显示字段",trigger:"blur"}]},relationTypeOptions:[{value:0,label:"无关联"},{value:1,label:"数据字典"},{value:2,label:"数据视图"},{value:3,label:"公司信息"},{value:4,label:"部门信息"},{value:5,label:"用户信息"}],colNames:[]}},computed:{lr_other_logconfig_f_RequestMethodOptions:function(){return this.lr_loadDataItem("RequestMethod"),this.lr_dataItemOptions(this.lr_dataItem["RequestMethod"])},fileNameForm_filedsJson:function(){return console.log("this.formData.lr_other_logconfig_f_RequestMethod",this.formData.lr_other_logconfig_f_RequestMethod),{f_RequestMethod:this.formData.lr_other_logconfig_f_RequestMethod}}},mounted:function(){this.lr_loadDataItemClassifys(),this.lr_loadDataSourceList()},methods:{handleLr_other_logschemeAddRow:function(){var e={f_TableName:"",f_FullName:"",f_EnCode:"",f_RelationType:0,f_DataItemCode:"",f_DSourceCode:"",f_DSourceRelevance:"",f_DSourceReveal:""};this.lr_other_logscheme_data.push(e)},handleLr_other_logschemeDeleteRow:function(e){this.lr_other_logscheme_data.splice(e.index,1)},resetForm:function(){this.$formClear(this.$refs.form),this.activeName="tab0",this.lr_other_logscheme_data=[]},validateForm:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$formValidateWraper(e.$refs.form);case 2:if(t.sent){t.next=4;break}return t.abrupt("return",!1);case 4:if(e.$refs.lr_other_logscheme_table.validate()){t.next=6;break}return t.abrupt("return",!1);case 6:return t.abrupt("return",!0);case 7:case"end":return t.stop()}}),t)})))()},setForm:function(e){this.$setFormData(this.formData,e.lrOtherLogconfigEntity,"lr_other_logconfig"),this.lr_other_logscheme_data=e.lrOtherLogschemeList},getForm:function(){var e={};return e.lrOtherLogconfigEntity=this.$getFormData(this.formData,"lr_other_logconfig"),e.lrOtherLogschemeList=this.lr_other_logscheme_data,e},loadFormData:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.keyValue,a.next=3,t.$awaitWraper(n.get(r));case 3:if(o=a.sent,!o){a.next=9;break}return t.setForm(o),a.abrupt("return",!0);case 9:return a.abrupt("return",!1);case 10:case"end":return a.stop()}}),a)})))()},saveForm:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r,o,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=e.keyValue,o=e.isEdit,l=t.getForm(),console.log("postData",l),!o){a.next=9;break}return a.next=6,t.$awaitWraper(n.update(r,l));case 6:return a.abrupt("return",a.sent);case 9:return l.lrOtherLogconfigEntity.f_Id=r,a.next=12,t.$awaitWraper(n.add(l));case 12:return a.abrupt("return",a.sent);case 13:case"end":return a.stop()}}),a)})))()},formatText:function(e,t){switch(e){case 0:return"无关联";case 1:return"数据字典";case 2:return"数据视图/"+t.f_DSourceCode;case 3:return"公司信息";case 4:return"部门信息";case 5:return"用户信息";default:return"无关联"}},handleTableClick:function(e,t){this.formVisible=!0,this.formEditRow=t,this.formEditIndex=e},handleSave:function(){var e=this;this.$refs.form2.validate((function(t){t&&(e.$set(e.lr_other_logscheme_data,e.formEditIndex,e.$deepClone(e.formData2)),e.formVisible=!1)}))},handleCloseForm:function(){this.$refs.form2&&this.$refs.form2.resetFields()},handleOpenedForm:function(){this.formData2=this.$deepClone(this.formEditRow)},handleRelationChange:function(){this.formData2.f_DataItemCode="",this.formData2.f_DSourceCode="",this.formData2.f_DSourceRelevance="",this.formData2.f_DSourceReveal=""},handleDataSourceChange:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!t.$validatenull(e)){a.next=6;break}t.formData2.f_DSourceRelevance="",t.formData2.f_DSourceReveal="",t.colNames=[],a.next=12;break;case 6:return a.next=8,t.lr_loadDataSourceColNames(e.f_Code,!1);case 8:r=t.lr_dataSourceCol[e.f_Code].map((function(e){return{value:e,label:e}})),t.colNames=r,t.formData2.f_DSourceRelevance=r[0].value,t.formData2.f_DSourceReveal=r[0].value;case 12:case"end":return a.stop()}}),a)})))()}}},s=i,f=a("2877"),c=Object(f["a"])(s,r,o,!1,null,null,null);t["default"]=c.exports},"86c1":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.lr_loadPage?e._e():a("l-layout",{staticClass:"l-tab-page"},[a("l-panel",{scopedSlots:e._u([{key:"toolLeft",fn:function(){return[a("l-query2",{attrs:{items:e.queryItems,formData:e.queryData,loading:e.tableLoading},on:{search:e.handleSearch},scopedSlots:e._u([{key:"f_Name",fn:function(){return[a("el-input",{attrs:{placeholder:e.$t("请输入")},model:{value:e.queryData.f_Name,callback:function(t){e.$set(e.queryData,"f_Name",t)},expression:"queryData.f_Name"}})]},proxy:!0},{key:"f_Address",fn:function(){return[a("el-input",{attrs:{placeholder:e.$t("请输入")},model:{value:e.queryData.f_Address,callback:function(t){e.$set(e.queryData,"f_Address",t)},expression:"queryData.f_Address"}})]},proxy:!0},{key:"f_RequestMethod",fn:function(){return[a("l-select",{attrs:{options:e.f_RequestMethodOptions},model:{value:e.queryData.f_RequestMethod,callback:function(t){e.$set(e.queryData,"f_RequestMethod",t)},expression:"queryData.f_RequestMethod"}})]},proxy:!0}],null,!1,3017031510)})]},proxy:!0},{key:"toolRight",fn:function(){return[a("l-tool-btns",{attrs:{hasTableSetting:!0},on:{setting:e.lr_handleSettingTable,click:function(t){return e.handleAdd()}}},[a("l-excel-btns")],1)]},proxy:!0}],null,!1,2763443248)},[a("l-table",{ref:"mainTable",attrs:{loading:e.tableLoading,columns:e.lr_getPageColumns(e.columns),dataSource:e.tableData,isPage:!0,pageTotal:e.tableTotal,tablePage:e.tableCurrentPage},on:{"update:tablePage":function(t){e.tableCurrentPage=t},"update:table-page":function(t){e.tableCurrentPage=t},loadPageData:e.turnTablePage},scopedSlots:e._u([e._l(e.lr_tableColumnsByToLabel(e.lr_getPageColumns(e.columns)),(function(e,t){return{key:e.prop,fn:function(r){return[a("l-value-to-label",{key:t,attrs:{value:r.row[e.prop],type:e.dataType,code:e.dataCode,valueKey:e.valueKey,labelKey:e.labelKey,options:e.options,format:e.format,setting:e.setting}})]}}}))],null,!0)},[a("l-table-btns",{attrs:{btns:e.tableBtns},on:{click:e.lr_handleTableBtnClick}})],1)],1),a("l-dialog",{attrs:{title:e.$t(e.formTitle),visible:e.formVisible,height:700,width:1e3},on:{"update:visible":function(t){e.formVisible=t},ok:e.handleSave,close:e.handleCloseForm,opened:e.handleOpenedForm}},[a("my-form",{ref:"form",attrs:{isReadOnly:e.formDetails}})],1)],1)},o=[],l=(a("a434"),a("96cf"),a("1da1")),n=a("524c"),i=window.$api.system.logconfig,s={components:{MyForm:n["default"]},data:function(){return{lr_isPage:!0,moduleCode:"learun_logconfig",queryData:{f_Name:"",f_Address:"",f_RequestMethod:""},queryItems:[{label:this.$t("接口名称"),prop:"f_Name"},{label:this.$t("接口地址"),prop:"f_Address"},{label:this.$t("请求方式"),prop:"f_RequestMethod"}],tableLoading:!1,tableData:[],tableTotal:0,tableCurrentPage:1,tablePageSize:50,columns:[{label:"接口名称",prop:"f_Name",minWidth:150,align:"left",dataType:"input",isNotAutoWrap:!0},{label:"接口地址",prop:"f_Address",minWidth:300,align:"left",dataType:"input",isNotAutoWrap:!0},{label:"请求方式",prop:"f_RequestMethod",minWidth:70,align:"left",dataType:"dataItem",dataCode:"RequestMethod"},{label:"接口状态",prop:"f_EnabledMark",minWidth:130,align:"left",dataType:"switch",setting:{width:40,activeIconClass:"",inactiveIconClass:"",activeText:"启用",inactiveText:"禁用",valueType:"number",activeValue:"1",inactiveValue:"0",activeColor:"rgba(144, 238, 144, 1)",inactiveColor:"#C0CCDA",csType:"int",required:!0}},{label:"密级过滤",prop:"f_IsSecretFilter",minWidth:130,align:"left",dataType:"switch",setting:{width:40,activeIconClass:"",inactiveIconClass:"",activeText:"启用",inactiveText:"禁用",valueType:"number",activeValue:"1",inactiveValue:"0",activeColor:"rgba(144, 238, 144, 1)",inactiveColor:"#C0CCDA",csType:"int",required:!0}},{label:"备注",prop:"f_Description",minWidth:200,align:"left",dataType:"textarea",isNotAutoWrap:!0},{label:"创建人员",prop:"f_CreateUserId",minWidth:80,align:"left",dataType:"user",isNotAutoWrap:!0},{label:"创建时间",prop:"f_CreateDate",minWidth:100,align:"left",dataType:"datetime",isNotAutoWrap:!0},{label:"修改人员",prop:"f_ModifyUserId",minWidth:80,align:"left",dataType:"user",isNotAutoWrap:!0},{label:"修改时间",prop:"f_ModifyDate",minWidth:100,align:"left",dataType:"datetime",isNotAutoWrap:!0}],tableBtns:[{prop:"Edit",label:this.$t("编辑"),width:40},{prop:"Delete",label:this.$t("删除"),width:40},{prop:"Details",label:this.$t("详情"),width:40}],formVisible:!1,formTitle:"",formEditRow:null,formEdit:!1,formDetails:!1}},computed:{f_RequestMethodOptions:function(){return this.lr_dataItemOptions(this.lr_dataItem["RequestMethod"])}},mounted:function(){this.init()},methods:{init:function(){this.loadTableData(),this.lr_loadDataItem("RequestMethod")},handleSearch:function(){this.loadTableData()},turnTablePage:function(e){var t=e.rows;this.tablePageSize=t,this.loadTableData(!0)},loadTableData:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e||(t.tableCurrentPage=1),t.tableLoading=!0,r=t.$deepClone(t.queryData),r.rows=t.tablePageSize,r.page=t.tableCurrentPage,r.sidx="F_CreateDate DESC",a.next=8,t.$awaitWraper(i.getPage(r));case 8:o=a.sent,null!=o?(t.tableData=o.rows,t.tableTotal=o.records):t.tableData=[],t.tableLoading=!1;case 11:case"end":return a.stop()}}),a)})))()},handleAdd:function(){this.formEdit=!1,this.formDetails=!1,this.handleShowForm("新增")},handleEdit:function(e,t){this.formEdit=!0,this.formDetails=!1,this.formEditRow=t,this.handleShowForm("编辑")},handleDelete:function(e,t){var a=this;this.$confirm(this.$t("此操作将永久删除该数据, 是否继续?"),this.$t("提示"),{confirmButtonText:this.$t("确定"),cancelButtonText:this.$t("取消"),type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a.tableData.splice(e,1),a.tableTotal--,r.next=4,i.remove(t.f_Id);case 4:a.$message({type:"success",message:a.$t("删除成功!")});case 5:case"end":return r.stop()}}),r)})))).catch((function(){a.$message({type:"info",message:a.$t("已取消删除!")})}))},handleDetails:function(e,t){this.formEdit=!0,this.formDetails=!0,this.formEditRow=t,this.handleShowForm("详情")},handleSave:function(e,t){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){var o,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e("保存数据中..."),r.next=3,a.$refs.form.validateForm();case 3:if(!r.sent){r.next=8;break}return r.next=6,a.$refs.form.saveForm({keyValue:a.formEdit?a.formEditRow.f_Id:"",isEdit:a.formEdit});case 6:o=r.sent,o&&(l=a.formEdit?a.$t("更新成功!"):a.$t("新增成功!"),a.$message({type:"success",message:a.$t(l)}),a.loadTableData(),a.formVisible=!1);case 8:t();case 9:case"end":return r.stop()}}),r)})))()},handleShowForm:function(e){this.formTitle=e,this.formVisible=!0},handleOpenedForm:function(e,t){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!a.formEdit){r.next=5;break}return e("加载数据中..."),r.next=4,a.$refs.form.loadFormData({keyValue:a.formEditRow.f_Id});case 4:t();case 5:case"end":return r.stop()}}),r)})))()},handleCloseForm:function(){this.$refs.form.resetForm()}}},f=s,c=a("2877"),_=Object(c["a"])(f,r,o,!1,null,null,null);t["default"]=_.exports}}]);