/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 21:23:19 
 */
import{d as V,B as d,o as v,b,K as n,S as a,Y as p,e as w,u as m,I as f,F as x,E as C}from"./vsv-element-plus-CleF0dO9.js";const g=V({__name:"DrawerNestedDrawer",setup(B){const l=ref(!1),o=ref(!1),i=r=>{C.confirm("您还有未保存的数据，确定要继续吗？",{draggable:!0}).then(()=>{r()}).catch(()=>{})};return(r,e)=>{const s=d("el-button"),u=d("el-drawer");return v(),b(x,null,[n(s,{type:"primary",onClick:e[0]||(e[0]=t=>l.value=!0)},{default:a(()=>e[4]||(e[4]=[p("打开")])),_:1}),n(u,{modelValue:m(l),"onUpdate:modelValue":e[3]||(e[3]=t=>f(l)?l.value=t:null),"append-to-body":"",size:"288px",title:"我是外抽屉"},{default:a(()=>[w("div",null,[n(s,{onClick:e[1]||(e[1]=t=>o.value=!0)},{default:a(()=>e[5]||(e[5]=[p("点我")])),_:1}),n(u,{modelValue:m(o),"onUpdate:modelValue":e[2]||(e[2]=t=>f(o)?o.value=t:null),"append-to-body":"","before-close":i,size:"188px",title:"我是内抽屉"},null,8,["modelValue"])])]),_:1},8,["modelValue"])],64)}}});export{g as default};
