import{_ as h,r as f,o as m,c as _,w as e,b as a,u,e as o,t as g,m as I,F as N,n as S,aV as E,ax as L,d as V,a8 as B,h as C,p as G,l as T}from"./index-C4BxmZrN.js";import{E as k,a as b}from"./col-DljvzS69.js";import{i as $}from"./index-CkGVv88Q.js";import{V as v}from"./vuedraggable.umd-BuphSp9t.js";import{i as F}from"./index-CL6ZmOyB.js";import{i as O}from"./index-DSHqkOzX.js";const j={class:"demo-list-item"},M={style:{display:"flex","align-items":"flex-start"}},R={class:"demo-list-item"},q={class:"demo-list-item"},z={__name:"demo-list",setup(c){const l=f([{id:1,name:"项目0000001"},{id:2,name:"项目0000002"},{id:3,name:"项目0000003"},{id:4,name:"项目0000004"},{id:5,name:"项目0000005"}]),r=f([{id:1,name:"项目0000001"},{id:2,name:"项目0000002"},{id:3,name:"项目0000003"},{id:4,name:"项目0000004"},{id:5,name:"项目0000005"}]),s=f([{id:6,name:"项目0000006"},{id:7,name:"项目0000007"},{id:8,name:"项目0000008"},{id:9,name:"项目0000009"},{id:10,name:"项目0000010"}]);return(i,d)=>{const n=$,p=k,y=b;return m(),_(y,{gutter:16},{default:e(()=>[a(p,{md:8,sm:24,xs:24},{default:e(()=>[a(n,{header:"列表拖拽排序"},{default:e(()=>[a(u(v),{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=t=>l.value=t),"item-key":"id",animation:300,"set-data":()=>{},class:"demo-list"},{item:e(({element:t})=>[o("div",j,g(t.name),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(p,{md:16,sm:24,xs:24},{default:e(()=>[a(n,{header:"列表相互拖拽"},{default:e(()=>[o("div",M,[a(u(v),{modelValue:r.value,"onUpdate:modelValue":d[1]||(d[1]=t=>r.value=t),"item-key":"id",animation:300,group:"demoDragList","set-data":()=>{},class:"demo-list"},{item:e(({element:t})=>[o("div",R,g(t.name),1)]),_:1},8,["modelValue"]),a(u(v),{modelValue:s.value,"onUpdate:modelValue":d[2]||(d[2]=t=>s.value=t),"item-key":"id",animation:300,group:"demoDragList","set-data":()=>{},class:"demo-list",style:{"margin-left":"12px"}},{item:e(({element:t})=>[o("div",q,g(t.name),1)]),_:1},8,["modelValue"])])]),_:1})]),_:1})]),_:1})}}},A=h(z,[["__scopeId","data-v-79c1c5e6"]]),H={class:"demo-grid-item"},J={style:{display:"flex","align-items":"flex-start"}},K={class:"demo-grid-item"},P={class:"demo-grid-item"},Q={__name:"demo-grid",setup(c){const l=f([{id:1,name:"001"},{id:2,name:"002"},{id:3,name:"003"},{id:4,name:"004"},{id:5,name:"005"},{id:6,name:"006"}]),r=f([{id:1,name:"001"},{id:2,name:"002"},{id:3,name:"003"},{id:4,name:"004"},{id:5,name:"005"},{id:6,name:"006"}]),s=f([{id:7,name:"007"},{id:8,name:"008"},{id:9,name:"009"},{id:10,name:"010"},{id:11,name:"011"},{id:12,name:"012"}]);return(i,d)=>{const n=$,p=k,y=b;return m(),_(y,{gutter:16},{default:e(()=>[a(p,{md:8,sm:24,xs:24},{default:e(()=>[a(n,{header:"宫格拖拽排序"},{default:e(()=>[a(u(v),{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=t=>l.value=t),"item-key":"id",animation:300,"set-data":()=>{},class:"demo-grid"},{item:e(({element:t})=>[o("div",H,g(t.name),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(p,{md:16,sm:24,xs:24},{default:e(()=>[a(n,{header:"宫格相互拖拽"},{default:e(()=>[o("div",J,[a(u(v),{modelValue:r.value,"onUpdate:modelValue":d[1]||(d[1]=t=>r.value=t),"item-key":"id",animation:300,group:"demoDragGrid","set-data":()=>{},class:"demo-grid"},{item:e(({element:t})=>[o("div",K,g(t.name),1)]),_:1},8,["modelValue"]),a(u(v),{modelValue:s.value,"onUpdate:modelValue":d[2]||(d[2]=t=>s.value=t),"item-key":"id",animation:300,group:"demoDragGrid","set-data":()=>{},class:"demo-grid",style:{"margin-left":"12px"}},{item:e(({element:t})=>[o("div",P,g(t.name),1)]),_:1},8,["modelValue"])])]),_:1})]),_:1})]),_:1})}}},W=h(Q,[["__scopeId","data-v-6b767367"]]),X=c=>(G("data-v-a6fd8d61"),c=c(),T(),c),Y=X(()=>o("thead",null,[o("tr",null,[o("th",{style:{width:"40px"}}),o("th",null,"任务名称"),o("th",{style:{"text-align":"center",width:"80px"}},"状态")])],-1)),Z={style:{"text-align":"center",width:"40px"}},ee={style:{"text-align":"center",width:"80px"}},te={colspan:"3",style:{"text-align":"center",background:"none"}},ae={__name:"demo-table",setup(c){const l=f([]),r=(i,d)=>{l.value[d]=i},s=[];for(let i=0;i<18;i++){const d=Number.parseInt(String(i/6));s[d]==null&&(s[d]=[]),s[d].push({id:i,taskName:"测试任务"+(i+1),status:0})}return l.value=s,(i,d)=>{const n=C,p=F,y=k,t=b,U=$;return m(),_(U,{header:"表格拖拽排序"},{default:e(()=>[a(t,{gutter:16},{default:e(()=>[(m(!0),I(N,null,S(l.value,(w,D)=>(m(),_(y,{key:D,md:8,sm:24,xs:24},{default:e(()=>[a(p,{border:!0,class:"demo-table"},{default:e(()=>[Y,a(u(v),{tag:"tbody","item-key":"id",animation:300,modelValue:w,"force-fallback":!0,group:"demoDragTable",handle:".demo-table-handle","set-data":()=>{},"onUpdate:modelValue":x=>r(x,D)},E({item:e(({element:x})=>[o("tr",null,[o("td",Z,[a(n,{icon:u(L),type:"placeholder",class:"demo-table-handle",style:{cursor:"move"}},null,8,["icon"])]),o("td",null,g(x.taskName),1),o("td",ee,[x.status===0?(m(),_(n,{key:0,type:"warning"},{default:e(()=>[V(" 未开始 ")]),_:1})):x.status===1?(m(),_(n,{key:1,type:"success"},{default:e(()=>[V(" 进行中 ")]),_:1})):x.status===2?(m(),_(n,{key:2,type:"info"},{default:e(()=>[V(" 已完成 ")]),_:1})):B("",!0)])])]),_:2},[w.length?void 0:{name:"footer",fn:e(()=>[o("tr",null,[o("td",te,[a(n,{type:"placeholder"},{default:e(()=>[V("暂无数据")]),_:1})])])]),key:"0"}]),1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}}},de=h(ae,[["__scopeId","data-v-a6fd8d61"]]),oe={name:"ExtensionDragsort"},_e=Object.assign(oe,{setup(c){return(l,r)=>{const s=O;return m(),_(s,{"multi-card":""},{default:e(()=>[a(A),a(W),a(de)]),_:1})}}});export{_e as default};
