(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["barDemo"],{af85:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"l-tab-page pd-8",staticStyle:{"overflow-y":"auto","padding-bottom":"0"}},[a("el-row",{attrs:{gutter:8}},[a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"mb-8"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("阅读时长统计图")])]),a("l-echarts",{staticStyle:{height:"280px"},attrs:{option:t.basicOptions}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"mb-8"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("运动爱好统计图")])]),a("l-echarts",{staticStyle:{height:"280px"},attrs:{option:t.multipleBar}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"mb-8"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("地区粮食产量统计图")])]),a("l-echarts",{staticStyle:{height:"280px"},attrs:{option:t.horizontaiBar}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"mb-8"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("地区人员出行统计图")])]),a("l-echarts",{staticStyle:{height:"280px"},attrs:{option:t.stackBar}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"mb-8"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("家庭周度收支统计图")])]),a("l-echarts",{staticStyle:{height:"280px"},attrs:{option:t.waterFallBar}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"mb-8"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("地区周度收支条形图")])]),a("l-echarts",{staticStyle:{height:"280px"},attrs:{option:t.horizontaiBar2}})],1)],1)],1)],1)},r=[],s=(a("b0c0"),{data:function(){return{option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"10%",bottom:"10%"},xAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]}}},computed:{basicOptions:function(){var t=this.$deepClone(this.option);return t.color={type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#6f86d6"},{offset:1,color:"#48c6ef"}]},t},multipleBar:function(){var t=this.$deepClone(this.option);return t.legend.data=["篮球","足球","乒乓球","羽毛球"],t.xAxis.data=["一班","二班","三班","四班","五班"],t.series=[{name:"篮球",type:"bar",barGap:0,emphasis:{focus:"series"},data:[320,332,301,334,390],itemStyle:{normal:{barBorderRadius:[10,10,0,0],color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#6f86d6"},{offset:1,color:"#48c6ef"}]}}}},{name:"足球",type:"bar",emphasis:{focus:"series"},data:[220,182,191,234,290],itemStyle:{normal:{barBorderRadius:[10,10,0,0],color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#fda085"},{offset:1,color:"#f6d365"}]}}}},{name:"乒乓球",type:"bar",emphasis:{focus:"series"},data:[150,232,201,154,190],itemStyle:{normal:{barBorderRadius:[10,10,0,0],color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#38f9d7"},{offset:1,color:"#f6d365"}]}}}},{name:"羽毛球",type:"bar",emphasis:{focus:"series"},data:[98,77,101,99,40],itemStyle:{normal:{barBorderRadius:[10,10,0,0],color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#f5576c"},{offset:1,color:"#f093fb"}]}}}}],t},horizontaiBar:function(){var t=this.$deepClone(this.option);return t.xAxis={type:"value",boundaryGap:[0,.01]},t.yAxis={type:"category",data:["一区","二区","三区","四区","五区","六区"]},t.series=[{name:"2011",type:"bar",data:[18203,23489,29034,104970,131744,630230],itemStyle:{normal:{barBorderRadius:[0,10,10,0],color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#fee140"},{offset:1,color:"#fa709a"}]}}}},{name:"2012",type:"bar",data:[19325,23438,31e3,121594,134141,681807],itemStyle:{normal:{barBorderRadius:[0,10,10,0],color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#009efc"},{offset:1,color:"#2af598"}]}}}}],t},stackBar:function(){var t=this.$deepClone(this.option);return t.series=[{name:"步行",type:"bar",emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"自行车",type:"bar",stack:"Adr",emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"电动车",type:"bar",stack:"Adr",emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"打车",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"开车",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"公交车",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]}],t},waterFallBar:function(){var t=this.$deepClone(this.option);return t.tooltip={trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){var e;return e="-"!==t[1].value?t[1]:t[0],e.name+"<br/>"+e.seriesName+" : "+e.value}},t.legend.data=["收入","支出"],t.series=[{name:"结余",type:"bar",stack:"Total",itemStyle:{borderColor:"transparent",color:"transparent"},emphasis:{itemStyle:{borderColor:"transparent",color:"transparent"}},data:[0,900,1245,1530,1376,1376,1511]},{name:"收入",type:"bar",stack:"Total",label:{show:!0,position:"top"},data:[900,345,393,"-","-",135,178],itemStyle:{normal:{barBorderRadius:[10,10,0,0],color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#009efd"},{offset:1,color:"#2af598"}]}}}},{name:"支出",type:"bar",stack:"Total",label:{show:!0,position:"bottom"},data:["-","-","-",108,154,"-","-"],itemStyle:{normal:{barBorderRadius:[10,10,0,0],color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#f5576c"},{offset:1,color:"#f093fb"}]}}}}],t},horizontaiBar2:function(){var t=this.$deepClone(this.option);return t.legend.data=["毛利","支出","收入"],t.xAxis=[{type:"value"}],t.yAxis=[{type:"category",axisTick:{show:!1},data:["周一","周二","周三","周四","周五","周六","周日"]}],t.series=[{name:"毛利",type:"bar",label:{show:!0,position:"inside",color:"black"},emphasis:{focus:"series"},data:[200,170,240,244,200,220,210],itemStyle:{normal:{barBorderRadius:[0,10,10,0],color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#66a6ff"},{offset:1,color:"#89f7fe"}]}}}},{name:"收入",type:"bar",stack:"Total",label:{show:!0,color:"black"},emphasis:{focus:"series"},data:[320,302,341,374,390,450,420],itemStyle:{normal:{barBorderRadius:[0,10,10,0],color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#38f9d7"},{offset:1,color:"#43e97b"}]}}}},{name:"支出",type:"bar",stack:"Total",label:{show:!0,position:"left"},emphasis:{focus:"series"},data:[-120,-132,-101,-134,-190,-230,-210],itemStyle:{normal:{barBorderRadius:[10,0,0,10],color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#f5576c"},{offset:1,color:"#f093fb"}]}}}}],t}}}),l=s,i=a("2877"),c=Object(i["a"])(l,o,r,!1,null,null,null);e["default"]=c.exports}}]);