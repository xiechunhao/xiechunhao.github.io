import{J as T,g as I,an as j,fm as h,i as E,b0 as P,r as m,$ as R,I as $,ai as f,o as l,l as B,d as C,a1 as z,a5 as i,c as s,w as k,a6 as O,b1 as S,a$ as b,b as H,a4 as N,fn as w}from"./index-BF2fBoPb.js";const A={text:String,innerStyle:Object,customStyle:Object,icon:[String,Object,Function],iconProps:Object,iconStyle:Object,copiedIcon:[String,Object,Function],copiedIconProps:Object,copiedIconStyle:Object,tooltip:{type:[Boolean,Object],default:!0},resetAfter:{type:Number,default:1e3},locale:Object},D={copy:e=>!0},F=T({name:"EleCopyable",components:{ElIcon:I,CopyOutlined:j,CheckOutlined:h,EleTooltip:E},props:A,emits:D,setup(e,{emit:t}){const{lang:r}=P("copyable",e),o={timer:null},c=m(null),y=m(null),d=m(),n=m(!1),p=()=>{y.value&&y.value.updatePopper()},v=()=>{var a;return e.text?e.text:((a=c.value)==null?void 0:a.innerText)||""},u=()=>{w(v()).then(()=>{n.value=!0,p(),o.timer&&clearTimeout(o.timer),o.timer=setTimeout(()=>{n.value=!1,p()},e.resetAfter||1e3),t("copy")}).catch(a=>{n.value=!1,p(),t("copy",a)})},g=a=>{e.tooltip&&(d.value=a.currentTarget)};return R(()=>{o.timer&&clearTimeout(o.timer),o.timer=null,n.value=!1}),$(()=>{o.timer&&clearTimeout(o.timer),o.timer=null}),{lang:r,innerRef:c,tooltipRef:y,virtualRef:d,copied:n,handleCopyClick:u,handleCopyHover:g}}}),V=(e,t)=>{const r=e.__vccOpts||e;for(const[o,c]of t)r[o]=c;return r};function J(e,t,r,o,c,y){const d=f("CheckOutlined"),n=f("ElIcon"),p=f("CopyOutlined"),v=f("EleTooltip");return l(),B("div",{class:N(["ele-copyable",{"ele-copyable-done":e.copied}])},[C("div",{ref:"innerRef",class:"ele-copyable-inner",style:i(e.innerStyle)},[z(e.$slots,"default")],4),C("div",{class:"ele-copyable-icon",style:i(e.customStyle),onMouseover:t[0]||(t[0]=(...u)=>e.handleCopyHover&&e.handleCopyHover(...u)),onClick:t[1]||(t[1]=(...u)=>e.handleCopyClick&&e.handleCopyClick(...u))},[e.copied?(l(),s(n,S(b({key:0},e.copiedIconProps||{})),{default:k(()=>[e.copiedIcon?(l(),s(O(e.copiedIcon),{key:0,style:i(e.copiedIconStyle)},null,8,["style"])):(l(),s(d,{key:1,style:i(e.copiedIconStyle)},null,8,["style"]))]),_:1},16)):(l(),s(n,S(b({key:1},e.iconProps||{})),{default:k(()=>[e.icon?(l(),s(O(e.icon),{key:0,style:i(e.iconStyle)},null,8,["style"])):(l(),s(p,{key:1,style:i(e.iconStyle)},null,8,["style"]))]),_:1},16))],36),H(v,b({placement:"top",offset:6},!e.tooltip||e.tooltip===!0?{}:e.tooltip,{content:e.copied?e.lang.copied:e.lang.copy,virtualRef:e.virtualRef,virtualTriggering:!0,ref:"tooltipRef"}),null,16,["content","virtualRef"])],2)}const M=V(F,[["render",J]]);export{M as i};
