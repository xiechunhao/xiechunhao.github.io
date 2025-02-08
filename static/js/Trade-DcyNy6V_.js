/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:17:33 
 */
import{d as E,N as l,a2 as Y,o as m,b,T as e,$ as t,u as o,a5 as Z,Y as C,Z as j,ag as G,a4 as _,n as H,M as J,a3 as k}from"./vsv-element-plus-CxGOTlXz.js";import{d as N}from"./index-vqJMV2wg.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const K=p=>N({url:"/trade/getList",method:"get",params:p}),Q=p=>N({url:"/trade/doRefund",method:"post",data:p}),W={class:"trade-container auto-height-container"},X={key:0},ee={key:1},se=E({name:"Trade",__name:"Trade",setup(p){const v=ref(),c=ref(!0),h=ref([]),u=ref(!0),y=ref(0),x=ref([]),s=reactive({pageNo:1,pageSize:20}),d=async()=>{u.value=!0;const{data:n}=await K(s);h.value=n.list,y.value=n.total,u.value=!1},z=n=>{s.pageNo=1,s.pageSize=n,d()},V=n=>{s.pageNo=n,d()},R=()=>{s.pageNo=1,d()},q=()=>{c.value=!c.value},D=n=>{x.value=n},T=n=>{n.id&&$baseConfirm("您确定要退款吗",null,async()=>{const{msg:r}=await Q({ids:n.id});$baseMessage(r,"success","hey"),await d()})};return onActivated(()=>{var n;(n=v.value)==null||n.doLayout()}),onBeforeMount(()=>{d()}),(n,r)=>{const w=l("el-input"),f=l("el-form-item"),g=l("el-button"),B=l("vab-icon"),L=l("el-form"),M=l("vab-query-form-top-panel"),$=l("vab-query-form"),i=l("el-table-column"),S=l("el-image"),I=l("el-popover"),O=l("el-tag"),P=l("el-empty"),A=l("el-table"),F=l("vab-pagination"),U=Y("loading");return m(),b("div",W,[e($,null,{default:t(()=>[e(M,null,{default:t(()=>[e(L,{inline:"",model:o(s),onSubmit:r[2]||(r[2]=Z(()=>{},["prevent"]))},{default:t(()=>[e(f,{label:"商户订单号"},{default:t(()=>[e(w,{modelValue:o(s).merchantOrderId,"onUpdate:modelValue":r[0]||(r[0]=a=>o(s).merchantOrderId=a),clearable:"",placeholder:"商户订单号"},null,8,["modelValue"])]),_:1}),C(e(f,{label:"微信支付单号","label-width":"120px"},{default:t(()=>[e(w,{modelValue:o(s).wechatPaymentNo,"onUpdate:modelValue":r[1]||(r[1]=a=>o(s).wechatPaymentNo=a),clearable:"",placeholder:"微信支付单号"},null,8,["modelValue"])]),_:1},512),[[j,!o(c)]]),e(f,null,{default:t(()=>[e(g,{icon:o(G),loading:o(u),"native-type":"submit",type:"primary",onClick:R},{default:t(()=>r[3]||(r[3]=[_("查询")])),_:1},8,["icon","loading"]),e(g,{class:"hidden-xs-only",text:"",type:"primary",onClick:q},{default:t(()=>[o(c)?(m(),b("span",X,"展开")):(m(),b("span",ee,"合并")),e(B,{class:H(["vab-dropdown",{"vab-dropdown-active":o(c)}]),icon:"arrow-up-s-line"},null,8,["class"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),C((m(),J(A,{ref_key:"tableRef",ref:v,border:"",data:o(h),onSelectionChange:D},{empty:t(()=>[e(P,{class:"vab-data-empty",description:"暂无数据"})]),default:t(()=>[e(i,{type:"selection",width:"38"}),e(i,{align:"center",label:"序号",width:"55"},{default:t(({$index:a})=>[_(k(a+1),1)]),_:1}),e(i,{align:"center",label:"商品图",prop:"image"},{default:t(({row:a})=>[e(I,{placement:"top-start"},{reference:t(()=>[e(S,{src:a.image},null,8,["src"])]),default:t(()=>[e(S,{src:a.image},null,8,["src"])]),_:2},1024)]),_:1}),e(i,{align:"center",label:"交易时间","min-width":"160",prop:"transactionTime","show-overflow-tooltip":"",sortable:""}),e(i,{align:"center",label:"商户订单号","min-width":"120",prop:"merchantOrderId","show-overflow-tooltip":""}),e(i,{align:"center",label:"微信支付单号","min-width":"120",prop:"wechatPaymentNo","show-overflow-tooltip":""}),e(i,{align:"center",label:"支付场景","min-width":"120",prop:"paymentScene",sortable:""}),e(i,{align:"center",label:"交易状态","min-width":"120",prop:"transactionStatus",sortable:""},{default:t(({row:a})=>[e(O,{effect:"dark",type:a.transactionStatus=="已支付"?"success":a.transactionStatus=="未支付"?"warning":a.transactionStatus=="已退款"?"danger":"info"},{default:t(()=>[_(k(a.transactionStatus),1)]),_:2},1032,["type"])]),_:1}),e(i,{align:"center",label:"订单金额(元)","min-width":"120",prop:"orderAmount"}),e(i,{align:"center",label:"操作",width:"80"},{default:t(({row:a})=>[e(g,{disabled:a.transactionStatus!=="已支付"&&a.transactionStatus!=="申请退款中",text:"",type:"danger",onClick:te=>T(a)},{default:t(()=>r[4]||(r[4]=[_(" 退款 ")])),_:2},1032,["disabled","onClick"])]),_:1})]),_:1},8,["data"])),[[U,o(u)]]),e(F,{"current-page":o(s).pageNo,"page-size":o(s).pageSize,total:o(y),onCurrentChange:V,onSizeChange:z},null,8,["current-page","page-size","total"])])}}});export{se as default};
