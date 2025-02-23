(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["outstorelog-form"],{1969:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"l-rblock l-form-viewer",staticStyle:{padding:"8px"}},[r("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,size:"mini",labelPosition:"right",labelWidth:"80px"}},[r("div",{staticClass:"l-auto-window only-tabs"},[r("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{staticClass:"l-tabs-container",attrs:{label:e.$t("主表信息"),name:"tab0"}},[r("el-row",{attrs:{gutter:0}},[r("div",{staticClass:"l-rblock"},[e.lr_formLookAuth("case_erp_outstorelog_f_Number")?r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("出库单号"),prop:"case_erp_outstorelog_f_Number"}},[r("l-code",{attrs:{size:"mini",code:"erp_outstorelog_number"},model:{value:e.formData.case_erp_outstorelog_f_Number,callback:function(t){e.$set(e.formData,"case_erp_outstorelog_f_Number",t)},expression:"formData.case_erp_outstorelog_f_Number"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_outstorelog_f_Theme")?r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("出库主题"),prop:"case_erp_outstorelog_f_Theme"}},[r("el-input",{attrs:{disabled:!e.lr_formEditAuth("case_erp_outstorelog_f_Theme",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_outstorelog_f_Theme,callback:function(t){e.$set(e.formData,"case_erp_outstorelog_f_Theme",t)},expression:"formData.case_erp_outstorelog_f_Theme"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_outstorelog_f_Date")?r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("出库日期"),prop:"case_erp_outstorelog_f_Date"}},[r("l-date",{attrs:{disabled:!e.lr_formEditAuth("case_erp_outstorelog_f_Date",e.isReadOnly),readonly:!1,format:"yyyy-MM-dd",dateType:"date",clearable:!0,placeholder:e.$t("请选择")},model:{value:e.formData.case_erp_outstorelog_f_Date,callback:function(t){e.$set(e.formData,"case_erp_outstorelog_f_Date",t)},expression:"formData.case_erp_outstorelog_f_Date"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_outstorelog_f_Name")?r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("客户名称"),prop:"case_erp_outstorelog_f_Name"}},[r("el-input",{attrs:{disabled:!e.lr_formEditAuth("case_erp_outstorelog_f_Name",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_outstorelog_f_Name,callback:function(t){e.$set(e.formData,"case_erp_outstorelog_f_Name",t)},expression:"formData.case_erp_outstorelog_f_Name"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_outstorelog_f_Count")?r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("出库总量"),prop:"case_erp_outstorelog_f_Count"}},[r("el-input",{attrs:{disabled:!e.lr_formEditAuth("case_erp_outstorelog_f_Count",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_outstorelog_f_Count,callback:function(t){e.$set(e.formData,"case_erp_outstorelog_f_Count",t)},expression:"formData.case_erp_outstorelog_f_Count"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_outstorelog_f_Store")?r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("出库仓库"),prop:"case_erp_outstorelog_f_Store"}},[r("l-layer-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_outstorelog_f_Store",e.isReadOnly),isPage:!0,height:504,width:960,columns:[{label:"仓库编号",prop:"f_number",valueKey:"",minWidth:"150",align:"left",hidden:!1},{label:"仓库名称",prop:"f_name",valueKey:"",minWidth:"150",align:"left",hidden:!1},{label:"仓库地址",prop:"f_address",valueKey:"",minWidth:"150",align:"left",hidden:!1},{label:"负责人",prop:"f_person",valueKey:"",minWidth:100,align:"left",hidden:!1,dataType:"user"},{label:"联系方式",prop:"f_phone",valueKey:"",minWidth:100,align:"left",hidden:!1}],options:e.case_erp_outstorelog_f_StoreOptions},model:{value:e.formData.case_erp_outstorelog_f_Store,callback:function(t){e.$set(e.formData,"case_erp_outstorelog_f_Store",t)},expression:"formData.case_erp_outstorelog_f_Store"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_outstorelog_f_Person")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("出库人员"),prop:"case_erp_outstorelog_f_Person"}},[r("l-user-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_outstorelog_f_Person",e.isReadOnly)},model:{value:e.formData.case_erp_outstorelog_f_Person,callback:function(t){e.$set(e.formData,"case_erp_outstorelog_f_Person",t)},expression:"formData.case_erp_outstorelog_f_Person"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_outstorelog_f_SaleId")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("销售订单"),prop:"case_erp_outstorelog_f_SaleId"}},[r("l-layer-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_outstorelog_f_SaleId",e.isReadOnly),isPage:!0,height:504,width:960,columns:[{label:"销售单号",prop:"f_number",valueKey:"",minWidth:"150",align:"left",hidden:!1},{label:"订单主题",prop:"f_theme",valueKey:"",minWidth:"150",align:"left",hidden:!1},{label:"销售日期",prop:"f_saledate",valueKey:"",minWidth:"150",align:"left",hidden:!1},{label:"客户名称",prop:"f_clientname",valueKey:"",minWidth:"150",align:"left",hidden:!1,dataType:"dataSource",dataCode:"ERP_Customers",valueKey:"f_id",labelKey:"f_name",isNotAutoWrap:!0},{label:"联系人",prop:"f_clientperson",valueKey:"",minWidth:100,align:"left",hidden:!1},{label:"联系方式",prop:"f_clientway",valueKey:"",minWidth:100,align:"left",hidden:!1}],options:e.case_erp_outstorelog_f_SaleIdOptions},model:{value:e.formData.case_erp_outstorelog_f_SaleId,callback:function(t){e.$set(e.formData,"case_erp_outstorelog_f_SaleId",t)},expression:"formData.case_erp_outstorelog_f_SaleId"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_outstorelog_f_MaterialId")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("物料信息"),prop:"case_erp_outstorelog_f_MaterialId"}},[r("l-layer-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_outstorelog_f_MaterialId",e.isReadOnly),isPage:!0,height:504,width:960,columns:[{label:"物料编码",prop:"f_number",valueKey:"",minWidth:"150",align:"left",hidden:!1},{label:"物料名称",prop:"f_name",valueKey:"",minWidth:"150",align:"left",hidden:!1},{label:"规格型号",prop:"f_model",valueKey:"",minWidth:"150",align:"left",hidden:!1},{label:"单位",prop:"f_unit",valueKey:"",minWidth:"120",align:"left",hidden:!1},{label:"物料类别",prop:"f_type",valueKey:"",minWidth:"120",align:"left",hidden:!1},{label:"物料属性",prop:"f_property",valueKey:"",minWidth:"120",align:"left",hidden:!1}],options:e.case_erp_outstorelog_f_MaterialIdOptions},model:{value:e.formData.case_erp_outstorelog_f_MaterialId,callback:function(t){e.$set(e.formData,"case_erp_outstorelog_f_MaterialId",t)},expression:"formData.case_erp_outstorelog_f_MaterialId"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_outstorelog_f_Description")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("备注"),prop:"case_erp_outstorelog_f_Description"}},[r("el-input",{attrs:{type:"textarea",disabled:!e.lr_formEditAuth("case_erp_outstorelog_f_Description",e.isReadOnly),rows:9,placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_outstorelog_f_Description,callback:function(t){e.$set(e.formData,"case_erp_outstorelog_f_Description",t)},expression:"formData.case_erp_outstorelog_f_Description"}})],1)],1):e._e()],1)])],1)],1)],1)])],1)},a=[],l=(r("96cf"),r("1da1")),s=window.$api.erpcase.outstorelog,_={props:{isReadOnly:{type:Boolean,default:!1}},data:function(){return{moduleCode:"ERP_OutstoreLogs",activeName:"tab0",formData:{case_erp_outstorelog_f_Number:"",case_erp_outstorelog_f_Theme:"",case_erp_outstorelog_f_Date:"",case_erp_outstorelog_f_Name:"",case_erp_outstorelog_f_Count:"",case_erp_outstorelog_f_Store:"",case_erp_outstorelog_f_Person:"",case_erp_outstorelog_f_SaleId:"",case_erp_outstorelog_f_MaterialId:"",case_erp_outstorelog_f_Description:""},rules:{case_erp_outstorelog_f_Theme:[{required:!0,message:"请输入出库主题"}],case_erp_outstorelog_f_Date:[{required:!0,message:"请选择出库日期"}],case_erp_outstorelog_f_Name:[{required:!0,message:"请输入客户名称"}],case_erp_outstorelog_f_Count:[{required:!0,message:"请输入出库总量"},{pattern:/^\d+$|^\d*\.\d+$/g,message:"请输入数字"}],case_erp_outstorelog_f_Store:[{required:!0,message:"请输入出库仓库"}],case_erp_outstorelog_f_Person:[{required:!0,message:"请选择出库人员"}]}}},computed:{case_erp_outstorelog_f_SaleIdOptions:function(){var e=this.lr_DataSource("ERP_SaleList");return this.lr_DataSourceOptions(e,"f_id","f_theme")},case_erp_outstorelog_f_MaterialIdOptions:function(){var e=this.lr_DataSource("ERP_Materials");return this.lr_DataSourceOptions(e,"f_id","f_name")},case_erp_outstorelog_f_StoreOptions:function(){var e=this.lr_DataSource("ERP_WareHouses");return this.lr_DataSourceOptions(e,"f_id","f_name")}},methods:{resetForm:function(){this.$formClear(this.$refs.form),this.activeName="tab0"},validateForm:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$formValidateWraper(e.$refs.form);case 2:if(t.sent){t.next=4;break}return t.abrupt("return",!1);case 4:return t.abrupt("return",!0);case 5:case"end":return t.stop()}}),t)})))()},setForm:function(e){this.$setFormData(this.formData,e,"case_erp_outstorelog")},getForm:function(){return this.$getFormData(this.formData,"case_erp_outstorelog")},loadFormData:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){var o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=e.keyValue,r.next=3,t.$awaitWraper(s.get(o));case 3:if(a=r.sent,!a){r.next=9;break}return t.setForm(a),r.abrupt("return",!0);case 9:return r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r)})))()},saveForm:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){var o,a,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(o=e.keyValue,a=e.isEdit,l=t.getForm(),!a){r.next=8;break}return r.next=5,t.$awaitWraper(s.update(o,l));case 5:return r.abrupt("return",r.sent);case 8:return l.f_Id=o,r.next=11,t.$awaitWraper(s.add(l));case 11:return r.abrupt("return",r.sent);case 12:case"end":return r.stop()}}),r)})))()}}},i=_,n=r("2877"),u=Object(n["a"])(i,o,a,!1,null,null,null);t["default"]=u.exports}}]);