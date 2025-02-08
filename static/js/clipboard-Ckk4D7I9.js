/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:17:33 
 */
import{k as e}from"./index-vqJMV2wg.js";const c=s=>{e.$baseMessage(`拷贝${s}成功`,"success","hey")},a=s=>{e.$baseMessage(`拷贝${s}失败`,"error","hey")};function p(s){const{isSupported:o,copy:r}=useClipboard();o||usePermission("clipboard-write"),r(s).then(()=>{c(s)}).catch(()=>{a(s)})}export{p as h};
