import{_ as t,h as e,g as a}from"./index-jEQxvlyX.js";/* empty css                */import{c as r,a as o,b as s,d as c}from"./img4-B3N7pfvu.js";import{h as l,j as i,k as n,l as d,m as u,p as m,u as g,G as p,z as v,s as h,bd as f,H as b,be as y,I as C,b3 as x,aX as _,c as w,F as k,A as S,N as A,q as B,bf as z,bg as T,aa as D,y as M,K as L,w as I,a as j,r as U,aT as Y,aU as R,aN as H}from"./vendor-Bhb26uf3.js";import{u as V,a as W}from"./useChart-iVp_8ytA.js";import{L as $}from"./index-DctcERib.js";/* empty css                    */import{C as q}from"./vue3-count-to.esm-BafByZ2Q.js";/* empty css               */const F={class:"image-card"},N={class:"image-wrapper"},O={class:"image-placeholder"},G={key:0,class:"read-time"},J={class:"content"},K={key:0,class:"category"},P={class:"title custom-text"},X={class:"stats custom-text"},E={class:"views"},Q={key:0,class:"comments"},Z={class:"date"},tt=t(l({__name:"ImageCard",props:{imageUrl:{},title:{},category:{},readTime:{},views:{},comments:{},date:{}},setup(t){const e=t;return(t,a)=>{const r=C,o=x,s=_;return i(),n("div",F,[d(s,{"body-style":{padding:"0px"},shadow:"hover",class:"art-custom-card"},{default:u((()=>[m("div",N,[d(o,{src:e.imageUrl,fit:"cover",loading:"lazy"},{placeholder:u((()=>[m("div",O,[d(r,null,{default:u((()=>[d(g(p))])),_:1})])])),_:1},8,["src"]),e.readTime?(i(),n("div",G,v(e.readTime)+" 阅读 ",1)):h("",!0)]),m("div",J,[e.category?(i(),n("div",K,v(e.category),1)):h("",!0),m("p",P,v(e.title),1),m("div",X,[m("span",E,[d(r,null,{default:u((()=>[d(g(f))])),_:1}),b(" "+v(e.views),1)]),void 0!==e.comments?(i(),n("span",Q,[d(r,null,{default:u((()=>[d(g(y))])),_:1}),b(" "+v(e.comments),1)])):h("",!0),m("span",Z,v(e.date),1)])])])),_:1})])}}}),[["__scopeId","data-v-301990bf"]]),et={class:"timeline-list-card"},at={class:"art-card art-custom-card"},rt={class:"card-header"},ot={class:"card-title custom-text"},st={class:"card-subtitle custom-text"},ct={class:"timeline-item"},lt={class:"timeline-content"},it={class:"timeline-text"},nt={key:0,class:"timeline-code"},dt=t(l({__name:"TimelineListCard",props:{list:{},title:{default:""},subtitle:{default:""},maxCount:{default:5}},setup(t){const e=t,a=w((()=>65*e.maxCount+"px"));return(t,e)=>{const r=z,o=T,s=D;return i(),n("div",et,[m("div",at,[m("div",rt,[m("p",ot,v(t.title),1),m("p",st,v(t.subtitle),1)]),d(s,{style:B({height:a.value})},{default:u((()=>[d(o,null,{default:u((()=>[(i(!0),n(k,null,S(t.list,(t=>(i(),A(r,{key:t.time,timestamp:t.time,placement:"top",color:t.status,center:!0},{default:u((()=>[m("div",ct,[m("div",lt,[m("span",it,v(t.content),1),t.code?(i(),n("span",nt," #"+v(t.code),1)):h("",!0)])])])),_:2},1032,["timestamp","color"])))),128))])),_:1})])),_:1},8,["style"])])])}}}),[["__scopeId","data-v-4166417f"]]),ut={class:"basic-list-card"},mt={class:"art-card art-custom-card"},gt={class:"card-header"},pt={class:"card-title custom-text"},vt={class:"card-subtitle custom-text"},ht=["innerHTML"],ft={class:"item-content"},bt={class:"item-title custom-text"},yt={class:"item-status custom-text"},Ct={class:"item-time"},xt=t(l({__name:"DataListCard",props:{list:{},title:{default:""},subtitle:{default:""},maxCount:{default:5},showMoreButton:{type:Boolean,default:!1}},emits:["more"],setup(t,{emit:e}){const a=t,r=w((()=>66*(a.maxCount||5)+"px")),o=e,s=()=>{o("more")};return(t,e)=>{const a=D,o=L;return i(),n("div",ut,[m("div",mt,[m("div",gt,[m("p",pt,v(t.title),1),m("p",vt,v(t.subtitle),1)]),d(a,{style:B({height:r.value})},{default:u((()=>[(i(!0),n(k,null,S(t.list,((t,e)=>(i(),n("div",{key:e,class:"list-item"},[t.icon?(i(),n("div",{key:0,class:M(["item-icon custom-text",t.class])},[m("i",{class:"iconfont-sys custom-text",innerHTML:t.icon},null,8,ht)],2)):h("",!0),m("div",ft,[m("div",bt,v(t.title),1),m("div",yt,v(t.status),1)]),m("div",Ct,v(t.time),1)])))),128))])),_:1},8,["style"]),t.showMoreButton?(i(),A(o,{key:0,class:"more-btn",onClick:s},{default:u((()=>e[0]||(e[0]=[b("查看更多")]))),_:1})):h("",!0)])])}}}),[["__scopeId","data-v-306b6867"]]),_t={class:"card-body"},wt={class:"card-content"},kt={class:"data-section"},St={class:"title custom-text"},At={class:"value custom-text"},Bt={class:"chart-legend"},zt={class:"legend-item current"},Tt={class:"legend-item previous"},Dt={class:"chart-section"},Mt=t(l({__name:"DonutChartCard",props:{value:{default:0},title:{default:""},percentage:{default:0},currentYear:{default:"2022"},previousYear:{default:"2021"},height:{default:9},color:{default:""},data:{default:()=>[0,0]}},setup(t){const{chartRef:e,isDark:a,initChart:r}=V(),o=t,s=()=>{const t=o.color||W().themeColor;return{series:[{type:"pie",radius:["70%","90%"],avoidLabelOverlap:!1,label:{show:!1},data:[{value:o.data[0],name:o.currentYear,itemStyle:{color:t}},{value:o.data[1],name:o.previousYear,itemStyle:{color:"#e6e8f7"}}]}]}};return I(a,(()=>r(s()))),j((()=>r(s()))),(t,a)=>{return i(),n("div",{class:"donut-chart-card art-custom-card",style:B({height:`${t.height}rem`})},[m("div",_t,[m("div",wt,[m("div",kt,[m("p",St,v(t.title),1),m("div",null,[m("p",At,v((r=t.value,r.toLocaleString())),1),m("div",{class:M(["percentage custom-text",{"is-increase":t.percentage>0}])},v(t.percentage>0?"+":"")+v(t.percentage)+"% 较去年 ",3)]),m("div",Bt,[m("span",zt,v(t.currentYear),1),m("span",Tt,v(t.previousYear),1)])]),m("div",Dt,[m("div",{ref_key:"chartRef",ref:e,class:"chart-container"},null,512)])])])],4);var r}}}),[["__scopeId","data-v-f434e8d8"]]),Lt={class:"card-body"},It={class:"chart-header"},jt={class:"metric"},Ut={class:"value custom-text"},Yt={class:"label custom-text"},Rt=t(l({__name:"BarChartCard",props:{value:{default:0},label:{default:""},percentage:{default:0},height:{default:11},color:{default:""},chartData:{default:()=>[]},barWidth:{default:"26%"}},setup(t){const{chartRef:e,isDark:a,initChart:r}=V(),o=t,s=()=>{const t=o.color||W().themeColor;return{grid:{top:0,right:0,bottom:15,left:0},xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1},series:[{data:o.chartData,type:"bar",barWidth:o.barWidth,itemStyle:{color:t,borderRadius:2}}]}};return I(a,(()=>r(s()))),j((()=>r(s()))),(t,a)=>(i(),n("div",{class:"bar-chart-card art-custom-card",style:B({height:`${t.height}rem`})},[m("div",Lt,[m("div",It,[m("div",jt,[m("p",Ut,v(t.value),1),m("p",Yt,v(t.label),1)]),m("div",{class:M(["percentage custom-text",{"is-increase":t.percentage>0}])},v(t.percentage>0?"+":"")+v(t.percentage)+"% ",3)]),m("div",{ref_key:"chartRef",ref:e,class:"chart-container",style:B({height:`calc(${t.height}rem - 5rem)`})},null,4)])],4))}}),[["__scopeId","data-v-553e1a3d"]]),Ht={class:"card-body"},Vt={class:"chart-header"},Wt={class:"metric"},$t={class:"value custom-text"},qt={class:"label custom-text"},Ft=t(l({__name:"LineChartCard",props:{value:{default:0},label:{default:""},percentage:{default:0},height:{default:11},color:{default:""},showAreaColor:{type:Boolean,default:!1},chartData:{default:()=>[]}},setup(t){const{chartRef:r,isDark:o,initChart:s}=V(),c=t,l=()=>{const t=c.color||W().themeColor;return{grid:{top:0,right:0,bottom:0,left:0},xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1},series:[{data:c.chartData,type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:3,color:t},areaStyle:c.showAreaColor?{color:new $(0,0,0,1,[{offset:0,color:c.color?e(c.color,.2).rgba:e(a("--el-color-primary"),.2).rgba},{offset:1,color:c.color?e(c.color,.01).rgba:e(a("--el-color-primary"),.01).rgba}])}:void 0}]}};return I(o,(()=>s(l()))),j((()=>s(l()))),(t,e)=>(i(),n("div",{class:"line-chart-card art-custom-card",style:B({height:`${t.height}rem`})},[m("div",Ht,[m("div",Vt,[m("div",Wt,[m("p",$t,v(t.value),1),m("p",qt,v(t.label),1)]),m("div",{class:M(["percentage custom-text",{"is-increase":t.percentage>0}])},v(t.percentage>0?"+":"")+v(t.percentage)+"% ",3)]),m("div",{ref_key:"chartRef",ref:r,class:"chart-container",style:B({height:`calc(${t.height}rem - 5rem)`})},null,4)])],4))}}),[["__scopeId","data-v-47cf39de"]]),Nt={class:"progress-card art-custom-card"},Ot={class:"left"},Gt=["innerHTML"],Jt={class:"right"},Kt={class:"title custom-text"},Pt=t(l({__name:"ProgressCard",props:{percentage:{},title:{},color:{default:"#67C23A"},icon:{},iconColor:{},iconBgColor:{},iconSize:{},strokeWidth:{default:5}},setup(t){const e=t,a=U(0),r=()=>{const t=Date.now(),r=a.value,o=e.percentage,s=()=>{const e=Date.now()-t,c=Math.min(e/500,1);a.value=r+(o-r)*c,c<1&&requestAnimationFrame(s)};requestAnimationFrame(s)};return j((()=>{r()})),I((()=>e.percentage),(()=>{r()})),(t,e)=>{const r=Y;return i(),n("div",Nt,[m("div",{class:"progress-info",style:B({justifyContent:t.icon?"space-between":"flex-start"})},[m("div",Ot,[t.icon?(i(),n("i",{key:0,class:"iconfont-sys custom-text",innerHTML:t.icon,style:B({color:t.iconColor,backgroundColor:t.iconBgColor,fontSize:t.iconSize+"px"})},null,12,Gt)):h("",!0)]),m("div",Jt,[(i(),A(g(q),{key:t.percentage,class:"percentage custom-text",style:B({textAlign:t.icon?"right":"left"}),endVal:t.percentage,duration:2e3,suffix:"%"},null,8,["style","endVal"])),m("p",Kt,v(t.title),1)])],4),d(r,{percentage:a.value,"stroke-width":t.strokeWidth,"show-text":!1,color:t.color},null,8,["percentage","stroke-width","color"])])}}}),[["__scopeId","data-v-f1843472"]]),Xt=["innerHTML"],Et={class:"stats-card__content"},Qt={key:0,class:"stats-card__arrow"},Zt=t(l({__name:"StatsCard",props:{icon:{},title:{},count:{},description:{},iconColor:{},iconBgColor:{},iconSize:{},textColor:{},backgroundColor:{},showArrow:{type:Boolean}},setup:t=>(t,e)=>(i(),n("div",{class:"stats-card art-custom-card",style:B({backgroundColor:t.backgroundColor})},[m("div",{class:"stats-card__icon",style:B({backgroundColor:t.iconBgColor})},[m("i",{class:"iconfont-sys custom-text",innerHTML:t.icon,style:B({color:t.iconColor,fontSize:t.iconSize+"px"})},null,12,Xt)],4),m("div",Et,[t.title?(i(),n("p",{key:0,class:"stats-card__title custom-text",style:B({color:t.textColor})},v(t.title),5)):h("",!0),t.count?(i(),A(g(q),{key:1,class:"stats-card__count custom-text",endVal:t.count,duration:1e3},null,8,["endVal"])):h("",!0),t.description?(i(),n("p",{key:2,class:"stats-card__description custom-text",style:B({color:t.textColor})},v(t.description),5)):h("",!0)]),t.showArrow?(i(),n("div",Qt,e[0]||(e[0]=[m("i",{class:"iconfont-sys custom-text"},"",-1)]))):h("",!0)],4))}),[["__scopeId","data-v-6164e8cc"]]),te={class:"cards"},ee=t(l({__name:"cards",setup(t){const e=[{id:1,title:"销售产品",count:1235,description:"鞋子、牛仔裤、派对服装、手表",icon:"&#xe812;",iconColor:"rgb(var(--art-primary))",iconSize:20,iconBgColor:"rgb(var(--art-info))",textColor:"rgb(var(--art-primary))",backgroundColor:"rgb(var(--art-bg-primary))",showArrow:!1},{id:2,title:"活跃用户",count:5e3,description:"日活跃用户超过5,000+",icon:"&#xe724;",iconColor:"rgb(var(--art-warning))",iconSize:20,iconBgColor:"rgb(var(--art-success))",textColor:"rgb(var(--art-warning))",backgroundColor:"rgb(var(--art-bg-warning))",showArrow:!1},{id:3,title:"总收入",count:35e3,description:"月收入超过¥350,000+",icon:"&#xe70e;",iconColor:"rgb(var(--art-secondary))",iconSize:20,iconBgColor:"rgb(var(--art-secondary))",textColor:"rgb(var(--art-secondary))",backgroundColor:"rgb(var(--art-bg-secondary))",showArrow:!1},{id:4,title:"客户评价",count:4800,description:"平均评分4.8/5",icon:"&#xe82d;",iconColor:"rgb(var(--art-error))",iconSize:20,iconBgColor:"rgb(var(--art-error))",textColor:"rgb(var(--art-error))",backgroundColor:"rgb(var(--art-bg-error))",showArrow:!1}],a=[{id:1,title:"完成进度",percentage:75,color:"rgb(var(--art-success))",icon:"&#xe812;",iconColor:"rgb(var(--art-success))",iconBgColor:"rgb(var(--art-bg-success))",iconSize:20},{id:2,title:"项目进度",percentage:65,color:"rgb(var(--art-primary))",icon:"&#xe724;",iconColor:"rgb(var(--art-primary))",iconBgColor:"rgb(var(--art-bg-primary))",iconSize:20},{id:3,title:"学习进度",percentage:45,color:"rgb(var(--art-error))",icon:"&#xe724;",iconColor:"rgb(var(--art-error))",iconBgColor:"rgb(var(--art-bg-error))",iconSize:20},{id:4,title:"任务进度",percentage:90,color:"rgb(var(--art-secondary))",icon:"&#xe724;",iconColor:"rgb(var(--art-secondary))",iconBgColor:"rgb(var(--art-bg-secondary))",iconSize:20}],l=[{id:1,imageUrl:r,title:"AI技术在医疗领域的创新应用与发展前景",category:"社交",readTime:"2分钟",views:9125,comments:3,date:"12月19日 周一"},{id:2,imageUrl:o,title:"大数据分析助力企业决策的实践案例",category:"技术",readTime:"3分钟",views:7234,comments:5,date:"12月20日 周二"},{id:3,imageUrl:s,title:"区块链技术在供应链管理中的应用",category:"科技",readTime:"4分钟",views:5678,comments:8,date:"12月21日 周三"},{id:4,imageUrl:c,title:"云计算技术发展趋势与未来展望",category:"云技术",readTime:"5分钟",views:4321,comments:6,date:"12月22日 周四"}],g=[{title:"新加坡之行",status:"进行中",time:"5分钟",class:"bg-primary",icon:"&#xe6f2;"},{title:"归档数据",status:"进行中",time:"10分钟",class:"bg-secondary",icon:"&#xe806;"},{title:"客户会议",status:"待处理",time:"15分钟",class:"bg-warning",icon:"&#xe6fb;"},{title:"筛选任务团队",status:"进行中",time:"20分钟",class:"bg-danger",icon:"&#xe813;"},{title:"发送信封给小王",status:"已完成",time:"20分钟",class:"bg-success",icon:"&#xe70c;"}],p=[{time:"上午 09:30",status:"rgb(73, 190, 255)",content:"收到 John Doe 支付的 385.90 美元"},{time:"上午 10:00",status:"rgb(54, 158, 255)",content:"新销售记录",code:"ML-3467"},{time:"上午 12:00",status:"rgb(103, 232, 207)",content:"向 Michael 支付了 64.95 美元"},{time:"下午 14:30",status:"rgb(255, 193, 7)",content:"系统维护通知",code:"MT-2023"},{time:"下午 15:45",status:"rgb(255, 105, 105)",content:"紧急订单取消提醒",code:"OR-9876"},{time:"下午 17:00",status:"rgb(103, 232, 207)",content:"完成每日销售报表"}],v=()=>{};return(t,r)=>{const o=Zt,s=H,c=R,h=Pt,f=Ft,b=Rt,y=Mt,C=xt,x=dt,_=tt;return i(),n("div",te,[r[0]||(r[0]=m("h1",{class:"page-title"},"统计卡片（文字）",-1)),d(c,{gutter:20},{default:u((()=>[(i(),n(k,null,S(e,(t=>d(s,{xs:24,sm:12,md:6,key:t.id},{default:u((()=>[d(o,{icon:t.icon,title:t.title,description:t.description,iconSize:t.iconSize,iconColor:"#fff",iconBgColor:t.iconBgColor,showArrow:t.showArrow},null,8,["icon","title","description","iconSize","iconBgColor","showArrow"])])),_:2},1024))),64))])),_:1}),r[1]||(r[1]=m("h1",{class:"page-title"},"统计卡片（数字滚动）",-1)),d(c,{gutter:20},{default:u((()=>[(i(),n(k,null,S(e,(t=>d(s,{xs:24,sm:12,md:6,key:t.id},{default:u((()=>[d(o,{icon:t.icon,count:t.count,description:t.description,iconSize:t.iconSize,iconColor:"#fff",iconBgColor:t.iconBgColor,showArrow:t.showArrow},null,8,["icon","count","description","iconSize","iconBgColor","showArrow"])])),_:2},1024))),64))])),_:1}),r[2]||(r[2]=m("h1",{class:"page-title"},"统计卡片（自定义样式）",-1)),d(c,{gutter:20},{default:u((()=>[(i(),n(k,null,S(e,(t=>d(s,{xs:24,sm:12,md:6,key:t.id},{default:u((()=>[d(o,{icon:t.icon,title:t.title,description:t.description,iconColor:t.iconColor,textColor:t.textColor,backgroundColor:t.backgroundColor,showArrow:t.showArrow},null,8,["icon","title","description","iconColor","textColor","backgroundColor","showArrow"])])),_:2},1024))),64))])),_:1}),r[3]||(r[3]=m("h1",{class:"page-title"},"进度卡片",-1)),d(c,{gutter:20},{default:u((()=>[(i(),n(k,null,S(a,(t=>d(s,{xs:24,sm:12,md:6,key:t.id},{default:u((()=>[d(h,{percentage:t.percentage,title:t.title,color:t.color},null,8,["percentage","title","color"])])),_:2},1024))),64))])),_:1}),r[4]||(r[4]=m("h1",{class:"page-title"},"进度卡片（icon）",-1)),d(c,{gutter:20},{default:u((()=>[(i(),n(k,null,S(a,(t=>d(s,{xs:24,sm:12,md:6,key:t.id},{default:u((()=>[d(h,{percentage:t.percentage,title:t.title,color:t.color,icon:t.icon,iconColor:t.iconColor,iconBgColor:t.iconBgColor,iconSize:t.iconSize},null,8,["percentage","title","color","icon","iconColor","iconBgColor","iconSize"])])),_:2},1024))),64))])),_:1}),r[5]||(r[5]=m("h1",{class:"page-title"},"图表卡片",-1)),d(c,{gutter:20},{default:u((()=>[d(s,{xs:24,sm:12,md:6},{default:u((()=>[d(f,{value:2545,label:"新用户",percentage:1.2,height:11,chartData:[120,132,101,134,90,230,210]})])),_:1}),d(s,{xs:24,sm:12,md:6},{default:u((()=>[d(b,{value:15480,label:"浏览量",percentage:-4.15,height:11,chartData:[120,100,150,140,90,120,130,110]})])),_:1}),d(s,{xs:24,sm:12,md:6},{default:u((()=>[d(f,{value:2545,label:"粉丝数",percentage:1.2,height:11,showAreaColor:!0,chartData:[120,132,101,134,90,230,210]})])),_:1}),d(s,{xs:24,sm:12,md:6},{default:u((()=>[d(y,{value:36358,title:"粉丝量",percentage:18,data:[70,30],height:11,currentYear:"2022",previousYear:"2021"})])),_:1})])),_:1}),r[6]||(r[6]=m("h1",{class:"page-title"},"数据列表卡片",-1)),d(c,{gutter:20},{default:u((()=>[d(s,{xs:24,sm:12,lg:8},{default:u((()=>[d(C,{list:g,title:"待办事项",subtitle:"今日待处理任务"})])),_:1}),d(s,{xs:24,sm:12,lg:8},{default:u((()=>[d(C,{maxCount:4,list:g,title:"最近活动",subtitle:"近期活动列表",showMoreButton:!0,onMore:v})])),_:1}),d(s,{xs:24,sm:12,lg:8},{default:u((()=>[d(x,{list:p,title:"最近交易",subtitle:"2024年12月20日"})])),_:1})])),_:1}),r[7]||(r[7]=m("h1",{class:"page-title"},"图片卡片",-1)),d(c,{gutter:20},{default:u((()=>[(i(),n(k,null,S(l,(t=>d(s,{xs:24,sm:12,md:6,key:t.id},{default:u((()=>[d(_,{imageUrl:t.imageUrl,title:t.title,category:t.category,readTime:t.readTime,views:t.views,comments:t.comments,date:t.date},null,8,["imageUrl","title","category","readTime","views","comments","date"])])),_:2},1024))),64))])),_:1})])}}}),[["__scopeId","data-v-587b9c96"]]);export{ee as default};
