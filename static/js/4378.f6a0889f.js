/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-12-11 15:03:04
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4378],{74378:function(e,o,t){t.r(o),t.d(o,{default:function(){return f}});var a=t(31542),l=(t(72688),t(87157),t(34641));const n={class:"wang-editor-container"},r={class:"wang-editor-footer"};function s(e,o,t,s,i,d){const c=(0,l.g2)("Toolbar"),u=(0,l.g2)("Editor"),p=a.S2;return(0,l.uX)(),(0,l.CE)("div",n,[(0,l.bF)(c,{editor:e.editorRef,style:{"border-bottom":"1px solid #e8e8e8"}},null,8,["editor"]),(0,l.bF)(u,{modelValue:e.html,"onUpdate:modelValue":o[0]||(o[0]=o=>e.html=o),class:"wang-editor-content","default-config":e.editorConfig,style:{height:"300px"},onOnCreated:e.handleCreated},null,8,["modelValue","default-config","onOnCreated"]),(0,l.Lk)("div",r,[(0,l.bF)(p,{type:"primary",onClick:e.onSubmit},{default:(0,l.k6)((()=>o[1]||(o[1]=[(0,l.eW)("保存")]))),_:1},8,["onClick"])])])}var i=t(4589),d=t(37489),c=(0,l.pM)({name:"WangEditor",components:{Editor:i.K,Toolbar:i.M},setup(){const e=(0,l.WQ)("$baseMessage"),o=(0,l.WQ)("$baseAlert"),t=(0,d.IJ)(void 0),a=(0,d.KR)('<h1>一级标题</h1><h2>二级标题</h2><h3>三级标题</h3><p>hello world ~~~ </p><blockquote>blockquote</blockquote><pre><code class="language-javascript">const a = 100;</code></pre><p><img src="https://fastly.jsdelivr.net/gh/chuzhixin/image/table/vab-image-1.jpg" alt="" data-href="" style=""/></p>'),n=(0,d.KR)({placeholder:"请输入内容...",MENU_CONF:{uploadImage:{server:"",fieldName:"vab-file-name",allowedFileTypes:["image/*"],headers:{}}}}),r=e=>{t.value=e};(0,l.xo)((()=>{const e=t.value;null!=e&&e.destroy()}));const s=()=>{o(a.value),e("模拟保存成功","success","vab-hey-message-success")};return{editorRef:t,html:a,editorConfig:n,handleCreated:r,onSubmit:s}}});function u(e){e.__source="src/views/vab/editor/wangEditor.vue"}var p=t(48499);"function"===typeof u&&u(c);const h=(0,p.A)(c,[["render",s]]);var f=h}}]);