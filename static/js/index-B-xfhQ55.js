/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{d as F,z as f,U as o,A as t,o as i,J as e,a as L,X as M,u as l,a9 as U,a2 as A,G as E}from"./vsv-element-plus-CWjYVfvE.js";import{g as G}from"./icon-BzOE8z1T.js";import"./index-D_keMk_X.js";import"./vsv-icon-CzoHxvAi.js";import"./vsv-nprogress-D-M_H-zP.js";const P=F({name:"VabIconSelector",__name:"index",emits:["handle-icon"],setup(J,{emit:d}){const g=d,v=ref("24-hours-fill"),b=ref("total, prev, next"),_=ref(0),p=ref([]),a=reactive({pageNo:1,pageSize:20,title:""}),y=n=>{a.pageNo=1,a.pageSize=n,r()},C=n=>{a.pageNo=n,r()},h=()=>{a.pageNo=1,r()},r=async()=>{const{data:n}=await G(a);p.value=n.list,_.value=n.total},z=n=>{v.value=n,g("handle-icon",n)};return onBeforeMount(()=>{r()}),(n,c)=>{const k=t("el-input"),m=t("el-form-item"),q=t("el-button"),S=t("el-form"),N=t("vab-query-form-top-panel"),w=t("vab-query-form"),s=t("el-col"),x=t("vab-icon"),V=t("vab-card"),B=t("vab-pagination"),I=t("el-row");return i(),f(I,{gutter:20},{default:o(()=>[e(s,{span:24},{default:o(()=>[e(w,null,{default:o(()=>[e(N,null,{default:o(()=>[e(S,{inline:"",onSubmit:c[1]||(c[1]=M(()=>{},["prevent"]))},{default:o(()=>[e(m,null,{default:o(()=>[e(k,{modelValue:l(a).title,"onUpdate:modelValue":c[0]||(c[0]=u=>l(a).title=u),clearable:""},null,8,["modelValue"])]),_:1}),e(m,null,{default:o(()=>[e(q,{icon:l(U),"native-type":"submit",type:"primary",onClick:h},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),(i(!0),L(E,null,A(l(p),(u,D)=>(i(),f(s,{key:D,span:6},{default:o(()=>[e(V,{onClick:X=>z(u)},{default:o(()=>[e(x,{icon:u},null,8,["icon"])]),_:2},1032,["onClick"])]),_:2},1024))),128)),e(s,{span:24},{default:o(()=>[e(B,{"current-page":l(a).pageNo,layout:l(b),"page-size":l(a).pageSize,total:l(_),onCurrentChange:C,onSizeChange:y},null,8,["current-page","layout","page-size","total"])]),_:1})]),_:1})}}});export{P as default};
