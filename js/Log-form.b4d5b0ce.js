(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Log-form"],{"01fa":function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"l-rblock l-form-viewer",staticStyle:{padding:"8px"}},[r("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,size:"mini",labelPosition:"right",labelWidth:"80px"}},[r("div",{staticClass:"l-auto-window only-tabs"},[r("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[r("el-tab-pane",{staticClass:"l-tabs-container",attrs:{label:e.$t("主表信息"),name:"tab0"}},[r("el-row",{attrs:{gutter:0}},[r("div",{staticClass:"l-rblock"},[e.lr_formLookAuth("case_erp_log_f_CategoryId")?r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("记录类型"),prop:"case_erp_log_f_CategoryId"}},[r("l-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_log_f_CategoryId",e.isReadOnly),options:e.case_erp_log_f_CategoryIdOptions},model:{value:e.formData.case_erp_log_f_CategoryId,callback:function(a){e.$set(e.formData,"case_erp_log_f_CategoryId",a)},expression:"formData.case_erp_log_f_CategoryId"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_log_f_CreateDate")?r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("操作时间"),prop:"case_erp_log_f_CreateDate"}},[r("l-date",{attrs:{disabled:!e.lr_formEditAuth("case_erp_log_f_CreateDate",e.isReadOnly),readonly:!1,format:"yyyy-MM-dd",dateType:"date",clearable:!0,placeholder:e.$t("请选择")},model:{value:e.formData.case_erp_log_f_CreateDate,callback:function(a){e.$set(e.formData,"case_erp_log_f_CreateDate",a)},expression:"formData.case_erp_log_f_CreateDate"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_log_f_KeyId")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("关联外键"),prop:"case_erp_log_f_KeyId"}},[r("el-input",{attrs:{disabled:!e.lr_formEditAuth("case_erp_log_f_KeyId",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_log_f_KeyId,callback:function(a){e.$set(e.formData,"case_erp_log_f_KeyId",a)},expression:"formData.case_erp_log_f_KeyId"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_log_f_Description")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("记录内容"),prop:"case_erp_log_f_Description"}},[r("el-input",{attrs:{type:"textarea",disabled:!e.lr_formEditAuth("case_erp_log_f_Description",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_log_f_Description,callback:function(a){e.$set(e.formData,"case_erp_log_f_Description",a)},expression:"formData.case_erp_log_f_Description"}})],1)],1):e._e()],1)])],1)],1)],1)])],1)},o=[],s=(r("96cf"),r("1da1")),l=window.$api.erpcase.log,_={props:{isReadOnly:{type:Boolean,default:!1}},data:function(){return{moduleCode:"ERP_Logs",activeName:"tab0",formData:{case_erp_log_f_CategoryId:"",case_erp_log_f_CreateDate:"",case_erp_log_f_KeyId:"",case_erp_log_f_Description:""},rules:{case_erp_log_f_CategoryId:[{required:!0,message:"请选择记录类型"}],case_erp_log_f_CreateDate:[{required:!0,message:"请选择操作时间"}],case_erp_log_f_KeyId:[{required:!0,message:"请输入关联外键"}],case_erp_log_f_Description:[{required:!0,message:"请输入记录内容"}]}}},computed:{case_erp_log_f_CategoryIdOptions:function(){return[{value:"0",label:"客户记录"},{value:"1",label:"物料记录"},{value:"2",label:"采购记录"},{label:"销售记录",value:"3"}]}},methods:{resetForm:function(){this.$formClear(this.$refs.form),this.activeName="tab0"},validateForm:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$formValidateWraper(e.$refs.form);case 2:if(a.sent){a.next=4;break}return a.abrupt("return",!1);case 4:return a.abrupt("return",!0);case 5:case"end":return a.stop()}}),a)})))()},setForm:function(e){this.$setFormData(this.formData,e,"case_erp_log")},getForm:function(){return this.$getFormData(this.formData,"case_erp_log")},loadFormData:function(e){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=e.keyValue,r.next=3,a.$awaitWraper(l.get(t));case 3:if(o=r.sent,!o){r.next=9;break}return a.setForm(o),r.abrupt("return",!0);case 9:return r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r)})))()},saveForm:function(e){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t=e.keyValue,o=e.isEdit,s=a.getForm(),!o){r.next=8;break}return r.next=5,a.$awaitWraper(l.update(t,s));case 5:return r.abrupt("return",r.sent);case 8:return s.f_Id=t,r.next=11,a.$awaitWraper(l.add(s));case 11:return r.abrupt("return",r.sent);case 12:case"end":return r.stop()}}),r)})))()}}},n=_,i=r("2877"),c=Object(i["a"])(n,t,o,!1,null,null,null);a["default"]=c.exports}}]);