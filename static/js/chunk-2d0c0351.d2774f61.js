/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-12 22:35:00
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0351"],{4197:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a._self._c;return t("div",{staticClass:"test1-container"},[t("el-alert",{attrs:{closable:!1,"show-icon":"",title:"取值方式：this.params",type:"success"}}),t("vab-json-viewer",{attrs:{copyable:"","expand-depth":5,sort:"",value:a.route}})],1)},n=[],r=e("7736"),c=e("258b"),i=e.n(c),o={name:"Test1",components:{VabJsonViewer:i.a},data(){return{route:{}}},created(){this.handleParams()},methods:{...Object(r["b"])({changeTabsMeta:"tabs/changeTabsMeta"}),handleParams(){const a=this.$route;this.$nextTick(()=>{this.changeTabsMeta({title:"Params",meta:{title:"Params Id="+a.params.id}}),this.route={path:a.matched[a.matched.length-1].path,params:a.params,query:a.query,name:a.name,meta:a.meta}})}}},h=o,l=e("829d"),u=Object(l["a"])(h,s,n,!1,null,null,null);t["default"]=u.exports}}]);