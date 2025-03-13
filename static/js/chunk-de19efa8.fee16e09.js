/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-14 00:13:58
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de19efa8"],{3425:function(e,t,r){},"9ed6":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-container"},[t("el-row",[t("el-col",{attrs:{lg:14,md:11,sm:24,xl:14,xs:24}},[t("div",{staticStyle:{color:"transparent"}},[e._v("占位符")])]),t("el-col",{attrs:{lg:9,md:12,sm:24,xl:9,xs:24}},[t("el-form",{ref:"form",staticClass:"login-form",attrs:{"label-position":"left",model:e.form,rules:e.rules}},[t("div",{staticClass:"title"},[e._v("hello !")]),t("div",{staticClass:"title-tips"},[e._v(" "+e._s(e.translateTitle("欢迎来到"))+e._s(e.title)+"！ ")]),t("el-form-item",{staticStyle:{"margin-top":"40px"},attrs:{prop:"username"}},[t("el-input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{placeholder:e.translateTitle("请输入用户名"),tabindex:"1",type:"text"},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("vab-icon",{attrs:{icon:"user-line"}})]},proxy:!0}]),model:{value:e.form.username,callback:function(t){e.$set(e.form,"username","string"===typeof t?t.trim():t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{key:e.passwordType,ref:"password",attrs:{placeholder:e.translateTitle("请输入密码"),tabindex:"2",type:e.passwordType},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin.apply(null,arguments)}},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("vab-icon",{attrs:{icon:"lock-line"}})]},proxy:!0},"password"===e.passwordType?{key:"suffix",fn:function(){return[t("vab-icon",{staticClass:"show-password",attrs:{icon:"eye-off-line"},on:{click:e.handlePassword}})]},proxy:!0}:{key:"suffix",fn:function(){return[t("vab-icon",{staticClass:"show-password",attrs:{icon:"eye-line"},on:{click:e.handlePassword}})]},proxy:!0}],null,!0),model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}})],1),t("el-form-item",{attrs:{prop:"verificationCode"}},[t("el-input",{attrs:{placeholder:e.translateTitle("验证码")+e.previewText,tabindex:"3",type:"text"},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("vab-icon",{attrs:{icon:"barcode-box-line"}})]},proxy:!0}]),model:{value:e.form.verificationCode,callback:function(t){e.$set(e.form,"verificationCode","string"===typeof t?t.trim():t)},expression:"form.verificationCode"}}),t("el-image",{staticClass:"code",attrs:{src:e.codeUrl},on:{click:e.changeCode}})],1),t("el-button",{staticClass:"login-btn",attrs:{loading:e.loading,type:"primary"},on:{click:e.handleLogin}},[e._v(" "+e._s(e.translateTitle("登录"))+" ")]),t("router-link",{attrs:{to:"/register"}},[t("div",{staticStyle:{"margin-top":"20px"}},[e._v(e._s(e.translateTitle("注册")))])])],1)],1),t("el-col",{attrs:{lg:1,md:1,sm:24,xl:1,xs:24}},[t("div",{staticStyle:{color:"transparent"}},[e._v("占位符")])])],1)],1)},i=[],o=(r("a199"),r("ca7c"),r("7736")),a=r("79fa"),n=r("61f7"),l={name:"Login",directives:{focus:{inserted(e){e.querySelector("input").focus()}}},beforeRouteLeave(e,t,r){clearInterval(this.timer),r()},data(){const e=(e,t,r)=>{""===t?r(new Error(this.translateTitle("用户名不能为空"))):r()},t=(e,t,r)=>{Object(n["isPassword"])(t)?r():r(new Error(this.translateTitle("密码不能少于6位")))};return{form:{username:"",password:"",verificationCode:""},rules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0,timer:0,codeUrl:"https://www.oschina.net/action/user/captcha",previewText:""}},computed:{...Object(o["c"])({title:"settings/title"})},watch:{$route:{handler(e){this.redirect=e.query&&e.query.redirect||"/"},immediate:!0}},mounted(){this.form.username="admin",this.form.password="123456","vuejs-core.cn"!==document.domain&&"chu1204505056.gitee.io"!==document.domain||(this.previewText="（演示地址验证码可不填）",this.timer=setTimeout(()=>{this.handleLogin()},5e3))},methods:{...Object(o["b"])({login:"user/login"}),translateTitle:a["translateTitle"],handlePassword(){"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(()=>{this.$refs.password.focus()})},handleRoute(){return"/404"===this.redirect||"/403"===this.redirect?"/":this.redirect},handleLogin(){this.$refs.form.validate(async e=>{if(e)try{this.loading=!0,await this.login(this.form).catch(()=>{}),await this.$router.push(this.handleRoute())}finally{this.loading=!1}})},changeCode(){this.codeUrl="https://www.oschina.net/action/user/captcha?timestamp="+(new Date).getTime()}}},c=l,d=(r("c2b6"),r("829d")),p=Object(d["a"])(c,s,i,!1,null,"f83220b0",null);t["default"]=p.exports},c2b6:function(e,t,r){"use strict";r("3425")}}]);