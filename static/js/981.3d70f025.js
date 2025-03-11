/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-11 22:54:54
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[981],{60981:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var a=r(34641);const n={class:"iframe-container"},s=["src"];function u(e,t,r,u,c,i){return(0,a.uX)(),(0,a.CE)("div",n,[(0,a.Lk)("iframe",{frameborder:"0",src:e.url},null,8,s)])}var c=r(66183),i=(0,a.pM)({name:"Iframe",data(){return{url:""}},watch:{$route:"handleIframe"},created(){this.handleIframe()},methods:{...mapActions(c.Z,["changeTabsMeta"]),handleIframe(){this.url=`https://${this.$route.query.url}`;const e={...this.$route.meta,...this.$route.query};this.$nextTick((()=>{this.changeTabsMeta({title:"Iframe",meta:e})}))}}});function o(e){e.__source="src/views/other/iframe/view.vue"}var h=r(48499);"function"===typeof o&&o(i);const f=(0,h.A)(i,[["render",u],["__scopeId","data-v-053d42bc"]]);var d=f}}]);