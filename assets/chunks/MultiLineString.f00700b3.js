import{l as C,L as g,i as u}from"./LineString.2b94a2e9.js";import{bb as c,a1 as d,be as _,bC as y,bD as m,a8 as p,bE as S,bF as L,bG as A}from"./reproj.9b488601.js";class h extends c{constructor(t,s,e){if(super(),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(t[0]))this.setCoordinates(t,s);else if(s!==void 0&&e)this.setFlatCoordinates(s,t),this.ends_=e;else{let i=this.getLayout();const a=t,n=[],r=[];for(let o=0,l=a.length;o<l;++o){const f=a[o];o===0&&(i=f.getLayout()),d(n,f.getFlatCoordinates()),r.push(n.length)}this.setFlatCoordinates(i,n),this.ends_=r}}appendLineString(t){this.flatCoordinates?d(this.flatCoordinates,t.getFlatCoordinates().slice()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const t=new h(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(t,s,e,i){return i<_(this.getExtent(),t,s)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(y(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),m(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,t,s,e,i))}getCoordinateAtM(t,s,e){return this.layout!="XYM"&&this.layout!="XYZM"||this.flatCoordinates.length===0?null:(s=s!==void 0?s:!1,e=e!==void 0?e:!1,C(this.flatCoordinates,0,this.ends_,this.stride,t,s,e))}getCoordinates(){return p(this.flatCoordinates,0,this.ends_,this.stride)}getEnds(){return this.ends_}getLineString(t){return t<0||this.ends_.length<=t?null:new g(this.flatCoordinates.slice(t===0?0:this.ends_[t-1],this.ends_[t]),this.layout)}getLineStrings(){const t=this.flatCoordinates,s=this.ends_,e=this.layout,i=[];let a=0;for(let n=0,r=s.length;n<r;++n){const o=s[n],l=new g(t.slice(a,o),e);i.push(l),a=o}return i}getFlatMidpoints(){const t=[],s=this.flatCoordinates;let e=0;const i=this.ends_,a=this.stride;for(let n=0,r=i.length;n<r;++n){const o=i[n],l=u(s,e,o,a,.5);d(t,l),e=o}return t}getSimplifiedGeometryInternal(t){const s=[],e=[];return s.length=S(this.flatCoordinates,0,this.ends_,this.stride,t,s,0,e),new h(s,"XY",e)}getType(){return"MultiLineString"}intersectsExtent(t){return L(this.flatCoordinates,0,this.ends_,this.stride,t)}setCoordinates(t,s){this.setLayout(s,t,2),this.flatCoordinates||(this.flatCoordinates=[]);const e=A(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=e.length===0?0:e[e.length-1],this.changed()}}const F=h;export{F as M};
