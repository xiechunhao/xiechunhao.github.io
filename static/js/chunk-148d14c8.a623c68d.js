/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-6-26 09:35:53
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-148d14c8"],{1001:function(e,t,a){"use strict";a.r(t),a.d(t,"API_feedPlanList",(function(){return o})),a.d(t,"API_feedPlanCreate",(function(){return i})),a.d(t,"API_feedPlanEdit",(function(){return l})),a.d(t,"API_feedPlanDelete",(function(){return s})),a.d(t,"API_feedPlanGet",(function(){return n}));var r=a("b775");function o(e){return Object(r["default"])({url:"/api/feedPlan/list",method:"get",params:e})}function i(e){return Object(r["default"])({url:"/api/feedPlan/create",method:"post",data:e})}function l(e){return Object(r["default"])({url:"/api/feedPlan/edit/"+e.code,method:"put",data:e})}function s(e){return Object(r["default"])({url:"/api/feedPlan/delete/"+e.code,method:"delete"})}function n(e){return Object(r["default"])({url:"/api/feedPlan/get",method:"get",params:e})}},"2e95":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[t("form-edit",{ref:"form",attrs:{"form-data":e.form},on:{"fetch-data":e.fetchData}}),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)},o=[],i=a("7f4a"),l={name:"FeedPlanDesktopEdit",components:{FormEdit:i["default"]},data(){return{form:{},title:"",dialogFormVisible:!1}},created(){},methods:{showEdit(e){e?(this.title="编辑",this.form=Object.assign({},e)):this.title="添加",this.dialogFormVisible=!0},close(){this.$refs["form"].close(),this.dialogFormVisible=!1},save(){this.$refs["form"].save()},fetchData(){this.$emit("fetch-data"),this.dialogFormVisible=!1}}},s=l,n=a("829d"),d=Object(n["a"])(s,r,o,!1,null,null,null);t["default"]=d.exports},"7f4a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",attrs:{"label-position":"mobile"===e.device?"top":"right","label-width":"100px",model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"间隔时间",prop:"intervalTime"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入间隔时间"},model:{value:e.form.intervalTime,callback:function(t){e.$set(e.form,"intervalTime",e._n(t))},expression:"form.intervalTime"}},[t("template",{slot:"append"},[e._v("天")])],2)],1),t("el-form-item",{attrs:{label:"饲料名称",prop:"feedName"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入饲料名称"},model:{value:e.form.feedName,callback:function(t){e.$set(e.form,"feedName","string"===typeof t?t.trim():t)},expression:"form.feedName"}})],1),t("el-form-item",{attrs:{label:"数量",prop:"feedPer"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入数量(单只鸡)"},model:{value:e.form.feedPer,callback:function(t){e.$set(e.form,"feedPer",e._n(t))},expression:"form.feedPer"}})],1),t("el-form-item",{attrs:{label:"批次号",prop:"batchCode"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入批次号"},model:{value:e.form.batchCode,callback:function(t){e.$set(e.form,"batchCode","string"===typeof t?t.trim():t)},expression:"form.batchCode"}})],1),"mobile"===e.device?t("el-form-item",{staticClass:"submit-content"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1):e._e()],1)},o=[],i=(a("5384"),a("7736")),l=a("1001"),s={name:"FormEdit",props:{formData:{type:Object,default:()=>({})}},data(){return{form:{intervalTime:"",batchCode:"",feedName:"",feedPer:"",remark:""},rules:{intervalTime:[{required:!0,trigger:"blur",message:"请输入间隔时间"}],feedName:[{required:!0,trigger:"blur",message:"请输入饲料名称"}],feedPer:[{required:!0,trigger:"blur",message:"请输入数量(单只鸡)"}],batchCode:[{required:!0,trigger:"blur",message:"请输入批次号"}]}}},computed:{...Object(i["c"])({device:"settings/device"})},watch:{formData:{handler(e){e&&(this.form=Object.assign({},this.formData))},immediate:!0}},methods:{close(){if(this.$refs["form"].resetFields(),this.form=this.$options.data().form,"mobile"===this.device)return this.$router.push({name:"FeedPlan",params:{refresh:!0}})},save(){this.$refs["form"].validate(async e=>{if(!e)return!1;if(this.form.code){const{message:e}=await Object(l["API_feedPlanEdit"])(this.form);this.$baseMessage(e,"success")}else{const{message:e}=await Object(l["API_feedPlanCreate"])(this.form);this.$baseMessage(e,"success")}this.$emit("fetch-data"),this.close()})}}},n=s,d=a("829d"),c=Object(d["a"])(n,r,o,!1,null,null,null);t["default"]=c.exports},f158:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"userManagement-container"},[t("vab-query-form",[t("vab-query-form-left-panel",{attrs:{span:24}},[t("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.handleEdit}},[e._v("添加")])],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText}},[t("el-table-column",{attrs:{label:"间隔时间(天)","min-width":"100",prop:"intervalTime","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"饲料名称",prop:"feedName","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"数量(单只鸡)","min-width":"100",prop:"feedPer","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"批次号",prop:"batchCode","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:"90"},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDelete(a)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}),t("feed-plan-desktop-edit",{ref:"edit",on:{"fetch-data":e.fetchData}})],1)},o=[],i=(a("5384"),a("7736")),l=a("1001"),s=a("2e95"),n={name:"FeedPlan",components:{FeedPlanDesktopEdit:s["default"]},data(){return{list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,elementLoadingText:"正在加载...",queryForm:{pageNo:1,pageSize:10},timeOutID:null}},computed:{...Object(i["c"])({device:"settings/device"})},created(){this.fetchData()},mounted(){const e=this.$route,{params:t}=e;t.refresh&&this.fetchData()},beforeDestroy(){clearTimeout(this.timeOutID)},methods:{handleEdit(e){if("mobile"===this.device)return this.$router.push({name:"FeedPlanMobileEdit",params:{...e}});e.code?this.$refs["edit"].showEdit(e):this.$refs["edit"].showEdit()},handleDelete(e){e.code&&this.$baseConfirm("你确定要删除当前项吗",null,async()=>{const{message:t}=await Object(l["API_feedPlanDelete"])({code:e.code});this.$baseMessage(t,"success"),this.fetchData()})},handleSizeChange(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange(e){this.queryForm.pageNo=e,this.fetchData()},queryData(){this.queryForm.pageNo=1,this.fetchData()},async fetchData(){this.listLoading=!0;const{data:e}=await Object(l["API_feedPlanList"])(this.queryForm);this.list=e.list,this.total=e.count,this.timeOutID=setTimeout(()=>{this.listLoading=!1},300)}}},d=n,c=a("829d"),f=Object(c["a"])(d,r,o,!1,null,null,null);t["default"]=f.exports}}]);