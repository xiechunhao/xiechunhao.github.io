/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 15:51:39 
 */
import{d as E,B as n,o as Q,b as T,K as l,S as t,Y as p,u as o,I as y,b9 as g,e as k,X as U,F as z,E as F}from"./vsv-element-plus-CqWB58IK.js";const V="80px",$=E({__name:"DrawerCustomizationContent",setup(R){let f;const i=ref(!1),d=ref(!1),r=ref(!1),s=reactive({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),C=[{date:"2016-05-02",name:"Peter Parker",address:"Queens, New York City"},{date:"2016-05-04",name:"Peter Parker",address:"Queens, New York City"},{date:"2016-05-01",name:"Peter Parker",address:"Queens, New York City"},{date:"2016-05-03",name:"Peter Parker",address:"Queens, New York City"}],b=ref(),w=()=>{var u;(u=b.value)==null||u.close()},x=u=>{r.value||F.confirm("您确定要提交吗？",{draggable:!0}).then(()=>{r.value=!0,f=setTimeout(()=>{u(),setTimeout(()=>{r.value=!1},400)},1e3*2)}).catch(()=>{})},P=()=>{r.value=!1,d.value=!1,f&&clearTimeout(f)};return(u,e)=>{const m=n("el-button"),_=n("el-table-column"),N=n("el-table"),B=n("el-input"),c=n("el-form-item"),v=n("el-option"),Y=n("el-select"),D=n("el-form");return Q(),T(z,null,[l(m,{type:"primary",onClick:e[0]||(e[0]=a=>i.value=!0)},{default:t(()=>e[6]||(e[6]=[p("嵌套表格")])),_:1}),l(m,{type:"primary",onClick:e[1]||(e[1]=a=>d.value=!0)},{default:t(()=>e[7]||(e[7]=[p("嵌套表单")])),_:1}),l(o(g),{modelValue:o(i),"onUpdate:modelValue":e[2]||(e[2]=a=>y(i)?i.value=a:null),"append-to-body":"",direction:"rtl",size:"288px",title:"我有一个嵌套表格"},{default:t(()=>[l(N,{data:C},{default:t(()=>[l(_,{label:"日期",property:"date",width:"150"}),l(_,{label:"姓名",property:"name",width:"200"}),l(_,{label:"地址",property:"address"})]),_:1})]),_:1},8,["modelValue"]),l(o(g),{ref_key:"drawerRef",ref:b,modelValue:o(d),"onUpdate:modelValue":e[5]||(e[5]=a=>y(d)?d.value=a:null),"append-to-body":"","before-close":x,direction:"ltr",size:"288px",title:"我有一个嵌套的表单！"},{default:t(()=>[k("div",null,[l(D,{model:o(s)},{default:t(()=>[l(c,{label:"姓名","label-width":V},{default:t(()=>[l(B,{modelValue:o(s).name,"onUpdate:modelValue":e[3]||(e[3]=a=>o(s).name=a),autocomplete:"off",clearable:""},null,8,["modelValue"])]),_:1}),l(c,{label:"地区","label-width":V},{default:t(()=>[l(Y,{modelValue:o(s).region,"onUpdate:modelValue":e[4]||(e[4]=a=>o(s).region=a),placeholder:"请选择活动区域"},{default:t(()=>[l(v,{label:"上海",value:"shanghai"}),l(v,{label:"北京",value:"beijing"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),k("div",null,[l(m,{onClick:P},{default:t(()=>e[8]||(e[8]=[p("取消")])),_:1}),l(m,{loading:o(r),type:"primary",onClick:w},{default:t(()=>[p(U(o(r)?"提交中 ...":"提交"),1)]),_:1},8,["loading"])])])]),_:1},8,["modelValue"])],64)}}});export{$ as default};
