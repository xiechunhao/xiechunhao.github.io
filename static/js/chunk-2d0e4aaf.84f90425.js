/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-12 22:48:39
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4aaf"],{"90ce":function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"iframe-search-container"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{lg:{span:12,offset:6},md:{span:20,offset:2},sm:{span:20,offset:2},xl:{span:12,offset:6},xs:24}},[t("el-form",{ref:"form",attrs:{"label-position":"top","label-width":"100px",model:e.form,rules:e.rules},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{attrs:{label:"请输入跳转url",prop:"url"}},[t("el-input",{model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),t("el-form-item",{attrs:{label:"请输入跳转后自动改名的Title",prop:"title"}},[t("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t("el-button",{attrs:{icon:"el-icon-search","native-type":"submit",type:"primary"},on:{click:e.handleClick}},[e._v(" 查询 ")])],1)],1)],1)],1)},a=[],s=(r("a199"),r("ca7c"),r("61f7")),o={name:"IframeSearch",data(){const e=(e,t,r)=>{Object(s["isExternal"])(t)?r():r(new Error("url输入错误"))};return{rules:{url:[{required:!0,message:"请输入跳转url",trigger:"blur",validator:e}],title:[{required:!0,message:"请输入跳转后自动改名的Title",trigger:"blur"}]},form:{url:"https://www.so.com",title:"360搜索"}}},methods:{handleClick(){this.$refs["form"].validate(e=>{e&&this.$router.push({path:"/other/iframe/view",query:this.form})})}}},i=o,n=r("829d"),u=Object(n["a"])(i,l,a,!1,null,null,null);t["default"]=u.exports}}]);