/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{d as q,I as re,J as ce,r as D,O as de,y as $,a as L,o as j,D as he,e as n,$ as U,a6 as X,n as S,u as c,Z as J,aV as ue,b as pe,M as G,V as ve,F as ge,_ as me}from"./vsv-element-plus-CbS2IxKo.js";import{l as fe}from"./landscape-C1CSDfEv.js";const we="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAELklEQVRYR+2YW2wUZRTH//9vtlCoF9IoIklT3PqgPGi326hoetuaGEhIr9SgCYkkgt2WGOQVCca+GavWdr0GjD4YhG3RB3hply1LQA1tEQIxEXapGI2pEkys9LIzx2ylYWfY6e5sF0oi+7hzzvl+3/9855xvhrjNf7zN+XAHcL4Z+n8o6JWTeYt++W25S596AIZy6TB+n3yo+Nchlk8vmIIVowdXU9c3Q1gDSilBlQwjgBAYFGDvdF58/4milqvZwDpOcXWsb5Uh8hmBqkwXFMhlCN8aX5LXNbRy/T+Z+iXsHAFWRXs3QGQPyLucLDJrK5DgUXdTsxPfjAEro8E3Ce50EtxsKxPTwCPH3U2jTmJkBJgWTnAMxDeGMEoa0xQ+LJQnCD4HYFkCyAC3RdwN3U7gMkpxRTTYrMD91sCJIgCxV5R6O1Jcfy7VwonqLoj9/CqB2kF341qncGkBvRe+ureAWpRgoalCBecMFzcdK24YymZRJz5zprgq1tsJwXYL3CVZGvdGHmwZc7JQtra2gE+f712ep2QUYP714DJhaJrXLqXZQszlZwtYdSHoB9ljVk/ePVrSZFL0ZkAlxzQBVseCT8WhZhRThtFB8plk9Zi/qCi8cv0fNxvKFrDy4oF11NXXIFy2EII4iBcG3Y03VLZT8OqRd5aFPduvOEpxRayvXolxAKB2g6NgEhobBlc1HHYKY7WvHf5wtVAPgegIlbbZ9seUZ7AyFnwewi9pGoUyDmhrB931kfnC1ZwOeKlLP8GZJi6QLSFP2yep4toXSbT3ZQAfX3O6omt8Nhd9r/aHQAUMOQywYBZo5uZD2ThQ2rbPCjlnH6yI9rUryE5DU75ctJaake46Be4DuDjF8dFBNA94/AdtiySVxIlpMlTS8td801o70vMigM9huTda2lhcKHVHPO2HZv/P6LIwX7hk/+qzPSvUJGMkrg8AQYTkroRdXMlE+HH/twsG6BsOdJHYZlaO/lBZ6weOiiSXqs3Gqj0TeAxx+T75DIpgwjC0onD51pQD4JaluPrkR/cpFT9DcoVp84LOgTL/DjtBbglgou+puHwB8lEznPxJw1XSX77VtgizBvQNBw4RMqB7xt4Lc3c8lQKJaQHoO4R8ydz0/7MWoCXk8c85MrMC9J3qaafw/WtQlwXST+F3BnAeYB4obgJ1BJIuG+YtiKAjVOZ/Pd1ZdwzoG+4uBtSPpjaRbhXLcwF3hzytb2TilgVgT5BkYybBrTYC+Rvg5nRpdTRJrIs8+VPXPQXj2i4ItxC4O2NQQUQnN4U9rRcz9nH64p4ceM2lziX5Y4s3KHCdUHwE77ecMkMEp6BwhIa2Z6DslZRvfulgHafYLuCas58WLp2aLCFUga70qxOFU6dPFL2W1feYeaU43Y5z/TxnCuYabMEuC043ckdBp4pZ7f8FE5psOI1g6fwAAAAASUVORK5CYII=",Xe=["width","height"],xe=["width","height"],ye=["width","height"],Te=n("div",{class:"loading-gif_"},[n("span"),n("span"),n("span"),n("span"),n("span")],-1),Se=[Te],Ye={class:"auth-control_"},be={class:"range-text"},Ce=n("div",null,null,-1),Be=n("div",null,null,-1),Me=n("div",null,null,-1),Ie=[Ce,Be,Me],Ae=q({__name:"App",props:{type:{type:String,default:"modal"},canvasWidth:{type:Number,default:310},canvasHeight:{type:Number,default:160},show:{type:Boolean,default:!1},puzzleScale:{type:Number,default:1},sliderSize:{type:Number,default:50},range:{type:Number,default:10},zIndex:{type:Number,default:999},imgs:{type:Array,default:null},successText:{type:String,default:"验证通过！"},failText:{type:String,default:"验证失败，请重试"},sliderText:{type:String,default:"拖动滑块完成拼图"},className:{type:String,default:""}},emits:["success","fail","close","reset"],setup(l,{expose:Y,emit:x}){const s=l;re(()=>{document.addEventListener("mousemove",A,!1),document.addEventListener("mouseup",z,!1),document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",z,!1),t.isInside=s.type==="inside",s.show&&(!t.isInside&&document.body.classList.add("vue-puzzle-overflow"),C())}),ce(()=>{t.timer1&&clearTimeout(t.timer1),document.removeEventListener("mousemove",A,!1),document.removeEventListener("mouseup",z,!1),document.removeEventListener("touchmove",A,!1),document.removeEventListener("touchend",z,!1)});const b=D(),M=D(),I=D(),k=D(),t=de({isInside:!1,mouseDown:!1,startWidth:50,startX:0,newX:0,pinX:0,pinY:0,loading:!1,isCanSlide:!1,error:!1,infoBoxShow:!1,infoText:"",infoBoxFail:!1,timer1:void 0,closeDown:!1,isSuccess:!1,imgIndex:-1,isSubmting:!1});$(()=>s.show,a=>{a?(!t.isInside&&document.body.classList.add("vue-puzzle-overflow"),C()):(t.isSubmting=!1,t.isSuccess=!1,t.infoBoxShow=!1,document.body.classList.remove("vue-puzzle-overflow"))}),$(()=>s.type,a=>{a==="inside"?(t.isInside=!0,document.body.classList.remove("vue-puzzle-overflow")):t.isInside=!1});const f=L(()=>{const a=t.startWidth+t.newX-t.startX;return a<h.value?h.value:a>s.canvasWidth?s.canvasWidth:a}),d=L(()=>Math.round(Math.max(Math.min(s.puzzleScale,2),.2)*52.5+6)),h=L(()=>Math.max(Math.min(Math.round(s.sliderSize),Math.round(s.canvasWidth*.5)),10)),K=L(()=>s.zIndex!==999?`z-index:${s.zIndex}`:""),ee=()=>{!t.mouseDown&&!t.isSubmting&&(t.timer1&&clearTimeout(t.timer1),x("close"))},R=()=>{t.isInside||(t.closeDown=!0)},E=()=>{t.closeDown&&ee(),t.closeDown=!1},_=a=>{var i;t.isCanSlide&&(t.mouseDown=!0,t.startWidth=((i=b.value)==null?void 0:i.clientWidth)||0,t.newX=a.clientX!==void 0?a.clientX:a.changedTouches[0].clientX,t.startX=a.clientX!==void 0?a.clientX:a.changedTouches[0].clientX)},A=a=>{t.mouseDown&&(a.preventDefault(),t.newX=a.clientX!==void 0?a.clientX:a.changedTouches[0].clientX)},z=()=>{t.mouseDown&&(t.mouseDown=!1,ie())},Z=(a=!1)=>{var i;if(t.loading&&!a)return;t.loading=!0,t.isCanSlide=!1;const r=M.value,u=I.value,p=k.value,e=r==null?void 0:r.getContext("2d",{willReadFrequently:!0}),g=u==null?void 0:u.getContext("2d"),H=p==null?void 0:p.getContext("2d");if(!e||!g||!H){console.error("not found ctx / ctx2 / ctx3");return}const ne=navigator.userAgent.indexOf("Firefox")>=0&&navigator.userAgent.indexOf("Windows")>=0,m=document.createElement("img");if(e.fillStyle="rgba(255,255,255,1)",H.fillStyle="rgba(255,255,255,1)",e.clearRect(0,0,s.canvasWidth,s.canvasHeight),g.clearRect(0,0,s.canvasWidth,s.canvasHeight),t.pinX=o(d.value+20,s.canvasWidth-d.value-10),t.pinY=o(20,s.canvasHeight-d.value-10),m.crossOrigin="anonymous",m.onload=()=>{const[v,F,O,P]=te(m),Q=Math.random(),N=Math.random(),V=Math.random(),oe=Math.random(),B=Q<.33?-1:Q<.66?0:1,y=N<.33?-1:N<.66?0:1,T=V<.33?-1:V<.66?0:1;let w=oe<.6?1:0;B===y&&y===T&&T===w&&w===0&&(w=1),e.save(),W(e,B,y,T,w),e.closePath(),ne?(e.clip(),e.save(),e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowColor="#000",e.shadowBlur=3,e.fill(),e.restore()):(e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowColor="#000",e.shadowBlur=3,e.fill(),e.clip()),e.drawImage(m,v,F,O,P),H.fillRect(0,0,s.canvasWidth,s.canvasHeight),H.drawImage(m,v,F,O,P),e.globalCompositeOperation="source-atop",W(e,B,y,T,w),e.arc(t.pinX+Math.ceil(d.value/2),t.pinY+Math.ceil(d.value/2),d.value*1.2,0,Math.PI*2,!0),e.closePath(),e.shadowColor="rgba(255, 255, 255, .8)",e.shadowOffsetX=-1,e.shadowOffsetY=-1,e.shadowBlur=Math.min(Math.ceil(8*s.puzzleScale),12),e.fillStyle="#ffffaa",e.fill();const le=e.getImageData(t.pinX-3,t.pinY-20,t.pinX+d.value+5,t.pinY+d.value+5);g.putImageData(le,0,t.pinY-20),e.restore(),e.clearRect(0,0,s.canvasWidth,s.canvasHeight),e.save(),W(e,B,y,T,w),e.globalAlpha=.8,e.fillStyle="#ffffff",e.fill(),e.restore(),e.save(),e.globalCompositeOperation="source-atop",W(e,B,y,T,w),e.arc(t.pinX+Math.ceil(d.value/2),t.pinY+Math.ceil(d.value/2),d.value*1.2,0,Math.PI*2,!0),e.shadowColor="#000",e.shadowOffsetX=2,e.shadowOffsetY=2,e.shadowBlur=16,e.fill(),e.restore(),e.save(),e.globalCompositeOperation="destination-over",e.drawImage(m,v,F,O,P),e.restore(),t.loading=!1,t.isCanSlide=!0},m.onerror=()=>{Z(!0)},!a&&(i=s.imgs)!=null&&i.length){let v=o(0,s.imgs.length-1);v===t.imgIndex&&(v===s.imgs.length-1?v=0:v++),t.imgIndex=v,m.src=s.imgs[v]}else m.src=ae()},o=(a,i)=>Math.ceil(Math.random()*(i-a)+a),te=a=>{const i=a.width/a.height,r=s.canvasWidth/s.canvasHeight;let u=0,p=0,e=0,g=0;return i>r?(g=s.canvasHeight,e=i*g,p=0,u=(s.canvasWidth-e)/2):(e=s.canvasWidth,g=e/i,u=0,p=(s.canvasHeight-g)/2),[u,p,e,g]},W=(a,i,r,u,p)=>{const e=Math.ceil(15*s.puzzleScale);a.beginPath(),a.moveTo(t.pinX,t.pinY),a.lineTo(t.pinX+e,t.pinY),a.arcTo(t.pinX+e,t.pinY+i*e/2,t.pinX+e+e/2,t.pinY+i*e/2,e/2),a.arcTo(t.pinX+e+e,t.pinY+i*e/2,t.pinX+e+e,t.pinY,e/2),a.lineTo(t.pinX+e+e+e,t.pinY),a.lineTo(t.pinX+e+e+e,t.pinY+e),a.arcTo(t.pinX+e+e+e+r*e/2,t.pinY+e,t.pinX+e+e+e+r*e/2,t.pinY+e+e/2,e/2),a.arcTo(t.pinX+e+e+e+r*e/2,t.pinY+e+e,t.pinX+e+e+e,t.pinY+e+e,e/2),a.lineTo(t.pinX+e+e+e,t.pinY+e+e+e),a.lineTo(t.pinX+e+e,t.pinY+e+e+e),a.arcTo(t.pinX+e+e,t.pinY+e+e+e+u*e/2,t.pinX+e+e/2,t.pinY+e+e+e+u*e/2,e/2),a.arcTo(t.pinX+e,t.pinY+e+e+e+u*e/2,t.pinX+e,t.pinY+e+e+e,e/2),a.lineTo(t.pinX,t.pinY+e+e+e),a.lineTo(t.pinX,t.pinY+e+e),a.arcTo(t.pinX+p*e/2,t.pinY+e+e,t.pinX+p*e/2,t.pinY+e+e/2,e/2),a.arcTo(t.pinX+p*e/2,t.pinY+e,t.pinX,t.pinY+e,e/2),a.lineTo(t.pinX,t.pinY)},ae=()=>{const a=document.createElement("canvas"),i=a.getContext("2d");if(!i)return console.error("not found ctx"),"";a.width=s.canvasWidth,a.height=s.canvasHeight,i.fillStyle=`rgb(${o(100,255)},${o(100,255)},${o(100,255)})`,i.fillRect(0,0,s.canvasWidth,s.canvasHeight);for(let r=0;r<12;r++)if(i.fillStyle=`rgb(${o(100,255)},${o(100,255)},${o(100,255)})`,i.strokeStyle=`rgb(${o(100,255)},${o(100,255)},${o(100,255)})`,o(0,2)>1)i.save(),i.rotate(o(-90,90)*Math.PI/180),i.fillRect(o(-20,a.width-20),o(-20,a.height-20),o(10,a.width/2+10),o(10,a.height/2+10)),i.restore();else{i.beginPath();const u=o(-Math.PI,Math.PI);i.arc(o(0,a.width),o(0,a.height),o(10,a.height/2+10),u,u+Math.PI*1.5),i.closePath(),i.fill()}return a.toDataURL("image/png")},ie=()=>{t.isSubmting=!0;const a=f.value-h.value-(d.value-h.value)*((f.value-h.value)/(s.canvasWidth-h.value)),i=t.pinX-3-a;Math.abs(i)<s.range?(t.infoText=s.successText,t.infoBoxFail=!1,t.infoBoxShow=!0,t.isCanSlide=!1,t.isSuccess=!0,t.timer1&&clearTimeout(t.timer1),t.timer1=setTimeout(()=>{t.isSubmting=!1,x("success",i,{deviation:i,offsetX:a,pinX:t.pinX-3})},800)):(t.infoText=s.failText,t.infoBoxFail=!0,t.infoBoxShow=!0,t.isCanSlide=!1,x("fail",i,{deviation:i,offsetX:a,pinX:t.pinX-3}),t.timer1&&clearTimeout(t.timer1),t.timer1=setTimeout(()=>{t.isSubmting=!1,C()},800))},se=()=>{t.infoBoxFail=!1,t.infoBoxShow=!1,t.isCanSlide=!1,t.isSuccess=!1,t.startWidth=h.value,t.startX=0,t.newX=0},C=a=>{t.isSubmting||(se(),Z(),a&&x("reset"))};return Y({reset:C}),(a,i)=>(j(),he(ue,{to:"body",disabled:t.isInside},[n("div",{class:S(["vue-puzzle-vcode",{inside_:t.isInside,show_:l.show},l.className]),style:X(c(K)),onMousedown:R,onMouseup:E,onTouchstartPassive:R,onTouchend:E},[n("div",{class:"vue-auth-box_",onMousedown:i[3]||(i[3]=U(()=>{},["stop"])),onTouchstart:i[4]||(i[4]=U(()=>{},["stop"]))},[n("div",{class:"auth-body_",style:X(`width:${l.canvasWidth}px;height: ${l.canvasHeight}px`)},[n("canvas",{ref_key:"canvas1",ref:M,class:"auth-canvas1_",width:l.canvasWidth,height:l.canvasHeight},null,8,Xe),n("canvas",{ref_key:"canvas3",ref:k,class:S(["auth-canvas3_",{show:t.isSuccess}]),width:l.canvasWidth,height:l.canvasHeight},null,10,xe),n("canvas",{ref_key:"canvas2",ref:I,class:"auth-canvas2_",width:c(d),height:l.canvasHeight,style:X(`width:${c(d)}px;height:${l.canvasHeight}px;transform:translateX(${c(f)-c(h)-(c(d)-c(h))*((c(f)-c(h))/(l.canvasWidth-c(h)))}px)`)},null,12,ye),n("div",{class:S(["loading-box_",{hide_:!t.loading}])},Se,2),n("div",{class:S(["info-box_",{show:t.infoBoxShow},{fail:t.infoBoxFail}])},J(t.infoText),3),n("div",{class:S(["flash_",{show:t.isSuccess}]),style:X(`transform: translateX(${t.isSuccess?`${l.canvasWidth+l.canvasHeight*.578}px`:`-${l.canvasHeight*.578}px`}) skew(-30deg, 0);`)},null,6),n("img",{class:"reset_",onClick:i[0]||(i[0]=r=>C(!0)),src:we})],4),n("div",Ye,[n("div",{class:"range-box",style:X(`height:${c(h)}px;width:${l.canvasWidth}px`)},[n("div",be,J(l.sliderText),1),n("div",{class:"range-slider",ref_key:"rangeSlider",ref:b,style:X(`width:${c(f)}px`)},[n("div",{class:S(["range-btn",{isDown:t.mouseDown}]),style:X(`width:${c(h)}px`),onMousedown:i[1]||(i[1]=r=>_(r)),onTouchstart:i[2]||(i[2]=r=>_(r))},Ie,38)],4)],4)])],32)],38)],8,["disabled"]))}}),ze={class:"slider-verify-container"},De=q({name:"SliderVerify",__name:"index",setup(l){const Y=ref(!1),x=ref(["https://res.hc-cdn.com/tiny-vue-web-doc/3.10.5.20230903162611/static/images/mountain.png",fe]),s=()=>{Y.value=!0},b=()=>{Y.value=!1},M=()=>{$baseMessage("验证成功","success","hey"),b()},I=()=>{$baseMessage("验证失败，请重试","error","hey")};return(k,t)=>{const f=ge("el-button");return j(),pe("div",ze,[G(f,{type:"primary",onClick:s},{default:ve(()=>t[0]||(t[0]=[me("开始验证")])),_:1}),G(c(Ae),{imgs:c(x),show:c(Y),onClose:b,onFail:I,onSuccess:M},null,8,["imgs","show"])])}}});export{De as default};
