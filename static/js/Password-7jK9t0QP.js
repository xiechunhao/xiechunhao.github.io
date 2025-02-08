/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:17:33 
 */
import{d as X,M as y,$ as s,N as p,a2 as C,o as x,e as g,u as o,T as r,a3 as u,Y as U,a4 as _,a5 as Y}from"./vsv-element-plus-CxGOTlXz.js";import{u as j,a as z,t,i as A,b as P,p as H}from"./index-vqJMV2wg.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const J=""+new URL("../png/left_img_6-DLOtBE7X.png",import.meta.url).href,K={class:"login-form"},Q=["src"],W={class:"title-tips"},le=X({name:"Register",__name:"Password",setup(Z){const M=useRouter(),R=j(),S=z(),{title:k}=storeToRefs(S),{setToken:q}=R,f=ref(!1),v=ref(),h=ref(!1);let w;const b=ref(t("获取验证码")),a=reactive({username:"",password:"",password2:"",phone:"",verificationCode:"",phoneCode:""}),E=(n,e,l)=>{e===""?l(new Error(t("用户名不能为空"))):l()},B=(n,e,l)=>{A(e)?l():l(new Error(t("密码不能少于6位")))},D=(n,e,l)=>{e===a.password?l():l(new Error(t("请确认新密码")))},I=(n,e,l)=>{P(e)?l():l(new Error(t("请输入正确的手机号")))},N=reactive({username:[{required:!0,trigger:"blur",message:t("请输入用户名")},{validator:E,trigger:"blur"}],phone:[{required:!0,trigger:"blur",message:t("请输入手机号")},{validator:I,trigger:"blur"}],password:[{required:!0,trigger:"blur",message:t("请输入新密码")},{validator:B,trigger:"blur"}],password2:[{required:!0,trigger:"blur",message:t("请确认新密码")},{validator:D,trigger:"blur"}],phoneCode:[{required:!0,trigger:"blur",message:t("请输入手机验证码")}]}),T=()=>{var e;if(!P(a.phone)){(e=v.value)==null||e.validateField("phone");return}h.value=!0;let n=60;w=setInterval(()=>{n>0?(n--,b.value=`${t("获取验证码 ")+n}s`):(clearInterval(w),b.value=t("获取验证码"),h.value=!1)},1e3)},$=()=>{var n;(n=v.value)==null||n.validate(async e=>{if(e){f.value=!0;const{msg:l,data:{token:d}}=await H(a).catch(()=>{f.value=!1});$baseConfirm(`${l}，点击确定模拟进入拥有【admin】角色的首页`,null,async()=>{f.value=!1,q(d),await M.push("/index")})}})};return onUnmounted(()=>{clearInterval(w)}),(n,e)=>{const l=p("vab-icon"),d=p("el-input"),m=p("el-form-item"),c=p("el-button"),V=p("router-link"),L=p("el-form"),F=p("login-container"),G=C("focus"),O=C("throttle");return x(),y(F,null,{default:s(()=>[g("div",K,[g("img",{alt:"",class:"left-img",src:o(J)},null,8,Q),r(L,{ref_key:"formRef",ref:v,"label-position":"left",model:o(a),rules:o(N),onSubmit:e[5]||(e[5]=Y(()=>{},["prevent"]))},{default:s(()=>[e[6]||(e[6]=g("div",{class:"title"},"hello !",-1)),g("div",W,u(o(k))+" "+u(o(t)("忘记密码")),1),r(m,{prop:"username"},{default:s(()=>[U((x(),y(d,{modelValue:o(a).username,"onUpdate:modelValue":e[0]||(e[0]=i=>o(a).username=i),modelModifiers:{trim:!0},"auto-complete":"off",clearable:"",placeholder:o(t)("请输入用户名"),type:"text"},{prefix:s(()=>[r(l,{icon:"user-line"})]),_:1},8,["modelValue","placeholder"])),[[G]])]),_:1}),r(m,{prop:"phone"},{default:s(()=>[r(d,{modelValue:o(a).phone,"onUpdate:modelValue":e[1]||(e[1]=i=>o(a).phone=i),modelModifiers:{trim:!0},clearable:"",maxlength:"11",placeholder:o(t)("请输入手机号"),"show-word-limit":"",type:"text"},{prefix:s(()=>[r(l,{icon:"smartphone-line"})]),_:1},8,["modelValue","placeholder"])]),_:1}),r(m,{prop:"phoneCode",style:{position:"relative"}},{default:s(()=>[r(d,{modelValue:o(a).phoneCode,"onUpdate:modelValue":e[2]||(e[2]=i=>o(a).phoneCode=i),modelModifiers:{trim:!0},placeholder:o(t)("请输入手机验证码"),type:"text"},{prefix:s(()=>[r(l,{icon:"barcode-box-line"})]),_:1},8,["modelValue","placeholder"]),r(c,{class:"phone-code",disabled:o(h),type:"primary",onClick:T},{default:s(()=>[_(u(o(t)(o(b))),1)]),_:1},8,["disabled"])]),_:1}),r(m,{prop:"password"},{default:s(()=>[r(d,{modelValue:o(a).password,"onUpdate:modelValue":e[3]||(e[3]=i=>o(a).password=i),modelModifiers:{trim:!0},clearable:"",placeholder:o(t)("请输入新密码"),type:"password"},{prefix:s(()=>[r(l,{icon:"lock-line"})]),_:1},8,["modelValue","placeholder"])]),_:1}),r(m,{prop:"password2"},{default:s(()=>[r(d,{modelValue:o(a).password2,"onUpdate:modelValue":e[4]||(e[4]=i=>o(a).password2=i),modelModifiers:{trim:!0},clearable:"",placeholder:o(t)("请确认新密码"),type:"password"},{prefix:s(()=>[r(l,{icon:"lock-line"})]),_:1},8,["modelValue","placeholder"])]),_:1}),U((x(),y(c,{class:"login-btn",loading:o(f),"native-type":"submit",type:"primary"},{default:s(()=>[_(u(o(t)("修改密码")),1)]),_:1},8,["loading"])),[[O,$]]),r(V,{to:"/login"},{default:s(()=>[r(c,{style:{"margin-top":"20px","margin-left":"-10px"},type:"primary"},{default:s(()=>[_(u(o(t)("登录")),1)]),_:1})]),_:1}),r(V,{to:"/register"},{default:s(()=>[r(c,{style:{"margin-top":"20px"},text:"",type:"primary"},{default:s(()=>[_(u(o(t)("注册")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])])]),_:1})}}});export{le as default};
