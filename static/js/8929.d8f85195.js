/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-14 01:13:42
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8929],{38384:function(e,a,t){t.r(a),t.d(a,{default:function(){return v}});var d=t(69287),l=t(4197),s=(t(27322),t(12208),t(98803),t(62289)),n=(t(65562),t(78925)),o=(t(35762),t(95489),t(34641));const r={class:"tabs"};function p(e,a,t,p,i,c){const b=s.o8,u=n.x0,v=s.Up,f=l.v$,y=l.q,m=d.A;return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.bF)(m,{class:"tabs-card",shadow:"hover"},{default:(0,o.k6)((()=>[(0,o.bF)(y,{modelValue:e.activeName,"onUpdate:modelValue":a[0]||(a[0]=a=>e.activeName=a)},{default:(0,o.k6)((()=>[(0,o.bF)(f,{label:"配送管理",name:"first"},{default:(0,o.k6)((()=>[(0,o.bF)(v,{data:e.tableData,height:"280"},{empty:(0,o.k6)((()=>[(0,o.bF)(u,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,o.k6)((()=>[(0,o.bF)(b,{label:"日期",prop:"date"}),(0,o.bF)(b,{label:"配送信息"},{default:(0,o.k6)((()=>[(0,o.bF)(b,{label:"姓名",prop:"name"}),(0,o.bF)(b,{label:"省份",prop:"province"}),(0,o.bF)(b,{label:"市区",prop:"city"}),(0,o.bF)(b,{label:"地址",prop:"address"}),(0,o.bF)(b,{label:"邮编",prop:"zip"})])),_:1})])),_:1},8,["data"])])),_:1}),(0,o.bF)(f,{label:"区域管理",name:"second"},{default:(0,o.k6)((()=>[(0,o.bF)(v,{data:e.tableData,height:"280"},{empty:(0,o.k6)((()=>[(0,o.bF)(u,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,o.k6)((()=>[(0,o.bF)(b,{label:"日期",prop:"date"}),(0,o.bF)(b,{label:"区域信息"},{default:(0,o.k6)((()=>[(0,o.bF)(b,{label:"姓名",prop:"name"}),(0,o.bF)(b,{label:"省份",prop:"province"}),(0,o.bF)(b,{label:"市区",prop:"city"}),(0,o.bF)(b,{label:"地址",prop:"address"}),(0,o.bF)(b,{label:"邮编",prop:"zip"})])),_:1})])),_:1},8,["data"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])}var i=(0,o.pM)({data(){return{activeName:"first",tableData:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}]}}});function c(e){e.__source="src/views/index/components/Tabs.vue"}var b=t(48499);"function"===typeof c&&c(i);const u=(0,b.A)(i,[["render",p],["__scopeId","data-v-53e6f2a4"]]);var v=u},69287:function(e,a,t){t.d(a,{A:function(){return u}});var d=t(56974),l=(t(27322),t(37183),t(59677)),s=(t(35685),t(34641)),n=t(37489),o=t(27386),r=t(12176),p=(0,s.pM)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let a=null;const t=(0,n.KR)(!0);return a=setTimeout((()=>{t.value=!1}),500),(0,r.JZ)(((e,t,d)=>{clearInterval(a),d()})),(a,r)=>{const p=l.d1,i=d.Ik;return(0,s.uX)(),(0,s.Wv)(i,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,s.eX)({default:(0,s.k6)((()=>[e.skeleton?((0,s.uX)(),(0,s.Wv)(p,{key:0,animated:"",loading:(0,n.R1)(t),rows:e.skeletonRows},{default:(0,s.k6)((()=>[(0,s.RG)(a.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,s.RG)(a.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[a.$slots.header||e.header?{name:"header",fn:(0,s.k6)((()=>[(0,s.RG)(a.$slots,"header",{},(()=>[(0,s.eW)((0,o.v_)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function i(e){e.__source="library/components/VabCard/index.vue"}var c=t(48499);"function"===typeof i&&i(p);const b=(0,c.A)(p,[["__scopeId","data-v-391150ea"]]);var u=b}}]);