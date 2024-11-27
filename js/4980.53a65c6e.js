"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[4980,5782],{30031:function(t,a,e){e.r(a),e.d(a,{default:function(){return C}});var s=function(){var t=this,a=t._self._c;return a("el-card",{attrs:{shadow:"never","body-style":"padding: 0;"}},[a("div",{staticClass:"ele-cell demo-monitor-tool"},[a("div",{staticClass:"ele-cell-content"},[a("el-tabs",{staticClass:"demo-monitor-tabs",on:{"tab-click":t.onSaleTypeChange},model:{value:t.saleSearch.type,callback:function(a){t.$set(t.saleSearch,"type",a)},expression:"saleSearch.type"}},[a("el-tab-pane",{attrs:{label:"销售额",name:"saleroom"}}),a("el-tab-pane",{attrs:{label:"访问量",name:"visits"}})],1)],1),a("div",{staticClass:"ele-inline-block hidden-xs-only"},[a("el-radio-group",{attrs:{size:"small"},model:{value:t.saleSearch.dateType,callback:function(a){t.$set(t.saleSearch,"dateType",a)},expression:"saleSearch.dateType"}},[a("el-radio-button",{attrs:{label:0}},[t._v("今天")]),a("el-radio-button",{attrs:{label:1}},[t._v("本周")]),a("el-radio-button",{attrs:{label:2}},[t._v("本月")]),a("el-radio-button",{attrs:{label:3}},[t._v("本年")])],1)],1),a("div",{staticClass:"ele-inline-block hidden-sm-and-down",staticStyle:{width:"260px","margin-left":"10px"}},[a("el-date-picker",{staticClass:"ele-fluid",attrs:{"unlink-panels":"",type:"daterange","end-placeholder":"结束日期","start-placeholder":"开始日期","range-separator":"至",size:"small"},model:{value:t.saleSearch.datetime,callback:function(a){t.$set(t.saleSearch,"datetime",a)},expression:"saleSearch.datetime"}})],1)]),a("el-divider"),a("el-row",[a("el-col",{attrs:{lg:18,md:16}},[a("div",{staticClass:"demo-monitor-title"},["saleroom"===t.saleSearch.type?a("span",[t._v("销售额趋势")]):a("span",[t._v("访问量趋势")])]),a("v-chart",{ref:"saleChart",staticStyle:{height:"285px"},attrs:{option:t.saleChartOption}})],1),a("el-col",{attrs:{lg:6,md:8}},[a("div",{staticClass:"demo-monitor-title",staticStyle:{display:"flex"}},[a("div",[t._v("门店")]),a("div",["saleroom"===t.saleSearch.type?a("span",[t._v("销售额")]):a("span",[t._v("访问量")])]),a("div",[t._v("排名")])]),t._l(t.saleroomRankData,(function(e,s){return a("div",{key:s,staticClass:"demo-monitor-rank-item ele-cell",staticStyle:{"margin-bottom":"15px"}},[a("el-tag",{staticClass:"ele-tag-round",staticStyle:{"border-color":"transparent"},attrs:{size:"mini",type:"info",effect:s<3?"dark":"light",color:s<3?"#314659":"hsla(0, 0%, 60%, .2)"}},[t._v(" "+t._s(s+1)+" ")]),a("div",{staticClass:"ele-cell-content"},[t._v(t._s(e.name))]),a("div",{staticClass:"ele-text-secondary"},[t._v(t._s(e.value))])],1)}))],2)],1)],1)},l=[],i=(e(58607),e(26029)),r=e(22358),o=e(46901),n=e(97201),c=e(23374),d=e(22689),h=e(70608),p=e(9919);(0,i.Y)([r.a,o.a,n.a,c.a]);var m={name:"SaleCard",components:{VChart:d.Ay},mixins:[(0,p.c)(["saleChart"])],data(){return{saleSearch:{type:"saleroom",dateType:0,datetime:""},saleroomData1:[],saleroomData2:[],saleroomRankData:[{name:"工专路 1 号店",value:"323,234"},{name:"工专路 2 号店",value:"323,234"},{name:"工专路 3 号店",value:"323,234"},{name:"工专路 4 号店",value:"323,234"},{name:"工专路 5 号店",value:"323,234"},{name:"工专路 6 号店",value:"323,234"},{name:"工专路 7 号店",value:"323,234"}],saleChartOption:{}}},created(){this.getSaleroomData()},methods:{getSaleroomData(){(0,h.bQ)().then((t=>{this.saleroomData1=t.list1,this.saleroomData2=t.list2,this.onSaleTypeChange()})).catch((t=>{this.$message.error(t.message)}))},onSaleTypeChange(){const t="saleroom"===this.saleSearch.type,a=t?this.saleroomData1:this.saleroomData2;this.saleChartOption={tooltip:{trigger:"axis"},xAxis:[{type:"category",data:a.map((t=>t.month))}],yAxis:[{type:"value"}],series:[{type:"bar",data:a.map((t=>t.value))}]}}}},v=m,u=e(64008),y=(0,u.A)(v,s,l,!1,null,"70f577da",null),C=y.exports},50635:function(t,a,e){e.r(a),e.d(a,{default:function(){return g}});var s=function(){var t=this,a=t._self._c;return a("el-row",{attrs:{gutter:15}},[a("el-col",{attrs:{lg:6,md:12}},[a("el-card",{staticClass:"analysis-chart-card",attrs:{shadow:"never"}},[a("div",{staticClass:"ele-cell",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"ele-cell-content"},[t._v("总销售额")]),a("el-tooltip",{attrs:{content:"指标说明",placement:"top"}},[a("i",{staticClass:"el-icon-_question ele-text-placeholder",staticStyle:{cursor:"pointer"}})])],1),a("div",{staticClass:"analysis-chart-card-num ele-text-heading"},[t._v("¥ 126,560")]),a("div",{staticClass:"analysis-chart-card-content",staticStyle:{"padding-top":"18px"}},[a("span",{staticClass:"ele-action"},[a("span",[t._v("周同比12%")]),a("i",{staticClass:"el-icon-caret-top ele-text-danger"})]),a("span",{staticClass:"ele-action"},[a("span",[t._v("日同比11%")]),a("i",{staticClass:"el-icon-caret-bottom ele-text-success"})])]),a("el-divider"),a("div",{staticClass:"analysis-chart-card-text"},[t._v("日销售额 ¥12,423")])],1)],1),a("el-col",{attrs:{lg:6,md:12}},[a("el-card",{staticClass:"analysis-chart-card",attrs:{shadow:"never"}},[a("div",{staticClass:"ele-cell",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"ele-cell-content"},[t._v("访问量")]),a("el-tag",{attrs:{size:"mini",type:"danger"}},[t._v("日")])],1),a("div",{staticClass:"analysis-chart-card-num ele-text-heading"},[t._v("8,846")]),a("div",{staticClass:"analysis-chart-card-content"},[a("v-chart",{ref:"visitChart",staticStyle:{height:"40px"},attrs:{option:t.visitChartOption}})],1),a("el-divider"),a("div",{staticClass:"analysis-chart-card-text"},[t._v("日访问量 1,234")])],1)],1),a("el-col",{attrs:{lg:6,md:12}},[a("el-card",{staticClass:"analysis-chart-card",attrs:{shadow:"never"}},[a("div",{staticClass:"ele-cell",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"ele-cell-content"},[t._v("支付笔数")]),a("el-tag",{attrs:{size:"mini"}},[t._v("月")])],1),a("div",{staticClass:"analysis-chart-card-num ele-text-heading"},[t._v("6,560")]),a("div",{staticClass:"analysis-chart-card-content"},[a("v-chart",{ref:"payNumChart",staticStyle:{height:"40px"},attrs:{option:t.payNumChartOption}})],1),a("el-divider"),a("div",{staticClass:"analysis-chart-card-text"},[t._v("转化率 60%")])],1)],1),a("el-col",{attrs:{lg:6,md:12}},[a("el-card",{staticClass:"analysis-chart-card",attrs:{shadow:"never"}},[a("div",{staticClass:"ele-cell",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"ele-cell-content"},[t._v("运营活动效果")]),a("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("周")])],1),a("div",{staticClass:"analysis-chart-card-num ele-text-heading"},[t._v("78%")]),a("div",{staticClass:"analysis-chart-card-content",staticStyle:{"padding-top":"25px"}},[a("el-progress",{attrs:{percentage:78,"show-text":!1,"stroke-width":10,color:"#13c2c2"}})],1),a("el-divider"),a("div",{staticClass:"analysis-chart-card-text"},[a("span",{staticClass:"ele-action"},[a("span",[t._v("周同比12%")]),a("i",{staticClass:"el-icon-caret-top ele-text-danger"})]),a("span",{staticClass:"ele-action"},[a("span",[t._v("日同比11%")]),a("i",{staticClass:"el-icon-caret-bottom ele-text-success"})])])],1)],1)],1)},l=[],i=(e(58607),e(26029)),r=e(22358),o=e(97527),n=e(46901),c=e(97201),d=e(23374),h=e(22689),p=e(70608),m=e(9919);(0,i.Y)([r.a,o.a,n.a,c.a,d.a]);var v={name:"StatisticsCard",components:{VChart:h.Ay},mixins:[(0,m.c)(["visitChart","payNumChart"])],data(){return{visitChartOption:{},payNumChartOption:{}}},created(){this.getPayNumData()},methods:{getPayNumData(){(0,p.J0)().then((t=>{this.visitChartOption={color:"#975fe5",tooltip:{trigger:"axis",formatter:'<i class="ele-chart-dot" style="background: #975fe5;"></i>{b0}: {c0}'},grid:{top:10,bottom:0,left:0,right:0},xAxis:[{show:!1,type:"category",boundaryGap:!1,data:t.map((t=>t.date))}],yAxis:[{show:!1,type:"value",splitLine:{show:!1}}],series:[{type:"line",smooth:!0,symbol:"none",areaStyle:{opacity:.5},data:t.map((t=>t.value))}]},this.payNumChartOption={tooltip:{trigger:"axis",formatter:'<i class="ele-chart-dot" style="background: #3aa1ff;"></i>{b0}: {c0}'},grid:{top:10,bottom:0,left:0,right:0},xAxis:[{show:!1,type:"category",data:t.map((t=>t.date))}],yAxis:[{show:!1,type:"value",splitLine:{show:!1}}],series:[{type:"bar",data:t.map((t=>t.value))}]}})).catch((t=>{this.$message.error(t.message)}))}}},u=v,y=e(64008),C=(0,y.A)(u,s,l,!1,null,"ff730be8",null),g=C.exports},55782:function(t,a,e){e.r(a),e.d(a,{default:function(){return g}});var s=function(){var t=this,a=t._self._c;return a("el-card",{attrs:{shadow:"never",header:"最近1小时访问情况","body-style":"padding: 14px 5px 0 0;"}},[a("v-chart",{ref:"visitHourChart",staticStyle:{height:"323px"},attrs:{option:t.visitHourChartOption}})],1)},l=[],i=(e(58607),e(26029)),r=e(22358),o=e(97527),n=e(97201),c=e(23374),d=e(90594),h=e(22689),p=e(70608),m=e(9919);(0,i.Y)([r.a,o.a,n.a,c.a,d.a]);var v={name:"VisitHour",components:{VChart:h.Ay},mixins:[(0,m.c)(["visitHourChart"])],data(){return{visitHourChartOption:{}}},created(){this.getVisitHourData()},methods:{getVisitHourData(){(0,p.qi)().then((t=>{this.visitHourChartOption={tooltip:{trigger:"axis"},legend:{data:["浏览量","访问量"],right:20},xAxis:[{type:"category",boundaryGap:!1,data:t.map((t=>t.time))}],yAxis:[{type:"value"}],series:[{name:"浏览量",type:"line",smooth:!0,symbol:"none",areaStyle:{opacity:.5},data:t.map((t=>t.views))},{name:"访问量",type:"line",smooth:!0,symbol:"none",areaStyle:{opacity:.5},data:t.map((t=>t.visits))}]}})).catch((t=>{this.$message.error(t.message)}))}}},u=v,y=e(64008),C=(0,y.A)(u,s,l,!1,null,null,null),g=C.exports},54980:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"ele-body ele-body-card"},[a("statistics-card"),a("sale-card"),a("el-row",{attrs:{gutter:15}},[a("el-col",{attrs:{lg:18,md:16}},[a("visit-hour")],1),a("el-col",{attrs:{lg:6,md:8}},[a("hot-search")],1)],1)],1)},l=[],i=e(50635),r=e(30031),o=e(55782),n=e(97357),c={name:"DashboardAnalysis",components:{StatisticsCard:i["default"],SaleCard:r["default"],VisitHour:o["default"],HotSearch:n["default"]}},d=c,h=e(64008),p=(0,h.A)(d,s,l,!1,null,null,null),m=p.exports}}]);