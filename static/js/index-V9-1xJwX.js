/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:17:33 
 */
import{d as w,N as n,a2 as I,o as c,b as m,T as e,$ as s,u as l,a5 as P,ag as T,a4 as i,Y as U,M as E,e as p,a3 as r}from"./vsv-element-plus-CxGOTlXz.js";import{d as F}from"./index-vqJMV2wg.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const Y=y=>F({url:"/systemLog/getList",method:"get",params:y}),$={class:"system-log-container auto-height-container"},j={class:"vab-table-expand"},A={key:0},G={key:1},H={key:0},J={key:1},X=w({name:"SystemLog",__name:"index",setup(y){const v=ref([]),_=ref(!0),x=ref(0),o=reactive({account:"",searchDate:"",pageNo:1,pageSize:20}),h=u=>{o.pageSize=u,b()},k=u=>{o.pageNo=u,b()},C=()=>{o.pageNo=1,b()},b=async()=>{_.value=!0;const{data:u}=await Y(o);v.value=u.list,x.value=u.total,_.value=!1};return onBeforeMount(()=>{b()}),(u,t)=>{const V=n("el-input"),f=n("el-form-item"),D=n("el-date-picker"),N=n("el-button"),S=n("el-form"),z=n("vab-query-form-top-panel"),R=n("vab-query-form"),g=n("vab-dot"),d=n("el-table-column"),q=n("el-empty"),B=n("el-table"),L=n("vab-pagination"),M=I("loading");return c(),m("div",$,[e(R,null,{default:s(()=>[e(z,null,{default:s(()=>[e(S,{inline:"","label-width":"60px",model:l(o),onSubmit:t[2]||(t[2]=P(()=>{},["prevent"]))},{default:s(()=>[e(f,{label:"账号"},{default:s(()=>[e(V,{modelValue:l(o).account,"onUpdate:modelValue":t[0]||(t[0]=a=>l(o).account=a),modelModifiers:{trim:!0},clearable:"",placeholder:"请输入账号"},null,8,["modelValue"])]),_:1}),e(f,{label:"周期"},{default:s(()=>[e(D,{modelValue:l(o).searchDate,"onUpdate:modelValue":t[1]||(t[1]=a=>l(o).searchDate=a),"end-placeholder":"结束日期","start-placeholder":"开始日期",type:"daterange"},null,8,["modelValue"])]),_:1}),e(f,null,{default:s(()=>[e(N,{icon:l(T),loading:l(_),type:"primary",onClick:C},{default:s(()=>t[3]||(t[3]=[i("查询")])),_:1},8,["icon","loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),U((c(),E(B,{data:l(v)},{empty:s(()=>[e(q,{class:"vab-data-empty",description:"暂无数据"})]),default:s(()=>[e(d,{type:"expand"},{default:s(({row:a})=>[p("div",j,[p("p",null,[t[4]||(t[4]=p("span",{class:"vab-table-expand-title"},"日志类型:",-1)),i(" "+r(a.type),1)]),p("p",null,[t[5]||(t[5]=p("span",{class:"vab-table-expand-title"},"账号:",-1)),i(" "+r(a.account),1)]),p("p",null,[t[6]||(t[6]=p("span",{class:"vab-table-expand-title"},"执行结果:",-1)),a.executeResult==="登录成功"?(c(),m("span",A,[e(g,{type:"success"}),i(" "+r(a.executeResult),1)])):(c(),m("span",G,[e(g,{type:"danger"}),i(" "+r(a.executeResult),1)]))]),p("p",null,[t[7]||(t[7]=p("span",{class:"vab-table-expand-title"},"登录IP:",-1)),i(" "+r(a.ip),1)]),p("p",null,[t[8]||(t[8]=p("span",{class:"vab-table-expand-title"},"访问时间:",-1)),i(" "+r(a.datetime),1)])])]),_:1}),e(d,{align:"center",label:"日志类型","min-width":"120",prop:"type"}),e(d,{align:"center",label:"账号","min-width":"120",prop:"account"}),e(d,{align:"center",label:"执行结果","min-width":"120",prop:"executeResult"},{default:s(({row:a})=>[a.executeResult==="登录成功"?(c(),m("span",H,[e(g,{type:"success"}),i(" "+r(a.executeResult),1)])):(c(),m("span",J,[e(g,{type:"danger"}),i(" "+r(a.executeResult),1)]))]),_:1}),e(d,{align:"center",label:"登录IP","min-width":"130",prop:"ip"}),e(d,{align:"center",label:"访问时间","min-width":"160",prop:"datetime",sortable:""})]),_:1},8,["data"])),[[M,l(_)]]),e(L,{"current-page":l(o).pageNo,"page-size":l(o).pageSize,total:l(x),onCurrentChange:k,onSizeChange:h},null,8,["current-page","page-size","total"])])}}});export{X as default};
