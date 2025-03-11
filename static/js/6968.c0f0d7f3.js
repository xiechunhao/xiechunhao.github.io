/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-12 00:44:12
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6968],{76968:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var o=a(34641),l=a(27386);const n={class:"menu-management-container"};function d(e,t,a,d,r,i){const s=(0,o.g2)("el-tree"),u=(0,o.g2)("vab-card"),p=(0,o.g2)("el-col"),c=(0,o.g2)("el-button"),f=(0,o.g2)("vab-query-form-top-panel"),b=(0,o.g2)("vab-query-form"),h=(0,o.g2)("el-table-column"),m=(0,o.g2)("vab-icon"),w=(0,o.g2)("el-tag"),v=(0,o.g2)("el-empty"),k=(0,o.g2)("el-table"),g=(0,o.g2)("el-row"),_=(0,o.g2)("edit"),F=(0,o.gN)("loading");return(0,o.uX)(),(0,o.CE)("div",n,[(0,o.bF)(g,{gutter:20},{default:(0,o.k6)((()=>[(0,o.bF)(p,{lg:4,md:8,sm:24,xl:4,xs:24},{default:(0,o.k6)((()=>[(0,o.bF)(u,{shadow:"hover"},{default:(0,o.k6)((()=>[(0,o.bF)(s,{data:e.data,"default-expanded-keys":["root"],"node-key":"id",props:e.defaultProps,onNodeClick:e.handleNodeClick},null,8,["data","props","onNodeClick"])])),_:1})])),_:1}),(0,o.bF)(p,{lg:20,md:16,sm:24,xl:20,xs:24},{default:(0,o.k6)((()=>[(0,o.bF)(u,{shadow:"hover"},{default:(0,o.k6)((()=>[(0,o.bF)(b,null,{default:(0,o.k6)((()=>[(0,o.bF)(f,{span:12},{default:(0,o.k6)((()=>[(0,o.bF)(c,{icon:e.Plus,type:"primary",onClick:t[0]||(t[0]=t=>e.handleEdit())},{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.eW)(" 添加 ")]))),_:1},8,["icon"])])),_:1})])),_:1}),(0,o.bo)(((0,o.uX)(),(0,o.Wv)(k,{border:"",data:e.list,"default-expand-all":"","row-key":"path","tree-props":{children:"children",hasChildren:"hasChildren"}},{empty:(0,o.k6)((()=>[(0,o.bF)(v,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,o.k6)((()=>[(0,o.bF)(h,{label:"标题",prop:"meta.title","show-overflow-tooltip":""}),(0,o.bF)(h,{label:"name",prop:"name","show-overflow-tooltip":""}),(0,o.bF)(h,{label:"路径",prop:"path","show-overflow-tooltip":""}),(0,o.bF)(h,{label:"是否隐藏","show-overflow-tooltip":""},{default:(0,o.k6)((({row:e})=>[(0,o.eW)((0,l.v_)(e.meta.hidden?"是":"否"),1)])),_:1}),(0,o.bF)(h,{label:"是否隐藏当前节点","show-overflow-tooltip":"",width:"100"},{default:(0,o.k6)((({row:e})=>[(0,o.eW)((0,l.v_)(e.meta.levelHidden?"是":"否"),1)])),_:1}),(0,o.bF)(h,{label:"vue文件路径",prop:"component","show-overflow-tooltip":""}),(0,o.bF)(h,{label:"重定向","show-overflow-tooltip":""},{default:(0,o.k6)((({row:e})=>[(0,o.eW)((0,l.v_)(e.redirect||"无"),1)])),_:1}),(0,o.bF)(h,{label:"图标","show-overflow-tooltip":""},{default:(0,o.k6)((({row:e})=>[e.meta.icon?((0,o.uX)(),(0,o.Wv)(m,{key:0,icon:e.meta.icon},null,8,["icon"])):(0,o.Q3)("",!0)])),_:1}),(0,o.bF)(h,{label:"是否固定","show-overflow-tooltip":""},{default:(0,o.k6)((({row:e})=>[(0,o.eW)((0,l.v_)(e.meta.noClosable?"是":"否"),1)])),_:1}),(0,o.bF)(h,{label:"是否无缓存","show-overflow-tooltip":"",width:"120"},{default:(0,o.k6)((({row:e})=>[(0,o.eW)((0,l.v_)(e.meta.noKeepAlive?"是":"否"),1)])),_:1}),(0,o.bF)(h,{label:"badge","show-overflow-tooltip":""},{default:(0,o.k6)((({row:e})=>[e.meta.badge?((0,o.uX)(),(0,o.Wv)(w,{key:0,effect:"dark",type:"danger"},{default:(0,o.k6)((()=>[(0,o.eW)((0,l.v_)(e.meta.badge),1)])),_:2},1024)):(0,o.Q3)("",!0)])),_:1}),(0,o.bF)(h,{label:"dot","show-overflow-tooltip":""},{default:(0,o.k6)((({row:e})=>[(0,o.eW)((0,l.v_)(e.meta.dot?"是":"否"),1)])),_:1}),(0,o.bF)(h,{label:"操作","show-overflow-tooltip":"",width:"200"},{default:(0,o.k6)((({row:a})=>[(0,o.bF)(c,{text:"",type:"primary",onClick:t=>e.handleEdit(a)},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)(" 编辑 ")]))),_:2},1032,["onClick"]),(0,o.bF)(c,{text:"",type:"primary",onClick:t=>e.handleDelete(a)},{default:(0,o.k6)((()=>t[3]||(t[3]=[(0,o.eW)(" 删除 ")]))),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[F,e.listLoading]])])),_:1})])),_:1})])),_:1}),(0,o.bF)(_,{ref:"editRef",onFetchData:e.fetchData},null,8,["onFetchData"])])}var r=a(67787),i=a(95938),s=a(39928),u=a(37489),p=(0,o.pM)({name:"MenuManagement",components:{Edit:(0,o.$V)((()=>Promise.all([a.e(8853),a.e(7771)]).then(a.bind(a,83024))))},setup(){const e=(0,o.WQ)("$baseConfirm"),t=(0,o.WQ)("$baseMessage"),a=(0,u.Kh)({editRef:null,data:[],defaultProps:{children:"children",label:"label"},list:[],listLoading:!0}),l=e=>{e&&e.path?a["editRef"].showEdit(e):a["editRef"].showEdit()},n=a=>{a.path&&e("你确定要删除当前项吗",null,(async()=>{const{msg:e}=await(0,i.pL)({paths:a.path});t(e,"success","vab-hey-message-success"),await d()}))},d=async e=>{a.listLoading=!0;const{data:{list:t}}=await(0,r.v)({role:e});a.list=t,a.listLoading=!1},p=({role:e})=>{d(e)};return(0,i.Jv)().then((({data:e})=>{const{list:t}=e;a.data=t})),(0,o.sV)((()=>{d()})),{...(0,u.QW)(a),handleEdit:l,handleDelete:n,fetchData:d,handleNodeClick:p,Plus:s.Plus}}});function c(e){e.__source="src/views/setting/menuManagement/index.vue"}var f=a(48499);"function"===typeof c&&c(p);const b=(0,f.A)(p,[["render",d],["__scopeId","data-v-080edc90"]]);var h=b},95938:function(e,t,a){a.d(t,{Ed:function(){return n},Jv:function(){return l},pL:function(){return d}});var o=a(24380);function l(e){return(0,o.A)({url:"/menuManagement/getTree",method:"get",params:e})}function n(e){return(0,o.A)({url:"/menuManagement/doEdit",method:"post",data:e})}function d(e){return(0,o.A)({url:"/menuManagement/doDelete",method:"post",data:e})}}}]);