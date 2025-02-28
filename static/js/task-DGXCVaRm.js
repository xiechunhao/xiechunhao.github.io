/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{d as D,b as N,L as s,C as m,S as u,V as r,G as F,u as o,D as n,e as t,_ as k,o as d}from"./vsv-element-plus-DQNbQgVr.js";import{_ as I}from"./index-DXRDwnmL.js";import"./vsv-icon-BSoeDgwL.js";import"./vsv-nprogress-BCb6Y0ID.js";const c={class:"trade-container"},A={class:"mb20"},G={class:"mb20"},O={class:"mb20"},P={class:"mb20"},z={class:"mb20"},E={class:"mb20"},L=D({name:"GoodsAdd",__name:"task",props:{background:{type:String,default:"white"}},setup(R){const g=()=>{},a=reactive({pageNo:1,pageSize:20}),p=ref(1);ref(0);const b=ref(!1),V=ref(!1),v=ref(!1),f=ref(!1),x=ref(!1);return ref([{title:"卡密商品",text:"自动发货"},{title:"虚拟商品",text:"人工发货"}]),(j,l)=>{const i=n("el-input"),y=n("el-button"),_=n("el-tab-pane"),w=n("el-tabs"),S=n("upload-image-list"),C=n("AddInventory"),T=n("BatchSettings"),U=n("PricingTemplate"),B=n("OrderTemplate");return d(),N("div",c,[s(w,{modelValue:o(p),"onUpdate:modelValue":l[6]||(l[6]=e=>F(p)?p.value=e:null)},{default:r(()=>[s(_,{label:"计划任务列表",name:0},{default:r(()=>[l[18]||(l[18]=t("div",{class:"mb20"},"请按自己的需要监控以下网址。只能在一个地方监控，千万不要多节点监控或在多处监控，否则会导致数据错乱！",-1)),t("div",A,[l[12]||(l[12]=t("div",{class:"mb10"},"每日数据库维护+排行榜奖励发放+提成余额延迟到账（每天0点后执行2次）：",-1)),t("div",null,[s(i,{modelValue:o(a).x,"onUpdate:modelValue":l[0]||(l[0]=e=>o(a).x=e),clearable:"",placeholder:"请输入",style:{"max-width":"600px"}},null,8,["modelValue"])])]),t("div",G,[l[13]||(l[13]=t("div",{class:"mb10"},"社区价格监控（10到60分钟一次）",-1)),t("div",null,[s(i,{modelValue:o(a).x,"onUpdate:modelValue":l[1]||(l[1]=e=>o(a).x=e),clearable:"",placeholder:"请输入",style:{"max-width":"600px"}},null,8,["modelValue"])])]),t("div",O,[l[14]||(l[14]=t("div",{class:"mb10"}," 易支付订单补单监控（如果易支付订单已完成，但本站无订单可以监控以下url补单，大约5分钟一次。如果易支付订单也显示未完成，或者其他情况使用该监控均无法补单） ",-1)),t("div",null,[s(i,{modelValue:o(a).x,"onUpdate:modelValue":l[2]||(l[2]=e=>o(a).x=e),clearable:"",placeholder:"请输入",style:{"max-width":"600px"}},null,8,["modelValue"])])]),t("div",P,[l[15]||(l[15]=t("div",{class:"mb10"},"订单状态检测：",-1)),t("div",null,[s(i,{modelValue:o(a).x,"onUpdate:modelValue":l[3]||(l[3]=e=>o(a).x=e),clearable:"",placeholder:"请输入",style:{"max-width":"600px"}},null,8,["modelValue"])])]),t("div",z,[l[16]||(l[16]=t("div",{class:"mb10"},"订单奖励监控：",-1)),t("div",null,[s(i,{modelValue:o(a).x,"onUpdate:modelValue":l[4]||(l[4]=e=>o(a).x=e),clearable:"",placeholder:"请输入",style:{"max-width":"600px"}},null,8,["modelValue"])])]),s(y,{type:"primary",onClick:g},{default:r(()=>l[17]||(l[17]=[k("提交")])),_:1})]),_:1}),s(_,{label:"计划任务配置",name:1},{default:r(()=>[t("div",E,[l[19]||(l[19]=t("div",{class:"mb10"},"监控密钥",-1)),t("div",null,[s(i,{modelValue:o(a).x,"onUpdate:modelValue":l[5]||(l[5]=e=>o(a).x=e),clearable:"",placeholder:"请输入",style:{"max-width":"600px"}},null,8,["modelValue"])])]),s(y,{type:"primary",onClick:g},{default:r(()=>l[20]||(l[20]=[k("提交")])),_:1})]),_:1})]),_:1},8,["modelValue"]),o(b)?(d(),m(S,{key:0,dialogVisible:o(b),onDialogVisibleF:l[7]||(l[7]=e=>b.value=e)},null,8,["dialogVisible"])):u("",!0),o(V)?(d(),m(C,{key:1,dialogVisible:o(V),onDialogVisibleF:l[8]||(l[8]=e=>V.value=e)},null,8,["dialogVisible"])):u("",!0),o(v)?(d(),m(T,{key:2,dialogVisible:o(v),onDialogVisibleF:l[9]||(l[9]=e=>v.value=e)},null,8,["dialogVisible"])):u("",!0),o(f)?(d(),m(U,{key:3,dialogVisible:o(f),onDialogVisibleF:l[10]||(l[10]=e=>f.value=e)},null,8,["dialogVisible"])):u("",!0),o(x)?(d(),m(B,{key:4,dialogVisible:o(x),onDialogVisibleF:l[11]||(l[11]=e=>x.value=e)},null,8,["dialogVisible"])):u("",!0)])}}}),M=I(L,[["__scopeId","data-v-eff36bfa"]]);export{M as default};
