(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["unitconvert-unitConversion"],{a72f:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("l-layout",{staticClass:"l-tab-page"},[i("l-panel",{staticStyle:{padding:"0px"},scopedSlots:t._u([{key:"toolLeft",fn:function(){return[i("div",{staticStyle:{width:"100%",height:"40px"}},[i("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"80px"}},[i("el-row",[i("el-col",{attrs:{span:4}},[i("el-form-item",{attrs:{label:"单位类型:"}},[i("l-select",{attrs:{placeholder:"请选择",options:t.unitTypeOptions},on:{change:t.confirm},model:{value:t.formData.unitTypeId,callback:function(e){t.$set(t.formData,"unitTypeId",e)},expression:"formData.unitTypeId"}})],1)],1),i("el-col",{attrs:{span:4}},[i("el-form-item",{attrs:{label:"保留小数:"}},[i("l-select",{attrs:{placeholder:"请选择",options:t.decimalDigitsOptions},on:{change:t.confirm},model:{value:t.formData.decimalDigits,callback:function(e){t.$set(t.formData,"decimalDigits",e)},expression:"formData.decimalDigits"}})],1)],1)],1)],1)],1)]},proxy:!0},{key:"toolRight",fn:function(){return[i("l-tool-btns",{attrs:{hasAdd:!1}})]},proxy:!0}])},[i("div",{staticClass:"l-rblock",staticStyle:{overflow:"hidden auto",padding:"16px"}},[i("el-row",{attrs:{gutter:16}},t._l(t.unitList,(function(e,n){return i("el-col",{key:n,attrs:{span:12}},[i("el-card",{attrs:{shadow:"never"}},[i("p",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.typeName)+"换算")]),i("el-form",{staticStyle:{padding:"16px 32px 0 32px"}},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:12}},[i("el-form-item",[i("el-input-number",{attrs:{"controls-position":"right",min:0,size:"mini",placeholder:t.$t("请输入")},model:{value:e.fromValue,callback:function(i){t.$set(e,"fromValue",i)},expression:"item.fromValue"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",[i("l-select",{attrs:{valueKey:"f_id",labelKey:"f_name",options:t.getUnitOptions(e)},model:{value:e.from,callback:function(i){t.$set(e,"from",i)},expression:"item.from"}})],1)],1),i("el-col",[i("div",{staticStyle:{"text-align":"center","margin-bottom":"16px","font-size":"24px",color:"#5E95FF"}},[i("i",{staticClass:"learun-icon-down-arrow"})])]),i("el-col",{attrs:{span:12}},[i("el-form-item",[i("el-input",{attrs:{type:"number",value:t.getValue(e),size:"mini",readonly:""}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",[i("l-select",{attrs:{valueKey:"f_id",labelKey:"f_name",options:t.getUnitOptions(e)},model:{value:e.to,callback:function(i){t.$set(e,"to",i)},expression:"item.to"}})],1)],1)],1)],1)],1)],1)})),1)],1)])],1)},l=[],a=(i("4de4"),i("7db0"),i("c740"),i("d81d"),i("b680"),i("159b"),{props:{list:{type:Array,default:function(){return[]}}},data:function(){return{formData:{unitTypeId:"",decimalDigits:0},decimalDigitsOptions:[{value:0,label:"整数"},{value:2,label:"2位小数"},{value:4,label:"4位小数"},{value:6,label:"6位小数"}],unitTypeId:"",decimalDigits:0,concersionFormData:{typing:0,typingUnit:"",output:"",outputUnit:""},DecimalDigitsOptions2:[]}},computed:{unitList:function(){var t=this,e=this.list.filter((function(t){return t.baseUnit&&t.units.length>1&&t.list.length>0}));return this.unitTypeId&&(e=e.filter((function(e){return e.typeId==t.unitTypeId}))),e.forEach((function(e){t.$set(e,"from",""),t.$set(e,"fromValue",void 0),t.$set(e,"to","")})),e},unitTypeOptions:function(){return this.list.filter((function(t){return t.baseUnit&&t.units.length>1&&t.list.length>0})).map((function(t){return{value:t.typeId,label:t.typeName}}))}},methods:{confirm:function(){this.unitTypeId=this.formData.unitTypeId,this.decimalDigits=this.formData.decimalDigits},getUnitOptions:function(t){return console.log(t,"item"),t.units.filter((function(e){return 0==e.f_isstandard||t.list.findIndex((function(t){return t.f_ShiftUnitId==e.f_id}))>-1}))},getValue:function(t){var e,i=t.from,n=t.fromValue,l=t.to;if(i&&n&&l)if(i==l)e=n;else if(i==t.baseUnit.f_id){var a=t.list.find((function(t){return t.f_ShiftUnitId==l}));e=n*a.f_Quantity}else if(l==t.baseUnit.f_id){var o=t.list.find((function(t){return t.f_ShiftUnitId==i}));e=n/o.f_Quantity}else{var r=t.list.find((function(t){return t.f_ShiftUnitId==l})),s=t.list.find((function(t){return t.f_ShiftUnitId==i}));e=n/s.f_Quantity*r.f_Quantity}return void 0==e?e:e.toFixed(this.decimalDigits)}}}),o=a,r=i("2877"),s=Object(r["a"])(o,n,l,!1,null,null,null);e["default"]=s.exports}}]);