/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-12 22:48:39
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9a642a8"],{"814b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"user-management-container"},[t("vab-query-form",[t("vab-query-form-left-panel",{attrs:{span:12}},[t("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:function(t){return e.handleEdit(t)}}},[e._v(" 添加 ")]),t("el-button",{attrs:{icon:"el-icon-delete",type:"danger"},on:{click:function(t){return e.handleDelete(t)}}},[e._v(" 批量删除 ")])],1),t("vab-query-form-right-panel",{attrs:{span:12}},[t("el-form",{attrs:{inline:!0,model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",[t("el-input",{attrs:{clearable:"",placeholder:"请输入用户名"},model:{value:e.queryForm.username,callback:function(t){e.$set(e.queryForm,"username","string"===typeof t?t.trim():t)},expression:"queryForm.username"}})],1),t("el-form-item",[t("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.queryData}},[e._v(" 查询 ")])],1)],1)],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{border:"",data:e.list},on:{"selection-change":e.setSelectRows},scopedSlots:e._u([{key:"empty",fn:function(){return[t("el-image",{staticClass:"vab-data-empty",attrs:{src:a("f1f0")}})]},proxy:!0}])},[t("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",type:"selection"}}),t("el-table-column",{attrs:{align:"center",label:"序号",width:"55"},scopedSlots:e._u([{key:"default",fn:function({$index:t}){return[e._v(" "+e._s(t+1)+" ")]}}])}),t("el-table-column",{attrs:{align:"center",label:"id",prop:"id","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{align:"center",label:"用户名",prop:"username","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{align:"center",label:"邮箱",prop:"email","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{align:"center",label:"角色","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:a}){return e._l(a.roles,(function(a,s){return t("el-tag",{key:s},[e._v(" "+e._s(a)+" ")])}))}}])}),t("el-table-column",{attrs:{align:"center",label:"修改时间",prop:"datatime","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{align:"center",label:"操作","show-overflow-tooltip":"",width:"85"},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDelete(a)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}),t("edit",{ref:"edit",on:{"fetch-data":e.fetchData}})],1)},r=[],o=(a("05a0"),a("5614"),a("953d")),l=a("e276"),i={name:"UserManagement",components:{Edit:l["default"]},data(){return{list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,selectRows:"",queryForm:{pageNo:1,pageSize:10,username:""}}},created(){this.fetchData()},methods:{setSelectRows(e){this.selectRows=e},handleEdit(e){e.id?this.$refs["edit"].showEdit(e):this.$refs["edit"].showEdit()},handleDelete(e){if(e.id)this.$baseConfirm("你确定要删除当前项吗",null,async()=>{const{msg:t}=await Object(o["doDelete"])({ids:e.id});this.$baseMessage(t,"success","vab-hey-message-success"),await this.fetchData()});else if(this.selectRows.length>0){const e=this.selectRows.map(e=>e.id).join();this.$baseConfirm("你确定要删除选中项吗",null,async()=>{const{msg:t}=await Object(o["doDelete"])({ids:e});this.$baseMessage(t,"success","vab-hey-message-success"),await this.fetchData()})}else this.$baseMessage("未选中任何行","error","vab-hey-message-error")},handleSizeChange(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange(e){this.queryForm.pageNo=e,this.fetchData()},queryData(){this.queryForm.pageNo=1,this.fetchData()},async fetchData(){this.listLoading=!0;const{data:{list:e,total:t}}=await Object(o["getList"])(this.queryForm);this.list=e,this.total=t,this.listLoading=!1}}},n=i,c=a("829d"),u=Object(c["a"])(n,s,r,!1,null,null,null);t["default"]=u.exports},"953d":function(e,t,a){"use strict";a.r(t),a.d(t,"getList",(function(){return r})),a.d(t,"doEdit",(function(){return o})),a.d(t,"doDelete",(function(){return l}));var s=a("b775");function r(e){return Object(s["default"])({url:"/userManagement/getList",method:"get",params:e})}function o(e){return Object(s["default"])({url:"/userManagement/doEdit",method:"post",data:e})}function l(e){return Object(s["default"])({url:"/userManagement/doDelete",method:"post",data:e})}},e276:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close},scopedSlots:e._u([{key:"footer",fn:function(){return[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])]},proxy:!0}])},[t("el-form",{ref:"form",attrs:{"label-width":"80px",model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username","string"===typeof t?t.trim():t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}})],1),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email","string"===typeof t?t.trim():t)},expression:"form.email"}})],1),t("el-form-item",{attrs:{label:"角色",prop:"roles"}},[t("el-checkbox-group",{model:{value:e.form.roles,callback:function(t){e.$set(e.form,"roles",t)},expression:"form.roles"}},[t("el-checkbox",{attrs:{label:"admin"}}),t("el-checkbox",{attrs:{label:"editor"}})],1)],1)],1)],1)},r=[],o=a("953d"),l={name:"UserManagementEdit",data(){return{form:{roles:[]},rules:{username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}],email:[{required:!0,trigger:"blur",message:"请输入邮箱"}],roles:[{required:!0,trigger:"blur",message:"请选择角色"}]},title:"",dialogFormVisible:!1}},methods:{showEdit(e){e?(this.title="编辑",this.form=Object.assign({},e)):this.title="添加",this.dialogFormVisible=!0},close(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,this.dialogFormVisible=!1},save(){this.$refs["form"].validate(async e=>{if(e){const{msg:e}=await Object(o["doEdit"])(this.form);this.$baseMessage(e,"success","vab-hey-message-success"),this.$emit("fetch-data"),this.close()}})}}},i=l,n=a("829d"),c=Object(n["a"])(i,s,r,!1,null,null,null);t["default"]=c.exports},f1f0:function(e,t,a){e.exports=a.p+"static/img/data_empty.475a2a1e.png"}}]);