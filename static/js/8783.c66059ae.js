/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-12 01:02:20
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8783],{50282:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(69287),o=a(34641),r=a(27386);const s={class:"right-icon"},u={class:"bottom"};function l(e,t,a,l,d,i){const c=(0,o.g2)("vab-count"),f=(0,o.g2)("vab-icon"),p=n.A;return(0,o.uX)(),(0,o.Wv)(p,{class:(0,r.C4)(["top-card","top-card-"+e.background]),shadow:"hover"},{default:(0,o.k6)((()=>[(0,o.Lk)("span",null,(0,r.v_)(e.title),1),(0,o.Lk)("p",null,[(0,o.bF)(c,{decimals:e.countConfig.decimals,duration:e.countConfig.duration,"end-val":e.countConfig.endVal,prefix:e.countConfig.prefix,separator:e.countConfig.separator,"start-val":e.countConfig.startVal,suffix:e.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])]),(0,o.Lk)("div",s,[(0,o.bF)(f,{icon:e.icon},null,8,["icon"])]),(0,o.Lk)("div",u,[t[0]||(t[0]=(0,o.eW)(" 自上周以来 ")),(0,o.bF)(f,{icon:"arrow-up-line"}),(0,o.Lk)("span",null,(0,r.v_)(e.percentage),1)])])),_:1},8,["class"])}var d=a(45182),i=a.n(d),c=a(49799),f=a(37489),p=(0,o.pM)({name:"TopCard",components:{VabCount:c["default"]},props:{background:{type:String,default:"white"},title:{type:String,default:"Test"},icon:{type:String,default:"album-line"},percentage:{type:String,default:"10%"},countConfig:{type:Object,default:()=>({startVal:0,endVal:i().random(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3})}},setup(){const e=(0,f.Kh)({});return{...(0,f.QW)(e)}}});function v(e){e.__source="src/views/index/components/TopCard.vue"}var b=a(48499);"function"===typeof v&&v(p);const y=(0,b.A)(p,[["render",l],["__scopeId","data-v-44f98028"]]);var g=y},69287:function(e,t,a){a.d(t,{A:function(){return p}});var n=a(56974),o=(a(27322),a(37183),a(59677)),r=(a(35685),a(34641)),s=a(37489),u=a(27386),l=a(12176),d=(0,r.pM)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,s.KR)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,l.JZ)(((e,a,n)=>{clearInterval(t),n()})),(t,l)=>{const d=o.d1,i=n.Ik;return(0,r.uX)(),(0,r.Wv)(i,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,r.eX)({default:(0,r.k6)((()=>[e.skeleton?((0,r.uX)(),(0,r.Wv)(d,{key:0,animated:"",loading:(0,s.R1)(a),rows:e.skeletonRows},{default:(0,r.k6)((()=>[(0,r.RG)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.RG)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,r.k6)((()=>[(0,r.RG)(t.$slots,"header",{},(()=>[(0,r.eW)((0,u.v_)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function i(e){e.__source="library/components/VabCard/index.vue"}var c=a(48499);"function"===typeof i&&i(d);const f=(0,c.A)(d,[["__scopeId","data-v-391150ea"]]);var p=f}}]);