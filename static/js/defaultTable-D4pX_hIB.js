/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-08 14:17:33 
 */
import{d as ye,N as s,a2 as ve,o as g,b as h,T as e,$ as l,u as a,a5 as he,Y as w,Z as $,ag as we,a4 as d,n as ke,aj as Ce,ak as Ve,M as Y,a3 as B,k as De,al as Se}from"./vsv-element-plus-CxGOTlXz.js";import{g as xe,d as E}from"./table-y0lhAXaG.js";import{e as $e,f as Me,a as Re,h as Te,g as qe}from"./index-vqJMV2wg.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const Ue={class:"comprehensive-table-container auto-height-container"},ze={key:0},Ne={key:1},Ye={key:0},He=ye({name:"DefaultTable",__name:"defaultTable",setup(Be){const M=useRouter(),F=$e(),{getAllRoutes:A}=storeToRefs(F),L=Me(),{changeTabsMeta:j,addVisitedRoute:H}=L,k=ref(null),R=ref(),f=ref(!0),T=ref([]),v=ref(!0),q=ref(0),m=ref([]),i=reactive({pageNo:1,pageSize:20}),b=ref(!1),O=Re(),{device:U}=storeToRefs(O),z=ref(!1),_=async()=>{v.value=!0;const{data:o}=await xe(i);T.value=o.list,q.value=o.total,v.value=!1},Z=o=>{i.pageNo=1,i.pageSize=o,_()},G=o=>{i.pageNo=o,_()},I=()=>{i.pageNo=1,_()},J=o=>({published:"success",draft:"primary",deleted:"danger"})[o],K=()=>{f.value=!f.value},P=o=>{m.value=o},Q=()=>{k.value.showEdit()},N=(o={})=>{k.value.showEdit(o)},C=o=>{if(o.id)$baseConfirm("您确定要删除当前项吗",null,async()=>{const{msg:t}=await E({ids:o.id});$baseMessage(t,"success","hey"),await _()});else if(m.value.length>0){const t=m.value.map(u=>u.id).join(",");$baseConfirm("您确定要删除选中项吗",null,async()=>{const{msg:u}=await E({ids:t});$baseMessage(u,"success","hey"),await _()})}else $baseMessage("您未选中任何行","warning","hey")},W=async()=>{if(m.value.length>0)for(let o=0;o<m.value.length;o++){const t=Te(A.value,"/vab/table/defaultTableDetail"),u=qe({...t.at(-1),query:m.value[o]});u&&(await H(u),await j({title:"详情页",meta:{title:`${u.query.title} 详情页`}}))}else $baseMessage("请至少选择一行进行详情页跳转","warning","hey")},V=o=>{o.id?M.push({path:"/vab/table/defaultTableDetail",query:{...o,timestamp:Date.now()}}):m.value.length===1?M.push({path:"/vab/table/defaultTableDetail",query:{...m.value[0],timestamp:Date.now()}}):$baseMessage("请选择一行进行详情页跳转","warning","hey")};return watch(()=>U.value,()=>{U.value==="mobile"&&(b.value=!0,z.value="right")},{immediate:!0}),onActivated(()=>{var o;(o=R.value)==null||o.doLayout()}),onBeforeMount(()=>{_()}),(o,t)=>{const u=s("el-input"),y=s("el-form-item"),X=s("el-date-picker"),D=s("el-option"),ee=s("el-select"),r=s("el-button"),te=s("vab-icon"),le=s("el-form"),ae=s("vab-query-form-top-panel"),ne=s("vab-query-form-left-panel"),oe=s("vab-query-form"),p=s("el-table-column"),se=s("el-rate"),ie=s("el-switch"),de=s("el-tag"),ue=s("el-checkbox"),re=s("el-icon"),S=s("el-link"),x=s("el-dropdown-item"),pe=s("el-dropdown-menu"),ce=s("el-dropdown"),me=s("el-empty"),fe=s("el-table"),_e=s("vab-pagination"),be=s("default-table-edit"),ge=ve("loading");return g(),h("div",Ue,[e(oe,null,{default:l(()=>[e(ae,null,{default:l(()=>[e(le,{inline:"",model:a(i),onSubmit:t[4]||(t[4]=he(()=>{},["prevent"]))},{default:l(()=>[e(y,{label:"标题"},{default:l(()=>[e(u,{modelValue:a(i).title,"onUpdate:modelValue":t[0]||(t[0]=n=>a(i).title=n),clearable:"",placeholder:"请输入标题"},null,8,["modelValue"])]),_:1}),w(e(y,{label:"作者"},{default:l(()=>[e(u,{modelValue:a(i).author,"onUpdate:modelValue":t[1]||(t[1]=n=>a(i).author=n),clearable:"",placeholder:"请输入作者"},null,8,["modelValue"])]),_:1},512),[[$,!a(f)]]),w(e(y,{label:"时间"},{default:l(()=>[e(X,{modelValue:a(i).datetime,"onUpdate:modelValue":t[2]||(t[2]=n=>a(i).datetime=n),format:"YYYY/MM/DD HH:mm:ss",placeholder:"请选择时间",type:"datetime"},null,8,["modelValue"])]),_:1},512),[[$,!a(f)]]),w(e(y,{label:"状态"},{default:l(()=>[e(ee,{modelValue:a(i).status,"onUpdate:modelValue":t[3]||(t[3]=n=>a(i).status=n),placeholder:"请选择状态"},{default:l(()=>[e(D,{label:"success",value:"published"}),e(D,{label:"primary",value:"draft"}),e(D,{label:"danger",value:"deleted"})]),_:1},8,["modelValue"])]),_:1},512),[[$,!a(f)]]),e(y,null,{default:l(()=>[e(r,{icon:a(we),loading:a(v),"native-type":"submit",type:"primary",onClick:I},{default:l(()=>t[6]||(t[6]=[d("查询")])),_:1},8,["icon","loading"]),e(r,{class:"hidden-xs-only",text:"",type:"primary",onClick:K},{default:l(()=>[a(f)?(g(),h("span",ze,"展开")):(g(),h("span",Ne,"合并")),e(te,{class:ke(["vab-dropdown",{"vab-dropdown-active":a(f)}]),icon:"arrow-up-s-line"},null,8,["class"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(ne,{span:24},{default:l(()=>[e(r,{icon:a(Ce),type:"primary",onClick:Q},{default:l(()=>t[7]||(t[7]=[d("添加")])),_:1},8,["icon"]),e(r,{icon:a(Ve),type:"danger",onClick:C},{default:l(()=>t[8]||(t[8]=[d("删除")])),_:1},8,["icon"]),e(r,{type:"primary",onClick:V},{default:l(()=>t[9]||(t[9]=[d("详情")])),_:1}),e(r,{class:"hidden-xs-only",type:"primary",onClick:W},{default:l(()=>t[10]||(t[10]=[d("后台打开详情")])),_:1})]),_:1})]),_:1}),w((g(),Y(fe,{ref_key:"tableRef",ref:R,border:"",data:a(T),onSelectionChange:P},{empty:l(()=>[e(me,{class:"vab-data-empty",description:"暂无数据"})]),default:l(()=>[e(p,{type:"selection",width:"38"}),e(p,{align:"center",label:"序号",width:"55"},{default:l(({$index:n})=>[d(B(n+1),1)]),_:1}),e(p,{align:"center",label:"标题","min-width":"200",prop:"title"}),e(p,{align:"center",label:"作者",prop:"author"}),e(p,{align:"center",label:"评级","min-width":"200"},{default:l(({row:n})=>[e(se,{modelValue:n.rate,"onUpdate:modelValue":c=>n.rate=c,disabled:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(p,{align:"center",label:"数量","min-width":"100",prop:"count",sortable:""}),e(p,{align:"center",label:"开关",prop:"switch"},{default:l(({row:n})=>[e(ie,{modelValue:n.switch,"onUpdate:modelValue":c=>n.switch=c},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(p,{align:"center",label:"状态","min-width":"100"},{default:l(({row:n})=>[e(de,{effect:"dark",type:J(n.status)},{default:l(()=>[d(B(n.status),1)]),_:2},1032,["type"])]),_:1}),e(p,{align:"center",label:"时间","min-width":"160",prop:"datetime"}),e(p,{align:"center",fixed:a(z),label:"操作",width:a(b)?120:215},{header:l(()=>[e(ue,{modelValue:a(b),"onUpdate:modelValue":t[5]||(t[5]=n=>De(b)?b.value=n:null),label:"折叠操作列","true-value":"right"},null,8,["modelValue"])]),default:l(({row:n})=>[a(b)?(g(),Y(ce,{key:1},{dropdown:l(()=>[e(pe,null,{default:l(()=>[e(x,{onClick:c=>V(n)},{default:l(()=>[e(S,{type:"primary",underline:!1},{default:l(()=>t[15]||(t[15]=[d("详情")])),_:1})]),_:2},1032,["onClick"]),e(x,{onClick:c=>N(n)},{default:l(()=>[e(S,{type:"primary",underline:!1},{default:l(()=>t[16]||(t[16]=[d("编辑")])),_:1})]),_:2},1032,["onClick"]),e(x,{onClick:c=>C(n)},{default:l(()=>[e(S,{type:"danger",underline:!1},{default:l(()=>t[17]||(t[17]=[d("删除")])),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),default:l(()=>[e(r,{text:"",type:"primary"},{default:l(()=>[t[14]||(t[14]=d(" 操作 ")),e(re,{class:"el-icon--right"},{default:l(()=>[e(a(Se))]),_:1})]),_:1})]),_:2},1024)):(g(),h("div",Ye,[e(r,{text:"",type:"primary",onClick:c=>V(n)},{default:l(()=>t[11]||(t[11]=[d("详情")])),_:2},1032,["onClick"]),e(r,{text:"",type:"primary",onClick:c=>N(n)},{default:l(()=>t[12]||(t[12]=[d("编辑")])),_:2},1032,["onClick"]),e(r,{text:"",type:"danger",onClick:c=>C(n)},{default:l(()=>t[13]||(t[13]=[d("删除")])),_:2},1032,["onClick"])]))]),_:1},8,["fixed","width"])]),_:1},8,["data"])),[[ge,a(v)]]),e(_e,{"current-page":a(i).pageNo,"page-size":a(i).pageSize,total:a(q),onCurrentChange:G,onSizeChange:Z},null,8,["current-page","page-size","total"]),e(be,{ref_key:"editRef",ref:k,onFetchData:_},null,512)])}}});export{He as default};
