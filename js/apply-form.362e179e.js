(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apply-form"],{"694b":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"l-rblock learun-el-form-left",staticStyle:{padding:"16px",overflow:"hidden auto"}},[t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,size:"mini",labelPosition:"left",labelWidth:"80px"}},[t("div",{staticClass:"l-auto-window only-tabs"},[t("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[t("el-tab-pane",{staticClass:"l-tabs-container",attrs:{label:e.$t("主表信息"),name:"tab0"}},[t("el-row",{attrs:{gutter:78}},[t("div",{staticClass:"l-rblock"},[t("el-col",{attrs:{span:24}},[t("div",{staticClass:"learun-form-title"},[e._v("基础信息")])]),e.lr_formLookAuth("case_erp_apply_f_Number")?t("el-col",{staticStyle:{"padding-right":"0"},attrs:{span:9}},[t("el-form-item",{attrs:{label:e.$t("申请单号"),prop:"case_erp_apply_f_Number"}},[0==parseInt(e.formData.case_erp_apply_f_IsSysNum)?t("l-code",{attrs:{size:"mini",code:"erp_apply_num"},model:{value:e.formData.case_erp_apply_f_Number,callback:function(a){e.$set(e.formData,"case_erp_apply_f_Number",a)},expression:"formData.case_erp_apply_f_Number"}}):t("el-input",{attrs:{disabled:!e.lr_formEditAuth("case_erp_apply_f_Number",e.isReadOnly||e.isEdit)},model:{value:e.formData.case_erp_apply_f_Number,callback:function(a){e.$set(e.formData,"case_erp_apply_f_Number",a)},expression:"formData.case_erp_apply_f_Number"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_apply_f_IsSysNum")?t("el-col",{staticStyle:{"padding-left":"4px"},attrs:{span:3}},[t("el-form-item",{attrs:{labelWidth:"0",prop:"case_erp_apply_f_IsSysNum"}},[t("l-checkbox",{attrs:{disabled:!e.lr_formEditAuth("case_erp_apply_f_IsSysNum",e.isReadOnly||e.isEdit),options:e.case_erp_apply_f_IsSysNumOptions},on:{change:e.handleCodeTypeChange},model:{value:e.formData.case_erp_apply_f_IsSysNum,callback:function(a){e.$set(e.formData,"case_erp_apply_f_IsSysNum",a)},expression:"formData.case_erp_apply_f_IsSysNum"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_apply_f_Theme")?t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:e.$t("申请主题"),prop:"case_erp_apply_f_Theme"}},[t("el-input",{attrs:{disabled:!e.lr_formEditAuth("case_erp_apply_f_Theme",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_apply_f_Theme,callback:function(a){e.$set(e.formData,"case_erp_apply_f_Theme",a)},expression:"formData.case_erp_apply_f_Theme"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_apply_f_ApplyDate")?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:e.$t("申请日期"),prop:"case_erp_apply_f_ApplyDate"}},[t("l-date",{attrs:{disabled:!e.lr_formEditAuth("case_erp_apply_f_ApplyDate",e.isReadOnly),readonly:!1,format:"yyyy-MM-dd",dateType:"date",clearable:!0,placeholder:e.$t("请选择")},model:{value:e.formData.case_erp_apply_f_ApplyDate,callback:function(a){e.$set(e.formData,"case_erp_apply_f_ApplyDate",a)},expression:"formData.case_erp_apply_f_ApplyDate"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_apply_f_ApplyDep")?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:e.$t("申请部门"),prop:"case_erp_apply_f_ApplyDep"}},[t("l-department-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_apply_f_ApplyDep",e.isReadOnly)},model:{value:e.formData.case_erp_apply_f_ApplyDep,callback:function(a){e.$set(e.formData,"case_erp_apply_f_ApplyDep",a)},expression:"formData.case_erp_apply_f_ApplyDep"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_apply_f_ApplyPerson")?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:e.$t("申请人员"),prop:"case_erp_apply_f_ApplyPerson"}},[t("l-user-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_apply_f_ApplyPerson",e.isReadOnly),isDepartment:"",department:e.formData.case_erp_apply_f_ApplyDep},model:{value:e.formData.case_erp_apply_f_ApplyPerson,callback:function(a){e.$set(e.formData,"case_erp_apply_f_ApplyPerson",a)},expression:"formData.case_erp_apply_f_ApplyPerson"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_apply_f_RelatedProject")?t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:e.$t("关联项目"),prop:"case_erp_apply_f_RelatedProject"}},[t("l-select",{attrs:{disabled:!e.lr_formEditAuth("case_erp_apply_f_RelatedProject",e.isReadOnly),options:e.case_erp_apply_f_RelatedProjectOptions},model:{value:e.formData.case_erp_apply_f_RelatedProject,callback:function(a){e.$set(e.formData,"case_erp_apply_f_RelatedProject",a)},expression:"formData.case_erp_apply_f_RelatedProject"}})],1)],1):e._e(),e.lr_formLookAuth("case_erp_apply_f_Description")?t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:e.$t("备注"),prop:"case_erp_apply_f_Description"}},[t("el-input",{attrs:{type:"textarea",disabled:!e.lr_formEditAuth("case_erp_apply_f_Description",e.isReadOnly),placeholder:e.$t("请输入")},model:{value:e.formData.case_erp_apply_f_Description,callback:function(a){e.$set(e.formData,"case_erp_apply_f_Description",a)},expression:"formData.case_erp_apply_f_Description"}})],1)],1):e._e(),t("el-col",{attrs:{span:12}},[t("div",{staticClass:"learun-form-title"},[e._v(e._s(e.$t("物品明细")))])]),e.isReadOnly?e._e():t("el-col",{attrs:{span:12}},[t("div",{staticStyle:{"text-align":"right"}},[t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.handleCase_erp_saledetailAddRow}},[e._v(e._s(e.$t("添加")))]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:e.deleteRows}},[e._v(e._s(e.$t("移除")))])],1)]),e.lr_formLookAuth("1670481739858_99913")?t("el-col",{attrs:{span:24}},[t("l-edit-table",{ref:"mainTable",attrs:{columns:e.lr_formTableAuth("case_erp_applydetail",e.case_erp_apply_columns),isMultiSelect:!e.isReadOnly,isAddBtn:!1,dataSource:e.case_erp_apply_data,rowKey:"f_Id",isRead:e.isReadOnly,summaryList:[{label:"总量",prop:"f_Count",decimals:0},{label:"总金额",prop:"f_Amount"}],showSummary2:""},on:{deleteRow:e.deleteRow},scopedSlots:e._u([{key:"f_Price",fn:function(a){return[t("el-input",{attrs:{size:"mini",disabled:e.isReadOnly},on:{input:function(t){return e.handleRowChange(a.row)}},model:{value:a.row.f_Price,callback:function(t){e.$set(a.row,"f_Price",t)},expression:"scope.row.f_Price"}})]}},{key:"f_Count",fn:function(a){return[t("el-input-number",{attrs:{controlsPosition:"right",size:"mini",min:0,disabled:e.isReadOnly},on:{change:function(t){return e.handleRowChange(a.row)}},model:{value:a.row.f_Count,callback:function(t){e.$set(a.row,"f_Count",t)},expression:"scope.row.f_Count"}})]}},{key:"f_Amount",fn:function(a){return[t("el-input",{attrs:{size:"mini",disabled:""},model:{value:a.row.f_Amount,callback:function(t){e.$set(a.row,"f_Amount",t)},expression:"scope.row.f_Amount"}})]}},{key:"f_PayDate",fn:function(a){return[t("l-date",{attrs:{readonly:!1,format:"yyyy-MM-dd",dateType:"date",clearable:!0,size:"mini",disabled:e.isReadOnly},model:{value:a.row.f_PayDate,callback:function(t){e.$set(a.row,"f_PayDate",t)},expression:"scope.row.f_PayDate"}})]}},{key:"f_Purpose",fn:function(a){return[t("el-input",{attrs:{size:"mini",disabled:e.isReadOnly},model:{value:a.row.f_Purpose,callback:function(t){e.$set(a.row,"f_Purpose",t)},expression:"scope.row.f_Purpose"}})]}}],null,!1,4233407395)})],1):e._e(),!e.isReadOnly||e.fileCount>0?t("el-col",{attrs:{span:24}},[t("div",{staticClass:"learun-form-title mt-8"},[e._v(" 附件"),e.fileCount>0?t("span",[e._v("("+e._s(e.fileCount)+")")]):e._e()])]):e._e(),e.lr_formLookAuth("case_erp_apply_f_File")?t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{prop:"case_erp_apply_f_File",labelWidth:"0"}},[t("l-upload",{attrs:{drag:"",maxSize:"10",sizeType:"MB",limit:3,showFileList:"uploadTheme1",disabled:!e.lr_formEditAuth("case_erp_apply_f_File",e.isReadOnly)},on:{load:e.fileLoad,success:e.fileLoad,remove:e.fileLoad},model:{value:e.formData.case_erp_apply_f_File,callback:function(a){e.$set(e.formData,"case_erp_apply_f_File",a)},expression:"formData.case_erp_apply_f_File"}})],1)],1):e._e()],1)])],1)],1)],1)]),t("l-dialog",{attrs:{visible:e.formVisible,height:800,width:1e3},on:{"update:visible":function(a){e.formVisible=a},ok:e.handleMaterialAdd,closed:e.handleMaterialClosed}},[t("l-choose-material",{ref:"choseForm"})],1)],1)},p=[],l=(t("c740"),t("a434"),t("b680"),t("159b"),t("96cf"),t("1da1")),s=window.$api.erpcase.apply,_={props:{isReadOnly:{type:Boolean,default:!1}},data:function(){return{formVisible:!1,moduleCode:"ERP_PurchaseApplys",activeName:"tab0",formData:{case_erp_apply_f_Number:"",case_erp_apply_f_IsSysNum:0,case_erp_apply_f_Theme:"",case_erp_apply_f_ApplyDate:"",case_erp_apply_f_ApplyDep:"",case_erp_apply_f_ApplyPerson:"",case_erp_apply_f_RelatedProject:"",case_erp_apply_f_Description:"",case_erp_apply_f_File:""},case_erp_apply_columns:[{prop:"f_Number",label:"物料编码",width:100},{prop:"f_Name",label:"物料名称",width:140},{prop:"f_Model",label:"规格型号",width:80},{prop:"f_Unit",label:"单位",width:64,dataType:"dataSource",dataCode:"ERP_Unit",valueKey:"f_id",labelKey:"f_name"},{prop:"f_Price",label:"预计单价",patterns:[{msg:"请输入数字",reg:"/^-?[0-9]+$/"}],width:80},{prop:"f_Count",required:!0,label:"申请数量",width:100},{prop:"f_Amount",label:"预计金额",width:80},{prop:"f_PayDate",label:"交付日期",width:156},{prop:"f_Purpose",label:"用途"}],case_erp_apply_data:[],rules:{case_erp_apply_f_Number:[{required:!0,message:"请输入"}],case_erp_apply_f_Theme:[{required:!0,message:"请输入"}],case_erp_apply_f_ApplyDate:[{required:!0,message:"请选择"}]},fileCount:0,isEdit:!1}},computed:{case_erp_apply_f_IsSysNumOptions:function(){return[{value:"0",label:"用系统编号"}]},case_erp_apply_f_RelatedProjectOptions:function(){return this.lr_loadDataItem("140"),this.lr_dataItemOptions(this.lr_dataItem["140"])}},methods:{handleCase_erp_saledetailAddRow:function(){this.formVisible=!0},deleteRow:function(e){var a=e.index;this.case_erp_apply_data.splice(a,1)},deleteRows:function(){var e=this,a=this.$refs.mainTable.getSelected();console.log(a.length,a,"deleteRows"),a.forEach((function(a){var t=a.f_Id,r=e.case_erp_apply_data.findIndex((function(e){return e.f_Id==t}));console.log(r,"deleteRows1"),e.case_erp_apply_data.splice(r,1)})),this.$refs.mainTable.reset()},handleMaterialAdd:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var t,r,p;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$refs.choseForm.getSelectData();case 2:for(r in t=a.sent,t)p={},p.f_Id=e.$uuid(),p.f_Number=t[r].f_Number,p.f_Name=t[r].f_Name,p.f_Model=t[r].f_Model,p.f_Unit=t[r].f_Unit,p.f_PayDate="",p.f_Description="",p.f_Amount=0,e.case_erp_apply_data.push(p);e.formVisible=!1;case 5:case"end":return a.stop()}}),a)})))()},handleMaterialClosed:function(){this.$refs.choseForm.resetForm()},handleRowChange:function(e){e.f_Price&&e.f_Count?e.f_Amount=(parseFloat(e.f_Price)*e.f_Count).toFixed(2):e.f_Amount=0},handleCodeTypeChange:function(){var e=this;this.formData.case_erp_apply_f_Number="",0!=parseInt(this.formData.case_erp_apply_f_IsSysNum)?this.rules.case_erp_apply_f_Number.push({validator:this.lr_existDbFiled,fieldName:"f_Number",keyValue:function(){return e.formData.case_erp_apply_f_Id},tableName:"case_erp_apply",keyName:"f_Id",trigger:"null"}):(this.formData.case_erp_apply_f_IsSysNum=1,this.rules.case_erp_apply_f_Number.splice(1,1))},fileLoad:function(e){var a=e.list;this.fileCount=a.length},resetForm:function(){this.case_erp_apply_data=[],this.formData.case_erp_apply_f_Id="",this.$formClear(this.$refs.form),this.activeName="tab0",this.fileCount=0,this.isEdit=!1},validateForm:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$formValidateWraper(e.$refs.form);case 2:if(a.sent){a.next=4;break}return a.abrupt("return",!1);case 4:if(0!=e.case_erp_apply_data.length){a.next=7;break}return e.$message({type:"error",message:e.$t("请添加物料!")}),a.abrupt("return",!1);case 7:if(e.$refs.mainTable.validate()){a.next=9;break}return a.abrupt("return",!1);case 9:return a.abrupt("return",!0);case 10:case"end":return a.stop()}}),a)})))()},setForm:function(e){this.$setFormData(this.formData,e.caseErpApplyEntity,"case_erp_apply"),this.case_erp_apply_data=e.caseErpApplydetailList,this.isEdit=!0},getForm:function(){var e={};return e.caseErpApplyEntity=this.$getFormData(this.formData,"case_erp_apply"),e.caseErpApplydetailList=this.case_erp_apply_data,e},loadFormData:function(e){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var r,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.keyValue,t.next=3,a.$awaitWraper(s.get(r));case 3:if(p=t.sent,!p){t.next=9;break}return a.setForm(p),t.abrupt("return",!0);case 9:return t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})))()},saveForm:function(e){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var r,p,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.keyValue,p=e.isEdit,l=a.getForm(),!p){t.next=8;break}return t.next=5,a.$awaitWraper(s.update(r,l));case 5:return t.abrupt("return",t.sent);case 8:return l.caseErpApplyEntity.f_Id=r,l.caseErpApplyEntity.f_SaveState=r,t.next=12,a.$awaitWraper(s.add(l));case 12:return t.abrupt("return",t.sent);case 13:case"end":return t.stop()}}),t)})))()}}},o=_,i=t("2877"),n=Object(i["a"])(o,r,p,!1,null,null,null);a["default"]=n.exports}}]);