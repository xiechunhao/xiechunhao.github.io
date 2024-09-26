/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{d as C,b as k,M as t,V as _,F as e,o as n,u as o,D as l,U as i}from"./vsv-element-plus-CbS2IxKo.js";import{_ as x}from"./index-BnT9uhJE.js";import"./vsv-icon-93gfr_RM.js";import"./vsv-nprogress-DzPgnd7z.js";const S={class:"step-form-container"},F=C({name:"StepForm",__name:"stepForm",setup(w){const s=ref(0),a=reactive({}),c=(f,p)=>{s.value=f,p&&Object.assign(a,p)};return(f,p)=>{const r=e("el-step"),m=e("el-steps"),d=e("step1"),u=e("step2"),v=e("step3"),g=e("el-col"),h=e("el-row");return n(),k("div",S,[t(h,{gutter:20},{default:_(()=>[t(g,{lg:{span:10,offset:7},md:{span:20,offset:2},sm:{span:20,offset:2},xl:{span:10,offset:7},xs:24},{default:_(()=>[t(m,{active:o(s),"align-center":"",class:"steps"},{default:_(()=>[t(r,{description:"填写转账信息",title:"第1步"}),t(r,{description:"确认转账信息",title:"第2步"}),t(r,{description:"完成",title:"第3步"})]),_:1},8,["active"]),o(s)===0?(n(),l(d,{key:0,onChangeStep:c})):i("",!0),o(s)===1?(n(),l(u,{key:1,"info-data":o(a),onChangeStep:c},null,8,["info-data"])):i("",!0),o(s)===2?(n(),l(v,{key:2,"info-data":o(a),onChangeStep:c},null,8,["info-data"])):i("",!0)]),_:1})]),_:1})])}}}),N=x(F,[["__scopeId","data-v-3f63d2f6"]]);export{N as default};
