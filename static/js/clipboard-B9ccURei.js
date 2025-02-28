/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{g as r}from"./index-DXRDwnmL.js";import{j as c}from"./vsv-element-plus-DQNbQgVr.js";const a=s=>{console.log("拷贝${text}成功"),c({message:"复制成功",type:"success"})},t=s=>{r.$baseMessage(`拷贝${s}失败`,"error","hey")};function l(s){const{isSupported:e,copy:o}=useClipboard();e||usePermission("clipboard-write"),o(s).then(()=>{a()}).catch(()=>{t(s)})}export{l as h};
