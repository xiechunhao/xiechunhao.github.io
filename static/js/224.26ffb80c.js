/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-12 00:28:56
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[224,4122,7928,9962],{2769:function(o,e,t){t.r(e),t.d(e,{default:function(){return d}});var a=t(34641);const n={class:"target"};function i(o,e,t,i,r,s){const l=(0,a.g2)("vab-icon"),c=(0,a.g2)("vab-chart"),f=(0,a.g2)("vab-card");return(0,a.uX)(),(0,a.CE)("div",n,[(0,a.bF)(f,{class:"target-card1",shadow:"hover",skeleton:"","skeleton-rows":7,style:{height:"380px"}},{header:(0,a.k6)((()=>[(0,a.bF)(l,{icon:"body-scan-line"}),e[0]||(e[0]=(0,a.eW)(" 小目标 "))])),default:(0,a.k6)((()=>[(0,a.bF)(c,{class:"target-echart1","init-option":o.initOptions,option:o.option,theme:"vab-echarts-theme"},null,8,["init-option","option"])])),_:1}),(0,a.bF)(f,{class:"target-card2",shadow:"hover",skeleton:"","skeleton-rows":5,style:{height:"305px"}},{header:(0,a.k6)((()=>[(0,a.Lk)("span",null,[(0,a.bF)(l,{icon:"money-cny-box-line"}),e[1]||(e[1]=(0,a.eW)(" 销售额 "))])])),default:(0,a.k6)((()=>[(0,a.bF)(c,{class:"target-echart2","init-options":o.initOptions,option:o.option2,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})])}var r=t(17639),s=(0,a.pM)({components:{VabChart:r["default"]},setup(){const o=["#9E87FF","#73DDFF","#fe9a8b","#F56948","#9E87FF"];return{initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"0%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:[{splitLine:{show:!1},type:"value",show:!1}],yAxis:[{splitLine:{show:!1},axisLine:{show:!1},type:"category",axisTick:{show:!1},data:["莱山区","高新区","芝罘区","牟平区","蓬莱区","开发区"]}],series:[{name:"目标",type:"bar",barWidth:25,label:{show:!0,position:"right",color:"#1890FF",fontSize:14,formatter:({data:o})=>`${o}亿元`},itemStyle:{borderRadius:[0,5,5,0],color:new r["default"].graphic.LinearGradient(0,0,1,0,["#3ED572","#399efd"].map(((o,e)=>({color:o,offset:e}))))},data:[320,302,341,374,390,650]}]},option2:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"4%",left:"2%",right:"2%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisLine:{lineStyle:{color:"#DCE2E8"}},axisTick:{show:!1},axisLabel:{interval:0,color:"#556677",fontSize:12,margin:15},axisPointer:{label:{padding:[0,0,10,0],margin:15,fontSize:12,backgroundColor:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#fff"},{offset:.86,color:"#fff"},{offset:.86,color:"#33c0cd"},{offset:1,color:"#33c0cd"}],global:!1}}},boundaryGap:!1}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#DCE2E8"}},axisLabel:{color:"#556677"},splitLine:{show:!1}}],series:[{name:"销售额",type:"line",data:[1905,1020,3330,512,4463,2214,3330,5412,1205,820,5330,1112],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new r["default"].graphic.LinearGradient(1,1,0,0,[{offset:0,color:"#73DD39"},{offset:1,color:"#73DDFF"}]),shadowColor:"rgba(115,221,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{color:o[1],borderColor:o[1]}}]}}}});function l(o){o.__source="src/views/index/components/Target.vue"}var c=t(48499);"function"===typeof l&&l(s);const f=(0,c.A)(s,[["render",i],["__scopeId","data-v-20dafa07"]]);var d=f},46455:function(o,e,t){t.r(e),t.d(e,{default:function(){return g}});var a=t(34641);const n={class:"order"};function i(o,e,t,i,r,s){const l=(0,a.g2)("vab-icon"),c=(0,a.g2)("vab-count"),f=(0,a.g2)("el-col"),d=(0,a.g2)("el-row"),u=(0,a.g2)("vab-card"),p=(0,a.g2)("vab-chart");return(0,a.uX)(),(0,a.CE)("div",n,[(0,a.bF)(u,{class:"order-card1",shadow:"hover"},{header:(0,a.k6)((()=>[(0,a.bF)(l,{icon:"shopping-bag-2-line"}),e[0]||(e[0]=(0,a.eW)(" 商品 "))])),default:(0,a.k6)((()=>[(0,a.bF)(d,{class:"order-card1-content"},{default:(0,a.k6)((()=>[(0,a.bF)(f,{span:8},{default:(0,a.k6)((()=>[e[1]||(e[1]=(0,a.Lk)("p",null,"已售数量",-1)),(0,a.Lk)("h1",null,[(0,a.bF)(c,{decimals:o.countConfig.decimals,duration:o.countConfig.duration,"end-val":o.countConfig.endVal,prefix:o.countConfig.prefix,separator:o.countConfig.separator,"start-val":o.countConfig.startVal,suffix:o.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])])])),_:1}),(0,a.bF)(f,{span:8},{default:(0,a.k6)((()=>[e[2]||(e[2]=(0,a.Lk)("p",null,"待售数量",-1)),(0,a.Lk)("h1",null,[(0,a.bF)(c,{decimals:o.countConfig.decimals,duration:o.countConfig.duration,"end-val":o.countConfig.endVal,prefix:o.countConfig.prefix,separator:o.countConfig.separator,"start-val":o.countConfig.startVal,suffix:o.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])])])),_:1}),(0,a.bF)(f,{span:8},{default:(0,a.k6)((()=>e[3]||(e[3]=[(0,a.Lk)("p",null,"好评度",-1),(0,a.Lk)("h1",null,"99%",-1)]))),_:1})])),_:1})])),_:1}),(0,a.bF)(u,{class:"order-card2",shadow:"hover",skeleton:"","skeleton-rows":10},{header:(0,a.k6)((()=>[(0,a.Lk)("span",null,[(0,a.bF)(l,{icon:"list-unordered"}),e[4]||(e[4]=(0,a.eW)(" 订单 "))])])),default:(0,a.k6)((()=>[(0,a.bF)(d,{class:"order-card2-content"},{default:(0,a.k6)((()=>[(0,a.bF)(f,{span:12},{default:(0,a.k6)((()=>[e[5]||(e[5]=(0,a.Lk)("p",null,"已完成订单",-1)),(0,a.Lk)("h1",null,[(0,a.bF)(c,{decimals:o.countConfig.decimals,duration:o.countConfig.duration,"end-val":1.5*o.countConfig.endVal,prefix:o.countConfig.prefix,separator:o.countConfig.separator,"start-val":o.countConfig.startVal,suffix:o.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])])])),_:1}),(0,a.bF)(f,{span:12},{default:(0,a.k6)((()=>[e[6]||(e[6]=(0,a.Lk)("p",null,"计划完成订单",-1)),(0,a.Lk)("h1",null,[(0,a.bF)(c,{decimals:o.countConfig.decimals,duration:o.countConfig.duration,"end-val":2.5*o.countConfig.endVal,prefix:o.countConfig.prefix,separator:o.countConfig.separator,"start-val":o.countConfig.startVal,suffix:o.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])])])),_:1}),(0,a.bF)(f,{span:24},{default:(0,a.k6)((()=>[(0,a.bF)(p,{class:"order-chart","init-options":o.initOptions,option:o.option,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})])),_:1})])),_:1})])}var r=t(45182),s=t.n(r),l=t(17639),c=t(96615),f=(0,a.pM)({components:{VabCount:c["default"],VabChart:l["default"]},setup(){const o=["#9E87FF","#73DDFF","#fe9a8b","#F56948","#9E87FF"];return{countConfig:{startVal:0,endVal:s().random(1e3,6e3),decimals:0,prefix:"",suffix:"",separator:",",duration:5e3},initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{left:"3%",containLabel:!0},xAxis:[{type:"category",data:["1季度","2季度","3季度","4季度"],axisLine:{lineStyle:{color:"#DCE2E8"}},axisTick:{show:!1},axisLabel:{interval:0,color:"#556677",fontSize:12,margin:15},axisPointer:{label:{padding:[0,0,10,0],margin:15,fontSize:12,backgroundColor:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#fff"},{offset:.86,color:"#fff"},{offset:.86,color:"#33c0cd"},{offset:1,color:"#33c0cd"}],global:!1}}},boundaryGap:!1}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#DCE2E8"}},axisLabel:{color:"#556677"},splitLine:{show:!1}}],series:[{name:"已完成订单",type:"line",data:[1345,2100,1330,2901],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new l["default"].graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#9effff"},{offset:1,color:"#9E87FF"}]),shadowColor:"rgba(158,135,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{color:o[0],borderColor:o[0]}},{name:"未完成订单",type:"line",data:[1905,1020,3330,512],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new l["default"].graphic.LinearGradient(1,1,0,0,[{offset:0,color:"#73DD39"},{offset:1,color:"#73DDFF"}]),shadowColor:"rgba(115,221,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{color:o[1],borderColor:o[1]}}]}}}});function d(o){o.__source="src/views/index/components/Order.vue"}var u=t(48499);"function"===typeof d&&d(f);const p=(0,u.A)(f,[["render",i],["__scopeId","data-v-03ba8ba2"]]);var g=p},49807:function(o,e,t){t.r(e),t.d(e,{default:function(){return u}});var a=t(34641);const n={class:"workbench-container"};function i(o,e,t,i,r,s){const l=(0,a.g2)("order"),c=(0,a.g2)("el-col"),f=(0,a.g2)("target"),d=(0,a.g2)("el-row");return(0,a.uX)(),(0,a.CE)("div",n,[(0,a.bF)(d,{gutter:20},{default:(0,a.k6)((()=>[(0,a.bF)(c,{lg:8,md:12,sm:24,xl:6,xs:24},{default:(0,a.k6)((()=>[(0,a.bF)(l)])),_:1}),(0,a.bF)(c,{lg:16,md:12,sm:24,xl:18,xs:24},{default:(0,a.k6)((()=>[(0,a.bF)(f)])),_:1})])),_:1})])}var r=t(46455),s=t(2769),l=(0,a.pM)({name:"Workbench",components:{Order:r["default"],Target:s["default"]}});function c(o){o.__source="src/views/index/workbench.vue"}var f=t(48499);"function"===typeof c&&c(l);const d=(0,f.A)(l,[["render",i],["__scopeId","data-v-9c44ed32"]]);var u=d}}]);