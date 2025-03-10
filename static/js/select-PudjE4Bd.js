/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:20:55 
 */
import{d as C,a as v,J as u,U as a,A as k,u as n,D as b,Z as t,G as f,a2 as m,o as d,z as V}from"./vsv-element-plus-CWjYVfvE.js";const N={class:"select-container no-background-container"},A=C({name:"Select",__name:"select",setup(c){const i=ref([{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}]),o=ref(""),g=ref([{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶",disabled:!0},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}]),_=ref(""),U=ref([]),y=ref(""),x=ref([{value:"1",label:"一级 1",children:[{value:"1-1",label:"二级 1-1",children:[{value:"1-1-1",label:"三级 1-1-1"}]}]},{value:"2",label:"一级 2",children:[{value:"2-1",label:"二级 2-1",children:[{value:"2-1-1",label:"三级 2-1-1"}]},{value:"2-2",label:"二级 2-2",children:[{value:"2-2-1",label:"三级 2-2-1"}]}]},{value:"3",label:"一级 3",children:[{value:"3-1",label:"二级 3-1",children:[{value:"3-1-1",label:"三级 3-1-1"}]},{value:"3-2",label:"二级 3-2",children:[{value:"3-2-1",label:"三级 3-2-1"}]}]}]);return(D,e)=>{const w=k("el-tag"),B=k("el-tree-select"),r=k("vab-card"),s=k("el-option"),p=k("el-select");return d(),v("div",N,[u(r,null,{header:a(()=>[e[8]||(e[8]=t(" 树选择 ")),u(w,{class:"card-header-tag",type:"danger"},{default:a(()=>e[7]||(e[7]=[t("New")])),_:1})]),default:a(()=>[u(B,{modelValue:n(y),"onUpdate:modelValue":e[0]||(e[0]=l=>b(y)?y.value=l:null),data:n(x),multiple:"","show-checkbox":""},null,8,["modelValue","data"])]),_:1}),u(r,null,{header:a(()=>e[9]||(e[9]=[t("基础用法")])),default:a(()=>[u(p,{modelValue:n(o),"onUpdate:modelValue":e[1]||(e[1]=l=>b(o)?o.value=l:null),placeholder:"请选择"},{default:a(()=>[(d(!0),v(f,null,m(n(i),l=>(d(),V(s,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(r,null,{header:a(()=>e[10]||(e[10]=[t("有禁用选项")])),default:a(()=>[u(p,{modelValue:n(_),"onUpdate:modelValue":e[2]||(e[2]=l=>b(_)?_.value=l:null),placeholder:"请选择"},{default:a(()=>[(d(!0),v(f,null,m(n(g),l=>(d(),V(s,{key:l.value,disabled:l.disabled,label:l.label,value:l.value},null,8,["disabled","label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(r,null,{header:a(()=>e[11]||(e[11]=[t("禁用状态")])),default:a(()=>[u(p,{modelValue:n(o),"onUpdate:modelValue":e[3]||(e[3]=l=>b(o)?o.value=l:null),disabled:"",placeholder:"请选择"},{default:a(()=>[(d(!0),v(f,null,m(n(i),l=>(d(),V(s,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(r,null,{header:a(()=>e[12]||(e[12]=[t("可清空单选")])),default:a(()=>[u(p,{modelValue:n(o),"onUpdate:modelValue":e[4]||(e[4]=l=>b(o)?o.value=l:null),clearable:"",placeholder:"请选择"},{default:a(()=>[(d(!0),v(f,null,m(n(i),l=>(d(),V(s,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(r,null,{header:a(()=>e[13]||(e[13]=[t("基础多选")])),default:a(()=>[u(p,{modelValue:n(U),"onUpdate:modelValue":e[5]||(e[5]=l=>b(U)?U.value=l:null),multiple:"",placeholder:"请选择"},{default:a(()=>[(d(!0),v(f,null,m(n(i),l=>(d(),V(s,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(r,null,{header:a(()=>e[14]||(e[14]=[t("可搜索")])),default:a(()=>[u(p,{modelValue:n(o),"onUpdate:modelValue":e[6]||(e[6]=l=>b(o)?o.value=l:null),filterable:"",placeholder:"请选择"},{default:a(()=>[(d(!0),v(f,null,m(n(i),l=>(d(),V(s,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})])}}});export{A as default};
