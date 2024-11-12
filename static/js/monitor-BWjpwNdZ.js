/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 16:06:55 
 */
import{d as H,ab as R,N as o,o as y,b as h,T as l,$ as e,a4 as n,u as d,k as V,P as S,aa as T,e as s}from"./vsv-element-plus-Brnt1GMz.js";import{_ as q}from"./index-D0bnGtHt.js";import"./vsv-icon-CX0cXpax.js";import"./vsv-nprogress-Cnw-SRAI.js";const A={class:"monitor-container no-background-container"},E=H({name:"Monitor",__name:"monitor",setup(F){const k=reactive({url:"https://gcalic.v.myalicdn.com/gc/bsszjs_1/index.m3u8?contentid=2820180516001",id:R("uuid_hls_"),lang:"zh",volume:0,autoplay:!0,screenShot:!0,playbackRate:[.5,.75,1,1.5,2],width:"100%",height:"100%"}),v=ref("1"),c=reactive({}),w=[{value:"1",label:"全部"}],f=ref("普通直播");let _;const N=x=>{_=x};return onActivated(()=>{_.play()}),onDeactivated(()=>{_.pause()}),(x,t)=>{const m=o("vab-icon"),C=o("el-option"),M=o("el-select"),B=o("el-scrollbar"),I=o("el-input"),r=o("el-button"),P=o("el-form-item"),U=o("el-form"),u=o("vab-card"),a=o("el-col"),j=o("vab-player-hls"),g=o("el-radio-button"),z=o("el-radio-group"),D=o("el-tag"),p=o("vab-divider"),b=o("el-row");return y(),h("div",A,[l(b,{gutter:20},{default:e(()=>[l(a,{lg:5,md:24,sm:24,xl:5,xs:24},{default:e(()=>[l(u,{"body-style":{padding:"20px 0 20px 20px"},style:{height:"var(--el-container-height)"}},{header:e(()=>[l(m,{icon:"chat-1-line"}),t[3]||(t[3]=n(" 聊天窗口 "))]),default:e(()=>[l(M,{modelValue:d(v),"onUpdate:modelValue":t[0]||(t[0]=i=>V(v)?v.value=i:null),style:{width:"80px"}},{default:e(()=>[(y(),h(S,null,T(w,i=>l(C,{key:i.value,label:i.label,value:i.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),l(B,{style:{height:"calc(var(--el-container-height) - 160px)","padding-right":"20px"}},{default:e(()=>t[4]||(t[4]=[s("div",{class:"chat-list"},[s("div",{class:"chat-item"},[s("div",{class:"chat-item-user"},"用户admin"),s("div",{class:"chat-item-content"},"马上就开始了，好激动！"),s("div",{class:"chat-item-time"},"13:09:12")]),s("div",{class:"chat-item"},[s("div",{class:"chat-item-user"},"用户admin"),s("div",{class:"chat-item-content"},"马上就开始了，好激动！"),s("div",{class:"chat-item-time"},"13:09:12")]),s("div",{class:"chat-item"},[s("div",{class:"chat-item-user"},"用户admin"),s("div",{class:"chat-item-content"},"马上就开始了，好激动！"),s("div",{class:"chat-item-time"},"13:09:12")]),s("div",{class:"chat-item"},[s("div",{class:"chat-item-user"},"用户admin"),s("div",{class:"chat-item-content"},"马上就开始了，好激动！"),s("div",{class:"chat-item-time"},"13:09:12")]),s("div",{class:"chat-item"},[s("div",{class:"chat-item-user"},"用户admin"),s("div",{class:"chat-item-content"},"马上就开始了，好激动！"),s("div",{class:"chat-item-time"},"13:09:12")])],-1)])),_:1}),l(U,{model:d(c)},{default:e(()=>[l(P,null,{default:e(()=>[l(I,{modelValue:d(c).text,"onUpdate:modelValue":t[1]||(t[1]=i=>d(c).text=i),class:"chat-input"},null,8,["modelValue"]),l(r,{class:"chat-send",type:"primary"},{default:e(()=>t[5]||(t[5]=[n("发送")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),l(a,{lg:14,md:24,sm:24,xl:14,xs:24},{default:e(()=>[l(u,{"body-style":{padding:"0",height:"calc(var(--el-container-height) - 207px)"},style:{height:"calc(var(--el-container-height) - 150px)"}},{header:e(()=>[l(m,{icon:"vidicon-line"}),t[6]||(t[6]=n(" 直播预览 "))]),default:e(()=>[l(j,{config:d(k),style:{"background-color":"rgba(0, 0, 0, 0.87)"},onPlayer:N},null,8,["config"])]),_:1}),l(u,{style:{height:"130px"}},{header:e(()=>[l(m,{icon:"emoji-sticker-line"}),t[7]||(t[7]=n(" 直播方式 "))]),default:e(()=>[l(z,{modelValue:d(f),"onUpdate:modelValue":t[2]||(t[2]=i=>V(f)?f.value=i:null)},{default:e(()=>[l(g,{label:"普通直播",value:"普通直播"}),l(g,{label:"控流直播",value:"控流直播"}),l(g,{label:"视频直播",value:"视频直播"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(a,{lg:5,md:24,sm:24,xl:5,xs:24},{default:e(()=>[l(u,null,{header:e(()=>[l(m,{icon:"cursor-line"}),t[8]||(t[8]=n(" 快捷操作 "))]),default:e(()=>[l(r,{bg:"",class:"live-button",text:"",type:"primary"},{default:e(()=>t[9]||(t[9]=[n("切换清晰度")])),_:1}),l(r,{bg:"",class:"live-button",text:"",type:"primary"},{default:e(()=>t[10]||(t[10]=[n("主备流切换")])),_:1}),l(r,{bg:"",class:"live-button",text:"",type:"primary"},{default:e(()=>t[11]||(t[11]=[n("推流垫片")])),_:1})]),_:1}),l(u,{style:{height:"calc(var(--el-container-height) - 255px)","min-height":"430px"}},{header:e(()=>[l(m,{icon:"stack-line"}),t[13]||(t[13]=n(" 直播状态 ")),l(D,{style:{position:"absolute",top:"15px",right:"var(--el-margin)"},type:"success"},{default:e(()=>t[12]||(t[12]=[n("流畅")])),_:1})]),default:e(()=>[l(b,{gutter:20},{default:e(()=>[l(a,{span:24},{default:e(()=>[l(p,{"content-position":"left"},{default:e(()=>t[14]||(t[14]=[n("主流")])),_:1})]),_:1}),l(a,{lg:12,md:12,sm:12,xl:12,xs:12},{default:e(()=>t[15]||(t[15]=[s("div",{class:"live-item"},[s("span",null,"码率"),n(" 6 Mbps ")],-1)])),_:1}),l(a,{lg:12,md:12,sm:12,xl:12,xs:12},{default:e(()=>t[16]||(t[16]=[s("div",{class:"live-item"},[s("span",null,"帧率"),n(" 60 ")],-1)])),_:1}),l(a,{span:24},{default:e(()=>[l(p,{"content-position":"left"},{default:e(()=>t[17]||(t[17]=[n("热备")])),_:1})]),_:1}),l(a,{lg:12,md:12,sm:12,xl:12,xs:12},{default:e(()=>t[18]||(t[18]=[s("div",{class:"live-item"},[s("span",null,"码率"),n(" 6 Mbps ")],-1)])),_:1}),l(a,{lg:12,md:12,sm:12,xl:12,xs:12},{default:e(()=>t[19]||(t[19]=[s("div",{class:"live-item"},[s("span",null,"帧率"),n(" 60 ")],-1)])),_:1}),l(a,{span:24},{default:e(()=>[l(p,{"content-position":"left"},{default:e(()=>t[20]||(t[20]=[n("冷备")])),_:1})]),_:1}),l(a,{lg:12,md:12,sm:12,xl:12,xs:12},{default:e(()=>t[21]||(t[21]=[s("div",{class:"live-item"},[s("span",null,"码率"),n(" 6 Mbps ")],-1)])),_:1}),l(a,{lg:12,md:12,sm:12,xl:12,xs:12},{default:e(()=>t[22]||(t[22]=[s("div",{class:"live-item"},[s("span",null,"帧率"),n(" 60 ")],-1)])),_:1}),l(a,{span:24},{default:e(()=>[l(p,{"content-position":"left"},{default:e(()=>t[23]||(t[23]=[n("画面信息")])),_:1})]),_:1}),l(a,{lg:12,md:12,sm:12,xl:12,xs:12},{default:e(()=>t[24]||(t[24]=[s("div",{class:"live-item"},[s("span",null,"线路"),n(" 热备 ")],-1)])),_:1}),l(a,{lg:12,md:12,sm:12,xl:12,xs:12},{default:e(()=>t[25]||(t[25]=[s("div",{class:"live-item"},[s("span",null,"CDN"),n(" KS ")],-1)])),_:1}),l(a,{lg:12,md:12,sm:12,xl:12,xs:12},{default:e(()=>t[26]||(t[26]=[s("div",{class:"live-item"},[s("span",null,"播放格式"),n(" Hls ")],-1)])),_:1}),l(a,{lg:12,md:12,sm:12,xl:12,xs:12},{default:e(()=>t[27]||(t[27]=[s("div",{class:"live-item"},[s("span",null,"画质"),n(" 原画 ")],-1)])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}}),J=q(E,[["__scopeId","data-v-3cb05c14"]]);export{J as default};
