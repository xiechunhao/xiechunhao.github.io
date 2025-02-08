/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 15:33:27 
 */
import{_ as A}from"./index.vue_vue_type_script_setup_true_lang-DG6MVEkW.js";import{_ as G}from"./index-Y7yXzhRv.js";import{_ as H}from"./VabQueryFormTopPanel-CB6uQM3K.js";import{d as Q,r as i,h as W,P as Y,a6 as Z,R as j,b,o as m,Z as e,U as C,T as t,ao as J,aB as K,u as o,ap as X,aL as ee,ad as te,a8 as ae,aR as ne,a7 as _,n as oe,W as le,S as se,aO as re,Y as k,aH as ie,be as ce,aG as de,aI as pe,aQ as ue}from"./vsv-element-plus-B-S50adB.js";import{k as E,$ as me,f as _e}from"./index-Ba9EqH5M.js";import"./vsv-icon-BcEnJ7dJ.js";import"./vsv-nprogress-Bmiy9T8n.js";const fe=p=>E({url:"/trade/getList",method:"get",params:p}),ge=p=>E({url:"/trade/doRefund",method:"post",data:p}),be={class:"trade-container auto-height-container"},he={key:0},ve={key:1},xe=Q({name:"Trade",__name:"Trade",setup(p){const h=i(),c=i(!0),v=i([]),u=i(!0),y=i(0),N=i([]),l=W({pageNo:1,pageSize:20}),d=async()=>{u.value=!0;const{data:n}=await fe(l);v.value=n.list,y.value=n.total,u.value=!1},R=n=>{l.pageNo=1,l.pageSize=n,d()},x=n=>{l.pageNo=n,d()},z=()=>{l.pageNo=1,d()},T=()=>{c.value=!c.value},V=n=>{N.value=n},I=n=>{n.id&&me("您确定要退款吗",null,async()=>{const{msg:s}=await ge({ids:n.id});_e(s,"success","hey"),await d()})};return Y(()=>{var n;(n=h.value)==null||n.doLayout()}),Z(()=>{d()}),(n,s)=>{const w=ee,f=X,g=ae,B=j("vab-icon"),L=J,P=H,$=G,r=re,S=ce,q=ie,D=de,F=pe,O=ue,M=A,U=le;return m(),b("div",be,[e($,null,{default:t(()=>[e(P,null,{default:t(()=>[e(L,{inline:"",model:o(l),onSubmit:s[2]||(s[2]=K(()=>{},["prevent"]))},{default:t(()=>[e(f,{label:"商户订单号"},{default:t(()=>[e(w,{modelValue:o(l).merchantOrderId,"onUpdate:modelValue":s[0]||(s[0]=a=>o(l).merchantOrderId=a),clearable:"",placeholder:"商户订单号"},null,8,["modelValue"])]),_:1}),C(e(f,{label:"微信支付单号","label-width":"120px"},{default:t(()=>[e(w,{modelValue:o(l).wechatPaymentNo,"onUpdate:modelValue":s[1]||(s[1]=a=>o(l).wechatPaymentNo=a),clearable:"",placeholder:"微信支付单号"},null,8,["modelValue"])]),_:1},512),[[te,!o(c)]]),e(f,null,{default:t(()=>[e(g,{icon:o(ne),loading:o(u),"native-type":"submit",type:"primary",onClick:z},{default:t(()=>s[3]||(s[3]=[_("查询")])),_:1},8,["icon","loading"]),e(g,{class:"hidden-xs-only",text:"",type:"primary",onClick:T},{default:t(()=>[o(c)?(m(),b("span",he,"展开")):(m(),b("span",ve,"合并")),e(B,{class:oe(["vab-dropdown",{"vab-dropdown-active":o(c)}]),icon:"arrow-up-s-line"},null,8,["class"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),C((m(),se(O,{ref_key:"tableRef",ref:h,border:"",data:o(v),onSelectionChange:V},{empty:t(()=>[e(F,{class:"vab-data-empty",description:"暂无数据"})]),default:t(()=>[e(r,{type:"selection",width:"38"}),e(r,{align:"center",label:"序号",width:"55"},{default:t(({$index:a})=>[_(k(a+1),1)]),_:1}),e(r,{align:"center",label:"商品图",prop:"image"},{default:t(({row:a})=>[e(q,{placement:"top-start"},{reference:t(()=>[e(S,{src:a.image},null,8,["src"])]),default:t(()=>[e(S,{src:a.image},null,8,["src"])]),_:2},1024)]),_:1}),e(r,{align:"center",label:"交易时间","min-width":"160",prop:"transactionTime","show-overflow-tooltip":"",sortable:""}),e(r,{align:"center",label:"商户订单号","min-width":"120",prop:"merchantOrderId","show-overflow-tooltip":""}),e(r,{align:"center",label:"微信支付单号","min-width":"120",prop:"wechatPaymentNo","show-overflow-tooltip":""}),e(r,{align:"center",label:"支付场景","min-width":"120",prop:"paymentScene",sortable:""}),e(r,{align:"center",label:"交易状态","min-width":"120",prop:"transactionStatus",sortable:""},{default:t(({row:a})=>[e(D,{effect:"dark",type:a.transactionStatus=="已支付"?"success":a.transactionStatus=="未支付"?"warning":a.transactionStatus=="已退款"?"danger":"info"},{default:t(()=>[_(k(a.transactionStatus),1)]),_:2},1032,["type"])]),_:1}),e(r,{align:"center",label:"订单金额(元)","min-width":"120",prop:"orderAmount"}),e(r,{align:"center",label:"操作",width:"80"},{default:t(({row:a})=>[e(g,{disabled:a.transactionStatus!=="已支付"&&a.transactionStatus!=="申请退款中",text:"",type:"danger",onClick:ye=>I(a)},{default:t(()=>s[4]||(s[4]=[_(" 退款 ")])),_:2},1032,["disabled","onClick"])]),_:1})]),_:1},8,["data"])),[[U,o(u)]]),e(M,{"current-page":o(l).pageNo,"page-size":o(l).pageSize,total:o(y),onCurrentChange:x,onSizeChange:R},null,8,["current-page","page-size","total"])])}}});export{xe as default};
