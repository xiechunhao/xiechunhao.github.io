/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:33:27 
 */
import{O as a,P as c,Q as e}from"./index-Ba9EqH5M.js";const i=s=>{e.$baseMessage(`拷贝${s}成功`,"success","hey")},p=s=>{e.$baseMessage(`拷贝${s}失败`,"error","hey")};function b(s){const{isSupported:o,copy:r}=a();o||c("clipboard-write"),r(s).then(()=>{i(s)}).catch(()=>{p(s)})}export{b as h};
