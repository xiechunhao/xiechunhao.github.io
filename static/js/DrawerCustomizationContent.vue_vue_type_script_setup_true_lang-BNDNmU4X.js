/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-12 16:08:16 
 */
import{d as Q,r as m,h as Y,b as D,o as F,a2 as U,Z as a,a8 as z,T as l,a7 as p,u as t,an as v,i as g,aQ as R,aO as I,e as k,ao as L,ap as O,aL as S,as as $,at as j,Y as H,H as M}from"./vsv-element-plus-B-S50adB.js";const V="80px",q=Q({__name:"DrawerCustomizationContent",setup(W){let f;const u=m(!1),r=m(!1),n=m(!1),s=Y({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),C=[{date:"2016-05-02",name:"Peter Parker",address:"Queens, New York City"},{date:"2016-05-04",name:"Peter Parker",address:"Queens, New York City"},{date:"2016-05-01",name:"Peter Parker",address:"Queens, New York City"},{date:"2016-05-03",name:"Peter Parker",address:"Queens, New York City"}],c=m(),w=()=>{var d;(d=c.value)==null||d.close()},E=d=>{n.value||M.confirm("您确定要提交吗？",{draggable:!0}).then(()=>{n.value=!0,f=setTimeout(()=>{d(),setTimeout(()=>{n.value=!1},400)},1e3*2)}).catch(()=>{})},x=()=>{n.value=!1,r.value=!1,f&&clearTimeout(f)};return(d,e)=>{const i=z,_=I,P=R,N=S,b=O,y=j,T=$,B=L;return F(),D(U,null,[a(i,{type:"primary",onClick:e[0]||(e[0]=o=>u.value=!0)},{default:l(()=>e[6]||(e[6]=[p("嵌套表格")])),_:1}),a(i,{type:"primary",onClick:e[1]||(e[1]=o=>r.value=!0)},{default:l(()=>e[7]||(e[7]=[p("嵌套表单")])),_:1}),a(t(v),{modelValue:t(u),"onUpdate:modelValue":e[2]||(e[2]=o=>g(u)?u.value=o:null),"append-to-body":"",direction:"rtl",size:"288px",title:"我有一个嵌套表格"},{default:l(()=>[a(P,{data:C},{default:l(()=>[a(_,{label:"日期",property:"date",width:"150"}),a(_,{label:"姓名",property:"name",width:"200"}),a(_,{label:"地址",property:"address"})]),_:1})]),_:1},8,["modelValue"]),a(t(v),{ref_key:"drawerRef",ref:c,modelValue:t(r),"onUpdate:modelValue":e[5]||(e[5]=o=>g(r)?r.value=o:null),"append-to-body":"","before-close":E,direction:"ltr",size:"288px",title:"我有一个嵌套的表单！"},{default:l(()=>[k("div",null,[a(B,{model:t(s)},{default:l(()=>[a(b,{label:"姓名","label-width":V},{default:l(()=>[a(N,{modelValue:t(s).name,"onUpdate:modelValue":e[3]||(e[3]=o=>t(s).name=o),autocomplete:"off",clearable:""},null,8,["modelValue"])]),_:1}),a(b,{label:"地区","label-width":V},{default:l(()=>[a(T,{modelValue:t(s).region,"onUpdate:modelValue":e[4]||(e[4]=o=>t(s).region=o),placeholder:"请选择活动区域"},{default:l(()=>[a(y,{label:"上海",value:"shanghai"}),a(y,{label:"北京",value:"beijing"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),k("div",null,[a(i,{onClick:x},{default:l(()=>e[8]||(e[8]=[p("取消")])),_:1}),a(i,{loading:t(n),type:"primary",onClick:w},{default:l(()=>[p(H(t(n)?"提交中 ...":"提交"),1)]),_:1},8,["loading"])])])]),_:1},8,["modelValue"])],64)}}});export{q as _};
