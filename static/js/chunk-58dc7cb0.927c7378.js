/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-12 23:04:44
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58dc7cb0"],{"4dd1":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close},scopedSlots:e._u([{key:"footer",fn:function(){return[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])]},proxy:!0}])},[t("el-form",{ref:"form",attrs:{"label-width":"80px",model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"父节点",prop:"parentName"}},[t("el-select",{attrs:{disabled:!e.form.parentId,placeholder:"请选择父节点"},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}},[t("el-option",{staticStyle:{height:"auto",padding:"0"},attrs:{label:e.form.parentName,value:e.form.parentId}},[t("el-tree",{ref:"tree",attrs:{data:e.treeData,"default-expand-all":"",props:e.defaultProps},on:{"node-click":e.handleNodeClick}})],1)],1)],1),t("el-form-item",{attrs:{label:"名称",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"排序",prop:"order"}},[t("el-input",{model:{value:e.form.order,callback:function(t){e.$set(e.form,"order",t)},expression:"form.order"}})],1)],1)],1)},s=[],o=a("ffea"),l={name:"DepartmentManagementEdit",data(){return{treeData:[],defaultProps:{children:"children",label:"name"},form:{parentName:"",parentId:""},rules:{parentName:[{required:!0,trigger:"blur",message:"请选择父节点"}],name:[{required:!0,trigger:"blur",message:"请输入名称"}],order:[{required:!0,trigger:"blur",message:"请输入排序"}]},title:"",dialogFormVisible:!1}},created(){this.fetchData()},methods:{async fetchData(){const{data:{list:e}}=await Object(o["getList"])();this.treeData=e},handleNodeClick(e){this.form.parentName=e.name,this.form.parentId=e.id},showEdit(e){e?(this.title="编辑",this.form=Object.assign({},e)):this.title="添加",this.dialogFormVisible=!0},close(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,this.dialogFormVisible=!1},save(){this.$refs["form"].validate(async e=>{if(e){const{msg:e}=await Object(o["doEdit"])(this.form);this.$baseMessage(e,"success","vab-hey-message-success"),this.$emit("fetch-data"),this.close()}})}}},i=l,n=a("829d"),c=Object(n["a"])(i,r,s,!1,null,null,null);t["default"]=c.exports},bf43:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"department-management-container"},[t("vab-query-form",[t("vab-query-form-left-panel",{attrs:{span:12}},[t("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:function(t){return e.handleEdit(t)}}},[e._v(" 添加 ")]),t("el-button",{attrs:{icon:"el-icon-delete",type:"danger"},on:{click:function(t){return e.handleDelete(t)}}},[e._v(" 批量删除 ")])],1),t("vab-query-form-right-panel",{attrs:{span:12}},[t("el-form",{attrs:{inline:!0,model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",[t("el-input",{attrs:{clearable:"",placeholder:"请输入名称"},model:{value:e.queryForm.name,callback:function(t){e.$set(e.queryForm,"name","string"===typeof t?t.trim():t)},expression:"queryForm.name"}})],1),t("el-form-item",[t("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.queryData}},[e._v(" 查询 ")])],1)],1)],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{border:"",data:e.list,"default-expand-all":"","row-key":"id","tree-props":{children:"children"}},on:{"selection-change":e.setSelectRows},scopedSlots:e._u([{key:"empty",fn:function(){return[t("el-image",{staticClass:"vab-data-empty",attrs:{src:a("f1f0")}})]},proxy:!0}])},[t("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"selection"}}),t("el-table-column",{attrs:{label:"名称",prop:"name","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"父节点Id",prop:"parentId","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"排序",prop:"order","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"创建时间",prop:"createTime","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"操作",width:"85"},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),t("el-button",{attrs:{disabled:!a.parentId,type:"text"},on:{click:function(t){return e.handleDelete({row:a})}}},[e._v(" 删除 ")])]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}),t("edit",{ref:"edit",on:{"fetch-data":e.fetchData}})],1)},s=[],o=(a("05a0"),a("5614"),a("ffea")),l=a("4dd1"),i={name:"DepartmentManagement",components:{Edit:l["default"]},data(){return{list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,selectRows:"",queryForm:{pageNo:1,pageSize:10,title:""}}},created(){this.fetchData()},methods:{setSelectRows(e){this.selectRows=e},handleEdit(e){e.id?this.$refs["edit"].showEdit(e):this.$refs["edit"].showEdit()},handleDelete(e){if(e.id)this.$baseConfirm("你确定要删除当前项吗",null,async()=>{const{msg:t}=await Object(o["doDelete"])({ids:e.id});this.$baseMessage(t,"success","vab-hey-message-success"),await this.fetchData()});else if(this.selectRows.length>0){const e=this.selectRows.map(e=>e.id).join();this.$baseConfirm("你确定要删除选中项吗",null,async()=>{const{msg:t}=await Object(o["doDelete"])({ids:e});this.$baseMessage(t,"success","vab-hey-message-success"),await this.fetchData()})}else this.$baseMessage("未选中任何行","error","vab-hey-message-error")},handleSizeChange(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange(e){this.queryForm.pageNo=e,this.fetchData()},queryData(){this.queryForm.pageNo=1,this.fetchData()},async fetchData(){this.listLoading=!0;const{data:{list:e,total:t}}=await Object(o["getList"])(this.queryForm);this.list=e,this.total=t,this.listLoading=!1}}},n=i,c=a("829d"),d=Object(c["a"])(n,r,s,!1,null,null,null);t["default"]=d.exports},f1f0:function(e,t,a){e.exports=a.p+"static/img/data_empty.475a2a1e.png"},ffea:function(e,t,a){"use strict";a.r(t),a.d(t,"getList",(function(){return s})),a.d(t,"doEdit",(function(){return o})),a.d(t,"doDelete",(function(){return l}));var r=a("b775");function s(e){return Object(r["default"])({url:"/departmentManagement/getList",method:"get",params:e})}function o(e){return Object(r["default"])({url:"/departmentManagement/doEdit",method:"post",data:e})}function l(e){return Object(r["default"])({url:"/departmentManagement/doDelete",method:"post",data:e})}}}]);