/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-12 21:48:17
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-787e5815"],{"34b7":function(e,c,o){},"7fbe":function(e,c,o){"use strict";o("34b7")},"9b3b":function(e,c,o){"use strict";o.r(c);var t=function(){var e=this,c=e._self._c;return c("div",{staticClass:"checkbox-container"},[c("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[c("span",[e._v("基础用法")])]},proxy:!0}])},[c("el-checkbox",{model:{value:e.checked,callback:function(c){e.checked=c},expression:"checked"}},[e._v("备选项")])],1),c("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[c("span",[e._v("禁用状态")])]},proxy:!0}])},[c("el-checkbox",{attrs:{disabled:""},model:{value:e.checked1,callback:function(c){e.checked1=c},expression:"checked1"}},[e._v("备选项1")]),c("el-checkbox",{attrs:{disabled:""},model:{value:e.checked2,callback:function(c){e.checked2=c},expression:"checked2"}},[e._v("备选项")])],1),c("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[c("span",[e._v("多选框组")])]},proxy:!0}])},[c("el-checkbox-group",{model:{value:e.checkList,callback:function(c){e.checkList=c},expression:"checkList"}},[c("el-checkbox",{attrs:{label:"复选框 A"}}),c("el-checkbox",{attrs:{label:"复选框 B"}}),c("el-checkbox",{attrs:{label:"复选框 C"}}),c("el-checkbox",{attrs:{disabled:"",label:"禁用"}}),c("el-checkbox",{attrs:{disabled:"",label:"选中且禁用"}})],1)],1),c("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[c("span",[e._v("可选项目数量的限制")])]},proxy:!0}])},[c("el-checkbox-group",{attrs:{max:2,min:1},model:{value:e.checkedCities,callback:function(c){e.checkedCities=c},expression:"checkedCities"}},e._l(e.cities,(function(o){return c("el-checkbox",{key:o,attrs:{label:o}},[e._v(" "+e._s(o)+" ")])})),1)],1),c("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[c("span",[e._v("按钮样式")])]},proxy:!0}])},[c("el-checkbox-group",{model:{value:e.checkboxGroup1,callback:function(c){e.checkboxGroup1=c},expression:"checkboxGroup1"}},e._l(e.cities,(function(o){return c("el-checkbox-button",{key:o,attrs:{label:o}},[e._v(" "+e._s(o)+" ")])})),1)],1),c("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[c("span",[e._v("带有边框")])]},proxy:!0}])},[c("el-checkbox",{attrs:{border:"",label:"备选项1"},model:{value:e.checked3,callback:function(c){e.checked3=c},expression:"checked3"}}),c("el-checkbox",{attrs:{border:"",label:"备选项2"},model:{value:e.checked4,callback:function(c){e.checked4=c},expression:"checked4"}})],1)],1)},a=[];const l=["上海","北京","广州","深圳"];var r={name:"Checkbox",data(){return{checked:!0,checked1:!1,checked2:!0,checkList:["选中且禁用","复选框 A"],checkedCities:["上海","北京"],cities:l,checkboxGroup1:["上海"],checked3:!0,checked4:!1}}},s=r,n=(o("7fbe"),o("829d")),d=Object(n["a"])(s,t,a,!1,null,"3acda82c",null);c["default"]=d.exports}}]);