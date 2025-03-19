import{f as e,x as a,_ as l}from"./index-B2uLNVFs.js";import{_ as t}from"./ButtonTable-DJBrQd3H.js";import{h as s,j as d,k as u,l as o,m as n,F as r,A as i,N as m,H as p,z as c,ai as f,aj as _,ag as w,r as y,c as v,X as g,u as h,i as k,aU as b,a0 as x,p as V,ah as C,E as j,L as U,aN as B,K as L,aJ as N,aY as T,_ as Y,ap as q,$ as z,aZ as F}from"./vendor-Bhb26uf3.js";/* empty css               */const H={class:"btn-more"},M=s({__name:"ButtonMore",props:{list:{}},emits:["click"],setup(e,{emit:a}){const l=a;return(e,a)=>{const s=t,y=f,v=_,g=w;return d(),u("div",H,[o(g,null,{dropdown:n((()=>[o(v,null,{default:n((()=>[(d(!0),u(r,null,i(e.list,(e=>(d(),m(y,{key:e.key,onClick:a=>(e=>{l("click",e)})(e)},{default:n((()=>[p(c(e.label),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),default:n((()=>[o(s,{type:"more"})])),_:1})])}}}),P={class:"page-content"},R={class:"dialog-footer"},A={style:{maxHeight:"500px",overflowY:"scroll"}},D=l(s({__name:"Role",setup(l){const t=y(!1),s=y(!1),r=v((()=>a().getMenuList)),i=y(),m=g({name:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],des:[{required:!0,message:"请输入角色描述",trigger:"blur"}]}),f=g({id:"",name:"",des:"",status:!0}),_=g([{name:"超级管理员",allow:"全部权限",des:"拥有系统全部权限",date:"2021-01-08 12:30:45",status:1},{name:"董事会部",allow:"自定义",des:"负责董事会部相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"监事会部",allow:"自定义",des:"负责监事会部相关工作的管理者",date:"2021-01-08 12:30:45",status:0},{name:"市场部",allow:"自定义",des:"负责市场部相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"人力资源部",allow:"自定义",des:"负责人力资源部相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"财务部",allow:"自定义",des:"负责财务部相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"公关部",allow:"自定义",des:"负责公关部相关工作的管理者",date:"2021-01-08 12:30:45",status:0},{name:"广告部",allow:"自定义",des:"负责广告部相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"营销",allow:"自定义",des:"负责营销相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"设计部",allow:"自定义",des:"负责设计部相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"开发部",allow:"自定义",des:"负责开发部相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"测试部",allow:"自定义",des:"负责测试部相关工作的管理者",date:"2021-01-08 12:30:45",status:1},{name:"安保部",allow:"自定义",des:"负责安保部相关工作的管理者",date:"2021-01-08 12:30:45",status:1}]),w=y("add"),H=(e,a)=>{t.value=!0,w.value=e,"edit"===e&&a?(f.id=a.id,f.name=a.name,f.des=a.des,f.status=1===a.status):(f.id="",f.name="",f.des="",f.status=!0)},D=()=>{s.value=!0},E={children:"children",label:e=>{var a;return(null==(a=e.meta)?void 0:a.title)||""}},I=()=>{C.confirm("确定删除该角色吗？","删除确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then((()=>{j.success("删除成功")}))},J=e=>{return a=this,l=null,s=function*(){e&&(yield e.validate((a=>{if(a){const a="add"===w.value?"新增成功":"修改成功";j.success(a),t.value=!1,e.resetFields()}})))},new Promise(((e,t)=>{var d=e=>{try{o(s.next(e))}catch(a){t(a)}},u=e=>{try{o(s.throw(e))}catch(a){t(a)}},o=a=>a.done?e(a.value):Promise.resolve(a.value).then(d,u);o((s=s.apply(a,l)).next())}));var a,l,s};return(a,l)=>{const y=U,v=B,g=L,C=b,j=N,K=T,S=M,X=e,Z=Y,$=q,G=z,O=x,Q=F;return d(),u("div",P,[o(C,null,{default:n((()=>[o(v,{xs:24,sm:12,lg:6},{default:n((()=>[o(y,{placeholder:"部门名称"})])),_:1}),l[10]||(l[10]=V("div",{style:{width:"12px"}},null,-1)),o(v,{xs:24,sm:12,lg:6,class:"el-col2"},{default:n((()=>[o(g,null,{default:n((()=>l[8]||(l[8]=[p("搜索")]))),_:1}),o(g,{onClick:l[0]||(l[0]=e=>H("add"))},{default:n((()=>l[9]||(l[9]=[p("新增角色")]))),_:1})])),_:1})])),_:1}),o(X,{data:h(_)},{default:n((()=>[o(j,{label:"角色名称",prop:"name"}),o(j,{label:"描述",prop:"des"}),o(j,{label:"状态",prop:"status"},{default:n((e=>[o(K,{type:1===e.row.status?"primary":"info"},{default:n((()=>[p(c(1===e.row.status?"启用":"禁用"),1)])),_:2},1032,["type"])])),_:1}),o(j,{label:"创建时间",prop:"date"},{default:n((e=>{return[p(c((a=e.row.date,new Date(a).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).replace(/\//g,"-"))),1)];var a})),_:1}),o(j,{fixed:"right",label:"操作",width:"100px"},{default:n((e=>[o(C,null,{default:n((()=>[o(S,{list:[{key:"permission",label:"菜单权限"},{key:"edit",label:"编辑角色"},{key:"delete",label:"删除角色"}],onClick:a=>{return l=a,t=e.row,void("permission"===l.key?D():"edit"===l.key?H("edit",t):"delete"===l.key&&I());var l,t}},null,8,["onClick"])])),_:2},1024)])),_:1})])),_:1},8,["data"]),o(O,{modelValue:h(t),"onUpdate:modelValue":l[6]||(l[6]=e=>k(t)?t.value=e:null),title:"add"===h(w)?"新增角色":"编辑角色",width:"30%"},{footer:n((()=>[V("div",R,[o(g,{onClick:l[4]||(l[4]=e=>t.value=!1)},{default:n((()=>l[11]||(l[11]=[p("取消")]))),_:1}),o(g,{type:"primary",onClick:l[5]||(l[5]=e=>J(h(i)))},{default:n((()=>l[12]||(l[12]=[p("提交")]))),_:1})])])),default:n((()=>[o(G,{ref_key:"formRef",ref:i,model:h(f),rules:h(m),"label-width":"120px"},{default:n((()=>[o(Z,{label:"角色名称",prop:"name"},{default:n((()=>[o(y,{modelValue:h(f).name,"onUpdate:modelValue":l[1]||(l[1]=e=>h(f).name=e)},null,8,["modelValue"])])),_:1}),o(Z,{label:"描述",prop:"des"},{default:n((()=>[o(y,{modelValue:h(f).des,"onUpdate:modelValue":l[2]||(l[2]=e=>h(f).des=e),type:"textarea",rows:3},null,8,["modelValue"])])),_:1}),o(Z,{label:"状态"},{default:n((()=>[o($,{modelValue:h(f).status,"onUpdate:modelValue":l[3]||(l[3]=e=>h(f).status=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"]),o(O,{modelValue:h(s),"onUpdate:modelValue":l[7]||(l[7]=e=>k(s)?s.value=e:null),title:"菜单权限",width:"30%"},{default:n((()=>[V("div",A,[o(Q,{data:h(r),"show-checkbox":"","node-key":"id","default-expanded-keys":[1,2,3,4,5,6,7,8],"default-checked-keys":[1,2,3],props:E},null,8,["data"])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-8012e667"]]);export{D as default};
