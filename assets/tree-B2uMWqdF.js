import{du as _,a as Ee,ch as De,ei as Ke,a8 as se,J as re,a0 as Y,L as j,T as ie,a1 as ue,Y as U,r as K,dD as V,dC as we,ej as Se,aO as xe,g as Ae,dG as Te,O as w,V as le,ek as Ie,ai as L,bT as ee,bU as te,o as D,l as z,d as ne,c as F,w as X,a6 as Be,a4 as S,aF as I,a7 as R,b as Z,a5 as Le,F as fe,m as pe,N as ge,cn as Oe,c0 as $e,K as ce,R as Me,dA as Fe,bS as ze,bY as B,a3 as qe,cx as je,el as Pe,H as Re,c$ as He,t as Ue,a9 as Ye}from"./index-BF2fBoPb.js";const q="$treeNodeId",he=function(t,e){!e||e[q]||Object.defineProperty(e,q,{value:t.id,enumerable:!1,configurable:!1,writable:!1})},ae=function(t,e){return t?e[t]:e[q]},oe=(t,e,n)=>{const o=t.value.currentNode;n();const d=t.value.currentNode;o!==d&&e("current-change",d?d.data:null,d)},de=t=>{let e=!0,n=!0,o=!0;for(let d=0,s=t.length;d<s;d++){const r=t[d];(r.checked!==!0||r.indeterminate)&&(e=!1,r.disabled||(o=!1)),(r.checked!==!1||r.indeterminate)&&(n=!1)}return{all:e,none:n,allWithoutDisable:o,half:!e&&!n}},H=function(t){if(t.childNodes.length===0||t.loading)return;const{all:e,none:n,half:o}=de(t.childNodes);e?(t.checked=!0,t.indeterminate=!1):o?(t.checked=!1,t.indeterminate=!0):n&&(t.checked=!1,t.indeterminate=!1);const d=t.parent;!d||d.level===0||t.store.checkStrictly||H(d)},J=function(t,e){const n=t.store.props,o=t.data||{},d=n[e];if(typeof d=="function")return d(o,t);if(typeof d=="string")return o[d];if(typeof d>"u"){const s=o[e];return s===void 0?"":s}};let We=0;class O{constructor(e){this.id=We++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const n in e)_(e,n)&&(this[n]=e[n]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const n=e.props;if(n&&typeof n.isLeaf<"u"){const s=J(this,"isLeaf");typeof s=="boolean"&&(this.isLeafByUser=s)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&!this.isLeafByUser&&this.expand(),Array.isArray(this.data)||he(this,this.data),!this.data)return;const o=e.defaultExpandedKeys,d=e.key;d&&o&&o.includes(this.key)&&this.expand(null,e.autoExpandParent),d&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){Array.isArray(e)||he(this,e),this.data=e,this.childNodes=[];let n;this.level===0&&Array.isArray(this.data)?n=this.data:n=J(this,"children")||[];for(let o=0,d=n.length;o<d;o++)this.insertChild({data:n[o]})}get label(){return J(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return J(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return e.childNodes[n+1]}return null}get previousSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return n>0?e.childNodes[n-1]:null}return null}contains(e,n=!0){return(this.childNodes||[]).some(o=>o===e||n&&o.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,n,o){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof O)){if(!o){const d=this.getChildren(!0);d.includes(e.data)||(typeof n>"u"||n<0?d.push(e.data):d.splice(n,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=Ee(new O(e)),e instanceof O&&e.initialize()}e.level=this.level+1,typeof n>"u"||n<0?this.childNodes.push(e):this.childNodes.splice(n,0,e),this.updateLeafState()}insertBefore(e,n){let o;n&&(o=this.childNodes.indexOf(n)),this.insertChild(e,o)}insertAfter(e,n){let o;n&&(o=this.childNodes.indexOf(n),o!==-1&&(o+=1)),this.insertChild(e,o)}removeChild(e){const n=this.getChildren()||[],o=n.indexOf(e.data);o>-1&&n.splice(o,1);const d=this.childNodes.indexOf(e);d>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(d,1)),this.updateLeafState()}removeChildByData(e){let n=null;for(let o=0;o<this.childNodes.length;o++)if(this.childNodes[o].data===e){n=this.childNodes[o];break}n&&this.removeChild(n)}expand(e,n){const o=()=>{if(n){let d=this.parent;for(;d.level>0;)d.expanded=!0,d=d.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(d=>{d.canFocus=!0})};this.shouldLoadData()?this.loadData(d=>{Array.isArray(d)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||H(this),o())}):o()}doCreateChildren(e,n={}){e.forEach(o=>{this.insertChild(Object.assign({data:o},n),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,n,o,d){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:r,allWithoutDisable:i}=de(this.childNodes);!this.isLeaf&&!r&&i&&(this.checked=!1,e=!1);const f=()=>{if(n){const y=this.childNodes;for(let h=0,p=y.length;h<p;h++){const N=y[h];d=d||e!==!1;const k=N.disabled?N.checked:d;N.setChecked(k,n,!0,d)}const{half:l,all:c}=de(y);c||(this.checked=c,this.indeterminate=l)}};if(this.shouldLoadData()){this.loadData(()=>{f(),H(this)},{checked:e!==!1});return}else f()}const s=this.parent;!s||s.level===0||o||H(s)}getChildren(e=!1){if(this.level===0)return this.data;const n=this.data;if(!n)return null;const o=this.store.props;let d="children";return o&&(d=o.children||"children"),n[d]===void 0&&(n[d]=null),e&&!n[d]&&(n[d]=[]),n[d]}updateChildren(){const e=this.getChildren()||[],n=this.childNodes.map(s=>s.data),o={},d=[];e.forEach((s,r)=>{const i=s[q];!!i&&n.findIndex(y=>y[q]===i)>=0?o[i]={index:r,data:s}:d.push({index:r,data:s})}),this.store.lazy||n.forEach(s=>{o[s[q]]||this.removeChildByData(s)}),d.forEach(({index:s,data:r})=>{this.insertChild({data:r},s)}),this.updateLeafState()}loadData(e,n={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(n).length)){this.loading=!0;const o=s=>{this.childNodes=[],this.doCreateChildren(s,n),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,s)},d=()=>{this.loading=!1};this.store.load(this,o,d)}else e&&e.call(this)}eachNode(e){const n=[this];for(;n.length;){const o=n.shift();n.unshift(...o.childNodes),e(o)}}reInitChecked(){this.store.checkStrictly||H(this)}}class Ge{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const n in e)_(e,n)&&(this[n]=e[n]);this.nodesMap={}}initialize(){if(this.root=new O({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,n=>{this.root.doCreateChildren(n),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const n=this.filterNodeMethod,o=this.lazy,d=function(s){const r=s.root?s.root.childNodes:s.childNodes;if(r.forEach(i=>{i.visible=n.call(i,e,i.data,i),d(i)}),!s.visible&&r.length){let i=!0;i=!r.some(f=>f.visible),s.root?s.root.visible=i===!1:s.visible=i===!1}e&&s.visible&&!s.isLeaf&&(!o||s.loaded)&&s.expand()};d(this)}setData(e){e!==this.root.data?(this.nodesMap={},this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof O)return e;const n=De(e)?ae(this.key,e):e;return this.nodesMap[n]||null}insertBefore(e,n){const o=this.getNode(n);o.parent.insertBefore({data:e},o)}insertAfter(e,n){const o=this.getNode(n);o.parent.insertAfter({data:e},o)}remove(e){const n=this.getNode(e);n&&n.parent&&(n===this.currentNode&&(this.currentNode=null),n.parent.removeChild(n))}append(e,n){const o=Ke(n)?this.root:this.getNode(n);o&&o.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],n=this.nodesMap;e.forEach(o=>{const d=n[o];d&&d.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const n=this.key;!e||!e.data||(n?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(o=>{this.deregisterNode(o)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,n=!1){const o=[],d=function(s){(s.root?s.root.childNodes:s.childNodes).forEach(i=>{(i.checked||n&&i.indeterminate)&&(!e||e&&i.isLeaf)&&o.push(i.data),d(i)})};return d(this),o}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(n=>(n||{})[this.key])}getHalfCheckedNodes(){const e=[],n=function(o){(o.root?o.root.childNodes:o.childNodes).forEach(s=>{s.indeterminate&&e.push(s.data),n(s)})};return n(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],n=this.nodesMap;for(const o in n)_(n,o)&&e.push(n[o]);return e}updateChildren(e,n){const o=this.nodesMap[e];if(!o)return;const d=o.childNodes;for(let s=d.length-1;s>=0;s--){const r=d[s];this.remove(r.data)}for(let s=0,r=n.length;s<r;s++){const i=n[s];this.append(i,o.data)}}_setCheckedKeys(e,n=!1,o){const d=this._getAllNodes().sort((f,y)=>f.level-y.level),s=Object.create(null),r=Object.keys(o);d.forEach(f=>f.setChecked(!1,!1));const i=f=>{f.childNodes.forEach(y=>{var l;s[y.data[e]]=!0,(l=y.childNodes)!=null&&l.length&&i(y)})};for(let f=0,y=d.length;f<y;f++){const l=d[f],c=l.data[e].toString();if(!r.includes(c)){l.checked&&!s[c]&&l.setChecked(!1,!1);continue}if(l.childNodes.length&&i(l),l.isLeaf||this.checkStrictly){l.setChecked(!0,!1);continue}if(l.setChecked(!0,!0),n){l.setChecked(!1,!1);const p=function(N){N.childNodes.forEach(C=>{C.isLeaf||C.setChecked(!1,!1),p(C)})};p(l)}}}setCheckedNodes(e,n=!1){const o=this.key,d={};e.forEach(s=>{d[(s||{})[o]]=!0}),this._setCheckedKeys(o,n,d)}setCheckedKeys(e,n=!1){this.defaultCheckedKeys=e;const o=this.key,d={};e.forEach(s=>{d[s]=!0}),this._setCheckedKeys(o,n,d)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(n=>{const o=this.getNode(n);o&&o.expand(null,this.autoExpandParent)})}setChecked(e,n,o){const d=this.getNode(e);d&&d.setChecked(!!n,o)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const n=this.currentNode;n&&(n.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,n=!0){const o=e[this.key],d=this.nodesMap[o];this.setCurrentNode(d),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,n=!0){if(e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const o=this.getNode(e);o&&(this.setCurrentNode(o),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const Je=re({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(t){const e=Y("tree"),n=j("NodeInstance"),o=j("RootTree");return()=>{const d=t.node,{data:s,store:r}=d;return t.renderContent?t.renderContent(ie,{_self:n,node:d,data:s,store:r}):ue(o.ctx.slots,"default",{node:d,data:s},()=>[ie("span",{class:e.be("node","label")},[d.label])])}}});var Qe=se(Je,[["__file","tree-node-content.vue"]]);function ye(t){const e=j("TreeNodeMap",null),n={treeNodeExpand:o=>{t.node!==o&&t.node.collapse()},children:[]};return e&&e.children.push(n),U("TreeNodeMap",n),{broadcastExpanded:o=>{if(t.accordion)for(const d of n.children)d.treeNodeExpand(o)}}}const Ne=Symbol("dragEvents");function Ve({props:t,ctx:e,el$:n,dropIndicator$:o,store:d}){const s=Y("tree"),r=K({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return U(Ne,{treeNodeDragStart:({event:l,treeNode:c})=>{if(typeof t.allowDrag=="function"&&!t.allowDrag(c.node))return l.preventDefault(),!1;l.dataTransfer.effectAllowed="move";try{l.dataTransfer.setData("text/plain","")}catch(h){}r.value.draggingNode=c,e.emit("node-drag-start",c.node,l)},treeNodeDragOver:({event:l,treeNode:c})=>{const h=c,p=r.value.dropNode;p&&p.node.id!==h.node.id&&V(p.$el,s.is("drop-inner"));const N=r.value.draggingNode;if(!N||!h)return;let k=!0,C=!0,E=!0,x=!0;typeof t.allowDrop=="function"&&(k=t.allowDrop(N.node,h.node,"prev"),x=C=t.allowDrop(N.node,h.node,"inner"),E=t.allowDrop(N.node,h.node,"next")),l.dataTransfer.dropEffect=C||k||E?"move":"none",(k||C||E)&&(p==null?void 0:p.node.id)!==h.node.id&&(p&&e.emit("node-drag-leave",N.node,p.node,l),e.emit("node-drag-enter",N.node,h.node,l)),k||C||E?r.value.dropNode=h:r.value.dropNode=null,h.node.nextSibling===N.node&&(E=!1),h.node.previousSibling===N.node&&(k=!1),h.node.contains(N.node,!1)&&(C=!1),(N.node===h.node||N.node.contains(h.node))&&(k=!1,C=!1,E=!1);const A=h.$el.querySelector(`.${s.be("node","content")}`).getBoundingClientRect(),$=n.value.getBoundingClientRect();let b;const W=k?C?.25:E?.45:1:-1,G=E?C?.75:k?.55:0:1;let M=-9999;const u=l.clientY-A.top;u<A.height*W?b="before":u>A.height*G?b="after":C?b="inner":b="none";const v=h.$el.querySelector(`.${s.be("node","expand-icon")}`).getBoundingClientRect(),m=o.value;b==="before"?M=v.top-$.top:b==="after"&&(M=v.bottom-$.top),m.style.top=`${M}px`,m.style.left=`${v.right-$.left}px`,b==="inner"?we(h.$el,s.is("drop-inner")):V(h.$el,s.is("drop-inner")),r.value.showDropIndicator=b==="before"||b==="after",r.value.allowDrop=r.value.showDropIndicator||x,r.value.dropType=b,e.emit("node-drag-over",N.node,h.node,l)},treeNodeDragEnd:l=>{const{draggingNode:c,dropType:h,dropNode:p}=r.value;if(l.preventDefault(),l.dataTransfer&&(l.dataTransfer.dropEffect="move"),c&&p){const N={data:c.node.data};h!=="none"&&c.node.remove(),h==="before"?p.node.parent.insertBefore(N,p.node):h==="after"?p.node.parent.insertAfter(N,p.node):h==="inner"&&p.node.insertChild(N),h!=="none"&&(d.value.registerNode(N),d.value.key&&c.node.eachNode(k=>{var C;(C=d.value.nodesMap[k.data[d.value.key]])==null||C.setChecked(k.checked,!d.value.checkStrictly)})),V(p.$el,s.is("drop-inner")),e.emit("node-drag-end",c.node,p.node,h,l),h!=="none"&&e.emit("node-drop",c.node,p.node,h,l)}c&&!p&&e.emit("node-drag-end",c.node,null,h,l),r.value.showDropIndicator=!1,r.value.draggingNode=null,r.value.dropNode=null,r.value.allowDrop=!0}}),{dragState:r}}const Xe=re({name:"ElTreeNode",components:{ElCollapseTransition:Se,ElCheckbox:xe,NodeContent:Qe,ElIcon:Ae,Loading:Te},props:{node:{type:O,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(t,e){const n=Y("tree"),{broadcastExpanded:o}=ye(t),d=j("RootTree"),s=K(!1),r=K(!1),i=K(null),f=K(null),y=K(null),l=j(Ne),c=ge();U("NodeInstance",c),t.node.expanded&&(s.value=!0,r.value=!0);const h=d.props.props.children||"children";w(()=>{const u=t.node.data[h];return u&&[...u]},()=>{t.node.updateChildren()}),w(()=>t.node.indeterminate,u=>{k(t.node.checked,u)}),w(()=>t.node.checked,u=>{k(u,t.node.indeterminate)}),w(()=>t.node.childNodes.length,()=>t.node.reInitChecked()),w(()=>t.node.expanded,u=>{le(()=>s.value=u),u&&(r.value=!0)});const p=u=>ae(d.props.nodeKey,u.data),N=u=>{const v=t.props.class;if(!v)return{};let m;if(Oe(v)){const{data:Q}=u;m=v(Q,u)}else m=v;return $e(m)?{[m]:!0}:m},k=(u,v)=>{(i.value!==u||f.value!==v)&&d.ctx.emit("check-change",t.node.data,u,v),i.value=u,f.value=v},C=u=>{oe(d.store,d.ctx.emit,()=>d.store.value.setCurrentNode(t.node)),d.currentNode.value=t.node,d.props.expandOnClickNode&&x(),d.props.checkOnClickNode&&!t.node.disabled&&A(null,{target:{checked:!t.node.checked}}),d.ctx.emit("node-click",t.node.data,t.node,c,u)},E=u=>{d.instance.vnode.props.onNodeContextmenu&&(u.stopPropagation(),u.preventDefault()),d.ctx.emit("node-contextmenu",u,t.node.data,t.node,c)},x=()=>{t.node.isLeaf||(s.value?(d.ctx.emit("node-collapse",t.node.data,t.node,c),t.node.collapse()):t.node.expand(()=>{e.emit("node-expand",t.node.data,t.node,c)}))},A=(u,v)=>{t.node.setChecked(v.target.checked,!d.props.checkStrictly),le(()=>{const m=d.store.value;d.ctx.emit("check",t.node.data,{checkedNodes:m.getCheckedNodes(),checkedKeys:m.getCheckedKeys(),halfCheckedNodes:m.getHalfCheckedNodes(),halfCheckedKeys:m.getHalfCheckedKeys()})})};return{ns:n,node$:y,tree:d,expanded:s,childNodeRendered:r,oldChecked:i,oldIndeterminate:f,getNodeKey:p,getNodeClass:N,handleSelectChange:k,handleClick:C,handleContextMenu:E,handleExpandIconClick:x,handleCheckChange:A,handleChildNodeExpand:(u,v,m)=>{o(v),d.ctx.emit("node-expand",u,v,m)},handleDragStart:u=>{d.props.draggable&&l.treeNodeDragStart({event:u,treeNode:t})},handleDragOver:u=>{u.preventDefault(),d.props.draggable&&l.treeNodeDragOver({event:u,treeNode:{$el:y.value,node:t.node}})},handleDrop:u=>{u.preventDefault()},handleDragEnd:u=>{d.props.draggable&&l.treeNodeDragEnd(u)},CaretRight:Ie}}});function Ze(t,e,n,o,d,s){const r=L("el-icon"),i=L("el-checkbox"),f=L("loading"),y=L("node-content"),l=L("el-tree-node"),c=L("el-collapse-transition");return ee((D(),z("div",{ref:"node$",class:S([t.ns.b("node"),t.ns.is("expanded",t.expanded),t.ns.is("current",t.node.isCurrent),t.ns.is("hidden",!t.node.visible),t.ns.is("focusable",!t.node.disabled),t.ns.is("checked",!t.node.disabled&&t.node.checked),t.getNodeClass(t.node)]),role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.props.draggable,"data-key":t.getNodeKey(t.node),onClick:I(t.handleClick,["stop"]),onContextmenu:t.handleContextMenu,onDragstart:I(t.handleDragStart,["stop"]),onDragover:I(t.handleDragOver,["stop"]),onDragend:I(t.handleDragEnd,["stop"]),onDrop:I(t.handleDrop,["stop"])},[ne("div",{class:S(t.ns.be("node","content")),style:Le({paddingLeft:(t.node.level-1)*t.tree.props.indent+"px"})},[t.tree.props.icon||t.CaretRight?(D(),F(r,{key:0,class:S([t.ns.be("node","expand-icon"),t.ns.is("leaf",t.node.isLeaf),{expanded:!t.node.isLeaf&&t.expanded}]),onClick:I(t.handleExpandIconClick,["stop"])},{default:X(()=>[(D(),F(Be(t.tree.props.icon||t.CaretRight)))]),_:1},8,["class","onClick"])):R("v-if",!0),t.showCheckbox?(D(),F(i,{key:1,"model-value":t.node.checked,indeterminate:t.node.indeterminate,disabled:!!t.node.disabled,onClick:I(()=>{},["stop"]),onChange:t.handleCheckChange},null,8,["model-value","indeterminate","disabled","onClick","onChange"])):R("v-if",!0),t.node.loading?(D(),F(r,{key:2,class:S([t.ns.be("node","loading-icon"),t.ns.is("loading")])},{default:X(()=>[Z(f)]),_:1},8,["class"])):R("v-if",!0),Z(y,{node:t.node,"render-content":t.renderContent},null,8,["node","render-content"])],6),Z(c,null,{default:X(()=>[!t.renderAfterExpand||t.childNodeRendered?ee((D(),z("div",{key:0,class:S(t.ns.be("node","children")),role:"group","aria-expanded":t.expanded},[(D(!0),z(fe,null,pe(t.node.childNodes,h=>(D(),F(l,{key:t.getNodeKey(h),"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:h,accordion:t.accordion,props:t.props,onNodeExpand:t.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,["aria-expanded"])),[[te,t.expanded]]):R("v-if",!0)]),_:1})],42,["aria-expanded","aria-disabled","aria-checked","draggable","data-key","onClick","onContextmenu","onDragstart","onDragover","onDragend","onDrop"])),[[te,t.node.visible]])}var _e=se(Xe,[["render",Ze],["__file","tree-node.vue"]]);function et({el$:t},e){const n=Y("tree"),o=ce([]),d=ce([]);Me(()=>{r()}),Fe(()=>{o.value=Array.from(t.value.querySelectorAll("[role=treeitem]")),d.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"))}),w(d,i=>{i.forEach(f=>{f.setAttribute("tabindex","-1")})}),ze(t,"keydown",i=>{const f=i.target;if(!f.className.includes(n.b("node")))return;const y=i.code;o.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const l=o.value.indexOf(f);let c;if([B.up,B.down].includes(y)){if(i.preventDefault(),y===B.up){c=l===-1?0:l!==0?l-1:o.value.length-1;const p=c;for(;!e.value.getNode(o.value[c].dataset.key).canFocus;){if(c--,c===p){c=-1;break}c<0&&(c=o.value.length-1)}}else{c=l===-1?0:l<o.value.length-1?l+1:0;const p=c;for(;!e.value.getNode(o.value[c].dataset.key).canFocus;){if(c++,c===p){c=-1;break}c>=o.value.length&&(c=0)}}c!==-1&&o.value[c].focus()}[B.left,B.right].includes(y)&&(i.preventDefault(),f.click());const h=f.querySelector('[type="checkbox"]');[B.enter,B.space].includes(y)&&h&&(i.preventDefault(),h.click())});const r=()=>{var i;o.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),d.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"));const f=t.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);if(f.length){f[0].setAttribute("tabindex","0");return}(i=o.value[0])==null||i.setAttribute("tabindex","0")}}const tt=re({name:"ElTree",components:{ElTreeNode:_e},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:qe}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(t,e){const{t:n}=je(),o=Y("tree"),d=j(Pe,null),s=K(new Ge({key:t.nodeKey,data:t.data,lazy:t.lazy,props:t.props,load:t.load,currentNodeKey:t.currentNodeKey,checkStrictly:t.checkStrictly,checkDescendants:t.checkDescendants,defaultCheckedKeys:t.defaultCheckedKeys,defaultExpandedKeys:t.defaultExpandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:t.defaultExpandAll,filterNodeMethod:t.filterNodeMethod}));s.value.initialize();const r=K(s.value.root),i=K(null),f=K(null),y=K(null),{broadcastExpanded:l}=ye(t),{dragState:c}=Ve({props:t,ctx:e,el$:f,dropIndicator$:y,store:s});et({el$:f},s);const h=Re(()=>{const{childNodes:a}=r.value,g=d?d.hasFilteredOptions!==0:!1;return(!a||a.length===0||a.every(({visible:T})=>!T))&&!g});w(()=>t.currentNodeKey,a=>{s.value.setCurrentNodeKey(a)}),w(()=>t.defaultCheckedKeys,a=>{s.value.setDefaultCheckedKey(a)}),w(()=>t.defaultExpandedKeys,a=>{s.value.setDefaultExpandedKeys(a)}),w(()=>t.data,a=>{s.value.setData(a)},{deep:!0}),w(()=>t.checkStrictly,a=>{s.value.checkStrictly=a});const p=a=>{if(!t.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");s.value.filter(a)},N=a=>ae(t.nodeKey,a.data),k=a=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const g=s.value.getNode(a);if(!g)return[];const T=[g.data];let P=g.parent;for(;P&&P!==r.value;)T.push(P.data),P=P.parent;return T.reverse()},C=(a,g)=>s.value.getCheckedNodes(a,g),E=a=>s.value.getCheckedKeys(a),x=()=>{const a=s.value.getCurrentNode();return a?a.data:null},A=()=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const a=x();return a?a[t.nodeKey]:null},$=(a,g)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");s.value.setCheckedNodes(a,g)},b=(a,g)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");s.value.setCheckedKeys(a,g)},W=(a,g,T)=>{s.value.setChecked(a,g,T)},G=()=>s.value.getHalfCheckedNodes(),M=()=>s.value.getHalfCheckedKeys(),u=(a,g=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");oe(s,e.emit,()=>{l(a),s.value.setUserCurrentNode(a,g)})},v=(a,g=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");oe(s,e.emit,()=>{l(),s.value.setCurrentNodeKey(a,g)})},m=a=>s.value.getNode(a),Q=a=>{s.value.remove(a)},ke=(a,g)=>{s.value.append(a,g)},Ce=(a,g)=>{s.value.insertBefore(a,g)},ve=(a,g)=>{s.value.insertAfter(a,g)},me=(a,g,T)=>{l(g),e.emit("node-expand",a,g,T)},be=(a,g)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");s.value.updateChildren(a,g)};return U("RootTree",{ctx:e,props:t,store:s,root:r,currentNode:i,instance:ge()}),U(He,void 0),{ns:o,store:s,root:r,currentNode:i,dragState:c,el$:f,dropIndicator$:y,isEmpty:h,filter:p,getNodeKey:N,getNodePath:k,getCheckedNodes:C,getCheckedKeys:E,getCurrentNode:x,getCurrentKey:A,setCheckedNodes:$,setCheckedKeys:b,setChecked:W,getHalfCheckedNodes:G,getHalfCheckedKeys:M,setCurrentNode:u,setCurrentKey:v,t:n,getNode:m,remove:Q,append:ke,insertBefore:Ce,insertAfter:ve,handleNodeExpand:me,updateKeyChildren:be}}});function nt(t,e,n,o,d,s){const r=L("el-tree-node");return D(),z("div",{ref:"el$",class:S([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner",t.dragState.dropType==="inner"),{[t.ns.m("highlight-current")]:t.highlightCurrent}]),role:"tree"},[(D(!0),z(fe,null,pe(t.root.childNodes,i=>(D(),F(r,{key:t.getNodeKey(i),node:i,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),t.isEmpty?(D(),z("div",{key:0,class:S(t.ns.e("empty-block"))},[ue(t.$slots,"empty",{},()=>{var i;return[ne("span",{class:S(t.ns.e("empty-text"))},Ue((i=t.emptyText)!=null?i:t.t("el.tree.emptyText")),3)]})],2)):R("v-if",!0),ee(ne("div",{ref:"dropIndicator$",class:S(t.ns.e("drop-indicator"))},null,2),[[te,t.dragState.showDropIndicator]])],2)}var ot=se(tt,[["render",nt],["__file","tree.vue"]]);const st=Ye(ot);export{st as E};
