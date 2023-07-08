import{_ as e,o,c as t,O as a}from"./chunks/framework.57763b9a.js";const i="/assets/父传子.3b39ee79.jpg",c="/assets/子传父.c1fc35e1.jpg",b=JSON.parse('{"title":"组合式API - 父子通信","description":"","frontmatter":{},"headers":[],"relativePath":"pro-vue3/api/components/index.md","filePath":"pro-vue3/api/components/index.md","lastUpdated":1688802289000}'),l={name:"pro-vue3/api/components/index.md"},s=a('<h1 id="组合式api-父子通信" tabindex="-1">组合式API - 父子通信 <a class="header-anchor" href="#组合式api-父子通信" aria-label="Permalink to &quot;组合式API - 父子通信&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>子组件通过 <code>defineProps</code> 接收父组件传入的值</li><li>子组件通过 <code>defineEmit</code> 像父组件传入事件</li></ul></div><h2 id="_1-父传子" tabindex="-1">1. 父传子 <a class="header-anchor" href="#_1-父传子" aria-label="Permalink to &quot;1. 父传子&quot;">​</a></h2><blockquote><ol><li>父组件中给子组件绑定属性</li><li>子组件内部通过 <code>defineProps</code> 编译器宏接收子组件传递的数据</li></ol></blockquote><p><img src="'+i+'" alt="image.png"></p><h2 id="_2-子传父" tabindex="-1">2. 子传父 <a class="header-anchor" href="#_2-子传父" aria-label="Permalink to &quot;2. 子传父&quot;">​</a></h2><blockquote><ol><li>父组件中给子组件标签通过 <code>@绑定事件</code></li><li>子组件内部通过 <code>defineEmit</code> 编译器宏生成 <code>emit</code> 方法</li><li>使用 <code>emit</code> 触发自定义的事件，并传递参数</li></ol></blockquote><p><img src="'+c+'" alt="image.png"></p>',8),d=[s];function n(r,p,_,m,u,h){return o(),t("div",null,d)}const P=e(l,[["render",n]]);export{b as __pageData,P as default};
