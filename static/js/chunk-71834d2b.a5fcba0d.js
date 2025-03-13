/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-14 00:09:08
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71834d2b"],{"744a":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"roles-container"},[e.loginInterception?e._e():t("el-alert",{attrs:{closable:!1,"show-icon":"",title:"检测到您当前的登录拦截已关闭，无法模拟切换角色功能，请在src/config/setting.config.js中配置loginInterception为ture，开启登录拦截",type:"success"}}),t("el-alert",{attrs:{closable:!1,"show-icon":"",title:`当前路由模式为：{ authentication:${e.authentication} }，是否开启角色权限控制功能：{ rolesControl:${e.rolesControl} }`,type:"success"}}),t("el-form",{ref:"form",attrs:{"label-position":"top","label-width":"140px",model:e.form}},[t("el-form-item",{attrs:{label:"账号切换"}},[t("el-radio-group",{on:{change:e.handleChangeRole},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}},[t("el-radio-button",{attrs:{label:"admin"}},[e._v("admin")]),t("el-radio-button",{attrs:{label:"editor"}},[e._v("editor")]),t("el-radio-button",{attrs:{label:"test"}},[e._v("test")])],1)],1),t("el-form-item",{attrs:{label:"过期Token模拟访问(令牌失效5s)"}},[t("el-button",{attrs:{type:"primary"},on:{click:e.refreshToken}},[e._v(" 点击模拟token过期访问接口，无痛刷新 ")])],1),t("el-form-item",{attrs:{label:"描述"}},[e._v(" 当前账号拥有的角色 "),t("el-tag",[e._v(e._s(JSON.stringify(e.role)))]),e._v(" ，权限点 "),t("el-tag",[e._v(e._s(JSON.stringify(e.permission)))]),e._v(" ，当前token "),t("el-tag",[e._v(e._s(e.token))])],1),t("el-form-item",{attrs:{label:"按钮级角色"}},[t("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:["Admin"],expression:"['Admin']"}],attrs:{type:"primary"}},[e._v(' 拥有["Admin"]角色的按钮 ')]),t("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:{role:["Admin"],mode:"except"},expression:"{ role: ['Admin'], mode: 'except' }"}],attrs:{type:"danger"}},[e._v(' 未拥有["Admin"]角色的按钮 ')]),t("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:["Editor"],expression:"['Editor']"}],attrs:{type:"primary"}},[e._v(' 拥有["Editor"]角色的按钮 ')]),t("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:{role:["Editor"],mode:"except"},expression:"{ role: ['Editor'], mode: 'except' }"}],attrs:{type:"danger"}},[e._v(' 未拥有["Editor"]角色的按钮 ')]),t("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:{role:["Admin","Editor"],mode:"allOf"},expression:"{ role: ['Admin', 'Editor'], mode: 'allOf' }"}],attrs:{type:"primary"}},[e._v(' 同时拥有["Admin","Editor"]角色的按钮 ')]),t("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:["Test"],expression:"['Test']"}],attrs:{type:"primary"}},[e._v(' 拥有["Test"]角色的按钮 ')])],1),t("el-form-item",{attrs:{label:"按钮级权限点"}},[t("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:{permission:["read:system"]},expression:"{ permission: ['read:system'] }"}],attrs:{type:"primary"}},[e._v(' 拥有["read:system"]权限点的按钮 ')]),t("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:{permission:["read:system"],mode:"except"},expression:"{ permission: ['read:system'], mode: 'except' }"}],attrs:{type:"danger"}},[e._v(" 未拥有[\"'read:system'\"]权限点的按钮 ")]),t("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:{permission:["write:system"]},expression:"{ permission: ['write:system'] }"}],attrs:{type:"primary"}},[e._v(' 拥有["write:system"]权限点的按钮 ')]),t("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:{permission:["write:system"],mode:"except"},expression:"{ permission: ['write:system'], mode: 'except' }"}],attrs:{type:"danger"}},[e._v(' 未拥有["write:system"]权限点的按钮 ')]),t("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:{permission:["delete:system"]},expression:"{ permission: ['delete:system'] }"}],attrs:{type:"primary"}},[e._v(' 拥有["delete:system"]权限点的按钮 ')]),t("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:{permission:["delete:system"],mode:"except"},expression:"{ permission: ['delete:system'], mode: 'except' }"}],attrs:{type:"danger"}},[e._v(' 未拥有["delete:system"]权限点的按钮 ')])],1),t("el-form-item",{attrs:{label:"按钮级角色&权限点"}},[t("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:{role:["Admin"],permission:["delete:system"]},expression:"{ role: ['Admin'], permission: ['delete:system'] }"}],attrs:{type:"primary"}},[e._v(' 拥有["Admin"]角色或者["delete:system"]权限点的按钮 ')]),t("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:{role:["Editor"],permission:["read:system"],mode:"allOf"},expression:"{\n          role: ['Editor'],\n          permission: ['read:system'],\n          mode: 'allOf',\n        }"}],attrs:{type:"primary"}},[e._v(' 拥有["Editor"]角色和["read:system"]权限点的按钮 ')]),t("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:{role:["Admin"],permission:["delete:system"],mode:"except"},expression:"{\n          role: ['Admin'],\n          permission: ['delete:system'],\n          mode: 'except',\n        }"}],attrs:{type:"danger"}},[e._v(' 没有["Admin"]和["delete:system"]权限点的按钮 ')])],1)],1),t("h3",[e._v("intelligence模式(前端控制路由)")]),t("p",[e._v("用法请阅读文档")]),t("h3",[e._v("all模式(后端动态路由控制)")]),t("p",[e._v("用法请阅读文档")]),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:24}},[t("el-table",{attrs:{border:"",data:e.tableData,"default-expand-all":"","row-key":"path","tree-props":{children:"children",hasChildren:"hasChildren"}}},[t("el-table-column",{attrs:{align:"center",label:"name",prop:"name","show-overflow-tooltip":"",width:"220"}}),t("el-table-column",{attrs:{align:"center",label:"path",prop:"path","show-overflow-tooltip":"",width:"220"}}),t("el-table-column",{attrs:{align:"center",label:"component",prop:"component","show-overflow-tooltip":"",width:"220"}}),t("el-table-column",{attrs:{align:"center",label:"redirect",prop:"redirect","show-overflow-tooltip":"",width:"220"}}),t("el-table-column",{attrs:{align:"center",label:"title",prop:"meta.title","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{align:"center",label:"icon","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[s.meta?t("span",[s.meta.icon?t("vab-icon",{attrs:{icon:s.meta.icon}}):e._e()],1):e._e()]}}])}),t("el-table-column",{attrs:{align:"center",label:"noClosable","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[s.meta?t("span",[e._v(" "+e._s(s.meta.noClosable||!1)+" ")]):e._e()]}}])}),t("el-table-column",{attrs:{align:"center",label:"noKeepAlive","show-overflow-tooltip":"",width:"100"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[s.meta?t("span",[s.meta.noKeepAlive?[e._v("true")]:[e._v("false")]],2):e._e()]}}])}),t("el-table-column",{attrs:{align:"center",label:"badge","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[s.meta?t("span",[e._v(" "+e._s(s.meta.badge)+" ")]):e._e()]}}])}),t("el-table-column",{attrs:{align:"center",label:"isCustomSvg","show-overflow-tooltip":"",width:"140"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[s.meta?t("span",[e._v(" "+e._s(s.meta.isCustomSvg||!1)+" ")]):e._e()]}}])}),t("el-table-column",{attrs:{align:"center",label:"tabHidden","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[s.meta?t("span",[s.meta.tabHidden?[e._v("true")]:[e._v("false")]],2):e._e()]}}])})],1)],1)],1)],1)},r=[],i=s("7736"),a=s("f121"),n=s("2033"),l=s("9f2e"),m=s("b82b"),p=s("03a1"),d={name:"Permission",data(){return{form:{account:""},tableData:[],res:[],authentication:a["authentication"],loginInterception:a["loginInterception"],rolesControl:a["rolesControl"]}},computed:{...Object(i["c"])({role:"acl/role",token:"user/token",username:"user/username",permission:"acl/permission"})},created(){this.form.account=this.username,this.fetchData()},methods:{async handleChangeRole(){this.$baseLoading(0,"正在切换账号请稍后..."),await localStorage.setItem(a["tokenTableName"],`${this.form.account}-token-${p["Random"].guid()}-${(new Date).getTime()}`),await location.reload()},async fetchData(){const{data:{list:e}}=await Object(n["getList"])();this.tableData=Object(l["filterRoutes"])([...e])},async refreshToken(){const{msg:e}=await Object(m["expireToken"])();this.$baseMessage(`${e}: [${this.token}] `,"success","vab-hey-message-success")}}},c=d,u=(s("9d11"),s("829d")),v=Object(u["a"])(c,o,r,!1,null,"38ec3191",null);t["default"]=v.exports},"9d11":function(e,t,s){"use strict";s("e1f1")},e1f1:function(e,t,s){}}]);