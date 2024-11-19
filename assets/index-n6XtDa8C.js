import{J as D,ag as I,i as M,r as h,H as d,ai as g,o as n,l as p,F as z,m as S,c as k,w as f,a1 as y,a7 as C,a5 as b,b as E,d as $,t as B,a$ as P,a4 as j}from"./index-BF2fBoPb.js";const A={data:{type:Array,required:!0},maxCount:Number,shape:String,size:[Number,String],itemStyle:Object,avatarStyle:Object,moreStyle:Object,tooltip:{type:Boolean,default:!0},tooltipProps:Object,overflowPopover:{type:Boolean,default:!0},overflowPopoverProps:Object,hoverOpen:Boolean},V={itemClick:e=>!0,moreClick:()=>!0,error:e=>!0},H=D({name:"EleAvatarGroup",components:{ElAvatar:I,EleTooltip:M},props:A,emits:V,setup(e,{emit:l}){const s=h(""),u=h(),m=h(!1),w=d(()=>{if(e.size==null||typeof e.size=="string"){const t={large:"-12px",default:"-10px",small:"-8px"};return{marginLeft:e.size?t[e.size]:"-10px"}}return typeof e.size=="number"&&e.size>=0?{marginLeft:`${-Math.round(e.size/3)}px`}:{}}),r=d(()=>e.maxCount!=null&&e.maxCount>0&&e.data!=null&&e.data.length>e.maxCount),c=d(()=>e.data==null?[]:r.value?e.data.slice(0,e.maxCount):e.data),o=d(()=>!r.value||!e.data||e.maxCount==null?0:e.data.length-e.maxCount),v=d(()=>e.data==null||!r.value?[]:e.data.slice(e.maxCount));return{tooltipContent:s,virtualRef:u,overflowVisible:m,commonStyle:w,isOverflow:r,avatarData:c,overflowCount:o,overflowData:v,handleItemHover:(t,O)=>{e.tooltip&&t.label&&(u.value=O.currentTarget,s.value=t.label)},handleItemClick:t=>{l("itemClick",t)},handleMoreClick:()=>{l("moreClick")},handleError:t=>{l("error",t)}}}}),N=(e,l)=>{const s=e.__vccOpts||e;for(const[u,m]of l)s[u]=m;return s},T={class:"ele-avatar-more-inner"},R={key:0,class:"ele-popover-body ele-avatar-group"};function G(e,l,s,u,m,w){const r=g("ElAvatar"),c=g("EleTooltip");return n(),p("div",{class:j(["ele-avatar-group",{"is-hover-open":e.hoverOpen}])},[(n(!0),p(z,null,S(e.avatarData,(o,v)=>{var i;return n(),k(r,{key:(i=o.key)!=null?i:v+"-"+(o.value||o.label),size:e.size,shape:e.shape,src:o.value,style:b([e.commonStyle,e.itemStyle,e.avatarStyle]),onClick:a=>e.handleItemClick(o),onError:a=>e.handleError({item:o,e:a}),onMouseover:a=>e.handleItemHover(o,a)},{default:f(()=>[e.$slots.item?y(e.$slots,"item",{key:0,item:o}):C("",!0)]),_:2},1032,["size","shape","src","style","onClick","onError","onMouseover"])}),128)),e.isOverflow?(n(),k(c,P({key:0,effect:"light",isPopover:!0,gpuAcceleration:!0,placement:"top",popperClass:"ele-avatar-popover",offset:6},e.overflowPopoverProps||{},{disabled:!e.overflowPopover,visible:e.overflowVisible,"onUpdate:visible":l[0]||(l[0]=o=>e.overflowVisible=o)}),{body:f(()=>[e.overflowPopover?(n(),p("div",R,[y(e.$slots,"overflow",{overflowData:e.overflowData},()=>[(n(!0),p(z,null,S(e.overflowData,(o,v)=>{var i;return n(),k(r,{key:(i=o.key)!=null?i:v+"-"+(o.value||o.label),size:e.size,shape:e.shape,src:o.value,style:b([e.commonStyle,e.itemStyle,e.avatarStyle]),onClick:a=>e.handleItemClick(o),onError:a=>e.handleError({item:o,e:a}),onMouseover:a=>e.handleItemHover(o,a)},{default:f(()=>[e.$slots.item?y(e.$slots,"item",{key:0,item:o}):C("",!0)]),_:2},1032,["size","shape","src","style","onClick","onError","onMouseover"])}),128))])])):C("",!0)]),default:f(()=>[E(r,{size:e.size,shape:e.shape,style:b([e.commonStyle,e.itemStyle,e.moreStyle]),class:"ele-avatar-more",onClick:e.handleMoreClick},{default:f(()=>[$("span",T,[y(e.$slots,"more",{overflowCount:e.overflowCount,overflowData:e.overflowData},()=>[$("span",null,"+"+B(e.overflowCount),1)])])]),_:3},8,["size","shape","style","onClick"])]),_:3},16,["disabled","visible"])):C("",!0),E(c,P({placement:"top",offset:6},e.tooltipProps||{},{content:e.tooltipContent,virtualRef:e.virtualRef,virtualTriggering:!0}),null,16,["content","virtualRef"])],2)}const J=N(H,[["render",G]]);export{J as i};
