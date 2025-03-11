/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-11 23:23:52
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4789],{82884:function(e,t,o){o.r(t),o.d(t,{default:function(){return D}});var l=o(76004),a=(o(27322),o(49120),o(30853)),n=(o(39585),o(62289)),i=(o(65562),o(95489),o(44134)),r=(o(92498),o(4802)),s=(o(59784),o(98896),o(21738)),d=(o(34498),o(73120)),u=(o(52539),o(5309),o(73095)),m=(o(63701),o(60772),o(58335)),p=(o(12873),o(34641)),b=o(27386);const c={class:"roles-container"},f={key:0},k={key:0},y={key:0},_={key:0},v={key:0},h={key:0};function w(e,t,o,w,W,g){const F=m.KR,C=u.Zh,X=u.MQ,E=i.xE,A=d.S2,Q=s.u,x=r.MF,S=r.TS,$=i.US,K=n.o8,T=(0,p.g2)("vab-icon"),D=n.Up,I=a.uD,R=l.S2,M=(0,p.gN)("permissions");return(0,p.uX)(),(0,p.CE)("div",c,[e.loginInterception?(0,p.Q3)("",!0):((0,p.uX)(),(0,p.Wv)(F,{key:0,closable:!1,"show-icon":"",title:"检测到您当前的登录拦截已关闭，无法模拟切换角色功能，请在src/config/setting.config.js中配置loginInterception为ture，开启登录拦截",type:"success"})),(0,p.bF)(F,{closable:!1,"show-icon":"",title:`当前路由模式为：{ authentication:${e.authentication} }，是否开启角色权限控制功能：{ rolesControl:${e.rolesControl} }`,type:"success"},null,8,["title"]),(0,p.bF)($,{"label-position":"top","label-width":"140px",model:e.form},{default:(0,p.k6)((()=>[(0,p.bF)(E,{label:"账号切换"},{default:(0,p.k6)((()=>[(0,p.bF)(X,{modelValue:e.form.account,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.account=t),onChange:e.handleChangeRole},{default:(0,p.k6)((()=>[(0,p.bF)(C,{label:"admin"},{default:(0,p.k6)((()=>t[1]||(t[1]=[(0,p.eW)("admin")]))),_:1}),(0,p.bF)(C,{label:"editor"},{default:(0,p.k6)((()=>t[2]||(t[2]=[(0,p.eW)("editor")]))),_:1}),(0,p.bF)(C,{label:"test"},{default:(0,p.k6)((()=>t[3]||(t[3]=[(0,p.eW)("test")]))),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),(0,p.bF)(E,{label:"过期Token模拟访问(令牌失效5s)"},{default:(0,p.k6)((()=>[(0,p.bF)(A,{type:"primary",onClick:e.handleRefreshToken},{default:(0,p.k6)((()=>t[4]||(t[4]=[(0,p.eW)(" 点击模拟token过期访问接口，无痛刷新 ")]))),_:1},8,["onClick"])])),_:1}),(0,p.bF)(E,{label:"当前账号"},{default:(0,p.k6)((()=>[(0,p.bF)(S,{border:"",column:3,direction:"vertical"},{default:(0,p.k6)((()=>[(0,p.bF)(x,null,{label:(0,p.k6)((()=>t[5]||(t[5]=[(0,p.eW)("角色")]))),default:(0,p.k6)((()=>[(0,p.bF)(Q,null,{default:(0,p.k6)((()=>[(0,p.eW)((0,b.v_)(JSON.stringify(e.role)),1)])),_:1})])),_:1}),(0,p.bF)(x,null,{label:(0,p.k6)((()=>t[6]||(t[6]=[(0,p.eW)("权限点")]))),default:(0,p.k6)((()=>[(0,p.bF)(Q,null,{default:(0,p.k6)((()=>[(0,p.eW)((0,b.v_)(JSON.stringify(e.permission)),1)])),_:1})])),_:1}),(0,p.bF)(x,null,{label:(0,p.k6)((()=>t[7]||(t[7]=[(0,p.eW)("token")]))),default:(0,p.k6)((()=>[(0,p.bF)(Q,null,{default:(0,p.k6)((()=>[(0,p.eW)((0,b.v_)(e.token),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,p.bF)(E,{label:"按钮级角色"},{default:(0,p.k6)((()=>[(0,p.bo)(((0,p.uX)(),(0,p.Wv)(A,{type:"primary"},{default:(0,p.k6)((()=>t[8]||(t[8]=[(0,p.eW)(' 拥有["Admin"]角色的按钮 ')]))),_:1})),[[M,["Admin"]]]),(0,p.bo)(((0,p.uX)(),(0,p.Wv)(A,{type:"danger"},{default:(0,p.k6)((()=>t[9]||(t[9]=[(0,p.eW)(' 未拥有["Admin"]角色的按钮 ')]))),_:1})),[[M,{role:["Admin"],mode:"except"}]]),(0,p.bo)(((0,p.uX)(),(0,p.Wv)(A,{type:"primary"},{default:(0,p.k6)((()=>t[10]||(t[10]=[(0,p.eW)(' 拥有["Editor"]角色的按钮 ')]))),_:1})),[[M,["Editor"]]]),(0,p.bo)(((0,p.uX)(),(0,p.Wv)(A,{type:"danger"},{default:(0,p.k6)((()=>t[11]||(t[11]=[(0,p.eW)(' 未拥有["Editor"]角色的按钮 ')]))),_:1})),[[M,{role:["Editor"],mode:"except"}]]),(0,p.bo)(((0,p.uX)(),(0,p.Wv)(A,{type:"primary"},{default:(0,p.k6)((()=>t[12]||(t[12]=[(0,p.eW)(' 同时拥有["Admin","Editor"]角色的按钮 ')]))),_:1})),[[M,{role:["Admin","Editor"],mode:"allOf"}]]),(0,p.bo)(((0,p.uX)(),(0,p.Wv)(A,{type:"primary"},{default:(0,p.k6)((()=>t[13]||(t[13]=[(0,p.eW)(' 拥有["Test"]角色的按钮 ')]))),_:1})),[[M,["Test"]]])])),_:1}),(0,p.bF)(E,{label:"按钮级权限点"},{default:(0,p.k6)((()=>[(0,p.bo)(((0,p.uX)(),(0,p.Wv)(A,{type:"primary"},{default:(0,p.k6)((()=>t[14]||(t[14]=[(0,p.eW)(' 拥有["read:system"]权限点的按钮 ')]))),_:1})),[[M,{permission:["read:system"]}]]),(0,p.bo)(((0,p.uX)(),(0,p.Wv)(A,{type:"danger"},{default:(0,p.k6)((()=>t[15]||(t[15]=[(0,p.eW)(" 未拥有[\"'read:system'\"]权限点的按钮 ")]))),_:1})),[[M,{permission:["read:system"],mode:"except"}]]),(0,p.bo)(((0,p.uX)(),(0,p.Wv)(A,{type:"primary"},{default:(0,p.k6)((()=>t[16]||(t[16]=[(0,p.eW)(' 拥有["write:system"]权限点的按钮 ')]))),_:1})),[[M,{permission:["write:system"]}]]),(0,p.bo)(((0,p.uX)(),(0,p.Wv)(A,{type:"danger"},{default:(0,p.k6)((()=>t[17]||(t[17]=[(0,p.eW)(' 未拥有["write:system"]权限点的按钮 ')]))),_:1})),[[M,{permission:["write:system"],mode:"except"}]]),(0,p.bo)(((0,p.uX)(),(0,p.Wv)(A,{type:"primary"},{default:(0,p.k6)((()=>t[18]||(t[18]=[(0,p.eW)(' 拥有["delete:system"]权限点的按钮 ')]))),_:1})),[[M,{permission:["delete:system"]}]]),(0,p.bo)(((0,p.uX)(),(0,p.Wv)(A,{type:"danger"},{default:(0,p.k6)((()=>t[19]||(t[19]=[(0,p.eW)(' 未拥有["delete:system"]权限点的按钮 ')]))),_:1})),[[M,{permission:["delete:system"],mode:"except"}]])])),_:1}),(0,p.bF)(E,{label:"按钮级角色&权限点"},{default:(0,p.k6)((()=>[(0,p.bo)(((0,p.uX)(),(0,p.Wv)(A,{type:"primary"},{default:(0,p.k6)((()=>t[20]||(t[20]=[(0,p.eW)(' 拥有["Admin"]角色或者["delete:system"]权限点的按钮 ')]))),_:1})),[[M,{role:["Admin"],permission:["delete:system"]}]]),(0,p.bo)(((0,p.uX)(),(0,p.Wv)(A,{type:"primary"},{default:(0,p.k6)((()=>t[21]||(t[21]=[(0,p.eW)(' 拥有["Editor"]角色和["read:system"]权限点的按钮 ')]))),_:1})),[[M,{role:["Editor"],permission:["read:system"],mode:"allOf"}]]),(0,p.bo)(((0,p.uX)(),(0,p.Wv)(A,{type:"danger"},{default:(0,p.k6)((()=>t[22]||(t[22]=[(0,p.eW)(' 未拥有["Admin"]和["delete:system"]权限点的按钮 ')]))),_:1})),[[M,{role:["Admin"],permission:["delete:system"],mode:"except"}]])])),_:1}),(0,p.bF)(E,{label:"路由"})])),_:1},8,["model"]),(0,p.bF)(R,{gutter:20},{default:(0,p.k6)((()=>[(0,p.bF)(I,{span:24},{default:(0,p.k6)((()=>[(0,p.bF)(D,{border:"",data:e.tableData,"default-expand-all":"","row-key":"path","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:(0,p.k6)((()=>[(0,p.bF)(K,{align:"center",label:"name",prop:"name","show-overflow-tooltip":"",width:"220"}),(0,p.bF)(K,{align:"center",label:"path",prop:"path","show-overflow-tooltip":"",width:"220"}),(0,p.bF)(K,{align:"center",label:"component",prop:"component","show-overflow-tooltip":"",width:"220"}),(0,p.bF)(K,{align:"center",label:"redirect",prop:"redirect","show-overflow-tooltip":"",width:"220"}),(0,p.bF)(K,{align:"center",label:"title",prop:"meta.title","show-overflow-tooltip":""}),(0,p.bF)(K,{align:"center",label:"icon","show-overflow-tooltip":""},{default:(0,p.k6)((({row:e})=>[e.meta?((0,p.uX)(),(0,p.CE)("span",f,[e.meta.icon?((0,p.uX)(),(0,p.Wv)(T,{key:0,icon:e.meta.icon},null,8,["icon"])):(0,p.Q3)("",!0)])):(0,p.Q3)("",!0)])),_:1}),(0,p.bF)(K,{align:"center",label:"noClosable","show-overflow-tooltip":""},{default:(0,p.k6)((({row:e})=>[e.meta?((0,p.uX)(),(0,p.CE)("span",k,(0,b.v_)(e.meta.noClosable||!1),1)):(0,p.Q3)("",!0)])),_:1}),(0,p.bF)(K,{align:"center",label:"noKeepAlive","show-overflow-tooltip":"",width:"100"},{default:(0,p.k6)((({row:e})=>[e.meta?((0,p.uX)(),(0,p.CE)("span",y,[e.meta.noKeepAlive?((0,p.uX)(),(0,p.CE)(p.FK,{key:1},[(0,p.eW)("true")],64)):((0,p.uX)(),(0,p.CE)(p.FK,{key:0},[(0,p.eW)("false")],64))])):(0,p.Q3)("",!0)])),_:1}),(0,p.bF)(K,{align:"center",label:"badge","show-overflow-tooltip":""},{default:(0,p.k6)((({row:e})=>[e.meta?((0,p.uX)(),(0,p.CE)("span",_,(0,b.v_)(e.meta.badge),1)):(0,p.Q3)("",!0)])),_:1}),(0,p.bF)(K,{align:"center",label:"isCustomSvg","show-overflow-tooltip":"",width:"140"},{default:(0,p.k6)((({row:e})=>[e.meta?((0,p.uX)(),(0,p.CE)("span",v,(0,b.v_)(e.meta.isCustomSvg||!1),1)):(0,p.Q3)("",!0)])),_:1}),(0,p.bF)(K,{align:"center",label:"tabHidden","show-overflow-tooltip":""},{default:(0,p.k6)((({row:e})=>[e.meta?((0,p.uX)(),(0,p.CE)("span",h,[e.meta.tabHidden?((0,p.uX)(),(0,p.CE)(p.FK,{key:1},[(0,p.eW)("true")],64)):((0,p.uX)(),(0,p.CE)(p.FK,{key:0},[(0,p.eW)("false")],64))])):(0,p.Q3)("",!0)])),_:1})])),_:1},8,["data"])])),_:1})])),_:1})])}var W=o(26423),g=o(26157),F=o(85230),C=o(67787),X=o(25967),E=o(28814),A=o(2063),Q=o(37489),x=o(56848),S=(0,p.pM)({name:"Permission",setup(){const e=(0,p.WQ)("$baseLoading"),t=(0,p.WQ)("$baseMessage"),o=(0,W.D)(),{role:l,permission:a}=(0,x.bP)(o),n=(0,g.k)(),{username:i,token:r}=(0,x.bP)(n),s=(0,Q.Kh)({form:{account:i.value},tableData:[],res:[],authentication:F.authentication,loginInterception:F.loginInterception,rolesControl:F.rolesControl}),d=async()=>{const{data:{list:e}}=await(0,C.v)();s.tableData=(0,X.Jo)([...e])},u=async()=>{e(0,"正在切换账号请稍后..."),await localStorage.setItem(F.tokenTableName,`${s.form.account}-token-${A.Random.guid()}-${(new Date).getTime()}`),await location.reload()},m=async()=>{const{msg:e}=await(0,E.x)();t(`${e}: [${r.value}] `,"success","vab-hey-message-success")};return d(),{...(0,Q.QW)(s),role:l,permission:a,username:i,token:r,fetchData:d,handleChangeRole:u,handleRefreshToken:m}}});function $(e){e.__source="src/views/vab/permission/index.vue"}var K=o(48499);"function"===typeof $&&$(S);const T=(0,K.A)(S,[["render",w],["__scopeId","data-v-53426a40"]]);var D=T}}]);