/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-14 01:23:41
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2585],{24929:function(e,t,n){n.d(t,{Ed:function(){return l},pL:function(){return r},vS:function(){return o}});var a=n(24380);function o(e){return(0,a.A)({url:"/roleManagement/getList",method:"get",params:e})}function l(e){return(0,a.A)({url:"/roleManagement/doEdit",method:"post",data:e})}function r(e){return(0,a.A)({url:"/roleManagement/doDelete",method:"post",data:e})}},50855:function(e,t,n){n.d(t,{A:function(){return i}});var a=n(30853),o=(n(27322),n(39585),n(34641));const l={class:"right-panel"};var r=(0,o.pM)({__name:"VabQueryFormRightPanel",props:{span:{type:Number,default:10}},setup(e){return(t,n)=>{const r=a.uD;return(0,o.uX)(),(0,o.Wv)(r,{lg:e.span,md:24,sm:24,xl:e.span,xs:24},{default:(0,o.k6)((()=>[(0,o.Lk)("div",l,[(0,o.RG)(t.$slots,"default")])])),_:3},8,["lg","xl"])}}});function s(e){e.__source="library/components/VabQueryForm/components/VabQueryFormRightPanel.vue"}"function"===typeof s&&s(r);const u=r;var i=u},56808:function(e,t,n){n.d(t,{A:function(){return i}});var a=n(30853),o=(n(27322),n(39585),n(34641));const l={class:"left-panel"};var r=(0,o.pM)({__name:"VabQueryFormLeftPanel",props:{span:{type:Number,default:14}},setup(e){return(t,n)=>{const r=a.uD;return(0,o.uX)(),(0,o.Wv)(r,{lg:e.span,md:24,sm:24,xl:e.span,xs:24},{default:(0,o.k6)((()=>[(0,o.Lk)("div",l,[(0,o.RG)(t.$slots,"default")])])),_:3},8,["lg","xl"])}}});function s(e){e.__source="library/components/VabQueryForm/components/VabQueryFormLeftPanel.vue"}"function"===typeof s&&s(r);const u=r;var i=u},63285:function(e,t,n){n.d(t,{A:function(){return c}});var a=n(76004),o=(n(27322),n(49120),n(34641));function l(e,t){const n=a.S2;return(0,o.uX)(),(0,o.Wv)(n,{class:"vab-query-form",gutter:0},{default:(0,o.k6)((()=>[(0,o.RG)(e.$slots,"default",{},void 0,!0)])),_:3})}function r(e){e.__source="library/components/VabQueryForm/index.vue"}var s=n(48499);const u={};"function"===typeof r&&r(u);const i=(0,s.A)(u,[["render",l],["__scopeId","data-v-172989c8"]]);var c=i},71803:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(1956),o=(n(27322),n(14014),n(94577)),l=(n(9573),n(62289)),r=(n(65562),n(78925)),s=(n(35762),n(21738)),u=(n(34498),n(95489),n(63285)),i=n(50855),c=n(44134),d=(n(92498),n(5309),n(46137)),p=(n(30957),n(56808)),f=n(73120),m=(n(52539),n(34641)),g=n(50670),y=n(27386);const b={class:"role-management-container"};function h(e,t,n,h,v,F){const k=f.S2,_=p.A,w=d.WK,C=c.xE,S=c.US,R=i.A,D=u.A,W=l.o8,x=s.u,L=r.x0,q=l.Up,V=o.aQ,A=(0,m.g2)("edit"),E=a.L;return(0,m.uX)(),(0,m.CE)("div",b,[(0,m.bF)(D,null,{default:(0,m.k6)((()=>[(0,m.bF)(_,{span:12},{default:(0,m.k6)((()=>[(0,m.bF)(k,{icon:e.Plus,type:"primary",onClick:t[0]||(t[0]=t=>e.handleEdit(t))},{default:(0,m.k6)((()=>t[4]||(t[4]=[(0,m.eW)(" 添加 ")]))),_:1},8,["icon"]),(0,m.bF)(k,{icon:e.Delete,type:"danger",onClick:t[1]||(t[1]=t=>e.handleDelete(t))},{default:(0,m.k6)((()=>t[5]||(t[5]=[(0,m.eW)(" 批量删除 ")]))),_:1},8,["icon"])])),_:1}),(0,m.bF)(R,{span:12},{default:(0,m.k6)((()=>[(0,m.bF)(S,{inline:"",model:e.queryForm,onSubmit:t[3]||(t[3]=(0,g.D$)((()=>{}),["prevent"]))},{default:(0,m.k6)((()=>[(0,m.bF)(C,null,{default:(0,m.k6)((()=>[(0,m.bF)(w,{modelValue:e.queryForm.role,"onUpdate:modelValue":t[2]||(t[2]=t=>e.queryForm.role=t),modelModifiers:{trim:!0},clearable:"",placeholder:"请输入角色"},null,8,["modelValue"])])),_:1}),(0,m.bF)(C,null,{default:(0,m.k6)((()=>[(0,m.bF)(k,{icon:e.Search,type:"primary",onClick:e.queryData},{default:(0,m.k6)((()=>t[6]||(t[6]=[(0,m.eW)(" 查询 ")]))),_:1},8,["icon","onClick"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),(0,m.bo)(((0,m.uX)(),(0,m.Wv)(q,{border:"",data:e.list,onSelectionChange:e.setSelectRows},{empty:(0,m.k6)((()=>[(0,m.bF)(L,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,m.k6)((()=>[(0,m.bF)(W,{align:"center","show-overflow-tooltip":"",type:"selection"}),(0,m.bF)(W,{align:"center",label:"序号",width:"55"},{default:(0,m.k6)((({$index:e})=>[(0,m.eW)((0,y.v_)(e+1),1)])),_:1}),(0,m.bF)(W,{align:"center",label:"id",prop:"id","show-overflow-tooltip":""}),(0,m.bF)(W,{align:"center",label:"角色码",prop:"role","show-overflow-tooltip":""}),(0,m.bF)(W,{align:"center",label:"按钮权限","show-overflow-tooltip":""},{default:(0,m.k6)((({row:e})=>[((0,m.uX)(!0),(0,m.CE)(m.FK,null,(0,m.pI)(e.btnRolesCheckedList,((e,t)=>((0,m.uX)(),(0,m.Wv)(x,{key:t},{default:(0,m.k6)((()=>[(0,m.eW)((0,y.v_)({"read:system":"读","write:system":"写","delete:system":"删"}[e]),1)])),_:2},1024)))),128))])),_:1}),(0,m.bF)(W,{align:"center",label:"操作","show-overflow-tooltip":"",width:"200"},{default:(0,m.k6)((({row:n})=>[(0,m.bF)(k,{text:"",type:"primary",onClick:t=>e.handleEdit(n)},{default:(0,m.k6)((()=>t[7]||(t[7]=[(0,m.eW)(" 编辑 ")]))),_:2},1032,["onClick"]),(0,m.bF)(k,{text:"",type:"primary",onClick:t=>e.handleDelete(n)},{default:(0,m.k6)((()=>t[8]||(t[8]=[(0,m.eW)(" 删除 ")]))),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[E,e.listLoading]]),(0,m.bF)(V,{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total,onCurrentChange:e.handleCurrentChange,onSizeChange:e.handleSizeChange},null,8,["current-page","layout","page-size","total","onCurrentChange","onSizeChange"]),(0,m.bF)(A,{ref:"editRef",onFetchData:e.fetchData},null,8,["onFetchData"])])}n(94473),n(55759);var v=n(24929),F=n(39928),k=n(37489),_=(0,m.pM)({name:"RoleManagement",components:{Edit:(0,m.$V)((()=>Promise.all([n.e(4750),n.e(9674),n.e(1351),n.e(1438),n.e(5452),n.e(9154),n.e(4012),n.e(1201),n.e(814),n.e(7612),n.e(2378),n.e(1652),n.e(8714),n.e(7966),n.e(6497),n.e(394),n.e(6087),n.e(3319)]).then(n.bind(n,45575))))},setup(){const e=(0,m.WQ)("$baseConfirm"),t=(0,m.WQ)("$baseMessage"),n=(0,k.Kh)({editRef:null,list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,selectRows:"",queryForm:{pageNo:1,pageSize:10,role:""}}),a=e=>{n.selectRows=e},o=e=>{e.id?n["editRef"].showEdit(e):n["editRef"].showEdit()},l=a=>{if(a.id)e("你确定要删除当前项吗",null,(async()=>{const{msg:e}=await(0,v.pL)({ids:a.id});t(e,"success","vab-hey-message-success"),await i()}));else if(n.selectRows.length>0){const a=n.selectRows.map((e=>e.id)).join();e("你确定要删除选中项吗",null,(async()=>{const{msg:e}=await(0,v.pL)({ids:a});t(e,"success","vab-hey-message-success"),await i()}))}else t("未选中任何行","error","vab-hey-message-error")},r=e=>{n.queryForm.pageSize=e,i()},s=e=>{n.queryForm.pageNo=e,i()},u=()=>{n.queryForm.pageNo=1,i()},i=async()=>{n.listLoading=!0;const{data:{list:e,total:t}}=await(0,v.vS)(n.queryForm);n.list=e,n.total=t,n.listLoading=!1};return(0,m.sV)((()=>{i()})),{...(0,k.QW)(n),setSelectRows:a,handleEdit:o,handleDelete:l,handleSizeChange:r,handleCurrentChange:s,queryData:u,fetchData:i,Delete:F.Delete,Plus:F.Plus,Search:F.Search}}});function w(e){e.__source="src/views/setting/roleManagement/index.vue"}var C=n(48499);"function"===typeof w&&w(_);const S=(0,C.A)(_,[["render",h]]);var R=S}}]);