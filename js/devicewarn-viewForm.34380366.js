(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devicewarn-viewForm"],{"0c6d":function(t,e,a){},a6f7:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"l-rblock l-form-viewer",staticStyle:{padding:"16px"}},[a("el-form",{staticClass:"viewForm",staticStyle:{height:"440px"},attrs:{"label-position":"right","label-width":"80px",model:t.data}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"处理人:"}},[a("span",[t._v(t._s(t.lr_userName(t.data.f_UserId)))])])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"故障等级:"}},[a("span",[t._v(t._s(this.chuli(t.data.f_Level)))])])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"故障描述:"}},[a("span",[t._v(t._s(t.data.f_Description))])])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"处理方法:"}},[a("span",[t._v(t._s(t.data.f_DealWay))])])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"处理日期:"}},[a("span",[t._v(t._s(t.lr_dateFormat(t.data.f_Date,"yyyy-MM-dd")))])])],1),a("el-col",{attrs:{span:24}},[a("el-divider")],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"附件:"}},[a("l-upload",{attrs:{listType:"picture-card",disabled:!0},model:{value:t.data.f_File,callback:function(e){t.$set(t.data,"f_File",e)},expression:"data.f_File"}})],1)],1)],1),0==this.sonRow.f_State?a("img",{staticClass:"viewFormImg",attrs:{src:t.rootUrl+"img/device/check_tip_pass.png"}}):t._e(),1==this.sonRow.f_State?a("img",{staticClass:"viewFormImg",attrs:{src:t.rootUrl+"img/device/check_tip_notpass.png"}}):t._e()],1)],1)},r=[],l=(a("96cf"),a("1da1")),i={props:["sonRow"],data:function(){return{data:this.sonRow}},mounted:function(){return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{chuli:function(t){return"0"==t?"一级预警":"1"==t||"2"==t?"二级预警":void 0}}},n=i,o=(a("b384"),a("2877")),c=Object(o["a"])(n,s,r,!1,null,null,null);e["default"]=c.exports},b384:function(t,e,a){"use strict";a("0c6d")}}]);