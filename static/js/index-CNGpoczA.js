var H=Object.defineProperty,U=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var z=(s,a,o)=>a in s?H(s,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[a]=o,p=(s,a)=>{for(var o in a||(a={}))J.call(a,o)&&z(s,o,a[o]);if(V)for(var o of V(a))K.call(a,o)&&z(s,o,a[o]);return s},k=(s,a)=>U(s,G(a));var N=(s,a,o)=>new Promise((x,h)=>{var b=l=>{try{r(o.next(l))}catch(d){h(d)}},g=l=>{try{r(o.throw(l))}catch(d){h(d)}},r=l=>l.done?x(l.value):Promise.resolve(l.value).then(b,g);r((o=o.apply(s,a)).next())});import{d as O,c as Q,h as I,j as W,aM as X,z as Y,o as Z,a as tt,e as t,w as n,n as C,t as u,m as et,b as f,p as at,q as ot,be as nt,bf as st,l as lt,bg as ct,al as rt,B as it,aH as dt,S as _t,b6 as pt,bh as mt,b7 as ut,b3 as ft,_ as ht}from"./index-ZnvSvhwo.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{c as bt}from"./cloneDeep-03KQXACr.js";import{u as gt}from"./index-DkHmMGFL.js";/* empty css              */import{A as vt}from"./materials-D2ZYNzoy.js";const xt={class:"container"},yt={class:"video"},wt=["src"],kt={class:"video-info"},It={class:"title"},Ct={class:"id"},Bt={name:"SearchTable"},Dt=O(k(p({},Bt),{setup(s){const a=()=>({key:"",orderBy:"total_play",asc:!1,shop_id:null}),o=Q(()=>[{title:"视频",dataIndex:"title",ellipsis:!0},{title:"整体消耗(元)",dataIndex:"stat_cost",width:120,sorter:{compare:(e,c)=>e.stat_cost-c.stat_cost,multiple:1}},{title:"整体展示次数",dataIndex:"math",width:120,sorter:{compare:(e,c)=>e.show_cnt-c.show_cnt,multiple:2}},{title:"整体点击次数",dataIndex:"click_cnt",width:120,sorter:{compare:(e,c)=>e.click_cnt-c.click_cnt,multiple:3}},{title:"整体点击率",dataIndex:"ctr",width:120,slotName:"ctr",sorter:{compare:(e,c)=>e.ctr-c.ctr,multiple:4}}]),x=I([]),{loading:h,setLoading:b}=gt(!0),g=I([]),r=I(a()),l={current:1,pageSize:9},d=W(p({},l)),y=(...c)=>N(this,[...c],function*(e={current:1,pageSize:9}){b(!0);try{const m=yield vt(e);if(m.code===200){let v=m.data;g.value=v.rows||[],d.current=e.current,d.total=v.total||0}}catch(m){}finally{b(!1)}}),B=()=>{y(p(p({},l),r.value))},$=e=>{y(k(p({},l),{current:e}))},F=()=>{r.value=a(),B()};return X(()=>o.value,e=>{console.log(e,"val"),x.value=bt(e)},{deep:!0,immediate:!0}),y(),(e,c)=>{const m=Y("Breadcrumb"),v=at,L=ot,w=nt,D=st,M=lt,S=ct,P=rt,T=it,A=dt,R=_t,_=pt,j=mt,q=ut,E=ft;return Z(),tt("div",xt,[t(m,{items:["数据分析","素材中心"]}),t(E,{class:"general-card"},{default:n(()=>[t(D,null,{default:n(()=>[t(w,{flex:1},{default:n(()=>[t(M,{model:r.value,"label-col-props":{span:6},"wrapper-col-props":{span:18},"label-align":"left"},{default:n(()=>[t(D,{gutter:16},{default:n(()=>[t(w,{span:8},{default:n(()=>[t(L,{field:"key",label:"视频标题"},{default:n(()=>[t(v,{modelValue:r.value.key,"onUpdate:modelValue":c[0]||(c[0]=i=>r.value.key=i),placeholder:"请输入视频标题"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(S,{direction:"vertical"}),t(w,{flex:"86px",style:{"text-align":"right"}},{default:n(()=>[t(R,{size:18},{default:n(()=>[t(T,{type:"primary",onClick:B},{icon:n(()=>[t(P)]),default:n(()=>[C(" "+u(e.$t("searchTable.form.search")),1)]),_:1}),t(T,{onClick:F},{icon:n(()=>[t(A)]),default:n(()=>[C(" "+u(e.$t("searchTable.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(S,{style:{"margin-top":"0"}}),t(q,{"row-key":"id",loading:et(h),pagination:d,data:g.value,bordered:!1,onPageChange:$,scroll:{x:"100%"}},{columns:n(()=>[t(_,{title:"视频",width:450,"data-index":"title",ellipsis:"",fixed:"left"},{cell:n(({record:i})=>[f("div",yt,[f("video",{class:"video-player",src:`http://fyhd.17keep.cn/${i.video_url}`,preload:"metadata",playsinline:"",autoplay:"",controlslist:"nodownload"},null,8,wt),f("div",kt,[f("span",It,u(i.title),1),f("span",Ct,"ID:"+u(i.shop_id),1)])])]),_:1}),t(_,{title:"图片","data-index":"cover_ur"},{cell:n(({record:i})=>[t(j,{width:60,height:60,src:`http://fyhd.17keep.cn/${i.cover_url}`},null,8,["src"])]),_:1}),t(_,{title:"整体消耗(元)","data-index":"stat_cost"}),t(_,{title:"整体展现次数","data-index":"show_cnt"}),t(_,{title:"整体点击次数","data-index":"click_cnt"}),t(_,{title:"整体点击率","data-index":"ctr"},{cell:n(({record:i})=>[C(u(i.ctr)+"% ",1)]),_:1})]),_:1},8,["loading","pagination","data"])]),_:1})])}}})),Rt=ht(Dt,[["__scopeId","data-v-5e5cbf4b"]]);export{Rt as default};
