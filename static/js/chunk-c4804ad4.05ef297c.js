/*!
 *  build: admin-pro 
 *  copyright: vuejs-core.cn  
 *  time: 2025-3-12 21:33:33
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4804ad4"],{1675:function(t,a,r){},"27ae":function(t,a,r){"use strict";r.r(a);var o=function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-drag-container"},[a("vab-query-form",[a("vab-query-form-left-panel",[a("el-button",{attrs:{type:"primary"},on:{click:t.sort}},[t._v("重置顺序")])],1)],1),a("el-row",{attrs:{gutter:20}},[a("vab-draggable",t._b({attrs:{list:t.iconList}},"vab-draggable",t.dragOptions,!1),t._l(t.iconList,(function(r,o){return a("el-col",{key:r.color+o,attrs:{lg:3,md:3,sm:6,xl:3,xs:12}},[a("el-card",{staticClass:"icon-panel",attrs:{shadow:"hover"}},[a("vab-icon",{style:{color:r.color},attrs:{icon:r.icon}}),a("p",[t._v("按住拖拽")])],1)],1)})),1)],1)],1)},e=[],n=(r("05a0"),r("5614"),r("878e")),s=r("3335"),i=r.n(s),c=r("7c98"),l=r.n(c),u={name:"CardDrag",components:{VabDraggable:i.a},data(){return{iconList:[]}},computed:{dragOptions(){return{animation:600,group:"description"}}},created(){this.fetchData()},methods:{randomHexColor(){return l.a.shuffle(["#1890FF","#36CBCB","#4ECB73","#FBD437","#F2637B","#975FE5"])},async fetchData(){const{data:{list:t}}=await Object(n["getIconList"])({pageNo:1,pageSize:32});this.iconList=t.map((t,a)=>({icon:t,color:this.randomHexColor(),order:a+1}))},sort(){const t=this.iconList;this.iconList=t.sort((t,a)=>t.order-a.order)}}},d=u,p=(r("8ea4"),r("829d")),f=Object(p["a"])(d,o,e,!1,null,"72a1448f",null);a["default"]=f.exports},"878e":function(t,a,r){"use strict";r.r(a),r.d(a,"getIconList",(function(){return e}));var o=r("b775");function e(t){return Object(o["default"])({url:"/remixIcon/getList",method:"get",params:t})}},"8ea4":function(t,a,r){"use strict";r("1675")}}]);