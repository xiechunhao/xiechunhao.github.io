import{cD as B,aM as F,k as u,cE as N,b2 as R,b4 as x,b5 as O,b6 as M,au as v,z as G,cF as w,bb as X,cG as _,cH as g}from"./reproj.50e0d4ab.js";const S=34962,b=34963,W=35040,H=35044,z=35048,V=5121,Y=5123,K=5125,C=5126,L=["experimental-webgl","webgl","webkit-3d","moz-webgl"];function D(n,t){t=Object.assign({preserveDrawingBuffer:!0,antialias:!B},t);const e=L.length;for(let r=0;r<e;++r)try{const s=n.getContext(L[r],t);if(s)return s}catch{}return null}const $={STATIC_DRAW:H,STREAM_DRAW:W,DYNAMIC_DRAW:z};class k{constructor(t,e){this.array=null,this.type=t,F(t===S||t===b,62),this.usage=e!==void 0?e:$.STATIC_DRAW}ofSize(t){return this.array=new(d(this.type))(t),this}fromArray(t){return this.array=d(this.type).from(t),this}fromArrayBuffer(t){return this.array=new(d(this.type))(t),this}getType(){return this.type}getArray(){return this.array}getUsage(){return this.usage}getSize(){return this.array?this.array.length:0}}function d(n){switch(n){case S:return Float32Array;case b:return Uint32Array;default:return Float32Array}}const ae=k,f={LOST:"webglcontextlost",RESTORED:"webglcontextrestored"},Z=`
  precision mediump float;
  
  attribute vec2 a_position;
  varying vec2 v_texCoord;
  varying vec2 v_screenCoord;
  
  uniform vec2 u_screenSize;
   
  void main() {
    v_texCoord = a_position * 0.5 + 0.5;
    v_screenCoord = v_texCoord * u_screenSize;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,j=`
  precision mediump float;
   
  uniform sampler2D u_image;
  uniform float u_opacity;
   
  varying vec2 v_texCoord;
   
  void main() {
    gl_FragColor = texture2D(u_image, v_texCoord) * u_opacity;
  }
