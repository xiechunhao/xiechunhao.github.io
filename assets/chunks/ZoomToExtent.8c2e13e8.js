import{D as d,E as m,a5 as o,a6 as i,a7 as r}from"./reproj.50e0d4ab.js";class x extends d{constructor(e){e=e||{},super({element:document.createElement("div"),target:e.target}),this.extent=e.extent?e.extent:null;const a=e.className!==void 0?e.className:"ol-zoom-extent",t=e.label!==void 0?e.label:"E",s=e.tipLabel!==void 0?e.tipLabel:"Fit to extent",n=document.createElement("button");n.setAttribute("type","button"),n.title=s,n.appendChild(typeof t=="string"?document.createTextNode(t):t),n.addEventListener(m.CLICK,this.handleClick_.bind(this),!1);const c=a+" "+i+" "+r,l=this.element;l.className=c,l.appendChild(n)}handleClick_(e){e.preventDefault(),this.handleZoomToExtent()}handleZoomToExtent(){const a=this.getMap().getView(),t=this.extent?this.extent:a.getProjection().getExtent();a.fitInternal(o(t))}}const u=x;export{u as Z};
