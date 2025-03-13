/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-14 00:23:18
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c0d3"],{f21b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"test2-container"},[t("el-alert",{attrs:{closable:!1,"show-icon":"",title:"取值方式：this.query",type:"success"}}),t("vab-json-viewer",{attrs:{copyable:"","expand-depth":5,sort:"",value:e.route}})],1)},n=[],r=a("7736"),u=a("258b"),c=a.n(u),i={name:"Test2",components:{VabJsonViewer:c.a},data(){return{route:{}}},created(){this.handleQuery()},methods:{...Object(r["b"])({changeTabsMeta:"tabs/changeTabsMeta"}),handleQuery(){const e=this.$route;this.$nextTick(()=>{this.changeTabsMeta({title:"Query",meta:{title:"Query Id="+this.$route.query.id}}),this.route={path:e.path,params:e.params,query:e.query,name:e.name,meta:e.meta}})}}},o=i,h=a("829d"),l=Object(h["a"])(o,s,n,!1,null,null,null);t["default"]=l.exports}}]);