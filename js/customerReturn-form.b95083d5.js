(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["customerReturn-form"],{7237:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"l-rblock l-form-viewer",staticStyle:{padding:"8px"}},[r("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,size:"mini",labelPosition:"right",labelWidth:"110px"}},[r("div",{staticClass:"l-auto-window only-tabs"},[r("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{staticClass:"l-tabs-container",attrs:{label:e.$t("主表信息"),name:"tab0"}},[r("el-row",{attrs:{gutter:16}},[r("div",{staticClass:"l-rblock"},[e.lr_formLookAuth("case_erp_customergather_f_Name")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("客户名称"),prop:"case_erp_customergather_f_Name"}},[r("l-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_customergather_f_Name",e.isReadOnly),options:e.case_erp_customergather_f_NameOptions},model:{value:e.formData.case_erp_customergather_f_Name,callback:function(t){e.$set(e.formData,"case_erp_customergather_f_Name",t)},expression:"formData.case_erp_customergather_f_Name"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_customergather_f_SaleId")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("销售订单"),prop:"case_erp_customergather_f_SaleId"}},[r("l-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_customergather_f_SaleId",e.isReadOnly),options:e.case_erp_customergather_f_SaleIdOptions},on:{change:e.changeSale},model:{value:e.formData.case_erp_customergather_f_SaleId,callback:function(t){e.$set(e.formData,"case_erp_customergather_f_SaleId",t)},expression:"formData.case_erp_customergather_f_SaleId"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_customergather_f_WaitAmount")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("计划回款金额"),prop:"case_erp_customergather_f_WaitAmount"}},[r("el-input",{attrs:{disabled:"",placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_customergather_f_WaitAmount,callback:function(t){e.$set(e.formData,"case_erp_customergather_f_WaitAmount",t)},expression:"formData.case_erp_customergather_f_WaitAmount"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_customergather_f_ReceivedDate")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("计划回款日期"),prop:"case_erp_customergather_f_ReceivedDate"}},[r("l-date",{attrs:{disabled:!e.lr_formEditAuth("case_erp_customergather_f_ReceivedDate",e.isReadOnly),readonly:!1,format:"yyyy-MM-dd",dateType:"date",clearable:!0,placeholder:e.$t("请选择")},model:{value:e.formData.case_erp_customergather_f_ReceivedDate,callback:function(t){e.$set(e.formData,"case_erp_customergather_f_ReceivedDate",t)},expression:"formData.case_erp_customergather_f_ReceivedDate"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_customergather_f_FinallyDate")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("最迟回款日期"),prop:"case_erp_customergather_f_FinallyDate"}},[r("l-date",{attrs:{disabled:!e.lr_formEditAuth("case_erp_customergather_f_FinallyDate",e.isReadOnly),readonly:!1,format:"yyyy-MM-dd",dateType:"date",clearable:!0,placeholder:e.$t("请选择")},model:{value:e.formData.case_erp_customergather_f_FinallyDate,callback:function(t){e.$set(e.formData,"case_erp_customergather_f_FinallyDate",t)},expression:"formData.case_erp_customergather_f_FinallyDate"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_customergather_f_Principal")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("合同负责人"),prop:"case_erp_customergather_f_Principal"}},[r("l-user-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_customergather_f_Principal",e.isReadOnly)},model:{value:e.formData.case_erp_customergather_f_Principal,callback:function(t){e.$set(e.formData,"case_erp_customergather_f_Principal",t)},expression:"formData.case_erp_customergather_f_Principal"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_customergather_f_Title")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("合同标题"),prop:"case_erp_customergather_f_Title"}},[r("el-input",{attrs:{disabled:!e.lr_formEditAuth("case_erp_customergather_f_Title",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_customergather_f_Title,callback:function(t){e.$set(e.formData,"case_erp_customergather_f_Title",t)},expression:"formData.case_erp_customergather_f_Title"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_customergather_f_File")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("合同附件"),prop:"case_erp_customergather_f_File"}},[r("l-upload",{attrs:{drag:"",maxSize:"10",sizeType:"MB",limit:1,showFileList:"uploadTheme1",disabled:!e.lr_formEditAuth("case_erp_customergather_f_File",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_customergather_f_File,callback:function(t){e.$set(e.formData,"case_erp_customergather_f_File",t)},expression:"formData.case_erp_customergather_f_File"}})],1)],1):e._e()],1)])],1)],1)],1)])],1)},s=[],_=(r("96cf"),r("1da1")),o=window.$api.erpcase.customerGather,c={props:{isReadOnly:{type:Boolean,default:!1}},data:function(){return{moduleCode:"ERP_CustomerReturn",activeName:"tab0",formData:{case_erp_customergather_f_SaleId:"",case_erp_customergather_f_Name:"",case_erp_customergather_f_WaitAmount:"",case_erp_customergather_f_ReceivedDate:"",case_erp_customergather_f_FinallyDate:"",case_erp_customergather_f_Principal:"",case_erp_customergather_f_Title:"",case_erp_customergather_f_File:""},rules:{case_erp_customergather_f_Name:[{required:!0,message:"请选择客户名称"}],case_erp_customergather_f_SaleId:[{required:!0,message:"请选择销售订单"}],case_erp_customergather_f_WaitAmount:[{required:!0,message:"请输入计划回款金额"}],case_erp_customergather_f_FinallyDate:[{required:!0,message:"请选择计划回款日期"}],case_erp_customergather_f_ReceivedDate:[{required:!0,message:"请选择计划回款日期"}]}}},computed:{case_erp_customergather_f_NameOptions:function(){var e=this.lr_DataSource("ERP_Customers");return this.lr_DataSourceOptions(e,"f_name","f_name")},case_erp_customergather_f_SaleIdOptions:function(){var e=this.lr_DataSource("ERP_SaleList");return this.lr_DataSourceOptions(e,"f_id","f_theme")}},methods:{changeSale:function(e){this.formData.case_erp_customergather_f_WaitAmount=e.f_amountsum},resetForm:function(){this.$formClear(this.$refs.form),this.activeName="tab0"},validateForm:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$formValidateWraper(e.$refs.form);case 2:if(t.sent){t.next=4;break}return t.abrupt("return",!1);case 4:return t.abrupt("return",!0);case 5:case"end":return t.stop()}}),t)})))()},setForm:function(e){this.$setFormData(this.formData,e,"case_erp_customergather")},getForm:function(){var e={};return e.caseErpCustomergatherEntity=this.$getFormData(this.formData,"case_erp_customergather"),e},loadFormData:function(e){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.keyValue,r.next=3,t.$awaitWraper(o.get(a));case 3:if(s=r.sent,!s){r.next=9;break}return t.setForm(s),r.abrupt("return",!0);case 9:return r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r)})))()},saveForm:function(e){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function r(){var a,s,_;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=e.keyValue,s=e.isEdit,_=t.getForm(),!s){r.next=8;break}return r.next=5,t.$awaitWraper(o.update(a,_.caseErpCustomergatherEntity));case 5:return r.abrupt("return",r.sent);case 8:return _.caseErpCustomergatherEntity.f_Id=a,_.caseErpCustomergatherEntity.f_AlreadyAmount=0,_.caseErpCustomergatherEntity.f_UnpaidAmount=_.caseErpCustomergatherEntity.f_WaitAmount,r.next=13,t.$awaitWraper(o.add(_.caseErpCustomergatherEntity));case 13:return r.abrupt("return",r.sent);case 14:case"end":return r.stop()}}),r)})))()}}},l=c,m=r("2877"),i=Object(m["a"])(l,a,s,!1,null,null,null);t["default"]=i.exports}}]);