(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-mapping-index"],{"97f2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.lr_loadPage?e._e():a("l-layout",{staticClass:"l-tab-page"},[a("l-panel",{scopedSlots:e._u([{key:"toolLeft",fn:function(){return[a("div",{staticClass:"l-panel--item"},[a("el-input",{attrs:{placeholder:e.$t("请输入"),size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.hanleSearch.apply(null,arguments)}},model:{value:e.searchWord,callback:function(t){e.searchWord=t},expression:"searchWord"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.hanleSearch},slot:"append"})],1)],1)]},proxy:!0},{key:"toolRight",fn:function(){return[a("l-tool-btns",{on:{click:function(t){return e.handleAdd()}}},[a("l-excel-btns")],1)]},proxy:!0}],null,!1,3818443734)},[a("l-table",{attrs:{loading:e.tableLoading,columns:e.columns,dataSource:e.tableData,"row-key":e.mainType.f_Code,isPage:!0,pageTotal:e.tableTotal,tablePage:e.tableCurrentPage},on:{"update:tablePage":function(t){e.tableCurrentPage=t},"update:table-page":function(t){e.tableCurrentPage=t},loadPageData:e.turnTablePage}},[a("l-table-btns",{attrs:{btns:e.tableBtns},on:{click:e.lr_handleTableBtnClick}})],1)],1),a("l-dialog",{attrs:{width:500,height:48*e.columns.length+88,title:e.formTitle,visible:e.formVisible},on:{"update:visible":function(t){e.formVisible=t},ok:e.handleSave,close:e.handleCloseForm,opened:e.handleOpenedForm}},[a("my-form",{ref:"form"})],1)],1)},o=[],r=(a("7db0"),a("a434"),a("d3b7"),a("159b"),a("ddb0"),a("96cf"),a("1da1")),i=a("b2d6"),l=a.n(i),s=a("c87b"),c=a.n(s),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.ready?a("div",{staticClass:"l-from-body"},[a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,size:"mini","label-width":"100px"}},e._l(e.typeList,(function(t,n){return a("el-col",{key:n,attrs:{span:24}},[a("el-form-item",{attrs:{label:t.f_Name,prop:t.f_Code}},[a("el-input",{model:{value:e.formData[t.f_Code],callback:function(a){e.$set(e.formData,t.f_Code,a)},expression:"formData[item.f_Code]"}})],1)],1)})),1)],1):e._e()},m=[],u={data:function(){return{formData:{},rules:{},ready:!1}},computed:{typeList:function(){return this.$store.state.language.type.list},mainType:function(){return this.typeList.find((function(e){return 1==e.f_IsMain}))||{}}},created:function(){var e=this;this.typeList.forEach((function(t){e.$set(e.formData,t.f_Code,"")})),this.ready=!0},methods:{resetForm:function(){this.formData.f_code="",this.$refs.form&&this.$refs.form.resetFields()},validateForm:function(){return!this.$validatenull(this.formData[this.mainType.f_Code])||(this.$message({type:"error",message:"请输入".concat(this.mainType.f_Name)}),!1)},setForm:function(e){this.formData=e},getForm:function(){var e=this,t=[];return this.typeList.forEach((function(a){t.push({f_Name:e.formData[a.f_Code],f_TypeCode:a.f_Code})})),t}}},h=u,f=a("2877"),p=Object(f["a"])(h,d,m,!1,null,null,null),g=p.exports,b=window.$api.language.mapping,y={components:{MyForm:g},data:function(){return{lr_isPage:!0,searchWord:"",tableBtns:[{prop:"Edit",label:this.$t("编辑"),width:40},{prop:"Delete",label:this.$t("删除"),width:40}],tableLoading:!1,tableTotal:0,tablePageSize:50,tableCurrentPage:1,tableData:[],formTitle:"",formVisible:!1,formEdit:!1,formEditRow:null}},computed:{typeList:function(){return this.$store.state.language.type.list},columns:function(){var e=[];return this.typeList.forEach((function(t){e.push({label:t.f_Name,prop:t.f_Code,minWidth:"120"})})),e},mainType:function(){return this.typeList.find((function(e){return 1==e.f_IsMain}))||{}}},mounted:function(){this.loadTablePageData()},methods:{loadTablePageData:function(e){var t=this;e||(this.tableCurrentPage=1),this.tableLoading=!0;var a={rows:this.tablePageSize,page:this.tableCurrentPage,sidx:"F_Name DESC",keyword:this.searchWord};b.getPage(a).then((function(e){var a=t.$deepClone(e.data.data);t.tableData=a.rows,t.tableTotal=a.records,t.tableLoading=!1})).catch((function(){t.tableData=[],t.tableLoading=!1}))},turnTablePage:function(e){var t=e.rows;this.tablePageSize=t,this.loadTablePageData(!0)},hanleSearch:function(){this.loadTablePageData()},handleAdd:function(){this.formEdit=!1,this.showForm("新增翻译")},handleEdit:function(e,t){this.formEdit=!0,this.formEditRow=t,this.showForm("编辑翻译")},handleDelete:function(e,t){var a=this;this.$confirm(this.$t("此操作将永久删除该数据, 是否继续?"),this.$t("提示"),{confirmButtonText:this.$t("确定"),cancelButtonText:this.$t("取消"),type:"warning"}).then((function(){a.tableData.splice(e,1),a.tableTotal=a.tableTotal-1,b.remove(t.f_code).then((function(){a.$message({type:"success",message:a.$t("删除成功!")})}))})).catch((function(){a.$message({type:"info",message:a.$t("已取消删除")})}))},handleSave:function(e,t){var a=this;if(this.$refs.form.validateForm()){var n=this.$refs.form.getForm();e(),this.formEdit?b.update(this.formEditRow.f_code,n).then((function(){t(),a.formVisible=!1,a.loadTablePageData(!0)})).catch((function(){t()})):b.add(n).then((function(){t(),a.formVisible=!1,a.loadTablePageData(!0)})).catch((function(){t()}))}},addElement:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a={},e.setElementlg(a,l.a,"english"),e.setElementlg(a,c.a,"traditionalchinese"),t.t0=regeneratorRuntime.keys(a);case 4:if((t.t1=t.t0()).done){t.next=14;break}return n=t.t1.value,o=[],o.push({f_Name:n,f_TypeCode:"chinese"}),o.push({f_Name:a[n].english,f_TypeCode:"english"}),o.push({f_Name:a[n].traditionalchinese,f_TypeCode:"traditionalchinese"}),t.next=12,b.add(o);case 12:t.next=4;break;case 14:case"end":return t.stop()}}),t)})))()},setElementlg:function(e,t,a){for(var n in t){var o=n,r=t[n];for(var i in r){var l=o+"."+i,s=r[i];for(var c in s){var d=l+"."+c,m=s[c];if("string"==typeof m)e[d]=e[d]||{},e[d][a]=m;else for(var u in m){var h=d+"."+u,f=m[u];e[h]=e[h]||{},e[h][a]=f}}}}},handleOpenedForm:function(){this.formEdit&&this.$refs.form.setForm(this.$deepClone(this.formEditRow))},handleCloseForm:function(){this.$refs.form.resetForm()},showForm:function(e){this.formTitle=e,this.formVisible=!0}}},v=y,T=Object(f["a"])(v,n,o,!1,null,null,null);t["default"]=T.exports},b2d6:function(e,t,a){"use strict";t.__esModule=!0,t.default={el:{colorpicker:{confirm:"OK",clear:"Clear"},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:""},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},empty:{description:"No Data"}}}},c87b:function(e,t,a){"use strict";t.__esModule=!0,t.default={el:{colorpicker:{confirm:"確認",clear:"清空"},datepicker:{now:"現在",today:"今天",cancel:"取消",clear:"清空",confirm:"確認",selectDate:"選擇日期",selectTime:"選擇時間",startDate:"開始日期",startTime:"開始時間",endDate:"結束日期",endTime:"結束時間",prevYear:"前一年",nextYear:"後一年",prevMonth:"上個月",nextMonth:"下個月",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},select:{loading:"加載中",noMatch:"無匹配資料",noData:"無資料",placeholder:"請選擇"},cascader:{noMatch:"無匹配資料",loading:"加載中",placeholder:"請選擇",noData:"無資料"},pagination:{goto:"前往",pagesize:"項/頁",total:"共 {total} 項",pageClassifier:"頁"},messagebox:{title:"提示",confirm:"確定",cancel:"取消",error:"輸入的資料不符規定!"},upload:{deleteTip:"按 delete 鍵可刪除",delete:"刪除",preview:"查看圖片",continue:"繼續上傳"},table:{emptyText:"暫無資料",confirmFilter:"篩選",resetFilter:"重置",clearFilter:"全部",sumText:"Sum"},tree:{emptyText:"暫無資料"},transfer:{noMatch:"無匹配資料",noData:"無資料",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"加載失敗"},pageHeader:{title:"返回"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},empty:{description:"暫無資料"}}}}}]);