/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-26 15:53:45 
 */
import{d as w,r as b,o as E,b as B,W as t,T as e,a8 as n,u,h as i,e as p,a3 as U,I as y,bE as N,ap as O,a9 as R,aw as $}from"./vsv-element-plus-DDEqdpLt.js";const z={style:{flex:"auto"}},F=w({__name:"DrawerBasicUsage",setup(D){const m=b(!1),d=b(!1),s=b("rtl"),a=b("Option 1"),C=v=>{y.confirm("您确定要关闭抽屉吗？",{draggable:!0}).then(()=>{v()}).catch(()=>{})};function g(){d.value=!1}function k(){y.confirm(`您确认选择${a.value}吗？`,{draggable:!0}).then(()=>{d.value=!1}).catch(()=>{})}return(v,l)=>{const r=N,x=O,f=R,V=$;return E(),B(U,null,[t(x,{modelValue:u(s),"onUpdate:modelValue":l[0]||(l[0]=o=>i(s)?s.value=o:null)},{default:e(()=>[t(r,{label:"ltr",value:"ltr"},{default:e(()=>l[7]||(l[7]=[n("从左到右")])),_:1}),t(r,{label:"rtl",value:"rtl"},{default:e(()=>l[8]||(l[8]=[n("从右到右")])),_:1}),t(r,{label:"ttb",value:"ttb"},{default:e(()=>l[9]||(l[9]=[n("从上到下")])),_:1}),t(r,{label:"btt",value:"btt"},{default:e(()=>l[10]||(l[10]=[n("从下到上")])),_:1})]),_:1},8,["modelValue"]),l[19]||(l[19]=p("br",null,null,-1)),l[20]||(l[20]=p("br",null,null,-1)),t(f,{type:"primary",onClick:l[1]||(l[1]=o=>m.value=!0)},{default:e(()=>l[11]||(l[11]=[n("打开")])),_:1}),t(f,{type:"primary",onClick:l[2]||(l[2]=o=>d.value=!0)},{default:e(()=>l[12]||(l[12]=[n("包含页脚")])),_:1}),t(V,{modelValue:u(m),"onUpdate:modelValue":l[3]||(l[3]=o=>i(m)?m.value=o:null),"append-to-body":"","before-close":C,direction:u(s),size:"288px",title:"我是标题"},{default:e(()=>l[13]||(l[13]=[p("span",null,"我是内容",-1)])),_:1},8,["modelValue","direction"]),t(V,{modelValue:u(d),"onUpdate:modelValue":l[6]||(l[6]=o=>i(d)?d.value=o:null),"append-to-body":"",direction:u(s),size:"288px"},{header:e(()=>l[14]||(l[14]=[n("按时段设置标题")])),default:e(()=>[p("div",null,[t(r,{modelValue:u(a),"onUpdate:modelValue":l[4]||(l[4]=o=>i(a)?a.value=o:null),label:"Option 1"},{default:e(()=>l[15]||(l[15]=[n("选项1")])),_:1},8,["modelValue"]),t(r,{modelValue:u(a),"onUpdate:modelValue":l[5]||(l[5]=o=>i(a)?a.value=o:null),label:"Option 2"},{default:e(()=>l[16]||(l[16]=[n("选项2")])),_:1},8,["modelValue"])])]),footer:e(()=>[p("div",z,[t(f,{onClick:g},{default:e(()=>l[17]||(l[17]=[n("取消")])),_:1}),t(f,{type:"primary",onClick:k},{default:e(()=>l[18]||(l[18]=[n("确认")])),_:1})])]),_:1},8,["modelValue","direction"])],64)}}});export{F as _};
