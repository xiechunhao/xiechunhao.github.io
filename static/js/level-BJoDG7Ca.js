/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2025-02-28 11:53:44 
 */
import{g as Q,d as W}from"./trade-DgEmw_aG.js";import{d as X,b as Y,a5 as Z,L as t,C as h,S as ee,V as l,D as a,u as i,G as z,e as o,_ as r,o as N}from"./vsv-element-plus-DQNbQgVr.js";import"./index-DXRDwnmL.js";import"./vsv-icon-BSoeDgwL.js";import"./vsv-nprogress-BCb6Y0ID.js";const te={class:"trade-container"},le={style:{"margin-bottom":"20px"}},oe={style:{"margin-bottom":"20px"}},ne={style:{"margin-bottom":"20px"}},ae={style:{"margin-bottom":"20px"}},se={class:"dialog-footer"},ie={style:{width:"100%"}},de={class:"rowC mb10"},ce=X({name:"Trade",__name:"level",setup(re){const U=ref();ref(!0);const y=ref([]),_=ref(!0),x=ref(0),$=ref([]),d=reactive({pageNo:1,pageSize:20}),g=ref(!1),c=ref(!1),u=ref(!1),V=ref("add"),f=async()=>{_.value=!0;const{data:s}=await Q(d);y.value=s.list,x.value=s.total,_.value=!1},B=s=>{d.pageNo=1,d.pageSize=s,f()},C=(s,e)=>{u.value=!0,V.value=s},I=s=>{d.pageNo=s,f()},R=s=>{$.value=s},D=s=>{s.id&&$baseConfirm("你确定要删除当前商品吗，被删除商品将进入回收站，如需彻底删除请在回收站操作！",null,async()=>{const{msg:e}=await W({ids:s.id});$baseMessage(e,"success","hey"),await f()})};return onActivated(()=>{var s;(s=U.value)==null||s.doLayout()}),onBeforeMount(()=>{f()}),(s,e)=>{const p=a("el-button"),m=a("el-table-column"),w=a("el-image"),T=a("el-popover"),L=a("el-switch"),O=a("el-empty"),j=a("el-table"),A=a("el-card"),k=a("el-input"),F=a("vab-icon"),J=a("el-scrollbar"),M=a("vab-dialog"),q=a("el-avatar"),S=a("el-text"),v=a("el-col"),E=a("el-row"),G=a("User-details"),H=a("el-drawer"),K=a("upload-image-list"),P=a("vab-pagination");return N(),Y("div",te,[e[28]||(e[28]=Z('<div style="padding:10px;font-size:12px;background:#e7faf0;border:1px solid #13ce66;" class="mb20"><div class="mb15" style="color:#13ce66;"> 1、平台启用前请先定义好级别，日后最好不要再添加新的级别，如果需要增加新级别只能是比原有级别更低的级别； </div><div class="mb15" style="color:#13ce66;">2、系统级别越多，定价工作越复杂，会增加你的日后工作量，所以级别适当适量即可；</div><div class="mb15" style="color:#13ce66;">3、如果在商品已有定价后再添加的级别，必须重新修改定价模板，设置新添加的级别差价；</div><div class="mb15" style="color:#13ce66;">4、强烈建议大家将每个体系的级别控制在2-4个，添加级别后无法删除，请谨慎添加。</div><div class="mb15" style="color:#13ce66;">5、会员费率为会员充值和支付订单时的手续费。</div><div style="color:red;"> 6、每个体系的级别建立请按高级--&gt;低级的顺序添加，将最低级设置为注册后默认级别，比如:最高级-&gt;中间级-&gt;最低级； </div></div>',1)),t(A,{shadow:"never"},{default:l(()=>[o("div",le,[o("div",null,[t(p,{style:{background:"#1890ff"},type:"primary",onClick:e[0]||(e[0]=n=>C("add",null))},{default:l(()=>e[9]||(e[9]=[r("添加会员等级")])),_:1})])]),t(j,{data:i(y),border:"","header-cell-style":{background:"#f5f7fa",textAlign:"center"},"cell-style":{textAlign:"center"},onSelectionChange:R},{empty:l(()=>[t(O,{class:"vab-data-empty",description:"暂无数据"})]),default:l(()=>[t(m,{align:"center",label:"ID",prop:"id"}),t(m,{align:"center",label:"等级图标",prop:"image"},{default:l(({row:n})=>[t(T,{placement:"top-start"},{reference:l(()=>[t(w,{src:n.image},null,8,["src"])]),default:l(()=>[t(w,{src:n.image},null,8,["src"])]),_:2},1024)]),_:1}),t(m,{align:"center",label:"等级名称",prop:"transactionTime"}),t(m,{align:"center",label:"成长值",prop:"transactionTime"}),t(m,{align:"center",label:"默认级别",prop:"image"},{default:l(({row:n})=>[t(L,{modelValue:n.a,"onUpdate:modelValue":b=>n.a=b},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(m,{align:"center",label:"操作",width:"220"},{default:l(({row:n})=>[t(p,{text:"",type:"primary",onClick:e[1]||(e[1]=b=>g.value=!0)},{default:l(()=>e[10]||(e[10]=[r("升级任务")])),_:1}),t(p,{text:"",type:"primary",onClick:b=>C("edit",n)},{default:l(()=>e[11]||(e[11]=[r("编辑")])),_:2},1032,["onClick"]),t(p,{text:"",type:"primary",onClick:b=>D(n)},{default:l(()=>e[12]||(e[12]=[r("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),t(M,{modelValue:i(u),"onUpdate:modelValue":e[6]||(e[6]=n=>z(u)?u.value=n:null),"append-to-body":"",title:i(V)=="add"?"添加":"编辑",width:"500px"},{footer:l(()=>[o("div",se,[t(p,{onClick:e[5]||(e[5]=n=>u.value=!1)},{default:l(()=>e[16]||(e[16]=[r("取消")])),_:1}),t(p,{type:"primary"},{default:l(()=>e[17]||(e[17]=[r("保存")])),_:1})])]),default:l(()=>[t(J,{height:"500px"},{default:l(()=>[o("div",oe,[e[13]||(e[13]=o("div",{style:{"margin-bottom":"15px"}},"级别名称",-1)),t(k,{modelValue:i(d).merchantOrderId,"onUpdate:modelValue":e[2]||(e[2]=n=>i(d).merchantOrderId=n),style:{width:"200px"},clearable:"",placeholder:"请输入"},null,8,["modelValue"])]),o("div",ne,[e[14]||(e[14]=o("div",{style:{"margin-bottom":"15px"}},"等级图标",-1)),o("div",{class:"zy-upload-btn",onClick:e[3]||(e[3]=n=>c.value=!0)},[t(F,{icon:"add-large-fill"})])]),o("div",ae,[e[15]||(e[15]=o("div",{style:{"margin-bottom":"15px"}},"成长值",-1)),t(k,{modelValue:i(d).merchantOrderId,"onUpdate:modelValue":e[4]||(e[4]=n=>i(d).merchantOrderId=n),style:{width:"200px"},clearable:"",placeholder:"请输入"},null,8,["modelValue"])])]),_:1})]),_:1},8,["modelValue","title"]),t(H,{modelValue:i(g),"onUpdate:modelValue":e[7]||(e[7]=n=>z(g)?g.value=n:null),direction:"rtl",size:"60%"},{title:l(()=>[o("div",ie,[o("div",de,[t(q,{size:55,src:"https://jytc.jubijia.com/JBJ/0c3cc076ebdc45b18524b4716f048557.png",style:{"margin-right":"20px"}}),e[18]||(e[18]=o("div",null,[o("div",{style:{"margin-bottom":"10px","font-size":"16px","font-weight":"500",color:"#000"}},"在路上"),o("div",{class:"rowC",style:{color:"#72767b"}},"普通会员")],-1))]),t(E,{style:{"margin-bottom":"20px"}},{default:l(()=>[t(v,{span:4},{default:l(()=>[e[21]||(e[21]=o("div",{style:{"margin-bottom":"10px"}},"余额",-1)),o("div",null,[t(S,{class:"mx-1 cp",type:"primary"},{default:l(()=>e[19]||(e[19]=[r("0.0000")])),_:1}),e[20]||(e[20]=r(" 元 "))])]),_:1}),t(v,{span:4},{default:l(()=>[e[24]||(e[24]=o("div",{style:{"margin-bottom":"10px"}},"佣金",-1)),o("div",null,[t(S,{class:"mx-1 cp",type:"primary"},{default:l(()=>e[22]||(e[22]=[r("0.0000")])),_:1}),e[23]||(e[23]=r(" 元 "))])]),_:1}),t(v,{span:4},{default:l(()=>e[25]||(e[25]=[o("div",{style:{"margin-bottom":"10px"}},"消费金额",-1),o("div",null,"0.0000 元",-1)])),_:1}),t(v,{span:4},{default:l(()=>e[26]||(e[26]=[o("div",{style:{"margin-bottom":"10px"}},"累计佣金",-1),o("div",null,"0.0000 元",-1)])),_:1}),t(v,{span:4},{default:l(()=>e[27]||(e[27]=[o("div",{style:{"margin-bottom":"10px"}},"成交订单",-1),o("div",null,"0比",-1)])),_:1})]),_:1})])]),default:l(()=>[t(G)]),_:1},8,["modelValue"]),i(c)?(N(),h(K,{key:0,dialogVisible:i(c),onDialogVisibleF:e[8]||(e[8]=n=>c.value=n)},null,8,["dialogVisible"])):ee("",!0),t(P,{"current-page":i(d).pageNo,"page-size":i(d).pageSize,total:i(x),onCurrentChange:I,onSizeChange:B},null,8,["current-page","page-size","total"])])}}});export{ce as default};
