import{o as a,p as e,q as r,t as s,v as t,w as o,m as l,_ as n}from"./index-D_qZw2oD.js";/* empty css                    *//* empty css                       *//* empty css                        */import{d as p,r as c,Z as i,f as u,c as d,e as v,b as m,M as g,b2 as b,u as x,m as f,w,b3 as _,aK as y,x as h,b0 as j,o as V}from"./vendor-Dakx4FZ3.js";const U={class:"region new-user art-custom-card"},k={class:"card-header"},q={style:{display:"flex","align-items":"center"}},I=["src"],K={class:"user-name"},M={style:{display:"flex","align-items":"center"}},N={style:{"margin-left":"10px"}},T=n(p({__name:"NewUser",setup(n){const p=c("本月"),T=i([{username:"中小鱼",province:"北京",sex:0,age:22,percentage:60,pro:0,color:"rgb(var(--art-primary)) !important",avatar:a},{username:"何小荷",province:"深圳",sex:1,age:21,percentage:20,pro:0,color:"rgb(var(--art-secondary)) !important",avatar:e},{username:"誶誶淰",province:"上海",sex:1,age:23,percentage:60,pro:0,color:"rgb(var(--art-warning)) !important",avatar:r},{username:"发呆草",province:"长沙",sex:0,age:28,percentage:50,pro:0,color:"rgb(var(--art-info)) !important",avatar:s},{username:"甜筒",province:"浙江",sex:1,age:26,percentage:70,pro:0,color:"rgb(var(--art-error)) !important",avatar:t},{username:"冷月呆呆",province:"湖北",sex:1,age:25,percentage:90,pro:0,color:"rgb(var(--art-success)) !important",avatar:o}]);u((()=>{Z()}));const Z=()=>{setTimeout((()=>{for(let a=0;a<T.length;a++){let e=T[a];T[a].pro=e.percentage}}),100)};return(a,e)=>{const r=_,s=b,t=y,o=j,n=l;return V(),d("div",U,[v("div",k,[e[1]||(e[1]=v("div",{class:"title"},[v("h4",{class:"box-title"},"新用户"),v("p",{class:"subtitle"},[g("这个月增长"),v("span",{class:"text-success"},"+20%")])],-1)),m(s,{modelValue:x(p),"onUpdate:modelValue":e[0]||(e[0]=a=>f(p)?p.value=a:null)},{default:w((()=>[m(r,{value:"本月",label:"本月"}),m(r,{value:"上月",label:"上月"}),m(r,{value:"今年",label:"今年"})])),_:1},8,["modelValue"])]),m(n,{data:x(T),pagination:!1},{default:w((()=>[m(t,{label:"头像",prop:"avatar",width:"150px"},{default:w((a=>[v("div",q,[v("img",{class:"avatar",src:a.row.avatar},null,8,I),v("span",K,h(a.row.username),1)])])),_:1}),m(t,{label:"地区",prop:"province"}),m(t,{label:"性别",prop:"avatar"},{default:w((a=>[v("div",M,[v("span",N,h(1===a.row.sex?"男":"女"),1)])])),_:1}),m(t,{label:"进度",width:"240"},{default:w((a=>[m(o,{percentage:a.row.pro,color:a.row.color,"stroke-width":4},null,8,["percentage","color"])])),_:1})])),_:1},8,["data"])])}}}),[["__scopeId","data-v-d968f885"]]);export{T as default};
