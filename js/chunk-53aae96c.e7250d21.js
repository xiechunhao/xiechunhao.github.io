(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53aae96c"],{"5b68":function(t,n,i){"use strict";var a=function(){var t=this,n=t._self._c;return n("div",{staticClass:"head-box"},[n("div",{staticClass:"nav f-r-y-c",staticStyle:{background:"rgba(17, 32, 47, 1)"}},[n("img",{attrs:{src:i("9d64"),alt:"","data-aos":"fade-right"},on:{click:function(n){return t.goUrl("/home")}}}),n("div",{staticClass:"f-r-y-c f-right",attrs:{"data-aos":"fade-left"}},[n("span",{staticClass:"connectWallet iconfont icon-qianbao",on:{click:function(n){return t.goUrl("/wallet")}}}),n("span",{staticClass:"menu iconfont icon-gengduo",on:{click:function(n){t.showRight=!0}}})])]),t.showRight?n("van-popup",{style:{width:"50%",height:"100%"},attrs:{position:"top"},model:{value:t.showRight,callback:function(n){t.showRight=n},expression:"showRight"}},[n("div",{staticClass:"menu-popup",attrs:{"data-aos-duration":200,"data-aos":"fade-left"}},[n("div",{staticClass:"menu-top"},[n("img",{attrs:{src:i("9d64"),alt:""}}),n("span",{staticClass:"iconfont icon-guanbi",on:{click:function(n){t.showRight=!1}}})]),n("div",{staticClass:"menu-list f-1 f-c-x-c"},t._l(t.menuList,(function(i,a){return n("div",{key:a,staticClass:"menu"},[n("div",{class:["meun-item",i.path==t.$route.path&&"active"],attrs:{"data-aos-duration":String(500+50*a),"data-aos":"fade-left"},on:{click:function(n){return t.goUrl(i.path)}}},[n("span",{class:["iconfont",i.icon]}),n("span",{staticClass:"meun-name"},[t._v(t._s(i.menuName))])])])})),0)])]):t._e()],1)},o=[],s=(i("7d1e"),{components:{},data(){return{showRight:!1,menuList:[{key:1,menuName:"首页",path:"/home",icon:"icon-shouye"},{key:2,menuName:"NFT仓库",path:"/net",icon:"icon-icon-storage2"},{key:3,menuName:"钱包资产",path:"/wallet",icon:"icon-qianbao"},{key:4,menuName:"我的社群",path:"/community",icon:"icon-shequ"},{key:5,menuName:"邀请链接",path:"/invite",icon:"icon-lianjie"},{key:6,menuName:"生态建设",path:"/ecology",icon:"icon-shengtaiquan"},{key:7,menuName:"排名",path:"/rank",icon:"icon-paiming"},{key:8,menuName:"公益",path:"/welfare",icon:"icon-gongyi"},{key:9,menuName:"节点",path:"/node",icon:"icon-web"}]}},methods:{goUrl(t="/home"){console.log(t),this.$router.push({path:t})}}}),e=s,c=(i("739e"),i("829d")),l=Object(c["a"])(e,a,o,!1,null,null,null);n["a"]=l.exports},"6cc4":function(t,n,i){t.exports=i.p+"img/dai01.d3ebdaf2.png"},"739e":function(t,n,i){"use strict";i("9e02")},"88e6":function(t,n,i){"use strict";i.r(n);var a=function(){var t=this,n=t._self._c;return n("div",[n("Head"),n("div",{staticClass:"bx-box"},t._l(1,(function(a,o){return n("div",{key:o,staticClass:"item"},[n("img",{attrs:{src:i("9aee"),alt:""}}),n("div",{staticClass:"kai",on:{click:function(n){return t.clickItem(a)}}},[n("span",[t._v("开启")])])])})),0),n("van-popup",{style:{height:"200px",padding:"80px 20px 10px 20px",background:"transparent",width:"100vw"},model:{value:t.showGift,callback:function(n){t.showGift=n},expression:"showGift"}},[n("div",{staticClass:"gift"},[n("div",{staticClass:"light"}),n("div",{staticClass:"get"}),t._l(t.list,(function(i,a){return n("div",{key:a,staticClass:"item"},[n("img",{attrs:{src:i.src,alt:""}}),n("span",{staticClass:"title"},[t._v(" ETH "),n("i",[t._v("0.0001")])])])}))],2)])],1)},o=[],s=i("5b68"),e={components:{Head:s["a"]},data(){return{showGift:!1,list:[{id:1,src:i("6cc4")}]}},methods:{clickItem(){this.showGift=!0}}},c=e,l=(i("a319"),i("829d")),r=Object(l["a"])(c,a,o,!1,null,"206d8550",null);n["default"]=r.exports},"9aee":function(t,n,i){t.exports=i.p+"img/bx1.d0cc38bf.png"},"9d64":function(t,n,i){t.exports=i.p+"img/logo.5c46d7a5.png"},"9e02":function(t,n,i){t.exports={promotioncolorfirst:"#294ccd",promotioncolorsecond:"#f59a23",promotioncolorthird:"olive"}},a319:function(t,n,i){"use strict";i("fcec")},fcec:function(t,n,i){}}]);