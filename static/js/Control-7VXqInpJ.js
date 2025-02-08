/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:17:33 
 */
import{_ as r}from"./index-vqJMV2wg.js";import{N as a,o as d,M as p,$ as l,T as n,a4 as s}from"./vsv-element-plus-CxGOTlXz.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const u=defineComponent({name:"Control",props:{lf:{type:Object||String,default:()=>{}}},emits:["cat-data"],data(){return{undoDisable:!0,redoDisable:!0,graphData:null,dataVisible:!1}},mounted(){this.$props.lf.on("history:change",({data:{undoAble:t,redoAble:o}})=>{this.$data.undoDisable=!t,this.$data.redoDisable=!o})},methods:{$_zoomIn(){this.$props.lf.zoom(!0)},$_zoomOut(){this.$props.lf.zoom(!1)},$_zoomReset(){this.$props.lf.resetZoom()},$_translateRest(){this.$props.lf.resetTranslate()},$_reset(){this.$props.lf.resetZoom(),this.$props.lf.resetTranslate()},$_undo(){this.$props.lf.undo()},$_redo(){this.$props.lf.redo()},$_download(){this.$props.lf.getSnapshot()},$_catData(){this.$emit("cat-data")}}});function $(t,o,f,m,C,k){const e=a("el-button"),i=a("el-button-group");return d(),p(i,null,{default:l(()=>[n(e,{plain:"",onClick:t.$_zoomIn},{default:l(()=>o[0]||(o[0]=[s("放大")])),_:1},8,["onClick"]),n(e,{plain:"",onClick:t.$_zoomOut},{default:l(()=>o[1]||(o[1]=[s("缩小")])),_:1},8,["onClick"]),n(e,{plain:"",onClick:t.$_zoomReset},{default:l(()=>o[2]||(o[2]=[s("大小适应")])),_:1},8,["onClick"]),n(e,{plain:"",onClick:t.$_translateRest},{default:l(()=>o[3]||(o[3]=[s("定位还原")])),_:1},8,["onClick"]),n(e,{plain:"",onClick:t.$_reset},{default:l(()=>o[4]||(o[4]=[s("还原")])),_:1},8,["onClick"]),n(e,{disabled:t.undoDisable,plain:"",onClick:t.$_undo},{default:l(()=>o[5]||(o[5]=[s("上一步")])),_:1},8,["disabled","onClick"]),n(e,{disabled:t.redoDisable,plain:"",onClick:t.$_redo},{default:l(()=>o[6]||(o[6]=[s("下一步")])),_:1},8,["disabled","onClick"]),n(e,{plain:"",onClick:t.$_download},{default:l(()=>o[7]||(o[7]=[s("下载图片")])),_:1},8,["onClick"]),n(e,{plain:"",onClick:t.$_catData},{default:l(()=>o[8]||(o[8]=[s("查看数据")])),_:1},8,["onClick"])]),_:1})}const g=r(u,[["render",$]]);export{g as default};
