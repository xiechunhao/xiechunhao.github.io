/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:33:27 
 */
import{t as ve,i as pe,u as be,a as ge,b as ye,c as me,d as we,e as ze,f as Se,g as xe,h as Ce,j as $e,k as Ee,l as Oe,m as Le,n as ke,o as Ae,p as We,q as Me,r as Te,s as je,v as Re,w as De,x as He,y as Be,z as Fe,A as Ue,B as Ne,C as qe,D as Pe,E as Ie,F as Ge,G as Ve,H as Ze,I as Je,J as Ke,K as Qe,M as Xe,N as Ye,O as et,P as tt,Q as rt,R as ot,S as nt,T as it,U as at,V as st,W as lt,X as ct,Y as ut,Z as dt,_ as _t,$ as ft}from"./vsv-echarts-BbmB9jGw.js";import{d as se,a1 as re,F as A,v as W,q as ht,a as z,D as vt,w as M,G as oe,C as pt,E as bt,p as gt,i as yt,u as le,r as mt,S as wt,o as zt,a0 as St,ab as xt}from"./vsv-element-plus-B-S50adB.js";import{_ as Ct}from"./index-Ba9EqH5M.js";import"./vsv-icon-BcEnJ7dJ.js";import"./vsv-nprogress-Bmiy9T8n.js";var U=null;function $t(e){return U||(U=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){return setTimeout(t,16)}).bind(window)),U(e)}var N=null;function Et(e){N||(N=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t)}).bind(window)),N(e)}function Ot(e){var t=document.createElement("style");return t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(t),t}function T(e,t){t===void 0&&(t={});var r=document.createElement(e);return Object.keys(t).forEach(function(i){r[i]=t[i]}),r}function ce(e,t,r){var i=window.getComputedStyle(e,null)||{display:"none"};return i[t]}function q(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};for(var t=e;t!==document;){if(ce(t,"display")==="none")return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}var Lt='.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}',P=0,R=null;function kt(e,t){e.__resize_mutation_handler__||(e.__resize_mutation_handler__=Mt.bind(e));var r=e.__resize_listeners__;if(!r){if(e.__resize_listeners__=[],window.ResizeObserver){var i=e.offsetWidth,n=e.offsetHeight,o=new ResizeObserver(function(){!e.__resize_observer_triggered__&&(e.__resize_observer_triggered__=!0,e.offsetWidth===i&&e.offsetHeight===n)||D(e)}),c=q(e),b=c.detached,h=c.rendered;e.__resize_observer_triggered__=b===!1&&h===!1,e.__resize_observer__=o,o.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){D(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(P||(R=Ot(Lt)),Tt(e),e.__resize_rendered__=q(e).rendered,window.MutationObserver){var v=new MutationObserver(e.__resize_mutation_handler__);v.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=v}}e.__resize_listeners__.push(t),P++}function At(e,t){var r=e.__resize_listeners__;if(r){if(t&&r.splice(r.indexOf(t),1),!r.length||!t){if(e.detachEvent&&e.removeEventListener){e.detachEvent("onresize",e.__resize_legacy_resize_handler__),document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);return}e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",I),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null}!--P&&R&&R.parentNode.removeChild(R)}}function Wt(e){var t=e.__resize_last__,r=t.width,i=t.height,n=e.offsetWidth,o=e.offsetHeight;return n!==r||o!==i?{width:n,height:o}:null}function Mt(){var e=q(this),t=e.rendered,r=e.detached;t!==this.__resize_rendered__&&(!r&&this.__resize_triggers__&&(G(this),this.addEventListener("scroll",I,!0)),this.__resize_rendered__=t,D(this))}function I(){var e=this;G(this),this.__resize_raf__&&Et(this.__resize_raf__),this.__resize_raf__=$t(function(){var t=Wt(e);t&&(e.__resize_last__=t,D(e))})}function D(e){!e||!e.__resize_listeners__||e.__resize_listeners__.forEach(function(t){t.call(e,e)})}function Tt(e){var t=ce(e,"position");(!t||t==="static")&&(e.style.position="relative"),e.__resize_old_position__=t,e.__resize_last__={};var r=T("div",{className:"resize-triggers"}),i=T("div",{className:"resize-expand-trigger"}),n=T("div"),o=T("div",{className:"resize-contract-trigger"});i.appendChild(n),r.appendChild(i),r.appendChild(o),e.appendChild(r),e.__resize_triggers__={triggers:r,expand:i,expandChild:n,contract:o},G(e),e.addEventListener("scroll",I,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}function G(e){var t=e.__resize_triggers__,r=t.expand,i=t.expandChild,n=t.contract,o=n.scrollWidth,c=n.scrollHeight,b=r.offsetWidth,h=r.offsetHeight,v=r.scrollWidth,d=r.scrollHeight;n.scrollLeft=o,n.scrollTop=c,i.style.width=b+1+"px",i.style.height=h+1+"px",r.scrollLeft=v,r.scrollTop=d}var g=function(){return g=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},g.apply(this,arguments)};var jt=["getWidth","getHeight","getDom","getOption","resize","dispatchAction","convertToPixel","convertFromPixel","containPixel","getDataURL","getConnectedDataURL","appendData","clear","isDisposed","dispose"];function Rt(e){return t=Object.create(null),jt.forEach(function(r){t[r]=function(i){return function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(!e.value)throw new Error("ECharts is not initialized yet.");return e.value[i].apply(e.value,n)}}(r)}),t;var t}var Dt={autoresize:[Boolean,Object]},Ht=/^on[^a-z]/,ne=function(e){return Ht.test(e)};function j(e,t){var r=yt(e)?le(e):e;return r&&typeof r=="object"&&"value"in r?r.value||t:r||t}var Bt="ecLoadingOptions",Ft={loading:Boolean,loadingOptions:Object},C=null,ue="x-vue-echarts",ie=[],$=[];(function(e,t){if(e&&typeof document<"u"){var r,i=t.prepend===!0?"prepend":"append",n=t.singleTag===!0,o=typeof t.container=="string"?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(n){var c=ie.indexOf(o);c===-1&&(c=ie.push(o)-1,$[c]={}),r=$[c]&&$[c][i]?$[c][i]:$[c][i]=b()}else r=b();e.charCodeAt(0)===65279&&(e=e.substring(1)),r.styleSheet?r.styleSheet.cssText+=e:r.appendChild(document.createTextNode(e))}function b(){var h=document.createElement("style");if(h.setAttribute("type","text/css"),t.attributes)for(var v=Object.keys(t.attributes),d=0;d<v.length;d++)h.setAttribute(v[d],t.attributes[v[d]]);var m=i==="prepend"?"afterbegin":"beforeend";return o.insertAdjacentElement(m,h),h}})(`x-vue-echarts{display:flex;flex-direction:column;width:100%;height:100%;min-width:0}
.vue-echarts-inner{flex-grow:1;min-width:0;width:auto!important;height:auto!important}
`,{});var Ut=function(){if(C!=null)return C;if(typeof HTMLElement>"u"||typeof customElements>"u")return C=!1;try{new Function("tag",`class EChartsElement extends HTMLElement {
  __dispose = null;

  disconnectedCallback() {
    if (this.__dispose) {
      this.__dispose();
      this.__dispose = null;
    }
  }
}

if (customElements.get(tag) == null) {
  customElements.define(tag, EChartsElement);
}
`)(ue)}catch{return C=!1}return C=!0}(),de="ecTheme",Nt="ecInitOptions",qt="ecUpdateOptions",ae=/(^&?~?!?)native:/,Pt=se({name:"echarts",props:g(g({option:Object,theme:{type:[Object,String]},initOptions:Object,updateOptions:Object,group:String,manualUpdate:Boolean},Dt),Ft),emits:{},inheritAttrs:!1,setup:function(e,t){var r=t.attrs,i=A(),n=A(),o=A(),c=A(),b=W(de,null),h=W(Nt,null),v=W(qt,null),d=ht(e),m=d.autoresize,H=d.manualUpdate,l=d.loading,V=d.loadingOptions,_e=z(function(){return c.value||e.option||null}),Z=z(function(){return e.theme||j(b,{})}),J=z(function(){return e.initOptions||j(h,{})}),K=z(function(){return e.updateOptions||j(v,{})}),fe=z(function(){return function(s){var a={};for(var u in s)ne(u)||(a[u]=s[u]);return a}(r)}),B={},E=vt().proxy.$listeners,O={};function L(s){if(n.value){var a=o.value=pe(n.value,Z.value,J.value);e.group&&(a.group=e.group),Object.keys(O).forEach(function(p){var _=O[p];if(_){var f=p.toLowerCase();f.charAt(0)==="~"&&(f=f.substring(1),_.__once__=!0);var S=a;if(f.indexOf("zr:")===0&&(S=a.getZr(),f=f.substring(3)),_.__once__){delete _.__once__;var w=_;_=function(){for(var x=[],y=0;y<arguments.length;y++)x[y]=arguments[y];w.apply(void 0,x),S.off(f,_)}}S.on(f,_)}}),m.value?gt(function(){a&&!a.isDisposed()&&a.resize(),u()}):u()}function u(){var p=s||_e.value;p&&a.setOption(p,K.value)}}function F(){o.value&&(o.value.dispose(),o.value=void 0)}E?Object.keys(E).forEach(function(s){ae.test(s)?B[s.replace(ae,"$1")]=E[s]:O[s]=E[s]}):Object.keys(r).filter(function(s){return ne(s)}).forEach(function(s){var a=s.charAt(2).toLowerCase()+s.slice(3);if(a.indexOf("native:")!==0)a.substring(a.length-4)==="Once"&&(a="~".concat(a.substring(0,a.length-4))),O[a]=r[s];else{var u="on".concat(a.charAt(7).toUpperCase()).concat(a.slice(8));B[u]=r[s]}});var k=null;M(H,function(s){typeof k=="function"&&(k(),k=null),s||(k=M(function(){return e.option},function(a,u){a&&(o.value?o.value.setOption(a,g({notMerge:a!==u},K.value)):L())},{deep:!0}))},{immediate:!0}),M([Z,J],function(){F(),L()},{deep:!0}),oe(function(){e.group&&o.value&&(o.value.group=e.group)});var he=Rt(o);return function(s,a,u){var p=W(Bt,{}),_=z(function(){return g(g({},j(p,{})),u==null?void 0:u.value)});oe(function(){var f=s.value;f&&(a.value?f.showLoading(_.value):f.hideLoading())})}(o,l,V),function(s,a,u){var p=null;M([u,s,a],function(_,f,S){var w=_[0],x=_[1],y=_[2];if(w&&x&&y){var Q=y===!0?{}:y,X=Q.throttle,Y=X===void 0?100:X,ee=Q.onResize,te=function(){x.resize(),ee==null||ee()};p=Y?ve(te,Y):te,kt(w,p)}S(function(){w&&p&&At(w,p)})})}(o,m,n),pt(function(){L()}),bt(function(){Ut&&i.value?i.value.__dispose=F:F()}),g({chart:o,root:i,inner:n,setOption:function(s,a){e.manualUpdate&&(c.value=s),o.value?o.value.setOption(s,a||{}):L(s)},nonEventAttrs:fe,nativeListeners:B},he)},render:function(){var e=g(g({},this.nonEventAttrs),this.nativeListeners);return e.ref="root",e.class=e.class?["echarts"].concat(e.class):"echarts",re(ue,e,[re("div",{ref:"inner",class:"vue-echarts-inner"})])}});const It=["#1890ff","#36cbcb","#4ecb73","#fbd437","#f2637b","#8d98b3","#975fe5"],Gt={},Vt={textStyle:{color:"#515a6e"},subtextStyle:{color:"#aaa"}},Zt={itemStyle:{borderWidth:1},lineStyle:{width:2},symbolSize:4,symbol:"emptyCircle",smooth:!0},Jt={itemStyle:{borderWidth:1},lineStyle:{width:2},symbolSize:4,symbol:"emptyCircle",smooth:!1},Kt={itemStyle:{barBorderWidth:0,barBorderColor:"#ccc"}},Qt={itemStyle:{borderWidth:0,borderColor:"#ccc"}},Xt={itemStyle:{borderWidth:0,borderColor:"#ccc"}},Yt={itemStyle:{borderWidth:0,borderColor:"#ccc"}},er={itemStyle:{borderWidth:0,borderColor:"#ccc"}},tr={itemStyle:{borderWidth:0,borderColor:"#ccc"}},rr={itemStyle:{borderWidth:0,borderColor:"#ccc"}},or={itemStyle:{borderWidth:0,borderColor:"#ccc"}},nr={itemStyle:{color:"#c23531",color0:"#314656",borderColor:"#c23531",borderColor0:"#314656",borderWidth:1}},ir={itemStyle:{borderWidth:0,borderColor:"#ccc"},lineStyle:{width:1,color:"#aaa"},symbolSize:4,symbol:"emptyCircle",smooth:!1,color:["#1890ff","#36cbcb","#4ecb73","#fbd437","#f2637b","#8d98b3","#975fe5"],label:{color:"#eee"}},ar={itemStyle:{areaColor:"#eee",borderColor:"#444",borderWidth:.5},label:{color:"#000"},emphasis:{itemStyle:{areaColor:"rgba(255,215,0,0.8)",borderColor:"#444",borderWidth:1},label:{color:"rgb(100,0,0)"}}},sr={itemStyle:{areaColor:"#eee",borderColor:"#444",borderWidth:.5},label:{color:"#000"},emphasis:{itemStyle:{areaColor:"rgba(255,215,0,0.8)",borderColor:"#444",borderWidth:1},label:{color:"rgb(100,0,0)"}}},lr={axisLine:{show:!0,lineStyle:{color:"#999"}},axisTick:{show:!0,lineStyle:{color:"#999"}},axisLabel:{show:!0,color:"#999"},splitLine:{show:!1,lineStyle:{color:["#999"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},cr={axisLine:{show:!0,lineStyle:{color:"#999"}},axisTick:{show:!0,lineStyle:{color:"#999"}},axisLabel:{show:!0,color:"#999"},splitLine:{show:!1,lineStyle:{color:["#999"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},ur={axisLine:{show:!0,lineStyle:{color:"#333"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!0,lineStyle:{color:["#ccc"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},dr={axisLine:{show:!0,lineStyle:{color:"#999"}},axisTick:{show:!0,lineStyle:{color:"#999"}},axisLabel:{show:!0,color:"#999"},splitLine:{show:!0,lineStyle:{color:["#999"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},_r={iconStyle:{borderColor:"#999"},emphasis:{iconStyle:{borderColor:"#666"}}},fr={textStyle:{color:"#999"}},hr={axisPointer:{lineStyle:{color:"#ccc",width:1},crossStyle:{color:"#ccc",width:1}}},vr={lineStyle:{color:"#293c55",width:1},itemStyle:{color:"#293c55",borderWidth:1},controlStyle:{color:"#293c55",borderColor:"#293c55",borderWidth:.5},checkpointStyle:{color:"#e43c59",borderColor:"#c23531"},label:{color:"#293c55"},emphasis:{itemStyle:{color:"#a9334c"},controlStyle:{color:"#293c55",borderColor:"#293c55",borderWidth:.5},label:{color:"#293c55"}}},pr={color:["#bf444c","#d88273","#f6efa6"]},br={backgroundColor:"rgba(47,69,84,0)",dataBackgroundColor:"rgba(47,69,84,0.3)",fillerColor:"rgba(167,183,204,0.4)",handleColor:"#a7b7cc",handleSize:"100%",textStyle:{color:"#999"}},gr={label:{color:"#eee"},emphasis:{label:{color:"#eee"}}},yr={color:It,textStyle:Gt,title:Vt,line:Zt,radar:Jt,bar:Kt,pie:Qt,scatter:Xt,boxplot:Yt,parallel:er,sankey:tr,funnel:rr,gauge:or,candlestick:nr,graph:ir,map:ar,geo:sr,categoryAxis:lr,valueAxis:cr,logAxis:ur,timeAxis:dr,toolbox:_r,legend:fr,tooltip:hr,timeline:vr,visualMap:pr,dataZoom:br,markPoint:gr},mr=se({name:"VabChart",__name:"index",props:{option:{type:Object,default:()=>{}},autoresize:{type:Boolean,default:!0},renderer:{type:String,default:"SVGRenderer"}},emits:["click","contextmenu","dblclick","mousemove","mouseout","mouseover","mousedown","mouseup"],setup(e,{emit:t}){const r=e,i=mt(null);be([r.renderer==="CanvasRenderer"?ge:ye,me,we,ze,Se,xe,Ce,$e,Ee,Oe,Le,ke,Ae,We,Me,Te,je,Re,De,He,Be,Fe,Ue,Ne,qe,Pe,Ie,Ge,Ve,Ze,Je,Ke,Qe,Xe,Ye,et,tt,rt,ot,nt,it,at,st,lt,ct,ut,dt,_t,ft]),xt(de,yr);const n=t,o=l=>{n("click",l)},c=l=>{n("contextmenu",l)},b=l=>{n("dblclick",l)},h=l=>{n("mousedown",l)},v=l=>{n("mousemove",l)},d=l=>{n("mouseout",l)},m=l=>{n("mouseover",l)},H=l=>{n("mouseup",l)};return(l,V)=>(zt(),wt(le(Pt),St({ref_key:"VChartRef",ref:i,autoresize:e.autoresize,class:"vab-chart",option:e.option},l.$attrs,{onClick:o,onContextmenu:c,onDblclick:b,onMousedown:h,onMousemove:v,onMouseout:d,onMouseover:m,onMouseup:H}),null,16,["autoresize","option"]))}}),$r=Ct(mr,[["__scopeId","data-v-7796d877"]]);export{$r as default};
