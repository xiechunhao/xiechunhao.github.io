(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-transferDemoSearch"],{a490:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("l-layout",{staticClass:"l-tab-page"},[a("l-panel",{attrs:{title:"搜索穿梭框"}},[a("el-form",{ref:"ruleForm",attrs:{model:e.formData,rules:e.rules,size:"mini",labelPosition:"#toolRight",labelWidth:"80px"}},[a("div",{staticClass:"l-auto-window only-tabs"},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{staticClass:"l-tabs-container",attrs:{label:e.$t("新增采购申请单"),name:"tab0"}},[a("el-row",{attrs:{gutter:5}},[a("div",{staticClass:"l-rblock pd-16"},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("单据编码"),prop:"f_PurchaseNo"}},[a("el-input",{attrs:{placeholder:e.$t("请输入")},model:{value:e.formData.f_PurchaseNo,callback:function(t){e.$set(e.formData,"f_PurchaseNo",t)},expression:"formData.f_PurchaseNo"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("主题"),prop:"f_Theme"}},[a("el-input",{attrs:{placeholder:e.$t("请输入")},model:{value:e.formData.f_Theme,callback:function(t){e.$set(e.formData,"f_Theme",t)},expression:"formData.f_Theme"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("采购类别"),prop:"f_PurchaseType"}},[a("l-select",{attrs:{options:e.f_PurchaseTypeOptions},model:{value:e.formData.f_PurchaseType,callback:function(t){e.$set(e.formData,"f_PurchaseType",t)},expression:"formData.f_PurchaseType"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("申请日期"),prop:"f_ApplyDate"}},[a("l-date",{attrs:{format:"yyyy-MM-dd HH:mm:ss",dateType:"datetime",clearable:!0,placeholder:e.$t("请选择")},model:{value:e.formData.f_ApplyDate,callback:function(t){e.$set(e.formData,"f_ApplyDate",t)},expression:"formData.f_ApplyDate"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("申请人"),prop:"f_Appler"}},[a("l-user-select",{model:{value:e.formData.f_Appler,callback:function(t){e.$set(e.formData,"f_Appler",t)},expression:"formData.f_Appler"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("申请单位"),prop:"f_Department"}},[a("l-company-select",{model:{value:e.formData.f_Department,callback:function(t){e.$set(e.formData,"f_Department",t)},expression:"formData.f_Department"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("附件上传"),prop:"f_File"}},[a("l-upload",{model:{value:e.formData.f_File,callback:function(t){e.$set(e.formData,"f_File",t)},expression:"formData.f_File"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("备注信息"),prop:"f_Description"}},[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:e.$t("请输入")},model:{value:e.formData.f_Description,callback:function(t){e.$set(e.formData,"f_Description",t)},expression:"formData.f_Description"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{staticClass:"required",attrs:{label:"参与人员",prop:"f_Person"}},[a("el-transfer",{ref:"myTransfer",attrs:{filterable:"","filter-method":e.filterMethod,"filter-placeholder":"请输入参与人员名称",data:e.transferData},model:{value:e.formData.f_Person,callback:function(t){e.$set(e.formData,"f_Person",t)},expression:"formData.f_Person"}})],1)],1),a("el-col",{staticClass:"bottomButton",attrs:{span:24}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("验证表单")]),a("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置表单")])],1)],1)],1)])],1)],1)],1)])],1)],1)},l=[],s={data:function(){return{activeName:"tab0",formData:{f_PurchaseNo:"",f_Theme:"",f_PurchaseType:"",f_ApplyDate:"",f_Appler:"",f_Department:"",f_File:"",f_Description:"",f_ModifyDate:"",f_ModifyUserName:"",f_Person:[]},rules:{f_PurchaseNo:[{required:!0,message:"请输入单据编码"}],f_Theme:[{required:!0,message:"请输入主题"}],f_PurchaseType:[{required:!0,message:"请选择采购类别"}],f_ApplyDate:[{required:!0,message:"请选择申请日期"}],f_Appler:[{required:!0,message:"请选择申请人"}],f_Department:[{required:!0,message:"请选择申请单位"}]}}},computed:{f_PurchaseTypeOptions:function(){return[{value:"2",label:"新闻类"},{value:"3",label:"产品类"},{value:"4",label:"信息类"}]},transferData:function(){for(var e=[],t=1;t<=15;t++)e.push({key:t,label:"参与人".concat(t),disabled:t%5===0});return e}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;0!=t.formData.f_Person.length?t.$message({type:"success",message:t.$t("表单验证成功!")}):t.$message({type:"warning",message:"请选择参与人员！"})}))},resetForm:function(e){this.$refs[e].resetFields()},filterMethod:function(e,t){return t.label.indexOf(e)>-1}}},o=s,f=a("2877"),n=Object(f["a"])(o,r,l,!1,null,null,null);t["default"]=n.exports}}]);