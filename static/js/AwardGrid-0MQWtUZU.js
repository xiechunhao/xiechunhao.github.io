/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:20:55 
 */
import{D as d,a as o}from"./index.esm-BCBYp110.js";import{d as c,z as i,u as l,o as p,_ as g}from"./vsv-element-plus-CWjYVfvE.js";const x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAgCAMAAABD5lTTAAAAOVBMVEUAAAD/OlD/OlD/OlD/OlD/OlD/OlD/OlD/OlD/OlD/OlD/OlD/OlD/OlD/OlD/OlD/OlD/OlD/OlDz2N9QAAAAEnRSTlMA+iT10cmcmYkMCOroV+syWCOnHtdkAAAApklEQVRIx7XWSxLDIAwDUJk/AZJU9z9sZ9oObSfLoHcAFja2ha86cuzGe6zHPCquXPJcxSeHf1sxrmRlw49H4GrBYTo61+vHLH2jQnOf2gdqhHcPClXKq7dGFXMAEnUSUD11fMWg0kCmUkakUsROpR1GJVO/r66Pur/q/6meL/V+kO83OOV+Ft8X9X0U33d1PpmcKF/p86E+3071zLEZ77EW81kxPQEbjMST6XSsbwAAAABJRU5ErkJggg==",A=""+new URL("../png/button2-on3QNrm-.png",import.meta.url).href,m=1,O=c({__name:"AwardGrid",setup(u){const e=[{padding:"15px",background:"#ffc27a",borderRadius:28},{padding:"8px",background:"#ff4a4c",borderRadius:23},{padding:"8px",background:"#ff625b",borderRadius:20}],a=[{x:1,y:1,background:"linear-gradient(270deg, #FFDCB8, #FDC689)",shadow:"0 5 1 #e89b4f",fonts:[{text:`${m} 次`,fontColor:"#fff",top:"73%",fontSize:"11px"}],imgs:[{src:A,width:"65%",top:"12%"},{src:x,width:"50%",top:"73%"}]}],f=[{name:"1元红包",index:0,x:0,y:0,fonts:[{text:"1元红包",top:"70%",fontColor:"#ff6642",fontSize:12}],imgs:[{src:o,width:"30%",top:"15%"}],background:"#fefaea",col:1,row:1},{name:"100元红包",index:1,x:1,y:0,fonts:[{text:"100元红包",top:"70%",fontColor:"#ff6642",fontSize:12}],imgs:[{src:o,width:"30%",top:"15%"}],background:"#fefaea",col:1,row:1},{name:"0.5元红包",index:2,x:2,y:0,fonts:[{text:"0.5元红包",top:"70%",fontColor:"#ff6642",fontSize:12}],imgs:[{src:o,width:"30%",top:"15%"}],background:"#fefaea",col:1,row:1},{name:"2元红包",index:3,x:2,y:1,fonts:[{text:"2元红包",top:"70%",fontColor:"#ff6642",fontSize:12}],imgs:[{src:o,width:"30%",top:"15%"}],background:"#fefaea",col:1,row:1},{name:"10元红包",index:4,x:2,y:2,fonts:[{text:"10元红包",top:"70%",fontColor:"#ff6642",fontSize:12}],imgs:[{src:o,width:"30%",top:"15%"}],background:"#fefaea",col:1,row:1},{name:"50元红包",index:5,x:1,y:2,fonts:[{text:"50元红包",top:"70%",fontColor:"#ff6642",fontSize:12}],imgs:[{src:o,width:"30%",top:"15%"}],background:"#fefaea",col:1,row:1},{name:"0.3元红包",index:6,x:0,y:2,fonts:[{text:"0.3元红包",top:"70%",fontColor:"#ff6642",fontSize:12}],imgs:[{src:o,width:"30%",top:"15%"}],background:"#fefaea",col:1,row:1},{name:"20元红包",index:7,x:0,y:1,fonts:[{text:"20元红包",top:"70%",fontColor:"#ff6642",fontSize:12}],imgs:[{src:o,width:"30%",top:"15%"}],background:"#fefaea",col:1,row:1}],n=ref(null),r=()=>{n.value.play(),setTimeout(()=>{const t=g(0,5);n.value.stop(t)},1e3*3)},s=t=>{$baseMessage(`恭喜您获得${t.fonts[0].text}`,"success","hey")};return(t,b)=>(p(),i(l(d),{ref_key:"awardGridRef",ref:n,blocks:e,buttons:a,height:"300px",prizes:f,width:"300px",onEnd:s,onStart:r},null,512))}});export{O as default};
