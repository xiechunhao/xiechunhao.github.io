/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-13 01:30:00
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6683367a"],{"4df0":function(e,t,n){"use strict";n("76aa")},"5fcf":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dynamic-meta-container"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{lg:8,md:12,sm:24,xl:8,xs:24}},[t("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[t("span",[e._v("动态标题")])]},proxy:!0}])},[t("el-button",{on:{click:function(t){return e.handleMeta("DynamicMeta",{title:"vab-demo"})}}},[e._v(" 标题变更为 vab-demo ")]),t("el-button",{on:{click:function(t){return e.handleMeta("DynamicMeta",{title:"动态Meta"})}}},[e._v(" 还原为默认标题 ")])],1)],1),t("el-col",{attrs:{lg:8,md:12,sm:24,xl:8,xs:24}},[t("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[t("span",[e._v("动态徽章")])]},proxy:!0}])},[t("el-button",{on:{click:function(t){return e.handleBadge("DynamicMeta")}}},[e._v("徽章+ 1")]),t("el-button",{on:{click:function(t){return e.resetBadge("DynamicMeta",{badge:"0"})}}},[e._v(" 徽章清零 ")]),t("el-button",{on:{click:function(t){return e.resetBadge("DynamicMeta",{badge:!1})}}},[e._v(" 移除徽章 ")])],1)],1),t("el-col",{attrs:{lg:8,md:12,sm:24,xl:8,xs:24}},[t("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[t("span",[e._v("动态图标")])]},proxy:!0}])},[t("el-popover",{attrs:{"popper-class":"icon-selector-popper",trigger:"hover",width:292},scopedSlots:e._u([{key:"reference",fn:function(){return[t("el-button",[t("vab-icon",{attrs:{icon:e.icon}}),e._v(" 修改图标 "),t("vab-icon",{attrs:{icon:"arrow-down-s-line"}})],1)]},proxy:!0}])},[t("vab-icon-selector",{on:{"handle-icon":e.handleIcon}})],1)],1)],1),t("el-col",{attrs:{lg:8,md:12,sm:24,xl:8,xs:24}},[t("el-card",{attrs:{shadow:"hover"},scopedSlots:e._u([{key:"header",fn:function(){return[t("span",[e._v("动态高亮菜单")])]},proxy:!0}])},[t("el-button",{on:{click:function(t){return e.handleActiveName("Notice","DynamicMeta")}}},[e._v(" 高亮至通知菜单 ")]),t("el-button",{on:{click:function(t){return e.handleActiveName("DynamicMeta")}}},[e._v(" 还原默认高亮菜单 ")])],1)],1)],1)],1)},c=[],o=n("7736"),r=n("f8ab"),i=n("f5b7"),s={name:"DynamicMeta",components:{VabIconSelector:i["default"]},data(){return{badge:0,icon:this.$route.meta.icon,defaultTitle:this.$route.meta.title}},methods:{...Object(o["b"])({changeActiveName:"routes/changeActiveName",changeMenuMeta:"routes/changeMenuMeta",changeTabsMeta:"tabs/changeTabsMeta"}),handleBadge(e){const t=this.badge+1;this.badge=t,this.changeMenuMeta({name:e,meta:{badge:t}})},resetBadge(e,t){this.badge=0,this.changeMenuMeta({name:e,meta:t})},handleMeta(e,t){t.title&&(document.title=Object(r["default"])(t.title)),this.changeMenuMeta({name:e,meta:t}),this.changeTabsMeta({name:e,meta:t})},handleIcon(e){this.icon=e,this.changeMenuMeta({name:"DynamicMeta",meta:{icon:e}}),this.changeTabsMeta({name:"DynamicMeta",meta:{icon:e}})},handleActiveName(e,t){t&&this.changeActiveName(t),setTimeout(()=>{this.changeActiveName(e)},100)}}},l=s,u=(n("4df0"),n("829d")),d=Object(u["a"])(l,a,c,!1,null,"5901ffdf",null);t["default"]=d.exports},"76aa":function(e,t,n){},"878e":function(e,t,n){"use strict";n.r(t),n.d(t,"getIconList",(function(){return c}));var a=n("b775");function c(e){return Object(a["default"])({url:"/remixIcon/getList",method:"get",params:e})}}}]);