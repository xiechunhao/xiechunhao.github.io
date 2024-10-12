/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 16:06:30 
 */
import{k as p,aE as B,f as O,C as T,_ as j}from"./index-D08hoOyC.js";import{d as D,r as u,p as y,a7 as F,o as S,S as I,T as s,W as l,a8 as N,u as a,e as k,a1 as U,h as $,x as q,aO as z,aq as A,bv as K,au as P,a9 as W}from"./vsv-element-plus-OoOmiKKG.js";function ee(d){return p({url:"/roleManagement/getList",method:"get",params:d})}const G=d=>p({url:"/roleManagement/doEdit",method:"post",data:d}),te=d=>p({url:"/roleManagement/doDelete",method:"post",data:d}),H={class:"vab-tree-border"},J=D({name:"RoleManagementEdit",__name:"RoleManagementEdit",emits:["fetch-data"],setup(d,{expose:v,emit:h}){const w=h,c=u(),b=u(null),o=y({role:"",btnRolesCheckedList:["read:system","write:system","delete:system","read:index","write:index","delete:index","read:index","write:index","delete:index"]}),V=y({role:[{required:!0,trigger:"blur",message:"请输入角色码"}]}),m=u(""),r=u(!1),x=u([]);v({showEdit:t=>{r.value=!0,q(()=>{t?(m.value="编辑",Object.assign(o,t)):(m.value="添加",o.btnRolesCheckedList=["read:system","write:system","delete:system","read:index","write:index","delete:index","read:index","write:index","delete:index"])})}});const g=()=>{var t,e;(t=c.value)==null||t.clearValidate(),(e=c.value)==null||e.resetFields(),w("fetch-data")},E=async()=>{const{data:t}=await B();x.value=t.list},R=()=>{var t;(t=c.value)==null||t.validate(async e=>{if(e){const i={"treeArray:":b.value.getCheckedKeys()},{msg:_}=await G({...o,...i});await O(_,"success","hey"),await g(),r.value=!1}})};return F(()=>{E()}),(t,e)=>{const f=z,i=A,_=K,C=P,M=W,L=T;return S(),I(L,{modelValue:a(r),"onUpdate:modelValue":e[2]||(e[2]=n=>$(r)?r.value=n:null),"append-to-body":"",title:a(m),width:"500px",onClose:g},{footer:s(()=>[l(M,{type:"primary",onClick:R},{default:s(()=>e[3]||(e[3]=[N("保存")])),_:1})]),default:s(()=>[l(C,{ref_key:"formRef",ref:c,"label-width":"80px",model:a(o),rules:a(V)},{default:s(()=>[l(i,{label:"角色码",prop:"role"},{default:s(()=>[l(f,{modelValue:a(o).role,"onUpdate:modelValue":e[0]||(e[0]=n=>a(o).role=n),clearable:""},null,8,["modelValue"])]),_:1}),l(i,{label:"菜单"},{default:s(()=>[k("div",H,[l(_,{ref_key:"treeRef",ref:b,data:a(x),"default-checked-keys":a(o).menuCheckedList,"default-expanded-keys":[],"node-key":"path","show-checkbox":""},{default:s(({data:n})=>[k("span",null,U(n.meta.title),1)]),_:1},8,["data","default-checked-keys"])])]),_:1}),l(i,{label:"按钮权限"},{default:s(()=>[l(f,{modelValue:a(o).btnRolesCheckedList,"onUpdate:modelValue":e[1]||(e[1]=n=>a(o).btnRolesCheckedList=n),clearable:"",rows:3,type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}}),Q=j(J,[["__scopeId","data-v-09484dba"]]),ae=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{ae as R,Q as _,te as d,ee as g};
