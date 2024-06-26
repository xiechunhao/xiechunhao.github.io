/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-6-26 09:35:53
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7870cb10"],{a302:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",attrs:{"label-position":"mobile"===e.device?"top":"right","label-width":"100px",model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"===typeof t?t.trim():t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"入职年龄",prop:"age"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入入职年龄",type:"number"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",e._n(t))},expression:"form.age"}})],1),t("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入手机号",type:"number"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone","string"===typeof t?t.trim():t)},expression:"form.phone"}})],1),t("el-form-item",{attrs:{label:"身份证号码",prop:"idCard"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入身份证号码",type:"number"},model:{value:e.form.idCard,callback:function(t){e.$set(e.form,"idCard","string"===typeof t?t.trim():t)},expression:"form.idCard"}})],1),t("el-form-item",{attrs:{label:"聘用开始时间",prop:"startTime"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择聘用结束时间","value-format":"timestamp"},model:{value:e.form.startTime,callback:function(t){e.$set(e.form,"startTime",t)},expression:"form.startTime"}})],1),t("el-form-item",{attrs:{label:"聘用结束时间",prop:"endTime"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择聘用结束时间","value-format":"timestamp"},model:{value:e.form.endTime,callback:function(t){e.$set(e.form,"endTime",t)},expression:"form.endTime"}})],1),t("el-form-item",{attrs:{label:"实际离职时间",prop:"turnoverTime"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择实际离职时间","value-format":"timestamp"},model:{value:e.form.turnoverTime,callback:function(t){e.$set(e.form,"turnoverTime",t)},expression:"form.turnoverTime"}})],1),t("el-form-item",{attrs:{label:"负责圈舍",prop:"penHouse"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入负责圈舍"},model:{value:e.form.penHouse,callback:function(t){e.$set(e.form,"penHouse","string"===typeof t?t.trim():t)},expression:"form.penHouse"}})],1),t("el-form-item",{attrs:{label:"其他工作",prop:"otherWork"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入其他工作",rows:2,type:"textarea"},model:{value:e.form.otherWork,callback:function(t){e.$set(e.form,"otherWork","string"===typeof t?t.trim():t)},expression:"form.otherWork"}})],1),t("el-form-item",{attrs:{label:"工作表现",prop:"performance"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入工作表现",rows:2,type:"textarea"},model:{value:e.form.performance,callback:function(t){e.$set(e.form,"performance","string"===typeof t?t.trim():t)},expression:"form.performance"}})],1),"mobile"===e.device?t("el-form-item",{staticClass:"submit-content"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1):e._e()],1)},a=[],s=(r("5384"),r("7736")),m=r("c24f"),i={name:"FormEdit",props:{formData:{type:Object,default:()=>({})}},data(){return{form:{name:"",age:"",phone:"",idCard:"",startTime:"",endTime:"",turnoverTime:"",penHouse:"",otherWork:"",performance:"",password:"123456"},rules:{name:[{required:!0,trigger:"blur",message:"请输入姓名"}],phone:[{required:!0,trigger:"blur",message:"请输入手机号"}],idCard:[{required:!0,trigger:"blur",message:"请输入身份证号码"}],startTime:[{required:!0,trigger:"blur",message:"请选择聘用开始时间"}],endTime:[{required:!0,trigger:"blur",message:"请选择聘用结束时间"}]}}},computed:{...Object(s["c"])({device:"settings/device"})},watch:{formData:{handler(e){e&&(this.form=Object.assign({},this.formData))},immediate:!0}},methods:{close(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,"mobile"===this.device&&this.$router.push({name:"User",params:{refresh:!0}})},save(){this.$refs["form"].validate(async e=>{if(!e)return!1;if(this.form.startTime>this.form.endTime)return this.$baseMessage("聘用开始时间不能大于聘用结束时间","error");if(this.form.code){const{message:e}=await Object(m["API_userEdit"])(this.form);this.$baseMessage(e,"success")}else{const{message:e}=await Object(m["API_userCreate"])(this.form);this.$baseMessage(e,"success")}this.$emit("fetch-data"),this.close()})}}},l=i,n=r("829d"),f=Object(n["a"])(l,o,a,!1,null,null,null);t["default"]=f.exports},a79f:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"mobile-content"},[t("form-edit",{ref:"form",attrs:{"form-data":e.form}})],1)},a=[],s=r("a302"),m={name:"UserMobileEdit",components:{FormEdit:s["default"]},data(){return{form:{}}},mounted(){const e=this.$route,{params:t}=e;0!==Object.keys(t).length&&(this.form=Object.assign({},t))}},i=m,l=r("829d"),n=Object(l["a"])(i,o,a,!1,null,null,null);t["default"]=n.exports}}]);