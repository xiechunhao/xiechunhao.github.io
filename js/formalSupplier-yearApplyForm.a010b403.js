(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["formalSupplier-yearApplyForm"],{a589:function(e,r,a){"use strict";a.r(r);var s=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticStyle:{padding:"8px"}},[a("el-row",{attrs:{gutter:16}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"ptitle"},[e._v(" "+e._s(e.yearName)+e._s(e.$t("年"))+e._s(e.$t("供应商年审"))+" ")]),a("div",{staticClass:"learun-form-title mt-16"},[e._v(e._s(e.$t("基本信息")))]),a("div",{staticClass:"form_block flex flex-center flex-c-between"},[a("div",[e._v(" "+e._s(e.$t("供应商编号："+e.formData.case_erp_supplier_f_Number))+" ")]),a("div",[e._v(" "+e._s(e.$t("供应商名称："+e.formData.case_erp_supplier_f_Name))+" ")]),a("div",[e._v(" "+e._s(e.$t("供应商负责人："+e.formData.case_erp_supplier_f_Person))+" ")]),a("div",[e._v(" "+e._s(e.$t("供应商类型："+e.formData.case_erp_supplier_f_Type))+" ")]),a("div",[e._v(" "+e._s(e.$t("添加人："+e.formData.case_erp_supplier_f_CreateUserName))+" ")]),a("div",[e._v(" "+e._s(e.$t("创建日期："+e.formData.case_erp_supplier_f_CreateDate))+" ")]),a("div",[e._v(" "+e._s(e.$t("经营范围："+e.formData.case_erp_supplier_f_Scope))+" ")]),a("div",[e._v(" "+e._s(e.$t("手机号："+e.formData.case_erp_supplier_f_Phone))+" ")])])]),a("div",{staticStyle:{padding:"0 8px"}},[a("el-form",{ref:"form",staticClass:"learun-el-form-left",attrs:{model:e.yearFormData,rules:e.isReadOnly?{}:e.rules,size:"mini",labelPosition:"left",labelWidth:"100px"}},[a("el-row",{staticClass:"erp-supplier-assess"},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"learun-form-title mt-16"},[e._v(" "+e._s(e.$t("供货能力评估"))+" ")]),a("div",{staticClass:"form_block"},[e.lr_formEditAuth("case_erp_supplierrisk_f_CapacityLevel",e.isReadOnly)?a("el-form-item",{attrs:{label:e.$t("等级选择："),prop:"case_erp_supplierrisk_f_CapacityLevel"}},[a("l-radio",{attrs:{options:e.levelOptions},model:{value:e.yearFormData.case_erp_supplierrisk_f_CapacityLevel,callback:function(r){e.$set(e.yearFormData,"case_erp_supplierrisk_f_CapacityLevel",r)},expression:"yearFormData.case_erp_supplierrisk_f_CapacityLevel"}})],1):a("el-form-item",{attrs:{label:e.$t("等级："),prop:"case_erp_supplierrisk_f_CapacityLevel"}},["0"==e.yearFormData.case_erp_supplierrisk_f_CapacityLevel?a("el-tag",[e._v(e._s(e.$t("优秀")))]):"1"==e.yearFormData.case_erp_supplierrisk_f_CapacityLevel?a("el-tag",{attrs:{type:"success"}},[e._v(e._s(e.$t("良好")))]):"2"==e.yearFormData.case_erp_supplierrisk_f_CapacityLevel?a("el-tag",{attrs:{type:"info"}},[e._v(e._s(e.$t("及格")))]):a("el-tag",{attrs:{type:"danger"}},[e._v(e._s(e.$t("不及格")))])],1),a("el-form-item",{attrs:{label:e.$t("评估理由："),prop:"case_erp_supplierrisk_f_CapacityReason"}},[e.isReadOnly?a("div",[e._v(" "+e._s(e.yearFormData.case_erp_supplierrisk_f_CapacityReason)+" ")]):a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",disabled:!e.lr_formEditAuth("case_erp_supplierrisk_f_CapacityReason",e.isReadOnly),showWordLimit:!1,placeholder:e.$t("请输入")},model:{value:e.yearFormData.case_erp_supplierrisk_f_CapacityReason,callback:function(r){e.$set(e.yearFormData,"case_erp_supplierrisk_f_CapacityReason",r)},expression:"\n                    yearFormData.case_erp_supplierrisk_f_CapacityReason\n                  "}})],1),a("el-form-item",{attrs:{label:e.$t("附件上传："),prop:"case_erp_supplierrisk_f_CapacityFile"}},[e.lr_formLookAuth("case_erp_supplierrisk_f_CapacityFile")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{prop:"case_erp_supplierrisk_f_CapacityFile",labelWidth:"0"}},[a("l-upload",{attrs:{drag:"",maxSize:"10",sizeType:"MB",limit:3,showFileList:"uploadTheme1",disabled:!e.lr_formEditAuth("case_erp_supplierrisk_f_CapacityFile",e.isReadOnly)},model:{value:e.yearFormData.case_erp_supplierrisk_f_CapacityFile,callback:function(r){e.$set(e.yearFormData,"case_erp_supplierrisk_f_CapacityFile",r)},expression:"\n                        yearFormData.case_erp_supplierrisk_f_CapacityFile\n                      "}})],1)],1):e._e()],1)],1)]),a("el-col",{attrs:{span:24}},[a("div",{staticClass:"learun-form-title mt-16"},[e._v(" "+e._s(e.$t("供货质量评估"))+" ")]),a("div",{staticClass:"form_block"},[e.lr_formEditAuth("case_erp_supplierrisk_f_SupplierLevel",e.isReadOnly)?a("el-form-item",{attrs:{label:e.$t("等级选择："),prop:"case_erp_supplierrisk_f_SupplierLevel"}},[a("l-radio",{attrs:{options:e.levelOptions},model:{value:e.yearFormData.case_erp_supplierrisk_f_SupplierLevel,callback:function(r){e.$set(e.yearFormData,"case_erp_supplierrisk_f_SupplierLevel",r)},expression:"yearFormData.case_erp_supplierrisk_f_SupplierLevel"}})],1):a("el-form-item",{attrs:{label:e.$t("等级："),prop:"case_erp_supplierrisk_f_SupplierLevel"}},["0"==e.yearFormData.case_erp_supplierrisk_f_SupplierLevel?a("el-tag",[e._v(e._s(e.$t("优秀")))]):"1"==e.yearFormData.case_erp_supplierrisk_f_SupplierLevel?a("el-tag",{attrs:{type:"success"}},[e._v(e._s(e.$t("良好")))]):"2"==e.yearFormData.case_erp_supplierrisk_f_SupplierLevel?a("el-tag",{attrs:{type:"info"}},[e._v(e._s(e.$t("及格")))]):a("el-tag",{attrs:{type:"danger"}},[e._v(e._s(e.$t("不及格")))])],1),a("el-form-item",{attrs:{label:e.$t("评估理由："),prop:"case_erp_supplierrisk_f_SupplierReason"}},[e.isReadOnly?a("div",[e._v(" "+e._s(e.yearFormData.case_erp_supplierrisk_f_SupplierReason)+" ")]):a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",disabled:!e.lr_formEditAuth("case_erp_supplierrisk_f_SupplierReason",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.yearFormData.case_erp_supplierrisk_f_SupplierReason,callback:function(r){e.$set(e.yearFormData,"case_erp_supplierrisk_f_SupplierReason",r)},expression:"\n                    yearFormData.case_erp_supplierrisk_f_SupplierReason\n                  "}})],1),a("el-form-item",{attrs:{label:e.$t("附件上传："),prop:"case_erp_supplierrisk_f_SupplierFile"}},[a("l-upload",{attrs:{drag:"",maxSize:"10",sizeType:"MB",limit:3,showFileList:"uploadTheme1",disabled:!e.lr_formEditAuth("case_erp_supplierrisk_f_SupplierFile",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.yearFormData.case_erp_supplierrisk_f_SupplierFile,callback:function(r){e.$set(e.yearFormData,"case_erp_supplierrisk_f_SupplierFile",r)},expression:"yearFormData.case_erp_supplierrisk_f_SupplierFile"}})],1)],1)]),a("el-col",{attrs:{span:24}},[a("div",{staticClass:"learun-form-title mt-16"},[e._v(" "+e._s(e.$t("环境与安全评估"))+" ")]),a("div",{staticClass:"form_block"},[e.lr_formEditAuth("case_erp_supplierrisk_f_SafetyLevel",e.isReadOnly)?a("el-form-item",{attrs:{label:e.$t("等级选择："),prop:"case_erp_supplierrisk_f_SafetyLevel"}},[a("l-radio",{attrs:{options:e.levelOptions},model:{value:e.yearFormData.case_erp_supplierrisk_f_SafetyLevel,callback:function(r){e.$set(e.yearFormData,"case_erp_supplierrisk_f_SafetyLevel",r)},expression:"yearFormData.case_erp_supplierrisk_f_SafetyLevel"}})],1):a("el-form-item",{attrs:{label:e.$t("等级："),prop:"case_erp_supplierrisk_f_SafetyLevel"}},["0"==e.yearFormData.case_erp_supplierrisk_f_SafetyLevel?a("el-tag",[e._v(e._s(e.$t("优秀")))]):"1"==e.yearFormData.case_erp_supplierrisk_f_SafetyLevel?a("el-tag",{attrs:{type:"success"}},[e._v(e._s(e.$t("良好")))]):"2"==e.yearFormData.case_erp_supplierrisk_f_SafetyLevel?a("el-tag",{attrs:{type:"info"}},[e._v(e._s(e.$t("及格")))]):a("el-tag",{attrs:{type:"danger"}},[e._v(e._s(e.$t("不及格")))])],1),a("el-form-item",{attrs:{label:e.$t("评估理由："),prop:"case_erp_supplierrisk_f_SafetyReason"}},[e.isReadOnly?a("div",[e._v(" "+e._s(e.yearFormData.case_erp_supplierrisk_f_SafetyReason)+" ")]):a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",disabled:!e.lr_formEditAuth("case_erp_supplierrisk_f_SafetyReason",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.yearFormData.case_erp_supplierrisk_f_SafetyReason,callback:function(r){e.$set(e.yearFormData,"case_erp_supplierrisk_f_SafetyReason",r)},expression:"yearFormData.case_erp_supplierrisk_f_SafetyReason"}})],1),a("el-form-item",{attrs:{label:e.$t("附件上传："),prop:"case_erp_supplierrisk_f_SafetyFile"}},[a("l-upload",{attrs:{drag:"",maxSize:"10",sizeType:"MB",limit:3,showFileList:"uploadTheme1",disabled:!e.lr_formEditAuth("case_erp_supplierrisk_f_SafetyFile",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.yearFormData.case_erp_supplierrisk_f_SafetyFile,callback:function(r){e.$set(e.yearFormData,"case_erp_supplierrisk_f_SafetyFile",r)},expression:"yearFormData.case_erp_supplierrisk_f_SafetyFile"}})],1)],1)]),a("el-col",{attrs:{span:24}},[a("div",{staticClass:"learun-form-title mt-16"},[e._v(" "+e._s(e.$t("最终评估结果"))+" ")]),a("div",{staticClass:"form_block"},[e.lr_formEditAuth("case_erp_supplierrisk_f_FinalState",e.isReadOnly)?a("el-form-item",{attrs:{label:e.$t("等级选择："),prop:"case_erp_supplierrisk_f_FinalState"}},[a("l-radio",{attrs:{options:e.levelOptions},model:{value:e.yearFormData.case_erp_supplierrisk_f_FinalState,callback:function(r){e.$set(e.yearFormData,"case_erp_supplierrisk_f_FinalState",r)},expression:"yearFormData.case_erp_supplierrisk_f_FinalState"}})],1):a("el-form-item",{attrs:{label:e.$t("等级："),prop:"case_erp_supplierrisk_f_FinalState"}},["0"==e.yearFormData.case_erp_supplierrisk_f_FinalState?a("el-tag",[a("i",{staticClass:"el-icon-s-check margin_right_3"}),e._v(e._s(e.$t("优秀"))+" ")]):"1"==e.yearFormData.case_erp_supplierrisk_f_FinalState?a("el-tag",{attrs:{type:"success"}},[a("i",{staticClass:"el-icon-s-check margin_right_3"}),e._v(" "+e._s(e.$t("良好"))+" ")]):"2"==e.yearFormData.case_erp_supplierrisk_f_FinalState?a("el-tag",{attrs:{type:"info"}},[a("i",{staticClass:"el-icon-s-check margin_right_3"}),e._v(" "+e._s(e.$t("及格"))+" ")]):a("el-tag",{attrs:{type:"danger"}},[a("i",{staticClass:"el-icon-s-check margin_right_3"}),e._v(" "+e._s(e.$t("不及格"))+" ")])],1),a("el-form-item",{attrs:{label:e.$t("评估理由："),prop:"case_erp_supplierrisk_f_FinalReason"}},[e.isReadOnly?a("div",[e._v(" "+e._s(e.yearFormData.case_erp_supplierrisk_f_FinalReason)+" ")]):a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",disabled:!e.lr_formEditAuth("case_erp_supplierrisk_f_FinalReason",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.yearFormData.case_erp_supplierrisk_f_FinalReason,callback:function(r){e.$set(e.yearFormData,"case_erp_supplierrisk_f_FinalReason",r)},expression:"yearFormData.case_erp_supplierrisk_f_FinalReason"}})],1)],1)])],1)],1)],1)],1)],1)},t=[],i=(a("96cf"),a("1da1")),p=window.$api.erpcase.supplier,_={props:{isReadOnly:{type:Boolean,default:!1}},data:function(){return{moduleCode:"ERP_FormalSuppliers",formData:{case_erp_supplier_f_Number:"",case_erp_supplier_f_Name:"",case_erp_supplier_f_Person:"",case_erp_supplier_f_Type:"",case_erp_supplier_f_CreateUserName:"",case_erp_supplier_f_CreateDate:"",case_erp_supplier_f_Scope:"",case_erp_supplier_f_Phone:""},yearFormData:{case_erp_supplierrisk_f_CapacityLevel:"",case_erp_supplierrisk_f_CapacityReason:"",case_erp_supplierrisk_f_CapacityFile:"",case_erp_supplierrisk_f_SupplierLevel:"",case_erp_supplierrisk_f_SupplierReason:"",case_erp_supplierrisk_f_SupplierFile:"",case_erp_supplierrisk_f_SafetyLevel:"",case_erp_supplierrisk_f_SafetyReason:"",case_erp_supplierrisk_f_SafetyFile:"",case_erp_supplierrisk_f_FinalState:"",case_erp_supplierrisk_f_FinalReason:""},rules:{case_erp_supplierrisk_f_CapacityLevel:[{required:!0,message:"请选择："}],case_erp_supplierrisk_f_CapacityReason:[{required:!0,message:"请输入："}],case_erp_supplierrisk_f_SupplierLevel:[{required:!0,message:"请选择："}],case_erp_supplierrisk_f_SupplierReason:[{required:!0,message:"请输入："}],case_erp_supplierrisk_f_SafetyLevel:[{required:!0,message:"请选择："}],case_erp_supplierrisk_f_SafetyReason:[{required:!0,message:"请输入："}],case_erp_supplierrisk_f_FinalState:[{required:!0,message:"请选择："}],case_erp_supplierrisk_f_FinalReason:[{required:!0,message:"请输入："}]},id:""}},computed:{levelOptions:function(){return[{label:"优秀",value:"0"},{value:"1",label:"良好"},{value:"2",label:"及格"},{value:"3",label:"不及格"}]},yearName:function(){return this.yearFormData.case_erp_supplierrisk_f_CreateDate?this.lr_dateFormat(this.yearFormData.case_erp_supplierrisk_f_CreateDate,"yyyy"):this.$getDayTime("yyyy")}},methods:{init:function(e){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e){a.next=5;break}return s=e.id,s&&(r.id=s),a.next=5,r.loadSupplierInfo(r.id);case 5:return a.abrupt("return",!1);case 6:case"end":return a.stop()}}),a)})))()},loadSupplierInfo:function(e){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,r.$awaitWraper(p.get(e));case 2:s=a.sent,s&&(s.f_CreateDate=r.$formatDate(s.f_CreateDate,"yyyy-MM-dd"),r.$setFormData(r.formData,s,"case_erp_supplier"));case 4:case"end":return a.stop()}}),a)})))()},resetForm:function(){this.$formClear(this.$refs.form)},validateForm:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$formValidateWraper(e.$refs.form);case 2:if(r.sent){r.next=4;break}return r.abrupt("return",!1);case 4:return r.abrupt("return",!0);case 5:case"end":return r.stop()}}),r)})))()},setForm:function(e){this.$setFormData(this.yearFormData,e,"case_erp_supplierrisk")},getForm:function(){var e=this.$getFormData(this.yearFormData,"case_erp_supplierrisk");return this.id&&(e.f_Type=1,e.f_SupplierId=this.id),e},loadFormData:function(e){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.keyValue,a.next=3,r.$awaitWraper(p.getYear(s));case 3:if(t=a.sent,!t){a.next=12;break}return r.id=t.f_SupplierId,a.next=8,r.loadSupplierInfo(t.f_SupplierId);case 8:return r.setForm(t),a.abrupt("return",!0);case 12:return a.abrupt("return",!1);case 13:case"end":return a.stop()}}),a)})))()},saveForm:function(e){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,t,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(s=e.keyValue,t=e.isEdit,i=r.getForm(),!t){a.next=6;break}return a.abrupt("return",!0);case 6:return i.f_Id=s,a.next=9,r.$awaitWraper(p.addAssess(i));case 9:return a.abrupt("return",a.sent);case 10:case"end":return a.stop()}}),a)})))()}}},l=_,o=a("2877"),u=Object(o["a"])(l,s,t,!1,null,null,null);r["default"]=u.exports}}]);