/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-11 23:13:38
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[894],{10894:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var o=a(44134),l=(a(27322),a(92498),a(73120)),n=(a(52539),a(5309),a(46137)),r=(a(30957),a(34641));function u(e,t,a,u,d,m){const s=n.WK,i=o.xE,p=l.S2,f=o.US;return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(f,{"label-width":"80px",model:e.formData},{default:(0,r.k6)((()=>[(0,r.bF)(i,{label:"名称"},{default:(0,r.k6)((()=>[(0,r.bF)(s,{modelValue:e.formData.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.formData.name=t)},null,8,["modelValue"])])),_:1}),(0,r.bF)(i,{label:"活动区域"},{default:(0,r.k6)((()=>[(0,r.bF)(s,{modelValue:e.formData.region,"onUpdate:modelValue":t[1]||(t[1]=t=>e.formData.region=t)},null,8,["modelValue"])])),_:1}),(0,r.bF)(i,{label:"活动形式"},{default:(0,r.k6)((()=>[(0,r.bF)(s,{modelValue:e.formData.type,"onUpdate:modelValue":t[2]||(t[2]=t=>e.formData.type=t)},null,8,["modelValue"])])),_:1}),(0,r.bF)(i,null,{default:(0,r.k6)((()=>[(0,r.bF)(p,{type:"primary",onClick:e.onSubmit},{default:(0,r.k6)((()=>t[3]||(t[3]=[(0,r.eW)("保存")]))),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])}var d=(0,r.pM)({props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object||String,default:()=>{}}},emits:["onClose"],data(){return{formData:{name:"",region:"",type:""}}},mounted(){const{properties:e}=this.$props.nodeData;e&&(this.$data.formData=Object.assign({},this.$data.formData,e))},methods:{onSubmit(){console.log("submit!");const{id:e}=this.$props.nodeData;this.$props.lf.setProperties(e,this.$data.formData),this.$emit("onClose")}}});function m(e){e.__source="src/views/other/workflow/components/propertySetting/CommonProperty.vue"}var s=a(48499);"function"===typeof m&&m(d);const i=(0,s.A)(d,[["render",u]]);var p=i}}]);