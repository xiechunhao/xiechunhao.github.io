/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 15:53:45 
 */
import{o as a,b as u,e as N,Z as B,ae as p,n as b,aB as y,V as d,Y as g}from"./vsv-element-plus-DDEqdpLt.js";import{_}from"./index-CQIU_Sxf.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const j={name:"VabMagnifier",props:{url:{type:String,default:""},highUrl:{type:String,default:""},width:{type:Number,default:168},height:{type:Number,default:-1},type:{type:String,default:"square",validator(e){return["circle","square"].includes(e)}},zoomerStyle:{type:Object,default:()=>{}},outZoomerStyle:{type:Object,default:()=>{}},scale:{type:Number,default:2},enterEvent:{type:[Object,UIEvent],default:null},moveEvent:{type:[Object,UIEvent],default:null},leaveEvent:{type:[Object,UIEvent],default:null},selector:{type:Boolean,default:!0},outZoomer:{type:Boolean,default:!1},pointer:{type:Boolean,default:!1},baseline:{type:Boolean,default:!1},disabledReactive:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},mask:{type:Boolean,default:!0},maskColor:{type:String,default:""}},emits:["mousemove","mouseleave","mouseenter","created"],data(){return{zoomerRect:{top:0,left:0,absoluteLeft:0,absoluteTop:0},zoomerBgRect:{top:0,left:0},zoomerPoint:{leftBound:0,topBound:0,rightBound:0,bottomBound:0},vZoomerPoint:{leftBound:0,topBound:0,rightBound:0,bottomBound:0},hideZoomer:!0,hideOutZoomer:!0,imgLoadedFlag:!1,outZoomerInitTop:0,outZoomerTop:0,imgInfo:{},$img:null}},computed:{zoomerHeight(){return this.height>0?this.height:this.width},zoomerHalfWidth(){return this.width/2},zoomerHalfHeight(){return this.zoomerHeight/2},vZoomerHalfWidth(){const e=this.zoomerHalfWidth;return this.outZoomer?e*this.scale:e},vZoomerHalfHeight(){const e=this.zoomerHalfHeight;return this.outZoomer?e*this.scale:e},zoomerPosition(){const{top:e,left:o}=this.zoomerRect;return{top:`${e}px`,left:`${o}px`}},zoomerSize(){const{width:e,zoomerHeight:o}=this;return{width:`${e}px`,height:`${o}px`}},outZoomerSize(){const{scale:e,width:o,zoomerHeight:t}=this;return{width:`${o*e}px`,height:`${t*e}px`}},outZoomerPosition(){return{top:`${this.outZoomerTop}px`}},zoomerBgUrl(){return{backgroundImage:`url(${this.highUrl||this.url})`}},zoomerBgSize(){const{scale:e,imgInfo:{height:o,width:t}}=this;return{backgroundSize:`${t*e}px ${o*e}px`}},zoomerBgPosition(){const{left:e,top:o}=this.zoomerBgRect;return{backgroundPosition:`${e}px ${o}px`}}},watch:{scale(){this.initVZoomerPoint(),!this.outZoomer&&this.mouseMove(event)},enterEvent:"mouseEnter",moveEvent:"mouseMove",leaveEvent:"mouseLeave",url:"handlerUrlChange",width:"initZoomerPoint",height:"initZoomerPoint",vZoomerHalfWidth:"initVZoomerPoint",vZoomerHalfHeight:"initVZoomerPoint"},mounted(){this.url&&this.handlerUrlChange(),this.beforeReactivateMoveFns=[],this.$img=this.$refs.imgRef,this.addResizeListener(this.$refs.imgRef,e=>{this.imgInfo=e,this.handlerImgResize()})},methods:{getBoundingClientRect(e){const o=e.getBoundingClientRect(),s=navigator.userAgent.includes("MSIE")&&e.tagName==="HTML"?-e.scrollTop:o.top;return{left:o.left,top:s,right:o.right,bottom:o.bottom,width:o.right-o.left,height:o.bottom-s}},addResizeListener(e,o){this.disabledReactive||this.beforeReactivateMoveFns.push(()=>{const t=this.getBoundingClientRect(e);this.validImgResize(t)&&o&&o(t)})},handlerUrlChange(){this.imgLoadedFlag=!1,this.loadImg(this.url).then(this.imgLoaded)},loadImg(e){return new Promise((o,t)=>{const s=document.createElement("img");s.addEventListener("load",o),s.addEventListener("error",t),s.src=e})},imgLoaded(){this.$nextTick(()=>{const e=this.$refs.imgRef;this.imgLoadedFlag||(this.imgLoadedFlag=!0,e.src=this.url,setTimeout(()=>{this.imgInfo=this.getBoundingClientRect(e),this.handlerImgResize(),this.$emit("created",e,this.imgInfo)},500))})},validImgResize(e){return JSON.stringify(this.imgInfo)!==JSON.stringify(e)},handlerImgResize(){this.initZoomerProperty(),this.resetOutZoomPosition()},mouseEnter(e){this.imgLoadedFlag&&(this.hideZoomer=!1),this.$emit("mouseenter",e)},mouseMove(e){if(!this.hideZoomer){if(this.imgLoadedFlag&&e){this.beforeReactivateMoveFns.forEach(V=>V.call(this));const{pageX:o,pageY:t,clientY:s}=e,r=t-s,{scale:i,zoomerRect:n,zoomerBgRect:f,zoomerPoint:H,vZoomerPoint:P,outZoomer:I,zoomerHalfWidth:R,zoomerHalfHeight:L,vZoomerHalfWidth:E,vZoomerHalfHeight:S}=this,{absoluteLeft:T,absoluteTop:M}=n,{leftBound:c,topBound:v,rightBound:w,bottomBound:O}=H,{leftBound:Z,topBound:z,rightBound:x,bottomBound:k}=P;let m=this.outZoomerInitTop;const l=o-T,h=t-M,U=l>c?Math.min(l,w):c,W=h>v?Math.min(h,O):v,C=l*i>Z?Math.min(l*i,x):Z,F=h*i>z?Math.min(h*i,k):z;n.left=U-R,n.top=W-L,f.left=-C+E,f.top=-F+S,I&&(m||(m=this.outZoomerInitTop=r+this.imgInfo.top),this.hideOutZoomer&&(this.hideOutZoomer=!1),this.outZoomerTop=r>m?r-m:0)}this.$emit("mousemove",e)}},mouseLeave(e){this.hideZoomer=!0,this.outZoomer&&(this.hideOutZoomer=!0),this.$emit("mouseleave",e)},initZoomerProperty(){const e=this.zoomerRect,{left:o,top:t}=this.imgInfo,{documentElement:s,body:r}=document,i=s.scrollTop||r.scrollTop,n=s.scrollLeft||r.scrollLeft;e.absoluteLeft=o+n,e.absoluteTop=t+i,this.initZoomerPoint(),this.initVZoomerPoint()},initZoomerPoint(){const e=this.zoomerHalfWidth,o=this.zoomerHalfHeight,{width:t,height:s}=this.imgInfo,r=this.zoomerPoint;r.leftBound=e,r.topBound=o,r.rightBound=t-e,r.bottomBound=s-o,this.mouseMove(event)},initVZoomerPoint(){const e=this.vZoomerPoint,o=this.vZoomerHalfWidth,t=this.vZoomerHalfHeight,{width:s,height:r}=this.imgInfo,i=this.scale;e.leftBound=o,e.topBound=t,e.rightBound=s*i-o,e.bottomBound=r*i-t,this.mouseMove(event)},reset(){this.initZoomerProperty()},resetOutZoomPosition(){this.outZoomerInitTop=0}}},Y={key:0,class:"img-zoomer-point"};function q(e,o,t,s,r,i){return a(),u("div",{class:"vab-magnifier",onMouseenter:o[1]||(o[1]=n=>!t.disabled&&!t.enterEvent&&i.mouseEnter(n)),onMouseleave:o[2]||(o[2]=n=>!t.disabled&&!t.leaveEvent&&i.mouseLeave(n)),onMousemove:o[3]||(o[3]=n=>!t.disabled&&!t.moveEvent&&i.mouseMove(n))},[N("img",{ref:"imgRef",class:"origin-img",onLoad:o[0]||(o[0]=n=>i.imgLoaded())},null,544),t.selector?B((a(),u("div",{key:0,class:b(["img-zoomer",{circle:t.type==="circle"}]),style:y([t.zoomerStyle,i.zoomerSize,i.zoomerPosition,!t.outZoomer&&i.zoomerBgUrl,!t.outZoomer&&i.zoomerBgSize,!t.outZoomer&&i.zoomerBgPosition])},[d(e.$slots,"zoomer",{},void 0,!0)],6)),[[p,!r.hideZoomer&&r.imgLoadedFlag]]):g("",!0),t.outZoomer?B((a(),u("div",{key:1,class:b(["img-out-show",{"base-line":t.baseline}]),style:y([t.outZoomerStyle,i.outZoomerSize,i.outZoomerPosition,i.zoomerBgUrl,i.zoomerBgSize,i.zoomerBgPosition])},[t.pointer?(a(),u("div",Y)):g("",!0),d(e.$slots,"outZoomer",{},void 0,!0)],6)),[[p,!r.hideOutZoomer]]):g("",!0),d(e.$slots,"default",{},void 0,!0)],32)}const G=_(j,[["render",q],["__scopeId","data-v-175bbddb"]]);export{G as default};
