import{j as e,_ as a,u as s,k as t,l,f as o}from"./index-jEQxvlyX.js";/* empty css               */import{C as i}from"./vue3-count-to.esm-BafByZ2Q.js";import{h as r,r as n,j as c,k as d,p as u,z as m,u as y,l as p,m as v,F as h,A as g,N as b,y as x,aN as f,aU as S,c as w,w as _,a as L,v as R,q as k,aJ as F,aT as T}from"./vendor-Bhb26uf3.js";import{u as B}from"./useECharts-StGCvcAU.js";import{L as z}from"./index-DctcERib.js";/* empty css                    */const P={class:"custom-card art-custom-card today-sales"},A={class:"custom-card-header"},C={class:"title custom-text"},E={class:"subtitle"},W={class:"export-btn"},I={class:"sales-summary"},O={class:x(["sales-card art-custom-card"])},M=["innerHTML"],V=a(r({__name:"TodaySales",setup(a){const{t:s}=e(),t=n([{label:s("analysis.todaySales.cards.totalSales.label"),value:999,change:s("analysis.todaySales.cards.totalSales.change"),iconfont:"&#xe7d9",class:"bg-primary"},{label:s("analysis.todaySales.cards.totalOrder.label"),value:300,change:s("analysis.todaySales.cards.totalOrder.change"),iconfont:"&#xe70f",class:"bg-success"},{label:s("analysis.todaySales.cards.productSold.label"),value:56,change:s("analysis.todaySales.cards.productSold.change"),iconfont:"&#xe712",class:"bg-warning"},{label:s("analysis.todaySales.cards.newCustomers.label"),value:68,change:s("analysis.todaySales.cards.newCustomers.change"),iconfont:"&#xe77f",class:"bg-error"}]);return(e,a)=>{const l=f,o=S;return c(),d("div",P,[u("div",A,[u("span",C,m(y(s)("analysis.todaySales.title")),1),u("span",E,m(y(s)("analysis.todaySales.subtitle")),1),u("div",W,[a[0]||(a[0]=u("i",{class:"iconfont-sys"},"",-1)),u("span",null,m(y(s)("analysis.todaySales.export")),1)])]),u("div",I,[p(o,{gutter:20},{default:v((()=>[(c(!0),d(h,null,g(t.value,((e,a)=>(c(),b(l,{span:6,xs:24,key:a},{default:v((()=>[u("div",O,[u("i",{class:x(["iconfont-sys custom-text",e.class]),innerHTML:e.iconfont},null,10,M),u("h2",null,[p(y(i),{class:"number custom-text box-title",endVal:e.value,duration:1e3,separator:""},null,8,["endVal"])]),u("p",null,m(e.label),1),u("small",null,m(e.change)+" "+m(y(s)("analysis.todaySales.fromYesterday")),1)])])),_:2},1024)))),128))])),_:1})])])}}}),[["__scopeId","data-v-28cf5623"]]),j={class:"custom-card art-custom-card visitor-insights"},D={class:"custom-card-header"},J={class:"title custom-text"},H={class:"card-body"},G=a(r({__name:"VisitorInsights",setup(a){const{t:l}=e(),o=s(),i=w((()=>o.isDark)),r=n(null),{setOptions:p,removeResize:v,resize:h}=B(r),g=s(),b=w((()=>g.menuOpen)),{width:x}=t();_(b,(()=>{[100,200,300].forEach((e=>{setTimeout(h,e)}))}));const f=w((()=>({tooltip:{trigger:"axis"},grid:{top:20,right:20,bottom:x.value<600?80:40,left:20,containLabel:!0},legend:{data:[l("analysis.visitorInsights.legend.loyalCustomers"),l("analysis.visitorInsights.legend.newCustomers"),l("analysis.visitorInsights.legend.uniqueCustomers")],bottom:0,left:"center",itemWidth:14,itemHeight:14,textStyle:{fontSize:12,color:i.value?"#808290":"#222B45"},icon:"roundRect",itemStyle:{borderRadius:4}},xAxis:{type:"category",data:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:i.value?"#808290":"#7B91B0"}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:i.value?"rgba(255, 255, 255, 0.1)":"#EFF1F3",width:.8}},axisLabel:{color:i.value?"#808290":"#7B91B0"}},series:[{name:l("analysis.visitorInsights.legend.loyalCustomers"),type:"line",smooth:!0,symbol:"none",data:[260,200,150,130,180,270,340,380,300,220,170,130],lineStyle:{color:"#2B8DFA",width:3},itemStyle:{color:"#2B8DFA"}},{name:l("analysis.visitorInsights.legend.newCustomers"),type:"line",smooth:!0,symbol:"none",data:[280,350,300,250,230,210,240,280,320,350,300,200],lineStyle:{color:"#18C653",width:3},itemStyle:{color:"#18C653"}}]})));return _(i,(()=>{p(f.value)})),L((()=>{p(f.value)})),R((()=>{v()})),(e,a)=>(c(),d("div",j,[u("div",D,[u("span",J,m(y(l)("analysis.visitorInsights.title")),1)]),u("div",H,[u("div",{ref_key:"chartRef",ref:r,style:{height:"250px"}},null,512)])]))}}),[["__scopeId","data-v-a354fddf"]]),N={class:"custom-card art-custom-card total-revenue"},q={class:"custom-card-header"},U={class:"title custom-text"},Y={class:"custom-card-body"},$=a(r({__name:"TotalRevenue",setup(a){const{t:t}=e(),l=s(),o=w((()=>l.isDark)),i=n(null),{setOptions:r,removeResize:p,resize:v}=B(i),h=s(),g=w((()=>h.menuOpen));_(g,(()=>{[100,200,300].forEach((e=>{setTimeout(v,e)}))}));const b=()=>{if(i.value){const e={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:20,right:3,bottom:40,left:3,containLabel:!0},legend:{data:[t("analysis.totalRevenue.legend.onlineSales"),t("analysis.totalRevenue.legend.offlineSales")],bottom:0,icon:"circle",itemWidth:10,itemHeight:10,itemGap:15,textStyle:{fontSize:12,color:o.value?"#808290":"#222B45"}},xAxis:{type:"category",data:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:o.value?"#808290":"#7B91B0"}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:o.value?"rgba(255, 255, 255, 0.1)":"#EFF1F3",width:.8}},axisLabel:{color:o.value?"#808290":"#7B91B0"}},series:[{name:t("analysis.totalRevenue.legend.onlineSales"),type:"bar",data:[12,13,5,15,10,15,18],barWidth:"15",itemStyle:{color:"#0095FF",borderRadius:[4,4,4,4]}},{name:t("analysis.totalRevenue.legend.offlineSales"),type:"bar",data:[10,11,20,5,11,13,10],barWidth:"15",itemStyle:{color:"#00E096",borderRadius:[4,4,4,4]}}]};r(e)}};return L((()=>{b()})),_(o,(()=>{b()}),{immediate:!0}),R((()=>{p()})),(e,a)=>(c(),d("div",N,[u("div",q,[u("span",U,m(y(t)("analysis.totalRevenue.title")),1)]),u("div",Y,[u("div",{ref_key:"chartRef",ref:i,style:{height:"300px"}},null,512)])]))}}),[["__scopeId","data-v-ae92d420"]]),K={class:"custom-card art-custom-card customer-satisfaction"},Q={class:"custom-card-header"},X={class:"title custom-text"},Z={class:"custom-card-body"},ee=a(r({__name:"CustomerSatisfaction",setup(a){const{t:t}=e(),l=s(),o=w((()=>l.isDark)),i=n(null),{setOptions:r,removeResize:p,resize:v}=B(i),h=s(),g=w((()=>h.menuOpen));function b(){if(i.value){const e={grid:{top:30,right:20,bottom:50,left:20,containLabel:!0},tooltip:{trigger:"axis",confine:!0},legend:{data:[t("analysis.customerSatisfaction.legend.lastMonth"),t("analysis.customerSatisfaction.legend.thisMonth")],bottom:0,textStyle:{fontSize:12,color:o.value?"#808290":"#222B45"}},xAxis:{type:"category",boundaryGap:!1,data:["Week 0","Week 1","Week 2","Week 3","Week 4","Week 5","Week 6"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},series:[{name:t("analysis.customerSatisfaction.legend.lastMonth"),type:"line",smooth:!0,data:[1800,2800,1800,2300,2600,2500,3500],areaStyle:{opacity:.8,color:new z(0,0,0,1,[{offset:0,color:"rgba(0,157,255,0.33)"},{offset:1,color:"rgba(255,255,255,0)"}])},lineStyle:{width:2,color:"#0086E1"},symbol:"none",itemStyle:{color:"#0095FF"}},{name:t("analysis.customerSatisfaction.legend.thisMonth"),type:"line",smooth:!0,data:[4800,3500,4300,3700,4500,3500,5500],areaStyle:{opacity:.8,color:new z(0,0,0,1,[{offset:0,color:"rgba(7,224,152,0.33)"},{offset:1,color:"rgba(255,255,255,0)"}])},lineStyle:{width:2,color:"#04C283"},symbol:"none",itemStyle:{color:"#07E098"}}]};r(e)}}return _(o,(()=>{b()}),{immediate:!0}),_(g,(()=>{[100,200,300].forEach((e=>{setTimeout(v,e)}))})),L((()=>{b()})),R((()=>{p()})),(e,a)=>(c(),d("div",K,[u("div",Q,[u("span",X,m(y(t)("analysis.customerSatisfaction.title")),1)]),u("div",Z,[u("div",{ref_key:"chartRef",ref:i,style:{height:"300px","margin-top":"10px"}},null,512)])]))}}),[["__scopeId","data-v-c0c64da4"]]),ae={class:"custom-card art-custom-card target-vs-reality"},se={class:"custom-card-header"},te={class:"title custom-text"},le={class:"custom-card-body"},oe={class:"custom-card-footer"},ie={class:"total-item"},re={class:"label"},ne={class:"label-text"},ce={class:"total-item"},de={class:"label"},ue={class:"label-text"},me=a(r({__name:"TargetVsReality",setup(a){const{t:t}=e(),l=n(),{setOptions:o,removeResize:i,resize:r}=B(l),p=s(),v=w((()=>p.menuOpen));return _(v,(()=>{[100,200,300].forEach((e=>{setTimeout(r,e)}))})),L((()=>{o({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,right:0,bottom:0,left:0,containLabel:!0},xAxis:{type:"category",data:["Jan","Feb","Mar","Apr","May","June","July"],axisLabel:{color:"#7B91B0"},axisLine:{show:!1},axisTick:{show:!1}},yAxis:{type:"value",axisLabel:{show:!1},splitLine:{show:!1},axisLine:{show:!1}},series:[{name:"Reality Sales",type:"bar",data:[8e3,7e3,6e3,8500,9e3,1e4,9500],barWidth:"15",itemStyle:{borderRadius:[4,4,0,0],color:"#2B8DFA"}},{name:"Target Sales",type:"bar",data:[1e4,9e3,11e3,1e4,12e3,12500,11500],barWidth:"15",itemStyle:{borderRadius:[4,4,4,4],color:"#95E0FB"}}]})})),R((()=>{i()})),(e,a)=>(c(),d("div",ae,[u("div",se,[u("span",te,m(y(t)("analysis.targetVsReality.title")),1)]),u("div",le,[u("div",{ref_key:"chartRef",ref:l,style:{height:"160px"}},null,512)]),u("div",oe,[u("div",ie,[u("div",re,[a[0]||(a[0]=u("i",{class:"iconfont-sys"},"",-1)),u("div",ne,[u("span",null,m(y(t)("analysis.targetVsReality.realitySales.label")),1),u("span",null,m(y(t)("analysis.targetVsReality.realitySales.sublabel")),1)])]),a[1]||(a[1]=u("div",{class:"value text-color-green"},"8,823",-1))]),u("div",ce,[u("div",de,[a[2]||(a[2]=u("i",{class:"iconfont-sys"},"",-1)),u("div",ue,[u("span",null,m(y(t)("analysis.targetVsReality.targetSales.label")),1),u("span",null,m(y(t)("analysis.targetVsReality.targetSales.sublabel")),1)])]),a[3]||(a[3]=u("div",{class:"value text-color-orange"},"12,122",-1))])])]))}}),[["__scopeId","data-v-03b242eb"]]),ye={class:"custom-card art-custom-card top-products"},pe={class:"custom-card-header"},ve={class:"title custom-text"},he={class:"custom-card-body"},ge=a(r({__name:"TopProducts",setup(a){const{t:s}=e(),t=w((()=>[{name:s("analysis.topProducts.products.homeDecor.name"),popularity:10,sales:s("analysis.topProducts.products.homeDecor.sales")},{name:s("analysis.topProducts.products.disneyBag.name"),popularity:29,sales:s("analysis.topProducts.products.disneyBag.sales")},{name:s("analysis.topProducts.products.bathroom.name"),popularity:65,sales:s("analysis.topProducts.products.bathroom.sales")},{name:s("analysis.topProducts.products.smartwatch.name"),popularity:32,sales:s("analysis.topProducts.products.smartwatch.sales")},{name:s("analysis.topProducts.products.fitness.name"),popularity:78,sales:s("analysis.topProducts.products.fitness.sales")},{name:s("analysis.topProducts.products.earbuds.name"),popularity:41,sales:s("analysis.topProducts.products.earbuds.sales")}])),i=e=>e<25?"#00E096":e<50?"#0095FF":e<75?"#884CFF":"#FE8F0E";return(e,a)=>{const r=F,n=T,h=o;return c(),d("div",ye,[u("div",pe,[u("span",ve,m(y(s)("analysis.topProducts.title")),1)]),u("div",he,[p(h,{data:t.value,style:{width:"100%"},pagination:!1},{default:v((()=>[p(r,{prop:"name",label:y(s)("analysis.topProducts.columns.name"),width:"200"},null,8,["label"]),p(r,{prop:"popularity",label:y(s)("analysis.topProducts.columns.popularity")},{default:v((e=>[p(n,{percentage:e.row.popularity,color:i(e.row.popularity),"stroke-width":5,"show-text":!1},null,8,["percentage","color"])])),_:1},8,["label"]),p(r,{prop:"sales",label:y(s)("analysis.topProducts.columns.sales"),width:"80"},{default:v((e=>[u("span",{style:k({color:i(e.row.popularity),backgroundColor:`rgba(${y(l)(i(e.row.popularity))}, 0.08)`,border:"1px solid",padding:"3px 6px",borderRadius:"4px",fontSize:"12px"})},m(e.row.sales),5)])),_:1},8,["label"])])),_:1},8,["data"])])])}}}),[["__scopeId","data-v-de0b17e9"]]),be={class:"custom-card art-custom-card sales-mapping-country"},xe={class:"custom-card-header"},fe={class:"title custom-text"},Se={class:"custom-card-body"},we=a(r({__name:"SalesMappingByCountry",setup(a){const{t:t}=e(),l=n(),{setOptions:o,removeResize:i,resize:r}=B(l),p=s(),v=w((()=>p.menuOpen));_(v,(()=>{[100,200,300].forEach((e=>{setTimeout(r,e)}))}));const h=[{value:1048,name:"Beijing",itemStyle:{color:"rgba(99, 102, 241, 0.9)"}},{value:735,name:"Shanghai",itemStyle:{color:"rgba(134, 239, 172, 0.9)"}},{value:580,name:"Guangzhou",itemStyle:{color:"rgba(253, 224, 71, 0.9)"}},{value:484,name:"Shenzhen",itemStyle:{color:"rgba(248, 113, 113, 0.9)"}},{value:300,name:"Chengdu",itemStyle:{color:"rgba(125, 211, 252, 0.9)"}}];return L((()=>{o({tooltip:{trigger:"item"},series:[{name:"Sales Mapping",type:"pie",radius:["40%","60%"],avoidLabelOverlap:!1,padAngle:5,itemStyle:{borderRadius:10},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:40,fontWeight:"bold"}},labelLine:{show:!1},data:h}]})})),R((()=>{i()})),(e,a)=>(c(),d("div",be,[u("div",xe,[u("span",fe,m(y(t)("analysis.salesMappingCountry.title")),1)]),u("div",Se,[u("div",{ref_key:"chartRef",ref:l,class:"sales-mapping-chart"},null,512)])]))}}),[["__scopeId","data-v-a0005051"]]),_e={class:"custom-card art-custom-card volume-service-level"},Le={class:"custom-card-header"},Re={class:"title custom-text"},ke={class:"custom-card-body"},Fe=a(r({__name:"VolumeServiceLevel",setup(a){const{t:t}=e(),l=s(),o=w((()=>l.isDark)),i=n(null),{setOptions:r,resize:p}=B(i),v=s(),h=w((()=>v.menuOpen));_(h,(()=>{[100,200,300].forEach((e=>{setTimeout(p,e)}))}));const g=[{volume:800,services:400},{volume:1e3,services:600},{volume:750,services:300},{volume:600,services:250},{volume:450,services:200},{volume:500,services:300}],b=w((()=>({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:[t("analysis.volumeServiceLevel.legend.volume"),t("analysis.volumeServiceLevel.legend.services")],bottom:20,itemWidth:10,itemHeight:10,icon:"circle",textStyle:{fontSize:12,color:o.value?"#808290":"#222B45"}},grid:{left:"20",right:"20",bottom:"60",top:"30",containLabel:!0},xAxis:{type:"category",data:g.map(((e,a)=>`${a+1}`)),axisLine:{show:!0,lineStyle:{color:o.value?"rgba(255, 255, 255, 0.1)":"#EFF1F3",width:.8}},axisTick:{show:!1},axisLabel:{show:!1}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1}},series:[{name:t("analysis.volumeServiceLevel.legend.volume"),type:"bar",stack:"total",data:g.map((e=>e.volume)),itemStyle:{color:"#0095FF",borderRadius:[0,0,4,4]},barWidth:"15"},{name:t("analysis.volumeServiceLevel.legend.services"),type:"bar",stack:"total",data:g.map((e=>e.services)),itemStyle:{color:"#00E096",borderRadius:[4,4,0,0]},barWidth:"50%"}]})));return _(o,(()=>{r(b.value)})),L((()=>{r(b.value)})),(e,a)=>(c(),d("div",_e,[u("div",Le,[u("span",Re,m(y(t)("analysis.volumeServiceLevel.title")),1)]),u("div",ke,[u("div",{ref_key:"chartRef",ref:i,class:"chart-container"},null,512)])]))}}),[["__scopeId","data-v-7a0324ed"]]),Te={class:"analysis-dashboard"},Be=a(r({__name:"index",setup:e=>(e,a)=>{const s=f,t=S;return c(),d("div",Te,[p(t,{gutter:20},{default:v((()=>[p(s,{xl:14,lg:15,xs:24},{default:v((()=>[p(V)])),_:1}),p(s,{xl:10,lg:9,xs:24},{default:v((()=>[p(G)])),_:1})])),_:1}),p(t,{gutter:20,class:"mt-20"},{default:v((()=>[p(s,{xl:10,lg:10,xs:24},{default:v((()=>[p($)])),_:1}),p(s,{xl:7,lg:7,xs:24},{default:v((()=>[p(ee)])),_:1}),p(s,{xl:7,lg:7,xs:24},{default:v((()=>[p(me)])),_:1})])),_:1}),p(t,{gutter:20,class:"mt-20"},{default:v((()=>[p(s,{xl:10,lg:10,xs:24},{default:v((()=>[p(ge)])),_:1}),p(s,{xl:7,lg:7,xs:24},{default:v((()=>[p(we)])),_:1}),p(s,{xl:7,lg:7,xs:24},{default:v((()=>[p(Fe)])),_:1})])),_:1})])}}),[["__scopeId","data-v-6e3ba6d3"]]);export{Be as default};
