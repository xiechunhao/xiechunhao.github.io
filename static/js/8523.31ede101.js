/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-12 01:02:20
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8523],{49727:function(e,t,l){l.d(t,{dZ:function(){return G}});var a=l(34641),r=l(37489),n=l(27386),d=l(73120),o=l(43968),c=l(39928),i=l(91549),u=l(21512),s=l(12556),h=l(75714);const f="left-check-change",p="right-check-change",k=(0,u.b_)({data:{type:(0,u.jq)(Array),default:()=>[]},titles:{type:(0,u.jq)(Array),default:()=>[]},buttonTexts:{type:(0,u.jq)(Array),default:()=>[]},filterPlaceholder:String,filterMethod:{type:(0,u.jq)(Function)},leftDefaultChecked:{type:(0,u.jq)(Array),default:()=>[]},rightDefaultChecked:{type:(0,u.jq)(Array),default:()=>[]},renderContent:{type:(0,u.jq)(Function)},modelValue:{type:(0,u.jq)(Array),default:()=>[]},format:{type:(0,u.jq)(Object),default:()=>({})},filterable:Boolean,props:{type:(0,u.jq)(Object),default:()=>(0,s.f)({label:"label",key:"key",disabled:"disabled"})},targetOrder:{type:String,values:["original","push","unshift"],default:"original"},validateEvent:{type:Boolean,default:!0}}),y=(e,t)=>[e,t].every(n.cy)||(0,n.cy)(e)&&(0,i.A)(t),v={[h.YU]:(e,t,l)=>[e,l].every(n.cy)&&["left","right"].includes(t),[h.l4]:e=>(0,n.cy)(e),[f]:y,[p]:y};var C=l(50670),m=l(94981),R=l(46137);const b="checked-change",g=(0,u.b_)({data:k.data,optionRender:{type:(0,u.jq)(Function)},placeholder:String,title:String,filterable:Boolean,format:k.format,filterMethod:k.filterMethod,defaultChecked:k.leftDefaultChecked,props:k.props}),E={[b]:y};var _=l(20175);const W=e=>{const t={label:"label",key:"key",disabled:"disabled"};return(0,a.EW)((()=>({...t,...e.props})))},V=(e,t,l)=>{const r=W(e),d=(0,a.EW)((()=>e.data.filter((l=>{if((0,n.Tn)(e.filterMethod))return e.filterMethod(t.query,l);{const e=String(l[r.value.label]||l[r.value.key]);return e.toLowerCase().includes(t.query.toLowerCase())}})))),o=(0,a.EW)((()=>d.value.filter((e=>!e[r.value.disabled])))),c=(0,a.EW)((()=>{const l=t.checked.length,a=e.data.length,{noChecked:r,hasChecked:n}=e.format;return r&&n?l>0?n.replace(/\${checked}/g,l.toString()).replace(/\${total}/g,a.toString()):r.replace(/\${total}/g,a.toString()):`${l}/${a}`})),i=(0,a.EW)((()=>{const e=t.checked.length;return e>0&&e<o.value.length})),u=()=>{const e=o.value.map((e=>e[r.value.key]));t.allChecked=e.length>0&&e.every((e=>t.checked.includes(e)))},s=e=>{t.checked=e?o.value.map((e=>e[r.value.key])):[]};return(0,a.wB)((()=>t.checked),((e,a)=>{if(u(),t.checkChangeByUser){const t=e.concat(a).filter((t=>!e.includes(t)||!a.includes(t)));l(b,e,t)}else l(b,e),t.checkChangeByUser=!0})),(0,a.wB)(o,(()=>{u()})),(0,a.wB)((()=>e.data),(()=>{const e=[],l=d.value.map((e=>e[r.value.key]));t.checked.forEach((t=>{l.includes(t)&&e.push(t)})),t.checkChangeByUser=!1,t.checked=e})),(0,a.wB)((()=>e.defaultChecked),((e,l)=>{if(l&&e.length===l.length&&e.every((e=>l.includes(e))))return;const a=[],n=o.value.map((e=>e[r.value.key]));e.forEach((e=>{n.includes(e)&&a.push(e)})),t.checkChangeByUser=!1,t.checked=a}),{immediate:!0}),{filteredData:d,checkableData:o,checkedSummary:c,isIndeterminate:i,updateAllChecked:u,handleAllCheckedChange:s}};var q=l(20275),U=l(97747),w=l(8789);const D=(0,a.pM)({name:"ElTransferPanel"}),F=(0,a.pM)({...D,props:g,emits:E,setup(e,{expose:t,emit:l}){const d=e,o=(0,a.Ht)(),i=({option:e})=>e,{t:u}=(0,q.Ym)(),s=(0,U.DU)("transfer"),h=(0,r.Kh)({checked:[],allChecked:!1,query:"",checkChangeByUser:!0}),f=W(d),{filteredData:p,checkedSummary:k,isIndeterminate:y,handleAllCheckedChange:v}=V(d,h,l),b=(0,a.EW)((()=>!(0,w.Im)(h.query)&&(0,w.Im)(p.value))),g=(0,a.EW)((()=>!(0,w.Im)(o.default()[0].children))),{checked:E,allChecked:_,query:D}=(0,r.QW)(h);return t({query:D}),(e,t)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,n.C4)((0,r.R1)(s).b("panel"))},[(0,a.Lk)("p",{class:(0,n.C4)((0,r.R1)(s).be("panel","header"))},[(0,a.bF)((0,r.R1)(m.dI),{modelValue:(0,r.R1)(_),"onUpdate:modelValue":e=>(0,r.i9)(_)?_.value=e:null,indeterminate:(0,r.R1)(y),"validate-event":!1,onChange:(0,r.R1)(v)},{default:(0,a.k6)((()=>[(0,a.eW)((0,n.v_)(e.title)+" ",1),(0,a.Lk)("span",null,(0,n.v_)((0,r.R1)(k)),1)])),_:1},8,["modelValue","onUpdate:modelValue","indeterminate","onChange"])],2),(0,a.Lk)("div",{class:(0,n.C4)([(0,r.R1)(s).be("panel","body"),(0,r.R1)(s).is("with-footer",(0,r.R1)(g))])},[e.filterable?((0,a.uX)(),(0,a.Wv)((0,r.R1)(R.WK),{key:0,modelValue:(0,r.R1)(D),"onUpdate:modelValue":e=>(0,r.i9)(D)?D.value=e:null,class:(0,n.C4)((0,r.R1)(s).be("panel","filter")),size:"default",placeholder:e.placeholder,"prefix-icon":(0,r.R1)(c.Search),clearable:"","validate-event":!1},null,8,["modelValue","onUpdate:modelValue","class","placeholder","prefix-icon"])):(0,a.Q3)("v-if",!0),(0,a.bo)((0,a.bF)((0,r.R1)(m.o5),{modelValue:(0,r.R1)(E),"onUpdate:modelValue":e=>(0,r.i9)(E)?E.value=e:null,"validate-event":!1,class:(0,n.C4)([(0,r.R1)(s).is("filterable",e.filterable),(0,r.R1)(s).be("panel","list")])},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)((0,r.R1)(p),(t=>((0,a.uX)(),(0,a.Wv)((0,r.R1)(m.dI),{key:t[(0,r.R1)(f).key],class:(0,n.C4)((0,r.R1)(s).be("panel","item")),value:t[(0,r.R1)(f).key],disabled:t[(0,r.R1)(f).disabled],"validate-event":!1},{default:(0,a.k6)((()=>{var l;return[(0,a.bF)(i,{option:null==(l=e.optionRender)?void 0:l.call(e,t)},null,8,["option"])]})),_:2},1032,["class","value","disabled"])))),128))])),_:1},8,["modelValue","onUpdate:modelValue","class"]),[[C.aG,!(0,r.R1)(b)&&!(0,r.R1)(w.Im)(e.data)]]),(0,a.bo)((0,a.Lk)("div",{class:(0,n.C4)((0,r.R1)(s).be("panel","empty"))},[(0,a.RG)(e.$slots,"empty",{},(()=>[(0,a.eW)((0,n.v_)((0,r.R1)(b)?(0,r.R1)(u)("el.transfer.noMatch"):(0,r.R1)(u)("el.transfer.noData")),1)]))],2),[[C.aG,(0,r.R1)(b)||(0,r.R1)(w.Im)(e.data)]])],2),(0,r.R1)(g)?((0,a.uX)(),(0,a.CE)("p",{key:0,class:(0,n.C4)((0,r.R1)(s).be("panel","footer"))},[(0,a.RG)(e.$slots,"default")],2)):(0,a.Q3)("v-if",!0)],2))}});var S=(0,_.A)(F,[["__file","transfer-panel.vue"]]);const T=e=>{const t=W(e),l=(0,a.EW)((()=>e.data.reduce(((e,l)=>(e[l[t.value.key]]=l)&&e),{}))),r=(0,a.EW)((()=>e.data.filter((l=>!e.modelValue.includes(l[t.value.key]))))),n=(0,a.EW)((()=>"original"===e.targetOrder?e.data.filter((l=>e.modelValue.includes(l[t.value.key]))):e.modelValue.reduce(((e,t)=>{const a=l.value[t];return a&&e.push(a),e}),[])));return{sourceData:r,targetData:n}},j=(e,t,l)=>{const a=W(e),r=(e,t,a)=>{l(h.l4,e),l(h.YU,e,t,a)},n=()=>{const l=e.modelValue.slice();t.rightChecked.forEach((e=>{const t=l.indexOf(e);t>-1&&l.splice(t,1)})),r(l,"left",t.rightChecked)},d=()=>{let l=e.modelValue.slice();const n=e.data.filter((l=>{const r=l[a.value.key];return t.leftChecked.includes(r)&&!e.modelValue.includes(r)})).map((e=>e[a.value.key]));l="unshift"===e.targetOrder?n.concat(l):l.concat(n),"original"===e.targetOrder&&(l=e.data.filter((e=>l.includes(e[a.value.key]))).map((e=>e[a.value.key]))),r(l,"right",t.leftChecked)};return{addToLeft:n,addToRight:d}},A=(e,t)=>{const l=(l,a)=>{e.leftChecked=l,a&&t(f,l,a)},a=(l,a)=>{e.rightChecked=l,a&&t(p,l,a)};return{onSourceCheckedChange:l,onTargetCheckedChange:a}};var x=l(9054),B=l(94812);const I=(0,a.pM)({name:"ElTransfer"}),M=(0,a.pM)({...I,props:k,emits:v,setup(e,{expose:t,emit:l}){const i=e,u=(0,a.Ht)(),{t:s}=(0,q.Ym)(),h=(0,U.DU)("transfer"),{formItem:f}=(0,x.j)(),p=(0,r.Kh)({leftChecked:[],rightChecked:[]}),k=W(i),{sourceData:y,targetData:v}=T(i),{onSourceCheckedChange:C,onTargetCheckedChange:m}=A(p,l),{addToLeft:R,addToRight:b}=j(i,p,l),g=(0,r.KR)(),E=(0,r.KR)(),_=e=>{switch(e){case"left":g.value.query="";break;case"right":E.value.query="";break}},V=(0,a.EW)((()=>2===i.buttonTexts.length)),D=(0,a.EW)((()=>i.titles[0]||s("el.transfer.titles.0"))),F=(0,a.EW)((()=>i.titles[1]||s("el.transfer.titles.1"))),I=(0,a.EW)((()=>i.filterPlaceholder||s("el.transfer.filterPlaceholder")));(0,a.wB)((()=>i.modelValue),(()=>{var e;i.validateEvent&&(null==(e=null==f?void 0:f.validate)||e.call(f,"change").catch((e=>(0,B.U)(e))))}));const M=(0,a.EW)((()=>e=>{var t;if(i.renderContent)return i.renderContent(a.h,e);const l=((null==(t=u.default)?void 0:t.call(u,{option:e}))||[]).filter((e=>e.type!==a.Mw));return l.length?l:(0,a.h)("span",e[k.value.label]||e[k.value.key])}));return t({clearQuery:_,leftPanel:g,rightPanel:E}),(e,t)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,n.C4)((0,r.R1)(h).b())},[(0,a.bF)(S,{ref_key:"leftPanel",ref:g,data:(0,r.R1)(y),"option-render":(0,r.R1)(M),placeholder:(0,r.R1)(I),title:(0,r.R1)(D),filterable:e.filterable,format:e.format,"filter-method":e.filterMethod,"default-checked":e.leftDefaultChecked,props:i.props,onCheckedChange:(0,r.R1)(C)},{empty:(0,a.k6)((()=>[(0,a.RG)(e.$slots,"left-empty")])),default:(0,a.k6)((()=>[(0,a.RG)(e.$slots,"left-footer")])),_:3},8,["data","option-render","placeholder","title","filterable","format","filter-method","default-checked","props","onCheckedChange"]),(0,a.Lk)("div",{class:(0,n.C4)((0,r.R1)(h).e("buttons"))},[(0,a.bF)((0,r.R1)(d.S2),{type:"primary",class:(0,n.C4)([(0,r.R1)(h).e("button"),(0,r.R1)(h).is("with-texts",(0,r.R1)(V))]),disabled:(0,r.R1)(w.Im)(p.rightChecked),onClick:(0,r.R1)(R)},{default:(0,a.k6)((()=>[(0,a.bF)((0,r.R1)(o.tk),null,{default:(0,a.k6)((()=>[(0,a.bF)((0,r.R1)(c.ArrowLeft))])),_:1}),(0,r.R1)(w.b0)(e.buttonTexts[0])?(0,a.Q3)("v-if",!0):((0,a.uX)(),(0,a.CE)("span",{key:0},(0,n.v_)(e.buttonTexts[0]),1))])),_:1},8,["class","disabled","onClick"]),(0,a.bF)((0,r.R1)(d.S2),{type:"primary",class:(0,n.C4)([(0,r.R1)(h).e("button"),(0,r.R1)(h).is("with-texts",(0,r.R1)(V))]),disabled:(0,r.R1)(w.Im)(p.leftChecked),onClick:(0,r.R1)(b)},{default:(0,a.k6)((()=>[(0,r.R1)(w.b0)(e.buttonTexts[1])?(0,a.Q3)("v-if",!0):((0,a.uX)(),(0,a.CE)("span",{key:0},(0,n.v_)(e.buttonTexts[1]),1)),(0,a.bF)((0,r.R1)(o.tk),null,{default:(0,a.k6)((()=>[(0,a.bF)((0,r.R1)(c.ArrowRight))])),_:1})])),_:1},8,["class","disabled","onClick"])],2),(0,a.bF)(S,{ref_key:"rightPanel",ref:E,data:(0,r.R1)(v),"option-render":(0,r.R1)(M),placeholder:(0,r.R1)(I),filterable:e.filterable,format:e.format,"filter-method":e.filterMethod,title:(0,r.R1)(F),"default-checked":e.rightDefaultChecked,props:i.props,onCheckedChange:(0,r.R1)(m)},{empty:(0,a.k6)((()=>[(0,a.RG)(e.$slots,"right-empty")])),default:(0,a.k6)((()=>[(0,a.RG)(e.$slots,"right-footer")])),_:3},8,["data","option-render","placeholder","filterable","format","filter-method","title","default-checked","props","onCheckedChange"])],2))}});var $=(0,_.A)(M,[["__file","transfer.vue"]]),L=l(79846);const G=(0,L.GU)($)},82309:function(e,t,l){l(27322),l(30957),l(52539),l(48992),l(8784)}}]);