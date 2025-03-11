/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-11 23:03:09
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3619],{18388:function(e,l,a){a.r(l),a.d(l,{default:function(){return D}});var t=a(88504),u=(a(27322),a(31255),a(11071),a(34641)),o=a(37489),d=a(56812),n=a(6569),s=a(97747),r=a(75714);const c=(e,{attrs:l,emit:a},{select:n,tree:c,key:v})=>{const i=(0,s.DU)("tree-select");(0,u.wB)((()=>e.data),(()=>{e.filterable&&(0,u.dY)((()=>{var e,l;null==(l=c.value)||l.filter(null==(e=n.value)?void 0:e.states.inputValue)}))}),{flush:"post"});const h={...(0,d.A)((0,o.QW)(e),Object.keys(t.AV.props)),...l,class:(0,u.EW)((()=>l.class)),style:(0,u.EW)((()=>l.style)),"onUpdate:modelValue":e=>a(r.l4,e),valueKey:v,popperClass:(0,u.EW)((()=>{const l=[i.e("popper")];return e.popperClass&&l.push(e.popperClass),l.join(" ")})),filterMethod:(l="")=>{var a;e.filterMethod?e.filterMethod(l):e.remoteMethod?e.remoteMethod(l):null==(a=c.value)||a.filter(l)}};return h};var v=a(46018),i=a(91549);const h=(0,u.pM)({extends:t.P9,setup(e,l){const a=t.P9.setup(e,l);delete a.selectOptionClick;const o=(0,u.nI)().proxy;return(0,u.dY)((()=>{a.select.states.cachedOptions.get(o.value)||a.select.onOptionCreate(o)})),(0,u.wB)((()=>l.attrs.visible),(e=>{(0,u.dY)((()=>{a.states.visible=e}))}),{immediate:!0}),a},methods:{selectOptionClick(){this.$el.parentElement.click()}}});var p=a(27386);function b(e){return e||0===e}function f(e){return(0,p.cy)(e)&&e.length}function k(e){return(0,p.cy)(e)?e:b(e)?[e]:[]}function y(e,l,a,t,u){for(let o=0;o<e.length;o++){const d=e[o];if(l(d,o,e,u))return t?t(d,o,e,u):d;{const e=a(d);if(f(e)){const u=y(e,l,a,t,d);if(u)return u}}}}function m(e,l,a,t){for(let u=0;u<e.length;u++){const o=e[u];l(o,u,e,t);const d=a(o);f(d)&&m(d,l,a,o)}}var C=a(55428),V=a(8789);const w=(e,{attrs:l,slots:a,emit:t},{select:s,tree:c,key:w})=>{(0,u.wB)((()=>e.modelValue),(()=>{e.showCheckbox&&(0,u.dY)((()=>{const l=c.value;l&&!(0,v.A)(l.getCheckedKeys(),k(e.modelValue))&&l.setCheckedKeys(k(e.modelValue))}))}),{immediate:!0,deep:!0});const K=(0,u.EW)((()=>({value:w.value,label:"label",children:"children",disabled:"disabled",isLeaf:"isLeaf",...e.props}))),_=(e,l)=>{var a;const t=K.value[e];return(0,p.Tn)(t)?t(l,null==(a=c.value)?void 0:a.getNode(_("value",l))):l[t]},g=k(e.modelValue).map((l=>y(e.data||[],(e=>_("value",e)===l),(e=>_("children",e)),((e,l,a,t)=>t&&_("value",t))))).filter((e=>b(e))),N=(0,u.EW)((()=>{if(!e.renderAfterExpand&&!e.lazy)return[];const l=[];return m(e.data.concat(e.cacheData),(e=>{const a=_("value",e);l.push({value:a,currentLabel:_("label",e),isDisabled:_("disabled",e)})}),(e=>_("children",e))),l})),E=()=>{var e;return null==(e=c.value)?void 0:e.getCheckedKeys().filter((e=>{var l;const a=null==(l=c.value)?void 0:l.getNode(e);return!(0,i.A)(a)&&(0,V.Im)(a.childNodes)}))};return{...(0,d.A)((0,o.QW)(e),Object.keys(n.q.props)),...l,nodeKey:w,expandOnClickNode:(0,u.EW)((()=>!e.checkStrictly&&e.expandOnClickNode)),defaultExpandedKeys:(0,u.EW)((()=>e.defaultExpandedKeys?e.defaultExpandedKeys.concat(g):g)),renderContent:(l,{node:t,data:u,store:o})=>l(h,{value:_("value",u),label:_("label",u),disabled:_("disabled",u),visible:t.visible},e.renderContent?()=>e.renderContent(l,{node:t,data:u,store:o}):a.default?()=>a.default({node:t,data:u,store:o}):void 0),filterNodeMethod:(l,a,t)=>{if(e.filterNodeMethod)return e.filterNodeMethod(l,a,t);if(!l)return!0;const u=new RegExp((0,C.qr)(l),"i");return u.test(_("label",a)||"")},onNodeClick:(a,t,u)=>{var o,d,n,r;if(null==(o=l.onNodeClick)||o.call(l,a,t,u),!e.showCheckbox||!e.checkOnClickNode){if(e.showCheckbox||!e.checkStrictly&&!t.isLeaf)e.expandOnClickNode&&u.proxy.handleExpandIconClick();else if(!_("disabled",a)){const e=null==(d=s.value)?void 0:d.states.options.get(_("value",a));null==(n=s.value)||n.handleOptionSelect(e)}null==(r=s.value)||r.focus()}},onCheck:(a,o)=>{var d;if(!e.showCheckbox)return;const n=_("value",a),v={};m([c.value.store.root],(e=>v[e.key]=e),(e=>e.childNodes));const i=o.checkedKeys,h=e.multiple?k(e.modelValue).filter((e=>!(e in v)&&!i.includes(e))):[],p=h.concat(i);if(e.checkStrictly)t(r.l4,e.multiple?p:p.includes(n)?n:void 0);else if(e.multiple){const e=E();t(r.l4,h.concat(e))}else{const l=y([a],(e=>!f(_("children",e))&&!_("disabled",e)),(e=>_("children",e))),u=l?_("value",l):void 0,o=b(e.modelValue)&&!!y([a],(l=>_("value",l)===e.modelValue),(e=>_("children",e)));t(r.l4,u===e.modelValue||o?void 0:u)}(0,u.dY)((()=>{var t;const u=k(e.modelValue);c.value.setCheckedKeys(u),null==(t=l.onCheck)||t.call(l,a,{checkedKeys:c.value.getCheckedKeys(),checkedNodes:c.value.getCheckedNodes(),halfCheckedKeys:c.value.getHalfCheckedKeys(),halfCheckedNodes:c.value.getHalfCheckedNodes()})})),null==(d=s.value)||d.focus()},onNodeExpand:(a,o,d)=>{var n;null==(n=l.onNodeExpand)||n.call(l,a,o,d),(0,u.dY)((()=>{if(!e.checkStrictly&&e.lazy&&e.multiple&&o.checked){const l={},a=c.value.getCheckedKeys();m([c.value.store.root],(e=>l[e.key]=e),(e=>e.childNodes));const u=k(e.modelValue).filter((e=>!(e in l)&&!a.includes(e))),o=E();t(r.l4,u.concat(o))}}))},cacheOptions:N}};var K=a(11754),_=a(8585),g=(0,u.pM)({props:{data:{type:Array,default:()=>[]}},setup(e){const l=(0,u.WQ)(K.u);return(0,u.wB)((()=>e.data),(()=>{var a;e.data.forEach((e=>{l.states.cachedOptions.has(e.value)||l.states.cachedOptions.set(e.value,e)}));const t=(null==(a=l.selectRef)?void 0:a.querySelectorAll("input"))||[];_.oc&&!Array.from(t).includes(document.activeElement)&&l.setSelected()}),{flush:"post",immediate:!0}),()=>{}}}),N=a(20175);const E=(0,u.pM)({name:"ElTreeSelect",inheritAttrs:!1,props:{...t.AV.props,...n.q.props,cacheData:{type:Array,default:()=>[]}},setup(e,l){const{slots:a,expose:s}=l,r=(0,o.KR)(),v=(0,o.KR)(),i=(0,u.EW)((()=>e.nodeKey||e.valueKey||"value")),h=c(e,l,{select:r,tree:v,key:i}),{cacheOptions:p,...b}=w(e,l,{select:r,tree:v,key:i}),f=(0,o.Kh)({});return s(f),(0,u.sV)((()=>{Object.assign(f,{...(0,d.A)(v.value,["filter","updateKeyChildren","getCheckedNodes","setCheckedNodes","getCheckedKeys","setCheckedKeys","setChecked","getHalfCheckedNodes","getHalfCheckedKeys","getCurrentKey","getCurrentNode","setCurrentKey","setCurrentNode","getNode","remove","append","insertBefore","insertAfter"]),...(0,d.A)(r.value,["focus","blur","selectedLabel"])})})),()=>(0,u.h)(t.AV,(0,o.Kh)({...h,ref:e=>r.value=e}),{...a,default:()=>[(0,u.h)(g,{data:p.value}),(0,u.h)(n.q,(0,o.Kh)({...b,ref:e=>v.value=e}))]})}});var L=(0,N.A)(E,[["__file","tree-select.vue"]]),F=a(79846);const A=(0,F.GU)(L);a(64479);var W=a(69287),x=a(83567),O=(a(87694),a(21738));a(34498);const X={class:"select-container"};function S(e,l,a,o,d,n){const s=O.u,r=x._m,c=W.A,v=A,i=t.P9,h=t.AV;return(0,u.uX)(),(0,u.CE)("div",X,[(0,u.bF)(c,{shadow:"hover"},{header:(0,u.k6)((()=>[l[9]||(l[9]=(0,u.Lk)("span",null,"行政区划",-1)),(0,u.bF)(s,{class:"card-header-tag",type:"danger"},{default:(0,u.k6)((()=>l[8]||(l[8]=[(0,u.eW)("New")]))),_:1})])),default:(0,u.k6)((()=>[(0,u.bF)(r,{modelValue:e.area,"onUpdate:modelValue":l[0]||(l[0]=l=>e.area=l),clearable:"",filterable:"",options:e.areaOptions,props:{label:"name",value:"code"}},null,8,["modelValue","options"])])),_:1}),(0,u.bF)(c,{shadow:"hover"},{header:(0,u.k6)((()=>[l[11]||(l[11]=(0,u.Lk)("span",null,"树选择",-1)),(0,u.bF)(s,{class:"card-header-tag",type:"danger"},{default:(0,u.k6)((()=>l[10]||(l[10]=[(0,u.eW)("New")]))),_:1})])),default:(0,u.k6)((()=>[(0,u.bF)(v,{modelValue:e.treeValue,"onUpdate:modelValue":l[1]||(l[1]=l=>e.treeValue=l),data:e.treeData,multiple:"","show-checkbox":""},null,8,["modelValue","data"])])),_:1}),(0,u.bF)(c,{shadow:"hover"},{header:(0,u.k6)((()=>l[12]||(l[12]=[(0,u.Lk)("span",null,"基础用法",-1)]))),default:(0,u.k6)((()=>[(0,u.bF)(h,{modelValue:e.value1,"onUpdate:modelValue":l[2]||(l[2]=l=>e.value1=l),placeholder:"请选择"},{default:(0,u.k6)((()=>[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(e.options1,(e=>((0,u.uX)(),(0,u.Wv)(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,u.bF)(c,{shadow:"hover"},{header:(0,u.k6)((()=>l[13]||(l[13]=[(0,u.Lk)("span",null,"有禁用选项",-1)]))),default:(0,u.k6)((()=>[(0,u.bF)(h,{modelValue:e.value2,"onUpdate:modelValue":l[3]||(l[3]=l=>e.value2=l),placeholder:"请选择"},{default:(0,u.k6)((()=>[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(e.options2,(e=>((0,u.uX)(),(0,u.Wv)(i,{key:e.value,disabled:e.disabled,label:e.label,value:e.value},null,8,["disabled","label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,u.bF)(c,{shadow:"hover"},{header:(0,u.k6)((()=>l[14]||(l[14]=[(0,u.Lk)("span",null,"禁用状态",-1)]))),default:(0,u.k6)((()=>[(0,u.bF)(h,{modelValue:e.value1,"onUpdate:modelValue":l[4]||(l[4]=l=>e.value1=l),disabled:"",placeholder:"请选择"},{default:(0,u.k6)((()=>[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(e.options1,(e=>((0,u.uX)(),(0,u.Wv)(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,u.bF)(c,{shadow:"hover"},{header:(0,u.k6)((()=>l[15]||(l[15]=[(0,u.Lk)("span",null,"可清空单选",-1)]))),default:(0,u.k6)((()=>[(0,u.bF)(h,{modelValue:e.value1,"onUpdate:modelValue":l[5]||(l[5]=l=>e.value1=l),clearable:"",placeholder:"请选择"},{default:(0,u.k6)((()=>[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(e.options1,(e=>((0,u.uX)(),(0,u.Wv)(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,u.bF)(c,{shadow:"hover"},{header:(0,u.k6)((()=>l[16]||(l[16]=[(0,u.Lk)("span",null,"基础多选",-1)]))),default:(0,u.k6)((()=>[(0,u.bF)(h,{modelValue:e.value3,"onUpdate:modelValue":l[6]||(l[6]=l=>e.value3=l),multiple:"",placeholder:"请选择"},{default:(0,u.k6)((()=>[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(e.options1,(e=>((0,u.uX)(),(0,u.Wv)(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,u.bF)(c,{shadow:"hover"},{header:(0,u.k6)((()=>l[17]||(l[17]=[(0,u.Lk)("span",null,"可搜索",-1)]))),default:(0,u.k6)((()=>[(0,u.bF)(h,{modelValue:e.value1,"onUpdate:modelValue":l[7]||(l[7]=l=>e.value1=l),filterable:"",placeholder:"请选择"},{default:(0,u.k6)((()=>[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(e.options1,(e=>((0,u.uX)(),(0,u.Wv)(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])}var I=a(98139),M=(0,u.pM)({name:"Select",setup(){const e=(0,o.Kh)({options1:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value1:"",options2:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶",disabled:!0},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value2:"",value3:[],area:[],treeValue:"",areaOptions:[],treeData:[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}]}),l=async()=>{const{data:{list:l}}=await(0,I.vS)();e.areaOptions=l};return(0,u.sV)((()=>{l()})),{...(0,o.QW)(e)}}});function R(e){e.__source="src/views/vab/form/select.vue"}var U=a(48499);"function"===typeof R&&R(M);const B=(0,U.A)(M,[["render",S],["__scopeId","data-v-22110166"]]);var D=B},69287:function(e,l,a){a.d(l,{A:function(){return h}});var t=a(56974),u=(a(27322),a(37183),a(59677)),o=(a(35685),a(34641)),d=a(37489),n=a(27386),s=a(12176),r=(0,o.pM)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let l=null;const a=(0,d.KR)(!0);return l=setTimeout((()=>{a.value=!1}),500),(0,s.JZ)(((e,a,t)=>{clearInterval(l),t()})),(l,s)=>{const r=u.d1,c=t.Ik;return(0,o.uX)(),(0,o.Wv)(c,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,o.eX)({default:(0,o.k6)((()=>[e.skeleton?((0,o.uX)(),(0,o.Wv)(r,{key:0,animated:"",loading:(0,d.R1)(a),rows:e.skeletonRows},{default:(0,o.k6)((()=>[(0,o.RG)(l.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,o.RG)(l.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[l.$slots.header||e.header?{name:"header",fn:(0,o.k6)((()=>[(0,o.RG)(l.$slots,"header",{},(()=>[(0,o.eW)((0,n.v_)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function c(e){e.__source="library/components/VabCard/index.vue"}var v=a(48499);"function"===typeof c&&c(r);const i=(0,v.A)(r,[["__scopeId","data-v-391150ea"]]);var h=i},98139:function(e,l,a){a.d(l,{vS:function(){return u}});var t=a(24380);function u(e){return(0,t.A)({url:"/area/getList",method:"get",params:e})}}}]);