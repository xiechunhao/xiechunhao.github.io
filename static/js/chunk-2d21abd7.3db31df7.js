/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-12 23:04:44
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21abd7"],{bd98:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"detail-container"},[t("el-page-header",{attrs:{content:"【"+e.route.query.title+"】详情页面"},on:{back:e.goBack}}),t("el-alert",{attrs:{closable:!1,"show-icon":"",title:"详情页菜单高亮，并缓存详情页，返回上一页再次打开可看到效果，dynamicNewTab可配置详情页只打开一个tab页还是可以根据参数不同无限打开多个，当前展示的是可以打开多个",type:"success"}}),t("el-form",{attrs:{inline:!0,model:e.form}},[t("el-form-item",{attrs:{label:"输入框缓存"}},[t("el-input",{model:{value:e.form.text,callback:function(t){e.$set(e.form,"text",t)},expression:"form.text"}})],1)],1),t("el-button",{attrs:{icon:"el-icon-refresh",type:"primary"},on:{click:e.handleRefreshMainPage}},[e._v(" 刷新综合表格页面 ")]),t("el-descriptions",{attrs:{border:"",column:3,title:"详情"},scopedSlots:e._u([{key:"extra",fn:function(){return[t("el-button",{attrs:{size:"small",type:"primary"}},[e._v("操作")])]},proxy:!0}])},[t("el-descriptions-item",[t("template",{slot:"label"},[e._v("标题")]),e._v(" "+e._s(e.route.query.title)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("作者")]),e._v(" "+e._s(e.route.query.author)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("时间")]),e._v(" "+e._s(e.route.query.datetime)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("评级")]),t("el-rate",{attrs:{disabled:"",value:Number(e.route.query.rate)}})],2),t("el-descriptions-item",[t("template",{slot:"label"},[e._v("备注")]),e._v(" "+e._s(e.route.query.description)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"el-icon-office-building"}),e._v(" 联系地址 ")]),e._v(" 江苏省苏州市吴中区吴中大道 1188 号 ")],2)],1),t("vab-json-viewer",{attrs:{copyable:"","expand-depth":5,sort:"",value:e.route}})],1)},l=[],i=(a("ca7c"),a("7736")),r=a("9f2e"),o=a("258b"),n=a.n(o),c={name:"Detail",components:{VabJsonViewer:n.a},data(){return{route:{query:{title:"加载中"}},form:{text:""}}},created(){const e=this.$route;this.$nextTick(()=>{this.changeTabsMeta({title:"详情页",meta:{title:e.query.title+" 详情页"}}),this.route={path:e.path,params:e.params,query:e.query,name:e.name,meta:e.meta}})},methods:{...Object(i["b"])({changeTabsMeta:"tabs/changeTabsMeta",delVisitedRoute:"tabs/delVisitedRoute"}),async goBack(){const e=await Object(r["handleActivePath"])(this.$route,!0);await this.$router.push("/vab/table/comprehensiveTable"),await this.delVisitedRoute(e)},handleRefreshMainPage(){this.$baseEventBus.$emit("reload-router-view","ComprehensiveTable")}}},u=c,d=a("829d"),m=Object(d["a"])(u,s,l,!1,null,null,null);t["default"]=m.exports}}]);