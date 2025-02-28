/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{d as j,ah as B,b as p,L as a,V as o,D as n,o as c,C as m,u as l,I as D,a9 as S,am as H,e as Y,_ as y}from"./vsv-element-plus-DQNbQgVr.js";import{c as N,v as h,_ as R}from"./index-DXRDwnmL.js";import"./vsv-icon-BSoeDgwL.js";import"./vsv-nprogress-BCb6Y0ID.js";const I=()=>N({url:"https://api.vuejs-core.cn/getShopChangeLog",method:"get"}),z={class:"change-log-container no-background-container auto-height-container"},A=["innerHTML"],E=["innerHTML"],F="https://vuejs-core.cn",U=j({name:"ChangeLog",__name:"changeLog",setup(q){const f=B().format("YYYY-M-D"),v=ref([]),_=ref(h),i=ref(!1),w=e=>e.sort((t,d)=>{const u=new Date(t.timestamp),r=new Date(d.timestamp);return u<r?1:u>r?-1:0});onBeforeMount(async()=>{const{data:e}=await I(),t=w(e);t[0].timestamp=f,t.unshift({timestamp:f,content:`
    小版本更新日志及bug修复日志演示地址不做展示，具体更新内容请购买后前往绑定仓库查看，
    <a href='${F}/authorization/shop-vite.html' target='_blank'>点我购买</a>
    `,waver:"success"}),v.value=t}),onMounted(()=>{["localhost","127","192","vuejs-core"].some(e=>location.hostname.includes(e))||$baseMessage("检测到当前演示地址非官方演示地址，即将为您跳转，请稍后","warning","hey",()=>{location.href="https://vuejs-core.cn/shop-vite/#/changeLog"})});const k=async()=>{i.value=!0;const{data:{version:e}}=await axios({url:`./vue-shop-vite-version.json?t=${Date.now()}`,method:"get"});return _.value=e,setTimeout(()=>{i.value=!1},300),e},g=async()=>{const e=await k();h===e?$baseMessage("当前已是最新版本","success","hey"):$baseAlert("请手动按下键盘Ctrl（Command） + Shift + R 刷新页面，以保证您第一时间获得网站的更新内容",`检测到新版本V${e}`,()=>{$pub("update-website",e)})};return onBeforeMount(()=>{location.hostname!=="localhost"&&!location.hostname.includes("127")&&!location.hostname.includes("192")&&g()}),(e,t)=>{const d=n("vab-icon"),u=n("el-button"),r=n("vab-alert"),C=n("vab-dot"),b=n("vab-card"),L=n("el-timeline-item"),M=n("el-timeline"),x=n("el-scrollbar"),V=n("el-col"),$=n("el-row");return c(),p("div",z,[a($,{gutter:20},{default:o(()=>[a(V,{lg:15,md:24,sm:24,xl:12,xs:24},{default:o(()=>[a(b,{class:"auto-height-card has-header",skeleton:"","skeleton-rows":16},{header:o(()=>[a(d,{icon:"file-word-line"}),t[1]||(t[1]=y(" 更新日志 ")),a(u,{class:"card-header-button",type:"primary",onClick:g},{default:o(()=>t[0]||(t[0]=[y("检查更新")])),_:1})]),default:o(()=>[l(_)===l(h)?(c(),m(r,{key:0,title:l(i)?"正在检查更新...":"当前已是最新版本，您可以手动按下键盘Ctrl（Command） + Shift + R 刷新页面，以保证您第一时间获得网站的更新内容",type:"info"},null,8,["title"])):(c(),m(r,{key:1,title:l(i)?"正在检查更新...":`检测到新版本V${l(_)}！请手动按下键盘Ctrl（Command） + Shift + R 刷新页面，以保证您第一时间获得网站的更新内容`,type:"info"},null,8,["title"])),a(x,{style:{height:"calc(100% - 60px)"}},{default:o(()=>[a(M,null,{default:o(()=>[(c(!0),p(D,null,S(l(v),(s,T)=>(c(),m(L,{key:T,color:s.color,timestamp:s.timestamp},H({default:o(()=>[s.card?(c(),m(b,{key:0},{default:o(()=>[Y("div",{class:"change-log-item",innerHTML:s.content},null,8,A)]),_:2},1024)):(c(),p("div",{key:1,class:"change-log-item",innerHTML:s.content},null,8,E))]),_:2},[s.waver?{name:"dot",fn:o(()=>[a(C,{type:s.waver},null,8,["type"])]),key:"0"}:void 0]),1032,["color","timestamp"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}}),P=R(U,[["__scopeId","data-v-0571e0b3"]]);export{P as default};
