"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[9326],{99326:function(e,l,a){a.r(l),a.d(l,{default:function(){return s}});var t=function(){var e=this,l=e._self._c;return l("el-card",{attrs:{shadow:"never",header:"懒加载"}},[l("div",{staticStyle:{"margin-bottom":"12px"}},[e._v("单选：")]),l("div",{staticStyle:{"max-width":"260px"}},[l("ele-tree-select",{attrs:{clearable:!0,lazy:!0,placeholder:"请选择",load:e.loadNode,"init-value":e.initValue},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}})],1),l("div",{staticStyle:{margin:"12px 0"}},[e._v("多选：")]),l("div",{staticStyle:{"max-width":"260px"}},[l("ele-tree-select",{attrs:{multiple:!0,clearable:!0,lazy:!0,placeholder:"请选择",load:e.loadNode,"init-value":e.initValue2},model:{value:e.value2,callback:function(l){e.value2=l},expression:"value2"}})],1),l("div",{staticStyle:{"margin-top":"12px"}},[l("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.setInitValue}},[e._v(" 回显数据 ")])],1)])},i=[],u={name:"DemoLazy",data(){return{value:void 0,initValue:void 0,value2:[],initValue2:void 0}},methods:{loadNode(e,l){setTimeout((()=>{if(e.data)if("1"===e.data.value)l([{label:"用户管理",value:"2"},{label:"角色管理",value:"5"}]);else if("2"===e.data.value)l([{label:"添加用户",value:"3"},{label:"修改用户",value:"4"}]);else if("5"===e.data.value)l([{label:"添加角色",value:"6"},{label:"修改角色",value:"7"}]);else{if("8"===e.data.value)return void l([{label:"登录日志",value:"9"},{label:"操作日志",value:"10"}]);l([])}else l([{label:"系统管理",value:"1"},{label:"日志管理",value:"8"}])}),500)},setInitValue(){this.initValue={value:"3",label:"添加用户"},this.initValue2=[{value:"3",label:"添加用户"},{label:"修改角色",value:"7"},{label:"登录日志",value:"9"}]}}},v=u,n=a(64008),d=(0,n.A)(v,t,i,!1,null,null,null),s=d.exports}}]);