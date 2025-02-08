/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{d as B,b as A,K as o,U as t,B as n,A as h,u as k,F as E,Z as s,o as c}from"./vsv-element-plus-D84I6Pnf.js";const P={class:"order-notice-container no-background-container"},q=B({name:"OrderNotice",__name:"OrderNotice",setup(U){const u=ref(void 0),l=ref(""),a=useSpeechSynthesis(l,{voice:u}),g=async()=>{l.value="您有新的Shop Vite订单，请及时处理！"};let p;const d=ref([]);let r;onMounted(()=>{a.isSupported.value&&(r=setTimeout(()=>{p=globalThis.speechSynthesis,d.value=p.getVoices(),u.value=d.value[0]},200),g())}),onBeforeUnmount(()=>{r&&clearTimeout(r)});const m=()=>{a.status.value==="pause"?globalThis.speechSynthesis.resume():a.speak()},f=()=>{$baseNotify(l.value,"温馨提示","success","bottom-right")},_=()=>{globalThis.Notification.requestPermission().then(y=>{if(y==="granted"){const e=new globalThis.Notification("温馨提示",{body:l.value});e.addEventListener("click",()=>{window.focus(),e.close()})}})},S=()=>{f(),_(),setTimeout(()=>{m()},500)};return(y,e)=>{const N=n("el-input"),b=n("el-form-item"),i=n("el-button"),w=n("el-space"),x=n("el-form"),v=n("vab-card"),T=n("el-col"),C=n("el-row");return c(),A("div",P,[o(C,{gutter:20},{default:t(()=>[o(T,{lg:8,md:18,sm:24,xl:8,xs:24},{default:t(()=>[k(a).isSupported?(c(),h(v,{key:0},{default:t(()=>[o(x,{"label-position":"top"},{default:t(()=>[o(b,{label:"文本"},{default:t(()=>[o(N,{modelValue:k(l),"onUpdate:modelValue":e[0]||(e[0]=V=>E(l)?l.value=V:null),clearable:"",rows:4,type:"textarea"},null,8,["modelValue"])]),_:1}),o(b,{label:"操作"},{default:t(()=>[o(w,{wrap:""},{default:t(()=>[o(i,{type:"primary",onClick:S},{default:t(()=>e[1]||(e[1]=[s("全部推送")])),_:1}),o(i,{type:"primary",onClick:m},{default:t(()=>e[2]||(e[2]=[s("推送语音")])),_:1}),o(i,{type:"primary",onClick:f},{default:t(()=>e[3]||(e[3]=[s("推送网页通知")])),_:1}),o(i,{type:"primary",onClick:_},{default:t(()=>e[4]||(e[4]=[s("推送系统通知")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):(c(),h(v,{key:1},{default:t(()=>e[5]||(e[5]=[s("您的浏览器不支持SpeechSynthesis API")])),_:1}))]),_:1})]),_:1})])}}});export{q as default};
