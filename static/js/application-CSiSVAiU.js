/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 15:53:45 
 */
import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-kw-wsGJ1.js";import{h as u,j as f}from"./index-CQIU_Sxf.js";import{d as _,r as s,E as h,o as a,b as w,u as e,S as r,W as v,T as C,a8 as b,a9 as y}from"./vsv-element-plus-DDEqdpLt.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const E={class:"application-container"},P=_({name:"Application",__name:"application",setup(k){const d=window.location.protocol==="https:",o=s(!0),n=s("点击安装前需手动按下键盘Ctrl（Command） + Shift + R 强制刷新当前页面，如果无法安装，PC端请点击浏览器地址栏右侧安装按钮进行安装，手机端请点击添加到主屏幕进行安装，仅支持Edge、Chrome、Safari"),c=()=>!!(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://"));return h(()=>{c()&&(n.value="已在PWA桌面应用打开"),window.addEventListener("beforeinstallprompt",t=>{o.value=!1,document.querySelector("#installRef").addEventListener("click",()=>{t?(t.prompt(),t.userChoice.then(()=>{location.reload(!0)})):u("未获取到安装指令，请按下键盘Ctrl（Command） + Shift + R 强制刷新当前页面后重试，如果无法安装，PC端请点击浏览器地址栏右侧安装按钮进行安装，手机端请点击添加到主屏幕进行安装，仅支持Edge、Chrome、Safari",()=>{location.reload(!0)})})})}),(t,i)=>{const l=m,p=y;return a(),w("div",E,[!e(!1)&&d||e(!1)&&e(f)?(a(),r(l,{key:0,title:e(n)},null,8,["title"])):(a(),r(l,{key:1,title:"开发环境或非https协议下暂不支持安装PWA应用",type:"warning"})),v(p,{id:"installRef",disabled:e(o),type:"primary"},{default:C(()=>i[0]||(i[0]=[b("点击安装")])),_:1},8,["disabled"])])}}});export{P as default};
