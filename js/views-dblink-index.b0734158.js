(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-dblink-index"],{"4c62":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.lr_loadPage?e._e():a("l-layout",{staticClass:"l-tab-page"},[a("l-panel",{scopedSlots:e._u([{key:"toolLeft",fn:function(){return[a("div",{staticClass:"l-panel--item"},[a("el-input",{attrs:{placeholder:e.$t("请输入关键字查询"),size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.hanleSearch.apply(null,arguments)}},model:{value:e.searchWord,callback:function(t){e.searchWord=t},expression:"searchWord"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.hanleSearch},slot:"append"})],1)],1)]},proxy:!0},{key:"toolRight",fn:function(){return[a("l-tool-btns",{attrs:{refreshClick:e.refreshClick},on:{click:function(t){return e.handleAdd()}}},[a("l-excel-btns")],1)]},proxy:!0}],null,!1,1842997105)},[a("l-table",{attrs:{loading:e.tableLoading,columns:e.lr_getPageColumns(e.columns),dataSource:e.tableData,"row-key":"f_Id"}},[a("l-table-btns",{attrs:{filterBtns:e.filterBtns,btns:e.tableBtns},on:{click:e.lr_handleTableBtnClick}})],1)],1),a("l-dialog",{ref:"formDialog",attrs:{title:e.formTitle,visible:e.formVisible,height:576},on:{"update:visible":function(t){e.formVisible=t},opened:e.handleOpenedForm,closed:e.handleCloseForm,ok:e.handleSave},scopedSlots:e._u([{key:"btn",fn:function(){return[a("el-button",{staticStyle:{position:"absolute",left:"0",top:"9px"},attrs:{size:"mini",type:"info",plain:"",loading:e.testLoading},on:{click:e.handleTest}},[e._v(e._s(e.$t("测试连接")))])]},proxy:!0}],null,!1,3840553884)},[a("my-form",{ref:"form",attrs:{activeName:e.activeName},on:{"update:activeName":function(t){e.activeName=t},"update:active-name":function(t){e.activeName=t}}})],1)],1)},r=[],o=(a("4de4"),a("96cf"),a("1da1")),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"l-from-body learun-el-form-left",staticStyle:{"padding-left":"16px"}},[a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,size:"mini",labelPosition:"left","label-width":"80px"}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("编码"),prop:"f_DBName"}},[a("el-input",{model:{value:e.formData.f_DBName,callback:function(t){e.$set(e.formData,"f_DBName",t)},expression:"formData.f_DBName"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("名称"),prop:"f_DBAlias"}},[a("el-input",{model:{value:e.formData.f_DBAlias,callback:function(t){e.$set(e.formData,"f_DBAlias",t)},expression:"formData.f_DBAlias"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("类型"),prop:"f_DbType"}},[a("l-select",{attrs:{clearable:!1,options:e.options},on:{change:e.handleTypeChange},model:{value:e.formData.f_DbType,callback:function(t){e.$set(e.formData,"f_DbType",t)},expression:"formData.f_DbType"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-tabs",{attrs:{type:"card"},model:{value:e.midActiveName,callback:function(t){e.midActiveName=t},expression:"midActiveName"}},[a("el-tab-pane",{attrs:{label:e.$t("常规"),name:"first"}},["first"==e.midActiveName?[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("主机"),prop:"f_Server"}},[a("el-input",{model:{value:e.formData.f_Server,callback:function(t){e.$set(e.formData,"f_Server",t)},expression:"formData.f_Server"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("端口"),prop:"f_Port"}},[a("el-input",{model:{value:e.formData.f_Port,callback:function(t){e.$set(e.formData,"f_Port",t)},expression:"formData.f_Port"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("用户名"),prop:"f_UserId"}},[a("el-input",{model:{value:e.formData.f_UserId,callback:function(t){e.$set(e.formData,"f_UserId",t)},expression:"formData.f_UserId"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("密码"),prop:"f_Password"}},[a("el-input",{attrs:{type:"password"},model:{value:e.formData.f_Password,callback:function(t){e.$set(e.formData,"f_Password",t)},expression:"formData.f_Password"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("数据库"),prop:"f_DataBase"}},[a("el-input",{model:{value:e.formData.f_DataBase,callback:function(t){e.$set(e.formData,"f_DataBase",t)},expression:"formData.f_DataBase"}})],1)],1)]:e._e()],2),a("el-tab-pane",{attrs:{label:e.$t("高级"),name:"second"}},["first"!=e.midActiveName?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("连接串"),prop:"f_DbConnection"}},[a("el-input",{model:{value:e.formData.f_DbConnection,callback:function(t){e.$set(e.formData,"f_DbConnection",t)},expression:"formData.f_DbConnection"}})],1)],1):e._e()],1)],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("说明"),prop:"f_Description"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.formData.f_Description,callback:function(t){e.$set(e.formData,"f_Description",t)},expression:"formData.f_Description"}})],1)],1)],1)],1)},n=[],i=(a("9911f"),{props:{activeName:{type:String,default:function(){return"first"}}},data:function(){var e=this;return{formData:{f_DBName:"",f_DBAlias:"",f_DbType:"MySql",f_DbConnection:"server=localhost;Database=xxx;Uid=root;Pwd=haosql;SslMode=none;",f_Description:"",f_Server:"",f_Port:"3306",f_UserId:"",f_Password:"",f_DataBase:"",f_Type:0},rules:{f_DBName:[{required:!0,message:"请输入编码"},{validator:this.lr_existDbFiled,keyValue:function(){return e.formData.f_Id},tableName:"lr_base_databaselink",keyName:"f_Id",trigger:"null"}],f_DBAlias:[{required:!0,message:"请输入"}],f_DbType:[{required:!0,message:"请选择"}],f_Server:[{required:!0,message:"请输入"}],f_Port:[{required:!0,message:"请输入"}],f_UserId:[{required:!0,message:"请输入"}],f_Password:[{required:!0,message:"请输入"}],f_DataBase:[{required:!0,message:"请输入"}],f_DbConnection:[{required:!0,message:"请输入"}]},options:[{value:"MySql",label:"MySql"},{value:"SqlServer",label:"SqlServer"},{value:"Oracle",label:"Oracle"},{value:"PostgreSQL",label:"PostgreSQL"},{value:"Dameng",label:"达梦"},{value:"Kdbndp",label:"人大金仓"},{value:"HG",label:"瀚高"},{value:"Oscar",label:"神通"},{value:"OpenGauss",label:"华为OpenGauss"},{value:"OceanBase",label:"OceanBase"},{value:"Tidb",label:"Tidb"},{value:"GBase",label:"南大通用GBase"},{value:"TDengine",label:"TDengine"},{value:"ClickHouse",label:"ClickHouse"},{value:"QuestDB",label:"QuestDB"}],link:{MySql:"server=localhost;Database=xxx;Uid=root;Pwd=haosql;SslMode=none;",SqlServer:"server=.;uid=sa;pwd=haosql;database=xxx",Oracle:"Data Source=localhost/orcl;User ID=system;Password=haha;",PostgreSQL:"PORT=5432;DATABASE=xxx;HOST=localhost;PASSWORD=haosql;USER ID=postgres",Dameng:"Server=localhost; User Id=SYSDBA; PWD=SYSDBA;DATABASE=xxx",Kdbndp:"Server=127.0.0.1;Port=54321;UID=SYSTEM;PWD=system;database=xxx",HG:"Server=127.0.0.1;Port=5866;UId=design;Password=000;Database=design;searchpath=design",Oscar:"PORT=2003;DATABASE=osrdb;HOST=localhost;PASSWORD=szoscar55;USER ID=SYSDBA",OpenGauss:"PORT=5432;DATABASE=SqlSugar4xTest;HOST=localhost;PASSWORD=haosql;USER ID=postgres;No Reset On Close=true",OceanBase:"server=localhost;Database=SqlSugar4xTest;Uid=root;Pwd=haosql;",Tidb:"server=localhost;Database=SqlSugar4xTest;Uid=root;Pwd=haosql;",GBase:"Driver={GBase ODBC DRIVER (64-Bit)};Host=localhost;Service=19088;Server=gbase01;Database=testdb;Protocol=onsoctcp;Uid=gbasedbt;Pwd=GBase123;Db_locale=zh_CN.utf8;Client_locale=zh_CN.utf8",TDengine:"Host=localhost;Port=6030;Username=root;Password=taosdata;Database=power",ClickHouse:"Database=SqlSugarTest2;Username=default;Password=;Host=localhost;Port=8123;Compression=False;UseSession=False;Timeout=120;",QuestDB:"host=localhost;port=8812;username=admin;password=quest;database=qdb;ServerCompatibilityMode=NoTypeLoading;"},port:{MySql:"3306",SqlServer:"1433",Oracle:"1521",PostgreSQL:"5432",Dameng:"5236",Kdbndp:"54321",HG:"5866",Oscar:"2003",OpenGauss:"5432",OceanBase:"26257",Tidb:"4000",GBase:"19088",TDengine:"6030",ClickHouse:"8123",QuestDB:"8812"}}},computed:{midActiveName:{get:function(){return this.activeName},set:function(e){this.$emit("update:activeName",e)}}},created:function(){},methods:{resetForm:function(){this.$formClear(this.$refs.form),this.formData.f_Id=""},validateForm:function(e){var t=this;this.$refs.form.validate((function(a){a&&"lrsystemdb"==t.formData.f_DBName&&(t.$message({type:"warning",message:t.$t("编码不可与系统数据库相同!")}),a=!1),e(a)}))},setForm:function(e){var t=this.$deepClone(e);1==t.f_DESEncrypt&&(0==t.f_Type?t.f_Password=this.lr_AESDecrypt(t.f_Password,"learun_db"):t.f_DbConnection=this.lr_AESDecrypt(t.f_DbConnection,"learun_db")),this.formData=t},getForm:function(){var e=this.$deepClone(this.formData);return e.f_DESEncrypt=1,"first"==this.activeName?(e.f_Type=0,e.f_Password=this.lr_AESEncrypt(e.f_Password,"learun_db"),e.f_DbConnection=""):(e.f_Type=1,e.f_DbConnection=this.lr_AESEncrypt(e.f_DbConnection,"learun_db"),e.f_Password=""),e},handleTypeChange:function(){this.formData.f_Port=this.port[this.formData.f_DbType],this.formData.f_DbConnection=this.link[this.formData.f_DbType]}}}),f=i,c=a("2877"),d=Object(c["a"])(f,l,n,!1,null,null,null),m=d.exports,u=window.$api.data.dblink,p={components:{MyForm:m},data:function(){return{lr_isPage:!0,columns:[{label:"名称",prop:"f_DBAlias",minWidth:"150"},{label:"编码",prop:"f_DBName",minWidth:"150"},{label:"类型",prop:"f_DbType",width:"80",align:"center"},{label:"数据库地址",prop:"f_ServerAddress",width:"200"}],tableBtns:[{prop:"Edit",label:"编辑",width:40},{prop:"Delete",label:"删除",width:40}],tableLoading:!1,searchWord:"",searchTableData:null,formVisible:!1,formTitle:"",formEditRow:null,formEdit:!1,testLoading:!1,activeName:"first"}},mounted:function(){this.init()},computed:{tableData:function(){return this.searchTableData||this.lr_dblinkList}},methods:{refreshClick:function(){this.searchWord="",this.init()},init:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.tableLoading=!0,t.next=3,e.lr_loadDblink(!1);case 3:e.tableLoading=!1;case 4:case"end":return t.stop()}}),t)})))()},hanleSearch:function(){var e=this;this.searchWord?this.searchTableData=this.lr_dblinkList.filter((function(t){return t.f_DBAlias.indexOf(e.searchWord)>-1||t.f_DBName.indexOf(e.searchWord)>-1||t.f_ServerAddress&&t.f_ServerAddress.indexOf(e.searchWord)>-1})):this.searchTableData=null},handleAdd:function(){this.$refs.form&&this.$refs.form.resetForm(),this.activeName="first",this.formEdit=!1,this.showForm("新增")},handleEdit:function(e,t){this.formEdit=!0,this.formEditRow=t,this.activeName=0==t.f_Type?"first":"second",this.showForm("编辑【".concat(t.f_DBName,"】"))},handleDelete:function(e,t){var a=this;this.$confirm(this.$t("此操作将永久删除该数据, 是否继续?"),this.$t("提示"),{confirmButtonText:this.$t("确定"),cancelButtonText:this.$t("取消"),type:"warning"}).then((function(){u.remove(t.f_Id).then((function(){a.$message({type:"success",message:a.$t("删除成功!")}),a.init()}))})).catch((function(){a.$message({type:"info",message:a.$t("已取消删除")})}))},handleSave:function(e,t){var a=this;e(),console.log("test handleSave"),this.$refs.form.validateForm((function(e){if(e){var s=a.$refs.form.getForm();console.log("test handleSave1"),a.formEdit?u.update(s.f_Id,a.$deepClone(s)).then((function(){t(),a.formVisible=!1,a.$message({type:"success",message:a.$t("更新成功!")}),a.init()})).catch((function(){t()})):u.add(a.$deepClone(s)).then((function(){t(),a.formVisible=!1,a.$message({type:"success",message:a.$t("添加成功!")}),a.init()})).catch((function(){t()}))}else t()}))},handleOpenedForm:function(){this.formEdit&&this.$refs.form.setForm(this.formEditRow)},handleCloseForm:function(){this.$refs.form.resetForm()},showForm:function(e){this.formTitle=e,this.formVisible=!0},filterBtns:function(e,t){return"lrsystemdb"!=e.f_DBName&&0!=e.f_IsEdit?t:[]},handleTest:function(){var e=this,t=this.$refs.form.getForm();(0==t.f_Type||t.f_DbConnection)&&(0!=t.f_Type||t.f_Server&&t.f_Port&&t.f_UserId&&t.f_Password)?(this.testLoading=!0,u.test(t).then((function(t){t.data.data?e.$message({type:"success",message:e.$t("测试成功!")}):e.$message({type:"error",message:t.data.info}),e.testLoading=!1})).catch((function(){e.testLoading=!1}))):this.$message({type:"error",message:this.$t("请将数据库信息补充完整!")})}}},h=p,b=Object(c["a"])(h,s,r,!1,null,null,null);t["default"]=b.exports},"857a":function(e,t,a){var s=a("1d80"),r=a("577e"),o=/"/g;e.exports=function(e,t,a,l){var n=r(s(e)),i="<"+t;return""!==a&&(i+=" "+a+'="'+r(l).replace(o,"&quot;")+'"'),i+">"+n+"</"+t+">"}},"9911f":function(e,t,a){"use strict";var s=a("23e7"),r=a("857a"),o=a("af03");s({target:"String",proto:!0,forced:o("link")},{link:function(e){return r(this,"a","href",e)}})},af03:function(e,t,a){var s=a("d039");e.exports=function(e){return s((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}}}]);