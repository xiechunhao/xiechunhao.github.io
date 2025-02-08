/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:10:48 
 */
import{d as q,I as re,M as ce,J as de,p as D,q as $,a as L,A as ue,e as n,X as J,a4 as X,n as S,u as c,Y as V,aU as he,o as j,b as pe,K as G,U as fe,B as ve,Z as ge}from"./vsv-element-plus-D84I6Pnf.js";import{l as me}from"./landscape-C1CSDfEv.js";const we="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAELklEQVRYR+2YW2wUZRTH//9vtlCoF9IoIklT3PqgPGi326hoetuaGEhIr9SgCYkkgt2WGOQVCca+GavWdr0GjD4YhG3RB3hply1LQA1tEQIxEXapGI2pEkys9LIzx2ylYWfY6e5sF0oi+7hzzvl+3/9855xvhrjNf7zN+XAHcL4Z+n8o6JWTeYt++W25S596AIZy6TB+n3yo+Nchlk8vmIIVowdXU9c3Q1gDSilBlQwjgBAYFGDvdF58/4milqvZwDpOcXWsb5Uh8hmBqkwXFMhlCN8aX5LXNbRy/T+Z+iXsHAFWRXs3QGQPyLucLDJrK5DgUXdTsxPfjAEro8E3Ce50EtxsKxPTwCPH3U2jTmJkBJgWTnAMxDeGMEoa0xQ+LJQnCD4HYFkCyAC3RdwN3U7gMkpxRTTYrMD91sCJIgCxV5R6O1Jcfy7VwonqLoj9/CqB2kF341qncGkBvRe+ureAWpRgoalCBecMFzcdK24YymZRJz5zprgq1tsJwXYL3CVZGvdGHmwZc7JQtra2gE+f712ep2QUYP714DJhaJrXLqXZQszlZwtYdSHoB9ljVk/ePVrSZFL0ZkAlxzQBVseCT8WhZhRThtFB8plk9Zi/qCi8cv0fNxvKFrDy4oF11NXXIFy2EII4iBcG3Y03VLZT8OqRd5aFPduvOEpxRayvXolxAKB2g6NgEhobBlc1HHYKY7WvHf5wtVAPgegIlbbZ9seUZ7AyFnwewi9pGoUyDmhrB931kfnC1ZwOeKlLP8GZJi6QLSFP2yep4toXSbT3ZQAfX3O6omt8Nhd9r/aHQAUMOQywYBZo5uZD2ThQ2rbPCjlnH6yI9rUryE5DU75ctJaake46Be4DuDjF8dFBNA94/AdtiySVxIlpMlTS8td801o70vMigM9huTda2lhcKHVHPO2HZv/P6LIwX7hk/+qzPSvUJGMkrg8AQYTkroRdXMlE+HH/twsG6BsOdJHYZlaO/lBZ6weOiiSXqs3Gqj0TeAxx+T75DIpgwjC0onD51pQD4JaluPrkR/cpFT9DcoVp84LOgTL/DjtBbglgou+puHwB8lEznPxJw1XSX77VtgizBvQNBw4RMqB7xt4Lc3c8lQKJaQHoO4R8ydz0/7MWoCXk8c85MrMC9J3qaafw/WtQlwXST+F3BnAeYB4obgJ1BJIuG+YtiKAjVOZ/Pd1ZdwzoG+4uBtSPpjaRbhXLcwF3hzytb2TilgVgT5BkYybBrTYC+Rvg5nRpdTRJrIs8+VPXPQXj2i4ItxC4O2NQQUQnN4U9rRcz9nH64p4ceM2lziX5Y4s3KHCdUHwE77ecMkMEp6BwhIa2Z6DslZRvfulgHafYLuCas58WLp2aLCFUga70qxOFU6dPFL2W1feYeaU43Y5z/TxnCuYabMEuC043ckdBp4pZ7f8FE5psOI1g6fwAAAAASUVORK5CYII=",Xe=["width","height"],xe=["width","height"],ye=["width","height"],Te=n("div",{class:"loading-gif_"},[n("span"),n("span"),n("span"),n("span"),n("span")],-1),Se=[Te],Ye={class:"auth-control_"},be={class:"range-text"},Ce=n("div",null,null,-1),Be=n("div",null,null,-1),Me=n("div",null,null,-1),Ie=[Ce,Be,Me],Ae=q({__name:"App",props:{type:{type:String,default:"modal"},canvasWidth:{type:Number,default:310},canvasHeight:{type:Number,default:160},show:{type:Boolean,default:!1},puzzleScale:{type:Number,default:1},sliderSize:{type:Number,default:50},range:{type:Number,default:10},zIndex:{type:Number,default:999},imgs:{type:Array,default:null},successText:{type:String,default:"验证通过！"},failText:{type:String,default:"验证失败，请重试"},sliderText:{type:String,default:"拖动滑块完成拼图"},className:{type:String,default:""}},emits:["success","fail","close","reset"],setup(l,{expose:Y,emit:x}){const i=l;re(()=>{document.addEventListener("mousemove",A,!1),document.addEventListener("mouseup",z,!1),document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",z,!1),a.isInside=i.type==="inside",i.show&&(!a.isInside&&document.body.classList.add("vue-puzzle-overflow"),C())}),de(()=>{a.timer1&&clearTimeout(a.timer1),document.removeEventListener("mousemove",A,!1),document.removeEventListener("mouseup",z,!1),document.removeEventListener("touchmove",A,!1),document.removeEventListener("touchend",z,!1)});const b=D(),M=D(),I=D(),k=D(),a=ce({isInside:!1,mouseDown:!1,startWidth:50,startX:0,newX:0,pinX:0,pinY:0,loading:!1,isCanSlide:!1,error:!1,infoBoxShow:!1,infoText:"",infoBoxFail:!1,timer1:void 0,closeDown:!1,isSuccess:!1,imgIndex:-1,isSubmting:!1});$(()=>i.show,t=>{t?(!a.isInside&&document.body.classList.add("vue-puzzle-overflow"),C()):(a.isSubmting=!1,a.isSuccess=!1,a.infoBoxShow=!1,document.body.classList.remove("vue-puzzle-overflow"))}),$(()=>i.type,t=>{t==="inside"?(a.isInside=!0,document.body.classList.remove("vue-puzzle-overflow")):a.isInside=!1});const m=L(()=>{const t=a.startWidth+a.newX-a.startX;return t<u.value?u.value:t>i.canvasWidth?i.canvasWidth:t}),d=L(()=>Math.round(Math.max(Math.min(i.puzzleScale,2),.2)*52.5+6)),u=L(()=>Math.max(Math.min(Math.round(i.sliderSize),Math.round(i.canvasWidth*.5)),10)),K=L(()=>i.zIndex!==999?`z-index:${i.zIndex}`:""),ee=()=>{!a.mouseDown&&!a.isSubmting&&(a.timer1&&clearTimeout(a.timer1),x("close"))},O=()=>{a.isInside||(a.closeDown=!0)},E=()=>{a.closeDown&&ee(),a.closeDown=!1},_=t=>{var s;a.isCanSlide&&(a.mouseDown=!0,a.startWidth=((s=b.value)==null?void 0:s.clientWidth)||0,a.newX=t.clientX!==void 0?t.clientX:t.changedTouches[0].clientX,a.startX=t.clientX!==void 0?t.clientX:t.changedTouches[0].clientX)},A=t=>{a.mouseDown&&(t.preventDefault(),a.newX=t.clientX!==void 0?t.clientX:t.changedTouches[0].clientX)},z=()=>{a.mouseDown&&(a.mouseDown=!1,se())},Z=(t=!1)=>{var s;if(a.loading&&!t)return;a.loading=!0,a.isCanSlide=!1;const r=M.value,h=I.value,p=k.value,e=r==null?void 0:r.getContext("2d",{willReadFrequently:!0}),v=h==null?void 0:h.getContext("2d"),H=p==null?void 0:p.getContext("2d");if(!e||!v||!H){console.error("not found ctx / ctx2 / ctx3");return}const ne=navigator.userAgent.indexOf("Firefox")>=0&&navigator.userAgent.indexOf("Windows")>=0,g=document.createElement("img");if(e.fillStyle="rgba(255,255,255,1)",H.fillStyle="rgba(255,255,255,1)",e.clearRect(0,0,i.canvasWidth,i.canvasHeight),v.clearRect(0,0,i.canvasWidth,i.canvasHeight),a.pinX=o(d.value+20,i.canvasWidth-d.value-10),a.pinY=o(20,i.canvasHeight-d.value-10),g.crossOrigin="anonymous",g.onload=()=>{const[f,P,R,F]=ae(g),Q=Math.random(),N=Math.random(),U=Math.random(),oe=Math.random(),B=Q<.33?-1:Q<.66?0:1,y=N<.33?-1:N<.66?0:1,T=U<.33?-1:U<.66?0:1;let w=oe<.6?1:0;B===y&&y===T&&T===w&&w===0&&(w=1),e.save(),W(e,B,y,T,w),e.closePath(),ne?(e.clip(),e.save(),e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowColor="#000",e.shadowBlur=3,e.fill(),e.restore()):(e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowColor="#000",e.shadowBlur=3,e.fill(),e.clip()),e.drawImage(g,f,P,R,F),H.fillRect(0,0,i.canvasWidth,i.canvasHeight),H.drawImage(g,f,P,R,F),e.globalCompositeOperation="source-atop",W(e,B,y,T,w),e.arc(a.pinX+Math.ceil(d.value/2),a.pinY+Math.ceil(d.value/2),d.value*1.2,0,Math.PI*2,!0),e.closePath(),e.shadowColor="rgba(255, 255, 255, .8)",e.shadowOffsetX=-1,e.shadowOffsetY=-1,e.shadowBlur=Math.min(Math.ceil(8*i.puzzleScale),12),e.fillStyle="#ffffaa",e.fill();const le=e.getImageData(a.pinX-3,a.pinY-20,a.pinX+d.value+5,a.pinY+d.value+5);v.putImageData(le,0,a.pinY-20),e.restore(),e.clearRect(0,0,i.canvasWidth,i.canvasHeight),e.save(),W(e,B,y,T,w),e.globalAlpha=.8,e.fillStyle="#ffffff",e.fill(),e.restore(),e.save(),e.globalCompositeOperation="source-atop",W(e,B,y,T,w),e.arc(a.pinX+Math.ceil(d.value/2),a.pinY+Math.ceil(d.value/2),d.value*1.2,0,Math.PI*2,!0),e.shadowColor="#000",e.shadowOffsetX=2,e.shadowOffsetY=2,e.shadowBlur=16,e.fill(),e.restore(),e.save(),e.globalCompositeOperation="destination-over",e.drawImage(g,f,P,R,F),e.restore(),a.loading=!1,a.isCanSlide=!0},g.onerror=()=>{Z(!0)},!t&&(s=i.imgs)!=null&&s.length){let f=o(0,i.imgs.length-1);f===a.imgIndex&&(f===i.imgs.length-1?f=0:f++),a.imgIndex=f,g.src=i.imgs[f]}else g.src=te()},o=(t,s)=>Math.ceil(Math.random()*(s-t)+t),ae=t=>{const s=t.width/t.height,r=i.canvasWidth/i.canvasHeight;let h=0,p=0,e=0,v=0;return s>r?(v=i.canvasHeight,e=s*v,p=0,h=(i.canvasWidth-e)/2):(e=i.canvasWidth,v=e/s,h=0,p=(i.canvasHeight-v)/2),[h,p,e,v]},W=(t,s,r,h,p)=>{const e=Math.ceil(15*i.puzzleScale);t.beginPath(),t.moveTo(a.pinX,a.pinY),t.lineTo(a.pinX+e,a.pinY),t.arcTo(a.pinX+e,a.pinY+s*e/2,a.pinX+e+e/2,a.pinY+s*e/2,e/2),t.arcTo(a.pinX+e+e,a.pinY+s*e/2,a.pinX+e+e,a.pinY,e/2),t.lineTo(a.pinX+e+e+e,a.pinY),t.lineTo(a.pinX+e+e+e,a.pinY+e),t.arcTo(a.pinX+e+e+e+r*e/2,a.pinY+e,a.pinX+e+e+e+r*e/2,a.pinY+e+e/2,e/2),t.arcTo(a.pinX+e+e+e+r*e/2,a.pinY+e+e,a.pinX+e+e+e,a.pinY+e+e,e/2),t.lineTo(a.pinX+e+e+e,a.pinY+e+e+e),t.lineTo(a.pinX+e+e,a.pinY+e+e+e),t.arcTo(a.pinX+e+e,a.pinY+e+e+e+h*e/2,a.pinX+e+e/2,a.pinY+e+e+e+h*e/2,e/2),t.arcTo(a.pinX+e,a.pinY+e+e+e+h*e/2,a.pinX+e,a.pinY+e+e+e,e/2),t.lineTo(a.pinX,a.pinY+e+e+e),t.lineTo(a.pinX,a.pinY+e+e),t.arcTo(a.pinX+p*e/2,a.pinY+e+e,a.pinX+p*e/2,a.pinY+e+e/2,e/2),t.arcTo(a.pinX+p*e/2,a.pinY+e,a.pinX,a.pinY+e,e/2),t.lineTo(a.pinX,a.pinY)},te=()=>{const t=document.createElement("canvas"),s=t.getContext("2d");if(!s)return console.error("not found ctx"),"";t.width=i.canvasWidth,t.height=i.canvasHeight,s.fillStyle=`rgb(${o(100,255)},${o(100,255)},${o(100,255)})`,s.fillRect(0,0,i.canvasWidth,i.canvasHeight);for(let r=0;r<12;r++)if(s.fillStyle=`rgb(${o(100,255)},${o(100,255)},${o(100,255)})`,s.strokeStyle=`rgb(${o(100,255)},${o(100,255)},${o(100,255)})`,o(0,2)>1)s.save(),s.rotate(o(-90,90)*Math.PI/180),s.fillRect(o(-20,t.width-20),o(-20,t.height-20),o(10,t.width/2+10),o(10,t.height/2+10)),s.restore();else{s.beginPath();const h=o(-Math.PI,Math.PI);s.arc(o(0,t.width),o(0,t.height),o(10,t.height/2+10),h,h+Math.PI*1.5),s.closePath(),s.fill()}return t.toDataURL("image/png")},se=()=>{a.isSubmting=!0;const t=m.value-u.value-(d.value-u.value)*((m.value-u.value)/(i.canvasWidth-u.value)),s=a.pinX-3-t;Math.abs(s)<i.range?(a.infoText=i.successText,a.infoBoxFail=!1,a.infoBoxShow=!0,a.isCanSlide=!1,a.isSuccess=!0,a.timer1&&clearTimeout(a.timer1),a.timer1=setTimeout(()=>{a.isSubmting=!1,x("success",s,{deviation:s,offsetX:t,pinX:a.pinX-3})},800)):(a.infoText=i.failText,a.infoBoxFail=!0,a.infoBoxShow=!0,a.isCanSlide=!1,x("fail",s,{deviation:s,offsetX:t,pinX:a.pinX-3}),a.timer1&&clearTimeout(a.timer1),a.timer1=setTimeout(()=>{a.isSubmting=!1,C()},800))},ie=()=>{a.infoBoxFail=!1,a.infoBoxShow=!1,a.isCanSlide=!1,a.isSuccess=!1,a.startWidth=u.value,a.startX=0,a.newX=0},C=t=>{a.isSubmting||(ie(),Z(),t&&x("reset"))};return Y({reset:C}),(t,s)=>(j(),ue(he,{to:"body",disabled:a.isInside},[n("div",{class:S(["vue-puzzle-vcode",{inside_:a.isInside,show_:l.show},l.className]),style:X(c(K)),onMousedown:O,onMouseup:E,onTouchstartPassive:O,onTouchend:E},[n("div",{class:"vue-auth-box_",onMousedown:s[3]||(s[3]=J(()=>{},["stop"])),onTouchstart:s[4]||(s[4]=J(()=>{},["stop"]))},[n("div",{class:"auth-body_",style:X(`width:${l.canvasWidth}px;height: ${l.canvasHeight}px`)},[n("canvas",{ref_key:"canvas1",ref:M,class:"auth-canvas1_",width:l.canvasWidth,height:l.canvasHeight},null,8,Xe),n("canvas",{ref_key:"canvas3",ref:k,class:S(["auth-canvas3_",{show:a.isSuccess}]),width:l.canvasWidth,height:l.canvasHeight},null,10,xe),n("canvas",{ref_key:"canvas2",ref:I,class:"auth-canvas2_",width:c(d),height:l.canvasHeight,style:X(`width:${c(d)}px;height:${l.canvasHeight}px;transform:translateX(${c(m)-c(u)-(c(d)-c(u))*((c(m)-c(u))/(l.canvasWidth-c(u)))}px)`)},null,12,ye),n("div",{class:S(["loading-box_",{hide_:!a.loading}])},Se,2),n("div",{class:S(["info-box_",{show:a.infoBoxShow},{fail:a.infoBoxFail}])},V(a.infoText),3),n("div",{class:S(["flash_",{show:a.isSuccess}]),style:X(`transform: translateX(${a.isSuccess?`${l.canvasWidth+l.canvasHeight*.578}px`:`-${l.canvasHeight*.578}px`}) skew(-30deg, 0);`)},null,6),n("img",{class:"reset_",onClick:s[0]||(s[0]=r=>C(!0)),src:we})],4),n("div",Ye,[n("div",{class:"range-box",style:X(`height:${c(u)}px;width:${l.canvasWidth}px`)},[n("div",be,V(l.sliderText),1),n("div",{class:"range-slider",ref_key:"rangeSlider",ref:b,style:X(`width:${c(m)}px`)},[n("div",{class:S(["range-btn",{isDown:a.mouseDown}]),style:X(`width:${c(u)}px`),onMousedown:s[1]||(s[1]=r=>_(r)),onTouchstart:s[2]||(s[2]=r=>_(r))},Ie,38)],4)],4)])],32)],38)],8,["disabled"]))}}),ze={class:"slider-verify-container"},De=q({name:"SliderVerify",__name:"index",setup(l){const Y=ref(!1),x=ref(["https://res.hc-cdn.com/tiny-vue-web-doc/3.10.5.20230903162611/static/images/mountain.png",me]),i=()=>{Y.value=!0},b=()=>{Y.value=!1},M=()=>{$baseMessage("验证成功","success","hey"),b()},I=()=>{$baseMessage("验证失败，请重试","error","hey")};return(k,a)=>{const m=ve("el-button");return j(),pe("div",ze,[G(m,{type:"primary",onClick:i},{default:fe(()=>a[0]||(a[0]=[ge("开始验证")])),_:1}),G(c(Ae),{imgs:c(x),show:c(Y),onClose:b,onFail:I,onSuccess:M},null,8,["imgs","show"])])}}});export{De as default};
