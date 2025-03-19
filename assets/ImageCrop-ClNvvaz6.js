var t=Object.defineProperty,o=Object.defineProperties,e=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(o,e,i)=>e in o?t(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i,r=(t,o)=>{for(var e in o||(o={}))l.call(o,e)&&a(t,e,o[e]);if(i)for(var e of i(o))s.call(o,e)&&a(t,e,o[e]);return t};import{_ as h}from"./index-B2uLNVFs.js";import{j as n,k as d,af as g,s as m,z as x,l as c,m as w,y as u,ak as p,p as B,q as f,H as y,a3 as I,a4 as v,h as b,r as C,c as M,a as T,w as k,b6 as O,u as $,K as L,i as P}from"./vendor-Bhb26uf3.js";import{l as U}from"./lock_screen_1-DtknluZ4.js";const W="3.0.5",H={name:"ImgCutter",props:{crossOrigin:{type:Boolean,default:!1,required:!1},crossOriginHeader:{type:String,default:"*",required:!1},label:{type:String,default:"选择图片",required:!1},isModal:{type:Boolean,default:!0,required:!1},lockScroll:{type:Boolean,default:!0,required:!1},showChooseBtn:{type:Boolean,default:!0,required:!1},boxWidth:{type:Number,default:800,required:!1},boxHeight:{type:Number,default:400,required:!1},cutWidth:{type:Number,default:200,required:!1},cutHeight:{type:Number,default:200,required:!1},rate:{type:String,default:null,required:!1},tool:{type:Boolean,default:!0,required:!1},toolBgc:{type:String,default:"#fff",required:!1},imgMove:{type:Boolean,default:!0,required:!1},sizeChange:{type:Boolean,default:!0,required:!1},originalGraph:{type:Boolean,default:!1,required:!1},moveAble:{type:Boolean,default:!0,required:!1},previewMode:{type:Boolean,default:!0,required:!1},CuttingOriginal:{type:Boolean,default:!1,required:!1},WatermarkText:{type:String,default:"",required:!1},WatermarkTextFont:{type:String,default:"12px Sans-serif",required:!1},WatermarkTextColor:{type:String,default:"#fff",required:!1},WatermarkTextX:{type:Number,default:.95,required:!1},WatermarkTextY:{type:Number,default:.95,required:!1},smallToUpload:{type:Boolean,default:!1,required:!1},saveCutPosition:{type:Boolean,default:!1,required:!1},scaleAble:{type:Boolean,default:!0,required:!1},index:{default:null,required:!1},fileType:{default:"png",required:!1,type:String},toolBoxOverflow:{type:Boolean,default:!0,required:!1},DoNotDisplayCopyright:{type:Boolean,default:!1,required:!1},quality:{type:Number,default:1,required:!1},accept:{type:String,default:"image/gif, image/jpeg ,image/png",required:!1}},model:["label","boxWidth","boxHeight","rate","tool","DoNotDisplayCopyright"],data(){let t,o;return t=this.boxWidth/2,o=this.boxHeight/2,{version:"",visible:!1,fileName:"",cutImageObj:null,onPrintImgTimmer:null,toolBoxPosition:{x:0,y:0},drawImg:{img:null,sx:0,sy:0,swidth:0,sheight:0,x:0,y:0,width:0,height:0},toolBox:{disable:!0,width:t,height:o,x:0,y:0,boxMove:{start:{x:0,y:0},moveTo:{x:0,y:0}}},dropImg:{active:!1,pageX:0,pageY:0,params:{}},rotateImg:{angle:0},rotateControl:{active:!1,start:{x:0,y:0},position:100},scaleImg:{rate:0,params:{}},controlBox:{disable:!0,btnName:"",start:{x:0,y:0,width:0,height:0}},selectBox:!1,selectBoxColor:"rgba(0,0,0,0.6)",isFlipHorizontal:!1,isFlipVertically:!1}},mounted(){this.version=W,!1===this.isModal&&(this.visible=!0,this.$nextTick((()=>{this.$refs.toolBox&&(this.$refs.toolBox.onmousewheel=this.scaleImgWheel,this.$refs.toolBox.addEventListener("DOMMouseScroll",this.scaleImgWheel))})))},methods:{handleOpen(t){let o=t=>{if(this.$refs.toolBox&&(this.$refs.toolBox.onmousewheel=this.scaleImgWheel,this.$refs.toolBox.addEventListener("DOMMouseScroll",this.scaleImgWheel)),!0===this.isModal){!0===this.lockScroll&&(document.body.style.overflowY="hidden");let t=this.$refs.dialogMainModalRef.offsetHeight+200,o=window.innerHeight,e=this.$refs.mask;e.style.overflowY=t>o?"scroll":"hidden"}t&&"function"==typeof t&&t()};if(t&&"object"==typeof t&&t.src){if(!t.name)throw new Error("传入参数必须包含：src,name");{let e=new Image;!0===this.crossOrigin&&(e.crossOrigin=this.crossOriginHeader),e.name=t.name,e.style.position="fixed",e.style.top="-5000px",e.style.opacity=0,e.onerror=t=>{this.$emit("error",{index:this.index,event:t,msg:"图片加载失败"}),this.clearCutImageObj()},e.onerror=t=>{throw this.$emit("onImageLoadError",t),new Error("图片加载失败")},e.onload=()=>{if(!0!==e.complete)throw new Error("图片加载失败");this.$emit("onImageLoadComplete",e),this.visible=!0,this.$nextTick((()=>{o((()=>{this.importImgToCanv(e)}))}))},e.src=t.src,this.cutImageObj=e,document.body.appendChild(e),this.$emit("onChooseImg",t,this.index)}}else this.visible=!0,this.$nextTick((()=>{o()}))},handleClose(){this.clearAll(),!0===this.isModal&&(!0===this.lockScroll&&(document.body.style.overflowY="scroll"),this.$nextTick((()=>{this.visible=!1})))},chooseImg(){this.$refs.inputFile.click()},importImgToCanv(t){let o,e=t.height,i=t.width,l=this.boxWidth,s=this.boxHeight,a=r({},this.drawImg);this.fileName=t.name,a.img=t,this.scaleImg.rate=i/e,e<s&&i<l?(o=1,a.x=(l-i)/2,a.y=(s-e)/2):i/e<=l/s?(o=s/e,a.x=(l-i*o)/2):(o=l/i,a.y=(s-e*o)/2),a.swidth=i,a.sheight=e,a.width=i*o,a.height=e*o,a.x=(l-a.width)/2,a.y=(s-a.height)/2,this.drawImg=a,this.printImg(),this.putToolBox()},putImgToCanv(t){let o;if(!t.target.files)return!1;if(o=t.target.files[0]||null,o){this.fileName=o.name;let t=new FileReader;t.readAsDataURL(o),t.onload=e=>{let i=e.target.result,l=document.createElement("img");l.src=i;let s=setInterval((()=>{if(2===t.readyState){if(clearInterval(s),!this.sizeChange&&this.smallToUpload&&l.width<=this.cutWidth&&l.height<=this.cutHeight)return this.handleClose(),o.name=this.changeFileName(o.name,this.fileType),void this.$emit("cutDown",{filename:this.changeFileName(o.name,this.fileType),file:o,index:this.index});let t,e=l.height,i=l.width,a=this.boxWidth,h=this.boxHeight,n=r({},this.drawImg);n.img=l,this.scaleImg.rate=i/e,e<h&&i<a?(t=1,n.x=(a-i)/2,n.y=(h-e)/2):i/e<=a/h?(t=h/e,n.x=(a-i*t)/2):(t=a/i,n.y=(h-e*t)/2),n.swidth=i,n.sheight=e,n.width=i*t,n.height=e*t,n.x=(a-n.width)/2,n.y=(h-n.height)/2,this.drawImg=n,this.printImg(),this.putToolBox()}}),200)},this.$emit("onChooseImg",o,this.index)}},putToolBox(){this.toolBox.width!==this.boxWidth/2&&this.toolBox.height!==this.boxHeight/2&&!1!==this.saveCutPosition||(this.toolBox.width=this.cutWidth>this.boxWidth?this.boxWidth:this.cutWidth,this.toolBox.height=this.cutHeight>this.boxHeight?this.boxHeight:this.cutHeight),(0===this.toolBox.x&&0===this.toolBox.y||!1===this.saveCutPosition)&&(this.toolBox.x=this.boxWidth/2-this.toolBox.width/2,this.toolBox.y=this.boxHeight/2-this.toolBox.height/2),this.checkToolBoxOverflow().then((()=>{this.printImg()})),this.drawControlBox(this.toolBox.width,this.toolBox.height,this.toolBox.x,this.toolBox.y)},checkToolBoxOverflow(){return new Promise((t=>{if(!this.toolBoxOverflow){if(this.drawImg.width<this.toolBox.width||this.drawImg.height<this.toolBox.height){const t=this.drawImg.width/this.drawImg.height;this.drawImg.width<this.toolBox.width&&(this.drawImg.width=this.toolBox.width,this.drawImg.height=this.drawImg.width/t),this.drawImg.height<this.toolBox.height&&(this.drawImg.height=this.toolBox.height,this.drawImg.width=this.drawImg.height*t),this.drawImg.x=(this.boxWidth-this.drawImg.width)/2,this.drawImg.y=(this.boxHeight-this.drawImg.height)/2}this.drawImg.x>this.toolBox.x&&(this.drawImg.x=this.toolBox.x),this.drawImg.x+this.drawImg.width<this.toolBox.x+this.toolBox.width&&(this.drawImg.x=this.toolBox.x+this.toolBox.width-this.drawImg.width),this.drawImg.y>this.toolBox.y&&(this.drawImg.y=this.toolBox.y),this.drawImg.y+this.drawImg.height<this.toolBox.y+this.toolBox.height&&(this.drawImg.y=this.toolBox.y+this.toolBox.height-this.drawImg.height)}t()}))},isSupportFileApi:()=>!!(window.File&&window.FileList&&window.FileReader&&window.Blob&&-1===navigator.userAgent.indexOf("Edge")&&-1===navigator.userAgent.indexOf("MSIE")&&-1===navigator.userAgent.indexOf("Trident")),dataURLtoFile(t,o){let e=t.split(","),i=e[0].match(/:(.*?);/)[1],l=atob(e[1]),s=l.length,a=new Uint8Array(s);for(;s--;)a[s]=l.charCodeAt(s);if(this.isSupportFileApi()){return new File([a],o,{type:i})}return"不支持File对象"},clearAll(){let t=this,o=t.$refs.canvas;o.getContext("2d").clearRect(0,0,o.width,o.height);let e=t.$refs.canvasSelectBox;e.getContext("2d").clearRect(0,0,e.width,e.height);let i=t.drawImg.sx,l=t.drawImg.sy;this.drawImg={img:null,sx:i,sy:l,swidth:0,sheight:0,x:0,y:0,width:0,height:0},this.isFlipHorizontal=!1,this.isFlipVertically=!1,this.$refs.inputFile.value="",this.rotateImg.angle=0,this.drawImg.img=null,this.turnReset(),this.clearCutImageObj(),this.$emit("onClearAll",this.index)},clearCutImageObj(){null!==this.cutImageObj&&void 0!==this.cutImageObj&&("function"==typeof this.cutImageObj.remove?this.cutImageObj.remove():this.cutImageObj.removeNode()),this.cutImageObj=null},drawControlBox(t,o,e,i){this.toolBoxOverflow||(t<1&&(t=1),o<1&&(o=1),t>this.drawImg.width&&(t=this.drawImg.width),o>this.drawImg.height&&(o=this.drawImg.height),e<this.drawImg.x&&(e=this.drawImg.x),i<this.drawImg.y&&(i=this.drawImg.y),e>this.drawImg.x+this.drawImg.width-t&&(e=this.drawImg.x+this.drawImg.width-t),i>this.drawImg.y+this.drawImg.height-o&&(i=this.drawImg.y+this.drawImg.height-o)),t>this.boxWidth&&(t=this.boxWidth),o>this.boxHeight&&(o=this.boxHeight),e<0&&(e=0),i<0&&(i=0);let l,s,a=this.$refs.toolBoxControl,r=this.$refs.canvasSelectBox,h=r.getContext("2d");if(h.fillStyle=this.selectBoxColor,h.clearRect(0,0,r.width,r.height),h.fillRect(0,0,r.width,r.height),this.rate&&""!==this.rate){let e=this.rate.split(":")[0]/this.rate.split(":")[1];e>=1?(l=t,s=t/e,s+i>this.drawImg.y+this.drawImg.height&&(s=this.drawImg.y+this.drawImg.height-i,l=s*e)):(l=o*e,s=o)}else l=t,s=o;this.toolBox.width=Math.abs(l),this.toolBox.height=Math.abs(s),a.style.width=Math.abs(l)+"px",a.style.height=Math.abs(s)+"px",this.toolBox.boxMove.moveTo.x=e,this.toolBox.boxMove.moveTo.y=i,l<0&&(e+=l),s<0&&(i+=s),e+this.toolBox.width>this.boxWidth&&(e=this.boxWidth-this.toolBox.width),e<0&&(e=0),i+this.toolBox.height>this.boxHeight&&(i=this.boxHeight-this.toolBox.height),i<0&&(i=0),this.toolBoxPosition.x=e,this.toolBoxPosition.y=i,a.style.left=e+"px",a.style.top=i+"px",h.clearRect(e,i,Math.abs(l),Math.abs(s)),this.onPrintImgTimmer&&clearTimeout(this.onPrintImgTimmer),this.onPrintImgTimmer=setTimeout((()=>{this.cropPicture(!0)}),100)},resetToolBox(){this.toolBox.width<0&&(this.toolBox.boxMove.moveTo.x=this.toolBox.x-this.toolBox.width),this.toolBox.height<0&&(this.toolBox.boxMove.moveTo.y=this.toolBox.y-this.toolBox.height),this.toolBox.width=Math.abs(this.toolBox.width),this.toolBox.height=Math.abs(this.toolBox.height)},toolBoxMouseDown(t){let o=this.$refs.toolBoxControl;this.toolBox.x=parseInt(o.style.left.split("px")[0]),this.toolBox.y=parseInt(o.style.top.split("px")[0]),this.toolBox.disable=!1,this.dropImg.active=!1,this.toolBox.boxMove.start={x:t.pageX,y:t.pageY}},toolBoxMouseMove(t){if(this.dropImg.active&&this.dropImgMove(t),!1===this.toolBox.disable&&!0===this.moveAble){let o=t.pageX-this.toolBox.boxMove.start.x,e=t.pageY-this.toolBox.boxMove.start.y,i=this.toolBox.x+o,l=this.toolBox.y+e;this.drawControlBox(this.toolBox.width,this.toolBox.height,i,l)}},toolBoxMouseLeave(){this.toolBox.disable=!0,this.onPrintImgTimmer&&clearTimeout(this.onPrintImgTimmer),this.onPrintImgTimmer=setTimeout((()=>{this.cropPicture(!0)}),100),this.resetToolBox()},toolBoxMouseUp(){this.toolBox.x=parseInt(this.toolBoxPosition.x),this.toolBox.y=parseInt(this.toolBoxPosition.y),this.toolBox.disable=!0,this.dropImg.active=!1,this.resetToolBox()},printImg(){if(this.drawImg.img){let t=this.$refs.canvas,o=t.getContext("2d");o.font="18px bold 黑体",o.fillStyle="#ff0",o.textAlign="center",o.textBaseline="middle",o.save(),o.clearRect(0,0,t.width,t.height),o.translate(this.drawImg.x+this.drawImg.width/2,this.drawImg.y+this.drawImg.height/2),o.rotate(this.rotateImg.angle*Math.PI/180),o.translate(-(this.drawImg.x+this.drawImg.width/2),-(this.drawImg.y+this.drawImg.height/2)),o.translate(this.drawImg.x,this.drawImg.y),o.scale(this.isFlipHorizontal?-1:1,this.isFlipVertically?-1:1),o.drawImage(this.drawImg.img,this.drawImg.sx,this.drawImg.sy,this.drawImg.swidth,this.drawImg.sheight,this.isFlipHorizontal?-this.drawImg.width:0,this.isFlipVertically?-this.drawImg.height:0,this.drawImg.width,this.drawImg.height),o.translate(-this.drawImg.x,this.drawImg.y),o.restore(),this.onPrintImgTimmer&&clearTimeout(this.onPrintImgTimmer),this.onPrintImgTimmer=setTimeout((()=>{this.cropPicture(!0)}),100)}},dropImgOn(t){!0===this.imgMove&&(this.dropImg.active=!0,this.dropImg.params=r({},this.drawImg),this.dropImg.pageX=t.pageX,this.dropImg.pageY=t.pageY)},dropImgOff(){this.dropImg.active=!1,this.onPrintImgTimmer&&clearTimeout(this.onPrintImgTimmer),this.onPrintImgTimmer=setTimeout((()=>{this.cropPicture(!0)}),100)},dropImgMove(t){if(this.dropImg.active&&this.drawImg.img){let o=r({},this.drawImg);o.x=this.dropImg.params.x-(this.dropImg.pageX-t.pageX),o.y=this.dropImg.params.y-(this.dropImg.pageY-t.pageY),this.toolBoxOverflow||(o.x>this.toolBox.x&&(o.x=this.toolBox.x),o.x<this.toolBox.x+this.toolBox.width-o.width&&(o.x=this.toolBox.x+this.toolBox.width-o.width),o.y>this.toolBox.y&&(o.y=this.toolBox.y),o.y<this.toolBox.y+this.toolBox.height-o.height&&(o.y=this.toolBox.y+this.toolBox.height-o.height)),this.drawImg=o,this.printImg(),t.stopPropagation()}},scaleReset(){this.drawImg.width=this.drawImg.swidth,this.drawImg.height=this.drawImg.sheight,this.printImg()},scaleImgWheel(t){if(this.drawImg.img&&!0===this.scaleAble){let o,e=t||window.event;e.wheelDelta?o=-e.wheelDelta/40:e.detail&&(o=e.detail);let i=50;this.drawImg.x=this.drawImg.width-9*o>i?this.drawImg.x+3*o:this.drawImg.x,this.drawImg.y=this.drawImg.width-9*o>i?this.drawImg.y+3*o:this.drawImg.y,this.drawImg.width=this.drawImg.width-9*o>i?this.drawImg.width-9*o:i,this.drawImg.height=this.drawImg.width/this.scaleImg.rate,this.checkToolBoxOverflow().then((()=>{this.printImg(),this.onPrintImgTimmer&&clearTimeout(this.onPrintImgTimmer),this.onPrintImgTimmer=setTimeout((()=>{this.cropPicture(!0)}),100)}))}return t.preventDefault(),t.returnValue=!1,!1},flipHorizontal(){this.drawImg.img&&(0==this.isFlipHorizontal?this.isFlipHorizontal=!0:this.isFlipHorizontal=!1,this.printImg())},flipVertically(){this.drawImg.img&&(0==this.isFlipVertically?this.isFlipVertically=!0:this.isFlipVertically=!1,this.printImg())},turnImg(t){let o=this.rotateImg.angle+t;o>=-180&&o<=180&&(this.rotateImg.angle=o,this.rotateControl.position=o/180*100+100,this.printImg("rotate"))},turnReset(){this.rotateImg.angle=0,this.rotateControl.position=100,this.printImg("rotate")},controlBtnMouseDown(t,o){this.controlBox.disable=!1,this.controlBox.btnName=o,this.controlBox.start.x=t.clientX,this.controlBox.start.y=t.clientY,this.controlBox.start.width=this.toolBox.width,this.controlBox.start.height=this.toolBox.height,t.stopPropagation()},controlBtnMouseUp(t){this.controlBox.disable=!0,this.dropImgOff(),this.resetToolBox(),this.toolBoxMouseUp(),t.stopPropagation()},controlBtnMouseMove(t){if(!1===this.controlBox.disable){let o,e,i=t.clientX-this.controlBox.start.x,l=t.clientY-this.controlBox.start.y;if("leftUp"==this.controlBox.btnName){if(this.rate){let t=this.rate.split(":")[0]/this.rate.split(":")[1];t>=1?(o=this.toolBox.x+i,e=this.toolBox.y+i/t):(o=this.toolBox.x+l*t,e=this.toolBox.y+l)}else o=this.toolBox.x+i,e=this.toolBox.y+l;this.toolBox.width=this.controlBox.start.width-i,this.toolBox.height=this.controlBox.start.height-l}if("rightUp"==this.controlBox.btnName){if(this.rate){let t=this.rate.split(":")[0]/this.rate.split(":")[1];t>=1?(o=this.toolBox.x,e=this.toolBox.y-i/t):(o=this.toolBox.x,e=this.toolBox.y+l)}else o=this.toolBox.x,e=this.toolBox.y+l;this.toolBox.width=this.controlBox.start.width+i,this.toolBox.height=this.controlBox.start.height-l}if("rightDown"==this.controlBox.btnName&&(o=this.toolBox.x,e=this.toolBox.y,this.toolBox.width=this.controlBox.start.width+i,this.toolBox.height=this.controlBox.start.height+l),"leftDown"==this.controlBox.btnName){if(this.rate){let t=this.rate.split(":")[0]/this.rate.split(":")[1];t>=1?(o=this.toolBox.x+i,e=this.toolBox.y):(o=this.toolBox.x+-l*t,e=this.toolBox.y)}else o=this.toolBox.x+i,e=this.toolBox.y;this.toolBox.width=this.controlBox.start.width-i,this.toolBox.height=this.controlBox.start.height+l}"topCenter"==this.controlBox.btnName&&(o=this.toolBox.x,e=this.toolBox.y+l,this.toolBox.width=this.controlBox.start.width,this.toolBox.height=this.controlBox.start.height-l),"downCenter"==this.controlBox.btnName&&(o=this.toolBox.x,e=this.toolBox.y,this.toolBox.width=this.controlBox.start.width,this.toolBox.height=this.controlBox.start.height+l),"leftCenter"==this.controlBox.btnName&&(o=this.toolBox.x+i,e=this.toolBox.y,this.toolBox.width=this.controlBox.start.width-i,this.toolBox.height=this.controlBox.start.height),"rightCenter"==this.controlBox.btnName&&(o=this.toolBox.x,e=this.toolBox.y,this.toolBox.width=this.controlBox.start.width+i,this.toolBox.height=this.controlBox.start.height),this.drawControlBox(this.toolBox.width,this.toolBox.height,o,e)}t.stopPropagation()},changeFileName(t,o){let e=t.lastIndexOf(".");return t.substr(0,e+1)+("jpeg"===o?"jpg":o)},cropPicture(t){let o=this;if(this.drawImg.img){let e=this.$refs.canvas;if(this.WatermarkText&&!t){let t=e.getContext("2d");t.font=this.WatermarkTextFont,t.fillStyle=this.WatermarkTextColor,t.textAlign="right",t.textBaseline="bottom",t.fillText(this.WatermarkText,this.toolBox.x+this.toolBox.width*this.WatermarkTextX,this.toolBox.y+this.toolBox.height*this.WatermarkTextY)}let i=new Image;!0===this.crossOrigin&&(i.crossOrigin=this.crossOriginHeader),i.src=e.toDataURL(`image/${this.fileType}`,o.quality),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:(t,i,l)=>{window.atob?setTimeout((()=>{let s,a=atob(e.toDataURL(i,l).split(",")[1]),r=a.length,h=new Uint8Array(r);for(let t=0;t<r;t++)h[t]=a.charCodeAt(t);try{s=new Blob([h],{type:`image/${o.fileType}`})}catch(n){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,"TypeError"==n.name&&window.BlobBuilder){let t=new(0,window.BlobBuilder);t.append(h.buffer),s=t.getBlob(`image/${o.fileType}`)}"InvalidStateError"==n.name&&(s=new Blob([h.buffer],{type:`image/${o.fileType}`}))}t(s)}),200):t(!1,{type:`image/${o.fileType}`})}}),e.toBlob((e=>{if(e){let l=new FileReader;l.readAsDataURL(e),l.onload=()=>{let e=setInterval((()=>{if(2==l.readyState){clearInterval(e);let l=document.createElement("canvas"),s=l.getContext("2d");if(1==o.originalGraph){let t=o.drawImg.width/o.drawImg.swidth,e=o.toolBox.width/t,i=o.toolBox.height/t;l.width=e,l.height=i;let a=(o.toolBox.x-o.drawImg.x)/t,r=(o.toolBox.y-o.drawImg.y)/t,h=o.drawImg.swidth,n=o.drawImg.sheight;s.translate(-a,-r),s.drawImage(o.drawImg.img,0,0,h,n)}else{l.width=o.toolBox.width,l.height=o.toolBox.height;let t=o.toolBox;if(o.rate){let e=o.rate.split(":")[0]/o.rate.split(":")[1];o.rate.split(":")[0]>=o.rate.split(":")[1]?s.drawImage(i,t.x,t.y,t.width,t.width*e,0,0,t.width,t.width*e):s.drawImage(i,t.x,t.y,t.width,t.width/e,0,0,t.width,t.width/e)}else s.drawImage(i,t.x,t.y,t.width,t.height,0,0,t.width,t.height)}l.toBlob((e=>{let i=o.changeFileName(o.fileName,o.fileType);t?o.previewMode&&o.$emit("onPrintImg",{index:o.index,fileName:i,blob:e,file:o.dataURLtoFile(l.toDataURL(`image/${o.fileType}`,o.quality),i),dataURL:l.toDataURL(`image/${o.fileType}`,o.quality)}):(o.handleClose(),o.$emit("cutDown",{index:o.index,fileName:i,blob:e,file:o.dataURLtoFile(l.toDataURL(`image/${o.fileType}`,o.quality),i),dataURL:l.toDataURL(`image/${o.fileType}`,o.quality)}))}),`image/${o.fileType}`,o.quality)}}),200)}}else{let e=document.createElement("canvas");e.width=o.toolBox.width,e.height=o.toolBox.height;let l=e.getContext("2d"),s=o.toolBox;if(o.rate){let t=o.rate.split(":")[0]/o.rate.split(":")[1];l.drawImage(i,s.x,s.y,s.width,s.width*t,0,0,s.width,s.width*t)}else l.drawImage(i,s.x,s.y,s.width,s.height,0,0,s.width,s.height);let a=o.changeFileName(o.fileName,o.fileType);t?o.$emit("onPrintImg",{fileName:a,dataURL:e.toDataURL(`image/${o.fileType}`,o.quality)}):(o.handleClose(),o.$emit("cutDown",{fileName:a,dataURL:e.toDataURL(`image/${o.fileType}`,o.quality)}))}}),`image/${o.fileType}`,o.quality)}else t||o.$emit("error",{err:1,msg:"No picture selected"})},scrollBarControlMove(t){if(this.rotateControl.active){let o=t.pageX-this.rotateControl.start.x,e=this.rotateControl.start.position+o;e<=0&&(e=0),e>=200&&(e=200),this.rotateControl.position=e,this.rotateImg.angle=(e-100)/100*180,this.printImg()}},scrollBarControlOn(t){this.rotateControl.active=!0,this.rotateControl.start.x=t.pageX,this.rotateControl.start.y=t.pageY,this.rotateControl.start.position=this.rotateControl.position},scrollBarControlOff(){this.rotateControl.active=!1}},computed:{showToolBoxWidth(){let t;return t=this.originalGraph?this.toolBox.width/(this.drawImg.width/this.drawImg.swidth):this.toolBox.width,Number(t).toFixed(0)},showToolBoxHeight(){let t;return t=this.originalGraph?this.toolBox.height/(this.drawImg.width/this.drawImg.swidth):this.toolBox.height,Number(t).toFixed(0)},showToolBoxX(){let t;return t=this.toolBoxPosition.x,Number(t).toFixed(0)},showToolBoxY(){let t;return t=this.toolBoxPosition.y,Number(t).toFixed(0)}}},q={class:"toolMain"},D={key:0,class:"tool-title"},F={class:"tips"},N={key:0,class:"dockBtn"},R={key:4,class:"dockBtnScrollBar"},S={class:"toolBoxControlBox"},z={class:"controlBox"},j={class:"selectArea"},A={class:"copyright"},E={key:0,target:"_blank",href:"https://github.com/acccccccb/vue-img-cutter",rel:"nofollow"},_=["width","height"],Y=["width","height"],X={class:"i-dialog-footer",style:{height:"40px"}},G=["accept"],V={key:0,class:"btn btn-primary btn-primary-plain"},K={class:"btn-group fr"},J=["disabled"];const Q=h(H,[["render",function(t,o,e,i,l,s){return n(),d("div",null,[!0===e.showChooseBtn&&!0===e.isModal?(n(),d("div",{key:0,onClick:o[0]||(o[0]=(...t)=>s.handleOpen&&s.handleOpen(...t))},[g(t.$slots,"openImgCutter",{},void 0,!0),g(t.$slots,"open",{},void 0,!0)])):m("",!0),t.$slots.openImgCutter||t.$slots.open||!0!==e.isModal?m("",!0):(n(),d("button",{key:1,type:"button",class:"btn btn-primary",onClick:o[1]||(o[1]=(...t)=>s.handleOpen&&s.handleOpen(...t))},x(e.label),1)),c(p,{name:"fade"},{default:w((()=>[l.visible?(n(),d("div",{key:0,class:u(!0===e.isModal?"mask vue-img-cutter":""),ref:"mask"},[l.visible?(n(),d("div",{key:0,class:u(!0===e.isModal?"dialogBoxModal":"dialogBox")},[c(p,{name:"fade","enter-class":"fade-in-enter","enter-active-class":"fade-in-active","leave-class":"fade-out-enter","leave-active-class":"fade-out-active"},{default:w((()=>[B("div",{ref:"dialogMainModalRef",class:u(!0===e.isModal?"dialogMainModal":"dialogMain"),style:f("width:"+(!0===e.isModal?e.boxWidth+32:e.boxWidth)+"px")},[B("div",q,[!0===e.isModal?(n(),d("div",D,[o[37]||(o[37]=y(" 图片裁剪 ")),B("span",{class:"closeIcon",onClick:o[2]||(o[2]=(...t)=>s.handleClose&&s.handleClose(...t))},"×")])):m("",!0),B("div",{ref:"toolBox",style:f("height:"+e.boxHeight+"px;width:"+e.boxWidth+"px"),onMousemove:o[30]||(o[30]=(...t)=>s.controlBtnMouseMove&&s.controlBtnMouseMove(...t)),onMouseup:o[31]||(o[31]=(...t)=>s.controlBtnMouseUp&&s.controlBtnMouseUp(...t)),onMouseleave:o[32]||(o[32]=(...t)=>s.controlBtnMouseUp&&s.controlBtnMouseUp(...t)),class:"toolBox"},[I(B("div",F,[B("div",{class:"btn btn-warning btn-xs",onClick:o[3]||(o[3]=(...t)=>s.chooseImg&&s.chooseImg(...t))},x(e.label),1)],512),[[v,!l.drawImg.img&&!0===e.showChooseBtn]]),1==e.tool?I((n(),d("div",{key:0,class:"dockMain",style:f("background:"+e.toolBgc),onMouseenter:o[14]||(o[14]=(...t)=>s.dropImgOff&&s.dropImgOff(...t))},[e.rate?(n(),d("div",N,[g(t.$slots,"ratio",{},(()=>[o[38]||(o[38]=y(" Ratio: "))]),!0),y(" "+x(e.rate),1)])):m("",!0),B("div",{class:"dockBtn",onClick:o[4]||(o[4]=(...t)=>s.scaleReset&&s.scaleReset(...t))},[g(t.$slots,"scaleReset",{},(()=>[o[39]||(o[39]=y(" Scale: "))]),!0),y(" "+x(l.drawImg.swidth>0?(l.drawImg.width/l.drawImg.swidth).toFixed(2):"-"),1)]),!1===e.originalGraph?(n(),d("div",{key:1,onClick:o[5]||(o[5]=t=>s.turnImg(-90)),class:"dockBtn"},[g(t.$slots,"turnLeft",{},(()=>[o[40]||(o[40]=y(" ↳ "))]),!0)])):m("",!0),!1===e.originalGraph?(n(),d("div",{key:2,onClick:o[6]||(o[6]=t=>s.turnImg(90)),class:"dockBtn"},[g(t.$slots,"turnRight",{},(()=>[o[41]||(o[41]=y(" ↲ "))]),!0)])):m("",!0),!1===e.originalGraph?(n(),d("div",{key:3,onClick:o[7]||(o[7]=t=>s.turnReset()),class:"dockBtn"},[g(t.$slots,"reset",{},(()=>[o[42]||(o[42]=y(" ↻ "))]),!0)])):m("",!0),!1===e.originalGraph?(n(),d("div",R,[B("div",{ref:"dockBtnScrollControl",onMousemove:o[8]||(o[8]=(...t)=>s.scrollBarControlMove&&s.scrollBarControlMove(...t)),onMousedown:o[9]||(o[9]=(...t)=>s.scrollBarControlOn&&s.scrollBarControlOn(...t)),onMouseleave:o[10]||(o[10]=(...t)=>s.scrollBarControlOff&&s.scrollBarControlOff(...t)),onMouseup:o[11]||(o[11]=(...t)=>s.scrollBarControlOff&&s.scrollBarControlOff(...t)),style:f("left:"+l.rotateControl.position+"px"),class:"scrollBarControl"},null,36),1==l.rotateControl.active?(n(),d("div",{key:0,class:"scrollBarText",style:f("left:"+l.rotateControl.position+"px")},x(l.rotateImg.angle.toFixed(0)+"°"),5)):m("",!0)])):m("",!0),!1===e.originalGraph?(n(),d("div",{key:5,onClick:o[12]||(o[12]=(...t)=>s.flipHorizontal&&s.flipHorizontal(...t)),class:"dockBtn"},[g(t.$slots,"flipHorizontal",{},(()=>[o[43]||(o[43]=y(" ⇆ "))]),!0)])):m("",!0),!1===e.originalGraph?(n(),d("div",{key:6,onClick:o[13]||(o[13]=(...t)=>s.flipVertically&&s.flipVertically(...t)),class:"dockBtn"},[g(t.$slots,"flipVertically",{},(()=>[o[44]||(o[44]=y(" ⇅ "))]),!0)])):m("",!0)],36)),[[v,l.drawImg.img&&!0!==l.dropImg.active&&1==l.controlBox.disable&&1==l.toolBox.disable]]):m("",!0),I(B("div",{ref:"toolBoxControl",onMousedown:o[23]||(o[23]=(...t)=>s.toolBoxMouseDown&&s.toolBoxMouseDown(...t)),onMouseup:o[24]||(o[24]=(...t)=>s.toolBoxMouseUp&&s.toolBoxMouseUp(...t)),onMousemove:o[25]||(o[25]=(...t)=>s.toolBoxMouseMove&&s.toolBoxMouseMove(...t)),onMouseleave:o[26]||(o[26]=(...t)=>s.toolBoxMouseLeave&&s.toolBoxMouseLeave(...t)),class:"toolBoxControl",style:f({pointerEvents:e.moveAble?"auto":"none"})},[B("div",S,[B("div",z,[o[45]||(o[45]=B("div",{class:"controlBoxInnerLine controlBoxInnerLineTop"},null,-1)),o[46]||(o[46]=B("div",{class:"controlBoxInnerLine controlBoxInnerLineBottom"},null,-1)),o[47]||(o[47]=B("div",{class:"controlBoxInnerLine controlBoxInnerLineLeft"},null,-1)),o[48]||(o[48]=B("div",{class:"controlBoxInnerLine controlBoxInnerLineRight"},null,-1)),B("div",j," 宽:"+x(s.showToolBoxWidth)+" 高:"+x(s.showToolBoxHeight)+" (x:"+x(s.showToolBoxX)+",y:"+x(s.showToolBoxY)+") ",1),!0===e.sizeChange?(n(),d("div",{key:0,"data-name":"leftUp",onMousedown:o[15]||(o[15]=t=>s.controlBtnMouseDown(t,"leftUp")),class:"leftUp controlBtn"},null,32)):m("",!0),!0===e.sizeChange?(n(),d("div",{key:1,"data-name":"leftDown",onMousedown:o[16]||(o[16]=t=>s.controlBtnMouseDown(t,"leftDown")),class:"leftDown controlBtn"},null,32)):m("",!0),!0===e.sizeChange?(n(),d("div",{key:2,"data-name":"rightUp",onMousedown:o[17]||(o[17]=t=>s.controlBtnMouseDown(t,"rightUp")),class:"rightUp controlBtn"},null,32)):m("",!0),!0===e.sizeChange?(n(),d("div",{key:3,"data-name":"rightDown",onMousedown:o[18]||(o[18]=t=>s.controlBtnMouseDown(t,"rightDown")),class:"rightDown controlBtn"},null,32)):m("",!0),!0===e.sizeChange&&!e.rate&&l.toolBox.width>20?(n(),d("div",{key:4,"data-name":"topCenter",onMousedown:o[19]||(o[19]=t=>s.controlBtnMouseDown(t,"topCenter")),class:"topCenter controlBtn"},null,32)):m("",!0),!0===e.sizeChange&&!e.rate&&l.toolBox.width>20?(n(),d("div",{key:5,"data-name":"downCenter",onMousedown:o[20]||(o[20]=t=>s.controlBtnMouseDown(t,"downCenter")),class:"downCenter controlBtn"},null,32)):m("",!0),!0===e.sizeChange&&!e.rate&&l.toolBox.height>20?(n(),d("div",{key:6,"data-name":"leftCenter",onMousedown:o[21]||(o[21]=t=>s.controlBtnMouseDown(t,"leftCenter")),class:"leftCenter controlBtn"},null,32)):m("",!0),!0===e.sizeChange&&!e.rate&&l.toolBox.height>20?(n(),d("div",{key:7,"data-name":"rightCenter",onMousedown:o[22]||(o[22]=t=>s.controlBtnMouseDown(t,"rightCenter")),class:"rightCenter controlBtn"},null,32)):m("",!0)]),o[49]||(o[49]=B("div",{class:"toolBoxControlLine toolBoxControlLineItem-1"},null,-1)),o[50]||(o[50]=B("div",{class:"toolBoxControlLine toolBoxControlLineItem-2"},null,-1)),o[51]||(o[51]=B("div",{class:"toolBoxControlLine toolBoxControlLineItem-3"},null,-1)),o[52]||(o[52]=B("div",{class:"toolBoxControlLine toolBoxControlLineItem-4"},null,-1))])],36),[[v,null!=l.drawImg.img]]),B("div",A,[e.DoNotDisplayCopyright?m("",!0):(n(),d("a",E," vue-img-cutter "+x(l.version),1))]),B("canvas",{class:"canvasSelectBox",ref:"canvasSelectBox",width:e.boxWidth,onMousedown:o[27]||(o[27]=(...t)=>s.dropImgOn&&s.dropImgOn(...t)),onMouseup:o[28]||(o[28]=(...t)=>s.dropImgOff&&s.dropImgOff(...t)),onMousemove:o[29]||(o[29]=(...t)=>s.dropImgMove&&s.dropImgMove(...t)),height:e.boxHeight},null,40,_),B("canvas",{class:"canvas",ref:"canvas",width:e.boxWidth,height:e.boxHeight},null,8,Y)],36)]),B("div",X,[B("input",{onChange:o[33]||(o[33]=(...t)=>s.putImgToCanv&&s.putImgToCanv(...t)),ref:"inputFile",type:"file",accept:e.accept,style:{width:"1px",height:"1px",border:"none",opacity:"0"}},null,40,G),B("span",{onClick:o[34]||(o[34]=(...t)=>s.chooseImg&&s.chooseImg(...t))},[g(t.$slots,"choose",{},(()=>[!0===e.showChooseBtn?(n(),d("div",V,x(e.label),1)):m("",!0)]),!0)]),B("div",K,[B("span",{onClick:o[35]||(o[35]=(...t)=>s.handleClose&&s.handleClose(...t))},[g(t.$slots,"cancel",{},(()=>[o[53]||(o[53]=B("button",{type:"button",class:"btn btn-default"},"取消",-1))]),!0)]),B("span",{onClick:o[36]||(o[36]=t=>s.cropPicture(!1))},[g(t.$slots,"confirm",{},(()=>[B("button",{type:"button",class:"btn btn-primary",style:{"margin-left":"15px"},disabled:!l.drawImg.img}," 确定 ",8,J)]),!0)])])])],6)])),_:3}),o[54]||(o[54]=B("div",{style:{clear:"both"}},null,-1))],2)):m("",!0)],2)):m("",!0)])),_:3})])}],["__scopeId","data-v-2274970f"]]),Z={class:"page-content"},tt={class:"cutter-container"},ot={class:"cutter-component"},et={class:"title"},it={key:0,class:"preview-container"},lt={class:"title"},st=["src"],at=h(b({__name:"CutterImg",props:{isModal:{type:Boolean,default:!1},tool:{type:Boolean,default:!0},toolBgc:{default:"#fff"},title:{default:"图像裁剪"},previewTitle:{default:"图像预览"},showPreview:{type:Boolean,default:!0},boxWidth:{default:700},boxHeight:{default:458},cutWidth:{default:470},cutHeight:{default:270},sizeChange:{type:Boolean,default:!0},moveAble:{type:Boolean,default:!0},imgMove:{type:Boolean,default:!0},scaleAble:{type:Boolean,default:!0},originalGraph:{type:Boolean,default:!0},crossOrigin:{type:Boolean,default:!0},fileType:{default:"png"},quality:{default:.9},watermarkText:{default:""},watermarkFontSize:{default:20},watermarkColor:{default:"#ffffff"},saveCutPosition:{type:Boolean,default:!0},previewMode:{type:Boolean,default:!0},imgUrl:{}},emits:["update:imgUrl","error","imageLoadComplete","imageLoadError"],setup(t,{emit:i}){const l=t,s=i,a=C(""),h=C(),g=M((()=>{return t=r({},l),i={WatermarkText:l.watermarkText,WatermarkFontSize:l.watermarkFontSize,WatermarkColor:l.watermarkColor},o(t,e(i));var t,i}));function u(){return t=this,o=null,e=function*(){var t,o;if(l.imgUrl)try{yield(o=l.imgUrl,new Promise(((t,e)=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>t(),i.onerror=e,i.src=o}))),null==(t=h.value)||t.handleOpen({name:"封面图片",src:l.imgUrl})}catch(e){s("error",e)}},new Promise(((i,l)=>{var s=t=>{try{r(e.next(t))}catch(o){l(o)}},a=t=>{try{r(e.throw(t))}catch(o){l(o)}},r=t=>t.done?i(t.value):Promise.resolve(t.value).then(s,a);r((e=e.apply(t,o)).next())}));var t,o,e}function p(t){a.value=t.dataURL}function I(t){s("update:imgUrl",t.dataURL)}function v(t){s("imageLoadComplete",t)}function b(t){s("error",t),s("imageLoadError",t)}function P(){a.value=""}function U(){const t=document.createElement("a");t.href=a.value,t.download="image.png",t.click()}return T((()=>{l.imgUrl&&(a.value=l.imgUrl,u())})),k((()=>l.imgUrl),(t=>{t&&(a.value=t,u())})),(t,o)=>{const e=L;return n(),d("div",Z,[B("div",tt,[B("div",ot,[B("div",et,x(t.title),1),c($(Q),O({ref_key:"imgCutterModal",ref:h,onCutDown:I,onOnPrintImg:p,onOnImageLoadComplete:v,onOnImageLoadError:b,onOnClearAll:P},g.value,{class:"img-cutter"}),{choose:w((()=>[c(e,{type:"primary",plain:""},{default:w((()=>o[0]||(o[0]=[y("选择图片")]))),_:1})])),cancel:w((()=>[c(e,{type:"danger",plain:""},{default:w((()=>o[1]||(o[1]=[y("清除")]))),_:1})])),confirm:w((()=>o[2]||(o[2]=[B("div",null,null,-1)]))),_:1},16)]),t.showPreview?(n(),d("div",it,[B("div",lt,x(t.previewTitle),1),B("div",{class:"preview-box",style:f({width:`${g.value.cutWidth}px`,height:`${g.value.cutHeight}px`})},[a.value?(n(),d("img",{key:0,class:"preview-img",src:a.value,alt:"预览图"},null,8,st)):m("",!0)],4),c(e,{class:"download-btn",onClick:U,disabled:!a.value},{default:w((()=>o[3]||(o[3]=[y("下载图片")]))),_:1},8,["disabled"])])):m("",!0)])])}}}),[["__scopeId","data-v-916e8348"]]),rt={class:"page-content"},ht=b({__name:"ImageCrop",setup(t){const o=C(U),e=t=>{},i=t=>{},l=t=>{};return(t,s)=>{const a=at;return n(),d("div",rt,[c(a,{style:{"margin-top":"20px"},imgUrl:$(o),"onUpdate:imgUrl":s[0]||(s[0]=t=>P(o)?o.value=t:null),boxWidth:540,boxHeight:300,cutWidth:360,cutHeight:200,quality:1,tool:!0,watermarkText:"My Watermark",watermarkColor:"#ff0000",showPreview:!0,originalGraph:!1,previewTitle:"预览效果",onError:e,onImageLoadComplete:i,onImageLoadError:l},null,8,["imgUrl"])])}}});export{ht as default};
