/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-11 22:54:54
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4122,4706],{60377:function(e,a,n){n.r(a),n.d(a,{default:function(){return c}});var t=n(34641);function u(e,a,n,u,l,i){const o=(0,t.g2)("vab-icon"),m=(0,t.g2)("el-tag"),s=(0,t.g2)("vab-chart"),v=(0,t.g2)("vab-card");return(0,t.uX)(),(0,t.Wv)(v,{shadow:"hover",skeleton:"","skeleton-rows":6,style:{height:"383px"}},{header:(0,t.k6)((()=>[(0,t.bF)(o,{icon:"road-map-line"}),a[1]||(a[1]=(0,t.eW)(" 中国地图 ")),(0,t.bF)(m,{class:"card-header-tag",type:"warning"},{default:(0,t.k6)((()=>a[0]||(a[0]=[(0,t.eW)(" 我爱你中国，亲爱的母亲 ")]))),_:1})])),default:(0,t.k6)((()=>[(0,t.bF)(s,{"init-options":e.initOptions,option:e.option,style:{height:"283px"},theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})}var l=n(45182),i=n.n(l),o=n(17639),m=n(37489),s=(0,t.pM)({components:{VabChart:o["default"]},setup(){const e=(0,m.Kh)({countConfig:{startVal:0,endVal:i().random(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3},initOptions:{renderer:"svg"},option:{}}),a=async()=>{const{data:a}=await axios({url:"json/china.json",method:"get"});o["default"].registerMap("china",a),e.option={title:{text:"2099年全国GDP分布",subtext:"非真实数据"},tooltip:{trigger:"item"},dataRange:{min:0,max:55e3,text:["高","低"],splitNumber:0},series:[{name:"2099年全国GDP分布",type:"map",map:"china",emphasis:{label:{show:!0}},data:[{name:"西藏",value:605.83},{name:"青海",value:1670.44},{name:"宁夏",value:2102.21},{name:"海南",value:2522.66},{name:"甘肃",value:5020.37},{name:"贵州",value:5701.84},{name:"新疆",value:6610.05},{name:"云南",value:8893.12},{name:"重庆",value:10011.37},{name:"吉林",value:10568.83},{name:"山西",value:11237.55},{name:"天津",value:11307.28},{name:"江西",value:11702.82},{name:"广西",value:11720.87},{name:"陕西",value:12512.3},{name:"黑龙江",value:12582},{name:"内蒙古",value:14359.88},{name:"安徽",value:15300.65},{name:"北京",value:16251.93},{name:"福建",value:17560.18},{name:"上海",value:19195.69},{name:"湖北",value:19632.26},{name:"湖南",value:19669.56},{name:"四川",value:21026.68},{name:"辽宁",value:22226.7},{name:"河北",value:24515.76},{name:"河南",value:26931.03},{name:"浙江",value:32318.85},{name:"山东",value:45361.85,selected:!0},{name:"江苏",value:49110.27},{name:"广东",value:53210.28}]}]}};return(0,t.sV)((()=>{a()})),{...(0,m.QW)(e)}}});function v(e){e.__source="src/views/index/components/ChinaMap.vue"}var r=n(48499);"function"===typeof v&&v(s);const p=(0,r.A)(s,[["render",u]]);var c=p}}]);