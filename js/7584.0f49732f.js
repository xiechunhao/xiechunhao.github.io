"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[7584],{79191:function(e,t,a){a.d(t,{Pf:function(){return l},bX:function(){return s},q8:function(){return i},wd:function(){return o}});a(88919);var r=a(80462);async function s(e){const t=await r.A.get("/system/dictionary",{params:e});return 0===t.data.code?t.data.data:Promise.reject(new Error(t.data.message))}async function i(e){const t=await r.A.post("/system/dictionary",e);return 0===t.data.code?t.data.message:Promise.reject(new Error(t.data.message))}async function o(e){const t=await r.A.put("/system/dictionary",e);return 0===t.data.code?t.data.message:Promise.reject(new Error(t.data.message))}async function l(e){const t=await r.A.delete("/system/dictionary/"+e);return 0===t.data.code?t.data.message:Promise.reject(new Error(t.data.message))}},47584:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=function(){var e=this,t=e._self._c;return t("ele-modal",{attrs:{width:"460px",visible:e.visible,"close-on-click-modal":!0,title:e.isUpdate?"修改字典":"添加字典"},on:{"update:visible":e.updateVisible}},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"82px"}},[t("el-form-item",{attrs:{label:"字典名称:",prop:"dictName"}},[t("el-input",{attrs:{clearable:"",maxlength:20,placeholder:"请输入字典名称"},model:{value:e.form.dictName,callback:function(t){e.$set(e.form,"dictName",t)},expression:"form.dictName"}})],1),t("el-form-item",{attrs:{label:"字典值:",prop:"dictCode"}},[t("el-input",{attrs:{clearable:"",maxlength:20,placeholder:"请输入字典值"},model:{value:e.form.dictCode,callback:function(t){e.$set(e.form,"dictCode",t)},expression:"form.dictCode"}})],1),t("el-form-item",{attrs:{label:"排序号:",prop:"sortNumber"}},[t("el-input-number",{staticClass:"ele-fluid ele-text-left",attrs:{min:0,max:9999,"controls-position":"right",placeholder:"请输入排序号"},model:{value:e.form.sortNumber,callback:function(t){e.$set(e.form,"sortNumber",t)},expression:"form.sortNumber"}})],1),t("el-form-item",{attrs:{label:"备注:"}},[t("el-input",{attrs:{rows:4,type:"textarea",maxlength:200,placeholder:"请输入备注"},model:{value:e.form.comments,callback:function(t){e.$set(e.form,"comments",t)},expression:"form.comments"}})],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){return e.updateVisible(!1)}}},[e._v("取消")]),t("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e._v(" 保存 ")])],1)],1)},s=[],i=a(79191);const o={dictId:null,dictName:"",dictCode:"",sortNumber:null,comments:""};var l={name:"DictEdit",props:{visible:Boolean,data:Object},data(){return{form:{...o},rules:{dictName:[{required:!0,message:"请输入字典名称",trigger:"blur"}],dictCode:[{required:!0,message:"请输入字典值",trigger:"blur"}],sortNumber:[{required:!0,message:"请输入排序号",trigger:"blur"}]},loading:!1,isUpdate:!1}},methods:{save(){this.$refs["form"].validate((e=>{if(!e)return!1;this.loading=!0;const t=this.isUpdate?i.wd:i.q8;t(this.form).then((e=>{this.loading=!1,this.$message.success(e),this.updateVisible(!1),this.$emit("done")})).catch((e=>{this.loading=!1,this.$message.error(e.message)}))}))},updateVisible(e){this.$emit("update:visible",e)}},watch:{visible(e){e?this.data?(this.$util.assignObject(this.form,this.data),this.isUpdate=!0):this.isUpdate=!1:(this.$refs["form"].clearValidate(),this.form={...o})}}},n=l,d=a(64008),m=(0,d.A)(n,r,s,!1,null,null,null),c=m.exports}}]);