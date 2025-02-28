/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{d as Q,b as T,L as l,V as t,D as n,G as y,u as o,b9 as V,I as U,o as Y,_ as p,e as g,Z as z,E as R}from"./vsv-element-plus-DQNbQgVr.js";const k="80px",$=Q({__name:"DrawerCustomizationContent",setup(F){let f;const i=ref(!1),d=ref(!1),r=ref(!1),s=reactive({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),C=[{date:"2016-05-02",name:"Peter Parker",address:"Queens, New York City"},{date:"2016-05-04",name:"Peter Parker",address:"Queens, New York City"},{date:"2016-05-01",name:"Peter Parker",address:"Queens, New York City"},{date:"2016-05-03",name:"Peter Parker",address:"Queens, New York City"}],b=ref(),w=()=>{var u;(u=b.value)==null||u.close()},x=u=>{r.value||R.confirm("您确定要提交吗？",{draggable:!0}).then(()=>{r.value=!0,f=setTimeout(()=>{u(),setTimeout(()=>{r.value=!1},400)},1e3*2)}).catch(()=>{})},P=()=>{r.value=!1,d.value=!1,f&&clearTimeout(f)};return(u,e)=>{const m=n("el-button"),_=n("el-table-column"),N=n("el-table"),D=n("el-input"),c=n("el-form-item"),v=n("el-option"),B=n("el-select"),E=n("el-form");return Y(),T(U,null,[l(m,{type:"primary",onClick:e[0]||(e[0]=a=>i.value=!0)},{default:t(()=>e[6]||(e[6]=[p("嵌套表格")])),_:1}),l(m,{type:"primary",onClick:e[1]||(e[1]=a=>d.value=!0)},{default:t(()=>e[7]||(e[7]=[p("嵌套表单")])),_:1}),l(o(V),{modelValue:o(i),"onUpdate:modelValue":e[2]||(e[2]=a=>y(i)?i.value=a:null),"append-to-body":"",direction:"rtl",size:"288px",title:"我有一个嵌套表格"},{default:t(()=>[l(N,{data:C},{default:t(()=>[l(_,{label:"日期",property:"date",width:"150"}),l(_,{label:"姓名",property:"name",width:"200"}),l(_,{label:"地址",property:"address"})]),_:1})]),_:1},8,["modelValue"]),l(o(V),{ref_key:"drawerRef",ref:b,modelValue:o(d),"onUpdate:modelValue":e[5]||(e[5]=a=>y(d)?d.value=a:null),"append-to-body":"","before-close":x,direction:"ltr",size:"288px",title:"我有一个嵌套的表单！"},{default:t(()=>[g("div",null,[l(E,{model:o(s)},{default:t(()=>[l(c,{label:"姓名","label-width":k},{default:t(()=>[l(D,{modelValue:o(s).name,"onUpdate:modelValue":e[3]||(e[3]=a=>o(s).name=a),autocomplete:"off",clearable:""},null,8,["modelValue"])]),_:1}),l(c,{label:"地区","label-width":k},{default:t(()=>[l(B,{modelValue:o(s).region,"onUpdate:modelValue":e[4]||(e[4]=a=>o(s).region=a),placeholder:"请选择活动区域"},{default:t(()=>[l(v,{label:"上海",value:"shanghai"}),l(v,{label:"北京",value:"beijing"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),g("div",null,[l(m,{onClick:P},{default:t(()=>e[8]||(e[8]=[p("取消")])),_:1}),l(m,{loading:o(r),type:"primary",onClick:w},{default:t(()=>[p(z(o(r)?"提交中 ...":"提交"),1)]),_:1},8,["loading"])])])]),_:1},8,["modelValue"])],64)}}});export{$ as default};
