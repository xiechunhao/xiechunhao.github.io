import{i as q}from"./index-p1XoTQj1.js";import{i as F}from"./index-B9tUNhN6.js";import{T as R,r as $,b4 as T,a as D,o as x,c as w,w as t,b as e,u as m,e as i,aF as M,aI as A,aJ as G,aG as H,aH as U,aB as I,aK as J,_ as S,l as z,d,t as v,E as K,h as C,a7 as E,F as L,j as P}from"./index-BF2fBoPb.js";import{i as Q}from"./index-Uvh-rFdr.js";import{i as W}from"./index-Cjr4ibGp.js";import{n as X}from"./validate-B_6HX0Io.js";import{E as j,a as N}from"./descriptions-item-JFOK6u53.js";import{E as Y}from"./result-B5bPSPP_.js";const Z={__name:"step-edit",emits:["done"],setup(p,{emit:r}){const c=R("span",{style:{fontStyle:"normal"}},"￥"),b=r,_=$(!1),s=$(null),[o]=T({account:"plus@eleadmin.com",receiver:"test@example.com",pay:"alipay",name:"Alex",amount:"500"}),n=D({account:[{required:!0,message:"请选择付款账户",type:"string",trigger:"blur"}],receiver:[{required:!0,message:"请输入收款账户",type:"string",trigger:"blur"}],name:[{required:!0,message:"请输入收款人姓名",type:"string",trigger:"blur"}],amount:[{required:!0,message:"请输入转账金额",type:"string",trigger:"blur"},{pattern:X,message:"请输入合法金额数字",type:"string",trigger:"blur"}]}),a=()=>{var u,l;(l=(u=s.value)==null?void 0:u.validate)==null||l.call(u,f=>{f&&(_.value=!0,setTimeout(()=>{_.value=!1,b("done",o)},300))})};return(u,l)=>{const f=A,V=G,g=H,k=U,B=I,O=J;return x(),w(O,{ref_key:"formRef",ref:s,model:m(o),rules:n,"label-width":"108px",style:{"padding-right":"60px"},onSubmit:l[5]||(l[5]=M(()=>{},["prevent"]))},{default:t(()=>[e(g,{label:"付款账户",prop:"account"},{default:t(()=>[e(V,{clearable:"",modelValue:m(o).account,"onUpdate:modelValue":l[0]||(l[0]=y=>m(o).account=y),placeholder:"请选择付款账户",class:"ele-fluid"},{default:t(()=>[e(f,{value:"plus@eleadmin.com",label:"plus@eleadmin.com"}),e(f,{value:"pro@eleadmin.com",label:"pro@eleadmin.com"})]),_:1},8,["modelValue"])]),_:1}),e(g,{label:"收款账户",prop:"receiver"},{default:t(()=>[e(k,{clearable:"",modelValue:m(o).receiver,"onUpdate:modelValue":l[2]||(l[2]=y=>m(o).receiver=y),placeholder:"请输入收款账户"},{prepend:t(()=>[e(V,{modelValue:m(o).pay,"onUpdate:modelValue":l[1]||(l[1]=y=>m(o).pay=y),style:{width:"100px"}},{default:t(()=>[e(f,{value:"alipay",label:"支付宝"}),e(f,{value:"wxpay",label:"微信"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),e(g,{label:"收款人姓名",prop:"name"},{default:t(()=>[e(k,{clearable:"",modelValue:m(o).name,"onUpdate:modelValue":l[3]||(l[3]=y=>m(o).name=y),placeholder:"请输入收款人姓名"},null,8,["modelValue"])]),_:1}),e(g,{label:"转账金额",prop:"amount"},{default:t(()=>[e(k,{clearable:"",modelValue:m(o).amount,"onUpdate:modelValue":l[4]||(l[4]=y=>m(o).amount=y),placeholder:"请输入转账金额","prefix-icon":m(c)},null,8,["modelValue","prefix-icon"])]),_:1}),e(g,null,{default:t(()=>[e(B,{type:"primary",loading:_.value,onClick:a},{default:t(()=>l[6]||(l[6]=[i(" 下一步 ")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])}}},h={style:{display:"flex","align-items":"flex-end"}},ee={style:{"max-width":"220px"}},te={style:{"margin-top":"22px","padding-left":"140px"}},le={__name:"step-confirm",props:{data:Object},emits:["done","back"],setup(p,{emit:r}){const c=r,b=$(!1),_=D({password:"123456"}),s=()=>{if(!_.password){K.error("请输入支付密码");return}b.value=!0,setTimeout(()=>{b.value=!1,c("done")},300)},o=()=>{c("back")};return(n,a)=>{const u=F,l=j,f=C,V=U,g=N,k=I;return x(),z("div",null,[e(u,{"show-icon":"",title:"确认转账后，资金将直接打入对方账户，无法退回。",style:{"margin-bottom":"18px"}}),e(g,{border:!0,column:1,size:"large",class:"detail-table"},{default:t(()=>[e(l,{label:"付款账户"},{default:t(()=>[d("div",null,v(p.data.account),1)]),_:1}),e(l,{label:"收款账户"},{default:t(()=>[d("div",null,v(p.data.receiver),1)]),_:1}),e(l,{label:"收款人姓名"},{default:t(()=>[d("div",null,v(p.data.name),1)]),_:1}),e(l,{label:"转账金额"},{default:t(()=>[d("div",h,[e(f,{size:"xl",style:{"line-height":"1"}},{default:t(()=>[i(v(p.data.amount)+"  ",1)]),_:1}),a[1]||(a[1]=d("div",{style:{"line-height":"1.15"}}," 元",-1))])]),_:1}),e(l,{label:"支付密码"},{default:t(()=>[d("div",ee,[e(V,{type:"password",modelValue:_.password,"onUpdate:modelValue":a[0]||(a[0]=B=>_.password=B),placeholder:"请输入支付密码","show-password":""},null,8,["modelValue"])])]),_:1})]),_:1}),d("div",te,[e(k,{type:"primary",loading:b.value,onClick:s},{default:t(()=>a[2]||(a[2]=[i(" 下一步 ")])),_:1},8,["loading"]),e(k,{onClick:o},{default:t(()=>a[3]||(a[3]=[i("上一步")])),_:1})])])}}},ae=S(le,[["__scopeId","data-v-20efc23b"]]),oe={style:{"margin-bottom":"24px"}},ne={style:{display:"flex","align-items":"flex-end"}},se={__name:"step-success",props:{data:Object},emits:["back"],setup(p,{emit:r}){const c=r,b=()=>{c("back")};return(_,s)=>{const o=C,n=I,a=j,u=N,l=Y;return x(),w(l,{icon:"success",title:"操作成功"},{"sub-title":t(()=>[e(o,{type:"placeholder"},{default:t(()=>s[0]||(s[0]=[i("预计两小时内到账")])),_:1})]),extra:t(()=>[d("div",oe,[e(n,{type:"primary",onClick:b},{default:t(()=>s[1]||(s[1]=[i("再转一笔")])),_:1}),e(n,null,{default:t(()=>s[2]||(s[2]=[i("查看账单")])),_:1})]),e(u,{border:!0,column:1,size:"large",class:"detail-table",style:{width:"680px","max-width":"100%"}},{default:t(()=>[e(a,{label:"付款账户"},{default:t(()=>[d("div",null,v(p.data.account),1)]),_:1}),e(a,{label:"收款账户"},{default:t(()=>[d("div",null,v(p.data.receiver),1)]),_:1}),e(a,{label:"收款人姓名"},{default:t(()=>[d("div",null,v(p.data.name),1)]),_:1}),e(a,{label:"转账金额"},{default:t(()=>[d("div",ne,[e(o,{size:"xl",style:{"line-height":"1"}},{default:t(()=>[i(v(p.data.amount)+"  ",1)]),_:1}),s[3]||(s[3]=d("div",{style:{"line-height":"1.15"}}," 元",-1))])]),_:1})]),_:1})]),_:1})}}},ie=S(se,[["__scopeId","data-v-87d5da7f"]]),re={style:{"max-width":"800px",margin:"0 auto",padding:"10px 0 16px 0"}},de={name:"FormStep"},ue=Object.assign(de,{setup(p){const r=$(0),c=D({}),b=o=>{Object.assign(c,o),r.value=1},_=()=>{r.value=2},s=()=>{r.value=0};return(o,n)=>{const a=C,u=W,l=Q,f=P,V=F,g=q;return x(),z("div",null,[e(u,{style:{"border-radius":"0"}},{default:t(()=>[e(a,{type:"heading",size:"lg"},{default:t(()=>n[0]||(n[0]=[i("分步表单")])),_:1}),e(a,{type:"placeholder",style:{"margin-top":"6px"}},{default:t(()=>n[1]||(n[1]=[i(" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。 ")])),_:1})]),_:1}),e(g,null,{default:t(()=>[e(u,{class:"step-card"},{default:t(()=>[d("div",re,[e(l,{active:r.value,"finish-status":"success",type:"inline",items:[{title:"第一步",description:"填写转账信息"},{title:"第二步",description:"确认转账信息"},{title:"第三步",description:"转账成功"}],style:{margin:"0 0 30px 0"}},null,8,["active"]),r.value===0?(x(),w(Z,{key:0,onDone:b})):E("",!0),r.value===1?(x(),w(ae,{key:1,data:c,onDone:_,onBack:s},null,8,["data"])):E("",!0),r.value===2?(x(),w(ie,{key:2,data:c,onBack:s},null,8,["data"])):E("",!0)]),r.value===0?(x(),z(L,{key:0},[e(f,{style:{margin:"0 0 26px 0",opacity:"0.6"}}),e(V,{closable:!1},{default:t(()=>[e(a,{size:"lg",style:{"margin-bottom":"12px"}},{default:t(()=>n[2]||(n[2]=[i("说明")])),_:1}),e(a,{size:"md",style:{"margin-bottom":"8px"}},{default:t(()=>n[3]||(n[3]=[i(" 转账到支付宝 ")])),_:1}),e(a,{style:{"margin-bottom":"12px"}},{default:t(()=>n[4]||(n[4]=[i(" 如果需要，这里可以放一些关于产品的常见问题说明。如果需要， 这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ")])),_:1}),e(a,{size:"md",style:{"margin-bottom":"8px"}},{default:t(()=>n[5]||(n[5]=[i("转账到微信")])),_:1}),e(a,{style:{"margin-bottom":"8px"}},{default:t(()=>n[6]||(n[6]=[i(" 如果需要，这里可以放一些关于产品的常见问题说明。如果需要， 这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ")])),_:1})]),_:1})],64)):E("",!0)]),_:1})]),_:1})])}}}),xe=S(ue,[["__scopeId","data-v-f12255bb"]]);export{xe as default};
