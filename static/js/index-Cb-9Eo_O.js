/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 16:06:30 
 */
import{d as p,bK as r,r as m,D as y,o as a,S as d,bk as c,T as t,V as s,b as k,a3 as _,a8 as b,a1 as h,u as i,bL as v}from"./vsv-element-plus-OoOmiKKG.js";import{_ as w}from"./index-D08hoOyC.js";const S=p({name:"VabCard",__name:"index",props:{...r.props,shadow:{type:String,default:"never"},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:5},title:{type:String,default:""}},setup(f){const e=f,l=m(!0),n=setTimeout(()=>{l.value=!1},500);return y(()=>{n&&clearTimeout(n)}),(o,g)=>{const u=v;return a(),d(i(r),{"body-class":e.bodyClass,"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},c({default:t(()=>[e.skeleton?(a(),d(u,{key:0,animated:"",loading:i(l),rows:e.skeletonRows},{default:t(()=>[s(o.$slots,"default",{},void 0,!0)]),_:3},8,["loading","rows"])):s(o.$slots,"default",{key:1},void 0,!0)]),_:2},[o.$slots.header||e.title?{name:"header",fn:t(()=>[o.$slots.header?s(o.$slots,"header",{key:0},void 0,!0):(a(),k(_,{key:1},[b(h(e.title),1)],64))]),key:"0"}:void 0,o.$slots.footer?{name:"footer",fn:t(()=>[s(o.$slots,"footer",{},void 0,!0)]),key:"1"}:void 0]),1032,["body-class","body-style","shadow"])}}}),C=w(S,[["__scopeId","data-v-475f4645"]]);export{C as _};
