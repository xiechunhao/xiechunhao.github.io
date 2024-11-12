/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 16:06:55 
 */
import{C as f}from"./index-D0bnGtHt.js";import{o as p,b as c,a3 as m,u as y}from"./vsv-element-plus-Brnt1GMz.js";import"./vsv-icon-CX0cXpax.js";import"./vsv-nprogress-Cnw-SRAI.js";const N=Object.assign({name:"VabCount"},{__name:"index",props:{startValue:{type:Number,required:!1,default:0},endValue:{type:Number,required:!1,default:20},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator(s){return s>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Array,default:()=>[.2,.2,0,1]}},setup(s){const e=s,u=ref(e.startValue),l=useTransition(u,{duration:e.duration,transition:e.useEasing?e.easingFn:TransitionPresets.linear}),n=t=>{t=t.toFixed(e.decimals),t+="";const a=t.split(".");let r=a[0];const d=a.length>1?e.decimal+a[1]:"",i=/(\d+)(\d{3})/;if(e.separator&&!f(e.separator))for(;i.test(r);)r=r.replace(i,`$1${e.separator}$2`);return e.prefix+r+d+e.suffix},o=computed(()=>n(l.value));return watch(e,t=>{t.autoplay&&(u.value=t.endValue)},{immediate:!0}),(t,a)=>(p(),c("span",null,m(y(o)),1))}});export{N as default};
