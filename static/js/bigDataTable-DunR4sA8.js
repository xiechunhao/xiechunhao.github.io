/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-15 13:32:11 
 */
import{d as p,W as o,u as i,r as b,o as g,b as C,T as f,bm as k,by as y,bz as $,bA as v}from"./vsv-element-plus-OoOmiKKG.js";const A={class:"big-data-table-container auto-height-container"},R=p({name:"BigDataTable",__name:"bigDataTable",setup(E){const u=({value:t,intermediate:n=!1,onChange:a})=>o(k,{onChange:a,modelValue:t,indeterminate:n},null),h=(t=10,n="column-",a)=>Array.from({length:t}).map((c,e)=>({...a,key:`${n}${e}`,dataKey:`${n}${e}`,title:`Column ${e}`,width:150})),m=(t,n=200,a="row-")=>Array.from({length:n}).map((c,e)=>t.reduce((l,d,_)=>(l[d.dataKey]=`Row ${e} - Col ${_}`,l),{id:`${a}${e}`,checked:!1,parentId:null})),s=h(15);s.unshift({key:"selection",width:38,cellRenderer:({rowData:t})=>{const n=a=>t.checked=a;return o(u,{value:t.checked,onChange:n},null)},headerCellRenderer:()=>{const t=i(r),n=e=>r.value=t.map(l=>(l.checked=e,l)),a=t.every(e=>e.checked),c=t.some(e=>e.checked);return o(u,{value:a,intermediate:c&&!a,onChange:n},null)}});const r=b(m(s,200));return(t,n)=>{const a=y,c=$,e=v;return g(),C("div",A,[o(a,{class:"hidden-sm-and-up",closable:!1,title:"手机端不支持大数据表格演示",type:"warning"}),o(e,{class:"hidden-xs-only"},{default:f(({height:l,width:d})=>[o(c,{columns:i(s),data:i(r),fixed:"",height:l,width:d},null,8,["columns","data","height","width"])]),_:1})])}}});export{R as default};
