/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-6-26 09:21:57
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae5ab578"],{a46d:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"userManagement-container"},[t("vab-query-form",[t("vab-query-form-left-panel",{attrs:{span:24}},[t("el-form",{attrs:{inline:!0,model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",[t("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.handleEdit}},[e._v("添加")])],1)],1)],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText}},[t("el-table-column",{attrs:{label:"时间","min-width":"160",prop:"createAt","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(" "+e._s(e.parseTime(t.createAt))+" ")]}}])}),t("el-table-column",{attrs:{label:"围舍",prop:"penHouse","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"温度",prop:"temperature","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"湿度",prop:"humidness","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"通风",prop:"ventilate","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"清粪",prop:"stoolRemoval","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"光照",prop:"illumination","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"消毒",prop:"disinfection","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:"90"},scopedSlots:e._u([{key:"default",fn:function({row:o}){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(o)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDelete(o)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}),t("env-desktop-edit",{ref:"edit",on:{"fetch-data":e.fetchData}})],1)},r=[],a=(o("5384"),o("7736")),l=o("b923"),s=o("ed08"),n=o("b149"),u={name:"Env",components:{EnvDesktopEdit:n["default"]},data(){return{parseTime:s["parseTime"],list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,elementLoadingText:"正在加载...",queryForm:{pageNo:1,pageSize:10},timeOutID:null}},computed:{...Object(a["c"])({device:"settings/device"})},created(){this.fetchData()},beforeDestroy(){clearTimeout(this.timeOutID)},methods:{handleEdit(e){if("mobile"===this.device)return this.$router.push({name:"EnvMobileEdit",params:{...e}});e.code?this.$refs["edit"].showEdit(e):this.$refs["edit"].showEdit()},handleDelete(e){e.code&&this.$baseConfirm("你确定要删除当前项吗",null,async()=>{const{message:t}=await Object(l["API_envDelete"])({code:e.code});this.$baseMessage(t,"success"),this.fetchData()})},handleSizeChange(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange(e){this.queryForm.pageNo=e,this.fetchData()},queryData(){this.queryForm.pageNo=1,this.fetchData()},async fetchData(){this.listLoading=!0;const{data:e}=await Object(l["API_envList"])(this.queryForm);this.list=e.list,this.total=e.count,this.timeOutID=setTimeout(()=>{this.listLoading=!1},300)}}},m=u,c=o("829d"),f=Object(c["a"])(m,i,r,!1,null,null,null);t["default"]=f.exports},b149:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[t("form-edit",{ref:"form",attrs:{"form-data":e.form},on:{"fetch-data":e.fetchData}}),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)},r=[],a=o("d7af"),l={name:"EnvDesktopEdit",components:{FormEdit:a["default"]},data(){return{form:{},title:"",dialogFormVisible:!1}},created(){},methods:{showEdit(e){e?(this.title="编辑",this.form=Object.assign({},e)):this.title="添加",this.dialogFormVisible=!0},close(){this.$refs["form"].close(),this.dialogFormVisible=!1},save(){this.$refs["form"].save()},fetchData(){this.$emit("fetch-data"),this.dialogFormVisible=!1}}},s=l,n=o("829d"),u=Object(n["a"])(s,i,r,!1,null,null,null);t["default"]=u.exports},b923:function(e,t,o){"use strict";o.r(t),o.d(t,"API_envList",(function(){return r})),o.d(t,"API_envCreate",(function(){return a})),o.d(t,"API_envEdit",(function(){return l})),o.d(t,"API_envDelete",(function(){return s})),o.d(t,"API_envGet",(function(){return n}));var i=o("b775");function r(e){return Object(i["default"])({url:"/api/env/list",method:"get",params:e})}function a(e){return Object(i["default"])({url:"/api/env/create",method:"post",data:e})}function l(e){return Object(i["default"])({url:"/api/env/edit/"+e.code,method:"put",data:e})}function s(e){return Object(i["default"])({url:"/api/env/delete/"+e.code,method:"delete"})}function n(e){return Object(i["default"])({url:"/api/env/get",method:"get",params:e})}},d7af:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",attrs:{"label-position":"mobile"===e.device?"top":"right","label-width":"100px",model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"围舍",prop:"penHouse"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入围舍"},model:{value:e.form.penHouse,callback:function(t){e.$set(e.form,"penHouse","string"===typeof t?t.trim():t)},expression:"form.penHouse"}})],1),t("el-form-item",{attrs:{label:"温度",prop:"temperature"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入温度"},model:{value:e.form.temperature,callback:function(t){e.$set(e.form,"temperature","string"===typeof t?t.trim():t)},expression:"form.temperature"}})],1),t("el-form-item",{attrs:{label:"湿度",prop:"humidness"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入湿度"},model:{value:e.form.humidness,callback:function(t){e.$set(e.form,"humidness","string"===typeof t?t.trim():t)},expression:"form.humidness"}})],1),t("el-form-item",{attrs:{label:"通风",prop:"ventilate"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入通风"},model:{value:e.form.ventilate,callback:function(t){e.$set(e.form,"ventilate","string"===typeof t?t.trim():t)},expression:"form.ventilate"}})],1),t("el-form-item",{attrs:{label:"清粪",prop:"stoolRemoval"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入清粪"},model:{value:e.form.stoolRemoval,callback:function(t){e.$set(e.form,"stoolRemoval","string"===typeof t?t.trim():t)},expression:"form.stoolRemoval"}})],1),t("el-form-item",{attrs:{label:"光照",prop:"illumination"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入光照"},model:{value:e.form.illumination,callback:function(t){e.$set(e.form,"illumination","string"===typeof t?t.trim():t)},expression:"form.illumination"}})],1),t("el-form-item",{attrs:{label:"消毒",prop:"disinfection"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入消毒"},model:{value:e.form.disinfection,callback:function(t){e.$set(e.form,"disinfection","string"===typeof t?t.trim():t)},expression:"form.disinfection"}})],1),"mobile"===e.device?t("el-form-item",{staticClass:"submit-content"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1):e._e()],1)},r=[],a=(o("5384"),o("7736")),l=o("b923"),s={name:"FormEdit",props:{formData:{type:Object,default:()=>({})}},data(){return{form:{penHouse:"",temperature:"",humidness:"",ventilate:"",stoolRemoval:"",illumination:"",disinfection:"",remark:""},rules:{penHouse:[{required:!0,trigger:"blur",message:"请输入围舍"}],temperature:[{required:!0,trigger:"blur",message:"请输入温度"}],humidness:[{required:!0,trigger:"blur",message:"请输入湿度"}],ventilate:[{required:!0,trigger:"blur",message:"请输入通风"}],stoolRemoval:[{required:!0,trigger:"blur",message:"请输入清粪"}],illumination:[{required:!0,trigger:"blur",message:"请输入光照"}],disinfection:[{required:!0,trigger:"blur",message:"请输入消毒"}]}}},computed:{...Object(a["c"])({device:"settings/device"})},watch:{formData:{handler(e){e&&(this.form=Object.assign({},this.formData))},immediate:!0}},methods:{close(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,"mobile"===this.device&&this.$router.push({name:"Env",params:{refresh:!0}})},save(){this.$refs["form"].validate(async e=>{if(!e)return!1;if(this.form.code){const{message:e}=await Object(l["API_envEdit"])(this.form);this.$baseMessage(e,"success")}else{const{message:e}=await Object(l["API_envCreate"])(this.form);this.$baseMessage(e,"success")}this.$emit("fetch-data"),this.close()})}}},n=s,u=o("829d"),m=Object(u["a"])(n,i,r,!1,null,null,null);t["default"]=m.exports}}]);