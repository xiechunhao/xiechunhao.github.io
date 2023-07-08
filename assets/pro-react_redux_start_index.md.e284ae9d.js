import{_ as s,o as n,c as a,O as e}from"./chunks/framework.57763b9a.js";const t="/assets/Redux.842fd7e0.jpg",l="/assets/Redux流程.5ad9d7e9.jpg",m=JSON.parse('{"title":"Redux 介绍","description":"","frontmatter":{},"headers":[],"relativePath":"pro-react/redux/start/index.md","filePath":"pro-react/redux/start/index.md","lastUpdated":1688351083000}'),o={name:"pro-react/redux/start/index.md"},c=e('<h1 id="redux-介绍" tabindex="-1">Redux 介绍 <a class="header-anchor" href="#redux-介绍" aria-label="Permalink to &quot;Redux 介绍&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>Redux 是 React 最常用的集中状态管理工具，类似于 Vue 中的 Pinia（Vuex），可以独立于框架运行<br></p></li><li><p>作用：通过集中管理的方式管理应用的状态</p><hr><p><img src="'+t+'" alt="image"></p></li></ul></div><h2 id="快速体验" tabindex="-1">快速体验 <a class="header-anchor" href="#快速体验" aria-label="Permalink to &quot;快速体验&quot;">​</a></h2><blockquote><p>不和任何框架绑定，不使用任何构建工具，使用纯 Redux 实现计数器</p></blockquote><ol start="2"><li>使用步骤： <ul><li>2.1 定义一个 <code>reducer</code> 函数 （根据当前想要做的修改返回一个新的状态）</li><li>2.2 使用 <code>createStore</code> 方法传入 <code>reducer</code> 函数 生成一个 <code>store 实例对象</code></li><li>2.3 使用 <code>store</code> 实例的 <code>subscribe</code> 方法 订阅数据的变化（数据一旦变化，可以得到通知）</li><li>2.4 使用 <code>store</code> 实例的 <code>dispatch</code> 方法提交 <code>action</code> 对象 触发数据变化（告诉 reducer 你想怎么改数据）</li><li>2.5 使用 <code>store</code> 实例的 <code>getState</code> 方法 获取最新的状态数据更新到视图中</li></ul></li></ol><h2 id="redux-管理数据流程梳理" tabindex="-1">Redux 管理数据流程梳理 <a class="header-anchor" href="#redux-管理数据流程梳理" aria-label="Permalink to &quot;Redux 管理数据流程梳理&quot;">​</a></h2><p>为了职责清晰，数据流向明确，Redux 把整个数据修改的流程分成了三个核心概念，分别是：<code>state</code>、<code>action</code> 和 <code>reducer</code></p><p><img src="'+l+`" alt="image"></p><ol><li><code>state</code> 一个对象 存放着我们管理的数据状态</li><li><code>action</code> 一个对象 用来描述你想怎么改数据</li><li><code>reducer</code> 一个函数 更具 action 的描述生成一个新的 state</li></ol><h2 id="代码如下" tabindex="-1">代码如下: <a class="header-anchor" href="#代码如下" aria-label="Permalink to &quot;代码如下:&quot;">​</a></h2><details class="details custom-block"><summary>点我查看代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">\`\`\`</span><span style="color:#C3E88D;">html</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;button id=&quot;decrement&quot;&gt;-&lt;/button&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;span id=&quot;count&quot;&gt;0&lt;/span&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;button id=&quot;increment&quot;&gt;+&lt;/button&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;script src=&quot;https://unpkg.com/redux@latest/dist/redux.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">  // 1. 定义reducer函数 </span></span>
<span class="line"><span style="color:#C3E88D;">  // 内部主要的工作是根据不同的action 返回不同的state</span></span>
<span class="line"><span style="color:#C3E88D;">  function counterReducer (state = { count: 0 }, action) {</span></span>
<span class="line"><span style="color:#C3E88D;">    switch (action.type) {</span></span>
<span class="line"><span style="color:#C3E88D;">      case &#39;INCREMENT&#39;:</span></span>
<span class="line"><span style="color:#C3E88D;">        return { count: state.count + 1 }</span></span>
<span class="line"><span style="color:#C3E88D;">      case &#39;DECREMENT&#39;:</span></span>
<span class="line"><span style="color:#C3E88D;">        return { count: state.count - 1 }</span></span>
<span class="line"><span style="color:#C3E88D;">      default:</span></span>
<span class="line"><span style="color:#C3E88D;">        return state</span></span>
<span class="line"><span style="color:#C3E88D;">    }</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">  // 2. 使用reducer函数生成store实例</span></span>
<span class="line"><span style="color:#C3E88D;">  const store = Redux.createStore(counterReducer)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">  // 3. 订阅数据变化</span></span>
<span class="line"><span style="color:#C3E88D;">  store.subscribe(() =&gt; {</span></span>
<span class="line"><span style="color:#C3E88D;">    console.log(store.getState())</span></span>
<span class="line"><span style="color:#C3E88D;">    document.getElementById(&#39;count&#39;).innerText = store.getState().count</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">  })</span></span>
<span class="line"><span style="color:#C3E88D;">  // 4. 增</span></span>
<span class="line"><span style="color:#C3E88D;">  const inBtn = document.getElementById(&#39;increment&#39;)</span></span>
<span class="line"><span style="color:#C3E88D;">  inBtn.addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#C3E88D;">    store.dispatch({</span></span>
<span class="line"><span style="color:#C3E88D;">      type: &#39;INCREMENT&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">    })</span></span>
<span class="line"><span style="color:#C3E88D;">  })</span></span>
<span class="line"><span style="color:#C3E88D;">  // 4. 减</span></span>
<span class="line"><span style="color:#C3E88D;">  const dBtn = document.getElementById(&#39;decrement&#39;)</span></span>
<span class="line"><span style="color:#C3E88D;">  dBtn.addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#C3E88D;">    store.dispatch({</span></span>
<span class="line"><span style="color:#C3E88D;">      type: &#39;DECREMENT&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">    })</span></span>
<span class="line"><span style="color:#C3E88D;">  })</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">\`\`\`</span><span style="color:#89DDFF;">;</span></span></code></pre></div></details>`,11),p=[c];function r(i,d,u,E,y,D){return n(),a("div",null,p)}const h=s(o,[["render",r]]);export{m as __pageData,h as default};
