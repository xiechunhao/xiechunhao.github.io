import{_ as s,o as a,c as n,O as l}from"./chunks/framework.57763b9a.js";const d=JSON.parse('{"title":"小程序内置 API","description":"","frontmatter":{},"headers":[],"relativePath":"pro-weixin/use/tips2/index.md","filePath":"pro-weixin/use/tips2/index.md","lastUpdated":1688802289000}'),o={name:"pro-weixin/use/tips2/index.md"},p=l(`<h1 id="小程序内置-api" tabindex="-1">小程序内置 API <a class="header-anchor" href="#小程序内置-api" aria-label="Permalink to &quot;小程序内置 API&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>内置 API 实际上就是小程序提供的一系列的方法，这些方法都封装在了全局对象 <code>wx</code> 下，调用这些方法实现小程序提供的各种功能，如网络请求、本地存储、拍照、录音等。</p></div><h2 id="_1-网络请求" tabindex="-1">1 网络请求 <a class="header-anchor" href="#_1-网络请求" aria-label="Permalink to &quot;1 网络请求&quot;">​</a></h2><p>调用 <code>wx.request</code> 能够在小程序中发起网络请求与后端接口进行数据的交互，其语法格式如下：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">这里是接口的地址</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">method</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">这里是请求的方法</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请求时提交的数据</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">header</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* 请求头信息 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/* 成功的回调 */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fail</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/* 失败的回调 */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">complete</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/* 成功或失败的回调 */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>演示代码如下：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">Page</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">books</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 调用数据接口的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getBooks</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 调用小程序的 API 发起请求</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">request</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://hmajax.itheima.net/api/books</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      method</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        creator</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zhangsan</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">result</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 更新数据，渲染页面</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setData</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> books</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="_2-界面交互" tabindex="-1">2 界面交互 <a class="header-anchor" href="#_2-界面交互" aria-label="Permalink to &quot;2 界面交互&quot;">​</a></h2><ol><li><code>wx.showLoading</code> 显示 loading 提示框 <ul><li>• <code>title</code> 文字提示内容</li><li>• <code>mask</code> 是否显示透明蒙层，防止触摸穿透</li></ul></li><li><code>wx.hideLoading</code> 隐藏 loading 提示框</li><li><code>wx.showToast</code> 消息提示框（轻提示） <ul><li>• <code>mask</code> 是否显示透明蒙层，防止触摸穿透</li><li>• <code>duration</code> 延迟时间（提示框显示多久）</li><li>• <code>icon</code> 指定图标，<code>none</code> 不使用图标</li></ul></li></ol><h2 id="_3-本地存储" tabindex="-1">3 本地存储 <a class="header-anchor" href="#_3-本地存储" aria-label="Permalink to &quot;3 本地存储&quot;">​</a></h2><ol><li><code>wx.setStorageSync</code> 存入一个数据，复杂类型数据不需要 <code>JSON.stringify</code> 处理</li><li><code>wx.getStorageSync</code> 读取一个数据，复杂类型数据不需要 <code>JSON.parse</code> 处理</li><li><code>wx.removeStorageSync</code> 删除一个数据</li><li><code>wx.clearStorageSync</code> 清空全部数据</li></ol><h2 id="_4-api-特征" tabindex="-1">4. API 特征 <a class="header-anchor" href="#_4-api-特征" aria-label="Permalink to &quot;4. API 特征&quot;">​</a></h2><blockquote><p>小程序中提供的 API 数量相当的庞大，很难也没有必要将所有的 API 全部掌握，但是这些 API 具有一些共有的特征：</p></blockquote><ol><li>异步 API：绝大部分的 API 都是异步方式，通过回调函数获取 API 执行的结果 <ul><li>• <code>success</code> API 调用成功时执行的回调</li><li>• <code>fail</code> API 调用失败时执行的回调</li><li>• <code>complete</code> API 调用结束时执行的回调（无论成功或失败）</li></ul></li><li>同步 API：部分 API 支持以同步方式获取结果，这些 API 的名称都以 <code>Sync</code> 结尾，如 <code>wx.getStorageSync</code> 等</li><li><code>Promise</code>：部分异步的 API 也支持以 Promise 方式返回结果，此时可以配合 <code>asyc/await</code> 来使用</li></ol><h2 id="_5-相册-拍照" tabindex="-1">5. 相册/拍照 <a class="header-anchor" href="#_5-相册-拍照" aria-label="Permalink to &quot;5. 相册/拍照&quot;">​</a></h2><p><code>wx.chooseMedia</code> 调起摄像头拍照或读取相册内容，该 API 既支持回调方式获取结果，也支持 Promise 方式返回结果：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">Page</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">chooseImage</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 读取结果</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">chooseMedia</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 只选取一张图片</span></span>
<span class="line"><span style="color:#F07178;">      mediaType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 只选取图片</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,17),e=[p];function c(t,r,F,y,D,i){return a(),n("div",null,e)}const C=s(o,[["render",c]]);export{d as __pageData,C as default};
