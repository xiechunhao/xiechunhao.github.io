var e=(e,a,l)=>new Promise(((t,u)=>{var n=e=>{try{d(l.next(e))}catch(a){u(a)}},o=e=>{try{d(l.throw(e))}catch(a){u(a)}},d=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,o);d((l=l.apply(e,a)).next())}));import{I as a,f as l,x as t,_ as u}from"./index-B2uLNVFs.js";import{I as n}from"./IconSelector-D1_CTtmz.js";/* empty css                       *//* empty css                        */import{_ as o}from"./ButtonTable-DJBrQd3H.js";/* empty css               */import{h as d,c as s,r,X as i,a_ as m,k as p,l as c,m as f,u as h,i as b,aU as _,a0 as v,j as g,a3 as V,N as k,H as y,F as w,A as x,z as I,p as U,s as C,E as L,n as j,ah as N,K as A,aJ as E,ac as H,aR as S,aS as M,_ as T,L as q,aN as B,aq as z,ap as $,$ as F}from"./vendor-Bhb26uf3.js";import"./iconfont-DPUoc2h2.js";const O={class:"page-content"},P={style:{margin:"0","text-align":"right"}},R={class:"dialog-footer"},X=u(d({__name:"Menu",setup(u){const d=s((()=>t().getMenuList)),X=r(!1),D=i({name:"",path:"",label:"",icon:"",isEnable:!0,sort:1,isMenu:!0,keepAlive:!0,isHidden:!0,link:"",isIframe:!1,authName:"",authLabel:"",authIcon:"",authSort:1}),J=r(a.UNICODE),K=r("menu"),W=i({name:[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],path:[{required:!0,message:"请输入路由地址",trigger:"blur"}],label:[{required:!0,message:"输入权限标识",trigger:"blur"}],authName:[{required:!0,message:"请输入权限名称",trigger:"blur"}],authLabel:[{required:!0,message:"请输入权限权限标识",trigger:"blur"}]}),Y=d.value,G=r(!1),Q=r(),Z=s((()=>{const e="menu"===K.value?"菜单":"权限";return G.value?`编辑${e}`:`新建${e}`})),ee=()=>{},ae=()=>e(this,null,(function*(){Q.value&&(yield Q.value.validate((a=>e(this,null,(function*(){if(a)try{G.value,L.success((G.value?"编辑":"新增")+"成功"),X.value=!1}catch(e){L.error((G.value?"编辑":"新增")+"失败")}})))))})),le=(e,a,l=!1)=>{X.value=!0,K.value=e,G.value=!1,de.value=l,te(),a&&(G.value=!0,j((()=>{"menu"===e?(D.name=a.meta.title,D.path=a.path,D.label=a.name,D.icon=a.meta.icon,D.sort=a.meta.sort||1,D.isMenu=a.meta.isMenu,D.keepAlive=a.meta.keepAlive,D.isHidden=a.meta.isHidden||!0,D.isEnable=a.meta.isEnable||!0,D.link=a.meta.link,D.isIframe=a.meta.isIframe||!1):(D.authName=a.title,D.authLabel=a.auth_mark,D.authIcon=a.icon||"",D.authSort=a.sort||1)})))},te=()=>{var e;null==(e=Q.value)||e.resetFields(),Object.assign(D,{name:"",path:"",label:"",icon:"",sort:1,isMenu:!0,keepAlive:!0,isHidden:!0,link:"",isIframe:!1,authName:"",authLabel:"",authIcon:"",authSort:1})},ue=()=>e(this,null,(function*(){try{yield N.confirm("确定要删除该菜单吗？删除后无法恢复","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),L.success("删除成功")}catch(e){"cancel"!==e&&L.error("删除失败")}})),ne=()=>e(this,null,(function*(){try{yield N.confirm("确定要删除该权限吗？删除后无法恢复","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),L.success("删除成功")}catch(e){"cancel"!==e&&L.error("删除失败")}})),oe=s((()=>!(!G.value||"button"!==K.value)||(!(!G.value||"menu"!==K.value)||!(G.value||"menu"!==K.value||!de.value)))),de=r(!1);return(e,a)=>{const t=A,u=_,d=E,s=H,r=o,i=l,L=S,j=M,N=T,G=q,te=B,de=n,se=z,re=$,ie=F,me=v,pe=m("auth");return g(),p("div",O,[c(u,{gutter:20,style:{"margin-left":"15px"}},{default:f((()=>[V((g(),k(t,{onClick:a[0]||(a[0]=e=>le("menu",null,!0))},{default:f((()=>a[19]||(a[19]=[y("添加菜单")]))),_:1})),[[pe,"add"]])])),_:1}),c(i,{data:h(Y)},{default:f((()=>[c(d,{prop:"meta.title",label:"菜单名称"}),c(d,{prop:"path",label:"路由"}),c(d,{prop:"meta.authList",label:"可操作权限"},{default:f((e=>[(g(!0),p(w,null,x(e.row.meta.authList,((e,l)=>(g(),k(s,{placement:"top-start",title:"操作",width:200,trigger:"click",key:l},{reference:f((()=>[c(t,{class:"small-btn"},{default:f((()=>[y(I(e.title),1)])),_:2},1024)])),default:f((()=>[U("div",P,[c(t,{size:"small",type:"primary",onClick:a=>le("button",e)},{default:f((()=>a[20]||(a[20]=[y("编辑")]))),_:2},1032,["onClick"]),c(t,{size:"small",type:"danger",onClick:a[1]||(a[1]=e=>ne())},{default:f((()=>a[21]||(a[21]=[y("删除")]))),_:1})])])),_:2},1024)))),128))])),_:1}),c(d,{label:"编辑时间",prop:"date"},{default:f((()=>a[22]||(a[22]=[y(" 2022-3-12 12:00:00 ")]))),_:1}),c(d,{fixed:"right",label:"操作",width:"180"},{default:f((e=>[V(c(r,{type:"add",onClick:a[2]||(a[2]=e=>le("menu"))},null,512),[[pe,"add"]]),V(c(r,{type:"edit",onClick:a=>{return l=e.row,void le("menu",l,!0);var l}},null,8,["onClick"]),[[pe,"edit"]]),V(c(r,{type:"delete",onClick:ue},null,512),[[pe,"delete"]])])),_:1})])),_:1},8,["data"]),c(me,{title:h(Z),modelValue:h(X),"onUpdate:modelValue":a[18]||(a[18]=e=>b(X)?X.value=e:null),width:"700px","align-center":""},{footer:f((()=>[U("span",R,[c(t,{onClick:a[16]||(a[16]=e=>X.value=!1)},{default:f((()=>a[25]||(a[25]=[y("取 消")]))),_:1}),c(t,{type:"primary",onClick:a[17]||(a[17]=e=>ae())},{default:f((()=>a[26]||(a[26]=[y(" 确 定 ")]))),_:1})])])),default:f((()=>[c(ie,{ref_key:"formRef",ref:Q,model:h(D),rules:h(W),"label-width":"85px"},{default:f((()=>[c(N,{label:"菜单类型"},{default:f((()=>[c(j,{modelValue:h(K),"onUpdate:modelValue":a[3]||(a[3]=e=>b(K)?K.value=e:null),disabled:h(oe)},{default:f((()=>[c(L,{value:"menu",label:"menu"},{default:f((()=>a[23]||(a[23]=[y("菜单")]))),_:1}),c(L,{value:"button",label:"button"},{default:f((()=>a[24]||(a[24]=[y("权限")]))),_:1})])),_:1},8,["modelValue","disabled"])])),_:1}),"menu"===h(K)?(g(),p(w,{key:0},[c(u,{gutter:20},{default:f((()=>[c(te,{span:12},{default:f((()=>[c(N,{label:"菜单名称",prop:"name"},{default:f((()=>[c(G,{modelValue:h(D).name,"onUpdate:modelValue":a[4]||(a[4]=e=>h(D).name=e),placeholder:"菜单名称"},null,8,["modelValue"])])),_:1})])),_:1}),c(te,{span:12},{default:f((()=>[c(N,{label:"路由地址",prop:"path"},{default:f((()=>[c(G,{modelValue:h(D).path,"onUpdate:modelValue":a[5]||(a[5]=e=>h(D).path=e),placeholder:"路由地址"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(u,{gutter:20},{default:f((()=>[c(te,{span:12},{default:f((()=>[c(N,{label:"权限标识",prop:"label"},{default:f((()=>[c(G,{modelValue:h(D).label,"onUpdate:modelValue":a[6]||(a[6]=e=>h(D).label=e),placeholder:"权限标识"},null,8,["modelValue"])])),_:1})])),_:1}),c(te,{span:12},{default:f((()=>[c(N,{label:"图标",prop:"icon"},{default:f((()=>[c(de,{iconType:h(J),defaultIcon:h(D).icon,width:"229px"},null,8,["iconType","defaultIcon"])])),_:1})])),_:1})])),_:1}),c(u,{gutter:20},{default:f((()=>[c(te,{span:12},{default:f((()=>[c(N,{label:"菜单排序",prop:"sort",style:{width:"100%"}},{default:f((()=>[c(se,{modelValue:h(D).sort,"onUpdate:modelValue":a[7]||(a[7]=e=>h(D).sort=e),style:{width:"100%"},onChange:ee,min:1,"controls-position":"right"},null,8,["modelValue"])])),_:1})])),_:1}),c(te,{span:12},{default:f((()=>[c(N,{label:"外部链接",prop:"link"},{default:f((()=>[c(G,{modelValue:h(D).link,"onUpdate:modelValue":a[8]||(a[8]=e=>h(D).link=e),placeholder:"外部链接/内嵌地址(https://www.baidu.com)"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(u,{gutter:20},{default:f((()=>[c(te,{span:5},{default:f((()=>[c(N,{label:"是否启用",prop:"isEnable"},{default:f((()=>[c(re,{modelValue:h(D).isEnable,"onUpdate:modelValue":a[9]||(a[9]=e=>h(D).isEnable=e)},null,8,["modelValue"])])),_:1})])),_:1}),c(te,{span:5},{default:f((()=>[c(N,{label:"页面缓存",prop:"keepAlive"},{default:f((()=>[c(re,{modelValue:h(D).keepAlive,"onUpdate:modelValue":a[10]||(a[10]=e=>h(D).keepAlive=e)},null,8,["modelValue"])])),_:1})])),_:1}),c(te,{span:5},{default:f((()=>[c(N,{label:"是否显示",prop:"isHidden"},{default:f((()=>[c(re,{modelValue:h(D).isHidden,"onUpdate:modelValue":a[11]||(a[11]=e=>h(D).isHidden=e)},null,8,["modelValue"])])),_:1})])),_:1}),c(te,{span:5},{default:f((()=>[c(N,{label:"是否内嵌",prop:"isMenu"},{default:f((()=>[c(re,{modelValue:h(D).isIframe,"onUpdate:modelValue":a[12]||(a[12]=e=>h(D).isIframe=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})],64)):C("",!0),"button"===h(K)?(g(),p(w,{key:1},[c(u,{gutter:20},{default:f((()=>[c(te,{span:12},{default:f((()=>[c(N,{label:"权限名称",prop:"authName"},{default:f((()=>[c(G,{modelValue:h(D).authName,"onUpdate:modelValue":a[13]||(a[13]=e=>h(D).authName=e),placeholder:"权限名称"},null,8,["modelValue"])])),_:1})])),_:1}),c(te,{span:12},{default:f((()=>[c(N,{label:"权限标识",prop:"authLabel"},{default:f((()=>[c(G,{modelValue:h(D).authLabel,"onUpdate:modelValue":a[14]||(a[14]=e=>h(D).authLabel=e),placeholder:"权限标识"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(u,{gutter:20},{default:f((()=>[c(te,{span:12},{default:f((()=>[c(N,{label:"权限排序",prop:"authSort",style:{width:"100%"}},{default:f((()=>[c(se,{modelValue:h(D).authSort,"onUpdate:modelValue":a[15]||(a[15]=e=>h(D).authSort=e),style:{width:"100%"},onChange:ee,min:1,"controls-position":"right"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})],64)):C("",!0)])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"])])}}}),[["__scopeId","data-v-8b55aa05"]]);export{X as default};
