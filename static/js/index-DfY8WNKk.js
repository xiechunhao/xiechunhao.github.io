/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 17:39:02 
 */
import{c as S,s as P,C as T}from"./index-D5j7Mtop.js";import{d as B,p as M,r as C,Q as N,P as R,o as i,b as w,W as o,T as n,u as l,S as y,a3 as D,aj as $,a8 as m,a1 as k,Y as I,h as L,aO as j,aq as q,ao as A,ap as G,bm as Q,bn as W,a9 as Y,au as z}from"./vsv-element-plus-DDEqdpLt.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const H={class:"dialog-container"},le=B({name:"Dialog",__name:"index",setup(J){const v=S(),{theme:f}=P(v),e=M({showFullscreen:!0,animated:!0,draggable:!0,width:30,title:"温馨提示",content:"昨夜西风凋碧树，独上高楼望尽天涯路",alignCenter:!1,modal:!0,fullscreen:!1,center:!1,closeOnClickModal:!1,closeOnPressEscape:!1,theme:"default",top:15}),u=C(!1),x=C([{label:"default",title:"默认"},{label:"plain",title:"简约"},{label:"primary",title:"主题色"}]),_=b=>{e.theme=b},V=()=>{u.value=!0},E=()=>{e.showFullscreen=!0,e.animated=!0,e.draggable=!0,e.width=30,e.title="温馨提示",e.content="昨夜西风凋碧树，独上高楼，望尽天涯路",e.alignCenter=!1,e.modal=!0,e.center=!1,e.closeOnClickModal=!1,e.closeOnPressEscape=!1,e.theme="default"};let p;return N(()=>{f.value.themeName==="technology"&&(e.theme="default"),p=setTimeout(()=>{u.value=!0},1e3)}),R(()=>{p&&clearTimeout(p)}),(b,t)=>{const g=j,s=q,U=A,O=G,d=Q,c=W,r=Y,h=z,F=T;return i(),w("div",H,[o(h,{"label-position":"top",model:l(e),style:{"max-width":"380px"}},{default:n(()=>[o(s,{label:"标题"},{default:n(()=>[o(g,{modelValue:l(e).title,"onUpdate:modelValue":t[0]||(t[0]=a=>l(e).title=a),style:{width:"345px"}},null,8,["modelValue"])]),_:1}),o(s,{label:"内容"},{default:n(()=>[o(g,{modelValue:l(e).content,"onUpdate:modelValue":t[1]||(t[1]=a=>l(e).content=a),style:{width:"345px"},type:"textarea"},null,8,["modelValue"])]),_:1}),l(f).themeName!="technology"?(i(),y(s,{key:0,label:"主题配置"},{default:n(()=>[o(O,{modelValue:l(e).theme,"onUpdate:modelValue":t[2]||(t[2]=a=>l(e).theme=a),onChange:_},{default:n(()=>[(i(!0),w(D,null,$(l(x),a=>(i(),y(U,{key:a.label,label:a.label,value:a.label,onChange:V},{default:n(()=>[m(k(a.title),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):I("",!0),o(s,{label:"基础配置"},{default:n(()=>[o(d,{modelValue:l(e).showFullscreen,"onUpdate:modelValue":t[3]||(t[3]=a=>l(e).showFullscreen=a),label:"开启全屏按钮"},null,8,["modelValue"]),o(d,{modelValue:l(e).draggable,"onUpdate:modelValue":t[4]||(t[4]=a=>l(e).draggable=a),class:"hidden-xs-only",label:"开启拖拽"},null,8,["modelValue"]),o(d,{modelValue:l(e).modal,"onUpdate:modelValue":t[5]||(t[5]=a=>l(e).modal=a),label:"开启遮罩"},null,8,["modelValue"]),o(d,{modelValue:l(e).fullscreen,"onUpdate:modelValue":t[6]||(t[6]=a=>l(e).fullscreen=a),label:"全屏显示弹窗"},null,8,["modelValue"]),o(d,{modelValue:l(e).animated,"onUpdate:modelValue":t[7]||(t[7]=a=>l(e).animated=a),label:"开启动画"},null,8,["modelValue"])]),_:1}),o(s,{label:"其他配置"},{default:n(()=>[o(d,{modelValue:l(e).alignCenter,"onUpdate:modelValue":t[8]||(t[8]=a=>l(e).alignCenter=a),label:"开启垂直水平居中"},null,8,["modelValue"]),o(d,{modelValue:l(e).center,"onUpdate:modelValue":t[9]||(t[9]=a=>l(e).center=a),label:"开启header、footer居中"},null,8,["modelValue"]),o(d,{modelValue:l(e).closeOnClickModal,"onUpdate:modelValue":t[10]||(t[10]=a=>l(e).closeOnClickModal=a),label:"开启点击遮罩关闭"},null,8,["modelValue"]),o(d,{modelValue:l(e).closeOnPressEscape,"onUpdate:modelValue":t[11]||(t[11]=a=>l(e).closeOnPressEscape=a),label:"开启ESC按键关闭"},null,8,["modelValue"])]),_:1}),o(s,{class:"hidden-xs-only",label:"弹窗宽度（30% - 60%）"},{default:n(()=>[o(c,{modelValue:l(e).width,"onUpdate:modelValue":t[12]||(t[12]=a=>l(e).width=a),disabled:l(e).fullscreen,max:60,min:30,style:{width:"345px"}},null,8,["modelValue","disabled"])]),_:1}),o(s,{label:"弹窗距离顶部（15vh - 30vh）"},{default:n(()=>[o(c,{modelValue:l(e).top,"onUpdate:modelValue":t[13]||(t[13]=a=>l(e).top=a),disabled:l(e).alignCenter,max:30,min:15,style:{width:"345px"}},null,8,["modelValue","disabled"])]),_:1}),o(s,{label:"操作"},{default:n(()=>[o(r,{type:"primary",onClick:V},{default:n(()=>t[17]||(t[17]=[m("打开弹窗")])),_:1}),o(r,{type:"warning",onClick:E},{default:n(()=>t[18]||(t[18]=[m("重置")])),_:1})]),_:1})]),_:1},8,["model"]),o(F,{modelValue:l(u),"onUpdate:modelValue":t[16]||(t[16]=a=>L(u)?u.value=a:null),"align-center":l(e).alignCenter,animated:l(e).animated,"append-to-body":"",center:l(e).center,"close-on-click-modal":l(e).closeOnClickModal,"close-on-press-escape":l(e).closeOnPressEscape,"destroy-on-close":!0,draggable:l(e).draggable,fullscreen:l(e).fullscreen,modal:l(e).modal,"show-fullscreen":l(e).showFullscreen,theme:l(e).theme,title:l(e).title,top:l(e).top+"vh",width:l(e).width+"%"},{footer:n(()=>[o(r,{onClick:t[14]||(t[14]=a=>u.value=!1)},{default:n(()=>t[19]||(t[19]=[m("取 消")])),_:1}),o(r,{type:"primary",onClick:t[15]||(t[15]=a=>u.value=!1)},{default:n(()=>t[20]||(t[20]=[m("确 定")])),_:1})]),default:n(()=>[m(k(l(e).content)+" ",1)]),_:1},8,["modelValue","align-center","animated","center","close-on-click-modal","close-on-press-escape","draggable","fullscreen","modal","show-fullscreen","theme","title","top","width"])])}}});export{le as default};
