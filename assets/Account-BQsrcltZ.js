import{o as e,p as a,q as l,t,v as s,w as o,C as m,F as r,G as u,J as d,m as n,_ as i}from"./index-D_qZw2oD.js";import{_ as p}from"./ButtonTable-53-Y9OGI.js";/* empty css               */import{a as c,b,c as v}from"./avatar9-DPcL8SaR.js";import{d as x,r as _,Z as f,N as h,c as V,o as g,b as w,w as y,H as k,L as U,I as C,M as j,$ as q,u as P,aR as I,a as R,aK as T,e as B,x as F,b6 as S,a0 as $,C as z,as as A,at as D,m as G,_ as H,aj as J,P as K}from"./vendor-Dakx4FZ3.js";const L=[{username:"中小鱼",sex:0,mobile:"18670001591",email:"83901823@mall.com",dep:"研发部",status:"1",create_time:"2020-09-09 10:01:10",avatar:e},{username:"何小荷",sex:1,mobile:"17766664444",email:"623141232@mall.com",dep:"电商部",status:"1",create_time:"2020-10-10 13:01:12",avatar:a},{username:"誶誶淰",sex:0,mobile:"18670001597",email:"47578182332@mall.com",dep:"人事部",status:"1",create_time:"2020-11-14 12:01:45",avatar:l},{username:"发呆草",sex:0,mobile:"18670001596",email:"83777712332@mall.com",dep:"产品部",status:"1",create_time:"2020-11-14 09:01:20",avatar:t},{username:"甜筒",sex:1,mobile:"18670001595",email:"318208133@mall.com",dep:"财务部",status:"1",create_time:"2020-11-13 11:01:05",avatar:s},{username:"冷月呆呆",sex:1,mobile:"18670001594",email:"91231232@mall.com",dep:"运营部",status:"1",create_time:"2020-10-11 13:10:26",avatar:o},{username:"唐不苦",sex:1,mobile:"18123820191",email:"782788821134@mall.com",dep:"客服部",status:"2",create_time:"2020-05-14 12:05:10",avatar:c},{username:"笑很甜",sex:0,mobile:"18670001592",email:"4234333233@mall.com",dep:"总经办",status:"3",create_time:"2020-11-12 07:22:25",avatar:b},{username:"青隐篱",sex:0,mobile:"18670001581",email:"731231233@mall.com",dep:"研发部",status:"4",create_time:"2020-06-12 05:04:20",avatar:v},{username:"有你一生",sex:0,mobile:"13755554444",email:"6908483283@mall.com",dep:"研发部",status:"1",create_time:"2020-11-12 16:01:10",avatar:m},{username:"冷月呆呆",sex:1,mobile:"13766660000",email:"43212312345@mall.com",dep:"研发部",status:"1",create_time:"2020-11-14 12:01:20",avatar:o},{username:"唐不苦",sex:1,mobile:"18670001502",email:"42342343322@mall.com",dep:"研发部",status:"1",create_time:"2020-11-14 12:01:20",avatar:c},{username:"笑很甜",sex:0,mobile:"13006644977",email:"59019238828@mall.com",dep:"研发部",status:"1",create_time:"2020-11-14 12:01:20",avatar:b},{username:"青隐篱",sex:0,mobile:"13599998888",email:"8080123333@mall.com",dep:"研发部",status:"1",create_time:"2020-11-14 12:01:20",avatar:v},{username:"有你一生",sex:0,mobile:"13799998888",email:"7923791823@mall.com",dep:"研发部",status:"1",create_time:"2020-11-14 12:01:20",avatar:m}],M={class:"page-content"},N={class:"user",style:{display:"flex","align-items":"center"}},Z=["src"],E={class:"user-name"},O={class:"email"},Q={class:"dialog-footer"},W=i(x({__name:"Account",setup(e){const a=_("add"),l=_(!1),t=f({username:"",phone:"",sex:"",dep:""}),s=[{value:"男",label:"男"},{value:"女",label:"女"}],o=[{value:"1",label:"普通用户"},{value:"2",label:" VIP"}],m=f([{name:"用户名",show:!0},{name:"手机号",show:!0},{name:"性别",show:!0},{name:"部门",show:!0},{name:"状态",show:!0},{name:"创建日期",show:!0}]),i=_(),c=f({name:"",phone:"",email:"",account:"",id:"",sex:"",level:""}),b=L,v=(e,s)=>{l.value=!0,a.value=e,"edit"===e&&s?(t.username=s.username,t.phone=s.mobile,t.sex=1===s.sex?"男":"女",t.dep=s.dep):(t.username="",t.phone="",t.sex="男",t.dep="")},x=()=>{J.confirm("确定要注销该用户吗？","注销用户",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then((()=>{K.success("注销成功")}))},W=()=>{},X=e=>{m.values=e},Y=(e,a)=>a.status===e,ee=e=>{switch(e){case"1":return"success";case"2":default:return"info";case"3":return"warning";case"4":return"danger"}},ae=e=>{let a="";return"1"===e?a="在线":"2"===e?a="离线":"3"===e?a="异常":"4"===e&&(a="注销"),a},le=f({username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"请输入正确的手机号格式",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],dep:[{required:!0,message:"请选择部门",trigger:"change"}]}),te=_(),se=()=>{return e=this,t=null,s=function*(){te.value&&(yield te.value.validate((e=>{e&&(K.success("add"===a.value?"添加成功":"更新成功"),l.value=!1)})))},new Promise(((a,l)=>{var o=e=>{try{r(s.next(e))}catch(a){l(a)}},m=e=>{try{r(s.throw(e))}catch(a){l(a)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,m);r((s=s.apply(e,t)).next())}));var e,t,s};return(e,_)=>{const f=r,J=I,K=u,L=q,oe=C,me=d,re=T,ue=S,de=p,ne=n,ie=z,pe=$,ce=D,be=A,ve=H,xe=h("ripple");return g(),V("div",M,[w(me,{showTop:!1,onSearch:W,onReset:_[8]||(_[8]=e=>{var a;(a=P(i))&&a.resetFields()}),onChangeColumn:X,columns:P(m)},{top:y((()=>[w(L,{model:P(c),ref_key:"searchFormRef",ref:i,"label-width":"82px"},{default:y((()=>[w(J,{gutter:20},{default:y((()=>[w(f,{label:"用户名",prop:"name",modelValue:P(c).name,"onUpdate:modelValue":_[0]||(_[0]=e=>P(c).name=e)},null,8,["modelValue"]),w(f,{label:"手机号",prop:"phone",modelValue:P(c).phone,"onUpdate:modelValue":_[1]||(_[1]=e=>P(c).phone=e)},null,8,["modelValue"]),w(f,{label:"邮箱",prop:"email",modelValue:P(c).email,"onUpdate:modelValue":_[2]||(_[2]=e=>P(c).email=e)},null,8,["modelValue"]),w(f,{label:"账号",prop:"account",modelValue:P(c).account,"onUpdate:modelValue":_[3]||(_[3]=e=>P(c).account=e)},null,8,["modelValue"])])),_:1}),w(J,{gutter:20},{default:y((()=>[w(f,{label:"用户ID",prop:"id",modelValue:P(c).id,"onUpdate:modelValue":_[4]||(_[4]=e=>P(c).id=e)},null,8,["modelValue"]),w(K,{label:"性别",prop:"sex",modelValue:P(c).sex,"onUpdate:modelValue":_[5]||(_[5]=e=>P(c).sex=e),options:s},null,8,["modelValue"]),w(K,{label:"会员等级",prop:"level",modelValue:P(c).level,"onUpdate:modelValue":_[6]||(_[6]=e=>P(c).level=e),options:o},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),bottom:y((()=>[k((g(),U(oe,{onClick:_[7]||(_[7]=e=>v("add"))},{default:y((()=>_[15]||(_[15]=[j("添加用户")]))),_:1})),[[xe]])])),_:1},8,["columns"]),w(ne,{data:P(b),selection:"",currentPage:1,pageSize:10,total:50},{default:y((()=>[P(m)[0].show?(g(),U(re,{key:0,label:"用户名",prop:"avatar",width:"300px"},{default:y((e=>[B("div",N,[B("img",{class:"avatar",src:e.row.avatar},null,8,Z),B("div",null,[B("p",E,F(e.row.username),1),B("p",O,F(e.row.email),1)])])])),_:1})):R("",!0),P(m)[1].show?(g(),U(re,{key:1,label:"手机号",prop:"mobile"})):R("",!0),P(m)[2].show?(g(),U(re,{key:2,label:"性别",prop:"sex",sortable:""},{default:y((e=>[j(F(1===e.row.sex?"男":"女"),1)])),_:1})):R("",!0),P(m)[3].show?(g(),U(re,{key:3,label:"部门",prop:"dep"})):R("",!0),P(m)[4].show?(g(),U(re,{key:4,label:"状态",prop:"status",filters:[{text:"在线",value:"1"},{text:"离线",value:"2"},{text:"异常",value:"3"},{text:"注销",value:"4"}],"filter-method":Y,"filter-placement":"bottom-end"},{default:y((e=>[w(ue,{type:ee(e.row.status)},{default:y((()=>[j(F(ae(e.row.status)),1)])),_:2},1032,["type"])])),_:1})):R("",!0),P(m)[5].show?(g(),U(re,{key:5,label:"创建日期",prop:"create_time",sortable:""})):R("",!0),w(re,{fixed:"right",label:"操作",width:"150px"},{default:y((e=>[w(de,{type:"edit",onClick:a=>v("edit",e.row)},null,8,["onClick"]),w(de,{type:"delete",onClick:x})])),_:1})])),_:1},8,["data"]),w(ve,{modelValue:P(l),"onUpdate:modelValue":_[14]||(_[14]=e=>G(l)?l.value=e:null),title:"add"===P(a)?"添加用户":"编辑用户",width:"30%"},{footer:y((()=>[B("div",Q,[w(oe,{onClick:_[13]||(_[13]=e=>l.value=!1)},{default:y((()=>_[16]||(_[16]=[j("取消")]))),_:1}),w(oe,{type:"primary",onClick:se},{default:y((()=>_[17]||(_[17]=[j("提交")]))),_:1})])])),default:y((()=>[w(L,{ref_key:"formRef",ref:te,model:P(t),rules:P(le),"label-width":"80px"},{default:y((()=>[w(pe,{label:"用户名",prop:"username"},{default:y((()=>[w(ie,{modelValue:P(t).username,"onUpdate:modelValue":_[9]||(_[9]=e=>P(t).username=e)},null,8,["modelValue"])])),_:1}),w(pe,{label:"手机号",prop:"phone"},{default:y((()=>[w(ie,{modelValue:P(t).phone,"onUpdate:modelValue":_[10]||(_[10]=e=>P(t).phone=e)},null,8,["modelValue"])])),_:1}),w(pe,{label:"性别",prop:"sex"},{default:y((()=>[w(be,{modelValue:P(t).sex,"onUpdate:modelValue":_[11]||(_[11]=e=>P(t).sex=e)},{default:y((()=>[w(ce,{label:"男",value:"男"}),w(ce,{label:"女",value:"女"})])),_:1},8,["modelValue"])])),_:1}),w(pe,{label:"部门",prop:"dep"},{default:y((()=>[w(be,{modelValue:P(t).dep,"onUpdate:modelValue":_[12]||(_[12]=e=>P(t).dep=e)},{default:y((()=>[w(ce,{label:"董事会部",value:1}),w(ce,{label:"市场部",value:2}),w(ce,{label:"技术部",value:3})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-eeb84905"]]);export{W as default};
