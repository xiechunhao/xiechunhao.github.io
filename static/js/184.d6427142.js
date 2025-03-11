/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-11 23:23:52
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[184],{50184:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var l=a(34641),n=a(37489),o=a(27386),i=a(50670),r=a(43968),u=a(39928),s=a(21512),v=a(8789);const c=(0,s.b_)({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},cardScale:{type:Number,default:.83},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:Boolean}),d={change:(e,t)=>[e,t].every(v.Et)};var h=a(42068),f=a(50973);const p=Symbol("carouselContextKey"),R="ElCarouselItem";var m=a(30353),g=a(94812),y=a(72541);const C=300,k=(e,t,a)=>{const{children:i,addChild:r,removeChild:u}=(0,m.W)((0,l.nI)(),R),s=(0,l.Ht)(),v=(0,n.KR)(-1),c=(0,n.KR)(null),d=(0,n.KR)(!1),k=(0,n.KR)(),b=(0,n.KR)(0),w=(0,n.KR)(!0),I=(0,n.KR)(!0),E=(0,n.KR)(!1),M=(0,l.EW)((()=>"never"!==e.arrow&&!(0,n.R1)(K))),S=(0,l.EW)((()=>i.value.some((e=>e.props.label.toString().length>0)))),x=(0,l.EW)((()=>"card"===e.type)),K=(0,l.EW)((()=>"vertical"===e.direction)),_=(0,l.EW)((()=>"auto"!==e.height?{height:e.height}:{height:`${b.value}px`,overflow:"hidden"})),B=(0,h.A)((e=>{X(e)}),C,{trailing:!0}),L=(0,h.A)((e=>{P(e)}),C),W=e=>!w.value||(v.value<=1?e<=1:e>1);function T(){c.value&&(clearInterval(c.value),c.value=null)}function A(){e.interval<=0||!e.autoplay||c.value||(c.value=setInterval((()=>G()),e.interval))}const G=()=>{I.value||(E.value=!0),I.value=!1,v.value<i.value.length-1?v.value=v.value+1:e.loop?v.value=0:E.value=!1};function X(t){if(I.value||(E.value=!0),I.value=!1,(0,o.Kg)(t)){const e=i.value.filter((e=>e.props.name===t));e.length>0&&(t=i.value.indexOf(e[0]))}if(t=Number(t),Number.isNaN(t)||t!==Math.floor(t))return void(0,g.U)(a,"index must be integer.");const l=i.value.length,n=v.value;v.value=t<0?e.loop?l-1:0:t>=l?e.loop?0:l-1:t,n===v.value&&$(n),j()}function $(e){i.value.forEach(((t,a)=>{t.translateItem(a,v.value,e)}))}function H(e,t){var a,l,o,r;const u=(0,n.R1)(i),s=u.length;if(0===s||!e.states.inStage)return!1;const v=t+1,c=t-1,d=s-1,h=u[d].states.active,f=u[0].states.active,p=null==(l=null==(a=u[v])?void 0:a.states)?void 0:l.active,R=null==(r=null==(o=u[c])?void 0:o.states)?void 0:r.active;return t===d&&f||p?"left":!!(0===t&&h||R)&&"right"}function D(){d.value=!0,e.pauseOnHover&&T()}function N(){d.value=!1,A()}function V(){E.value=!1}function F(e){(0,n.R1)(K)||i.value.forEach(((t,a)=>{e===H(t,a)&&(t.states.hover=!0)}))}function Q(){(0,n.R1)(K)||i.value.forEach((e=>{e.states.hover=!1}))}function U(e){e!==v.value&&(I.value||(E.value=!0)),v.value=e}function P(t){"hover"===e.trigger&&t!==v.value&&(v.value=t,I.value||(E.value=!0))}function z(){X(v.value-1)}function O(){X(v.value+1)}function j(){T(),e.pauseOnHover||A()}function Y(t){"auto"===e.height&&(b.value=t)}function J(){var t;const a=null==(t=s.default)?void 0:t.call(s);if(!a)return null;const n=(0,y.CW)(a),o=n.filter((e=>(0,l.vv)(e)&&e.type.name===R));return 2===(null==o?void 0:o.length)&&e.loop&&!x.value?(w.value=!0,o):(w.value=!1,null)}(0,l.wB)((()=>v.value),((e,a)=>{$(a),w.value&&(e%=2,a%=2),a>-1&&t("change",e,a)})),(0,l.wB)((()=>e.autoplay),(e=>{e?A():T()})),(0,l.wB)((()=>e.loop),(()=>{X(v.value)})),(0,l.wB)((()=>e.interval),(()=>{j()}));const q=(0,n.IJ)();return(0,l.sV)((()=>{(0,l.wB)((()=>i.value),(()=>{i.value.length>0&&X(e.initialIndex)}),{immediate:!0}),q.value=(0,f.wYm)(k.value,(()=>{$()})),A()})),(0,l.xo)((()=>{T(),k.value&&q.value&&q.value.stop()})),(0,l.Gt)(p,{root:k,isCardType:x,isVertical:K,items:i,loop:e.loop,cardScale:e.cardScale,addItem:r,removeItem:u,setActiveItem:X,setContainerHeight:Y}),{root:k,activeIndex:v,arrowDisplay:M,hasLabel:S,hover:d,isCardType:x,isTransitioning:E,items:i,isVertical:K,containerStyle:_,isItemsTwoLength:w,handleButtonEnter:F,handleTransitionEnd:V,handleButtonLeave:Q,handleIndicatorClick:U,handleMouseEnter:D,handleMouseLeave:N,setActiveItem:X,prev:z,next:O,PlaceholderItem:J,isTwoLengthShow:W,throttledArrowClick:B,throttledIndicatorHover:L}};var b=a(20175),w=a(97747),I=a(20275);const E="ElCarousel",M=(0,l.pM)({name:E}),S=(0,l.pM)({...M,props:c,emits:d,setup(e,{expose:t,emit:a}){const s=e,{root:v,activeIndex:c,arrowDisplay:d,hasLabel:h,hover:f,isCardType:p,items:R,isVertical:m,containerStyle:g,handleButtonEnter:y,handleButtonLeave:C,isTransitioning:b,handleIndicatorClick:M,handleMouseEnter:S,handleMouseLeave:x,handleTransitionEnd:K,setActiveItem:_,prev:B,next:L,PlaceholderItem:W,isTwoLengthShow:T,throttledArrowClick:A,throttledIndicatorHover:G}=k(s,a,E),X=(0,w.DU)("carousel"),{t:$}=(0,I.Ym)(),H=(0,l.EW)((()=>{const e=[X.b(),X.m(s.direction)];return(0,n.R1)(p)&&e.push(X.m("card")),e})),D=(0,l.EW)((()=>{const e=[X.e("container")];return s.motionBlur&&(0,n.R1)(b)&&R.value.length>1&&e.push((0,n.R1)(m)?`${X.namespace.value}-transitioning-vertical`:`${X.namespace.value}-transitioning`),e})),N=(0,l.EW)((()=>{const e=[X.e("indicators"),X.em("indicators",s.direction)];return(0,n.R1)(h)&&e.push(X.em("indicators","labels")),"outside"===s.indicatorPosition&&e.push(X.em("indicators","outside")),(0,n.R1)(m)&&e.push(X.em("indicators","right")),e}));return t({activeIndex:c,setActiveItem:_,prev:B,next:L}),(e,t)=>((0,l.uX)(),(0,l.CE)("div",{ref_key:"root",ref:v,class:(0,o.C4)((0,n.R1)(H)),onMouseenter:(0,i.D$)((0,n.R1)(S),["stop"]),onMouseleave:(0,i.D$)((0,n.R1)(x),["stop"])},[(0,n.R1)(d)?((0,l.uX)(),(0,l.Wv)(i.eB,{key:0,name:"carousel-arrow-left",persisted:""},{default:(0,l.k6)((()=>[(0,l.bo)((0,l.Lk)("button",{type:"button",class:(0,o.C4)([(0,n.R1)(X).e("arrow"),(0,n.R1)(X).em("arrow","left")]),"aria-label":(0,n.R1)($)("el.carousel.leftArrow"),onMouseenter:e=>(0,n.R1)(y)("left"),onMouseleave:(0,n.R1)(C),onClick:(0,i.D$)((e=>(0,n.R1)(A)((0,n.R1)(c)-1)),["stop"])},[(0,l.bF)((0,n.R1)(r.tk),null,{default:(0,l.k6)((()=>[(0,l.bF)((0,n.R1)(u.ArrowLeft))])),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[i.aG,("always"===e.arrow||(0,n.R1)(f))&&(s.loop||(0,n.R1)(c)>0)]])])),_:1})):(0,l.Q3)("v-if",!0),(0,n.R1)(d)?((0,l.uX)(),(0,l.Wv)(i.eB,{key:1,name:"carousel-arrow-right",persisted:""},{default:(0,l.k6)((()=>[(0,l.bo)((0,l.Lk)("button",{type:"button",class:(0,o.C4)([(0,n.R1)(X).e("arrow"),(0,n.R1)(X).em("arrow","right")]),"aria-label":(0,n.R1)($)("el.carousel.rightArrow"),onMouseenter:e=>(0,n.R1)(y)("right"),onMouseleave:(0,n.R1)(C),onClick:(0,i.D$)((e=>(0,n.R1)(A)((0,n.R1)(c)+1)),["stop"])},[(0,l.bF)((0,n.R1)(r.tk),null,{default:(0,l.k6)((()=>[(0,l.bF)((0,n.R1)(u.ArrowRight))])),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[i.aG,("always"===e.arrow||(0,n.R1)(f))&&(s.loop||(0,n.R1)(c)<(0,n.R1)(R).length-1)]])])),_:1})):(0,l.Q3)("v-if",!0),(0,l.Lk)("div",{class:(0,o.C4)((0,n.R1)(D)),style:(0,o.Tr)((0,n.R1)(g)),onTransitionend:(0,n.R1)(K)},[(0,l.bF)((0,n.R1)(W)),(0,l.RG)(e.$slots,"default")],46,["onTransitionend"]),"none"!==e.indicatorPosition?((0,l.uX)(),(0,l.CE)("ul",{key:2,class:(0,o.C4)((0,n.R1)(N))},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)((0,n.R1)(R),((t,a)=>(0,l.bo)(((0,l.uX)(),(0,l.CE)("li",{key:a,class:(0,o.C4)([(0,n.R1)(X).e("indicator"),(0,n.R1)(X).em("indicator",e.direction),(0,n.R1)(X).is("active",a===(0,n.R1)(c))]),onMouseenter:e=>(0,n.R1)(G)(a),onClick:(0,i.D$)((e=>(0,n.R1)(M)(a)),["stop"])},[(0,l.Lk)("button",{class:(0,o.C4)((0,n.R1)(X).e("button")),"aria-label":(0,n.R1)($)("el.carousel.indicator",{index:a+1})},[(0,n.R1)(h)?((0,l.uX)(),(0,l.CE)("span",{key:0},(0,o.v_)(t.props.label),1)):(0,l.Q3)("v-if",!0)],10,["aria-label"])],42,["onMouseenter","onClick"])),[[i.aG,(0,n.R1)(T)(a)]]))),128))],2)):(0,l.Q3)("v-if",!0),s.motionBlur?((0,l.uX)(),(0,l.CE)("svg",{key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},[(0,l.Lk)("defs",null,[(0,l.Lk)("filter",{id:"elCarouselHorizontal"},[(0,l.Lk)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),(0,l.Lk)("filter",{id:"elCarouselVertical"},[(0,l.Lk)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])])])):(0,l.Q3)("v-if",!0)],42,["onMouseenter","onMouseleave"]))}});var x=(0,b.A)(S,[["__file","carousel.vue"]]);const K=(0,s.b_)({name:{type:String,default:""},label:{type:[String,Number],default:""}}),_=e=>{const t=(0,l.WQ)(p),a=(0,l.nI)();t||(0,g.U)(R,"usage: <el-carousel></el-carousel-item></el-carousel>"),a||(0,g.U)(R,"compositional hook can only be invoked inside setups");const o=(0,n.KR)(),i=(0,n.KR)(!1),r=(0,n.KR)(0),u=(0,n.KR)(1),s=(0,n.KR)(!1),c=(0,n.KR)(!1),d=(0,n.KR)(!1),h=(0,n.KR)(!1),{isCardType:f,isVertical:m,cardScale:y}=t;function C(e,t,a){const l=a-1,n=t-1,o=t+1,i=a/2;return 0===t&&e===l?-1:t===l&&0===e?a:e<n&&t-e>=i?a+1:e>o&&e-t>=i?-2:e}function k(e,a){var l,o;const i=(0,n.R1)(m)?(null==(l=t.root.value)?void 0:l.offsetHeight)||0:(null==(o=t.root.value)?void 0:o.offsetWidth)||0;return d.value?i*((2-y)*(e-a)+1)/4:e<a?-(1+y)*i/4:(3+y)*i/4}function b(e,a,l){const n=t.root.value;if(!n)return 0;const o=(l?n.offsetHeight:n.offsetWidth)||0;return o*(e-a)}const w=(e,a,l)=>{var i;const p=(0,n.R1)(f),R=null!=(i=t.items.value.length)?i:Number.NaN,g=e===a;p||(0,v.b0)(l)||(h.value=g||e===l),!g&&R>2&&t.loop&&(e=C(e,a,R));const w=(0,n.R1)(m);s.value=g,p?(d.value=Math.round(Math.abs(e-a))<=1,r.value=k(e,a),u.value=(0,n.R1)(s)?1:y):r.value=b(e,a,w),c.value=!0,g&&o.value&&t.setContainerHeight(o.value.offsetHeight)};function I(){if(t&&(0,n.R1)(f)){const e=t.items.value.findIndex((({uid:e})=>e===a.uid));t.setActiveItem(e)}}return(0,l.sV)((()=>{t.addItem({props:e,states:(0,n.Kh)({hover:i,translate:r,scale:u,active:s,ready:c,inStage:d,animating:h}),uid:a.uid,translateItem:w})})),(0,l.hi)((()=>{t.removeItem(a.uid)})),{carouselItemRef:o,active:s,animating:h,hover:i,inStage:d,isVertical:m,translate:r,isCardType:f,scale:u,ready:c,handleItemClick:I}},B=(0,l.pM)({name:R}),L=(0,l.pM)({...B,props:K,setup(e){const t=e,a=(0,w.DU)("carousel"),{carouselItemRef:r,active:u,animating:s,hover:v,inStage:c,isVertical:d,translate:h,isCardType:f,scale:p,ready:R,handleItemClick:m}=_(t),g=(0,l.EW)((()=>[a.e("item"),a.is("active",u.value),a.is("in-stage",c.value),a.is("hover",v.value),a.is("animating",s.value),{[a.em("item","card")]:f.value,[a.em("item","card-vertical")]:f.value&&d.value}])),y=(0,l.EW)((()=>{const e="translate"+((0,n.R1)(d)?"Y":"X"),t=`${e}(${(0,n.R1)(h)}px)`,a=`scale(${(0,n.R1)(p)})`,l=[t,a].join(" ");return{transform:l}}));return(e,t)=>(0,l.bo)(((0,l.uX)(),(0,l.CE)("div",{ref_key:"carouselItemRef",ref:r,class:(0,o.C4)((0,n.R1)(g)),style:(0,o.Tr)((0,n.R1)(y)),onClick:(0,n.R1)(m)},[(0,n.R1)(f)?(0,l.bo)(((0,l.uX)(),(0,l.CE)("div",{key:0,class:(0,o.C4)((0,n.R1)(a).e("mask"))},null,2)),[[i.aG,!(0,n.R1)(u)]]):(0,l.Q3)("v-if",!0),(0,l.RG)(e.$slots,"default")],14,["onClick"])),[[i.aG,(0,n.R1)(R)]])}});var W=(0,b.A)(L,[["__file","carousel-item.vue"]]),T=a(79846);const A=(0,T.GU)(x,{CarouselItem:W}),G=(0,T.WM)(W);a(27322);function X(e,t){const a=G,n=A;return(0,l.uX)(),(0,l.Wv)(n,{height:"180px",interval:6e3},{default:(0,l.k6)((()=>[((0,l.uX)(),(0,l.CE)(l.FK,null,(0,l.pI)(4,(e=>(0,l.bF)(a,{key:e},{default:(0,l.k6)((()=>t[0]||(t[0]=[(0,l.Lk)("img",{alt:"",src:"//fastly.jsdelivr.net/gh/chuzhixin/image/table/vab-image-1.jpg"},null,-1)]))),_:2},1024))),64))])),_:1})}function $(e){e.__source="src/views/index/components/StoreCarousel.vue"}var H=a(48499);const D={};"function"===typeof $&&$(D);const N=(0,H.A)(D,[["render",X],["__scopeId","data-v-50f5585b"]]);var V=N}}]);