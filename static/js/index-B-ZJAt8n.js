var Q=Object.defineProperty,R=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var I=(c,s,n)=>s in c?Q(c,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):c[s]=n,L=(c,s)=>{for(var n in s||(s={}))W.call(s,n)&&I(c,n,s[n]);if(B)for(var n of B(s))Y.call(s,n)&&I(c,n,s[n]);return c},$=(c,s)=>R(c,U(s));var h=(c,s,n)=>new Promise((r,l)=>{var _=o=>{try{a(n.next(o))}catch(d){l(d)}},i=o=>{try{a(n.throw(o))}catch(d){l(d)}},a=o=>o.done?r(o.value):Promise.resolve(o.value).then(_,i);a((n=n.apply(c,s)).next())});import{Y as j,d as v,h as u,o as m,f,w as e,e as t,b as x,m as g,a4 as q,b1 as H,S,b4 as F,bc as J,bd as K,b5 as A,b3 as y,ac as w,_ as D,z as N,n as P,t as k,b6 as X,b7 as Z,a as tt}from"./index-ZnvSvhwo.js";import{u as C}from"./index-DkHmMGFL.js";/* empty css              *//* empty css              */import{u as G}from"./chart-option-CtQs1WEE.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{A as at}from"./materials-D2ZYNzoy.js";function z(){return j.post("/profit_and_loss/lastQ/statistics")}const et=v({__name:"content-data",setup(c){const{loading:s,setLoading:n}=C(),r=u(0),l=u(0);return h(this,null,function*(){try{n(!0);const i=yield z();if(i.code===200){let a=i.data.metric;r.value=Number(a.effective_gmv.toFixed(2)),l.value=Number(a.net_profit.toFixed(2))}}catch(i){}finally{n(!1)}}),(i,a)=>{const o=q,d=H,p=S,b=F,O=J,T=K,M=A,V=y,E=w;return m(),f(E,{loading:g(s),style:{width:"100%"}},{default:e(()=>[t(V,{class:"general-card","header-style":{paddingBottom:"0"},"body-style":{padding:"20px"}},{default:e(()=>[t(M,{cols:24,"row-gap":60,class:"panel"},{default:e(()=>[t(b,{class:"panel-col",span:{xxl:24}},{default:e(()=>[t(p,null,{default:e(()=>[t(o,{size:54,class:"col-avatar"},{default:e(()=>a[0]||(a[0]=[x("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image"},null,-1)])),_:1}),t(d,{title:i.$t("盈亏平衡GMV"),value:r.value,animation:"","show-group-separator":""},null,8,["title","value"])]),_:1})]),_:1}),t(b,{class:"panel-col",span:{xxl:24},style:{"border-right":"none"}},{default:e(()=>[t(p,null,{default:e(()=>[t(o,{size:54,class:"col-avatar"},{default:e(()=>a[1]||(a[1]=[x("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image"},null,-1)])),_:1}),t(d,{title:i.$t("净利润"),value:l.value,animation:""},{suffix:e(()=>[l.value>0?(m(),f(O,{key:0,class:"up-icon"})):(m(),f(T,{key:1,class:"up-icon"}))]),_:1},8,["title","value"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["loading"])}}}),nt=D(et,[["__scopeId","data-v-c38d09c1"]]),ot=v({__name:"content-cost-structure",setup(c){const{loading:s,setLoading:n}=C(),r=u(0),l=u([]),{chartOption:_}=G(a=>({tooltip:{show:!0,trigger:"item"},series:[{type:"pie",radius:["50%","80%"],center:["50%","50%"],label:{formatter:o=>`${o.name} 
 ${(Number(o==null?void 0:o.value[0])/r.value*100).toFixed(2)}%`,fontSize:14,color:a?"rgba(255, 255, 255, 0.7)":"#4E5969"},itemStyle:{borderColor:a?"#232324":"#fff",borderWidth:1},data:l.value}]}));return h(this,null,function*(){try{n(!0);const a=yield z();if(a.code===200){let o=a.data.metric;l.value=[{value:[Number(o.cost.anchor_cost.toFixed(2))],name:"主副播成本"},{value:[Number(o.cost.finance_department.toFixed(2))],name:"财务部"},{value:[Number(o.cost.short_video_department.toFixed(2))],name:"短视频部"},{value:[Number(o.cost.operation_department.toFixed(2))],name:"运营部"}],console.log(l.value,"axisLabelData"),r.value=l.value.reduce((d,p)=>Number(d)+Number(p.value[0]),0)}}catch(a){}finally{n(!1)}}),(a,o)=>{const d=N("Chart"),p=y,b=w;return m(),f(b,{loading:g(s),style:{width:"100%"}},{default:e(()=>[t(p,{class:"general-card","header-style":{paddingBottom:"0"},"body-style":{padding:"20px"}},{title:e(()=>[P(k(a.$t("成本结构")),1)]),default:e(()=>[t(d,{height:"215px",option:g(_)},null,8,["option"])]),_:1})]),_:1},8,["loading"])}}}),st=v({__name:"content-net-profit-margin",setup(c){const{loading:s,setLoading:n}=C(),r=u(0),{chartOption:l}=G(()=>({series:{name:"Pressure",type:"gauge",radius:"100%",progress:{show:!0},detail:{formatter:"{value}%",valueAnimation:!0,fontSize:14},data:[{value:r.value}]}}));return h(this,null,function*(){try{n(!0);const i=yield z();if(i.code===200){let a=i.data.metric;r.value=Number((Math.abs(a.net_profit_margin)*100).toFixed(2))}}catch(i){}finally{n(!1)}}),(i,a)=>{const o=N("Chart"),d=y,p=w;return m(),f(p,{loading:g(s),style:{width:"100%"}},{default:e(()=>[t(d,{class:"general-card","header-style":{paddingBottom:"0"},"body-style":{padding:"20px"}},{title:e(()=>[P(k(i.$t("净利率")),1)]),default:e(()=>[t(o,{height:"215px",option:g(l)},null,8,["option"])]),_:1})]),_:1},8,["loading"])}}}),it=D(st,[["__scopeId","data-v-bb95fa6c"]]),lt=v({__name:"content-table-materials",setup(c){const{loading:s,setLoading:n}=C(),r=u([]);return h(this,null,function*(){try{n(!0);const _=yield at({page:1,page_size:10,orderBy:"total_play",asc:!1,shop_id:null});if(_.code===200){let i=_.data;r.value=i.rows||[]}}catch(_){}finally{n(!1)}}),(_,i)=>{const a=X,o=Z,d=y,p=w;return m(),f(p,{loading:g(s),style:{width:"100%",height:"100%"}},{default:e(()=>[t(d,{class:"general-card"},{default:e(()=>[t(o,{data:r.value,pagination:!1,bordered:!1,scroll:{x:"100%"}},{columns:e(()=>[t(a,{width:90,title:"TOP10素材","data-index":"title",ellipsis:""}),t(a,{width:60,title:"消耗","data-index":"stat_cost"}),t(a,{width:50,title:"ROI","data-index":"prepay_and_pay_order_roi"}),t(a,{width:60,title:"点击率","data-index":"ctr"}),t(a,{width:60,title:"转化率","data-index":"ecp_convert_rate"}),t(a,{width:60,title:"转化数","data-index":"ecp_convert_cnt"}),t(a,{width:65,title:"转化成本","data-index":"ecp_cpa_platform"}),t(a,{width:65,title:"评论次数","data-index":"dy_comment"}),t(a,{width:75,title:"有效播放数","data-index":"valid_play"}),t(a,{width:65,title:"分享次数","data-index":"dy_share"}),t(a,{width:65,title:"点赞次数","data-index":"dy_like"}),t(a,{width:60,title:"展示次数","data-index":"show_cnt"}),t(a,{width:60,title:"播放数","data-index":"total_play"})]),_:1},8,["data"])]),_:1})]),_:1},8,["loading"])}}}),ct=D(lt,[["__scopeId","data-v-c1268cf3"]]),rt={class:"container"},dt={name:"Group"},_t=v($(L({},dt),{setup(c){return u({}),u(),(s,n)=>{const r=N("Breadcrumb"),l=F,_=A,i=S;return m(),tt("div",rt,[t(r,{items:["数据分析","项目盈亏平衡测试"]}),t(i,{direction:"vertical",size:12,fill:"",style:{"margin-bottom":"16px"}},{default:e(()=>[t(i,{direction:"vertical",size:16,fill:""},{default:e(()=>[x("div",null,[t(_,{cols:24,"col-gap":16},{default:e(()=>[t(l,{span:{xxl:8}},{default:e(()=>[t(nt)]),_:1}),t(l,{span:{xxl:8}},{default:e(()=>[t(ot)]),_:1}),t(l,{span:{xxl:8}},{default:e(()=>[t(it)]),_:1})]),_:1})])]),_:1})]),_:1}),t(i,{direction:"vertical",size:12,fill:"",style:{"margin-bottom":"16px"}},{default:e(()=>[t(i,{direction:"vertical",size:16,fill:""},{default:e(()=>[x("div",null,[t(_,{cols:24},{default:e(()=>[t(l,{span:{xxl:24}},{default:e(()=>[t(ct)]),_:1})]),_:1})])]),_:1})]),_:1})])}}})),Dt=D(_t,[["__scopeId","data-v-d7e32c45"]]);export{Dt as default};
