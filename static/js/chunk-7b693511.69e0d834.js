/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-14 00:13:58
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b693511"],{"0647":function(e,a,l){},"269d":function(e,a,l){"use strict";l.r(a);var s=function(){var e=this,a=e._self._c;return a("div",{staticClass:"slider-container"},[a("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[a("span",[e._v("基础用法")])]},proxy:!0}])},[a("span",{staticClass:"demonstration"},[e._v("默认")]),a("el-slider",{model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),a("span",{staticClass:"demonstration"},[e._v("自定义初始值")]),a("el-slider",{model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),a("span",{staticClass:"demonstration"},[e._v("隐藏 Tooltip")]),a("el-slider",{attrs:{"show-tooltip":!1},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}}),a("span",{staticClass:"demonstration"},[e._v("格式化 Tooltip")]),a("el-slider",{attrs:{"format-tooltip":e.formatTooltip},model:{value:e.value4,callback:function(a){e.value4=a},expression:"value4"}}),a("span",{staticClass:"demonstration"},[e._v("禁用")]),a("el-slider",{attrs:{disabled:""},model:{value:e.value5,callback:function(a){e.value5=a},expression:"value5"}})],1),a("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[a("span",[e._v("离散值")])]},proxy:!0}])},[a("span",{staticClass:"demonstration"},[e._v("不显示间断点")]),a("el-slider",{attrs:{step:10},model:{value:e.value6,callback:function(a){e.value6=a},expression:"value6"}}),a("span",{staticClass:"demonstration"},[e._v("显示间断点")]),a("el-slider",{attrs:{"show-stops":"",step:10},model:{value:e.value6,callback:function(a){e.value6=a},expression:"value6"}})],1),a("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[a("span",[e._v("带有输入框")])]},proxy:!0}])},[a("el-slider",{attrs:{"show-input":""},model:{value:e.value7,callback:function(a){e.value7=a},expression:"value7"}})],1),a("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[a("span",[e._v("范围选择")])]},proxy:!0}])},[a("el-slider",{attrs:{max:10,range:"","show-stops":""},model:{value:e.value8,callback:function(a){e.value8=a},expression:"value8"}})],1),a("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[a("span",[e._v("竖向模式")])]},proxy:!0}])},[a("el-slider",{attrs:{height:"200px",vertical:""},model:{value:e.value9,callback:function(a){e.value9=a},expression:"value9"}})],1)],1)},t=[],o={name:"Slider",data(){return{value1:0,value2:50,value3:36,value4:48,value5:42,value6:0,value7:0,value8:[4,8],value9:0}},methods:{formatTooltip(e){return e/100}}},n=o,r=(l("bed3"),l("829d")),u=Object(r["a"])(n,s,t,!1,null,"24673b33",null);a["default"]=u.exports},bed3:function(e,a,l){"use strict";l("0647")}}]);