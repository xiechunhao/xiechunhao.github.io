import{L as H,aC as Q,i as W,b0 as x,b3 as G,r as o,M as F,U as J,R as K,aj as M,o as h,c as $,e as u,a6 as j,b as s,w as l,m as D,a2 as L,d as a,t as _,a8 as C,a$ as Z,a5 as X,e3 as Y,W as ee,F as te}from"./index-C4BxmZrN.js";import{i as le}from"./index-CkGVv88Q.js";import{i as oe}from"./index-DSHqkOzX.js";function se(e){var v;const{top:d,left:n}=e.getBoundingClientRect(),{scrollY:i,scrollX:p}=(v=e.ownerDocument.defaultView)!=null?v:{};return{top:d+(i!=null?i:0),left:n+(p!=null?p:0)}}function O(e,d,n){const i=["ele-tour-popover"];return d&&i.push("ele-tour-modal"),n&&n.popperClass&&typeof n.popperClass=="string"&&i.push(n.popperClass),{trigger:"click",placement:"top",teleported:!1,width:d?440:290,transition:"ele-tour-fast",persistent:!1,effect:"light",isPopover:!0,gpuAcceleration:!0,...n,visible:e!=null?e:!1,popperClass:i.join(" ")}}function ae(e){typeof e.scrollIntoViewIfNeeded=="function"?e.scrollIntoViewIfNeeded(!0):e.scrollIntoView({behavior:"instant",block:"nearest"})}const ne={modelValue:Number,steps:{type:Array,required:!0},mask:{type:Boolean,default:!0},padding:{type:Number,default:6},zIndex:Number,locale:Object},re={"update:modelValue":e=>!0},ue=H({name:"EleTour",components:{ElButton:Q,EleTooltip:W,ReceiverView:x},props:ne,emits:re,setup(e,{emit:d}){const{lang:n}=G("tour",e),i=o(null),p=o(null),v=F({}),f=o(!1),c=F(null),k=o(!1),V=o({}),w=o(!1),S=()=>{var A;if(!e.steps||e.modelValue==null||e.modelValue<0||e.modelValue>=e.steps.length){I();return}if(c.value=e.steps[e.modelValue],!c.value)return;k.value=e.modelValue===e.steps.length-1;const{mask:b,popoverProps:t,target:m,padding:r}=c.value;w.value=b!=null?b:e.mask;const g=typeof m=="function"?m():m;if(g){ae(g);const{width:T,height:y}=g.getBoundingClientRect(),{top:U,left:q}=se(g),P=(A=r!=null?r:e.padding)!=null?A:0;V.value={width:T+P+P+"px",height:y+P+P+"px",top:U-P+"px",left:q-P+"px"}}else V.value={width:"0px",height:"0px",top:"50%",left:"50%"};f.value=!0,v.value=O(!0,!g,t),ee(()=>{z()})},I=()=>{f.value=!1,V.value={},c.value=null,w.value=!1,v.value=O()},R=b=>{d("update:modelValue",b)},B=()=>{e.modelValue!=null&&e.steps!=null&&e.steps.length&&e.modelValue>0&&R(e.modelValue-1)},E=()=>{e.modelValue!=null&&e.steps!=null&&e.steps.length&&e.modelValue<e.steps.length-1&&R(e.modelValue+1)},N=()=>{R(null)},z=()=>{p.value&&p.value.updatePopper()};return J(()=>{S()}),K(()=>e.modelValue,()=>{S()}),{lang:n,triggerRef:i,tooltipRef:p,tooltipProps:v,visible:f,step:c,isLast:k,boxStyle:V,showMask:w,onPrev:B,onNext:E,onFinish:N}}}),ie=(e,d)=>{const n=e.__vccOpts||e;for(const[i,p]of d)n[i]=p;return n},de={key:0,class:"ele-tour-title"},pe={class:"ele-tour-text"},ce={class:"ele-tour-footer"},fe={class:"ele-tour-counter"},me={class:"ele-tour-action"};function ve(e,d,n,i,p,v){const f=M("ElButton"),c=M("ReceiverView"),k=M("EleTooltip");return h(),$(Y,{to:"body"},[u("div",{class:X(["ele-tour",{"show-mask":e.showMask},{"is-open":e.visible}]),style:j({zIndex:e.zIndex})},[u("div",{class:"ele-tour-box",style:j(e.boxStyle)},null,4),u("div",{ref:"triggerRef",class:"ele-tour-reference",style:j(e.boxStyle)},null,4),s(k,Z(e.tooltipProps,{ref:"tooltipRef",virtualRef:e.triggerRef,virtualTriggering:!0,disabled:!e.visible,hideAfter:0}),{body:l(()=>[e.steps&&e.step?(h(),$(c,{key:0,class:"ele-popover-body"},{default:l(()=>[e.step.title?(h(),D("div",de,[L(e.$slots,"title",{step:e.step,current:e.modelValue},()=>[a(_(e.step.title),1)])])):C("",!0),u("div",pe,[L(e.$slots,"text",{step:e.step,current:e.modelValue},()=>[a(_(e.step.description),1)])]),L(e.$slots,"footer",{step:e.step,current:e.modelValue},()=>[u("div",ce,[u("div",fe,_((e.modelValue||0)+1)+"/"+_(e.steps.length),1),u("div",me,[e.isLast?C("",!0):(h(),$(f,{key:0,size:"small",onClick:e.onFinish},{default:l(()=>[a(_(e.lang.skip),1)]),_:1},8,["onClick"])),e.modelValue!==0?(h(),$(f,{key:1,size:"small",onClick:e.onPrev},{default:l(()=>[a(_(e.lang.prev),1)]),_:1},8,["onClick"])):C("",!0),e.isLast?C("",!0):(h(),$(f,{key:2,size:"small",type:"primary",onClick:e.onNext},{default:l(()=>[a(_(e.lang.next),1)]),_:1},8,["onClick"])),e.isLast?(h(),$(f,{key:3,size:"small",type:"primary",onClick:e.onFinish},{default:l(()=>[a(_(e.lang.finish),1)]),_:1},8,["onClick"])):C("",!0)])])])]),_:3})):C("",!0)]),_:3},16,["virtualRef","disabled"])],6)])}const ge=ie(ue,[["render",ve]]),ye={style:{"margin-top":"20px"}},_e={style:{"margin-top":"20px"}},he={style:{"margin-top":"20px"}},ke=u("div",{style:{"margin-bottom":"10px"}},[u("img",{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*P0S-QIRUbsUAAAAAAAAAAABkARQnAQ",style:{height:"184px",width:"100%","object-fit":"cover"}})],-1),Ve={name:"ExtensionTour"},Ce=Object.assign(Ve,{setup(e){const d=o(),n=o(null),i=o(null),p=o(null),v=o([{target:()=>{var t;return(t=n.value)==null?void 0:t.$el},title:"如何进行文件上传",description:"点击这个按钮在弹出框中选择想要上传的文件即可."},{target:()=>{var t;return(t=i.value)==null?void 0:t.$el},title:"如何提交数据",description:"数据录入完成后点击这个按钮即可提交数据到后台."},{target:()=>{var t;return(t=p.value)==null?void 0:t.$el},title:"如何进行更多的操作",description:"鼠标移入到此按钮上即可展示出更多的操作功能."}]),f=()=>{d.value=0},c=o(),k=o(null),V=o(null),w=o(null),S=o([{target:()=>{var t;return(t=k.value)==null?void 0:t.$el},title:"如何进行文件上传",description:"点击这个按钮在弹出框中选择想要上传的文件即可.",popoverProps:{placement:"top-start"}},{target:()=>{var t;return(t=V.value)==null?void 0:t.$el},title:"如何提交数据",description:"数据录入完成后点击这个按钮即可提交数据到后台.",popoverProps:{placement:"bottom"}},{target:()=>{var t;return(t=w.value)==null?void 0:t.$el},title:"如何进行更多的操作",description:"鼠标移入到此按钮上即可展示出更多的操作功能.",popoverProps:{placement:"top-end"}}]),I=()=>{c.value=0},R=o(),B=o(null),E=o(null),N=o(null),z=o([{title:"欢迎使用 EleAdminPlus 系统",description:"下面将为您介绍一些常用功能的操作说明, 如果之前已经为您介绍过, 您可以直接点击跳过结束指引."},{target:()=>{var t;return(t=B.value)==null?void 0:t.$el},title:"如何进行文件上传",description:"点击这个按钮在弹出框中选择想要上传的文件即可."},{target:()=>{var t;return(t=E.value)==null?void 0:t.$el},title:"如何提交数据",description:"数据录入完成后点击这个按钮即可提交数据到后台.",mask:!1},{target:()=>{var t;return(t=N.value)==null?void 0:t.$el},title:"如何进行更多的操作",description:"鼠标移入到此按钮上即可展示出更多的操作功能."}]),b=()=>{R.value=0};return(t,m)=>{const r=Q,g=ge,A=le,T=oe;return h(),$(T,null,{default:l(()=>[s(A,{header:"基本用法"},{default:l(()=>[u("div",null,[s(r,{type:"primary",onClick:f},{default:l(()=>[a("开始引导")]),_:1})]),u("div",ye,[s(r,{ref_key:"uploadRef1",ref:n},{default:l(()=>[a("Upload")]),_:1},512),s(r,{ref_key:"saveRef1",ref:i,type:"primary"},{default:l(()=>[a("Save")]),_:1},512),s(r,{ref_key:"moreRef1",ref:p},{default:l(()=>[a("More")]),_:1},512)]),s(g,{modelValue:d.value,"onUpdate:modelValue":m[0]||(m[0]=y=>d.value=y),steps:v.value},null,8,["modelValue","steps"])]),_:1}),s(A,{header:"不带遮罩层"},{default:l(()=>[u("div",null,[s(r,{type:"primary",onClick:I},{default:l(()=>[a("开始引导")]),_:1})]),u("div",_e,[s(r,{ref_key:"uploadRef2",ref:k},{default:l(()=>[a("Upload")]),_:1},512),s(r,{ref_key:"saveRef2",ref:V,type:"primary"},{default:l(()=>[a("Save")]),_:1},512),s(r,{ref_key:"moreRef2",ref:w},{default:l(()=>[a("More")]),_:1},512)]),s(g,{modelValue:c.value,"onUpdate:modelValue":m[1]||(m[1]=y=>c.value=y),steps:S.value,mask:!1},null,8,["modelValue","steps"])]),_:1}),s(A,{header:"混合弹窗等多种形式"},{default:l(()=>[u("div",null,[s(r,{type:"primary",onClick:b},{default:l(()=>[a("开始引导")]),_:1})]),u("div",he,[s(r,{ref_key:"uploadRef3",ref:B},{default:l(()=>[a("Upload")]),_:1},512),s(r,{ref_key:"saveRef3",ref:E,type:"primary"},{default:l(()=>[a("Save")]),_:1},512),s(r,{ref_key:"moreRef3",ref:N},{default:l(()=>[a("More")]),_:1},512)]),s(g,{modelValue:R.value,"onUpdate:modelValue":m[2]||(m[2]=y=>R.value=y),steps:z.value},{text:l(({step:y,current:U})=>[U===0?(h(),D(te,{key:0},[ke,u("div",null,_(y.description),1)],64)):C("",!0)]),_:1},8,["modelValue","steps"])]),_:1})]),_:1})}}});export{Ce as default};
