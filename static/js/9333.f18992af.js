/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-11 23:13:38
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9333],{68044:function(e,l,a){a.r(l),a.d(l,{default:function(){return i}});var d=a(94981),o=(a(27322),a(8784),a(69287)),t=(a(48992),a(34641)),u=a(27386);const c={class:"checkbox-container"};function n(e,l,a,n,s,k){const r=d.dI,h=o.A,b=d.o5,i=d.$n;return(0,t.uX)(),(0,t.CE)("div",c,[(0,t.bF)(h,{shadow:"hover"},{header:(0,t.k6)((()=>l[8]||(l[8]=[(0,t.Lk)("span",null,"基础用法",-1)]))),default:(0,t.k6)((()=>[(0,t.bF)(r,{modelValue:e.checked,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checked=l)},{default:(0,t.k6)((()=>l[9]||(l[9]=[(0,t.eW)("备选项")]))),_:1},8,["modelValue"])])),_:1}),(0,t.bF)(h,{shadow:"hover"},{header:(0,t.k6)((()=>l[10]||(l[10]=[(0,t.Lk)("span",null,"禁用状态",-1)]))),default:(0,t.k6)((()=>[(0,t.bF)(r,{modelValue:e.checked1,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checked1=l),disabled:""},{default:(0,t.k6)((()=>l[11]||(l[11]=[(0,t.eW)("备选项1")]))),_:1},8,["modelValue"]),(0,t.bF)(r,{modelValue:e.checked2,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checked2=l),disabled:""},{default:(0,t.k6)((()=>l[12]||(l[12]=[(0,t.eW)("备选项")]))),_:1},8,["modelValue"])])),_:1}),(0,t.bF)(h,{shadow:"hover"},{header:(0,t.k6)((()=>l[13]||(l[13]=[(0,t.Lk)("span",null,"多选框组",-1)]))),default:(0,t.k6)((()=>[(0,t.bF)(b,{modelValue:e.checkList,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checkList=l)},{default:(0,t.k6)((()=>[(0,t.bF)(r,{label:"复选框 A"}),(0,t.bF)(r,{label:"复选框 B"}),(0,t.bF)(r,{label:"复选框 C"}),(0,t.bF)(r,{disabled:"",label:"禁用"}),(0,t.bF)(r,{disabled:"",label:"选中且禁用"})])),_:1},8,["modelValue"])])),_:1}),(0,t.bF)(h,{shadow:"hover"},{header:(0,t.k6)((()=>l[14]||(l[14]=[(0,t.Lk)("span",null,"可选项目数量的限制",-1)]))),default:(0,t.k6)((()=>[(0,t.bF)(b,{modelValue:e.checkedCities,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checkedCities=l),max:2,min:1},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.cities,(e=>((0,t.uX)(),(0,t.Wv)(r,{key:e,label:e},{default:(0,t.k6)((()=>[(0,t.eW)((0,u.v_)(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,t.bF)(h,{shadow:"hover"},{header:(0,t.k6)((()=>l[15]||(l[15]=[(0,t.Lk)("span",null,"按钮样式",-1)]))),default:(0,t.k6)((()=>[(0,t.bF)(b,{modelValue:e.checkboxGroup1,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checkboxGroup1=l)},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.cities,(e=>((0,t.uX)(),(0,t.Wv)(i,{key:e,label:e},{default:(0,t.k6)((()=>[(0,t.eW)((0,u.v_)(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,t.bF)(h,{shadow:"hover"},{header:(0,t.k6)((()=>l[16]||(l[16]=[(0,t.Lk)("span",null,"带有边框",-1)]))),default:(0,t.k6)((()=>[(0,t.bF)(r,{modelValue:e.checked3,"onUpdate:modelValue":l[6]||(l[6]=l=>e.checked3=l),border:"",label:"备选项1"},null,8,["modelValue"]),(0,t.bF)(r,{modelValue:e.checked4,"onUpdate:modelValue":l[7]||(l[7]=l=>e.checked4=l),border:"",label:"备选项2"},null,8,["modelValue"])])),_:1})])}var s=a(37489),k=(0,t.pM)({name:"Checkbox",setup(){const e=["上海","北京","广州","深圳"],l=(0,s.Kh)({checked:!0,checked1:!1,checked2:!0,checkList:["选中且禁用","复选框 A"],checkedCities:["上海","北京"],cities:e,checkboxGroup1:["上海"],checked3:!0,checked4:!1});return{...(0,s.QW)(l)}}});function r(e){e.__source="src/views/vab/form/checkbox.vue"}var h=a(48499);"function"===typeof r&&r(k);const b=(0,h.A)(k,[["render",n],["__scopeId","data-v-221ddeb9"]]);var i=b},69287:function(e,l,a){a.d(l,{A:function(){return b}});var d=a(56974),o=(a(27322),a(37183),a(59677)),t=(a(35685),a(34641)),u=a(37489),c=a(27386),n=a(12176),s=(0,t.pM)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let l=null;const a=(0,u.KR)(!0);return l=setTimeout((()=>{a.value=!1}),500),(0,n.JZ)(((e,a,d)=>{clearInterval(l),d()})),(l,n)=>{const s=o.d1,k=d.Ik;return(0,t.uX)(),(0,t.Wv)(k,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,t.eX)({default:(0,t.k6)((()=>[e.skeleton?((0,t.uX)(),(0,t.Wv)(s,{key:0,animated:"",loading:(0,u.R1)(a),rows:e.skeletonRows},{default:(0,t.k6)((()=>[(0,t.RG)(l.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,t.RG)(l.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[l.$slots.header||e.header?{name:"header",fn:(0,t.k6)((()=>[(0,t.RG)(l.$slots,"header",{},(()=>[(0,t.eW)((0,c.v_)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function k(e){e.__source="library/components/VabCard/index.vue"}var r=a(48499);"function"===typeof k&&k(s);const h=(0,r.A)(s,[["__scopeId","data-v-391150ea"]]);var b=h}}]);