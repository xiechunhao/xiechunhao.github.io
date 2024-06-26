/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-6-26 09:21:57
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c15b6106","chunk-2d207b95"],{"20c0":function(e,t,r){"use strict";r.r(t),r.d(t,"API_feedList",(function(){return a})),r.d(t,"API_feedCreate",(function(){return l})),r.d(t,"API_feedEdit",(function(){return i})),r.d(t,"API_feedDelete",(function(){return s})),r.d(t,"API_feedGet",(function(){return n}));var o=r("b775");function a(e){return Object(o["default"])({url:"/api/feed/list",method:"get",params:e})}function l(e){return Object(o["default"])({url:"/api/feed/create",method:"post",data:e})}function i(e){return Object(o["default"])({url:"/api/feed/edit/"+e.code,method:"put",data:e})}function s(e){return Object(o["default"])({url:"/api/feed/delete/"+e.code,method:"delete"})}function n(e){return Object(o["default"])({url:"/api/feed/get",method:"get",params:e})}},a26d:function(e,t,r){"use strict";r.r(t),r.d(t,"API_varietyList",(function(){return a})),r.d(t,"API_varietyCreate",(function(){return l})),r.d(t,"API_varietyEdit",(function(){return i})),r.d(t,"API_varietyDelete",(function(){return s})),r.d(t,"API_varietyGet",(function(){return n})),r.d(t,"API_varietyVaccine",(function(){return u})),r.d(t,"API_varietyFeea",(function(){return m})),r.d(t,"API_varietyQuery",(function(){return c}));var o=r("b775");function a(e){return Object(o["default"])({url:"/api/variety/list",method:"get",params:e})}function l(e){return Object(o["default"])({url:"/api/variety/create",method:"post",data:e})}function i(e){return Object(o["default"])({url:"/api/variety/edit/"+e.code,method:"put",data:e})}function s(e){return Object(o["default"])({url:"/api/variety/delete/"+e.code,method:"delete"})}function n(e){return Object(o["default"])({url:"/api/variety/get",method:"get",params:e})}function u(e){return Object(o["default"])({url:"/api/variety/vaccine/"+e.batchCode,method:"get",params:e})}function m(e){return Object(o["default"])({url:"/api/variety/feed/"+e.batchCode,method:"get",params:e})}function c(e){return Object(o["default"])({url:"/api/variety/query",method:"get",params:e})}},b636:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e._self._c;return t("div",[t("el-form-item",{attrs:{label:"选择品种",prop:"select"}},[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.changeVariety}},[e._v("选择品种")])],1),t("el-dialog",{attrs:{"append-to-body":"",title:e.title,visible:e.dialogFormVisible,width:"1000px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[t("vab-query-form",[t("vab-query-form-left-panel",{attrs:{span:12}},[t("el-form",{attrs:{inline:!0,model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",[t("el-input",{attrs:{clearable:"",placeholder:"请输入关键词"},on:{clear:e.queryData},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.queryData.apply(null,arguments)}},model:{value:e.queryForm.Keyword,callback:function(t){e.$set(e.queryForm,"Keyword","string"===typeof t?t.trim():t)},expression:"queryForm.Keyword"}})],1),t("el-form-item",[t("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.queryData}},[e._v("查询")])],1)],1)],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText},on:{"selection-change":e.setSelectRows}},[t("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"selection"}}),t("el-table-column",{attrs:{label:"品种名称",prop:"breed","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"品系名称",prop:"strain","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"批次号",prop:"batchCode","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"数量",prop:"num","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"单位",prop:"unit","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"性别",prop:"sex","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"用途",prop:"use","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"圈舍",prop:"penHouse","show-overflow-tooltip":""}})],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)],1)},a=[],l=r("ed08"),i=r("a26d"),s={name:"VabVariety",data(){return{parseTime:l["parseTime"],list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,elementLoadingText:"正在加载...",queryForm:{Keyword:""},title:"",dialogFormVisible:!1,selectRows:""}},created(){},methods:{setSelectRows(e){this.selectRows=e},changeVariety(){this.title="选择品种",this.dialogFormVisible=!0,this.fetchData()},close(){this.dialogFormVisible=!1},save(){return this.selectRows.length>0?this.selectRows.length>1?this.$baseMessage("只能勾选一行","warning"):(this.dialogFormVisible=!1,void this.$emit("selectData",this.selectRows[0])):(this.$baseMessage("未选中任何行","warning"),!1)},queryData(){this.fetchData()},async fetchData(){this.listLoading=!0;const{data:e}=await Object(i["API_varietyQuery"])(this.queryForm);this.list=e.list,this.total=e.count,this.timeOutID=setTimeout(()=>{this.listLoading=!1},300)}}},n=s,u=r("829d"),m=Object(u["a"])(n,o,a,!1,null,null,null);t["default"]=m.exports},bd23:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"mobile-content"},[t("form-edit",{ref:"form",attrs:{"form-data":e.form}})],1)},a=[],l=r("c02d"),i={name:"FeedMobileEdit",components:{FormEdit:l["default"]},data(){return{form:{}}},mounted(){const e=this.$route,{params:t}=e;0!==Object.keys(t).length&&(this.form=Object.assign({},t))}},s=i,n=r("829d"),u=Object(n["a"])(s,o,a,!1,null,null,null);t["default"]=u.exports},c02d:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",attrs:{"label-position":"mobile"===e.device?"top":"right","label-width":"100px",model:e.form,rules:e.rules}},[t("vab-variety",{on:{selectData:e.selectData}}),t("el-form-item",{attrs:{label:"品种名称",prop:"breed"}},[t("el-input",{attrs:{autocomplete:"off",disabled:!0,placeholder:"请输入品种名称"},model:{value:e.form.breed,callback:function(t){e.$set(e.form,"breed","string"===typeof t?t.trim():t)},expression:"form.breed"}})],1),t("el-form-item",{attrs:{label:"品系名称",prop:"strain"}},[t("el-input",{attrs:{autocomplete:"off",disabled:!0,placeholder:"请输入品系名称"},model:{value:e.form.strain,callback:function(t){e.$set(e.form,"strain","string"===typeof t?t.trim():t)},expression:"form.strain"}})],1),t("el-form-item",{attrs:{label:"批次号",prop:"batchCode"}},[t("el-input",{attrs:{autocomplete:"off",disabled:!0,placeholder:"请输入批次号"},model:{value:e.form.batchCode,callback:function(t){e.$set(e.form,"batchCode","string"===typeof t?t.trim():t)},expression:"form.batchCode"}})],1),t("el-form-item",{attrs:{label:"出雏日期",prop:"broodingDate"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{disabled:!0,placeholder:"请选择出雏日期","value-format":"timestamp"},model:{value:e.form.broodingDate,callback:function(t){e.$set(e.form,"broodingDate",t)},expression:"form.broodingDate"}})],1),t("el-form-item",{attrs:{label:"品种数量",prop:"breedNum"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入品种数量",type:"number"},model:{value:e.form.breedNum,callback:function(t){e.$set(e.form,"breedNum",e._n(t))},expression:"form.breedNum"}},[t("template",{slot:"append"},[e._v("只")])],2)],1),t("el-form-item",{attrs:{label:"圈舍",prop:"penHouse"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入圈舍"},model:{value:e.form.penHouse,callback:function(t){e.$set(e.form,"penHouse","string"===typeof t?t.trim():t)},expression:"form.penHouse"}})],1),t("el-form-item",{attrs:{label:"水",prop:"water"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入水"},model:{value:e.form.water,callback:function(t){e.$set(e.form,"water","string"===typeof t?t.trim():t)},expression:"form.water"}})],1),t("el-form-item",{attrs:{label:"饲料名称",prop:"feedName"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入饲料名称"},model:{value:e.form.feedName,callback:function(t){e.$set(e.form,"feedName","string"===typeof t?t.trim():t)},expression:"form.feedName"}})],1),t("el-form-item",{attrs:{label:"换料日期",prop:"changeTime"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择换料日期","value-format":"timestamp"},model:{value:e.form.changeTime,callback:function(t){e.$set(e.form,"changeTime",t)},expression:"form.changeTime"}})],1),t("el-form-item",{attrs:{label:"每只喂养",prop:"perFeed"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入每只喂养",type:"number"},model:{value:e.form.perFeed,callback:function(t){e.$set(e.form,"perFeed","string"===typeof t?t.trim():t)},expression:"form.perFeed"}},[t("template",{slot:"append"},[e._v("G")])],2)],1),t("el-form-item",{attrs:{label:"换料数量",prop:"num"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入换料数量",type:"number"},model:{value:e.form.num,callback:function(t){e.$set(e.form,"num","string"===typeof t?t.trim():t)},expression:"form.num"}})],1),t("el-form-item",{attrs:{label:"单位",prop:"unit"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入单位"},model:{value:e.form.unit,callback:function(t){e.$set(e.form,"unit","string"===typeof t?t.trim():t)},expression:"form.unit"}})],1),"mobile"===e.device?t("el-form-item",{staticClass:"submit-content"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1):e._e()],1)},a=[],l=(r("5384"),r("7736")),i=r("20c0"),s=r("b636"),n={name:"FormEdit",components:{VabVariety:s["default"]},props:{formData:{type:Object,default:()=>({})}},data(){return{form:{breed:"",strain:"",batchCode:"",broodingDate:"",breedNum:"",penHouse:"",water:"",feedName:"",changeTime:"",perFeed:"",num:"",unit:""},rules:{breed:[{required:!0,trigger:"blur",message:"请输入品种名称"}],strain:[{required:!0,trigger:"blur",message:"请输入品系名称"}],batchCode:[{required:!0,trigger:"blur",message:"请输入批次号"}],broodingDate:[{required:!0,trigger:"blur",message:"请选择出雏日期"}],breedNum:[{required:!0,trigger:"blur",message:"品种数量(只)"}],penHouse:[{required:!0,trigger:"blur",message:"请输入圈舍"}],injectionTime:[{required:!0,trigger:"blur",message:"请选择疫苗注释日期"}],feedName:[{required:!0,trigger:"blur",message:"请输入疫苗名称"}]}}},computed:{...Object(l["c"])({device:"settings/device"})},watch:{formData:{handler(e){e&&(this.form=Object.assign({},this.formData))},immediate:!0}},methods:{selectData(e){this.form.breed=e.breed,this.form.strain=e.strain,this.form.batchCode=e.batchCode,this.form.broodingDate=e.broodingDate,this.$forceUpdate(),this.$refs["form"].clearValidate()},close(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,"mobile"===this.device&&this.$router.push({name:"Feed",params:{refresh:!0}})},save(){this.$refs["form"].validate(async e=>{if(!e)return!1;if(this.form.code){const{message:e}=await Object(i["API_feedEdit"])(this.form);this.$baseMessage(e,"success")}else{const{message:e}=await Object(i["API_feedCreate"])(this.form);this.$baseMessage(e,"success")}this.$emit("fetch-data"),this.close()})}}},u=n,m=r("829d"),c=Object(m["a"])(u,o,a,!1,null,null,null);t["default"]=c.exports}}]);