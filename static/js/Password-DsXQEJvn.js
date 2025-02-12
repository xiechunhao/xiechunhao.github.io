/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-12 09:55:11 
 */
import Y from"./LoginContainer-BbCeGIvw.js";import{d as Z,r as c,h as C,a3 as j,S as y,T as l,e as _,Z as r,u as o,U,Y as p,ap as z,aL as A,R as E,a8 as H,a7 as g,aB as J,ao as Q,aK as P,o as x}from"./vsv-element-plus-B-S50adB.js";import{u as W,a as ee,s as oe,t,i as te,d as R,b as re,p as se,$ as le}from"./index-I0Q3W04Q.js";import"./vsv-icon-BcEnJ7dJ.js";import"./vsv-nprogress-Bmiy9T8n.js";const ae=""+new URL("../png/left_img_6-DLOtBE7X.png",import.meta.url).href,ne={class:"login-form"},ie=["src"],de={class:"title-tips"},ge=Z({name:"Register",__name:"Password",setup(pe){const S=re(),k=W(),B=ee(),{title:I}=oe(B),{setToken:M}=k,m=c(!1),v=c(),h=c(!1);let w;const b=c(t("获取验证码")),a=C({username:"",password:"",password2:"",phone:"",verificationCode:"",phoneCode:""}),q=(n,e,s)=>{e===""?s(new Error(t("用户名不能为空"))):s()},D=(n,e,s)=>{te(e)?s():s(new Error(t("密码不能少于6位")))},T=(n,e,s)=>{e===a.password?s():s(new Error(t("请确认新密码")))},$=(n,e,s)=>{R(e)?s():s(new Error(t("请输入正确的手机号")))},F=C({username:[{required:!0,trigger:"blur",message:t("请输入用户名")},{validator:q,trigger:"blur"}],phone:[{required:!0,trigger:"blur",message:t("请输入手机号")},{validator:$,trigger:"blur"}],password:[{required:!0,trigger:"blur",message:t("请输入新密码")},{validator:D,trigger:"blur"}],password2:[{required:!0,trigger:"blur",message:t("请确认新密码")},{validator:T,trigger:"blur"}],phoneCode:[{required:!0,trigger:"blur",message:t("请输入手机验证码")}]}),L=()=>{var e;if(!R(a.phone)){(e=v.value)==null||e.validateField("phone");return}h.value=!0;let n=60;w=setInterval(()=>{n>0?(n--,b.value=`${t("获取验证码 ")+n}s`):(clearInterval(w),b.value=t("获取验证码"),h.value=!1)},1e3)},N=()=>{var n;(n=v.value)==null||n.validate(async e=>{if(e){m.value=!0;const{msg:s,data:{token:d}}=await se(a).catch(()=>{m.value=!1});le(`${s}，点击确定模拟进入拥有【admin】角色的首页`,null,async()=>{m.value=!1,M(d),await S.push("/index")})}})};return j(()=>{clearInterval(w)}),(n,e)=>{const s=E("vab-icon"),d=A,u=z,f=H,V=E("router-link"),G=Q,K=Y,O=P("focus"),X=P("throttle");return x(),y(K,null,{default:l(()=>[_("div",ne,[_("img",{alt:"",class:"left-img",src:o(ae)},null,8,ie),r(G,{ref_key:"formRef",ref:v,"label-position":"left",model:o(a),rules:o(F),onSubmit:e[5]||(e[5]=J(()=>{},["prevent"]))},{default:l(()=>[e[6]||(e[6]=_("div",{class:"title"},"hello !",-1)),_("div",de,p(o(I))+" "+p(o(t)("忘记密码")),1),r(u,{prop:"username"},{default:l(()=>[U((x(),y(d,{modelValue:o(a).username,"onUpdate:modelValue":e[0]||(e[0]=i=>o(a).username=i),modelModifiers:{trim:!0},"auto-complete":"off",clearable:"",placeholder:o(t)("请输入用户名"),type:"text"},{prefix:l(()=>[r(s,{icon:"user-line"})]),_:1},8,["modelValue","placeholder"])),[[O]])]),_:1}),r(u,{prop:"phone"},{default:l(()=>[r(d,{modelValue:o(a).phone,"onUpdate:modelValue":e[1]||(e[1]=i=>o(a).phone=i),modelModifiers:{trim:!0},clearable:"",maxlength:"11",placeholder:o(t)("请输入手机号"),"show-word-limit":"",type:"text"},{prefix:l(()=>[r(s,{icon:"smartphone-line"})]),_:1},8,["modelValue","placeholder"])]),_:1}),r(u,{prop:"phoneCode",style:{position:"relative"}},{default:l(()=>[r(d,{modelValue:o(a).phoneCode,"onUpdate:modelValue":e[2]||(e[2]=i=>o(a).phoneCode=i),modelModifiers:{trim:!0},placeholder:o(t)("请输入手机验证码"),type:"text"},{prefix:l(()=>[r(s,{icon:"barcode-box-line"})]),_:1},8,["modelValue","placeholder"]),r(f,{class:"phone-code",disabled:o(h),type:"primary",onClick:L},{default:l(()=>[g(p(o(t)(o(b))),1)]),_:1},8,["disabled"])]),_:1}),r(u,{prop:"password"},{default:l(()=>[r(d,{modelValue:o(a).password,"onUpdate:modelValue":e[3]||(e[3]=i=>o(a).password=i),modelModifiers:{trim:!0},clearable:"",placeholder:o(t)("请输入新密码"),type:"password"},{prefix:l(()=>[r(s,{icon:"lock-line"})]),_:1},8,["modelValue","placeholder"])]),_:1}),r(u,{prop:"password2"},{default:l(()=>[r(d,{modelValue:o(a).password2,"onUpdate:modelValue":e[4]||(e[4]=i=>o(a).password2=i),modelModifiers:{trim:!0},clearable:"",placeholder:o(t)("请确认新密码"),type:"password"},{prefix:l(()=>[r(s,{icon:"lock-line"})]),_:1},8,["modelValue","placeholder"])]),_:1}),U((x(),y(f,{class:"login-btn",loading:o(m),"native-type":"submit",type:"primary"},{default:l(()=>[g(p(o(t)("修改密码")),1)]),_:1},8,["loading"])),[[X,N]]),r(V,{to:"/login"},{default:l(()=>[r(f,{style:{"margin-top":"20px","margin-left":"-10px"},type:"primary"},{default:l(()=>[g(p(o(t)("登录")),1)]),_:1})]),_:1}),r(V,{to:"/register"},{default:l(()=>[r(f,{style:{"margin-top":"20px"},text:"",type:"primary"},{default:l(()=>[g(p(o(t)("注册")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])])]),_:1})}}});export{ge as default};
