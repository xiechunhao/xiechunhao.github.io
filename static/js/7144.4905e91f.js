/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-11 23:03:09
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4122,7144],{69287:function(e,t,a){a.d(t,{A:function(){return y}});var n=a(56974),o=(a(27322),a(37183),a(59677)),s=(a(35685),a(34641)),r=a(37489),i=a(27386),l=a(12176),d=(0,s.pM)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,r.KR)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,l.JZ)(((e,a,n)=>{clearInterval(t),n()})),(t,l)=>{const d=o.d1,u=n.Ik;return(0,s.uX)(),(0,s.Wv)(u,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,s.eX)({default:(0,s.k6)((()=>[e.skeleton?((0,s.uX)(),(0,s.Wv)(d,{key:0,animated:"",loading:(0,r.R1)(a),rows:e.skeletonRows},{default:(0,s.k6)((()=>[(0,s.RG)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,s.RG)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,s.k6)((()=>[(0,s.RG)(t.$slots,"header",{},(()=>[(0,s.eW)((0,i.v_)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function u(e){e.__source="library/components/VabCard/index.vue"}var c=a(48499);"function"===typeof u&&u(d);const p=(0,c.A)(d,[["__scopeId","data-v-391150ea"]]);var y=p},88740:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(69287),o=a(34641);function s(e,t,a,s,r,i){const l=(0,o.g2)("vab-icon"),d=(0,o.g2)("vab-chart"),u=n.A;return(0,o.uX)(),(0,o.Wv)(u,{class:"trend",shadow:"hover",skeleton:""},{header:(0,o.k6)((()=>[(0,o.Lk)("span",null,[(0,o.bF)(l,{icon:"line-chart-fill"}),t[0]||(t[0]=(0,o.eW)(" 趋势 "))])])),default:(0,o.k6)((()=>[(0,o.bF)(d,{class:"trend-echart","init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})}var r=a(72034),i=a(37489),l=(0,o.pM)({components:{VabChart:r["default"]},setup(){const e=(0,i.Kh)({initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"4%",left:"2%",right:"2%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],boundaryGap:!1}],yAxis:[{type:"value"}],series:[{name:"签单",type:"line",data:[1295,3020,1330,512,4463,2214,3330,2412,1205,820,3330,912],symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,areaStyle:{opacity:.8}},{name:"回款",type:"line",data:[2905,2020,1730,128,963,4614,630,1912,1005,1782,1530,912],symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,areaStyle:{opacity:.8}}]}});return{...(0,i.QW)(e)}}});function d(e){e.__source="src/views/index/components/Trend.vue"}var u=a(48499);"function"===typeof d&&d(l);const c=(0,u.A)(l,[["render",s]]);var p=c}}]);