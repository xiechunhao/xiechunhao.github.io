/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
function s(l){const t=new Date(l),a=t.getFullYear();let e=t.getMonth()+1;e=e<10?`${e}`:e;let n=t.getDate();n=n<10?`${n}`:n;let o=t.getHours();o=o<10?`0${o}`:o;let r=t.getMinutes(),u=t.getSeconds();return r=r<10?`0${r}`:r,u=u<10?`0${u}`:u,`${a}年${e}月${n}日 ${o}:${r}:${u}`}function $(l=32){const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let a="";for(let e=0;e<l;e++)a+=t.charAt(Math.floor(Math.random()*t.length));return a}export{s as t,$ as u};
