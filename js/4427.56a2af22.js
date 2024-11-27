"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[4152,4427],{84152:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});l(80772);var n=function(){var e=this,t=e._self._c;return t("el-form",{staticClass:"ele-form-search",attrs:{"label-width":"77px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)},submit:function(e){e.preventDefault()}}},[t("el-row",{attrs:{gutter:15}},[t("el-col",{attrs:{lg:6,md:12}},[t("el-form-item",{attrs:{label:"菜单名称:"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.where.title,callback:function(t){e.$set(e.where,"title",t)},expression:"where.title"}})],1)],1),t("el-col",{attrs:{lg:6,md:12}},[t("el-form-item",{attrs:{label:"菜单地址:"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.where.path,callback:function(t){e.$set(e.where,"path",t)},expression:"where.path"}})],1)],1),t("el-col",{attrs:{lg:6,md:12}},[t("el-form-item",{attrs:{label:"权限标识:"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.where.authority,callback:function(t){e.$set(e.where,"authority",t)},expression:"where.authority"}})],1)],1),t("el-col",{attrs:{lg:6,md:12}},[t("div",{staticClass:"ele-form-actions"},[t("el-button",{staticClass:"ele-btn-icon",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.search}},[e._v(" 查询 ")]),t("el-button",{on:{click:e.reset}},[e._v("重置")])],1)])],1)],1)},r=[];const i={title:"",path:"",authority:""};var a={name:"MenuSearch",data(){return{where:{...i}}},methods:{search(){this.$emit("search",this.where)},reset(){this.where={...i},this.search()}}},o=a,s=l(64008),c=(0,s.A)(o,n,r,!1,null,null,null),u=c.exports},94427:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ele-body"},[t("el-card",{attrs:{shadow:"never"}},[t("menu-search",{on:{search:e.reload}}),t("ele-pro-table",{ref:"table",attrs:{"row-key":"menuId",columns:e.columns,datasource:e.datasource,"default-expand-all":!1,"need-page":!1,"parse-data":e.parseData},on:{done:e.onDone},scopedSlots:e._u([{key:"title",fn:function({row:l}){return[t("i",{class:l.icon}),e._v(" "+e._s(l.title)+" ")]}},{key:"menuType",fn:function({row:l}){return[e.isUrl(l.path)?t("el-tag",{attrs:{type:"warning",size:"mini","disable-transitions":!0}},[e._v(" 外链 ")]):e.isUrl(l.component)?t("el-tag",{attrs:{type:"success",size:"mini","disable-transitions":!0}},[e._v(" 内链 ")]):t("el-tag",{attrs:{type:["primary","info"][l.menuType],size:"mini","disable-transitions":!0}},[e._v(" "+e._s(["菜单","按钮"][l.menuType])+" ")])]}},{key:"action",fn:function({row:l}){return[t("el-link",{attrs:{type:"primary",underline:!1,icon:"el-icon-plus"},on:{click:function(t){return e.openEdit(null,l.menuId)}}},[e._v(" 添加 ")]),t("el-link",{attrs:{type:"primary",underline:!1,icon:"el-icon-edit"},on:{click:function(t){return e.openEdit(l)}}},[e._v(" 修改 ")]),t("el-popconfirm",{staticClass:"ele-action",attrs:{title:"确定要删除吗？"},on:{confirm:function(t){return e.remove(l)}}},[t("el-link",{attrs:{slot:"reference",type:"danger",underline:!1,icon:"el-icon-delete"},slot:"reference"},[e._v(" 删除 ")])],1)]}}])},[t("template",{slot:"toolbar"},[t("el-button",{staticClass:"ele-btn-icon",attrs:{size:"small",type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.openEdit()}}},[e._v(" 添加 ")]),t("el-button",{staticClass:"ele-btn-icon",attrs:{size:"small"},on:{click:e.expandAll}},[e._v(" 展开全部 ")]),t("el-button",{staticClass:"ele-btn-icon",attrs:{size:"small"},on:{click:e.foldAll}},[e._v(" 折叠全部 ")])],1)],2)],1),t("menu-edit",{attrs:{data:e.current,"parent-id":e.parentId,"menu-list":e.menuList,visible:e.showEdit},on:{"update:visible":function(t){e.showEdit=t},done:e.reload}})],1)},r=[],i=l(84152),a=l(24696),o=l(69156),s={name:"SystemMenu",components:{MenuSearch:i["default"],MenuEdit:a["default"]},data(){return{columns:[{columnKey:"index",type:"index",width:45,align:"center",showOverflowTooltip:!0,fixed:"left"},{prop:"title",label:"菜单名称",showOverflowTooltip:!0,minWidth:110,slot:"title"},{prop:"path",label:"路由地址",showOverflowTooltip:!0,minWidth:110},{prop:"component",label:"组件路径",showOverflowTooltip:!0,minWidth:110},{prop:"authority",label:"权限标识",showOverflowTooltip:!0,minWidth:110},{prop:"sortNumber",label:"排序",align:"center",showOverflowTooltip:!0,width:60},{prop:"hide",label:"可见",align:"center",showOverflowTooltip:!0,width:60,formatter:(e,t,l)=>["是","否"][l]},{prop:"menuType",label:"类型",align:"center",showOverflowTooltip:!0,width:60,slot:"menuType"},{prop:"createTime",label:"创建时间",showOverflowTooltip:!0,minWidth:110,formatter:(e,t,l)=>this.$util.toDateString(l)},{columnKey:"action",label:"操作",width:190,align:"center",resizable:!1,slot:"action",hideInSetting:!0,showOverflowTooltip:!0}],current:null,showEdit:!1,menuList:[],parentId:null}},methods:{datasource({where:e}){return(0,o.v8)({...e})},parseData(e){return this.$util.toTreeData({data:e,idField:"menuId",parentIdField:"parentId"})},onDone({data:e}){this.menuList=e},reload(e){this.$refs.table.reload({where:e})},openEdit(e,t){this.current=e,this.parentId=t,this.showEdit=!0},remove(e){var t;if(null!==(t=e.children)&&void 0!==t&&t.length)return void this.$message.error("请先删除子节点");const l=this.$loading({lock:!0});(0,o.cg)(e.menuId).then((e=>{l.close(),this.$message.success(e),this.reload()})).catch((e=>{l.close(),this.$message.error(e.message)}))},expandAll(){this.$refs.table.toggleRowExpansionAll(!0)},foldAll(){this.$refs.table.toggleRowExpansionAll(!1)},isUrl(e){return!(!e||!(e.startsWith("http://")||e.startsWith("https://")||e.startsWith("//")))}}},c=s,u=l(64008),p=(0,u.A)(c,n,r,!1,null,null,null),d=p.exports}}]);