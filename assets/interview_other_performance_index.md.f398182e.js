import{_ as e,o,c,O as d}from"./chunks/framework.57763b9a.js";const u=JSON.parse('{"title":"性能优化方案面试题","description":"","frontmatter":{},"headers":[],"relativePath":"interview/other/performance/index.md","filePath":"interview/other/performance/index.md","lastUpdated":1688111209000}'),i={name:"interview/other/performance/index.md"},l=d('<h1 id="性能优化方案面试题" tabindex="-1">性能优化方案面试题 <a class="header-anchor" href="#性能优化方案面试题" aria-label="Permalink to &quot;性能优化方案面试题&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>总结的一些性能优化方案面试题目</p></div><h2 id="_1-文件方面" tabindex="-1">1.文件方面 <a class="header-anchor" href="#_1-文件方面" aria-label="Permalink to &quot;1.文件方面&quot;">​</a></h2><ol><li><code>文件压缩</code> 文件压缩，可以减少网络传输的字节数，有几种压缩算法。Gzip是最流行性的。 webpack打包其实也是对源文件进行压缩后打包。</li><li><code>图像压缩</code> 未压缩的图像存在巨大的潜在性能瓶颈，如果将图像提供给用户之前没有压缩，那么就会传输不必要的字节，有几个工具可以用于快速压缩图像且不损失可见质量。如（Imagemin）她支持许多图像格式。</li><li><code>图像格式使用Webp</code> 使用现代的图像格式可以真正提高性能，webp图片比JPEG和PNG小，通常小25%-35，也被浏览器广泛支持</li><li><code>文本压缩</code></li></ol><h2 id="_2-css-js方面" tabindex="-1">2. CSS/JS方面 <a class="header-anchor" href="#_2-css-js方面" aria-label="Permalink to &quot;2. CSS/JS方面&quot;">​</a></h2><ol><li>合理书写<code>CSS/JS</code>，<code>公用代码</code>等，<code>函数封装</code></li><li>JS文件置于页面底部，先渲染页面，避免造成<code>js阻塞</code></li><li>图片<code>延迟加载</code>，图片<code>懒加载</code>，<code>雪碧图</code></li><li>数据<code>分页加载</code>，定时<code>循环加载</code>，<code>滚动加载</code></li><li>JavaScript <code>异步加载</code>，<code>延迟加载</code>，<code>懒加载</code>等</li><li>避免<code>重绘重排</code></li><li>避免使用<code>重绘重排</code>等，容易造成<code>内存泄露</code></li><li><code>防抖</code>和<code>节流</code>的实现</li><li>事件委托（<code>事件冒泡</code>的原理，给父元素注册事件，不需要循环给子元素注册事件）</li><li>减少<code>dom</code>操作</li><li>缓存<code>http</code>头，<code>缓存资源</code></li><li>减少<code>接口请求</code></li><li>响应式图片，根据各个终端不同做不同尺寸，请求带上图片宽高</li><li>避免<code>重定向</code></li><li>减少<code>DNS</code>查询</li><li>使用外部的<code>CDN</code></li></ol><h2 id="_3-webpack打包" tabindex="-1">3.webpack打包 <a class="header-anchor" href="#_3-webpack打包" aria-label="Permalink to &quot;3.webpack打包&quot;">​</a></h2><ol><li>把小图片打包成<code>base64</code></li><li>修改vue.config.js中的配置项，把productionSourceMap设置为false，不打包生产的<code>.map文件</code></li><li>开起<code>GZIP</code>压缩</li><li>使用<code>cdn</code>的方式外部加载一些资源</li></ol><h2 id="_4-vue" tabindex="-1">4.vue <a class="header-anchor" href="#_4-vue" aria-label="Permalink to &quot;4.vue&quot;">​</a></h2><ol><li><code>v-if</code> 和 <code>v-show</code> 合理使用</li><li>for 添加<code>key</code>，diff算法原理</li><li>代码模块化</li><li>设置<code>路由懒加载</code>，避免首页加载白屏</li><li>更加理解生命周期（不要造成<code>内存泄露</code>，如离开页面<code>销毁定时器</code>等）</li><li>使用<code>keep-alive</code>，对组件的缓存</li><li><code>减少图片</code>使用，css3效果或者<code>动画实现</code></li><li><code>按需引入</code>，如第三方的element，引入需要的table，message等。不要全部引入</li></ol>',10),a=[l];function t(r,s,n,h,_,p){return o(),c("div",null,a)}const f=e(i,[["render",t]]);export{u as __pageData,f as default};
