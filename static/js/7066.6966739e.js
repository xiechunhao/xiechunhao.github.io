/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-11 23:23:52
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7066],{88025:function(e,l,a){a.r(l),a.d(l,{default:function(){return F}});var o=a(23995),t=(a(27322),a(24434),a(73120)),m=(a(52539),a(44134)),d=(a(92498),a(67714)),n=(a(97881),a(72515)),u=(a(45077),a(5309),a(46137)),r=(a(30957),a(34641));function i(e,l,a,i,f,s){const b=u.WK,p=m.xE,c=(0,r.g2)("vab-icon-selector"),V=n.Vc,g=d.qi,F=m.US,k=t.S2,v=o.kZ;return(0,r.uX)(),(0,r.Wv)(v,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[15]||(l[15]=l=>e.dialogFormVisible=l),title:e.title,width:"60%",onClose:e.close},{footer:(0,r.k6)((()=>[(0,r.bF)(k,{onClick:e.close},{default:(0,r.k6)((()=>l[16]||(l[16]=[(0,r.eW)("取 消")]))),_:1},8,["onClick"]),(0,r.bF)(k,{type:"primary",onClick:e.save},{default:(0,r.k6)((()=>l[17]||(l[17]=[(0,r.eW)("确 定")]))),_:1},8,["onClick"])])),default:(0,r.k6)((()=>[(0,r.bF)(F,{ref:"formRef",inline:"","label-width":"140px",model:e.form,rules:e.rules},{default:(0,r.k6)((()=>[(0,r.bF)(p,{label:"父级Id",prop:"parentId"},{default:(0,r.k6)((()=>[(0,r.bF)(b,{modelValue:e.form.parentId,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.parentId=l)},null,8,["modelValue"])])),_:1}),(0,r.bF)(p,{label:"name",prop:"name"},{default:(0,r.k6)((()=>[(0,r.bF)(b,{modelValue:e.form.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.name=l)},null,8,["modelValue"])])),_:1}),(0,r.bF)(p,{label:"路径",prop:"path"},{default:(0,r.k6)((()=>[(0,r.bF)(b,{modelValue:e.form.path,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.path=l)},null,8,["modelValue"])])),_:1}),(0,r.bF)(p,{label:"vue文件路径",prop:"component"},{default:(0,r.k6)((()=>[(0,r.bF)(b,{modelValue:e.form.component,"onUpdate:modelValue":l[3]||(l[3]=l=>e.form.component=l)},null,8,["modelValue"])])),_:1}),(0,r.bF)(p,{label:"重定向",prop:"redirect"},{default:(0,r.k6)((()=>[(0,r.bF)(b,{modelValue:e.form.redirect,"onUpdate:modelValue":l[4]||(l[4]=l=>e.form.redirect=l)},null,8,["modelValue"])])),_:1}),(0,r.bF)(p,{label:"标题",prop:"meta.title"},{default:(0,r.k6)((()=>[(0,r.bF)(b,{modelValue:e.form.meta.title,"onUpdate:modelValue":l[5]||(l[5]=l=>e.form.meta.title=l)},null,8,["modelValue"])])),_:1}),(0,r.bF)(p,{label:"图标"},{default:(0,r.k6)((()=>[(0,r.bF)(V,{"popper-class":"icon-selector-popper",trigger:"hover",width:292},{reference:(0,r.k6)((()=>[(0,r.bF)(b,{modelValue:e.form.meta.icon,"onUpdate:modelValue":l[6]||(l[6]=l=>e.form.meta.icon=l)},null,8,["modelValue"])])),default:(0,r.k6)((()=>[(0,r.bF)(c,{onHandleIcon:e.handleIcon},null,8,["onHandleIcon"])])),_:1})])),_:1}),(0,r.bF)(p,{label:"badge"},{default:(0,r.k6)((()=>[(0,r.bF)(b,{modelValue:e.form.meta.badge,"onUpdate:modelValue":l[7]||(l[7]=l=>e.form.meta.badge=l)},null,8,["modelValue"])])),_:1}),(0,r.bF)(p,{label:"dot"},{default:(0,r.k6)((()=>[(0,r.bF)(g,{modelValue:e.form.meta.dot,"onUpdate:modelValue":l[8]||(l[8]=l=>e.form.meta.dot=l)},null,8,["modelValue"])])),_:1}),(0,r.bF)(p,{label:"隐藏"},{default:(0,r.k6)((()=>[(0,r.bF)(g,{modelValue:e.form.meta.hidden,"onUpdate:modelValue":l[9]||(l[9]=l=>e.form.meta.hidden=l)},null,8,["modelValue"])])),_:1}),(0,r.bF)(p,{label:"始终显示当前节点"},{default:(0,r.k6)((()=>[(0,r.bF)(g,{modelValue:e.form.meta.levelHidden,"onUpdate:modelValue":l[10]||(l[10]=l=>e.form.meta.levelHidden=l)},null,8,["modelValue"])])),_:1}),(0,r.bF)(p,{label:"自定义svg图标"},{default:(0,r.k6)((()=>[(0,r.bF)(g,{modelValue:e.form.meta.isCustomSvg,"onUpdate:modelValue":l[11]||(l[11]=l=>e.form.meta.isCustomSvg=l)},null,8,["modelValue"])])),_:1}),(0,r.bF)(p,{label:"固定"},{default:(0,r.k6)((()=>[(0,r.bF)(g,{modelValue:e.form.meta.noClosable,"onUpdate:modelValue":l[12]||(l[12]=l=>e.form.meta.noClosable=l)},null,8,["modelValue"])])),_:1}),(0,r.bF)(p,{label:"无缓存"},{default:(0,r.k6)((()=>[(0,r.bF)(g,{modelValue:e.form.meta.noKeepAlive,"onUpdate:modelValue":l[13]||(l[13]=l=>e.form.meta.noKeepAlive=l)},null,8,["modelValue"])])),_:1}),(0,r.bF)(p,{label:"不显示当前标签页"},{default:(0,r.k6)((()=>[(0,r.bF)(g,{modelValue:e.form.meta.tabHidden,"onUpdate:modelValue":l[14]||(l[14]=l=>e.form.meta.tabHidden=l)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","onClose"])}var f=a(67502),s=a(95938),b=a(37489),p=(0,r.pM)({name:"MenuManagementEdit",components:{VabIconSelector:f["default"]},emits:["fetch-data"],setup(e,{emit:l}){const a=(0,r.WQ)("$baseMessage"),o=(0,b.Kh)({formRef:null,form:{meta:{title:"",icon:"",badge:"",dot:!1,hidden:!1,levelHidden:!1,isCustomSvg:!1,noClosable:!1,noKeepAlive:!1,tabHidden:!1}},rules:{parentId:[{required:!0,trigger:"blur",message:"请输入父级id"}],name:[{required:!0,trigger:"blur",message:"请输入name"}],path:[{required:!0,trigger:"blur",message:"请输入path"}],component:[{required:!0,trigger:"blur",message:"请输入component"}],"meta.title":[{required:!0,trigger:"blur",message:"请输入标题"}]},title:"",dialogFormVisible:!1}),t=e=>{o.form.meta.icon=e},m=e=>{e?(o.title="编辑",o.form=JSON.parse(JSON.stringify(e))):o.title="添加",o.dialogFormVisible=!0},d=()=>{o["formRef"].resetFields(),o.form={meta:{icon:""}},o.dialogFormVisible=!1},n=()=>{o["formRef"].validate((async e=>{if(e){const{msg:e}=await(0,s.Ed)(o.form);a(e,"success","vab-hey-message-success"),l("fetch-data"),d()}}))};return{...(0,b.QW)(o),handleIcon:t,showEdit:m,close:d,save:n}}});function c(e){e.__source="src/views/setting/menuManagement/components/MenuManagementEdit.vue"}var V=a(48499);"function"===typeof c&&c(p);const g=(0,V.A)(p,[["render",i]]);var F=g},97352:function(e,l,a){a.d(l,{s:function(){return t}});var o=a(24380);function t(e){return(0,o.A)({url:"/remixIcon/getList",method:"get",params:e})}}}]);