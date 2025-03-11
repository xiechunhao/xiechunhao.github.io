/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-12 00:44:12
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4952],{24024:function(e,t,l){l.d(t,{Ed:function(){return o},pL:function(){return i},vS:function(){return n}});var a=l(24380);function n(e){return(0,a.A)({url:"/table/getList",method:"get",params:e})}function o(e){return(0,a.A)({url:"/table/doEdit",method:"post",data:e})}function i(e){return(0,a.A)({url:"/table/doDelete",method:"post",data:e})}},94952:function(e,t,l){l.r(t),l.d(t,{default:function(){return f}});var a=l(34641),n=l(50670),o=l(27386);const i={class:"inline-edit-table-container"},r={key:1};function u(e,t,l,u,d,c){const p=(0,a.g2)("el-alert"),s=(0,a.g2)("el-input"),g=(0,a.g2)("el-form-item"),m=(0,a.g2)("el-button"),b=(0,a.g2)("el-form"),f=(0,a.g2)("vab-query-form-right-panel"),h=(0,a.g2)("vab-query-form"),y=(0,a.g2)("el-table-column"),k=(0,a.g2)("el-empty"),F=(0,a.g2)("el-table"),v=(0,a.g2)("el-pagination"),C=(0,a.gN)("loading");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.bF)(p,{closable:!1,"show-icon":"",title:"三级路由【不缓存路由并且不固定表格高度】的示例",type:"success"}),(0,a.bF)(h,null,{default:(0,a.k6)((()=>[(0,a.bF)(f,{span:24},{default:(0,a.k6)((()=>[(0,a.bF)(b,{inline:"",model:e.queryForm,onSubmit:t[1]||(t[1]=(0,n.D$)((()=>{}),["prevent"]))},{default:(0,a.k6)((()=>[(0,a.bF)(g,null,{default:(0,a.k6)((()=>[(0,a.bF)(s,{modelValue:e.queryForm.title,"onUpdate:modelValue":t[0]||(t[0]=t=>e.queryForm.title=t),placeholder:"标题"},null,8,["modelValue"])])),_:1}),(0,a.bF)(g,null,{default:(0,a.k6)((()=>[(0,a.bF)(m,{icon:e.Search,"native-type":"submit",type:"primary",onClick:e.queryData},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)(" 查询 ")]))),_:1},8,["icon","onClick"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),(0,a.bo)(((0,a.uX)(),(0,a.Wv)(F,{border:"",data:e.list},{empty:(0,a.k6)((()=>[(0,a.bF)(k,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,a.k6)((()=>[(0,a.bF)(y,{align:"center","show-overflow-tooltip":"",type:"selection",width:"55"}),(0,a.bF)(y,{align:"center",label:"序号","show-overflow-tooltip":"",width:"200"},{default:(0,a.k6)((({$index:e})=>[(0,a.eW)((0,o.v_)(e+1),1)])),_:1}),(0,a.bF)(y,{align:"center",label:"标题","min-width":"300px","show-overflow-tooltip":""},{default:(0,a.k6)((({row:l})=>[l.edit?((0,a.uX)(),(0,a.CE)(a.FK,{key:0},[(0,a.bF)(s,{modelValue:l.title,"onUpdate:modelValue":e=>l.title=e,style:{width:"300px"}},null,8,["modelValue","onUpdate:modelValue"]),(0,a.bF)(m,{style:{"margin-left":"10px"},onClick:t=>e.cancelEdit(l)},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)(" 取消 ")]))),_:2},1032,["onClick"])],64)):((0,a.uX)(),(0,a.CE)("span",r,(0,o.v_)(l.title),1))])),_:1}),(0,a.bF)(y,{align:"center",label:"作者",prop:"author","show-overflow-tooltip":""}),(0,a.bF)(y,{align:"center",label:"操作","show-overflow-tooltip":"",width:"150"},{default:(0,a.k6)((({row:l})=>[l.edit?((0,a.uX)(),(0,a.Wv)(m,{key:0,type:"primary",onClick:t=>e.confirmEdit(l)},{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.eW)(" 保存 ")]))),_:2},1032,["onClick"])):((0,a.uX)(),(0,a.Wv)(m,{key:1,onClick:e=>l.edit=!l.edit},{default:(0,a.k6)((()=>t[5]||(t[5]=[(0,a.eW)("编辑")]))),_:2},1032,["onClick"]))])),_:1})])),_:1},8,["data"])),[[C,e.listLoading]]),(0,a.bF)(v,{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total,onCurrentChange:e.handleCurrentChange,onSizeChange:e.handleSizeChange},null,8,["current-page","layout","page-size","total","onCurrentChange","onSizeChange"])])}l(94473),l(55759);var d=l(24024),c=l(39928),p=l(37489),s=(0,a.pM)({name:"InlineEditTable",setup(){const e=(0,p.Kh)({list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,queryForm:{pageNo:1,pageSize:20,title:""}}),t=async()=>{e.listLoading=!0;const{data:{list:t,total:l}}=await(0,d.vS)(e.queryForm);e.list=t.map((e=>(e.edit=!1,e.originalTitle=e.title,e))),e.total=l,e.listLoading=!1},l=l=>{e.queryForm.pageSize=l,t()},n=l=>{e.queryForm.pageNo=l,t()},o=()=>{e.queryForm.pageNo=1,t()},i=e=>{e.title=e.originalTitle,e.edit=!1},r=e=>{e.edit=!1,e.originalTitle=e.title};return(0,a.sV)((()=>{t()})),{...(0,p.QW)(e),handleSizeChange:l,handleCurrentChange:n,queryData:o,cancelEdit:i,confirmEdit:r,Edit:c.Edit,Search:c.Search}}});function g(e){e.__source="src/views/vab/table/inlineEditTable.vue"}var m=l(48499);"function"===typeof g&&g(s);const b=(0,m.A)(s,[["render",u]]);var f=b}}]);