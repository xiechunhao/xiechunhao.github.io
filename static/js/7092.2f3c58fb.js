/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-14 01:23:41
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7092],{24024:function(e,t,n){n.d(t,{Ed:function(){return l},pL:function(){return r},vS:function(){return o}});var a=n(24380);function o(e){return(0,a.A)({url:"/table/getList",method:"get",params:e})}function l(e){return(0,a.A)({url:"/table/doEdit",method:"post",data:e})}function r(e){return(0,a.A)({url:"/table/doDelete",method:"post",data:e})}},42225:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(1956),o=(n(27322),n(14014),n(94577)),l=(n(9573),n(62289)),r=(n(65562),n(78925)),i=(n(35762),n(95489),n(63285)),u=n(50855),d=n(44134),c=(n(92498),n(73120)),s=(n(52539),n(5309),n(46137)),p=(n(30957),n(58335)),f=(n(12873),n(34641)),m=n(50670),b=n(27386);const y={class:"inline-edit-table-container"},g={key:1};function v(e,t,n,v,h,k){const F=p.KR,_=s.WK,C=d.xE,w=c.S2,S=d.US,E=u.A,q=i.A,V=l.o8,W=r.x0,x=l.Up,z=o.aQ,A=a.L;return(0,f.uX)(),(0,f.CE)("div",y,[(0,f.bF)(F,{closable:!1,"show-icon":"",title:"三级路由【不缓存路由并且不固定表格高度】的示例",type:"success"}),(0,f.bF)(q,null,{default:(0,f.k6)((()=>[(0,f.bF)(E,{span:24},{default:(0,f.k6)((()=>[(0,f.bF)(S,{inline:"",model:e.queryForm,onSubmit:t[1]||(t[1]=(0,m.D$)((()=>{}),["prevent"]))},{default:(0,f.k6)((()=>[(0,f.bF)(C,null,{default:(0,f.k6)((()=>[(0,f.bF)(_,{modelValue:e.queryForm.title,"onUpdate:modelValue":t[0]||(t[0]=t=>e.queryForm.title=t),placeholder:"标题"},null,8,["modelValue"])])),_:1}),(0,f.bF)(C,null,{default:(0,f.k6)((()=>[(0,f.bF)(w,{icon:e.Search,"native-type":"submit",type:"primary",onClick:e.queryData},{default:(0,f.k6)((()=>t[2]||(t[2]=[(0,f.eW)(" 查询 ")]))),_:1},8,["icon","onClick"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),(0,f.bo)(((0,f.uX)(),(0,f.Wv)(x,{border:"",data:e.list},{empty:(0,f.k6)((()=>[(0,f.bF)(W,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,f.k6)((()=>[(0,f.bF)(V,{align:"center","show-overflow-tooltip":"",type:"selection",width:"55"}),(0,f.bF)(V,{align:"center",label:"序号","show-overflow-tooltip":"",width:"200"},{default:(0,f.k6)((({$index:e})=>[(0,f.eW)((0,b.v_)(e+1),1)])),_:1}),(0,f.bF)(V,{align:"center",label:"标题","min-width":"300px","show-overflow-tooltip":""},{default:(0,f.k6)((({row:n})=>[n.edit?((0,f.uX)(),(0,f.CE)(f.FK,{key:0},[(0,f.bF)(_,{modelValue:n.title,"onUpdate:modelValue":e=>n.title=e,style:{width:"300px"}},null,8,["modelValue","onUpdate:modelValue"]),(0,f.bF)(w,{style:{"margin-left":"10px"},onClick:t=>e.cancelEdit(n)},{default:(0,f.k6)((()=>t[3]||(t[3]=[(0,f.eW)(" 取消 ")]))),_:2},1032,["onClick"])],64)):((0,f.uX)(),(0,f.CE)("span",g,(0,b.v_)(n.title),1))])),_:1}),(0,f.bF)(V,{align:"center",label:"作者",prop:"author","show-overflow-tooltip":""}),(0,f.bF)(V,{align:"center",label:"操作","show-overflow-tooltip":"",width:"150"},{default:(0,f.k6)((({row:n})=>[n.edit?((0,f.uX)(),(0,f.Wv)(w,{key:0,type:"primary",onClick:t=>e.confirmEdit(n)},{default:(0,f.k6)((()=>t[4]||(t[4]=[(0,f.eW)(" 保存 ")]))),_:2},1032,["onClick"])):((0,f.uX)(),(0,f.Wv)(w,{key:1,onClick:e=>n.edit=!n.edit},{default:(0,f.k6)((()=>t[5]||(t[5]=[(0,f.eW)("编辑")]))),_:2},1032,["onClick"]))])),_:1})])),_:1},8,["data"])),[[A,e.listLoading]]),(0,f.bF)(z,{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total,onCurrentChange:e.handleCurrentChange,onSizeChange:e.handleSizeChange},null,8,["current-page","layout","page-size","total","onCurrentChange","onSizeChange"])])}n(94473),n(55759);var h=n(24024),k=n(39928),F=n(37489),_=(0,f.pM)({name:"InlineEditTable",setup(){const e=(0,F.Kh)({list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,queryForm:{pageNo:1,pageSize:20,title:""}}),t=async()=>{e.listLoading=!0;const{data:{list:t,total:n}}=await(0,h.vS)(e.queryForm);e.list=t.map((e=>(e.edit=!1,e.originalTitle=e.title,e))),e.total=n,e.listLoading=!1},n=n=>{e.queryForm.pageSize=n,t()},a=n=>{e.queryForm.pageNo=n,t()},o=()=>{e.queryForm.pageNo=1,t()},l=e=>{e.title=e.originalTitle,e.edit=!1},r=e=>{e.edit=!1,e.originalTitle=e.title};return(0,f.sV)((()=>{t()})),{...(0,F.QW)(e),handleSizeChange:n,handleCurrentChange:a,queryData:o,cancelEdit:l,confirmEdit:r,Edit:k.Edit,Search:k.Search}}});function C(e){e.__source="src/views/vab/table/inlineEditTable.vue"}var w=n(48499);"function"===typeof C&&C(_);const S=(0,w.A)(_,[["render",v]]);var E=S},50855:function(e,t,n){n.d(t,{A:function(){return d}});var a=n(30853),o=(n(27322),n(39585),n(34641));const l={class:"right-panel"};var r=(0,o.pM)({__name:"VabQueryFormRightPanel",props:{span:{type:Number,default:10}},setup(e){return(t,n)=>{const r=a.uD;return(0,o.uX)(),(0,o.Wv)(r,{lg:e.span,md:24,sm:24,xl:e.span,xs:24},{default:(0,o.k6)((()=>[(0,o.Lk)("div",l,[(0,o.RG)(t.$slots,"default")])])),_:3},8,["lg","xl"])}}});function i(e){e.__source="library/components/VabQueryForm/components/VabQueryFormRightPanel.vue"}"function"===typeof i&&i(r);const u=r;var d=u},63285:function(e,t,n){n.d(t,{A:function(){return c}});var a=n(76004),o=(n(27322),n(49120),n(34641));function l(e,t){const n=a.S2;return(0,o.uX)(),(0,o.Wv)(n,{class:"vab-query-form",gutter:0},{default:(0,o.k6)((()=>[(0,o.RG)(e.$slots,"default",{},void 0,!0)])),_:3})}function r(e){e.__source="library/components/VabQueryForm/index.vue"}var i=n(48499);const u={};"function"===typeof r&&r(u);const d=(0,i.A)(u,[["render",l],["__scopeId","data-v-172989c8"]]);var c=d}}]);