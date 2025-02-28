/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{d as T,b as U,L as e,Q as X,V as t,D as o,X as Y,u as i,C as Z,o as w,a7 as H,_ as d,ac as J,Y as K,a0 as O,Z as C}from"./vsv-element-plus-DQNbQgVr.js";import{g as P,d as k}from"./goodsManagement-BygNP3dO.js";import"./index-DXRDwnmL.js";import"./vsv-icon-BSoeDgwL.js";import"./vsv-nprogress-BCb6Y0ID.js";const W={class:"goods-management-container auto-height-container"},se=T({name:"GoodsManagement",__name:"GoodsManagement",setup(ee){const u=ref(null),f=ref(),g=ref([]),m=ref(!0),b=ref(0),_=ref([]),r=reactive({pageNo:1,pageSize:20});onActivated(()=>{var n;(n=f.value)==null||n.doLayout()});const p=async()=>{m.value=!0;const{data:n}=await P(r);g.value=n.list,b.value=n.total,m.value=!1},D=n=>{r.pageNo=1,r.pageSize=n,p()},S=n=>{r.pageNo=n,p()},q=()=>{r.pageNo=1,p()},z=n=>{_.value=n},M=()=>{u.value.showEdit()},N=(n={})=>{u.value.showEdit(n)},y=n=>{if(n.id)$baseConfirm("您确定要删除当前项吗",null,async()=>{const{msg:a}=await k({ids:n.id});$baseMessage(a,"success","hey"),await p()});else if(_.value.length>0){const a=_.value.map(c=>c.id).join(",");$baseConfirm("您确定要删除选中项吗",null,async()=>{const{msg:c}=await k({ids:a});$baseMessage(c,"success","hey"),await p()})}else $baseMessage("您未选中任何行","warning","hey")};return onBeforeMount(()=>{p()}),(n,a)=>{const c=o("el-button"),$=o("vab-query-form-left-panel"),x=o("el-input"),v=o("el-form-item"),R=o("el-form"),V=o("vab-query-form-right-panel"),B=o("vab-query-form"),s=o("el-table-column"),h=o("el-image"),E=o("el-popover"),L=o("el-tag"),A=o("el-empty"),F=o("el-table"),G=o("vab-pagination"),j=o("goods-management-edit"),I=Y("loading");return w(),U("div",W,[e(B,null,{default:t(()=>[e($,null,{default:t(()=>[e(c,{icon:i(H),type:"primary",onClick:M},{default:t(()=>a[2]||(a[2]=[d("添加")])),_:1},8,["icon"]),e(c,{icon:i(J),type:"danger",onClick:y},{default:t(()=>a[3]||(a[3]=[d("删除")])),_:1},8,["icon"])]),_:1}),e(V,null,{default:t(()=>[e(R,{inline:"",model:i(r),onSubmit:a[1]||(a[1]=K(()=>{},["prevent"]))},{default:t(()=>[e(v,null,{default:t(()=>[e(x,{modelValue:i(r).name,"onUpdate:modelValue":a[0]||(a[0]=l=>i(r).name=l),clearable:"",placeholder:"请输入商品名称"},null,8,["modelValue"])]),_:1}),e(v,null,{default:t(()=>[e(c,{icon:i(O),loading:i(m),"native-type":"submit",type:"primary",onClick:q},{default:t(()=>a[4]||(a[4]=[d("查询")])),_:1},8,["icon","loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),X((w(),Z(F,{ref_key:"tableRef",ref:f,border:"",data:i(g),onSelectionChange:z},{empty:t(()=>[e(A,{class:"vab-data-empty",description:"暂无数据"})]),default:t(()=>[e(s,{type:"selection",width:"38"}),e(s,{align:"center",label:"序号",width:"55"},{default:t(({$index:l})=>[d(C(l+1),1)]),_:1}),e(s,{align:"center",label:"商品ID","min-width":"180",prop:"id","show-overflow-tooltip":""}),e(s,{align:"center",label:"商品名称","min-width":"120",prop:"name"}),e(s,{align:"center",label:"商品图",prop:"image"},{default:t(({row:l})=>[e(E,{placement:"top-start"},{reference:t(()=>[e(h,{src:l.image},null,8,["src"])]),default:t(()=>[e(h,{src:l.image},null,8,["src"])]),_:2},1024)]),_:1}),e(s,{align:"center",label:"商品类型","min-width":"120",prop:"type",sortable:""}),e(s,{align:"center",label:"商品售价","min-width":"120",prop:"price",sortable:""}),e(s,{align:"center",label:"销量",prop:"sales",sortable:""}),e(s,{align:"center",label:"库存",prop:"stock",sortable:""}),e(s,{align:"center",label:"状态","min-width":"100",prop:"status",sortable:""},{default:t(({row:l})=>[e(L,{effect:"dark",type:l.status=="已上架"?"success":l.status=="待上架"?"warning":"info"},{default:t(()=>[d(C(l.status),1)]),_:2},1032,["type"])]),_:1}),e(s,{align:"center",label:"时间","min-width":"160",prop:"datetime"}),e(s,{align:"center",label:"操作",width:"150"},{default:t(({row:l})=>[e(c,{text:"",type:"primary",onClick:Q=>N(l)},{default:t(()=>a[5]||(a[5]=[d("编辑")])),_:2},1032,["onClick"]),e(c,{text:"",type:"danger",onClick:Q=>y(l)},{default:t(()=>a[6]||(a[6]=[d("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[I,i(m)]]),e(G,{"current-page":i(r).pageNo,"page-size":i(r).pageSize,total:i(b),onCurrentChange:S,onSizeChange:D},null,8,["current-page","page-size","total"]),e(j,{ref_key:"editRef",ref:u,onFetchData:p},null,512)])}}});export{se as default};
