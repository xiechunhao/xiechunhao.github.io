/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{d as E,b as F,e as s,L as l,V as t,Y as N,u as o,D as i,G as D,a7 as G,_ as r,C as U,S as j,o as w}from"./vsv-element-plus-DQNbQgVr.js";import{g as O}from"./trade-DgEmw_aG.js";import"./index-DXRDwnmL.js";import"./vsv-icon-BSoeDgwL.js";import"./vsv-nprogress-BCb6Y0ID.js";const Y={class:"trade-container auto-height-container"},H={class:"mb20"},J={class:"dialog-footer"},K={class:"dialog-footer"},le=E({name:"commissionDetails",__name:"message",props:{background:{type:String,default:"white"}},setup(P){const y=ref(0),B=ref([]),m=ref(!1),f=ref(!1),R=d=>{B.value=d},I=d=>{n.pageNo=d,c()},$=d=>{n.pageNo=1,n.pageSize=d,c()},n=reactive({pageNo:1,pageSize:20}),b=reactive({pageNo:1,pageSize:20});ref(0);const V=ref(!0),_=ref([]);ref(0),ref(!1),ref(!1),ref(!1),ref(!1),ref(!1);const c=async()=>{V.value=!0;const{data:d}=await O(n);_.value=d.list,y.value=d.total,V.value=!1,console.log(_.value)};return onBeforeMount(()=>{c()}),(d,e)=>{const u=i("el-button"),x=i("el-form"),g=i("el-table-column"),L=i("el-table"),T=i("vab-pagination"),C=i("el-radio"),A=i("el-radio-group"),v=i("el-form-item"),S=i("el-input"),p=i("el-option"),M=i("el-select"),q=i("RichTextz"),k=i("el-scrollbar"),z=i("vab-dialog");return w(),F("div",Y,[s("div",H,[l(x,{inline:"",model:o(b),onSubmit:e[1]||(e[1]=N(()=>{},["prevent"]))},{default:t(()=>[l(u,{icon:o(G),type:"primary",onClick:e[0]||(e[0]=a=>m.value=!0)},{default:t(()=>e[12]||(e[12]=[r("短信发送")])),_:1},8,["icon"]),l(u,{type:"warning"},{default:t(()=>e[13]||(e[13]=[r("批量删除")])),_:1})]),_:1},8,["model"])]),l(L,{data:o(_),border:"","header-cell-style":{background:"#f5f7fa",textAlign:"center"},"cell-style":{textAlign:"center"},onSelectionChange:R},{default:t(()=>[l(g,{type:"selection",width:"38"}),l(g,{prop:"merchantOrderId",label:"短信标题"}),l(g,{align:"center",label:"消息对象"},{default:t(({row:a})=>e[14]||(e[14]=[r("用户：12150")])),_:1}),l(g,{prop:"time",label:"发送时间"}),l(g,{align:"center",label:"操作",width:"340"},{default:t(({row:a})=>[l(u,{text:"",onClick:e[2]||(e[2]=Q=>f.value=!0),type:"primary"},{default:t(()=>e[15]||(e[15]=[r("查看")])),_:1}),l(u,{text:"",type:"primary"},{default:t(()=>e[16]||(e[16]=[r("删除")])),_:1})]),_:1})]),_:1},8,["data"]),l(T,{"current-page":o(n).pageNo,"page-size":o(n).pageSize,total:o(y),onCurrentChange:I,onSizeChange:$},null,8,["current-page","page-size","total"]),l(z,{modelValue:o(m),"onUpdate:modelValue":e[9]||(e[9]=a=>D(m)?m.value=a:null),"append-to-body":"",title:"发送站内信",width:"1000px"},{footer:t(()=>[s("div",J,[l(u,{onClick:e[8]||(e[8]=a=>m.value=!1)},{default:t(()=>e[19]||(e[19]=[r("取消")])),_:1}),l(u,{type:"primary"},{default:t(()=>e[20]||(e[20]=[r("确定")])),_:1})])]),default:t(()=>[l(k,{height:"500px"},{default:t(()=>[l(x,{model:o(n),onSubmit:e[7]||(e[7]=N(()=>{},["prevent"]))},{default:t(()=>[l(v,{label:"发送类型"},{default:t(()=>[l(A,{modelValue:o(n).radioff1,"onUpdate:modelValue":e[3]||(e[3]=a=>o(n).radioff1=a)},{default:t(()=>[l(C,{label:"1"},{default:t(()=>e[17]||(e[17]=[r("用户")])),_:1}),l(C,{value:"2"},{default:t(()=>e[18]||(e[18]=[r("等级")])),_:1})]),_:1},8,["modelValue"])]),_:1}),o(n).radioff1==1?(w(),U(v,{key:0,label:"短信接受人ID"},{default:t(()=>[l(S,{modelValue:o(n).a,"onUpdate:modelValue":e[4]||(e[4]=a=>o(n).a=a),placeholder:"请输入短信接受人ID",class:"input-with-select"},null,8,["modelValue"])]),_:1})):j("",!0),o(n).radioff1==2?(w(),U(v,{key:1,label:"接收级别"},{default:t(()=>[l(M,{modelValue:o(b).region,"onUpdate:modelValue":e[5]||(e[5]=a=>o(b).region=a),placeholder:"请选择"},{default:t(()=>[l(p,{label:"普通会员",value:"shanghai"}),l(p,{label:"秩序白银",value:"beijing"}),l(p,{label:"荣耀黄金",value:"beijing"}),l(p,{label:"尊贵铂金",value:"beijing"}),l(p,{label:"永恒钻石",value:"beijing"}),l(p,{label:"分站用户",value:"beijing"})]),_:1},8,["modelValue"])]),_:1})):j("",!0),l(v,{label:"消息标题"},{default:t(()=>[l(S,{modelValue:o(n).a,"onUpdate:modelValue":e[6]||(e[6]=a=>o(n).a=a),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),l(v,{label:"消息内容"},{default:t(()=>[l(q)]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["modelValue"]),l(z,{modelValue:o(f),"onUpdate:modelValue":e[11]||(e[11]=a=>D(f)?f.value=a:null),"append-to-body":"",title:"查看消息",width:"500px"},{footer:t(()=>[s("div",K,[l(u,{onClick:e[10]||(e[10]=a=>f.value=!1)},{default:t(()=>e[22]||(e[22]=[r("关闭")])),_:1})])]),default:t(()=>[l(k,{height:"400px"},{default:t(()=>e[21]||(e[21]=[s("div",{class:"rowC mb20"},[s("div",{class:"mr10",style:{width:"100px"}},"主题"),s("div",{class:"mr10"},"用户登陆成功")],-1),s("div",{class:"rowC mb20"},[s("div",{class:"mr10",style:{width:"100px"}},"内容"),s("div",{class:"mr10"},"用户登陆成功用户登陆成功用户登陆成功用户登陆成功用户登陆成功用户登陆成功")],-1),s("div",{class:"rowC mb20"},[s("div",{class:"mr10",style:{width:"100px"}},"发送时间"),s("div",{class:"mr10"},"2025-02-12 12:59:56")],-1),s("div",{class:"rowC mb20"},[s("div",{class:"mr10",style:{width:"100px"}},"消息对象"),s("div",{class:"mr10"},"用户ID：xxxx")],-1)])),_:1})]),_:1},8,["modelValue"])])}}});export{le as default};
