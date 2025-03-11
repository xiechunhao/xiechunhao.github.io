/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-11 22:54:54
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[197,1044,3064,4122,4588,6395,9370],{6395:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(34641),o=a(27386);const r={class:"right-icon"},i={class:"bottom"};function s(e,t,a,s,l,c){const d=(0,n.g2)("vab-count"),u=(0,n.g2)("vab-icon"),p=(0,n.g2)("vab-card");return(0,n.uX)(),(0,n.Wv)(p,{class:(0,o.C4)(["top-card","top-card-"+e.background]),shadow:"hover"},{default:(0,n.k6)((()=>[(0,n.Lk)("span",null,(0,o.v_)(e.title),1),(0,n.Lk)("p",null,[(0,n.bF)(d,{decimals:e.countConfig.decimals,duration:e.countConfig.duration,"end-val":e.countConfig.endVal,prefix:e.countConfig.prefix,separator:e.countConfig.separator,"start-val":e.countConfig.startVal,suffix:e.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])]),(0,n.Lk)("div",r,[(0,n.bF)(u,{icon:e.icon},null,8,["icon"])]),(0,n.Lk)("div",i,[t[0]||(t[0]=(0,n.eW)(" 自上周以来 ")),(0,n.bF)(u,{icon:"arrow-up-line"}),(0,n.Lk)("span",null,(0,o.v_)(e.percentage),1)])])),_:1},8,["class"])}var l=a(45182),c=a.n(l),d=a(96615),u=a(37489),p=(0,n.pM)({name:"TopCard",components:{VabCount:d["default"]},props:{background:{type:String,default:"white"},title:{type:String,default:"Test"},icon:{type:String,default:"album-line"},percentage:{type:String,default:"10%"},countConfig:{type:Object,default:()=>({startVal:0,endVal:c().random(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3})}},setup(){const e=(0,u.Kh)({});return{...(0,u.QW)(e)}}});function b(e){e.__source="src/views/index/components/TopCard.vue"}var f=a(48499);"function"===typeof b&&b(p);const v=(0,f.A)(p,[["render",s],["__scopeId","data-v-44f98028"]]);var m=v},20197:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(34641);const o={class:"tabs"};function r(e,t,a,r,i,s){const l=(0,n.g2)("el-table-column"),c=(0,n.g2)("el-empty"),d=(0,n.g2)("el-table"),u=(0,n.g2)("el-tab-pane"),p=(0,n.g2)("el-tabs"),b=(0,n.g2)("vab-card");return(0,n.uX)(),(0,n.CE)("div",o,[(0,n.bF)(b,{class:"tabs-card",shadow:"hover"},{default:(0,n.k6)((()=>[(0,n.bF)(p,{modelValue:e.activeName,"onUpdate:modelValue":t[0]||(t[0]=t=>e.activeName=t)},{default:(0,n.k6)((()=>[(0,n.bF)(u,{label:"配送管理",name:"first"},{default:(0,n.k6)((()=>[(0,n.bF)(d,{data:e.tableData,height:"280"},{empty:(0,n.k6)((()=>[(0,n.bF)(c,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,n.k6)((()=>[(0,n.bF)(l,{label:"日期",prop:"date"}),(0,n.bF)(l,{label:"配送信息"},{default:(0,n.k6)((()=>[(0,n.bF)(l,{label:"姓名",prop:"name"}),(0,n.bF)(l,{label:"省份",prop:"province"}),(0,n.bF)(l,{label:"市区",prop:"city"}),(0,n.bF)(l,{label:"地址",prop:"address"}),(0,n.bF)(l,{label:"邮编",prop:"zip"})])),_:1})])),_:1},8,["data"])])),_:1}),(0,n.bF)(u,{label:"区域管理",name:"second"},{default:(0,n.k6)((()=>[(0,n.bF)(d,{data:e.tableData,height:"280"},{empty:(0,n.k6)((()=>[(0,n.bF)(c,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,n.k6)((()=>[(0,n.bF)(l,{label:"日期",prop:"date"}),(0,n.bF)(l,{label:"区域信息"},{default:(0,n.k6)((()=>[(0,n.bF)(l,{label:"姓名",prop:"name"}),(0,n.bF)(l,{label:"省份",prop:"province"}),(0,n.bF)(l,{label:"市区",prop:"city"}),(0,n.bF)(l,{label:"地址",prop:"address"}),(0,n.bF)(l,{label:"邮编",prop:"zip"})])),_:1})])),_:1},8,["data"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])}var i=(0,n.pM)({data(){return{activeName:"first",tableData:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}]}}});function s(e){e.__source="src/views/index/components/Tabs.vue"}var l=a(48499);"function"===typeof s&&s(i);const c=(0,l.A)(i,[["render",r],["__scopeId","data-v-53e6f2a4"]]);var d=c},36721:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(34641);function o(e,t,a,o,r,i){const s=(0,n.g2)("vab-icon"),l=(0,n.g2)("vab-chart"),c=(0,n.g2)("vab-card");return(0,n.uX)(),(0,n.Wv)(c,{class:"trend",shadow:"hover",skeleton:""},{header:(0,n.k6)((()=>[(0,n.Lk)("span",null,[(0,n.bF)(s,{icon:"line-chart-fill"}),t[0]||(t[0]=(0,n.eW)(" 趋势 "))])])),default:(0,n.k6)((()=>[(0,n.bF)(l,{class:"trend-echart","init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})}var r=a(17639),i=a(37489),s=(0,n.pM)({components:{VabChart:r["default"]},setup(){const e=(0,i.Kh)({initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"4%",left:"2%",right:"2%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],boundaryGap:!1}],yAxis:[{type:"value"}],series:[{name:"签单",type:"line",data:[1295,3020,1330,512,4463,2214,3330,2412,1205,820,3330,912],symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,areaStyle:{opacity:.8}},{name:"回款",type:"line",data:[2905,2020,1730,128,963,4614,630,1912,1005,1782,1530,912],symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,areaStyle:{opacity:.8}}]}});return{...(0,i.QW)(e)}}});function l(e){e.__source="src/views/index/components/Trend.vue"}var c=a(48499);"function"===typeof l&&l(s);const d=(0,c.A)(s,[["render",o]]);var u=d},48787:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(34641);function o(e,t,a,o,r,i){const s=(0,n.g2)("vab-icon"),l=(0,n.g2)("vab-chart"),c=(0,n.g2)("vab-card");return(0,n.uX)(),(0,n.Wv)(c,{class:"rank",shadow:"hover",skeleton:""},{header:(0,n.k6)((()=>[(0,n.Lk)("span",null,[(0,n.bF)(s,{icon:"align-top"}),t[0]||(t[0]=(0,n.eW)(" 消費排行 "))])])),default:(0,n.k6)((()=>[(0,n.bF)(l,{class:"rank-echart","init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})}var r=a(17639),i=(0,n.pM)({components:{VabChart:r["default"]},data(){return{initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"0%",left:"2%",right:"20%",bottom:"0%",containLabel:!0},xAxis:[{splitLine:{show:!1},type:"value",show:!1}],yAxis:[{splitLine:{show:!1},axisLine:{show:!1},type:"category",axisTick:{show:!1},data:["good luck","曲丽丽","付小小","林东东","周星星","朱偏右"]}],series:[{name:"累计消费",type:"bar",barWidth:15,label:{show:!0,position:"right",fontSize:12,formatter:({data:e})=>`${e}万元`},itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:[23,54,68,76,87,99]}]}}}});function s(e){e.__source="src/views/index/components/Rank.vue"}var l=a(48499);"function"===typeof s&&s(i);const c=(0,l.A)(i,[["render",o]]);var d=c},71063:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(34641);const o={class:"dashboard-container"};function r(e,t,a,r,i,s){const l=(0,n.g2)("top-card"),c=(0,n.g2)("el-col"),d=(0,n.g2)("trend"),u=(0,n.g2)("branch"),p=(0,n.g2)("rank"),b=(0,n.g2)("tabs"),f=(0,n.g2)("el-row");return(0,n.uX)(),(0,n.CE)("div",o,[(0,n.bF)(f,{gutter:20},{default:(0,n.k6)((()=>[(0,n.bF)(c,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,n.k6)((()=>[(0,n.bF)(l,{background:"blue","count-config":e.countConfig1,icon:"money-cny-circle-line",percentage:"10%",title:"总销量"},null,8,["count-config"])])),_:1}),(0,n.bF)(c,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,n.k6)((()=>[(0,n.bF)(l,{background:"white",icon:"money-cny-box-line",percentage:"44%",title:"总成交"})])),_:1}),(0,n.bF)(c,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,n.k6)((()=>[(0,n.bF)(l,{background:"white",icon:"user-search-line",percentage:"30%",title:"活跃用户"})])),_:1}),(0,n.bF)(c,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,n.k6)((()=>[(0,n.bF)(l,{background:"white",icon:"passport-line",percentage:"10%",title:"订单"})])),_:1}),(0,n.bF)(c,{lg:12,md:12,sm:24,xl:12,xs:24},{default:(0,n.k6)((()=>[(0,n.bF)(d)])),_:1}),(0,n.bF)(c,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,n.k6)((()=>[(0,n.bF)(u)])),_:1}),(0,n.bF)(c,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,n.k6)((()=>[(0,n.bF)(p)])),_:1}),(0,n.bF)(c,{lg:24,md:24,sm:24,xl:24,xs:24},{default:(0,n.k6)((()=>[(0,n.bF)(b)])),_:1})])),_:1})])}var i=a(45182),s=a.n(i),l=a(36721),c=a(98475),d=a(48787),u=a(20197),p=a(6395),b=a(37489),f=(0,n.pM)({name:"Dashboard",components:{Trend:l["default"],Branch:c["default"],Rank:d["default"],Tabs:u["default"],TopCard:p["default"]},setup(){const e=(0,b.Kh)({countConfig1:{startVal:0,endVal:s().random(1e3,2e4),decimals:2,prefix:"￥",suffix:"",separator:",",duration:8e3}});return{...(0,b.QW)(e)}}});function v(e){e.__source="src/views/index/dashboard.vue"}var m=a(48499);"function"===typeof v&&v(f);const g=(0,m.A)(f,[["render",r],["__scopeId","data-v-3d9dc912"]]);var h=g},98475:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(34641);function o(e,t,a,o,r,i){const s=(0,n.g2)("vab-icon"),l=(0,n.g2)("vab-chart"),c=(0,n.g2)("vab-card");return(0,n.uX)(),(0,n.Wv)(c,{class:"branch",shadow:"hover",skeleton:""},{header:(0,n.k6)((()=>[(0,n.Lk)("span",null,[(0,n.bF)(s,{icon:"donut-chart-fill"}),t[0]||(t[0]=(0,n.eW)(" 分布 "))])])),default:(0,n.k6)((()=>[(0,n.bF)(l,{class:"branch-echart","init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})}var r=a(17639),i=(0,n.pM)({components:{VabChart:r["default"]},data(){return{initOptions:{renderer:"svg"},option:{tooltip:{trigger:"item"},series:[{name:"访问来源",type:"pie",radius:["50%","70%"],itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},emphasis:{label:{show:!0}},data:[{value:1048,name:"搜索引擎"},{value:735,name:"直接访问"},{value:580,name:"邮件营销"},{value:484,name:"联盟广告"},{value:300,name:"视频广告"}]}]}}}});function s(e){e.__source="src/views/index/components/Branch.vue"}var l=a(48499);"function"===typeof s&&s(i);const c=(0,l.A)(i,[["render",o]]);var d=c}}]);