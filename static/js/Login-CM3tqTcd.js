/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 15:51:39 
 */
import{d as Y,A as x,S as s,B as a,W as U,o as m,e as d,u as e,K as o,X as u,P as b,Y as V,b as Z,Z as $}from"./vsv-element-plus-CqWB58IK.js";import{u as z,a as F,t as i,i as H,_ as J}from"./index-xIgfXPDD.js";import"./vsv-icon-DZFdJ319.js";import"./vsv-nprogress-CYSXMSUQ.js";const O=""+new URL("../png/left_img_1-Dp36PNG8.png",import.meta.url).href,Q={class:"login-form"},ee=["src"],oe={class:"title-tips"},te=["src"],re={class:"login-other hidden-xs-only"},se=Y({name:"Login",__name:"Login",setup(le){const R=useRoute(),q=useRouter(),L=z(),T=F(),{title:D}=storeToRefs(T),M=n=>L.login(n),f=ref(!1),E=ref("password"),p=ref(void 0);let _;const k=ref("https://www.oschina.net/action/user/captcha"),C=ref(""),v=ref(),N=ref(),l=reactive({username:"",password:"",verificationCode:""}),P=(n,r,t)=>{r===""?t(new Error(i("用户名不能为空"))):t()},I=(n,r,t)=>{H(r)?t():t(new Error(i("密码不能少于6位")))},j=reactive({username:[{required:!0,trigger:"blur",validator:P}],password:[{required:!0,trigger:"blur",validator:I}]}),A=()=>p.value==="/404"||p.value==="/403"?"/":p.value,g=async()=>{var n;v.value&&((n=v.value)==null||n.validate(async r=>{if(r)try{f.value=!0,await M(l).catch(()=>{f.value=!1}),await q.push(A())}finally{f.value=!1}}))},G=()=>{k.value=`https://www.oschina.net/action/user/captcha?timestamp=${Date.now()}`};return onBeforeMount(()=>{l.username="admin",l.password="123456",location.hostname.includes("vuejs-core")&&(C.value="（演示地址验证码可不填）",_=setTimeout(()=>{g()},1e3*10))}),watchEffect(()=>{p.value=R.query&&R.query.redirect||"/"}),onBeforeRouteLeave((n,r,t)=>{try{_&&clearTimeout(_)}catch{}t()}),(n,r)=>{const t=a("vab-icon"),w=a("el-input"),y=a("el-form-item"),h=a("el-button"),S=a("router-link"),K=a("el-form"),W=a("login-container"),X=U("focus"),B=U("throttle");return m(),x(W,null,{default:s(()=>[d("div",Q,[d("img",{alt:"",class:"left-img",src:e(O)},null,8,ee),o(K,{ref_key:"formRef",ref:v,"label-position":"left",model:e(l),rules:e(j),onSubmit:r[3]||(r[3]=$(()=>{},["prevent"]))},{default:s(()=>[r[4]||(r[4]=d("div",{class:"title"},"hello !",-1)),d("div",oe,u(e(i)("欢迎来到"))+" "+u(e(D)),1),o(y,{prop:"username"},{default:s(()=>[b((m(),x(w,{modelValue:e(l).username,"onUpdate:modelValue":r[0]||(r[0]=c=>e(l).username=c),modelModifiers:{trim:!0},clearable:"",placeholder:e(i)("请输入用户名"),type:"text"},{prefix:s(()=>[o(t,{icon:"user-line"})]),_:1},8,["modelValue","placeholder"])),[[X]])]),_:1}),o(y,{prop:"password"},{default:s(()=>[o(w,{ref_key:"passwordRef",ref:N,modelValue:e(l).password,"onUpdate:modelValue":r[1]||(r[1]=c=>e(l).password=c),modelModifiers:{trim:!0},clearable:"",placeholder:e(i)("请输入密码"),"show-password":"",type:e(E)},{prefix:s(()=>[o(t,{icon:"lock-line"})]),_:1},8,["modelValue","placeholder","type"])]),_:1}),o(y,{prop:"verificationCode"},{default:s(()=>[o(w,{modelValue:e(l).verificationCode,"onUpdate:modelValue":r[2]||(r[2]=c=>e(l).verificationCode=c),modelModifiers:{trim:!0},placeholder:e(i)("验证码")+e(C),type:"text"},{prefix:s(()=>[o(t,{icon:"barcode-box-line"})]),_:1},8,["modelValue","placeholder"]),d("img",{class:"code",src:e(k),onClick:G},null,8,te)]),_:1}),b((m(),x(h,{class:"login-btn",loading:e(f),type:"primary"},{default:s(()=>[V(u(e(i)("登录")),1)]),_:1},8,["loading"])),[[B,g]]),o(S,{to:"/register"},{default:s(()=>[o(h,{style:{"margin-top":"20px","margin-left":"-10px"},type:"primary"},{default:s(()=>[V(u(e(i)("注册")),1)]),_:1})]),_:1}),o(S,{to:"/password"},{default:s(()=>[o(h,{style:{"margin-top":"20px"},text:"",type:"primary"},{default:s(()=>[V(u(e(i)("忘记密码")),1)]),_:1})]),_:1}),b((m(),Z("div",re,[o(t,{icon:"wechat-fill",style:{color:"#08c25f"}}),o(t,{icon:"alipay-fill",style:{color:"#226bf3"}}),o(t,{icon:"dingding-fill",style:{color:"#007ef8"}}),o(t,{icon:"qq-fill",style:{color:"#009dff"}}),o(t,{icon:"tiktok-fill",style:{color:"#000000"}}),o(t,{icon:"weibo-fill",style:{color:"#df1e33"}}),o(t,{icon:"github-fill",style:{color:"#151515"}})])),[[B,g]])]),_:1},8,["model","rules"])])]),_:1})}}}),de=J(se,[["__scopeId","data-v-2f167483"]]);export{de as default};
