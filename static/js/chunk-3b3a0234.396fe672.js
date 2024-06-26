/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-6-26 09:21:57
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b3a0234"],{"40af":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"userManagement-container"},[t("vab-query-form",[t("vab-query-form-left-panel",{attrs:{span:24}},[t("el-form",{attrs:{inline:!0,model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",[t("el-input",{attrs:{clearable:"",placeholder:"请输入名称"},on:{clear:e.queryData},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.queryData.apply(null,arguments)}},model:{value:e.queryForm.name,callback:function(t){e.$set(e.queryForm,"name","string"===typeof t?t.trim():t)},expression:"queryForm.name"}})],1),t("el-form-item",[t("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.queryData}},[e._v("查询")])],1)],1),t("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.handleEdit}},[e._v("添加")])],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText}},[t("el-table-column",{attrs:{label:"名称",prop:"name","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"种类",prop:"type","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"数量",prop:"num","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"单位",prop:"unit","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"处理方式",prop:"processingMode","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"经办人员",prop:"worker","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"效果",prop:"effect","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:"90"},scopedSlots:e._u([{key:"default",fn:function({row:r}){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDelete(r)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}),t("garbage-desktop-edit",{ref:"edit",on:{"fetch-data":e.fetchData}})],1)},o=[],i=(r("5384"),r("7736")),l=r("71d6"),s=r("f54e"),n={name:"Garbage",components:{GarbageDesktopEdit:s["default"]},data(){return{list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,elementLoadingText:"正在加载...",queryForm:{pageNo:1,pageSize:10,name:""},timeOutID:null}},computed:{...Object(i["c"])({device:"settings/device"})},created(){this.fetchData()},beforeDestroy(){clearTimeout(this.timeOutID)},methods:{handleEdit(e){if("mobile"===this.device)return this.$router.push({name:"GarbageMobileEdit",params:{...e}});e.code?this.$refs["edit"].showEdit(e):this.$refs["edit"].showEdit()},handleDelete(e){e.code&&this.$baseConfirm("你确定要删除当前项吗",null,async()=>{const{message:t}=await Object(l["API_garbageDelete"])({code:e.code});this.$baseMessage(t,"success"),this.fetchData()})},handleSizeChange(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange(e){this.queryForm.pageNo=e,this.fetchData()},queryData(){this.queryForm.pageNo=1,this.fetchData()},async fetchData(){this.listLoading=!0;const{data:e}=await Object(l["API_garbageList"])(this.queryForm);this.list=e.list,this.total=e.count,this.timeOutID=setTimeout(()=>{this.listLoading=!1},300)}}},c=n,u=r("829d"),m=Object(u["a"])(c,a,o,!1,null,null,null);t["default"]=m.exports},"71d6":function(e,t,r){"use strict";r.r(t),r.d(t,"API_garbageList",(function(){return o})),r.d(t,"API_garbageCreate",(function(){return i})),r.d(t,"API_garbageEdit",(function(){return l})),r.d(t,"API_garbageDelete",(function(){return s})),r.d(t,"API_garbageGet",(function(){return n}));var a=r("b775");function o(e){return Object(a["default"])({url:"/api/garbage/list",method:"get",params:e})}function i(e){return Object(a["default"])({url:"/api/garbage/create",method:"post",data:e})}function l(e){return Object(a["default"])({url:"/api/garbage/edit/"+e.code,method:"put",data:e})}function s(e){return Object(a["default"])({url:"/api/garbage/delete/"+e.code,method:"delete"})}function n(e){return Object(a["default"])({url:"/api/garbage/get",method:"get",params:e})}},b583:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",attrs:{"label-position":"mobile"===e.device?"top":"right","label-width":"100px",model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"名称",prop:"name"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"===typeof t?t.trim():t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"种类",prop:"type"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入种类"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type","string"===typeof t?t.trim():t)},expression:"form.type"}})],1),t("el-form-item",{attrs:{label:"数量",prop:"num"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入数量"},model:{value:e.form.num,callback:function(t){e.$set(e.form,"num","string"===typeof t?t.trim():t)},expression:"form.num"}})],1),t("el-form-item",{attrs:{label:"单位",prop:"unit"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入单位"},model:{value:e.form.unit,callback:function(t){e.$set(e.form,"unit","string"===typeof t?t.trim():t)},expression:"form.unit"}})],1),t("el-form-item",{attrs:{label:"处理方式",prop:"processingMode"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入处理方式"},model:{value:e.form.processingMode,callback:function(t){e.$set(e.form,"processingMode","string"===typeof t?t.trim():t)},expression:"form.processingMode"}})],1),t("el-form-item",{attrs:{label:"经办人员",prop:"worker"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入经办人员"},model:{value:e.form.worker,callback:function(t){e.$set(e.form,"worker","string"===typeof t?t.trim():t)},expression:"form.worker"}})],1),t("el-form-item",{attrs:{label:"效果",prop:"effect"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入效果"},model:{value:e.form.effect,callback:function(t){e.$set(e.form,"effect","string"===typeof t?t.trim():t)},expression:"form.effect"}})],1),"mobile"===e.device?t("el-form-item",{staticClass:"submit-content"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1):e._e()],1)},o=[],i=(r("5384"),r("7736")),l=r("71d6"),s={name:"FormEdit",props:{formData:{type:Object,default:()=>({})}},data(){return{form:{name:"",type:"",num:"",unit:"",processingMode:"",worker:"",effect:""},rules:{name:[{required:!0,trigger:"blur",message:"请输入名称"}],type:[{required:!0,trigger:"blur",message:"请输入种类"}],num:[{required:!0,trigger:"blur",message:"请输入数量"}],unit:[{required:!0,trigger:"blur",message:"请输入单位"}],processingMode:[{required:!0,trigger:"blur",message:"请输入处理方式"}]}}},computed:{...Object(i["c"])({device:"settings/device"})},watch:{formData:{handler(e){e&&(this.form=Object.assign({},this.formData))},immediate:!0}},methods:{close(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,"mobile"===this.device&&this.$router.push({name:"Garbage",params:{refresh:!0}})},save(){this.$refs["form"].validate(async e=>{if(!e)return!1;if(this.form.code){const{message:e}=await Object(l["API_garbageEdit"])(this.form);this.$baseMessage(e,"success")}else{const{message:e}=await Object(l["API_garbageCreate"])(this.form);this.$baseMessage(e,"success")}this.$emit("fetch-data"),this.close()})}}},n=s,c=r("829d"),u=Object(c["a"])(n,a,o,!1,null,null,null);t["default"]=u.exports},f54e:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[t("form-edit",{ref:"form",attrs:{"form-data":e.form},on:{"fetch-data":e.fetchData}}),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)},o=[],i=r("b583"),l={name:"GarbageDesktopEdit",components:{FormEdit:i["default"]},data(){return{form:{},title:"",dialogFormVisible:!1}},created(){},methods:{showEdit(e){e?(this.title="编辑",this.form=Object.assign({},e)):this.title="添加",this.dialogFormVisible=!0},close(){this.$refs["form"].close(),this.dialogFormVisible=!1},save(){this.$refs["form"].save()},fetchData(){this.$emit("fetch-data"),this.dialogFormVisible=!1}}},s=l,n=r("829d"),c=Object(n["a"])(s,a,o,!1,null,null,null);t["default"]=c.exports}}]);