import{F as D}from"./Feature.4c59703c.js";import{A as N,aI as y}from"./reproj.50e0d4ab.js";function l(t,e,n){const r=n!==void 0?t.toFixed(n):""+t;let i=r.indexOf(".");return i=i===-1?r.length:i,i>e?r:new Array(1+e-i).join("0")+r}const I="http://www.w3.org/2001/XMLSchema-instance";function C(t,e){return s().createElementNS(t,e)}function f(t,e){return g(t,e,[]).join("")}function g(t,e,n){if(t.nodeType==Node.CDATA_SECTION_NODE||t.nodeType==Node.TEXT_NODE)e?n.push(String(t.nodeValue).replace(/(\r\n|\r|\n)/g,"")):n.push(t.nodeValue);else{let r;for(r=t.firstChild;r;r=r.nextSibling)g(r,e,n)}return n}function m(t){return"documentElement"in t}function p(t){return new DOMParser().parseFromString(t,"application/xml")}function U(t,e){return function(n,r){const i=t.call(e!==void 0?e:this,n,r);if(i!==void 0){const o=r[r.length-1];N(o,i)}}}function v(t,e){return function(n,r){const i=t.call(e!==void 0?e:this,n,r);i!==void 0&&r[r.length-1].push(i)}}function G(t,e){return function(n,r){const i=t.call(e!==void 0?e:this,n,r);i!==void 0&&(r[r.length-1]=i)}}function X(t,e,n){return function(r,i){const o=t.call(n!==void 0?n:this,r,i);if(o!==void 0){const a=i[i.length-1],u=e!==void 0?e:r.localName;a[u]=o}}}function L(t,e){return function(n,r,i){t.call(e!==void 0?e:this,n,r,i),i[i.length-1].node.appendChild(n)}}function R(t,e){let n,r;return function(i,o,a){if(n===void 0){n={};const u={};u[i.localName]=t,n[i.namespaceURI]=u,r=T(i.localName)}x(n,r,o,a)}}function T(t,e){return function(n,r,i){const a=r[r.length-1].node;let u=t;u===void 0&&(u=i);const d=e!==void 0?e:a.namespaceURI;return C(d,u)}}const B=T();function $(t,e){const n=e.length,r=new Array(n);for(let i=0;i<n;++i)r[i]=t[e[i]];return r}function q(t,e,n){n=n!==void 0?n:{};let r,i;for(r=0,i=t.length;r<i;++r)n[t[r]]=e;return n}function w(t,e,n,r){let i;for(i=e.firstElementChild;i;i=i.nextElementSibling){const o=t[i.namespaceURI];if(o!==void 0){const a=o[i.localName];a!==void 0&&a.call(r,i,n)}}}function Y(t,e,n,r,i){return r.push(t),w(e,n,r,i),r.pop()}function x(t,e,n,r,i,o){const a=(i!==void 0?i:n).length;let u,d;for(let c=0;c<a;++c)u=n[c],u!==void 0&&(d=e.call(o!==void 0?o:this,u,r,i!==void 0?i[c]:void 0),d!==void 0&&t[d.namespaceURI][d.localName].call(o,d,u,r))}function H(t,e,n,r,i,o,a){return i.push(t),x(e,n,r,i,o,a),i.pop()}let h;function S(){return h===void 0&&typeof XMLSerializer<"u"&&(h=new XMLSerializer),h}let F;function s(){return F===void 0&&typeof document<"u"&&(F=document.implementation.createDocument("","",null)),F}class E extends D{constructor(){super(),this.xmlSerializer_=S()}getType(){return"xml"}readFeature(e,n){if(!e)return null;if(typeof e=="string"){const r=p(e);return this.readFeatureFromDocument(r,n)}return m(e)?this.readFeatureFromDocument(e,n):this.readFeatureFromNode(e,n)}readFeatureFromDocument(e,n){const r=this.readFeaturesFromDocument(e,n);return r.length>0?r[0]:null}readFeatureFromNode(e,n){return null}readFeatures(e,n){if(!e)return[];if(typeof e=="string"){const r=p(e);return this.readFeaturesFromDocument(r,n)}return m(e)?this.readFeaturesFromDocument(e,n):this.readFeaturesFromNode(e,n)}readFeaturesFromDocument(e,n){const r=[];for(let i=e.firstChild;i;i=i.nextSibling)i.nodeType==Node.ELEMENT_NODE&&N(r,this.readFeaturesFromNode(i,n));return r}readFeaturesFromNode(e,n){return y()}readGeometry(e,n){if(!e)return null;if(typeof e=="string"){const r=p(e);return this.readGeometryFromDocument(r,n)}return m(e)?this.readGeometryFromDocument(e,n):this.readGeometryFromNode(e,n)}readGeometryFromDocument(e,n){return null}readGeometryFromNode(e,n){return null}readProjection(e){if(!e)return null;if(typeof e=="string"){const n=p(e);return this.readProjectionFromDocument(n)}return m(e)?this.readProjectionFromDocument(e):this.readProjectionFromNode(e)}readProjectionFromDocument(e){return this.dataProjection}readProjectionFromNode(e){return this.dataProjection}writeFeature(e,n){const r=this.writeFeatureNode(e,n);return this.xmlSerializer_.serializeToString(r)}writeFeatureNode(e,n){return null}writeFeatures(e,n){const r=this.writeFeaturesNode(e,n);return this.xmlSerializer_.serializeToString(r)}writeFeaturesNode(e,n){return null}writeGeometry(e,n){const r=this.writeGeometryNode(e,n);return this.xmlSerializer_.serializeToString(r)}writeGeometryNode(e,n){return null}}const V=E;function J(t){const e=f(t,!1);return P(e)}function P(t){const e=/^\s*(true|1)|(false|0)\s*$/.exec(t);if(e)return e[1]!==void 0||!1}function Z(t){const e=f(t,!1),n=Date.parse(e);return isNaN(n)?void 0:n/1e3}function Q(t){const e=f(t,!1);return _(e)}function _(t){const e=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(t);if(e)return parseFloat(e[1])}function K(t){const e=f(t,!1);return z(e)}function z(t){const e=/^\s*(\d+)\s*$/.exec(t);if(e)return parseInt(e[1],10)}function W(t){return f(t,!1).trim()}function j(t,e){A(t,e?"1":"0")}function b(t,e){t.appendChild(s().createCDATASection(e))}function k(t,e){const n=new Date(e*1e3),r=n.getUTCFullYear()+"-"+l(n.getUTCMonth()+1,2)+"-"+l(n.getUTCDate(),2)+"T"+l(n.getUTCHours(),2)+":"+l(n.getUTCMinutes(),2)+":"+l(n.getUTCSeconds(),2)+"Z";t.appendChild(s().createTextNode(r))}function ee(t,e){const n=e.toPrecision();t.appendChild(s().createTextNode(n))}function ne(t,e){const n=e.toString();t.appendChild(s().createTextNode(n))}function A(t,e){t.appendChild(s().createTextNode(e))}export{b as A,j as B,B as O,V as X,I as a,H as b,C as c,v as d,X as e,L as f,K as g,Q as h,Z as i,ne as j,R as k,ee as l,q as m,k as n,w as o,Y as p,$ as q,W as r,T as s,U as t,p as u,m as v,A as w,f as x,J as y,G as z};
