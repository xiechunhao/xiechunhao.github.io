import{h as e,c as t,j as o,k as n,s,z as r,y as a}from"./vendor-Bhb26uf3.js";import{_ as l}from"./index-jEQxvlyX.js";const c=["innerHTML"],i={key:1},p=l(e({__name:"ButtonTable",props:{text:{},icon:{},type:{},buttonClass:{},useColor:{type:Boolean,default:!0}},emits:["click"],setup(e,{emit:l}){const p=e,y=l,d=[{type:"add",icon:"&#xe602;",color:"bg-primary"},{type:"edit",icon:"&#xe642;",color:"bg-secondary"},{type:"delete",icon:"&#xe783;",color:"bg-error"},{type:"more",icon:"&#xe6df;",color:""}],u=t((()=>{return p.useColor?p.buttonClass||(p.type?(e=p.type,null==(t=d.find((t=>t.type===e)))?void 0:t.color):""):"";var e,t})),x=()=>{y("click")};return(e,t)=>{return o(),n("div",{class:a(["btn-text custom-text",`btn-${p.type}`,e.useColor?u.value:""]),onClick:x},[p.type?(o(),n("i",{key:0,class:"iconfont-sys",innerHTML:(l=p.type,null==(y=d.find((e=>e.type===l)))?void 0:y.icon)},null,8,c)):s("",!0),p.text?(o(),n("span",i,r(p.text),1)):s("",!0)],2);var l,y}}}),[["__scopeId","data-v-3b59ebef"]]);export{p as _};
