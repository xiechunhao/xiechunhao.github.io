/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-11 23:03:09
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9342],{89342:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(73120),o=(a(27322),a(52539),a(34641)),i=a(27386);const c={class:"social-container"},r={key:0};function s(e,t,a,s,l,u){const d=n.S2;return(0,o.uX)(),(0,o.CE)("div",c,[(0,o.bF)(d,{type:"primary",onClick:e.handleSocialLogin},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)(" 点击进行Github登录 ")]))),_:1},8,["onClick"]),e.data?((0,o.uX)(),(0,o.CE)("p",r,(0,i.v_)(e.data),1)):(0,o.Q3)("",!0)])}var l=a(26157),u=a(99462),d=a(37489),f=(0,o.pM)({name:"Social",setup(){const e=(0,o.WQ)("$baseLoading"),t=(0,o.WQ)("$baseMessage"),a=(0,l.k)(),n=e=>a.socialLogin(e),i=(0,d.KR)(),c=()=>{const a=e();(0,u.i)("https://github.com/login/oauth/authorize",{client_id:"e104bdc488d009840c4f"}).then((async e=>{i.value=e,await n(e)})).catch((()=>{t("第三方登录失败，未返回令牌","error","vab-hey-message-error")})).finally((()=>{a.close()}))};return{data:i,handleSocialLogin:c}}});function g(e){e.__source="src/views/other/social/index.vue"}var h=a(48499);"function"===typeof g&&g(f);const p=(0,h.A)(f,[["render",s]]);var v=p},99462:function(e,t,a){a.d(t,{E:function(){return l},i:function(){return s}});var n=a(62095),o=a(72827),i=a.n(o);let c,r;function s(e,t){return new Promise(((a,n)=>{c=window.open(`${e}?${i().stringify(t)}`),r=setInterval((()=>{if(c&&c.closed){clearInterval(r);const e=JSON.parse(localStorage.getItem("socialData")||"{}");localStorage.removeItem("socialData"),e?a(e):n(e)}}),200)}))}function l(){let e=n.Ay.currentRoute.value.query;"{}"===JSON.stringify(e)&&(e=i().parse(document.location.search.slice(1))),localStorage.setItem("socialData",JSON.stringify(e))}}}]);