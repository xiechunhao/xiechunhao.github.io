/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-13 00:18:02
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64f3f00c"],{"1e8d":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e._self._c;return a("div",{staticClass:"date-time-picker-container"},[a("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[a("span",[e._v("日期和时间点")])]},proxy:!0}])},[a("el-date-picker",{attrs:{placeholder:"选择日期时间",type:"datetime"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1),a("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[a("span",[e._v("日期和时间范围")])]},proxy:!0}])},[a("el-date-picker",{attrs:{"end-placeholder":"结束日期","range-separator":"至","start-placeholder":"开始日期",type:"datetimerange"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1),a("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[a("span",[e._v("默认的起始与结束时刻")])]},proxy:!0}])},[a("el-date-picker",{attrs:{align:"right","default-time":["12:00:00","08:00:00"],"end-placeholder":"结束日期","start-placeholder":"开始日期",type:"datetimerange"},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1)],1)},l=[],n={name:"DateTimePicker",data(){return{value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""}}},c=n,o=(t("f4ce"),t("829d")),u=Object(o["a"])(c,r,l,!1,null,"278084c0",null);a["default"]=u.exports},ceb3:function(e,a,t){},f4ce:function(e,a,t){"use strict";t("ceb3")}}]);