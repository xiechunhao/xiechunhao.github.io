import{L as P,k as j,aI as A,g as L,i as w,bE as D,f6 as M,r as f,a0 as N,$ as U,aj as p,o as s,m as C,F as W,n as q,c as m,w as v,d as G,t as z,a6 as E,a8 as k,bU as I,bV as O,a2 as H,b as h,a5 as B,a$ as J,W as $}from"./index-C4BxmZrN.js";const K={modelValue:Array,type:String,color:String,size:String,effect:String,round:Boolean,placeholder:String,inputStyle:Object,inputTagStyle:Object,buttonStyle:Object,itemStyle:Object,validator:Function,beforeRemove:Function,tooltipProps:Object,readonly:Boolean,disabled:Boolean},Q={"update:modelValue":e=>!0},X=P({name:"EleEditTag",components:{ElTag:j,ElInput:A,ElIcon:L,EleTooltip:w,PlusOutlined:D,LoadingOutlined:M},props:K,emits:Q,setup(e,{emit:i}){const u=f(null),t=f(!1),a=f(""),r=f(""),n=f(!1),o=f(!1),d=f(!1),y=l=>{if(o.value=!1,t.value=!1,a.value="",r.value="",n.value=!1,l){const g=e.modelValue?[...e.modelValue]:[];g.push(l),i("update:modelValue",g)}},b=l=>{if(!e.modelValue)return;const g=[...e.modelValue];g.splice(l,1),i("update:modelValue",g)},V=()=>{setTimeout(()=>{u.value&&u.value.focus()},0)},c=()=>{e.disabled||(o.value=!1,r.value="",t.value=!0,$(()=>{V()}))},T=l=>{if(typeof e.beforeRemove!="function"){b(l);return}e.beforeRemove(l,e.modelValue?e.modelValue[l]:void 0).then(()=>{b(l)}).catch(()=>{})},S=()=>{if(a.value){if(typeof e.validator!="function"){y(a.value);return}n.value=!0,e.validator(a.value).then(()=>{y(a.value)}).catch(l=>{n.value=!1,l&&l.message!=null&&l.message!==""&&(r.value=l.message,t.value&&!d.value&&(o.value=!0)),$(()=>{V()})})}},R=()=>{o.value=!1,a.value||(t.value=!1,r.value="")},F=()=>{r.value&&!o.value&&t.value&&!d.value&&(o.value=!0)};return N(()=>{d.value=!0,o.value=!1}),U(()=>{d.value=!1}),{inputRef:u,isEdit:t,inputValue:a,errorMessage:r,loading:n,tooltipVisible:o,onAddClick:c,onTagClose:T,onInputChange:S,onInputBlur:R,onInputFocus:F}}}),Y=(e,i)=>{const u=e.__vccOpts||e;for(const[t,a]of i)u[t]=a;return u},Z={key:0};function _(e,i,u,t,a,r){const n=p("ElTag"),o=p("PlusOutlined"),d=p("ElIcon"),y=p("LoadingOutlined"),b=p("ElInput"),V=p("EleTooltip");return s(),C("div",{class:B(["ele-edit-tag",{"is-large":e.size==="large"},{"is-small":e.size==="small"},{"is-disabled":e.disabled},{"is-readonly":e.readonly}])},[e.modelValue?(s(!0),C(W,{key:0},q(e.modelValue,(c,T)=>(s(),m(n,{key:T+"-"+c,type:e.type,color:e.color,size:e.size,effect:e.effect,round:e.round,closable:!(e.readonly||e.disabled),disableTransitions:!0,style:E(e.itemStyle),onClose:S=>e.onTagClose(T)},{default:v(()=>[G(z(c),1)]),_:2},1032,["type","color","size","effect","round","closable","style","onClose"]))),128)):k("",!0),e.readonly?k("",!0):I((s(),m(n,{key:1,type:"info",size:e.size,round:e.round,disableTransitions:!0,class:"ele-edit-tag-add",style:E(e.buttonStyle),onClick:e.onAddClick},{default:v(()=>[H(e.$slots,"placeholder",{},()=>[e.placeholder?(s(),C("span",Z,z(e.placeholder),1)):(s(),m(d,{key:1,class:"ele-edit-tag-add-icon"},{default:v(()=>[h(o)]),_:1}))])]),_:3},8,["size","round","style","onClick"])),[[O,!e.isEdit]]),e.readonly?k("",!0):I((s(),m(n,{key:2,size:e.size,round:e.round,disableTransitions:!0,class:B(["ele-edit-tag-input",{"is-error":!!e.errorMessage}]),style:E(e.inputTagStyle)},{default:v(()=>[h(b,{ref:"inputRef",disabled:e.loading,modelValue:e.inputValue,"onUpdate:modelValue":i[0]||(i[0]=c=>e.inputValue=c),style:E(e.inputStyle),onChange:e.onInputChange,onBlur:e.onInputBlur,onFocus:e.onInputFocus},{suffix:v(()=>[e.loading?(s(),m(d,{key:0,class:"is-loading"},{default:v(()=>[h(y)]),_:1})):k("",!0)]),_:1},8,["disabled","modelValue","style","onChange","onBlur","onFocus"])]),_:1},8,["size","round","class","style"])),[[O,e.isEdit]]),h(V,J({offset:7,hideAfter:0,trigger:"click",disabled:!e.tooltipVisible},e.tooltipProps||{},{virtualTriggering:!0,virtualRef:e.inputRef?e.inputRef.$el:void 0,content:e.errorMessage,visible:e.tooltipVisible}),null,16,["disabled","virtualRef","content","visible"])],2)}const ee=Y(X,[["render",_]]);export{ee as i};
