/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:39:13 
 */
import{d as O,N as n,a2 as Q,o as u,b as q,T as a,$ as l,u as o,k as W,am as X,bb as Z,e as ee,a3 as ae,a5 as le,ag as te,a4 as y,au as oe,ak as ne,Y as se,M as x,P as re,aa as ie,_ as de}from"./vsv-element-plus-CxGOTlXz.js";import{g as ce,d as S}from"./table-DhyfOoHm.js";import{_ as ue}from"./index-BKznZfTt.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const pe={class:"explorer-container no-background-container auto-height-container"},_e={style:{"margin-left":"3px"}},me=O({name:"Explorer",__name:"Explorer",setup(fe){const g=ref([]),p=ref(!0),C=ref(0),c=ref([]),r=reactive({pageNo:1,pageSize:20}),_=ref(""),w=ref(),k=ref([]);watch(_,t=>{var e;(e=w.value)==null||e.filter(t)});const z=(t,e)=>t?e.label.includes(t):!0,D=[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}],M=()=>{i()},$={children:"children",label:"label"},i=async()=>{c.value=[],p.value=!0;const{data:t}=await ce(r);g.value=t.list,C.value=t.total,k.value=t.list.map(e=>e.image),p.value=!1},B=t=>{r.pageNo=1,r.pageSize=t,i()},E=t=>{r.pageNo=t,i()},L=()=>{r.pageNo=1,i()},R=(t,e)=>{if(t)c.value.push(e.id);else{const d=c.value.findIndex(m=>m===m.id);c.value.splice(d,1)}},T=t=>{if(t.id)$baseConfirm("您确定要删除当前项吗",null,async()=>{const{msg:e}=await S({ids:t.id});$baseMessage(e,"success","hey"),await i()});else if(c.value.length>0){const e=c.value.map(d=>d.id).join(",");$baseConfirm("您确定要删除选中项吗",null,async()=>{const{msg:d}=await S({ids:e});$baseMessage(d,"success","hey"),await i()})}else $baseMessage("您未选中任何行","warning","hey")};return onBeforeMount(()=>{i()}),(t,e)=>{const d=n("el-input"),m=n("el-icon"),b=n("vab-card"),f=n("el-col"),V=n("el-form-item"),v=n("el-button"),U=n("el-form"),F=n("vab-query-form-top-panel"),j=n("el-upload"),I=n("vab-query-form-left-panel"),P=n("vab-query-form"),Y=n("el-checkbox"),A=n("el-image"),G=n("el-empty"),N=n("el-row"),H=n("vab-pagination"),J=Q("loading");return u(),q("div",pe,[a(N,{gutter:20},{default:l(()=>[a(f,{lg:4,md:24,sm:24,xl:4,xs:24},{default:l(()=>[a(b,{class:"auto-height-card"},{default:l(()=>[a(d,{modelValue:o(_),"onUpdate:modelValue":e[0]||(e[0]=s=>W(_)?_.value=s:null),placeholder:"请输入查询条件",style:{"margin-bottom":"10px"}},null,8,["modelValue"]),a(o(X),{ref_key:"treeRef",ref:w,data:D,"default-expand-all":"","filter-node-method":z,props:$,onNodeClick:M},{default:l(({node:s})=>[a(m,null,{default:l(()=>[a(o(Z))]),_:1}),ee("span",_e,ae(s.label),1)]),_:1},512)]),_:1})]),_:1}),a(f,{lg:20,md:24,sm:24,xl:20,xs:24},{default:l(()=>[a(b,{class:"auto-height-card"},{default:l(()=>[a(P,null,{default:l(()=>[a(F,null,{default:l(()=>[a(U,{inline:"",model:o(r),onSubmit:e[2]||(e[2]=le(()=>{},["prevent"]))},{default:l(()=>[a(V,{label:"标题"},{default:l(()=>[a(d,{modelValue:o(r).title,"onUpdate:modelValue":e[1]||(e[1]=s=>o(r).title=s),clearable:"",placeholder:"请输入标题"},null,8,["modelValue"])]),_:1}),a(V,null,{default:l(()=>[a(v,{icon:o(te),loading:o(p),"native-type":"submit",type:"primary",onClick:L},{default:l(()=>e[3]||(e[3]=[y("查询")])),_:1},8,["icon","loading"])]),_:1})]),_:1},8,["model"])]),_:1}),a(I,{span:24},{default:l(()=>[a(j,{accept:"image/png,image/jpeg",action:"/uploadFile",multiple:"","on-error":i,"on-success":i,"show-file-list":!1,style:{margin:"0 10px 10px 0"}},{default:l(()=>[a(v,{icon:o(oe),type:"primary"},{default:l(()=>e[4]||(e[4]=[y("本地上传")])),_:1},8,["icon"])]),_:1}),a(v,{icon:o(ne),type:"danger",onClick:T},{default:l(()=>e[5]||(e[5]=[y("删除")])),_:1},8,["icon"])]),_:1})]),_:1}),se((u(),x(N,{class:"explorer-image-box",gutter:20},{default:l(()=>[(u(!0),q(re,null,ie(o(g),(s,K)=>(u(),x(f,{key:K,lg:6,md:8,sm:12,xl:6,xs:12},{default:l(()=>[a(b,{"body-style":{padding:"0",position:"relative"}},{default:l(()=>[a(Y,{modelValue:s.id,"onUpdate:modelValue":h=>s.id=h,label:s.title,onChange:h=>R(h,s)},null,8,["modelValue","onUpdate:modelValue","label","onChange"]),a(A,{"preview-src-list":o(k),"preview-teleported":"",src:s.image},null,8,["preview-src-list","src"])]),_:2},1024)]),_:2},1024))),128)),o(g).length===0?(u(),x(f,{key:0,span:24},{default:l(()=>[a(G,{class:"vab-data-empty",description:"暂无数据"})]),_:1})):de("",!0)]),_:1})),[[J,o(p)]]),a(H,{"current-page":o(r).pageNo,"page-size":o(r).pageSize,total:o(C),onCurrentChange:E,onSizeChange:B},null,8,["current-page","page-size","total"])]),_:1})]),_:1})]),_:1})])}}}),xe=ue(me,[["__scopeId","data-v-04c850e0"]]);export{xe as default};
