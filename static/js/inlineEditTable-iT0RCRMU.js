/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 21:23:19 
 */
import{d as A,b as y,K as n,S as a,P as L,u as i,A as s,B as d,W as M,o as r,Z as F,a9 as I,Y as c,X as b,R as h}from"./vsv-element-plus-CleF0dO9.js";import{g as K}from"./table-rNzIqkgx.js";import"./index-wMoNB7-P.js";import"./vsv-icon-DrZkBOPN.js";import"./vsv-nprogress-D5kd6v05.js";const P={class:"inline-edit-table-container auto-height-container"},R=["onClick"],W=["onClick"],J=A({name:"InlineEditTable",__name:"inlineEditTable",setup(X){const v=ref([]),m=ref(!0),k=ref(0),o=reactive({pageNo:1,pageSize:20,title:""}),_=async()=>{m.value=!0;const{data:t}=await K(o);v.value=t.list.map(l=>(l.edit=!1,l.originalTitle=l.title,l.originalAuthor=l.author,l)),k.value=t.total,m.value=!1},V=t=>{o.pageNo=1,o.pageSize=t,_()},N=t=>{o.pageNo=t,_()},S=()=>{o.pageNo=1,_()},x=t=>{t.title=t.originalTitle,t.author=t.originalAuthor,t.edit=!1},z=t=>{t.edit=!1,t.originalTitle=t.title,t.originalAuthor=t.author};return onBeforeMount(()=>{_()}),(t,l)=>{const g=d("el-input"),C=d("el-form-item"),f=d("el-button"),q=d("el-form"),T=d("vab-query-form-right-panel"),B=d("vab-query-form"),p=d("el-table-column"),D=d("el-empty"),E=d("el-table"),U=d("vab-pagination"),$=M("loading");return r(),y("div",P,[n(B,null,{default:a(()=>[n(T,{span:24},{default:a(()=>[n(q,{inline:"",model:i(o),onSubmit:l[1]||(l[1]=F(()=>{},["prevent"]))},{default:a(()=>[n(C,null,{default:a(()=>[n(g,{modelValue:i(o).title,"onUpdate:modelValue":l[0]||(l[0]=e=>i(o).title=e),clearable:"",placeholder:"标题"},null,8,["modelValue"])]),_:1}),n(C,null,{default:a(()=>[n(f,{icon:i(I),loading:i(m),"native-type":"submit",type:"primary",onClick:S},{default:a(()=>l[2]||(l[2]=[c("查询")])),_:1},8,["icon","loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),L((r(),s(E,{border:"",data:i(v)},{empty:a(()=>[n(D,{class:"vab-data-empty",description:"暂无数据"})]),default:a(()=>[n(p,{type:"selection",width:"38"}),n(p,{align:"center",label:"序号",width:"55"},{default:a(({$index:e})=>[c(b(e+1),1)]),_:1}),n(p,{align:"center",label:"标题","min-width":"240"},{default:a(({row:e})=>[e.edit?(r(),s(g,{key:0,modelValue:e.title,"onUpdate:modelValue":u=>e.title=u,clearable:"",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):(r(),y("span",{key:1,onClick:u=>e.edit=!e.edit},b(e.title),9,R))]),_:1}),n(p,{align:"center",label:"作者","min-width":"140",prop:"author"},{default:a(({row:e})=>[e.edit?(r(),s(g,{key:0,modelValue:e.author,"onUpdate:modelValue":u=>e.author=u,clearable:"",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):(r(),y("span",{key:1,onClick:u=>e.edit=!e.edit},b(e.author),9,W))]),_:1}),n(p,{align:"center",label:"操作",width:"150"},{default:a(({row:e})=>[e.edit?h("",!0):(r(),s(f,{key:0,text:"",type:"primary",onClick:u=>e.edit=!e.edit},{default:a(()=>l[3]||(l[3]=[c("编辑")])),_:2},1032,["onClick"])),e.edit?(r(),s(f,{key:1,text:"",type:"primary",onClick:u=>z(e)},{default:a(()=>l[4]||(l[4]=[c("保存")])),_:2},1032,["onClick"])):h("",!0),e.edit?(r(),s(f,{key:2,text:"",type:"danger",onClick:u=>x(e)},{default:a(()=>l[5]||(l[5]=[c("取消")])),_:2},1032,["onClick"])):h("",!0)]),_:1})]),_:1},8,["data"])),[[$,i(m)]]),n(U,{"current-page":i(o).pageNo,"page-size":i(o).pageSize,total:i(k),onCurrentChange:N,onSizeChange:V},null,8,["current-page","page-size","total"])])}}});export{J as default};
