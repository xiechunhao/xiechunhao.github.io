/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:17:33 
 */
import{g as I}from"./area-DB1jo8G2.js";import{d as L,N as n,o as O,b as P,T as l,$ as t,u as o,k as A,a4 as m}from"./vsv-element-plus-CxGOTlXz.js";import{_ as G}from"./index-vqJMV2wg.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const H={class:"comprehensive-form-container"},J=L({name:"ComprehensiveForm",__name:"comprehensiveForm",setup(K){const x=()=>{const s=[],e=["上海","北京","广州"],d=["shanghai","beijing","guangzhou"];return e.forEach((i,f)=>{s.push({label:i,key:f,pinyin:d[f]})}),s},c=ref(),p=ref("right"),r=reactive({name:"",region:"",date:"",date2:"",delivery:!1,type:[],resource:"",description:"",rate:0,area:[],transfer:[]}),b=ref([]),k=reactive({name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],description:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}),U=ref(x()),q=(s,e)=>e.pinyin.includes(s),w=async()=>{const{data:s}=await I();b.value=s.list},C=()=>{var s;(s=c.value)==null||s.validate(e=>{e?$baseMessage("表单提交成功","success","hey"):$baseMessage("表单提交失败","error","hey")})},F=()=>{var s;(s=c.value)==null||s.resetFields()};return onBeforeMount(()=>{w()}),(s,e)=>{const d=n("el-radio-button"),i=n("el-radio-group"),f=n("vab-query-form-left-panel"),$=n("vab-query-form"),g=n("el-input"),u=n("el-form-item"),v=n("el-option"),M=n("el-select"),B=n("el-date-picker"),N=n("el-switch"),_=n("el-checkbox"),R=n("el-checkbox-group"),V=n("el-radio"),j=n("el-rate"),D=n("el-cascader"),E=n("el-transfer"),y=n("el-button"),T=n("el-form"),h=n("el-col"),z=n("el-row");return O(),P("div",H,[l(z,{gutter:20},{default:t(()=>[l(h,{lg:{span:12,offset:6},md:{span:20,offset:2},sm:{span:20,offset:2},xl:{span:12,offset:6},xs:24},{default:t(()=>[l($,null,{default:t(()=>[l(f,null,{default:t(()=>[l(i,{modelValue:o(p),"onUpdate:modelValue":e[0]||(e[0]=a=>A(p)?p.value=a:null)},{default:t(()=>[l(d,{label:"left",value:"left"},{default:t(()=>e[13]||(e[13]=[m("左对齐")])),_:1}),l(d,{label:"right",value:"right"},{default:t(()=>e[14]||(e[14]=[m("右对齐")])),_:1}),l(d,{label:"top",value:"top"},{default:t(()=>e[15]||(e[15]=[m("顶部对齐")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(T,{ref_key:"formRef",ref:c,class:"demo-form","label-position":o(p),"label-width":"100px",model:o(r),rules:o(k)},{default:t(()=>[l(u,{label:"活动名称",prop:"name"},{default:t(()=>[l(g,{modelValue:o(r).name,"onUpdate:modelValue":e[1]||(e[1]=a=>o(r).name=a),clearable:""},null,8,["modelValue"])]),_:1}),l(u,{label:"活动区域",prop:"region"},{default:t(()=>[l(M,{modelValue:o(r).region,"onUpdate:modelValue":e[2]||(e[2]=a=>o(r).region=a),placeholder:"请选择活动区域"},{default:t(()=>[l(v,{label:"区域一",value:"shanghai"}),l(v,{label:"区域二",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),l(u,{label:"活动时间",prop:"date"},{default:t(()=>[l(B,{modelValue:o(r).date,"onUpdate:modelValue":e[3]||(e[3]=a=>o(r).date=a),placeholder:"选择日期时间",type:"datetime"},null,8,["modelValue"])]),_:1}),l(u,{label:"即时配送",prop:"delivery"},{default:t(()=>[l(N,{modelValue:o(r).delivery,"onUpdate:modelValue":e[4]||(e[4]=a=>o(r).delivery=a)},null,8,["modelValue"])]),_:1}),l(u,{label:"活动性质",prop:"type"},{default:t(()=>[l(R,{modelValue:o(r).type,"onUpdate:modelValue":e[5]||(e[5]=a=>o(r).type=a)},{default:t(()=>[l(_,{label:"美食/餐厅线上活动",name:"type",value:"美食/餐厅线上活动"}),l(_,{label:"地推活动",name:"type",value:"地推活动"}),l(_,{label:"线下主题活动",name:"type",value:"线下主题活动"}),l(_,{label:"单纯品牌曝光",name:"type",value:"单纯品牌曝光"})]),_:1},8,["modelValue"])]),_:1}),l(u,{label:"特殊资源",prop:"resource"},{default:t(()=>[l(i,{modelValue:o(r).resource,"onUpdate:modelValue":e[6]||(e[6]=a=>o(r).resource=a)},{default:t(()=>[l(V,{label:"线上品牌商赞助",value:"线上品牌商赞助"}),l(V,{label:"线下场地免费",value:"线下场地免费"})]),_:1},8,["modelValue"])]),_:1}),l(u,{label:"活动形式",prop:"description"},{default:t(()=>[l(g,{modelValue:o(r).description,"onUpdate:modelValue":e[7]||(e[7]=a=>o(r).description=a),clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1}),l(u,{label:"评星"},{default:t(()=>[l(j,{modelValue:o(r).rate,"onUpdate:modelValue":e[8]||(e[8]=a=>o(r).rate=a),"show-text":""},null,8,["modelValue"])]),_:1}),l(u,{label:"行政区划"},{default:t(()=>[l(D,{modelValue:o(r).area,"onUpdate:modelValue":e[9]||(e[9]=a=>o(r).area=a),clearable:"",filterable:"",options:o(b),props:{label:"name",value:"code"}},null,8,["modelValue","options"])]),_:1}),l(u,{label:"穿梭框"},{default:t(()=>[l(E,{modelValue:o(r).transfer,"onUpdate:modelValue":e[10]||(e[10]=a=>o(r).transfer=a),data:o(U),"filter-method":q,"filter-placeholder":"请输入城市拼音",filterable:""},null,8,["modelValue","data"])]),_:1}),l(u,null,{default:t(()=>[l(y,{type:"primary",onClick:e[11]||(e[11]=a=>C())},{default:t(()=>e[16]||(e[16]=[m("立即创建")])),_:1}),l(y,{type:"warning",onClick:e[12]||(e[12]=a=>F())},{default:t(()=>e[17]||(e[17]=[m("重置")])),_:1})]),_:1})]),_:1},8,["label-position","model","rules"])]),_:1})]),_:1})])}}}),Z=G(J,[["__scopeId","data-v-ef3b84d5"]]);export{Z as default};
