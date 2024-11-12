/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 16:06:55 
 */
import{d as A,N as l,o as i,b as g,T as e,$ as o,a5 as v,u as a,af as G,a4 as y,ag as J,M as C,_ as K,e as h,P as O,aa as Q,ac as R,a3 as W,ah as X}from"./vsv-element-plus-Brnt1GMz.js";import{g as Y}from"./icon-CaH9nhyn.js";import{h as x}from"./clipboard-DwsmVxkj.js";import{_ as Z}from"./index-D0bnGtHt.js";import"./vsv-icon-CX0cXpax.js";import"./vsv-nprogress-Cnw-SRAI.js";const ee={class:"default-icon-container auto-height-container"},oe={class:"vab-auto-box"},ne=["onClick"],te=A({name:"DefaultIcon",__name:"defaultIcon",setup(le){const p=ref(),d=ref(0),n=reactive({pageNo:1,pageSize:72,title:"",colorful:!0,num:28}),m=ref(!1),c=async()=>{const{data:r}=await Y(n);p.value=r.list.map(t=>({icon:t,color:B()})),d.value=r.total,m.value=r.total<=0},k=r=>{n.pageNo=1,n.pageSize=r,c()},V=r=>{n.pageNo=r,c()},f=()=>{n.pageNo=1,c()},S=r=>{x(r)},z=r=>{x(`<vab-icon icon="${r}" />`)},B=()=>X(["#1890FF","#36CBCB","#4ECB73","#FBD437","#F2637B","#975FE5"])[0];return onBeforeMount(()=>{c()}),(r,t)=>{const N=l("el-checkbox"),_=l("el-button"),u=l("el-form-item"),q=l("el-slider"),b=l("el-form"),F=l("vab-query-form-left-panel"),I=l("el-input"),w=l("vab-query-form-right-panel"),D=l("vab-query-form"),$=l("el-empty"),E=l("vab-icon"),M=l("vab-card"),T=l("el-col"),U=l("el-row"),L=l("el-scrollbar"),H=l("vab-pagination");return i(),g("div",ee,[e(D,null,{default:o(()=>[e(F,null,{default:o(()=>[e(b,{inline:"",onSubmit:t[2]||(t[2]=v(()=>{},["prevent"]))},{default:o(()=>[e(u,null,{default:o(()=>[e(_,null,{default:o(()=>[e(N,{modelValue:a(n).colorful,"onUpdate:modelValue":t[0]||(t[0]=s=>a(n).colorful=s),label:"多彩图标",onChange:f},null,8,["modelValue"])]),_:1})]),_:1}),e(u,null,{default:o(()=>[e(_,{disabled:!a(n).colorful,icon:a(G),onClick:c},{default:o(()=>t[5]||(t[5]=[y("随机颜色")])),_:1},8,["disabled","icon"])]),_:1}),e(u,{label:"文字大小（px）"},{default:o(()=>[e(q,{modelValue:a(n).num,"onUpdate:modelValue":t[1]||(t[1]=s=>a(n).num=s),max:40,min:28},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(w,null,{default:o(()=>[e(b,{inline:"",onSubmit:t[4]||(t[4]=v(()=>{},["prevent"]))},{default:o(()=>[e(u,null,{default:o(()=>[e(I,{modelValue:a(n).title,"onUpdate:modelValue":t[3]||(t[3]=s=>a(n).title=s),clearable:"",placeholder:"请输入图标名称"},null,8,["modelValue"])]),_:1}),e(u,null,{default:o(()=>[e(_,{icon:a(J),"native-type":"submit",type:"primary",onClick:f},{default:o(()=>t[6]||(t[6]=[y("查询")])),_:1},8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1}),a(m)?(i(),C($,{key:0,class:"vab-data-empty",description:"暂无数据"})):K("",!0),e(L,null,{default:o(()=>[h("div",oe,[e(U,{gutter:20},{default:o(()=>[(i(!0),g(O,null,Q(a(p),(s,P)=>(i(),C(T,{key:P,lg:3,md:4,sm:6,xl:2,xs:6},{default:o(()=>[e(M,{"body-style":{"min-height":"65px"},onClick:j=>z(s.icon)},{default:o(()=>[e(E,{icon:s.icon,style:R({color:a(n).colorful?s.color:"var(--el-color-grey)",fontSize:a(n).num+"px",transition:"var(--el-transition)"})},null,8,["icon","style"])]),_:2},1032,["onClick"]),h("div",{class:"icon-text",onClick:j=>S(s.icon)},W(s.icon),9,ne)]),_:2},1024))),128))]),_:1})])]),_:1}),e(H,{background:"","current-page":a(n).pageNo,"page-size":a(n).pageSize,"page-sizes":[72,144,216,288],total:a(d),onCurrentChange:V,onSizeChange:k},null,8,["current-page","page-size","total"])])}}}),_e=Z(te,[["__scopeId","data-v-fb48c984"]]);export{_e as default};
