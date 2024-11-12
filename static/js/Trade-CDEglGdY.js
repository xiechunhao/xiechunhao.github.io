/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 17:39:02 
 */
import{_ as U}from"./index.vue_vue_type_script_setup_true_lang-CsTYoAB6.js";import{_ as H}from"./index-BbKQSpTb.js";import{_ as J}from"./VabQueryFormTopPanel-BQO4s90U.js";import{d as Q,r as i,p as W,Q as Z,a7 as j,$ as G,o as m,b,W as e,T as t,u as o,aA as K,Z as C,ae as X,aS as Y,a8 as _,n as ee,S as te,a1 as k,aO as ae,aq as ne,a9 as oe,au as le,aP as se,bd as re,aI as ie,aH as ce,aJ as de,aR as pe,a0 as ue}from"./vsv-element-plus-DDEqdpLt.js";import{k as E,$ as me,f as _e}from"./index-D5j7Mtop.js";import"./vsv-icon-DFkIF_Wl.js";import"./vsv-nprogress-CAgsOcyS.js";const fe=p=>E({url:"/trade/getList",method:"get",params:p}),ge=p=>E({url:"/trade/doRefund",method:"post",data:p}),be={class:"trade-container auto-height-container"},he={key:0},ve={key:1},ze=Q({name:"Trade",__name:"Trade",setup(p){const h=i(),c=i(!0),v=i([]),u=i(!0),y=i(0),N=i([]),l=W({pageNo:1,pageSize:20}),d=async()=>{u.value=!0;const{data:n}=await fe(l);v.value=n.list,y.value=n.total,u.value=!1},x=n=>{l.pageNo=1,l.pageSize=n,d()},z=n=>{l.pageNo=n,d()},R=()=>{l.pageNo=1,d()},T=()=>{c.value=!c.value},V=n=>{N.value=n},I=n=>{n.id&&me("您确定要退款吗",null,async()=>{const{msg:s}=await ge({ids:n.id});_e(s,"success","hey"),await d()})};return Z(()=>{var n;(n=h.value)==null||n.doLayout()}),j(()=>{d()}),(n,s)=>{const w=ae,f=ne,g=oe,$=G("vab-icon"),q=le,B=J,L=H,r=se,S=re,P=ie,D=ce,F=de,O=pe,A=U,M=ue;return m(),b("div",be,[e(L,null,{default:t(()=>[e(B,null,{default:t(()=>[e(q,{inline:"",model:o(l),onSubmit:s[2]||(s[2]=K(()=>{},["prevent"]))},{default:t(()=>[e(f,{label:"商户订单号"},{default:t(()=>[e(w,{modelValue:o(l).merchantOrderId,"onUpdate:modelValue":s[0]||(s[0]=a=>o(l).merchantOrderId=a),clearable:"",placeholder:"商户订单号"},null,8,["modelValue"])]),_:1}),C(e(f,{label:"微信支付单号","label-width":"120px"},{default:t(()=>[e(w,{modelValue:o(l).wechatPaymentNo,"onUpdate:modelValue":s[1]||(s[1]=a=>o(l).wechatPaymentNo=a),clearable:"",placeholder:"微信支付单号"},null,8,["modelValue"])]),_:1},512),[[X,!o(c)]]),e(f,null,{default:t(()=>[e(g,{icon:o(Y),loading:o(u),"native-type":"submit",type:"primary",onClick:R},{default:t(()=>s[3]||(s[3]=[_("查询")])),_:1},8,["icon","loading"]),e(g,{class:"hidden-xs-only",text:"",type:"primary",onClick:T},{default:t(()=>[o(c)?(m(),b("span",he,"展开")):(m(),b("span",ve,"合并")),e($,{class:ee(["vab-dropdown",{"vab-dropdown-active":o(c)}]),icon:"arrow-up-s-line"},null,8,["class"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),C((m(),te(O,{ref_key:"tableRef",ref:h,border:"",data:o(v),onSelectionChange:V},{empty:t(()=>[e(F,{class:"vab-data-empty",description:"暂无数据"})]),default:t(()=>[e(r,{type:"selection",width:"38"}),e(r,{align:"center",label:"序号",width:"55"},{default:t(({$index:a})=>[_(k(a+1),1)]),_:1}),e(r,{align:"center",label:"商品图",prop:"image"},{default:t(({row:a})=>[e(P,{placement:"top-start"},{reference:t(()=>[e(S,{src:a.image},null,8,["src"])]),default:t(()=>[e(S,{src:a.image},null,8,["src"])]),_:2},1024)]),_:1}),e(r,{align:"center",label:"交易时间","min-width":"160",prop:"transactionTime","show-overflow-tooltip":"",sortable:""}),e(r,{align:"center",label:"商户订单号","min-width":"120",prop:"merchantOrderId","show-overflow-tooltip":""}),e(r,{align:"center",label:"微信支付单号","min-width":"120",prop:"wechatPaymentNo","show-overflow-tooltip":""}),e(r,{align:"center",label:"支付场景","min-width":"120",prop:"paymentScene",sortable:""}),e(r,{align:"center",label:"交易状态","min-width":"120",prop:"transactionStatus",sortable:""},{default:t(({row:a})=>[e(D,{effect:"dark",type:a.transactionStatus=="已支付"?"success":a.transactionStatus=="未支付"?"warning":a.transactionStatus=="已退款"?"danger":"info"},{default:t(()=>[_(k(a.transactionStatus),1)]),_:2},1032,["type"])]),_:1}),e(r,{align:"center",label:"订单金额(元)","min-width":"120",prop:"orderAmount"}),e(r,{align:"center",label:"操作",width:"80"},{default:t(({row:a})=>[e(g,{disabled:a.transactionStatus!=="已支付"&&a.transactionStatus!=="申请退款中",text:"",type:"danger",onClick:ye=>I(a)},{default:t(()=>s[4]||(s[4]=[_(" 退款 ")])),_:2},1032,["disabled","onClick"])]),_:1})]),_:1},8,["data"])),[[M,o(u)]]),e(A,{"current-page":o(l).pageNo,"page-size":o(l).pageSize,total:o(y),onCurrentChange:z,onSizeChange:x},null,8,["current-page","page-size","total"])])}}});export{ze as default};
