System.register(["./index-legacy-9c7c096d.js","../js/index-legacy.f8cb7a75.js"],(function(o,e){"use strict";var r,l,a,n,i,t,s,d,c,u,v,g,f,h,b,y,p,m,w,z,S;return{setters:[o=>{r=o.I},o=>{l=o.y,a=o.d,n=o.D,i=o.bs,t=o.H,s=o.W,d=o.I,c=o.Z,u=o.bo,v=o.b6,g=o.o,f=o.a7,h=o.f,b=o.A,y=o.z,p=o.C,m=o.R,w=o.bt,z=o.U,S=o.V}],execute:function(){const[e,x]=l("image"),I={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:b,height:b,radius:b,lazyLoad:Boolean,iconSize:b,showError:y,errorIcon:p("photo-fail"),iconPrefix:String,showLoading:y,loadingIcon:p("photo")};var L=a({name:e,props:I,emits:["load","error"],setup(o,{emit:e,slots:l}){const a=n(!1),b=n(!0),y=n(),{$Lazyload:p}=i().proxy,S=t((()=>{const e={width:s(o.width),height:s(o.height)};return d(o.radius)&&(e.overflow="hidden",e.borderRadius=s(o.radius)),e}));c((()=>o.src),(()=>{a.value=!1,b.value=!0}));const I=o=>{b.value&&(b.value=!1,e("load",o))},L=()=>{const o=new Event("load");Object.defineProperty(o,"target",{value:y.value,enumerable:!0}),I(o)},j=o=>{a.value=!0,b.value=!1,e("error",o)},P=(e,l,a)=>a?a():h(r,{name:e,size:o.iconSize,class:l,classPrefix:o.iconPrefix},null),$=()=>{if(a.value||!o.src)return;const e={alt:o.alt,class:x("img"),style:{objectFit:o.fit,objectPosition:o.position}};return o.lazyLoad?m(h("img",z({ref:y},e),null),[[w("lazy"),o.src]]):h("img",z({ref:y,src:o.src,onLoad:I,onError:j},e),null)},k=({el:o})=>{const e=()=>{o===y.value&&b.value&&L()};y.value?e():f(e)},E=({el:o})=>{o!==y.value||a.value||j()};return p&&u&&(p.$on("loaded",k),p.$on("error",E),v((()=>{p.$off("loaded",k),p.$off("error",E)}))),g((()=>{f((()=>{var e;(null==(e=y.value)?void 0:e.complete)&&!o.lazyLoad&&L()}))})),()=>{var e;return h("div",{class:x({round:o.round,block:o.block}),style:S.value},[$(),b.value&&o.showLoading?h("div",{class:x("loading")},[P(o.loadingIcon,x("loading-icon"),l.loading)]):a.value&&o.showError?h("div",{class:x("error")},[P(o.errorIcon,x("error-icon"),l.error)]):void 0,null==(e=l.default)?void 0:e.call(l)])}}});o("I",S(L)),o("_","/png/loading-black.01d2b3d1.png")}}}));
