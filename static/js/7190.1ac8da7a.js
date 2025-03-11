/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-11 22:54:54
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4122,7190],{53205:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var n=a(34641),o=a(27386);const i={class:"bottom"};function r(t,e,a,r,s,l){const u=(0,n.g2)("vab-icon"),c=(0,n.g2)("el-tag"),p=(0,n.g2)("vab-chart"),d=(0,n.g2)("vab-count"),f=(0,n.g2)("vab-card");return(0,n.uX)(),(0,n.Wv)(f,{class:"authorization",shadow:"hover",skeleton:""},{header:(0,n.k6)((()=>[(0,n.bF)(u,{icon:"bar-chart-2-line"}),e[1]||(e[1]=(0,n.eW)(" 授权数 ")),(0,n.bF)(c,{class:"card-header-tag",type:"warning"},{default:(0,n.k6)((()=>e[0]||(e[0]=[(0,n.eW)("周")]))),_:1})])),default:(0,n.k6)((()=>[(0,n.bF)(p,{"init-options":t.initOptions,option:t.option,theme:"vab-echarts-theme"},null,8,["init-options","option"]),(0,n.Lk)("div",i,[(0,n.Lk)("span",null,[e[2]||(e[2]=(0,n.eW)(" 授权数: ")),(0,n.bF)(d,{decimals:t.countConfig.decimals,duration:t.countConfig.duration,"end-val":t.countConfig.endVal,prefix:t.countConfig.prefix,separator:t.countConfig.separator,"start-val":t.countConfig.startVal,suffix:t.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"]),(0,n.bF)(c,{class:"card-footer-tag",type:"success"},{default:(0,n.k6)((()=>[(0,n.eW)("倒计时 "+(0,o.v_)(t.n)+"s",1)])),_:1})])])])),_:1})}a(94473),a(55759);var s=a(45182),l=a.n(s),u=a(17639),c=a(96615),p=a(90966),d=a(37489),f=a(12176),g=(0,n.pM)({name:"Authorization",components:{VabChart:u["default"],VabCount:c["default"]},setup(){const t=(0,p.C)(),{echartsGraphic2:e}=storeToRefs(t),a=(0,d.Kh)({timer:null,n:5,countConfig:{startVal:0,endVal:l().random(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3},initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"5%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["0时","4时","8时","12时","16时","20时","24时"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"授权数",type:"bar",barWidth:"60%",data:[10,52,20,33,39,33,22],itemStyle:{borderRadius:[2,2,0,0],color:new u["default"].graphic.LinearGradient(0,0,0,1,e.value.map(((t,e)=>({color:t,offset:e}))))}}]}});return(0,n.wB)((()=>e.value),(()=>{a.option.series[0].itemStyle.color=new u["default"].graphic.LinearGradient(0,0,0,1,e.value.map(((t,e)=>({color:t,offset:e}))))})),(0,f.JZ)(((t,e,n)=>{clearInterval(a.timer),n()})),(0,n.sV)((()=>{a.timer=setInterval((()=>{a.n>0?a.n--:(a.option.series[0].type=l().sample(l().pull(["bar","line","scatter"],a.option.series[0].type)),a.n=5)}),1e3)})),{...(0,d.QW)(a)}}});function v(t){t.__source="src/views/index/components/Authorization.vue"}var h=a(48499);"function"===typeof v&&v(g);const b=(0,h.A)(g,[["render",r]]);var m=b}}]);