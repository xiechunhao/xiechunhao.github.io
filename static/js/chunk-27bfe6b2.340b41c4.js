/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-6-26 09:32:44
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27bfe6b2"],{"00d7":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"mobile-content"},[t("form-edit",{ref:"form",attrs:{"form-data":e.form}})],1)},a=[],s=r("bde4"),i={name:"DictMobileEdit",components:{FormEdit:s["default"]},data(){return{form:{}}},mounted(){const e=this.$route,{params:t}=e;0!==Object.keys(t).length&&(this.form=Object.assign({},t))}},l=i,n=r("829d"),u=Object(n["a"])(l,o,a,!1,null,null,null);t["default"]=u.exports},b705:function(e,t,r){"use strict";r.r(t),r.d(t,"API_dictList",(function(){return a})),r.d(t,"API_dictCreate",(function(){return s})),r.d(t,"API_dictEdit",(function(){return i})),r.d(t,"API_dictDelete",(function(){return l})),r.d(t,"API_dictGet",(function(){return n}));var o=r("b775");function a(e){return Object(o["default"])({url:"/api/dict/list",method:"get",params:e})}function s(e){return Object(o["default"])({url:"/api/dict/create",method:"post",data:e})}function i(e){return Object(o["default"])({url:"/api/dict/edit/"+e.code,method:"put",data:e})}function l(e){return Object(o["default"])({url:"/api/dict/delete/"+e.code,method:"delete"})}function n(e){return Object(o["default"])({url:"/api/dict/get",method:"get",params:e})}},bde4:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",attrs:{"label-position":"mobile"===e.device?"top":"right","label-width":"100px",model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"名称",prop:"name"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"===typeof t?t.trim():t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"Key",prop:"key"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入Key"},model:{value:e.form.key,callback:function(t){e.$set(e.form,"key","string"===typeof t?t.trim():t)},expression:"form.key"}})],1),t("el-form-item",{attrs:{label:"SubKey",prop:"subKey"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入SubKey"},model:{value:e.form.subKey,callback:function(t){e.$set(e.form,"subKey","string"===typeof t?t.trim():t)},expression:"form.subKey"}})],1),t("el-form-item",{attrs:{label:"值",prop:"value"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入值"},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value","string"===typeof t?t.trim():t)},expression:"form.value"}})],1),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入备注",rows:2,type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark","string"===typeof t?t.trim():t)},expression:"form.remark"}})],1),"mobile"===e.device?t("el-form-item",{staticClass:"submit-content"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1):e._e()],1)},a=[],s=(r("5384"),r("7736")),i=r("b705"),l={name:"FormEdit",props:{formData:{type:Object,default:()=>({})}},data(){return{form:{name:"",key:"",subKey:"",value:"",remark:""},rules:{name:[{required:!0,trigger:"blur",message:"请输入名称"}],key:[{required:!0,trigger:"blur",message:"请输入Key"}],subKey:[{required:!0,trigger:"blur",message:"请输入SubKey"}],value:[{required:!0,trigger:"blur",message:"请输入值"}]}}},computed:{...Object(s["c"])({device:"settings/device"})},watch:{formData:{handler(e){e&&(this.form=Object.assign({},this.formData))},immediate:!0}},methods:{close(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,"mobile"===this.device&&this.$router.push({name:"Dict",params:{refresh:!0}})},save(){this.$refs["form"].validate(async e=>{if(!e)return!1;if(this.form.code){const{message:e}=await Object(i["API_dictEdit"])(this.form);this.$baseMessage(e,"success")}else{const{message:e}=await Object(i["API_dictCreate"])(this.form);this.$baseMessage(e,"success")}this.$emit("fetch-data"),this.close()})}}},n=l,u=r("829d"),c=Object(u["a"])(n,o,a,!1,null,null,null);t["default"]=c.exports}}]);