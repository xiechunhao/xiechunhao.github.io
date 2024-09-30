/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-30 14:06:07 
 */
import{d as g,N as k,o as B,b as C,T as o,$ as u,a4 as r,e as s,u as a,k as t}from"./vsv-element-plus-CxGOTlXz.js";const E={class:"slider-container no-background-container"},$=g({name:"Slider",__name:"slider",setup(R){const m=ref(0),p=ref(50),V=ref(36),i=ref(48),v=ref(42),f=ref(0),U=ref(0),x=ref(0),b=ref([4,8]),w=ref(0),N=T=>T/100;return(T,l)=>{const n=k("el-slider"),d=k("vab-card");return B(),C("div",E,[o(d,null,{header:u(()=>l[10]||(l[10]=[r("基础用法")])),default:u(()=>[l[11]||(l[11]=s("span",{class:"demonstration"},"默认",-1)),o(n,{modelValue:a(m),"onUpdate:modelValue":l[0]||(l[0]=e=>t(m)?m.value=e:null)},null,8,["modelValue"]),l[12]||(l[12]=s("span",{class:"demonstration"},"自定义初始值",-1)),o(n,{modelValue:a(p),"onUpdate:modelValue":l[1]||(l[1]=e=>t(p)?p.value=e:null)},null,8,["modelValue"]),l[13]||(l[13]=s("span",{class:"demonstration"},"隐藏 Tooltip",-1)),o(n,{modelValue:a(V),"onUpdate:modelValue":l[2]||(l[2]=e=>t(V)?V.value=e:null),"show-tooltip":!1},null,8,["modelValue"]),l[14]||(l[14]=s("span",{class:"demonstration"},"格式化 Tooltip",-1)),o(n,{modelValue:a(i),"onUpdate:modelValue":l[3]||(l[3]=e=>t(i)?i.value=e:null),"format-tooltip":N},null,8,["modelValue"]),l[15]||(l[15]=s("span",{class:"demonstration"},"禁用",-1)),o(n,{modelValue:a(v),"onUpdate:modelValue":l[4]||(l[4]=e=>t(v)?v.value=e:null),disabled:""},null,8,["modelValue"])]),_:1}),o(d,null,{header:u(()=>l[16]||(l[16]=[r("离散值")])),default:u(()=>[l[17]||(l[17]=s("span",{class:"demonstration"},"不显示间断点",-1)),o(n,{modelValue:a(f),"onUpdate:modelValue":l[5]||(l[5]=e=>t(f)?f.value=e:null),step:10},null,8,["modelValue"]),l[18]||(l[18]=s("span",{class:"demonstration"},"显示间断点",-1)),o(n,{modelValue:a(U),"onUpdate:modelValue":l[6]||(l[6]=e=>t(U)?U.value=e:null),"show-stops":"",step:10},null,8,["modelValue"])]),_:1}),o(d,null,{header:u(()=>l[19]||(l[19]=[r("带有输入框")])),default:u(()=>[o(n,{modelValue:a(x),"onUpdate:modelValue":l[7]||(l[7]=e=>t(x)?x.value=e:null),"show-input":""},null,8,["modelValue"])]),_:1}),o(d,null,{header:u(()=>l[20]||(l[20]=[r("范围选择")])),default:u(()=>[o(n,{modelValue:a(b),"onUpdate:modelValue":l[8]||(l[8]=e=>t(b)?b.value=e:null),max:10,range:"","show-stops":""},null,8,["modelValue"])]),_:1}),o(d,null,{header:u(()=>l[21]||(l[21]=[r("竖向模式")])),default:u(()=>[o(n,{modelValue:a(w),"onUpdate:modelValue":l[9]||(l[9]=e=>t(w)?w.value=e:null),height:"200px",vertical:""},null,8,["modelValue"])]),_:1})])}}});export{$ as default};
