/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-14 00:09:08
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cfc70d8"],{"3c62":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"branch"},[e("el-card",{staticClass:"branch-card",attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[e("vab-icon",{attrs:{icon:"donut-chart-fill"}}),t._v(" 分布 ")],1)]},proxy:!0}])},[e("vab-chart",{staticClass:"branch-echart",attrs:{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"}})],1)],1)},s=[],n=a("55fd"),i={components:{VabChart:n["default"]},data(){return{initOptions:{renderer:"svg"},option:{tooltip:{trigger:"item"},series:[{name:"访问来源",type:"pie",radius:["50%","70%"],itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},emphasis:{label:{show:!0}},data:[{value:1048,name:"搜索引擎"},{value:735,name:"直接访问"},{value:580,name:"邮件营销"},{value:484,name:"联盟广告"},{value:300,name:"视频广告"}]}]}}}},o=i,l=a("829d"),c=Object(l["a"])(o,r,s,!1,null,null,null);e["default"]=c.exports},"4dde":function(t,e,a){},"784f":function(t,e,a){"use strict";a("9588")},"7ee1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-container"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{lg:12,md:12,sm:24,xl:12,xs:24}},[e("trend")],1),e("el-col",{attrs:{lg:6,md:12,sm:24,xl:6,xs:24}},[e("branch")],1),e("el-col",{attrs:{lg:6,md:12,sm:24,xl:6,xs:24}},[e("rank")],1),e("el-col",{attrs:{lg:24,md:24,sm:24,xl:24,xs:24}},[e("tabs")],1)],1)],1)},s=[],n=a("9bf2"),i=a("3c62"),o=a("d229"),l=a("ec86"),c={name:"Dashboard",components:{Trend:n["default"],Branch:i["default"],Rank:o["default"],Tabs:l["default"]},data(){return{}},created(){},mounted(){},methods:{}},d=c,p=(a("784f"),a("829d")),u=Object(p["a"])(d,r,s,!1,null,"4fada8e9",null);e["default"]=u.exports},9588:function(t,e,a){},"9bf2":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"trend"},[e("el-card",{staticClass:"trend-card",attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[e("vab-icon",{attrs:{icon:"line-chart-fill"}}),t._v(" 趋势 ")],1)]},proxy:!0}])},[e("vab-chart",{staticClass:"trend-echart",attrs:{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"}})],1)],1)},s=[],n=a("55fd"),i={components:{VabChart:n["default"]},data(){return{initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"4%",left:"2%",right:"2%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],boundaryGap:!1}],yAxis:[{type:"value"}],series:[{name:"签单",type:"line",data:[1295,3020,1330,512,4463,2214,3330,2412,1205,820,3330,912],symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{},areaStyle:{opacity:.8}},{name:"回款",type:"line",data:[2905,2020,1730,128,963,4614,630,1912,1005,1782,1530,912],symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{},areaStyle:{opacity:.8}}]}}}},o=i,l=a("829d"),c=Object(l["a"])(o,r,s,!1,null,null,null);e["default"]=c.exports},d229:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"rank"},[e("el-card",{staticClass:"rank-card",attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[e("vab-icon",{attrs:{icon:"align-top"}}),t._v(" 消費排行 ")],1)]},proxy:!0}])},[e("vab-chart",{staticClass:"rank-echart",attrs:{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"}})],1)],1)},s=[],n=a("55fd"),i={components:{VabChart:n["default"]},data(){return{initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"0%",left:"2%",right:"20%",bottom:"0%",containLabel:!0},xAxis:[{splitLine:{show:!1},type:"value",show:!1}],yAxis:[{splitLine:{show:!1},axisLine:{show:!1},type:"category",axisTick:{show:!1},data:["good luck","曲丽丽","付小小","林东东","周星星","朱偏右"]}],series:[{name:"累计消费",type:"bar",barWidth:15,label:{show:!0,position:"right",color:"#1890FF",fontSize:12,formatter:({data:t})=>t+"万元"},itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:[23,54,68,76,87,99]}]}}}},o=i,l=a("829d"),c=Object(l["a"])(o,r,s,!1,null,null,null);e["default"]=c.exports},ec86:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabs"},[e("el-card",{staticClass:"tabs-card",attrs:{shadow:"hover"}},[e("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"配送管理",name:"first"}},[e("el-table",{attrs:{data:t.tableData,height:"280"}},[e("el-table-column",{attrs:{label:"日期",prop:"date"}}),e("el-table-column",{attrs:{label:"配送信息"}},[e("el-table-column",{attrs:{label:"姓名",prop:"name"}}),e("el-table-column",{attrs:{label:"省份",prop:"province"}}),e("el-table-column",{attrs:{label:"市区",prop:"city"}}),e("el-table-column",{attrs:{label:"地址",prop:"address"}}),e("el-table-column",{attrs:{label:"邮编",prop:"zip"}})],1)],1)],1),e("el-tab-pane",{attrs:{label:"区域管理",name:"second"}},[t._v("敬请期待")])],1)],1)],1)},s=[],n={components:{},data(){return{activeName:"first",tableData:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}]}}},i=n,o=(a("f462"),a("829d")),l=Object(o["a"])(i,r,s,!1,null,"024583de",null);e["default"]=l.exports},f462:function(t,e,a){"use strict";a("4dde")}}]);