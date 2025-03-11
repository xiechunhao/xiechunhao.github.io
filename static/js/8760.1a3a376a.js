/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-12 00:44:12
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8760],{38760:function(e,l,o){o.r(l),o.d(l,{default:function(){return v}});var r=o(34641),a=o(27386),t=o(50670);const i={class:"login-container"},s={class:"title-tips"};function n(e,l,o,n,d,c){const u=(0,r.g2)("el-col"),p=(0,r.g2)("vab-icon"),f=(0,r.g2)("el-input"),m=(0,r.g2)("el-form-item"),w=(0,r.g2)("el-image"),g=(0,r.g2)("el-button"),k=(0,r.g2)("router-link"),b=(0,r.g2)("el-form"),v=(0,r.g2)("el-row"),h=(0,r.g2)("vab-footer"),y=(0,r.gN)("focus");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.bF)(v,null,{default:(0,r.k6)((()=>[(0,r.bF)(u,{lg:14,md:11,sm:24,xl:14,xs:24},{default:(0,r.k6)((()=>l[3]||(l[3]=[(0,r.Lk)("div",{style:{color:"transparent"}},"占位符",-1)]))),_:1}),(0,r.bF)(u,{lg:9,md:12,sm:24,xl:9,xs:24},{default:(0,r.k6)((()=>[(0,r.bF)(b,{ref:"formRef",class:"login-form","label-position":"left",model:e.form,rules:e.rules},{default:(0,r.k6)((()=>[l[4]||(l[4]=(0,r.Lk)("div",{class:"title"},"hello !",-1)),(0,r.Lk)("div",s,(0,a.v_)(e.translateTitle("欢迎来到"))+(0,a.v_)(e.title)+"！ ",1),(0,r.bF)(m,{prop:"username"},{default:(0,r.k6)((()=>[(0,r.bo)(((0,r.uX)(),(0,r.Wv)(f,{modelValue:e.form.username,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.username=l),modelModifiers:{trim:!0},placeholder:e.translateTitle("请输入用户名"),tabindex:"1",type:"text"},{prefix:(0,r.k6)((()=>[(0,r.bF)(p,{icon:"user-line"})])),_:1},8,["modelValue","placeholder"])),[[y]])])),_:1}),(0,r.bF)(m,{prop:"password"},{default:(0,r.k6)((()=>[((0,r.uX)(),(0,r.Wv)(f,{key:e.passwordType,ref:"passwordRef",modelValue:e.form.password,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.password=l),modelModifiers:{trim:!0},placeholder:e.translateTitle("请输入密码"),tabindex:"2",type:e.passwordType,onKeyup:(0,t.jR)(e.handleLogin,["enter"])},(0,r.eX)({prefix:(0,r.k6)((()=>[(0,r.bF)(p,{icon:"lock-line"})])),_:2},["password"===e.passwordType?{name:"suffix",fn:(0,r.k6)((()=>[(0,r.bF)(p,{class:"show-password",icon:"eye-off-line",onClick:e.handlePassword},null,8,["onClick"])])),key:"0"}:{name:"suffix",fn:(0,r.k6)((()=>[(0,r.bF)(p,{class:"show-password",icon:"eye-line",onClick:e.handlePassword},null,8,["onClick"])])),key:"1"}]),1032,["modelValue","placeholder","type","onKeyup"]))])),_:1}),(0,r.bF)(m,{prop:"verificationCode"},{default:(0,r.k6)((()=>[(0,r.bF)(f,{modelValue:e.form.verificationCode,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.verificationCode=l),modelModifiers:{trim:!0},placeholder:e.translateTitle("验证码")+e.previewText,tabindex:"3",type:"text"},{prefix:(0,r.k6)((()=>[(0,r.bF)(p,{icon:"barcode-box-line"})])),_:1},8,["modelValue","placeholder"]),(0,r.bF)(w,{class:"code",src:e.codeUrl,onClick:e.changeCode},null,8,["src","onClick"])])),_:1}),(0,r.bF)(m,null,{default:(0,r.k6)((()=>[(0,r.bF)(g,{class:"login-btn",loading:e.loading,type:"primary",onClick:e.handleLogin},{default:(0,r.k6)((()=>[(0,r.eW)((0,a.v_)(e.translateTitle("登录")),1)])),_:1},8,["loading","onClick"])])),_:1}),(0,r.bF)(m,null,{default:(0,r.k6)((()=>[(0,r.bF)(k,{to:"/register"},{default:(0,r.k6)((()=>[(0,r.eW)((0,a.v_)(e.translateTitle("注册")),1)])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1}),(0,r.bF)(u,{lg:1,md:1,sm:24,xl:1,xs:24},{default:(0,r.k6)((()=>l[5]||(l[5]=[(0,r.Lk)("div",{style:{color:"transparent"}},"占位符",-1)]))),_:1})])),_:1}),(0,r.bF)(h)])}o(57284);var d=o(90966),c=o(26157),u=o(85759),p=o(57971),f=o(37489),m=o(12176),w=(0,r.pM)({name:"Login",directives:{focus:{mounted(e){e.querySelector("input").focus()}}},setup(){const e=(0,m.lq)(),l=(0,m.rd)(),o=(0,c.k)(),a=(0,d.C)(),t=e=>o.login(e),i=(e,l,o)=>{""===l?o(new Error((0,u.Tl)("用户名不能为空"))):o()},s=(e,l,o)=>{(0,p.Ij)(l)?o():o(new Error((0,u.Tl)("密码不能少于6位")))},n=(0,f.Kh)({formRef:null,passwordRef:null,form:{username:"",password:"",verificationCode:""},rules:{username:[{required:!0,trigger:"blur",validator:i}],password:[{required:!0,trigger:"blur",validator:s}]},loading:!1,passwordType:"password",redirect:void 0,timer:0,codeUrl:"https://www.oschina.net/action/user/captcha",previewText:""}),w=()=>"/404"===n.redirect||"/403"===n.redirect?"/":n.redirect,g=()=>{"password"===n.passwordType?n.passwordType="":n.passwordType="password",(0,r.dY)((()=>{n["passwordRef"].focus()}))},k=async()=>{n["formRef"].validate((async e=>{if(e)try{n.loading=!0,await t(n.form).catch((()=>{})),await l.push(w())}finally{n.loading=!1}}))},b=()=>{n.codeUrl=`https://www.oschina.net/action/user/captcha?timestamp=${(new Date).getTime()}`},v=(0,f.KR)(!1);return(0,r.KC)((()=>{n.form.username="admin",n.form.password="123456","vue-admin-beautiful.com"!==location.hostname&&"chu1204505056.gitee.io"!==location.hostname||(v.value=!0,n.previewText="（演示地址验证码可不填）",n.timer=setTimeout((()=>{k()}),5e3))})),(0,r.nT)((()=>{n.redirect=e.query&&e.query.redirect||"/"})),(0,m.JZ)(((e,l,o)=>{clearInterval(n.timer),o()})),{translateTitle:u.Tl,...(0,f.QW)(n),title:a.getTitle,handlePassword:g,handleLogin:k,changeCode:b}}});function g(e){e.__source="src/views/login/index.vue"}var k=o(48499);"function"===typeof g&&g(w);const b=(0,k.A)(w,[["render",n],["__scopeId","data-v-3fea50e2"]]);var v=b}}]);