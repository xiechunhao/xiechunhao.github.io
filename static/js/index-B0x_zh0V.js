/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-30 14:06:07 
 */
import{d as q,ab as n,N as o,o as H,b as j,T as e,$ as t,u as c}from"./vsv-element-plus-CxGOTlXz.js";import{_ as C}from"./index-DMdRIM5p.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const B={class:"video-container no-background-container"},M=q({name:"Video",__name:"index",setup(N){const y=reactive({url:"https://gcore.jsdelivr.net/gh/zxwk1998/videos@master/video.mp4",id:n("uuid_mp4_"),lang:"zh",volume:0,autoplay:!0,screenShot:!0,playbackRate:[.5,.75,1,1.5,2],fluid:!0}),g=reactive({url:"https://gctxyc.liveplay.myqcloud.com/gc/emsyh_1/index.m3u8?contentid=2820180516001",id:n("uuid_hls_"),lang:"zh",volume:0,autoplay:!0,screenShot:!0,playbackRate:[.5,.75,1,1.5,2],fluid:!0}),f=reactive({url:"https://gcalic.v.myalicdn.com/gc/bsszjs_1/index.m3u8?contentid=2820180516001",id:n("uuid_hls_"),lang:"zh",volume:0,autoplay:!0,screenShot:!0,playbackRate:[.5,.75,1,1.5,2],fluid:!0}),v=reactive({url:"https://gctxyc.liveplay.myqcloud.com/gc/tyhjtys_1/index.m3u8?contentid=2820180516001",id:n("uuid_hls_"),lang:"zh",volume:0,autoplay:!0,screenShot:!0,playbackRate:[.5,.75,1,1.5,2],fluid:!0}),b=reactive({url:"https://gctxyc.liveplay.myqcloud.com/gc/emsarm_1/index.m3u8?contentid=2820180516001",id:n("uuid_"),lang:"zh",volume:0,autoplay:!0,screenShot:!0,playbackRate:[.5,.75,1,1.5,2],fluid:!0});let s;const h=l=>{s=l};let u;const x=l=>{u=l};let i;const k=l=>{i=l};let d;const P=l=>{d=l};let _;const z=l=>{_=l};return onActivated(()=>{s.play(),u.play(),i.play(),d.play(),_.play()}),onDeactivated(()=>{s.pause(),u.pause(),i.pause(),d.pause(),_.pause()}),(l,V)=>{const I=o("vab-color-picker"),w=o("el-form-item"),R=o("el-form"),p=o("vab-card"),a=o("el-col"),S=o("vab-player"),r=o("vab-player-hls"),m=o("el-row");return H(),j("div",B,[e(m,{gutter:20},{default:t(()=>[e(a,null,{default:t(()=>[e(p,null,{default:t(()=>[e(R,{class:"demo-form-inline",inline:!0},{default:t(()=>[e(w,{label:"换肤","label-width":"40"},{default:t(()=>[e(I)]),_:1})]),_:1})]),_:1})]),_:1}),e(a,{lg:12,md:24,sm:24,xl:12,xs:24},{default:t(()=>[e(p,{title:"Mp4"},{default:t(()=>[e(S,{config:c(y),style:{"background-color":"rgba(0, 0, 0, 0.87)"},onPlayer:h},null,8,["config"])]),_:1})]),_:1}),e(a,{lg:12,md:24,sm:24,xl:12,xs:24},{default:t(()=>[e(p,{title:"直播推流"},{default:t(()=>[e(m,{gutter:1},{default:t(()=>[e(a,{lg:12,md:12,sm:12,xl:12,xs:24},{default:t(()=>[e(r,{config:c(g),style:{"background-color":"rgba(0, 0, 0, 0.87)"},onPlayer:x},null,8,["config"])]),_:1}),e(a,{lg:12,md:24,sm:24,xl:12,xs:24},{default:t(()=>[e(r,{config:c(f),style:{"background-color":"rgba(0, 0, 0, 0.87)"},onPlayer:k},null,8,["config"])]),_:1})]),_:1}),e(m,{gutter:1},{default:t(()=>[e(a,{lg:12,md:12,sm:12,xl:12,xs:24},{default:t(()=>[e(r,{config:c(v),style:{"background-color":"rgba(0, 0, 0, 0.87)"},onPlayer:P},null,8,["config"])]),_:1}),e(a,{lg:12,md:12,sm:12,xl:12,xs:24},{default:t(()=>[e(r,{config:c(b),style:{"background-color":"rgba(0, 0, 0, 0.87)"},onPlayer:z},null,8,["config"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}}),$=C(M,[["__scopeId","data-v-a6c7a808"]]);export{$ as default};
