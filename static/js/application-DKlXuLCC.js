/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 21:23:19 
 */
import{c as m}from"./index-wMoNB7-P.js";import{d as u,b as f,u as e,A as r,K as _,S as v,B as s,o,Y as w}from"./vsv-element-plus-CleF0dO9.js";import"./vsv-icon-DrZkBOPN.js";import"./vsv-nprogress-D5kd6v05.js";const C={class:"application-container"},E=u({name:"Application",__name:"application",setup(h){const d=window.location.protocol==="https:",a=ref(!0),n=ref("点击安装前需手动按下键盘Ctrl（Command） + Shift + R 强制刷新当前页面，如果无法安装，PC端请点击浏览器地址栏右侧安装按钮进行安装，手机端请点击添加到主屏幕进行安装，仅支持Edge、Chrome、Safari"),c=()=>!!(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://"));return onMounted(()=>{c()&&(n.value="已在PWA桌面应用打开"),window.addEventListener("beforeinstallprompt",t=>{a.value=!1,document.querySelector("#installRef").addEventListener("click",()=>{t?(t.prompt(),t.userChoice.then(()=>{location.reload(!0)})):$baseAlert("未获取到安装指令，请按下键盘Ctrl（Command） + Shift + R 强制刷新当前页面后重试，如果无法安装，PC端请点击浏览器地址栏右侧安装按钮进行安装，手机端请点击添加到主屏幕进行安装，仅支持Edge、Chrome、Safari",()=>{location.reload(!0)})})})}),(t,l)=>{const i=s("vab-alert"),p=s("el-button");return o(),f("div",C,[!e(!1)&&d||e(!1)&&e(m)?(o(),r(i,{key:0,title:e(n)},null,8,["title"])):(o(),r(i,{key:1,title:"开发环境或非https协议下暂不支持安装PWA应用",type:"warning"})),_(p,{id:"installRef",disabled:e(a),type:"primary"},{default:v(()=>l[0]||(l[0]=[w("点击安装")])),_:1},8,["disabled"])])}}});export{E as default};
