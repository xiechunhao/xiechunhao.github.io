/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:33:27 
 */
import Y from"./LoginContainer-CeqR4peD.js";import{d as Z,r as f,h as C,a3 as j,S as y,T as s,R,aK as U,o as x,e as _,Z as r,u as e,ao as z,aB as H,U as S,Y as u,ap as J,aL as O,a8 as Q,a7 as g}from"./vsv-element-plus-B-S50adB.js";import{u as W,a as X,s as ee,t,i as oe,d as E,b as te,r as re,$ as se}from"./index-Ba9EqH5M.js";import"./vsv-icon-BcEnJ7dJ.js";import"./vsv-nprogress-Bmiy9T8n.js";const ae=""+new URL("../png/left_img_5-C6A-Mdq3.png",import.meta.url).href,le={class:"login-form"},ne=["src"],ie={class:"title-tips"},_e=Z({name:"Register",__name:"Register",setup(de){const k=te(),I=W(),M=X(),{title:P}=ee(M),{setToken:q}=I,p=f(!1),v=f(),h=f(!1);let b;const w=f(t("获取验证码")),l=C({username:"",password:"",phone:"",verificationCode:"",phoneCode:""}),B=(n,o,a)=>{o===""?a(new Error(t("用户名不能为空"))):a()},T=(n,o,a)=>{oe(o)?a():a(new Error(t("密码不能少于6位")))},$=(n,o,a)=>{E(o)?a():a(new Error(t("请输入正确的手机号")))},D=C({username:[{required:!0,trigger:"blur",message:t("请输入用户名")},{validator:B,trigger:"blur"}],phone:[{required:!0,trigger:"blur",message:t("请输入手机号")},{validator:$,trigger:"blur"}],password:[{required:!0,trigger:"blur",message:t("请输入密码")},{validator:T,trigger:"blur"}],phoneCode:[{required:!0,trigger:"blur",message:t("请输入手机验证码")}]}),F=()=>{var o;if(!E(l.phone)){(o=v.value)==null||o.validateField("phone");return}h.value=!0;let n=60;b=setInterval(()=>{n>0?(n--,w.value=`${t("获取验证码 ")+n}s`):(clearInterval(b),w.value=t("获取验证码"),h.value=!1)},1e3)},N=()=>{var n;(n=v.value)==null||n.validate(async o=>{if(o){p.value=!0;const{msg:a,data:{token:d}}=await re(l).catch(()=>{p.value=!1});se(`${a}，点击确定模拟进入拥有【admin】角色的首页`,null,async()=>{p.value=!1,q(d),await k.push("/index")})}})};return j(()=>{clearInterval(b)}),(n,o)=>{const a=R("vab-icon"),d=O,m=J,c=Q,V=R("router-link"),L=z,A=Y,G=U("focus"),K=U("throttle");return x(),y(A,null,{default:s(()=>[_("div",le,[_("img",{alt:"",class:"left-img",src:e(ae)},null,8,ne),r(L,{ref_key:"formRef",ref:v,"label-position":"left",model:e(l),rules:e(D),onSubmit:o[4]||(o[4]=H(()=>{},["prevent"]))},{default:s(()=>[o[5]||(o[5]=_("div",{class:"title"},"hello !",-1)),_("div",ie,u(e(P))+" "+u(e(t)("账号注册")),1),r(m,{prop:"username"},{default:s(()=>[S((x(),y(d,{modelValue:e(l).username,"onUpdate:modelValue":o[0]||(o[0]=i=>e(l).username=i),modelModifiers:{trim:!0},"auto-complete":"off",clearable:"",placeholder:e(t)("请输入用户名"),type:"text"},{prefix:s(()=>[r(a,{icon:"user-line"})]),_:1},8,["modelValue","placeholder"])),[[G]])]),_:1}),r(m,{prop:"phone"},{default:s(()=>[r(d,{modelValue:e(l).phone,"onUpdate:modelValue":o[1]||(o[1]=i=>e(l).phone=i),modelModifiers:{trim:!0},clearable:"",maxlength:"11",placeholder:e(t)("请输入手机号"),"show-word-limit":"",type:"text"},{prefix:s(()=>[r(a,{icon:"smartphone-line"})]),_:1},8,["modelValue","placeholder"])]),_:1}),r(m,{prop:"phoneCode",style:{position:"relative"}},{default:s(()=>[r(d,{modelValue:e(l).phoneCode,"onUpdate:modelValue":o[2]||(o[2]=i=>e(l).phoneCode=i),modelModifiers:{trim:!0},placeholder:e(t)("请输入手机验证码"),type:"text"},{prefix:s(()=>[r(a,{icon:"barcode-box-line"})]),_:1},8,["modelValue","placeholder"]),r(c,{class:"phone-code",disabled:e(h),type:"primary",onClick:F},{default:s(()=>[g(u(e(t)(e(w))),1)]),_:1},8,["disabled"])]),_:1}),r(m,{prop:"password"},{default:s(()=>[r(d,{modelValue:e(l).password,"onUpdate:modelValue":o[3]||(o[3]=i=>e(l).password=i),modelModifiers:{trim:!0},clearable:"",placeholder:e(t)("请输入密码"),type:"password"},{prefix:s(()=>[r(a,{icon:"lock-line"})]),_:1},8,["modelValue","placeholder"])]),_:1}),S((x(),y(c,{class:"login-btn",loading:e(p),"native-type":"submit",type:"primary"},{default:s(()=>[g(u(e(t)("注册")),1)]),_:1},8,["loading"])),[[K,N]]),r(V,{to:"/login"},{default:s(()=>[r(c,{style:{"margin-top":"20px","margin-left":"-10px"},type:"primary"},{default:s(()=>[g(u(e(t)("登录")),1)]),_:1})]),_:1}),r(V,{to:"/password"},{default:s(()=>[r(c,{style:{"margin-top":"20px"},text:"",type:"primary"},{default:s(()=>[g(u(e(t)("忘记密码")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])])]),_:1})}}});export{_e as default};
