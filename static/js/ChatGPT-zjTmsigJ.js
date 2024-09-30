/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-30 14:06:07 
 */
var We=Object.defineProperty;var ce=t=>{throw TypeError(t)};var je=(t,e,s)=>e in t?We(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var v=(t,e,s)=>je(t,typeof e!="symbol"?e+"":e,s),fe=(t,e,s)=>e.has(t)||ce("Cannot "+s);var c=(t,e,s)=>(fe(t,e,"read from private field"),s?s.call(t):e.get(t)),Z=(t,e,s)=>e.has(t)?ce("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s);var a=(t,e,s)=>(fe(t,e,"access private method"),s);import{d as Oe,ad as Q,N as I,o as A,b as R,T as P,$ as D,e as _,u as $,k as pe,a1 as Ke,P as Je,aa as Xe,n as Ze,a4 as me,a3 as ee,_ as ye,bc as be,a5 as et,ab as tt}from"./vsv-element-plus-CxGOTlXz.js";import{u as st,_ as rt}from"./index-DMdRIM5p.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const we=t=>Array.isArray(t),Se=t=>we(t)?t:[t];let it=function(t){let e=function(d){return Se(d).forEach(g=>{var E;return p.set(Symbol((E=g.char)==null?void 0:E.innerText),n({...g}))}),this},s=()=>u().filter(d=>d.typeable),i=function(d,g){let E=[...p.keys()];p.set(E[d],n(g))},n=d=>(d.shouldPauseCursor=function(){return!!(this.typeable||this.cursorable||this.deletable)},d),o=function(){p.forEach(d=>delete d.done)},h=function(){p=new Map,e(t)},l=()=>p,u=()=>Array.from(p.values()),f=d=>p.delete(d),S=(d=!1)=>d?u():u().filter(g=>!g.done),m=(d,g=!1)=>g?p.delete(d):p.get(d).done=!0,p=new Map;return e(t),{add:e,set:i,wipe:h,done:m,reset:o,destroy:f,getItems:S,getQueue:l,getTypeable:s}};const Ee="data-typeit-id",N="ti-cursor",nt="END",at={started:!1,completed:!1,frozen:!1,destroyed:!1},M={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(t=>({opacity:t})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},ot=`[${Ee}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`,z=t=>document.createElement(t),le=t=>document.createTextNode(t),Ie=(t,e="")=>{let s=z("style");s.id=e,s.appendChild(le(t)),document.head.appendChild(s)},ve=t=>(we(t)||(t=[t/2,t/2]),t),ge=(t,e)=>Math.abs(Math.random()*(t+e-(t-e))+(t-e));let Te=t=>t/2;function lt(t){let{speed:e,deleteSpeed:s,lifeLike:i}=t;return s=s!==null?s:e/3,i?[ge(e,Te(e)),ge(s,Te(s))]:[e,s]}const xe=t=>Array.from(t);let ue=t=>([...t.childNodes].forEach(e=>{if(e.nodeValue){[...e.nodeValue].forEach(s=>{e.parentNode.insertBefore(le(s),e)}),e.remove();return}ue(e)}),t);const Ne=t=>{let e=document.implementation.createHTMLDocument();return e.body.innerHTML=t,ue(e.body)};function De(t,e=!1,s=!1){let i=t.querySelector(`.${N}`),n=document.createTreeWalker(t,NodeFilter.SHOW_ALL,{acceptNode:l=>{var u,f;if(i&&s){if((u=l.classList)!=null&&u.contains(N))return NodeFilter.FILTER_ACCEPT;if(i.contains(l))return NodeFilter.FILTER_REJECT}return(f=l.classList)!=null&&f.contains(N)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),o,h=[];for(;o=n.nextNode();)o.originalParent||(o.originalParent=o.parentNode),h.push(o);return e?h.reverse():h}function ut(t){return De(Ne(t))}function ht(t,e=!0){return e?ut(t):xe(t).map(le)}const dt=({index:t,newIndex:e,queueItems:s,cleanUp:i})=>{for(let n=t+1;n<e+1;n++)i(s[n][0])},ke=t=>Number.isInteger(t),_e=({queueItems:t,selector:e,cursorPosition:s,to:i})=>{if(ke(e))return e*-1;let n=new RegExp(nt,"i").test(i),o=e?[...t].reverse().findIndex(({char:l})=>{let u=l.parentElement,f=u.matches(e);return n&&f?!0:f&&u.firstChild.isSameNode(l)}):-1;o<0&&(o=n?0:t.length-1);let h=n?0:1;return o-s+h},ct=t=>(t.forEach(clearTimeout),[]),U=(t,e)=>new Array(e).fill(t);let K=t=>new Promise(e=>{requestAnimationFrame(async()=>{e(await t())})}),Me=t=>t==null?void 0:t.getAnimations().find(e=>e.id===t.dataset.tiAnimationId),Le=({cursor:t,frames:e,options:s})=>{let i=t.animate(e,s);return i.pause(),i.id=t.dataset.tiAnimationId,K(()=>{K(()=>{i.play()})}),i},ft=({cursor:t,options:e,cursorOptions:s})=>{if(!t||!s)return;let i=Me(t),n;i&&(e.delay=i.effect.getComputedTiming().delay,n=i.currentTime,i.cancel());let o=Le({cursor:t,frames:s.animation.frames,options:e});return n&&(o.currentTime=n),o},Pe=t=>{var e;return(e=t.func)==null?void 0:e.call(null)},pt=async({index:t,queueItems:e,wait:s,cursor:i,cursorOptions:n})=>{let o=e[t][1],h=[],l=t,u=o,f=()=>u&&!u.delay,S=o.shouldPauseCursor()&&n.autoPause;for(;f();)h.push(u),f()&&l++,u=e[l]?e[l][1]:null;if(h.length)return await K(async()=>{for(let d of h)await Pe(d)}),l-1;let m=Me(i),p;return m&&(p={...m.effect.getComputedTiming(),delay:S?n.autoPauseDelay:0}),await s(async()=>{m&&S&&m.cancel(),await K(()=>{Pe(o)})},o.delay),await ft({cursor:i,options:p,cursorOptions:n}),t};const mt=(t,e)=>{new IntersectionObserver((i,n)=>{i.forEach(o=>{o.isIntersecting&&(e(),n.unobserve(t))})},{threshold:1}).observe(t)},yt=()=>Math.random().toString().substring(2,9),J=t=>"value"in t;let bt=t=>J(t)?xe(t.value):De(t,!0).filter(e=>!(e.childNodes.length>0)),k=t=>typeof t=="function"?t():t,he=(t,e=document,s=!1)=>e[`querySelector${s?"All":""}`](t),vt=t=>/body/i.test(t==null?void 0:t.tagName),gt=(t,e)=>{if(J(t)){t.value=`${t.value}${e.textContent}`;return}e.innerHTML="";let s=vt(e.originalParent)?t:e.originalParent||t;s.insertBefore(e,he("."+N,s)||null)};const Tt=t=>/<(.+)>(.*?)<\/(.+)>/.test(t.outerHTML),q=(t,e)=>Object.assign({},t,e);let _t=t=>{var e,s;if(typeof t=="object"){let i={},{frames:n,options:o}=M.cursor.animation;return i.animation=t.animation||{},i.animation.frames=((e=t.animation)==null?void 0:e.frames)||n,i.animation.options=q(o,((s=t.animation)==null?void 0:s.options)||{}),i.autoPause=t.autoPause??M.cursor.autoPause,i.autoPauseDelay=t.autoPauseDelay||M.cursor.autoPauseDelay,i}return t===!0?M.cursor:t};const Pt=(t,e)=>{if(!t)return;let s=t.parentNode;(s.childNodes.length>1||s.isSameNode(e)?t:s).remove()},Ct=(t,e,s)=>{let i=e[s-1],n=he(`.${N}`,t);t=(i==null?void 0:i.parentNode)||t,t.insertBefore(n,i||null)};function wt(t){return typeof t=="string"?he(t):t}let St={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},Et=(t,e)=>{let i=`${`[${Ee}='${t}']`} .${N}`,n=getComputedStyle(e),o=Object.entries(St).reduce((h,[l,u])=>`${h} ${l}: var(--ti-cursor-${l}, ${u||n[l]});`,"");Ie(`${i} { display: inline-block; width: 0; ${o} }`,t)};function It(t){return t.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/)}let xt=(t,e,s)=>Math.min(Math.max(e+t,0),s.length),Nt=(t,e,s)=>new Promise(i=>{let n=async()=>{await t(),i()};s.push(setTimeout(n,e||0))});var r,Ae,H,se,Re,re,ie,ne,W,C,$e,G,V,qe,X,He,Ge,ae,j,F,O,x,Y,B,oe,w;class Dt{constructor(e,s={}){Z(this,r);v(this,"element");v(this,"timeouts");v(this,"cursorPosition");v(this,"predictedCursorPosition");v(this,"statuses",{started:!1,completed:!1,frozen:!1,destroyed:!1});v(this,"opts");v(this,"id");v(this,"queue");v(this,"cursor");v(this,"unfreeze",()=>{});v(this,"is",function(e){return this.statuses[e]});Z(this,X,e=>{this.opts.cursor=_t(e.cursor??M.cursor),this.opts.strings=a(this,r,He).call(this,Se(this.opts.strings)),this.opts=q(this.opts,{html:!c(this,r,B)&&this.opts.html,nextStringDelay:ve(this.opts.nextStringDelay),loopDelay:ve(this.opts.loopDelay)})});this.opts=q(M,s),this.element=wt(e),this.timeouts=[],this.cursorPosition=0,this.unfreeze=()=>{},this.predictedCursorPosition=null,this.statuses=q({},at),this.id=yt(),this.queue=it([{delay:this.opts.startDelay}]),c(this,X).call(this,s),this.cursor=a(this,r,Ge).call(this),this.element.dataset.typeitId=this.id,Ie(ot),this.opts.strings.length&&a(this,r,qe).call(this)}go(){return this.statuses.started?this:(a(this,r,ne).call(this),this.opts.waitUntilVisible?(mt(this.element,a(this,r,H).bind(this)),this):(a(this,r,H).call(this),this))}destroy(e=!0){this.timeouts=ct(this.timeouts),k(e)&&this.cursor&&a(this,r,O).call(this,this.cursor),this.statuses.destroyed=!0}reset(e){!this.is("destroyed")&&this.destroy(),e?(this.queue.wipe(),e(this)):this.queue.reset(),this.cursorPosition=0;for(let s in this.statuses)this.statuses[s]=!1;return this.element[a(this,r,W).call(this)?"value":"innerHTML"]="",this}type(e,s={}){e=k(e);let{instant:i}=s,n=a(this,r,G).call(this,s),h=ht(e,this.opts.html).map(u=>({func:()=>a(this,r,j).call(this,u),char:u,delay:i||Tt(u)?0:a(this,r,x).call(this),typeable:u.nodeType===Node.TEXT_NODE})),l=[n[0],{func:async()=>await this.opts.beforeString(e,this)},...h,{func:async()=>await this.opts.afterString(e,this)},n[1]];return a(this,r,C).call(this,l,s)}break(e={}){return a(this,r,C).call(this,{func:()=>a(this,r,j).call(this,z("BR")),typeable:!0},e)}move(e,s={}){e=k(e);let i=a(this,r,G).call(this,s),{instant:n,to:o}=s,h=_e({queueItems:this.queue.getTypeable(),selector:e===null?"":e,to:o,cursorPosition:c(this,r,Y)}),l=h<0?-1:1;return this.predictedCursorPosition=c(this,r,Y)+h,a(this,r,C).call(this,[i[0],...U({func:()=>a(this,r,se).call(this,l),delay:n?0:a(this,r,x).call(this),cursorable:!0},Math.abs(h)),i[1]],s)}exec(e,s={}){let i=a(this,r,G).call(this,s);return a(this,r,C).call(this,[i[0],{func:()=>e(this)},i[1]],s)}options(e,s={}){return e=k(e),a(this,r,V).call(this,e),a(this,r,C).call(this,{},s)}pause(e,s={}){return a(this,r,C).call(this,{delay:k(e)},s)}delete(e=null,s={}){e=k(e);let i=a(this,r,G).call(this,s),n=e,{instant:o,to:h}=s,l=this.queue.getTypeable(),u=n===null?l.length:ke(n)?n:_e({queueItems:l,selector:n,cursorPosition:c(this,r,Y),to:h});return a(this,r,C).call(this,[i[0],...U({func:a(this,r,F).bind(this),delay:o?0:a(this,r,x).call(this,1),deletable:!0},u),i[1]],s)}freeze(){this.statuses.frozen=!0}flush(e=()=>{}){return a(this,r,ne).call(this),a(this,r,H).call(this,!1).then(e),this}getQueue(){return this.queue}getOptions(){return this.opts}updateOptions(e){return a(this,r,V).call(this,e)}getElement(){return this.element}empty(e={}){return a(this,r,C).call(this,{func:a(this,r,Ae).bind(this)},e)}}r=new WeakSet,Ae=async function(){if(a(this,r,W).call(this)){this.element.value="";return}c(this,r,w).forEach(a(this,r,O).bind(this))},H=async function(e=!0){this.statuses.started=!0;let s=i=>{this.queue.done(i,!e)};try{let i=[...this.queue.getQueue()];for(let o=0;o<i.length;o++){let[h,l]=i[o];if(!l.done){if(!l.deletable||l.deletable&&c(this,r,w).length){let u=await a(this,r,re).call(this,o,i);dt({index:o,newIndex:u,queueItems:i,cleanUp:s}),o=u}s(h)}}if(!e)return this;if(this.statuses.completed=!0,await this.opts.afterComplete(this),!this.opts.loop)throw"";let n=this.opts.loopDelay;a(this,r,ie).call(this,async()=>{await a(this,r,Re).call(this,n[0]),a(this,r,H).call(this)},n[1])}catch{}return this},se=async function(e){this.cursorPosition=xt(e,this.cursorPosition,c(this,r,w)),Ct(this.element,c(this,r,w),this.cursorPosition)},Re=async function(e){let s=c(this,r,Y);s&&await a(this,r,se).call(this,{value:s});let i=c(this,r,w).map(n=>[Symbol(),{func:a(this,r,F).bind(this),delay:a(this,r,x).call(this,1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let n=0;n<i.length;n++)await a(this,r,re).call(this,n,i);this.queue.reset(),this.queue.set(0,{delay:e})},re=function(e,s){return pt({index:e,queueItems:s,wait:a(this,r,ie).bind(this),cursor:this.cursor,cursorOptions:this.opts.cursor})},ie=async function(e,s,i=!1){this.statuses.frozen&&await new Promise(n=>{this.unfreeze=()=>{this.statuses.frozen=!1,n()}}),i||await this.opts.beforeStep(this),await Nt(e,s,this.timeouts),i||await this.opts.afterStep(this)},ne=async function(){if(!a(this,r,W).call(this)&&this.cursor&&this.element.appendChild(this.cursor),c(this,r,oe)){Et(this.id,this.element),this.cursor.dataset.tiAnimationId=this.id;let{animation:e}=this.opts.cursor,{frames:s,options:i}=e;Le({frames:s,cursor:this.cursor,options:{duration:this.opts.cursorSpeed,...i}})}},W=function(){return J(this.element)},C=function(e,s){return this.queue.add(e),a(this,r,$e).call(this,s),this},$e=function(e={}){let s=e.delay;s&&this.queue.add({delay:s})},G=function(e={}){return[{func:()=>a(this,r,V).call(this,e)},{func:()=>a(this,r,V).call(this,this.opts)}]},V=async function(e){this.opts=q(this.opts,e)},qe=function(){let e=this.opts.strings.filter(s=>!!s);e.forEach((s,i)=>{if(this.type(s),i+1===e.length)return;let n=this.opts.breakLines?[{func:()=>a(this,r,j).call(this,z("BR")),typeable:!0}]:U({func:a(this,r,F).bind(this),delay:a(this,r,x).call(this,1)},this.queue.getTypeable().length);a(this,r,ae).call(this,n)})},X=new WeakMap,He=function(e){let s=this.element.innerHTML;return s?(this.element.innerHTML="",this.opts.startDelete?(this.element.innerHTML=s,ue(this.element),a(this,r,ae).call(this,U({func:a(this,r,F).bind(this),delay:a(this,r,x).call(this,1),deletable:!0},c(this,r,w).length)),e):It(s).concat(e)):e},Ge=function(){if(c(this,r,B))return null;let e=z("span");return e.className=N,c(this,r,oe)?(e.innerHTML=Ne(this.opts.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)},ae=function(e){let s=this.opts.nextStringDelay;this.queue.add([{delay:s[0]},...e,{delay:s[1]}])},j=function(e){gt(this.element,e)},F=function(){c(this,r,w).length&&(c(this,r,B)?this.element.value=this.element.value.slice(0,-1):a(this,r,O).call(this,c(this,r,w)[this.cursorPosition]))},O=function(e){Pt(e,this.element)},x=function(e=0){return lt(this.opts)[e]},Y=function(){return this.predictedCursorPosition??this.cursorPosition},B=function(){return J(this.element)},oe=function(){return!!this.opts.cursor&&!c(this,r,B)},w=function(){return bt(this.element)};const te=""+new URL("../png/chatGPT-CTN0W6ZR.png",import.meta.url).href,kt={class:"chat-GPT-container no-background-container"},Mt={class:"vab-chat-main"},Lt={class:"vab-chat-user"},At=["src"],Rt={class:"vab-chat-text"},$t={key:0},qt=["id"],Ht={class:"vab-chat-footer"},Gt={class:"vab-chat-textarea"},Vt={class:"vab-chat-send"},Ce="Shop Vite 演示地址仅提供 ChatGPT 基础能力展示，如需获取 ChatGPT 完整功能请访问 Open AI 官网自行购买对接，您现在可以跟我对话了",Ft=Oe({name:"ChatGPT",__name:"ChatGPT",setup(t){const e=st(),{avatar:s,username:i}=storeToRefs(e),n=ref(""),o=ref(),h=ref(),l=ref(),u=ref(!0),f=ref("GPT3.5"),S=ref("https://fc-mp-851edf02-46eb-43e6-828d-64c7e483ea41.next.bspapp.com/chatGPT?version=gpt-3.5-turbo&text="),m=ref(!1);let p;const d=T=>{T=="GPT3.5"&&(S.value="https://fc-mp-851edf02-46eb-43e6-828d-64c7e483ea41.next.bspapp.com/chatGPT?version=gpt-3.5-turbo&text="),T=="GPT4.0"&&(S.value="https://fc-mp-851edf02-46eb-43e6-828d-64c7e483ea41.next.bspapp.com/chatGPT?version=gpt-4&text="),$baseMessage(`切换${T}成功！`,"success","hey")},g=ref([{id:"uuid_9999",type:"he",result:Ce,avatar:te,username:"ChatGPT",time:Q().format("YYYY-MM-DD HH:mm:ss")}]),E=()=>{if(m.value=!0,!n.value){$baseMessage("提交内容不能为空","error","hey"),m.value=!1;return}if(!u.value){$baseMessage(`${f.value}还未回答完您的上个问题，请稍后再进行提问`,"error","hey"),m.value=!1;return}if(u.value){u.value=!1;const T=g.value,y=tt("uuid_");T.push({type:"mine",result:n.value,avatar:s,username:i,time:Q().format("YYYY-MM-DD HH:mm:ss")},{type:"tips",result:`${f.value} AI 内容生成中，请稍后。。。`,avatar:te,username:"ChatGPT",time:Q().format("YYYY-MM-DD HH:mm:ss")}),axios.get(`${S.value}${n.value}`).then(async({data:{result:L}})=>{n.value="",await T.pop(),await T.push({id:y,type:"he",result:L.displayText,avatar:te,username:"ChatGPT",time:Q().format("YYYY-MM-DD HH:mm:ss")}),await de(y,L.displayText),u.value=!0,m.value=!1}).catch(()=>{$baseMessage(`${f.value} 余额不足！`,"error","hey"),u.value=!0,m.value=!1})}},de=(T,y)=>{setTimeout(()=>{new Dt(`#${T}`,{strings:[y],cursorChar:"<span class='cursorChar'>|<span>",speed:25,lifeLike:!0,cursor:!1,breakLines:!1,loop:!1}).go()},0)};return onMounted(()=>{o.value.focus(),de("uuid_9999",Ce)}),onActivated(()=>{p=setInterval(()=>{l.value&&h.value&&l.value.setScrollTop(h.value.clientHeight-380)},500)}),onDeactivated(()=>{p&&clearInterval(p)}),(T,y)=>{const L=I("el-radio-button"),Ve=I("el-radio-group"),Fe=I("el-input"),Ye=I("el-button"),Be=I("vab-card"),Qe=I("el-col"),Ue=I("el-row");return A(),R("div",kt,[P(Ue,{gutter:20},{default:D(()=>[P(Qe,{lg:14,md:24,sm:24,xl:14,xs:24},{default:D(()=>[P(Be,null,{default:D(()=>[_("div",Mt,[P(Ve,{modelValue:$(f),"onUpdate:modelValue":y[0]||(y[0]=b=>pe(f)?f.value=b:null),onChange:d},{default:D(()=>[P(L,{label:"GPT3.5",value:"GPT3.5"}),P(L,{label:"GPT4.0",value:"GPT4.0"})]),_:1},8,["modelValue"]),P($(Ke),{ref_key:"scrollbarRef",ref:l},{default:D(()=>[_("ul",{ref_key:"innerRef",ref:h},[(A(!0),R(Je,null,Xe($(g),(b,ze)=>(A(),R("li",{key:ze,class:Ze(b.type=="mine"?"vab-chat-mine":"")},[_("div",Lt,[_("img",{alt:"头像",src:b.avatar},null,8,At),_("cite",null,[me(ee(b.username)+" ",1),_("i",null,ee(b.time),1)])]),_("div",Rt,[b.type=="mine"||b.type=="tips"?(A(),R("span",$t,ee(b.result),1)):ye("",!0),b.type=="he"?(A(),R("span",{key:1,id:b.id},null,8,qt)):ye("",!0)])],2))),128))],512)]),_:1},512)]),_("div",Ht,[_("div",Gt,[P(Fe,{ref_key:"textareaRef",ref:o,modelValue:$(n),"onUpdate:modelValue":y[1]||(y[1]=b=>pe(n)?n.value=b:null),clearable:"",resize:"none","show-word-limit":"",type:"textarea",onKeydown:[be(E,["enter"]),y[2]||(y[2]=be(et(()=>{},["prevent"]),["enter"]))]},null,8,["modelValue"])]),_("div",Vt,[P(Ye,{loading:$(m),type:"primary",onClick:E},{default:D(()=>y[3]||(y[3]=[me("发送")])),_:1},8,["loading"])])])]),_:1})]),_:1})]),_:1})])}}}),Wt=rt(Ft,[["__scopeId","data-v-b7894779"]]);export{Wt as default};
