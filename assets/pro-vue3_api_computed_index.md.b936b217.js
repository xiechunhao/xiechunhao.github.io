import{_ as s,o as a,c as o,O as n}from"./chunks/framework.57763b9a.js";const C=JSON.parse('{"title":"组合式API - computed","description":"","frontmatter":{},"headers":[],"relativePath":"pro-vue3/api/computed/index.md","filePath":"pro-vue3/api/computed/index.md","lastUpdated":1688802289000}'),l={name:"pro-vue3/api/computed/index.md"},e=n(`<h1 id="组合式api-computed" tabindex="-1">组合式API - computed <a class="header-anchor" href="#组合式api-computed" aria-label="Permalink to &quot;组合式API - computed&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>计算属性基本思想和Vue2的完全一致，组合式API下的计算属性只是修改了写法</p></div><h2 id="_1-computed-使用" tabindex="-1">1. computed 使用 <a class="header-anchor" href="#_1-computed-使用" aria-label="Permalink to &quot;1. computed 使用&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 导入</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">computed</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 原始数据</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 计算属性</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> doubleCount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">computed</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_2-注意点" tabindex="-1">2. 注意点 <a class="header-anchor" href="#_2-注意点" aria-label="Permalink to &quot;2. 注意点&quot;">​</a></h2><ol><li>计算属性中不应该有 <code>副作用</code>，比如<code>异步请求</code>，<code>修改dom</code>等，如果需要请使用<code>watch</code>侦听</li><li>避免直接修改计算属性的值，计算属性应该是 <code>只读</code> 的</li></ol>`,6),p=[e];function t(c,r,i,d,y,D){return a(),o("div",null,p)}const u=s(l,[["render",t]]);export{C as __pageData,u as default};
