/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:46:00 
 */
import{d,N as o,o as _,b as f,T as t,$ as a,u as b,k as y,a4 as r}from"./vsv-element-plus-CxGOTlXz.js";const v={class:"menu1-1-1-1-container"},g=d({name:"Menu1111",__name:"index",setup(x){const l=useRouter(),s=ref(""),i=()=>{$pub("reload-router-view","Menu1111")},m=()=>{s.value||(s.value="路由1.1.1.1缓存的数据"),$baseMessage("提示结束后，跳转至首页，3秒后回到路由1.1.1.1","warning","hey",()=>{l.push({name:"Index"}),setTimeout(()=>{$baseMessage("倒计时：3","success","hey")},1e3),setTimeout(()=>{$baseMessage("倒计时：2","success","hey")},1e3*2),setTimeout(()=>{$baseMessage("倒计时：1","success","hey")},1e3*3),setTimeout(()=>{$baseMessage("路由缓存已生效，即将回到路由1.1.1.1","success","hey",()=>{l.push({name:"Menu1111"})})},1e3*4)})};return(h,e)=>{const p=o("el-input"),n=o("vab-alert"),u=o("el-button");return _(),f("div",v,[t(n,{title:"路由1.1"},{default:a(()=>[t(n,{title:"路由1.1.1"},{default:a(()=>[t(n,{title:"路由1.1.1.1"},{default:a(()=>[t(p,{modelValue:b(s),"onUpdate:modelValue":e[0]||(e[0]=c=>y(s)?s.value=c:null),clearable:"",style:{width:"250px","margin-bottom":"20px"},type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(u,{type:"primary",onClick:m},{default:a(()=>e[1]||(e[1]=[r("多级路由缓存演示")])),_:1}),t(u,{type:"primary",onClick:i},{default:a(()=>e[2]||(e[2]=[r("刷新当前标签页")])),_:1})])}}});export{g as default};
