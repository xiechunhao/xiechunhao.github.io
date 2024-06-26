/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-6-26 09:35:53
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-670fb0a9"],{a89a:function(e,t,r){},d5c2:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"register-container"},["development"!==e.nodeEnv?t("el-alert",{staticStyle:{position:"fixed"},attrs:{closable:!1,title:"beautiful boys and girls欢迎加入vue-admin-beautifulQQ群：972435319",type:"success"}}):e._e(),t("el-row",[t("el-col",{attrs:{lg:16,md:12,sm:24,xl:16,xs:24}},[t("div",{staticStyle:{color:"transparent"}},[e._v("占位符")])]),t("el-col",{attrs:{lg:8,md:12,sm:24,xl:8,xs:24}},[t("el-form",{ref:"registerForm",staticClass:"register-form",attrs:{model:e.form,rules:e.registerRules,size:"mini"}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{directives:[{name:"focus",rawName:"v-focus"}],staticStyle:{"margin-top":"20px"},attrs:{"auto-complete":"off",placeholder:"请输入用户名",type:"text"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username","string"===typeof t?t.trim():t)},expression:"form.username"}},[t("vab-icon",{attrs:{slot:"prefix",icon:["fas","user-alt"]},slot:"prefix"})],1)],1),t("el-form-item",{attrs:{prop:"phone"}},[t("el-input",{attrs:{autocomplete:"off",maxlength:"11",placeholder:"请输入手机号","show-word-limit":"",type:"text"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone","string"===typeof t?t.trim():t)},expression:"form.phone"}},[t("vab-icon",{attrs:{slot:"prefix",icon:["fas","mobile-alt"]},slot:"prefix"})],1)],1),t("el-form-item",{staticStyle:{position:"relative"},attrs:{prop:"phoneCode"}},[t("el-input",{attrs:{placeholder:"手机验证码",type:"text"},model:{value:e.form.phoneCode,callback:function(t){e.$set(e.form,"phoneCode","string"===typeof t?t.trim():t)},expression:"form.phoneCode"}},[t("vab-icon",{attrs:{slot:"prefix",icon:["fas","envelope-open"]},slot:"prefix"})],1),t("el-button",{staticClass:"show-pwd phone-code",attrs:{disabled:e.isGetphone,type:"primary"},on:{click:e.getPhoneCode}},[e._v(" "+e._s(e.phoneCode)+" ")])],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{autocomplete:"new-password",placeholder:"设置密码",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}},[t("vab-icon",{attrs:{slot:"prefix",icon:["fas","unlock"]},slot:"prefix"})],1)],1),t("el-form-item",[t("el-button",{staticClass:"register-btn",attrs:{type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleReister.apply(null,arguments)}}},[e._v("注册")]),t("router-link",{attrs:{to:"/login"}},[t("div",{staticStyle:{"margin-top":"20px"}},[e._v("登录")])])],1)],1)],1)],1)],1)},s=[],i=(r("c13f"),r("61f7")),a=r("c24f"),n={username:"Register",directives:{focus:{inserted(e){e.querySelector("input").focus()}}},data(){const e=(e,t,r)=>{""==t?r(new Error("用户名不能为空")):r()},t=(e,t,r)=>{Object(i["isPassword"])(t)?r():r(new Error("密码不能少于6位"))},r=(e,t,r)=>{Object(i["isPhone"])(t)?r():r(new Error("请输入正确的手机号"))};return{isGetphone:!1,getPhoneIntval:null,phoneCode:"获取验证码",showRegister:!1,nodeEnv:"production",title:this.$baseTitle,form:{},registerRules:{username:[{required:!0,trigger:"blur",message:"请输入用户名"},{max:20,trigger:"blur",message:"最多不能超过20个字"},{validator:e,trigger:"blur"}],phone:[{required:!0,trigger:"blur",message:"请输入手机号码"},{validator:r,trigger:"blur"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{validator:t,trigger:"blur"}],phoneCode:[{required:!0,trigger:"blur",message:"请输入手机验证码"}]},loading:!1,passwordType:"password"}},created(){document.body.style.overflow="hidden"},beforeDestroy(){document.body.style.overflow="auto",clearInterval(this.getPhoneIntval),this.getPhoneIntval=null},methods:{getPhoneCode(){if(!Object(i["isPhone"])(this.form.phone))return void this.$refs["registerForm"].validateField("phone");this.isGetphone=!0;let e=60;this.getPhoneIntval=setInterval(()=>{e>0?(e--,this.phoneCode=`重新获取(${e}s)`):(clearInterval(this.getPhoneIntval),this.getPhoneIntval=null,this.phoneCode="获取验证码",this.isGetphone=!1)},1e3)},handleReister(){this.$refs["registerForm"].validate(async e=>{if(e){const e={username:this.form.username,phone:this.form.phone,password:this.form.password,phoneCode:this.form.phoneCode},{msg:t}=await Object(a["register"])(e);this.$baseMessage(t,"success")}})}}},l=n,p=(r("da24"),r("829d")),c=Object(p["a"])(l,o,s,!1,null,"4e5c3040",null);t["default"]=c.exports},da24:function(e,t,r){"use strict";r("a89a")}}]);