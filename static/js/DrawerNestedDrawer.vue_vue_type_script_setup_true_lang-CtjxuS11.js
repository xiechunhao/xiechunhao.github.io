/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 16:08:17 
 */
import{d as V,r as d,o as w,b as v,W as o,T as n,a8 as p,e as x,u as m,h as i,a3 as b,I as _,a9 as B,aw as C}from"./vsv-element-plus-DDEqdpLt.js";const y=V({__name:"DrawerNestedDrawer",setup(g){const a=d(!1),l=d(!1),f=r=>{_.confirm("您还有未保存的数据，确定要继续吗？",{draggable:!0}).then(()=>{r()}).catch(()=>{})};return(r,e)=>{const s=B,u=C;return w(),v(b,null,[o(s,{type:"primary",onClick:e[0]||(e[0]=t=>a.value=!0)},{default:n(()=>e[4]||(e[4]=[p("打开")])),_:1}),o(u,{modelValue:m(a),"onUpdate:modelValue":e[3]||(e[3]=t=>i(a)?a.value=t:null),"append-to-body":"",size:"288px",title:"我是外抽屉"},{default:n(()=>[x("div",null,[o(s,{onClick:e[1]||(e[1]=t=>l.value=!0)},{default:n(()=>e[5]||(e[5]=[p("点我")])),_:1}),o(u,{modelValue:m(l),"onUpdate:modelValue":e[2]||(e[2]=t=>i(l)?l.value=t:null),"append-to-body":"","before-close":f,size:"188px",title:"我是内抽屉"},null,8,["modelValue"])])]),_:1},8,["modelValue"])],64)}}});export{y as _};
