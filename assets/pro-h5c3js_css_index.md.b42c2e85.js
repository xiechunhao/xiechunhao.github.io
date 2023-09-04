import{_ as s,o as l,c as a,O as n}from"./chunks/framework.3a9101bc.js";const A=JSON.parse('{"title":"CSS3面试题","description":"","frontmatter":{},"headers":[],"relativePath":"pro-h5c3js/css/index.md","filePath":"pro-h5c3js/css/index.md","lastUpdated":1693814028000}'),o={name:"pro-h5c3js/css/index.md"},p=n(`<h1 id="css3面试题" tabindex="-1">CSS3面试题 <a class="header-anchor" href="#css3面试题" aria-label="Permalink to &quot;CSS3面试题&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>总结的一些CSS3面试题目</p></div><h2 id="_1-css5新特性-哪些是常用的" tabindex="-1">1.CSS5新特性，哪些是常用的 <a class="header-anchor" href="#_1-css5新特性-哪些是常用的" aria-label="Permalink to &quot;1.CSS5新特性，哪些是常用的&quot;">​</a></h2><ol><li>before，after 伪类选择器</li><li>媒体查询@media</li><li>弹性布局flex，栅栏布局Gird</li><li>动画属性（animation），形状转换（transform），背景属性，过渡属性（transition），阴影属性，边框属性，渐变属性，字体属性</li></ol><h2 id="_2-css选择器及优先级" tabindex="-1">2.css选择器及优先级 <a class="header-anchor" href="#_2-css选择器及优先级" aria-label="Permalink to &quot;2.css选择器及优先级&quot;">​</a></h2><ol><li>!important &gt; 行内样式 &gt; #ID选择器 &gt; .class类选择器 &gt; 标签选择器 &gt; * &gt; 继承 &gt; 默认</li></ol><h2 id="_3-垂直水平居中的几种方式-能说几种说几种" tabindex="-1">3.垂直水平居中的几种方式（能说几种说几种） <a class="header-anchor" href="#_3-垂直水平居中的几种方式-能说几种说几种" aria-label="Permalink to &quot;3.垂直水平居中的几种方式（能说几种说几种）&quot;">​</a></h2><ol><li>绝对定位，transform（ position:absolute；left:50%；top:50%；transform:translate(-50%,-50%)）</li><li>绝对定位，margin:auto，height:100px，line-height:100px</li><li>flex布局（display:flex，justify-content:center，align-items:center）</li><li>table（text-align:center，verticel-align:middle）</li></ol><h2 id="_4-flex布局应用" tabindex="-1">4.flex布局应用 <a class="header-anchor" href="#_4-flex布局应用" aria-label="Permalink to &quot;4.flex布局应用&quot;">​</a></h2><ol><li>网格布局</li><li>百分比布局</li><li>圣杯布局</li><li>流式布局</li><li>移动端布局</li></ol><h2 id="_5-伪类和伪元素" tabindex="-1">5.伪类和伪元素 <a class="header-anchor" href="#_5-伪类和伪元素" aria-label="Permalink to &quot;5.伪类和伪元素&quot;">​</a></h2><ol><li>伪类：（:hover，:active，:link，:focus，:visited，:checked，:first-child，:last-child）等</li><li>伪元素：（::after，::before）</li></ol><h2 id="_6-bfc的定义-触发条件-规则-应用等" tabindex="-1">6.BFC的定义，触发条件，规则，应用等 <a class="header-anchor" href="#_6-bfc的定义-触发条件-规则-应用等" aria-label="Permalink to &quot;6.BFC的定义，触发条件，规则，应用等&quot;">​</a></h2><ol><li>定义： 块级格式化上下文</li><li>触发条件： <ul><li>根元素</li><li>position:absoulte/fixed</li><li>display:inline-block/table</li><li>float:元素 5.overflow !== visible</li></ul></li><li>规则： <ul><li>属于同一个 BFC 的两个相邻 Box 垂直排列</li><li>属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠</li><li>BFC 中子元素的 margin box 的左边， 与包含块 (BFC) border box的左边相接触 (子元素 absolute 除外)</li><li>BFC 的区域不会与 float 的元素区域重叠</li><li>计算 BFC 的高度时，浮动子元素也参与计算</li><li>文字层不会被浮动层覆盖，环绕于周围</li></ul></li><li>应用： <ul><li>阻止margin重叠</li><li>可以包含浮动元素 —— 清除内部浮动(清除浮动的原理是两个div都位于同一个 BFC 区域之中)</li><li>自适应两栏布局</li><li>可以阻止元素被浮动元素覆盖</li></ul></li></ol><h2 id="_7-如何去除浮动影响-防止父级高度塌陷" tabindex="-1">7.如何去除浮动影响，防止父级高度塌陷 <a class="header-anchor" href="#_7-如何去除浮动影响-防止父级高度塌陷" aria-label="Permalink to &quot;7.如何去除浮动影响，防止父级高度塌陷&quot;">​</a></h2><ol><li>创建父级BFC</li><li>创建伪元素，:after 设置clear:both</li><li>父级设置固定高度</li></ol><h2 id="_8-link和-import的区别" tabindex="-1">8.link和@import的区别 <a class="header-anchor" href="#_8-link和-import的区别" aria-label="Permalink to &quot;8.link和@import的区别&quot;">​</a></h2><ol><li>link 功能较多，可以定义RSS，定义Rel等作业，而@import 只能用于加载css</li><li>当解析link时候，会同步加载css，而@import所引用的css等待页面加载完成后，才被加载</li><li>@import IE5以上才能使用</li><li>link 可以使用js动态引入，@import不行</li></ol><h2 id="_9-css预处理器" tabindex="-1">9.css预处理器 <a class="header-anchor" href="#_9-css预处理器" aria-label="Permalink to &quot;9.css预处理器&quot;">​</a></h2><ol><li>less / sass</li><li>嵌套 、变量、循环语句、条件语句、自动前缀、单位转换、mixin复用</li></ol><h2 id="_10-bootstrap栅栏系统的原理" tabindex="-1">10.bootstrap栅栏系统的原理 <a class="header-anchor" href="#_10-bootstrap栅栏系统的原理" aria-label="Permalink to &quot;10.bootstrap栅栏系统的原理&quot;">​</a></h2><ol><li>根据媒体查询@media判断设置不同宽度触发</li></ol><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">min-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">768px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/*当宽度大于768px时触发*/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">750px</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">min-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">992px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/*当宽度大于992px时触发*/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">970px</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="_11-px-rem-em区别" tabindex="-1">11.px/rem/em区别 <a class="header-anchor" href="#_11-px-rem-em区别" aria-label="Permalink to &quot;11.px/rem/em区别&quot;">​</a></h2><ol><li>px：固定单位像素，一旦设置无法因为适应页面大小而改变</li><li>em和rem相对于灵活，他们是相对长度单位，意思是长度不是固定死的，更适用于响应式布局</li><li>em相对于父元素设置子图大小，rem是相对于html跟元素font-size改变而进行改变。</li></ol><h2 id="_12-实现移动端1px实现" tabindex="-1">12.实现移动端1px实现 <a class="header-anchor" href="#_12-实现移动端1px实现" aria-label="Permalink to &quot;12.实现移动端1px实现&quot;">​</a></h2><p>原理：由于不同手机有不同的像素密度导致的，如果移动显示屏分辨率始终是普通屏幕的2倍，1px的边框在devicePielRatio = 2的移动显示屏下会显示成2px，所以在高清下看着1px总是感觉变胖了</p><ol><li>在ios8+中当devicePixelRatio=2的时候使用0.5px</li></ol><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">-webkit-min-device-pixel-ratio</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0.5px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ol start="2"><li>伪元素 + transform 实现 <ul><li>对于老项目伪元素+transform是比较完美的方法了。</li><li>原理是把原先元素的 border 去掉，然后利用 :before 或者 :after 重做 border ，并 transform 的 scale 缩小一半，原先的元素相对定位，新做的 border 绝对定位。</li><li>单条border样式设置：</li></ul></li></ol><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">scale-1px</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">none</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">scale-1px</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">scaleY</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">scaleY</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">-webkit-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ol start="3"><li><p>viewport + rem 实现</p><ul><li>这种兼容方案相对比较完美，适合新的项目，老的项目修改成本过大。</li><li>在devicePixelRatio = 2 时，输出viewport：在devicePixelRatio = 3 时，输出viewport：</li><li>优点：所有场景都能满足，一套代码，可以兼容基本所有布局</li><li>缺点：老项目修改代价过大，只适用于新项目</li></ul></li><li><p>使用box-shadow模拟边框</p><ul><li>优点：代码量少，可以满足所有场景</li><li>缺点：边框有阴影，颜色变浅</li><li>利用css 对阴影处理的方式实现0.5px的效果，如下样式设置：</li></ul></li></ol><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box-shadow-1px</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inset </span><span style="color:#F78C6C;">0px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-1px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-1px</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">c8c7cc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,33),e=[p];function t(r,c,i,C,D,y){return l(),a("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
