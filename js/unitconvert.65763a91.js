(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["unitconvert","unitconvert-config","unitconvert-configForm","unitconvert-unitConversion"],{"1d88":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("l-panel",{staticStyle:{padding:"0"},scopedSlots:t._u([{key:"toolLeft",fn:function(){return[n("div",{staticClass:"l-panel--item"},[n("el-input",{attrs:{placeholder:"输入单位类型",size:"mini"},model:{value:t.searchWord,callback:function(e){t.searchWord=e},expression:"searchWord"}})],1)]},proxy:!0},{key:"toolRight",fn:function(){return[n("l-tool-btns",{attrs:{hasAdd:!1}})]},proxy:!0}])},[n("l-table",{ref:"mainTable",attrs:{columns:t.columns,dataSource:t.tableData},scopedSlots:t._u([{key:"baseUnit",fn:function(e){return[e.row.baseUnit?n("span",[t._v(t._s(e.row.baseUnit.f_name))]):t._e()]}}])},[n("l-table-btns",{attrs:{isAuth:!1,btns:t.tableBtns},on:{click:t.lr_handleTableBtnClick}})],1),n("l-dialog",{attrs:{title:t.$t(t.formTitle),visible:t.formVisible,height:500,width:600},on:{"update:visible":function(e){t.formVisible=e},ok:t.handleSave,close:t.handleCloseForm,opened:t.handleOpenedForm}},[n("config-form",{ref:"form"})],1)],1)},a=[],r=(n("4de4"),n("96cf"),n("1da1")),o=n("acec"),s={components:{ConfigForm:o["default"]},props:{loadData:Function,list:{type:Array,default:function(){return[]}}},data:function(){return{searchWord:"",columns:[{label:"单位类型",prop:"typeName",width:120,align:"left"},{label:"基准单位",prop:"baseUnit",width:120,align:"left"},{label:"换算关系",prop:"converDes",minWidth:200,align:"left"}],tableBtns:[{prop:"Edit",label:"设置"}],formVisible:!1,formTitle:"",formEditRow:null}},computed:{tableData:function(){var t=this;return this.searchWord?this.list.filter((function(e){return e.typeName.indexOf(t.searchWord)>-1})):this.list}},methods:{handleEdit:function(t,e){e.baseUnit&&1!=e.units.length?(this.formTitle=e.typeName,this.formEditRow=e,this.formVisible=!0):this.$message({type:"warning",message:e.baseUnit?this.$t("请去单位列表添加其它单位!"):this.$t("请去单位列表添加基准单位!")})},handleSave:function(t,e){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t("保存数据中..."),i.next=3,n.$refs.form.validateForm();case 3:if(!i.sent){i.next=8;break}return i.next=6,n.$refs.form.saveForm({keyValue:n.formEditRow.converId});case 6:a=i.sent,a&&(n.$message({type:"success",message:n.$t("设置成功")}),n.loadData(),n.formVisible=!1);case 8:e();case 9:case"end":return i.stop()}}),i)})))()},handleCloseForm:function(){this.$refs.form.resetForm()},handleOpenedForm:function(){this.$refs.form.setForm(this.formEditRow)}}},l=s,u=n("2877"),f=Object(u["a"])(l,i,a,!1,null,null,null);e["default"]=f.exports},"6c1b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"l-tab-page",staticStyle:{padding:"8px"}},[n("div",{staticClass:"l-auto-window h48",staticStyle:{"background-color":"#fff"}},[n("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"单位换算",name:"first"}},[t.ready?n("unitConversion",{attrs:{list:t.list}}):t._e()],1),n("el-tab-pane",{attrs:{label:"单位换算配置",name:"second"}},[t.ready?n("unitConversionConfiguration",{attrs:{loadData:t.loadData,list:t.list}}):t._e()],1)],1)],1)])},a=[],r=(n("99af"),n("4de4"),n("7db0"),n("159b"),n("96cf"),n("1da1")),o=n("a72f"),s=n("1d88"),l=window.$api.erpcase.unitconvert,u=window.$api.erpcase.unittype,f={components:{unitConversion:o["default"],unitConversionConfiguration:s["default"]},data:function(){return{activeName:"first",list:[],ready:!1}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,i,a,r,o,s,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.ready=!1,e.next=3,t.lr_loadDataSourceData("ERP_Unit",!1);case 3:return n=(t.lr_dataSourceData["ERP_Unit"]||[]).filter((function(t){return 0==t.f_state})),i={},n.forEach((function(t){i[t.f_id]=t.f_name})),e.next=8,t.$awaitWraper(u.getList({f_State:0}));case 8:return a=e.sent,e.next=11,t.$awaitWraper(l.getList());case 11:return r=e.sent,e.next=14,t.$awaitWraper(l.getDetails());case 14:o=e.sent,s=[],f={},a.forEach((function(t){var e={typeId:t.f_Id,typeName:t.f_Name,list:[]};e.units=n.filter((function(e){return e.f_unittypeid==t.f_Id})),e.units.length>0&&(e.baseUnit=e.units.find((function(t){return 0==t.f_isstandard}))),s.push(e),f[e.typeId]=e})),r.forEach((function(t){var e=f[t.f_UnitTypeId];if(e){e.converId=t.f_Id,e.list=o.filter((function(e){return e.f_UnitConvertId==t.f_Id&&i[e.f_UnitId]&&i[e.f_ShiftUnitId]}));var n=[];e.list.forEach((function(t){n.push("1".concat(i[t.f_UnitId],"=").concat(t.f_Quantity).concat(i[t.f_ShiftUnitId]))})),e.converDes=String(n)}})),t.list=s,t.ready=!0;case 21:case"end":return e.stop()}}),e)})))()}}},c=f,d=n("2877"),m=Object(d["a"])(c,i,a,!1,null,null,null);e["default"]=m.exports},a72f:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("l-layout",{staticClass:"l-tab-page"},[n("l-panel",{staticStyle:{padding:"0px"},scopedSlots:t._u([{key:"toolLeft",fn:function(){return[n("div",{staticStyle:{width:"100%",height:"40px"}},[n("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"80px"}},[n("el-row",[n("el-col",{attrs:{span:4}},[n("el-form-item",{attrs:{label:"单位类型:"}},[n("l-select",{attrs:{placeholder:"请选择",options:t.unitTypeOptions},on:{change:t.confirm},model:{value:t.formData.unitTypeId,callback:function(e){t.$set(t.formData,"unitTypeId",e)},expression:"formData.unitTypeId"}})],1)],1),n("el-col",{attrs:{span:4}},[n("el-form-item",{attrs:{label:"保留小数:"}},[n("l-select",{attrs:{placeholder:"请选择",options:t.decimalDigitsOptions},on:{change:t.confirm},model:{value:t.formData.decimalDigits,callback:function(e){t.$set(t.formData,"decimalDigits",e)},expression:"formData.decimalDigits"}})],1)],1)],1)],1)],1)]},proxy:!0},{key:"toolRight",fn:function(){return[n("l-tool-btns",{attrs:{hasAdd:!1}})]},proxy:!0}])},[n("div",{staticClass:"l-rblock",staticStyle:{overflow:"hidden auto",padding:"16px"}},[n("el-row",{attrs:{gutter:16}},t._l(t.unitList,(function(e,i){return n("el-col",{key:i,attrs:{span:12}},[n("el-card",{attrs:{shadow:"never"}},[n("p",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.typeName)+"换算")]),n("el-form",{staticStyle:{padding:"16px 32px 0 32px"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-form-item",[n("el-input-number",{attrs:{"controls-position":"right",min:0,size:"mini",placeholder:t.$t("请输入")},model:{value:e.fromValue,callback:function(n){t.$set(e,"fromValue",n)},expression:"item.fromValue"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",[n("l-select",{attrs:{valueKey:"f_id",labelKey:"f_name",options:t.getUnitOptions(e)},model:{value:e.from,callback:function(n){t.$set(e,"from",n)},expression:"item.from"}})],1)],1),n("el-col",[n("div",{staticStyle:{"text-align":"center","margin-bottom":"16px","font-size":"24px",color:"#5E95FF"}},[n("i",{staticClass:"learun-icon-down-arrow"})])]),n("el-col",{attrs:{span:12}},[n("el-form-item",[n("el-input",{attrs:{type:"number",value:t.getValue(e),size:"mini",readonly:""}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",[n("l-select",{attrs:{valueKey:"f_id",labelKey:"f_name",options:t.getUnitOptions(e)},model:{value:e.to,callback:function(n){t.$set(e,"to",n)},expression:"item.to"}})],1)],1)],1)],1)],1)],1)})),1)],1)])],1)},a=[],r=(n("4de4"),n("7db0"),n("c740"),n("d81d"),n("b680"),n("159b"),{props:{list:{type:Array,default:function(){return[]}}},data:function(){return{formData:{unitTypeId:"",decimalDigits:0},decimalDigitsOptions:[{value:0,label:"整数"},{value:2,label:"2位小数"},{value:4,label:"4位小数"},{value:6,label:"6位小数"}],unitTypeId:"",decimalDigits:0,concersionFormData:{typing:0,typingUnit:"",output:"",outputUnit:""},DecimalDigitsOptions2:[]}},computed:{unitList:function(){var t=this,e=this.list.filter((function(t){return t.baseUnit&&t.units.length>1&&t.list.length>0}));return this.unitTypeId&&(e=e.filter((function(e){return e.typeId==t.unitTypeId}))),e.forEach((function(e){t.$set(e,"from",""),t.$set(e,"fromValue",void 0),t.$set(e,"to","")})),e},unitTypeOptions:function(){return this.list.filter((function(t){return t.baseUnit&&t.units.length>1&&t.list.length>0})).map((function(t){return{value:t.typeId,label:t.typeName}}))}},methods:{confirm:function(){this.unitTypeId=this.formData.unitTypeId,this.decimalDigits=this.formData.decimalDigits},getUnitOptions:function(t){return console.log(t,"item"),t.units.filter((function(e){return 0==e.f_isstandard||t.list.findIndex((function(t){return t.f_ShiftUnitId==e.f_id}))>-1}))},getValue:function(t){var e,n=t.from,i=t.fromValue,a=t.to;if(n&&i&&a)if(n==a)e=i;else if(n==t.baseUnit.f_id){var r=t.list.find((function(t){return t.f_ShiftUnitId==a}));e=i*r.f_Quantity}else if(a==t.baseUnit.f_id){var o=t.list.find((function(t){return t.f_ShiftUnitId==n}));e=i/o.f_Quantity}else{var s=t.list.find((function(t){return t.f_ShiftUnitId==a})),l=t.list.find((function(t){return t.f_ShiftUnitId==n}));e=i/l.f_Quantity*s.f_Quantity}return void 0==e?e:e.toFixed(this.decimalDigits)}}}),o=r,s=n("2877"),l=Object(s["a"])(o,i,a,!1,null,null,null);e["default"]=l.exports},acec:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.ready?n("div",{staticClass:"l-rblock",staticStyle:{padding:"16px"}},[n("el-form",{ref:"form",attrs:{model:t.formData,rules:t.rules,size:"mini",labelPosition:"right",labelWidth:"80px"}},[n("el-form-item",{attrs:{label:t.$t("单位类型")}},[n("el-input",{attrs:{readonly:"",value:t.row.typeName}})],1),n("el-form-item",{attrs:{label:t.$t("基准单位")}},[n("el-input",{attrs:{readonly:"",value:t.row.baseUnit.f_name}})],1),t._l(t.units,(function(e,i){return n("el-form-item",{key:i,attrs:{prop:e.f_id,label:"1"+t.$t(t.row.baseUnit.f_name)+"="}},[n("el-input",{attrs:{type:"number"},model:{value:t.formData[e.f_id],callback:function(n){t.$set(t.formData,e.f_id,n)},expression:"formData[item.f_id]"}},[n("template",{slot:"append"},[t._v(t._s(e.f_name))])],2)],1)}))],2)],1):t._e()},a=[],r=(n("4de4"),n("7db0"),n("159b"),n("96cf"),n("1da1")),o=window.$api.erpcase.unitconvert,s={data:function(){return{formData:{},rules:{},row:{},ready:!1}},computed:{units:function(){return this.row.units.filter((function(t){return 1==t.f_isstandard}))}},mounted:function(){},methods:{resetForm:function(){this.ready=!1,this.formData={},this.rules={}},validateForm:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$formValidateWraper(t.$refs.form);case 2:if(e.sent){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})))()},setForm:function(t){var e=this;this.row=this.$deepClone(t),this.units.forEach((function(t){var n=e.row.list.find((function(e){return e.f_ShiftUnitId==t.f_id}));n?e.$set(e.formData,t.f_id,n.f_Quantity):e.$set(e.formData,t.f_id,void 0),e.rules[t.f_id]=[{required:!0,message:"请输入"}]})),this.ready=!0},getForm:function(){var t={caseErpUnitconvertEntity:{f_Id:this.row.converId,f_UnitTypeId:this.row.typeId},caseErpUnitconvertdetailList:[]};for(var e in this.formData)t.caseErpUnitconvertdetailList.push({f_UnitConvertId:this.row.converId,f_UnitId:this.row.baseUnit.f_id,f_ShiftUnitId:e,f_Quantity:this.formData[e]});return console.log(t,"postData"),t},saveForm:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=t.keyValue,a=e.getForm(),!i){n.next=8;break}return n.next=5,e.$awaitWraper(o.update(i,a));case 5:return n.abrupt("return",n.sent);case 8:return n.next=10,e.$awaitWraper(o.add(a));case 10:return n.abrupt("return",n.sent);case 11:case"end":return n.stop()}}),n)})))()}}},l=s,u=n("2877"),f=Object(u["a"])(l,i,a,!1,null,null,null);e["default"]=f.exports}}]);