/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-11 22:54:54
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5269],{37650:function(e,l,o){o.r(l),o.d(l,{default:function(){return n}});var r=o(34641);function a(e,l,o,a,s,t){const i=(0,r.g2)("el-input"),m=(0,r.g2)("el-form-item"),d=(0,r.g2)("el-checkbox"),u=(0,r.g2)("el-checkbox-group"),n=(0,r.g2)("el-form"),f=(0,r.g2)("el-button"),b=(0,r.g2)("el-dialog");return(0,r.uX)(),(0,r.Wv)(b,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[4]||(l[4]=l=>e.dialogFormVisible=l),title:e.title,width:"500px",onClose:e.close},{footer:(0,r.k6)((()=>[(0,r.bF)(f,{onClick:e.close},{default:(0,r.k6)((()=>l[5]||(l[5]=[(0,r.eW)("取 消")]))),_:1},8,["onClick"]),(0,r.bF)(f,{type:"primary",onClick:e.save},{default:(0,r.k6)((()=>l[6]||(l[6]=[(0,r.eW)("确 定")]))),_:1},8,["onClick"])])),default:(0,r.k6)((()=>[(0,r.bF)(n,{ref:"formRef","label-width":"80px",model:e.form,rules:e.rules},{default:(0,r.k6)((()=>[(0,r.bF)(m,{label:"用户名",prop:"username"},{default:(0,r.k6)((()=>[(0,r.bF)(i,{modelValue:e.form.username,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.username=l),modelModifiers:{trim:!0}},null,8,["modelValue"])])),_:1}),(0,r.bF)(m,{label:"密码",prop:"password"},{default:(0,r.k6)((()=>[(0,r.bF)(i,{modelValue:e.form.password,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.password=l),modelModifiers:{trim:!0},type:"password"},null,8,["modelValue"])])),_:1}),(0,r.bF)(m,{label:"邮箱",prop:"email"},{default:(0,r.k6)((()=>[(0,r.bF)(i,{modelValue:e.form.email,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.email=l),modelModifiers:{trim:!0}},null,8,["modelValue"])])),_:1}),(0,r.bF)(m,{label:"角色",prop:"roles"},{default:(0,r.k6)((()=>[(0,r.bF)(u,{modelValue:e.form.roles,"onUpdate:modelValue":l[3]||(l[3]=l=>e.form.roles=l)},{default:(0,r.k6)((()=>[(0,r.bF)(d,{label:"admin"}),(0,r.bF)(d,{label:"editor"})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","onClose"])}var s=o(15630),t=o(37489),i=(0,r.pM)({name:"UserManagementEdit",emits:["fetch-data"],setup(e,{emit:l}){const o=(0,r.WQ)("$baseMessage"),a=(0,t.Kh)({formRef:null,form:{roles:[]},rules:{username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}],email:[{required:!0,trigger:"blur",message:"请输入邮箱"}],roles:[{required:!0,trigger:"blur",message:"请选择角色"}]},title:"",dialogFormVisible:!1}),i=e=>{e?(a.title="编辑",a.form=JSON.parse(JSON.stringify(e))):a.title="添加",a.dialogFormVisible=!0},m=()=>{a["formRef"].resetFields(),a.form={roles:[]},a.dialogFormVisible=!1},d=()=>{a["formRef"].validate((async e=>{if(e){const{msg:e}=await(0,s.Ed)(a.form);o(e,"success","vab-hey-message-success"),l("fetch-data"),m()}}))};return{...(0,t.QW)(a),showEdit:i,close:m,save:d}}});function m(e){e.__source="src/views/setting/userManagement/components/UserManagementEdit.vue"}var d=o(48499);"function"===typeof m&&m(i);const u=(0,d.A)(i,[["render",a]]);var n=u}}]);