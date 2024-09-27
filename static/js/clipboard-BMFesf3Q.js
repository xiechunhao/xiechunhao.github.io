/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:50:12 
 */
import{O as a,P as c,Q as e}from"./index-6xtryadw.js";const i=s=>{e.$baseMessage(`拷贝${s}成功`,"success","hey")},p=s=>{e.$baseMessage(`拷贝${s}失败`,"error","hey")};function b(s){const{isSupported:o,copy:r}=a();o||c("clipboard-write"),r(s).then(()=>{i(s)}).catch(()=>{p(s)})}export{b as h};
