(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[2813],{18115:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return s}});var i=function(){return i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},i.apply(this,arguments)},s=function(){function t(t,e,n){var s=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){s.startTime||(s.startTime=t);var e=t-s.startTime;s.remaining=s.duration-e,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(e,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(e,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(e/s.duration);var n=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=n?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),e<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.options.onCompleteCallback&&s.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,i,a,r=t<0?"-":"";e=Math.abs(t).toFixed(s.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],i=o.length>1?s.options.decimal+o[1]:"",s.options.useGrouping){a="";for(var l=3,u=0,h=0,d=n.length;h<d;++h)s.options.useIndianSeparators&&4===h&&(l=2,u=1),0!==h&&u%l==0&&(a=s.options.separator+a),u++,a=n[d-h-1]+a;n=a}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]})),i=i.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]}))),r+s.options.prefix+n+i+s.options.suffix},this.easeOutExpo=function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e},this.options=i(i({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return s.handleScroll(s)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),i=n.top+window.pageYOffset,s=n.top+n.height+window.pageYOffset;s<e&&s>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>s||i>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},10723:function(t,e,n){!function(e,i){t.exports=i(n(18115))}(0,(function(t){"use strict";var e,n=(e="Function",function(t){return Object.prototype.toString.call(t)==="[object ".concat(e,"]")}),i={__countup__:t.CountUp,name:"VueCountUp",props:{delay:{type:Number,required:!1,default:0},endVal:{type:Number,required:!0},options:{type:Object,required:!1}},data:function(){return{instance:null}},watch:{endVal:{handler:function(t){this.instance&&n(this.instance.update)&&this.instance.update(t)},deep:!1}},methods:{create:function(){var e=this;if(!e.instance){var n=e.$el,i=new t.CountUp(n,e.endVal,e.options);i.error||(e.instance=i,e.delay<0?e.$emit("ready",i,t.CountUp):setTimeout((function(){return i.start((function(){return e.$emit("ready",i,t.CountUp)}))}),e.delay))}},destroy:function(){this.instance=null},printValue:function(t){if(this.instance&&n(this.instance.printValue))return this.instance.printValue(t)},start:function(t){if(this.instance&&n(this.instance.start))return this.instance.start(t)},pauseResume:function(){if(this.instance&&n(this.instance.pauseResume))return this.instance.pauseResume()},reset:function(){if(this.instance&&n(this.instance.reset))return this.instance.reset()},update:function(t){if(this.instance&&n(this.instance.update))return this.instance.update(t)}},mounted:function(){this.create()},beforeDestroy:function(){this.destroy()}};return function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===n&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}(""),function(t,e,n,i,s,a,r,o,l,u){"boolean"!=typeof r&&(l=o,o=r,r=!1);var h,d="function"==typeof n?n.options:n;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,s&&(d.functional=!0)),i&&(d._scopeId=i),a?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=h):e&&(h=r?function(){e.call(this,u(this.$root.$options.shadowRoot))}:function(t){e.call(this,o(t))}),h)if(d.functional){var c=d.render;d.render=function(t,e){return h.call(e),c(t,e)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,h):[h]}return n}({render:function(){var t=this.$createElement;return(this._self._c||t)("span")},staticRenderFns:[]},void 0,i,"data-v-0abbdf5a",!1,void 0,void 0,void 0)}))},82813:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("el-card",{attrs:{shadow:"never",header:"在线人数"}},[e("div",{staticClass:"monitor-online-num-card"},[e("div",{staticClass:"monitor-online-num-text"},[t._v(t._s(t.currentTime))]),e("div",{staticClass:"monitor-online-num-title ele-text-heading"},[e("vue-count-up",{attrs:{"end-val":t.onlineNum}})],1),e("div",{staticClass:"monitor-online-num-text"},[t._v("在线总人数")]),e("ele-dot",{attrs:{text:t.updateTimeText}})],1)])},s=[],a=n(10723),r=n.n(a),o={name:"OnlineNum",components:{VueCountUp:r()},data(){return{updateTime:10,currentTime:"20:58:22",onlineNum:228,onlineNumTimer:null}},computed:{updateTimeText(){return this.updateTime+" 秒后更新"}},created(){this.startUpdateOnlineNum()},methods:{startUpdateOnlineNum(){this.currentTime=this.$util.toDateString(new Date,"HH:mm:ss"),this.onlineNumTimer=setInterval((()=>{this.currentTime=this.$util.toDateString(new Date,"HH:mm:ss"),1===this.updateTime?(this.updateTime=10,this.onlineNum=100+Math.round(900*Math.random())):this.updateTime--}),1e3)}},beforeDestroy(){this.onlineNumTimer&&clearInterval(this.onlineNumTimer)}},l=o,u=n(64008),h=(0,u.A)(l,i,s,!1,null,"8802ca32",null),d=h.exports}}]);