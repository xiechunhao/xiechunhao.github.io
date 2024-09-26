/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{c as Ct,d as gt,b as kt,M as z,V as ce,u as I,K as xt,F as bt,o as ke,_ as Mt,D as Pe,U as Oe}from"./vsv-element-plus-CbS2IxKo.js";import{r as yt}from"./vue.runtime.esm-bundler-lC7zizrY.js";var xe={exports:{}};(function(Ee,Q){(function(R,e){e(Q,yt)})(Ct,function(R,e){let H=null;function de(){return H!==null}function me(t){H&&K(),H=t}function Y(t){t===H&&(H=null)}function K(){H&&(H.closeMenu(),H=null)}const h={defaultDirection:"br",defaultMinWidth:100,defaultMaxWidth:600,defaultZindex:100,defaultZoom:1,defaultAdjustPadding:{x:0,y:10}};function D(t,n){let r=t.offsetTop;return t.offsetParent!=null&&t.offsetParent!=n&&(r-=t.offsetParent.scrollTop,r+=D(t.offsetParent,n)),r}function W(t,n){let r=t.offsetLeft;return t.offsetParent!=null&&t.offsetParent!=n&&(r-=t.offsetParent.scrollLeft,r+=W(t.offsetParent,n)),r}function Ne(t,n,r,a){return{x:W(t,a)+n,y:D(t,a)+r}}const fe="mx-menu-default-container",je="mx-menu-container-";let Re=0;function be(t){const{getContainer:n,zIndex:r}=t;if(n){const d=typeof n=="function"?n():n;if(d){let m=d.getAttribute("id");return m||(m=je+Re++,d.setAttribute("id",m)),{eleId:m,container:d,isNew:!1}}}let a=document.getElementById(fe);return a||(a=document.createElement("div"),a.setAttribute("id",fe),a.setAttribute("class","mx-menu-ghost-host mx-fullscreen"),document.body.appendChild(a)),a.style.zIndex=(r==null?void 0:r.toString())||h.defaultZindex.toString(),{eleId:fe,container:a,isNew:!0}}function Ve(t){return typeof t=="number"?`${t}px`:t}const _=e.defineComponent({props:{vnode:{type:null},data:{type:null,default:null}},setup(t){const{vnode:n,data:r}=e.toRefs(t);return()=>typeof n.value=="function"?n.value(r.value):n.value}}),te=(t,n)=>{const r=t.__vccOpts||t;for(const[a,d]of n)r[a]=d;return r},He={},Fe={class:"mx-checked-mark","aria-hidden":"true",viewBox:"0 0 1024 1024"},Ae=[e.createElementVNode("path",{d:"M129.3,428.6L52,512l345,372.5l575-620.8l-69.5-75L400.4,718.2L129.3,428.6z"},null,-1)];function Le(t,n){return e.openBlock(),e.createElementBlock("svg",Fe,Ae)}const Te=te(He,[["render",Le]]),$e={},ze={class:"mx-right-arrow","aria-hidden":"true",viewBox:"0 0 1024 1024"},De=[e.createElementVNode("path",{d:"M307.018 49.445c11.517 0 23.032 4.394 31.819 13.18L756.404 480.18c8.439 8.438 13.181 19.885 13.181 31.82s-4.741 23.38-13.181 31.82L338.838 961.376c-17.574 17.573-46.065 17.573-63.64-0.001-17.573-17.573-17.573-46.065 0.001-63.64L660.944 512 275.198 126.265c-17.574-17.573-17.574-46.066-0.001-63.64C283.985 53.839 295.501 49.445 307.018 49.445z"},null,-1)];function _e(t,n){return e.openBlock(),e.createElementBlock("svg",ze,De)}const Me=te($e,[["render",_e]]),Ke={class:"mx-item-row"},Ze=["xlink:href"],Ue={key:1,class:"label"},Ge={class:"mx-item-row"},Ye={class:"mx-shortcut"},ue=e.defineComponent({__name:"ContextMenuItem",props:{disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},customRender:{type:Function,default:null},customClass:{type:String,default:""},clickHandler:{type:Function,default:null},label:{type:[String,Object,Function],default:""},icon:{type:[String,Object,Function],default:""},iconFontClass:{type:String,default:"iconfont"},checked:{type:Boolean,default:!1},shortcut:{type:String,default:""},svgIcon:{type:String,default:""},svgProps:{type:Object,default:null},preserveIconWidth:{type:Boolean,default:!0},showRightArrow:{type:Boolean,default:!1},hasChildren:{type:Boolean,default:!1},clickClose:{type:Boolean,default:!0},clickableWhenHasChildren:{type:Boolean,default:!1},rawMenuItem:{type:Object,default:void 0}},emits:["click","subMenuOpen","subMenuClose"],setup(t,{expose:n,emit:r}){const a=t,d=r,{clickHandler:m,clickClose:M,clickableWhenHasChildren:i,disabled:v,hidden:C,label:o,icon:b,iconFontClass:P,showRightArrow:S,shortcut:F,hasChildren:V}=e.toRefs(a),k=e.ref(!1),l=e.ref(!1),s=e.ref(),p=e.inject("globalOptions"),g=e.inject("globalHasSlot"),O=e.inject("globalRenderSlot"),c=e.inject("globalCloseMenu"),x=e.inject("menuContext"),w={getSubMenuInstance:()=>{},showSubMenu:()=>k.value?(x.markActiveMenuItem(w,!0),!0):V.value?($(),!0):!1,hideSubMenu:()=>{x.closeOtherSubMenu()},isDisabledOrHidden:()=>v.value||C.value,getElement:()=>s.value,focus:()=>l.value=!0,blur:()=>l.value=!1,click:A};e.provide("menuItemInstance",w),e.onMounted(()=>{x.isMenuItemDataCollectedFlag()?e.nextTick(()=>{let f=0;const E=x.getElement();if(E){let Z=0;for(let U=0;U<E.children.length;U++){const q=E.children[U];if(q.getAttribute("data-type")==="ContextMenuItem"){if(q===s.value){f=Z;break}Z++}}}x.addChildMenuItem(w,f)}):x.addChildMenuItem(w)}),e.onBeforeUnmount(()=>{x.removeChildMenuItem(w)});function A(f){if(!v.value){if(f){const E=f.target;if(E.classList.contains("mx-context-no-clickable")||p.value.ignoreClickClassName&&E.classList.contains(p.value.ignoreClickClassName))return;if(p.value.clickCloseClassName&&E.classList.contains(p.value.clickCloseClassName)){f.stopPropagation(),c(a.rawMenuItem);return}}V.value?i.value?(typeof m.value=="function"&&m.value(f),d("click",f)):k.value||$():(typeof m.value=="function"&&m.value(f),d("click",f),M.value&&c(a.rawMenuItem))}}function $(f){l.value=!1,x.checkCloseOtherSubMenuTimeOut()||x.closeOtherSubMenu(),v.value||(x.markActiveMenuItem(w),V.value&&(f||x.markThisOpenedByKeyBoard(),x.addOpenedSubMenu(X),k.value=!0,e.nextTick(()=>d("subMenuOpen",w))))}function X(){l.value=!1,k.value=!1,d("subMenuClose",w)}function N(){return{disabled:v.value,label:o.value,icon:b.value,iconFontClass:P.value,showRightArrow:S.value,clickClose:M.value,clickableWhenHasChildren:i.value,shortcut:F.value,theme:p.value.theme,isOpen:k,hasChildren:V,onClick:A,onMouseEnter:$,closeMenu:c}}return n(w),(f,E)=>e.unref(C)?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",{key:0,class:"mx-context-menu-item-wrapper",ref_key:"menuItemRef",ref:s,"data-type":"ContextMenuItem"},[e.unref(g)("itemRender")?(e.openBlock(),e.createBlock(e.unref(_),{key:0,vnode:()=>e.unref(O)("itemRender",N())},null,8,["vnode"])):t.customRender?(e.openBlock(),e.createBlock(e.unref(_),{key:1,vnode:t.customRender,data:N()},null,8,["vnode","data"])):(e.openBlock(),e.createElementBlock("div",{key:2,class:e.normalizeClass(["mx-context-menu-item",e.unref(v)?"disabled":"",l.value?"keyboard-focus":"",t.customClass?" "+t.customClass:"",k.value?"open":""]),onClick:A,onMouseenter:$},[e.renderSlot(f.$slots,"default",{},()=>[e.createElementVNode("div",Ke,[e.createElementVNode("div",{class:e.normalizeClass(["mx-icon-placeholder",t.preserveIconWidth?"preserve-width":""])},[e.renderSlot(f.$slots,"icon",{},()=>[e.unref(g)("itemIconRender")?(e.openBlock(),e.createBlock(e.unref(_),{key:0,vnode:()=>e.unref(O)("itemIconRender",N())},null,8,["vnode"])):typeof t.svgIcon=="string"&&t.svgIcon?(e.openBlock(),e.createElementBlock("svg",e.mergeProps({key:1,class:"icon svg"},t.svgProps),[e.createElementVNode("use",{"xlink:href":t.svgIcon},null,8,Ze)],16)):typeof e.unref(b)!="string"?(e.openBlock(),e.createBlock(e.unref(_),{key:2,vnode:e.unref(b),data:e.unref(b)},null,8,["vnode","data"])):typeof e.unref(b)=="string"&&e.unref(b)!==""?(e.openBlock(),e.createElementBlock("i",{key:3,class:e.normalizeClass(e.unref(b)+" icon "+e.unref(P)+" "+e.unref(p).iconFontClass)},null,2)):e.createCommentVNode("",!0)]),t.checked?e.renderSlot(f.$slots,"check",{key:0},()=>[e.unref(g)("itemCheckRender")?(e.openBlock(),e.createBlock(e.unref(_),{key:0,vnode:()=>e.unref(O)("itemCheckRender",N())},null,8,["vnode"])):e.createCommentVNode("",!0),e.createVNode(Te)]):e.createCommentVNode("",!0)],2),e.renderSlot(f.$slots,"label",{},()=>[e.unref(g)("itemLabelRender")?(e.openBlock(),e.createBlock(e.unref(_),{key:0,vnode:()=>e.unref(O)("itemLabelRender",N())},null,8,["vnode"])):typeof e.unref(o)=="string"?(e.openBlock(),e.createElementBlock("span",Ue,e.toDisplayString(e.unref(o)),1)):(e.openBlock(),e.createBlock(e.unref(_),{key:2,vnode:e.unref(o),data:e.unref(o)},null,8,["vnode","data"]))])]),e.createElementVNode("div",Ge,[e.unref(F)?e.renderSlot(f.$slots,"shortcut",{key:0},()=>[e.unref(g)("itemShortcutRender")?(e.openBlock(),e.createBlock(e.unref(_),{key:0,vnode:()=>e.unref(O)("itemShortcutRender",N())},null,8,["vnode"])):e.createCommentVNode("",!0),e.createElementVNode("span",Ye,e.toDisplayString(e.unref(F)),1)]):e.createCommentVNode("",!0),e.unref(S)?e.renderSlot(f.$slots,"rightArrow",{key:1},()=>[e.unref(g)("itemRightArrowRender")?(e.openBlock(),e.createBlock(e.unref(_),{key:0,vnode:()=>e.unref(O)("itemRightArrowRender",N())},null,8,["vnode"])):e.createCommentVNode("",!0),e.createVNode(Me)]):e.createCommentVNode("",!0)])])],34)),e.unref(p).menuTransitionProps?(e.openBlock(),e.createBlock(e.Transition,e.normalizeProps(e.mergeProps({key:3},e.unref(p).menuTransitionProps)),{default:e.withCtx(()=>[k.value?e.renderSlot(f.$slots,"submenu",{key:0}):e.createCommentVNode("",!0)]),_:3},16)):k.value?e.renderSlot(f.$slots,"submenu",{key:4}):e.createCommentVNode("",!0)],512))}}),Xe=e.defineComponent({name:"ContextMenuSperator",components:{VNodeRender:_},setup(){const t=e.inject("globalHasSlot"),n=e.inject("globalRenderSlot");return{globalHasSlot:t,globalRenderSlot:n}}}),qe={key:1,class:"mx-context-menu-item-sperator mx-context-no-clickable"};function Je(t,n,r,a,d,m){const M=e.resolveComponent("VNodeRender");return t.globalHasSlot("separatorRender")?(e.openBlock(),e.createBlock(M,{key:0,vnode:()=>t.globalRenderSlot("separatorRender",{})},null,8,["vnode"])):(e.openBlock(),e.createElementBlock("div",qe))}const re=te(Xe,[["render",Je]]),Qe=e.defineComponent({name:"ContextSubMenu",components:{ContextMenuItem:ue,ContextMenuSeparator:re,ContextMenuIconRight:Me},props:{items:{type:Object,default:null},maxWidth:{type:[String,Number],default:0},minWidth:{type:[String,Number],default:0},adjustPosition:{type:Boolean,default:!0},direction:{type:String,default:"br"}},setup(t){const n=e.inject("menuContext"),r=e.inject("globalOptions"),a=e.inject("globalHasSlot"),d=e.inject("globalRenderSlot"),{zIndex:m,getParentWidth:M,getParentHeight:i,getZoom:v}=n,{adjustPosition:C}=e.toRefs(t),o=e.ref(),b=e.ref(),P=e.ref(),S=e.ref(),F=[],V=e.inject("globalSetCurrentSubMenu"),k=[];let l=null,s=0;function p(){l&&l.blur()}function g(u,B){if(u){for(let L=B!==void 0?B:0;L<k.length;L++)if(!k[L].isDisabledOrHidden()){O(L);break}}else for(let L=B!==void 0?B:k.length-1;L>=0;L--)if(!k[L].isDisabledOrHidden()){O(L);break}}function O(u){if(l&&p(),u!==void 0&&(l=k[Math.max(0,Math.min(u,k.length-1))]),!!l&&(l.focus(),J.value)){const B=l.getElement();B&&(f.value=Math.min(Math.max(-E.value,-B.offsetTop-B.offsetHeight+G.value),0))}}function c(){V(x)}const x={isTopLevel:()=>n.getParentContext()===null,closeSelfAndActiveParent:()=>{const u=$.getParentContext();if(u){u.closeOtherSubMenu();const B=u.getSubMenuInstanceContext();if(B)return B.focusCurrentItem(),!0}return!1},closeCurrentSubMenu:()=>{var u;return(u=$.getParentContext())==null?void 0:u.closeOtherSubMenu()},moveCurrentItemFirst:()=>g(!0),moveCurrentItemLast:()=>g(!1),moveCurrentItemDown:()=>g(!0,l?k.indexOf(l)+1:0),moveCurrentItemUp:()=>g(!1,l?k.indexOf(l)-1:0),focusCurrentItem:()=>O(),openCurrentItemSubMenu:()=>l?l==null?void 0:l.showSubMenu():!1,triggerCurrentItemClick:u=>l==null?void 0:l.click(u)};let w=!1,A=!1;const $={zIndex:m+1,container:n.container,adjustPadding:r.value.adjustPadding||h.defaultAdjustPadding,getParentWidth:()=>{var u;return((u=b.value)==null?void 0:u.offsetWidth)||0},getParentHeight:()=>{var u;return((u=b.value)==null?void 0:u.offsetHeight)||0},getParentX:()=>y.value.x,getParentY:()=>y.value.y,getParentAbsX:()=>b.value?W(b.value,n.container):0,getParentAbsY:()=>b.value?D(b.value,n.container):0,getPositon:()=>[0,0],getZoom:()=>r.value.zoom||h.defaultZoom,addOpenedSubMenu(u){F.push(u)},closeOtherSubMenu(){F.forEach(u=>u()),F.splice(0,F.length),V(x)},checkCloseOtherSubMenuTimeOut(){return s?(clearTimeout(s),s=0,!0):!1},closeOtherSubMenuWithTimeOut(){s=setTimeout(()=>{s=0,this.closeOtherSubMenu()},200)},addChildMenuItem:(u,B)=>{B===void 0?k.push(u):k.splice(B,0,u)},removeChildMenuItem:u=>{k.splice(k.indexOf(u),1),u.getSubMenuInstance=()=>{}},markActiveMenuItem:(u,B=!1)=>{p(),l=u,B&&O()},markThisOpenedByKeyBoard:()=>{w=!0},isOpenedByKeyBoardFlag:()=>w?(w=!1,!0):!1,isMenuItemDataCollectedFlag:()=>A,getElement:()=>b.value||null,getParentContext:()=>n,getSubMenuInstanceContext:()=>x};e.provide("menuContext",$);const X={getChildItem:u=>k[u],getMenuDimensions:()=>o.value?{width:o.value.offsetWidth,height:o.value.offsetHeight}:{width:0,height:0},getSubmenuRoot:()=>o.value,getMenu:()=>b.value,getScrollValue:()=>f.value,setScrollValue:u=>f.value=u,getScrollHeight:()=>E.value,getMaxHeight:()=>G.value,getPosition:()=>y.value,setPosition:(u,B)=>{y.value.x=u,y.value.y=B}},N=e.inject("menuItemInstance",void 0);N&&(N.getSubMenuInstance=()=>X);const f=e.ref(0),E=e.ref(0);function Z(u){u?f.value=Math.min(Math.max(f.value-50,-E.value),0):f.value=Math.min(f.value+50,0)}function U(u){u.preventDefault(),u.stopPropagation(),Z(u.deltaY>0)}function q(u){r.value.mouseScroll&&(u.preventDefault(),u.stopPropagation(),Z(u.deltaY>0))}const J=e.ref(!1),y=e.ref({x:0,y:0}),G=e.ref(0);return e.onMounted(()=>{const u=n.getPositon();y.value={x:(u[0]??r.value.xOffset??0)/v(),y:(u[1]??r.value.yOffset??0)/v()},V(x),e.nextTick(()=>{var B,L;const j=b.value;if(j&&P.value){const{container:ee}=n,pe=(M==null?void 0:M())??0,Ie=(i==null?void 0:i())??0,ae=typeof n.adjustPadding=="number"?n.adjustPadding:((B=n.adjustPadding)==null?void 0:B.x)??0,se=typeof n.adjustPadding=="number"?n.adjustPadding:((L=n.adjustPadding)==null?void 0:L.y)??0,ne=Ie>0?se:0,ft=document.documentElement.scrollHeight/v(),vt=document.documentElement.scrollWidth/v(),pt=Math.min(vt,ee.offsetWidth),he=Math.min(ft,ee.offsetHeight);let Ce=W(j,ee),ge=D(j,ee);t.direction.includes("l")?y.value.x-=j.offsetWidth+ae:t.direction.includes("r")?y.value.x+=pe+ae:(y.value.x+=pe/2,y.value.x-=(j.offsetWidth+ae)/2),t.direction.includes("t")?y.value.y-=(j.offsetHeight+se*2)/v():t.direction.includes("b")?y.value.y-=se/v():(y.value.y+=Ie/2/v(),y.value.y-=(j.offsetHeight+se)/2/v()),C.value&&e.nextTick(()=>{Ce=W(j,ee),ge=D(j,ee);const ht=Ce+j.offsetWidth-pt,We=ge+j.offsetHeight+ne*2-he;if(J.value=We>0,E.value=j.offsetHeight-he+ne*2,ht>0){const oe=pe+j.offsetWidth-ae,le=Ce;oe>le?y.value.x-=le:y.value.x-=oe}if(J.value){const oe=We,le=ge;oe>le?y.value.y-=le-ne:y.value.y-=oe-ne,G.value=he-ne*2}else G.value=0})}j==null||j.focus({preventScroll:!0}),n.isOpenedByKeyBoardFlag()&&g(!0),A=!0})}),e.onBeforeUnmount(()=>{N&&(N.getSubMenuInstance=()=>{})}),{submenuRoot:o,menu:b,scroll:P,options:r,zIndex:m,constOptions:h,scrollValue:f,upScrollButton:S,overflow:J,position:y,scrollHeight:E,maxHeight:G,...X,globalHasSlot:a,globalRenderSlot:d,onScroll:Z,onSubMenuBodyClick:c,onMouseWhell:q,onMouseWhellMx:U,solveNumberOrStringSize:Ve}}}),et={key:0,class:"mx-context-menu-updown placeholder"},tt={key:1,class:"mx-context-menu-updown placeholder"},nt={class:"mx-context-menu-scroll",ref:"scroll"};function ot(t,n,r,a,d,m){const M=e.resolveComponent("ContextMenuSeparator"),i=e.resolveComponent("ContextSubMenu",!0),v=e.resolveComponent("ContextMenuItem"),C=e.resolveComponent("ContextMenuIconRight");return e.openBlock(),e.createElementBlock("div",{ref:"submenuRoot",class:e.normalizeClass(["mx-context-menu",t.options.customClass?t.options.customClass:"",t.options.theme??""]),style:e.normalizeStyle({maxWidth:t.maxWidth?t.solveNumberOrStringSize(t.maxWidth):`${t.constOptions.defaultMaxWidth}px`,minWidth:t.minWidth?t.solveNumberOrStringSize(t.minWidth):`${t.constOptions.defaultMinWidth}px`,maxHeight:t.overflow&&t.maxHeight>0?`${t.maxHeight}px`:void 0,zIndex:t.zIndex,left:`${t.position.x}px`,top:`${t.position.y}px`}),"data-type":"ContextSubMenu",onClick:n[4]||(n[4]=(...o)=>t.onSubMenuBodyClick&&t.onSubMenuBodyClick(...o)),onWheel:n[5]||(n[5]=(...o)=>t.onMouseWhell&&t.onMouseWhell(...o))},[e.createElementVNode("div",{class:e.normalizeClass(["mx-context-menu-items"]),ref:"menu",style:e.normalizeStyle({top:`${t.scrollValue}px`})},[e.renderSlot(t.$slots,"default",{},()=>[t.overflow&&t.options.updownButtonSpaceholder?(e.openBlock(),e.createElementBlock("div",et)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.items,(o,b)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:b},[o.hidden!==!0&&o.divided==="up"?(e.openBlock(),e.createBlock(M,{key:0})):e.createCommentVNode("",!0),o.hidden!==!0&&o.divided==="self"?(e.openBlock(),e.createBlock(M,{key:1})):(e.openBlock(),e.createBlock(v,{key:2,clickHandler:o.onClick?P=>o.onClick(P):void 0,disabled:o.disabled,hidden:o.hidden,icon:o.icon,iconFontClass:o.iconFontClass,svgIcon:o.svgIcon,svgProps:o.svgProps,label:o.label,customRender:o.customRender,customClass:o.customClass,checked:o.checked,shortcut:o.shortcut,clickClose:o.clickClose,clickableWhenHasChildren:o.clickableWhenHasChildren,preserveIconWidth:o.preserveIconWidth!==void 0?o.preserveIconWidth:t.options.preserveIconWidth,showRightArrow:o.children&&o.children.length>0,hasChildren:o.children&&o.children.length>0,rawMenuItem:o,onSubMenuOpen:P=>{var S;return(S=o.onSubMenuOpen)==null?void 0:S.call(o,P)},onSubMenuClose:P=>{var S;return(S=o.onSubMenuClose)==null?void 0:S.call(o,P)}},e.createSlots({_:2},[o.children&&o.children.length>0?{name:"submenu",fn:e.withCtx(()=>[e.createVNode(i,{items:o.children,maxWidth:o.maxWidth,minWidth:o.minWidth,adjustPosition:o.adjustSubMenuPosition!==void 0?o.adjustSubMenuPosition:t.options.adjustPosition,direction:o.direction!==void 0?o.direction:t.options.direction},null,8,["items","maxWidth","minWidth","adjustPosition","direction"])]),key:"0"}:void 0]),1032,["clickHandler","disabled","hidden","icon","iconFontClass","svgIcon","svgProps","label","customRender","customClass","checked","shortcut","clickClose","clickableWhenHasChildren","preserveIconWidth","showRightArrow","hasChildren","rawMenuItem","onSubMenuOpen","onSubMenuClose"])),o.hidden!==!0&&(o.divided==="down"||o.divided===!0)?(e.openBlock(),e.createBlock(M,{key:3})):e.createCommentVNode("",!0)],64))),128)),t.overflow&&t.options.updownButtonSpaceholder?(e.openBlock(),e.createElementBlock("div",tt)):e.createCommentVNode("",!0)])],4),e.createElementVNode("div",nt,[e.withDirectives(e.createElementVNode("div",{ref:"upScrollButton",class:e.normalizeClass("mx-context-menu-updown mx-context-no-clickable up"+(t.overflow&&t.scrollValue<0?"":" disabled")),onClick:n[0]||(n[0]=o=>t.onScroll(!1)),onWheel:n[1]||(n[1]=(...o)=>t.onMouseWhellMx&&t.onMouseWhellMx(...o))},[e.createVNode(C)],34),[[e.vShow,t.overflow]]),e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass("mx-context-menu-updown mx-context-no-clickable down"+(t.overflow&&t.scrollValue>-t.scrollHeight?"":" disabled")),onClick:n[2]||(n[2]=o=>t.onScroll(!0)),onWheel:n[3]||(n[3]=(...o)=>t.onMouseWhellMx&&t.onMouseWhellMx(...o))},[e.createVNode(C)],34),[[e.vShow,t.overflow]])],512)],38)}const ie=te(Qe,[["render",ot]]),lt={class:"mx-menu-ghost-host"},ye=e.defineComponent({__name:"ContextSubMenuWrapper",props:{options:{type:Object,default:null},show:{type:Object,default:null},container:{type:Object,default:null},isFullScreenContainer:{type:Boolean,default:!0}},emits:["close","closeAnimFinished"],setup(t,{expose:n,emit:r}){const a=t,d=r,m=e.useSlots(),M=e.ref(),{options:i,show:v,container:C}=e.toRefs(a);e.onMounted(()=>{v.value&&P()}),e.onBeforeUnmount(()=>{k()}),e.watch(v,c=>{c?P():(Y(o),k())});const o={closeMenu:S,isClosed:F,getMenuRef:()=>M.value,getMenuDimensions:()=>{var c;return((c=M.value)==null?void 0:c.getMenuDimensions())??{width:0,height:0}}};let b=!1;function P(){V(),me(o)}function S(c){b=!0,d("close",c),i.value.menuTransitionProps||d("closeAnimFinished"),Y(o)}function F(){return b}function V(){setTimeout(()=>{document.addEventListener("click",g,!0),document.addEventListener("contextmenu",g,!0),document.addEventListener("scroll",p,!0),!a.isFullScreenContainer&&C.value&&C.value.addEventListener("scroll",p,!0),i.value.keyboardControl!==!1&&document.addEventListener("keydown",s)},50)}function k(){document.removeEventListener("contextmenu",g,!0),document.removeEventListener("click",g,!0),document.removeEventListener("scroll",p,!0),!a.isFullScreenContainer&&C.value&&C.value.removeEventListener("scroll",p,!0),i.value.keyboardControl!==!1&&document.removeEventListener("keydown",s)}const l=e.ref();e.provide("globalSetCurrentSubMenu",c=>l.value=c);function s(c){var x,w,A,$,X,N,f,E,Z,U,q,J,y;let G=!0;switch(c.key){case"Escape":{((x=l.value)==null?void 0:x.isTopLevel())===!1?(w=l.value)==null||w.closeCurrentSubMenu():S();break}case"ArrowDown":(A=l.value)==null||A.moveCurrentItemDown();break;case"ArrowUp":($=l.value)==null||$.moveCurrentItemUp();break;case"Home":(X=l.value)==null||X.moveCurrentItemFirst();break;case"End":(N=l.value)==null||N.moveCurrentItemLast();break;case"ArrowLeft":{(f=l.value)!=null&&f.closeSelfAndActiveParent()||(Z=(E=i.value).onKeyFocusMoveLeft)==null||Z.call(E);break}case"ArrowRight":(U=l.value)!=null&&U.openCurrentItemSubMenu()||(J=(q=i.value).onKeyFocusMoveRight)==null||J.call(q);break;case"Enter":(y=l.value)==null||y.triggerCurrentItemClick(c);break;default:G=!1;break}G&&l.value&&(c.stopPropagation(),c.preventDefault())}function p(){i.value.closeWhenScroll!==!1&&S()}function g(c){O(c.target,c)}function O(c,x){for(var w,A;c;){if(c.classList&&c.classList.contains("mx-menu-host"))return;c=c.parentNode}i.value.clickCloseOnOutside!==!1?(k(),S()):(A=(w=i.value).onClickOnOutside)==null||A.call(w,x)}return e.provide("globalOptions",i),e.provide("globalCloseMenu",S),e.provide("globalIsFullScreenContainer",a.isFullScreenContainer),e.provide("globalHasSlot",c=>m[c]!==void 0),e.provide("globalRenderSlot",(c,x)=>e.renderSlot(m,c,{...x},()=>[e.h("span","Render slot failed")],!1)),e.provide("menuContext",{zIndex:i.value.zIndex||h.defaultZindex,container:C.value,adjustPadding:{x:0,y:0},getParentAbsY:()=>i.value.x,getParentAbsX:()=>i.value.y,getZoom:()=>i.value.zoom||h.defaultZoom,getParentX:()=>0,getParentY:()=>0,getParentWidth:()=>0,getParentHeight:()=>0,getPositon:()=>[i.value.x,i.value.y],closeOtherSubMenuWithTimeOut:()=>{},checkCloseOtherSubMenuTimeOut:()=>!1,addOpenedSubMenu:()=>{},closeOtherSubMenu:()=>{},getParentContext:()=>null,getSubMenuInstanceContext:()=>null,getElement:()=>null,addChildMenuItem:()=>{},removeChildMenuItem:()=>{},markActiveMenuItem:()=>{},markThisOpenedByKeyBoard:()=>{},isOpenedByKeyBoardFlag:()=>!1,isMenuItemDataCollectedFlag:()=>!1}),n(o),(c,x)=>(e.openBlock(),e.createElementBlock("div",lt,[e.unref(i).menuTransitionProps?(e.openBlock(),e.createBlock(e.Transition,e.mergeProps({key:0,appear:""},e.unref(i).menuTransitionProps,{onAfterLeave:x[0]||(x[0]=w=>d("closeAnimFinished"))}),{default:e.withCtx(()=>[e.unref(v)?(e.openBlock(),e.createBlock(ie,{key:0,ref_key:"submenuInstance",ref:M,class:"mx-menu-host",items:e.unref(i).items,adjustPosition:e.unref(i).adjustPosition,maxWidth:e.unref(i).maxWidth||e.unref(h).defaultMaxWidth,minWidth:e.unref(i).minWidth||e.unref(h).defaultMinWidth,direction:e.unref(i).direction||e.unref(h).defaultDirection},{default:e.withCtx(()=>[e.renderSlot(c.$slots,"default")]),_:3},8,["items","adjustPosition","maxWidth","minWidth","direction"])):e.createCommentVNode("",!0)]),_:3},16)):e.unref(v)?(e.openBlock(),e.createBlock(ie,{key:1,ref_key:"submenuInstance",ref:M,class:"mx-menu-host",items:e.unref(i).items,adjustPosition:e.unref(i).adjustPosition,maxWidth:e.unref(i).maxWidth||e.unref(h).defaultMaxWidth,minWidth:e.unref(i).minWidth||e.unref(h).defaultMinWidth,direction:e.unref(i).direction||e.unref(h).defaultDirection},{default:e.withCtx(()=>[e.renderSlot(c.$slots,"default")]),_:3},8,["items","adjustPosition","maxWidth","minWidth","direction"])):e.createCommentVNode("",!0)]))}}),Se=e.defineComponent({name:"ContextMenu",emits:["update:show","close"],props:{options:{type:Object,default:null},show:{type:Boolean,default:!1}},setup(t,n){const{options:r,show:a}=e.toRefs(t),d=e.ref(null);return n.expose({closeMenu:()=>n.emit("update:show",!1),isClosed:()=>!a.value,getMenuRef:()=>{var m;return(m=d.value)==null?void 0:m.getMenuRef()},getMenuDimensions:()=>{var m;return((m=d.value)==null?void 0:m.getMenuDimensions())??{width:0,height:0}}}),()=>{const{isNew:m,container:M,eleId:i}=be(r.value);return[e.h(e.Teleport,{to:`#${i}`},[e.h(ye,{ref:d,options:r,show:a,container:M,isFullScreenContainer:!m,onClose:v=>{var C,o;n.emit("update:show",!1),n.emit("close"),(o=(C=r.value).onClose)==null||o.call(C,v)}},n.slots)])]}}}),Be=e.defineComponent({name:"ContextMenuGroup",props:{disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},clickHandler:{type:Function,default:null},label:{type:String,default:""},icon:{type:String,default:""},iconFontClass:{type:String,default:"iconfont"},checked:{type:Boolean,default:!1},shortcut:{type:String,default:""},svgIcon:{type:String,default:""},svgProps:{type:Object,default:null},preserveIconWidth:{type:Boolean,default:!0},showRightArrow:{type:Boolean,default:!1},clickClose:{type:Boolean,default:!0},adjustSubMenuPosition:{type:Boolean,default:void 0},maxWidth:{type:[String,Number],default:0},minWidth:{type:[String,Number],default:0}},setup(t,n){const r=e.inject("globalOptions"),{adjustSubMenuPosition:a,maxWidth:d,minWidth:m}=e.toRefs(t),M=typeof a.value<"u"?a.value:r.value.adjustPosition,i=e.ref(),v=e.ref();return n.expose({getSubMenuRef:()=>i.value,getMenuItemRef:()=>v.value}),()=>e.h(ue,{...t,ref:v,showRightArrow:!0,maxWidth:void 0,minWidth:void 0,adjustSubMenuPosition:void 0,hasChildren:typeof n.slots.default!==void 0},n.slots.default?{submenu:()=>e.h(ie,{ref:i,maxWidth:d.value,minWidth:m.value,adjustPosition:M},{default:n.slots.default})}:void 0)}});function ut(t,n,r,a){const d=e.ref(!0),m=e.h(ye,{options:t,show:d,container:n,isFullScreenContainer:!r,onCloseAnimFinished:()=>{e.render(null,n)},onClose:M=>{var i;(i=t.onClose)==null||i.call(t,M),d.value=!1}},a);return e.render(m,n),m.component}function we(t,n){const r=be(t);return ut(t,r.container,r.isNew,n).exposed}const ve={install(t){t.config.globalProperties.$contextmenu=we,t.component("ContextMenu",Se),t.component("ContextMenuItem",ue),t.component("ContextMenuGroup",Be),t.component("ContextMenuSperator",re),t.component("ContextMenuSeparator",re),t.component("ContextSubMenu",ie)},showContextMenu(t,n){return we(t,n)},isAnyContextMenuOpen(){return de()},closeContextMenu:K,transformMenuPosition:Ne},rt={},it={class:"mx-menu-bar-icon-menu",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},at=[e.createElementVNode("path",{d:"M133.310936 296.552327l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949 0-19.781623-15.997312-35.950949-35.950949-35.950949L133.310936 224.650428c-19.781623 0-35.950949 16.169326-35.950949 35.950949C97.359987 280.383 113.529313 296.552327 133.310936 296.552327z"},null,-1),e.createElementVNode("path",{d:"M890.51705 476.135058 133.310936 476.135058c-19.781623 0-35.950949 16.169326-35.950949 35.950949 0 19.781623 16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949C926.467999 492.304384 910.298673 476.135058 890.51705 476.135058z"},null,-1),e.createElementVNode("path",{d:"M890.51705 727.447673 133.310936 727.447673c-19.781623 0-35.950949 15.997312-35.950949 35.950949s16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-15.997312 35.950949-35.950949S910.298673 727.447673 890.51705 727.447673z"},null,-1)];function st(t,n){return e.openBlock(),e.createElementBlock("svg",it,at)}const ct=te(rt,[["render",st]]),dt=["onClick","onMouseenter"],mt=e.defineComponent({__name:"MenuBar",props:{options:{type:Object,default:null}},setup(t){const n=t,r=e.ref(),a=e.ref(!1),d=e.ref([]),m=e.ref(null);function M(){a.value=!0}function i(){a.value=!1}e.onMounted(()=>{d.value=n.options.items||[]}),e.watch(()=>n.options,()=>{d.value=n.options.items||[]});let v=null,C=-1;function o(){C<d.value.length-1?C++:C=0,S(C,d.value[C])}function b(){C>0?C--:C=d.value.length-1,S(C,d.value[C])}function P(l){const s=n.options.barPopDirection??"bl";let p=0,g=0;return s.startsWith("b")?g=D(l)+l.offsetHeight:s.startsWith("t")?g=D(l):g=D(l)+l.offsetHeight/2,s.endsWith("l")?p=W(l):s.startsWith("r")?p=W(l)+l.offsetWidth:p=W(l)+l.offsetWidth/2,{x:p,y:g}}function S(l,s){var p;if(C=l,!s.children)return;v&&(v.closeMenu(),v=null,a.value=!0),m.value=s;const g=(p=r.value)==null?void 0:p.children[l];if(g){const{x:O,y:c}=P(g);v=ve.showContextMenu({...n.options,items:s.children,x:O,y:c,onKeyFocusMoveLeft(){b()},onKeyFocusMoveRight(){o()},onClose(){m.value==s&&(a.value=!1,m.value=null)}})}}function F(){C=0;const l=r.value;if(l){const{x:s,y:p}=P(l);v=ve.showContextMenu({...n.options,x:s,y:p})}}function V(l,s){s?(a.value=!0,S(l,s),s.onClick&&(s.clickableWhenHasChildren===!0&&s.children&&s.children.length>0||!s.children||s.children.length===0)&&s.onClick()):F()}function k(l,s){a.value&&S(l,s)}return(l,s)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["mx-menu-bar",t.options.theme??"",t.options.mini?"mini":""]),onFocus:M,onBlur:i},[e.renderSlot(l.$slots,"prefix"),t.options.mini?(e.openBlock(),e.createElementBlock("div",{key:0,ref_key:"menuBarContent",ref:r,class:"mx-menu-bar-content"},[e.createElementVNode("div",{class:"mx-menu-bar-item",onClick:s[0]||(s[0]=p=>V(0,null))},[e.createVNode(ct)])],512)):(e.openBlock(),e.createElementBlock("div",{key:1,ref_key:"menuBarContent",ref:r,class:"mx-menu-bar-content"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(d.value,(p,g)=>(e.openBlock(),e.createElementBlock("div",{key:g,class:e.normalizeClass(["mx-menu-bar-item",p==m.value?"active":""]),onClick:O=>V(g,p),onMouseenter:O=>k(g,p)},e.toDisplayString(p.label),43,dt))),128))],512)),e.renderSlot(l.$slots,"suffix")],34))}});R.ContextMenu=Se,R.ContextMenuGroup=Be,R.ContextMenuItem=ue,R.ContextMenuSeparator=re,R.MenuBar=mt,R.default=ve,Object.defineProperties(R,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})})(xe,xe.exports);var T=xe.exports;const St={class:"context-menu-container"},It=gt({name:"ContextMenu",__name:"index",setup(Ee){const Q=ref(!1),R=ref(!0),e=ref("item动态改变label"),H=reactive({minWidth:200,x:500,y:200}),de=K=>{K.preventDefault(),H.x=K.x,H.y=K.y,Q.value=!0},me=()=>{e.value=e.value=="我的label改变了"?"item动态改变label":"我的label改变了"},Y=K=>{$baseMessage(`您点击了子菜单${K}`,"success","hey")};return(K,h)=>{const D=bt("el-button");return ke(),kt("div",St,[z(D,{type:"primary",onContextmenu:h[0]||(h[0]=W=>de(W))},{default:ce(()=>h[7]||(h[7]=[Mt("点击右键触发")])),_:1}),z(I(T.ContextMenu),{show:I(Q),"onUpdate:show":h[6]||(h[6]=W=>xt(Q)?Q.value=W:null),options:I(H)},{default:ce(()=>[z(I(T.ContextMenuItem),{"click-close":!1,label:"测试item动态显示和隐藏",onClick:h[1]||(h[1]=W=>R.value=!I(R))}),I(R)?(ke(),Pe(I(T.ContextMenuItem),{key:0,label:"单击上面的item显示/隐藏我"})):Oe("",!0),I(R)?(ke(),Pe(I(T.ContextMenuSeparator),{key:1})):Oe("",!0),z(I(T.ContextMenuItem),{"click-close":!1,label:I(e),onClick:me},null,8,["label"]),z(I(T.ContextMenuGroup),{label:"group菜单"},{default:ce(()=>[z(I(T.ContextMenuItem),{label:"item1",onClick:h[2]||(h[2]=W=>Y(1))}),z(I(T.ContextMenuItem),{label:"item2",onClick:h[3]||(h[3]=W=>Y(2))})]),_:1}),z(I(T.ContextMenuItem),{icon:"ri-24-hours-fill",label:"item带图标"}),z(I(T.ContextMenuGroup),{icon:"ri-archive-line",label:"group菜单带图标"},{default:ce(()=>[z(I(T.ContextMenuItem),{icon:"ri-4k-line",label:"item1",onClick:h[4]||(h[4]=W=>Y(1))}),z(I(T.ContextMenuItem),{icon:"ri-account-box-line",label:"item1",onClick:h[5]||(h[5]=W=>Y(2))})]),_:1})]),_:1},8,["show","options"])])}}});export{It as default};
