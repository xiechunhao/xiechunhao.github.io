/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{l as V}from"./landscape-C1CSDfEv.js";import{d as D,b as N,e as c,L as t,D as r,V as o,o as M,u as n,am as W,Z as v,_ as l}from"./vsv-element-plus-DQNbQgVr.js";const q={class:"magnifier-container"},E={class:"hidden-sm-and-up"},L={class:"hidden-xs-only"},A=D({name:"Magnifier",__name:"index",setup(Y){const s=ref(2),p=ref("circle"),i=ref(!1),d=ref(168),u=ref(!1),f=ref(-1),y=()=>{d.value+=20},g=()=>{d.value-=20},w=()=>{s.value+=.5},b=()=>{s.value-=.5},k=()=>{p.value=p.value==="circle"?"square":"circle"},C=()=>{i.value=!i.value},x=()=>{u.value=!u.value,i.value=!0},h=()=>{s.value=2,p.value="circle",i.value=!1,d.value=168,u.value=!1,f.value=-1};return onBeforeMount(()=>{document.body.onmousewheel=m=>{m.preventDefault(),s.value+=m.deltaY>0?-.1:.1}}),(m,e)=>{const S=r("vab-alert"),z=r("vab-magnifier"),_=r("el-col"),a=r("el-button"),T=r("el-space"),B=r("el-row");return M(),N("div",q,[c("div",E,[t(S,{title:"手机端不支持放大镜演示",type:"warning"})]),c("div",L,[t(B,{gutter:20},{default:o(()=>[t(_,{lg:12,md:18,sm:18,xl:12,xs:24},{default:o(()=>[t(z,{height:n(f),"out-zoomer":n(i),scale:n(s),type:n(p),url:n(V),width:n(d),"zoomer-style":{"background-color":n(u)?"transparent":"rgba(0,0,0,0)"}},W({_:2},[n(u)?{name:"zoomer",fn:o(()=>[e[0]||(e[0]=c("div",{class:"image-zoom-wrap"},null,-1))]),key:"0"}:void 0]),1032,["height","out-zoomer","scale","type","url","width","zoomer-style"])]),_:1}),t(_,{lg:12,md:6,sm:6,xl:12,xs:24},{default:o(()=>[c("p",null,"当前放大倍数："+v(n(s)),1),c("p",null,"当前放大镜宽度："+v(n(d)),1),t(T,{wrap:""},{default:o(()=>[t(a,{type:"primary",onClick:y},{default:o(()=>e[1]||(e[1]=[l("增加放大器宽度")])),_:1}),t(a,{type:"warning",onClick:g},{default:o(()=>e[2]||(e[2]=[l("减小放大器宽度")])),_:1}),t(a,{type:"primary",onClick:w},{default:o(()=>e[3]||(e[3]=[l("增加放大倍数")])),_:1}),t(a,{type:"warning",onClick:b},{default:o(()=>e[4]||(e[4]=[l("减小放大倍数")])),_:1}),t(a,{type:"primary",onClick:k},{default:o(()=>e[5]||(e[5]=[l("更换放大镜类型")])),_:1}),t(a,{class:"hidden-md-and-down",type:"warning",onClick:C},{default:o(()=>e[6]||(e[6]=[l("更换放大方式")])),_:1}),t(a,{class:"hidden-md-and-down",type:"primary",onClick:x},{default:o(()=>e[7]||(e[7]=[l("淘宝放大镜")])),_:1}),t(a,{type:"warning",onClick:h},{default:o(()=>e[8]||(e[8]=[l("重置")])),_:1})]),_:1})]),_:1})]),_:1})])])}}});export{A as default};
