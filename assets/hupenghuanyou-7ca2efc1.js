import{d as $,r as w,o as j,a6 as h,b6 as S,D,c as r,e as l,h as t,g as o,a3 as V,t as s,i as d,j as b,p as q,k as G,f as U,q as L,w as R,b4 as k,v as A,x as E}from"../js/index.dc884249.js";import{P as H}from"./index-84584877.js";import{_ as P}from"./gold-5bb951ed.js";import{b as F,c as J}from"./activity-1845c990.js";import{s as z,u as O,a as Q}from"./mixins-64833fb4.js";import{B as Z}from"./index-c65add84.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import"./request-6724ac56.js";import"./filter-09506a2e.js";import"./isSymbol-88262e3a.js";import"./function-call-1366be59.js";import"./use-expose-9032f2c9.js";import"./index-49d41786.js";import"./index-c95161c5.js";import"./index-972af07d.js";import"./on-popup-reopen-e2cd79b3.js";import"./index-e1afc077.js";import"./use-placeholder-815df439.js";import"./use-route-4e332491.js";import"./min-6453c3f4.js";import"./_baseExtremum-ce4725ad.js";const W=u=>(A("data-v-7fbf6177"),u=u(),E(),u),X={class:"body"},Y={class:"a-title"},ee=["src"],te={class:"form"},se={class:"time flex flex-col items-center"},oe={class:"downtime flex justify-center items-center mt-4"},ae={class:"box"},ie={class:"box"},ne={class:"box"},ce={class:"box"},re={class:"list"},de={class:"name flex items-center"},le=W(()=>t("img",{src:P,alt:"",class:"w-[14px] h-[14px] ml-1"},null,-1)),_e={class:"des"},me={key:1,class:"btn status2"},ue={key:2,class:"btn status1"},pe={class:"process"},he={class:"process-title"},fe={class:"cer flex justify-between items-center px-3 py-4 text-sm"},ve={class:"p-3"},ge={class:"rule"},ye={class:"rule-title"},we=["innerHTML"],be=$({__name:"hupenghuanyou",setup(u){const{ruleText:x}=z(),c=w({data:{activityEndTime:0,inviteRecordVos:[],percentage:0,validConfigVOS:{minPay:0,minRecharge:0,minTurnover:0},totalNum:0,alreadyNUm:0}}),a=w({d:0,h:0,i:0,s:0});j(()=>{N()});const N=async()=>{try{const e=await F({activityConfigId:h("activityConfigId")||0});e instanceof Error||(c.data=e,g())}catch(e){}};let v;const _=e=>e>9?e:"0"+e,g=()=>{let e=c.data.activityEndTime-Date.parse(Date());e>0&&(e=e/1e3,a.s=_(e%60),a.i=_(Math.floor(e/60)%60),a.h=_(Math.floor(e/3600)),Number(a.h)>99&&(a.d=_(Math.floor(Number(a.h)/24)),a.h=_(Number(a.h)%24)),v=setTimeout(()=>{g()},1e3))};S(()=>{clearTimeout(v)});const y=D(-1),[C,T]=O(async(e,i)=>{y.value=i;try{await J({activityConfigId:h("activityConfigId")||0,validUserNum:e.validUserNum}),c.data.inviteRecordVos[i].recordStatus=1}catch(n){Q({message:n.msg,confirmButtonText:I(n.code),cancelButtonText:k.global.t("quxiao"),showConfirmButton:B(n.code)}).then(()=>{let p=h("device");p==="android"?window.jsandroid.codeJump(n.code):p==="ios"?window.webkit.messageHandlers.codeJump.postMessage(n.code):window.parent.postMessage({type:"codeJump",data:n.code},"*")}).catch(()=>{})}}),B=e=>{let i=!1;switch(Number(e)){case 2057:case 2058:case 2059:i=!0;break}return i},I=e=>{let i="";switch(Number(e)){case 2057:case 2058:case 2059:i=k.global.t("qu_bang_ding");break}return i},M=()=>{let e=h("device");e==="android"?window.jsandroid.share(""):e==="ios"?window.webkit.messageHandlers.share.postMessage(""):window.parent.postMessage({type:"share"},"*")};return(e,i)=>{const n=Z,p=H;return r(),l("div",X,[t("div",Y,[t("img",{src:o(V)("title.png","activity"),alt:""},null,8,ee)]),t("div",{class:"a-share flex justify-center items-center",onClick:M},s(e.$t("wo_yao_fx")),1),t("div",te,[t("div",se,[d(s(e.$t("jie_su_time"))+" ",1),t("div",oe,[Number(o(a).d)>0?(r(),l(b,{key:0},[t("div",ae,s(o(a).d),1),d(" - ")],64)):q("",!0),t("div",ie,s(o(a).h),1),d(" : "),t("div",ne,s(o(a).i),1),d(" : "),t("div",ce,s(o(a).s),1)])]),t("div",re,[(r(!0),l(b,null,G(o(c).data.inviteRecordVos,(m,f)=>(r(),l("div",{class:"box",key:f},[t("div",de,[d(s(e.$t("jiang_li_yh",{value:m.sendGoldCoin}))+" ",1),le]),t("div",_e,s(e.$t("yao_qing_yong_hu",{value:m.validUserNum})),1),m.recordStatus===2?(r(),L(n,{key:0,class:"btn",onClick:ke=>o(T)(m,f),loading:o(C)&&o(y)===f},{default:R(()=>[d(s(e.$t("ling_qu")),1)]),_:2},1032,["onClick","loading"])):[1,3].includes(Number(m.recordStatus))?(r(),l("div",me,s(e.$t("yi_ling_qu")),1)):(r(),l("div",ue,s(e.$t("wei_da_cheng")),1))]))),128))]),t("div",pe,[t("div",he,s(e.$t("wo_de_jin_du")),1),t("div",fe,[U(p,{percentage:o(c).data.percentage*100,class:"w-full mr-3","stroke-width":"10","track-color":"#fff",color:"#FAD698"},null,8,["percentage"]),d(" "+s(o(c).data.alreadyNUm)+"/"+s(o(c).data.totalNum),1)])])]),t("div",ve,[t("div",ge,[t("div",ye,s(e.$t("huo_dong_gz")),1),t("div",{class:"rule-content",innerHTML:o(x)},null,8,we)])])])}}});const Fe=K(be,[["__scopeId","data-v-7fbf6177"]]);export{Fe as default};
