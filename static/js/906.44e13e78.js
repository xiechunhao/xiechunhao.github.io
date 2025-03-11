/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-12 00:28:56
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[906],{24929:function(e,t,a){a.d(t,{Ed:function(){return o},pL:function(){return r},vS:function(){return n}});var l=a(24380);function n(e){return(0,l.A)({url:"/roleManagement/getList",method:"get",params:e})}function o(e){return(0,l.A)({url:"/roleManagement/doEdit",method:"post",data:e})}function r(e){return(0,l.A)({url:"/roleManagement/doDelete",method:"post",data:e})}},60906:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var l=a(34641),n=a(50670),o=a(27386);const r={class:"role-management-container"};function i(e,t,a,i,s,u){const d=(0,l.g2)("el-button"),c=(0,l.g2)("vab-query-form-left-panel"),g=(0,l.g2)("el-input"),p=(0,l.g2)("el-form-item"),m=(0,l.g2)("el-form"),f=(0,l.g2)("vab-query-form-right-panel"),h=(0,l.g2)("vab-query-form"),b=(0,l.g2)("el-table-column"),y=(0,l.g2)("el-tag"),F=(0,l.g2)("el-empty"),k=(0,l.g2)("el-table"),w=(0,l.g2)("el-pagination"),v=(0,l.g2)("edit"),C=(0,l.gN)("loading");return(0,l.uX)(),(0,l.CE)("div",r,[(0,l.bF)(h,null,{default:(0,l.k6)((()=>[(0,l.bF)(c,{span:12},{default:(0,l.k6)((()=>[(0,l.bF)(d,{icon:e.Plus,type:"primary",onClick:t[0]||(t[0]=t=>e.handleEdit(t))},{default:(0,l.k6)((()=>t[4]||(t[4]=[(0,l.eW)(" 添加 ")]))),_:1},8,["icon"]),(0,l.bF)(d,{icon:e.Delete,type:"danger",onClick:t[1]||(t[1]=t=>e.handleDelete(t))},{default:(0,l.k6)((()=>t[5]||(t[5]=[(0,l.eW)(" 批量删除 ")]))),_:1},8,["icon"])])),_:1}),(0,l.bF)(f,{span:12},{default:(0,l.k6)((()=>[(0,l.bF)(m,{inline:"",model:e.queryForm,onSubmit:t[3]||(t[3]=(0,n.D$)((()=>{}),["prevent"]))},{default:(0,l.k6)((()=>[(0,l.bF)(p,null,{default:(0,l.k6)((()=>[(0,l.bF)(g,{modelValue:e.queryForm.role,"onUpdate:modelValue":t[2]||(t[2]=t=>e.queryForm.role=t),modelModifiers:{trim:!0},clearable:"",placeholder:"请输入角色"},null,8,["modelValue"])])),_:1}),(0,l.bF)(p,null,{default:(0,l.k6)((()=>[(0,l.bF)(d,{icon:e.Search,type:"primary",onClick:e.queryData},{default:(0,l.k6)((()=>t[6]||(t[6]=[(0,l.eW)(" 查询 ")]))),_:1},8,["icon","onClick"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),(0,l.bo)(((0,l.uX)(),(0,l.Wv)(k,{border:"",data:e.list,onSelectionChange:e.setSelectRows},{empty:(0,l.k6)((()=>[(0,l.bF)(F,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,l.k6)((()=>[(0,l.bF)(b,{align:"center","show-overflow-tooltip":"",type:"selection"}),(0,l.bF)(b,{align:"center",label:"序号",width:"55"},{default:(0,l.k6)((({$index:e})=>[(0,l.eW)((0,o.v_)(e+1),1)])),_:1}),(0,l.bF)(b,{align:"center",label:"id",prop:"id","show-overflow-tooltip":""}),(0,l.bF)(b,{align:"center",label:"角色码",prop:"role","show-overflow-tooltip":""}),(0,l.bF)(b,{align:"center",label:"按钮权限","show-overflow-tooltip":""},{default:(0,l.k6)((({row:e})=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.btnRolesCheckedList,((e,t)=>((0,l.uX)(),(0,l.Wv)(y,{key:t},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)({"read:system":"读","write:system":"写","delete:system":"删"}[e]),1)])),_:2},1024)))),128))])),_:1}),(0,l.bF)(b,{align:"center",label:"操作","show-overflow-tooltip":"",width:"200"},{default:(0,l.k6)((({row:a})=>[(0,l.bF)(d,{text:"",type:"primary",onClick:t=>e.handleEdit(a)},{default:(0,l.k6)((()=>t[7]||(t[7]=[(0,l.eW)(" 编辑 ")]))),_:2},1032,["onClick"]),(0,l.bF)(d,{text:"",type:"primary",onClick:t=>e.handleDelete(a)},{default:(0,l.k6)((()=>t[8]||(t[8]=[(0,l.eW)(" 删除 ")]))),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[C,e.listLoading]]),(0,l.bF)(w,{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total,onCurrentChange:e.handleCurrentChange,onSizeChange:e.handleSizeChange},null,8,["current-page","layout","page-size","total","onCurrentChange","onSizeChange"]),(0,l.bF)(v,{ref:"editRef",onFetchData:e.fetchData},null,8,["onFetchData"])])}a(94473),a(55759);var s=a(24929),u=a(39928),d=a(37489),c=(0,l.pM)({name:"RoleManagement",components:{Edit:(0,l.$V)((()=>a.e(4613).then(a.bind(a,46994))))},setup(){const e=(0,l.WQ)("$baseConfirm"),t=(0,l.WQ)("$baseMessage"),a=(0,d.Kh)({editRef:null,list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,selectRows:"",queryForm:{pageNo:1,pageSize:10,role:""}}),n=e=>{a.selectRows=e},o=e=>{e.id?a["editRef"].showEdit(e):a["editRef"].showEdit()},r=l=>{if(l.id)e("你确定要删除当前项吗",null,(async()=>{const{msg:e}=await(0,s.pL)({ids:l.id});t(e,"success","vab-hey-message-success"),await p()}));else if(a.selectRows.length>0){const l=a.selectRows.map((e=>e.id)).join();e("你确定要删除选中项吗",null,(async()=>{const{msg:e}=await(0,s.pL)({ids:l});t(e,"success","vab-hey-message-success"),await p()}))}else t("未选中任何行","error","vab-hey-message-error")},i=e=>{a.queryForm.pageSize=e,p()},c=e=>{a.queryForm.pageNo=e,p()},g=()=>{a.queryForm.pageNo=1,p()},p=async()=>{a.listLoading=!0;const{data:{list:e,total:t}}=await(0,s.vS)(a.queryForm);a.list=e,a.total=t,a.listLoading=!1};return(0,l.sV)((()=>{p()})),{...(0,d.QW)(a),setSelectRows:n,handleEdit:o,handleDelete:r,handleSizeChange:i,handleCurrentChange:c,queryData:g,fetchData:p,Delete:u.Delete,Plus:u.Plus,Search:u.Search}}});function g(e){e.__source="src/views/setting/roleManagement/index.vue"}var p=a(48499);"function"===typeof g&&g(c);const m=(0,p.A)(c,[["render",i]]);var f=m}}]);