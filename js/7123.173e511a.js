(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[7123],{18115:function(t,e,s){"use strict";s.r(e),s.d(e,{CountUp:function(){return n}});var a=function(){return a=Object.assign||function(t){for(var e,s=1,a=arguments.length;s<a;s++)for(var n in e=arguments[s])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},a.apply(this,arguments)},n=function(){function t(t,e,s){var n=this;this.endVal=e,this.options=s,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){n.startTime||(n.startTime=t);var e=t-n.startTime;n.remaining=n.duration-e,n.useEasing?n.countDown?n.frameVal=n.startVal-n.easingFn(e,0,n.startVal-n.endVal,n.duration):n.frameVal=n.easingFn(e,n.startVal,n.endVal-n.startVal,n.duration):n.frameVal=n.startVal+(n.endVal-n.startVal)*(e/n.duration);var s=n.countDown?n.frameVal<n.endVal:n.frameVal>n.endVal;n.frameVal=s?n.endVal:n.frameVal,n.frameVal=Number(n.frameVal.toFixed(n.options.decimalPlaces)),n.printValue(n.frameVal),e<n.duration?n.rAF=requestAnimationFrame(n.count):null!==n.finalEndVal?n.update(n.finalEndVal):n.options.onCompleteCallback&&n.options.onCompleteCallback()},this.formatNumber=function(t){var e,s,a,i,r=t<0?"-":"";e=Math.abs(t).toFixed(n.options.decimalPlaces);var l=(e+="").split(".");if(s=l[0],a=l.length>1?n.options.decimal+l[1]:"",n.options.useGrouping){i="";for(var o=3,c=0,d=0,u=s.length;d<u;++d)n.options.useIndianSeparators&&4===d&&(o=2,c=1),0!==d&&c%o==0&&(i=n.options.separator+i),c++,i=s[u-d-1]+i;s=i}return n.options.numerals&&n.options.numerals.length&&(s=s.replace(/[0-9]/g,(function(t){return n.options.numerals[+t]})),a=a.replace(/[0-9]/g,(function(t){return n.options.numerals[+t]}))),r+n.options.prefix+s+a+n.options.suffix},this.easeOutExpo=function(t,e,s,a){return s*(1-Math.pow(2,-10*t/a))*1024/1023+e},this.options=a(a({},this.defaults),s),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return n.handleScroll(n)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,s=t.el.getBoundingClientRect(),a=s.top+window.pageYOffset,n=s.top+s.height+window.pageYOffset;n<e&&n>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>n||a>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var s=this.countDown?1:-1;this.endVal=t+s*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var s=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,s):"INPUT"===this.el.tagName?this.el.value=s:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=s:this.el.innerHTML=s}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},10723:function(t,e,s){!function(e,a){t.exports=a(s(18115))}(0,(function(t){"use strict";var e,s=(e="Function",function(t){return Object.prototype.toString.call(t)==="[object ".concat(e,"]")}),a={__countup__:t.CountUp,name:"VueCountUp",props:{delay:{type:Number,required:!1,default:0},endVal:{type:Number,required:!0},options:{type:Object,required:!1}},data:function(){return{instance:null}},watch:{endVal:{handler:function(t){this.instance&&s(this.instance.update)&&this.instance.update(t)},deep:!1}},methods:{create:function(){var e=this;if(!e.instance){var s=e.$el,a=new t.CountUp(s,e.endVal,e.options);a.error||(e.instance=a,e.delay<0?e.$emit("ready",a,t.CountUp):setTimeout((function(){return a.start((function(){return e.$emit("ready",a,t.CountUp)}))}),e.delay))}},destroy:function(){this.instance=null},printValue:function(t){if(this.instance&&s(this.instance.printValue))return this.instance.printValue(t)},start:function(t){if(this.instance&&s(this.instance.start))return this.instance.start(t)},pauseResume:function(){if(this.instance&&s(this.instance.pauseResume))return this.instance.pauseResume()},reset:function(){if(this.instance&&s(this.instance.reset))return this.instance.reset()},update:function(t){if(this.instance&&s(this.instance.update))return this.instance.update(t)}},mounted:function(){this.create()},beforeDestroy:function(){this.destroy()}};return function(t,e){void 0===e&&(e={});var s=e.insertAt;if(t&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===s&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}(""),function(t,e,s,a,n,i,r,l,o,c){"boolean"!=typeof r&&(o=l,l=r,r=!1);var d,u="function"==typeof s?s.options:s;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,n&&(u.functional=!0)),a&&(u._scopeId=a),i?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,o(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=d):e&&(d=r?function(){e.call(this,c(this.$root.$options.shadowRoot))}:function(t){e.call(this,l(t))}),d)if(u.functional){var p=u.render;u.render=function(t,e){return d.call(e),p(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,d):[d]}return s}({render:function(){var t=this.$createElement;return(this._self._c||t)("span")},staticRenderFns:[]},void 0,a,"data-v-0abbdf5a",!1,void 0,void 0,void 0)}))},82813:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("el-card",{attrs:{shadow:"never",header:"在线人数"}},[e("div",{staticClass:"monitor-online-num-card"},[e("div",{staticClass:"monitor-online-num-text"},[t._v(t._s(t.currentTime))]),e("div",{staticClass:"monitor-online-num-title ele-text-heading"},[e("vue-count-up",{attrs:{"end-val":t.onlineNum}})],1),e("div",{staticClass:"monitor-online-num-text"},[t._v("在线总人数")]),e("ele-dot",{attrs:{text:t.updateTimeText}})],1)])},n=[],i=s(10723),r=s.n(i),l={name:"OnlineNum",components:{VueCountUp:r()},data(){return{updateTime:10,currentTime:"20:58:22",onlineNum:228,onlineNumTimer:null}},computed:{updateTimeText(){return this.updateTime+" 秒后更新"}},created(){this.startUpdateOnlineNum()},methods:{startUpdateOnlineNum(){this.currentTime=this.$util.toDateString(new Date,"HH:mm:ss"),this.onlineNumTimer=setInterval((()=>{this.currentTime=this.$util.toDateString(new Date,"HH:mm:ss"),1===this.updateTime?(this.updateTime=10,this.onlineNum=100+Math.round(900*Math.random())):this.updateTime--}),1e3)}},beforeDestroy(){this.onlineNumTimer&&clearInterval(this.onlineNumTimer)}},o=l,c=s(64008),d=(0,c.A)(o,a,n,!1,null,"8802ca32",null),u=d.exports},63381:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("el-row",{attrs:{gutter:15}},[e("el-col",{attrs:{md:6,sm:12}},[e("el-card",{staticClass:"monitor-count-card",attrs:{shadow:"never"}},[e("el-tag",{staticClass:"ele-tag-round",attrs:{size:"large"}},[e("i",{staticClass:"el-icon-s-custom"})]),e("div",{staticClass:"monitor-count-card-num ele-text-heading"},[t._v("21.2 k")]),e("div",{staticClass:"monitor-count-card-text ele-text-secondary"},[t._v(" 总访问人数 ")]),e("ele-avatar-list",{attrs:{data:t.visitUsers,size:22,max:4}})],1)],1),e("el-col",{attrs:{md:6,sm:12}},[e("el-card",{staticClass:"monitor-count-card",attrs:{shadow:"never"}},[e("el-tag",{staticClass:"ele-tag-round",attrs:{size:"large",type:"warning"}},[e("i",{staticClass:"el-icon-_sent"})]),e("div",{staticClass:"monitor-count-card-num ele-text-heading"},[t._v("1.6 k")]),e("div",{staticClass:"monitor-count-card-text ele-text-secondary"},[t._v(" 点击量 (近30天) ")]),e("div",{staticClass:"monitor-count-card-trend ele-text-success"},[e("i",{staticClass:"el-icon-arrow-up"}),e("span",[t._v("110.5%")])]),e("el-tooltip",{attrs:{content:"指标说明",placement:"top"}},[e("i",{staticClass:"el-icon-_question ele-text-placeholder monitor-count-card-tips"})])],1)],1),e("el-col",{attrs:{md:6,sm:12}},[e("el-card",{staticClass:"monitor-count-card",attrs:{shadow:"never"}},[e("el-tag",{staticClass:"ele-tag-round",attrs:{size:"large",type:"danger"}},[e("i",{staticClass:"el-icon-s-flag"})]),e("div",{staticClass:"monitor-count-card-num ele-text-heading"},[t._v("826.0")]),e("div",{staticClass:"monitor-count-card-text ele-text-secondary"},[t._v(" 到达量 (近30天) ")]),e("div",{staticClass:"monitor-count-card-trend ele-text-danger"},[e("i",{staticClass:"el-icon-arrow-down"}),e("span",[t._v("15.5%")])])],1)],1),e("el-col",{attrs:{md:6,sm:12}},[e("el-card",{staticClass:"monitor-count-card",attrs:{shadow:"never"}},[e("el-tag",{staticClass:"ele-tag-round",attrs:{size:"large",type:"success"}},[e("i",{staticClass:"el-icon-_flash-solid"})]),e("div",{staticClass:"monitor-count-card-num ele-text-heading"},[t._v("28.8 %")]),e("div",{staticClass:"monitor-count-card-text"},[t._v("转化率 (近30天)")]),e("div",{staticClass:"monitor-count-card-trend ele-text-success"},[e("i",{staticClass:"el-icon-arrow-up"}),e("span",[t._v("65.8%")])]),e("el-tooltip",{attrs:{content:"指标说明",placement:"top"}},[e("i",{staticClass:"el-icon-_question ele-text-placeholder monitor-count-card-tips"})])],1)],1)],1)},n=[],i={name:"StatisticsCard",data(){return{visitUsers:[{name:"SunSmile",avatar:"https://cdn.eleadmin.com/20200609/c184eef391ae48dba87e3057e70238fb.jpg"},{name:"你的名字很好听",avatar:"https://cdn.eleadmin.com/20200609/b6a811873e704db49db994053a5019b2.jpg"},{name:"全村人的希望",avatar:"https://cdn.eleadmin.com/20200609/948344a2a77c47a7a7b332fe12ff749a.jpg"},{name:"Jasmine",avatar:"https://cdn.eleadmin.com/20200609/f6bc05af944a4f738b54128717952107.jpg"},{name:"酷酷的大叔",avatar:"https://cdn.eleadmin.com/20200609/2d98970a51b34b6b859339c96b240dcd.jpg"},{name:"管理员",avatar:"https://cdn.eleadmin.com/20200610/avatar.jpg"}]}}},r=i,l=s(64008),o=(0,l.A)(r,a,n,!1,null,"0a8f9dc1",null),c=o.exports},73108:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("el-row",{attrs:{gutter:15}},[e("el-col",{attrs:{lg:8}},[e("el-card",{attrs:{shadow:"never",header:"用户评价"}},[e("div",{staticClass:"ele-cell ele-cell-align-bottom"},[e("div",{staticClass:"ele-text-heading",staticStyle:{"font-size":"48px"}},[t._v("4.5")]),e("div",{staticClass:"ele-cell-content",staticStyle:{"padding-bottom":"8px"}},[e("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#F7BA2A","score-template":"很棒"},model:{value:t.userRate,callback:function(e){t.userRate=e},expression:"userRate"}})],1)]),e("div",{staticClass:"ele-cell",staticStyle:{margin:"15px 0"}},[e("div",{staticClass:"ele-text-placeholder",staticStyle:{"font-size":"29px"}},[t._v("-0%")]),e("div",{staticClass:"ele-cell-content ele-text-small ele-text-secondary"},[t._v(" 当前没有评价波动 ")])]),e("div",{staticClass:"ele-cell"},[e("div",{staticClass:"ele-cell-content"},[e("el-progress",{attrs:{percentage:60,"show-text":!1,status:"success"}})],1),e("div",{staticClass:"ele-text-secondary",staticStyle:{width:"80px","white-space":"nowrap"}},[e("span",[e("s"),e("i",{staticClass:"el-icon-star-on"})]),e("span",[t._v(" 5 : 368人")])])]),e("div",{staticClass:"ele-cell"},[e("div",{staticClass:"ele-cell-content"},[e("el-progress",{attrs:{percentage:40,"show-text":!1}})],1),e("div",{staticClass:"ele-text-secondary",staticStyle:{width:"80px","white-space":"nowrap"}},[e("span",[e("s"),e("i",{staticClass:"el-icon-star-on"})]),e("span",[t._v(" 4 : 256人")])])]),e("div",{staticClass:"ele-cell"},[e("div",{staticClass:"ele-cell-content"},[e("el-progress",{attrs:{percentage:20,"show-text":!1,status:"warning"}})],1),e("div",{staticClass:"ele-text-secondary",staticStyle:{width:"80px","white-space":"nowrap"}},[e("span",[e("s"),e("i",{staticClass:"el-icon-star-on"})]),e("span",[t._v(" 3 : 49人")])])]),e("div",{staticClass:"ele-cell"},[e("div",{staticClass:"ele-cell-content"},[e("el-progress",{attrs:{percentage:10,"show-text":!1,status:"exception"}})],1),e("div",{staticClass:"ele-text-secondary",staticStyle:{width:"80px","white-space":"nowrap"}},[e("span",[e("s"),e("i",{staticClass:"el-icon-star-on"})]),e("span",[t._v(" 2 : 14人")])])]),e("div",{staticClass:"ele-cell"},[e("div",{staticClass:"ele-cell-content"},[e("el-progress",{attrs:{percentage:0,"show-text":!1}})],1),e("div",{staticClass:"ele-text-secondary",staticStyle:{width:"80px","white-space":"nowrap"}},[e("span",[e("s"),e("i",{staticClass:"el-icon-star-on"})]),e("span",[t._v(" 1 : 0人")])])])])],1),e("el-col",{attrs:{lg:8,md:12}},[e("el-card",{attrs:{shadow:"never",header:"用户满意度"}},[e("div",{staticClass:"ele-cell",staticStyle:{margin:"15px 0"}},[e("div",{staticClass:"ele-cell-content ele-text-center ele-text-heading",staticStyle:{"font-size":"24px"}},[t._v(" 856 ")]),e("div",{staticClass:"ele-cell-content ele-text-center"},[e("div",{staticClass:"monitor-face-smile"},[e("span")]),e("div",{staticClass:"ele-text-secondary",staticStyle:{"margin-top":"5px"}},[t._v(" 正面评论 ")])]),e("h2",{staticClass:"ele-cell-content ele-text-success ele-text-center"},[t._v(" 82% ")])]),e("el-divider"),e("div",{staticClass:"ele-cell",staticStyle:{margin:"15px 0 12px 0"}},[e("div",{staticClass:"ele-cell-content ele-text-center ele-text-heading",staticStyle:{"font-size":"24px"}},[t._v(" 60 ")]),e("div",{staticClass:"ele-cell-content ele-text-center"},[e("div",{staticClass:"monitor-face-cry"},[e("span")]),e("div",{staticClass:"ele-text-secondary",staticStyle:{"margin-top":"5px"}},[t._v(" 负面评论 ")])]),e("h2",{staticClass:"ele-cell-content ele-text-danger ele-text-center"},[t._v("9%")])])],1)],1),e("el-col",{attrs:{lg:8,md:12}},[e("el-card",{attrs:{shadow:"never",header:"用户活跃度"}},[e("div",{staticClass:"ele-cell",staticStyle:{padding:"35px 0","justify-content":"center"}},[e("div",{staticClass:"monitor-progress-group"},[e("el-progress",{attrs:{type:"circle",percentage:70,status:"success","show-text":!1,width:140}}),e("el-progress",{attrs:{type:"circle",percentage:60,"show-text":!1,width:115,"stroke-width":5}}),e("el-progress",{attrs:{type:"circle",percentage:35,status:"exception","show-text":!1,width:90,"stroke-width":4}})],1),e("div",{staticClass:"monitor-progress-legends",staticStyle:{"padding-left":"12px"}},[e("div",{staticClass:"ele-text-small"},[e("ele-dot",{attrs:{ripple:!1,text:"活跃率: 70%"}})],1),e("div",{staticClass:"ele-text-small"},[e("ele-dot",{attrs:{type:"success",ripple:!1,text:"留存率: 60%"}})],1),e("div",{staticClass:"ele-text-small"},[e("ele-dot",{attrs:{type:"danger",ripple:!1,text:"跳出率: 35%"}})],1)])])])],1)],1)},n=[],i={name:"UserRate",data(){return{userRate:4.5}}},r=i,l=s(64008),o=(0,l.A)(r,a,n,!1,null,"5d8b2f8e",null),c=o.exports},97123:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return m}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ele-body ele-body-card"},[e("statistics-card"),e("el-row",{attrs:{gutter:15}},[e("el-col",{attrs:{lg:18}},[e("map-card")],1),e("el-col",{attrs:{lg:6}},[e("el-row",{attrs:{gutter:15}},[e("el-col",{attrs:{lg:24,md:12,sm:24}},[e("online-num")],1),e("el-col",{attrs:{lg:24,md:12,sm:24}},[e("browser-card")],1)],1)],1)],1),e("user-rate")],1)},n=[],i=s(63381),r=s(19556),l=s(82813),o=s(63708),c=s(73108),d={name:"DashboardMonitor",components:{StatisticsCard:i["default"],MapCard:r["default"],OnlineNum:l["default"],BrowserCard:o["default"],UserRate:c["default"]}},u=d,p=s(64008),h=(0,p.A)(u,a,n,!1,null,null,null),m=h.exports}}]);