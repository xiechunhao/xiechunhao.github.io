/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-12 00:44:12
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[1174],{31174:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(34641);const i={class:"print-container"},r={ref:"imageRef",src:"https://fastly.jsdelivr.net/gh/chuzhixin/image/table/vab-image-1.jpg",style:{display:"block",width:"520px","margin-top":"15px"}};function l(e,t,n,l,p,u){const s=(0,a.g2)("vab-icon"),o=(0,a.g2)("el-button"),c=(0,a.g2)("el-table-column"),d=(0,a.g2)("el-table");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.bF)(o,{type:"primary",onClick:t[0]||(t[0]=t=>e.print("imageRef"))},{default:(0,a.k6)((()=>[(0,a.bF)(s,{icon:"printer-line"}),t[2]||(t[2]=(0,a.eW)(" 打印图片 "))])),_:1}),(0,a.bF)(o,{type:"primary",onClick:t[1]||(t[1]=t=>e.print("tableRef"))},{default:(0,a.k6)((()=>[(0,a.bF)(s,{icon:"printer-line"}),t[3]||(t[3]=(0,a.eW)(" 打印表格 "))])),_:1}),(0,a.bF)(o,{type:"primary",onClick:e.remotePrint},{default:(0,a.k6)((()=>[(0,a.bF)(s,{icon:"printer-line"}),t[4]||(t[4]=(0,a.eW)(" 自定义打印 "))])),_:1},8,["onClick"]),(0,a.Lk)("img",r,null,512),t[5]||(t[5]=(0,a.Lk)("br",null,null,-1)),(0,a.bF)(d,{ref:"tableRef",data:e.tableData,style:{width:"520px"}},{default:(0,a.k6)((()=>[(0,a.bF)(c,{label:"姓名",prop:"name",width:"120px"}),(0,a.bF)(c,{label:"地址",prop:"address"})])),_:1},8,["data"])])}var p=n(37670),u=n(37489),s=n(22919),o=(n(27322),n(38208),(0,a.pM)({name:"Print",setup(){const e=(0,u.Kh)({imageRef:null,tableRef:null,tableData:[{name:"马云",address:"上海市普陀区金沙江路"},{name:"马化腾",address:"上海市普陀区金沙江路"},{name:"李彦宏",address:"上海市普陀区金沙江路"},{name:"刘强东",address:"上海市普陀区金沙江路"}]}),t=async t=>{await(0,p.A)(e[t])},n=()=>{s.s.prompt("","自定义打印",{inputType:"textarea",inputValue:"<h1>Vue Admin Plus</h1>\n<p>vue-admin-beautiful.com</p>",inputErrorMessage:"Invalid Email",confirmButtonText:"打印"}).then((({value:e})=>{(0,p.A)(e)})).catch((()=>{}))};return{...(0,u.QW)(e),print:t,remotePrint:n}}}));function c(e){e.__source="src/views/other/print/index.vue"}var d=n(48499);"function"===typeof c&&c(o);const b=(0,d.A)(o,[["render",l]]);var m=b}}]);