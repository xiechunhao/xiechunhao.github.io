/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-30 14:06:07 
 */
import{d as se,N as o,a2 as ie,o as R,b as de,T as e,$ as l,u as d,a5 as ce,a4 as i,aj as re,ak as ue,Y as pe,M as fe,a3 as y,k as me}from"./vsv-element-plus-CxGOTlXz.js";import{g as _e,d as q}from"./table-BGYc9MSD.js";import{e as be,f as ge,h as he,g as ye,_ as ve}from"./index-DMdRIM5p.js";import"./vsv-icon-B5tQoIEl.js";import"./vsv-nprogress-DAXSSYSi.js";const ke={class:"tabs-table-container no-background-container"},Ce=se({name:"TabsTable",__name:"tabsTable",setup(we){const b=ref("first"),v=useRouter(),M=be(),{getAllRoutes:$}=storeToRefs(M),x=ge(),{changeTabsMeta:N,addVisitedRoute:z}=x,g=ref(null),k=ref(),C=ref([]),h=ref(!0),w=ref(0),u=ref([]),s=reactive({pageNo:1,pageSize:20,checked1:!0,checked2:!1,checked3:!1,checked4:!1}),U=t=>{s.checked1=t,_()},B=t=>{s.checked2=t,_()},E=t=>{s.checked3=t,_()},A=t=>{s.checked4=t},F=()=>{_()},p=async()=>{h.value=!0;const{data:t}=await _e(s);C.value=t.list,w.value=t.total,h.value=!1},L=t=>{s.pageNo=1,s.pageSize=t,p()},j=t=>{s.pageNo=t,p()},_=()=>{s.pageNo=1,p()},I=t=>({published:"success",draft:"primary",deleted:"danger"})[t],Y=t=>{u.value=t},G=()=>{g.value.showEdit()},H=(t={})=>{g.value.showEdit(t)},D=t=>{if(t.id)$baseConfirm("您确定要删除当前项吗",null,async()=>{const{msg:a}=await q({ids:t.id});$baseMessage(a,"success","hey"),await p()});else if(u.value.length>0){const a=u.value.map(c=>c.id).join(",");$baseConfirm("您确定要删除选中项吗",null,async()=>{const{msg:c}=await q({ids:a});$baseMessage(c,"success","hey"),await p()})}else $baseMessage("您未选中任何行","warning","hey")},J=async()=>{if(u.value.length>0)for(let t=0;t<u.value.length;t++){const a=he($.value,"/vab/table/defaultTableDetail"),c=ye({...a.at(-1),query:u.value[t]});c&&(await z(c),await N({title:"详情页",meta:{title:`${c.query.title} 详情页`}}))}else $baseMessage("请至少选择一行进行详情页跳转","warning","hey")},T=t=>{t.id?v.push({path:"/vab/table/defaultTableDetail",query:{...t,timestamp:Date.now()}}):u.value.length===1?v.push({path:"/vab/table/defaultTableDetail",query:{...u.value[0],timestamp:Date.now()}}):$baseMessage("请选择一行进行详情页跳转","warning","hey")};return onActivated(()=>{var t;(t=k.value)==null||t.doLayout()}),onBeforeMount(()=>{p()}),(t,a)=>{const c=o("el-check-tag"),K=o("el-form-item"),O=o("el-form"),P=o("vab-query-form-top-panel"),f=o("el-button"),Q=o("vab-query-form-left-panel"),W=o("vab-query-form"),r=o("el-table-column"),X=o("el-rate"),Z=o("el-switch"),ee=o("el-tag"),S=o("el-empty"),te=o("el-table"),ae=o("vab-pagination"),le=o("default-table-edit"),V=o("el-tab-pane"),ne=o("el-tabs"),oe=ie("loading");return R(),de("div",ke,[e(ne,{modelValue:d(b),"onUpdate:modelValue":a[1]||(a[1]=n=>me(b)?b.value=n:null),type:"border-card",onTabClick:F},{default:l(()=>[e(V,{label:"当前",name:"first"},{default:l(()=>[e(W,null,{default:l(()=>[e(P,null,{default:l(()=>[e(O,{inline:"",model:d(s),onSubmit:a[0]||(a[0]=ce(()=>{},["prevent"]))},{default:l(()=>[e(K,{label:"分类"},{default:l(()=>[e(c,{checked:d(s).checked1,onChange:U},{default:l(()=>a[2]||(a[2]=[i("分类一")])),_:1},8,["checked"]),e(c,{checked:d(s).checked2,onChange:B},{default:l(()=>a[3]||(a[3]=[i("分类二")])),_:1},8,["checked"]),e(c,{checked:d(s).checked3,onChange:E},{default:l(()=>a[4]||(a[4]=[i("分类三")])),_:1},8,["checked"]),e(c,{checked:d(s).checked4,onChange:A},{default:l(()=>a[5]||(a[5]=[i("分类四")])),_:1},8,["checked"])]),_:1})]),_:1},8,["model"])]),_:1}),e(Q,{span:24},{default:l(()=>[e(f,{icon:d(re),type:"primary",onClick:G},{default:l(()=>a[6]||(a[6]=[i("添加")])),_:1},8,["icon"]),e(f,{icon:d(ue),type:"danger",onClick:D},{default:l(()=>a[7]||(a[7]=[i("删除")])),_:1},8,["icon"]),e(f,{type:"primary",onClick:T},{default:l(()=>a[8]||(a[8]=[i("详情")])),_:1}),e(f,{class:"hidden-xs-only",type:"primary",onClick:J},{default:l(()=>a[9]||(a[9]=[i("后台打开详情")])),_:1})]),_:1})]),_:1}),pe((R(),fe(te,{ref_key:"tableRef",ref:k,border:"",data:d(C),onSelectionChange:Y},{empty:l(()=>[e(S,{class:"vab-data-empty",description:"暂无数据"})]),default:l(()=>[e(r,{type:"selection",width:"38"}),e(r,{align:"center",label:"序号",width:"55"},{default:l(({$index:n})=>[i(y(n+1),1)]),_:1}),e(r,{align:"center",label:"序号",width:"55"},{default:l(({$index:n})=>[i(y(n+1),1)]),_:1}),e(r,{align:"center",label:"标题","min-width":"200",prop:"title"}),e(r,{align:"center",label:"作者",prop:"author"}),e(r,{align:"center",label:"评级","min-width":"200"},{default:l(({row:n})=>[e(X,{modelValue:n.rate,"onUpdate:modelValue":m=>n.rate=m,disabled:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{align:"center",label:"数量","min-width":"100",prop:"count",sortable:""}),e(r,{align:"center",label:"开关",prop:"switch"},{default:l(({row:n})=>[e(Z,{modelValue:n.switch,"onUpdate:modelValue":m=>n.switch=m},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{align:"center",label:"状态","min-width":"100"},{default:l(({row:n})=>[e(ee,{effect:"dark",type:I(n.status)},{default:l(()=>[i(y(n.status),1)]),_:2},1032,["type"])]),_:1}),e(r,{align:"center",label:"时间","min-width":"160",prop:"datetime"}),e(r,{align:"center",label:"操作",width:"215"},{default:l(({row:n})=>[e(f,{text:"",type:"primary",onClick:m=>T(n)},{default:l(()=>a[10]||(a[10]=[i("详情")])),_:2},1032,["onClick"]),e(f,{text:"",type:"primary",onClick:m=>H(n)},{default:l(()=>a[11]||(a[11]=[i("编辑")])),_:2},1032,["onClick"]),e(f,{text:"",type:"danger",onClick:m=>D(n)},{default:l(()=>a[12]||(a[12]=[i("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[oe,d(h)]]),e(ae,{"current-page":d(s).pageNo,"page-size":d(s).pageSize,total:d(w),onCurrentChange:j,onSizeChange:L},null,8,["current-page","page-size","total"]),e(le,{ref_key:"editRef",ref:g,onFetchData:p},null,512)]),_:1}),e(V,{label:"其他",name:"second"},{default:l(()=>[e(S,{class:"vab-data-empty",description:"暂无数据"})]),_:1})]),_:1},8,["modelValue"])])}}}),qe=ve(Ce,[["__scopeId","data-v-f00658e9"]]);export{qe as default};
