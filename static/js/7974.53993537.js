/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-12 00:28:56
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7974],{77974:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var o=a(34641);function l(e,t,a,l,n,r){const u=(0,o.g2)("el-input"),m=(0,o.g2)("el-form-item"),d=(0,o.g2)("el-button"),i=(0,o.g2)("el-form");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(i,{"label-width":"80px",model:e.formData},{default:(0,o.k6)((()=>[(0,o.bF)(m,{label:"名称"},{default:(0,o.k6)((()=>[(0,o.bF)(u,{modelValue:e.formData.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.formData.name=t)},null,8,["modelValue"])])),_:1}),(0,o.bF)(m,{label:"活动区域"},{default:(0,o.k6)((()=>[(0,o.bF)(u,{modelValue:e.formData.region,"onUpdate:modelValue":t[1]||(t[1]=t=>e.formData.region=t)},null,8,["modelValue"])])),_:1}),(0,o.bF)(m,{label:"活动形式"},{default:(0,o.k6)((()=>[(0,o.bF)(u,{modelValue:e.formData.type,"onUpdate:modelValue":t[2]||(t[2]=t=>e.formData.type=t)},null,8,["modelValue"])])),_:1}),(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.bF)(d,{type:"primary",onClick:e.onSubmit},{default:(0,o.k6)((()=>t[3]||(t[3]=[(0,o.eW)("保存")]))),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])}var n=(0,o.pM)({props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object||String,default:()=>{}}},emits:["onClose"],data(){return{formData:{name:"",region:"",type:""}}},mounted(){const{properties:e}=this.$props.nodeData;e&&(this.$data.formData=Object.assign({},this.$data.formData,e))},methods:{onSubmit(){console.log("submit!");const{id:e}=this.$props.nodeData;this.$props.lf.setProperties(e,this.$data.formData),this.$emit("onClose")}}});function r(e){e.__source="src/views/other/workflow/components/propertySetting/CommonProperty.vue"}var u=a(48499);"function"===typeof r&&r(n);const m=(0,u.A)(n,[["render",l]]);var d=m}}]);