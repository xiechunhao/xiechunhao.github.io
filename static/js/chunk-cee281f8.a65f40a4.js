/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-12 22:48:39
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cee281f8"],{3915:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{"append-to-body":"",title:e.title,visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close},scopedSlots:e._u([{key:"footer",fn:function(){return[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])]},proxy:!0}])},[t("el-form",{ref:"form",attrs:{"label-width":"80px",model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"标题",prop:"title"}},[t("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title","string"===typeof t?t.trim():t)},expression:"form.title"}})],1),t("el-form-item",{attrs:{label:"作者",prop:"author"}},[t("el-input",{model:{value:e.form.author,callback:function(t){e.$set(e.form,"author","string"===typeof t?t.trim():t)},expression:"form.author"}})],1)],1)],1)},s=[],o=l("ad8f"),r={name:"TableEdit",data(){return{form:{title:"",author:""},rules:{title:[{required:!0,trigger:"blur",message:"请输入标题"}],author:[{required:!0,trigger:"blur",message:"请输入作者"}]},title:"",dialogFormVisible:!1}},created(){},methods:{showEdit(e){e?(this.title="编辑",this.form=Object.assign({},e)):this.title="添加",this.dialogFormVisible=!0},close(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,this.dialogFormVisible=!1},save(){this.$refs["form"].validate(async e=>{if(e){const{msg:e}=await Object(o["doEdit"])(this.form);this.$baseMessage(e,"success","vab-hey-message-success"),this.$emit("fetch-data"),this.close()}})}}},i=r,n=l("829d"),c=Object(n["a"])(i,a,s,!1,null,null,null);t["default"]=c.exports},ad8f:function(e,t,l){"use strict";l.r(t),l.d(t,"getList",(function(){return s})),l.d(t,"doEdit",(function(){return o})),l.d(t,"doDelete",(function(){return r}));var a=l("b775");function s(e){return Object(a["default"])({url:"/table/getList",method:"get",params:e})}function o(e){return Object(a["default"])({url:"/table/doEdit",method:"post",data:e})}function r(e){return Object(a["default"])({url:"/table/doDelete",method:"post",data:e})}},bded:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"comprehensive-table-container"},[t("el-alert",{attrs:{closable:!1,"show-icon":"",title:"三级路由【缓存路由、固定表格高度、并根据窗口大小自适应】的示例。详情页请点击操作列按钮，支持tab多开并高亮左侧菜单",type:"success"}}),t("vab-query-form",[t("vab-query-form-top-panel",[t("el-form",{ref:"form",attrs:{inline:!0,"label-width":"49px",model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{attrs:{label:"标题"}},[t("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.queryForm.title,callback:function(t){e.$set(e.queryForm,"title",t)},expression:"queryForm.title"}})],1),t("el-form-item",{attrs:{label:"标题"}},[t("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.queryForm.title,callback:function(t){e.$set(e.queryForm,"title",t)},expression:"queryForm.title"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.fold,expression:"!fold"}],attrs:{label:"标题"}},[t("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.queryForm.title,callback:function(t){e.$set(e.queryForm,"title",t)},expression:"queryForm.title"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.fold,expression:"!fold"}],attrs:{label:"标题"}},[t("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.queryForm.title,callback:function(t){e.$set(e.queryForm,"title",t)},expression:"queryForm.title"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.fold,expression:"!fold"}],attrs:{label:"标题"}},[t("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.queryForm.title,callback:function(t){e.$set(e.queryForm,"title",t)},expression:"queryForm.title"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.fold,expression:"!fold"}],attrs:{label:"标题"}},[t("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.queryForm.title,callback:function(t){e.$set(e.queryForm,"title",t)},expression:"queryForm.title"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.fold,expression:"!fold"}],attrs:{label:"标题"}},[t("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.queryForm.title,callback:function(t){e.$set(e.queryForm,"title",t)},expression:"queryForm.title"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.fold,expression:"!fold"}],attrs:{label:"标题"}},[t("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.queryForm.title,callback:function(t){e.$set(e.queryForm,"title",t)},expression:"queryForm.title"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.fold,expression:"!fold"}],attrs:{label:"标题"}},[t("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.queryForm.title,callback:function(t){e.$set(e.queryForm,"title",t)},expression:"queryForm.title"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.fold,expression:"!fold"}],attrs:{label:"标题"}},[t("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.queryForm.title,callback:function(t){e.$set(e.queryForm,"title",t)},expression:"queryForm.title"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.fold,expression:"!fold"}],attrs:{label:"标题"}},[t("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.queryForm.title,callback:function(t){e.$set(e.queryForm,"title",t)},expression:"queryForm.title"}})],1),t("el-form-item",[t("el-button",{attrs:{icon:"el-icon-search","native-type":"submit",type:"primary"},on:{click:e.handleQuery}},[e._v(" 查询 ")]),t("el-button",{attrs:{type:"text"},on:{click:e.handleFold}},[e.fold?t("span",[e._v("展开")]):t("span",[e._v("合并")]),t("vab-icon",{staticClass:"vab-dropdown",class:{"vab-dropdown-active":e.fold},attrs:{icon:"arrow-up-s-line"}})],1)],1)],1)],1),t("vab-query-form-left-panel",{attrs:{span:24}},[t("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.handleAdd}},[e._v(" 添加 ")]),t("el-button",{attrs:{icon:"el-icon-delete",type:"danger"},on:{click:function(t){return e.handleDelete(t)}}},[e._v(" 删除 ")]),t("el-button",{attrs:{type:"primary"},on:{click:e.handleMessage}},[e._v(" $baseMessage ")]),t("el-button",{attrs:{type:"primary"},on:{click:e.handleAlert}},[e._v("$baseAlert")]),t("el-button",{attrs:{type:"primary"},on:{click:e.handleConfirm}},[e._v(" $baseConfirm ")]),t("el-button",{attrs:{type:"primary"},on:{click:e.handleNotify}},[e._v("$baseNotify")]),t("el-button",{attrs:{icon:"el-icon-info",type:"primary"},on:{click:e.handleDetailStayTable}},[e._v(" 停留在本页后台打开详情页后（不常用） ")]),t("el-badge",{staticClass:"item",attrs:{value:"New"}},[t("el-button",{staticStyle:{margin:"0 0 10px 0 !important"},attrs:{icon:"el-icon-info",type:"primary"},on:{click:e.handleDetail}},[e._v(" 详情页支持tab多开并高亮左侧菜单 ")])],1)],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"tableSort",attrs:{border:"",data:e.list,height:e.height},on:{"selection-change":e.setSelectRows,"sort-change":e.tableSortChange},scopedSlots:e._u([{key:"empty",fn:function(){return[t("el-image",{staticClass:"vab-data-empty",attrs:{src:l("f1f0")}})]},proxy:!0}])},[t("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",type:"selection",width:"55"}}),t("el-table-column",{attrs:{align:"center",label:"序号","show-overflow-tooltip":"",width:"55"},scopedSlots:e._u([{key:"default",fn:function({$index:t}){return[e._v(" "+e._s(t+1)+" ")]}}])}),t("el-table-column",{attrs:{align:"center",label:"标题",prop:"title","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{align:"center",label:"作者",prop:"author","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{align:"center",label:"评级"},scopedSlots:e._u([{key:"default",fn:function({row:l}){return[t("el-rate",{attrs:{disabled:""},model:{value:l.rate,callback:function(t){e.$set(l,"rate",t)},expression:"row.rate"}})]}}])}),t("el-table-column",{attrs:{align:"center",label:"头像"},scopedSlots:e._u([{key:"default",fn:function({row:l}){return[e.imgShow?t("el-image",{attrs:{"preview-src-list":e.imageList,src:l.img}}):e._e()]}}])}),t("el-table-column",{attrs:{align:"center",label:"点击量",prop:"pageViews","show-overflow-tooltip":"",sortable:""}}),t("el-table-column",{attrs:{align:"center",label:"开关",prop:"switch","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:l}){return[t("el-tooltip",{attrs:{content:0===l.switch?"点击开启":"点击关闭",enterable:!1,placement:"top"}},[t("el-switch",{model:{value:l.switch,callback:function(t){e.$set(l,"switch",t)},expression:"row.switch"}})],1)]}}])}),t("el-table-column",{attrs:{align:"center",label:"状态","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:l}){return[t("el-tooltip",{staticClass:"item",attrs:{content:l.status,effect:"dark",placement:"top-start"}},[t("el-tag",{attrs:{type:e._f("statusFilter")(l.status)}},[e._v(" "+e._s(l.status)+" ")])],1)]}}])}),t("el-table-column",{attrs:{align:"center",label:"时间",prop:"datetime","show-overflow-tooltip":"",width:"200"}}),t("el-table-column",{attrs:{align:"center",label:"操作","show-overflow-tooltip":"",width:"130"},scopedSlots:e._u([{key:"default",fn:function({row:l}){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDetail(l)}}},[e._v("详情")]),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(l)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDelete(l)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}),t("table-edit",{ref:"edit",on:{"fetch-data":e.fetchData}})],1)},s=[],o=(l("ca7c"),l("05a0"),l("de68"),l("5614"),l("ad8f")),r=l("7736"),i=l("9f2e"),n=l("3915"),c={name:"ComprehensiveTable",components:{TableEdit:n["default"]},filters:{statusFilter(e){const t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data(){return{fold:!1,height:this.$baseTableHeight(3)-30,imgShow:!0,list:[],imageList:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,selectRows:"",queryForm:{pageNo:1,pageSize:10}}},computed:{...Object(r["c"])({routes:"routes/routes"})},beforeMount(){window.addEventListener("resize",this.handleHeight)},beforeDestroy(){window.removeEventListener("resize",this.handleHeight)},created(){this.fetchData()},methods:{...Object(r["b"])({addVisitedRoute:"tabs/addVisitedRoute",changeTabsMeta:"tabs/changeTabsMeta"}),handleFold(){this.fold=!this.fold,this.handleHeight()},handleHeight(){this.fold?this.height=this.$baseTableHeight(2)-47:this.height=this.$baseTableHeight(3)-30},tableSortChange(){const e=[];this.$refs.tableSort.tableData.forEach(t=>{e.push(t.img)}),this.imageList=e},setSelectRows(e){this.selectRows=e},handleAdd(){this.$refs["edit"].showEdit()},handleEdit(e){this.$refs["edit"].showEdit(e)},handleDelete(e){if(e.id)this.$baseConfirm("你确定要删除当前项吗",null,async()=>{const{msg:t}=await Object(o["doDelete"])({ids:e.id});this.$baseMessage(t,"success","vab-hey-message-success"),await this.fetchData()});else if(this.selectRows.length>0){const e=this.selectRows.map(e=>e.id).join();this.$baseConfirm("你确定要删除选中项吗",null,async()=>{const{msg:t}=await Object(o["doDelete"])({ids:e});this.$baseMessage(t,"success","vab-hey-message-success"),await this.fetchData()})}else this.$baseMessage("未选中任何行","error","vab-hey-message-error")},async handleDetailStayTable(){for(let e=0;e<this.selectRows.length;e++){const t=Object(i["handleMatched"])(this.routes,"Detail"),l=Object(i["handleTabs"])({...t[t.length-1],query:this.selectRows[e]});await this.addVisitedRoute(l),this.changeTabsMeta({title:"详情页",meta:{title:l.query.title+" 详情页"}})}},handleDetail(e){e.id?this.$router.push({path:"/vab/table/detail",query:e}):1===this.selectRows.length?this.$router.push({path:"/vab/table/detail",query:this.selectRows[0]}):this.$baseMessage("请选择一行进行详情页跳转","error","vab-hey-message-error")},handleSizeChange(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange(e){this.queryForm.pageNo=e,this.fetchData()},handleQuery(){this.queryForm.pageNo=1,this.fetchData()},async fetchData(){this.listLoading=!0;const{data:{list:e,total:t}}=await Object(o["getList"])(this.queryForm);this.list=e;const l=[];e.forEach(e=>{l.push(e.img)}),this.imageList=l,this.total=t,this.listLoading=!1},handleMessage(){this.$baseMessage("test1","success","vab-hey-message-success")},handleAlert(){this.$baseAlert("11")},handleConfirm(){this.$baseConfirm("你确定要执行该操作?",null,()=>{},()=>{})},handleNotify(){this.$baseNotify("测试消息提示","test","success","bottom-right")},toggleSelection(e){e?e.forEach(e=>{this.$refs.tableSort.toggleRowSelection(e)}):this.$refs.tableSort.clearSelection()}}},u=c,d=l("829d"),h=Object(d["a"])(u,a,s,!1,null,null,null);t["default"]=h.exports},f1f0:function(e,t,l){e.exports=l.p+"static/img/data_empty.475a2a1e.png"}}]);