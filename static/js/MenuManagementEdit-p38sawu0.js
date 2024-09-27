/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 21:23:19 
 */
import{a as E}from"./menuManagement-DmaoEPGl.js";import{d as k,B as s,o as q,A,S as d,K as t,Y as K,u as a,I as v}from"./vsv-element-plus-CleF0dO9.js";import{_ as S}from"./index-wMoNB7-P.js";import"./vsv-icon-DrZkBOPN.js";import"./vsv-nprogress-D5kd6v05.js";const B=k({name:"MenuManagementEdit",__name:"MenuManagementEdit",emits:["fetch-data"],setup(R,{expose:g,emit:_}){const U=_,p=ref(!1),f=ref(),l=reactive({parentId:"",name:"",path:"",component:"",redirect:"",meta:{title:"",icon:"",badge:"",dot:!1,hidden:!1,levelHidden:!1,isCustomSvg:!1,noClosable:!1,noKeepAlive:!1,tabHidden:!1,guard:[]}}),c=reactive({parentId:[{required:!0,trigger:"blur",message:"请输入父级id"}],name:[{required:!0,trigger:"blur",message:"请输入name"}],path:[{required:!0,trigger:"blur",message:"请输入path"}],component:[{required:!0,trigger:"blur",message:"请输入component"}],"meta.title":[{required:!0,trigger:"blur",message:"请输入标题"}]}),b=ref(""),i=ref(!1),C=u=>{l.meta.icon=u,p.value=!1};g({showEdit:u=>{i.value=!0,nextTick(()=>{u?(b.value="编辑",Object.assign(l,u)):(b.value="添加",l.meta={title:"",icon:"",badge:"",dot:!1,hidden:!1,levelHidden:!1,isCustomSvg:!1,noClosable:!1,noKeepAlive:!1,tabHidden:!1,guard:[]})})}});const V=()=>{var u,e;(u=f.value)==null||u.clearValidate(),(e=f.value)==null||e.resetFields(),U("fetch-data")},w=()=>{var u;(u=f.value)==null||u.validate(async e=>{if(e){const{msg:m}=await E(l);await $baseMessage(m,"success","hey"),await V(),i.value=!1}})};return(u,e)=>{const m=s("el-input"),n=s("el-form-item"),I=s("vab-icon-selector"),x=s("el-popover"),r=s("el-switch"),H=s("el-form"),M=s("el-button"),y=s("vab-dialog");return q(),A(y,{modelValue:a(i),"onUpdate:modelValue":e[17]||(e[17]=o=>v(i)?i.value=o:null),"append-to-body":"",title:a(b),width:"830px",onClose:V},{footer:d(()=>[t(M,{type:"primary",onClick:w},{default:d(()=>e[18]||(e[18]=[K("保存")])),_:1})]),default:d(()=>[t(H,{ref_key:"formRef",ref:f,inline:"","label-width":"140px",model:a(l),rules:a(c)},{default:d(()=>[t(n,{label:"父级Id",prop:"parentId"},{default:d(()=>[t(m,{modelValue:a(l).parentId,"onUpdate:modelValue":e[0]||(e[0]=o=>a(l).parentId=o),clearable:""},null,8,["modelValue"])]),_:1}),t(n,{label:"name",prop:"name"},{default:d(()=>[t(m,{modelValue:a(l).name,"onUpdate:modelValue":e[1]||(e[1]=o=>a(l).name=o),clearable:""},null,8,["modelValue"])]),_:1}),t(n,{label:"路径",prop:"path"},{default:d(()=>[t(m,{modelValue:a(l).path,"onUpdate:modelValue":e[2]||(e[2]=o=>a(l).path=o),clearable:""},null,8,["modelValue"])]),_:1}),t(n,{label:"vue文件路径",prop:"component"},{default:d(()=>[t(m,{modelValue:a(l).component,"onUpdate:modelValue":e[3]||(e[3]=o=>a(l).component=o),clearable:""},null,8,["modelValue"])]),_:1}),t(n,{label:"重定向",prop:"redirect"},{default:d(()=>[t(m,{modelValue:a(l).redirect,"onUpdate:modelValue":e[4]||(e[4]=o=>a(l).redirect=o),clearable:""},null,8,["modelValue"])]),_:1}),t(n,{label:"标题",prop:"meta.title"},{default:d(()=>[t(m,{modelValue:a(l).meta.title,"onUpdate:modelValue":e[5]||(e[5]=o=>a(l).meta.title=o),clearable:""},null,8,["modelValue"])]),_:1}),t(n,{label:"图标"},{default:d(()=>[t(x,{visible:a(p),"onUpdate:visible":e[7]||(e[7]=o=>v(p)?p.value=o:null),"popper-class":"icon-selector-popper",width:305},{reference:d(()=>[t(m,{modelValue:a(l).meta.icon,"onUpdate:modelValue":e[6]||(e[6]=o=>a(l).meta.icon=o),clearable:""},null,8,["modelValue"])]),default:d(()=>[t(I,{onHandleIcon:C})]),_:1},8,["visible"])]),_:1}),t(n,{label:"badge"},{default:d(()=>[t(m,{modelValue:a(l).meta.badge,"onUpdate:modelValue":e[8]||(e[8]=o=>a(l).meta.badge=o),clearable:""},null,8,["modelValue"])]),_:1}),t(n,{label:"guard"},{default:d(()=>[t(m,{modelValue:a(l).meta.guard,"onUpdate:modelValue":e[9]||(e[9]=o=>a(l).meta.guard=o),clearable:""},null,8,["modelValue"])]),_:1}),t(n,{label:"dot"},{default:d(()=>[t(r,{modelValue:a(l).meta.dot,"onUpdate:modelValue":e[10]||(e[10]=o=>a(l).meta.dot=o)},null,8,["modelValue"])]),_:1}),t(n,{label:"隐藏"},{default:d(()=>[t(r,{modelValue:a(l).meta.hidden,"onUpdate:modelValue":e[11]||(e[11]=o=>a(l).meta.hidden=o)},null,8,["modelValue"])]),_:1}),t(n,{label:"始终显示当前节点"},{default:d(()=>[t(r,{modelValue:a(l).meta.levelHidden,"onUpdate:modelValue":e[12]||(e[12]=o=>a(l).meta.levelHidden=o)},null,8,["modelValue"])]),_:1}),t(n,{label:"自定义svg图标"},{default:d(()=>[t(r,{modelValue:a(l).meta.isCustomSvg,"onUpdate:modelValue":e[13]||(e[13]=o=>a(l).meta.isCustomSvg=o)},null,8,["modelValue"])]),_:1}),t(n,{label:"固定"},{default:d(()=>[t(r,{modelValue:a(l).meta.noClosable,"onUpdate:modelValue":e[14]||(e[14]=o=>a(l).meta.noClosable=o)},null,8,["modelValue"])]),_:1}),t(n,{label:"无缓存"},{default:d(()=>[t(r,{modelValue:a(l).meta.noKeepAlive,"onUpdate:modelValue":e[15]||(e[15]=o=>a(l).meta.noKeepAlive=o)},null,8,["modelValue"])]),_:1}),t(n,{label:"不显示当前标签页"},{default:d(()=>[t(r,{modelValue:a(l).meta.tabHidden,"onUpdate:modelValue":e[16]||(e[16]=o=>a(l).meta.tabHidden=o)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}}),$=S(B,[["__scopeId","data-v-6c44cddb"]]);export{$ as default};
