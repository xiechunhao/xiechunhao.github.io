"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[7821],{37821:function(e,t,i){i.r(t),i.d(t,{default:function(){return T}});var n,s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ele-body"},[t("el-card",{staticStyle:{overflow:"visible"},attrs:{shadow:"never",header:"二维码"}},[t("div",{ref:"printRef",staticClass:"demo-qrcode-images ele-bg-white"},[t("div",{staticClass:"demo-qrcode-image-item"},[t("div",{staticClass:"demo-qr-code-title"},[e._v("canvas 渲染")]),t("ele-qr-code",{attrs:{value:e.text,size:e.size,level:e.level,margin:e.margin,"image-settings":e.image}})],1),t("div",{staticClass:"demo-qrcode-image-item"},[t("div",{staticClass:"demo-qr-code-title"},[e._v("svg 渲染")]),t("ele-qr-code-svg",{attrs:{value:e.text,size:e.size,level:e.level,margin:e.margin,"image-settings":e.image}})],1)]),t("el-form",{staticStyle:{"max-width":"340px"},attrs:{"label-width":"88px"}},[t("el-form-item",{attrs:{label:"二维码内容"}},[t("el-input",{attrs:{maxlength:150},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),t("el-form-item",{attrs:{label:"容错等级"}},[t("el-select",{staticClass:"ele-fluid",model:{value:e.level,callback:function(t){e.level=t},expression:"level"}},[t("el-option",{attrs:{value:"L",label:"L"}}),t("el-option",{attrs:{value:"M",label:"M"}}),t("el-option",{attrs:{value:"Q",label:"Q"}}),t("el-option",{attrs:{value:"H",label:"H"}})],1)],1),t("el-form-item",{attrs:{label:"尺寸"}},[t("el-slider",{attrs:{min:80,max:280,step:40},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}})],1),t("el-form-item",{attrs:{label:"间距"}},[t("el-slider",{attrs:{min:0,max:20},model:{value:e.margin,callback:function(t){e.margin=t},expression:"margin"}})],1),t("el-form-item",{attrs:{label:"自定义图片"}},[t("el-switch",{on:{change:e.onShowImageChange},model:{value:e.showImage,callback:function(t){e.showImage=t},expression:"showImage"}})],1),e.showImage?[t("el-form-item",{attrs:{label:"图片地址"}},[t("el-input",{attrs:{maxlength:400},model:{value:e.image.src,callback:function(t){e.$set(e.image,"src",t)},expression:"image.src"}})],1),t("el-form-item",{attrs:{label:"图片宽高"}},[t("div",{staticClass:"ele-cell"},[t("div",{staticStyle:{width:"80px","margin-right":"20px"}},[t("el-input-number",{staticClass:"ele-fluid",attrs:{size:"mini",min:0,max:e.size,"controls-position":"right"},model:{value:e.image.width,callback:function(t){e.$set(e.image,"width",t)},expression:"image.width"}})],1),t("div",{staticStyle:{width:"80px"}},[t("el-input-number",{staticClass:"ele-fluid",attrs:{size:"mini",min:0,max:e.size,"controls-position":"right"},model:{value:e.image.height,callback:function(t){e.$set(e.image,"height",t)},expression:"image.height"}})],1)])]),t("el-form-item",{attrs:{label:"位置居中"}},[t("div",{staticClass:"ele-cell",staticStyle:{"min-height":"36px"}},[t("el-switch",{on:{change:e.onCenterChange},model:{value:e.center,callback:function(t){e.center=t},expression:"center"}}),e.center?e._e():[t("div",{staticStyle:{padding:"0 10px"}},[e._v("x")]),t("div",{staticStyle:{width:"80px"}},[t("el-input-number",{staticClass:"ele-fluid",attrs:{size:"mini",min:0,max:e.size,"controls-position":"right"},model:{value:e.image.x,callback:function(t){e.$set(e.image,"x",t)},expression:"image.x"}})],1),t("div",{staticStyle:{padding:"0 10px"}},[e._v("y")]),t("div",{staticStyle:{width:"80px"}},[t("el-input-number",{staticClass:"ele-fluid",attrs:{size:"mini",min:0,max:e.size,"controls-position":"right"},model:{value:e.image.y,callback:function(t){e.$set(e.image,"y",t)},expression:"image.y"}})],1)]],2)]),t("el-form-item",{attrs:{label:"背景擦除"}},[t("el-switch",{model:{value:e.image.excavate,callback:function(t){e.$set(e.image,"excavate",t)},expression:"image.excavate"}})],1),t("el-form-item",[t("div",[t("el-button",{attrs:{type:"primary"},on:{click:e.print}},[e._v("打印")])],1)])]:e._e()],2)],1)],1)},r=[];(function(e){class t{constructor(e,i,n,r){if(this.version=e,this.errorCorrectionLevel=i,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version value out of range");if(r<-1||r>7)throw new RangeError("Mask value out of range");this.size=4*e+17;let o=[];for(let t=0;t<this.size;t++)o.push(!1);for(let t=0;t<this.size;t++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();const a=this.addEccAndInterleave(n);if(this.drawCodewords(a),-1==r){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);const i=this.getPenaltyScore();i<e&&(r=t,e=i),this.applyMask(t)}}s(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}static encodeText(i,n){const s=e.QrSegment.makeSegments(i);return t.encodeSegments(s,n)}static encodeBinary(i,n){const s=e.QrSegment.makeBytes(i);return t.encodeSegments([s],n)}static encodeSegments(e,n,o=1,a=40,l=-1,h=!0){if(!(t.MIN_VERSION<=o&&o<=a&&a<=t.MAX_VERSION)||l<-1||l>7)throw new RangeError("Invalid value");let c,u;for(c=o;;c++){const i=8*t.getNumDataCodewords(c,n),s=r.getTotalBits(e,c);if(s<=i){u=s;break}if(c>=a)throw new RangeError("Data too long")}for(const i of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])h&&u<=8*t.getNumDataCodewords(c,i)&&(n=i);let d=[];for(const t of e){i(t.mode.modeBits,4,d),i(t.numChars,t.mode.numCharCountBits(c),d);for(const e of t.getData())d.push(e)}s(d.length==u);const m=8*t.getNumDataCodewords(c,n);s(d.length<=m),i(0,Math.min(4,m-d.length),d),i(0,(8-d.length%8)%8,d),s(d.length%8==0);for(let t=236;d.length<m;t^=253)i(t,8,d);let f=[];while(8*f.length<d.length)f.push(0);return d.forEach(((e,t)=>f[t>>>3]|=e<<7-(7&t))),new t(c,n,f,l)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let i=0;i<this.size;i++)this.setFunctionModule(6,i,i%2==0),this.setFunctionModule(i,6,i%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let i=0;i<t;i++)for(let n=0;n<t;n++)0==i&&0==n||0==i&&n==t-1||i==t-1&&0==n||this.drawAlignmentPattern(e[i],e[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let i=t;for(let n=0;n<10;n++)i=i<<1^1335*(i>>>9);const r=21522^(t<<10|i);s(r>>>15==0);for(let s=0;s<=5;s++)this.setFunctionModule(8,s,n(r,s));this.setFunctionModule(8,7,n(r,6)),this.setFunctionModule(8,8,n(r,7)),this.setFunctionModule(7,8,n(r,8));for(let s=9;s<15;s++)this.setFunctionModule(14-s,8,n(r,s));for(let s=0;s<8;s++)this.setFunctionModule(this.size-1-s,8,n(r,s));for(let s=8;s<15;s++)this.setFunctionModule(8,this.size-15+s,n(r,s));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let i=0;i<12;i++)e=e<<1^7973*(e>>>11);const t=this.version<<12|e;s(t>>>18==0);for(let i=0;i<18;i++){const e=n(t,i),s=this.size-11+i%3,r=Math.floor(i/3);this.setFunctionModule(s,r,e),this.setFunctionModule(r,s,e)}}drawFinderPattern(e,t){for(let i=-4;i<=4;i++)for(let n=-4;n<=4;n++){const s=Math.max(Math.abs(n),Math.abs(i)),r=e+n,o=t+i;0<=r&&r<this.size&&0<=o&&o<this.size&&this.setFunctionModule(r,o,2!=s&&4!=s)}}drawAlignmentPattern(e,t){for(let i=-2;i<=2;i++)for(let n=-2;n<=2;n++)this.setFunctionModule(e+n,t+i,1!=Math.max(Math.abs(n),Math.abs(i)))}setFunctionModule(e,t,i){this.modules[t][e]=i,this.isFunction[t][e]=!0}addEccAndInterleave(e){const i=this.version,n=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(i,n))throw new RangeError("Invalid argument");const r=t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][i],o=t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][i],a=Math.floor(t.getNumRawDataModules(i)/8),l=r-a%r,h=Math.floor(a/r);let c=[];const u=t.reedSolomonComputeDivisor(o);for(let s=0,m=0;s<r;s++){let i=e.slice(m,m+h-o+(s<l?0:1));m+=i.length;const n=t.reedSolomonComputeRemainder(i,u);s<l&&i.push(0),c.push(i.concat(n))}let d=[];for(let t=0;t<c[0].length;t++)c.forEach(((e,i)=>{(t!=h-o||i>=l)&&d.push(e[t])}));return s(d.length==a),d}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let i=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let s=0;s<this.size;s++)for(let r=0;r<2;r++){const o=t-r,a=0==(t+1&2),l=a?this.size-1-s:s;!this.isFunction[l][o]&&i<8*e.length&&(this.modules[l][o]=n(e[i>>>3],7-(7&i)),i++)}}s(i==8*e.length)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let i=0;i<this.size;i++){let n;switch(e){case 0:n=(i+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=i%3==0;break;case 3:n=(i+t)%3==0;break;case 4:n=(Math.floor(i/3)+Math.floor(t/2))%2==0;break;case 5:n=i*t%2+i*t%3==0;break;case 6:n=(i*t%2+i*t%3)%2==0;break;case 7:n=((i+t)%2+i*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][i]&&n&&(this.modules[t][i]=!this.modules[t][i])}}getPenaltyScore(){let e=0;for(let s=0;s<this.size;s++){let i=!1,n=0,r=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[s][o]==i?(n++,5==n?e+=t.PENALTY_N1:n>5&&e++):(this.finderPenaltyAddHistory(n,r),i||(e+=this.finderPenaltyCountPatterns(r)*t.PENALTY_N3),i=this.modules[s][o],n=1);e+=this.finderPenaltyTerminateAndCount(i,n,r)*t.PENALTY_N3}for(let s=0;s<this.size;s++){let i=!1,n=0,r=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[o][s]==i?(n++,5==n?e+=t.PENALTY_N1:n>5&&e++):(this.finderPenaltyAddHistory(n,r),i||(e+=this.finderPenaltyCountPatterns(r)*t.PENALTY_N3),i=this.modules[o][s],n=1);e+=this.finderPenaltyTerminateAndCount(i,n,r)*t.PENALTY_N3}for(let s=0;s<this.size-1;s++)for(let i=0;i<this.size-1;i++){const n=this.modules[s][i];n==this.modules[s][i+1]&&n==this.modules[s+1][i]&&n==this.modules[s+1][i+1]&&(e+=t.PENALTY_N2)}let i=0;for(const t of this.modules)i=t.reduce(((e,t)=>e+(t?1:0)),i);const n=this.size*this.size,r=Math.ceil(Math.abs(20*i-10*n)/n)-1;return s(0<=r&&r<=9),e+=r*t.PENALTY_N4,s(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{const e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2));let i=[6];for(let n=this.size-7;i.length<e;n-=t)i.splice(1,0,n);return i}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version number out of range");let i=(16*e+128)*e+64;if(e>=2){const t=Math.floor(e/7)+2;i-=(25*t-10)*t-55,e>=7&&(i-=36)}return s(208<=i&&i<=29648),i}static getNumDataCodewords(e,i){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let i=[];for(let t=0;t<e-1;t++)i.push(0);i.push(1);let n=1;for(let s=0;s<e;s++){for(let e=0;e<i.length;e++)i[e]=t.reedSolomonMultiply(i[e],n),e+1<i.length&&(i[e]^=i[e+1]);n=t.reedSolomonMultiply(n,2)}return i}static reedSolomonComputeRemainder(e,i){let n=i.map((e=>0));for(const s of e){const e=s^n.shift();n.push(0),i.forEach(((i,s)=>n[s]^=t.reedSolomonMultiply(i,e)))}return n}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");let i=0;for(let n=7;n>=0;n--)i=i<<1^285*(i>>>7),i^=(t>>>n&1)*e;return s(i>>>8==0),i}finderPenaltyCountPatterns(e){const t=e[1];s(t<=3*this.size);const i=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(i&&e[0]>=4*t&&e[6]>=t?1:0)+(i&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,i){return e&&(this.finderPenaltyAddHistory(t,i),t=0),t+=this.size,this.finderPenaltyAddHistory(t,i),this.finderPenaltyCountPatterns(i)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}}function i(e,t,i){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range");for(let n=t-1;n>=0;n--)i.push(e>>>n&1)}function n(e,t){return 0!=(e>>>t&1)}function s(e){if(!e)throw new Error("Assertion error")}t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;class r{constructor(e,t,i){if(this.mode=e,this.numChars=t,this.bitData=i,t<0)throw new RangeError("Invalid argument");this.bitData=i.slice()}static makeBytes(e){let t=[];for(const n of e)i(n,8,t);return new r(r.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!r.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let n=0;n<e.length;){const s=Math.min(e.length-n,3);i(parseInt(e.substr(n,s),10),3*s+1,t),n+=s}return new r(r.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!r.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t,n=[];for(t=0;t+2<=e.length;t+=2){let s=45*r.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t));s+=r.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),i(s,11,n)}return t<e.length&&i(r.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,n),new r(r.Mode.ALPHANUMERIC,e.length,n)}static makeSegments(e){return""==e?[]:r.isNumeric(e)?[r.makeNumeric(e)]:r.isAlphanumeric(e)?[r.makeAlphanumeric(e)]:[r.makeBytes(r.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)i(e,8,t);else if(e<16384)i(2,2,t),i(e,14,t);else{if(!(e<1e6))throw new RangeError("ECI assignment value out of range");i(6,3,t),i(e,21,t)}return new r(r.Mode.ECI,0,t)}static isNumeric(e){return r.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return r.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let i=0;for(const n of e){const e=n.mode.numCharCountBits(t);if(n.numChars>=1<<e)return 1/0;i+=4+e+n.bitData.length}return i}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let i=0;i<e.length;i++)"%"!=e.charAt(i)?t.push(e.charCodeAt(i)):(t.push(parseInt(e.substr(i+1,2),16)),i+=2);return t}}r.NUMERIC_REGEX=/^[0-9]*$/,r.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,r.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=r})(n||(n={})),function(e){(function(e){class t{constructor(e,t){this.ordinal=e,this.formatBits=t}}t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),e.Ecc=t})(e.QrCode||(e.QrCode={}))}(n||(n={})),function(e){(function(e){class t{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}}t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),e.Mode=t})(e.QrSegment||(e.QrSegment={}))}(n||(n={}));var o=n,a={value:String,size:{type:Number,default:128},level:{type:String,default:"L"},bgColor:{type:String,default:"#FFFFFF"},fgColor:{type:String,default:"#000000"},margin:{type:Number,default:0},imageSettings:Object,customerStyle:Object};const l={L:o.QrCode.Ecc.LOW,M:o.QrCode.Ecc.MEDIUM,Q:o.QrCode.Ecc.QUARTILE,H:o.QrCode.Ecc.HIGH},h=.1,c=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function u(e,t,i,n){if(null==e||!e.src)return null;const s=n.length+2*i,r=Math.floor(t*h),o=s/t,a=(e.width||r)*o,l=(e.height||r)*o,c=null==e.x?n.length/2-a/2:e.x*o,u=null==e.y?n.length/2-l/2:e.y*o;let d=null;if(e.excavate){const e=Math.floor(c),t=Math.floor(u),i=Math.ceil(a+c-e),n=Math.ceil(l+u-t);d={x:e,y:t,w:i,h:n}}return{x:c,y:u,h:l,w:a,excavation:d}}function d(e,t){return e.slice().map(((e,i)=>i<t.y||i>=t.y+t.h?e:e.map(((e,i)=>(i<t.x||i>=t.x+t.w)&&e))))}function m(e,t=0){const i=[];return e.forEach((function(e,n){let s=null;e.forEach((function(r,o){if(!r&&null!==s)return i.push(`M${s+t} ${n+t}h${o-s}v1H${s+t}z`),void(s=null);if(o!==e.length-1)r&&null===s&&(s=o);else{if(!r)return;null===s?i.push(`M${o+t},${n+t} h1v1H${o+t}z`):i.push(`M${s+t},${n+t} h${o+1-s}v1H${s+t}z`)}}))})),i.join("")}var f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"ele-qr-code"},[i("canvas",{ref:"canvasRef",style:e.canvasStyle,attrs:{height:e.size,width:e.size}}),e.imageSrc?i("img",{ref:"imageRef",style:{display:"none"},attrs:{src:e.imageSrc},on:{load:e.render}}):e._e()])},g=[];function p(e,t,i,n,s,r,o,a){var l,h="function"===typeof e?e.options:e;if(t&&(h.render=t,h.staticRenderFns=i,h._compiled=!0),n&&(h.functional=!0),r&&(h._scopeId="data-v-"+r),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},h._ssrRegister=l):s&&(l=a?function(){s.call(this,(h.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(h.functional){h._injectStyles=l;var c=h.render;h.render=function(e,t){return l.call(t),c(e,t)}}else{var u=h.beforeCreate;h.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:h}}const v={name:"EleQrCode",props:a,emits:["done"],computed:{imageSrc(){var e;return null==(e=this.imageSettings)?void 0:e.src},canvasStyle(){var e;return[{height:`${this.size}px`,width:`${this.size}px`},null!=(e=this.customerStyle)?e:{}]}},methods:{render(){const{value:e,size:t,level:i,bgColor:n,fgColor:s,margin:r,imageSettings:a}=this,h=this.$refs.canvasRef;if(null==h)return;const f=h.getContext("2d");if(!f)return;if(!e)return void f.clearRect(0,0,h.width,h.height);let g=o.QrCode.encodeText(e,l[i]).getModules();const p=g.length+2*r,v=u(a,t,r,g),C=this.$refs.imageRef,w=null!=v&&null!=C&&C.complete&&0!==C.naturalHeight&&0!==C.naturalWidth;w&&null!=v.excavation&&(g=d(g,v.excavation));const E=window.devicePixelRatio||1;h.height=h.width=t*E;const _=t/p*E;f.scale(_,_),f.fillStyle=n,f.fillRect(0,0,p,p),f.fillStyle=s,c?f.fill(new Path2D(m(g,r))):g.forEach((function(e,t){e.forEach((function(e,i){e&&f.fillRect(i+r,t+r,1,1)}))})),w&&f.drawImage(C,v.x+r,v.y+r,v.w,v.h),this.$emit("done")}},watch:{value(){this.render()},level(){this.render()},bgColor(){this.render()},fgColor(){this.render()},margin(){this.render()},size(){this.$nextTick((()=>{this.render()}))},imageSettings:{handler(){this.render()},deep:!0}},mounted(){this.render()}},C={};var w=p(v,f,g,!1,E,null,null,null);function E(e){for(let t in C)this[t]=C[t]}var _=function(){return w.exports}(),M=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"ele-qr-code"},[e.viewBox?i("svg",{attrs:{shapeRendering:"crispEdges",height:e.size,width:e.size,viewBox:e.viewBox}},[i("path",{attrs:{fill:e.bgColor,d:e.path}}),i("path",{attrs:{fill:e.fgColor,d:e.fgPath}}),e.imageSrc?i("image",{attrs:{"xlink:href":e.imageSrc,height:e.imageHeight,width:e.imageWidth,x:e.imageX,y:e.imageY,preserveAspectRatio:"none"}}):e._e()]):e._e()])},R=[];function x(e,t,i,n,s,r,o,a){var l,h="function"===typeof e?e.options:e;if(t&&(h.render=t,h.staticRenderFns=i,h._compiled=!0),n&&(h.functional=!0),r&&(h._scopeId="data-v-"+r),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},h._ssrRegister=l):s&&(l=a?function(){s.call(this,(h.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(h.functional){h._injectStyles=l;var c=h.render;h.render=function(e,t){return l.call(t),c(e,t)}}else{var u=h.beforeCreate;h.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:h}}const S={name:"EleQrCodeSvg",props:a,emits:["done"],data(){return{viewBox:"",path:"",fgPath:"",imageHeight:0,imageWidth:0,imageX:0,imageY:0}},computed:{imageSrc(){var e;return null==(e=this.imageSettings)?void 0:e.src}},methods:{render(){const{value:e,size:t,level:i,margin:n,imageSettings:s}=this;if(!e)return void(this.viewBox="");let r=o.QrCode.encodeText(e,l[i]).getModules();const a=r.length+2*n,h=u(s,t,n,r);null!=s&&null!=h&&(null!=h.excavation&&(r=d(r,h.excavation)),this.imageHeight=h.h,this.imageWidth=h.w,this.imageX=h.x+n,this.imageY=h.y+n),this.viewBox=`0 0 ${a} ${a}`,this.path=`M0,0 h${a}v${a}H0z`,this.fgPath=m(r,n),this.$emit("done")}},watch:{imageSettings:{handler(){this.render()},deep:!0},value(){this.render()},size(){this.render()},level(){this.render()},margin(){this.render()}},created(){this.render()}},y={};var N=x(S,M,R,!1,b,null,null,null);function b(e){for(let t in y)this[t]=y[t]}var A=function(){return N.exports}(),z=i(4062);const P="https://cdn.eleadmin.com/20200610/logo-radius.png";var I={name:"ExtensionQrCode",components:{EleQrCode:_,EleQrCodeSvg:A},data(){return{text:"https://eleadmin.com",level:"L",size:120,margin:0,showImage:!0,image:{src:P,width:28,height:28,x:void 0,y:void 0,excavate:!1},center:!0}},methods:{onShowImageChange(e){this.image.src=e?P:void 0},onCenterChange(e){e?(this.image.x=void 0,this.image.y=void 0):(this.image.x=0,this.image.y=0)},print(){(0,z.WO)(this.$refs.printRef)}}},$=I,k=i(64008),O=(0,k.A)($,s,r,!1,null,"63f0c904",null),T=O.exports}}]);