/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-13 00:45:09
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e4c222e2"],{"0bf0":function(e,t,a){"use strict";a("c4d4")},"5da8":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"remix-icon-container"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:24}},[t("el-form",{attrs:{inline:!0,"label-width":"80px"},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{attrs:{label:"图标名称"}},[t("el-input",{model:{value:e.queryForm.title,callback:function(t){e.$set(e.queryForm,"title",t)},expression:"queryForm.title"}})],1),t("el-form-item",{attrs:{"label-width":"0"}},[t("el-button",{attrs:{icon:"el-icon-search","native-type":"submit",type:"primary"},on:{click:e.queryData}},[e._v(" 查询 ")])],1)],1)],1),e._l(e.queryIcon,(function(a,n){return t("el-col",{key:n,attrs:{lg:2,md:3,sm:8,xl:2,xs:6}},[t("el-card",{attrs:{shadow:"hover"},nativeOn:{click:function(t){return e.handleCopyIcon(a,t)}}},[t("vab-icon",{attrs:{icon:a}})],1),t("div",{staticClass:"icon-text",on:{click:function(t){return e.handleCopyText(a,t)}}},[e._v(" "+e._s(a)+" ")])],1)})),t("el-col",{attrs:{span:24}},[t("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,"page-sizes":[72,144,216,288],total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)],2)],1)},r=[],o=a("878e"),s=a("f71e"),c={name:"RemixIcon",data(){return{layout:"total, sizes, prev, pager, next, jumper",total:0,queryIcon:[],queryForm:{pageNo:1,pageSize:72,title:""}}},created(){this.fetchData()},methods:{handleSizeChange(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange(e){this.queryForm.pageNo=e,this.fetchData()},queryData(){this.queryForm.pageNo=1,this.fetchData()},async fetchData(){const{data:{list:e,total:t}}=await Object(o["getIconList"])(this.queryForm);this.queryIcon=e,this.total=t},handleCopyText(e,t){Object(s["default"])(e,t)},handleCopyIcon(e,t){Object(s["default"])(`<vab-icon icon="${e}" />`,t)}}},i=c,u=(a("0bf0"),a("829d")),l=Object(u["a"])(i,n,r,!1,null,"dec42e44",null);t["default"]=l.exports},"878e":function(e,t,a){"use strict";a.r(t),a.d(t,"getIconList",(function(){return r}));var n=a("b775");function r(e){return Object(n["default"])({url:"/remixIcon/getList",method:"get",params:e})}},c4d4:function(e,t,a){},f71e:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a("1065"),r=a("84e5"),o=a.n(r);function s(e){n["default"].prototype.$baseMessage(`复制${e}成功`,"success","vab-hey-message-success")}function c(e){n["default"].prototype.$baseMessage(`复制${e}失败`,"error","vab-hey-message-success")}function i(e,t){const a=new o.a(t.target,{text:()=>e});a.on("success",()=>{s(e),a.destroy()}),a.on("error",()=>{c(e),a.destroy()}),a.onClick(t)}}}]);