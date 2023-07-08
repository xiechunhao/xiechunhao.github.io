import{_ as s,o as a,c as n,O as l}from"./chunks/framework.57763b9a.js";const p="/assets/setup.4a1226ab.jpg",o="/assets/setup1.9d7275b1.jpg",d=JSON.parse('{"title":"组合式API - setup","description":"","frontmatter":{},"headers":[],"relativePath":"pro-vue3/api/setup/index.md","filePath":"pro-vue3/api/setup/index.md","lastUpdated":1688802289000}'),e={name:"pro-vue3/api/setup/index.md"},t=l('<h1 id="组合式api-setup" tabindex="-1">组合式API - setup <a class="header-anchor" href="#组合式api-setup" aria-label="Permalink to &quot;组合式API - setup&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>setup的执行时机是在beforeCreate钩子之前，并且自动执行</p></div><h2 id="_1-setup的执行时机" tabindex="-1">1. setup的执行时机 <a class="header-anchor" href="#_1-setup的执行时机" aria-label="Permalink to &quot;1. setup的执行时机&quot;">​</a></h2><ol><li>setup 执行时机在 <code>beforeCreate</code> 之前，并且自动执行</li></ol><p><img src="'+p+'" alt="image"></p><h2 id="_2-setup的写法" tabindex="-1">2. setup的写法 <a class="header-anchor" href="#_2-setup的写法" aria-label="Permalink to &quot;2. setup的写法&quot;">​</a></h2><ol><li>setup 选项中写代码的特点（定义数据 + 函数 然后以对象方式return）</li></ol><p><img src="'+o+`" alt="image"></p><ol start="2"><li><code>&lt;script setup&gt;</code> 是语法糖（经过语法糖的封装更简单的使用组合式API）</li></ol><ul><li>原始写法</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">this is message</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">logMessage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">               </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">               </span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">               </span><span style="color:#A6ACCD;">logMessage</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><ul><li>语法糖写法</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> message </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">this is message</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> logMessage </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_3-补充-setup中的this还指向组件实例吗" tabindex="-1">3. 补充：setup中的this还指向组件实例吗？ <a class="header-anchor" href="#_3-补充-setup中的this还指向组件实例吗" aria-label="Permalink to &quot;3. 补充：setup中的this还指向组件实例吗？&quot;">​</a></h2><blockquote><p>没有，<code>this</code> 指向 <code>undefined</code></p></blockquote>`,15),c=[t];function r(i,y,F,D,u,A){return a(),n("div",null,c)}const h=s(e,[["render",r]]);export{d as __pageData,h as default};
