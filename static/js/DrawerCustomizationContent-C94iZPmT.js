/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:39:13 
 */
import{d as E,N as n,o as Q,b as U,T as l,$ as t,a4 as p,u as a,k as y,bg as g,e as k,a3 as Y,P as z,E as R}from"./vsv-element-plus-CxGOTlXz.js";const V="80px",j=E({__name:"DrawerCustomizationContent",setup($){let f;const i=ref(!1),d=ref(!1),r=ref(!1),s=reactive({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),C=[{date:"2016-05-02",name:"Peter Parker",address:"Queens, New York City"},{date:"2016-05-04",name:"Peter Parker",address:"Queens, New York City"},{date:"2016-05-01",name:"Peter Parker",address:"Queens, New York City"},{date:"2016-05-03",name:"Peter Parker",address:"Queens, New York City"}],b=ref(),w=()=>{var u;(u=b.value)==null||u.close()},P=u=>{r.value||R.confirm("您确定要提交吗？",{draggable:!0}).then(()=>{r.value=!0,f=setTimeout(()=>{u(),setTimeout(()=>{r.value=!1},400)},1e3*2)}).catch(()=>{})},x=()=>{r.value=!1,d.value=!1,f&&clearTimeout(f)};return(u,e)=>{const m=n("el-button"),_=n("el-table-column"),N=n("el-table"),T=n("el-input"),c=n("el-form-item"),v=n("el-option"),B=n("el-select"),D=n("el-form");return Q(),U(z,null,[l(m,{type:"primary",onClick:e[0]||(e[0]=o=>i.value=!0)},{default:t(()=>e[6]||(e[6]=[p("嵌套表格")])),_:1}),l(m,{type:"primary",onClick:e[1]||(e[1]=o=>d.value=!0)},{default:t(()=>e[7]||(e[7]=[p("嵌套表单")])),_:1}),l(a(g),{modelValue:a(i),"onUpdate:modelValue":e[2]||(e[2]=o=>y(i)?i.value=o:null),"append-to-body":"",direction:"rtl",size:"288px",title:"我有一个嵌套表格"},{default:t(()=>[l(N,{data:C},{default:t(()=>[l(_,{label:"日期",property:"date",width:"150"}),l(_,{label:"姓名",property:"name",width:"200"}),l(_,{label:"地址",property:"address"})]),_:1})]),_:1},8,["modelValue"]),l(a(g),{ref_key:"drawerRef",ref:b,modelValue:a(d),"onUpdate:modelValue":e[5]||(e[5]=o=>y(d)?d.value=o:null),"append-to-body":"","before-close":P,direction:"ltr",size:"288px",title:"我有一个嵌套的表单！"},{default:t(()=>[k("div",null,[l(D,{model:a(s)},{default:t(()=>[l(c,{label:"姓名","label-width":V},{default:t(()=>[l(T,{modelValue:a(s).name,"onUpdate:modelValue":e[3]||(e[3]=o=>a(s).name=o),autocomplete:"off",clearable:""},null,8,["modelValue"])]),_:1}),l(c,{label:"地区","label-width":V},{default:t(()=>[l(B,{modelValue:a(s).region,"onUpdate:modelValue":e[4]||(e[4]=o=>a(s).region=o),placeholder:"请选择活动区域"},{default:t(()=>[l(v,{label:"上海",value:"shanghai"}),l(v,{label:"北京",value:"beijing"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),k("div",null,[l(m,{onClick:x},{default:t(()=>e[8]||(e[8]=[p("取消")])),_:1}),l(m,{loading:a(r),type:"primary",onClick:w},{default:t(()=>[p(Y(a(r)?"提交中 ...":"提交"),1)]),_:1},8,["loading"])])])]),_:1},8,["modelValue"])],64)}}});export{j as default};
