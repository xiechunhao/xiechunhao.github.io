System.register(["../js/index-legacy.f8cb7a75.js","./use-expose-legacy-7ae1465d.js","./index-legacy-9c7c096d.js","./index-legacy-46adbd63.js","./index-legacy-8dff853c.js"],(function(e,o){"use strict";var n,t,s,i,l,a,c,r,d,u,y,p,m,g,v,f,b,C,k,h,x,w,S,O;return{setters:[e=>{n=e.y,t=e.d,s=e.Z,i=e.o,l=e.b,a=e.f,c=e.U,r=e.a1,d=e.C,u=e.A,y=e.bS,p=e.P,m=e.I,g=e.bT,v=e.r,f=e.X,b=e.bo,C=e.bL,k=e.D,h=e.bs},e=>{x=e.u},e=>{w=e.I},e=>{S=e.P},e=>{O=e.L}],execute:function(){e({a:function(e={}){if(!b)return{};const o=function(){if(!A.length||N){const e=function(){const{instance:e,unmount:o}=I({setup(){const e=k(""),{open:o,state:n,close:t,toggle:i}=L(),l=()=>{},r=()=>a(P,c(n,{onClosed:l,"onUpdate:show":i}),null);return s(e,(e=>{n.message=e})),h().render=r,{open:o,close:t,message:e}}});return e}();A.push(e)}return A[A.length-1]}(),n=C(t=e)?t:{message:t};var t;return o.open(f({},U,H.get(n.type||U.type),n)),o},m:I,u:L});let o=0;const[j,B]=n("toast"),z=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"],T={icon:String,show:Boolean,type:d("text"),overlay:Boolean,message:u,iconSize:u,duration:y(2e3),position:d("middle"),teleport:[String,Object],wordBreak:String,className:p,iconPrefix:String,transition:d("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:p,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:u};var P=e("s",t({name:j,props:T,emits:["update:show"],setup(e,{emit:n,slots:t}){let d,u=!1;const y=()=>{const n=e.show&&e.forbidClick;u!==n&&(u=n,u?(o||document.body.classList.add("van-toast--unclickable"),o++):o&&(o--,o||document.body.classList.remove("van-toast--unclickable")))},p=e=>n("update:show",e),g=()=>{e.closeOnClick&&p(!1)},v=()=>clearTimeout(d),f=()=>{const{icon:o,type:n,iconSize:t,iconPrefix:s,loadingType:i}=e;return o||"success"===n||"fail"===n?a(w,{name:o||n,size:t,class:B("icon"),classPrefix:s},null):"loading"===n?a(O,{class:B("loading"),size:t,type:i},null):void 0},b=()=>{const{type:o,message:n}=e;return t.message?a("div",{class:B("text")},[t.message()]):m(n)&&""!==n?"html"===o?a("div",{key:0,class:B("text"),innerHTML:String(n)},null):a("div",{class:B("text")},[n]):void 0};return s((()=>[e.show,e.forbidClick]),y),s((()=>[e.show,e.type,e.message,e.duration]),(()=>{v(),e.show&&e.duration>0&&(d=setTimeout((()=>{p(!1)}),e.duration))})),i(y),l(y),()=>a(S,c({class:[B([e.position,"normal"===e.wordBreak?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:g,onClosed:v,"onUpdate:show":p},r(e,z)),{default:()=>[f(),b()]})}}));function L(){const e=v({show:!1}),o=o=>{e.show=o},n=n=>{f(e,n,{transitionAppear:!0}),o(!0)},t=()=>o(!1);return x({open:n,close:t,toggle:o}),{open:n,close:t,state:e,toggle:o}}function I(e){const o=g(e),n=document.createElement("div");return document.body.appendChild(n),{instance:o.mount(n),unmount(){o.unmount(),document.body.removeChild(n)}}}let A=[],N=!1,U=f({},{icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1});const H=new Map}}}));
