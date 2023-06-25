import{ak as Y,al as Q,am as z,m as k,an as M,ao as H,ap as i,aq as Z,ar as ss,as as v,at as R,au as O,av as ns,aw as as,ax as V,af as ls,ay as os,az as U,aA as es,aB as ts,aC as ps,_ as cs,E as W,aD as rs,aE as is,aF as Fs,aG as ys,aH as N,ac as Ds,aI as Cs,v as As,a0 as us,aJ as gs,aK as P,aL as hs,M as ms,V as ds}from"./chunks/reproj.50e0d4ab.js";import{A as _s}from"./chunks/index.47495de9.js";import{d as fs,h as G,p as Is,a3 as Es,D as xs,o as K,c as $,G as J,B as vs,a as w,t as Rs,_ as ws,z as d,O as Ss}from"./chunks/framework.166469be.js";class qs extends Y{constructor(s){s=s||{},super(s)}}const Bs=qs;class bs extends Q{constructor(s){super(s),this.image_=null}getImage(){return this.image_?this.image_.getImage():null}prepareFrame(s){const n=s.layerStatesArray[s.layerIndex],a=s.pixelRatio,l=s.viewState,e=l.resolution,t=this.getLayer().getSource(),p=s.viewHints;let o=s.extent;if(n.extent!==void 0&&(o=z(o,k(n.extent,l.projection))),!p[M.ANIMATING]&&!p[M.INTERACTING]&&!H(o))if(t){const c=l.projection,r=t.getImage(o,e,a,c);r&&(this.loadImage(r)?this.image_=r:r.getState()===i.EMPTY&&(this.image_=null))}else this.image_=null;return!!this.image_}getData(s){const n=this.frameState;if(!n)return null;const a=this.getLayer(),l=Z(n.pixelToCoordinateTransform,s.slice()),e=a.getExtent();if(e&&!ss(e,l))return null;const t=this.image_.getExtent(),p=this.getImage(),o=v(t),c=Math.floor(p.width*((l[0]-t[0])/o));if(c<0||c>=p.width)return null;const r=R(t),y=Math.floor(p.height*((t[3]-l[1])/r));return y<0||y>=p.height?null:this.getImageData(p,c,y)}renderFrame(s,n){const a=this.image_,l=a.getExtent(),e=a.getResolution(),t=a.getPixelRatio(),p=s.layerStatesArray[s.layerIndex],o=s.pixelRatio,c=s.viewState,r=c.center,y=c.resolution,A=o*e/(y*t),u=s.extent,_=c.resolution,E=c.rotation,C=Math.round(v(u)/_*o),g=Math.round(R(u)/_*o);O(this.pixelTransform,s.size[0]/2,s.size[1]/2,1/o,1/o,E,-C/2,-g/2),ns(this.inversePixelTransform,this.pixelTransform);const h=as(this.pixelTransform);this.useContainer(n,h,this.getBackground(s));const F=this.context,m=F.canvas;m.width!=C||m.height!=g?(m.width=C,m.height=g):this.containerReused||F.clearRect(0,0,C,g);let S=!1,q=!0;if(p.extent){const I=k(p.extent,c.projection);q=V(I,s.extent),S=q&&!ls(I,s.extent),S&&this.clipUnrotated(F,s,I)}const f=this.getImage(),x=O(this.tempTransform,C/2,g/2,A,A,0,t*(l[0]-r[0])/e,t*(r[1]-l[3])/e);this.renderedResolution=e*o/t;const L=f.width*x[0],T=f.height*x[3];if(this.getLayer().getSource().getInterpolate()||(F.imageSmoothingEnabled=!1),this.preRender(F,s),q&&L>=.5&&T>=.5){const I=x[4],X=x[5],B=p.opacity;let j;B!==1&&(j=F.globalAlpha,F.globalAlpha=B),F.drawImage(f,0,0,+f.width,+f.height,I,X,L,T),B!==1&&(F.globalAlpha=j)}return this.postRender(F,s),S&&F.restore(),F.imageSmoothingEnabled=!0,h!==m.style.transform&&(m.style.transform=h),this.container}}const Ls=bs;class Ts extends Bs{constructor(s){super(s)}createRenderer(){return new Ls(this)}getData(s){return super.getData(s)}}const js=Ts;class ks extends os{constructor(s,n,a,l,e,t,p){let o=s.getExtent();o&&s.canWrapX()&&(o=o.slice(),o[0]=-1/0,o[2]=1/0);let c=n.getExtent();c&&n.canWrapX()&&(c=c.slice(),c[0]=-1/0,c[2]=1/0);const r=c?z(a,c):a,y=U(r),A=es(s,n,y,l),u=is,_=new ts(s,n,r,o,A*u,l),E=_.calculateSourceExtent(),C=H(E)?null:t(E,A,e),g=C?i.IDLE:i.EMPTY,h=C?C.getPixelRatio():1;super(a,l,h,g),this.targetProj_=n,this.maxSourceExtent_=o,this.triangulation_=_,this.targetResolution_=l,this.targetExtent_=a,this.sourceImage_=C,this.sourcePixelRatio_=h,this.interpolate_=p,this.canvas_=null,this.sourceListenerKey_=null}disposeInternal(){this.state==i.LOADING&&this.unlistenSource_(),super.disposeInternal()}getImage(){return this.canvas_}getProjection(){return this.targetProj_}reproject_(){const s=this.sourceImage_.getState();if(s==i.LOADED){const n=v(this.targetExtent_)/this.targetResolution_,a=R(this.targetExtent_)/this.targetResolution_;this.canvas_=ps(n,a,this.sourcePixelRatio_,this.sourceImage_.getResolution(),this.maxSourceExtent_,this.targetResolution_,this.targetExtent_,this.triangulation_,[{extent:this.sourceImage_.getExtent(),image:this.sourceImage_.getImage()}],0,void 0,this.interpolate_)}this.state=s,this.changed()}load(){if(this.state==i.IDLE){this.state=i.LOADING,this.changed();const s=this.sourceImage_.getState();s==i.LOADED||s==i.ERROR?this.reproject_():(this.sourceListenerKey_=cs(this.sourceImage_,W.CHANGE,function(n){const a=this.sourceImage_.getState();(a==i.LOADED||a==i.ERROR)&&(this.unlistenSource_(),this.reproject_())},this),this.sourceImage_.load())}}unlistenSource_(){rs(this.sourceListenerKey_),this.sourceListenerKey_=null}}const Ms=ks,b={IMAGELOADSTART:"imageloadstart",IMAGELOADEND:"imageloadend",IMAGELOADERROR:"imageloaderror"};class Os extends As{constructor(s,n){super(s),this.image=n}}class Ns extends Fs{constructor(s){super({attributions:s.attributions,projection:s.projection,state:s.state,interpolate:s.interpolate!==void 0?s.interpolate:!0}),this.on,this.once,this.un,this.resolutions_=s.resolutions!==void 0?s.resolutions:null,this.reprojectedImage_=null,this.reprojectedRevision_=0}getResolutions(){return this.resolutions_}setResolutions(s){this.resolutions_=s}findNearestResolution(s){const n=this.getResolutions();if(n){const a=ys(n,s,0);s=n[a]}return s}getImage(s,n,a,l){const e=this.getProjection();if(!e||!l||N(e,l))return e&&(l=e),this.getImageInternal(s,n,a,l);if(this.reprojectedImage_){if(this.reprojectedRevision_==this.getRevision()&&N(this.reprojectedImage_.getProjection(),l)&&this.reprojectedImage_.getResolution()==n&&Ds(this.reprojectedImage_.getExtent(),s))return this.reprojectedImage_;this.reprojectedImage_.dispose(),this.reprojectedImage_=null}return this.reprojectedImage_=new Ms(e,l,s,n,a,(t,p,o)=>this.getImageInternal(t,p,o,e),this.getInterpolate()),this.reprojectedRevision_=this.getRevision(),this.reprojectedImage_}getImageInternal(s,n,a,l){return Cs()}handleImageChange(s){const n=s.target;let a;switch(n.getState()){case i.LOADING:this.loading=!0,a=b.IMAGELOADSTART;break;case i.LOADED:this.loading=!1,a=b.IMAGELOADEND;break;case i.ERROR:this.loading=!1,a=b.IMAGELOADERROR;break;default:return}this.hasListener(a)&&this.dispatchEvent(new Os(a,n))}}function Ps(D,s){D.getImage().src=s}const Gs=Ns;class zs extends Gs{constructor(s){const n=s.crossOrigin!==void 0?s.crossOrigin:null,a=s.imageLoadFunction!==void 0?s.imageLoadFunction:Ps;super({attributions:s.attributions,interpolate:s.interpolate,projection:us(s.projection)}),this.url_=s.url,this.imageExtent_=s.imageExtent,this.image_=new gs(this.imageExtent_,void 0,1,this.url_,n,a,P(1,1)),this.imageSize_=s.imageSize?s.imageSize:null,this.image_.addEventListener(W.CHANGE,this.handleImageChange.bind(this))}getImageExtent(){return this.imageExtent_}getImageInternal(s,n,a,l){return V(s,this.image_.getExtent())?this.image_:null}getUrl(){return this.url_}handleImageChange(s){if(this.image_.getState()==i.LOADED){const n=this.image_.getExtent(),a=this.image_.getImage();let l,e;this.imageSize_?(l=this.imageSize_[0],e=this.imageSize_[1]):(l=a.width,e=a.height);const t=v(n),p=R(n),o=t/l,c=p/e;let r=l,y=e;if(o>c?r=Math.round(t/c):y=Math.round(p/o),r!==l||y!==e){const A=P(r,y);this.getInterpolate()||(A.imageSmoothingEnabled=!1);const u=A.canvas;A.drawImage(a,0,0,l,e,0,0,u.width,u.height),this.image_.setImage(u)}}super.handleImageChange(s)}}const Hs=zs,Vs=fs({__name:"index",setup(D){const s=G(null),n=G(!1);let a=null;const l=()=>{if(s.value===null)return;const t=[0,0,1024,968],p=new hs({code:"EPSG:3857",extent:t}),o=new js({source:new Hs({attributions:_s,url:"https://www.raomaiping.host/images/world6.jpg",projection:p,imageExtent:t})});a=new ms({target:s.value,layers:[o],view:new ds({projection:p,center:U(t),zoom:2})})},e=()=>{s.value!==null&&(n.value?s.value.style.backgroundImage="":s.value.style.backgroundImage='url("https://q2.qlogo.cn/headimg_dl?dst_uin=2582395486&spec=100")',n.value=!n.value)};return Is(()=>{l()}),Es(()=>{a&&(a.dispose(),a=null)}),(t,p)=>{const o=xs("el-button");return K(),$("div",{class:"map",ref_key:"map_el",ref:s},[J(o,{type:"primary",class:"btn",onClick:e},{default:vs(()=>[w(Rs(n.value?"取消背景":"设置背景"),1)]),_:1})],512)}}});const Us=ws(Vs,[["__scopeId","data-v-d27f3f1e"]]),Ws=d("h1",{id:"设置背景",tabindex:"-1"},[w("设置背景 "),d("a",{class:"header-anchor",href:"#设置背景","aria-label":'Permalink to "设置背景"'},"​")],-1),Ks=d("div",{class:"tip custom-block"},[d("p",{class:"custom-block-title"},"TIP"),d("p",null,[w("渲染单张图片的矢量图层，点击 "),d("code",null,"按钮"),w(" 给图层设置背景。")])],-1),$s=Ss("",2),Zs=JSON.parse('{"title":"设置背景","description":"","frontmatter":{},"headers":[],"relativePath":"open-layers/map-controls/set-background/index.md","filePath":"open-layers/map-controls/set-background/index.md"}'),Js={name:"open-layers/map-controls/set-background/index.md"},sn=Object.assign(Js,{setup(D){return(s,n)=>(K(),$("div",null,[Ws,Ks,J(Us),$s]))}});export{Zs as __pageData,sn as default};
