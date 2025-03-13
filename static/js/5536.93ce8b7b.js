/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-14 01:23:41
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5536],{42138:function(e,t,a){a.d(t,{v:function(){return l}});var s=a(24380);function l(){return(0,s.A)({url:"https://fc-mp-851edf02-46eb-43e6-828d-64c7e483ea41.next.bspapp.com/http/getDescription",method:"get"})}},85536:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var s=a(76004),l=(a(27322),a(49120),a(30853)),u=(a(39585),a(44134)),n=(a(92498),a(73120)),i=(a(52539),a(88504)),d=(a(31255),a(11071),a(5309),a(46137)),o=(a(30957),a(34641)),p=a(37489),c=a(27386),r=a(42138),b=a(71349);const v={class:"speech-synthesis-container"},h={key:0},f={key:1};var k=(0,o.pM)({__name:"SpeechSynthesis",setup(e){const t=(0,p.KR)(void 0),a=(0,p.KR)(""),k=(0,b.o3U)(a,{voice:t}),y=async()=>{const{data:{description:e}}=await(0,r.v)();a.value=e};let m;const _=(0,p.KR)([]);(0,o.sV)((()=>{k.isSupported.value&&(setTimeout((()=>{m=window.speechSynthesis,_.value=m.getVoices(),t.value=_.value[0]}),100),y())}));const w=()=>{"pause"===k.status.value?window.speechSynthesis.resume():k.speak()},S=()=>{window.speechSynthesis.pause()},F=()=>{window.speechSynthesis.cancel()};return(e,r)=>{const b=d.WK,y=u.xE,m=i.P9,g=i.AV,R=n.S2,C=u.US,V=l.uD,x=s.S2;return(0,o.uX)(),(0,o.CE)("div",v,[(0,p.R1)(k).isSupported?((0,o.uX)(),(0,o.CE)("div",f,[(0,o.bF)(x,{gutter:20},{default:(0,o.k6)((()=>[(0,o.bF)(V,{lg:6,md:14,sm:24,xl:10,xs:24},{default:(0,o.k6)((()=>[(0,o.bF)(C,{"label-position":"top"},{default:(0,o.k6)((()=>[(0,o.bF)(y,{label:"文本"},{default:(0,o.k6)((()=>[(0,o.bF)(b,{modelValue:(0,p.R1)(a),"onUpdate:modelValue":r[0]||(r[0]=e=>(0,p.i9)(a)?a.value=e:null),rows:"12",type:"textarea"},null,8,["modelValue"])])),_:1}),(0,o.bF)(y,{label:"语言"},{default:(0,o.k6)((()=>[(0,o.bF)(g,{modelValue:(0,p.R1)(t),"onUpdate:modelValue":r[1]||(r[1]=e=>(0,p.i9)(t)?t.value=e:null),style:{width:"400px"}},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)((0,p.R1)(_),(e=>((0,o.uX)(),(0,o.Wv)(m,{key:e.name,label:e.name,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,o.bF)(y,{label:"操作"},{default:(0,o.k6)((()=>[(0,o.bF)(R,{disabled:(0,p.R1)(k).isPlaying.value,type:"primary",onClick:w},{default:(0,o.k6)((()=>[(0,o.eW)((0,c.v_)("pause"===(0,p.R1)(k).status.value?"继续":"播放"),1)])),_:1},8,["disabled"]),(0,o.bF)(R,{disabled:!(0,p.R1)(k).isPlaying.value,type:"warning",onClick:S},{default:(0,o.k6)((()=>r[3]||(r[3]=[(0,o.eW)(" 暂停 ")]))),_:1},8,["disabled"]),(0,o.bF)(R,{disabled:!(0,p.R1)(k).isPlaying.value,type:"danger",onClick:F},{default:(0,o.k6)((()=>r[4]||(r[4]=[(0,o.eW)(" 结束 ")]))),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1})])),_:1})])):((0,o.uX)(),(0,o.CE)("div",h,r[2]||(r[2]=[(0,o.eW)(" Your browser does not support SpeechSynthesis API, "),(0,o.Lk)("a",{href:"https://caniuse.com/mdn-api_speechsynthesis",target:"_blank"}," more details ",-1)])))])}}});function y(e){e.__source="src/views/tools/SpeechSynthesis.vue"}"function"===typeof y&&y(k);const m=k;var _=m}}]);