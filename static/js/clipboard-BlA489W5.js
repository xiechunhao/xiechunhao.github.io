/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 15:51:39 
 */
import{k as e}from"./index-xIgfXPDD.js";const c=s=>{e.$baseMessage(`拷贝${s}成功`,"success","hey")},a=s=>{e.$baseMessage(`拷贝${s}失败`,"error","hey")};function p(s){const{isSupported:o,copy:r}=useClipboard();o||usePermission("clipboard-write"),r(s).then(()=>{c(s)}).catch(()=>{a(s)})}export{p as h};
