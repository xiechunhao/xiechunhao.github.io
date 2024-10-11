var R=Object.defineProperty;var p=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var F=(t,e,s)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,j=(t,e)=>{for(var s in e||(e={}))I.call(e,s)&&F(t,s,e[s]);if(p)for(var s of p(e))N.call(e,s)&&F(t,s,e[s]);return t};var P=(t,e)=>{var s={};for(var a in t)I.call(t,a)&&e.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&p)for(var a of p(t))e.indexOf(a)<0&&N.call(t,a)&&(s[a]=t[a]);return s};import{I as U,m as W,S as X,i as Y,j as Z,k as aa}from"./bootstrap-BPXRuHYb.mjs";import{_ as ea}from"./analytics-trends.vue_vue_type_script_setup_true_lang-BC8CFGJj.mjs";import{_ as ta}from"./analytics-visits.vue_vue_type_script_setup_true_lang-BwoDb_e8.mjs";import{_ as sa}from"./analytics-visits-data.vue_vue_type_script_setup_true_lang-Bud916Lg.mjs";import{_ as la}from"./analytics-visits-sales.vue_vue_type_script_setup_true_lang-CnC23Qvl.mjs";import{_ as na}from"./analytics-visits-source.vue_vue_type_script_setup_true_lang-Dv7ZFehF.mjs";import{_ as oa,a as ra,b as ia,c as ca,d as $}from"./analysis-chart-card.vue_vue_type_script_setup_true_lang-DbiCFIGf.mjs";import{a3 as f,P as E,bq as z,J as w,at as ua,V as da,a4 as fa,br as ma,ae as i,al as d,aw as v,an as _a,a9 as l,bs as pa,af as b,ag as r,ad as V,ab as va,b4 as q,b0 as ba,n,F as h,aq as y,ap as D,ao as J}from"../jse/index-index-DjctGAIy.mjs";import{_ as ga}from"./icon.vue_vue_type_script_setup_true_lang-BY_ZTL9f.mjs";import{_ as xa,a as $a,b as ha}from"./TabsList.vue_vue_type_script_setup_true_lang-DU9khAFT.mjs";import"./use-echarts-D5myC5ZQ.mjs";const A=f({name:"CountToAnimator",__name:"count-to-animator",props:{autoplay:{type:Boolean,default:!0},color:{default:""},decimal:{default:"."},decimals:{default:0},duration:{default:1500},endVal:{default:2021},prefix:{default:""},separator:{default:","},startVal:{default:0},suffix:{default:""},transition:{default:"linear"},useEasing:{type:Boolean,default:!0}},emits:["onStarted","onFinished"],setup(t,{expose:e,emit:s}){const a=t,c=s,o=E(a.startVal),_=E(!1);let T=z(o);const L=w(()=>O(l(T)));ua(()=>{o.value=a.startVal}),da([()=>a.startVal,()=>a.endVal],()=>{a.autoplay&&k()}),fa(()=>{a.autoplay&&k()});function k(){S(),o.value=a.endVal}function M(){o.value=a.startVal,S()}function S(){T=z(o,j({disabled:_,duration:a.duration,onFinished:()=>c("onFinished"),onStarted:()=>c("onStarted")},a.useEasing?{transition:ma[a.transition]}:{}))}function O(u){if(!u&&u!==0)return"";const{decimal:B,decimals:G,prefix:H,separator:g,suffix:K}=a;u=Number(u).toFixed(G),u+="";const x=u.split(".");let m=x[0];const Q=x.length>1?B+x[1]:"",C=/(\d+)(\d{3})/;if(g&&!pa(g)&&m)for(;C.test(m);)m=m.replace(C,`$1${g}$2`);return H+m+Q+K}return e({reset:M}),(u,B)=>(i(),d("span",{style:_a({color:u.color})},v(L.value),5))}}),ya=f({__name:"TabsTrigger",props:{class:{},value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const e=t,s=w(()=>{const _=e,{class:c}=_;return P(_,["class"])}),a=U(s);return(c,o)=>(i(),b(l(W),va(l(a),{class:l(q)("ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow",e.class)}),{default:r(()=>[V(c.$slots,"default")]),_:3},16,["class"]))}}),wa=f({__name:"CardFooter",props:{class:{}},setup(t){const e=t;return(s,a)=>(i(),d("div",{class:ba(l(q)("flex items-center p-6 pt-0",e.class))},[V(s.$slots,"default")],2))}}),Va={class:"card-box w-full px-4 pb-5 pt-3"},Ta=f({name:"AnalysisChartsTabs",__name:"analysis-charts-tabs",props:{tabs:{default:()=>[]}},setup(t){const e=t,s=w(()=>{var a,c;return(c=(a=e.tabs)==null?void 0:a[0])==null?void 0:c.value});return(a,c)=>(i(),d("div",Va,[n(l(ha),{"default-value":s.value},{default:r(()=>[n(l(xa),null,{default:r(()=>[(i(!0),d(h,null,y(a.tabs,o=>(i(),b(l(ya),{key:o.label,value:o.value},{default:r(()=>[D(v(o.label),1)]),_:2},1032,["value"]))),128))]),_:1}),(i(!0),d(h,null,y(a.tabs,o=>(i(),b(l($a),{key:o.label,value:o.value,class:"pt-4"},{default:r(()=>[V(a.$slots,o.value)]),_:2},1032,["value"]))),128))]),_:3},8,["default-value"])]))}}),ka={class:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"},Sa=f({name:"AnalysisOverview",__name:"analysis-overview",props:{items:{default:()=>[]}},setup(t){return(e,s)=>(i(),d("div",ka,[(i(!0),d(h,null,y(e.items,a=>(i(),b(l(ca),{key:a.title,title:a.title,class:"w-full"},{default:r(()=>[n(l(ra),null,{default:r(()=>[n(l(oa),{class:"text-xl"},{default:r(()=>[D(v(a.title),1)]),_:2},1024)]),_:2},1024),n(l(ia),{class:"flex items-center justify-between"},{default:r(()=>[n(l(A),{"end-val":a.value,"start-val":1,class:"text-xl",prefix:""},null,8,["end-val"]),n(l(ga),{icon:a.icon,class:"size-8 flex-shrink-0"},null,8,["icon"])]),_:2},1024),n(l(wa),{class:"justify-between"},{default:r(()=>[J("span",null,v(a.totalTitle),1),n(l(A),{"end-val":a.totalValue,"start-val":1,prefix:""},null,8,["end-val"])]),_:2},1024)]),_:2},1032,["title"]))),128))]))}}),Ba={class:"p-5"},Ca={class:"mt-5 w-full md:flex"},Ma=f({__name:"index",setup(t){const e=[{icon:X,title:"用户量",totalTitle:"总用户量",totalValue:12e4,value:2e3},{icon:Y,title:"访问量",totalTitle:"总访问量",totalValue:5e5,value:2e4},{icon:Z,title:"下载量",totalTitle:"总下载量",totalValue:12e4,value:8e3},{icon:aa,title:"使用量",totalTitle:"总使用量",totalValue:5e4,value:5e3}],s=[{label:"流量趋势",value:"trends"},{label:"月访问量",value:"visits"}];return(a,c)=>(i(),d("div",Ba,[n(l(Sa),{items:e}),n(l(Ta),{tabs:s,class:"mt-5"},{trends:r(()=>[n(ea)]),visits:r(()=>[n(ta)]),_:1}),J("div",Ca,[n(l($),{class:"mt-5 md:mr-4 md:mt-0 md:w-1/3",title:"访问数量"},{default:r(()=>[n(sa)]),_:1}),n(l($),{class:"mt-5 md:mr-4 md:mt-0 md:w-1/3",title:"访问来源"},{default:r(()=>[n(na)]),_:1}),n(l($),{class:"mt-5 md:mt-0 md:w-1/3",title:"访问来源"},{default:r(()=>[n(la)]),_:1})])]))}});export{Ma as default};
