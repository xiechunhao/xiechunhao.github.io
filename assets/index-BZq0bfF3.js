import{f9 as ut,L as ie,a1 as Ce,r as q,ch as me,J as D,u as d,U as Ye,b_ as ft,dz as ht,a7 as Ee,V as ve,c1 as De,P as xe,W as oe,ds as vt,a3 as Le,bQ as ne,cg as ge,a4 as gt,R as se,co as yt,M as kt,ci as mt,N as Xe,e9 as Ct,o as le,m as Te,e as Ie,c as ue,w as ke,a5 as ce,aG as be,g as pt,a8 as Be,aP as bt,b as Ze,a6 as Je,a9 as Qe,cM as St,Z as Ae,cZ as Nt,cv as Et,t as et,aa as Tt,dM as wt,aj as ze,aV as Ot,a2 as Fe,b1 as Pe,b2 as $e,a$ as Kt,d as Mt,dN as xt}from"./index-C4BxmZrN.js";import{a as ae,i as Lt,v as He}from"./index-CobIQQS4.js";import{c as It,r as Rt,H as tt,V as _t,k as Vt,I as We,S as je,u as Dt,m as we,R as Se,a as Ge,b as Bt,d as qe,e as At,B as zt,F as Ft,g as Ne,A as Oe,f as Pt,C as Ue,E as $t,h as Ht,j as Wt}from"./virtual-list-CYzSvSUd.js";const jt={[tt]:"deltaX",[_t]:"deltaY"},Gt=({atEndEdge:e,atStartEdge:n,layout:c},t)=>{let r,o=0;const C=i=>i<0&&n.value||i>0&&e.value;return{hasReachedEdge:C,onWheel:i=>{It(r);const S=i[jt[c.value]];C(o)&&C(o+S)||(o+=S,ut()||i.preventDefault(),r=Rt(()=>{t(o),o=0}))}}},qt=({name:e,getOffset:n,getItemSize:c,getItemOffset:t,getEstimatedTotalSize:r,getStartIndexForOffset:o,getStopIndexForStartIndex:C,initCache:h,clearCache:i,validateProps:S})=>ie({name:e!=null?e:"ElVirtualList",props:Vt,emits:[We,je],setup(u,{emit:s,expose:y}){S(u);const L=xe(),w=Ce("vl"),b=q(h(u,L)),R=Dt(),O=q(),F=q(),g=q(),v=q({isScrolling:!1,scrollDir:"forward",scrollOffset:me(u.initScrollOffset)?u.initScrollOffset:0,updateRequested:!1,isScrollbarDragging:!1,scrollbarAlwaysOn:u.scrollbarAlwaysOn}),K=D(()=>{const{total:f,cache:k}=u,{isScrolling:p,scrollDir:V,scrollOffset:x}=d(v);if(f===0)return[0,0,0,0];const a=o(u,x,d(b)),m=C(u,a,x,d(b)),P=!p||V===zt?Math.max(1,k):1,G=!p||V===Ft?Math.max(1,k):1;return[Math.max(0,a-P),Math.max(0,Math.min(f-1,m+G)),a,m]}),E=D(()=>r(u,d(b))),M=D(()=>we(u.layout)),B=D(()=>[{position:"relative",[`overflow-${M.value?"x":"y"}`]:"scroll",WebkitOverflowScrolling:"touch",willChange:"transform"},{direction:u.direction,height:me(u.height)?`${u.height}px`:u.height,width:me(u.width)?`${u.width}px`:u.width},u.style]),A=D(()=>{const f=d(E),k=d(M);return{height:k?"100%":`${f}px`,pointerEvents:d(v).isScrolling?"none":void 0,width:k?`${f}px`:"100%"}}),l=D(()=>M.value?u.width:u.height),{onWheel:T}=Gt({atStartEdge:D(()=>v.value.scrollOffset<=0),atEndEdge:D(()=>v.value.scrollOffset>=E.value),layout:D(()=>u.layout)},f=>{var k,p;(p=(k=g.value).onMouseUp)==null||p.call(k),W(Math.min(v.value.scrollOffset+f,E.value-l.value))}),N=()=>{const{total:f}=u;if(f>0){const[x,a,m,P]=d(K);s(We,x,a,m,P)}const{scrollDir:k,scrollOffset:p,updateRequested:V}=d(v);s(je,k,p,V)},_=f=>{const{clientHeight:k,scrollHeight:p,scrollTop:V}=f.currentTarget,x=d(v);if(x.scrollOffset===V)return;const a=Math.max(0,Math.min(V,p-k));v.value={...x,isScrolling:!0,scrollDir:Ne(x.scrollOffset,a),scrollOffset:a,updateRequested:!1},oe(j)},z=f=>{const{clientWidth:k,scrollLeft:p,scrollWidth:V}=f.currentTarget,x=d(v);if(x.scrollOffset===p)return;const{direction:a}=u;let m=p;if(a===Se)switch(Ge()){case qe:{m=-p;break}case Pt:{m=V-k-p;break}}m=Math.max(0,Math.min(m,V-k)),v.value={...x,isScrolling:!0,scrollDir:Ne(x.scrollOffset,m),scrollOffset:m,updateRequested:!1},oe(j)},H=f=>{d(M)?z(f):_(f),N()},Y=(f,k)=>{const p=(E.value-l.value)/k*f;W(Math.min(E.value-l.value,p))},W=f=>{f=Math.max(f,0),f!==d(v).scrollOffset&&(v.value={...d(v),scrollOffset:f,scrollDir:Ne(d(v).scrollOffset,f),updateRequested:!0},oe(j))},U=(f,k=Oe)=>{const{scrollOffset:p}=d(v);f=Math.max(0,Math.min(f,u.total-1)),W(n(u,f,k,p,d(b)))},$=f=>{const{direction:k,itemSize:p,layout:V}=u,x=R.value(i&&p,i&&V,i&&k);let a;if(vt(x,String(f)))a=x[f];else{const m=t(u,f,d(b)),P=c(u,f,d(b)),G=d(M),Q=k===Se,ee=G?m:0;x[f]=a={position:"absolute",left:Q?void 0:`${ee}px`,right:Q?`${ee}px`:void 0,top:G?0:`${m}px`,height:G?"100%":`${P}px`,width:G?`${P}px`:"100%"}}return a},j=()=>{v.value.isScrolling=!1,oe(()=>{R.value(-1,null,null)})},X=()=>{const f=O.value;f&&(f.scrollTop=0)};Ye(()=>{if(!ft)return;const{initScrollOffset:f}=u,k=d(O);me(f)&&k&&(d(M)?k.scrollLeft=f:k.scrollTop=f),N()}),ht(()=>{const{direction:f,layout:k}=u,{scrollOffset:p,updateRequested:V}=d(v),x=d(O);if(V&&x)if(k===tt)if(f===Se)switch(Ge()){case qe:{x.scrollLeft=-p;break}case Bt:{x.scrollLeft=p;break}default:{const{clientWidth:a,scrollWidth:m}=x;x.scrollLeft=m-a-p;break}}else x.scrollLeft=p;else x.scrollTop=p});const I={ns:w,clientSize:l,estimatedTotalSize:E,windowStyle:B,windowRef:O,innerRef:F,innerStyle:A,itemsToRender:K,scrollbarRef:g,states:v,getItemStyle:$,onScroll:H,onScrollbarScroll:Y,onWheel:T,scrollTo:W,scrollToItem:U,resetScrollTop:X};return y({windowRef:O,innerRef:F,getItemStyleCache:R,scrollTo:W,scrollToItem:U,resetScrollTop:X,states:v}),I},render(u){var s;const{$slots:y,className:L,clientSize:w,containerElement:b,data:R,getItemStyle:O,innerElement:F,itemsToRender:g,innerStyle:v,layout:K,total:E,onScroll:M,onScrollbarScroll:B,onWheel:A,states:l,useIsScrolling:T,windowStyle:N,ns:_}=u,[z,H]=g,Y=Ee(b),W=Ee(F),U=[];if(E>0)for(let I=z;I<=H;I++)U.push((s=y.default)==null?void 0:s.call(y,{data:R,key:I,index:I,isScrolling:T?l.isScrolling:void 0,style:O(I)}));const $=[ve(W,{style:v,ref:"innerRef"},De(W)?U:{default:()=>U})],j=ve(At,{ref:"scrollbarRef",clientSize:w,layout:K,onScroll:B,ratio:w*100/this.estimatedTotalSize,scrollFrom:l.scrollOffset/(this.estimatedTotalSize-w),total:E}),X=ve(Y,{class:[_.e("window"),L],style:N,onScroll:M,onWheel:A,ref:"windowRef",key:0},De(Y)?[$]:{default:()=>[$]});return ve("div",{key:0,class:[_.e("wrapper"),l.scrollbarAlwaysOn?"always-on":""]},[X,j])}}),Ut=qt({name:"ElFixedSizeList",getItemOffset:({itemSize:e},n)=>n*e,getItemSize:({itemSize:e})=>e,getEstimatedTotalSize:({total:e,itemSize:n})=>n*e,getOffset:({height:e,total:n,itemSize:c,layout:t,width:r},o,C,h)=>{const i=we(t)?r:e,S=Math.max(0,n*c-i),u=Math.min(S,o*c),s=Math.max(0,(o+1)*c-i);switch(C===Wt&&(h>=s-i&&h<=u+i?C=Oe:C=Ue),C){case Ht:return u;case $t:return s;case Ue:{const y=Math.round(s+(u-s)/2);return y<Math.ceil(i/2)?0:y>S+Math.floor(i/2)?S:y}case Oe:default:return h>=s&&h<=u?h:h<s?s:u}},getStartIndexForOffset:({total:e,itemSize:n},c)=>Math.max(0,Math.min(e-1,Math.floor(c/n))),getStopIndexForStartIndex:({height:e,total:n,itemSize:c,layout:t,width:r},o,C)=>{const h=o*c,i=we(t)?r:e,S=Math.ceil((i+C-h)/c);return Math.max(0,Math.min(n-1,o+S-1))},initCache(){},clearCache:!0,validateProps(){}}),Re=Symbol(),Yt={key:-1,level:-1,data:{}};var ye=(e=>(e.KEY="id",e.LABEL="label",e.CHILDREN="children",e.DISABLED="disabled",e))(ye||{}),Ke=(e=>(e.ADD="add",e.DELETE="delete",e))(Ke||{});const lt={type:Number,default:26},Xt=Le({data:{type:ne(Array),default:()=>ge([])},emptyText:{type:String},height:{type:Number,default:200},props:{type:ne(Object),default:()=>ge({children:"children",label:"label",disabled:"disabled",value:"id"})},highlightCurrent:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!1},defaultCheckedKeys:{type:ne(Array),default:()=>ge([])},checkStrictly:{type:Boolean,default:!1},defaultExpandedKeys:{type:ne(Array),default:()=>ge([])},indent:{type:Number,default:16},itemSize:lt,icon:{type:gt},expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:{type:Boolean,default:!1},currentNodeKey:{type:ne([String,Number])},accordion:{type:Boolean,default:!1},filterMethod:{type:ne(Function)},perfMode:{type:Boolean,default:!0}}),Zt=Le({node:{type:ne(Object),default:()=>ge(Yt)},expanded:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},current:{type:Boolean,default:!1},hiddenExpandIcon:{type:Boolean,default:!1},itemSize:lt}),Jt=Le({node:{type:ne(Object),required:!0}}),nt="node-click",at="node-expand",st="node-collapse",ot="current-change",ct="check",it="check-change",rt="node-contextmenu",Qt={[nt]:(e,n,c)=>e&&n&&c,[at]:(e,n)=>e&&n,[st]:(e,n)=>e&&n,[ot]:(e,n)=>e&&n,[ct]:(e,n)=>e&&n,[it]:(e,n)=>e&&typeof n=="boolean",[rt]:(e,n,c)=>e&&n&&c},el={click:(e,n)=>!!(e&&n),toggle:e=>!!e,check:(e,n)=>e&&typeof n=="boolean"};function tl(e,n){const c=q(new Set),t=q(new Set),{emit:r}=xe();se([()=>n.value,()=>e.defaultCheckedKeys],()=>oe(()=>{F(e.defaultCheckedKeys)}),{immediate:!0});const o=()=>{if(!n.value||!e.showCheckbox||e.checkStrictly)return;const{levelTreeNodeMap:g,maxLevel:v}=n.value,K=c.value,E=new Set;for(let M=v-1;M>=1;--M){const B=g.get(M);B&&B.forEach(A=>{const l=A.children;if(l){let T=!0,N=!1;for(const _ of l){const z=_.key;if(K.has(z))N=!0;else if(E.has(z)){T=!1,N=!0;break}else T=!1}T?K.add(A.key):N?(E.add(A.key),K.delete(A.key)):(K.delete(A.key),E.delete(A.key))}})}t.value=E},C=g=>c.value.has(g.key),h=g=>t.value.has(g.key),i=(g,v,K=!0)=>{const E=c.value,M=(B,A)=>{E[A?Ke.ADD:Ke.DELETE](B.key);const l=B.children;!e.checkStrictly&&l&&l.forEach(T=>{T.disabled||M(T,A)})};M(g,v),o(),K&&S(g,v)},S=(g,v)=>{const{checkedNodes:K,checkedKeys:E}=w(),{halfCheckedNodes:M,halfCheckedKeys:B}=b();r(ct,g.data,{checkedKeys:E,checkedNodes:K,halfCheckedKeys:B,halfCheckedNodes:M}),r(it,g.data,v)};function u(g=!1){return w(g).checkedKeys}function s(g=!1){return w(g).checkedNodes}function y(){return b().halfCheckedKeys}function L(){return b().halfCheckedNodes}function w(g=!1){const v=[],K=[];if(n!=null&&n.value&&e.showCheckbox){const{treeNodeMap:E}=n.value;c.value.forEach(M=>{const B=E.get(M);B&&(!g||g&&B.isLeaf)&&(K.push(M),v.push(B.data))})}return{checkedKeys:K,checkedNodes:v}}function b(){const g=[],v=[];if(n!=null&&n.value&&e.showCheckbox){const{treeNodeMap:K}=n.value;t.value.forEach(E=>{const M=K.get(E);M&&(v.push(E),g.push(M.data))})}return{halfCheckedNodes:g,halfCheckedKeys:v}}function R(g){c.value.clear(),t.value.clear(),oe(()=>{F(g)})}function O(g,v){if(n!=null&&n.value&&e.showCheckbox){const K=n.value.treeNodeMap.get(g);K&&i(K,v,!1)}}function F(g){if(n!=null&&n.value){const{treeNodeMap:v}=n.value;if(e.showCheckbox&&v&&g)for(const K of g){const E=v.get(K);E&&!C(E)&&i(E,!0,!1)}}}return{updateCheckedKeys:o,toggleCheckbox:i,isChecked:C,isIndeterminate:h,getCheckedKeys:u,getCheckedNodes:s,getHalfCheckedKeys:y,getHalfCheckedNodes:L,setChecked:O,setCheckedKeys:R}}function ll(e,n){const c=q(new Set([])),t=q(new Set([])),r=D(()=>yt(e.filterMethod));function o(h){var i;if(!r.value)return;const S=new Set,u=t.value,s=c.value,y=[],L=((i=n.value)==null?void 0:i.treeNodes)||[],w=e.filterMethod;s.clear();function b(R){R.forEach(O=>{y.push(O),w!=null&&w(h,O.data)?y.forEach(g=>{S.add(g.key)}):O.isLeaf&&s.add(O.key);const F=O.children;if(F&&b(F),!O.isLeaf){if(!S.has(O.key))s.add(O.key);else if(F){let g=!0;for(const v of F)if(!s.has(v.key)){g=!1;break}g?u.add(O.key):u.delete(O.key)}}y.pop()})}return b(L),S}function C(h){return t.value.has(h.key)}return{hiddenExpandIconKeySet:t,hiddenNodeKeySet:c,doFilter:o,isForceHiddenExpandIcon:C}}function nl(e,n){const c=q(new Set(e.defaultExpandedKeys)),t=q(),r=kt();se(()=>e.currentNodeKey,a=>{t.value=a},{immediate:!0}),se(()=>e.data,a=>{V(a)},{immediate:!0});const{isIndeterminate:o,isChecked:C,toggleCheckbox:h,getCheckedKeys:i,getCheckedNodes:S,getHalfCheckedKeys:u,getHalfCheckedNodes:s,setChecked:y,setCheckedKeys:L}=tl(e,r),{doFilter:w,hiddenNodeKeySet:b,isForceHiddenExpandIcon:R}=ll(e,r),O=D(()=>{var a;return((a=e.props)==null?void 0:a.value)||ye.KEY}),F=D(()=>{var a;return((a=e.props)==null?void 0:a.children)||ye.CHILDREN}),g=D(()=>{var a;return((a=e.props)==null?void 0:a.disabled)||ye.DISABLED}),v=D(()=>{var a;return((a=e.props)==null?void 0:a.label)||ye.LABEL}),K=D(()=>{const a=c.value,m=b.value,P=[],G=r.value&&r.value.treeNodes||[];function Q(){const ee=[];for(let Z=G.length-1;Z>=0;--Z)ee.push(G[Z]);for(;ee.length;){const Z=ee.pop();if(Z&&(m.has(Z.key)||P.push(Z),a.has(Z.key))){const J=Z.children;if(J){const pe=J.length;for(let re=pe-1;re>=0;--re)ee.push(J[re])}}}}return Q(),P}),E=D(()=>K.value.length>0);function M(a){const m=new Map,P=new Map;let G=1;function Q(Z,J=1,pe=void 0){var re;const _e=[];for(const fe of Z){const Ve=l(fe),te={level:J,key:Ve,data:fe};te.label=N(fe),te.parent=pe;const he=A(fe);te.disabled=T(fe),te.isLeaf=!he||he.length===0,he&&he.length&&(te.children=Q(he,J+1,te)),_e.push(te),m.set(Ve,te),P.has(J)||P.set(J,[]),(re=P.get(J))==null||re.push(te)}return J>G&&(G=J),_e}const ee=Q(a);return{treeNodeMap:m,levelTreeNodeMap:P,maxLevel:G,treeNodes:ee}}function B(a){const m=w(a);m&&(c.value=m)}function A(a){return a[F.value]}function l(a){return a?a[O.value]:""}function T(a){return a[g.value]}function N(a){return a[v.value]}function _(a){c.value.has(a.key)?$(a):U(a)}function z(a){c.value=new Set(a)}function H(a,m){n(nt,a.data,a,m),Y(a),e.expandOnClickNode&&_(a),e.showCheckbox&&e.checkOnClickNode&&!a.disabled&&h(a,!C(a),!0)}function Y(a){I(a)||(t.value=a.key,n(ot,a.data,a))}function W(a,m){h(a,m)}function U(a){const m=c.value;if(r.value&&e.accordion){const{treeNodeMap:P}=r.value;m.forEach(G=>{const Q=P.get(G);a&&a.level===(Q==null?void 0:Q.level)&&m.delete(G)})}m.add(a.key),n(at,a.data,a)}function $(a){c.value.delete(a.key),n(st,a.data,a)}function j(a){return c.value.has(a.key)}function X(a){return!!a.disabled}function I(a){const m=t.value;return m!==void 0&&m===a.key}function f(){var a,m;if(t.value)return(m=(a=r.value)==null?void 0:a.treeNodeMap.get(t.value))==null?void 0:m.data}function k(){return t.value}function p(a){t.value=a}function V(a){oe(()=>r.value=M(a))}function x(a){var m;const P=mt(a)?l(a):a;return(m=r.value)==null?void 0:m.treeNodeMap.get(P)}return{tree:r,flattenTree:K,isNotEmpty:E,getKey:l,getChildren:A,toggleExpand:_,toggleCheckbox:h,isExpanded:j,isChecked:C,isIndeterminate:o,isDisabled:X,isCurrent:I,isForceHiddenExpandIcon:R,handleNodeClick:H,handleNodeCheck:W,getCurrentNode:f,getCurrentKey:k,setCurrentKey:p,getCheckedKeys:i,getCheckedNodes:S,getHalfCheckedKeys:u,getHalfCheckedNodes:s,setChecked:y,setCheckedKeys:L,filter:B,setData:V,getNode:x,expandNode:U,collapseNode:$,setExpandedKeys:z}}var al=ie({name:"ElTreeNodeContent",props:Jt,setup(e){const n=Xe(Re),c=Ce("tree");return()=>{const t=e.node,{data:r}=t;return n!=null&&n.ctx.slots.default?n.ctx.slots.default({node:t,data:r}):ve("span",{class:c.be("node","label")},[t==null?void 0:t.label])}}});const sl=["aria-expanded","aria-disabled","aria-checked","data-key","onClick"],ol=ie({name:"ElTreeNode"}),cl=ie({...ol,props:Zt,emits:el,setup(e,{emit:n}){const c=e,t=Xe(Re),r=Ce("tree"),o=D(()=>{var s;return(s=t==null?void 0:t.props.indent)!=null?s:16}),C=D(()=>{var s;return(s=t==null?void 0:t.props.icon)!=null?s:Ct}),h=s=>{n("click",c.node,s)},i=()=>{n("toggle",c.node)},S=s=>{n("check",c.node,s)},u=s=>{var y,L,w,b;(w=(L=(y=t==null?void 0:t.instance)==null?void 0:y.vnode)==null?void 0:L.props)!=null&&w.onNodeContextmenu&&(s.stopPropagation(),s.preventDefault()),t==null||t.ctx.emit(rt,s,(b=c.node)==null?void 0:b.data,c.node)};return(s,y)=>{var L,w,b;return le(),Te("div",{ref:"node$",class:ce([d(r).b("node"),d(r).is("expanded",s.expanded),d(r).is("current",s.current),d(r).is("focusable",!s.disabled),d(r).is("checked",!s.disabled&&s.checked)]),role:"treeitem",tabindex:"-1","aria-expanded":s.expanded,"aria-disabled":s.disabled,"aria-checked":s.checked,"data-key":(L=s.node)==null?void 0:L.key,onClick:be(h,["stop"]),onContextmenu:u},[Ie("div",{class:ce(d(r).be("node","content")),style:Je({paddingLeft:`${(s.node.level-1)*d(o)}px`,height:s.itemSize+"px"})},[d(C)?(le(),ue(d(pt),{key:0,class:ce([d(r).is("leaf",!!((w=s.node)!=null&&w.isLeaf)),d(r).is("hidden",s.hiddenExpandIcon),{expanded:!((b=s.node)!=null&&b.isLeaf)&&s.expanded},d(r).be("node","expand-icon")]),onClick:be(i,["stop"])},{default:ke(()=>[(le(),ue(Ee(d(C))))]),_:1},8,["class","onClick"])):Be("v-if",!0),s.showCheckbox?(le(),ue(d(bt),{key:1,"model-value":s.checked,indeterminate:s.indeterminate,disabled:s.disabled,onChange:S,onClick:y[0]||(y[0]=be(()=>{},["stop"]))},null,8,["model-value","indeterminate","disabled"])):Be("v-if",!0),Ze(d(al),{node:s.node},null,8,["node"])],6)],42,sl)}}});var il=Qe(cl,[["__file","tree-node.vue"]]);const rl=ie({name:"ElTreeV2"}),dl=ie({...rl,props:Xt,emits:Qt,setup(e,{expose:n,emit:c}){const t=e,r=St(),o=D(()=>t.itemSize);Ae(Re,{ctx:{emit:c,slots:r},props:t,instance:xe()}),Ae(Nt,void 0);const{t:C}=Et(),h=Ce("tree"),{flattenTree:i,isNotEmpty:S,toggleExpand:u,isExpanded:s,isIndeterminate:y,isChecked:L,isDisabled:w,isCurrent:b,isForceHiddenExpandIcon:R,handleNodeClick:O,handleNodeCheck:F,toggleCheckbox:g,getCurrentNode:v,getCurrentKey:K,setCurrentKey:E,getCheckedKeys:M,getCheckedNodes:B,getHalfCheckedKeys:A,getHalfCheckedNodes:l,setChecked:T,setCheckedKeys:N,filter:_,setData:z,getNode:H,expandNode:Y,collapseNode:W,setExpandedKeys:U}=nl(t,c);return n({toggleCheckbox:g,getCurrentNode:v,getCurrentKey:K,setCurrentKey:E,getCheckedKeys:M,getCheckedNodes:B,getHalfCheckedKeys:A,getHalfCheckedNodes:l,setChecked:T,setCheckedKeys:N,filter:_,setData:z,getNode:H,expandNode:Y,collapseNode:W,setExpandedKeys:U}),($,j)=>{var X;return le(),Te("div",{class:ce([d(h).b(),{[d(h).m("highlight-current")]:$.highlightCurrent}]),role:"tree"},[d(S)?(le(),ue(d(Ut),{key:0,"class-name":d(h).b("virtual-list"),data:d(i),total:d(i).length,height:$.height,"item-size":d(o),"perf-mode":$.perfMode},{default:ke(({data:I,index:f,style:k})=>[(le(),ue(il,{key:I[f].key,style:Je(k),node:I[f],expanded:d(s)(I[f]),"show-checkbox":$.showCheckbox,checked:d(L)(I[f]),indeterminate:d(y)(I[f]),"item-size":d(o),disabled:d(w)(I[f]),current:d(b)(I[f]),"hidden-expand-icon":d(R)(I[f]),onClick:d(O),onToggle:d(u),onCheck:d(F)},null,8,["style","node","expanded","show-checkbox","checked","indeterminate","item-size","disabled","current","hidden-expand-icon","onClick","onToggle","onCheck"]))]),_:1},8,["class-name","data","total","height","item-size","perf-mode"])):(le(),Te("div",{key:1,class:ce(d(h).e("empty-block"))},[Ie("span",{class:ce(d(h).e("empty-text"))},et((X=$.emptyText)!=null?X:d(C)("el.tree.emptyText")),3)],2))],2)}}});var ul=Qe(dl,[["__file","tree.vue"]]);const fl=Tt(ul);function hl(e,n,c){const t=[],r=[];return wt(e,o=>{t.push(o[n]),r.push(o)},c),[t,r]}function vl(e,n,c,t,r,o,C){const h=[];if(ae(n)||!n.length)return h;const i=o?o.map(y=>y[c]):[],S=C?C.map(y=>y[c]):[],[u,s]=hl(e,c,r);return n.forEach(y=>{const L=i.indexOf(y);let w=o&&L!==-1?o[L]:void 0;if(L===-1&&C){const b=S.indexOf(y);b!==-1&&(w=C[b])}if(!w&&e){const b=u.indexOf(y);b!==-1&&(w=s[b])}h.push({value:y,label:w?w[t]:String(y)})}),h}function Me(e,n,c,t,r,o,C){const h=[];return ae(n)||!n.length||e&&e.forEach(i=>{const S=i[c],u=i[r],s=n.includes(S);if(o)s&&h.push({value:S,label:i[t],hide:C}),Me(u,n,c,t,r,o,s?!0:C).forEach(y=>{h.push(y)});else{const y=!!(u&&u.length);s&&h.push({value:S,label:i[t],hide:y}),y&&Me(u,n,c,t,r,o).forEach(L=>{h.push(L)})}}),h}function gl(e,n,c,t,r){const o=e.map(h=>h.value),C=r?r.map(h=>h[c]):[];return n.forEach(h=>{if(!o.includes(h)){const i=C.indexOf(h),S=r&&i!==-1?r[i]:void 0;e.push({value:h,label:S?S[t]:String(h)})}}),e}function dt(e,n,c,t,r){return!e||!e.length||!n||!n.length?!1:e.every(o=>o[r]||n.includes(o[c])?!0:o[t]&&o[t].length?dt(o[t],n,c,t,r):!1)}function de(e,n,c){if(!c)return e;const t=[];return n.forEach(r=>{r.hide||t.push(r.value)}),t}const yl={modelValue:{type:[String,Number,Boolean,Array],default:()=>null},multiple:Boolean,disabled:Boolean,size:String,clearable:Boolean,placeholder:String,cacheData:Array,treeProps:{type:Object,required:!0},showCheckedStrategy:String,checkedValueStrategy:Boolean,maxTagCount:Number,maxTagTextLength:Number,tagType:{type:String,default:"info"},automaticDropdown:Boolean,filterable:Boolean,teleported:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},placement:{type:String,default:"bottom-start"},transition:{type:String,default:"el-zoom-in-top"},popperOptions:Object,popperClass:String,popperWidth:[Number,String],selectStyle:Object,inputStyle:Object},kl={"update:modelValue":e=>!0,change:e=>!0,visibleChange:e=>!0,removeTag:e=>!0,clear:()=>!0,focus:e=>!0,blur:e=>!0},ml=ie({name:"EleTreeSelect",components:{ElTreeV2:fl,EleBasicSelect:Lt},props:yl,emits:kl,setup(e,{emit:n}){const c=q(null),t=q(null),r=q(!1),o=q([]),C=D(()=>{const l=o.value;return!e.multiple&&l.length?l[0].label:""}),h=D(()=>{const l=["ele-tree-select-popper"];return e.popperClass&&l.push(e.popperClass),l.join(" ")}),i=D(()=>{var l;return Object.assign({value:"id",label:"label",children:"children",disabled:"disabled"},(l=e.treeProps)==null?void 0:l.props)}),S=()=>{c.value&&c.value.updatePopper()},u=l=>{if(ae(l))return;const T=i.value.value;if(e.cacheData!=null){const N=e.cacheData.find(_=>_[T]===l);if(N!=null)return N}if(e.treeProps&&e.treeProps.data)return xt(e.treeProps.data,N=>N[T]===l,i.value.children)},s=l=>{var T,N,_;const z=i.value.value,H=i.value.label;return(T=e.treeProps)!=null&&T.checkStrictly||e.showCheckedStrategy==="all"?vl((N=e.treeProps)==null?void 0:N.data,l,z,H,i.value.children,e.cacheData,t.value?t.value.getCheckedNodes():void 0):gl(Me((_=e.treeProps)==null?void 0:_.data,l,z,H,i.value.children,e.showCheckedStrategy!=="child"),l,z,H,e.cacheData)},y=l=>{if(!e.multiple){const N=o.value[0];if(ae(l)){if(!N)return;o.value=[],t.value&&t.value.setCurrentKey(null);return}if(N&&N.value===l)return;const _=u(l),z=i.value.label,H=_?_[z]:String(l);o.value=[{label:H,value:l}],t.value&&t.value.setCurrentKey(l);return}if(ae(l)||!l.length){if(!o.value.length)return;o.value=[],t.value&&t.value.setCheckedKeys([]);return}const T=o.value.map(N=>N.value);He(l,T,!0)&&(t.value&&t.value.setCheckedKeys(l),o.value=s(l))},L=(l,T)=>{const N=T[i.value.label];return N!=null&&N.includes(l)},w=l=>{t.value&&t.value.filter(l)},b=()=>{c.value&&c.value.focusSearchInput()},R=l=>{He(l,e.modelValue,e.multiple)&&(n("update:modelValue",l),n("change",l))},O=l=>{l&&w(""),r.value!==l&&(r.value=l,n("visibleChange",l))},F=l=>{t.value&&t.value.setChecked(l.value,!1);const T=t.value&&t.value.getCheckedKeys()||[];o.value=s(T),R(de(T,o.value,e.checkedValueStrategy)),n("removeTag",l.value)},g=()=>{R(e.multiple?[]:null),O(!1),n("clear")},v=l=>{n("focus",l)},K=l=>{n("blur",l)},E=(l,T,N)=>{var _,z,H;N.stopPropagation();const Y=i.value.value,W=i.value.children,U=i.value.disabled,$=l[U];if($){const k=N.target;if(k&&k.classList.contains("is-disabled")){const p=(_=k.parentNode)==null?void 0:_.parentNode;p&&p.blur()}}const j=l[Y],X=l[i.value.label],I=!((z=l[W])!=null&&z.length),f=((H=e.treeProps)==null?void 0:H.expandOnClickNode)!==!1;if(b(),!e.multiple){const k=o.value[0];if(k&&k.value===j){(!f||I)&&O(!1);return}if(!$&&(!f||I)){o.value=[{label:X,value:j}],R(j),O(!1);return}oe(()=>{const p=e.modelValue,V=ae(p)?null:p;t.value&&t.value.setCurrentKey(V)});return}if(!$&&(!f||I)){const k=e.modelValue,p=k&&k.includes(j);if(t.value)if(p)t.value.setChecked(j,!1);else if(I)t.value.setChecked(j,!p);else{const x=dt(l[W],k,Y,W,U);t.value.setChecked(j,!x)}const V=t.value&&t.value.getCheckedKeys()||[];o.value=s(V),R(de(V,o.value,e.checkedValueStrategy))}},M=()=>{const l=t.value&&t.value.getCheckedKeys()||[];o.value=s(l),R(de(l,o.value,e.checkedValueStrategy)),b()},B=()=>{b()},A=()=>{b()};return se(()=>e.modelValue,l=>{if(!e.multiple||!e.checkedValueStrategy)y(l);else{const T=t.value&&t.value.getCheckedKeys()||[];y(T)}},{deep:!0}),se([()=>e.cacheData,()=>{var l;return(l=e.treeProps)==null?void 0:l.data}],()=>{if(o.value.length){if(!e.multiple){const l=u(e.modelValue),T=e.modelValue,N=l?l[i.value.label]:String(T);o.value=[{label:N,value:T}];return}o.value=s(e.modelValue)}},{deep:!0}),se([()=>e.showCheckedStrategy,()=>{var l;return(l=e.treeProps)==null?void 0:l.checkStrictly}],()=>{if(e.multiple&&!ae(e.modelValue)&&e.modelValue.length)if(e.checkedValueStrategy){const l=t.value&&t.value.getCheckedKeys()||[];o.value=s(l),R(de(l,o.value,e.checkedValueStrategy))}else{const l=e.modelValue;o.value=s(l),R(de(l,o.value,e.checkedValueStrategy))}}),se(()=>e.checkedValueStrategy,()=>{if(!e.multiple)return;const l=t.value&&t.value.getCheckedKeys()||[];R(de(l,o.value,e.checkedValueStrategy))}),se(()=>e.disabled,l=>{l&&O(!1)}),Ye(()=>{!ae(e.modelValue)&&!(e.multiple&&!e.modelValue.length)&&y(e.modelValue)}),{selectRef:c,treeRef:t,selectVisible:r,selectedItems:o,selectedLabel:C,selectPopperClass:h,treeOptions:i,updatePopover:S,treeFilter:L,updateVisible:O,onSelectFilter:w,onSelectRemove:F,onSelectClear:g,onSelectFocus:v,onSelectBlur:K,onTreeClick:E,onTreeCheck:M,onTreeExpand:B,onTreeCollapse:A}}}),Cl=(e,n)=>{const c=e.__vccOpts||e;for(const[t,r]of n)c[t]=r;return c},pl=["title"];function bl(e,n,c,t,r,o){const C=ze("ElTreeV2"),h=ze("EleBasicSelect");return le(),ue(h,{ref:"selectRef",value:e.modelValue,multiple:e.multiple,disabled:e.disabled,size:e.size,clearable:e.clearable,placeholder:e.placeholder,maxTagCount:e.maxTagCount,maxTagTextLength:e.maxTagTextLength,tagType:e.tagType,automaticDropdown:e.automaticDropdown,filterable:e.filterable,teleported:e.teleported,persistent:e.persistent,placement:e.placement,transition:e.transition,popperWidth:e.popperWidth,popperOptions:e.popperOptions,popperClass:e.selectPopperClass,selectStyle:e.selectStyle,inputStyle:e.inputStyle,selectedLabel:e.selectedLabel,selected:e.selectedItems.filter(i=>!i.hide),visible:e.selectVisible,"onUpdate:visible":e.updateVisible,onFilterChange:e.onSelectFilter,onRemoveTag:e.onSelectRemove,onClear:e.onSelectClear,onFocus:e.onSelectFocus,onBlur:e.onSelectBlur},Ot({default:ke(()=>[Ze(C,Kt({itemSize:32,filterMethod:e.treeFilter},e.treeProps,{ref:"treeRef",props:e.treeOptions,highlightCurrent:!e.multiple,showCheckbox:!!e.multiple,checkOnClickNode:!1,defaultCheckedKeys:e.multiple?e.modelValue:void 0,onCheck:e.onTreeCheck,onNodeClick:e.onTreeClick,onNodeExpand:e.onTreeExpand,onNodeCollapse:e.onTreeCollapse}),{default:ke(i=>[Ie("span",{class:ce(["el-tree-node__label",{"is-disabled":i.node.disabled}]),title:i.node.label},[Fe(e.$slots,"default",Pe($e(i||{})),()=>[Mt(et(i.node.label),1)])],10,pl)]),_:3},16,["filterMethod","props","highlightCurrent","showCheckbox","defaultCheckedKeys","onCheck","onNodeClick","onNodeExpand","onNodeCollapse"])]),_:2},[e.$slots.maxTagPlaceholder?{name:"maxTagPlaceholder",fn:ke(i=>[Fe(e.$slots,"maxTagPlaceholder",Pe($e(i||{})))]),key:"0"}:void 0]),1032,["value","multiple","disabled","size","clearable","placeholder","maxTagCount","maxTagTextLength","tagType","automaticDropdown","filterable","teleported","persistent","placement","transition","popperWidth","popperOptions","popperClass","selectStyle","inputStyle","selectedLabel","selected","visible","onUpdate:visible","onFilterChange","onRemoveTag","onClear","onFocus","onBlur"])}const Tl=Cl(ml,[["render",bl]]);export{Tl as i};
