/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-13 00:45:09
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-613b6fa8"],{a124:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a._self._c;return t("div",{staticClass:"callback-container"})},c=[],l=e("a981"),o={name:"Callback",data(){return{loading:null}},created(){this.loading=this.$baseLoading(),Object(l["callback"])(),window.close()},beforeDestroy(){this.loading.close()}},r=o,i=e("829d"),s=Object(i["a"])(r,n,c,!1,null,null,null);t["default"]=s.exports},a981:function(a,t,e){"use strict";e.r(t),e.d(t,"login",(function(){return i})),e.d(t,"callback",(function(){return s}));var n=e("a18c"),c=e("e51c"),l=e.n(c);let o,r;function i(a,t){return new Promise((e,n)=>{o=window.open(`${a}?${l.a.stringify(t)}`),r=setInterval(()=>{if(o&&o.closed){clearInterval(r);const a=JSON.parse(localStorage.getItem("socialData"));localStorage.removeItem("socialData"),a?e(a):n(a)}},200)})}function s(){let a=n["default"].currentRoute.query;"{}"===JSON.stringify(a)&&(a=l.a.parse(document.location.search.slice(1))),localStorage.setItem("socialData",JSON.stringify(a))}}}]);