import{d as S,r as _,o as y,a as i,c,b as p,e,t as a,L as B,F as v,K as T,J as l,S as N,T as C,f as $,p as k,g as W}from"../js/index.60e0b4ed.js";import{x as I,y as w,z as P,_ as R,n as L,D as M,b as V}from"./index.vue_vue_type_style_index_0_lang-dbf94954.js";const t=o=>(k("data-v-10f268a4"),o=o(),W(),o),Z={class:"MuiStack"},A=t(()=>e("div",{class:"gradientShadow"},null,-1)),D=t(()=>e("div",{class:"headImageWrapper"},[e("div",{class:"headImage"})],-1)),z={class:"headingContainer"},F={class:"MuiStack"},x={class:"headImagePara"},E={class:"MuiContainer"},G={class:"headingWrapper"},H={class:"heading"},J={class:"MuiGrid-container"},K={class:"totalSubWrapper"},O={class:"totalSubText"},j=t(()=>e("li",{class:"totalSubs"}," 0 ",-1)),q={class:"activeSubWrapper"},Q={class:"totalSubText"},U=t(()=>e("li",{class:"totalSubs"}," 0 ",-1)),X=C('<div class="offersWrapper" data-v-10f268a4><button class="offer" data-v-10f268a4><div class="offerName" data-v-10f268a4>Z3</div><div class="offerPrice" data-v-10f268a4>BT2</div></button><button class="offer" data-v-10f268a4><div class="offerName" data-v-10f268a4>Z10</div><div class="offerPrice" data-v-10f268a4>BT2</div></button><button class="offer" data-v-10f268a4><div class="offerName" data-v-10f268a4>Z30</div><div class="offerPrice" data-v-10f268a4>BT2</div></button><button class="offer" data-v-10f268a4><div class="offerName" data-v-10f268a4>Z50</div><div class="offerPrice" data-v-10f268a4>BT2</div></button></div>',1),Y={class:"subscriptionOptionWrapper"},ee={class:"greenButtonWrapper"},se=t(()=>e("hr",null,null,-1)),ae={class:"content"},te={key:0,class:"nodata"},oe=S({__name:"pledge",setup(o){let f=_(!1),n=_([]);const u=async()=>{try{let{list:s}=await I({type:"BT2",page:0,size:1e3});s&&(n.value=s||[])}catch(s){console.error(s)}},h=async()=>{var s;try{const d=(s=w().info.user)==null?void 0:s.code;await P({code:d})}catch(d){console.error(d)}};return y(()=>{u(),f.value=!1}),(s,d)=>{const g=R,m=L;return i(),c(v,null,[p(g),e("div",null,[e("div",Z,[A,D,e("div",z,[e("div",F,[e("p",x,a(s.$t("ecologicalConsensusTips")),1),p(m,{class:"btn"},{default:B(()=>[$(a(s.$t("participateNow")),1)]),_:1})])])]),e("div",E,[e("div",G,[e("div",H,a(s.$t("pledgeChain")),1),e("div",J,[e("div",K,[e("li",O,a(s.$t("pledgeCertificate"))+":",1),j]),e("div",q,[e("li",Q,a(s.$t("pledgePeriod"))+":",1),U])])]),X]),e("div",Y,[e("span",ee,[e("div",null,a(s.$t("pledgeRecord")),1)]),e("span",{class:"greenButtonWrapper",onClick:h},[e("div",null,a(s.$t("decompressRedeem")),1)])]),se,e("div",ae,[(i(!0),c(v,null,T(l(n),(r,b)=>(i(),c("div",{class:"item",key:b},[e("div",null,a(r.coinType),1),e("div",null,a(l(M)(r.address)),1)]))),128)),l(n).length==0?(i(),c("div",te,a(s.$t("noData")),1)):N("",!0)])])],64)}}});const ce=V(oe,[["__scopeId","data-v-10f268a4"]]);export{ce as default};
