/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-12 22:48:39
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d9db3ba"],{3641:function(t,e,a){"use strict";a("e60b")},"6aca":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"iframe-container"},[e("iframe",{attrs:{frameborder:"0",src:t.url}})])},s=[],n=a("7736"),i={name:"Iframe",data(){return{url:""}},created(){this.handleIframe()},methods:{...Object(n["b"])({changeTabsMeta:"tabs/changeTabsMeta"}),handleIframe(){this.url="https://"+this.$route.query.url;const t={...this.$route.meta,...this.$route.query};this.$nextTick(()=>{this.changeTabsMeta({title:"Iframe",meta:t})})}}},c=i,u=(a("3641"),a("829d")),h=Object(u["a"])(c,r,s,!1,null,"3ef10393",null);e["default"]=h.exports},e60b:function(t,e,a){}}]);