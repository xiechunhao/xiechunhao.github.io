/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:50:12 
 */
import{_ as B}from"./index-Vqsrehqx.js";import{aF as T,R as F}from"./index-6xtryadw.js";import{d as I,r,E as O,D as P,o as u,b as R,W as o,T as t,u as b,S as k,h as q,a8 as s,aO as A,aq as D,a9 as U,bW as W,au as L,b7 as M,b8 as $}from"./vsv-element-plus-DDEqdpLt.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const j={class:"order-notice-container no-background-container"},X=I({name:"OrderNotice",__name:"OrderNotice",setup(z){const c=r(void 0),n=r(""),a=T(n,{voice:c}),S=async()=>{n.value="您有新的Shop Vite订单，请及时处理！"};let p;const d=r([]);let i;O(()=>{a.isSupported.value&&(i=setTimeout(()=>{p=window.speechSynthesis,d.value=p.getVoices(),c.value=d.value[0]},200),S())}),P(()=>{i&&clearTimeout(i)});const m=()=>{a.status.value==="pause"?window.speechSynthesis.resume():a.speak()},_=()=>{F(n.value,"温馨提示","success","bottom-right")},f=()=>{window.Notification.requestPermission().then(y=>{if(y==="granted"){const e=new window.Notification("温馨提示",{body:n.value});e.addEventListener("click",()=>{window.focus(),e.close()})}})},E=()=>{_(),f(),setTimeout(()=>{m()},500)};return(y,e)=>{const h=A,w=D,l=U,N=W,g=L,v=B,x=M,C=$;return u(),R("div",j,[o(C,{gutter:20},{default:t(()=>[o(x,{lg:8,md:18,sm:24,xl:8,xs:24},{default:t(()=>[b(a).isSupported?(u(),k(v,{key:0},{default:t(()=>[o(g,{"label-position":"top"},{default:t(()=>[o(w,{label:"文本"},{default:t(()=>[o(h,{modelValue:b(n),"onUpdate:modelValue":e[0]||(e[0]=V=>q(n)?n.value=V:null),clearable:"",rows:4,type:"textarea"},null,8,["modelValue"])]),_:1}),o(w,{label:"操作"},{default:t(()=>[o(N,{wrap:""},{default:t(()=>[o(l,{type:"primary",onClick:E},{default:t(()=>e[1]||(e[1]=[s("全部推送")])),_:1}),o(l,{type:"primary",onClick:m},{default:t(()=>e[2]||(e[2]=[s("推送语音")])),_:1}),o(l,{type:"primary",onClick:_},{default:t(()=>e[3]||(e[3]=[s("推送网页通知")])),_:1}),o(l,{type:"primary",onClick:f},{default:t(()=>e[4]||(e[4]=[s("推送系统通知")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):(u(),k(v,{key:1},{default:t(()=>e[5]||(e[5]=[s("您的浏览器不支持SpeechSynthesis API")])),_:1}))]),_:1})]),_:1})])}}});export{X as default};
