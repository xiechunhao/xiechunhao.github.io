/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 21:23:19 
 */
import{d as i,B as t,o as b,A as v,S as u,K as l,u as m,I as p}from"./vsv-element-plus-CleF0dO9.js";const g=i({__name:"SegmentedDisabled",setup(c){const a=ref("Mon"),o=ref("Mon"),s=[{label:"周一",value:"Mon",disabled:!0},{label:"周二",value:"Tue"},{label:"周三",value:"Wed",disabled:!0},{label:"周四",value:"Thu"},{label:"周五",value:"Fri",disabled:!0},{label:"周六",value:"Sat"},{label:"周日",value:"Sun"}];return(f,e)=>{const d=t("el-segmented"),r=t("el-col"),_=t("el-row");return b(),v(_,{gutter:20},{default:u(()=>[l(r,{span:24},{default:u(()=>[l(d,{modelValue:m(a),"onUpdate:modelValue":e[0]||(e[0]=n=>p(a)?a.value=n:null),disabled:"",options:s,style:{"margin-bottom":"var(--el-margin)"}},null,8,["modelValue"])]),_:1}),l(r,{span:24},{default:u(()=>[l(d,{modelValue:m(o),"onUpdate:modelValue":e[1]||(e[1]=n=>p(o)?o.value=n:null),options:s},null,8,["modelValue"])]),_:1})]),_:1})}}});export{g as default};
