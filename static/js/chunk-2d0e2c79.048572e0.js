/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-12 23:20:41
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2c79"],{"7fc7":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabs-container"},[e("el-button",{attrs:{type:"primary"},on:{click:t.closeOthersTabs}},[t._v("关闭其他")]),e("el-button",{attrs:{type:"primary"},on:{click:t.closeLeftTabs}},[t._v("关闭左侧")]),e("el-button",{attrs:{type:"primary"},on:{click:t.closeRightTabs}},[t._v("关闭右侧")]),e("el-button",{attrs:{type:"primary"},on:{click:t.closeAllTabs}},[t._v("关闭全部")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleTabRemove(t.$route.path)}}},[t._v(" 关闭当前 ")])],1)},a=[],o=(s("ca7c"),s("7736")),h=s("9f2e"),l={name:"Tabs",data(){return{hoverRoute:null}},computed:{...Object(o["c"])({routes:"routes/routes",visitedRoutes:"tabs/visitedRoutes"})},methods:{...Object(o["b"])({delVisitedRoute:"tabs/delVisitedRoute",delOthersVisitedRoutes:"tabs/delOthersVisitedRoutes",delLeftVisitedRoutes:"tabs/delLeftVisitedRoutes",delRightVisitedRoutes:"tabs/delRightVisitedRoutes",delAllVisitedRoutes:"tabs/delAllVisitedRoutes"}),async handleTabRemove(t){await this.delVisitedRoute(t),this.isActive(t)&&this.toLastTab()},handleCommand(t){switch(t){case"closeOthersTabs":this.closeOthersTabs();break;case"closeLeftTabs":this.closeLeftTabs();break;case"closeRightTabs":this.closeRightTabs();break;case"closeAllTabs":this.closeAllTabs();break}},async closeOthersTabs(){this.hoverRoute?(await this.$router.push(this.hoverRoute),await this.delOthersVisitedRoutes(this.hoverRoute.path)):await this.delOthersVisitedRoutes(Object(h["handleActivePath"])(this.$route,!0))},async closeLeftTabs(){this.hoverRoute?(await this.$router.push(this.hoverRoute),await this.delLeftVisitedRoutes(this.hoverRoute.path)):await this.delLeftVisitedRoutes(Object(h["handleActivePath"])(this.$route,!0))},async closeRightTabs(){this.hoverRoute?(await this.$router.push(this.hoverRoute),await this.delRightVisitedRoutes(this.hoverRoute.path)):await this.delRightVisitedRoutes(Object(h["handleActivePath"])(this.$route,!0))},async closeAllTabs(){await this.delAllVisitedRoutes(),this.toLastTab()},toLastTab(){const t=this.visitedRoutes.slice(-1)[0];t?this.$router.push(t):this.$router.push("/")},isActive(t){return t===Object(h["handleActivePath"])(this.$route,!0)},isNoClosable(t){return t.meta&&t.meta.noClosable}}},r=l,u=s("829d"),c=Object(u["a"])(r,i,a,!1,null,null,null);e["default"]=c.exports}}]);