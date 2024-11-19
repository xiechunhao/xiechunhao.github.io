import{L as T,r as S,J as D,R as z,o as v,m as B,e as O,a8 as F}from"./index-C4BxmZrN.js";var U=Object.defineProperty,k=(n,a,l)=>a in n?U(n,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[a]=l,M=(n,a,l)=>(k(n,typeof a!="symbol"?a+"":a,l),l),I;(n=>{const a=class c{constructor(t,o,e,s){if(M(this,"size"),M(this,"mask"),M(this,"modules",[]),M(this,"isFunction",[]),this.version=t,this.errorCorrectionLevel=o,t<c.MIN_VERSION||t>c.MAX_VERSION)throw"Version value out of range";if(s<-1||s>7)throw"Mask value out of range";this.size=t*4+17;let i=[];for(let r=0;r<this.size;r++)i.push(!1);for(let r=0;r<this.size;r++)this.modules.push(i.slice()),this.isFunction.push(i.slice());this.drawFunctionPatterns();const h=this.addEccAndInterleave(e);if(this.drawCodewords(h),s==-1){let r=1e9;for(let m=0;m<8;m++){this.applyMask(m),this.drawFormatBits(m);const d=this.getPenaltyScore();d<r&&(s=m,r=d),this.applyMask(m)}}u(0<=s&&s<=7),this.mask=s,this.applyMask(s),this.drawFormatBits(s),this.isFunction=[]}static encodeText(t,o){const e=n.QrSegment.makeSegments(t);return c.encodeSegments(e,o)}static encodeBinary(t,o){const e=n.QrSegment.makeBytes(t);return c.encodeSegments([e],o)}static encodeSegments(t,o,e=1,s=40,i=-1,h=!0){if(!(c.MIN_VERSION<=e&&e<=s&&s<=c.MAX_VERSION)||i<-1||i>7)throw"Invalid value";let r,m;for(r=e;;r++){const C=c.getNumDataCodewords(r,o)*8,P=p.getTotalBits(t,r);if(P<=C){m=P;break}if(r>=s)throw"Data too long"}for(const C of[c.Ecc.MEDIUM,c.Ecc.QUARTILE,c.Ecc.HIGH])h&&m<=c.getNumDataCodewords(r,C)*8&&(o=C);let d=[];for(const C of t){f(C.mode.modeBits,4,d),f(C.numChars,C.mode.numCharCountBits(r),d);for(const P of C.getData())d.push(P)}u(d.length==m);const N=c.getNumDataCodewords(r,o)*8;u(d.length<=N),f(0,Math.min(4,N-d.length),d),f(0,(8-d.length%8)%8,d),u(d.length%8==0);for(let C=236;d.length<N;C^=253)f(C,8,d);let R=[];for(;R.length*8<d.length;)R.push(0);return d.forEach((C,P)=>R[P>>>3]|=C<<7-(P&7)),new c(r,o,R,i)}getModule(t,o){return 0<=t&&t<this.size&&0<=o&&o<this.size&&this.modules[o][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),o=t.length;for(let e=0;e<o;e++)for(let s=0;s<o;s++)e==0&&s==0||e==0&&s==o-1||e==o-1&&s==0||this.drawAlignmentPattern(t[e],t[s]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const o=this.errorCorrectionLevel.formatBits<<3|t;let e=o;for(let i=0;i<10;i++)e=e<<1^(e>>>9)*1335;const s=(o<<10|e)^21522;u(s>>>15==0);for(let i=0;i<=5;i++)this.setFunctionModule(8,i,g(s,i));this.setFunctionModule(8,7,g(s,6)),this.setFunctionModule(8,8,g(s,7)),this.setFunctionModule(7,8,g(s,8));for(let i=9;i<15;i++)this.setFunctionModule(14-i,8,g(s,i));for(let i=0;i<8;i++)this.setFunctionModule(this.size-1-i,8,g(s,i));for(let i=8;i<15;i++)this.setFunctionModule(8,this.size-15+i,g(s,i));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let e=0;e<12;e++)t=t<<1^(t>>>11)*7973;const o=this.version<<12|t;u(o>>>18==0);for(let e=0;e<18;e++){const s=g(o,e),i=this.size-11+e%3,h=Math.floor(e/3);this.setFunctionModule(i,h,s),this.setFunctionModule(h,i,s)}}drawFinderPattern(t,o){for(let e=-4;e<=4;e++)for(let s=-4;s<=4;s++){const i=Math.max(Math.abs(s),Math.abs(e)),h=t+s,r=o+e;0<=h&&h<this.size&&0<=r&&r<this.size&&this.setFunctionModule(h,r,i!=2&&i!=4)}}drawAlignmentPattern(t,o){for(let e=-2;e<=2;e++)for(let s=-2;s<=2;s++)this.setFunctionModule(t+s,o+e,Math.max(Math.abs(s),Math.abs(e))!=1)}setFunctionModule(t,o,e){this.modules[o][t]=e,this.isFunction[o][t]=!0}addEccAndInterleave(t){const o=this.version,e=this.errorCorrectionLevel;if(t.length!=c.getNumDataCodewords(o,e))throw"Invalid argument";const s=c.NUM_ERROR_CORRECTION_BLOCKS[e.ordinal][o],i=c.ECC_CODEWORDS_PER_BLOCK[e.ordinal][o],h=Math.floor(c.getNumRawDataModules(o)/8),r=s-h%s,m=Math.floor(h/s);let d=[];const N=c.reedSolomonComputeDivisor(i);for(let C=0,P=0;C<s;C++){let b=t.slice(P,P+m-i+(C<r?0:1));P+=b.length;const L=c.reedSolomonComputeRemainder(b,N);C<r&&b.push(0),d.push(b.concat(L))}let R=[];for(let C=0;C<d[0].length;C++)d.forEach((P,b)=>{(C!=m-i||b>=r)&&R.push(P[C])});return u(R.length==h),R}drawCodewords(t){if(t.length!=Math.floor(c.getNumRawDataModules(this.version)/8))throw"Invalid argument";let o=0;for(let e=this.size-1;e>=1;e-=2){e==6&&(e=5);for(let s=0;s<this.size;s++)for(let i=0;i<2;i++){const h=e-i,m=(e+1&2)==0?this.size-1-s:s;!this.isFunction[m][h]&&o<t.length*8&&(this.modules[m][h]=g(t[o>>>3],7-(o&7)),o++)}}u(o==t.length*8)}applyMask(t){if(t<0||t>7)throw"Mask value out of range";for(let o=0;o<this.size;o++)for(let e=0;e<this.size;e++){let s;switch(t){case 0:s=(e+o)%2==0;break;case 1:s=o%2==0;break;case 2:s=e%3==0;break;case 3:s=(e+o)%3==0;break;case 4:s=(Math.floor(e/3)+Math.floor(o/2))%2==0;break;case 5:s=e*o%2+e*o%3==0;break;case 6:s=(e*o%2+e*o%3)%2==0;break;case 7:s=((e+o)%2+e*o%3)%2==0;break;default:throw"Unreachable"}!this.isFunction[o][e]&&s&&(this.modules[o][e]=!this.modules[o][e])}}getPenaltyScore(){let t=0;for(let i=0;i<this.size;i++){let h=!1,r=0,m=[0,0,0,0,0,0,0];for(let d=0;d<this.size;d++)this.modules[i][d]==h?(r++,r==5?t+=c.PENALTY_N1:r>5&&t++):(this.finderPenaltyAddHistory(r,m),h||(t+=this.finderPenaltyCountPatterns(m)*c.PENALTY_N3),h=this.modules[i][d],r=1);t+=this.finderPenaltyTerminateAndCount(h,r,m)*c.PENALTY_N3}for(let i=0;i<this.size;i++){let h=!1,r=0,m=[0,0,0,0,0,0,0];for(let d=0;d<this.size;d++)this.modules[d][i]==h?(r++,r==5?t+=c.PENALTY_N1:r>5&&t++):(this.finderPenaltyAddHistory(r,m),h||(t+=this.finderPenaltyCountPatterns(m)*c.PENALTY_N3),h=this.modules[d][i],r=1);t+=this.finderPenaltyTerminateAndCount(h,r,m)*c.PENALTY_N3}for(let i=0;i<this.size-1;i++)for(let h=0;h<this.size-1;h++){const r=this.modules[i][h];r==this.modules[i][h+1]&&r==this.modules[i+1][h]&&r==this.modules[i+1][h+1]&&(t+=c.PENALTY_N2)}let o=0;for(const i of this.modules)o=i.reduce((h,r)=>h+(r?1:0),o);const e=this.size*this.size,s=Math.ceil(Math.abs(o*20-e*10)/e)-1;return u(0<=s&&s<=9),t+=s*c.PENALTY_N4,u(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(this.version==1)return[];{const t=Math.floor(this.version/7)+2,o=this.version==32?26:Math.ceil((this.version*4+4)/(t*2-2))*2;let e=[6];for(let s=this.size-7;e.length<t;s-=o)e.splice(1,0,s);return e}}static getNumRawDataModules(t){if(t<c.MIN_VERSION||t>c.MAX_VERSION)throw"Version number out of range";let o=(16*t+128)*t+64;if(t>=2){const e=Math.floor(t/7)+2;o-=(25*e-10)*e-55,t>=7&&(o-=36)}return u(208<=o&&o<=29648),o}static getNumDataCodewords(t,o){return Math.floor(c.getNumRawDataModules(t)/8)-c.ECC_CODEWORDS_PER_BLOCK[o.ordinal][t]*c.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw"Degree out of range";let o=[];for(let s=0;s<t-1;s++)o.push(0);o.push(1);let e=1;for(let s=0;s<t;s++){for(let i=0;i<o.length;i++)o[i]=c.reedSolomonMultiply(o[i],e),i+1<o.length&&(o[i]^=o[i+1]);e=c.reedSolomonMultiply(e,2)}return o}static reedSolomonComputeRemainder(t,o){let e=o.map(s=>0);for(const s of t){const i=s^e.shift();e.push(0),o.forEach((h,r)=>e[r]^=c.reedSolomonMultiply(h,i))}return e}static reedSolomonMultiply(t,o){if(t>>>8||o>>>8)throw"Byte out of range";let e=0;for(let s=7;s>=0;s--)e=e<<1^(e>>>7)*285,e^=(o>>>s&1)*t;return u(e>>>8==0),e}finderPenaltyCountPatterns(t){const o=t[1];u(o<=this.size*3);const e=o>0&&t[2]==o&&t[3]==o*3&&t[4]==o&&t[5]==o;return(e&&t[0]>=o*4&&t[6]>=o?1:0)+(e&&t[6]>=o*4&&t[0]>=o?1:0)}finderPenaltyTerminateAndCount(t,o,e){return t&&(this.finderPenaltyAddHistory(o,e),o=0),o+=this.size,this.finderPenaltyAddHistory(o,e),this.finderPenaltyCountPatterns(e)}finderPenaltyAddHistory(t,o){o[0]==0&&(t+=this.size),o.pop(),o.unshift(t)}};M(a,"MIN_VERSION",1),M(a,"MAX_VERSION",40),M(a,"PENALTY_N1",3),M(a,"PENALTY_N2",3),M(a,"PENALTY_N3",40),M(a,"PENALTY_N4",10),M(a,"ECC_CODEWORDS_PER_BLOCK",[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]]),M(a,"NUM_ERROR_CORRECTION_BLOCKS",[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]]);let l=a;n.QrCode=l;function f(A,t,o){if(t<0||t>31||A>>>t)throw"Value out of range";for(let e=t-1;e>=0;e--)o.push(A>>>e&1)}function g(A,t){return(A>>>t&1)!=0}function u(A){if(!A)throw"Assertion error"}const w=class E{constructor(t,o,e){if(this.mode=t,this.numChars=o,this.bitData=e,o<0)throw"Invalid argument";this.bitData=e.slice()}static makeBytes(t){let o=[];for(const e of t)f(e,8,o);return new E(E.Mode.BYTE,t.length,o)}static makeNumeric(t){if(!E.isNumeric(t))throw"String contains non-numeric characters";let o=[];for(let e=0;e<t.length;){const s=Math.min(t.length-e,3);f(Number.parseInt(t.substr(e,s),10),s*3+1,o),e+=s}return new E(E.Mode.NUMERIC,t.length,o)}static makeAlphanumeric(t){if(!E.isAlphanumeric(t))throw"String contains unencodable characters in alphanumeric mode";let o=[],e;for(e=0;e+2<=t.length;e+=2){let s=E.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e))*45;s+=E.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e+1)),f(s,11,o)}return e<t.length&&f(E.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e)),6,o),new E(E.Mode.ALPHANUMERIC,t.length,o)}static makeSegments(t){return t==""?[]:E.isNumeric(t)?[E.makeNumeric(t)]:E.isAlphanumeric(t)?[E.makeAlphanumeric(t)]:[E.makeBytes(E.toUtf8ByteArray(t))]}static makeEci(t){let o=[];if(t<0)throw"ECI assignment value out of range";if(t<128)f(t,8,o);else if(t<16384)f(2,2,o),f(t,14,o);else if(t<1e6)f(6,3,o),f(t,21,o);else throw"ECI assignment value out of range";return new E(E.Mode.ECI,0,o)}static isNumeric(t){return E.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return E.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,o){let e=0;for(const s of t){const i=s.mode.numCharCountBits(o);if(s.numChars>=1<<i)return 1/0;e+=4+i+s.bitData.length}return e}static toUtf8ByteArray(t){t=encodeURI(t);let o=[];for(let e=0;e<t.length;e++)t.charAt(e)!="%"?o.push(t.charCodeAt(e)):(o.push(Number.parseInt(t.substr(e+1,2),16)),e+=2);return o}};M(w,"NUMERIC_REGEX",/^[0-9]*$/),M(w,"ALPHANUMERIC_REGEX",/^[A-Z0-9 $%*+.\/:-]*$/),M(w,"ALPHANUMERIC_CHARSET","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");let p=w;n.QrSegment=p})(I||(I={}));(n=>{(a=>{const l=class{constructor(u,w){this.ordinal=u,this.formatBits=w}};M(l,"LOW",new l(0,1)),M(l,"MEDIUM",new l(1,0)),M(l,"QUARTILE",new l(2,3)),M(l,"HIGH",new l(3,2));let f=l;a.Ecc=f})(n.QrCode||(n.QrCode={}))})(I||(I={}));(n=>{(a=>{const l=class{constructor(u,w){this.modeBits=u,this.numBitsCharCount=w}numCharCountBits(u){return this.numBitsCharCount[Math.floor((u+7)/17)]}};M(l,"NUMERIC",new l(1,[10,12,14])),M(l,"ALPHANUMERIC",new l(2,[9,11,13])),M(l,"BYTE",new l(4,[8,16,16])),M(l,"KANJI",new l(8,[8,10,12])),M(l,"ECI",new l(7,[0,0,0]));let f=l;a.Mode=f})(n.QrSegment||(n.QrSegment={}))})(I||(I={}));const y=I,Q={value:String,size:{type:Number,default:128},level:{type:String,default:"L"},bgColor:{type:String,default:"#FFFFFF"},fgColor:{type:String,default:"#000000"},margin:{type:Number,default:0},imageSettings:Object,customStyle:Object},$={done:()=>!0},H={L:y.QrCode.Ecc.LOW,M:y.QrCode.Ecc.MEDIUM,Q:y.QrCode.Ecc.QUARTILE,H:y.QrCode.Ecc.HIGH},Y=.1,st=function(){try{new Path2D().addPath(new Path2D)}catch(n){return!1}return!0}();function _(n,a,l,f){if(n==null||!n.src)return null;const g=f.length+l*2,u=Math.floor(a*Y),w=g/a,p=(n.width||u)*w,A=(n.height||u)*w,t=n.x==null?f.length/2-p/2:n.x*w,o=n.y==null?f.length/2-A/2:n.y*w;let e=null;if(n.excavate){const s=Math.floor(t),i=Math.floor(o),h=Math.ceil(p+t-s),r=Math.ceil(A+o-i);e={x:s,y:i,w:h,h:r}}return{x:t,y:o,h:A,w:p,excavation:e}}function X(n,a){return n.slice().map((l,f)=>f<a.y||f>=a.y+a.h?l:l.map((g,u)=>u<a.x||u>=a.x+a.w?g:!1))}function G(n,a=0){const l=[];return n.forEach(function(f,g){let u=null;f.forEach(function(w,p){if(!w&&u!==null){l.push(`M${u+a} ${g+a}h${p-u}v1H${u+a}z`),u=null;return}if(p===f.length-1){if(!w)return;u===null?l.push(`M${p+a},${g+a} h1v1H${p+a}z`):l.push(`M${u+a},${g+a} h${p+1-u}v1H${u+a}z`);return}w&&u===null&&(u=p)})}),l.join("")}const W=T({name:"EleQrCodeSvg",props:Q,emits:$,setup(n,{emit:a}){const l=S(""),f=S(""),g=S(""),u=S(0),w=S(0),p=S(0),A=S(0),t=D(()=>{var e;return(e=n.imageSettings)==null?void 0:e.src}),o=()=>{const{value:e,size:s,level:i,margin:h,imageSettings:r}=n;if(!e){l.value="";return}let m=y.QrCode.encodeText(e,H[i]).getModules();const d=m.length+h*2,N=_(r,s,h,m);r!=null&&N!=null&&(N.excavation!=null&&(m=X(m,N.excavation)),u.value=N.h,w.value=N.w,p.value=N.x+h,A.value=N.y+h),l.value=`0 0 ${d} ${d}`,f.value=`M0,0 h${d}v${d}H0z`,g.value=G(m,h),a("done")};return z([()=>n.value,()=>n.size,()=>n.level,()=>n.margin],()=>{o()},{immediate:!0}),z(()=>n.imageSettings,()=>{o()},{deep:!0}),{viewBox:l,path:f,fgPath:g,imageHeight:u,imageWidth:w,imageX:p,imageY:A,imageSrc:t,render:o}}}),K=(n,a)=>{const l=n.__vccOpts||n;for(const[f,g]of a)l[f]=g;return l},V={class:"ele-qr-code"},j=["height","width","viewBox"],J=["fill","d"],Z=["fill","d"],q=["xlink:href","height","width","x","y"];function x(n,a,l,f,g,u){return v(),B("span",V,[n.viewBox?(v(),B("svg",{key:0,shapeRendering:"crispEdges",height:n.size,width:n.size,viewBox:n.viewBox},[O("path",{fill:n.bgColor,d:n.path},null,8,J),O("path",{fill:n.fgColor,d:n.fgPath},null,8,Z),n.imageSrc?(v(),B("image",{key:0,"xlink:href":n.imageSrc,height:n.imageHeight,width:n.imageWidth,x:n.imageX,y:n.imageY,preserveAspectRatio:"none"},null,8,q)):F("",!0)],8,j)):F("",!0)])}const it=K(W,[["render",x]]);export{H as E,st as S,$ as a,y as b,G as c,X as e,_ as g,it as i,Q as q};
