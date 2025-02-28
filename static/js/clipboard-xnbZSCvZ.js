/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 13:58:02 
 */
import{O as a,P as c,Q as e}from"./index-DuUxtc1j.js";const i=s=>{e.$baseMessage(`拷贝${s}成功`,"success","hey")},p=s=>{e.$baseMessage(`拷贝${s}失败`,"error","hey")},d=s=>{const{isSupported:r,copy:o}=a({legacy:!0});r||c("clipboard-write"),o(s).then(()=>{i(s)}).catch(()=>{p(s)})};export{d as h};
