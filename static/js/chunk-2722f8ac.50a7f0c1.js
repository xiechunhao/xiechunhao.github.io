/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-14 00:36:22
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2722f8ac"],{b27e:function(e,t,r){},b318:function(e,t,r){"use strict";r("b27e")},ca29:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"timeline-container"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{lg:8,md:12,sm:12,xl:8,xs:24}},[t("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[e._v(" 常规风格 "),t("el-radio-group",{staticClass:"card-header-radio",model:{value:e.reverse1,callback:function(t){e.reverse1=t},expression:"reverse1"}},[t("el-radio",{attrs:{label:!0}},[e._v("倒序")]),t("el-radio",{attrs:{label:!1}},[e._v("正序")])],1)]},proxy:!0}])},[t("el-timeline",{attrs:{reverse:e.reverse1}},e._l(e.activities,(function(r,a){return t("el-timeline-item",{key:a,attrs:{color:r.color,timestamp:r.timestamp},scopedSlots:e._u([r.color?null:{key:"dot",fn:function(){return[r.icon?t("vab-icon",{attrs:{icon:r.icon}}):e._e(),r.waver?t("span",{staticClass:"vab-dot",class:{["vab-dot-"+r.waver]:!0}},[t("span")]):e._e()]},proxy:!0}],null,!0)},[r.card?t("el-card",{attrs:{shadow:"hover"}},[e._v(" "+e._s(r.content)+" ")]):[e._v(" "+e._s(r.content)+" ")]],2)})),1)],1)],1),t("el-col",{attrs:{lg:8,md:12,sm:12,xl:8,xs:24}},[t("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[e._v(" 卡片风格 "),t("el-radio-group",{staticClass:"card-header-radio",model:{value:e.reverse2,callback:function(t){e.reverse2=t},expression:"reverse2"}},[t("el-radio",{attrs:{label:!0}},[e._v("倒序")]),t("el-radio",{attrs:{label:!1}},[e._v("正序")])],1)]},proxy:!0}])},[t("el-timeline",{attrs:{reverse:e.reverse2}},e._l(e.activities,(function(r,a){return t("el-timeline-item",{key:a,attrs:{color:r.color,timestamp:r.timestamp},scopedSlots:e._u([r.color?null:{key:"dot",fn:function(){return[r.icon?t("vab-icon",{attrs:{icon:r.icon}}):e._e(),r.waver?t("span",{staticClass:"vab-dot",class:{["vab-dot-"+r.waver]:!0}},[t("span")]):e._e()]},proxy:!0}],null,!0)},[t("div",{staticClass:"vab-info-card",class:{["vab-info-card-"+r.cardType]:!0}},[e._v(" "+e._s(r.content)+" ")])])})),1)],1)],1)],1)],1)},s=[],o={name:"Timeline",data(){return{reverse1:!0,reverse2:!0,activities:[{content:"支持使用小清新图标",timestamp:"2021-04-12 20:46",icon:"account-circle-line",cardType:"warning"},{content:"支持使用小清新图标",timestamp:"2021-04-18 20:46",icon:"archive-line",cardType:"error"},{content:"支持自定义颜色",timestamp:"2021-04-03 20:46",color:"#13ce66",cardType:"success"},{content:"支持默认颜色",timestamp:"2021-04-03 20:46",color:"#e4e7ed"},{content:"支持success闪动",timestamp:"2021-04-05 20:46",waver:"success"},{content:"支持error闪动",timestamp:"2021-04-05 20:46",waver:"error"}]}},created(){},mounted(){},methods:{}},n=o,c=(r("b318"),r("829d")),i=Object(c["a"])(n,a,s,!1,null,"f17cad68",null);t["default"]=i.exports}}]);