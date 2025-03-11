/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-12 01:02:20
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4122,8565],{69287:function(e,t,o){o.d(t,{A:function(){return u}});var a=o(56974),s=(o(27322),o(37183),o(59677)),n=(o(35685),o(34641)),i=o(37489),r=o(27386),l=o(12176),d=(0,n.pM)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const o=(0,i.KR)(!0);return t=setTimeout((()=>{o.value=!1}),500),(0,l.JZ)(((e,o,a)=>{clearInterval(t),a()})),(t,l)=>{const d=s.d1,c=a.Ik;return(0,n.uX)(),(0,n.Wv)(c,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,n.eX)({default:(0,n.k6)((()=>[e.skeleton?((0,n.uX)(),(0,n.Wv)(d,{key:0,animated:"",loading:(0,i.R1)(o),rows:e.skeletonRows},{default:(0,n.k6)((()=>[(0,n.RG)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,n.RG)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,n.k6)((()=>[(0,n.RG)(t.$slots,"header",{},(()=>[(0,n.eW)((0,r.v_)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function c(e){e.__source="library/components/VabCard/index.vue"}var p=o(48499);"function"===typeof c&&c(d);const f=(0,p.A)(d,[["__scopeId","data-v-391150ea"]]);var u=f},77947:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var a=o(69287),s=o(34641);const n={class:"target"};function i(e,t,o,i,r,l){const d=(0,s.g2)("vab-icon"),c=(0,s.g2)("vab-chart"),p=a.A;return(0,s.uX)(),(0,s.CE)("div",n,[(0,s.bF)(p,{class:"target-card1",shadow:"hover",skeleton:"","skeleton-rows":7,style:{height:"380px"}},{header:(0,s.k6)((()=>[(0,s.bF)(d,{icon:"body-scan-line"}),t[0]||(t[0]=(0,s.eW)(" 小目标 "))])),default:(0,s.k6)((()=>[(0,s.bF)(c,{class:"target-echart1","init-option":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-option","option"])])),_:1}),(0,s.bF)(p,{class:"target-card2",shadow:"hover",skeleton:"","skeleton-rows":5,style:{height:"305px"}},{header:(0,s.k6)((()=>[(0,s.Lk)("span",null,[(0,s.bF)(d,{icon:"money-cny-box-line"}),t[1]||(t[1]=(0,s.eW)(" 销售额 "))])])),default:(0,s.k6)((()=>[(0,s.bF)(c,{class:"target-echart2","init-options":e.initOptions,option:e.option2,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})])}var r=o(72034),l=(0,s.pM)({components:{VabChart:r["default"]},setup(){const e=["#9E87FF","#73DDFF","#fe9a8b","#F56948","#9E87FF"];return{initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"0%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:[{splitLine:{show:!1},type:"value",show:!1}],yAxis:[{splitLine:{show:!1},axisLine:{show:!1},type:"category",axisTick:{show:!1},data:["莱山区","高新区","芝罘区","牟平区","蓬莱区","开发区"]}],series:[{name:"目标",type:"bar",barWidth:25,label:{show:!0,position:"right",color:"#1890FF",fontSize:14,formatter:({data:e})=>`${e}亿元`},itemStyle:{borderRadius:[0,5,5,0],color:new r["default"].graphic.LinearGradient(0,0,1,0,["#3ED572","#399efd"].map(((e,t)=>({color:e,offset:t}))))},data:[320,302,341,374,390,650]}]},option2:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"4%",left:"2%",right:"2%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisLine:{lineStyle:{color:"#DCE2E8"}},axisTick:{show:!1},axisLabel:{interval:0,color:"#556677",fontSize:12,margin:15},axisPointer:{label:{padding:[0,0,10,0],margin:15,fontSize:12,backgroundColor:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#fff"},{offset:.86,color:"#fff"},{offset:.86,color:"#33c0cd"},{offset:1,color:"#33c0cd"}],global:!1}}},boundaryGap:!1}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#DCE2E8"}},axisLabel:{color:"#556677"},splitLine:{show:!1}}],series:[{name:"销售额",type:"line",data:[1905,1020,3330,512,4463,2214,3330,5412,1205,820,5330,1112],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new r["default"].graphic.LinearGradient(1,1,0,0,[{offset:0,color:"#73DD39"},{offset:1,color:"#73DDFF"}]),shadowColor:"rgba(115,221,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{color:e[1],borderColor:e[1]}}]}}}});function d(e){e.__source="src/views/index/components/Target.vue"}var c=o(48499);"function"===typeof d&&d(l);const p=(0,c.A)(l,[["render",i],["__scopeId","data-v-20dafa07"]]);var f=p}}]);