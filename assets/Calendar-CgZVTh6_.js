var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,d=(e,d)=>{for(var u in d||(d={}))l.call(d,u)&&n(e,u,d[u]);if(a)for(var u of a(d))t.call(d,u)&&n(e,u,d[u]);return e};import{_ as u}from"./index-D_qZw2oD.js";/* empty css                       */import{d as o,r,j as s,c as v,o as c,b as p,w as i,e as m,v as y,x as b,F as g,A as f,G as D,b7 as V,$ as _,a0 as w,C as Y,b2 as h,b8 as k,M as C,b9 as M,L as j,a as x,I as O,_ as U}from"./vendor-Dakx4FZ3.js";const I={class:"page-content"},$=["onClick"],P={class:"calendar-date"},q={class:"calendar-events"},S=["onClick"],A={class:"dialog-footer"},E=u(o({__name:"Calendar",setup(e){const a=[{label:"基本",value:"bg-primary"},{label:"成功",value:"bg-success"},{label:"警告",value:"bg-warning"},{label:"危险",value:"bg-danger"}],l=r(new Date("2025-02-07")),t=r([{date:"2025-02-01",content:"产品需求评审",type:"bg-primary"},{date:"2025-02-03",endDate:"2025-02-05",content:"项目周报会议（跨日期）",type:"bg-primary"},{date:"2025-02-10",content:"瑜伽课程",type:"bg-success"},{date:"2025-02-15",content:"团队建设活动",type:"bg-primary"},{date:"2025-02-20",content:"健身训练",type:"bg-success"},{date:"2025-02-20",content:"代码评审",type:"bg-danger"},{date:"2025-02-20",content:"团队午餐",type:"bg-primary"},{date:"2025-02-20",content:"项目进度汇报",type:"bg-warning"},{date:"2025-02-28",content:"月度总结会",type:"bg-warning"}]),n=r(!1),u=r("添加事件"),o=r(-1),E=r({date:"",endDate:"",content:"",type:"bg-primary"}),F=s((()=>o.value>=0)),G=()=>{E.value={date:"",endDate:"",content:"",type:"bg-primary"},o.value=-1},L=()=>{E.value.content&&E.value.date&&(F.value?t.value[o.value]=d({},E.value):t.value.push(d({},E.value)),n.value=!1,G())},z=()=>{F.value&&(t.value.splice(o.value,1),n.value=!1,G())};return(e,r)=>{const s=V,B=Y,H=w,J=k,K=h,N=M,Q=_,R=O,T=U;return c(),v("div",I,[p(s,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=e=>l.value=e)},{"date-cell":i((({data:e})=>{return[m("div",{class:y(["calendar-cell",{"is-selected":e.isSelected}]),onClick:a=>{return l=e.day,u.value="添加事件",E.value={date:l,content:"",type:"bg-primary"},o.value=-1,void(n.value=!0);var l}},[m("p",P,b((l=e.day,l.split("-")[2])),1),m("div",q,[(c(!0),v(g,null,f((a=e.day,t.value.filter((e=>{const l=new Date(e.date),t=new Date(a),n=e.endDate?new Date(e.endDate):new Date(e.date);return t>=l&&t<=n}))),(e=>(c(),v("div",{key:`${e.date}-${e.content}`,class:"calendar-event",onClick:D((a=>(e=>{u.value="编辑事件",E.value=d({},e),o.value=t.value.findIndex((a=>a.date===e.date&&a.content===e.content)),n.value=!0})(e)),["stop"])},[m("div",{class:y(["event-tag",[`${e.type||"bg-primary"}`]])},b(e.content),3)],8,S)))),128))])],10,$)];var a,l})),_:1},8,["modelValue"]),p(T,{modelValue:n.value,"onUpdate:modelValue":r[5]||(r[5]=e=>n.value=e),title:u.value,width:"600px",onClosed:G},{footer:i((()=>[m("span",A,[F.value?(c(),j(R,{key:0,type:"danger",onClick:z},{default:i((()=>r[6]||(r[6]=[C(" 删除 ")]))),_:1})):x("",!0),p(R,{type:"primary",onClick:L},{default:i((()=>[C(b(F.value?"更新":"添加"),1)])),_:1})])])),default:i((()=>[p(Q,{model:E.value,"label-width":"80px"},{default:i((()=>[p(H,{label:"活动标题",required:""},{default:i((()=>[p(B,{modelValue:E.value.content,"onUpdate:modelValue":r[1]||(r[1]=e=>E.value.content=e),placeholder:"请输入活动标题"},null,8,["modelValue"])])),_:1}),p(H,{label:"事件颜色"},{default:i((()=>[p(K,{modelValue:E.value.type,"onUpdate:modelValue":r[2]||(r[2]=e=>E.value.type=e)},{default:i((()=>[(c(),v(g,null,f(a,(e=>p(J,{key:e.value,value:e.value},{default:i((()=>[C(b(e.label),1)])),_:2},1032,["value"]))),64))])),_:1},8,["modelValue"])])),_:1}),p(H,{label:"开始日期",required:""},{default:i((()=>[p(N,{style:{width:"100%"},modelValue:E.value.date,"onUpdate:modelValue":r[3]||(r[3]=e=>E.value.date=e),type:"date",placeholder:"选择日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])])),_:1}),p(H,{label:"结束日期"},{default:i((()=>[p(N,{style:{width:"100%"},modelValue:E.value.endDate,"onUpdate:modelValue":r[4]||(r[4]=e=>E.value.endDate=e),type:"date",placeholder:"选择结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD","min-date":E.value.date},null,8,["modelValue","min-date"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-65088e14"]]);export{E as default};
