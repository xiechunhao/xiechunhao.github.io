/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 16:13:56 
 */
import{d as x,r as f,P as h,o as b,b as k,W as t,T as a,u as o,h as w,a8 as z,a1 as C,e as n,Z as s,ae as i,ax as l,bm as V,a9 as g}from"./vsv-element-plus-OoOmiKKG.js";const B={class:"transition-container no-transition-container"},T={style:{display:"flex","flex-wrap":"wrap","margin-top":"20px"}},y={class:"transition-box"},D={class:"transition-box"},E={class:"transition-box"},N={class:"transition-box"},I={class:"transition-box"},R=x({__name:"index",setup(S){const e=f(!0),c=f(!1);let d;const p=_=>{_?d=setInterval(()=>{e.value=!e.value},1500):clearTimeout(d)};return h(()=>{d&&clearInterval(d)}),(_,r)=>{const v=V,m=g;return b(),k("div",B,[t(m,null,{default:a(()=>[t(v,{modelValue:o(c),"onUpdate:modelValue":r[0]||(r[0]=u=>w(c)?c.value=u:null),label:"循环播放",onChange:p},null,8,["modelValue"])]),_:1}),t(m,{onClick:r[1]||(r[1]=u=>e.value=!o(e))},{default:a(()=>[z(C(o(e)?"点击隐藏":"点击显示"),1)]),_:1}),n("div",T,[t(l,{name:"el-fade-in-linear"},{default:a(()=>[s(n("div",y,"fade-in-linear",512),[[i,o(e)]])]),_:1}),t(l,{name:"el-fade-in"},{default:a(()=>[s(n("div",D,"fade-in",512),[[i,o(e)]])]),_:1}),t(l,{name:"el-zoom-in-center"},{default:a(()=>[s(n("div",E,"zoom-in-center",512),[[i,o(e)]])]),_:1}),t(l,{name:"el-zoom-in-top"},{default:a(()=>[s(n("div",N,"zoom-in-top",512),[[i,o(e)]])]),_:1}),t(l,{name:"el-zoom-in-bottom"},{default:a(()=>[s(n("div",I,"zoom-in-bottom",512),[[i,o(e)]])]),_:1})])])}}});export{R as default};
