/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-12 00:44:12
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4167],{34167:function(l,e,o){o.r(e),o.d(e,{default:function(){return d}});var t=o(34641);function a(l,e,o,a,s,n){const i=(0,t.g2)("el-button"),r=(0,t.g2)("el-button-group");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.bF)(r,null,{default:(0,t.k6)((()=>[(0,t.bF)(i,{plain:"",size:"small",onClick:l.$_zoomIn},{default:(0,t.k6)((()=>e[0]||(e[0]=[(0,t.eW)("放大")]))),_:1},8,["onClick"]),(0,t.bF)(i,{plain:"",size:"small",onClick:l.$_zoomOut},{default:(0,t.k6)((()=>e[1]||(e[1]=[(0,t.eW)("缩小")]))),_:1},8,["onClick"]),(0,t.bF)(i,{plain:"",size:"small",onClick:l.$_zoomReset},{default:(0,t.k6)((()=>e[2]||(e[2]=[(0,t.eW)("大小适应")]))),_:1},8,["onClick"]),(0,t.bF)(i,{plain:"",size:"small",onClick:l.$_translateRest},{default:(0,t.k6)((()=>e[3]||(e[3]=[(0,t.eW)(" 定位还原 ")]))),_:1},8,["onClick"]),(0,t.bF)(i,{plain:"",size:"small",onClick:l.$_reset},{default:(0,t.k6)((()=>e[4]||(e[4]=[(0,t.eW)("还原(大小&定位)")]))),_:1},8,["onClick"]),(0,t.bF)(i,{disabled:l.undoDisable,plain:"",size:"small",onClick:l.$_undo},{default:(0,t.k6)((()=>e[5]||(e[5]=[(0,t.eW)(" 上一步(ctrl+z) ")]))),_:1},8,["disabled","onClick"]),(0,t.bF)(i,{disabled:l.redoDisable,plain:"",size:"small",onClick:l.$_redo},{default:(0,t.k6)((()=>e[6]||(e[6]=[(0,t.eW)(" 下一步(ctrl+y) ")]))),_:1},8,["disabled","onClick"]),(0,t.bF)(i,{plain:"",size:"small",onClick:l.$_download},{default:(0,t.k6)((()=>e[7]||(e[7]=[(0,t.eW)("下载图片")]))),_:1},8,["onClick"]),(0,t.bF)(i,{plain:"",size:"small",onClick:l.$_catData},{default:(0,t.k6)((()=>e[8]||(e[8]=[(0,t.eW)("查看数据")]))),_:1},8,["onClick"])])),_:1})])}var s=(0,t.pM)({name:"Control",props:{lf:{type:Object||String,default:()=>{}}},emits:["cat-data"],data(){return{undoDisable:!0,redoDisable:!0,graphData:null,dataVisible:!1}},mounted(){this.$props.lf.on("history:change",(({data:{undoAble:l,redoAble:e}})=>{this.$data.undoDisable=!l,this.$data.redoDisable=!e}))},methods:{$_zoomIn(){this.$props.lf.zoom(!0)},$_zoomOut(){this.$props.lf.zoom(!1)},$_zoomReset(){this.$props.lf.resetZoom()},$_translateRest(){this.$props.lf.resetTranslate()},$_reset(){this.$props.lf.resetZoom(),this.$props.lf.resetTranslate()},$_undo(){this.$props.lf.undo()},$_redo(){this.$props.lf.redo()},$_download(){this.$props.lf.getSnapshot()},$_catData(){this.$emit("cat-data")}}});function n(l){l.__source="src/views/other/workflow/components/lFComponents/Control.vue"}var i=o(48499);"function"===typeof n&&n(s);const r=(0,i.A)(s,[["render",a]]);var d=r}}]);