/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-12 21:33:33
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cec17cf"],{"0308":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"export-excel-container"},[t("vab-query-form",[t("vab-query-form-left-panel",{attrs:{span:24}},[t("el-form",{attrs:{inline:!0,"label-width":"100px"},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{attrs:{label:"文件名"}},[t("el-input",{attrs:{placeholder:"请输出要导出文件的名称"},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}})],1),t("el-form-item",{attrs:{label:"文件类型"}},[t("el-select",{model:{value:e.bookType,callback:function(t){e.bookType=t},expression:"bookType"}},e._l(e.options,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"自动列宽"}},[t("el-radio-group",{model:{value:e.autoWidth,callback:function(t){e.autoWidth=t},expression:"autoWidth"}},[t("el-radio",{attrs:{label:!0}},[e._v("是")]),t("el-radio",{attrs:{label:!1}},[e._v("否")])],1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.handleDownload}},[e._v(" 导出 Excel ")])],1)],1)],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{border:"",data:e.list}},[t("el-table-column",{attrs:{align:"center",label:"序号",width:"55"},scopedSlots:e._u([{key:"default",fn:function({$index:t}){return[e._v(" "+e._s(t+1)+" ")]}}])}),t("el-table-column",{attrs:{align:"center",label:"标题"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(" "+e._s(t.title)+" ")]}}])}),t("el-table-column",{attrs:{align:"center",label:"作者"},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[t("el-tag",[e._v(e._s(a.author))])]}}])}),t("el-table-column",{attrs:{align:"center",label:"访问量"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(" "+e._s(t.pageViews)+" ")]}}])}),t("el-table-column",{attrs:{align:"center",label:"时间"},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[t("span",[e._v(e._s(a.datetime))])]}}])})],1)],1)},l=[],o=(a("05a0"),a("5614"),a("ad8f")),i={name:"ExportExcel",data(){return{list:[],listLoading:!0,downloadLoading:!1,filename:"",autoWidth:!0,bookType:"xlsx",options:["xlsx","csv","txt"]}},created(){this.fetchData()},methods:{async fetchData(){this.listLoading=!0;const{data:{list:e}}=await Object(o["getList"])();this.list=e,this.listLoading=!1},handleDownload(){this.downloadLoading=!0,Promise.all([a.e("vab-chunk-81e82325"),a.e("vab-chunk-952443dc"),a.e("vab-chunk-edb28f9c"),a.e("vab-chunk-65318ccb"),a.e("vab-chunk-bca60f47"),a.e("vab-chunk-a97d11f1"),a.e("vab-chunk-10a2ab1d"),a.e("vab-chunk-0b69a6c7"),a.e("vab-chunk-a41745f6"),a.e("vab-chunk-c4ef2389"),a.e("vab-chunk-0c05e5b8"),a.e("vab-chunk-072a7b38"),a.e("vab-chunk-300c6b41"),a.e("vab-chunk-73272489"),a.e("vab-chunk-1b8f0c9b"),a.e("vab-chunk-14486e17"),a.e("vab-chunk-add8a43f"),a.e("vab-chunk-020089fc"),a.e("vab-chunk-e002de2a"),a.e("vab-chunk-cafd08df"),a.e("vab-chunk-f95698bd"),a.e("vab-chunk-05ca3b06"),a.e("chunk-47edd9da")]).then(a.bind(null,"cd77")).then(e=>{const t=["Id","Title","Author","Readings","Date"],a=["id","title","author","pageViews","datetime"],n=this.list,l=this.formatJson(a,n);e.export_json_to_excel({header:t,data:l,filename:this.filename,autoWidth:this.autoWidth,bookType:this.bookType}),this.downloadLoading=!1})},formatJson(e,t){return t.map(t=>e.map(e=>t[e]))}}},c=i,u=a("829d"),r=Object(u["a"])(c,n,l,!1,null,null,null);t["default"]=r.exports},ad8f:function(e,t,a){"use strict";a.r(t),a.d(t,"getList",(function(){return l})),a.d(t,"doEdit",(function(){return o})),a.d(t,"doDelete",(function(){return i}));var n=a("b775");function l(e){return Object(n["default"])({url:"/table/getList",method:"get",params:e})}function o(e){return Object(n["default"])({url:"/table/doEdit",method:"post",data:e})}function i(e){return Object(n["default"])({url:"/table/doDelete",method:"post",data:e})}}}]);