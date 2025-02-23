(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["productlog-form"],{"78d8":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"l-rblock l-form-viewer",staticStyle:{padding:"8px"}},[t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,size:"mini",labelPosition:"right",labelWidth:"95px"}},[t("div",{staticClass:"l-auto-window only-tabs"},[t("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(r){e.activeName=r},expression:"activeName"}},[t("el-tab-pane",{staticClass:"l-tabs-container",attrs:{label:e.$t("主表信息"),name:"tab0"}},[t("el-row",{attrs:{gutter:0}},[t("div",{staticClass:"l-rblock"},[e.lr_formLookAuth("case_erp_productlog_f_Number")?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:e.$t("生产编号"),prop:"case_erp_productlog_f_Number"}},[t("l-code",{attrs:{size:"mini",code:"erp_productlog_number"},model:{value:e.formData.case_erp_productlog_f_Number,callback:function(r){e.$set(e.formData,"case_erp_productlog_f_Number",r)},expression:"formData.case_erp_productlog_f_Number"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_productlog_f_Theme")?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:e.$t("生产主题"),prop:"case_erp_productlog_f_Theme"}},[t("el-input",{attrs:{disabled:!e.lr_formEditAuth("case_erp_productlog_f_Theme",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_productlog_f_Theme,callback:function(r){e.$set(e.formData,"case_erp_productlog_f_Theme",r)},expression:"formData.case_erp_productlog_f_Theme"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_productlog_f_Type")?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:e.$t("生产类型"),prop:"case_erp_productlog_f_Type"}},[t("l-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_productlog_f_Type",e.isReadOnly),options:e.case_erp_productlog_f_TypeOptions},model:{value:e.formData.case_erp_productlog_f_Type,callback:function(r){e.$set(e.formData,"case_erp_productlog_f_Type",r)},expression:"formData.case_erp_productlog_f_Type"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_productlog_f_Date")?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:e.$t("单据日期"),prop:"case_erp_productlog_f_Date"}},[t("l-date",{attrs:{disabled:!e.lr_formEditAuth("case_erp_productlog_f_Date",e.isReadOnly),readonly:!1,format:"yyyy-MM-dd",dateType:"date",clearable:!0,placeholder:e.$t("请选择")},model:{value:e.formData.case_erp_productlog_f_Date,callback:function(r){e.$set(e.formData,"case_erp_productlog_f_Date",r)},expression:"formData.case_erp_productlog_f_Date"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_productlog_f_Person")?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:e.$t("负责人"),prop:"case_erp_productlog_f_Person"}},[t("l-user-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_productlog_f_Person",e.isReadOnly)},model:{value:e.formData.case_erp_productlog_f_Person,callback:function(r){e.$set(e.formData,"case_erp_productlog_f_Person",r)},expression:"formData.case_erp_productlog_f_Person"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_productlog_f_Dep")?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:e.$t("生产部门"),prop:"case_erp_productlog_f_Dep"}},[t("l-department-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_productlog_f_Dep",e.isReadOnly)},model:{value:e.formData.case_erp_productlog_f_Dep,callback:function(r){e.$set(e.formData,"case_erp_productlog_f_Dep",r)},expression:"formData.case_erp_productlog_f_Dep"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_productlog_f_State")?t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:e.$t("生产状态"),prop:"case_erp_productlog_f_State"}},[t("l-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_productlog_f_State",e.isReadOnly),options:e.case_erp_productlog_f_StateOptions},model:{value:e.formData.case_erp_productlog_f_State,callback:function(r){e.$set(e.formData,"case_erp_productlog_f_State",r)},expression:"formData.case_erp_productlog_f_State"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_productlog_f_SaleId")?t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:e.$t("销售订单"),prop:"case_erp_productlog_f_SaleId"}},[t("l-layer-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_productlog_f_SaleId",e.isReadOnly),isPage:!0,height:504,width:960,columns:[{label:"销售单号",prop:"f_number",valueKey:"",minWidth:"120",align:"left",hidden:!1},{label:"订单主题",prop:"f_theme",valueKey:"",minWidth:"150",align:"left",hidden:!1},{label:"采购日期",prop:"f_saledate",valueKey:"",minWidth:"150",align:"left",hidden:!1},{label:"客户名称",prop:"f_clientname",valueKey:"",minWidth:"120",align:"left",hidden:!1,dataType:"dataSource",dataCode:"ERP_Customers",valueKey:"f_id",labelKey:"f_name",isNotAutoWrap:!0},{label:"联系人",prop:"f_clientperson",valueKey:"",minWidth:"120",align:"left",hidden:!1},{label:"联系方式",prop:"f_clientway",valueKey:"",minWidth:"120",align:"left",hidden:!1}],options:e.case_erp_productlog_f_SaleIdOptions},model:{value:e.formData.case_erp_productlog_f_SaleId,callback:function(r){e.$set(e.formData,"case_erp_productlog_f_SaleId",r)},expression:"formData.case_erp_productlog_f_SaleId"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_productlog_f_Description")?t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:e.$t("备注"),prop:"case_erp_productlog_f_Description"}},[t("el-input",{attrs:{type:"textarea",disabled:!e.lr_formEditAuth("case_erp_productlog_f_Description",e.isReadOnly),rows:10,placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_productlog_f_Description,callback:function(r){e.$set(e.formData,"case_erp_productlog_f_Description",r)},expression:"formData.case_erp_productlog_f_Description"}})],1)],1):e._e()],1)])],1)],1)],1)])],1)},o=[],_=(t("96cf"),t("1da1")),l=window.$api.erpcase.productlog,s={props:{isReadOnly:{type:Boolean,default:!1}},data:function(){return{moduleCode:"ERP_ProductLogs",activeName:"tab0",formData:{case_erp_productlog_f_Number:"",case_erp_productlog_f_Theme:"",case_erp_productlog_f_Type:"",case_erp_productlog_f_Date:"",case_erp_productlog_f_Person:"",case_erp_productlog_f_Dep:"",case_erp_productlog_f_State:"",case_erp_productlog_f_SaleId:"",case_erp_productlog_f_Description:""},rules:{case_erp_productlog_f_Theme:[{required:!0,message:"请输入生产主题"}],case_erp_productlog_f_Type:[{required:!0,message:"请选择生产类型"}],case_erp_productlog_f_Date:[{required:!0,message:"请选择单据日期"}],case_erp_productlog_f_Person:[{required:!0,message:"请选择负责人"}],case_erp_productlog_f_State:[{required:!0,message:"请选择生产状态"}],case_erp_productlog_f_SaleId:[{required:!0,message:"请选择销售订单"}]}}},computed:{case_erp_productlog_f_TypeOptions:function(){return[{value:"内部生产",label:"内部生产"},{value:"委外生产",label:"委外生产"}]},case_erp_productlog_f_StateOptions:function(){return[{value:0,label:"已完成"},{value:1,label:"未完成"}]},case_erp_productlog_f_SaleIdOptions:function(){var e=this.lr_DataSource("ERP_SaleList");return this.lr_DataSourceOptions(e,"f_id","f_theme")}},methods:{resetForm:function(){this.$formClear(this.$refs.form),this.activeName="tab0"},validateForm:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$formValidateWraper(e.$refs.form);case 2:if(r.sent){r.next=4;break}return r.abrupt("return",!1);case 4:return r.abrupt("return",!0);case 5:case"end":return r.stop()}}),r)})))()},setForm:function(e){this.$setFormData(this.formData,e,"case_erp_productlog")},getForm:function(){return this.$getFormData(this.formData,"case_erp_productlog")},loadFormData:function(e){var r=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.keyValue,t.next=3,r.$awaitWraper(l.get(a));case 3:if(o=t.sent,!o){t.next=9;break}return r.setForm(o),t.abrupt("return",!0);case 9:return t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})))()},saveForm:function(e){var r=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){var a,o,_;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.keyValue,o=e.isEdit,_=r.getForm(),!o){t.next=8;break}return t.next=5,r.$awaitWraper(l.update(a,_));case 5:return t.abrupt("return",t.sent);case 8:return _.f_Id=a,t.next=11,r.$awaitWraper(l.add(_));case 11:return t.abrupt("return",t.sent);case 12:case"end":return t.stop()}}),t)})))()}}},p=s,c=t("2877"),u=Object(c["a"])(p,a,o,!1,null,null,null);r["default"]=u.exports}}]);