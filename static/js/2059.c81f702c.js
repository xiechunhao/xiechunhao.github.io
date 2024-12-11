/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-12-11 15:03:04
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[614,668,2059],{94605:function(e,l,o){o.d(l,{Ed:function(){return n},Jv:function(){return t},pL:function(){return d}});var a=o(80085);function t(e){return(0,a.A)({url:"/menuManagement/getTree",method:"get",params:e})}function n(e){return(0,a.A)({url:"/menuManagement/doEdit",method:"post",data:e})}function d(e){return(0,a.A)({url:"/menuManagement/doDelete",method:"post",data:e})}},59870:function(e,l,o){o.d(l,{s:function(){return t}});var a=o(80085);function t(e){return(0,a.A)({url:"/remixIcon/getList",method:"get",params:e})}},96051:function(e,l,o){o.d(l,{A:function(){return c}});var a=o(15004),t=(o(72688),o(5053),o(63135)),n=(o(79955),o(34641)),d=o(37489),r=o(27386),u=o(12176),m=(0,n.pM)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let l=null;const o=(0,d.KR)(!0);return l=setTimeout((()=>{o.value=!1}),500),(0,u.JZ)(((e,o,a)=>{clearInterval(l),a()})),(l,u)=>{const m=t.d1,s=a.Ik;return(0,n.uX)(),(0,n.Wv)(s,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,n.eX)({default:(0,n.k6)((()=>[e.skeleton?((0,n.uX)(),(0,n.Wv)(m,{key:0,animated:"",loading:(0,d.R1)(o),rows:e.skeletonRows},{default:(0,n.k6)((()=>[(0,n.RG)(l.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,n.RG)(l.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[l.$slots.header||e.header?{name:"header",fn:(0,n.k6)((()=>[(0,n.RG)(l.$slots,"header",{},(()=>[(0,n.eW)((0,r.v_)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function s(e){e.__source="library/components/VabCard/index.vue"}var i=o(48499);"function"===typeof s&&s(m);const f=(0,i.A)(m,[["__scopeId","data-v-391150ea"]]);var c=f},18199:function(e,l,o){o.d(l,{A:function(){return i}});var a=o(83047),t=(o(72688),o(13919),o(34641));const n={class:"top-panel"};function d(e,l){const o=a.uD;return(0,t.uX)(),(0,t.Wv)(o,{span:24},{default:(0,t.k6)((()=>[(0,t.Lk)("div",n,[(0,t.RG)(e.$slots,"default")])])),_:3})}function r(e){e.__source="library/components/VabQueryForm/components/VabQueryFormTopPanel.vue"}var u=o(48499);const m={};"function"===typeof r&&r(m);const s=(0,u.A)(m,[["render",d]]);var i=s},72441:function(e,l,o){o.d(l,{A:function(){return s}});var a=o(32426),t=(o(72688),o(28962),o(34641));function n(e,l){const o=a.S2;return(0,t.uX)(),(0,t.Wv)(o,{class:"vab-query-form",gutter:0},{default:(0,t.k6)((()=>[(0,t.RG)(e.$slots,"default",{},void 0,!0)])),_:3})}function d(e){e.__source="library/components/VabQueryForm/index.vue"}var r=o(48499);const u={};"function"===typeof d&&d(u);const m=(0,r.A)(u,[["render",n],["__scopeId","data-v-172989c8"]]);var s=m},63828:function(e,l,o){o.r(l),o.d(l,{default:function(){return g}});var a=o(60013),t=(o(72688),o(8732),o(31542)),n=(o(87157),o(24016)),d=(o(56140),o(43652)),r=(o(32455),o(29649)),u=(o(94747),o(66535),o(24451)),m=(o(91807),o(34641));function s(e,l,o,s,i,f){const c=u.WK,b=n.xE,p=(0,m.g2)("vab-icon-selector"),V=r.Vc,v=d.qi,g=n.US,k=t.S2,F=a.kZ;return(0,m.uX)(),(0,m.Wv)(F,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[15]||(l[15]=l=>e.dialogFormVisible=l),title:e.title,width:"60%",onClose:e.close},{footer:(0,m.k6)((()=>[(0,m.bF)(k,{onClick:e.close},{default:(0,m.k6)((()=>l[16]||(l[16]=[(0,m.eW)("取 消")]))),_:1},8,["onClick"]),(0,m.bF)(k,{type:"primary",onClick:e.save},{default:(0,m.k6)((()=>l[17]||(l[17]=[(0,m.eW)("确 定")]))),_:1},8,["onClick"])])),default:(0,m.k6)((()=>[(0,m.bF)(g,{ref:"formRef",inline:"","label-width":"140px",model:e.form,rules:e.rules},{default:(0,m.k6)((()=>[(0,m.bF)(b,{label:"父级Id",prop:"parentId"},{default:(0,m.k6)((()=>[(0,m.bF)(c,{modelValue:e.form.parentId,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.parentId=l)},null,8,["modelValue"])])),_:1}),(0,m.bF)(b,{label:"name",prop:"name"},{default:(0,m.k6)((()=>[(0,m.bF)(c,{modelValue:e.form.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.name=l)},null,8,["modelValue"])])),_:1}),(0,m.bF)(b,{label:"路径",prop:"path"},{default:(0,m.k6)((()=>[(0,m.bF)(c,{modelValue:e.form.path,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.path=l)},null,8,["modelValue"])])),_:1}),(0,m.bF)(b,{label:"vue文件路径",prop:"component"},{default:(0,m.k6)((()=>[(0,m.bF)(c,{modelValue:e.form.component,"onUpdate:modelValue":l[3]||(l[3]=l=>e.form.component=l)},null,8,["modelValue"])])),_:1}),(0,m.bF)(b,{label:"重定向",prop:"redirect"},{default:(0,m.k6)((()=>[(0,m.bF)(c,{modelValue:e.form.redirect,"onUpdate:modelValue":l[4]||(l[4]=l=>e.form.redirect=l)},null,8,["modelValue"])])),_:1}),(0,m.bF)(b,{label:"标题",prop:"meta.title"},{default:(0,m.k6)((()=>[(0,m.bF)(c,{modelValue:e.form.meta.title,"onUpdate:modelValue":l[5]||(l[5]=l=>e.form.meta.title=l)},null,8,["modelValue"])])),_:1}),(0,m.bF)(b,{label:"图标"},{default:(0,m.k6)((()=>[(0,m.bF)(V,{"popper-class":"icon-selector-popper",trigger:"hover",width:292},{reference:(0,m.k6)((()=>[(0,m.bF)(c,{modelValue:e.form.meta.icon,"onUpdate:modelValue":l[6]||(l[6]=l=>e.form.meta.icon=l)},null,8,["modelValue"])])),default:(0,m.k6)((()=>[(0,m.bF)(p,{onHandleIcon:e.handleIcon},null,8,["onHandleIcon"])])),_:1})])),_:1}),(0,m.bF)(b,{label:"badge"},{default:(0,m.k6)((()=>[(0,m.bF)(c,{modelValue:e.form.meta.badge,"onUpdate:modelValue":l[7]||(l[7]=l=>e.form.meta.badge=l)},null,8,["modelValue"])])),_:1}),(0,m.bF)(b,{label:"dot"},{default:(0,m.k6)((()=>[(0,m.bF)(v,{modelValue:e.form.meta.dot,"onUpdate:modelValue":l[8]||(l[8]=l=>e.form.meta.dot=l)},null,8,["modelValue"])])),_:1}),(0,m.bF)(b,{label:"隐藏"},{default:(0,m.k6)((()=>[(0,m.bF)(v,{modelValue:e.form.meta.hidden,"onUpdate:modelValue":l[9]||(l[9]=l=>e.form.meta.hidden=l)},null,8,["modelValue"])])),_:1}),(0,m.bF)(b,{label:"始终显示当前节点"},{default:(0,m.k6)((()=>[(0,m.bF)(v,{modelValue:e.form.meta.levelHidden,"onUpdate:modelValue":l[10]||(l[10]=l=>e.form.meta.levelHidden=l)},null,8,["modelValue"])])),_:1}),(0,m.bF)(b,{label:"自定义svg图标"},{default:(0,m.k6)((()=>[(0,m.bF)(v,{modelValue:e.form.meta.isCustomSvg,"onUpdate:modelValue":l[11]||(l[11]=l=>e.form.meta.isCustomSvg=l)},null,8,["modelValue"])])),_:1}),(0,m.bF)(b,{label:"固定"},{default:(0,m.k6)((()=>[(0,m.bF)(v,{modelValue:e.form.meta.noClosable,"onUpdate:modelValue":l[12]||(l[12]=l=>e.form.meta.noClosable=l)},null,8,["modelValue"])])),_:1}),(0,m.bF)(b,{label:"无缓存"},{default:(0,m.k6)((()=>[(0,m.bF)(v,{modelValue:e.form.meta.noKeepAlive,"onUpdate:modelValue":l[13]||(l[13]=l=>e.form.meta.noKeepAlive=l)},null,8,["modelValue"])])),_:1}),(0,m.bF)(b,{label:"不显示当前标签页"},{default:(0,m.k6)((()=>[(0,m.bF)(v,{modelValue:e.form.meta.tabHidden,"onUpdate:modelValue":l[14]||(l[14]=l=>e.form.meta.tabHidden=l)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","onClose"])}var i=o(36760),f=o(94605),c=o(37489),b=(0,m.pM)({name:"MenuManagementEdit",components:{VabIconSelector:i["default"]},emits:["fetch-data"],setup(e,{emit:l}){const o=(0,m.WQ)("$baseMessage"),a=(0,c.Kh)({formRef:null,form:{meta:{title:"",icon:"",badge:"",dot:!1,hidden:!1,levelHidden:!1,isCustomSvg:!1,noClosable:!1,noKeepAlive:!1,tabHidden:!1}},rules:{parentId:[{required:!0,trigger:"blur",message:"请输入父级id"}],name:[{required:!0,trigger:"blur",message:"请输入name"}],path:[{required:!0,trigger:"blur",message:"请输入path"}],component:[{required:!0,trigger:"blur",message:"请输入component"}],"meta.title":[{required:!0,trigger:"blur",message:"请输入标题"}]},title:"",dialogFormVisible:!1}),t=e=>{a.form.meta.icon=e},n=e=>{e?(a.title="编辑",a.form=JSON.parse(JSON.stringify(e))):a.title="添加",a.dialogFormVisible=!0},d=()=>{a["formRef"].resetFields(),a.form={meta:{icon:""}},a.dialogFormVisible=!1},r=()=>{a["formRef"].validate((async e=>{if(e){const{msg:e}=await(0,f.Ed)(a.form);o(e,"success","vab-hey-message-success"),l("fetch-data"),d()}}))};return{...(0,c.QW)(a),handleIcon:t,showEdit:n,close:d,save:r}}});function p(e){e.__source="src/views/setting/menuManagement/components/MenuManagementEdit.vue"}var V=o(48499);"function"===typeof p&&p(b);const v=(0,V.A)(b,[["render",s]]);var g=v}}]);