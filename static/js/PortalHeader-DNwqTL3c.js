/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:50:12 
 */
import{d as N,r as S,p as B,E as D,o as t,b as d,e as s,W as n,T as a,a3 as u,aj as _,u as c,S as i,a8 as b,a1 as T,br as M,aC as I,aD as P,_ as q,a9 as A,ag as H,ah as L,ai as $}from"./vsv-element-plus-DDEqdpLt.js";import{aG as f,_ as j}from"./index-6xtryadw.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const F={class:"index-nav"},G=N({name:"PortalHeader",__name:"PortalHeader",props:{activeMenu:{type:String,default:"portal"}},setup(v){const p=S(v.activeMenu),m=B([{label:"主页",name:"portal"},{label:"产品简介",name:"product"},{label:"合作伙伴",name:"partner"},{label:"后台管理",name:"index"}]),w=l=>{f.push(`/${l.props.name}`)},h=l=>{f.push(`/${l}`)};return D(()=>{document.querySelectorAll("html")[0].className="",document.querySelectorAll("body")[0].className=""}),(l,o)=>{const x=I,E=P,g=q,y=A,V=H,k=L,C=$;return t(),d("header",null,[s("div",F,[o[2]||(o[2]=s("div",{class:"logo"},[s("a",{href:"#/portal"}),s("span",{class:"logo-title"},"Vue Shop Vite")],-1)),n(E,{modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=e=>p.value=e),class:"hidden-xs-only",onTabClick:w},{default:a(()=>[(t(!0),d(u,null,_(c(m),(e,r)=>(t(),i(x,{key:r,label:e.label,name:e.name},null,8,["label","name"]))),128))]),_:1},8,["modelValue"]),n(C,{class:"hidden-sm-and-up",onCommand:h},{dropdown:a(()=>[n(k,null,{default:a(()=>[(t(!0),d(u,null,_(c(m),(e,r)=>(t(),i(V,{key:r,command:e.name},{default:a(()=>[b(T(e.label),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:a(()=>[n(y,{text:""},{default:a(()=>[o[1]||(o[1]=b(" 菜单 ")),n(g,{class:"el-icon--right"},{default:a(()=>[n(c(M))]),_:1})]),_:1})]),_:1})])])}}}),O=j(G,[["__scopeId","data-v-2d46bd16"]]);export{O as default};
