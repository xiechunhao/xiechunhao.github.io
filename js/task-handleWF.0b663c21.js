(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["task-handleWF"],{"0150":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isRead?i("div",[["look","audit","create"].includes(t.type)?i("wf-audit-form",{ref:"form",attrs:{type:"look"==t.type?"look":"audit",isCreateAgain:t.isCreateAgain,params:{taskId:t.taskId},isLoadFormData:!0,isToken:!0,title:t.title,visible:t.visible,isRead:"look"==t.type},on:{"update:visible":function(e){t.visible=e},refresh:function(e){return t.refresh()}}}):i("wf-look-form",{ref:"form",attrs:{type:"lookmy",params:{processId:t.processId},isLoadFormData:!0,title:t.title,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}})],1):t._e()},n=[],o=(i("caad"),{data:function(){return{type:"",callback:null,isCreateAgain:!1,taskId:"",processId:"",visible:!1,title:"",isRead:!1}},computed:{},mounted:function(){},methods:{open:function(t,e){this.isRead=!1,this.callback=e,this.title=t.f_Content,this.isCreateAgain=!1,-1!=t.f_Content.indexOf("【审核】")?this.type="audit":-1!=t.f_Content.indexOf("【查阅】")?this.type="look":-1!=t.f_Content.indexOf("【重新提交】")?(this.type="create",this.isCreateAgain=!0):(this.type="lookmy",this.processId=t.f_ContentId),["look","audit","create"].includes(this.type)&&(this.taskId=t.f_ContentId),this.isRead=!0,this.openWF(0)},openWF:function(t){var e=this;this.$refs.form?(console.log(this.$refs.form,"openWF"),this.$nextTick((function(){e.visible=!0}))):t<100&&setTimeout((function(){t++,e.openWF(t)}),100)},refresh:function(){this.callback&&this.callback()}}}),a=o,l=i("2877"),r=Object(l["a"])(a,s,n,!1,null,null,null);e["default"]=r.exports}}]);