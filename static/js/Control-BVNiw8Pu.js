/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 16:06:30 
 */
import{_ as i}from"./index-D08hoOyC.js";import{d as r,o as d,S as p,T as l,W as s,a8 as e,a9 as u,bX as $}from"./vsv-element-plus-OoOmiKKG.js";import"./vsv-icon-Df9CwUcM.js";import"./vsv-nprogress-CNnfF26O.js";const f=r({name:"Control",props:{lf:{type:Object||String,default:()=>{}}},emits:["cat-data"],data(){return{undoDisable:!0,redoDisable:!0,graphData:null,dataVisible:!1}},mounted(){this.$props.lf.on("history:change",({data:{undoAble:t,redoAble:o}})=>{this.$data.undoDisable=!t,this.$data.redoDisable=!o})},methods:{$_zoomIn(){this.$props.lf.zoom(!0)},$_zoomOut(){this.$props.lf.zoom(!1)},$_zoomReset(){this.$props.lf.resetZoom()},$_translateRest(){this.$props.lf.resetTranslate()},$_reset(){this.$props.lf.resetZoom(),this.$props.lf.resetTranslate()},$_undo(){this.$props.lf.undo()},$_redo(){this.$props.lf.redo()},$_download(){this.$props.lf.getSnapshot()},$_catData(){this.$emit("cat-data")}}});function m(t,o,C,k,_,b){const n=u,a=$;return d(),p(a,null,{default:l(()=>[s(n,{plain:"",onClick:t.$_zoomIn},{default:l(()=>o[0]||(o[0]=[e("放大")])),_:1},8,["onClick"]),s(n,{plain:"",onClick:t.$_zoomOut},{default:l(()=>o[1]||(o[1]=[e("缩小")])),_:1},8,["onClick"]),s(n,{plain:"",onClick:t.$_zoomReset},{default:l(()=>o[2]||(o[2]=[e("大小适应")])),_:1},8,["onClick"]),s(n,{plain:"",onClick:t.$_translateRest},{default:l(()=>o[3]||(o[3]=[e("定位还原")])),_:1},8,["onClick"]),s(n,{plain:"",onClick:t.$_reset},{default:l(()=>o[4]||(o[4]=[e("还原")])),_:1},8,["onClick"]),s(n,{disabled:t.undoDisable,plain:"",onClick:t.$_undo},{default:l(()=>o[5]||(o[5]=[e("上一步")])),_:1},8,["disabled","onClick"]),s(n,{disabled:t.redoDisable,plain:"",onClick:t.$_redo},{default:l(()=>o[6]||(o[6]=[e("下一步")])),_:1},8,["disabled","onClick"]),s(n,{plain:"",onClick:t.$_download},{default:l(()=>o[7]||(o[7]=[e("下载图片")])),_:1},8,["onClick"]),s(n,{plain:"",onClick:t.$_catData},{default:l(()=>o[8]||(o[8]=[e("查看数据")])),_:1},8,["onClick"])]),_:1})}const R=i(f,[["render",m]]);export{R as default};
