"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[3361],{73361:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ele-body"},[t("el-card",{attrs:{shadow:"never"}},[t("el-row",[t("el-col",{attrs:{sm:8}},[t("div",{staticClass:"top-text-item"},[t("div",{staticClass:"top-text-title"},[e._v("进行中的任务")]),t("div",{staticClass:"top-text-content ele-text-heading"},[e._v("10 个任务")])])]),t("el-col",{attrs:{sm:8}},[t("div",{staticClass:"top-text-item"},[t("div",{staticClass:"top-text-title"},[e._v("剩余任务")]),t("div",{staticClass:"top-text-content ele-text-heading"},[e._v("3 个任务")])])]),t("el-col",{attrs:{sm:8}},[t("div",{staticClass:"top-text-item"},[t("div",{staticClass:"top-text-title"},[e._v("任务总耗时")]),t("div",{staticClass:"top-text-content ele-text-heading"},[e._v("120 个小时")])])])],1)],1),t("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{shadow:"never"}},[t("div",{staticClass:"ele-table-tool"},[t("h6",{staticClass:"ele-table-tool-title"},[e._v("复杂列表")]),t("div",{staticClass:"ele-tool ele-space"},[t("div",{staticClass:"ele-action"},[t("el-radio-group",{attrs:{size:"small"},on:{change:e.query},model:{value:e.where.state,callback:function(t){e.$set(e.where,"state",t)},expression:"where.state"}},[t("el-radio-button",{attrs:{label:0}},[e._v("全部")]),t("el-radio-button",{attrs:{label:1}},[e._v("进行中")]),t("el-radio-button",{attrs:{label:2}},[e._v("已完成")])],1)],1),t("div",{staticClass:"ele-action adv-list-search-group hidden-xs-only"},[t("el-input",{attrs:{clearable:"",size:"small",placeholder:"请输入..."},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.query.apply(null,arguments)}},model:{value:e.where.keyword,callback:function(t){e.$set(e.where,"keyword",t)},expression:"where.keyword"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.query},slot:"append"})],1)],1),t("el-button",{staticClass:"ele-btn-icon",staticStyle:{"font-size":"15px"},attrs:{size:"mini",title:"高级查询",icon:"el-icon-_retrieve"},on:{click:e.openSearch}})],1)]),t("el-button",{staticClass:"ele-fluid",staticStyle:{"margin-bottom":"10px"},attrs:{icon:"el-icon-plus"},on:{click:function(t){return e.openEdit()}}},[e._v(" 添加 ")]),e._l(e.data,(function(a,s){return t("div",{key:s},[t("div",{staticClass:"basic-list-item"},[t("div",{staticClass:"ele-cell"},[t("el-avatar",{attrs:{shape:"square",size:60,src:a.cover}}),t("div",{staticClass:"ele-cell-content"},[t("div",{staticClass:"ele-cell-title"},[e._v(e._s(a.title))]),t("div",{staticClass:"ele-cell-desc"},[e._v(e._s(a.content))])])],1),t("div",{staticClass:"basic-list-item-owner"},[t("div",[e._v("发布人")]),t("div",{staticClass:"ele-text-secondary"},[e._v(e._s(a.user))])]),t("div",{staticClass:"basic-list-item-time"},[t("div",[e._v("开始时间")]),t("div",{staticClass:"ele-text-secondary"},[e._v(e._s(a.time))])]),t("div",{staticClass:"basic-list-item-progress"},[t("el-progress",{attrs:{percentage:a.progress,status:a.status}})],1),t("div",{staticClass:"basic-list-item-tool"},[t("el-link",{attrs:{type:"primary",underline:!1,icon:"el-icon-edit"},on:{click:function(t){return e.openEdit(a)}}},[e._v(" 编辑 ")]),t("el-dropdown",{on:{command:t=>e.dropClick(t,a)}},[t("el-link",{attrs:{type:"primary",underline:!1}},[e._v(" 更多"),t("i",{staticClass:"el-icon-arrow-down"})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{attrs:{command:"share"}},[e._v("分享")]),t("el-dropdown-item",{attrs:{command:"remove"}},[e._v("删除")])],1)],1)],1)]),t("el-divider")],1)})),t("el-pagination",{staticClass:"ele-pagination-circle",attrs:{"current-page":e.page.page,"page-size":e.page.limit,total:e.count,background:!0,layout:"total, prev, pager, next, jumper","pager-count":5},on:{"size-change":t=>(e.page.limit=t)&&e.query(),"current-change":t=>(e.page.page=t)&&e.query()}})],2),t("ele-modal",{attrs:{width:"460px",visible:e.visible,"close-on-click-modal":!0,title:e.form.id?"任务编辑":"任务添加"},on:{"update:visible":function(t){e.visible=t}}},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"82px"}},[t("el-form-item",{attrs:{label:"任务名称:",prop:"title"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入任务名称"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t("el-form-item",{attrs:{label:"开始时间:",prop:"time"}},[t("el-date-picker",{staticClass:"ele-fluid",attrs:{type:"datetime",placeholder:"请选择开始时间",format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm"},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),t("el-form-item",{attrs:{label:"负责人:",prop:"user"}},[t("el-select",{staticClass:"ele-fluid",attrs:{clearable:"",placeholder:"请选择负责人"},model:{value:e.form.user,callback:function(t){e.$set(e.form,"user",t)},expression:"form.user"}},[t("el-option",{attrs:{label:"SunSmile",value:"SunSmile"}}),t("el-option",{attrs:{label:"你的名字很好听",value:"你的名字很好听"}}),t("el-option",{attrs:{label:"全村人的希望",value:"林东东"}}),t("el-option",{attrs:{label:"Jasmine",value:"Jasmine"}}),t("el-option",{attrs:{label:"酷酷的大叔",value:"酷酷的大叔"}})],1)],1),t("el-form-item",{attrs:{label:"任务描述:"}},[t("el-input",{attrs:{rows:4,type:"textarea",placeholder:"请输入任务描述"},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),t("el-button",{attrs:{type:"primary",loading:e.editLoading},on:{click:e.save}},[e._v(" 保存 ")])],1)],1),t("el-drawer",{attrs:{size:"340px",title:"高级查询",visible:e.showSearch,"append-to-body":!0},on:{"update:visible":function(t){e.showSearch=t}}},[t("div",{staticStyle:{padding:"22px 22px 22px 10px"}},[t("el-form",{ref:"searchForm",attrs:{model:e.searchForm,"label-width":"82px"}},[t("el-form-item",{attrs:{label:"任务名称:"}},[t("el-input",{attrs:{placeholder:"请输入任务名称",clearable:""},model:{value:e.searchForm.title,callback:function(t){e.$set(e.searchForm,"title",t)},expression:"searchForm.title"}})],1),t("el-form-item",{attrs:{label:"开始时间:"}},[t("el-date-picker",{staticClass:"ele-fluid",attrs:{type:"datetime",placeholder:"请选择开始时间",format:"yyyy-MM-dd HH:mm","value-format":"yyyy-MM-dd HH:mm"},model:{value:e.searchForm.time,callback:function(t){e.$set(e.searchForm,"time",t)},expression:"searchForm.time"}})],1),t("el-form-item",{attrs:{label:"负责人:",prop:"user"}},[t("el-select",{staticClass:"ele-fluid",attrs:{clearable:"",placeholder:"请选择负责人"},model:{value:e.searchForm.user,callback:function(t){e.$set(e.searchForm,"user",t)},expression:"searchForm.user"}},[t("el-option",{attrs:{label:"SunSmile",value:"SunSmile"}}),t("el-option",{attrs:{label:"你的名字很好听",value:"你的名字很好听"}}),t("el-option",{attrs:{label:"全村人的希望",value:"林东东"}}),t("el-option",{attrs:{label:"Jasmine",value:"Jasmine"}}),t("el-option",{attrs:{label:"酷酷的大叔",value:"酷酷的大叔"}})],1)],1),t("el-form-item",{attrs:{label:"任务描述:"}},[t("el-input",{attrs:{rows:4,type:"textarea",placeholder:"请输入任务描述"},model:{value:e.searchForm.content,callback:function(t){e.$set(e.searchForm,"content",t)},expression:"searchForm.content"}})],1)],1),t("div",{staticClass:"ele-text-center"},[t("el-button",{attrs:{type:"primary"},on:{click:e.query}},[e._v("搜索")]),t("el-button",{on:{click:function(t){e.showSearch=!1}}},[e._v("关闭")])],1)],1)])],1)},l=[];a(43027),a(98729),a(97602);const i={title:"",time:"",user:null,content:""};var r={name:"ListAdvanced",data(){return{loading:!1,data:[{id:1,title:"ElementUI",time:"2020-06-13 08:33",user:"SunSmile",progress:87,content:"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。",cover:"https://cdn.eleadmin.com/20200609/c184eef391ae48dba87e3057e70238fb.jpg"},{id:2,title:"Vue.js",time:"2020-06-13 06:40",user:"Pojin",progress:100,status:"success",content:"Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。",cover:"https://cdn.eleadmin.com/20200609/b6a811873e704db49db994053a5019b2.jpg"},{id:3,title:"Vuex",time:"2020-06-13 04:40",user:"SuperWill",progress:75,content:"Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。",cover:"https://cdn.eleadmin.com/20200609/948344a2a77c47a7a7b332fe12ff749a.jpg"},{id:4,title:"Vue Router",time:"2020-06-13 02:40",user:"Jasmine",progress:65,content:"Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。",cover:"https://cdn.eleadmin.com/20200609/f6bc05af944a4f738b54128717952107.jpg"},{id:5,title:"Sass",time:"2020-06-13 00:40",user:"Vast",progress:45,status:"exception",content:"Sass 是世界上最成熟、稳定、强大的专业级 CSS 扩展语言。",cover:"https://cdn.eleadmin.com/20200609/2d98970a51b34b6b859339c96b240dcd.jpg"}],where:{state:0,keyword:""},page:{page:1,limit:5},count:100,visible:!1,form:{...i},rules:{title:[{required:!0,message:"请输入任务名称",trigger:"blur"}],time:[{required:!0,message:"请选择开始时间",trigger:"blur"}],user:[{required:!0,message:"请选择负责人",trigger:"blur"}]},editLoading:!1,showSearch:!1,searchForm:{title:"",time:"",user:null,content:""}}},methods:{query(){this.loading=!0,setTimeout((()=>{this.loading=!1}),300)},openEdit(e){var t;e?this.$util.assignObject(this.form,e):this.form={...i},this.visible=!0,null===(t=this.$refs["form"])||void 0===t||t.clearValidate()},save(){this.$refs["form"].validate((e=>{if(!e)return!1;this.editLoading=!0,setTimeout((()=>{this.editLoading=!1,this.visible=!1,this.$message.success("保存成功"),this.form.id?Object.assign(this.data.find((e=>e.id===this.form.id)),this.form):this.data.push(Object.assign({id:(new Date).getTime(),cover:"https://cdn.eleadmin.com/20200610/RZ8FQmZfHkcffMlTBCJllBFjEhEsObVo.jpg"},this.form))}),300)}))},dropClick(e,t){"remove"===e?this.$confirm("确定删除该任务吗？","删除任务",{type:"warning"}).then((()=>{this.data.splice(this.data.findIndex((e=>e.id===t.id)),1),this.$message.success("删除成功")})).catch((()=>{})):"share"===e&&this.$message.info("点击了分享")},openSearch(){this.showSearch=!0}}},o=r,n=a(64008),c=(0,n.A)(o,s,l,!1,null,"782e2fa5",null),d=c.exports}}]);