`;class q{constructor(t){this.gl_=t.webGlContext;const e=this.gl_;this.scaleRatio_=t.scaleRatio||1,this.renderTargetTexture_=e.createTexture(),this.renderTargetTextureSize_=null,this.frameBuffer_=e.createFramebuffer();const r=e.createShader(e.VERTEX_SHADER);e.shaderSource(r,t.vertexShader||Z),e.compileShader(r);const s=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(s,t.fragmentShader||j),e.compileShader(s),this.renderTargetProgram_=e.createProgram(),e.attachShader(this.renderTargetProgram_,r),e.attachShader(this.renderTargetProgram_,s),e.linkProgram(this.renderTargetProgram_),this.renderTargetVerticesBuffer_=e.createBuffer();const i=[-1,-1,1,-1,-1,1,1,-1,1,1,-1,1];e.bindBuffer(e.ARRAY_BUFFER,this.renderTargetVerticesBuffer_),e.bufferData(e.ARRAY_BUFFER,new Float32Array(i),e.STATIC_DRAW),this.renderTargetAttribLocation_=e.getAttribLocation(this.renderTargetProgram_,"a_position"),this.renderTargetUniformLocation_=e.getUniformLocation(this.renderTargetProgram_,"u_screenSize"),this.renderTargetOpacityLocation_=e.getUniformLocation(this.renderTargetProgram_,"u_opacity"),this.renderTargetTextureLocation_=e.getUniformLocation(this.renderTargetProgram_,"u_image"),this.uniforms_=[],t.uniforms&&Object.keys(t.uniforms).forEach(a=>{this.uniforms_.push({value:t.uniforms[a],location:e.getUniformLocation(this.renderTargetProgram_,a)})})}getGL(){return this.gl_}init(t){const e=this.getGL(),r=[e.drawingBufferWidth*this.scaleRatio_,e.drawingBufferHeight*this.scaleRatio_];if(e.bindFramebuffer(e.FRAMEBUFFER,this.getFrameBuffer()),e.viewport(0,0,r[0],r[1]),!this.renderTargetTextureSize_||this.renderTargetTextureSize_[0]!==r[0]||this.renderTargetTextureSize_[1]!==r[1]){this.renderTargetTextureSize_=r;const s=0,i=e.RGBA,a=0,o=e.RGBA,c=e.UNSIGNED_BYTE,h=null;e.bindTexture(e.TEXTURE_2D,this.renderTargetTexture_),e.texImage2D(e.TEXTURE_2D,s,i,r[0],r[1],a,o,c,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.renderTargetTexture_,0)}}apply(t,e,r,s){const i=this.getGL(),a=t.size;if(i.bindFramebuffer(i.FRAMEBUFFER,e?e.getFrameBuffer():null),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,this.renderTargetTexture_),!e){const c=u(i.canvas);if(!t.renderTargets[c]){const h=i.getContextAttributes();h&&h.preserveDrawingBuffer&&(i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT)),t.renderTargets[c]=!0}}i.enable(i.BLEND),i.blendFunc(i.ONE,i.ONE_MINUS_SRC_ALPHA),i.viewport(0,0,i.drawingBufferWidth,i.drawingBufferHeight),i.bindBuffer(i.ARRAY_BUFFER,this.renderTargetVerticesBuffer_),i.useProgram(this.renderTargetProgram_),i.enableVertexAttribArray(this.renderTargetAttribLocation_),i.vertexAttribPointer(this.renderTargetAttribLocation_,2,i.FLOAT,!1,0,0),i.uniform2f(this.renderTargetUniformLocation_,a[0],a[1]),i.uniform1i(this.renderTargetTextureLocation_,0);const o=t.layerStatesArray[t.layerIndex].opacity;i.uniform1f(this.renderTargetOpacityLocation_,o),this.applyUniforms(t),r&&r(i,t),i.drawArrays(i.TRIANGLES,0,6),s&&s(i,t)}getFrameBuffer(){return this.frameBuffer_}applyUniforms(t){const e=this.getGL();let r,s=1;this.uniforms_.forEach(function(i){if(r=typeof i.value=="function"?i.value(t):i.value,r instanceof HTMLCanvasElement||r instanceof ImageData)i.texture||(i.texture=e.createTexture()),e.activeTexture(e[`TEXTURE${s}`]),e.bindTexture(e.TEXTURE_2D,i.texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r instanceof ImageData?e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,r.width,r.height,0,e.UNSIGNED_BYTE,new Uint8Array(r.data)):e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r),e.uniform1i(i.location,s++);else if(Array.isArray(r))switch(r.length){case 2:e.uniform2f(i.location,r[0],r[1]);return;case 3:e.uniform3f(i.location,r[0],r[1],r[2]);return;case 4:e.uniform4f(i.location,r[0],r[1],r[2],r[3]);return;default:return}else typeof r=="number"&&e.uniform1f(i.location,r)})}}const P=q;function J(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function m(n,t){return n[0]=t[0],n[1]=t[1],n[4]=t[2],n[5]=t[3],n[12]=t[4],n[13]=t[5],n}const l={PROJECTION_MATRIX:"u_projectionMatrix",OFFSET_SCALE_MATRIX:"u_offsetScaleMatrix",OFFSET_ROTATION_MATRIX:"u_offsetRotateMatrix",TIME:"u_time",ZOOM:"u_zoom",RESOLUTION:"u_resolution",VIEWPORT_SIZE_PX:"u_viewportSizePx",PIXEL_RATIO:"u_pixelRatio"},E={UNSIGNED_BYTE:V,UNSIGNED_SHORT:Y,UNSIGNED_INT:K,FLOAT:C},T={};function y(n){return"shared/"+n}let U=0;function Q(){const n="unique/"+U;return U+=1,n}function ee(n){let t=T[n];if(!t){const e=document.createElement("canvas");e.style.position="absolute",e.style.left="0",t={users:0,canvas:e},T[n]=t}return t.users+=1,t.canvas}function te(n){const t=T[n];if(!t||(t.users-=1,t.users>0))return;const e=t.canvas,s=D(e).getExtension("WEBGL_lose_context");s&&s.loseContext(),delete T[n]}class re extends N{constructor(t){super(),t=t||{},this.boundHandleWebGLContextLost_=this.handleWebGLContextLost.bind(this),this.boundHandleWebGLContextRestored_=this.handleWebGLContextRestored.bind(this),this.canvasCacheKey_=t.canvasCacheKey?y(t.canvasCacheKey):Q(),this.canvas_=ee(this.canvasCacheKey_),this.gl_=D(this.canvas_),this.bufferCache_={},this.extensionCache_={},this.currentProgram_=null,this.canvas_.addEventListener(f.LOST,this.boundHandleWebGLContextLost_),this.canvas_.addEventListener(f.RESTORED,this.boundHandleWebGLContextRestored_),this.offsetRotateMatrix_=R(),this.offsetScaleMatrix_=R(),this.tmpMat4_=J(),this.uniformLocationsByProgram_={},this.attribLocationsByProgram_={},this.uniforms_=[],t.uniforms&&this.setUniforms(t.uniforms),this.postProcessPasses_=t.postProcesses?t.postProcesses.map(e=>new P({webGlContext:this.gl_,scaleRatio:e.scaleRatio,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,uniforms:e.uniforms})):[new P({webGlContext:this.gl_})],this.shaderCompileErrors_=null,this.startTime_=Date.now()}setUniforms(t){this.uniforms_=[];for(const e in t)this.uniforms_.push({name:e,value:t[e]})}canvasCacheKeyMatches(t){return this.canvasCacheKey_===y(t)}getExtension(t){if(t in this.extensionCache_)return this.extensionCache_[t];const e=this.gl_.getExtension(t);return this.extensionCache_[t]=e,e}bindBuffer(t){const e=this.gl_,r=u(t);let s=this.bufferCache_[r];if(!s){const i=e.createBuffer();s={buffer:t,webGlBuffer:i},this.bufferCache_[r]=s}e.bindBuffer(t.getType(),s.webGlBuffer)}flushBufferData(t){const e=this.gl_;this.bindBuffer(t),e.bufferData(t.getType(),t.getArray(),t.getUsage())}deleteBuffer(t){const e=this.gl_,r=u(t),s=this.bufferCache_[r];s&&!e.isContextLost()&&e.deleteBuffer(s.webGlBuffer),delete this.bufferCache_[r]}disposeInternal(){this.canvas_.removeEventListener(f.LOST,this.boundHandleWebGLContextLost_),this.canvas_.removeEventListener(f.RESTORED,this.boundHandleWebGLContextRestored_),te(this.canvasCacheKey_),delete this.gl_,delete this.canvas_}prepareDraw(t,e){const r=this.gl_,s=this.getCanvas(),i=t.size,a=t.pixelRatio;(s.width!==i[0]*a||s.height!==i[1]*a)&&(s.width=i[0]*a,s.height=i[1]*a,s.style.width=i[0]+"px",s.style.height=i[1]+"px");for(let o=this.postProcessPasses_.length-1;o>=0;o--)this.postProcessPasses_[o].init(t);r.bindTexture(r.TEXTURE_2D,null),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.enable(r.BLEND),r.blendFunc(r.ONE,e?r.ZERO:r.ONE_MINUS_SRC_ALPHA)}bindTexture(t,e,r){const s=this.gl_;s.activeTexture(s.TEXTURE0+e),s.bindTexture(s.TEXTURE_2D,t),s.uniform1i(this.getUniformLocation(r),e)}prepareDrawToRenderTarget(t,e,r){const s=this.gl_,i=e.getSize();s.bindFramebuffer(s.FRAMEBUFFER,e.getFramebuffer()),s.viewport(0,0,i[0],i[1]),s.bindTexture(s.TEXTURE_2D,e.getTexture()),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.enable(s.BLEND),s.blendFunc(s.ONE,r?s.ZERO:s.ONE_MINUS_SRC_ALPHA)}drawElements(t,e){const r=this.gl_;this.getExtension("OES_element_index_uint");const s=r.UNSIGNED_INT,i=4,a=e-t,o=t*i;r.drawElements(r.TRIANGLES,a,s,o)}finalizeDraw(t,e,r){for(let s=0,i=this.postProcessPasses_.length;s<i;s++)s===i-1?this.postProcessPasses_[s].apply(t,null,e,r):this.postProcessPasses_[s].apply(t,this.postProcessPasses_[s+1])}getCanvas(){return this.canvas_}getGL(){return this.gl_}applyFrameState(t){const e=t.size,r=t.viewState.rotation,s=t.pixelRatio,i=x(this.offsetScaleMatrix_);O(i,2/e[0],2/e[1]);const a=x(this.offsetRotateMatrix_);r!==0&&M(a,-r),this.setUniformMatrixValue(l.OFFSET_SCALE_MATRIX,m(this.tmpMat4_,i)),this.setUniformMatrixValue(l.OFFSET_ROTATION_MATRIX,m(this.tmpMat4_,a)),this.setUniformFloatValue(l.TIME,(Date.now()-this.startTime_)*.001),this.setUniformFloatValue(l.ZOOM,t.viewState.zoom),this.setUniformFloatValue(l.RESOLUTION,t.viewState.resolution),this.setUniformFloatValue(l.PIXEL_RATIO,s),this.setUniformFloatVec2(l.VIEWPORT_SIZE_PX,[e[0],e[1]])}applyUniforms(t){const e=this.gl_;let r,s=0;this.uniforms_.forEach(i=>{if(r=typeof i.value=="function"?i.value(t):i.value,r instanceof HTMLCanvasElement||r instanceof HTMLImageElement||r instanceof ImageData)i.texture||(i.prevValue=void 0,i.texture=e.createTexture()),e.activeTexture(e[`TEXTURE${s}`]),e.bindTexture(e.TEXTURE_2D,i.texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(!(r instanceof HTMLImageElement)||r.complete)&&i.prevValue!==r&&(i.prevValue=r,e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r)),e.uniform1i(this.getUniformLocation(i.name),s++);else if(Array.isArray(r)&&r.length===6)this.setUniformMatrixValue(i.name,m(this.tmpMat4_,r));else if(Array.isArray(r)&&r.length<=4)switch(r.length){case 2:e.uniform2f(this.getUniformLocation(i.name),r[0],r[1]);return;case 3:e.uniform3f(this.getUniformLocation(i.name),r[0],r[1],r[2]);return;case 4:e.uniform4f(this.getUniformLocation(i.name),r[0],r[1],r[2],r[3]);return;default:return}else typeof r=="number"&&e.uniform1f(this.getUniformLocation(i.name),r)})}useProgram(t,e){this.gl_.useProgram(t),this.currentProgram_=t,this.applyFrameState(e),this.applyUniforms(e)}compileShader(t,e){const r=this.gl_,s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}getProgram(t,e){const r=this.gl_,s=this.compileShader(t,r.FRAGMENT_SHADER),i=this.compileShader(e,r.VERTEX_SHADER),a=r.createProgram();if(r.attachShader(a,s),r.attachShader(a,i),r.linkProgram(a),!r.getShaderParameter(s,r.COMPILE_STATUS)){const o=`Fragment shader compilation failed: ${r.getShaderInfoLog(s)}`;throw new Error(o)}if(r.deleteShader(s),!r.getShaderParameter(i,r.COMPILE_STATUS)){const o=`Vertex shader compilation failed: ${r.getShaderInfoLog(i)}`;throw new Error(o)}if(r.deleteShader(i),!r.getProgramParameter(a,r.LINK_STATUS)){const o=`GL program linking failed: ${r.getProgramInfoLog(a)}`;throw new Error(o)}return a}getUniformLocation(t){const e=u(this.currentProgram_);return this.uniformLocationsByProgram_[e]===void 0&&(this.uniformLocationsByProgram_[e]={}),this.uniformLocationsByProgram_[e][t]===void 0&&(this.uniformLocationsByProgram_[e][t]=this.gl_.getUniformLocation(this.currentProgram_,t)),this.uniformLocationsByProgram_[e][t]}getAttributeLocation(t){const e=u(this.currentProgram_);return this.attribLocationsByProgram_[e]===void 0&&(this.attribLocationsByProgram_[e]={}),this.attribLocationsByProgram_[e][t]===void 0&&(this.attribLocationsByProgram_[e][t]=this.gl_.getAttribLocation(this.currentProgram_,t)),this.attribLocationsByProgram_[e][t]}makeProjectionTransform(t,e){const r=t.size,s=t.viewState.rotation,i=t.viewState.resolution,a=t.viewState.center;return v(e,0,0,2/(i*r[0]),2/(i*r[1]),-s,-a[0],-a[1]),e}setUniformFloatValue(t,e){this.gl_.uniform1f(this.getUniformLocation(t),e)}setUniformFloatVec2(t,e){this.gl_.uniform2fv(this.getUniformLocation(t),e)}setUniformFloatVec4(t,e){this.gl_.uniform4fv(this.getUniformLocation(t),e)}setUniformMatrixValue(t,e){this.gl_.uniformMatrix4fv(this.getUniformLocation(t),!1,e)}enableAttributeArray_(t,e,r,s,i){const a=this.getAttributeLocation(t);a<0||(this.gl_.enableVertexAttribArray(a),this.gl_.vertexAttribPointer(a,e,r,!1,s,i))}enableAttributes(t){const e=se(t);let r=0;for(let s=0;s<t.length;s++){const i=t[s];this.enableAttributeArray_(i.name,i.size,i.type||C,e,r),r+=i.size*I(i.type)}}handleWebGLContextLost(){G(this.bufferCache_),this.currentProgram_=null}handleWebGLContextRestored(){}createTexture(t,e,r){const s=this.gl_;r=r||s.createTexture();const i=0,a=s.RGBA,o=0,c=s.RGBA,h=s.UNSIGNED_BYTE;return s.bindTexture(s.TEXTURE_2D,r),e?s.texImage2D(s.TEXTURE_2D,i,a,c,h,e):s.texImage2D(s.TEXTURE_2D,i,a,t[0],t[1],o,c,h,null),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),r}}function se(n){let t=0;for(let e=0;e<n.length;e++){const r=n[e];t+=r.size*I(r.type)}return t}function I(n){switch(n){case E.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case E.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case E.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT;case E.FLOAT:default:return Float32Array.BYTES_PER_ELEMENT}}class p extends w{constructor(t,e){super(t),e=e||{},this.inversePixelTransform_=R(),this.pixelContext_=null,this.postProcesses_=e.postProcesses,this.uniforms_=e.uniforms,this.helper,t.addChangeListener(X.MAP,this.removeHelper.bind(this)),this.dispatchPreComposeEvent=this.dispatchPreComposeEvent.bind(this),this.dispatchPostComposeEvent=this.dispatchPostComposeEvent.bind(this)}dispatchPreComposeEvent(t,e){const r=this.getLayer();if(r.hasListener(_.PRECOMPOSE)){const s=new g(_.PRECOMPOSE,void 0,e,t);r.dispatchEvent(s)}}dispatchPostComposeEvent(t,e){const r=this.getLayer();if(r.hasListener(_.POSTCOMPOSE)){const s=new g(_.POSTCOMPOSE,void 0,e,t);r.dispatchEvent(s)}}reset(t){this.uniforms_=t.uniforms,this.helper&&this.helper.setUniforms(this.uniforms_)}removeHelper(){this.helper&&(this.helper.dispose(),delete this.helper)}prepareFrame(t){if(this.getLayer().getRenderSource()){let e=!0,r=-1,s;for(let a=0,o=t.layerStatesArray.length;a<o;a++){const c=t.layerStatesArray[a].layer,h=c.getRenderer();if(!(h instanceof p)){e=!0;continue}const A=c.getClassName();if((e||A!==s)&&(r+=1,e=!1),s=A,h===this)break}const i="map/"+t.mapId+"/group/"+r;(!this.helper||!this.helper.canvasCacheKeyMatches(i))&&(this.removeHelper(),this.helper=new re({postProcesses:this.postProcesses_,uniforms:this.uniforms_,canvasCacheKey:i}),s&&(this.helper.getCanvas().className=s),this.afterHelperCreated())}return this.prepareFrameInternal(t)}afterHelperCreated(){}prepareFrameInternal(t){return!0}disposeInternal(){this.removeHelper(),super.disposeInternal()}dispatchRenderEvent_(t,e,r){const s=this.getLayer();if(s.hasListener(t)){v(this.inversePixelTransform_,0,0,r.pixelRatio,-r.pixelRatio,0,0,-r.size[1]);const i=new g(t,this.inversePixelTransform_,r,e);s.dispatchEvent(i)}}preRender(t,e){this.dispatchRenderEvent_(_.PRERENDER,t,e)}postRender(t,e){this.dispatchRenderEvent_(_.POSTRENDER,t,e)}}const ne=p;export{S as A,l as D,b as E,H as S,ae as W,ne as a,E as b,J as c,z as d,m as f};
