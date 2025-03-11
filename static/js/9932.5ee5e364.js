/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-12 00:28:56
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9932],{39932:function(e,l,t){t.r(l),t.d(l,{default:function(){return v}});var s=t(34641),a=t(37489),u=t(27386),n=t(42138),i=t(71349);const o={class:"speech-synthesis-container"},d={key:0},p={key:1};var c=(0,s.pM)({__name:"SpeechSynthesis",setup(e){const l=(0,a.KR)(void 0),t=(0,a.KR)(""),c=(0,i.o3U)(t,{voice:l}),r=async()=>{const{data:{description:e}}=await(0,n.v)();t.value=e};let b;const v=(0,a.KR)([]);(0,s.sV)((()=>{c.isSupported.value&&(setTimeout((()=>{b=window.speechSynthesis,v.value=b.getVoices(),l.value=v.value[0]}),100),r())}));const h=()=>{"pause"===c.status.value?window.speechSynthesis.resume():c.speak()},f=()=>{window.speechSynthesis.pause()},m=()=>{window.speechSynthesis.cancel()};return(e,n)=>{const i=(0,s.g2)("el-input"),r=(0,s.g2)("el-form-item"),b=(0,s.g2)("el-option"),k=(0,s.g2)("el-select"),y=(0,s.g2)("el-button"),g=(0,s.g2)("el-form"),_=(0,s.g2)("el-col"),w=(0,s.g2)("el-row");return(0,s.uX)(),(0,s.CE)("div",o,[(0,a.R1)(c).isSupported?((0,s.uX)(),(0,s.CE)("div",p,[(0,s.bF)(w,{gutter:20},{default:(0,s.k6)((()=>[(0,s.bF)(_,{lg:6,md:14,sm:24,xl:10,xs:24},{default:(0,s.k6)((()=>[(0,s.bF)(g,{"label-position":"top"},{default:(0,s.k6)((()=>[(0,s.bF)(r,{label:"文本"},{default:(0,s.k6)((()=>[(0,s.bF)(i,{modelValue:(0,a.R1)(t),"onUpdate:modelValue":n[0]||(n[0]=e=>(0,a.i9)(t)?t.value=e:null),rows:"12",type:"textarea"},null,8,["modelValue"])])),_:1}),(0,s.bF)(r,{label:"语言"},{default:(0,s.k6)((()=>[(0,s.bF)(k,{modelValue:(0,a.R1)(l),"onUpdate:modelValue":n[1]||(n[1]=e=>(0,a.i9)(l)?l.value=e:null),style:{width:"400px"}},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,a.R1)(v),(e=>((0,s.uX)(),(0,s.Wv)(b,{key:e.name,label:e.name,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,s.bF)(r,{label:"操作"},{default:(0,s.k6)((()=>[(0,s.bF)(y,{disabled:(0,a.R1)(c).isPlaying.value,type:"primary",onClick:h},{default:(0,s.k6)((()=>[(0,s.eW)((0,u.v_)("pause"===(0,a.R1)(c).status.value?"继续":"播放"),1)])),_:1},8,["disabled"]),(0,s.bF)(y,{disabled:!(0,a.R1)(c).isPlaying.value,type:"warning",onClick:f},{default:(0,s.k6)((()=>n[3]||(n[3]=[(0,s.eW)(" 暂停 ")]))),_:1},8,["disabled"]),(0,s.bF)(y,{disabled:!(0,a.R1)(c).isPlaying.value,type:"danger",onClick:m},{default:(0,s.k6)((()=>n[4]||(n[4]=[(0,s.eW)(" 结束 ")]))),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1})])),_:1})])):((0,s.uX)(),(0,s.CE)("div",d,n[2]||(n[2]=[(0,s.eW)(" Your browser does not support SpeechSynthesis API, "),(0,s.Lk)("a",{href:"https://caniuse.com/mdn-api_speechsynthesis",target:"_blank"}," more details ",-1)])))])}}});function r(e){e.__source="src/views/tools/SpeechSynthesis.vue"}"function"===typeof r&&r(c);const b=c;var v=b},42138:function(e,l,t){t.d(l,{v:function(){return a}});var s=t(24380);function a(){return(0,s.A)({url:"https://fc-mp-851edf02-46eb-43e6-828d-64c7e483ea41.next.bspapp.com/http/getDescription",method:"get"})}}}]);