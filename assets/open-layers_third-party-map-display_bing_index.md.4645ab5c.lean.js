import"./chunks/ol.4ed993c7.js";import{a0 as f,a1 as B,bj as j,ax as k,M as z,V as I}from"./chunks/reproj.50e0d4ab.js";import{e as P,f as Z,h as U,i as V,c as R,T as G}from"./chunks/TileImage.36abd4f0.js";import{d as N,p as O,a3 as K,o as x,c as q,_ as L,G as W,z as c,a as Q,O as Y}from"./chunks/framework.166469be.js";function H(p){const s=p[0],n=new Array(s);let l=1<<s-1,a,e;for(a=0;a<s;++a)e=48,p[1]&l&&(e+=1),p[2]&l&&(e+=2),n[a]=String.fromCharCode(e),l>>=1;return n.join("")}const X='<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html" target="_blank">Terms of Use</a>';class $ extends P{constructor(s){const n=s.hidpi!==void 0?s.hidpi:!1;super({cacheSize:s.cacheSize,crossOrigin:"anonymous",interpolate:s.interpolate,opaque:!0,projection:f("EPSG:3857"),reprojectionErrorThreshold:s.reprojectionErrorThreshold,state:"loading",tileLoadFunction:s.tileLoadFunction,tilePixelRatio:n?2:1,wrapX:s.wrapX!==void 0?s.wrapX:!0,transition:s.transition,zDirection:s.zDirection}),this.hidpi_=n,this.culture_=s.culture!==void 0?s.culture:"en-us",this.maxZoom_=s.maxZoom!==void 0?s.maxZoom:-1,this.apiKey_=s.key,this.imagerySet_=s.imagerySet;const l="https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+this.imagerySet_+"?uriScheme=https&include=ImageryProviders&key="+this.apiKey_+"&c="+this.culture_;fetch(l).then(a=>a.json()).then(a=>this.handleImageryMetadataResponse(a))}getApiKey(){return this.apiKey_}getImagerySet(){return this.imagerySet_}handleImageryMetadataResponse(s){if(s.statusCode!=200||s.statusDescription!="OK"||s.authenticationResultCode!="ValidCredentials"||s.resourceSets.length!=1||s.resourceSets[0].resources.length!=1){this.setState("error");return}const n=s.resourceSets[0].resources[0],l=this.maxZoom_==-1?n.zoomMax:this.maxZoom_,a=this.getProjection(),e=Z(a),F=this.hidpi_?2:1,b=n.imageWidth==n.imageHeight?n.imageWidth/F:[n.imageWidth/F,n.imageHeight/F],E=U({extent:e,minZoom:n.zoomMin,maxZoom:l,tileSize:b});this.tileGrid=E;const v=this.culture_,S=this.hidpi_;if(this.tileUrlFunction=V(n.imageUrlSubdomains.map(function(i){const t=[0,0,0],r=n.imageUrl.replace("{subdomain}",i).replace("{culture}",v);return function(o,D,d){if(!o)return;R(o[0],o[1],o[2],t);let u=r;return S&&(u+="&dpi=d1&device=mobile"),u.replace("{quadkey}",H(t))}})),n.imageryProviders){const i=B(f("EPSG:4326"),this.getProjection());this.setAttributions(t=>{const r=[],o=t.viewState,D=this.getTileGrid(),d=D.getZForResolution(o.resolution,this.zDirection),m=D.getTileCoordForCoordAndZ(o.center,d)[0];return n.imageryProviders.map(function(h){let g=!1;const _=h.coverageAreas;for(let C=0,T=_.length;C<T;++C){const A=_[C];if(m>=A.zoomMin&&m<=A.zoomMax){const y=A.bbox,w=[y[1],y[0],y[3],y[2]],M=j(w,i);if(k(M,t.extent)){g=!0;break}}}g&&r.push(h.attribution)}),r.push(X),r})}this.setState("ready")}}const J=$,ss={id:"map"},ns="Q57tupj2UBsQNQdju4xL~xBceblfTd6icjljunbuaCw~AhwA-whmGMsfIpVhslZyknWhFYq-GvWJZqBnqV8Zq1uRlI5YM_qr7_hxvdgnU7nH",as=N({__name:"index",setup(p){return O(()=>{new z({target:"map",layers:[new G({source:new J({key:ns,imagerySet:"Road"})})],view:new I({center:[0,0],zoom:2})})}),K(()=>{}),(s,n)=>(x(),q("div",ss))}});const ls=L(as,[["__scopeId","data-v-b20e2e67"]]),os=c("h1",{id:"必应地图",tabindex:"-1"},[Q("必应地图 "),c("a",{class:"header-anchor",href:"#必应地图","aria-label":'Permalink to "必应地图"'},"​")],-1),ps=c("div",{class:"tip custom-block"},[c("p",{class:"custom-block-title"},"TIP"),c("p",null,"加载必应地图。")],-1),es=Y("",2),is=JSON.parse('{"title":"必应地图","description":"","frontmatter":{},"headers":[],"relativePath":"open-layers/third-party-map-display/bing/index.md","filePath":"open-layers/third-party-map-display/bing/index.md"}'),ts={name:"open-layers/third-party-map-display/bing/index.md"},Ds=Object.assign(ts,{setup(p){return(s,n)=>(x(),q("div",null,[os,ps,W(ls),es]))}});export{is as __pageData,Ds as default};
