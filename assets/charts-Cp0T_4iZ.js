import{g as a,h as e,_ as t}from"./index-B2uLNVFs.js";/* empty css               */import{a as l,u as r}from"./useChart-BPtNPU9f.js";import{L as i}from"./index-DctcERib.js";import{h as s,w as o,a as d,k as c,q as n,j as h,p as u,l as m,m as g,aU as x,aN as p}from"./vendor-Bhb26uf3.js";const f=s({__name:"HBarChart",props:{data:{default:()=>[0,0,0,0,0,0,0]},xAxisData:{default:()=>["一月","二月","三月","四月","五月","六月","七月"]},color:{default:""},height:{default:l().chartHeight},barWidth:{default:"36%"}},setup(e){const{chartRef:t,isDark:l,initChart:s,getAxisLineStyle:u,getAxisLabelStyle:m,getAxisTickStyle:g,getSplitLineStyle:x}=r(),p=e,f=()=>{const e=p.color||new i(0,0,1,0,[{offset:0,color:a("--el-color-primary")},{offset:1,color:a("--el-color-primary-light-3")}]);return{grid:{top:10,right:10,bottom:0,left:0,containLabel:!0},tooltip:{trigger:"item"},xAxis:{type:"value",axisTick:g(),axisLine:u(),axisLabel:m(),splitLine:x()},yAxis:{type:"category",data:p.xAxisData,axisTick:g(),axisLabel:m(),axisLine:u()},series:[{data:p.data,type:"bar",itemStyle:{color:e,borderRadius:4},barWidth:p.barWidth}]}};return o(l,(()=>s(f()))),d((()=>s(f()))),(a,e)=>(h(),c("div",{ref_key:"chartRef",ref:t,class:"h-bar-chart",style:n({height:p.height})},null,4))}}),y=s({__name:"RadarChart",props:{indicator:{default:()=>[{name:"销售",max:100},{name:"管理",max:100},{name:"技术",max:100},{name:"客服",max:100},{name:"开发",max:100}]},data:{default:()=>[{name:"预算分配",value:[80,70,90,85,75]},{name:"实际开销",value:[70,75,85,80,70]}]},height:{default:l().chartHeight},colors:{default:()=>["#67C23A","#409EFF"]}},setup(a){const{chartRef:e,initChart:t,isDark:l}=r(),i=a,s=()=>({tooltip:{trigger:"item"},legend:{data:i.data.map((a=>a.name)),bottom:"0",textStyle:{color:l.value?"#fff":"#333"}},radar:{indicator:i.indicator,splitLine:{lineStyle:{color:l.value?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}},axisLine:{lineStyle:{color:l.value?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}},axisName:{color:"#999"}},series:[{type:"radar",data:i.data.map(((a,e)=>({name:a.name,value:a.value,symbolSize:4,lineStyle:{width:2,color:i.colors[e]},itemStyle:{color:i.colors[e]},areaStyle:{color:i.colors[e],opacity:.2}})))}]});return o(l,(()=>t(s()))),d((()=>t(s()))),(a,t)=>(h(),c("div",{ref_key:"chartRef",ref:e,class:"radar-chart",style:n({height:i.height})},null,4))}}),v=s({__name:"KLineChart",props:{data:{default:()=>[{time:"2024-01-01",open:20,close:23,high:25,low:18},{time:"2024-01-02",open:23,close:21,high:24,low:20},{time:"2024-01-03",open:21,close:25,high:26,low:21}]},height:{default:l().chartHeight}},setup(a){const{chartRef:e,initChart:t,isDark:l,getAxisLineStyle:i,getAxisLabelStyle:s,getAxisTickStyle:u,getSplitLineStyle:m}=r(),g=a,x=()=>({grid:{top:20,right:20,bottom:30,left:60},tooltip:{trigger:"axis",axisPointer:{type:"cross"},formatter:a=>{const e=a[0].data;return`\n            时间：${e[0]}<br/>\n            开盘：${e[1]}<br/>\n            收盘：${e[2]}<br/>\n            最低：${e[3]}<br/>\n            最高：${e[4]}<br/>\n          `}},xAxis:{type:"category",axisTick:u(),data:g.data.map((a=>a.time)),axisLabel:s(),axisLine:i()},yAxis:{type:"value",scale:!0,axisLabel:s(),axisLine:i(),splitLine:m()},series:[{type:"candlestick",data:g.data.map((a=>[a.open,a.close,a.low,a.high])),itemStyle:{color:"#4C87F3",color0:"#8BD8FC",borderColor:"#4C87F3",borderColor0:"#8BD8FC"}}]});return o(l,(()=>t(x()))),d((()=>t(x()))),(a,t)=>(h(),c("div",{ref_key:"chartRef",ref:e,class:"k-line-chart",style:n({height:g.height})},null,4))}}),b=s({__name:"RingChart",props:{data:{default:()=>[{value:35,name:"分类1"},{value:25,name:"分类2"},{value:20,name:"分类3"},{value:20,name:"分类4"}]},height:{default:l().chartHeight},color:{default:()=>[]},radius:{default:()=>["50%","80%"]}},setup(a){const{chartRef:e,initChart:t,isDark:l}=r(),i=a,s=()=>({series:[{name:"数据占比",type:"pie",radius:i.radius,avoidLabelOverlap:!1,itemStyle:{borderRadius:10},label:{show:!0,formatter:"{b}\n{d}%",position:"outside",color:"#999"},emphasis:{label:{show:!0,fontSize:14,fontWeight:"bold"}},labelLine:{show:!0,length:15,length2:25,smooth:!0},data:i.data,color:i.color}]});return o(l,(()=>t(s()))),d((()=>t(s()))),(a,t)=>(h(),c("div",{ref_key:"chartRef",ref:e,class:"ring-chart",style:n({height:i.height})},null,4))}}),L=s({__name:"ScatterChart",props:{data:{default:()=>[{value:[0,0]},{value:[0,0]}]},color:{default:""},height:{default:l().chartHeight},symbolSize:{default:14}},setup(e){const{chartRef:t,initChart:l,isDark:i,getAxisLineStyle:s,getAxisLabelStyle:u,getAxisTickStyle:m,getSplitLineStyle:g}=r(),x=e,p=()=>{const e=x.color||a("--main-color");return{grid:{top:10,right:10,bottom:0,left:3,containLabel:!0},tooltip:{trigger:"item",formatter:function(a){return`(${a.value[0]}, ${a.value[1]})`}},xAxis:{type:"value",axisTick:m(),axisLabel:u(),axisLine:s(),splitLine:g()},yAxis:{type:"value",axisLabel:u(),axisLine:s(),axisTick:m(),splitLine:g()},series:[{data:x.data,type:"scatter",itemStyle:{color:e},symbolSize:x.symbolSize}]}};return o(i,(()=>l(p()))),d((()=>l(p()))),(a,e)=>(h(),c("div",{ref_key:"chartRef",ref:t,class:"scatter-chart",style:n({height:x.height})},null,4))}}),S=t(s({__name:"LineChart",props:{data:{default:()=>[0,0,0,0,0,0,0]},xAxisData:{default:()=>["一月","二月","三月","四月","五月","六月","七月"]},height:{default:l().chartHeight},color:{default:""},lineWidth:{default:3},showAreaColor:{type:Boolean,default:!1}},setup(t){const{chartRef:s,initChart:u,isDark:m,getAxisLineStyle:g,getAxisLabelStyle:x,getAxisTickStyle:p,getSplitLineStyle:f}=r(),y=t,v=()=>{const t=y.color||l().themeColor;return{grid:{top:15,right:15,bottom:0,left:0,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:y.xAxisData,axisTick:p(),axisLine:g(),axisLabel:x()},yAxis:{axisLabel:x(),axisLine:g(),splitLine:f()},series:[{data:y.data,type:"line",smooth:!0,symbol:"none",lineStyle:{width:y.lineWidth,color:t},areaStyle:y.showAreaColor?{color:new i(0,0,0,1,[{offset:0,color:y.color?e(y.color,.2).rgba:e(a("--el-color-primary"),.2).rgba},{offset:1,color:y.color?e(y.color,.01).rgba:e(a("--el-color-primary"),.01).rgba}])}:void 0}]}};return o(m,(()=>u(v()))),d((()=>u(v()))),(a,e)=>(h(),c("div",{ref_key:"chartRef",ref:s,class:"line-chart",style:n({height:y.height})},null,4))}}),[["__scopeId","data-v-f96eae0f"]]),A=s({__name:"BarChart",props:{data:{default:()=>[0,0,0,0,0,0,0]},xAxisData:{default:()=>["一月","二月","三月","四月","五月","六月","七月"]},color:{default:""},height:{default:l().chartHeight},barWidth:{default:"40%"}},setup(e){const{chartRef:t,isDark:l,initChart:s,getAxisLineStyle:u,getAxisLabelStyle:m,getAxisTickStyle:g,getSplitLineStyle:x}=r(),p=e,f=()=>{const e=p.color||new i(0,0,0,1,[{offset:0,color:a("--el-color-primary-light-4")},{offset:1,color:a("--el-color-primary")}]);return{grid:{top:15,right:0,bottom:0,left:0,containLabel:!0},tooltip:{trigger:"item"},xAxis:{type:"category",data:p.xAxisData,axisTick:g(),axisLine:u(),axisLabel:m()},yAxis:{axisLabel:m(),axisLine:u(),splitLine:x()},series:[{data:p.data,type:"bar",itemStyle:{borderRadius:4,color:e},barWidth:p.barWidth}]}};return o(l,(()=>s(f()))),d((()=>s(f()))),(a,e)=>(h(),c("div",{ref_key:"chartRef",ref:t,class:"bar-chart",style:n({height:p.height})},null,4))}}),_={class:"charts"},C={class:"card art-custom-card"},k={class:"card art-custom-card"},D={class:"card art-custom-card"},w={class:"card art-custom-card"},R={class:"card art-custom-card"},F={class:"card art-custom-card"},B={class:"card art-custom-card"},T={class:"card art-custom-card"},W={class:"card art-custom-card"};const H=t({},[["render",function(a,e){const t=A,l=p,r=S,i=L,s=b,o=v,d=y,n=f,H=x;return h(),c("div",_,[e[9]||(e[9]=u("h1",{class:"page-title"},"图表",-1)),m(H,{gutter:20},{default:g((()=>[m(l,{xs:24,md:12,lg:8},{default:g((()=>[u("div",C,[e[0]||(e[0]=u("div",{class:"card-header"},[u("span",null,"柱状图")],-1)),m(t,{data:[50,80,120,90,60,70,100],xAxisData:["一月","二月","三月","四月","五月","六月","七月"]})])])),_:1}),m(l,{xs:24,md:12,lg:8},{default:g((()=>[u("div",k,[e[1]||(e[1]=u("div",{class:"card-header"},[u("span",null,"折线图")],-1)),m(r,{data:[58,15,82,35,90,82,85],xAxisData:["一月","二月","三月","四月","五月","六月","七月"]})])])),_:1}),m(l,{xs:24,md:12,lg:8},{default:g((()=>[u("div",D,[e[2]||(e[2]=u("div",{class:"card-header"},[u("span",null,"折线图（渐变背景）")],-1)),m(r,{data:[58,15,82,35,90,82,85],xAxisData:["一月","二月","三月","四月","五月","六月","七月"],showAreaColor:!0})])])),_:1}),m(l,{xs:24,md:12,lg:8},{default:g((()=>[u("div",w,[e[3]||(e[3]=u("div",{class:"card-header"},[u("span",null,"散点图")],-1)),m(i,{data:[{value:[1,3]},{value:[2,4]},{value:[3,5]},{value:[4,6]},{value:[5,7]},{value:[6,8]},{value:[7,7]},{value:[8,9]},{value:[9,8]},{value:[10,6]},{value:[11,7]},{value:[12,8]}],width:"100%"})])])),_:1}),m(l,{xs:24,md:12,lg:8},{default:g((()=>[u("div",R,[e[4]||(e[4]=u("div",{class:"card-header"},[u("span",null,"环形图")],-1)),m(s,{data:[{value:30,name:"分类A"},{value:25,name:"分类B"},{value:45,name:"分类C"}],color:["#4C87F3","#93F1B4","#8BD8FC"]})])])),_:1}),m(l,{xs:24,md:12,lg:8},{default:g((()=>[u("div",F,[e[5]||(e[5]=u("div",{class:"card-header"},[u("span",null,"饼图")],-1)),m(s,{data:[{value:30,name:"分类A"},{value:25,name:"分类B"},{value:45,name:"分类C"}],color:["#4C87F3","#93F1B4","#8BD8FC"],radius:["0%","80%"]})])])),_:1}),m(l,{xs:24,md:12,lg:8},{default:g((()=>[u("div",B,[e[6]||(e[6]=u("div",{class:"card-header"},[u("span",null,"k线图")],-1)),m(o,{data:[{time:"2024-01-01",open:20,close:23,high:25,low:18},{time:"2024-01-02",open:23,close:21,high:24,low:20},{time:"2024-01-03",open:21,close:25,high:26,low:21}]})])])),_:1}),m(l,{xs:24,md:12,lg:8},{default:g((()=>[u("div",T,[e[7]||(e[7]=u("div",{class:"card-header"},[u("span",null,"雷达图")],-1)),m(d,{indicator:[{name:"销售",max:100},{name:"管理",max:100},{name:"技术",max:100},{name:"客服",max:100},{name:"开发",max:100}],data:[{name:"预算分配",value:[80,70,90,85,75]},{name:"实际开销",value:[70,75,85,80,70]}],colors:["#8BD8FC","#409EFF"]})])])),_:1}),m(l,{xs:24,md:12,lg:8},{default:g((()=>[u("div",W,[e[8]||(e[8]=u("div",{class:"card-header"},[u("span",null,"柱状图（水平）")],-1)),m(n,{data:[50,80,120,90,60],xAxisData:["产品A","产品B","产品C","产品D","产品E"]})])])),_:1})])),_:1})])}],["__scopeId","data-v-73753975"]]);export{H as default};
