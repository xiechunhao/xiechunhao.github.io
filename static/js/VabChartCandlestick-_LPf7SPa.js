/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{a as p}from"./index-BL5slC2T.js";import{d as u,_ as e,A as _,U as l,B as a,o as f,K as s,u as b}from"./vsv-element-plus-D84I6Pnf.js";import"./vsv-icon-DZABqXig.js";import"./vsv-nprogress-0btfRK0G.js";const S=u({name:"VabChartCandlestick",__name:"VabChartCandlestick",props:{title:{type:String,default:""}},setup(n){const i=p(),{theme:t}=storeToRefs(i);let r;const o=reactive({grid:{top:20,right:20,bottom:40,left:40},tooltip:{trigger:"item"},xAxis:{data:["2017-10-24","2017-10-25","2017-10-26","2017-10-27"]},yAxis:{},series:{type:"candlestick",data:[[e(50,100),e(50,100),e(50,100),e(50,100)],[e(50,100),e(50,100),e(50,100),e(50,100)],[e(50,100),e(50,100),e(50,100),e(50,100)],[e(50,100),e(50,100),e(50,100),e(50,100)]],itemStyle:{color:t.value.color,borderColor:t.value.color,color0:"#f2637b",borderColor0:"#f2637b"}}});return watch(t.value,()=>{o.series.itemStyle.color=t.value.color,o.series.itemStyle.borderColor=t.value.color},{immediate:!0}),onMounted(()=>{r=setInterval(()=>{o.series.data=[[e(50,100),e(50,100),e(50,100),e(50,100)],[e(50,100),e(50,100),e(50,100),e(50,100)],[e(50,100),e(50,100),e(50,100),e(50,100)],[e(50,100),e(50,100),e(50,100),e(50,100)]]},3e3)}),onBeforeUnmount(()=>{r&&clearInterval(r)}),(v,h)=>{const c=a("vab-chart"),m=a("vab-card"),d=a("el-col");return f(),_(d,{lg:8,md:12,sm:24,xl:6,xs:24},{default:l(()=>[s(m,{"body-style":{height:"240px"},skeleton:"",title:n.title},{default:l(()=>[s(c,{option:b(o)},null,8,["option"])]),_:1},8,["title"])]),_:1})}}});export{S as default};
