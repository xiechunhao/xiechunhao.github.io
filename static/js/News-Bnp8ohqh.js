/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{g as b}from"./news-BH7IADnG.js";import{d as w,b as _,K as a,U as n,B as t,H as x,a2 as y,A as k,e,a4 as B,n as C,Y as c,u as N,o as l}from"./vsv-element-plus-D84I6Pnf.js";import{_ as D}from"./index-BL5slC2T.js";import"./vsv-icon-DZABqXig.js";import"./vsv-nprogress-0btfRK0G.js";const z={class:"new-container no-background-container"},I=["onClick"],A={class:"image-group"},L=["src"],S={class:"logo"},V={class:"user"},E={class:"time"},F={class:"title"},H=w({name:"News",__name:"News",setup(K){const d=useRouter(),r=ref([]);onActivated(()=>{i()});const i=async()=>{const{data:o}=await b();r.value=o.list},u=o=>{d.push({path:"/template/newsDetail",query:o})};return onBeforeMount(()=>{i()}),(o,M)=>{const p=t("el-avatar"),m=t("vab-icon"),g=t("vab-card"),v=t("el-col"),f=t("el-row");return l(),_("div",z,[a(f,{gutter:20},{default:n(()=>[(l(!0),_(x,null,y(N(r),(s,h)=>(l(),k(v,{key:h,lg:s.span,md:12,sm:12,xl:s.span,xs:24},{default:n(()=>[a(g,{"body-style":{padding:0}},{default:n(()=>[e("div",{class:"card-body",onClick:R=>u(s)},[e("div",A,[e("img",{alt:"",class:"image",src:s.image,style:B(s.fullImage?{width:"100%",height:"100%",position:"absolute",inset:0}:"")},null,12,L)]),e("div",{class:C(s.fullImage?"full-box":"")},[e("div",S,[a(p,{size:18,src:s.logo},null,8,["src"]),e("div",V,c(s.user),1),a(m,{icon:"time-line"}),e("div",E,c(s.time),1)]),e("div",F,c(s.title),1)],2)],8,I)]),_:2},1024)]),_:2},1032,["lg","xl"]))),128))]),_:1})])}}}),G=D(H,[["__scopeId","data-v-3027ca93"]]);export{G as default};
