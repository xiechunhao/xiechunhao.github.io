(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be729e3a"],{1956:function(t,n,o){t.exports={promotioncolorfirst:"#294ccd",promotioncolorsecond:"#f59a23",promotioncolorthird:"olive"}},"5b68":function(t,n,o){"use strict";var a=function(){var t=this,n=t._self._c;return n("div",{staticClass:"head-box"},[n("div",{staticClass:"nav f-r-y-c",staticStyle:{background:"rgba(17, 32, 47, 1)"}},[n("img",{attrs:{src:o("9d64"),alt:"","data-aos":"fade-right"},on:{click:function(n){return t.goUrl("/home")}}}),n("div",{staticClass:"f-r-y-c f-right",attrs:{"data-aos":"fade-left"}},[n("span",{staticClass:"connectWallet iconfont icon-qianbao",on:{click:function(n){return t.goUrl("/wallet")}}}),n("span",{staticClass:"menu iconfont icon-gengduo",on:{click:function(n){t.showRight=!0}}})])]),t.showRight?n("van-popup",{style:{width:"50%",height:"100%"},attrs:{position:"top"},model:{value:t.showRight,callback:function(n){t.showRight=n},expression:"showRight"}},[n("div",{staticClass:"menu-popup",attrs:{"data-aos-duration":200,"data-aos":"fade-left"}},[n("div",{staticClass:"menu-top"},[n("img",{attrs:{src:o("9d64"),alt:""}}),n("span",{staticClass:"iconfont icon-guanbi",on:{click:function(n){t.showRight=!1}}})]),n("div",{staticClass:"menu-list f-1 f-c-x-c"},t._l(t.menuList,(function(o,a){return n("div",{key:a,staticClass:"menu"},[n("div",{class:["meun-item",o.path==t.$route.path&&"active"],attrs:{"data-aos-duration":String(500+50*a),"data-aos":"fade-left"},on:{click:function(n){return t.goUrl(o.path)}}},[n("span",{class:["iconfont",o.icon]}),n("span",{staticClass:"meun-name"},[t._v(t._s(o.menuName))])])])})),0)])]):t._e()],1)},i=[],e=(o("7d1e"),{components:{},data(){return{showRight:!1,menuList:[{key:1,menuName:"首页",path:"/home",icon:"icon-shouye"},{key:2,menuName:"NFT仓库",path:"/net",icon:"icon-icon-storage2"},{key:3,menuName:"钱包资产",path:"/wallet",icon:"icon-qianbao"},{key:4,menuName:"我的社群",path:"/community",icon:"icon-shequ"},{key:5,menuName:"邀请链接",path:"/invite",icon:"icon-lianjie"},{key:6,menuName:"生态建设",path:"/ecology",icon:"icon-shengtaiquan"},{key:7,menuName:"排名",path:"/rank",icon:"icon-paiming"},{key:8,menuName:"公益",path:"/welfare",icon:"icon-gongyi"},{key:9,menuName:"节点",path:"/node",icon:"icon-web"}]}},methods:{goUrl(t="/home"){console.log(t),this.$router.push({path:t})}}}),c=e,s=(o("cda1"),o("829d")),l=Object(s["a"])(c,a,i,!1,null,null,null);n["a"]=l.exports},"9d64":function(t,n,o){t.exports=o.p+"img/logo.9d12a4b3.png"},cda1:function(t,n,o){"use strict";o("1956")},d2e1:function(t,n,o){"use strict";o.r(n);var a=function(){var t=this,n=t._self._c;return n("div",[n("Head"),n("div",{staticStyle:{color:"#999","padding-top":"100px","text-align":"center","font-size":"16px"}},[t._v("未开发")])],1)},i=[],e=o("5b68"),c={components:{Head:e["a"]}},s=c,l=o("829d"),u=Object(l["a"])(s,a,i,!1,null,null,null);n["default"]=u.exports}}]);