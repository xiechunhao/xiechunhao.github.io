/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-12-11 15:03:04
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7371],{47371:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var a=t(51283),i=(t(72688),t(15144),t(96211),t(31542)),r=(t(87157),t(34641));const l={class:"print-container"},p={ref:"imageRef",src:"https://fastly.jsdelivr.net/gh/chuzhixin/image/table/vab-image-1.jpg",style:{display:"block",width:"520px","margin-top":"15px"}};function u(e,n,t,u,s,o){const c=(0,r.g2)("vab-icon"),d=i.S2,m=a.o8,b=a.Up;return(0,r.uX)(),(0,r.CE)("div",l,[(0,r.bF)(d,{type:"primary",onClick:n[0]||(n[0]=n=>e.print("imageRef"))},{default:(0,r.k6)((()=>[(0,r.bF)(c,{icon:"printer-line"}),n[2]||(n[2]=(0,r.eW)(" 打印图片 "))])),_:1}),(0,r.bF)(d,{type:"primary",onClick:n[1]||(n[1]=n=>e.print("tableRef"))},{default:(0,r.k6)((()=>[(0,r.bF)(c,{icon:"printer-line"}),n[3]||(n[3]=(0,r.eW)(" 打印表格 "))])),_:1}),(0,r.bF)(d,{type:"primary",onClick:e.remotePrint},{default:(0,r.k6)((()=>[(0,r.bF)(c,{icon:"printer-line"}),n[4]||(n[4]=(0,r.eW)(" 自定义打印 "))])),_:1},8,["onClick"]),(0,r.Lk)("img",p,null,512),n[5]||(n[5]=(0,r.Lk)("br",null,null,-1)),(0,r.bF)(b,{ref:"tableRef",data:e.tableData,style:{width:"520px"}},{default:(0,r.k6)((()=>[(0,r.bF)(m,{label:"姓名",prop:"name",width:"120px"}),(0,r.bF)(m,{label:"地址",prop:"address"})])),_:1},8,["data"])])}var s=t(88697),o=t(37489),c=t(97319),d=(t(32369),t(1912),(0,r.pM)({name:"Print",setup(){const e=(0,o.Kh)({imageRef:null,tableRef:null,tableData:[{name:"马云",address:"上海市普陀区金沙江路"},{name:"马化腾",address:"上海市普陀区金沙江路"},{name:"李彦宏",address:"上海市普陀区金沙江路"},{name:"刘强东",address:"上海市普陀区金沙江路"}]}),n=async n=>{await(0,s.A)(e[n])},t=()=>{c.s.prompt("","自定义打印",{inputType:"textarea",inputValue:"<h1>Vue Admin Plus</h1>\n<p>vue-admin-beautiful.com</p>",inputErrorMessage:"Invalid Email",confirmButtonText:"打印"}).then((({value:e})=>{(0,s.A)(e)})).catch((()=>{}))};return{...(0,o.QW)(e),print:n,remotePrint:t}}}));function m(e){e.__source="src/views/other/print/index.vue"}var b=t(48499);"function"===typeof m&&m(d);const f=(0,b.A)(d,[["render",u]]);var h=f}}]);