(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["unitconvert-config","unitconvert-configForm"],{"1d88":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("l-panel",{staticStyle:{padding:"0"},scopedSlots:t._u([{key:"toolLeft",fn:function(){return[r("div",{staticClass:"l-panel--item"},[r("el-input",{attrs:{placeholder:"输入单位类型",size:"mini"},model:{value:t.searchWord,callback:function(e){t.searchWord=e},expression:"searchWord"}})],1)]},proxy:!0},{key:"toolRight",fn:function(){return[r("l-tool-btns",{attrs:{hasAdd:!1}})]},proxy:!0}])},[r("l-table",{ref:"mainTable",attrs:{columns:t.columns,dataSource:t.tableData},scopedSlots:t._u([{key:"baseUnit",fn:function(e){return[e.row.baseUnit?r("span",[t._v(t._s(e.row.baseUnit.f_name))]):t._e()]}}])},[r("l-table-btns",{attrs:{isAuth:!1,btns:t.tableBtns},on:{click:t.lr_handleTableBtnClick}})],1),r("l-dialog",{attrs:{title:t.$t(t.formTitle),visible:t.formVisible,height:500,width:600},on:{"update:visible":function(e){t.formVisible=e},ok:t.handleSave,close:t.handleCloseForm,opened:t.handleOpenedForm}},[r("config-form",{ref:"form"})],1)],1)},a=[],i=(r("4de4"),r("96cf"),r("1da1")),o=r("acec"),s={components:{ConfigForm:o["default"]},props:{loadData:Function,list:{type:Array,default:function(){return[]}}},data:function(){return{searchWord:"",columns:[{label:"单位类型",prop:"typeName",width:120,align:"left"},{label:"基准单位",prop:"baseUnit",width:120,align:"left"},{label:"换算关系",prop:"converDes",minWidth:200,align:"left"}],tableBtns:[{prop:"Edit",label:"设置"}],formVisible:!1,formTitle:"",formEditRow:null}},computed:{tableData:function(){var t=this;return this.searchWord?this.list.filter((function(e){return e.typeName.indexOf(t.searchWord)>-1})):this.list}},methods:{handleEdit:function(t,e){e.baseUnit&&1!=e.units.length?(this.formTitle=e.typeName,this.formEditRow=e,this.formVisible=!0):this.$message({type:"warning",message:e.baseUnit?this.$t("请去单位列表添加其它单位!"):this.$t("请去单位列表添加基准单位!")})},handleSave:function(t,e){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t("保存数据中..."),n.next=3,r.$refs.form.validateForm();case 3:if(!n.sent){n.next=8;break}return n.next=6,r.$refs.form.saveForm({keyValue:r.formEditRow.converId});case 6:a=n.sent,a&&(r.$message({type:"success",message:r.$t("设置成功")}),r.loadData(),r.formVisible=!1);case 8:e();case 9:case"end":return n.stop()}}),n)})))()},handleCloseForm:function(){this.$refs.form.resetForm()},handleOpenedForm:function(){this.$refs.form.setForm(this.formEditRow)}}},l=s,u=r("2877"),f=Object(u["a"])(l,n,a,!1,null,null,null);e["default"]=f.exports},acec:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.ready?r("div",{staticClass:"l-rblock",staticStyle:{padding:"16px"}},[r("el-form",{ref:"form",attrs:{model:t.formData,rules:t.rules,size:"mini",labelPosition:"right",labelWidth:"80px"}},[r("el-form-item",{attrs:{label:t.$t("单位类型")}},[r("el-input",{attrs:{readonly:"",value:t.row.typeName}})],1),r("el-form-item",{attrs:{label:t.$t("基准单位")}},[r("el-input",{attrs:{readonly:"",value:t.row.baseUnit.f_name}})],1),t._l(t.units,(function(e,n){return r("el-form-item",{key:n,attrs:{prop:e.f_id,label:"1"+t.$t(t.row.baseUnit.f_name)+"="}},[r("el-input",{attrs:{type:"number"},model:{value:t.formData[e.f_id],callback:function(r){t.$set(t.formData,e.f_id,r)},expression:"formData[item.f_id]"}},[r("template",{slot:"append"},[t._v(t._s(e.f_name))])],2)],1)}))],2)],1):t._e()},a=[],i=(r("4de4"),r("7db0"),r("159b"),r("96cf"),r("1da1")),o=window.$api.erpcase.unitconvert,s={data:function(){return{formData:{},rules:{},row:{},ready:!1}},computed:{units:function(){return this.row.units.filter((function(t){return 1==t.f_isstandard}))}},mounted:function(){},methods:{resetForm:function(){this.ready=!1,this.formData={},this.rules={}},validateForm:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$formValidateWraper(t.$refs.form);case 2:if(e.sent){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})))()},setForm:function(t){var e=this;this.row=this.$deepClone(t),this.units.forEach((function(t){var r=e.row.list.find((function(e){return e.f_ShiftUnitId==t.f_id}));r?e.$set(e.formData,t.f_id,r.f_Quantity):e.$set(e.formData,t.f_id,void 0),e.rules[t.f_id]=[{required:!0,message:"请输入"}]})),this.ready=!0},getForm:function(){var t={caseErpUnitconvertEntity:{f_Id:this.row.converId,f_UnitTypeId:this.row.typeId},caseErpUnitconvertdetailList:[]};for(var e in this.formData)t.caseErpUnitconvertdetailList.push({f_UnitConvertId:this.row.converId,f_UnitId:this.row.baseUnit.f_id,f_ShiftUnitId:e,f_Quantity:this.formData[e]});return console.log(t,"postData"),t},saveForm:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=t.keyValue,a=e.getForm(),!n){r.next=8;break}return r.next=5,e.$awaitWraper(o.update(n,a));case 5:return r.abrupt("return",r.sent);case 8:return r.next=10,e.$awaitWraper(o.add(a));case 10:return r.abrupt("return",r.sent);case 11:case"end":return r.stop()}}),r)})))()}}},l=s,u=r("2877"),f=Object(u["a"])(l,n,a,!1,null,null,null);e["default"]=f.exports}}]);