/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{d as C,b as k,K as t,U as _,B as e,A as l,R as i,u as o,o as n}from"./vsv-element-plus-D84I6Pnf.js";import{_ as x}from"./index-BL5slC2T.js";import"./vsv-icon-DZABqXig.js";import"./vsv-nprogress-0btfRK0G.js";const S={class:"step-form-container"},B=C({name:"StepForm",__name:"stepForm",setup(w){const s=ref(0),a=reactive({}),c=(f,p)=>{s.value=f,p&&Object.assign(a,p)};return(f,p)=>{const r=e("el-step"),m=e("el-steps"),d=e("step1"),u=e("step2"),v=e("step3"),g=e("el-col"),h=e("el-row");return n(),k("div",S,[t(h,{gutter:20},{default:_(()=>[t(g,{lg:{span:10,offset:7},md:{span:20,offset:2},sm:{span:20,offset:2},xl:{span:10,offset:7},xs:24},{default:_(()=>[t(m,{active:o(s),"align-center":"",class:"steps"},{default:_(()=>[t(r,{description:"填写转账信息",title:"第1步"}),t(r,{description:"确认转账信息",title:"第2步"}),t(r,{description:"完成",title:"第3步"})]),_:1},8,["active"]),o(s)===0?(n(),l(d,{key:0,onChangeStep:c})):i("",!0),o(s)===1?(n(),l(u,{key:1,"info-data":o(a),onChangeStep:c},null,8,["info-data"])):i("",!0),o(s)===2?(n(),l(v,{key:2,"info-data":o(a),onChangeStep:c},null,8,["info-data"])):i("",!0)]),_:1})]),_:1})])}}}),V=x(B,[["__scopeId","data-v-3f63d2f6"]]);export{V as default};
