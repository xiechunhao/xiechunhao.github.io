(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["markTable"],{"01a0":function(t,a,e){"use strict";e("577e6")},"577e6":function(t,a,e){},"63bc":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("l-layout",{staticClass:"l-tab-page"},[e("l-panel",{scopedSlots:t._u([{key:"title",fn:function(){return[e("div",[t._v(t._s(t.$t("合计列表")))]),e("div",{staticStyle:{width:"560px"}},[e("div",{staticClass:"ml-8",staticStyle:{float:"right"}},[e("l-tool-btns",{attrs:{hasAdd:!1,hasTableSetting:!0},on:{setting:t.handleSetting}})],1)])]},proxy:!0}])},[e("l-table",{ref:"mainTable",attrs:{loading:t.tableLoading,columns:t.columns,dataSource:t.tableData,showSummary:!0},scopedSlots:t._u([{key:"payType",fn:function(){return[e("div",{staticClass:"table-badge"},[e("el-badge",{attrs:{"is-dot":"",type:"primary"}}),e("el-badge",{attrs:{type:"success","is-dot":""}}),e("el-badge",{attrs:{type:"warning","is-dot":""}})],1)]},proxy:!0}])})],1)],1)},l=[],i=(e("96cf"),e("1da1")),o=window.$api.demo.data,r={data:function(){return{tableLoading:!1,tableData:[],columns:[{label:"编码",prop:"num",width:120,align:"left",isNotAutoWrap:!0},{label:"名称",prop:"name",width:170,align:"left",isNotAutoWrap:!0},{label:"公司",prop:"company",width:160,align:"left",isNotAutoWrap:!0},{label:"联系人",prop:"user",minWidth:70,align:"left"},{label:"金额",prop:"price",width:80,align:"left",isSummary:!0},{label:"已付款",prop:"payed",width:80,align:"left",isSummary:!0},{label:"未付款",prop:"unpay",width:80,align:"left",isSummary:!0},{label:"标记",prop:"payType",minWidth:70,align:"center"},{label:"日期",prop:"time",minWidth:120,align:"left"}]}},mounted:function(){this.init()},methods:{init:function(){this.loadTableData()},handleSetting:function(){this.$refs.mainTable.openColumnsSetting()},handleSearch:function(){this.loadTableData()},loadTableData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.tableLoading=!0,e={},a.next=4,t.$awaitWraper(o.getList(e));case 4:n=a.sent,t.tableData=null!=n?n:[],t.tableLoading=!1;case 7:case"end":return a.stop()}}),a)})))()}}},s=r,p=(e("01a0"),e("2877")),u=Object(p["a"])(s,n,l,!1,null,null,null);a["default"]=u.exports}}]);