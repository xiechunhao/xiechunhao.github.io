/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:33:27 
 */
import{_ as T}from"./index-DGkTrGHB.js";import{_ as P}from"./index-Y7yXzhRv.js";import{_ as R}from"./VabQueryFormTopPanel-CB6uQM3K.js";import{d as U,r as E,h as $,a6 as z,R as A,b as V,o as l,Z as e,T as a,ao as G,aB as Y,u as n,ap as Z,aL as j,bo as H,a8 as J,aR as K,a7 as i,a2 as O,ai as Q,S as r,b6 as W,e as p,be as X,Y as h,cV as ee,aG as ae,b7 as te}from"./vsv-element-plus-B-S50adB.js";import{k as oe,f as u,_ as ne}from"./index-Ba9EqH5M.js";import{i as se}from"./task-Cv62xVEn.js";import"./vsv-icon-BcEnJ7dJ.js";import"./vsv-nprogress-Bmiy9T8n.js";const le=f=>oe({url:"/taskManagement/getList",method:"get",params:f}),re={class:"task-management-container no-background-container"},ce={class:"task-item-bottom"},_e=U({name:"TaskManagement",__name:"index",setup(f){const g=E([]),k=E(!0),s=$({taskName:"",date:"",pageNo:1,pageSize:11}),y=async()=>{k.value=!0;const{data:c}=await le(s);g.value=c.list,k.value=!1},w=()=>{s.pageNo=1,y()},C=c=>{c?u("模拟停用成功","success","hey"):u("模拟开启成功","success","hey")},N=()=>{u("模拟添加成功","success","hey")};return z(()=>{y()}),(c,t)=>{const B=j,d=Z,M=H,m=J,I=G,L=R,q=P,_=A("vab-icon"),b=ae,D=X,F=ee,v=T,x=W,S=te;return l(),V("div",re,[e(q,{class:"page-header"},{default:a(()=>[e(L,null,{default:a(()=>[e(I,{inline:"","label-width":"60px",model:n(s),onSubmit:t[2]||(t[2]=Y(()=>{},["prevent"]))},{default:a(()=>[e(d,{label:"任务名"},{default:a(()=>[e(B,{modelValue:n(s).taskName,"onUpdate:modelValue":t[0]||(t[0]=o=>n(s).taskName=o),modelModifiers:{trim:!0},clearable:"",placeholder:"请输入任务名"},null,8,["modelValue"])]),_:1}),e(d,{label:"周期"},{default:a(()=>[e(M,{modelValue:n(s).date,"onUpdate:modelValue":t[1]||(t[1]=o=>n(s).date=o),"end-placeholder":"结束日期","start-placeholder":"开始日期",type:"daterange"},null,8,["modelValue"])]),_:1}),e(d,null,{default:a(()=>[e(m,{icon:n(K),type:"primary",onClick:w},{default:a(()=>t[3]||(t[3]=[i("查询")])),_:1},8,["icon"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),e(S,{gutter:20},{default:a(()=>[(l(!0),V(O,null,Q(n(g),o=>(l(),r(x,{key:o.id,lg:6,md:8,sm:12,xl:6,xs:24},{default:a(()=>[e(v,{class:"task-item"},{header:a(()=>[e(_,{icon:"task-line"}),i(" 任务编号 - "+h(o.id)+" ",1),o.status==1?(l(),r(b,{key:0,class:"card-header-tag",type:"success"},{default:a(()=>t[4]||(t[4]=[i("已开启")])),_:1})):(l(),r(b,{key:1,class:"card-header-tag",type:"danger"},{default:a(()=>t[5]||(t[5]=[i("已停用")])),_:1}))]),default:a(()=>[e(D,{class:"task-item-image",src:n(se)},null,8,["src"]),p("div",ce,[p("span",null,"Ip: "+h(o.ip),1),e(F,{title:"您确定要执行当前操作吗？",width:"240px",onConfirm:ie=>C(o.status)},{reference:a(()=>[o.status==1?(l(),r(m,{key:0,circle:"",type:"warning"},{default:a(()=>[e(_,{icon:"pause-line"})]),_:1})):(l(),r(m,{key:1,circle:"",type:"primary"},{default:a(()=>[e(_,{icon:"play-line"})]),_:1}))]),_:2},1032,["onConfirm"])])]),_:2},1024)]),_:2},1024))),128)),e(x,{lg:6,md:8,sm:12,xl:6,xs:24},{default:a(()=>[e(v,{class:"task-add",onClick:N},{default:a(()=>[e(_,{icon:"add-circle-line"}),t[6]||(t[6]=p("p",null,"添加任务",-1))]),_:1})]),_:1})]),_:1})])}}}),be=ne(_e,[["__scopeId","data-v-90ed104c"]]);export{be as default};
