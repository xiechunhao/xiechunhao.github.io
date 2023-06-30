import{_ as s,o as a,c as n,O as l}from"./chunks/framework.57763b9a.js";const i=JSON.parse('{"title":"组件的状态 useState","description":"","frontmatter":{},"headers":[],"relativePath":"react/components/state/index.md","filePath":"react/components/state/index.md","lastUpdated":1688111209000}'),o={name:"react/components/state/index.md"},p=l(`<h1 id="组件的状态-usestate" tabindex="-1">组件的状态 useState <a class="header-anchor" href="#组件的状态-usestate" aria-label="Permalink to &quot;组件的状态 useState&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>使用状态：useState 函数，状态（state）是可以让页面内容发生变化的数据</li><li>React 也是数据驱动视图的开发模式</li></ul></div><h2 id="usestate-函数" tabindex="-1">useState 函数 <a class="header-anchor" href="#usestate-函数" aria-label="Permalink to &quot;useState 函数&quot;">​</a></h2><ol><li>语法：<code>const [存储状态的变量,修改状态的函数] = useSate(默认值)</code>，如下：</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> setCount</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useSate</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="2"><li><p>修改状态单独函数的作用</p><ul><li>修改状态</li><li>触发组件重新渲染</li></ul></li></ol><h2 id="usestate-触发时机" tabindex="-1">useState 触发时机 <a class="header-anchor" href="#usestate-触发时机" aria-label="Permalink to &quot;useState 触发时机&quot;">​</a></h2><ol><li>第一次调用，返回默认值</li><li>以后每次调用：返回状态的最新值</li></ol><h2 id="usestate-修改状态的规则" tabindex="-1">useState 修改状态的规则 <a class="header-anchor" href="#usestate-修改状态的规则" aria-label="Permalink to &quot;useState 修改状态的规则&quot;">​</a></h2><ol><li><p>不要直接修改当前状态的值，应该创建新值 —— 状态不可变。⚠️ 如果没有遵循该规则，会导致报错或组件无法重新渲染</p></li><li><p>定义几个常见简单类型/复杂类型</p></li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> setCount</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useSate</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> setList</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useSate</span><span style="color:#A6ACCD;">([苹果])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> setUser</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useSate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fantasy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>2.1 错误的写法</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">count </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setCount</span><span style="color:#A6ACCD;">(count)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">橘子</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setList</span><span style="color:#A6ACCD;">(list)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">猫</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setUser</span><span style="color:#A6ACCD;">(user)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>2.2 正确的写法</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setCount</span><span style="color:#A6ACCD;">(count </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setList</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">橘子</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#82AAFF;">setUser</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">name:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fantasy是只猫</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">])</span></span></code></pre></div><h2 id="代码如下-count-案例" tabindex="-1">代码如下(count++案例): <a class="header-anchor" href="#代码如下-count-案例" aria-label="Permalink to &quot;代码如下(count++案例):&quot;">​</a></h2><details class="details custom-block"><summary>点我查看代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setCount</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">10</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      操作：</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">hr</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setCount</span><span style="color:#A6ACCD;">(count </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;"> count ++ </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> App</span><span style="color:#89DDFF;">;</span></span></code></pre></div></details><p><a href="https://react.dev/learn/state-a-components-memory" target="_blank" rel="noreferrer">官网说明：状态-组件的内存</a> <br></p>`,18),t=[p];function e(c,r,D,y,F,C){return a(),n("div",null,t)}const u=s(o,[["render",e]]);export{i as __pageData,u as default};
