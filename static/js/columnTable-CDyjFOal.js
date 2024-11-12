/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 16:06:55 
 */
import{d as Ce,N as s,a2 as Ve,o as y,b as x,T as e,$ as l,u as n,k as xe,am as De,a5 as Se,Y as w,Z as D,ag as Re,a4 as c,n as E,aj as qe,ak as Me,e as Te,M as Ne,a3 as Y}from"./vsv-element-plus-Brnt1GMz.js";import{g as $e,d as A}from"./table-_Ce2Osx-.js";import{e as Fe,f as Ue,h as ze,g as Be}from"./index-D0bnGtHt.js";import"./vsv-icon-CX0cXpax.js";import"./vsv-nprogress-Cnw-SRAI.js";const Ee={key:0},Ye={key:1},Ae={class:"custom-table-right-tools"},Ie=Ce({name:"ColumnTable",__name:"columnTable",setup(Le){const S=useRouter(),L=Fe(),{getAllRoutes:j}=storeToRefs(L),H=Ue(),{changeTabsMeta:P,addVisitedRoute:Z}=H,k=ref(null),R=ref(),f=ref(!0),q=ref([]),_=ref(!1),v=ref(!0),M=ref(0),p=ref([]),i=reactive({pageNo:1,pageSize:20}),h=ref(""),T=ref(),{exit:G,enter:I,isFullscreen:N}=useFullscreen();watch(h,a=>{var t;(t=T.value)==null||t.filter(a)});const J=(a,t)=>a?t.label.includes(a):!0,K=[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}],O=()=>{m()},Q={children:"children",label:"label"},m=async()=>{v.value=!0;const{data:a}=await $e(i);q.value=a.list,M.value=a.total,v.value=!1},W=a=>{i.pageNo=1,i.pageSize=a,m()},X=a=>{i.pageNo=a,m()},$=()=>{i.pageNo=1,m()},ee=()=>{_.value=!_.value,_.value?I():G()},te=a=>({published:"success",draft:"primary",deleted:"danger"})[a],le=()=>{f.value=!f.value},ae=a=>{p.value=a},ne=()=>{k.value.showEdit()},oe=(a={})=>{k.value.showEdit(a)},F=a=>{if(a.id)$baseConfirm("您确定要删除当前项吗",null,async()=>{const{msg:t}=await A({ids:a.id});$baseMessage(t,"success","hey"),await m()});else if(p.value.length>0){const t=p.value.map(d=>d.id).join(",");$baseConfirm("您确定要删除选中项吗",null,async()=>{const{msg:d}=await A({ids:t});$baseMessage(d,"success","hey"),await m()})}else $baseMessage("您未选中任何行","warning","hey")},se=async()=>{if(p.value.length>0)for(let a=0;a<p.value.length;a++){const t=ze(j.value,"/vab/table/defaultTableDetail"),d=Be({...t.at(-1),query:p.value[a]});d&&(await Z(d),await P({title:"详情页",meta:{title:`${d.query.title} 详情页`}}))}else $baseMessage("请至少选择一行进行详情页跳转","warning","hey")},U=a=>{a.id?S.push({path:"/vab/table/defaultTableDetail",query:{...a,timestamp:Date.now()}}):p.value.length===1?S.push({path:"/vab/table/defaultTableDetail",query:{...p.value[0],timestamp:Date.now()}}):$baseMessage("请选择一行进行详情页跳转","warning","hey")};return watch(N,()=>{N.value?_.value=!0:_.value=!1},{immediate:!0}),onActivated(()=>{var a;(a=R.value)==null||a.doLayout()}),onBeforeMount(()=>{m()}),(a,t)=>{const d=s("el-input"),z=s("vab-card"),B=s("el-col"),g=s("el-form-item"),ie=s("el-date-picker"),C=s("el-option"),de=s("el-select"),r=s("el-button"),V=s("vab-icon"),re=s("el-form"),ue=s("vab-query-form-top-panel"),ce=s("vab-query-form-left-panel"),pe=s("vab-query-form-right-panel"),me=s("vab-query-form"),u=s("el-table-column"),fe=s("el-rate"),_e=s("el-switch"),be=s("el-tag"),ge=s("el-empty"),ve=s("el-table"),he=s("vab-pagination"),ye=s("el-row"),we=s("default-table-edit"),ke=Ve("loading");return y(),x("div",{class:E(["column-table-container no-background-container auto-height-container",{"fullscreen-container":n(_)}])},[e(ye,{gutter:20},{default:l(()=>[e(B,{lg:5,md:24,sm:24,xl:4,xs:24},{default:l(()=>[e(z,{class:"auto-height-card"},{default:l(()=>[e(d,{modelValue:n(h),"onUpdate:modelValue":t[0]||(t[0]=o=>xe(h)?h.value=o:null),placeholder:"请输入查询条件",style:{"margin-bottom":"10px"}},null,8,["modelValue"]),e(n(De),{ref_key:"treeRef",ref:T,data:K,"default-expand-all":"","filter-node-method":J,props:Q,onNodeClick:O},null,512)]),_:1})]),_:1}),e(B,{lg:19,md:24,sm:24,xl:20,xs:24},{default:l(()=>[e(z,{class:"auto-height-card"},{default:l(()=>[e(me,null,{default:l(()=>[e(ue,null,{default:l(()=>[e(re,{inline:"",model:n(i),onSubmit:t[5]||(t[5]=Se(()=>{},["prevent"]))},{default:l(()=>[e(g,{label:"标题"},{default:l(()=>[e(d,{modelValue:n(i).title,"onUpdate:modelValue":t[1]||(t[1]=o=>n(i).title=o),clearable:"",placeholder:"请输入标题"},null,8,["modelValue"])]),_:1}),w(e(g,{label:"作者"},{default:l(()=>[e(d,{modelValue:n(i).author,"onUpdate:modelValue":t[2]||(t[2]=o=>n(i).author=o),clearable:"",placeholder:"请输入作者"},null,8,["modelValue"])]),_:1},512),[[D,!n(f)]]),w(e(g,{label:"时间"},{default:l(()=>[e(ie,{modelValue:n(i).datetime,"onUpdate:modelValue":t[3]||(t[3]=o=>n(i).datetime=o),format:"YYYY/MM/DD HH:mm:ss",placeholder:"请选择时间",type:"datetime"},null,8,["modelValue"])]),_:1},512),[[D,!n(f)]]),w(e(g,{label:"状态"},{default:l(()=>[e(de,{modelValue:n(i).status,"onUpdate:modelValue":t[4]||(t[4]=o=>n(i).status=o),placeholder:"请选择状态"},{default:l(()=>[e(C,{label:"success",value:"published"}),e(C,{label:"primary",value:"draft"}),e(C,{label:"danger",value:"deleted"})]),_:1},8,["modelValue"])]),_:1},512),[[D,!n(f)]]),e(g,null,{default:l(()=>[e(r,{icon:n(Re),loading:n(v),"native-type":"submit",type:"primary",onClick:$},{default:l(()=>t[6]||(t[6]=[c("查询")])),_:1},8,["icon","loading"]),e(r,{class:"hidden-xs-only",text:"",type:"primary",onClick:le},{default:l(()=>[n(f)?(y(),x("span",Ee,"展开")):(y(),x("span",Ye,"合并")),e(V,{class:E(["vab-dropdown",{"vab-dropdown-active":n(f)}]),icon:"arrow-up-s-line"},null,8,["class"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(ce,{span:20},{default:l(()=>[e(r,{icon:n(qe),type:"primary",onClick:ne},{default:l(()=>t[7]||(t[7]=[c("添加")])),_:1},8,["icon"]),e(r,{icon:n(Me),type:"danger",onClick:F},{default:l(()=>t[8]||(t[8]=[c("删除")])),_:1},8,["icon"]),e(r,{type:"primary",onClick:U},{default:l(()=>t[9]||(t[9]=[c("详情")])),_:1}),e(r,{class:"hidden-xs-only",type:"primary",onClick:se},{default:l(()=>t[10]||(t[10]=[c("后台打开详情")])),_:1})]),_:1}),e(pe,{span:4},{default:l(()=>[Te("div",Ae,[e(r,{onClick:$},{default:l(()=>[e(V,{icon:"refresh-line"})]),_:1}),e(r,{onClick:ee},{default:l(()=>[e(V,{icon:n(_)?"fullscreen-exit-fill":"fullscreen-fill"},null,8,["icon"])]),_:1})])]),_:1})]),_:1}),w((y(),Ne(ve,{ref_key:"tableRef",ref:R,border:"",data:n(q),onSelectionChange:ae},{empty:l(()=>[e(ge,{class:"vab-data-empty",description:"暂无数据"})]),default:l(()=>[e(u,{type:"selection",width:"38"}),e(u,{align:"center",label:"序号",width:"55"},{default:l(({$index:o})=>[c(Y(o+1),1)]),_:1}),e(u,{align:"center",label:"标题","min-width":"200",prop:"title"}),e(u,{align:"center",label:"作者",prop:"author"}),e(u,{align:"center",label:"评级","min-width":"200"},{default:l(({row:o})=>[e(fe,{modelValue:o.rate,"onUpdate:modelValue":b=>o.rate=b,disabled:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{align:"center",label:"数量","min-width":"100",prop:"count",sortable:""}),e(u,{align:"center",label:"开关",prop:"switch"},{default:l(({row:o})=>[e(_e,{modelValue:o.switch,"onUpdate:modelValue":b=>o.switch=b},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{align:"center",label:"状态","min-width":"100"},{default:l(({row:o})=>[e(be,{effect:"dark",type:te(o.status)},{default:l(()=>[c(Y(o.status),1)]),_:2},1032,["type"])]),_:1}),e(u,{align:"center",label:"时间","min-width":"160",prop:"datetime"}),e(u,{align:"center",label:"操作",width:"215"},{default:l(({row:o})=>[e(r,{text:"",type:"primary",onClick:b=>U(o)},{default:l(()=>t[11]||(t[11]=[c("详情")])),_:2},1032,["onClick"]),e(r,{text:"",type:"primary",onClick:b=>oe(o)},{default:l(()=>t[12]||(t[12]=[c("编辑")])),_:2},1032,["onClick"]),e(r,{text:"",type:"danger",onClick:b=>F(o)},{default:l(()=>t[13]||(t[13]=[c("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[ke,n(v)]]),e(he,{"current-page":n(i).pageNo,"page-size":n(i).pageSize,total:n(M),onCurrentChange:X,onSizeChange:W},null,8,["current-page","page-size","total"])]),_:1})]),_:1})]),_:1}),e(we,{ref_key:"editRef",ref:k,onFetchData:m},null,512)],2)}}});export{Ie as default};
