/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-11 22:54:54
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2533],{2533:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(34641),l=a(27386);const o={class:"dictionary-management-container"},d=["onClick"];function i(e,t,a,i,r,s){const u=(0,n.g2)("el-button"),c=(0,n.g2)("el-input"),f=(0,n.g2)("el-tree"),p=(0,n.g2)("vab-card"),b=(0,n.g2)("el-col"),h=(0,n.g2)("vab-query-form-top-panel"),m=(0,n.g2)("vab-query-form"),k=(0,n.g2)("el-table-column"),g=(0,n.g2)("el-empty"),y=(0,n.g2)("el-table"),v=(0,n.g2)("el-row"),w=(0,n.g2)("edit"),F=(0,n.gN)("loading");return(0,n.uX)(),(0,n.CE)("div",o,[(0,n.bF)(v,{gutter:20},{default:(0,n.k6)((()=>[(0,n.bF)(b,{lg:4,md:8,sm:24,xl:4,xs:24},{default:(0,n.k6)((()=>[(0,n.bF)(p,{shadow:"hover"},{default:(0,n.k6)((()=>[(0,n.bF)(u,{class:"tree-button",icon:e.Plus,type:"primary",onClick:t[0]||(t[0]=t=>e.handleEdit())},{default:(0,n.k6)((()=>t[3]||(t[3]=[(0,n.eW)(" 添加字典分类 ")]))),_:1},8,["icon"]),(0,n.bF)(c,{modelValue:e.filterText,"onUpdate:modelValue":t[1]||(t[1]=t=>e.filterText=t),placeholder:"请输入字典名称"},null,8,["modelValue"]),(0,n.bF)(f,{ref:"treeRef",data:e.data,"default-expand-all":"","default-expanded-keys":["root"],"filter-node-method":e.filterNode,"node-key":"id",props:e.defaultProps,onNodeClick:e.handleNodeClick},{default:(0,n.k6)((({node:t,data:a})=>[(0,n.Lk)("span",null,(0,l.v_)(t.label),1),a.children?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("a",{key:0,style:{float:"right","margin-right":"10px"},onClick:n=>e.remove(t,a)}," 删除 ",8,d))])),_:1},8,["data","filter-node-method","props","onNodeClick"])])),_:1})])),_:1}),(0,n.bF)(b,{lg:20,md:16,sm:24,xl:20,xs:24},{default:(0,n.k6)((()=>[(0,n.bF)(p,{shadow:"hover"},{default:(0,n.k6)((()=>[(0,n.bF)(m,null,{default:(0,n.k6)((()=>[(0,n.bF)(h,{span:12},{default:(0,n.k6)((()=>[(0,n.bF)(u,{disabled:e.isRoot,icon:e.Plus,type:"primary",onClick:t[2]||(t[2]=t=>e.handleEdit({parentKey:e.parentKey}))},{default:(0,n.k6)((()=>t[4]||(t[4]=[(0,n.eW)(" 添加 ")]))),_:1},8,["disabled","icon"])])),_:1})])),_:1}),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(y,{border:"",data:e.list},{empty:(0,n.k6)((()=>[(0,n.bF)(g,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,n.k6)((()=>[(0,n.bF)(k,{label:"id",prop:"id","show-overflow-tooltip":""}),(0,n.bF)(k,{label:"key值",prop:"key","show-overflow-tooltip":""}),(0,n.bF)(k,{label:"字典值",prop:"value","show-overflow-tooltip":""}),(0,n.bF)(k,{label:"操作","show-overflow-tooltip":"",width:"200"},{default:(0,n.k6)((({row:a})=>[(0,n.bF)(u,{text:"",type:"primary",onClick:t=>e.handleEdit(a)},{default:(0,n.k6)((()=>t[5]||(t[5]=[(0,n.eW)(" 编辑 ")]))),_:2},1032,["onClick"]),(0,n.bF)(u,{text:"",type:"primary",onClick:t=>e.handleDelete(a)},{default:(0,n.k6)((()=>t[6]||(t[6]=[(0,n.eW)(" 删除 ")]))),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[F,e.listLoading]])])),_:1})])),_:1})])),_:1}),(0,n.bF)(w,{ref:"editRef",onFetchData:e.fetchData},null,8,["onFetchData"])])}a(94473),a(63135);var r=a(47597),s=a(39928),u=a(37489),c=(0,n.pM)({name:"DictionaryManagement",components:{Edit:(0,n.$V)((()=>a.e(9903).then(a.bind(a,19903))))},setup(){const e=(0,n.WQ)("$baseConfirm"),t=(0,n.WQ)("$baseMessage"),a=(0,u.Kh)({treeRef:null,editRef:null,data:[],defaultProps:{children:"children",label:"label"},list:[],listLoading:!0,isRoot:!0,parentKey:""}),l=e=>{a["editRef"].showEdit(e)},o=a=>{a.id&&e("你确定要删除当前项吗",null,(async()=>{const{msg:e}=await(0,r.pL)({paths:a.id});t(e,"success","vab-hey-message-success"),await d()}))},d=async(e={key:"root"})=>{"root"!==e.key?a.isRoot=!1:a.isRoot=!0,a.parentKey=e.key,a.listLoading=!0;const{data:{list:t}}=await(0,r.vS)(e);a.list=t,a.listLoading=!1},i=e=>{d(e)},c=(0,u.KR)("");(0,n.wB)(c,(e=>{a.treeRef.filter(e)}));const f=(e,t)=>!e||t.label.includes(e);(0,r.Jv)().then((({data:e})=>{const{list:t}=e;a.data=t}));const p=(e,t)=>{const n=e.parent,l=n.data.children||n.data,o=l.findIndex((e=>e.id===t.id));l.splice(o,1),a.data=[...a.data]};return(0,n.sV)((()=>{d()})),{...(0,u.QW)(a),filterText:c,filterNode:f,remove:p,handleEdit:l,handleDelete:o,fetchData:d,handleNodeClick:i,Plus:s.Plus}}});function f(e){e.__source="src/views/setting/dictionaryManagement/index.vue"}var p=a(48499);"function"===typeof f&&f(c);const b=(0,p.A)(c,[["render",i],["__scopeId","data-v-1bc551c6"]]);var h=b},47597:function(e,t,a){a.d(t,{Ed:function(){return d},Jv:function(){return l},pL:function(){return i},vS:function(){return o}});var n=a(24380);function l(e){return(0,n.A)({url:"/dictionaryManagement/getTree",method:"get",params:e})}function o(e){return(0,n.A)({url:"/dictionaryManagement/getList",method:"get",params:e})}function d(e){return(0,n.A)({url:"/dictionaryManagement/doEdit",method:"post",data:e})}function i(e){return(0,n.A)({url:"/dictionaryManagement/doDelete",method:"post",data:e})}}}]);