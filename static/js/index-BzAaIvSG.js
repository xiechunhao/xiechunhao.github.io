/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:39:13 
 */
import{d as E,N as t,a2 as P,o as c,b as d,T as e,$ as r,u as n,a5 as U,ag as Y,a4 as y,M as $,_ as j,Y as A,P as G,aa as H,e as o,a3 as u}from"./vsv-element-plus-CxGOTlXz.js";import{g as J}from"./table-DhyfOoHm.js";import{_ as K}from"./index-BKznZfTt.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const O={class:"list-container auto-height-container"},Q={class:"vab-auto-box"},R={class:"list-item-meta"},W={class:"list-item-meta-avatar"},X={class:"list-item-meta-content hidden-xs-only"},Z={class:"list-item-meta-title"},ee={class:"list-item-meta-description hidden-xs-only"},te={class:"list-item-meta-content2 hidden-xs-only"},oe={class:"list-item-meta-content2"},ae={class:"list-item-meta-content2"},ne=E({name:"List",__name:"index",setup(se){const m=ref([]),g=ref(0),s=reactive({pageNo:1,pageSize:20,title:""}),p=ref(!0),f=ref(!0),_=async()=>{p.value=!0;const{data:l}=await J(s);m.value=l.list,g.value=l.total,p.value=!1,f.value=l.total<=0},b=l=>{s.pageNo=1,s.pageSize=l,_()},x=l=>{s.pageNo=l,_()},C=l=>({published:"success",draft:"primary",deleted:"danger"})[l],N=()=>{s.pageNo=1,_()};return onBeforeMount(()=>{_()}),(l,a)=>{const S=t("el-input"),v=t("el-form-item"),z=t("el-button"),V=t("el-form"),k=t("vab-query-form-right-panel"),q=t("vab-query-form"),M=t("el-empty"),h=t("el-image"),w=t("el-popover"),B=t("el-progress"),D=t("el-tag"),L=t("el-scrollbar"),F=t("vab-pagination"),I=P("loading");return c(),d("div",O,[e(q,null,{default:r(()=>[e(k,{span:24},{default:r(()=>[e(V,{inline:"",model:n(s),onSubmit:a[1]||(a[1]=U(()=>{},["prevent"]))},{default:r(()=>[e(v,null,{default:r(()=>[e(S,{modelValue:n(s).title,"onUpdate:modelValue":a[0]||(a[0]=i=>n(s).title=i),modelModifiers:{trim:!0},clearable:"",placeholder:"请输入标题"},null,8,["modelValue"])]),_:1}),e(v,null,{default:r(()=>[e(z,{icon:n(Y),loading:n(p),type:"primary",onClick:N},{default:r(()=>a[2]||(a[2]=[y("查询")])),_:1},8,["icon","loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),n(f)?(c(),$(M,{key:0,class:"vab-data-empty el-table",description:"暂无数据"})):j("",!0),e(L,null,{default:r(()=>[A((c(),d("ul",Q,[(c(!0),d(G,null,H(n(m),(i,T)=>(c(),d("li",{key:T,class:"list-item"},[o("div",R,[o("div",W,[e(w,{placement:"top-start"},{reference:r(()=>[e(h,{src:i.image},null,8,["src"])]),default:r(()=>[e(h,{src:i.image},null,8,["src"])]),_:2},1024)]),o("div",X,[o("div",Z,u(i.title),1),o("div",ee,u(i.description),1)]),o("div",te,[e(B,{percentage:parseInt(i.percentage)},null,8,["percentage"])]),o("div",oe,[a[3]||(a[3]=o("p",null,"开始时间",-1)),o("p",null,u(i.datetime),1)]),o("div",ae,[a[4]||(a[4]=o("p",null,"状态",-1)),o("p",null,[e(D,{type:C(i.status)},{default:r(()=>[y(u(i.status),1)]),_:2},1032,["type"])])])])]))),128))])),[[I,n(p)]])]),_:1}),e(F,{"current-page":n(s).pageNo,"page-size":n(s).pageSize,total:n(g),onCurrentChange:x,onSizeChange:b},null,8,["current-page","page-size","total"])])}}}),_e=K(ne,[["__scopeId","data-v-63305a09"]]);export{_e as default};
