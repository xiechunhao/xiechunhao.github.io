/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 13:58:02 
 */
import{_ as we}from"./DefaultTableEdit.vue_vue_type_script_setup_true_lang-Dj1DE930.js";import{_ as ke}from"./index.vue_vue_type_script_setup_true_lang-CAvY8Qbf.js";import{_ as Ce}from"./index-Qf4Lmxow.js";import{_ as Ve}from"./VabQueryFormLeftPanel.vue_vue_type_script_setup_true_lang-CdA2oT4X.js";import{_ as Ee}from"./VabQueryFormTopPanel-Hok6JHOx.js";import{d as Se,r as m,f as De,w as xe,O as Re,a5 as Te,Q as $e,a as w,o as y,Y as e,T as k,S as a,ap as qe,aC as Me,u as l,aq as ze,aM as Ue,ae as R,bp as Ne,at as Fe,au as Be,a7 as Le,aS as Ye,a6 as i,n as Ie,bq as Ae,br as He,V as Oe,R as F,aP as Pe,X as B,bs as je,an as Je,aH as Qe,ag as Xe,Z as Ze,bt as Ge,ai as Ke,ah as We,bu as et,bl as tt,i as at,aJ as lt,aR as nt}from"./vsv-element-plus-CcCXTk6v.js";import{g as ot,d as L}from"./table-Dg-ws0Iu.js";import{b as st,w as it,s as Y,x as dt,a as ut,$ as I,f as v,y as rt,z as pt}from"./index-DuUxtc1j.js";import"./vsv-icon-1Y3OapYK.js";import"./vsv-nprogress-D-M_H-zP.js";const mt={class:"comprehensive-table-container auto-height-container"},ct={key:0},_t={key:1},ft={key:0},Dt=Se({name:"DefaultTable",__name:"defaultTable",setup(bt){const T=st(),A=it(),{getAllRoutes:H}=Y(A),O=dt(),{changeTabsMeta:P,addVisitedRoute:j}=O,C=m(null),$=m(),_=m(!0),q=m([]),h=m(!0),M=m(0),c=m([]),s=De({pageNo:1,pageSize:20}),b=m(!1),J=ut(),{device:z}=Y(J),U=m(!1),f=async()=>{h.value=!0;const{data:o}=await ot(s);q.value=o.list,M.value=o.total,h.value=!1},Q=o=>{s.pageNo=1,s.pageSize=o,f()},X=o=>{s.pageNo=o,f()},Z=()=>{s.pageNo=1,f()},G=o=>({published:"success",draft:"primary",deleted:"danger"})[o],K=()=>{_.value=!_.value},W=o=>{c.value=o},ee=()=>{C.value.showEdit()},N=(o={})=>{C.value.showEdit(o)},V=o=>{if(o.id)I("您确定要删除当前项吗",null,async()=>{const{msg:t}=await L({ids:o.id});v(t,"success","hey"),await f()});else if(c.value.length>0){const t=c.value.map(d=>d.id).join(",");I("您确定要删除选中项吗",null,async()=>{const{msg:d}=await L({ids:t});v(d,"success","hey"),await f()})}else v("您未选中任何行","warning","hey")},te=async()=>{if(c.value.length>0)for(let o=0;o<c.value.length;o++){const t=rt(H.value,"/vab/table/defaultTableDetail"),d=pt({...t.at(-1),query:c.value[o]});d&&(await j(d),await P({title:"详情页",meta:{title:`${d.query.title} 详情页`}}))}else v("请至少选择一行进行详情页跳转","warning","hey")},E=o=>{o.id?T.push({path:"/vab/table/defaultTableDetail",query:{...o,timestamp:Date.now()}}):c.value.length===1?T.push({path:"/vab/table/defaultTableDetail",query:{...c.value[0],timestamp:Date.now()}}):v("请选择一行进行详情页跳转","warning","hey")};return xe(()=>z.value,()=>{z.value==="mobile"&&(b.value=!0,U.value="right")},{immediate:!0}),Re(()=>{var o;(o=$.value)==null||o.doLayout()}),Te(()=>{f()}),(o,t)=>{const d=Ue,g=ze,ae=Ne,S=Be,le=Fe,u=Le,ne=$e("vab-icon"),oe=qe,se=Ee,ie=Ve,de=Ce,r=Pe,ue=je,re=Je,pe=Qe,me=tt,ce=Ze,D=et,x=We,_e=Ke,fe=Xe,be=lt,ye=nt,ge=ke,ve=we,he=Oe;return y(),w("div",mt,[e(de,null,{default:a(()=>[e(se,null,{default:a(()=>[e(oe,{inline:"",model:l(s),onSubmit:t[4]||(t[4]=Me(()=>{},["prevent"]))},{default:a(()=>[e(g,{label:"标题"},{default:a(()=>[e(d,{modelValue:l(s).title,"onUpdate:modelValue":t[0]||(t[0]=n=>l(s).title=n),clearable:"",placeholder:"请输入标题"},null,8,["modelValue"])]),_:1}),k(e(g,{label:"作者"},{default:a(()=>[e(d,{modelValue:l(s).author,"onUpdate:modelValue":t[1]||(t[1]=n=>l(s).author=n),clearable:"",placeholder:"请输入作者"},null,8,["modelValue"])]),_:1},512),[[R,!l(_)]]),k(e(g,{label:"时间"},{default:a(()=>[e(ae,{modelValue:l(s).datetime,"onUpdate:modelValue":t[2]||(t[2]=n=>l(s).datetime=n),format:"YYYY/MM/DD HH:mm:ss",placeholder:"请选择时间",type:"datetime"},null,8,["modelValue"])]),_:1},512),[[R,!l(_)]]),k(e(g,{label:"状态"},{default:a(()=>[e(le,{modelValue:l(s).status,"onUpdate:modelValue":t[3]||(t[3]=n=>l(s).status=n),placeholder:"请选择状态"},{default:a(()=>[e(S,{label:"success",value:"published"}),e(S,{label:"primary",value:"draft"}),e(S,{label:"danger",value:"deleted"})]),_:1},8,["modelValue"])]),_:1},512),[[R,!l(_)]]),e(g,null,{default:a(()=>[e(u,{icon:l(Ye),loading:l(h),"native-type":"submit",type:"primary",onClick:Z},{default:a(()=>t[6]||(t[6]=[i("查询")])),_:1},8,["icon","loading"]),e(u,{class:"hidden-xs-only",text:"",type:"primary",onClick:K},{default:a(()=>[l(_)?(y(),w("span",ct,"展开")):(y(),w("span",_t,"合并")),e(ne,{class:Ie(["vab-dropdown",{"vab-dropdown-active":l(_)}]),icon:"arrow-up-s-line"},null,8,["class"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(ie,{span:24},{default:a(()=>[e(u,{icon:l(Ae),type:"primary",onClick:ee},{default:a(()=>t[7]||(t[7]=[i("添加")])),_:1},8,["icon"]),e(u,{icon:l(He),type:"danger",onClick:V},{default:a(()=>t[8]||(t[8]=[i("删除")])),_:1},8,["icon"]),e(u,{type:"primary",onClick:E},{default:a(()=>t[9]||(t[9]=[i("详情")])),_:1}),e(u,{class:"hidden-xs-only",type:"primary",onClick:te},{default:a(()=>t[10]||(t[10]=[i("后台打开详情")])),_:1})]),_:1})]),_:1}),k((y(),F(ye,{ref_key:"tableRef",ref:$,border:"",data:l(q),onSelectionChange:W},{empty:a(()=>[e(be,{class:"vab-data-empty",description:"暂无数据"})]),default:a(()=>[e(r,{type:"selection",width:"38"}),e(r,{align:"center",label:"序号",width:"55"},{default:a(({$index:n})=>[i(B(n+1),1)]),_:1}),e(r,{align:"center",label:"标题","min-width":"200",prop:"title"}),e(r,{align:"center",label:"作者",prop:"author"}),e(r,{align:"center",label:"评级","min-width":"200"},{default:a(({row:n})=>[e(ue,{modelValue:n.rate,"onUpdate:modelValue":p=>n.rate=p,disabled:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{align:"center",label:"数量","min-width":"100",prop:"count",sortable:""}),e(r,{align:"center",label:"开关",prop:"switch"},{default:a(({row:n})=>[e(re,{modelValue:n.switch,"onUpdate:modelValue":p=>n.switch=p},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{align:"center",label:"状态","min-width":"100"},{default:a(({row:n})=>[e(pe,{effect:"dark",type:G(n.status)},{default:a(()=>[i(B(n.status),1)]),_:2},1032,["type"])]),_:1}),e(r,{align:"center",label:"时间","min-width":"160",prop:"datetime"}),e(r,{align:"center",fixed:l(U),label:"操作",width:l(b)?120:215},{header:a(()=>[e(me,{modelValue:l(b),"onUpdate:modelValue":t[5]||(t[5]=n=>at(b)?b.value=n:null),label:"折叠操作列","true-value":"right"},null,8,["modelValue"])]),default:a(({row:n})=>[l(b)?(y(),F(fe,{key:1},{dropdown:a(()=>[e(_e,null,{default:a(()=>[e(x,{onClick:p=>E(n)},{default:a(()=>[e(D,{type:"primary",underline:!1},{default:a(()=>t[15]||(t[15]=[i("详情")])),_:1})]),_:2},1032,["onClick"]),e(x,{onClick:p=>N(n)},{default:a(()=>[e(D,{type:"primary",underline:!1},{default:a(()=>t[16]||(t[16]=[i("编辑")])),_:1})]),_:2},1032,["onClick"]),e(x,{onClick:p=>V(n)},{default:a(()=>[e(D,{type:"danger",underline:!1},{default:a(()=>t[17]||(t[17]=[i("删除")])),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),default:a(()=>[e(u,{text:"",type:"primary"},{default:a(()=>[t[14]||(t[14]=i(" 操作 ")),e(ce,{class:"el-icon--right"},{default:a(()=>[e(l(Ge))]),_:1})]),_:1})]),_:2},1024)):(y(),w("div",ft,[e(u,{text:"",type:"primary",onClick:p=>E(n)},{default:a(()=>t[11]||(t[11]=[i("详情")])),_:2},1032,["onClick"]),e(u,{text:"",type:"primary",onClick:p=>N(n)},{default:a(()=>t[12]||(t[12]=[i("编辑")])),_:2},1032,["onClick"]),e(u,{text:"",type:"danger",onClick:p=>V(n)},{default:a(()=>t[13]||(t[13]=[i("删除")])),_:2},1032,["onClick"])]))]),_:1},8,["fixed","width"])]),_:1},8,["data"])),[[he,l(h)]]),e(ge,{"current-page":l(s).pageNo,"page-size":l(s).pageSize,total:l(M),onCurrentChange:X,onSizeChange:Q},null,8,["current-page","page-size","total"]),e(ve,{ref_key:"editRef",ref:C,onFetchData:f},null,512)])}}});export{Dt as default};
