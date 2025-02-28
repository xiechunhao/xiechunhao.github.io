/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 13:58:02 
 */
import X from"./LoginContainer-BjCbH5aT.js";import{d as Y,r as f,f as V,a2 as j,R as y,S as s,Q as R,aL as S,o as x,b as _,Y as r,u as e,ap as z,aC as H,T as U,X as u,aq as J,aM as K,a7 as O,a6 as g}from"./vsv-element-plus-CcCXTk6v.js";import{u as W,a as Z,s as ee,t as o,i as te,d as E,b as oe,r as re,$ as se}from"./index-DuUxtc1j.js";import"./vsv-icon-1Y3OapYK.js";import"./vsv-nprogress-D-M_H-zP.js";const ae=""+new URL("../png/left_img_5-C6A-Mdq3.png",import.meta.url).href,le={class:"login-form"},ne=["src"],ie={class:"title-tips"},_e=Y({name:"Register",__name:"Register",setup(de){const M=oe(),k=W(),q=Z(),{title:I}=ee(q),{setToken:P}=k,p=f(!1),v=f(),h=f(!1);let b;const w=f(o("获取验证码")),l=V({username:"",password:"",phone:"",verificationCode:"",phoneCode:""}),B=(n,t,a)=>{t===""?a(new Error(o("用户名不能为空"))):a()},T=(n,t,a)=>{te(t)?a():a(new Error(o("密码不能少于6位")))},$=(n,t,a)=>{E(t)?a():a(new Error(o("请输入正确的手机号")))},D=V({username:[{required:!0,trigger:"blur",message:o("请输入用户名")},{validator:B,trigger:"blur"}],phone:[{required:!0,trigger:"blur",message:o("请输入手机号")},{validator:$,trigger:"blur"}],password:[{required:!0,trigger:"blur",message:o("请输入密码")},{validator:T,trigger:"blur"}],phoneCode:[{required:!0,trigger:"blur",message:o("请输入手机验证码")}]}),F=()=>{var t;if(!E(l.phone)){(t=v.value)==null||t.validateField("phone");return}h.value=!0;let n=60;b=setInterval(()=>{n>0?(n--,w.value=`${o("获取验证码 ")+n}s`):(clearInterval(b),w.value=o("获取验证码"),h.value=!1)},1e3)},N=()=>{var n;(n=v.value)==null||n.validate(async t=>{if(t){p.value=!0;const{msg:a,data:{token:d}}=await re(l).catch(()=>{p.value=!1});se(`${a}，点击确定模拟进入拥有【admin】角色的首页`,null,async()=>{p.value=!1,P(d),await M.push("/index")})}})};return j(()=>{clearInterval(b)}),(n,t)=>{const a=R("vab-icon"),d=K,m=J,c=O,C=R("router-link"),L=z,A=X,G=S("focus"),Q=S("throttle");return x(),y(A,null,{default:s(()=>[_("div",le,[_("img",{alt:"",class:"left-img",src:e(ae)},null,8,ne),r(L,{ref_key:"formRef",ref:v,"label-position":"left",model:e(l),rules:e(D),onSubmit:t[4]||(t[4]=H(()=>{},["prevent"]))},{default:s(()=>[t[5]||(t[5]=_("div",{class:"title"},"hello !",-1)),_("div",ie,u(e(I))+" "+u(e(o)("账号注册")),1),r(m,{prop:"username"},{default:s(()=>[U((x(),y(d,{modelValue:e(l).username,"onUpdate:modelValue":t[0]||(t[0]=i=>e(l).username=i),modelModifiers:{trim:!0},"auto-complete":"off",clearable:"",placeholder:e(o)("请输入用户名"),type:"text"},{prefix:s(()=>[r(a,{icon:"user-line"})]),_:1},8,["modelValue","placeholder"])),[[G]])]),_:1}),r(m,{prop:"phone"},{default:s(()=>[r(d,{modelValue:e(l).phone,"onUpdate:modelValue":t[1]||(t[1]=i=>e(l).phone=i),modelModifiers:{trim:!0},clearable:"",maxlength:"11",placeholder:e(o)("请输入手机号"),"show-word-limit":"",type:"text"},{prefix:s(()=>[r(a,{icon:"smartphone-line"})]),_:1},8,["modelValue","placeholder"])]),_:1}),r(m,{prop:"phoneCode",style:{position:"relative"}},{default:s(()=>[r(d,{modelValue:e(l).phoneCode,"onUpdate:modelValue":t[2]||(t[2]=i=>e(l).phoneCode=i),modelModifiers:{trim:!0},placeholder:e(o)("请输入手机验证码"),type:"text"},{prefix:s(()=>[r(a,{icon:"barcode-box-line"})]),_:1},8,["modelValue","placeholder"]),r(c,{class:"phone-code",disabled:e(h),type:"primary",onClick:F},{default:s(()=>[g(u(e(o)(e(w))),1)]),_:1},8,["disabled"])]),_:1}),r(m,{prop:"password"},{default:s(()=>[r(d,{modelValue:e(l).password,"onUpdate:modelValue":t[3]||(t[3]=i=>e(l).password=i),modelModifiers:{trim:!0},clearable:"",placeholder:e(o)("请输入密码"),type:"password"},{prefix:s(()=>[r(a,{icon:"lock-line"})]),_:1},8,["modelValue","placeholder"])]),_:1}),U((x(),y(c,{class:"login-btn",loading:e(p),"native-type":"submit",type:"primary"},{default:s(()=>[g(u(e(o)("注册")),1)]),_:1},8,["loading"])),[[Q,N]]),r(C,{to:"/login"},{default:s(()=>[r(c,{style:{"margin-top":"20px","margin-left":"-10px"},type:"primary"},{default:s(()=>[g(u(e(o)("登录")),1)]),_:1})]),_:1}),r(C,{to:"/password"},{default:s(()=>[r(c,{style:{"margin-top":"20px"},text:"",type:"primary"},{default:s(()=>[g(u(e(o)("忘记密码")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])])]),_:1})}}});export{_e as default};
