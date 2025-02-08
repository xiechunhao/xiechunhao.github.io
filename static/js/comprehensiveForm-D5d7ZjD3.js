/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:33:27 
 */
import{_ as O}from"./index-Y7yXzhRv.js";import{_ as P}from"./VabQueryFormLeftPanel.vue_vue_type_script_setup_true_lang-DGp934Nh.js";import{g as S}from"./area-nKQew56K.js";import{f as E,_ as z}from"./index-Ba9EqH5M.js";import{d as Z,r as f,h as x,a6 as A,b as H,o as J,Z as l,T as a,b6 as K,aq as Q,u as o,i as W,ar as X,a7 as d,ao as Y,ap as ee,aL as le,as as oe,at as ae,bo as te,am as ne,bw as re,bk as se,bD as ue,br as de,bE as me,bF as pe,a8 as ie,b7 as _e}from"./vsv-element-plus-B-S50adB.js";import"./vsv-icon-BcEnJ7dJ.js";import"./vsv-nprogress-Bmiy9T8n.js";const fe={class:"comprehensive-form-container"},be=Z({name:"ComprehensiveForm",__name:"comprehensiveForm",setup(ce){const k=()=>{const r=[],e=["上海","北京","广州"],u=["shanghai","beijing","guangzhou"];return e.forEach((p,i)=>{r.push({label:p,key:i,pinyin:u[i]})}),r},b=f(),m=f("right"),n=x({name:"",region:"",date:"",date2:"",delivery:!1,type:[],resource:"",description:"",rate:0,area:[],transfer:[]}),c=f([]),U=x({name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],description:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}),w=f(k()),q=(r,e)=>e.pinyin.includes(r),C=async()=>{const{data:r}=await S();c.value=r.list},F=()=>{var r;(r=b.value)==null||r.validate(e=>{e?E("表单提交成功","success","hey"):E("表单提交失败","error","hey")})},R=()=>{var r;(r=b.value)==null||r.resetFields()};return A(()=>{C()}),(r,e)=>{const u=X,p=Q,i=P,B=O,g=le,s=ee,V=ae,D=oe,$=te,I=ne,_=se,M=re,v=ue,T=de,h=me,j=pe,y=ie,G=Y,L=K,N=_e;return J(),H("div",fe,[l(N,{gutter:20},{default:a(()=>[l(L,{lg:{span:12,offset:6},md:{span:20,offset:2},sm:{span:20,offset:2},xl:{span:12,offset:6},xs:24},{default:a(()=>[l(B,null,{default:a(()=>[l(i,null,{default:a(()=>[l(p,{modelValue:o(m),"onUpdate:modelValue":e[0]||(e[0]=t=>W(m)?m.value=t:null)},{default:a(()=>[l(u,{label:"left",value:"left"},{default:a(()=>e[13]||(e[13]=[d("左对齐")])),_:1}),l(u,{label:"right",value:"right"},{default:a(()=>e[14]||(e[14]=[d("右对齐")])),_:1}),l(u,{label:"top",value:"top"},{default:a(()=>e[15]||(e[15]=[d("顶部对齐")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(G,{ref_key:"formRef",ref:b,class:"demo-form","label-position":o(m),"label-width":"100px",model:o(n),rules:o(U)},{default:a(()=>[l(s,{label:"活动名称",prop:"name"},{default:a(()=>[l(g,{modelValue:o(n).name,"onUpdate:modelValue":e[1]||(e[1]=t=>o(n).name=t),clearable:""},null,8,["modelValue"])]),_:1}),l(s,{label:"活动区域",prop:"region"},{default:a(()=>[l(D,{modelValue:o(n).region,"onUpdate:modelValue":e[2]||(e[2]=t=>o(n).region=t),placeholder:"请选择活动区域"},{default:a(()=>[l(V,{label:"区域一",value:"shanghai"}),l(V,{label:"区域二",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),l(s,{label:"活动时间",prop:"date"},{default:a(()=>[l($,{modelValue:o(n).date,"onUpdate:modelValue":e[3]||(e[3]=t=>o(n).date=t),placeholder:"选择日期时间",type:"datetime"},null,8,["modelValue"])]),_:1}),l(s,{label:"即时配送",prop:"delivery"},{default:a(()=>[l(I,{modelValue:o(n).delivery,"onUpdate:modelValue":e[4]||(e[4]=t=>o(n).delivery=t)},null,8,["modelValue"])]),_:1}),l(s,{label:"活动性质",prop:"type"},{default:a(()=>[l(M,{modelValue:o(n).type,"onUpdate:modelValue":e[5]||(e[5]=t=>o(n).type=t)},{default:a(()=>[l(_,{label:"美食/餐厅线上活动",name:"type",value:"美食/餐厅线上活动"}),l(_,{label:"地推活动",name:"type",value:"地推活动"}),l(_,{label:"线下主题活动",name:"type",value:"线下主题活动"}),l(_,{label:"单纯品牌曝光",name:"type",value:"单纯品牌曝光"})]),_:1},8,["modelValue"])]),_:1}),l(s,{label:"特殊资源",prop:"resource"},{default:a(()=>[l(p,{modelValue:o(n).resource,"onUpdate:modelValue":e[6]||(e[6]=t=>o(n).resource=t)},{default:a(()=>[l(v,{label:"线上品牌商赞助",value:"线上品牌商赞助"}),l(v,{label:"线下场地免费",value:"线下场地免费"})]),_:1},8,["modelValue"])]),_:1}),l(s,{label:"活动形式",prop:"description"},{default:a(()=>[l(g,{modelValue:o(n).description,"onUpdate:modelValue":e[7]||(e[7]=t=>o(n).description=t),clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1}),l(s,{label:"评星"},{default:a(()=>[l(T,{modelValue:o(n).rate,"onUpdate:modelValue":e[8]||(e[8]=t=>o(n).rate=t),"show-text":""},null,8,["modelValue"])]),_:1}),l(s,{label:"行政区划"},{default:a(()=>[l(h,{modelValue:o(n).area,"onUpdate:modelValue":e[9]||(e[9]=t=>o(n).area=t),clearable:"",filterable:"",options:o(c),props:{label:"name",value:"code"}},null,8,["modelValue","options"])]),_:1}),l(s,{label:"穿梭框"},{default:a(()=>[l(j,{modelValue:o(n).transfer,"onUpdate:modelValue":e[10]||(e[10]=t=>o(n).transfer=t),data:o(w),"filter-method":q,"filter-placeholder":"请输入城市拼音",filterable:""},null,8,["modelValue","data"])]),_:1}),l(s,null,{default:a(()=>[l(y,{type:"primary",onClick:e[11]||(e[11]=t=>F())},{default:a(()=>e[16]||(e[16]=[d("立即创建")])),_:1}),l(y,{type:"warning",onClick:e[12]||(e[12]=t=>R())},{default:a(()=>e[17]||(e[17]=[d("重置")])),_:1})]),_:1})]),_:1},8,["label-position","model","rules"])]),_:1})]),_:1})])}}}),Ue=z(be,[["__scopeId","data-v-ef3b84d5"]]);export{Ue as default};
