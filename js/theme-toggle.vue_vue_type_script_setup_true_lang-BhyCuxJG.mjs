var S=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var b=(s,t)=>{var e={};for(var o in s)E.call(s,o)&&t.indexOf(o)<0&&(e[o]=s[o]);if(s!=null&&S)for(var o of S(s))t.indexOf(o)<0&&F.call(s,o)&&(e[o]=s[o]);return e};var $=(s,t,e)=>new Promise((o,r)=>{var n=d=>{try{u(e.next(d))}catch(f){r(f)}},l=d=>{try{u(e.throw(d))}catch(f){r(f)}},u=d=>d.done?o(d.value):Promise.resolve(d.value).then(n,l);u((e=e.apply(s,t)).next())});import{a3 as h,ae as i,af as m,ag as c,ad as _,ah as j,ai as I,a9 as a,J as v,n as g,ab as k,b4 as M,b5 as L,b6 as N,al as y,aq as O,b0 as D,am as G,ak as w,ap as R,aw as x,F as U,ay as H,U as W,a1 as V,a0 as q,ao as p,q as X}from"../jse/index-index-DjctGAIy.mjs";import{h as B,aN as P,c6 as J,c7 as K,c8 as Y,c9 as Z,I as C,ca as Q,cb as ee,aR as ae,cc as te,cd as oe,bZ as se,b6 as ne,bX as le,at as re,e as de,a$ as ie,o as ce,$ as z,bR as ue}from"./bootstrap-BPXRuHYb.mjs";const pe=B("LanguagesIcon",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);const me=B("MoonStarIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",key:"4ay0iu"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}]]);const he=B("SunMoonIcon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);const fe=B("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),ge=h({__name:"DropdownMenu",props:{defaultOpen:{type:Boolean},open:{type:Boolean},dir:{},modal:{type:Boolean,default:!1}},emits:["update:open"],setup(s,{emit:t}){const r=P(s,t);return(n,l)=>(i(),m(a(J),j(I(a(r))),{default:c(()=>[_(n.$slots,"default")]),_:3},16))}}),ye=h({__name:"DropdownMenuContent",props:{class:{},forceMount:{type:Boolean},loop:{type:Boolean},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(s,{emit:t}){const e=s,o=t,r=v(()=>{const d=e,{class:l}=d;return b(d,["class"])}),n=P(r,o);return(l,u)=>(i(),m(a(Y),null,{default:c(()=>[g(a(K),k(a(n),{class:a(M)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border-border z-[1000] min-w-32 overflow-hidden rounded-md border p-1 shadow-md",e.class)}),{default:c(()=>[_(l.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),_e=h({__name:"DropdownMenuGroup",props:{asChild:{type:Boolean},as:{}},setup(s){const t=s;return(e,o)=>(i(),m(a(Z),j(I(t)),{default:c(()=>[_(e.$slots,"default")]),_:3},16))}}),ve=h({__name:"DropdownMenuItem",props:{class:{},inset:{type:Boolean},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},setup(s){const t=s,e=v(()=>{const l=t,{class:r}=l;return b(l,["class"])}),o=C(e);return(r,n)=>(i(),m(a(Q),k(a(o),{class:a(M)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r.inset&&"pl-8",t.class)}),{default:c(()=>[_(r.$slots,"default")]),_:3},16,["class"]))}}),ke=h({__name:"DropdownMenuTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(s){const e=C(s);return(o,r)=>(i(),m(a(ee),k({class:"outline-none"},a(e)),{default:c(()=>[_(o.$slots,"default")]),_:3},16))}}),be=h({name:"DropdownRadioMenu",__name:"dropdown-radio-menu",props:L({menus:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const t=N(s,"modelValue");function e(o){t.value=o}return(o,r)=>(i(),m(a(ge),null,{default:c(()=>[g(a(ke),{"as-child":"",class:"flex items-center gap-1"},{default:c(()=>[_(o.$slots,"default")]),_:3}),g(a(ye),{align:"start"},{default:c(()=>[g(a(_e),null,{default:c(()=>[(i(!0),y(U,null,O(o.menus,n=>(i(),m(a(ve),{key:n.key,class:D([n.value===t.value?"bg-accent text-accent-foreground":"","data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground text-foreground/80 mb-1 cursor-pointer"]),onClick:l=>e(n.value)},{default:c(()=>[n.icon?(i(),m(G(n.icon),{key:0,class:"mr-2 size-4"})):w("",!0),n.icon?w("",!0):(i(),y("span",{key:1,class:D([n.value===t.value?"bg-foreground":"","mr-2 size-1.5 rounded-full"])},null,2)),R(" "+x(n.label),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:3}))}}),xe=ae("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{defaultVariants:{size:"default",variant:"default"},variants:{size:{default:"h-9 px-3",lg:"h-10 px-3",sm:"h-8 px-2"},variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"}}}),we=h({__name:"ToggleGroup",props:{class:{},size:{},variant:{},rovingFocus:{type:Boolean},disabled:{type:Boolean},orientation:{},dir:{},loop:{type:Boolean},asChild:{type:Boolean},as:{},type:{},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(s,{emit:t}){const e=s,o=t;H("toggleGroup",{size:e.size,variant:e.variant});const r=v(()=>{const d=e,{class:l}=d;return b(d,["class"])}),n=P(r,o);return(l,u)=>(i(),m(a(te),k(a(n),{class:a(M)("flex items-center justify-center gap-1",e.class)}),{default:c(()=>[_(l.$slots,"default")]),_:3},16,["class"]))}}),Me=h({__name:"ToggleGroupItem",props:{class:{},size:{},variant:{},value:{},defaultValue:{type:Boolean},pressed:{type:Boolean},disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(s){const t=s,e=W("toggleGroup"),o=v(()=>{const f=t,{class:n,size:l,variant:u}=f;return b(f,["class","size","variant"])}),r=C(o);return(n,l)=>{var u,d;return i(),m(a(oe),k(a(r),{class:a(M)(a(xe)({variant:((u=a(e))==null?void 0:u.variant)||n.variant,size:((d=a(e))==null?void 0:d.size)||n.size}),t.class)}),{default:c(()=>[_(n.$slots,"default")]),_:3},16,["class"])}}}),Be={class:"text-md flex-center"},$e=["href"],ze=["href"],je=h({name:"Copyright",__name:"copyright",props:{companyName:{default:"Vben Admin"},companySiteLink:{default:""},date:{default:"2024"},icp:{default:""},icpLink:{default:""}},setup(s){return(t,e)=>(i(),y("div",Be,[t.icp?(i(),y("a",{key:0,href:t.icpLink||"javascript:void(0)",class:"hover:text-primary-hover mx-1",target:"_blank"},x(t.icp),9,$e)):w("",!0),R(" Copyright © "+x(t.date)+" ",1),t.companyName?(i(),y("a",{key:1,href:t.companySiteLink||"javascript:void(0)",class:"hover:text-primary-hover mx-1",target:"_blank"},x(t.companyName),9,ze)):w("",!0)]))}}),Ie=h({name:"LanguageToggle",__name:"language-toggle",setup(s){function t(e){return $(this,null,function*(){const o=e;V({app:{locale:o}}),yield se(o)})}return(e,o)=>(i(),y("div",null,[g(a(be),{menus:a(le),"model-value":a(q).app.locale,"onUpdate:modelValue":t},{default:c(()=>[g(a(ne),null,{default:c(()=>[g(a(pe),{class:"text-foreground size-4"})]),_:1})]),_:1},8,["menus","model-value"])]))}}),Ve=h({name:"ThemeToggleButton",__name:"theme-button",props:L({type:{default:"normal"}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const t=s,e=N(s,"modelValue"),o=v(()=>e.value?"light":"dark"),r=v(()=>t.type==="normal"?{variant:"heavy"}:{class:"rounded-full",size:"icon",style:{padding:"7px"},variant:"icon"});function n(l){if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches)||!l){e.value=!e.value;return}const d=l.clientX,f=l.clientY,A=Math.hypot(Math.max(d,innerWidth-d),Math.max(f,innerHeight-f));document.startViewTransition(()=>$(this,null,function*(){e.value=!e.value,yield X()})).ready.then(()=>{const T=[`circle(0px at ${d}px ${f}px)`,`circle(${A}px at ${d}px ${f}px)`];document.documentElement.animate({clipPath:e.value?[...T].reverse():T},{duration:450,easing:"ease-in",pseudoElement:e.value?"::view-transition-old(root)":"::view-transition-new(root)"})})}return(l,u)=>(i(),m(a(de),k({"aria-label":o.value,class:[[`is-${o.value}`],"theme-toggle cursor-pointer border-none bg-none"],"aria-live":"polite"},r.value,{onClick:re(n,["stop"])}),{default:c(()=>u[0]||(u[0]=[p("svg",{"aria-hidden":"true",height:"24",viewBox:"0 0 24 24",width:"24"},[p("mask",{id:"theme-toggle-moon",class:"theme-toggle__moon",fill:"hsl(var(--foreground)/80%)",stroke:"none"},[p("rect",{fill:"white",height:"100%",width:"100%",x:"0",y:"0"}),p("circle",{cx:"40",cy:"8",fill:"black",r:"11"})]),p("circle",{id:"sun",class:"theme-toggle__sun",cx:"12",cy:"12",mask:"url(#theme-toggle-moon)",r:"11"}),p("g",{class:"theme-toggle__sun-beams"},[p("line",{x1:"12",x2:"12",y1:"1",y2:"3"}),p("line",{x1:"12",x2:"12",y1:"21",y2:"23"}),p("line",{x1:"4.22",x2:"5.64",y1:"4.22",y2:"5.64"}),p("line",{x1:"18.36",x2:"19.78",y1:"18.36",y2:"19.78"}),p("line",{x1:"1",x2:"3",y1:"12",y2:"12"}),p("line",{x1:"21",x2:"23",y1:"12",y2:"12"}),p("line",{x1:"4.22",x2:"5.64",y1:"19.78",y2:"18.36"}),p("line",{x1:"18.36",x2:"19.78",y1:"5.64",y2:"4.22"})])],-1)])),_:1},16,["aria-label","class"]))}}),Pe=ie(Ve,[["__scopeId","data-v-8e18cb5a"]]),Le=h({name:"ThemeToggle",__name:"theme-toggle",props:{shouldOnHover:{type:Boolean,default:!1}},setup(s){function t(r){V({theme:{mode:r?"dark":"light"}})}const{isDark:e}=ce(),o=[{icon:fe,name:"light",title:z("preferences.theme.light")},{icon:me,name:"dark",title:z("preferences.theme.dark")},{icon:he,name:"auto",title:z("preferences.followSystem")}];return(r,n)=>(i(),y("div",null,[g(a(ue),{disabled:!r.shouldOnHover,side:"bottom"},{trigger:c(()=>[g(Pe,{"model-value":a(e),type:"icon","onUpdate:modelValue":t},null,8,["model-value"])]),default:c(()=>[g(a(we),{"model-value":a(q).theme.mode,class:"gap-2",type:"single",variant:"outline","onUpdate:modelValue":n[0]||(n[0]=l=>a(V)({theme:{mode:l}}))},{default:c(()=>[(i(),y(U,null,O(o,l=>g(a(Me),{key:l.name,value:l.name},{default:c(()=>[(i(),m(G(l.icon),{class:"size-5"}))]),_:2},1032,["value"])),64))]),_:1},8,["model-value"])]),_:1},8,["disabled"])]))}});export{me as M,fe as S,ge as _,ke as a,ye as b,ve as c,_e as d,Me as e,we as f,he as g,Le as h,Ie as i,je as j,be as k};
