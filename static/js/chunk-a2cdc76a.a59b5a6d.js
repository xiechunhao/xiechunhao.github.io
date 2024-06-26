/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-6-26 09:35:53
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2cdc76a","chunk-22becd5e"],{"03db":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[t("form-edit",{ref:"form",attrs:{"form-data":e.form},on:{"fetch-data":e.fetchData}}),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)},a=[],i=r("e0cb"),l={name:"SurviveDesktopEdit",components:{FormEdit:i["default"]},data(){return{form:{},title:"",dialogFormVisible:!1}},created(){},methods:{showEdit(e){e?(this.title="编辑",this.form=Object.assign({},e)):this.title="添加",this.dialogFormVisible=!0},close(){this.$refs["form"].close(),this.dialogFormVisible=!1},save(){this.$refs["form"].save()},fetchData(){this.$emit("fetch-data"),this.dialogFormVisible=!1}}},n=l,s=r("829d"),u=Object(s["a"])(n,o,a,!1,null,null,null);t["default"]=u.exports},2142:function(e,t,r){"use strict";r.r(t),r.d(t,"API_surviveList",(function(){return a})),r.d(t,"API_surviveCreate",(function(){return i})),r.d(t,"API_surviveEdit",(function(){return l})),r.d(t,"API_surviveDelete",(function(){return n})),r.d(t,"API_surviveGet",(function(){return s}));var o=r("b775");function a(e){return Object(o["default"])({url:"/api/survive/list",method:"get",params:e})}function i(e){return Object(o["default"])({url:"/api/survive/create",method:"post",data:e})}function l(e){return Object(o["default"])({url:"/api/survive/edit/"+e.code,method:"put",data:e})}function n(e){return Object(o["default"])({url:"/api/survive/delete/"+e.code,method:"delete"})}function s(e){return Object(o["default"])({url:"/api/survive/get",method:"get",params:e})}},a26d:function(e,t,r){"use strict";r.r(t),r.d(t,"API_varietyList",(function(){return a})),r.d(t,"API_varietyCreate",(function(){return i})),r.d(t,"API_varietyEdit",(function(){return l})),r.d(t,"API_varietyDelete",(function(){return n})),r.d(t,"API_varietyGet",(function(){return s})),r.d(t,"API_varietyVaccine",(function(){return u})),r.d(t,"API_varietyFeea",(function(){return c})),r.d(t,"API_varietyQuery",(function(){return d}));var o=r("b775");function a(e){return Object(o["default"])({url:"/api/variety/list",method:"get",params:e})}function i(e){return Object(o["default"])({url:"/api/variety/create",method:"post",data:e})}function l(e){return Object(o["default"])({url:"/api/variety/edit/"+e.code,method:"put",data:e})}function n(e){return Object(o["default"])({url:"/api/variety/delete/"+e.code,method:"delete"})}function s(e){return Object(o["default"])({url:"/api/variety/get",method:"get",params:e})}function u(e){return Object(o["default"])({url:"/api/variety/vaccine/"+e.batchCode,method:"get",params:e})}function c(e){return Object(o["default"])({url:"/api/variety/feed/"+e.batchCode,method:"get",params:e})}function d(e){return Object(o["default"])({url:"/api/variety/query",method:"get",params:e})}},b636:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e._self._c;return t("div",[t("el-form-item",{attrs:{label:"选择品种",prop:"select"}},[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.changeVariety}},[e._v("选择品种")])],1),t("el-dialog",{attrs:{"append-to-body":"",title:e.title,visible:e.dialogFormVisible,width:"1000px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[t("vab-query-form",[t("vab-query-form-left-panel",{attrs:{span:12}},[t("el-form",{attrs:{inline:!0,model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",[t("el-input",{attrs:{clearable:"",placeholder:"请输入关键词"},on:{clear:e.queryData},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.queryData.apply(null,arguments)}},model:{value:e.queryForm.Keyword,callback:function(t){e.$set(e.queryForm,"Keyword","string"===typeof t?t.trim():t)},expression:"queryForm.Keyword"}})],1),t("el-form-item",[t("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.queryData}},[e._v("查询")])],1)],1)],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText},on:{"selection-change":e.setSelectRows}},[t("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"selection"}}),t("el-table-column",{attrs:{label:"品种名称",prop:"breed","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"品系名称",prop:"strain","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"批次号",prop:"batchCode","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"数量",prop:"num","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"单位",prop:"unit","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"性别",prop:"sex","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"用途",prop:"use","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"圈舍",prop:"penHouse","show-overflow-tooltip":""}})],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)],1)},a=[],i=r("ed08"),l=r("a26d"),n={name:"VabVariety",data(){return{parseTime:i["parseTime"],list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,elementLoadingText:"正在加载...",queryForm:{Keyword:""},title:"",dialogFormVisible:!1,selectRows:""}},created(){},methods:{setSelectRows(e){this.selectRows=e},changeVariety(){this.title="选择品种",this.dialogFormVisible=!0,this.fetchData()},close(){this.dialogFormVisible=!1},save(){return this.selectRows.length>0?this.selectRows.length>1?this.$baseMessage("只能勾选一行","warning"):(this.dialogFormVisible=!1,void this.$emit("selectData",this.selectRows[0])):(this.$baseMessage("未选中任何行","warning"),!1)},queryData(){this.fetchData()},async fetchData(){this.listLoading=!0;const{data:e}=await Object(l["API_varietyQuery"])(this.queryForm);this.list=e.list,this.total=e.count,this.timeOutID=setTimeout(()=>{this.listLoading=!1},300)}}},s=n,u=r("829d"),c=Object(u["a"])(s,o,a,!1,null,null,null);t["default"]=c.exports},bbca:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"userManagement-container"},[t("vab-query-form",[t("vab-query-form-left-panel",{attrs:{span:24}},[t("el-form",{attrs:{inline:!0,model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",[t("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.handleEdit}},[e._v("添加")])],1)],1)],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText}},[t("el-table-column",{attrs:{label:"日期","min-width":"160",prop:"createAt","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(" "+e._s(e.parseTime(t.createAt))+" ")]}}])}),t("el-table-column",{attrs:{label:"品种名称",prop:"breed","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"品系名称",prop:"strain","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"批次号",prop:"batchCode","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"出雏日期","min-width":"110",prop:"broodingDate","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(" "+e._s(t.broodingDate?e.parseTime(t.broodingDate,"{y}-{m}-{d}"):"-")+" ")]}}])}),t("el-table-column",{attrs:{label:"存活",prop:"survival","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"死亡",prop:"death","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:"90"},scopedSlots:e._u([{key:"default",fn:function({row:r}){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDelete(r)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}),t("survive-desktop-edit",{ref:"edit",on:{"fetch-data":e.fetchData}})],1)},a=[],i=(r("5384"),r("7736")),l=r("2142"),n=r("03db"),s=r("ed08"),u={name:"Survive",components:{SurviveDesktopEdit:n["default"]},data(){return{parseTime:s["parseTime"],list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,elementLoadingText:"正在加载...",queryForm:{pageNo:1,pageSize:10},timeOutID:null}},computed:{...Object(i["c"])({device:"settings/device"})},created(){this.fetchData()},beforeDestroy(){clearTimeout(this.timeOutID)},methods:{handleEdit(e){if("mobile"===this.device)return this.$router.push({name:"SurviveMobileEdit",params:{...e}});e.code?this.$refs["edit"].showEdit(e):this.$refs["edit"].showEdit()},handleDelete(e){e.code&&this.$baseConfirm("你确定要删除当前项吗",null,async()=>{const{message:t}=await Object(l["API_surviveDelete"])({code:e.code});this.$baseMessage(t,"success"),this.fetchData()})},handleSizeChange(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange(e){this.queryForm.pageNo=e,this.fetchData()},queryData(){this.queryForm.pageNo=1,this.fetchData()},async fetchData(){this.listLoading=!0;const{data:e}=await Object(l["API_surviveList"])(this.queryForm);this.list=e.list,this.total=e.count,this.timeOutID=setTimeout(()=>{this.listLoading=!1},300)}}},c=u,d=r("829d"),f=Object(d["a"])(c,o,a,!1,null,null,null);t["default"]=f.exports},e0cb:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",attrs:{"label-position":"mobile"===e.device?"top":"right","label-width":"100px",model:e.form,rules:e.rules}},[t("vab-variety",{on:{selectData:e.selectData}}),t("el-form-item",{attrs:{label:"品种名称",prop:"breed"}},[t("el-input",{attrs:{autocomplete:"off",disabled:!0,placeholder:"请输入品种名称"},model:{value:e.form.breed,callback:function(t){e.$set(e.form,"breed","string"===typeof t?t.trim():t)},expression:"form.breed"}})],1),t("el-form-item",{attrs:{label:"品系名称",prop:"strain"}},[t("el-input",{attrs:{autocomplete:"off",disabled:!0,placeholder:"请输入品系名称"},model:{value:e.form.strain,callback:function(t){e.$set(e.form,"strain","string"===typeof t?t.trim():t)},expression:"form.strain"}})],1),t("el-form-item",{attrs:{label:"批次号",prop:"batchCode"}},[t("el-input",{attrs:{autocomplete:"off",disabled:!0,placeholder:"请输入批次号"},model:{value:e.form.batchCode,callback:function(t){e.$set(e.form,"batchCode","string"===typeof t?t.trim():t)},expression:"form.batchCode"}})],1),t("el-form-item",{attrs:{label:"出雏日期",prop:"broodingDate"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{disabled:!0,placeholder:"请选择出雏日期","value-format":"timestamp"},model:{value:e.form.broodingDate,callback:function(t){e.$set(e.form,"broodingDate",t)},expression:"form.broodingDate"}})],1),t("el-form-item",{attrs:{label:"存活",prop:"survival"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入存活",type:"number"},model:{value:e.form.survival,callback:function(t){e.$set(e.form,"survival",e._n(t))},expression:"form.survival"}})],1),t("el-form-item",{attrs:{label:"死亡",prop:"death"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入死亡",type:"number"},model:{value:e.form.death,callback:function(t){e.$set(e.form,"death",e._n(t))},expression:"form.death"}})],1),"mobile"===e.device?t("el-form-item",{staticClass:"submit-content"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1):e._e()],1)},a=[],i=(r("5384"),r("7736")),l=r("b636"),n=r("2142"),s={name:"FormEdit",components:{VabVariety:l["default"]},props:{formData:{type:Object,default:()=>({})}},data(){return{form:{breed:"",strain:"",batchCode:"",broodingDate:"",survival:"",death:""},rules:{breed:[{required:!0,trigger:"blur",message:"请输入品种名称"}],strain:[{required:!0,trigger:"blur",message:"请输入品系名称"}],batchCode:[{required:!0,trigger:"blur",message:"请输入批次"}],broodingDate:[{required:!0,trigger:"blur",message:"请输入出雏日期"}]}}},computed:{...Object(i["c"])({device:"settings/device"})},watch:{formData:{handler(e){e&&(this.form=Object.assign({},this.formData))},immediate:!0}},methods:{selectData(e){this.form.breed=e.breed,this.form.strain=e.strain,this.form.batchCode=e.batchCode,this.form.broodingDate=e.broodingDate,this.$forceUpdate(),this.$refs["form"].clearValidate()},close(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,"mobile"===this.device&&this.$router.push({name:"Survive",params:{refresh:!0}})},save(){this.$refs["form"].validate(async e=>{if(!e)return!1;if(this.form.code){const{message:e}=await Object(n["API_surviveEdit"])(this.form);this.$baseMessage(e,"success")}else{const{message:e}=await Object(n["API_surviveCreate"])(this.form);this.$baseMessage(e,"success")}this.$emit("fetch-data"),this.close()})}}},u=s,c=r("829d"),d=Object(c["a"])(u,o,a,!1,null,null,null);t["default"]=d.exports},ed08:function(e,t,r){"use strict";r.r(t),r.d(t,"parseTime",(function(){return o})),r.d(t,"formatTime",(function(){return a})),r.d(t,"paramObj",(function(){return i})),r.d(t,"translateDataToTree",(function(){return l})),r.d(t,"translateTreeToData",(function(){return n})),r.d(t,"tenBitTimestamp",(function(){return s})),r.d(t,"thirteenBitTimestamp",(function(){return u})),r.d(t,"uuid",(function(){return c})),r.d(t,"random",(function(){return d})),r.d(t,"on",(function(){return f})),r.d(t,"off",(function(){return m}));r("5384");function o(e,t){if(0===arguments.length)return null;const r=t||"{y}-{m}-{d} {h}:{i}:{s}";let o;"object"===typeof e?o=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),o=new Date(e));const a={y:o.getFullYear(),m:o.getMonth()+1,d:o.getDate(),h:o.getHours(),i:o.getMinutes(),s:o.getSeconds(),a:o.getDay()},i=r.replace(/{(y|m|d|h|i|s|a)+}/g,(e,t)=>{let r=a[t];return"a"===t?["日","一","二","三","四","五","六"][r]:(e.length>0&&r<10&&(r="0"+r),r||0)});return i}function a(e,t){e=10===(""+e).length?1e3*parseInt(e):+e;const r=new Date(e),a=Date.now(),i=(a-r)/1e3;return i<30?"刚刚":i<3600?Math.ceil(i/60)+"分钟前":i<86400?Math.ceil(i/3600)+"小时前":i<172800?"1天前":t?o(e,t):`${r.getMonth()+1}月${r.getDate()}日${r.getHours()}时${r.getMinutes()}分`}function i(e){const t=e.split("?")[1];return t?JSON.parse(`{"${decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"').replace(/\+/g," ")}"}`):{}}function l(e){const t=e.filter(e=>"undefined"===e.parentId||null==e.parentId),r=e.filter(e=>"undefined"!==e.parentId&&null!=e.parentId),o=(e,t)=>{e.forEach(e=>{t.forEach((r,a)=>{if(r.parentId===e.id){const i=JSON.parse(JSON.stringify(t));i.splice(a,1),o([r],i),"undefined"!==typeof e.children?e.children.push(r):e.children=[r]}})})};return o(t,r),t}function n(e){const t=[];return e.forEach(e=>{const r=e=>{t.push({id:e.id,name:e.name,parentId:e.parentId});const o=e.children;if(o)for(let t=0;t<o.length;t++)r(o[t])};r(e)}),t}function s(e){const t=new Date(1e3*e),r=t.getFullYear();let o=t.getMonth()+1;o=o<10?""+o:o;let a=t.getDate();a=a<10?""+a:a;let i=t.getHours();i=i<10?"0"+i:i;let l=t.getMinutes(),n=t.getSeconds();return l=l<10?"0"+l:l,n=n<10?"0"+n:n,`${r}年${o}月${a}日 ${i}:${l}:${n}`}function u(e){const t=new Date(e/1),r=t.getFullYear();let o=t.getMonth()+1;o=o<10?""+o:o;let a=t.getDate();a=a<10?""+a:a;let i=t.getHours();i=i<10?"0"+i:i;let l=t.getMinutes(),n=t.getSeconds();return l=l<10?"0"+l:l,n=n<10?"0"+n:n,`${r}年${o}月${a}日 ${i}:${l}:${n}`}function c(e=32){const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let r="";for(let o=0;o<e;o++)r+=t.charAt(Math.floor(Math.random()*t.length));return r}function d(e,t){return Math.floor(Math.random()*(e-t)+t)}const f=function(){return function(e,t,r,o=!1){e&&t&&r&&e.addEventListener(t,r,o)}}(),m=function(){return function(e,t,r,o=!1){e&&t&&e.removeEventListener(t,r,o)}}()}}]);