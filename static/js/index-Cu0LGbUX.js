/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{i as ve,t as pe,u as be,a as ge,b as ye,c as me,d as ze,e as we,f as Se,g as xe,h as Ce,j as $e,k as Oe,l as Ee,m as Le,n as ke,o as Ae,p as We,q as Me,r as Te,s as je,v as Re,w as De,x as He,y as Be,z as Fe,A as Ue,B as Ne,C as Pe,D as qe,E as Ie,F as Ge,G as Ve,H as Ze,I as Ke,J as Je,K as Qe,L as Xe,M as Ye,N as et,O as tt,P as rt,Q as ot,R as nt,S as it,T as st,U as at,V as lt,W as ct,X as dt,Y as ut,Z as _t,_ as ft}from"./vsv-echarts-DsY13D_e.js";import{d as ae,L as A,v as W,aj as ht,a as w,C as vt,y as M,x as re,I as pt,z as bt,G as oe,s as gt,K as yt,u as le,o as mt,D as zt,b7 as wt}from"./vsv-element-plus-CbS2IxKo.js";import{_ as St}from"./index-BnT9uhJE.js";import"./vsv-icon-93gfr_RM.js";import"./vsv-nprogress-DzPgnd7z.js";var U=null;function xt(e){return U||(U=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){return setTimeout(t,16)}).bind(window)),U(e)}var N=null;function Ct(e){N||(N=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t)}).bind(window)),N(e)}function $t(e){var t=document.createElement("style");return t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(t),t}function T(e,t){t===void 0&&(t={});var r=document.createElement(e);return Object.keys(t).forEach(function(i){r[i]=t[i]}),r}function ce(e,t,r){var i=window.getComputedStyle(e,null)||{display:"none"};return i[t]}function P(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};for(var t=e;t!==document;){if(ce(t,"display")==="none")return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}var Ot='.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}',q=0,R=null;function Et(e,t){e.__resize_mutation_handler__||(e.__resize_mutation_handler__=At.bind(e));var r=e.__resize_listeners__;if(!r){if(e.__resize_listeners__=[],window.ResizeObserver){var i=e.offsetWidth,n=e.offsetHeight,o=new ResizeObserver(function(){!e.__resize_observer_triggered__&&(e.__resize_observer_triggered__=!0,e.offsetWidth===i&&e.offsetHeight===n)||D(e)}),c=P(e),b=c.detached,h=c.rendered;e.__resize_observer_triggered__=b===!1&&h===!1,e.__resize_observer__=o,o.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){D(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(q||(R=$t(Ot)),Wt(e),e.__resize_rendered__=P(e).rendered,window.MutationObserver){var v=new MutationObserver(e.__resize_mutation_handler__);v.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=v}}e.__resize_listeners__.push(t),q++}function Lt(e,t){var r=e.__resize_listeners__;if(r){if(t&&r.splice(r.indexOf(t),1),!r.length||!t){if(e.detachEvent&&e.removeEventListener){e.detachEvent("onresize",e.__resize_legacy_resize_handler__),document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);return}e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",I),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null}!--q&&R&&R.parentNode.removeChild(R)}}function kt(e){var t=e.__resize_last__,r=t.width,i=t.height,n=e.offsetWidth,o=e.offsetHeight;return n!==r||o!==i?{width:n,height:o}:null}function At(){var e=P(this),t=e.rendered,r=e.detached;t!==this.__resize_rendered__&&(!r&&this.__resize_triggers__&&(G(this),this.addEventListener("scroll",I,!0)),this.__resize_rendered__=t,D(this))}function I(){var e=this;G(this),this.__resize_raf__&&Ct(this.__resize_raf__),this.__resize_raf__=xt(function(){var t=kt(e);t&&(e.__resize_last__=t,D(e))})}function D(e){!e||!e.__resize_listeners__||e.__resize_listeners__.forEach(function(t){t.call(e,e)})}function Wt(e){var t=ce(e,"position");(!t||t==="static")&&(e.style.position="relative"),e.__resize_old_position__=t,e.__resize_last__={};var r=T("div",{className:"resize-triggers"}),i=T("div",{className:"resize-expand-trigger"}),n=T("div"),o=T("div",{className:"resize-contract-trigger"});i.appendChild(n),r.appendChild(i),r.appendChild(o),e.appendChild(r),e.__resize_triggers__={triggers:r,expand:i,expandChild:n,contract:o},G(e),e.addEventListener("scroll",I,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}function G(e){var t=e.__resize_triggers__,r=t.expand,i=t.expandChild,n=t.contract,o=n.scrollWidth,c=n.scrollHeight,b=r.offsetWidth,h=r.offsetHeight,v=r.scrollWidth,u=r.scrollHeight;n.scrollLeft=o,n.scrollTop=c,i.style.width=b+1+"px",i.style.height=h+1+"px",r.scrollLeft=v,r.scrollTop=u}var g=function(){return g=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},g.apply(this,arguments)};var Mt=["getWidth","getHeight","getDom","getOption","resize","dispatchAction","convertToPixel","convertFromPixel","containPixel","getDataURL","getConnectedDataURL","appendData","clear","isDisposed","dispose"];function Tt(e){return t=Object.create(null),Mt.forEach(function(r){t[r]=function(i){return function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(!e.value)throw new Error("ECharts is not initialized yet.");return e.value[i].apply(e.value,n)}}(r)}),t;var t}var jt={autoresize:[Boolean,Object]},Rt=/^on[^a-z]/,ne=function(e){return Rt.test(e)};function j(e,t){var r=yt(e)?le(e):e;return r&&typeof r=="object"&&"value"in r?r.value||t:r||t}var Dt="ecLoadingOptions",Ht={loading:Boolean,loadingOptions:Object},C=null,de="x-vue-echarts",ie=[],$=[];(function(e,t){if(e&&typeof document<"u"){var r,i=t.prepend===!0?"prepend":"append",n=t.singleTag===!0,o=typeof t.container=="string"?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(n){var c=ie.indexOf(o);c===-1&&(c=ie.push(o)-1,$[c]={}),r=$[c]&&$[c][i]?$[c][i]:$[c][i]=b()}else r=b();e.charCodeAt(0)===65279&&(e=e.substring(1)),r.styleSheet?r.styleSheet.cssText+=e:r.appendChild(document.createTextNode(e))}function b(){var h=document.createElement("style");if(h.setAttribute("type","text/css"),t.attributes)for(var v=Object.keys(t.attributes),u=0;u<v.length;u++)h.setAttribute(v[u],t.attributes[v[u]]);var m=i==="prepend"?"afterbegin":"beforeend";return o.insertAdjacentElement(m,h),h}})(`x-vue-echarts{display:flex;flex-direction:column;width:100%;height:100%;min-width:0}
.vue-echarts-inner{flex-grow:1;min-width:0;width:auto!important;height:auto!important}
`,{});var Bt=function(){if(C!=null)return C;if(typeof HTMLElement>"u"||typeof customElements>"u")return C=!1;try{new Function("tag",`class EChartsElement extends HTMLElement {
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
`)(de)}catch{return C=!1}return C=!0}(),ue="ecTheme",Ft="ecInitOptions",Ut="ecUpdateOptions",se=/(^&?~?!?)native:/,Nt=ae({name:"echarts",props:g(g({option:Object,theme:{type:[Object,String]},initOptions:Object,updateOptions:Object,group:String,manualUpdate:Boolean},jt),Ht),emits:{},inheritAttrs:!1,setup:function(e,t){var r=t.attrs,i=A(),n=A(),o=A(),c=A(),b=W(ue,null),h=W(Ft,null),v=W(Ut,null),u=ht(e),m=u.autoresize,H=u.manualUpdate,l=u.loading,V=u.loadingOptions,_e=w(function(){return c.value||e.option||null}),Z=w(function(){return e.theme||j(b,{})}),K=w(function(){return e.initOptions||j(h,{})}),J=w(function(){return e.updateOptions||j(v,{})}),fe=w(function(){return function(a){var s={};for(var d in a)ne(d)||(s[d]=a[d]);return s}(r)}),B={},O=vt().proxy.$listeners,E={};function L(a){if(n.value){var s=o.value=ve(n.value,Z.value,K.value);e.group&&(s.group=e.group),Object.keys(E).forEach(function(p){var _=E[p];if(_){var f=p.toLowerCase();f.charAt(0)==="~"&&(f=f.substring(1),_.__once__=!0);var S=s;if(f.indexOf("zr:")===0&&(S=s.getZr(),f=f.substring(3)),_.__once__){delete _.__once__;var z=_;_=function(){for(var x=[],y=0;y<arguments.length;y++)x[y]=arguments[y];z.apply(void 0,x),S.off(f,_)}}S.on(f,_)}}),m.value?gt(function(){s&&!s.isDisposed()&&s.resize(),d()}):d()}function d(){var p=a||_e.value;p&&s.setOption(p,J.value)}}function F(){o.value&&(o.value.dispose(),o.value=void 0)}O?Object.keys(O).forEach(function(a){se.test(a)?B[a.replace(se,"$1")]=O[a]:E[a]=O[a]}):Object.keys(r).filter(function(a){return ne(a)}).forEach(function(a){var s=a.charAt(2).toLowerCase()+a.slice(3);if(s.indexOf("native:")!==0)s.substring(s.length-4)==="Once"&&(s="~".concat(s.substring(0,s.length-4))),E[s]=r[a];else{var d="on".concat(s.charAt(7).toUpperCase()).concat(s.slice(8));B[d]=r[a]}});var k=null;M(H,function(a){typeof k=="function"&&(k(),k=null),a||(k=M(function(){return e.option},function(s,d){s&&(o.value?o.value.setOption(s,g({notMerge:s!==d},J.value)):L())},{deep:!0}))},{immediate:!0}),M([Z,K],function(){F(),L()},{deep:!0}),re(function(){e.group&&o.value&&(o.value.group=e.group)});var he=Tt(o);return function(a,s,d){var p=W(Dt,{}),_=w(function(){return g(g({},j(p,{})),d==null?void 0:d.value)});re(function(){var f=a.value;f&&(s.value?f.showLoading(_.value):f.hideLoading())})}(o,l,V),function(a,s,d){var p=null;M([d,a,s],function(_,f,S){var z=_[0],x=_[1],y=_[2];if(z&&x&&y){var Q=y===!0?{}:y,X=Q.throttle,Y=X===void 0?100:X,ee=Q.onResize,te=function(){x.resize(),ee==null||ee()};p=Y?pe(te,Y):te,Et(z,p)}S(function(){z&&p&&Lt(z,p)})})}(o,m,n),pt(function(){L()}),bt(function(){Bt&&i.value?i.value.__dispose=F:F()}),g({chart:o,root:i,inner:n,setOption:function(a,s){e.manualUpdate&&(c.value=a),o.value?o.value.setOption(a,s||{}):L(a)},nonEventAttrs:fe,nativeListeners:B},he)},render:function(){var e=g(g({},this.nonEventAttrs),this.nativeListeners);return e.ref="root",e.class=e.class?["echarts"].concat(e.class):"echarts",oe(de,e,[oe("div",{ref:"inner",class:"vue-echarts-inner"})])}});const Pt=["#1890ff","#36cbcb","#4ecb73","#fbd437","#f2637b","#8d98b3","#975fe5"],qt={},It={textStyle:{color:"#515a6e"},subtextStyle:{color:"#aaa"}},Gt={itemStyle:{borderWidth:1},lineStyle:{width:2},symbolSize:4,symbol:"emptyCircle",smooth:!0},Vt={itemStyle:{borderWidth:1},lineStyle:{width:2},symbolSize:4,symbol:"emptyCircle",smooth:!1},Zt={itemStyle:{barBorderWidth:0,barBorderColor:"#ccc"}},Kt={itemStyle:{borderWidth:0,borderColor:"#ccc"}},Jt={itemStyle:{borderWidth:0,borderColor:"#ccc"}},Qt={itemStyle:{borderWidth:0,borderColor:"#ccc"}},Xt={itemStyle:{borderWidth:0,borderColor:"#ccc"}},Yt={itemStyle:{borderWidth:0,borderColor:"#ccc"}},er={itemStyle:{borderWidth:0,borderColor:"#ccc"}},tr={itemStyle:{borderWidth:0,borderColor:"#ccc"}},rr={itemStyle:{color:"#c23531",color0:"#314656",borderColor:"#c23531",borderColor0:"#314656",borderWidth:1}},or={itemStyle:{borderWidth:0,borderColor:"#ccc"},lineStyle:{width:1,color:"#aaa"},symbolSize:4,symbol:"emptyCircle",smooth:!1,color:["#1890ff","#36cbcb","#4ecb73","#fbd437","#f2637b","#8d98b3","#975fe5"],label:{color:"#eee"}},nr={itemStyle:{areaColor:"#eee",borderColor:"#444",borderWidth:.5},label:{color:"#000"},emphasis:{itemStyle:{areaColor:"rgba(255,215,0,0.8)",borderColor:"#444",borderWidth:1},label:{color:"rgb(100,0,0)"}}},ir={itemStyle:{areaColor:"#eee",borderColor:"#444",borderWidth:.5},label:{color:"#000"},emphasis:{itemStyle:{areaColor:"rgba(255,215,0,0.8)",borderColor:"#444",borderWidth:1},label:{color:"rgb(100,0,0)"}}},sr={axisLine:{show:!0,lineStyle:{color:"#999"}},axisTick:{show:!0,lineStyle:{color:"#999"}},axisLabel:{show:!0,color:"#999"},splitLine:{show:!1,lineStyle:{color:["#999"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},ar={axisLine:{show:!0,lineStyle:{color:"#999"}},axisTick:{show:!0,lineStyle:{color:"#999"}},axisLabel:{show:!0,color:"#999"},splitLine:{show:!1,lineStyle:{color:["#999"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},lr={axisLine:{show:!0,lineStyle:{color:"#333"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!0,lineStyle:{color:["#ccc"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},cr={axisLine:{show:!0,lineStyle:{color:"#999"}},axisTick:{show:!0,lineStyle:{color:"#999"}},axisLabel:{show:!0,color:"#999"},splitLine:{show:!0,lineStyle:{color:["#999"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},dr={iconStyle:{borderColor:"#999"},emphasis:{iconStyle:{borderColor:"#666"}}},ur={textStyle:{color:"#999"}},_r={axisPointer:{lineStyle:{color:"#ccc",width:1},crossStyle:{color:"#ccc",width:1}}},fr={lineStyle:{color:"#293c55",width:1},itemStyle:{color:"#293c55",borderWidth:1},controlStyle:{color:"#293c55",borderColor:"#293c55",borderWidth:.5},checkpointStyle:{color:"#e43c59",borderColor:"#c23531"},label:{color:"#293c55"},emphasis:{itemStyle:{color:"#a9334c"},controlStyle:{color:"#293c55",borderColor:"#293c55",borderWidth:.5},label:{color:"#293c55"}}},hr={color:["#bf444c","#d88273","#f6efa6"]},vr={backgroundColor:"rgba(47,69,84,0)",dataBackgroundColor:"rgba(47,69,84,0.3)",fillerColor:"rgba(167,183,204,0.4)",handleColor:"#a7b7cc",handleSize:"100%",textStyle:{color:"#999"}},pr={label:{color:"#eee"},emphasis:{label:{color:"#eee"}}},br={color:Pt,textStyle:qt,title:It,line:Gt,radar:Vt,bar:Zt,pie:Kt,scatter:Jt,boxplot:Qt,parallel:Xt,sankey:Yt,funnel:er,gauge:tr,candlestick:rr,graph:or,map:nr,geo:ir,categoryAxis:sr,valueAxis:ar,logAxis:lr,timeAxis:cr,toolbox:dr,legend:ur,tooltip:_r,timeline:fr,visualMap:hr,dataZoom:vr,markPoint:pr},gr=ae({name:"VabChart",__name:"index",props:{option:{type:Object,default:()=>{}},autoresize:{type:Boolean,default:!0},renderer:{type:String,default:"SVGRenderer"}},emits:["click","contextmenu","dblclick","mousemove","mouseout","mouseover","mousedown","mouseup"],setup(e,{emit:t}){const r=e,i=ref(null);be([r.renderer==="CanvasRenderer"?ge:ye,me,ze,we,Se,xe,Ce,$e,Oe,Ee,Le,ke,Ae,We,Me,Te,je,Re,De,He,Be,Fe,Ue,Ne,Pe,qe,Ie,Ge,Ve,Ze,Ke,Je,Qe,Xe,Ye,et,tt,rt,ot,nt,it,st,at,lt,ct,dt,ut,_t,ft]),provide(ue,br);const n=t,o=l=>{n("click",l)},c=l=>{n("contextmenu",l)},b=l=>{n("dblclick",l)},h=l=>{n("mousedown",l)},v=l=>{n("mousemove",l)},u=l=>{n("mouseout",l)},m=l=>{n("mouseover",l)},H=l=>{n("mouseup",l)};return(l,V)=>(mt(),zt(le(Nt),wt({ref_key:"VChartRef",ref:i,autoresize:e.autoresize,class:"vab-chart",option:e.option},l.$attrs,{onClick:o,onContextmenu:c,onDblclick:b,onMousedown:h,onMousemove:v,onMouseout:u,onMouseover:m,onMouseup:H}),null,16,["autoresize","option"]))}}),xr=St(gr,[["__scopeId","data-v-7796d877"]]);export{xr as default};
