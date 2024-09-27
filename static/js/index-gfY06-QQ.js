/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:39:13 
 */
import{a as M}from"./index-BKznZfTt.js";import{d as N,N as s,o as p,b as w,T as a,$ as n,u as l,M as y,P,aa as T,a4 as r,a3 as v,_ as S,k as D}from"./vsv-element-plus-CxGOTlXz.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const B={class:"dialog-container"},q=N({name:"Dialog",__name:"index",setup(R){const k=M(),{theme:V}=storeToRefs(k),e=reactive({showFullscreen:!0,animated:!0,draggable:!0,width:30,title:"温馨提示",content:"昨夜西风凋碧树，独上高楼望尽天涯路",alignCenter:!1,modal:!0,fullscreen:!1,center:!1,closeOnClickModal:!1,closeOnPressEscape:!1,theme:"default",top:15}),m=ref(!1),x=ref([{label:"default",title:"默认"},{label:"plain",title:"简约"},{label:"primary",title:"主题色"}]),U=g=>{e.theme=g},b=()=>{m.value=!0},_=()=>{e.showFullscreen=!0,e.animated=!0,e.draggable=!0,e.width=30,e.title="温馨提示",e.content="昨夜西风凋碧树，独上高楼，望尽天涯路",e.alignCenter=!1,e.modal=!0,e.center=!1,e.closeOnClickModal=!1,e.closeOnPressEscape=!1,e.theme="default"};let f;return onActivated(()=>{V.value.themeName==="technology"&&(e.theme="default"),f=setTimeout(()=>{m.value=!0},1e3)}),onDeactivated(()=>{f&&clearTimeout(f)}),(g,t)=>{const c=s("el-input"),u=s("el-form-item"),O=s("el-radio-button"),h=s("el-radio-group"),d=s("el-checkbox"),C=s("el-slider"),i=s("el-button"),E=s("el-form"),F=s("vab-dialog");return p(),w("div",B,[a(E,{"label-position":"top",model:l(e),style:{"max-width":"380px"}},{default:n(()=>[a(u,{label:"标题"},{default:n(()=>[a(c,{modelValue:l(e).title,"onUpdate:modelValue":t[0]||(t[0]=o=>l(e).title=o),style:{width:"345px"}},null,8,["modelValue"])]),_:1}),a(u,{label:"内容"},{default:n(()=>[a(c,{modelValue:l(e).content,"onUpdate:modelValue":t[1]||(t[1]=o=>l(e).content=o),style:{width:"345px"},type:"textarea"},null,8,["modelValue"])]),_:1}),l(V).themeName!="technology"?(p(),y(u,{key:0,label:"主题配置"},{default:n(()=>[a(h,{modelValue:l(e).theme,"onUpdate:modelValue":t[2]||(t[2]=o=>l(e).theme=o),onChange:U},{default:n(()=>[(p(!0),w(P,null,T(l(x),o=>(p(),y(O,{key:o.label,label:o.label,value:o.label,onChange:b},{default:n(()=>[r(v(o.title),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):S("",!0),a(u,{label:"基础配置"},{default:n(()=>[a(d,{modelValue:l(e).showFullscreen,"onUpdate:modelValue":t[3]||(t[3]=o=>l(e).showFullscreen=o),label:"开启全屏按钮"},null,8,["modelValue"]),a(d,{modelValue:l(e).draggable,"onUpdate:modelValue":t[4]||(t[4]=o=>l(e).draggable=o),class:"hidden-xs-only",label:"开启拖拽"},null,8,["modelValue"]),a(d,{modelValue:l(e).modal,"onUpdate:modelValue":t[5]||(t[5]=o=>l(e).modal=o),label:"开启遮罩"},null,8,["modelValue"]),a(d,{modelValue:l(e).fullscreen,"onUpdate:modelValue":t[6]||(t[6]=o=>l(e).fullscreen=o),label:"全屏显示弹窗"},null,8,["modelValue"]),a(d,{modelValue:l(e).animated,"onUpdate:modelValue":t[7]||(t[7]=o=>l(e).animated=o),label:"开启动画"},null,8,["modelValue"])]),_:1}),a(u,{label:"其他配置"},{default:n(()=>[a(d,{modelValue:l(e).alignCenter,"onUpdate:modelValue":t[8]||(t[8]=o=>l(e).alignCenter=o),label:"开启垂直水平居中"},null,8,["modelValue"]),a(d,{modelValue:l(e).center,"onUpdate:modelValue":t[9]||(t[9]=o=>l(e).center=o),label:"开启header、footer居中"},null,8,["modelValue"]),a(d,{modelValue:l(e).closeOnClickModal,"onUpdate:modelValue":t[10]||(t[10]=o=>l(e).closeOnClickModal=o),label:"开启点击遮罩关闭"},null,8,["modelValue"]),a(d,{modelValue:l(e).closeOnPressEscape,"onUpdate:modelValue":t[11]||(t[11]=o=>l(e).closeOnPressEscape=o),label:"开启ESC按键关闭"},null,8,["modelValue"])]),_:1}),a(u,{class:"hidden-xs-only",label:"弹窗宽度（30% - 60%）"},{default:n(()=>[a(C,{modelValue:l(e).width,"onUpdate:modelValue":t[12]||(t[12]=o=>l(e).width=o),disabled:l(e).fullscreen,max:60,min:30,style:{width:"345px"}},null,8,["modelValue","disabled"])]),_:1}),a(u,{label:"弹窗距离顶部（15vh - 30vh）"},{default:n(()=>[a(C,{modelValue:l(e).top,"onUpdate:modelValue":t[13]||(t[13]=o=>l(e).top=o),disabled:l(e).alignCenter,max:30,min:15,style:{width:"345px"}},null,8,["modelValue","disabled"])]),_:1}),a(u,{label:"操作"},{default:n(()=>[a(i,{type:"primary",onClick:b},{default:n(()=>t[17]||(t[17]=[r("打开弹窗")])),_:1}),a(i,{type:"warning",onClick:_},{default:n(()=>t[18]||(t[18]=[r("重置")])),_:1})]),_:1})]),_:1},8,["model"]),a(F,{modelValue:l(m),"onUpdate:modelValue":t[16]||(t[16]=o=>D(m)?m.value=o:null),"align-center":l(e).alignCenter,animated:l(e).animated,"append-to-body":"",center:l(e).center,"close-on-click-modal":l(e).closeOnClickModal,"close-on-press-escape":l(e).closeOnPressEscape,"destroy-on-close":!0,draggable:l(e).draggable,fullscreen:l(e).fullscreen,modal:l(e).modal,"show-fullscreen":l(e).showFullscreen,theme:l(e).theme,title:l(e).title,top:l(e).top+"vh",width:l(e).width+"%"},{footer:n(()=>[a(i,{onClick:t[14]||(t[14]=o=>m.value=!1)},{default:n(()=>t[19]||(t[19]=[r("取 消")])),_:1}),a(i,{type:"primary",onClick:t[15]||(t[15]=o=>m.value=!1)},{default:n(()=>t[20]||(t[20]=[r("确 定")])),_:1})]),default:n(()=>[r(v(l(e).content)+" ",1)]),_:1},8,["modelValue","align-center","animated","center","close-on-click-modal","close-on-press-escape","draggable","fullscreen","modal","show-fullscreen","theme","title","top","width"])])}}});export{q as default};
