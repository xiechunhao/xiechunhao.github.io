/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-02-19 17:40:53
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4255],{24024:function(t,e,n){n.d(e,{Ed:function(){return r},pL:function(){return l},vS:function(){return o}});var a=n(24380);function o(t){return(0,a.A)({url:"/table/getList",method:"get",params:t})}function r(t){return(0,a.A)({url:"/table/doEdit",method:"post",data:t})}function l(t){return(0,a.A)({url:"/table/doDelete",method:"post",data:t})}},60286:function(t,e,n){n.d(e,{A:function(){return c}});var a=n(1379),o=(n(21332),n(13067),n(34641));const r={class:"top-panel"};function l(t,e){const n=a.uD;return(0,o.uX)(),(0,o.Wv)(n,{span:24},{default:(0,o.k6)((()=>[(0,o.Lk)("div",r,[(0,o.RG)(t.$slots,"default")])])),_:3})}function i(t){t.__source="library/components/VabQueryForm/components/VabQueryFormTopPanel.vue"}var u=n(48499);const d={};"function"===typeof i&&i(d);const s=(0,u.A)(d,[["render",l]]);var c=s},63285:function(t,e,n){n.d(e,{A:function(){return s}});var a=n(3886),o=(n(21332),n(69814),n(34641));function r(t,e){const n=a.S2;return(0,o.uX)(),(0,o.Wv)(n,{class:"vab-query-form",gutter:0},{default:(0,o.k6)((()=>[(0,o.RG)(t.$slots,"default",{},void 0,!0)])),_:3})}function l(t){t.__source="library/components/VabQueryForm/index.vue"}var i=n(48499);const u={};"function"===typeof l&&l(u);const d=(0,i.A)(u,[["render",r],["__scopeId","data-v-172989c8"]]);var s=d},82734:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var a=n(22150),o=(n(21332),n(2984),n(94303)),r=(n(82220),n(29452)),l=(n(89540),n(49231),n(63285)),i=n(60286),u=n(36498),d=(n(57593),n(34641)),s=n(27386);const c={class:"merge-header-container"};function f(t,e,n,f,p,b){const m=u.S2,_=i.A,v=l.A,h=o.o8,g=r.u,k=o.Up,w=a.L;return(0,d.uX)(),(0,d.CE)("div",c,[(0,d.bF)(v,null,{default:(0,d.k6)((()=>[(0,d.bF)(_,{span:24},{default:(0,d.k6)((()=>[(0,d.bF)(m,{loading:t.downloadLoading,type:"primary",onClick:t.handleDownload},{default:(0,d.k6)((()=>e[0]||(e[0]=[(0,d.eW)(" 导出 ")]))),_:1},8,["loading","onClick"])])),_:1})])),_:1}),(0,d.bo)(((0,d.uX)(),(0,d.Wv)(k,{ref:"multipleTable",border:"",data:t.list},{default:(0,d.k6)((()=>[(0,d.bF)(h,{align:"center",label:"序号",width:"55"},{default:(0,d.k6)((({$index:t})=>[(0,d.eW)((0,s.v_)(t+1),1)])),_:1}),(0,d.bF)(h,{align:"center",label:"Main Information"},{default:(0,d.k6)((()=>[(0,d.bF)(h,{label:"Title"},{default:(0,d.k6)((({row:t})=>[(0,d.eW)((0,s.v_)(t.title),1)])),_:1}),(0,d.bF)(h,{align:"center",label:"Author"},{default:(0,d.k6)((({row:t})=>[(0,d.bF)(g,null,{default:(0,d.k6)((()=>[(0,d.eW)((0,s.v_)(t.author),1)])),_:2},1024)])),_:1}),(0,d.bF)(h,{align:"center",label:"Readings"},{default:(0,d.k6)((({row:t})=>[(0,d.eW)((0,s.v_)(t.pageViews),1)])),_:1})])),_:1}),(0,d.bF)(h,{align:"center",label:"Date"},{default:(0,d.k6)((({row:t})=>[(0,d.Lk)("span",null,(0,s.v_)(t.datetime),1)])),_:1})])),_:1},8,["data"])),[[w,t.listLoading]])])}n(64378),n(94480);var p=n(24024),b=n(27849),m=(0,d.pM)({name:"ExportMergeHeaderExcel",data(){return{list:[],listLoading:!0,downloadLoading:!1}},created(){this.fetchData()},methods:{async fetchData(){this.listLoading=!0;const{data:{list:t}}=await(0,p.vS)();this.list=t,this.listLoading=!1},handleDownload(){this.downloadLoading=!0,Promise.all([n.e(6030),n.e(9566)]).then(n.bind(n,89566)).then((t=>{const e=[["Id","Main Information","","","Date"]],n=["","Title","Author","Readings",""],a=["id","title","author","pageViews","datetime"],o=this.list,r=this.formatJson(a,o),l=["A1:A2","B1:D1","E1:E2"];t.export_json_to_excel({multiHeader:e,header:n,merges:l,data:r}),this.downloadLoading=!1}))},formatJson(t,e){return e.map((e=>t.map((t=>"timestamp"===t?(0,b.pe)(e[t]):e[t]))))}}});function _(t){t.__source="src/views/other/excel/exportMergeHeaderExcel.vue"}var v=n(48499);"function"===typeof _&&_(m);const h=(0,v.A)(m,[["render",f]]);var g=h}}]);