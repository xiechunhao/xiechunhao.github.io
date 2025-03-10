/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-03-11 00:13:46 
 */
import{d as J,a as P,J as e,P as T,U as t,A as o,W,u as i,z as X,ab as Y,Z as d,ac as Z,X as H,a9 as K,Y as w,o as C}from"./vsv-element-plus-CWjYVfvE.js";import{g as O,d as k}from"./goodsManagement-CbKxV8qa.js";import"./index-D_keMk_X.js";import"./vsv-icon-CzoHxvAi.js";import"./vsv-nprogress-D-M_H-zP.js";const Q={class:"goods-management-container auto-height-container"},se=J({name:"GoodsManagement",__name:"GoodsManagement",setup(ee){const u=ref(null),f=ref(),g=ref([]),m=ref(!0),b=ref(0),_=ref([]),r=reactive({pageNo:1,pageSize:20});onActivated(()=>{var n;(n=f.value)==null||n.doLayout()});const p=async()=>{m.value=!0;const{data:n}=await O(r);g.value=n.list,b.value=n.total,m.value=!1},D=n=>{r.pageNo=1,r.pageSize=n,p()},S=n=>{r.pageNo=n,p()},q=()=>{r.pageNo=1,p()},z=n=>{_.value=n},M=()=>{u.value.showEdit()},N=(n={})=>{u.value.showEdit(n)},y=n=>{if(n.id)$baseConfirm("您确定要删除当前项吗",null,async()=>{const{msg:a}=await k({ids:n.id});$baseMessage(a,"success","hey"),await p()});else if(_.value.length>0){const a=_.value.map(c=>c.id).join(",");$baseConfirm("您确定要删除选中项吗",null,async()=>{const{msg:c}=await k({ids:a});$baseMessage(c,"success","hey"),await p()})}else $baseMessage("您未选中任何行","warning","hey")};return onBeforeMount(()=>{p()}),(n,a)=>{const c=o("el-button"),$=o("vab-query-form-left-panel"),x=o("el-input"),v=o("el-form-item"),R=o("el-form"),V=o("vab-query-form-right-panel"),B=o("vab-query-form"),s=o("el-table-column"),h=o("el-image"),E=o("el-popover"),A=o("el-tag"),L=o("el-empty"),F=o("el-table"),G=o("vab-pagination"),U=o("goods-management-edit"),j=W("loading");return C(),P("div",Q,[e(B,null,{default:t(()=>[e($,null,{default:t(()=>[e(c,{icon:i(Y),type:"primary",onClick:M},{default:t(()=>a[2]||(a[2]=[d("添加")])),_:1},8,["icon"]),e(c,{icon:i(Z),type:"danger",onClick:y},{default:t(()=>a[3]||(a[3]=[d("删除")])),_:1},8,["icon"])]),_:1}),e(V,null,{default:t(()=>[e(R,{inline:"",model:i(r),onSubmit:a[1]||(a[1]=H(()=>{},["prevent"]))},{default:t(()=>[e(v,null,{default:t(()=>[e(x,{modelValue:i(r).name,"onUpdate:modelValue":a[0]||(a[0]=l=>i(r).name=l),clearable:"",placeholder:"请输入商品名称"},null,8,["modelValue"])]),_:1}),e(v,null,{default:t(()=>[e(c,{icon:i(K),loading:i(m),"native-type":"submit",type:"primary",onClick:q},{default:t(()=>a[4]||(a[4]=[d("查询")])),_:1},8,["icon","loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),T((C(),X(F,{ref_key:"tableRef",ref:f,border:"",data:i(g),onSelectionChange:z},{empty:t(()=>[e(L,{class:"vab-data-empty",description:"暂无数据"})]),default:t(()=>[e(s,{type:"selection",width:"38"}),e(s,{align:"center",label:"序号",width:"55"},{default:t(({$index:l})=>[d(w(l+1),1)]),_:1}),e(s,{align:"center",label:"商品ID","min-width":"180",prop:"id","show-overflow-tooltip":""}),e(s,{align:"center",label:"商品名称","min-width":"120",prop:"name"}),e(s,{align:"center",label:"商品图",prop:"image"},{default:t(({row:l})=>[e(E,{placement:"top-start"},{reference:t(()=>[e(h,{src:l.image},null,8,["src"])]),default:t(()=>[e(h,{src:l.image},null,8,["src"])]),_:2},1024)]),_:1}),e(s,{align:"center",label:"商品类型","min-width":"120",prop:"type",sortable:""}),e(s,{align:"center",label:"商品售价","min-width":"120",prop:"price",sortable:""}),e(s,{align:"center",label:"销量",prop:"sales",sortable:""}),e(s,{align:"center",label:"库存",prop:"stock",sortable:""}),e(s,{align:"center",label:"状态","min-width":"100",prop:"status",sortable:""},{default:t(({row:l})=>[e(A,{effect:"dark",type:l.status=="已上架"?"success":l.status=="待上架"?"warning":"info"},{default:t(()=>[d(w(l.status),1)]),_:2},1032,["type"])]),_:1}),e(s,{align:"center",label:"时间","min-width":"160",prop:"datetime"}),e(s,{align:"center",label:"操作",width:"150"},{default:t(({row:l})=>[e(c,{text:"",type:"primary",onClick:I=>N(l)},{default:t(()=>a[5]||(a[5]=[d("编辑")])),_:2},1032,["onClick"]),e(c,{text:"",type:"danger",onClick:I=>y(l)},{default:t(()=>a[6]||(a[6]=[d("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[j,i(m)]]),e(G,{"current-page":i(r).pageNo,"page-size":i(r).pageSize,total:i(b),onCurrentChange:S,onSizeChange:D},null,8,["current-page","page-size","total"]),e(U,{ref_key:"editRef",ref:u,onFetchData:p},null,512)])}}});export{se as default};
