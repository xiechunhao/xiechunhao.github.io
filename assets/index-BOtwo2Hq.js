import{J as X,g as Y,be as j,bf as F,a_ as U,bF as W,r,O as z,ai as S,o as m,c as R,w as V,d,a5 as y,a1 as E,l as I,a7 as O,b as T,a4 as J}from"./index-BF2fBoPb.js";const q={size:String,minSize:Number,maxSize:Number,space:String,customStyle:Object,bodyStyle:Object,allowCollapse:Boolean,collapseStyle:Object,collapse:Boolean,vertical:Boolean,reverse:Boolean,resizable:Boolean,flexTable:Boolean,responsive:{type:Boolean,default:null}},x={"update:collapse":e=>!0},D=X({name:"EleSplitPanel",components:{ElIcon:Y,ArrowLeft:j,ArrowUp:F,ReceiverView:U},props:q,emits:x,setup(e,{emit:a}){const c=W(e),t=r(null),p=r(null),w=r(null),n=r(!1),o=r(null),u=r(!1),b=l=>{n.value=typeof l=="boolean"?l:!n.value,a("update:collapse",n.value)},i=()=>{o.value=null},$=l=>{const s=e.vertical?l.clientHeight:l.clientWidth;return e.maxSize?e.maxSize<0?s+e.maxSize:e.maxSize<1?Math.floor(s*e.maxSize):Math.min(e.maxSize,s):s},H=l=>{var s;const v=(s=t.value)==null?void 0:s.$el,g=w.value;if(!v||!g)return;u.value=!0;const k=l.clientX,B=l.clientY,M=g.clientWidth,P=g.clientHeight,h=!e.minSize||e.minSize<0?0:e.minSize,L=$(v),N=f=>{const C=e.vertical?(e.reverse?B-f.clientY:f.clientY-B)+P:(e.reverse?k-f.clientX:f.clientX-k)+M;o.value=`${C<h?h:C>L?L:C}px`},A=()=>{u.value=!1,document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",N),document.addEventListener("mouseup",A)};return z([()=>e.collapse,()=>e.allowCollapse],()=>{e.allowCollapse?n.value=e.collapse:n.value=!1},{immediate:!0}),z(()=>e.size,()=>{i()}),z(()=>e.minSize,l=>{const s=!l||l<0?0:l;o.value&&Number.parseInt(o.value)<s&&(o.value=s+"px")}),z(()=>e.maxSize,()=>{var l;const s=(l=t.value)==null?void 0:l.$el;if(o.value&&s){const v=$(s);Number.parseInt(o.value)>v&&(o.value=v+"px")}}),{rootRef:t,wrapRef:p,sideRef:w,isResponsive:c,isCollapse:n,resizedSize:o,resizing:u,toggleCollapse:b,resetSize:i,handleResize:H}}}),G=(e,a)=>{const c=e.__vccOpts||e;for(const[t,p]of a)c[t]=p;return c},K={ref:"wrapRef",class:"ele-split-panel-wrap"},Q={class:"ele-split-panel-space"};function Z(e,a,c,t,p,w){const n=S("ArrowUp"),o=S("ArrowLeft"),u=S("ElIcon"),b=S("ReceiverView");return m(),R(b,{ref:"rootRef",class:J(["ele-split-panel",{"is-reverse":e.reverse},{"is-vertical":e.vertical},{"is-collapse":e.isCollapse},{"is-resizing":e.resizing},{"is-responsive":e.isResponsive},{"is-flex-table":e.flexTable}]),style:y({"--ele-split-size":e.resizedSize||e.size,"--ele-split-space":e.space})},{default:V(()=>[d("div",K,[d("div",{ref:"sideRef",class:"ele-split-panel-side",style:y(e.customStyle)},[E(e.$slots,"default")],4),d("div",Q,[e.resizable?(m(),I("div",{key:0,class:"ele-split-resize-line",onMousedown:a[0]||(a[0]=(...i)=>e.handleResize&&e.handleResize(...i))},null,32)):O("",!0)])],512),d("div",{class:"ele-split-panel-body",style:y(e.bodyStyle)},[E(e.$slots,"body",{collapse:e.isCollapse})],4),e.allowCollapse?(m(),I("div",{key:0,style:y(e.collapseStyle),class:"ele-split-collapse-button",onClick:a[1]||(a[1]=i=>e.toggleCollapse())},[E(e.$slots,"collapse",{collapse:e.isCollapse},()=>[T(u,{class:"ele-split-collapse-icon"},{default:V(()=>[e.vertical?(m(),R(n,{key:0,style:{"margin-top":"-1.25px"}})):(m(),R(o,{key:1,style:{"margin-left":"-1.25px"}}))]),_:1})])],4)):O("",!0),d("div",{class:"ele-split-panel-mask",onClick:a[2]||(a[2]=i=>e.toggleCollapse())})]),_:3},8,["class","style"])}const ee=G(D,[["render",Z]]);export{ee as i};
