(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["leftAndRight"],{abd6:function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("l-layout",{staticClass:"l-tab-page",attrs:{left:600},scopedSlots:t._u([{key:"left",fn:function(){return[e("l-panel",{staticStyle:{"padding-right":"0"},attrs:{title:t.$t("数据栏")}},[e("l-table",{ref:"mainTable",attrs:{loading:t.tableLoading,columns:t.columns,dataSource:t.tableData,showSummary:!0,highlightCurrentRow:""},on:{rowClick:t.handleRowClick}})],1)]},proxy:!0}])},[e("l-panel",{staticStyle:{"padding-left":"0"},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",[t._v(t._s(t.$t("子表")))]),e("div",{staticStyle:{width:"100px"}},[e("div",{staticClass:"ml-8",staticStyle:{float:"right"}},[e("l-tool-btns",{attrs:{hasAdd:!1,hasTableSetting:!0},on:{setting:t.handleSetting}})],1)])]},proxy:!0}])},[e("l-table",{ref:"table",attrs:{loading:t.tableLoading,columns:t.columns,dataSource:t.tableData2}})],1)],1)},n=[],i=(e("96cf"),e("1da1")),o=window.$api.demo.data,r={data:function(){return{tableLoading:!1,tableData:[],tableData2:[],columns:[{label:"编码",prop:"num",width:120,align:"left",isNotAutoWrap:!0},{label:"名称",prop:"name",width:170,align:"left",isNotAutoWrap:!0},{label:"公司",prop:"company",width:160,align:"left",isNotAutoWrap:!0},{label:"联系人",prop:"user",minWidth:70,align:"left"},{label:"金额",prop:"price",width:80,align:"left",isSummary:!0},{label:"已付款",prop:"payed",width:80,align:"left",isSummary:!0},{label:"未付款",prop:"unpay",width:80,align:"left",isSummary:!0},{label:"支付方式",prop:"payType",minWidth:70,align:"center"},{label:"日期",prop:"time",minWidth:120,align:"left"}]}},mounted:function(){this.init()},methods:{init:function(){this.loadTableData()},handleSetting:function(){this.$refs.mainTable.openColumnsSetting()},handleSearch:function(){this.loadTableData()},loadTableData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.tableLoading=!0,e={},a.next=4,t.$awaitWraper(o.getList(e));case 4:l=a.sent,t.tableData=null!=l?l:[],t.tableLoading=!1;case 7:case"end":return a.stop()}}),a)})))()},handleRowClick:function(t){var a=t.row;this.tableData2=[this.$deepClone(a)]}}},s=r,d=e("2877"),u=Object(d["a"])(s,l,n,!1,null,null,null);a["default"]=u.exports}}]);