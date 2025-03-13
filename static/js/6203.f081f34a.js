/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-14 01:13:42
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4122,6203],{63925:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(30853),o=(a(27322),a(39585),a(69287)),s=a(34641),l=a(27386);function r(e,t,a,r,i,d){const u=(0,s.g2)("vab-chart"),p=o.A,c=n.uD;return(0,s.uX)(),(0,s.Wv)(c,{lg:8,md:12,sm:24,xl:6,xs:24},{default:(0,s.k6)((()=>[(0,s.bF)(p,{shadow:"hover",skeleton:""},{header:(0,s.k6)((()=>[(0,s.Lk)("span",null,(0,l.v_)(e.title),1)])),default:(0,s.k6)((()=>[(0,s.bF)(u,{"init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})])),_:1})}var i=a(72034),d=(0,s.pM)({name:"VabChartFunnel",components:{VabChart:i["default"]},props:{title:{type:String,default:""}},data(){return{initOptions:{renderer:"svg"},option:{grid:{top:20,right:20,bottom:20,left:20},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}%"},series:{name:"漏斗图",type:"funnel",left:"20%",top:20,bottom:20,width:"60%",min:0,max:100,minSize:"0%",maxSize:"100%",sort:"descending",gap:2,labelLine:{length:10,lineStyle:{width:1,type:"solid"}},emphasis:{label:{fontSize:12}},data:[{value:60,name:"访问"},{value:40,name:"咨询"},{value:20,name:"订单"},{value:80,name:"点击"},{value:100,name:"展现"}]}}}}});function u(e){e.__source="src/views/other/echarts/components/VabChartFunnel.vue"}var p=a(48499);"function"===typeof u&&u(d);const c=(0,p.A)(d,[["render",r]]);var f=c},69287:function(e,t,a){a.d(t,{A:function(){return f}});var n=a(56974),o=(a(27322),a(37183),a(59677)),s=(a(35685),a(34641)),l=a(37489),r=a(27386),i=a(12176),d=(0,s.pM)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,l.KR)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,i.JZ)(((e,a,n)=>{clearInterval(t),n()})),(t,i)=>{const d=o.d1,u=n.Ik;return(0,s.uX)(),(0,s.Wv)(u,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,s.eX)({default:(0,s.k6)((()=>[e.skeleton?((0,s.uX)(),(0,s.Wv)(d,{key:0,animated:"",loading:(0,l.R1)(a),rows:e.skeletonRows},{default:(0,s.k6)((()=>[(0,s.RG)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,s.RG)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,s.k6)((()=>[(0,s.RG)(t.$slots,"header",{},(()=>[(0,s.eW)((0,r.v_)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function u(e){e.__source="library/components/VabCard/index.vue"}var p=a(48499);"function"===typeof u&&u(d);const c=(0,p.A)(d,[["__scopeId","data-v-391150ea"]]);var f=c}}]);