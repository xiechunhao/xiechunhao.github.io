/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{d as x,b as h,L as t,e as a,V as n,D as f,u as o,ay as s,o as b,G as V,_ as k,Z as w,Q as i,R as l}from"./vsv-element-plus-DQNbQgVr.js";const z={class:"transition-container no-transition-container"},C={style:{display:"flex","flex-wrap":"wrap","margin-top":"20px"}},g={class:"transition-box"},y={class:"transition-box"},D={class:"transition-box"},B={class:"transition-box"},N={class:"transition-box"},R=x({__name:"index",setup(T){const e=ref(!0),c=ref(!1);let r;const p=_=>{_?r=setInterval(()=>{e.value=!e.value},1500):clearTimeout(r)};return onDeactivated(()=>{r&&clearInterval(r)}),(_,d)=>{const v=f("el-checkbox"),m=f("el-button");return b(),h("div",z,[t(m,null,{default:n(()=>[t(v,{modelValue:o(c),"onUpdate:modelValue":d[0]||(d[0]=u=>V(c)?c.value=u:null),label:"循环播放",onChange:p},null,8,["modelValue"])]),_:1}),t(m,{onClick:d[1]||(d[1]=u=>e.value=!o(e))},{default:n(()=>[k(w(o(e)?"点击隐藏":"点击显示"),1)]),_:1}),a("div",C,[t(s,{name:"el-fade-in-linear"},{default:n(()=>[i(a("div",g,"fade-in-linear",512),[[l,o(e)]])]),_:1}),t(s,{name:"el-fade-in"},{default:n(()=>[i(a("div",y,"fade-in",512),[[l,o(e)]])]),_:1}),t(s,{name:"el-zoom-in-center"},{default:n(()=>[i(a("div",D,"zoom-in-center",512),[[l,o(e)]])]),_:1}),t(s,{name:"el-zoom-in-top"},{default:n(()=>[i(a("div",B,"zoom-in-top",512),[[l,o(e)]])]),_:1}),t(s,{name:"el-zoom-in-bottom"},{default:n(()=>[i(a("div",N,"zoom-in-bottom",512),[[l,o(e)]])]),_:1})])])}}});export{R as default};
