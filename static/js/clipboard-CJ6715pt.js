/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{k as e}from"./index-D_keMk_X.js";const c=s=>{e.$baseMessage(`拷贝${s}成功`,"success","hey")},a=s=>{e.$baseMessage(`拷贝${s}失败`,"error","hey")},p=s=>{const{isSupported:r,copy:o}=useClipboard({legacy:!0});r||usePermission("clipboard-write"),o(s).then(()=>{c(s)}).catch(()=>{a(s)})};export{p as h};
