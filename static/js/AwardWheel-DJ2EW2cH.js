/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{R as c,a as e}from"./index.esm-BCBYp110.js";import{a as n}from"./award_2-BVQTkk6Y.js";import{d as i,z as d,u as l,o as x,_ as m}from"./vsv-element-plus-CWjYVfvE.js";const u=""+new URL("../png/block-DaZeoCy-.png",import.meta.url).href,g=""+new URL("../png/button-DKn6SvvS.png",import.meta.url).href,C=i({__name:"AwardWheel",setup(h){const f=[{padding:"35px",imgs:[{src:u,width:"100%"}],rotate:!0}],s=[{fonts:[{text:"10金币",top:"10%",fontColor:"#ff6642",fontSize:12}],background:"#fefaea",imgs:[{src:n,width:"20px",top:"35px"}]},{fonts:[{text:"0.1元",top:"10%",fontColor:"#ff6642",fontSize:12}],background:"#ffe358",imgs:[{src:e,width:"20px",top:"35px"}]},{fonts:[{text:"20金币",top:"10%",fontColor:"#ff6642",fontSize:12}],background:"#fefaea",imgs:[{src:n,width:"20px",top:"35px"}]},{fonts:[{text:"0.2元",top:"10%",fontColor:"#ff6642",fontSize:12}],background:"#ffe358",imgs:[{src:e,width:"20px",top:"35px"}]},{fonts:[{text:"30金币",top:"10%",fontColor:"#ff6642",fontSize:12}],background:"#fefaea",imgs:[{src:n,width:"20px",top:"35px"}]},{fonts:[{text:"0.3元",top:"10%",fontColor:"#ff6642",fontSize:12}],background:"#ffe358",imgs:[{src:e,width:"20px",top:"35px"}]}],r=[{radius:"35%",imgs:[{src:g,width:"100%",top:"-46px"}]}],o=ref(null),a=()=>{o.value.play(),setTimeout(()=>{const t=m(0,5);o.value.stop(t)},3e3)},p=t=>{$baseMessage(`恭喜您获得${t.fonts[0].text}`,"success","hey")};return(t,w)=>(x(),d(l(c),{ref_key:"awardWheelRef",ref:o,blocks:f,buttons:r,height:"300px",prizes:s,width:"300px",onEnd:p,onStart:a},null,512))}});export{C as default};
