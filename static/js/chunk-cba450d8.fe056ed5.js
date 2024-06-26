/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-6-26 09:35:53
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cba450d8"],{"371d":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[t("form-edit",{ref:"form",attrs:{"form-data":e.form},on:{"fetch-data":e.fetchData}}),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)},o=[],i=r("a9d2"),n={name:"RepairDesktopEdit",components:{FormEdit:i["default"]},data(){return{form:{},title:"",dialogFormVisible:!1}},created(){},methods:{showEdit(e){e?(this.title="编辑",this.form=Object.assign({},e)):this.title="添加",this.dialogFormVisible=!0},close(){this.$refs["form"].close(),this.dialogFormVisible=!1},save(){this.$refs["form"].save()},fetchData(){this.$emit("fetch-data"),this.dialogFormVisible=!1}}},l=n,s=r("829d"),c=Object(s["a"])(l,a,o,!1,null,null,null);t["default"]=c.exports},a9d2:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",attrs:{"label-position":"mobile"===e.device?"top":"right","label-width":"120px",model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"项目名称",prop:"name"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入项目名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"===typeof t?t.trim():t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"金额(万元)",prop:"price"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入金额(万元)",type:"number"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price","string"===typeof t?t.trim():t)},expression:"form.price"}})],1),t("el-form-item",{attrs:{label:"开始时间",prop:"startTime"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"开始时间","value-format":"timestamp"},model:{value:e.form.startTime,callback:function(t){e.$set(e.form,"startTime",t)},expression:"form.startTime"}})],1),t("el-form-item",{attrs:{label:"结束时间",prop:"endTime"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择验收日期","value-format":"timestamp"},model:{value:e.form.endTime,callback:function(t){e.$set(e.form,"endTime",t)},expression:"form.endTime"}})],1),t("el-form-item",{attrs:{label:"施工人员/单位",prop:"acceptanceWorker"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入施工人员/单位"},model:{value:e.form.acceptanceWorker,callback:function(t){e.$set(e.form,"acceptanceWorker","string"===typeof t?t.trim():t)},expression:"form.acceptanceWorker"}})],1),t("el-form-item",{attrs:{label:"验收日期",prop:"acceptanceTime"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择验收日期","value-format":"timestamp"},model:{value:e.form.acceptanceTime,callback:function(t){e.$set(e.form,"acceptanceTime",t)},expression:"form.acceptanceTime"}})],1),t("el-form-item",{attrs:{label:"验收人员",prop:"worker"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入验收人员"},model:{value:e.form.worker,callback:function(t){e.$set(e.form,"worker","string"===typeof t?t.trim():t)},expression:"form.worker"}})],1),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入备注",rows:2,type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark","string"===typeof t?t.trim():t)},expression:"form.remark"}})],1),"mobile"===e.device?t("el-form-item",{staticClass:"submit-content"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1):e._e()],1)},o=[],i=(r("5384"),r("7736")),n=r("c3be"),l={name:"FormEdit",props:{formData:{type:Object,default:()=>({})}},data(){return{form:{name:"",price:"",acceptanceWorker:"",acceptanceTime:"",startTime:"",endTime:"",worker:"",remark:""},rules:{name:[{required:!0,trigger:"blur",message:"请输入项目名称"}],price:[{required:!0,trigger:"blur",message:"请输入金额(万元)"}],startTime:[{required:!0,trigger:"blur",message:"请输入开始时间"}],endTime:[{required:!0,trigger:"blur",message:"请输入结束时间"}],acceptanceWorker:[{required:!0,trigger:"blur",message:"请输入施工人员/单位"}],acceptanceTime:[{required:!0,trigger:"blur",message:"请输入验收日期"}],worker:[{required:!0,trigger:"blur",message:"请输入验收人员"}]}}},computed:{...Object(i["c"])({device:"settings/device"})},watch:{formData:{handler(e){e&&(this.form=Object.assign({},this.formData))},immediate:!0}},methods:{close(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,"mobile"===this.device&&this.$router.push({name:"Repair",params:{refresh:!0}})},save(){this.$refs["form"].validate(async e=>{if(!e)return!1;if(this.form.startTime>this.form.endTime)return this.$baseMessage("开始时间不能大于结束时间","error");if(this.form.code){const{message:e}=await Object(n["API_repairEdit"])(this.form);this.$baseMessage(e,"success")}else{const{message:e}=await Object(n["API_repairCreate"])(this.form);this.$baseMessage(e,"success")}this.$emit("fetch-data"),this.close()})}}},s=l,c=r("829d"),u=Object(c["a"])(s,a,o,!1,null,null,null);t["default"]=u.exports},c3be:function(e,t,r){"use strict";r.r(t),r.d(t,"API_repairList",(function(){return o})),r.d(t,"API_repairCreate",(function(){return i})),r.d(t,"API_repairEdit",(function(){return n})),r.d(t,"API_repairDelete",(function(){return l})),r.d(t,"API_repairGet",(function(){return s}));var a=r("b775");function o(e){return Object(a["default"])({url:"/api/repair/list",method:"get",params:e})}function i(e){return Object(a["default"])({url:"/api/repair/create",method:"post",data:e})}function n(e){return Object(a["default"])({url:"/api/repair/edit/"+e.code,method:"put",data:e})}function l(e){return Object(a["default"])({url:"/api/repair/delete/"+e.code,method:"delete"})}function s(e){return Object(a["default"])({url:"/api/repair/get",method:"get",params:e})}},ed08:function(e,t,r){"use strict";r.r(t),r.d(t,"parseTime",(function(){return a})),r.d(t,"formatTime",(function(){return o})),r.d(t,"paramObj",(function(){return i})),r.d(t,"translateDataToTree",(function(){return n})),r.d(t,"translateTreeToData",(function(){return l})),r.d(t,"tenBitTimestamp",(function(){return s})),r.d(t,"thirteenBitTimestamp",(function(){return c})),r.d(t,"uuid",(function(){return u})),r.d(t,"random",(function(){return m})),r.d(t,"on",(function(){return d})),r.d(t,"off",(function(){return f}));r("5384");function a(e,t){if(0===arguments.length)return null;const r=t||"{y}-{m}-{d} {h}:{i}:{s}";let a;"object"===typeof e?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));const o={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},i=r.replace(/{(y|m|d|h|i|s|a)+}/g,(e,t)=>{let r=o[t];return"a"===t?["日","一","二","三","四","五","六"][r]:(e.length>0&&r<10&&(r="0"+r),r||0)});return i}function o(e,t){e=10===(""+e).length?1e3*parseInt(e):+e;const r=new Date(e),o=Date.now(),i=(o-r)/1e3;return i<30?"刚刚":i<3600?Math.ceil(i/60)+"分钟前":i<86400?Math.ceil(i/3600)+"小时前":i<172800?"1天前":t?a(e,t):`${r.getMonth()+1}月${r.getDate()}日${r.getHours()}时${r.getMinutes()}分`}function i(e){const t=e.split("?")[1];return t?JSON.parse(`{"${decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"').replace(/\+/g," ")}"}`):{}}function n(e){const t=e.filter(e=>"undefined"===e.parentId||null==e.parentId),r=e.filter(e=>"undefined"!==e.parentId&&null!=e.parentId),a=(e,t)=>{e.forEach(e=>{t.forEach((r,o)=>{if(r.parentId===e.id){const i=JSON.parse(JSON.stringify(t));i.splice(o,1),a([r],i),"undefined"!==typeof e.children?e.children.push(r):e.children=[r]}})})};return a(t,r),t}function l(e){const t=[];return e.forEach(e=>{const r=e=>{t.push({id:e.id,name:e.name,parentId:e.parentId});const a=e.children;if(a)for(let t=0;t<a.length;t++)r(a[t])};r(e)}),t}function s(e){const t=new Date(1e3*e),r=t.getFullYear();let a=t.getMonth()+1;a=a<10?""+a:a;let o=t.getDate();o=o<10?""+o:o;let i=t.getHours();i=i<10?"0"+i:i;let n=t.getMinutes(),l=t.getSeconds();return n=n<10?"0"+n:n,l=l<10?"0"+l:l,`${r}年${a}月${o}日 ${i}:${n}:${l}`}function c(e){const t=new Date(e/1),r=t.getFullYear();let a=t.getMonth()+1;a=a<10?""+a:a;let o=t.getDate();o=o<10?""+o:o;let i=t.getHours();i=i<10?"0"+i:i;let n=t.getMinutes(),l=t.getSeconds();return n=n<10?"0"+n:n,l=l<10?"0"+l:l,`${r}年${a}月${o}日 ${i}:${n}:${l}`}function u(e=32){const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let r="";for(let a=0;a<e;a++)r+=t.charAt(Math.floor(Math.random()*t.length));return r}function m(e,t){return Math.floor(Math.random()*(e-t)+t)}const d=function(){return function(e,t,r,a=!1){e&&t&&r&&e.addEventListener(t,r,a)}}(),f=function(){return function(e,t,r,a=!1){e&&t&&e.removeEventListener(t,r,a)}}()},ed62:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"userManagement-container"},[t("vab-query-form",[t("vab-query-form-left-panel",{attrs:{span:24}},[t("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.handleEdit}},[e._v("添加")])],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText}},[t("el-table-column",{attrs:{label:"项目名称",prop:"name","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"金额(万元)","min-width":"100",prop:"price","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"开始时间","min-width":"100",prop:"startTime","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(" "+e._s(t.startTime?e.parseTime(t.startTime,"{y}-{m}-{d}"):"-")+" ")]}}])}),t("el-table-column",{attrs:{label:"结束时间","min-width":"100",prop:"endTime","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(" "+e._s(t.endTime?e.parseTime(t.endTime,"{y}-{m}-{d}"):"-")+" ")]}}])}),t("el-table-column",{attrs:{label:"施工人员/单位","min-width":"120",prop:"acceptanceWorker","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"验收日期","min-width":"100",prop:"acceptanceTime","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(" "+e._s(t.acceptanceTime?e.parseTime(t.acceptanceTime,"{y}-{m}-{d}"):"-")+" ")]}}])}),t("el-table-column",{attrs:{label:"验收人员",prop:"worker","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"备注",prop:"remark","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:"90"},scopedSlots:e._u([{key:"default",fn:function({row:r}){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDelete(r)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}),t("repair-desktop-edit",{ref:"edit",on:{"fetch-data":e.fetchData}})],1)},o=[],i=(r("5384"),r("7736")),n=r("c3be"),l=r("371d"),s=r("ed08"),c={name:"Repair",components:{RepairDesktopEdit:l["default"]},data(){return{parseTime:s["parseTime"],list:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,elementLoadingText:"正在加载...",queryForm:{pageNo:1,pageSize:10},timeOutID:null}},computed:{...Object(i["c"])({device:"settings/device"})},created(){this.fetchData()},beforeDestroy(){clearTimeout(this.timeOutID)},methods:{handleEdit(e){if("mobile"===this.device)return this.$router.push({name:"RepairMobileEdit",params:{...e}});e.code?this.$refs["edit"].showEdit(e):this.$refs["edit"].showEdit()},handleDelete(e){e.code&&this.$baseConfirm("你确定要删除当前项吗",null,async()=>{const{message:t}=await Object(n["API_repairDelete"])({code:e.code});this.$baseMessage(t,"success"),this.fetchData()})},handleSizeChange(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange(e){this.queryForm.pageNo=e,this.fetchData()},queryData(){this.queryForm.pageNo=1,this.fetchData()},async fetchData(){this.listLoading=!0;const{data:e}=await Object(n["API_repairList"])(this.queryForm);this.list=e.list,this.total=e.count,this.timeOutID=setTimeout(()=>{this.listLoading=!1},300)}}},u=c,m=r("829d"),d=Object(m["a"])(u,a,o,!1,null,null,null);t["default"]=d.exports}}]);