(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-department-index"],{1283:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.lr_loadPage?e._e():a("l-layout",{directives:[{name:"loading",rawName:"v-loading",value:e.syncLoading,expression:"syncLoading"}],staticClass:"l-tab-page",attrs:{left:240,"element-loading-text":"拼命同步中..."},scopedSlots:e._u([{key:"left",fn:function(){return[a("l-panel",{staticStyle:{"padding-right":"0"},attrs:{title:e.$t("公司信息")}},[a("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],ref:"mytree",staticClass:"learun-tree",attrs:{"node-key":"value",data:e.lr_companyTree,"default-expand-all":"","expand-on-click-node":!1,"current-node-key":e.companyId},on:{"node-click":e.handleNodeClick},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.node;return a("span",{staticClass:"lr-tree-node"},[a("i",{staticClass:"learun-icon-co"}),e._v(" "+e._s(e.$t(r.label))+" ")])}}],null,!1,2650579699)})],1)]},proxy:!0}],null,!1,221647670)},[a("l-panel",{staticStyle:{"padding-left":"0"},scopedSlots:e._u([{key:"toolLeft",fn:function(){return[a("div",{staticClass:"l-panel--item"},[a("el-input",{attrs:{placeholder:e.$t("请输入关键字"),size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.hanleSearch.apply(null,arguments)}},model:{value:e.searchWord,callback:function(t){e.searchWord=t},expression:"searchWord"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.hanleSearch},slot:"append"})],1)],1)]},proxy:!0},{key:"toolRight",fn:function(){return[a("l-tool-btns",{on:{click:function(t){return e.handleAdd()}}},[e.lr_hasPageAuth("Sync","buttons")?a("el-button-group"):e._e(),a("l-excel-btns")],1)]},proxy:!0}],null,!1,2999662461)},[a("l-table",{attrs:{columns:e.lr_getPageColumns(e.columns),dataSource:e.tableData,loading:e.loading,isTree:"",rowKey:"f_DepartmentId",pidKey:"f_ParentId"},scopedSlots:e._u([{key:"f_EnabledMark",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return e.handleEnableChange(t.row)}},model:{value:t.row.f_EnabledMark,callback:function(a){e.$set(t.row,"f_EnabledMark",a)},expression:"scope.row.f_EnabledMark"}})]}}],null,!1,2974089236)},[a("l-table-btns",{attrs:{btns:e.tableBtns},on:{click:e.lr_handleTableBtnClick}})],1)],1),a("l-dialog",{attrs:{height:480,title:e.formTitle,visible:e.formVisible},on:{"update:visible":function(t){e.formVisible=t},ok:e.handleSave,close:e.handleCloseForm,opened:e.handleOpenedForm}},[a("my-form",{ref:"form"})],1),a("l-dialog",{attrs:{title:e.$t(e.syncTitle),visible:e.syncVisible,height:150,width:400},on:{"update:visible":function(t){e.syncVisible=t},ok:e.handleSync}},[a("div",{staticClass:"l-from-body"},[a("el-form",{ref:"syncForm",attrs:{size:"small","label-width":"100px"}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("截止时间"),prop:"startTime"}},[a("l-date",{attrs:{format:"yyyy-MM-dd HH:mm:ss",dateType:"datetime",clearable:!0,placeholder:e.$t("请选择")},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}})],1)],1)],1)],1)])],1)},n=[],l=(a("4de4"),a("96cf"),a("1da1")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"l-rblock l-form-viewer",staticStyle:{padding:"8px"}},[a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,size:"mini","label-width":"100px"}},[a("div",{staticClass:"l-auto-window "},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[e.lr_hasPageAuth("tab0")?a("el-tab-pane",{staticClass:"l-tabs-container",attrs:{label:e.$t("基础信息"),name:"tab0"}},[a("el-row",{attrs:{gutter:0}},[a("div",{staticClass:"l-rblock"},[e.lr_formLookAuth("f_FullName")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("名称"),prop:"f_FullName"}},[a("el-input",{attrs:{disabled:!e.lr_formEditAuth("f_FullName",e.isReadOnly)},model:{value:e.formData.f_FullName,callback:function(t){e.$set(e.formData,"f_FullName",t)},expression:"formData.f_FullName"}})],1)],1):e._e(),e.lr_formLookAuth("f_EnCode")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("编码"),prop:"f_EnCode"}},[a("el-input",{attrs:{disabled:!e.lr_formEditAuth("f_EnCode",e.isReadOnly)},model:{value:e.formData.f_EnCode,callback:function(t){e.$set(e.formData,"f_EnCode",t)},expression:"formData.f_EnCode"}})],1)],1):e._e(),e.lr_formLookAuth("f_ShortName")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("简称"),prop:"f_ShortName"}},[a("el-input",{attrs:{disabled:!e.lr_formEditAuth("f_ShortName",e.isReadOnly)},model:{value:e.formData.f_ShortName,callback:function(t){e.$set(e.formData,"f_ShortName",t)},expression:"formData.f_ShortName"}})],1)],1):e._e(),e.lr_formLookAuth("f_Nature")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("性质"),prop:"f_Nature"}},[a("l-select",{attrs:{disabled:!e.lr_formEditAuth("f_Nature",e.isReadOnly),options:e.lr_dataItem["DepartmentNature"],labelKey:"f_ItemName",valueKey:"f_ItemValue"},model:{value:e.formData.f_Nature,callback:function(t){e.$set(e.formData,"f_Nature",t)},expression:"formData.f_Nature"}})],1)],1):e._e(),e.lr_formLookAuth("f_ParentId")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("上级"),prop:"f_ParentId"}},[a("l-tree-select",{attrs:{disabled:!e.lr_formEditAuth("f_ParentId",e.isReadOnly),options:e.departmentTree},model:{value:e.formData.f_ParentId,callback:function(t){e.$set(e.formData,"f_ParentId",t)},expression:"formData.f_ParentId"}})],1)],1):e._e(),e.lr_formLookAuth("f_Manager")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("负责人"),prop:"f_Manager"}},[a("l-user-select",{attrs:{disabled:!e.lr_formEditAuth("f_Manager",e.isReadOnly)},model:{value:e.formData.f_Manager,callback:function(t){e.$set(e.formData,"f_Manager",t)},expression:"formData.f_Manager"}})],1)],1):e._e(),e.lr_formLookAuth("f_OuterPhone")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("电话"),prop:"f_OuterPhone"}},[a("el-input",{attrs:{disabled:!e.lr_formEditAuth("f_OuterPhone",e.isReadOnly)},model:{value:e.formData.f_OuterPhone,callback:function(t){e.$set(e.formData,"f_OuterPhone",t)},expression:"formData.f_OuterPhone"}})],1)],1):e._e(),e.lr_formLookAuth("f_InnerPhone")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("分机号"),prop:"f_InnerPhone"}},[a("el-input",{attrs:{disabled:!e.lr_formEditAuth("f_InnerPhone",e.isReadOnly)},model:{value:e.formData.f_InnerPhone,callback:function(t){e.$set(e.formData,"f_InnerPhone",t)},expression:"formData.f_InnerPhone"}})],1)],1):e._e(),e.lr_formLookAuth("f_Email")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("邮箱"),prop:"f_Email"}},[a("el-input",{attrs:{disabled:!e.lr_formEditAuth("f_Email",e.isReadOnly)},model:{value:e.formData.f_Email,callback:function(t){e.$set(e.formData,"f_Email",t)},expression:"formData.f_Email"}})],1)],1):e._e(),e.lr_formLookAuth("f_Fax")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("传真"),prop:"f_Fax"}},[a("el-input",{attrs:{disabled:!e.lr_formEditAuth("f_Fax",e.isReadOnly)},model:{value:e.formData.f_Fax,callback:function(t){e.$set(e.formData,"f_Fax",t)},expression:"formData.f_Fax"}})],1)],1):e._e(),e.lr_formLookAuth("f_SortCode")?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("排序"),prop:"f_SortCode"}},[a("el-input",{attrs:{disabled:!e.lr_formEditAuth("f_SortCode",e.isReadOnly)},model:{value:e.formData.f_SortCode,callback:function(t){e.$set(e.formData,"f_SortCode",t)},expression:"formData.f_SortCode"}})],1)],1):e._e(),e.lr_formLookAuth("f_Description")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("说明"),prop:"f_Description"}},[a("el-input",{attrs:{disabled:!e.lr_formEditAuth("f_Description",e.isReadOnly),type:"textarea"},model:{value:e.formData.f_Description,callback:function(t){e.$set(e.formData,"f_Description",t)},expression:"formData.f_Description"}})],1)],1):e._e()],1)])],1):e._e(),e.lr_hasPageAuth("tab1")?a("el-tab-pane",{staticClass:"l-tabs-container",attrs:{label:e.$t("人事信息"),name:"tab1"}},[a("el-row",{attrs:{gutter:0}},[a("div",{staticClass:"l-rblock"},[e.lr_formLookAuth("f_ManagerId")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("行政正职领导"),prop:"f_ManagerId"}},[a("l-user-select",{attrs:{disabled:!e.lr_formEditAuth("f_ManagerId",e.isReadOnly)},model:{value:e.formData.f_ManagerId,callback:function(t){e.$set(e.formData,"f_ManagerId",t)},expression:"formData.f_ManagerId"}})],1)],1):e._e(),e.lr_formLookAuth("f_PartyManagerId")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("党委正职领导"),prop:"f_PartyManagerId"}},[a("l-user-select",{attrs:{disabled:!e.lr_formEditAuth("f_PartyManagerId",e.isReadOnly)},model:{value:e.formData.f_PartyManagerId,callback:function(t){e.$set(e.formData,"f_PartyManagerId",t)},expression:"formData.f_PartyManagerId"}})],1)],1):e._e(),e.lr_formLookAuth("f_ManagerIds")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("部门领导"),prop:"f_ManagerIds"}},[a("l-user-select",{attrs:{disabled:!e.lr_formEditAuth("f_ManagerIds",e.isReadOnly),multiple:""},model:{value:e.formData.f_ManagerIds,callback:function(t){e.$set(e.formData,"f_ManagerIds",t)},expression:"formData.f_ManagerIds"}})],1)],1):e._e(),e.lr_formLookAuth("f_LeaderIds")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("上级分管领导"),prop:"f_LeaderIds"}},[a("l-user-select",{attrs:{disabled:!e.lr_formEditAuth("f_LeaderIds",e.isReadOnly),multiple:""},model:{value:e.formData.f_LeaderIds,callback:function(t){e.$set(e.formData,"f_LeaderIds",t)},expression:"formData.f_LeaderIds"}})],1)],1):e._e(),e.lr_formLookAuth("f_DeptTag")?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("部门标签"),prop:"f_DeptTag"}},[a("l-select",{attrs:{disabled:!e.lr_formEditAuth("f_DeptTag",e.isReadOnly),multiple:!0,options:e.f_DeptTagOptions},model:{value:e.formData.f_DeptTag,callback:function(t){e.$set(e.formData,"f_DeptTag",t)},expression:"formData.f_DeptTag"}})],1)],1):e._e()],1)])],1):e._e()],1)],1)])],1)},s=[],i={props:{isReadOnly:{type:Boolean,default:!1}},data:function(){var e=this;return{formData:{f_CompanyId:"",f_FullName:"",f_ShortName:"",f_EnCode:"",f_Nature:"",f_ParentId:"0",f_Manager:"",f_OuterPhone:"",f_InnerPhone:"",f_Email:"",f_Fax:"",f_Description:"",f_SortCode:99,f_ManagerId:"",f_PartyManagerId:"",f_ManagerIds:"",f_LeaderIds:"",f_DeptTa:""},rules:{f_FullName:[{required:!0,message:this.$t("请输入部门名称")}],f_EnCode:[{required:!0,message:this.$t("请输入部门编号")},{pattern:/^[-+]?\d+$/,message:this.$t("部门编号需要为数字")},{validator:this.lr_existDbFiled,keyValue:function(){return e.formData.f_DepartmentId},tableName:"lr_base_dept",keyName:"f_DepartmentId",trigger:"null"}]}}},computed:{activeName:{get:function(){return"tab0"},set:function(){var e=this,t=["tab0","tab1"].filter((function(t){return e.lr_hasPageAuth(t)}));return t.length>0?t[0].value:""}},departmentTree:function(){return this.$toTree(this.lr_departments[this.formData.f_CompanyId]||[],"f_DepartmentId","f_ParentId","f_DepartmentId","f_FullName",[this.formData.f_DepartmentId])},f_DeptTagOptions:function(){return this.lr_dataItemOptions(this.lr_dataItem["DeptTagsManage"])}},created:function(){this.lr_loadDataItem("DepartmentNature"),this.lr_loadDataItem("DeptTagsManage")},methods:{resetForm:function(){this.formData.f_DepartmentId="",this.activeName="tab0",this.$refs.form&&this.$refs.form.resetFields()},validateForm:function(e){this.$refs.form.validate((function(t){t&&e()}))},setForm:function(e){this.formData=this.$deepClone(e)},getForm:function(){return this.$deepClone(this.formData)}}},f=i,d=a("2877"),m=Object(d["a"])(f,o,s,!1,null,null,null),c=m.exports,u=window.$api.organization.department,p={components:{MyForm:c},data:function(){return{lr_isPage:!0,searchWord:"",searchTableData:null,loading:!1,columns:[{label:"名称",prop:"f_FullName",minWidth:"150"},{label:"编码",prop:"f_EnCode",width:"100"},{label:"排序",prop:"f_SortCode",width:"80",align:"center"},{label:"负责人",prop:"f_Manager",width:"80",align:"center",dataType:"user"},{label:"电话号",prop:"f_OuterPhone",width:"100"},{label:"分机号",prop:"f_InnerPhone",width:"70",align:"center"}],tableBtns:[{prop:"Edit",label:this.$t("编辑"),width:40},{prop:"Delete",label:this.$t("删除"),width:40}],treeLoading:!1,companyId:"",formVisible:!1,formTitle:"",formEditRow:null,formEdit:!1,syncLoading:!1,syncVisible:!1,syncTitle:this.$t("指定更新截止时间"),startTime:""}},computed:{list:function(){return this.lr_departments[this.companyId]||[]},tableData:function(){return this.loading?[]:this.searchTableData||this.list}},mounted:function(){this.init()},methods:{init:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.lr_loadDataItem("DepartmentNature"),e.treeLoading=!0,t.next=4,e.lr_loadCompanys();case 4:e.lr_companyTree.length>0&&(e.companyId=e.lr_companyTree[0].f_CompanyId,e.$refs["mytree"]&&e.$refs["mytree"].setCurrentKey(e.companyId),e.loadTableData()),e.treeLoading=!1;case 6:case"end":return t.stop()}}),t)})))()},loadTableData:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.lr_loadDepartments(e.companyId,!1);case 3:e.searchWord="",e.searchTableData=null,e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},hanleSearch:function(){var e=this;this.searchWord?this.searchTableData=this.list.filter((function(t){return t.f_FullName.indexOf(e.searchWord)>-1||t.f_EnCode.indexOf(e.searchWord)>-1})):this.searchTableData=null},handleNodeClick:function(e){this.loading=!0,this.companyId=e.f_CompanyId,this.loadTableData()},handleAdd:function(){this.companyId?(this.formEdit=!1,this.showForm("新增部门")):this.$message({type:"warning",message:this.$t("请选择左侧公司!")})},handleEdit:function(e,t){this.formEdit=!0,this.formEditRow=t,this.showForm("编辑部门")},handleDelete:function(e,t){var a=this;this.$confirm(this.$t("此操作将永久删除该数据, 是否继续?"),this.$t("提示"),{confirmButtonText:this.$t("确定"),cancelButtonText:this.$t("取消"),type:"warning"}).then((function(){u.remove(t.f_DepartmentId).then((function(){a.$message({type:"success",message:a.$t("删除成功!")}),a.loadTableData()})).catch((function(){}))})).catch((function(){a.$message({type:"info",message:a.$t("已取消删除")})}))},handleSave:function(e,t){var a=this;this.$refs.form.validateForm((function(){e();var r=a.$refs.form.getForm();a.formEdit?u.update(r.f_DepartmentId,r).then((function(){t(),a.formVisible=!1,a.$message({type:"success",message:a.$t("更新成功!")}),a.loadTableData()})).catch((function(){t()})):u.add(r).then((function(){t(),a.formVisible=!1,a.$message({type:"success",message:a.$t("添加成功!")}),a.loadTableData()})).catch((function(){t()}))}))},handleOpenedForm:function(){if(this.formEdit)this.$refs.form.setForm(this.formEditRow);else{var e=this.$refs.form.getForm();e.f_CompanyId=this.companyId,this.$refs.form.setForm(e)}},handleCloseForm:function(){this.$refs.form.resetForm()},showForm:function(e){this.formTitle=e,this.formVisible=!0},openFrom:function(){this.syncVisible=!0},handleSync:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$confirm(e.$t("此操作将开始同步部门信息, 是否继续?"),e.$t("提示"),{confirmButtonText:e.$t("确定"),cancelButtonText:e.$t("取消"),type:"warning"}).then((function(){e.syncVisible=!1,e.syncLoading=!0,u.syncData(e.startTime).then((function(){e.$message({type:"success",message:e.$t("同步成功!")}),e.loadTableData(),e.syncLoading=!1})).catch((function(){}))})).catch((function(){e.$message({type:"info",message:e.$t("已取消同步")})}));case 1:case"end":return t.stop()}}),t)})))()}}},_=p,h=Object(d["a"])(_,r,n,!1,null,null,null);t["default"]=h.exports}}]);