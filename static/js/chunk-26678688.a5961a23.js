/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-14 00:23:18
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26678688"],{"6d21":function(n,e,o){"use strict";o.r(e);var t=function(){var n=this,e=n._self._c;return e("div",{staticClass:"icon-selector-container"},[e("el-popover",{attrs:{"popper-class":"icon-selector-popper",trigger:"hover",width:"292"},scopedSlots:n._u([{key:"reference",fn:function(){return[e("el-button",[e("vab-icon",{attrs:{icon:n.icon}}),n._v(" 图标选择器 "),e("vab-icon",{attrs:{icon:"arrow-down-s-line"}})],1)]},proxy:!0}])},[e("vab-icon-selector",{on:{"handle-icon":n.handleIcon}})],1)],1)},c=[],r=o("f5b7"),i={name:"IconSelector",components:{VabIconSelector:r["default"]},data(){return{icon:"24-hours-fill"}},methods:{handleIcon(n){this.icon=n}}},s=i,a=o("829d"),l=Object(a["a"])(s,t,c,!1,null,null,null);e["default"]=l.exports},"878e":function(n,e,o){"use strict";o.r(e),o.d(e,"getIconList",(function(){return c}));var t=o("b775");function c(n){return Object(t["default"])({url:"/remixIcon/getList",method:"get",params:n})}}}]);