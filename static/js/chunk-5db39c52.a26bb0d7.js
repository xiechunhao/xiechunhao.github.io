/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-13 00:56:36
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5db39c52"],{a981:function(t,a,e){"use strict";e.r(a),e.d(a,"login",(function(){return s})),e.d(a,"callback",(function(){return r}));var n=e("a18c"),i=e("e51c"),o=e.n(i);let c,l;function s(t,a){return new Promise((e,n)=>{c=window.open(`${t}?${o.a.stringify(a)}`),l=setInterval(()=>{if(c&&c.closed){clearInterval(l);const t=JSON.parse(localStorage.getItem("socialData"));localStorage.removeItem("socialData"),t?e(t):n(t)}},200)})}function r(){let t=n["default"].currentRoute.query;"{}"===JSON.stringify(t)&&(t=o.a.parse(document.location.search.slice(1))),localStorage.setItem("socialData",JSON.stringify(t))}},f71c:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"social-container"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleSocialLogin}},[t._v(" 点击进行Github登录 ")]),t.data?a("p",[t._v(t._s(t.data))]):t._e()],1)},i=[],o=e("a981"),c={name:"Social",data(){return{loading:null,data:null}},methods:{handleSocialLogin(){this.loading=this.$baseLoading(),Object(o["login"])("https://github.com/login/oauth/authorize",{client_id:"development"===this.env?"bb8dfd34f6c6a57367e3":"e104bdc488d009840c4f"}).then(t=>{this.data=t,this.$store.dispatch("user/socialLogin",t).then(()=>{this.loading.close()}).catch(()=>{this.loading.close()})}).catch(()=>{this.$baseMessage("第三方登录失败，未返回令牌","error","vab-hey-message-error"),this.loading.close()})}}},l=c,s=e("829d"),r=Object(s["a"])(l,n,i,!1,null,null,null);a["default"]=r.exports}}]);