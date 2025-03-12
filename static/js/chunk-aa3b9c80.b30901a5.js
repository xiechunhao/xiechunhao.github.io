/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-13 00:56:36
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa3b9c80"],{"18a4":function(t,e,a){},"21d2":function(t,e,a){"use strict";a("18a4")},8429:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"goods-container"},[e("el-alert",{attrs:{closable:!1,"show-icon":"",title:t.title,type:"success"}}),e("vab-query-form",[e("vab-query-form-right-panel",{attrs:{span:24}},[e("el-form",{ref:"form",attrs:{inline:!0,model:t.queryForm},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",[e("el-input",{attrs:{placeholder:"请输入商品名称"},model:{value:t.queryForm.title,callback:function(e){t.$set(t.queryForm,"title",e)},expression:"queryForm.title"}})],1),e("el-form-item",[e("el-button",{attrs:{icon:"el-icon-search","native-type":"submit",type:"primary"},on:{click:t.handleQuery}},[t._v(" 查询 ")])],1)],1)],1)],1),e("el-row",{attrs:{gutter:20}},t._l(t.list,(function(a,s){return e("el-col",{key:s,attrs:{lg:8,md:8,sm:8,xl:6,xs:24}},[e("el-card",{attrs:{"body-style":{padding:"0px"},shadow:"hover"}},[e("div",{staticClass:"goods-card-body"},[e("div",{staticClass:"goods-tag-group"},[e("el-tag",{attrs:{hit:""}},[t._v(t._s(a.company))])],1),e("div",{staticClass:"goods-image-group"},[e("div",{staticClass:"goods-image"},[a.icon?e("vab-icon",{attrs:{icon:a.icon}}):t._e(),a.image||a.svg?e("el-image",{class:{isSvg:a.svg},attrs:{fit:"cover",src:a.image||a.svg}}):t._e()],1)]),e("div",{staticClass:"goods-title"},[t._v(t._s(a.title))]),e("div",{staticClass:"goods-price"},[e("el-tag",{attrs:{hit:"",type:"warning"}},[t._v(t._s(a.price))]),t._l(a.label,(function(a){return e("el-tag",{key:a,attrs:{hit:""}},[t._v(" "+t._s(a)+" ")])}))],2),e("div",{staticClass:"goods-description"},[t._v(" "+t._s(a.description)+" ")]),e("div",{staticClass:"goods-detail"},[e("a",{attrs:{href:a.url,target:"_blank"}},[e("el-button",{attrs:{type:"text"}},[t._v("查看详情")])],1)])])])],1)})),1),e("el-pagination",{attrs:{background:"","current-page":t.queryForm.pageNo,layout:t.layout,"page-size":t.queryForm.pageSize,total:t.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)},i=[],r=a("c40e"),o={name:"Goods",data(){return{queryForm:{pageNo:1,pageSize:20,title:""},list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,title:unescape("物料商城物料由第三方提供，vue-admin-beautiful作者不提供技术支持，不对物料质量负责，每一位开发者都可以联系作者提供优质的第三方物料，经过审核后可上线物料市场。")}},created(){this.fetchData()},methods:{handleSizeChange(t){this.queryForm.pageSize=t,this.fetchData()},handleCurrentChange(t){this.queryForm.pageNo=t,this.fetchData()},handleQuery(){this.queryForm.pageNo=1,this.fetchData()},async fetchData(){this.listLoading=!0;const{data:{list:t,total:e}}=await Object(r["getList"])(this.queryForm);this.list=t,this.total=e}}},n=o,l=(a("21d2"),a("829d")),c=Object(l["a"])(n,s,i,!1,null,"0207dffc",null);e["default"]=c.exports},c40e:function(t,e,a){"use strict";a.r(e),a.d(e,"getList",(function(){return i}));var s=a("b775");function i(t){return Object(s["default"])({url:"/goods/getList",method:"get",params:t})}}}]);