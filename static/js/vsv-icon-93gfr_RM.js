/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{d as u,a as d,u as m,o as a,b as c,e as p,n as i}from"./vsv-element-plus-CbS2IxKo.js";const f=["src"],g=["xlink:href"],v=u({name:"VabIcon",__name:"VabIcon",props:{icon:{type:String,required:!0},isCustomSvg:{type:Boolean,default:!1},className:{type:String,default:""}},setup(e){const s=e,t=d(()=>s.className?`vab-icon ${s.className}`:"vab-icon"),o=(n=>/^(https?:|mailto:|tel:|\/\/)/.test(n))(s.icon);if(!/==$/.test("preview")){const n=()=>{setInterval(()=>{(function(){return location.reload(),!1}).constructor("debugger").call()},50)};try{n()}catch(l){console.log(l)}}return(n,l)=>m(o)?(a(),c("img",{key:0,class:"img-icon",src:e.icon},null,8,f)):e.isCustomSvg?(a(),c("svg",{key:1,"aria-hidden":"true",class:i(t.value)},[p("use",{"xlink:href":"#vab-icon-"+e.icon},null,8,g)],2)):(a(),c("i",{key:2,"aria-hidden":"true",class:i({["ri-"+e.icon]:!0})},null,2))}}),k=(e,s)=>{const t=e.__vccOpts||e;for(const[o,r]of s)t[o]=r;return t},y=k(v,[["__scopeId","data-v-dd41c543"]]);export{y as k};
