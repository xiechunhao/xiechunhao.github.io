/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-13 00:18:02
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c5367"],{"3daa":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t._self._c;return a("div",{ref:"print-container",staticClass:"print-container"},[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.print("vab-print-image")}}},[a("vab-icon",{attrs:{icon:"printer-line"}}),t._v(" 打印图片 ")],1),a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.print("vab-print-table")}}},[a("vab-icon",{attrs:{icon:"printer-line"}}),t._v(" 打印表格 ")],1),a("img",{ref:"vab-print-image",staticStyle:{display:"block",width:"520px"},attrs:{src:"https://gcore.jsdelivr.net/gh/zxwk1998/image/fapiao.png"}}),a("br"),a("el-table",{ref:"vab-print-table",staticStyle:{width:"520px"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{label:"姓名",prop:"name",width:"120px"}}),a("el-table-column",{attrs:{label:"地址",prop:"address"}})],1)],1)},r=[],i=e("7736"),s=e("62ce"),l={name:"Print",data(){return{tableData:[{name:"马云",address:"上海市普陀区金沙江路"},{name:"马化腾",address:"上海市普陀区金沙江路"},{name:"李彦宏",address:"上海市普陀区金沙江路"},{name:"刘强东",address:"上海市普陀区金沙江路"}]}},methods:{...Object(i["b"])({openSideBar:"settings/openSideBar",foldSideBar:"settings/foldSideBar"}),async print(t){await this.foldSideBar(),await Object(s["default"])(this.$refs[t],{noPrintParent:!0}),await this.openSideBar()}}},d=l,p=e("829d"),o=Object(p["a"])(d,n,r,!1,null,null,null);a["default"]=o.exports}}]);