/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{g as U}from"./description-Bl0hsucK.js";import{d as D,a as g,J as t,U as e,A as s,z as f,u as a,D as h,G as I,a2 as L,Z as c,Y as N,o as p}from"./vsv-element-plus-CWjYVfvE.js";import{_ as z}from"./index-D_keMk_X.js";import"./vsv-icon-CzoHxvAi.js";import"./vsv-nprogress-D-M_H-zP.js";const E={class:"speech-synthesis-container no-background-container"},F=D({name:"SpeechSynthesis",__name:"SpeechSynthesis",setup(G){const i=ref(void 0),u=ref(""),o=useSpeechSynthesis(u,{voice:i}),S=async()=>{const{data:v}=await U();u.value=v.description.replaceAll(`
`,"").replaceAll(/<[^>]*>/g,"").replaceAll(/\s/g,"").replaceAll(/([。：；])\s*/g,`$1
`)};let y;const r=ref([]),k=()=>{o.status.value==="pause"?globalThis.speechSynthesis.resume():o.speak()},x=()=>{globalThis.speechSynthesis.pause()},V=()=>{o.stop()};let d;return onMounted(()=>{o.isSupported.value&&(d=setTimeout(()=>{y=globalThis.speechSynthesis,r.value=y.getVoices(),i.value=r.value[0]},200),S())}),onBeforeUnmount(()=>{d&&clearTimeout(d)}),(v,l)=>{const w=s("el-input"),_=s("el-form-item"),A=s("el-option"),C=s("el-select"),m=s("el-button"),T=s("el-form"),b=s("vab-card"),B=s("el-col"),P=s("el-row");return p(),g("div",E,[t(P,{gutter:20},{default:e(()=>[t(B,{lg:12,md:18,sm:24,xl:12,xs:24},{default:e(()=>[a(o).isSupported?(p(),f(b,{key:0},{default:e(()=>[t(T,{"label-position":"top"},{default:e(()=>[t(_,{label:"文本"},{default:e(()=>[t(w,{modelValue:a(u),"onUpdate:modelValue":l[0]||(l[0]=n=>h(u)?u.value=n:null),clearable:"",rows:12,type:"textarea"},null,8,["modelValue"])]),_:1}),t(_,{label:"语言"},{default:e(()=>[t(C,{modelValue:a(i),"onUpdate:modelValue":l[1]||(l[1]=n=>h(i)?i.value=n:null)},{default:e(()=>[(p(!0),g(I,null,L(a(r),n=>(p(),f(A,{key:n.name,label:n.name,value:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(_,{label:"操作"},{default:e(()=>[t(m,{disabled:a(o).isPlaying.value,type:"primary",onClick:k},{default:e(()=>[c(N(a(o).status.value==="pause"?"继续":"播放"),1)]),_:1},8,["disabled"]),t(m,{disabled:!a(o).isPlaying.value,type:"warning",onClick:x},{default:e(()=>l[2]||(l[2]=[c("暂停")])),_:1},8,["disabled"]),t(m,{disabled:!a(o).isPlaying.value,type:"danger",onClick:V},{default:e(()=>l[3]||(l[3]=[c("结束")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})):(p(),f(b,{key:1},{default:e(()=>l[4]||(l[4]=[c("您的浏览器不支持SpeechSynthesis API")])),_:1}))]),_:1})]),_:1})])}}}),$=z(F,[["__scopeId","data-v-c3a6acc8"]]);export{$ as default};
