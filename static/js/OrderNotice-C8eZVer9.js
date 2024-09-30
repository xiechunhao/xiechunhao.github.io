/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-30 14:06:07 
 */
import{d as B,N as n,o as c,b as E,T as o,$ as t,u as b,M as k,k as P,a4 as s}from"./vsv-element-plus-CxGOTlXz.js";const A={class:"order-notice-container no-background-container"},U=B({name:"OrderNotice",__name:"OrderNotice",setup(M){const u=ref(void 0),l=ref(""),a=useSpeechSynthesis(l,{voice:u}),N=async()=>{l.value="您有新的Shop Vite订单，请及时处理！"};let d;const p=ref([]);let r;onMounted(()=>{a.isSupported.value&&(r=setTimeout(()=>{d=window.speechSynthesis,p.value=d.getVoices(),u.value=p.value[0]},200),N())}),onBeforeUnmount(()=>{r&&clearTimeout(r)});const m=()=>{a.status.value==="pause"?window.speechSynthesis.resume():a.speak()},f=()=>{$baseNotify(l.value,"温馨提示","success","bottom-right")},_=()=>{window.Notification.requestPermission().then(y=>{if(y==="granted"){const e=new window.Notification("温馨提示",{body:l.value});e.addEventListener("click",()=>{window.focus(),e.close()})}})},S=()=>{f(),_(),setTimeout(()=>{m()},500)};return(y,e)=>{const h=n("el-input"),v=n("el-form-item"),i=n("el-button"),x=n("el-space"),g=n("el-form"),w=n("vab-card"),C=n("el-col"),V=n("el-row");return c(),E("div",A,[o(V,{gutter:20},{default:t(()=>[o(C,{lg:8,md:18,sm:24,xl:8,xs:24},{default:t(()=>[b(a).isSupported?(c(),k(w,{key:0},{default:t(()=>[o(g,{"label-position":"top"},{default:t(()=>[o(v,{label:"文本"},{default:t(()=>[o(h,{modelValue:b(l),"onUpdate:modelValue":e[0]||(e[0]=T=>P(l)?l.value=T:null),clearable:"",rows:4,type:"textarea"},null,8,["modelValue"])]),_:1}),o(v,{label:"操作"},{default:t(()=>[o(x,{wrap:""},{default:t(()=>[o(i,{type:"primary",onClick:S},{default:t(()=>e[1]||(e[1]=[s("全部推送")])),_:1}),o(i,{type:"primary",onClick:m},{default:t(()=>e[2]||(e[2]=[s("推送语音")])),_:1}),o(i,{type:"primary",onClick:f},{default:t(()=>e[3]||(e[3]=[s("推送网页通知")])),_:1}),o(i,{type:"primary",onClick:_},{default:t(()=>e[4]||(e[4]=[s("推送系统通知")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):(c(),k(w,{key:1},{default:t(()=>e[5]||(e[5]=[s("您的浏览器不支持SpeechSynthesis API")])),_:1}))]),_:1})]),_:1})])}}});export{U as default};
