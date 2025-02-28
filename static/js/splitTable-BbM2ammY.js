/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{d as be,b as D,L as e,V as a,D as s,o as y,Q as v,Y as ge,u as o,R,a0 as he,_ as r,n as ye,a7 as ve,ac as we,X as Ce,C as ke,Z as S,G as Ve,ai as De}from"./vsv-element-plus-DQNbQgVr.js";import{g as Re,d as z}from"./table-4tHDlJ8_.js";import{m as Se,k as xe,J as Te,K as Me,_ as qe}from"./index-DXRDwnmL.js";import"./vsv-icon-BSoeDgwL.js";import"./vsv-nprogress-BCb6Y0ID.js";const $e={class:"split-table-container no-background-container auto-height-container"},Ne={key:0},Ue={key:1},ze=be({name:"SplitTable",__name:"splitTable",setup(Ee){const x=useRouter(),E=Se(),{getAllRoutes:Y}=storeToRefs(E),B=xe(),{changeTabsMeta:F,addVisitedRoute:L}=B,w=ref(null),T=ref(),_=ref(!0),M=ref([]),g=ref(!0),q=ref(0),p=ref([]),i=reactive({pageNo:1,pageSize:20}),h=ref(""),$=ref();watch(h,l=>{var t;(t=$.value)==null||t.filter(l)});const A=(l,t)=>l?t.label.includes(l):!0,H=[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}],j=()=>{m()},G={children:"children",label:"label"},m=async()=>{g.value=!0;const{data:l}=await Re(i);M.value=l.list,q.value=l.total,g.value=!1},I=l=>{i.pageNo=1,i.pageSize=l,m()},J=l=>{i.pageNo=l,m()},K=()=>{i.pageNo=1,m()},P=l=>({published:"success",draft:"primary",deleted:"danger"})[l],Q=()=>{_.value=!_.value},X=l=>{p.value=l},Z=()=>{w.value.showEdit()},O=(l={})=>{w.value.showEdit(l)},N=l=>{if(l.id)$baseConfirm("您确定要删除当前项吗",null,async()=>{const{msg:t}=await z({ids:l.id});$baseMessage(t,"success","hey"),await m()});else if(p.value.length>0){const t=p.value.map(u=>u.id).join(",");$baseConfirm("您确定要删除选中项吗",null,async()=>{const{msg:u}=await z({ids:t});$baseMessage(u,"success","hey"),await m()})}else $baseMessage("您未选中任何行","warning","hey")},W=async()=>{if(p.value.length>0)for(let l=0;l<p.value.length;l++){const t=Te(Y.value,"/vab/table/defaultTableDetail"),u=Me({...t.at(-1),query:p.value[l]});u&&(await L(u),await F({title:"详情页",meta:{title:`${u.query.title} 详情页`}}))}else $baseMessage("请至少选择一行进行详情页跳转","warning","hey")},U=l=>{l.id?x.push({path:"/vab/table/defaultTableDetail",query:{...l,timestamp:Date.now()}}):p.value.length===1?x.push({path:"/vab/table/defaultTableDetail",query:{...p.value[0],timestamp:Date.now()}}):$baseMessage("请选择一行进行详情页跳转","warning","hey")};return onActivated(()=>{var l;(l=T.value)==null||l.doLayout()}),onBeforeMount(()=>{m()}),(l,t)=>{const u=s("vab-alert"),C=s("vab-card"),k=s("el-input"),b=s("el-form-item"),ee=s("el-date-picker"),V=s("el-option"),te=s("el-select"),c=s("el-button"),ae=s("vab-icon"),le=s("el-form"),ne=s("vab-query-form-top-panel"),oe=s("vab-query-form-left-panel"),se=s("vab-query-form"),d=s("el-table-column"),ie=s("el-rate"),de=s("el-switch"),re=s("el-tag"),ue=s("el-empty"),ce=s("el-table"),pe=s("vab-pagination"),me=s("vab-pane-split"),_e=s("default-table-edit"),fe=Ce("loading");return y(),D("div",$e,[e(C,{class:"auto-height-card hidden-sm-and-up"},{default:a(()=>[e(u,{title:"手机端不支持分割表格演示",type:"warning"})]),_:1}),e(me,{class:"hidden-xs-only",ratio:"4/20"},{one:a(()=>[e(C,{class:"auto-height-card"},{default:a(()=>[e(k,{modelValue:o(h),"onUpdate:modelValue":t[0]||(t[0]=n=>Ve(h)?h.value=n:null),placeholder:"请输入查询条件",style:{"margin-bottom":"10px"}},null,8,["modelValue"]),e(o(De),{ref_key:"treeRef",ref:$,data:H,"default-expand-all":"","filter-node-method":A,props:G,onNodeClick:j},null,512)]),_:1})]),two:a(()=>[e(C,{class:"auto-height-card"},{default:a(()=>[e(u,{title:"长按竖线左右拖拽可重新分割面板大小"}),e(se,null,{default:a(()=>[e(ne,null,{default:a(()=>[e(le,{inline:"",model:o(i),onSubmit:t[5]||(t[5]=ge(()=>{},["prevent"]))},{default:a(()=>[e(b,{label:"标题"},{default:a(()=>[e(k,{modelValue:o(i).title,"onUpdate:modelValue":t[1]||(t[1]=n=>o(i).title=n),clearable:"",placeholder:"请输入标题"},null,8,["modelValue"])]),_:1}),v(e(b,{label:"作者"},{default:a(()=>[e(k,{modelValue:o(i).author,"onUpdate:modelValue":t[2]||(t[2]=n=>o(i).author=n),clearable:"",placeholder:"请输入作者"},null,8,["modelValue"])]),_:1},512),[[R,!o(_)]]),v(e(b,{label:"时间"},{default:a(()=>[e(ee,{modelValue:o(i).datetime,"onUpdate:modelValue":t[3]||(t[3]=n=>o(i).datetime=n),format:"YYYY/MM/DD HH:mm:ss",placeholder:"请选择时间",type:"datetime"},null,8,["modelValue"])]),_:1},512),[[R,!o(_)]]),v(e(b,{label:"状态"},{default:a(()=>[e(te,{modelValue:o(i).status,"onUpdate:modelValue":t[4]||(t[4]=n=>o(i).status=n),placeholder:"请选择状态"},{default:a(()=>[e(V,{label:"success",value:"published"}),e(V,{label:"primary",value:"draft"}),e(V,{label:"danger",value:"deleted"})]),_:1},8,["modelValue"])]),_:1},512),[[R,!o(_)]]),e(b,null,{default:a(()=>[e(c,{icon:o(he),loading:o(g),"native-type":"submit",type:"primary",onClick:K},{default:a(()=>t[6]||(t[6]=[r("查询")])),_:1},8,["icon","loading"]),e(c,{class:"hidden-xs-only",text:"",type:"primary",onClick:Q},{default:a(()=>[o(_)?(y(),D("span",Ne,"展开")):(y(),D("span",Ue,"合并")),e(ae,{class:ye(["vab-dropdown",{"vab-dropdown-active":o(_)}]),icon:"arrow-up-s-line"},null,8,["class"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(oe,{span:24},{default:a(()=>[e(c,{icon:o(ve),type:"primary",onClick:Z},{default:a(()=>t[7]||(t[7]=[r("添加")])),_:1},8,["icon"]),e(c,{icon:o(we),type:"danger",onClick:N},{default:a(()=>t[8]||(t[8]=[r("删除")])),_:1},8,["icon"]),e(c,{type:"primary",onClick:U},{default:a(()=>t[9]||(t[9]=[r("详情")])),_:1}),e(c,{class:"hidden-xs-only",type:"primary",onClick:W},{default:a(()=>t[10]||(t[10]=[r("后台打开详情")])),_:1})]),_:1})]),_:1}),v((y(),ke(ce,{ref_key:"tableRef",ref:T,border:"",data:o(M),onSelectionChange:X},{empty:a(()=>[e(ue,{class:"vab-data-empty",description:"暂无数据"})]),default:a(()=>[e(d,{type:"selection",width:"38"}),e(d,{align:"center",label:"序号",width:"55"},{default:a(({$index:n})=>[r(S(n+1),1)]),_:1}),e(d,{align:"center",label:"序号",width:"55"},{default:a(({$index:n})=>[r(S(n+1),1)]),_:1}),e(d,{align:"center",label:"标题","min-width":"200",prop:"title"}),e(d,{align:"center",label:"作者",prop:"author"}),e(d,{align:"center",label:"评级","min-width":"200"},{default:a(({row:n})=>[e(ie,{modelValue:n.rate,"onUpdate:modelValue":f=>n.rate=f,disabled:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(d,{align:"center",label:"数量","min-width":"100",prop:"count",sortable:""}),e(d,{align:"center",label:"开关",prop:"switch"},{default:a(({row:n})=>[e(de,{modelValue:n.switch,"onUpdate:modelValue":f=>n.switch=f},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(d,{align:"center",label:"状态","min-width":"100"},{default:a(({row:n})=>[e(re,{effect:"dark",type:P(n.status)},{default:a(()=>[r(S(n.status),1)]),_:2},1032,["type"])]),_:1}),e(d,{align:"center",label:"时间","min-width":"160",prop:"datetime"}),e(d,{align:"center",label:"操作",width:"215"},{default:a(({row:n})=>[e(c,{text:"",type:"primary",onClick:f=>U(n)},{default:a(()=>t[11]||(t[11]=[r("详情")])),_:2},1032,["onClick"]),e(c,{text:"",type:"primary",onClick:f=>O(n)},{default:a(()=>t[12]||(t[12]=[r("编辑")])),_:2},1032,["onClick"]),e(c,{text:"",type:"danger",onClick:f=>N(n)},{default:a(()=>t[13]||(t[13]=[r("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[fe,o(g)]]),e(pe,{"current-page":o(i).pageNo,"page-size":o(i).pageSize,total:o(q),onCurrentChange:J,onSizeChange:I},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),e(_e,{ref_key:"editRef",ref:w,onFetchData:m},null,512)])}}}),He=qe(ze,[["__scopeId","data-v-c0ae2183"]]);export{He as default};
