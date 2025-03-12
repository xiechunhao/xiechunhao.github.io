/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-13 02:33:52
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1bff48c"],{"12ed":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"inline-edit-table-container"},[e("el-alert",{attrs:{closable:!1,"show-icon":"",title:"三级路由【不缓存路由并且不固定表格高度】的示例",type:"success"}}),e("vab-query-form",[e("vab-query-form-right-panel",{attrs:{span:24}},[e("el-form",{ref:"form",attrs:{inline:!0,model:t.queryForm},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",[e("el-input",{attrs:{placeholder:"标题"},model:{value:t.queryForm.title,callback:function(e){t.$set(t.queryForm,"title",e)},expression:"queryForm.title"}})],1),e("el-form-item",[e("el-button",{attrs:{icon:"el-icon-search","native-type":"submit",type:"primary"},on:{click:t.handleQuery}},[t._v(" 查询 ")])],1)],1)],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{border:"",data:t.list},scopedSlots:t._u([{key:"empty",fn:function(){return[e("el-image",{staticClass:"vab-data-empty",attrs:{src:a("f1f0")}})]},proxy:!0}])},[e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",type:"selection",width:"55"}}),e("el-table-column",{attrs:{align:"center",label:"序号","show-overflow-tooltip":"",width:"95"},scopedSlots:t._u([{key:"default",fn:function({$index:e}){return[t._v(" "+t._s(e+1)+" ")]}}])}),e("el-table-column",{attrs:{align:"center",label:"标题","min-width":"300px","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[a.edit?[e("el-input",{staticStyle:{width:"300px"},model:{value:a.title,callback:function(e){t.$set(a,"title",e)},expression:"row.title"}}),e("el-button",{staticClass:"cancel-btn",attrs:{type:"warning"},on:{click:function(e){return t.cancelEdit(a)}}},[t._v(" 取消 ")])]:e("span",[t._v(t._s(a.title))])]}}])}),e("el-table-column",{attrs:{align:"center",label:"作者",prop:"author","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{align:"center",label:"操作","show-overflow-tooltip":"",width:"200"},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[a.edit?e("el-button",{attrs:{size:"small",type:"success"},on:{click:function(e){return t.confirmEdit(a)}}},[t._v(" 保存 ")]):e("el-button",{attrs:{icon:"el-icon-edit",size:"small",type:"primary"},on:{click:function(t){a.edit=!a.edit}}},[t._v(" 编辑 ")])]}}])})],1),e("el-pagination",{attrs:{background:"","current-page":t.queryForm.pageNo,layout:t.layout,"page-size":t.queryForm.pageSize,total:t.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)},l=[],n=(a("05a0"),a("5614"),a("ad8f")),o={name:"InlineEditTable",data(){return{list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,queryForm:{pageNo:1,pageSize:20,title:""}}},created(){this.fetchData()},methods:{async fetchData(){this.listLoading=!0;const{data:{list:t,total:e}}=await Object(n["getList"])(this.queryForm);this.list=t.map(t=>(this.$set(t,"edit",!1),t.originalTitle=t.title,t)),this.total=e,this.listLoading=!1},handleSizeChange(t){this.queryForm.pageSize=t,this.fetchData()},handleCurrentChange(t){this.queryForm.pageNo=t,this.fetchData()},handleQuery(){this.queryForm.pageNo=1,this.fetchData()},cancelEdit(t){t.title=t.originalTitle,t.edit=!1},confirmEdit(t){t.edit=!1,t.originalTitle=t.title}}},r=o,s=a("829d"),c=Object(s["a"])(r,i,l,!1,null,null,null);e["default"]=c.exports},ad8f:function(t,e,a){"use strict";a.r(e),a.d(e,"getList",(function(){return l})),a.d(e,"doEdit",(function(){return n})),a.d(e,"doDelete",(function(){return o}));var i=a("b775");function l(t){return Object(i["default"])({url:"/table/getList",method:"get",params:t})}function n(t){return Object(i["default"])({url:"/table/doEdit",method:"post",data:t})}function o(t){return Object(i["default"])({url:"/table/doDelete",method:"post",data:t})}},f1f0:function(t,e,a){t.exports=a.p+"static/img/data_empty.475a2a1e.png"}}]);