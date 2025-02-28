/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{d as h,b as S,L as t,V as _,D as e,o as n,C as l,S as i,u as o}from"./vsv-element-plus-DQNbQgVr.js";import{_ as k}from"./index-DXRDwnmL.js";import"./vsv-icon-BSoeDgwL.js";import"./vsv-nprogress-BCb6Y0ID.js";const x={class:"step-form-container"},w=h({name:"StepForm",__name:"stepForm",setup(y){const s=ref(0),a=reactive({}),c=(f,p)=>{s.value=f,p&&Object.assign(a,p)};return(f,p)=>{const r=e("el-step"),m=e("el-steps"),d=e("step1"),u=e("step2"),v=e("step3"),C=e("el-col"),g=e("el-row");return n(),S("div",x,[t(g,{gutter:20},{default:_(()=>[t(C,{lg:{span:10,offset:7},md:{span:20,offset:2},sm:{span:20,offset:2},xl:{span:10,offset:7},xs:24},{default:_(()=>[t(m,{active:o(s),"align-center":"",class:"steps"},{default:_(()=>[t(r,{description:"填写转账信息",title:"第1步"}),t(r,{description:"确认转账信息",title:"第2步"}),t(r,{description:"完成",title:"第3步"})]),_:1},8,["active"]),o(s)===0?(n(),l(d,{key:0,onChangeStep:c})):i("",!0),o(s)===1?(n(),l(u,{key:1,"info-data":o(a),onChangeStep:c},null,8,["info-data"])):i("",!0),o(s)===2?(n(),l(v,{key:2,"info-data":o(a),onChangeStep:c},null,8,["info-data"])):i("",!0)]),_:1})]),_:1})])}}}),N=k(w,[["__scopeId","data-v-3f63d2f6"]]);export{N as default};
