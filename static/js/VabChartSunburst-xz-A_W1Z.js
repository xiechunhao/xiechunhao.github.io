/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{d,a0 as e,F as a,o as h,D as o,V as n,M as v,u as s}from"./vsv-element-plus-CbS2IxKo.js";const b=d({name:"VabChartSunburst",__name:"VabChartSunburst",props:{title:{type:String,default:""}},setup(r){let l;const u=reactive({grid:{top:20,right:20,bottom:20,left:20},tooltip:{trigger:"item"},series:{type:"sunburst",data:[{children:[{value:e(0,40),children:[{value:e(0,40)},{value:e(0,40),children:[{value:e(0,40)}]},{children:[{value:e(0,40)}]}]},{value:e(0,40),children:[{value:e(0,40),children:[{value:e(0,40)},{value:e(0,40)},{value:e(0,40)},{value:e(0,40)}]},{value:e(0,40),children:[{value:e(0,40)}]},{children:[{value:e(0,40)}]}]}]},{value:e(0,40),children:[{value:e(0,40),children:[{value:e(0,40)},{children:[{value:e(0,40)}]}]},{children:[{value:e(0,40),children:[{value:e(0,40)},{value:e(0,40)}]}]}]},{value:e(0,40),children:[{children:[{value:e(0,40)},{value:e(0,40),children:[{value:e(0,40)},{value:e(0,40)}]},{value:e(0,40),children:[{value:e(0,40)},{value:e(0,40)}]}]}]},{children:[{value:e(0,40),children:[{value:e(0,40)},{value:e(0,40),children:[{value:e(0,40)}]},{value:e(0,40)}]},{value:e(0,40),children:[{value:e(0,40)},{children:[{value:e(0,40)}]},{value:e(0,40)}]}]}],radius:["10%","100%"],label:{rotate:"radial"}}});return onMounted(()=>{l=setInterval(()=>{u.series.data=[{children:[{value:e(0,40),children:[{value:e(0,40)},{value:e(0,40),children:[{value:e(0,40)}]},{children:[{value:e(0,40)}]}]},{value:e(0,40),children:[{value:e(0,40),children:[{value:e(0,40)},{value:e(0,40)},{value:e(0,40)},{value:e(0,40)}]},{value:e(0,40),children:[{value:e(0,40)}]},{children:[{value:e(0,40)}]}]}]},{value:e(0,40),children:[{value:e(0,40),children:[{value:e(0,40)},{children:[{value:e(0,40)}]}]},{children:[{value:e(0,40),children:[{value:e(0,40)},{value:e(0,40)}]}]}]},{value:e(0,40),children:[{children:[{value:e(0,40)},{value:e(0,40),children:[{value:e(0,40)},{value:e(0,40)}]},{value:e(0,40),children:[{value:e(0,40)},{value:e(0,40)}]}]}]},{children:[{value:e(0,40),children:[{value:e(0,40)},{value:e(0,40),children:[{value:e(0,40)}]},{value:e(0,40)}]},{value:e(0,40),children:[{value:e(0,40)},{children:[{value:e(0,40)}]},{value:e(0,40)}]}]}]},3e3)}),onBeforeUnmount(()=>{l&&clearInterval(l)}),(p,m)=>{const i=a("vab-chart"),t=a("vab-card"),c=a("el-col");return h(),o(c,{lg:8,md:12,sm:24,xl:6,xs:24},{default:n(()=>[v(t,{"body-style":{height:"240px"},skeleton:"",title:r.title},{default:n(()=>[v(i,{option:s(u)},null,8,["option"])]),_:1},8,["title"])]),_:1})}}});export{b as default};
