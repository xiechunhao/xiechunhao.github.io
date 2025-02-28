/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{d as A,b as y,L as n,Q as L,V as a,D as i,X as M,u as d,C as s,o as r,Y as F,a0 as I,_ as c,Z as b,S as h}from"./vsv-element-plus-DQNbQgVr.js";import{g as Q}from"./table-4tHDlJ8_.js";import"./index-DXRDwnmL.js";import"./vsv-icon-BSoeDgwL.js";import"./vsv-nprogress-BCb6Y0ID.js";const X={class:"inline-edit-table-container auto-height-container"},Y=["onClick"],Z=["onClick"],P=A({name:"InlineEditTable",__name:"inlineEditTable",setup(j){const v=ref([]),m=ref(!0),C=ref(0),o=reactive({pageNo:1,pageSize:20,title:""}),_=async()=>{m.value=!0;const{data:t}=await Q(o);v.value=t.list.map(l=>(l.edit=!1,l.originalTitle=l.title,l.originalAuthor=l.author,l)),C.value=t.total,m.value=!1},V=t=>{o.pageNo=1,o.pageSize=t,_()},N=t=>{o.pageNo=t,_()},S=()=>{o.pageNo=1,_()},x=t=>{t.title=t.originalTitle,t.author=t.originalAuthor,t.edit=!1},z=t=>{t.edit=!1,t.originalTitle=t.title,t.originalAuthor=t.author};return onBeforeMount(()=>{_()}),(t,l)=>{const g=i("el-input"),k=i("el-form-item"),f=i("el-button"),q=i("el-form"),D=i("vab-query-form-right-panel"),T=i("vab-query-form"),p=i("el-table-column"),E=i("el-empty"),U=i("el-table"),$=i("vab-pagination"),B=M("loading");return r(),y("div",X,[n(T,null,{default:a(()=>[n(D,{span:24},{default:a(()=>[n(q,{inline:"",model:d(o),onSubmit:l[1]||(l[1]=F(()=>{},["prevent"]))},{default:a(()=>[n(k,null,{default:a(()=>[n(g,{modelValue:d(o).title,"onUpdate:modelValue":l[0]||(l[0]=e=>d(o).title=e),clearable:"",placeholder:"标题"},null,8,["modelValue"])]),_:1}),n(k,null,{default:a(()=>[n(f,{icon:d(I),loading:d(m),"native-type":"submit",type:"primary",onClick:S},{default:a(()=>l[2]||(l[2]=[c("查询")])),_:1},8,["icon","loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),L((r(),s(U,{border:"",data:d(v)},{empty:a(()=>[n(E,{class:"vab-data-empty",description:"暂无数据"})]),default:a(()=>[n(p,{type:"selection",width:"38"}),n(p,{align:"center",label:"序号",width:"55"},{default:a(({$index:e})=>[c(b(e+1),1)]),_:1}),n(p,{align:"center",label:"标题","min-width":"240"},{default:a(({row:e})=>[e.edit?(r(),s(g,{key:0,modelValue:e.title,"onUpdate:modelValue":u=>e.title=u,clearable:"",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):(r(),y("span",{key:1,onClick:u=>e.edit=!e.edit},b(e.title),9,Y))]),_:1}),n(p,{align:"center",label:"作者","min-width":"140",prop:"author"},{default:a(({row:e})=>[e.edit?(r(),s(g,{key:0,modelValue:e.author,"onUpdate:modelValue":u=>e.author=u,clearable:"",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):(r(),y("span",{key:1,onClick:u=>e.edit=!e.edit},b(e.author),9,Z))]),_:1}),n(p,{align:"center",label:"操作",width:"150"},{default:a(({row:e})=>[e.edit?h("",!0):(r(),s(f,{key:0,text:"",type:"primary",onClick:u=>e.edit=!e.edit},{default:a(()=>l[3]||(l[3]=[c("编辑")])),_:2},1032,["onClick"])),e.edit?(r(),s(f,{key:1,text:"",type:"primary",onClick:u=>z(e)},{default:a(()=>l[4]||(l[4]=[c("保存")])),_:2},1032,["onClick"])):h("",!0),e.edit?(r(),s(f,{key:2,text:"",type:"danger",onClick:u=>x(e)},{default:a(()=>l[5]||(l[5]=[c("取消")])),_:2},1032,["onClick"])):h("",!0)]),_:1})]),_:1},8,["data"])),[[B,d(m)]]),n($,{"current-page":d(o).pageNo,"page-size":d(o).pageSize,total:d(C),onCurrentChange:N,onSizeChange:V},null,8,["current-page","page-size","total"])])}}});export{P as default};
