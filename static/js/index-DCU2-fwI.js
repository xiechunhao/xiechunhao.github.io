/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:20:55 
 */
import{l as g}from"./landscape-C1CSDfEv.js";import{d as v,a as k,J as l,b as y,U as c,A as p,u as h,Z as f,E as T,o as w}from"./vsv-element-plus-CWjYVfvE.js";const a=function(e,n){if(!(this instanceof a))return new a(e,n);if(this.options=this.extend({noPrint:".no-print"},n),typeof e=="string")try{this.dom=document.querySelector(e)}catch{const o=document.createElement("div");o.innerHTML=e,this.dom=o}else this.isDOM(e),this.dom=this.isDOM(e)?e:e.$el;this.init()};a.prototype={init(){const e=this.getStyle()+this.getHtml();this.writeIframe(e)},extend(e,n){for(const o in n)e[o]=n[o];return e},getStyle(){let e="";const n=document.querySelectorAll("style,link");for(const o of n)e+=o.outerHTML;return e+=`<style>${this.options.noPrint?this.options.noPrint:".no-print"}{display:none;}</style>`,e+="<style>html,body{background-color:#fff;}</style>",e},getHtml(){const e=document.querySelectorAll("input"),n=document.querySelectorAll("textarea"),o=document.querySelectorAll("select");for(const t of e)t.type=="checkbox"||t.type=="radio"?t.checked?t.setAttribute("checked","checked"):t.removeAttribute("checked"):(t.type=="text",t.setAttribute("value",t.value));for(const t of n)t.type=="textarea"&&(t.innerHTML=t.value);for(const t of o)if(t.type=="select-one"){const s=t.children;for(const i in s)s[i].tagName=="OPTION"&&(s[i].selected==!0?s[i].setAttribute("selected","selected"):s[i].removeAttribute("selected"))}return this.dom.outerHTML},writeIframe(e){const n=document.createElement("iframe"),o=document.body.appendChild(n);n.id="myIframe",n.setAttribute("style","position:absolute;width:0;height:0;top:-10px;left:-10px;");const t=o.contentWindow||o.contentDocument,s=o.contentDocument||o.contentWindow.document;s.open(),s.write(e),s.close();const i=this;n.addEventListener("load",()=>{i.toPrint(t),setTimeout(()=>{document.body.removeChild(n)},100)})},toPrint(e){try{setTimeout(()=>{e.focus();try{e.document.execCommand("print",!1,null)||e.print()}catch{e.print()}e.close()},10)}catch(n){console.log("err",n)}},isDOM:typeof HTMLElement=="object"?function(e){return e instanceof HTMLElement}:function(e){return e&&typeof e=="object"&&e.nodeType===1&&typeof e.nodeName=="string"}};const A={class:"print-container"},M=["src"],P=v({name:"Print",__name:"index",setup(e){const n=ref(null),o=ref(),t=ref([{name:"马云",address:"上海市普陀区金沙江路"},{name:"马化腾",address:"上海市普陀区金沙江路"},{name:"李彦宏",address:"上海市普陀区金沙江路"},{name:"刘强东",address:"上海市普陀区金沙江路"}]),s=async u=>{switch(u){case"imageRef":{await a(n.value);break}case"tableRef":{await a(o.value);break}}},i=()=>{T.prompt("","自定义打印",{inputType:"textarea",inputValue:"<h1>Vue Shop Vite</h1><p>vuejs-core.cn/shop-vite</p>",inputErrorMessage:"Invalid Email",confirmButtonText:"打印",draggable:!0}).then(({value:u})=>{a(u)}).catch(()=>{})};return(u,r)=>{const d=p("el-button"),b=p("el-space"),m=p("el-table-column"),x=p("el-table");return w(),k("div",A,[l(b,{wrap:""},{default:c(()=>[l(d,{type:"primary",onClick:r[0]||(r[0]=_=>s("imageRef"))},{default:c(()=>r[2]||(r[2]=[f("打印图片")])),_:1}),l(d,{type:"primary",onClick:r[1]||(r[1]=_=>s("tableRef"))},{default:c(()=>r[3]||(r[3]=[f("打印表格")])),_:1}),l(d,{type:"primary",onClick:i},{default:c(()=>r[4]||(r[4]=[f("自定义打印")])),_:1})]),_:1}),y("img",{ref_key:"imageRef",ref:n,alt:"",src:h(g),style:{display:"block",width:"520px","margin-top":"15px"}},null,8,M),r[5]||(r[5]=y("br",null,null,-1)),l(x,{ref_key:"tableRef",ref:o,data:h(t),style:{width:"520px"}},{default:c(()=>[l(m,{label:"姓名",prop:"name",width:"120px"}),l(m,{label:"地址",prop:"address"})]),_:1},8,["data"])])}}});export{P as default};
