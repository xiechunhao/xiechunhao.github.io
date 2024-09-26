/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-25 17:01:24 
 */
import{d as w,F as b,o as U,b as B,M as t,V as e,_ as n,u as a,K as i,e as f,H as E,E as C}from"./vsv-element-plus-CbS2IxKo.js";const N={style:{flex:"auto"}},z=w({__name:"DrawerBasicUsage",setup(O){const p=ref(!1),r=ref(!1),s=ref("rtl"),u=ref("Option 1"),g=v=>{C.confirm("您确定要关闭抽屉吗？",{draggable:!0}).then(()=>{v()}).catch(()=>{})};function y(){r.value=!1}function k(){C.confirm(`您确认选择${u.value}吗？`,{draggable:!0}).then(()=>{r.value=!1}).catch(()=>{})}return(v,l)=>{const d=b("el-radio"),x=b("el-radio-group"),m=b("el-button"),V=b("el-drawer");return U(),B(E,null,[t(x,{modelValue:a(s),"onUpdate:modelValue":l[0]||(l[0]=o=>i(s)?s.value=o:null)},{default:e(()=>[t(d,{label:"ltr",value:"ltr"},{default:e(()=>l[7]||(l[7]=[n("从左到右")])),_:1}),t(d,{label:"rtl",value:"rtl"},{default:e(()=>l[8]||(l[8]=[n("从右到右")])),_:1}),t(d,{label:"ttb",value:"ttb"},{default:e(()=>l[9]||(l[9]=[n("从上到下")])),_:1}),t(d,{label:"btt",value:"btt"},{default:e(()=>l[10]||(l[10]=[n("从下到上")])),_:1})]),_:1},8,["modelValue"]),l[19]||(l[19]=f("br",null,null,-1)),l[20]||(l[20]=f("br",null,null,-1)),t(m,{type:"primary",onClick:l[1]||(l[1]=o=>p.value=!0)},{default:e(()=>l[11]||(l[11]=[n("打开")])),_:1}),t(m,{type:"primary",onClick:l[2]||(l[2]=o=>r.value=!0)},{default:e(()=>l[12]||(l[12]=[n("包含页脚")])),_:1}),t(V,{modelValue:a(p),"onUpdate:modelValue":l[3]||(l[3]=o=>i(p)?p.value=o:null),"append-to-body":"","before-close":g,direction:a(s),size:"288px",title:"我是标题"},{default:e(()=>l[13]||(l[13]=[f("span",null,"我是内容",-1)])),_:1},8,["modelValue","direction"]),t(V,{modelValue:a(r),"onUpdate:modelValue":l[6]||(l[6]=o=>i(r)?r.value=o:null),"append-to-body":"",direction:a(s),size:"288px"},{header:e(()=>l[14]||(l[14]=[n("按时段设置标题")])),default:e(()=>[f("div",null,[t(d,{modelValue:a(u),"onUpdate:modelValue":l[4]||(l[4]=o=>i(u)?u.value=o:null),label:"Option 1"},{default:e(()=>l[15]||(l[15]=[n("选项1")])),_:1},8,["modelValue"]),t(d,{modelValue:a(u),"onUpdate:modelValue":l[5]||(l[5]=o=>i(u)?u.value=o:null),label:"Option 2"},{default:e(()=>l[16]||(l[16]=[n("选项2")])),_:1},8,["modelValue"])])]),footer:e(()=>[f("div",N,[t(m,{onClick:y},{default:e(()=>l[17]||(l[17]=[n("取消")])),_:1}),t(m,{type:"primary",onClick:k},{default:e(()=>l[18]||(l[18]=[n("确认")])),_:1})])]),_:1},8,["modelValue","direction"])],64)}}});export{z as default};
