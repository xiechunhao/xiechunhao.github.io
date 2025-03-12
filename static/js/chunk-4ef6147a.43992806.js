/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-13 02:33:52
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ef6147a"],{"436e":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"comprehensive-form-container"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{lg:{span:12,offset:6},md:{span:20,offset:2},sm:{span:20,offset:2},xl:{span:12,offset:6},xs:24}},[t("vab-query-form",[t("vab-query-form-left-panel",[t("el-radio-group",{model:{value:e.labelPosition,callback:function(t){e.labelPosition=t},expression:"labelPosition"}},[t("el-radio-button",{attrs:{label:"left"}},[e._v("左对齐")]),t("el-radio-button",{attrs:{label:"right"}},[e._v("右对齐")]),t("el-radio-button",{attrs:{label:"top"}},[e._v("顶部对齐")])],1)],1)],1),t("el-form",{ref:"form",staticClass:"demo-form",attrs:{"label-position":e.labelPosition,"label-width":"100px",model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t("el-form-item",{attrs:{label:"活动时间",prop:"date"}},[t("el-date-picker",{attrs:{placeholder:"选择日期时间",type:"datetime"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),t("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[t("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),t("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[t("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[t("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),t("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),t("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),t("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),t("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[t("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[t("el-radio",{attrs:{label:"线上品牌商赞助"}}),t("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),t("el-form-item",{attrs:{label:"活动形式",prop:"description"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),t("el-form-item",{attrs:{label:"评星"}},[t("el-rate",{attrs:{"show-text":""},model:{value:e.form.rate,callback:function(t){e.$set(e.form,"rate",t)},expression:"form.rate"}})],1),t("el-form-item",{attrs:{label:"行政区划"}},[t("el-cascader",{attrs:{clearable:"",filterable:"",options:e.areaOptions,props:{label:"name",value:"code"}},model:{value:e.form.area,callback:function(t){e.$set(e.form,"area",t)},expression:"form.area"}})],1),t("el-form-item",{attrs:{label:"穿梭框"}},[t("el-transfer",{attrs:{data:e.data,"filter-method":e.filterMethod,"filter-placeholder":"请输入城市拼音",filterable:""},model:{value:e.form.transfer,callback:function(t){e.$set(e.form,"transfer",t)},expression:"form.transfer"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v(" 立即创建 ")]),t("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重置")])],1)],1)],1)],1)],1)},o=[],l=(r("ca7c"),r("599c")),s={name:"ComprehensiveForm",data(){const e=()=>{const e=[],t=["上海","北京","广州"],r=["shanghai","beijing","guangzhou"];return t.forEach((t,a)=>{e.push({label:t,key:a,pinyin:r[a]})}),e};return{labelPosition:"right",form:{name:"",region:"",date:"",date2:"",delivery:!1,type:[],resource:"",description:"",rate:0,area:[],transfer:[]},areaOptions:[],rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],description:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},data:e(),filterMethod(e,t){return t.pinyin.indexOf(e)>-1}}},created(){this.fetchData()},methods:{async fetchData(){const{data:{list:e}}=await Object(l["getList"])();this.areaOptions=e},submitForm(e){this.$refs[e].validate(e=>{e?alert("submit!"):console.log("error submit!!")})},resetForm(e){this.$refs[e].resetFields()}}},i=s,n=(r("f053"),r("829d")),c=Object(n["a"])(i,a,o,!1,null,"f0ea5f0e",null);t["default"]=c.exports},"599c":function(e,t,r){"use strict";r.r(t),r.d(t,"getList",(function(){return o})),r.d(t,"doEdit",(function(){return l})),r.d(t,"doDelete",(function(){return s}));var a=r("b775");function o(e){return Object(a["default"])({url:"/area/getList",method:"get",params:e})}function l(e){return Object(a["default"])({url:"/area/doEdit",method:"post",data:e})}function s(e){return Object(a["default"])({url:"/area/doDelete",method:"post",data:e})}},d2ec:function(e,t,r){},f053:function(e,t,r){"use strict";r("d2ec")}}]);