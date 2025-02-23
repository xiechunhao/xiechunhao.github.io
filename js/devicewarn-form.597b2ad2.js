(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devicewarn-form"],{7895:function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"l-rblock l-form-viewer",staticStyle:{padding:"8px"}},[r("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,size:"mini",labelPosition:"right",labelWidth:"80px"}},[r("div",{staticClass:"l-auto-window only-tabs"},[r("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[r("el-tab-pane",{staticClass:"l-tabs-container",attrs:{label:e.$t("主表信息"),name:"tab0"}},[r("el-row",{attrs:{gutter:0}},[r("div",{staticClass:"l-rblock"},[r("el-col",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("唯一标识(GUID)"),prop:"case_erp_devicewarn_f_Id"}},[r("l-guid",{attrs:{size:"mini"},model:{value:e.formData.case_erp_devicewarn_f_Id,callback:function(a){e.$set(e.formData,"case_erp_devicewarn_f_Id",a)},expression:"formData.case_erp_devicewarn_f_Id"}})],1)],1),e.lr_formLookAuth("case_erp_devicewarn_f_UserId")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("处理人"),prop:"case_erp_devicewarn_f_UserId"}},[r("l-user-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_devicewarn_f_UserId",e.isReadOnly)},model:{value:e.formData.case_erp_devicewarn_f_UserId,callback:function(a){e.$set(e.formData,"case_erp_devicewarn_f_UserId",a)},expression:"formData.case_erp_devicewarn_f_UserId"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_devicewarn_f_Level")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("故障等级"),prop:"case_erp_devicewarn_f_Level"}},[r("l-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_devicewarn_f_Level",e.isReadOnly),options:e.case_erp_devicewarn_f_LevelOptions},model:{value:e.formData.case_erp_devicewarn_f_Level,callback:function(a){e.$set(e.formData,"case_erp_devicewarn_f_Level",a)},expression:"formData.case_erp_devicewarn_f_Level"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_devicewarn_f_Description")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("故障描述"),prop:"case_erp_devicewarn_f_Description"}},[r("el-input",{attrs:{type:"textarea",disabled:!e.lr_formEditAuth("case_erp_devicewarn_f_Description",e.isReadOnly),rows:4,placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_devicewarn_f_Description,callback:function(a){e.$set(e.formData,"case_erp_devicewarn_f_Description",a)},expression:"formData.case_erp_devicewarn_f_Description"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_devicewarn_f_DealWay")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("处理办法"),prop:"case_erp_devicewarn_f_DealWay"}},[r("el-input",{attrs:{type:"textarea",disabled:!e.lr_formEditAuth("case_erp_devicewarn_f_DealWay",e.isReadOnly),rows:4,placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_devicewarn_f_DealWay,callback:function(a){e.$set(e.formData,"case_erp_devicewarn_f_DealWay",a)},expression:"formData.case_erp_devicewarn_f_DealWay"}})],1)],1):e._e(),e.lr_formLookAuth("1670331401078_94069")?r("el-col",{attrs:{span:24}},[r("el-divider",{attrs:{"content-position":"center"}})],1):e._e(),e.lr_formLookAuth("case_erp_devicewarn_f_File")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("附件"),prop:"case_erp_devicewarn_f_File"}},[r("l-upload",{attrs:{listType:"picture-card",disabled:!e.lr_formEditAuth("case_erp_devicewarn_f_File",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_devicewarn_f_File,callback:function(a){e.$set(e.formData,"case_erp_devicewarn_f_File",a)},expression:"formData.case_erp_devicewarn_f_File"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_devicewarn_f_State")?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("选择状态"),prop:"case_erp_devicewarn_f_State"}},[r("l-radio",{attrs:{disabled:!e.lr_formEditAuth("case_erp_devicewarn_f_State",e.isReadOnly),options:e.case_erp_devicewarn_f_StateOptions},model:{value:e.formData.case_erp_devicewarn_f_State,callback:function(a){e.$set(e.formData,"case_erp_devicewarn_f_State",a)},expression:"formData.case_erp_devicewarn_f_State"}})],1)],1):e._e()],1)])],1)],1)],1)])],1)},_=[],s=(r("96cf"),r("1da1")),n=window.$api.erpcase.devicewarn,c={props:{isReadOnly:{type:Boolean,default:!1}},data:function(){return{moduleCode:"ERP_DeviceWarn",activeName:"tab0",formData:{case_erp_devicewarn_f_Id:"",case_erp_devicewarn_f_UserId:"",case_erp_devicewarn_f_Level:"",case_erp_devicewarn_f_Description:"",case_erp_devicewarn_f_DealWay:"",case_erp_devicewarn_f_File:"",case_erp_devicewarn_f_State:"0"},rules:{case_erp_devicewarn_f_UserId:[{required:!0,message:"请选择处理人"}],case_erp_devicewarn_f_State:[{required:!0,message:"请选择选择状态"}],case_erp_devicewarn_f_DealWay:[{required:!0,message:"请填写处理办法"}]}}},computed:{case_erp_devicewarn_f_LevelOptions:function(){return[{value:"0",label:"一级告警"},{value:"1",label:"二级告警"},{value:"2",label:"三级告警"}]},case_erp_devicewarn_f_StateOptions:function(){return[{value:0,label:"已处理"},{value:1,label:"待处理"}]}},mounted:function(){},methods:{resetForm:function(){this.$formClear(this.$refs.form),this.activeName="tab0"},validateForm:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$formValidateWraper(e.$refs.form);case 2:if(a.sent){a.next=4;break}return a.abrupt("return",!1);case 4:return a.abrupt("return",!0);case 5:case"end":return a.stop()}}),a)})))()},setForm:function(e){this.$setFormData(this.formData,e,"case_erp_devicewarn")},getForm:function(){return this.$getFormData(this.formData,"case_erp_devicewarn")},loadFormData:function(e){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t,_;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=e.keyValue,r.next=3,a.$awaitWraper(n.get(t));case 3:if(_=r.sent,!_){r.next=9;break}return a.setForm(_),r.abrupt("return",!0);case 9:return r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r)})))()},saveForm:function(e){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t,_,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t=e.keyValue,_=e.isEdit,s=a.getForm(),!_){r.next=8;break}return r.next=5,a.$awaitWraper(n.update(t,s));case 5:return r.abrupt("return",r.sent);case 8:return s.f_Id=t,r.next=11,a.$awaitWraper(n.add(s));case 11:return r.abrupt("return",r.sent);case 12:case"end":return r.stop()}}),r)})))()}}},i=c,l=r("2877"),o=Object(l["a"])(i,t,_,!1,null,null,null);a["default"]=o.exports}}]);