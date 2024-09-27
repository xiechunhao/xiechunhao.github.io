/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:50:12 
 */
import X from"./LoginContainer-DE0BqEOC.js";import{d as Z,r as c,p as C,a4 as j,o as y,S as x,T as a,e as _,u as o,W as r,a1 as p,Z as E,a8 as g,aA as z,$ as U,aO as H,aq as J,a9 as K,au as Q,aL as P}from"./vsv-element-plus-DDEqdpLt.js";import{a as Y,b as ee,c as oe,s as te,t,i as re,d as S,p as se,$ as ae}from"./index-6xtryadw.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const le=""+new URL("../png/left_img_6-DLOtBE7X.png",import.meta.url).href,ne={class:"login-form"},ie=["src"],de={class:"title-tips"},ge=Z({name:"Register",__name:"Password",setup(pe){const R=Y(),k=ee(),q=oe(),{title:I}=te(q),{setToken:M}=k,m=c(!1),v=c(),h=c(!1);let w;const b=c(t("获取验证码")),l=C({username:"",password:"",password2:"",phone:"",verificationCode:"",phoneCode:""}),B=(n,e,s)=>{e===""?s(new Error(t("用户名不能为空"))):s()},$=(n,e,s)=>{re(e)?s():s(new Error(t("密码不能少于6位")))},D=(n,e,s)=>{e===l.password?s():s(new Error(t("请确认新密码")))},T=(n,e,s)=>{S(e)?s():s(new Error(t("请输入正确的手机号")))},F=C({username:[{required:!0,trigger:"blur",message:t("请输入用户名")},{validator:B,trigger:"blur"}],phone:[{required:!0,trigger:"blur",message:t("请输入手机号")},{validator:T,trigger:"blur"}],password:[{required:!0,trigger:"blur",message:t("请输入新密码")},{validator:$,trigger:"blur"}],password2:[{required:!0,trigger:"blur",message:t("请确认新密码")},{validator:D,trigger:"blur"}],phoneCode:[{required:!0,trigger:"blur",message:t("请输入手机验证码")}]}),L=()=>{var e;if(!S(l.phone)){(e=v.value)==null||e.validateField("phone");return}h.value=!0;let n=60;w=setInterval(()=>{n>0?(n--,b.value=`${t("获取验证码 ")+n}s`):(clearInterval(w),b.value=t("获取验证码"),h.value=!1)},1e3)},N=()=>{var n;(n=v.value)==null||n.validate(async e=>{if(e){m.value=!0;const{msg:s,data:{token:d}}=await se(l).catch(()=>{m.value=!1});ae(`${s}，点击确定模拟进入拥有【admin】角色的首页`,null,async()=>{m.value=!1,M(d),await R.push("/index")})}})};return j(()=>{clearInterval(w)}),(n,e)=>{const s=U("vab-icon"),d=H,u=J,f=K,V=U("router-link"),O=Q,A=X,G=P("focus"),W=P("throttle");return y(),x(A,null,{default:a(()=>[_("div",ne,[_("img",{alt:"",class:"left-img",src:o(le)},null,8,ie),r(O,{ref_key:"formRef",ref:v,"label-position":"left",model:o(l),rules:o(F),onSubmit:e[5]||(e[5]=z(()=>{},["prevent"]))},{default:a(()=>[e[6]||(e[6]=_("div",{class:"title"},"hello !",-1)),_("div",de,p(o(I))+" "+p(o(t)("忘记密码")),1),r(u,{prop:"username"},{default:a(()=>[E((y(),x(d,{modelValue:o(l).username,"onUpdate:modelValue":e[0]||(e[0]=i=>o(l).username=i),modelModifiers:{trim:!0},"auto-complete":"off",clearable:"",placeholder:o(t)("请输入用户名"),type:"text"},{prefix:a(()=>[r(s,{icon:"user-line"})]),_:1},8,["modelValue","placeholder"])),[[G]])]),_:1}),r(u,{prop:"phone"},{default:a(()=>[r(d,{modelValue:o(l).phone,"onUpdate:modelValue":e[1]||(e[1]=i=>o(l).phone=i),modelModifiers:{trim:!0},clearable:"",maxlength:"11",placeholder:o(t)("请输入手机号"),"show-word-limit":"",type:"text"},{prefix:a(()=>[r(s,{icon:"smartphone-line"})]),_:1},8,["modelValue","placeholder"])]),_:1}),r(u,{prop:"phoneCode",style:{position:"relative"}},{default:a(()=>[r(d,{modelValue:o(l).phoneCode,"onUpdate:modelValue":e[2]||(e[2]=i=>o(l).phoneCode=i),modelModifiers:{trim:!0},placeholder:o(t)("请输入手机验证码"),type:"text"},{prefix:a(()=>[r(s,{icon:"barcode-box-line"})]),_:1},8,["modelValue","placeholder"]),r(f,{class:"phone-code",disabled:o(h),type:"primary",onClick:L},{default:a(()=>[g(p(o(t)(o(b))),1)]),_:1},8,["disabled"])]),_:1}),r(u,{prop:"password"},{default:a(()=>[r(d,{modelValue:o(l).password,"onUpdate:modelValue":e[3]||(e[3]=i=>o(l).password=i),modelModifiers:{trim:!0},clearable:"",placeholder:o(t)("请输入新密码"),type:"password"},{prefix:a(()=>[r(s,{icon:"lock-line"})]),_:1},8,["modelValue","placeholder"])]),_:1}),r(u,{prop:"password2"},{default:a(()=>[r(d,{modelValue:o(l).password2,"onUpdate:modelValue":e[4]||(e[4]=i=>o(l).password2=i),modelModifiers:{trim:!0},clearable:"",placeholder:o(t)("请确认新密码"),type:"password"},{prefix:a(()=>[r(s,{icon:"lock-line"})]),_:1},8,["modelValue","placeholder"])]),_:1}),E((y(),x(f,{class:"login-btn",loading:o(m),"native-type":"submit",type:"primary"},{default:a(()=>[g(p(o(t)("修改密码")),1)]),_:1},8,["loading"])),[[W,N]]),r(V,{to:"/login"},{default:a(()=>[r(f,{style:{"margin-top":"20px","margin-left":"-10px"},type:"primary"},{default:a(()=>[g(p(o(t)("登录")),1)]),_:1})]),_:1}),r(V,{to:"/register"},{default:a(()=>[r(f,{style:{"margin-top":"20px"},text:"",type:"primary"},{default:a(()=>[g(p(o(t)("注册")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])])]),_:1})}}});export{ge as default};
