/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:17:33 
 */
import{a as E}from"./roleManagement-B8T7Aktr.js";import{G as L,_ as M}from"./index-vqJMV2wg.js";import{d as B,N as d,o as N,M as T,$ as l,T as s,a4 as U,u as a,e as x,a3 as j,k as D}from"./vsv-element-plus-CxGOTlXz.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const F={class:"vab-tree-border"},O=B({name:"RoleManagementEdit",__name:"RoleManagementEdit",emits:["fetch-data"],setup($,{expose:y,emit:k}){const v=k,c=ref(),p=ref(null),o=reactive({role:"",btnRolesCheckedList:["read:system","write:system","delete:system","read:index","write:index","delete:index","read:index","write:index","delete:index"]}),w=reactive({role:[{required:!0,trigger:"blur",message:"请输入角色码"}]}),m=ref(""),r=ref(!1),_=ref([]);y({showEdit:t=>{r.value=!0,nextTick(()=>{t?(m.value="编辑",Object.assign(o,t)):(m.value="添加",o.btnRolesCheckedList=["read:system","write:system","delete:system","read:index","write:index","delete:index","read:index","write:index","delete:index"])})}});const b=()=>{var t,e;(t=c.value)==null||t.clearValidate(),(e=c.value)==null||e.resetFields(),v("fetch-data")},g=async()=>{const{data:t}=await L();_.value=t.list},h=()=>{var t;(t=c.value)==null||t.validate(async e=>{if(e){const i={"treeArray:":p.value.getCheckedKeys()},{msg:f}=await E({...o,...i});await $baseMessage(f,"success","hey"),await b(),r.value=!1}})};return onBeforeMount(()=>{g()}),(t,e)=>{const u=d("el-input"),i=d("el-form-item"),f=d("el-tree"),V=d("el-form"),R=d("el-button"),C=d("vab-dialog");return N(),T(C,{modelValue:a(r),"onUpdate:modelValue":e[2]||(e[2]=n=>D(r)?r.value=n:null),"append-to-body":"",title:a(m),width:"500px",onClose:b},{footer:l(()=>[s(R,{type:"primary",onClick:h},{default:l(()=>e[3]||(e[3]=[U("保存")])),_:1})]),default:l(()=>[s(V,{ref_key:"formRef",ref:c,"label-width":"80px",model:a(o),rules:a(w)},{default:l(()=>[s(i,{label:"角色码",prop:"role"},{default:l(()=>[s(u,{modelValue:a(o).role,"onUpdate:modelValue":e[0]||(e[0]=n=>a(o).role=n),clearable:""},null,8,["modelValue"])]),_:1}),s(i,{label:"菜单"},{default:l(()=>[x("div",F,[s(f,{ref_key:"treeRef",ref:p,data:a(_),"default-checked-keys":a(o).menuCheckedList,"default-expanded-keys":[],"node-key":"path","show-checkbox":""},{default:l(({data:n})=>[x("span",null,j(n.meta.title),1)]),_:1},8,["data","default-checked-keys"])])]),_:1}),s(i,{label:"按钮权限"},{default:l(()=>[s(u,{modelValue:a(o).btnRolesCheckedList,"onUpdate:modelValue":e[1]||(e[1]=n=>a(o).btnRolesCheckedList=n),clearable:"",rows:3,type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}}),z=M(O,[["__scopeId","data-v-09484dba"]]);export{z as default};
