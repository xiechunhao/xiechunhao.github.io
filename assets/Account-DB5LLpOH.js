import{a as e,b as a,c as l,d as t,m as s,e as o,r as m,t as r,v as u,w as d,f as n,_ as i}from"./index-AUd2T663.js";import{_ as p}from"./ButtonTable-BCd2qicg.js";/* empty css               */import{a as c,b as v,c as b}from"./avatar9-DPcL8SaR.js";import{h as f,r as x,X as _,j as h,t as V,m as g,q as w,J as y,M as k,Z as U,u as C,aU as j,N as q,k as P,aJ as T,s as B,z as I,aY as R,_ as Y,G as z,ar as F,as as J,i as S,Y as A,aj as D,E}from"./vendor-CC2XCvy_.js";const G=[{username:"中小鱼",sex:0,mobile:"18670001591",email:"83901823@mall.com",dep:"研发部",status:"1",create_time:"2020-09-09 10:01:10",avatar:e},{username:"何小荷",sex:1,mobile:"17766664444",email:"623141232@mall.com",dep:"电商部",status:"1",create_time:"2020-10-10 13:01:12",avatar:a},{username:"誶誶淰",sex:0,mobile:"18670001597",email:"47578182332@mall.com",dep:"人事部",status:"1",create_time:"2020-11-14 12:01:45",avatar:l},{username:"发呆草",sex:0,mobile:"18670001596",email:"83777712332@mall.com",dep:"产品部",status:"1",create_time:"2020-11-14 09:01:20",avatar:t},{username:"甜筒",sex:1,mobile:"18670001595",email:"318208133@mall.com",dep:"财务部",status:"1",create_time:"2020-11-13 11:01:05",avatar:s},{username:"冷月呆呆",sex:1,mobile:"18670001594",email:"91231232@mall.com",dep:"运营部",status:"1",create_time:"2020-10-11 13:10:26",avatar:o},{username:"唐不苦",sex:1,mobile:"18123820191",email:"782788821134@mall.com",dep:"客服部",status:"2",create_time:"2020-05-14 12:05:10",avatar:c},{username:"笑很甜",sex:0,mobile:"18670001592",email:"4234333233@mall.com",dep:"总经办",status:"3",create_time:"2020-11-12 07:22:25",avatar:v},{username:"青隐篱",sex:0,mobile:"18670001581",email:"731231233@mall.com",dep:"研发部",status:"4",create_time:"2020-06-12 05:04:20",avatar:b},{username:"有你一生",sex:0,mobile:"13755554444",email:"6908483283@mall.com",dep:"研发部",status:"1",create_time:"2020-11-12 16:01:10",avatar:m},{username:"冷月呆呆",sex:1,mobile:"13766660000",email:"43212312345@mall.com",dep:"研发部",status:"1",create_time:"2020-11-14 12:01:20",avatar:o},{username:"唐不苦",sex:1,mobile:"18670001502",email:"42342343322@mall.com",dep:"研发部",status:"1",create_time:"2020-11-14 12:01:20",avatar:c},{username:"笑很甜",sex:0,mobile:"13006644977",email:"59019238828@mall.com",dep:"研发部",status:"1",create_time:"2020-11-14 12:01:20",avatar:v},{username:"青隐篱",sex:0,mobile:"13599998888",email:"8080123333@mall.com",dep:"研发部",status:"1",create_time:"2020-11-14 12:01:20",avatar:b},{username:"有你一生",sex:0,mobile:"13799998888",email:"7923791823@mall.com",dep:"研发部",status:"1",create_time:"2020-11-14 12:01:20",avatar:m}],M={class:"page-content"},N={class:"user",style:{display:"flex","align-items":"center"}},X=["src"],Z={class:"user-name"},$={class:"email"},H={class:"dialog-footer"},K=i(f({__name:"Account",setup(e){const a=x("add"),l=x(!1),t=_({username:"",phone:"",sex:"",dep:""}),s=[{value:"男",label:"男"},{value:"女",label:"女"}],o=[{value:"1",label:"普通用户"},{value:"2",label:" VIP"}],m=_([{name:"用户名",show:!0},{name:"手机号",show:!0},{name:"性别",show:!0},{name:"部门",show:!0},{name:"状态",show:!0},{name:"创建日期",show:!0}]),i=x(),c=_({name:"",phone:"",email:"",account:"",id:"",sex:"",level:""}),v=G,b=(e,s)=>{l.value=!0,a.value=e,"edit"===e&&s?(t.username=s.username,t.phone=s.mobile,t.sex=1===s.sex?"男":"女",t.dep=s.dep):(t.username="",t.phone="",t.sex="男",t.dep="")},f=()=>{D.confirm("确定要注销该用户吗？","注销用户",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then((()=>{E.success("注销成功")}))},K=()=>{},L=e=>{m.values=e},O=(e,a)=>a.status===e,Q=e=>{switch(e){case"1":return"success";case"2":default:return"info";case"3":return"warning";case"4":return"danger"}},W=e=>{let a="";return"1"===e?a="在线":"2"===e?a="离线":"3"===e?a="异常":"4"===e&&(a="注销"),a},ee=_({username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"请输入正确的手机号格式",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],dep:[{required:!0,message:"请选择部门",trigger:"change"}]}),ae=x(),le=()=>{return e=this,t=null,s=function*(){ae.value&&(yield ae.value.validate((e=>{e&&(E.success("add"===a.value?"添加成功":"更新成功"),l.value=!1)})))},new Promise(((a,l)=>{var o=e=>{try{r(s.next(e))}catch(a){l(a)}},m=e=>{try{r(s.throw(e))}catch(a){l(a)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,m);r((s=s.apply(e,t)).next())}));var e,t,s};return(e,x)=>{const _=r,D=j,E=u,G=U,te=y,se=d,oe=T,me=R,re=p,ue=n,de=z,ne=Y,ie=J,pe=F,ce=A;return V(),h("div",M,[g(se,{showTop:!1,onSearch:K,onReset:x[8]||(x[8]=e=>{var a;(a=C(i))&&a.resetFields()}),onChangeColumn:L,columns:C(m)},{top:w((()=>[g(G,{model:C(c),ref_key:"searchFormRef",ref:i,"label-width":"82px"},{default:w((()=>[g(D,{gutter:20},{default:w((()=>[g(_,{label:"用户名",prop:"name",modelValue:C(c).name,"onUpdate:modelValue":x[0]||(x[0]=e=>C(c).name=e)},null,8,["modelValue"]),g(_,{label:"手机号",prop:"phone",modelValue:C(c).phone,"onUpdate:modelValue":x[1]||(x[1]=e=>C(c).phone=e)},null,8,["modelValue"]),g(_,{label:"邮箱",prop:"email",modelValue:C(c).email,"onUpdate:modelValue":x[2]||(x[2]=e=>C(c).email=e)},null,8,["modelValue"]),g(_,{label:"账号",prop:"account",modelValue:C(c).account,"onUpdate:modelValue":x[3]||(x[3]=e=>C(c).account=e)},null,8,["modelValue"])])),_:1}),g(D,{gutter:20},{default:w((()=>[g(_,{label:"用户ID",prop:"id",modelValue:C(c).id,"onUpdate:modelValue":x[4]||(x[4]=e=>C(c).id=e)},null,8,["modelValue"]),g(E,{label:"性别",prop:"sex",modelValue:C(c).sex,"onUpdate:modelValue":x[5]||(x[5]=e=>C(c).sex=e),options:s},null,8,["modelValue"]),g(E,{label:"会员等级",prop:"level",modelValue:C(c).level,"onUpdate:modelValue":x[6]||(x[6]=e=>C(c).level=e),options:o},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),bottom:w((()=>[g(te,{onClick:x[7]||(x[7]=e=>b("add"))},{default:w((()=>x[15]||(x[15]=[k("添加用户")]))),_:1})])),_:1},8,["columns"]),g(ue,{data:C(v),selection:"",currentPage:1,pageSize:10,total:50},{default:w((()=>[C(m)[0].show?(V(),q(oe,{key:0,label:"用户名",prop:"avatar",width:"300px"},{default:w((e=>[B("div",N,[B("img",{class:"avatar",src:e.row.avatar},null,8,X),B("div",null,[B("p",Z,I(e.row.username),1),B("p",$,I(e.row.email),1)])])])),_:1})):P("",!0),C(m)[1].show?(V(),q(oe,{key:1,label:"手机号",prop:"mobile"})):P("",!0),C(m)[2].show?(V(),q(oe,{key:2,label:"性别",prop:"sex",sortable:""},{default:w((e=>[k(I(1===e.row.sex?"男":"女"),1)])),_:1})):P("",!0),C(m)[3].show?(V(),q(oe,{key:3,label:"部门",prop:"dep"})):P("",!0),C(m)[4].show?(V(),q(oe,{key:4,label:"状态",prop:"status",filters:[{text:"在线",value:"1"},{text:"离线",value:"2"},{text:"异常",value:"3"},{text:"注销",value:"4"}],"filter-method":O,"filter-placement":"bottom-end"},{default:w((e=>[g(me,{type:Q(e.row.status)},{default:w((()=>[k(I(W(e.row.status)),1)])),_:2},1032,["type"])])),_:1})):P("",!0),C(m)[5].show?(V(),q(oe,{key:5,label:"创建日期",prop:"create_time",sortable:""})):P("",!0),g(oe,{fixed:"right",label:"操作",width:"150px"},{default:w((e=>[g(re,{type:"edit",onClick:a=>b("edit",e.row)},null,8,["onClick"]),g(re,{type:"delete",onClick:f})])),_:1})])),_:1},8,["data"]),g(ce,{modelValue:C(l),"onUpdate:modelValue":x[14]||(x[14]=e=>S(l)?l.value=e:null),title:"add"===C(a)?"添加用户":"编辑用户",width:"30%"},{footer:w((()=>[B("div",H,[g(te,{onClick:x[13]||(x[13]=e=>l.value=!1)},{default:w((()=>x[16]||(x[16]=[k("取消")]))),_:1}),g(te,{type:"primary",onClick:le},{default:w((()=>x[17]||(x[17]=[k("提交")]))),_:1})])])),default:w((()=>[g(G,{ref_key:"formRef",ref:ae,model:C(t),rules:C(ee),"label-width":"80px"},{default:w((()=>[g(ne,{label:"用户名",prop:"username"},{default:w((()=>[g(de,{modelValue:C(t).username,"onUpdate:modelValue":x[9]||(x[9]=e=>C(t).username=e)},null,8,["modelValue"])])),_:1}),g(ne,{label:"手机号",prop:"phone"},{default:w((()=>[g(de,{modelValue:C(t).phone,"onUpdate:modelValue":x[10]||(x[10]=e=>C(t).phone=e)},null,8,["modelValue"])])),_:1}),g(ne,{label:"性别",prop:"sex"},{default:w((()=>[g(pe,{modelValue:C(t).sex,"onUpdate:modelValue":x[11]||(x[11]=e=>C(t).sex=e)},{default:w((()=>[g(ie,{label:"男",value:"男"}),g(ie,{label:"女",value:"女"})])),_:1},8,["modelValue"])])),_:1}),g(ne,{label:"部门",prop:"dep"},{default:w((()=>[g(pe,{modelValue:C(t).dep,"onUpdate:modelValue":x[12]||(x[12]=e=>C(t).dep=e)},{default:w((()=>[g(ie,{label:"董事会部",value:1}),g(ie,{label:"市场部",value:2}),g(ie,{label:"技术部",value:3})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-4d1046f9"]]);export{K as default};
