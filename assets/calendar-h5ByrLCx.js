var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,d=(e,d)=>{for(var u in d||(d={}))l.call(d,u)&&n(e,u,d[u]);if(a)for(var u of a(d))t.call(d,u)&&n(e,u,d[u]);return e};import{_ as u}from"./index-B2uLNVFs.js";/* empty css                       */import{h as o,r,c as s,k as v,l as c,m as p,bh as i,a0 as m,j as y,p as b,z as g,F as f,A as D,C as V,y as _,N as Y,H as w,s as h,L as j,_ as k,bi as C,aS as M,bj as x,$ as O,K as U}from"./vendor-Bhb26uf3.js";const $={class:"page-content"},I=["onClick"],P={class:"calendar-date"},S={class:"calendar-events"},q=["onClick"],z={class:"dialog-footer"},A=u(o({__name:"calendar",setup(e){const a=[{label:"基本",value:"bg-primary"},{label:"成功",value:"bg-success"},{label:"警告",value:"bg-warning"},{label:"危险",value:"bg-danger"}],l=r(new Date("2025-02-07")),t=r([{date:"2025-02-01",content:"产品需求评审",type:"bg-primary"},{date:"2025-02-03",endDate:"2025-02-05",content:"项目周报会议（跨日期）",type:"bg-primary"},{date:"2025-02-10",content:"瑜伽课程",type:"bg-success"},{date:"2025-02-15",content:"团队建设活动",type:"bg-primary"},{date:"2025-02-20",content:"健身训练",type:"bg-success"},{date:"2025-02-20",content:"代码评审",type:"bg-danger"},{date:"2025-02-20",content:"团队午餐",type:"bg-primary"},{date:"2025-02-20",content:"项目进度汇报",type:"bg-warning"},{date:"2025-02-28",content:"月度总结会",type:"bg-warning"}]),n=r(!1),u=r("添加事件"),o=r(-1),A=r({date:"",endDate:"",content:"",type:"bg-primary"}),E=s((()=>o.value>=0)),F=()=>{A.value={date:"",endDate:"",content:"",type:"bg-primary"},o.value=-1},H=()=>{A.value.content&&A.value.date&&(E.value?t.value[o.value]=d({},A.value):t.value.push(d({},A.value)),n.value=!1,F())},K=()=>{E.value&&(t.value.splice(o.value,1),n.value=!1,F())};return(e,r)=>{const s=i,L=j,N=k,W=C,B=M,G=x,J=O,Q=U,R=m;return y(),v("div",$,[c(s,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=e=>l.value=e)},{"date-cell":p((({data:e})=>{return[b("div",{class:_(["calendar-cell",{"is-selected":e.isSelected}]),onClick:a=>{return l=e.day,u.value="添加事件",A.value={date:l,content:"",type:"bg-primary"},o.value=-1,void(n.value=!0);var l}},[b("p",P,g((l=e.day,l.split("-").slice(1).join("-"))),1),b("div",S,[(y(!0),v(f,null,D((a=e.day,t.value.filter((e=>{const l=new Date(e.date),t=new Date(a),n=e.endDate?new Date(e.endDate):new Date(e.date);return t>=l&&t<=n}))),(e=>(y(),v("div",{key:`${e.date}-${e.content}`,class:"calendar-event",onClick:V((a=>(e=>{u.value="编辑事件",A.value=d({},e),o.value=t.value.findIndex((a=>a.date===e.date&&a.content===e.content)),n.value=!0})(e)),["stop"])},[b("div",{class:_(["event-tag custom-text",[`${e.type||"bg-primary"}`]])},g(e.content),3)],8,q)))),128))])],10,I)];var a,l})),_:1},8,["modelValue"]),c(R,{modelValue:n.value,"onUpdate:modelValue":r[5]||(r[5]=e=>n.value=e),title:u.value,width:"600px",onClosed:F},{footer:p((()=>[b("span",z,[E.value?(y(),Y(Q,{key:0,type:"danger",onClick:K},{default:p((()=>r[6]||(r[6]=[w(" 删除 ")]))),_:1})):h("",!0),c(Q,{type:"primary",onClick:H},{default:p((()=>[w(g(E.value?"更新":"添加"),1)])),_:1})])])),default:p((()=>[c(J,{model:A.value,"label-width":"80px"},{default:p((()=>[c(N,{label:"活动标题",required:""},{default:p((()=>[c(L,{modelValue:A.value.content,"onUpdate:modelValue":r[1]||(r[1]=e=>A.value.content=e),placeholder:"请输入活动标题"},null,8,["modelValue"])])),_:1}),c(N,{label:"事件颜色"},{default:p((()=>[c(B,{modelValue:A.value.type,"onUpdate:modelValue":r[2]||(r[2]=e=>A.value.type=e)},{default:p((()=>[(y(),v(f,null,D(a,(e=>c(W,{key:e.value,value:e.value},{default:p((()=>[w(g(e.label),1)])),_:2},1032,["value"]))),64))])),_:1},8,["modelValue"])])),_:1}),c(N,{label:"开始日期",required:""},{default:p((()=>[c(G,{style:{width:"100%"},modelValue:A.value.date,"onUpdate:modelValue":r[3]||(r[3]=e=>A.value.date=e),type:"date",placeholder:"选择日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])])),_:1}),c(N,{label:"结束日期"},{default:p((()=>[c(G,{style:{width:"100%"},modelValue:A.value.endDate,"onUpdate:modelValue":r[4]||(r[4]=e=>A.value.endDate=e),type:"date",placeholder:"选择结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD","min-date":A.value.date},null,8,["modelValue","min-date"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-0e40d5df"]]);export{A as default};
