var k=Object.defineProperty,W=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var A=(i,o,a)=>o in i?k(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a,V=(i,o)=>{for(var a in o||(o={}))q.call(o,a)&&A(i,a,o[a]);if(M)for(var a of M(o))G.call(o,a)&&A(i,a,o[a]);return i},B=(i,o)=>W(i,N(o));var D=(i,o,a)=>new Promise((d,l)=>{var s=_=>{try{e(a.next(_))}catch(r){l(r)}},c=_=>{try{e(a.throw(_))}catch(r){l(r)}},e=_=>_.done?d(_.value):Promise.resolve(_.value).then(s,c);e((a=a.apply(i,o)).next())});import{d as x,o as h,f as v,w as n,e as t,$ as H,b as m,n as C,t as I,b1 as Y,a5 as J,b2 as K,b3 as b,ac as $,_ as w,Y as E,h as g,m as u,p as Q,q as U,l as X,b4 as T,b5 as O,b6 as P,b7 as L,z as S,a as Z,S as tt}from"./index-ZnvSvhwo.js";import{u as F}from"./index-DkHmMGFL.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{u as j}from"./chart-option-CtQs1WEE.js";import{u as et}from"./themes-DiqeDmz3.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{A as at}from"./materials-D2ZYNzoy.js";const nt={class:"content-wrap"},ot={class:"content"},lt={class:"desc"},it=x({__name:"chain-item",props:{renderData:{type:Object,default:""},loading:{type:Boolean,default:""},cardStyle:{type:Object,default:()=>({})}},setup(i){const o=i;return(a,d)=>{const l=Y,s=J,c=K,e=b,_=$;return h(),v(_,{loading:i.loading,style:{width:"100%"}},{default:n(()=>[t(e,{bordered:!1,style:H(i.cardStyle)},{default:n(()=>[m("div",nt,[m("div",ot,[t(l,{title:o.renderData.Name,value:o.renderData.Value,"value-from":0,animation:"","show-group-separator":""},null,8,["title","value"]),m("div",lt,[t(s,{type:"secondary",class:"label"},{default:n(()=>[C(I(a.$t("目标")),1)]),_:1}),t(s,{type:"danger"},{default:n(()=>[C(I(o.renderData.Target)+" ",1),t(c)]),_:1})])])])]),_:1},8,["style"])]),_:1},8,["loading"])}}}),y=w(it,[["__scopeId","data-v-877be0a0"]]);function st(){return E.post("/shotVideo/statistics")}function rt(){return E.post("shotVideo/project/list")}function ct(){return E.post("shotVideo/material/tag")}function dt(){return E.post("shotVideo/project/consumption")}const _t={class:"header"},pt={class:"grid-item"},ut={class:"grid-item"},mt={class:"grid-item"},ft={class:"grid-item"},gt={class:"grid-item"},ht={class:"grid-item"},yt={class:"grid-item"},xt=x({__name:"content-top",setup(i){const{isDark:o}=et(),{loading:a,setLoading:d}=F(),l=g({});return D(this,null,function*(){try{d(!0);const c=yield st();if(c.code===200){let e=c.data;l.value=e}}catch(c){}finally{d(!1)}}),(c,e)=>{const _=b;return h(),v(_,{class:"general-card"},{default:n(()=>[m("div",_t,[m("div",pt,[t(y,{"card-style":{background:u(o)?"linear-gradient(180deg, #284991 0%, #122B62 100%)":"linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)"},loading:u(a),renderData:l.value.accumulated_consumption},null,8,["card-style","loading","renderData"])]),m("div",ut,[t(y,{"card-style":{background:u(o)?" linear-gradient(180deg, #3D492E 0%, #263827 100%)":"linear-gradient(180deg, #F5FEF2 0%, #E6FEEE 100%)"},loading:u(a),renderData:l.value.payment_ROI},null,8,["card-style","loading","renderData"])]),m("div",mt,[t(y,{"card-style":{background:u(o)?"linear-gradient(180deg, #294B94 0%, #0F275C 100%)":"linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)"},loading:u(a),renderData:l.value.click_through_rate},null,8,["card-style","loading","renderData"])]),m("div",ft,[t(y,{"card-style":{background:u(o)?"linear-gradient(180deg, #312565 0%, #201936 100%)":"linear-gradient(180deg, #F7F7FF 0%, #ECECFF 100%)"},loading:u(a),renderData:l.value.conversion_rate},null,8,["card-style","loading","renderData"])]),m("div",gt,[t(y,{"card-style":{background:u(o)?"linear-gradient(180deg, #284991 0%, #122B62 100%)":"linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)"},loading:u(a),renderData:l.value.s3_completion_rate},null,8,["card-style","loading","renderData"])]),m("div",ht,[t(y,{"card-style":{background:u(o)?" linear-gradient(180deg, #3D492E 0%, #263827 100%)":"linear-gradient(180deg, #F5FEF2 0%, #E6FEEE 100%)"},loading:u(a),renderData:l.value.completion_rate},null,8,["card-style","loading","renderData"])]),m("div",yt,[t(y,{"card-style":{background:u(o)?"linear-gradient(180deg, #294B94 0%, #0F275C 100%)":"linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)"},loading:u(a),renderData:l.value.transaction_amount},null,8,["card-style","loading","renderData"])])])]),_:1})}}}),vt=w(xt,[["__scopeId","data-v-ca4e6a48"]]),bt={};function wt(i,o){const a=Q,d=U,l=X,s=b,c=T,e=O,_=$;return h(),v(_,{style:{width:"100%"}},{default:n(()=>[t(e,{cols:24,"row-gap":16},{default:n(()=>[t(c,{span:{xxl:24}},{default:n(()=>[t(s,{class:"general-card"},{title:n(()=>[C(I(i.$t("ROI范围")),1)]),default:n(()=>[t(l,{layout:"vertical"},{default:n(()=>[t(d,{label:i.$t("设置ROI范围"),field:"video.acquisition.frameRate"},{default:n(()=>[t(a,{placeholder:i.$t("请输入")},null,8,["placeholder"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1}),t(c,{span:{xxl:24}},{default:n(()=>[t(s,{class:"general-card"},{title:n(()=>[C(I(i.$t("消耗范围")),1)]),default:n(()=>[t(l,{layout:"vertical"},{default:n(()=>[t(d,{label:i.$t("设置消耗范围"),field:"video.acquisition.frameRate"},{default:n(()=>[t(a,{placeholder:i.$t("请输入")},null,8,["placeholder"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Dt=w(bt,[["render",wt]]),Ct=x({__name:"content-table",setup(i){const{loading:o,setLoading:a}=F(),d=g([]);return D(this,null,function*(){try{a(!0);const s=yield rt();if(s.code===200){let c=s.data;d.value=c.metric||[]}}catch(s){}finally{a(!1)}}),(s,c)=>{const e=P,_=L,r=b,p=$;return h(),v(p,{loading:u(o),style:{width:"100%",height:"100%"}},{default:n(()=>[t(r,{class:"general-card"},{default:n(()=>[t(_,{size:"small",data:d.value,pagination:!1,bordered:!1,scroll:{x:"100%",y:"350px"}},{columns:n(()=>[t(e,{title:"项目名称",width:140,"data-index":"ProjectName",ellipsis:"",fixed:"left"}),t(e,{title:"消耗",width:80,"data-index":"Consumption"}),t(e,{title:"素材总数量",width:110,"data-index":"TotalMaterialCount"}),t(e,{title:"环比素材总数量",width:130,"data-index":"MoM_TotalMaterialCount"}),t(e,{title:"有效素材数量",width:120,"data-index":"ValidMaterialCount"}),t(e,{title:"有效素材比例",width:120,"data-index":"ValidMaterialPercentage"}),t(e,{title:"环比有效素材",width:120,"data-index":"MoM_ValidMaterialPercentage"}),t(e,{title:"无效素材消耗",width:120,"data-index":"InvalidMaterialConsumption"}),t(e,{title:"环比无效素材消耗",width:150,"data-index":"MoM_InvalidMaterialConsumption"}),t(e,{title:"100w+素材数量",width:140,"data-index":"MaterialCount10WPlus"}),t(e,{title:"环比100w+素材",width:140,"data-index":"MoM_MaterialCount10WPlus"})]),_:1},8,["data"])]),_:1})]),_:1},8,["loading"])}}}),It=w(Ct,[["__scopeId","data-v-b66a7d4c"]]),$t=x({__name:"content-project-consumption",setup(i){const o=r=>r.map(p=>`<div class="content-panel">
        <p>
          <span style="background-color: ${p.color}" class="tooltip-item-icon"></span>
          <span>${p.seriesName}</span>
        </p>
        <span class="tooltip-value">
        ${p.value}
        </span>
      </div>`).join(""),{loading:a,setLoading:d}=F(!0),l=g([]),s=g([]),c=g([]),{chartOption:e}=j(r=>({grid:{left:"40",right:40,top:40,bottom:"40"},legend:{data:["消耗","ROI"]},xAxis:{type:"category",data:l.value,axisLine:{lineStyle:{color:r?"#3f3f3f":"#A9AEB8"}},axisTick:{show:!0,alignWithLabel:!0,lineStyle:{color:"#86909C"},interval(p){return!(p===0||p===l.value.length-1)}},axisLabel:{color:"#86909C"}},yAxis:[{type:"value",name:"消耗",position:"left"},{type:"value",name:"ROI",position:"right"}],tooltip:{show:!0,trigger:"axis",formatter(p){const[f]=p;return`<div>
            <p class="tooltip-title">${f.axisValueLabel}</p>
            ${o(p)}
          </div>`},className:"echarts-tooltip-diy"},series:[{name:"消耗",type:"bar",barWidth:"40%",yAxisIndex:0,label:{normal:{show:!0,position:"top"}},data:c.value},{name:"ROI",data:s.value,type:"line",yAxisIndex:1,smooth:!0,showSymbol:!1,color:r?"#3D72F6":"#246EFF",symbol:"circle",symbolSize:10,emphasis:{focus:"series",itemStyle:{borderWidth:2,borderColor:"#E0E3FF"}}}]}));return D(this,null,function*(){try{d(!0);const r=yield dt();if(r.code===200){let p=r.data.metric;console.log(p,"tempData"),l.value=p.map(f=>f.projectName),c.value=p.map(f=>f.consumption.toFixed(2)),s.value=p.map(f=>f.roi.toFixed(2))}}catch(r){}finally{d(!1)}}),(r,p)=>{const f=S("Chart"),z=b,R=$;return h(),v(R,{loading:u(a),style:{width:"100%"}},{default:n(()=>[t(z,{class:"general-card","header-style":{paddingBottom:"0"},"body-style":{padding:"20px"}},{title:n(()=>[C(I(r.$t("项目消耗(ROI)")),1)]),default:n(()=>[t(f,{style:{width:"100%",height:"240px"},option:u(e)},null,8,["option"])]),_:1})]),_:1},8,["loading"])}}}),Ft=w($t,[["__scopeId","data-v-d1f70e7c"]]),Et=x({__name:"content-material-ownership",setup(i){const{loading:o,setLoading:a}=F(),d=g([]),l=g([]),{chartOption:s}=j(e=>({legend:{left:"center",data:d.value,bottom:0,icon:"circle",itemWidth:8,textStyle:{color:e?"rgba(255, 255, 255, 0.7)":"#4E5969"},itemStyle:{borderWidth:0}},tooltip:{show:!0,trigger:"item"},graphic:{elements:[{type:"text",left:"center",top:"40%",style:{text:"素材归属",textAlign:"center",fill:e?"#ffffffb3":"#4E5969",fontSize:14}},{type:"text",left:"center",top:"50%",style:{text:"928,531",textAlign:"center",fill:e?"#ffffffb3":"#1D2129",fontSize:16,fontWeight:500}}]},series:[{type:"pie",radius:["50%","70%"],center:["50%","50%"],label:{formatter:"{d}%",fontSize:14,color:e?"rgba(255, 255, 255, 0.7)":"#4E5969"},itemStyle:{borderColor:e?"#232324":"#fff",borderWidth:1},data:l.value}]}));return D(this,null,function*(){try{a(!0);const e=yield ct();if(e.code===200){let _=e.data;d.value=_.map(r=>r.tag),l.value=_.map(r=>({value:r.num,name:r.tag,itemStyle:{color:"#3D72F6"}}))}}catch(e){}finally{a(!1)}}),(e,_)=>{const r=S("Chart"),p=b,f=$;return h(),v(f,{loading:u(o),style:{width:"100%"}},{default:n(()=>[t(p,{class:"general-card","header-style":{paddingBottom:"0"},"body-style":{padding:"20px"}},{title:n(()=>[C(I(e.$t("素材归属")),1)]),default:n(()=>[t(r,{height:"240px",option:u(s)},null,8,["option"])]),_:1})]),_:1},8,["loading"])}}}),St=x({__name:"content-top10-materials",setup(i){const{loading:o,setLoading:a}=F(),d=g([]);return D(this,null,function*(){try{a(!0);const s=yield at({page:1,page_size:10,orderBy:"total_play",asc:!1,shop_id:null});if(s.code===200){let c=s.data;d.value=c.rows||[]}}catch(s){}finally{a(!1)}}),(s,c)=>{const e=P,_=L,r=b,p=$;return h(),v(p,{loading:u(o),style:{width:"100%",height:"100%"}},{default:n(()=>[t(r,{class:"general-card"},{default:n(()=>[t(_,{size:"small",data:d.value,pagination:!1,bordered:!1,scroll:{x:"100%",y:"285px"}},{columns:n(()=>[t(e,{width:90,title:"TOP10素材","data-index":"title",ellipsis:""}),t(e,{width:60,title:"消耗","data-index":"stat_cost"}),t(e,{width:50,title:"ROI","data-index":"prepay_and_pay_order_roi"}),t(e,{width:60,title:"点击率","data-index":"ctr"}),t(e,{width:60,title:"转化率","data-index":"ecp_convert_rate"})]),_:1},8,["data"])]),_:1})]),_:1},8,["loading"])}}}),Mt=w(St,[["__scopeId","data-v-9df23b83"]]),At={class:"container"},Vt={class:"space-unit"},Bt={name:"DataAnalysis"},Tt=x(B(V({},Bt),{setup(i){return(o,a)=>{const d=S("Breadcrumb"),l=T,s=O,c=tt;return h(),Z("div",At,[t(d,{items:["数据分析","短视频素材分析"]}),t(c,{direction:"vertical",size:12,fill:""},{default:n(()=>[t(c,{direction:"vertical",size:16,fill:""},{default:n(()=>[m("div",Vt,[t(vt)]),m("div",null,[t(s,{cols:24,"col-gap":16,"row-gap":16},{default:n(()=>[t(l,{span:{xxl:4}},{default:n(()=>[t(Dt)]),_:1}),t(l,{span:{xxl:20}},{default:n(()=>[t(It)]),_:1})]),_:1})]),m("div",null,[t(s,{cols:24,"col-gap":16},{default:n(()=>[t(l,{span:{xxl:8}},{default:n(()=>[t(Et)]),_:1}),t(l,{span:{xxl:8}},{default:n(()=>[t(Ft)]),_:1}),t(l,{span:{xxl:8}},{default:n(()=>[t(Mt)]),_:1})]),_:1})])]),_:1})]),_:1})])}}})),Kt=w(Tt,[["__scopeId","data-v-cccb7271"]]);export{Kt as default};
