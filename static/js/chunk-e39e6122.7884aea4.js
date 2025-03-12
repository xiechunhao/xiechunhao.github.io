/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-12 21:33:33
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e39e6122"],{"0e94":function(t,o,e){"use strict";e("f586")},"0eea":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t._self._c;return o("div",{staticClass:"target"},[o("el-card",{staticClass:"target-card1",attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[o("vab-icon",{attrs:{icon:"body-scan-line"}}),t._v(" 小目标 ")]},proxy:!0}])},[o("vab-chart",{staticClass:"target-echart1",attrs:{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"}})],1),o("el-card",{staticClass:"target-card2",attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[o("span",[o("vab-icon",{attrs:{icon:"money-cny-box-line"}}),t._v(" 销售额 ")],1)]},proxy:!0}])},[o("vab-chart",{staticClass:"target-echart2",attrs:{"init-options":t.initOptions,option:t.option2,theme:"vab-echarts-theme"}})],1)],1)},r=[],i=e("55fd"),n={components:{VabChart:i["default"]},data(){const t=["#9E87FF","#73DDFF","#fe9a8b","#F56948","#9E87FF"];return{initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"0%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:[{splitLine:{show:!1},type:"value",show:!1}],yAxis:[{splitLine:{show:!1},axisLine:{show:!1},type:"category",axisTick:{show:!1},data:["莱山区","高新区","芝罘区","牟平区","蓬莱区","开发区"]}],series:[{name:"目标",type:"bar",barWidth:25,label:{show:!0,position:"right",color:"#1890FF",fontSize:14,formatter:({data:t})=>t+"亿元"},itemStyle:{borderRadius:[0,5,5,0],color:new i["default"].graphic.LinearGradient(0,0,1,0,["#3ED572","#399efd"].map((t,o)=>({color:t,offset:o})))},data:[320,302,341,374,390,650]}]},option2:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"4%",left:"2%",right:"2%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisLine:{lineStyle:{color:"#DCE2E8"}},axisTick:{show:!1},axisLabel:{interval:0,color:"#556677",fontSize:12,margin:15},axisPointer:{label:{padding:[0,0,10,0],margin:15,fontSize:12,backgroundColor:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#fff"},{offset:.86,color:"#fff"},{offset:.86,color:"#33c0cd"},{offset:1,color:"#33c0cd"}],global:!1}}},boundaryGap:!1}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#DCE2E8"}},axisLabel:{color:"#556677"},splitLine:{show:!1}}],series:[{name:"销售额",type:"line",data:[1905,1020,3330,512,4463,2214,3330,5412,1205,820,5330,1112],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new i["default"].graphic.LinearGradient(1,1,0,0,[{offset:0,color:"#73DD39"},{offset:1,color:"#73DDFF"}]),shadowColor:"rgba(115,221,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{color:t[1],borderColor:t[1]}}]}}}},s=n,l=(e("3aae"),e("829d")),c=Object(l["a"])(s,a,r,!1,null,"1584c66a",null);o["default"]=c.exports},"0ef8":function(t,o,e){},"3aae":function(t,o,e){"use strict";e("0ef8")},"5c35":function(t,o,e){},f466:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t._self._c;return o("div",{staticClass:"order"},[o("el-card",{staticClass:"order-card1",attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[o("vab-icon",{attrs:{icon:"shopping-bag-2-line"}}),t._v(" 商品 ")]},proxy:!0}])},[o("el-row",{staticClass:"order-card1-content"},[o("el-col",{attrs:{span:8}},[o("p",[t._v("已售数量")]),o("h1",[o("vab-count",{attrs:{decimals:t.countConfig.decimals,duration:t.countConfig.duration,"end-val":t.countConfig.endVal,prefix:t.countConfig.prefix,separator:t.countConfig.separator,"start-val":t.countConfig.startVal,suffix:t.countConfig.suffix}})],1)]),o("el-col",{attrs:{span:8}},[o("p",[t._v("待售数量")]),o("h1",[o("vab-count",{attrs:{decimals:t.countConfig.decimals,duration:t.countConfig.duration,"end-val":t.countConfig.endVal,prefix:t.countConfig.prefix,separator:t.countConfig.separator,"start-val":t.countConfig.startVal,suffix:t.countConfig.suffix}})],1)]),o("el-col",{attrs:{span:8}},[o("p",[t._v("好评度")]),o("h1",[t._v("99%")])])],1)],1),o("el-card",{staticClass:"order-card2",attrs:{shadow:"hover"},scopedSlots:t._u([{key:"header",fn:function(){return[o("span",[o("vab-icon",{attrs:{icon:"list-unordered"}}),t._v(" 订单 ")],1)]},proxy:!0}])},[o("el-row",{staticClass:"order-card2-content"},[o("el-col",{attrs:{span:12}},[o("p",[t._v("已完成订单")]),o("h1",[o("vab-count",{attrs:{decimals:t.countConfig.decimals,duration:t.countConfig.duration,"end-val":1.5*t.countConfig.endVal,prefix:t.countConfig.prefix,separator:t.countConfig.separator,"start-val":t.countConfig.startVal,suffix:t.countConfig.suffix}})],1)]),o("el-col",{attrs:{span:12}},[o("p",[t._v("计划完成订单")]),o("h1",[o("vab-count",{attrs:{decimals:t.countConfig.decimals,duration:t.countConfig.duration,"end-val":2.5*t.countConfig.endVal,prefix:t.countConfig.prefix,separator:t.countConfig.separator,"start-val":t.countConfig.startVal,suffix:t.countConfig.suffix}})],1)]),o("el-col",{attrs:{span:24}},[o("vab-chart",{staticClass:"order-chart",attrs:{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"}})],1)],1)],1)],1)},r=[],i=e("55fd"),n=e("54a7"),s=e("7c98"),l=e.n(s),c={components:{VabCount:n["default"],VabChart:i["default"]},data(){const t=["#9E87FF","#73DDFF","#fe9a8b","#F56948","#9E87FF"];return{countConfig:{startVal:0,endVal:l.a.random(1e3,6e3),decimals:0,prefix:"",suffix:"",separator:",",duration:5e3},initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{left:"3%",containLabel:!0},xAxis:[{type:"category",data:["1季度","2季度","3季度","4季度"],axisLine:{lineStyle:{color:"#DCE2E8"}},axisTick:{show:!1},axisLabel:{interval:0,color:"#556677",fontSize:12,margin:15},axisPointer:{label:{padding:[0,0,10,0],margin:15,fontSize:12,backgroundColor:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#fff"},{offset:.86,color:"#fff"},{offset:.86,color:"#33c0cd"},{offset:1,color:"#33c0cd"}],global:!1}}},boundaryGap:!1}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#DCE2E8"}},axisLabel:{color:"#556677"},splitLine:{show:!1}}],series:[{name:"已完成订单",type:"line",data:[1345,2100,1330,2901],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new i["default"].graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#9effff"},{offset:1,color:"#9E87FF"}]),shadowColor:"rgba(158,135,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{color:t[0],borderColor:t[0]}},{name:"未完成订单",type:"line",data:[1905,1020,3330,512],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new i["default"].graphic.LinearGradient(1,1,0,0,[{offset:0,color:"#73DD39"},{offset:1,color:"#73DDFF"}]),shadowColor:"rgba(115,221,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{color:t[1],borderColor:t[1]}}]}}}},f=c,d=(e("fc97"),e("829d")),u=Object(d["a"])(f,a,r,!1,null,"5774b839",null);o["default"]=u.exports},f586:function(t,o,e){},fc97:function(t,o,e){"use strict";e("5c35")},fedc:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t._self._c;return o("div",{staticClass:"workbench-container"},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{lg:8,md:12,sm:24,xl:6,xs:24}},[o("order")],1),o("el-col",{attrs:{lg:16,md:12,sm:24,xl:18,xs:24}},[o("target")],1)],1)],1)},r=[],i=e("f466"),n=e("0eea"),s={name:"Workbench",components:{Order:i["default"],Target:n["default"]}},l=s,c=(e("0e94"),e("829d")),f=Object(c["a"])(l,a,r,!1,null,"73fce909",null);o["default"]=f.exports}}]);