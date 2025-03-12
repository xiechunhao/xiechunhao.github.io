/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-13 01:30:00
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b982cdc"],{"062c":function(e,t,o){},"6f23":function(e,t,o){"use strict";o("062c")},"754e":function(e,t,o){"use strict";o.r(t),o.d(t,"getTree",(function(){return l})),o.d(t,"doEdit",(function(){return r})),o.d(t,"doDelete",(function(){return n}));var a=o("b775");function l(e){return Object(a["default"])({url:"/menuManagement/getList",method:"get",params:e})}function r(e){return Object(a["default"])({url:"/menuManagement/doEdit",method:"post",data:e})}function n(e){return Object(a["default"])({url:"/menuManagement/doDelete",method:"post",data:e})}},"878e":function(e,t,o){"use strict";o.r(t),o.d(t,"getIconList",(function(){return l}));var a=o("b775");function l(e){return Object(a["default"])({url:"/remixIcon/getList",method:"get",params:e})}},"88a2":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"menu-management-container"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{lg:4,md:8,sm:24,xl:4,xs:24}},[t("el-card",{attrs:{shadow:"hover"}},[t("el-tree",{attrs:{data:e.data,"default-expanded-keys":["root"],"node-key":"id",props:e.defaultProps},on:{"node-click":e.handleNodeClick}})],1)],1),t("el-col",{attrs:{lg:20,md:16,sm:24,xl:20,xs:24}},[t("el-card",{attrs:{shadow:"hover"}},[t("vab-query-form",[t("vab-query-form-top-panel",{attrs:{span:12}},[t("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:function(t){return e.handleEdit("")}}},[e._v(" 添加 ")])],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{border:"",data:e.list,"default-expand-all":"","row-key":"path","tree-props":{children:"children",hasChildren:"hasChildren"}},scopedSlots:e._u([{key:"empty",fn:function(){return[t("el-image",{staticClass:"vab-data-empty",attrs:{src:o("f1f0")}})]},proxy:!0}])},[t("el-table-column",{attrs:{label:"标题",prop:"meta.title","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"name",prop:"name","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"路径",prop:"path","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"是否隐藏","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(" "+e._s(t.meta.hidden?"是":"否")+" ")]}}])}),t("el-table-column",{attrs:{label:"是否隐藏当前节点","show-overflow-tooltip":"",width:"100"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(" "+e._s(t.meta.levelHidden?"是":"否")+" ")]}}])}),t("el-table-column",{attrs:{label:"vue文件路径",prop:"component","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"重定向","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(" "+e._s(t.redirect?t.redirect:"无")+" ")]}}])}),t("el-table-column",{attrs:{label:"图标","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:o}){return[o.meta&&o.meta.icon?t("vab-icon",{attrs:{icon:o.meta.icon}}):e._e()]}}])}),t("el-table-column",{attrs:{label:"是否固定","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(" "+e._s(t.meta&&t.meta.noClosable?"是":"否")+" ")]}}])}),t("el-table-column",{attrs:{label:"是否无缓存","show-overflow-tooltip":"",width:"120"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(" "+e._s(t.meta&&t.meta.noKeepAlive?"是":"否")+" ")]}}])}),t("el-table-column",{attrs:{label:"badge","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:o}){return[o.meta&&o.meta.badge?t("el-tag",{attrs:{effect:"dark",type:"danger"}},[e._v(" "+e._s(o.meta.badge)+" ")]):e._e()]}}])}),t("el-table-column",{attrs:{label:"dot","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(" "+e._s(t.meta&&t.meta.dot?"是":"否")+" ")]}}])}),t("el-table-column",{attrs:{label:"操作","show-overflow-tooltip":"",width:"185"},scopedSlots:e._u([{key:"default",fn:function({row:o}){return[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleEdit(o)}}},[t("vab-icon",{attrs:{icon:"edit-2-line"}}),e._v(" 编辑 ")],1),t("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.handleDelete(o)}}},[t("vab-icon",{attrs:{icon:"delete-bin-6-line"}}),e._v(" 删除 ")],1)]}}])})],1)],1)],1)],1),t("edit",{ref:"edit",on:{"fetch-data":e.fetchData}})],1)},l=[],r=o("2033"),n=o("754e"),s=o("e4d1"),i={name:"MenuManagement",components:{Edit:s["default"]},data(){return{data:[],defaultProps:{children:"children",label:"label"},list:[],listLoading:!0}},async created(){const{data:{list:e}}=await Object(n["getTree"])();this.data=e,await this.fetchData()},methods:{handleEdit(e){e&&e.path?this.$refs["edit"].showEdit(e):this.$refs["edit"].showEdit()},handleDelete(e){e.path&&this.$baseConfirm("你确定要删除当前项吗",null,async()=>{const{msg:t}=await Object(n["doDelete"])({paths:e.path});this.$baseMessage(t,"success","vab-hey-message-success"),await this.fetchData()})},async fetchData(e){this.listLoading=!0;const{data:{list:t}}=await Object(r["getList"])({role:e});this.list=t,this.listLoading=!1},handleNodeClick({role:e}){this.fetchData(e)}}},m=i,c=(o("6f23"),o("829d")),d=Object(c["a"])(m,a,l,!1,null,"78ced645",null);t["default"]=d.exports},e4d1:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"60%"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close},scopedSlots:e._u([{key:"footer",fn:function(){return[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])]},proxy:!0}])},[t("el-form",{ref:"form",attrs:{inline:!0,"label-width":"140px",model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"父级Id",prop:"parentId"}},[t("el-input",{model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}})],1),t("el-form-item",{attrs:{label:"name",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"路径",prop:"path"}},[t("el-input",{model:{value:e.form.path,callback:function(t){e.$set(e.form,"path",t)},expression:"form.path"}})],1),t("el-form-item",{attrs:{label:"vue文件路径",prop:"component"}},[t("el-input",{model:{value:e.form.component,callback:function(t){e.$set(e.form,"component",t)},expression:"form.component"}})],1),t("el-form-item",{attrs:{label:"重定向"}},[t("el-input",{model:{value:e.form.redirect,callback:function(t){e.$set(e.form,"redirect",t)},expression:"form.redirect"}})],1),t("el-form-item",{attrs:{label:"标题",prop:"meta.title"}},[t("el-input",{model:{value:e.form.meta.title,callback:function(t){e.$set(e.form.meta,"title",t)},expression:"form.meta.title"}})],1),t("el-form-item",{attrs:{label:"图标"}},[t("el-popover",{attrs:{"popper-class":"icon-selector-popper",trigger:"hover",width:"292"},scopedSlots:e._u([{key:"reference",fn:function(){return[t("el-input",{model:{value:e.form.meta.icon,callback:function(t){e.$set(e.form.meta,"icon",t)},expression:"form.meta.icon"}})]},proxy:!0}])},[t("vab-icon-selector",{on:{"handle-icon":e.handleIcon}})],1)],1),t("el-form-item",{attrs:{label:"badge"}},[t("el-input",{model:{value:e.form.meta.badge,callback:function(t){e.$set(e.form.meta,"badge",t)},expression:"form.meta.badge"}})],1),t("el-form-item",{attrs:{label:"dot"}},[t("el-switch",{model:{value:e.form.meta.dot,callback:function(t){e.$set(e.form.meta,"dot",t)},expression:"form.meta.dot"}})],1),t("el-form-item",{attrs:{label:"隐藏"}},[t("el-switch",{model:{value:e.form.meta.hidden,callback:function(t){e.$set(e.form.meta,"hidden",t)},expression:"form.meta.hidden"}})],1),t("el-form-item",{attrs:{label:"始终显示当前节点"}},[t("el-switch",{model:{value:e.form.meta.levelHidden,callback:function(t){e.$set(e.form.meta,"levelHidden",t)},expression:"form.meta.levelHidden"}})],1),t("el-form-item",{attrs:{label:"自定义svg图标"}},[t("el-switch",{model:{value:e.form.meta.isCustomSvg,callback:function(t){e.$set(e.form.meta,"isCustomSvg",t)},expression:"form.meta.isCustomSvg"}})],1),t("el-form-item",{attrs:{label:"固定"}},[t("el-switch",{model:{value:e.form.meta.noClosable,callback:function(t){e.$set(e.form.meta,"noClosable",t)},expression:"form.meta.noClosable"}})],1),t("el-form-item",{attrs:{label:"无缓存"}},[t("el-switch",{model:{value:e.form.meta.noKeepAlive,callback:function(t){e.$set(e.form.meta,"noKeepAlive",t)},expression:"form.meta.noKeepAlive"}})],1),t("el-form-item",{attrs:{label:"不显示当前标签页"}},[t("el-switch",{model:{value:e.form.meta.tabHidden,callback:function(t){e.$set(e.form.meta,"tabHidden",t)},expression:"form.meta.tabHidden"}})],1)],1)],1)},l=[],r=o("f5b7"),n=o("754e"),s={name:"MenuManagementEdit",components:{VabIconSelector:r["default"]},data(){return{form:{meta:{title:"",icon:"",badge:"",dot:"",hidden:"",levelHidden:"",isCustomSvg:"",noClosable:"",noKeepAlive:"",tabHidden:""}},rules:{parentId:[{required:!0,trigger:"blur",message:"请输入父级id"}],name:[{required:!0,trigger:"blur",message:"请输入name"}],path:[{required:!0,trigger:"blur",message:"请输入path"}],component:[{required:!0,trigger:"blur",message:"请输入component"}],"meta.title":[{required:!0,trigger:"blur",message:"请输入标题"}]},title:"",dialogFormVisible:!1}},methods:{handleIcon(e){this.form.meta.icon=e},showEdit(e){e?(this.title="编辑",this.form=JSON.parse(JSON.stringify(Object.assign({},e)))):this.title="添加",this.dialogFormVisible=!0},close(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,this.dialogFormVisible=!1},save(){this.$refs["form"].validate(async e=>{if(e){const{msg:e}=await Object(n["doEdit"])(this.form);this.$baseMessage(e,"success","vab-hey-message-success"),this.$emit("fetch-data"),this.close()}})}}},i=s,m=o("829d"),c=Object(m["a"])(i,a,l,!1,null,null,null);t["default"]=c.exports},f1f0:function(e,t,o){e.exports=o.p+"static/img/data_empty.475a2a1e.png"}}]);