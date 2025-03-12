/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-12 22:35:00
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-039ac5d8"],{a5fd:function(t,e,a){"use strict";a("d19a")},ad8f:function(t,e,a){"use strict";a.r(e),a.d(e,"getList",(function(){return s})),a.d(e,"doEdit",(function(){return r})),a.d(e,"doDelete",(function(){return n}));var i=a("b775");function s(t){return Object(i["default"])({url:"/table/getList",method:"get",params:t})}function r(t){return Object(i["default"])({url:"/table/doEdit",method:"post",data:t})}function n(t){return Object(i["default"])({url:"/table/doDelete",method:"post",data:t})}},d19a:function(t,e,a){},f5eb:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"list-container"},[e("vab-query-form",[e("vab-query-form-top-panel",{attrs:{span:24}},[e("el-form",{attrs:{inline:!0,model:t.queryForm},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",[e("el-input",{attrs:{clearable:"",placeholder:"请输入标题"},model:{value:t.queryForm.title,callback:function(e){t.$set(t.queryForm,"title","string"===typeof e?e.trim():e)},expression:"queryForm.title"}})],1),e("el-form-item",[e("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:t.queryData}},[t._v(" 查询 ")])],1)],1)],1)],1),e("ul",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}]},t._l(t.list,(function(a,i){return e("li",{key:i,staticClass:"list-item"},[e("div",{staticClass:"list-item-meta"},[e("div",{staticClass:"list-item-meta-avatar"},[e("el-image",{attrs:{src:a.img}})],1),e("div",{staticClass:"list-item-meta-content"},[e("div",{staticClass:"list-item-meta-title"},[t._v(" "+t._s(a.title)+" ")]),e("div",{staticClass:"list-item-meta-description"},[t._v(" "+t._s(a.description)+" ")])]),e("div",{staticClass:"list-item-meta-content"},[e("div",{staticClass:"list-item-meta-item"},[e("span",[t._v("时间")]),e("p",[t._v(t._s(a.datetime))])])]),e("div",{staticClass:"list-item-meta-content"},[e("el-progress",{attrs:{percentage:a.percentage}})],1)])])})),0),e("el-pagination",{attrs:{background:"","current-page":t.queryForm.pageNo,layout:t.layout,"page-size":t.queryForm.pageSize,total:t.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)},s=[],r=a("ad8f"),n={name:"List",data(){return{list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,queryForm:{pageNo:1,pageSize:10,title:""}}},created(){this.fetchData()},methods:{handleSizeChange(t){this.queryForm.pageSize=t,this.fetchData()},handleCurrentChange(t){this.queryForm.pageNo=t,this.fetchData()},queryData(){this.queryForm.pageNo=1,this.fetchData()},async fetchData(){this.listLoading=!0;const{data:{list:t,total:e}}=await Object(r["getList"])(this.queryForm);this.list=t,this.total=e,this.listLoading=!1}}},l=n,o=(a("a5fd"),a("829d")),c=Object(o["a"])(l,i,s,!1,null,"77a2b745",null);e["default"]=c.exports}}]);