/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-12 21:33:33
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5af4c776"],{"06f9":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[e("el-card",{attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))])]},proxy:!0}])},[e("vab-chart",{attrs:{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"}})],1)],1)},n=[],i=a("55fd"),l={name:"VabChartCandlestick",components:{VabChart:i["default"]},props:{title:{type:String,default:""}},data(){return{initOptions:{renderer:"svg"},option:{grid:{top:20,right:20,bottom:40,left:40},xAxis:{data:["2017-10-24","2017-10-25","2017-10-26","2017-10-27"]},yAxis:{},series:[{type:"k",data:[[20,34,10,38],[40,35,30,50],[31,38,33,44],[38,15,5,42]]}]}}}},o=l,s=a("829d"),u=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=u.exports},"07a2":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[e("el-card",{attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))])]},proxy:!0}])},[e("vab-chart",{attrs:{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"}})],1)],1)},n=[],i=a("55fd"),l={name:"VabChartSunburst",components:{VabChart:i["default"]},props:{title:{type:String,default:""}},data(){return{initOptions:{renderer:"svg"},option:{grid:{top:20,right:20,bottom:20,left:20},series:{type:"sunburst",data:[{children:[{value:5,children:[{value:1},{value:2,children:[{value:1}]},{children:[{value:1}]}]},{value:10,children:[{value:6,children:[{value:1},{value:1},{value:1},{value:1}]},{value:2,children:[{value:1}]},{children:[{value:1}]}]}]},{value:9,children:[{value:4,children:[{value:2},{children:[{value:1}]}]},{children:[{value:3,children:[{value:1},{value:1}]}]}]},{value:7,children:[{children:[{value:1},{value:3,children:[{value:1},{value:1}]},{value:2,children:[{value:1},{value:1}]}]}]},{children:[{value:6,children:[{value:1},{value:2,children:[{value:2}]},{value:1}]},{value:3,children:[{value:1},{children:[{value:1}]},{value:1}]}]}],radius:["10%","100%"],label:{rotate:"radial"}}}}}},o=l,s=a("829d"),u=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=u.exports},"10f7":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[e("el-card",{attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))])]},proxy:!0}])},[e("vab-chart",{attrs:{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"}})],1)],1)},n=[],i=a("55fd"),l={name:"VabChartBar",components:{VabChart:i["default"]},props:{title:{type:String,default:""}},data(){return{initOptions:{renderer:"svg"},option:{grid:{top:20,right:20,bottom:40,left:40},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:{data:[120,200,150,80,70,110,130],type:"bar"}}}}},o=l,s=a("829d"),u=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=u.exports},"25c3":function(t,e,a){},"2a02":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[e("el-card",{attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))])]},proxy:!0}])},[e("vab-chart",{attrs:{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"}})],1)],1)},n=[],i=a("55fd"),l={name:"VabChartTreemap",components:{VabChart:i["default"]},props:{title:{type:String,default:""}},data(){return{initOptions:{renderer:"svg"},option:{grid:{top:20,right:20,bottom:60,left:40},series:[{type:"treemap",data:[{name:"nodeA",value:10,children:[{name:"nodeAa",value:4},{name:"nodeAb",value:6}]},{name:"nodeB",value:20,children:[{name:"nodeBa",value:20,children:[{name:"nodeBa1",value:20}]}]}]}]}}}},o=l,s=a("829d"),u=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=u.exports},"8fb4":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[e("el-card",{attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))])]},proxy:!0}])},[e("vab-chart",{attrs:{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"}})],1)],1)},n=[],i=a("55fd"),l={name:"VabChartScatter",components:{VabChart:i["default"]},props:{title:{type:String,default:""}},data(){return{initOptions:{renderer:"svg"},option:{grid:{top:20,right:20,bottom:40,left:40},xAxis:{},yAxis:{},series:{symbolSize:10,data:[[10,8.04],[8.07,6.95],[13,7.58],[9.05,8.81],[11,8.33],[14,7.66],[13.4,6.81],[10,6.33],[14,8.96],[12.5,6.82],[9.15,7.2],[11.5,7.2],[3.03,4.23],[12.2,7.83],[2.02,4.47],[1.05,3.33],[4.05,4.96],[6.03,7.24],[12,6.26],[12,8.84],[7.08,5.82],[5.02,5.68]],type:"scatter"}}}}},o=l,s=a("829d"),u=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=u.exports},"9b19":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[e("el-card",{attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))])]},proxy:!0}])},[e("vab-chart",{attrs:{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"}})],1)],1)},n=[],i=a("55fd"),l={name:"VabChartRadar",components:{VabChart:i["default"]},props:{title:{type:String,default:""}},data(){return{initOptions:{renderer:"svg"},option:{grid:{top:20,right:20,bottom:40,left:40},radar:{indicator:[{name:"销售",max:6500},{name:"管理",max:16e3},{name:"信息技术",max:3e4},{name:"客服",max:38e3},{name:"研发",max:52e3}]},series:[{name:"预算 vs 开销",type:"radar",data:[{value:[4200,3e3,2e4,35e3,5e4],name:"预算分配"},{value:[5e3,14e3,28e3,26e3,42e3],name:"实际开销"}]}]}}}},o=l,s=a("829d"),u=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=u.exports},"9f66":function(t,e,a){"use strict";a("25c3")},a4d2:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"echarts-container"},[e("el-row",{attrs:{gutter:20}},[e("vab-chart-line",{attrs:{title:"折线图"}}),e("vab-chart-bar",{attrs:{title:"柱状图"}}),e("vab-chart-pie",{attrs:{title:"饼状图"}}),e("vab-chart-scatter",{attrs:{title:"散点图"}}),e("vab-chart-candlestick",{attrs:{title:"K线图"}}),e("vab-chart-radar",{attrs:{title:"雷达图"}}),e("vab-chart-treemap",{attrs:{title:"矩形树图"}}),e("vab-chart-sunburst",{attrs:{title:"旭日图"}}),e("vab-chart-funnel",{attrs:{title:"漏斗图"}}),e("vab-chart-gauge",{attrs:{title:"仪表图"}}),e("vab-chart-theme-river",{attrs:{title:"河流流向图"}})],1)],1)},n=[],i=a("acef"),l=a("10f7"),o=a("e8c3"),s=a("8fb4"),u=a("06f9"),d=a("9b19"),p=a("2a02"),c=a("07a2"),h=a("f5b3"),v=a("f8d2"),f=a("e5c6"),m={name:"Echarts",components:{VabChartLine:i["default"],VabChartBar:l["default"],VabChartPie:o["default"],VabChartScatter:s["default"],VabChartCandlestick:u["default"],VabChartRadar:d["default"],VabChartTreemap:p["default"],VabChartSunburst:c["default"],VabChartFunnel:h["default"],VabChartGauge:v["default"],VabChartThemeRiver:f["default"]},data(){return{}},methods:{}},b=m,S=(a("9f66"),a("829d")),g=Object(S["a"])(b,r,n,!1,null,"291d21ba",null);e["default"]=g.exports},acef:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[e("el-card",{attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))])]},proxy:!0}])},[e("vab-chart",{attrs:{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"}})],1)],1)},n=[],i=a("55fd"),l={name:"VabChartLine",components:{VabChart:i["default"]},props:{title:{type:String,default:""}},data(){return{initOptions:{renderer:"svg"},option:{grid:{top:20,right:20,bottom:40,left:40},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:{data:[150,230,224,218,135,147,260],type:"line"}}}}},o=l,s=a("829d"),u=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=u.exports},e5c6:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[e("el-card",{attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))])]},proxy:!0}])},[e("vab-chart",{attrs:{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"}})],1)],1)},n=[],i=a("55fd"),l={name:"VabChartThemeRiver",components:{VabChart:i["default"]},props:{title:{type:String,default:""}},data(){return{initOptions:{renderer:"svg"},option:{grid:{top:20,right:20,bottom:40,left:40},tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{color:"rgba(0,0,0,0.2)",width:1,type:"solid"}}},singleAxis:{top:20,bottom:40,axisTick:{},axisLabel:{},type:"time",axisPointer:{animation:!0,label:{show:!0}},splitLine:{show:!0,lineStyle:{type:"dashed",opacity:.2}}},series:{type:"themeRiver",emphasis:{itemStyle:{shadowBlur:20,shadowColor:"rgba(0, 0, 0, 0.8)"}},data:[["2015/11/08",10,"DQ"],["2015/11/09",15,"DQ"],["2015/11/10",35,"DQ"],["2015/11/11",38,"DQ"],["2015/11/12",22,"DQ"],["2015/11/13",16,"DQ"],["2015/11/14",7,"DQ"],["2015/11/15",2,"DQ"],["2015/11/16",17,"DQ"],["2015/11/17",33,"DQ"],["2015/11/18",40,"DQ"],["2015/11/19",32,"DQ"],["2015/11/20",26,"DQ"],["2015/11/21",35,"DQ"],["2015/11/22",40,"DQ"],["2015/11/23",32,"DQ"],["2015/11/24",26,"DQ"],["2015/11/25",22,"DQ"],["2015/11/26",16,"DQ"],["2015/11/27",22,"DQ"],["2015/11/28",10,"DQ"],["2015/11/08",35,"TY"],["2015/11/09",36,"TY"],["2015/11/10",37,"TY"],["2015/11/11",22,"TY"],["2015/11/12",24,"TY"],["2015/11/13",26,"TY"],["2015/11/14",34,"TY"],["2015/11/15",21,"TY"],["2015/11/16",18,"TY"],["2015/11/17",45,"TY"],["2015/11/18",32,"TY"],["2015/11/19",35,"TY"],["2015/11/20",30,"TY"],["2015/11/21",28,"TY"],["2015/11/22",27,"TY"],["2015/11/23",26,"TY"],["2015/11/24",15,"TY"],["2015/11/25",30,"TY"],["2015/11/26",35,"TY"],["2015/11/27",42,"TY"],["2015/11/28",42,"TY"],["2015/11/08",21,"SS"],["2015/11/09",25,"SS"],["2015/11/10",27,"SS"],["2015/11/11",23,"SS"],["2015/11/12",24,"SS"],["2015/11/13",21,"SS"],["2015/11/14",35,"SS"],["2015/11/15",39,"SS"],["2015/11/16",40,"SS"],["2015/11/17",36,"SS"],["2015/11/18",33,"SS"],["2015/11/19",43,"SS"],["2015/11/20",40,"SS"],["2015/11/21",34,"SS"],["2015/11/22",28,"SS"],["2015/11/23",26,"SS"],["2015/11/24",37,"SS"],["2015/11/25",41,"SS"],["2015/11/26",46,"SS"],["2015/11/27",47,"SS"],["2015/11/28",41,"SS"],["2015/11/08",10,"QG"],["2015/11/09",15,"QG"],["2015/11/10",35,"QG"],["2015/11/11",38,"QG"],["2015/11/12",22,"QG"],["2015/11/13",16,"QG"],["2015/11/14",7,"QG"],["2015/11/15",2,"QG"],["2015/11/16",17,"QG"],["2015/11/17",33,"QG"],["2015/11/18",40,"QG"],["2015/11/19",32,"QG"],["2015/11/20",26,"QG"],["2015/11/21",35,"QG"],["2015/11/22",40,"QG"],["2015/11/23",32,"QG"],["2015/11/24",26,"QG"],["2015/11/25",22,"QG"],["2015/11/26",16,"QG"],["2015/11/27",22,"QG"],["2015/11/28",10,"QG"],["2015/11/08",10,"SY"],["2015/11/09",15,"SY"],["2015/11/10",35,"SY"],["2015/11/11",38,"SY"],["2015/11/12",22,"SY"],["2015/11/13",16,"SY"],["2015/11/14",7,"SY"],["2015/11/15",2,"SY"],["2015/11/16",17,"SY"],["2015/11/17",33,"SY"],["2015/11/18",40,"SY"],["2015/11/19",32,"SY"],["2015/11/20",26,"SY"],["2015/11/21",35,"SY"],["2015/11/22",4,"SY"],["2015/11/23",32,"SY"],["2015/11/24",26,"SY"],["2015/11/25",22,"SY"],["2015/11/26",16,"SY"],["2015/11/27",22,"SY"],["2015/11/28",10,"SY"],["2015/11/08",10,"DD"],["2015/11/09",15,"DD"],["2015/11/10",35,"DD"],["2015/11/11",38,"DD"],["2015/11/12",22,"DD"],["2015/11/13",16,"DD"],["2015/11/14",7,"DD"],["2015/11/15",2,"DD"],["2015/11/16",17,"DD"],["2015/11/17",33,"DD"],["2015/11/18",4,"DD"],["2015/11/19",32,"DD"],["2015/11/20",26,"DD"],["2015/11/21",35,"DD"],["2015/11/22",40,"DD"],["2015/11/23",32,"DD"],["2015/11/24",26,"DD"],["2015/11/25",22,"DD"],["2015/11/26",16,"DD"],["2015/11/27",22,"DD"],["2015/11/28",10,"DD"]]}}}}},o=l,s=a("829d"),u=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=u.exports},e8c3:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[e("el-card",{attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))])]},proxy:!0}])},[e("vab-chart",{attrs:{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"}})],1)],1)},n=[],i=a("55fd"),l={name:"VabChartPie",components:{VabChart:i["default"]},props:{title:{type:String,default:""}},data(){return{initOptions:{renderer:"svg"},option:{grid:{top:20,right:20,bottom:40,left:40},tooltip:{trigger:"item"},series:[{name:"访问来源",type:"pie",radius:["40%","80%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"14"}},labelLine:{show:!1},data:[{value:1048,name:"搜索引擎"},{value:735,name:"直接访问"},{value:580,name:"邮件营销"},{value:484,name:"联盟广告"},{value:300,name:"视频广告"}]}]}}}},o=l,s=a("829d"),u=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=u.exports},f5b3:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[e("el-card",{attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))])]},proxy:!0}])},[e("vab-chart",{attrs:{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"}})],1)],1)},n=[],i=a("55fd"),l={name:"VabChartFunnel",components:{VabChart:i["default"]},props:{title:{type:String,default:""}},data(){return{initOptions:{renderer:"svg"},option:{grid:{top:20,right:20,bottom:20,left:20},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}%"},series:{name:"漏斗图",type:"funnel",left:"20%",top:20,bottom:20,width:"60%",min:0,max:100,minSize:"0%",maxSize:"100%",sort:"descending",gap:2,labelLine:{length:10,lineStyle:{width:1,type:"solid"}},emphasis:{label:{fontSize:12}},data:[{value:60,name:"访问"},{value:40,name:"咨询"},{value:20,name:"订单"},{value:80,name:"点击"},{value:100,name:"展现"}]}}}}},o=l,s=a("829d"),u=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=u.exports},f8d2:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[e("el-card",{attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))])]},proxy:!0}])},[e("vab-chart",{attrs:{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"}})],1)],1)},n=[],i=a("55fd"),l={name:"VabChartGauge",components:{VabChart:i["default"]},props:{title:{type:String,default:""}},data(){return{initOptions:{renderer:"svg"},option:{grid:{top:20,right:20,bottom:20,left:20},tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:{name:"Pressure",type:"gauge",radius:"100%",progress:{show:!0},detail:{formatter:"{value}",valueAnimation:!0,fontSize:14,offsetCenter:[0,"70%"]},data:[{value:50,name:"SCORE"}]}}}}},o=l,s=a("829d"),u=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=u.exports}}]);