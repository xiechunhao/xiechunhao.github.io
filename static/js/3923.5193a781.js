/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-03-11 23:03:09
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3923],{87307:function(e,a,l){l.r(a),l.d(a,{default:function(){return k}});var t=l(23995),r=(l(27322),l(24434),l(73120)),o=(l(52539),l(44134)),d=(l(92498),l(46137)),n=(l(30957),l(5309),l(88504)),m=(l(31255),l(11071),l(6569)),i=(l(64479),l(34641));function s(e,a,l,s,u,f){const p=m.q,c=n.P9,b=n.AV,g=o.xE,k=d.WK,V=o.US,h=r.S2,F=t.kZ;return(0,i.uX)(),(0,i.Wv)(F,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[3]||(a[3]=a=>e.dialogFormVisible=a),title:e.title,width:"500px",onClose:e.close},{footer:(0,i.k6)((()=>[(0,i.bF)(h,{onClick:e.close},{default:(0,i.k6)((()=>a[4]||(a[4]=[(0,i.eW)("取 消")]))),_:1},8,["onClick"]),(0,i.bF)(h,{type:"primary",onClick:e.save},{default:(0,i.k6)((()=>a[5]||(a[5]=[(0,i.eW)("确 定")]))),_:1},8,["onClick"])])),default:(0,i.k6)((()=>[(0,i.bF)(V,{ref:"formRef","label-width":"80px",model:e.form,rules:e.rules},{default:(0,i.k6)((()=>[(0,i.bF)(g,{label:"父节点",prop:"parentName"},{default:(0,i.k6)((()=>[(0,i.bF)(b,{modelValue:e.form.parentId,"onUpdate:modelValue":a[0]||(a[0]=a=>e.form.parentId=a),placeholder:"请选择父节点"},{default:(0,i.k6)((()=>[(0,i.bF)(c,{label:e.form.parentName,style:{height:"auto",padding:"0"},value:e.form.parentId},{default:(0,i.k6)((()=>[(0,i.bF)(p,{ref:"treeRef",data:e.treeData,"default-expand-all":"",props:e.defaultProps,onNodeClick:e.handleNodeClick},null,8,["data","props","onNodeClick"])])),_:1},8,["label","value"])])),_:1},8,["modelValue"])])),_:1}),(0,i.bF)(g,{label:"名称",prop:"name"},{default:(0,i.k6)((()=>[(0,i.bF)(k,{modelValue:e.form.name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.form.name=a)},null,8,["modelValue"])])),_:1}),(0,i.bF)(g,{label:"排序",prop:"order"},{default:(0,i.k6)((()=>[(0,i.bF)(k,{modelValue:e.form.order,"onUpdate:modelValue":a[2]||(a[2]=a=>e.form.order=a)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","onClose"])}var u=l(46667),f=l(37489),p=(0,i.pM)({name:"DepartmentManagementEdit",emits:["fetch-data"],setup(e,{emit:a}){const l=(0,i.WQ)("$baseMessage"),t=(0,f.Kh)({formRef:null,treeData:[],defaultProps:{children:"children",label:"name"},form:{parentName:"",parentId:""},rules:{parentName:[{required:!0,trigger:"blur",message:"请选择父节点"}],name:[{required:!0,trigger:"blur",message:"请输入名称"}],order:[{required:!0,trigger:"blur",message:"请输入排序"}]},title:"",dialogFormVisible:!1}),r=async()=>{const{data:{list:e}}=await(0,u.vS)();t.treeData=e},o=e=>{t.form.parentName=e.name,t.form.parentId=e.id},d=e=>{e?(t.title="编辑",t.form=JSON.parse(JSON.stringify(e))):t.title="添加",t.dialogFormVisible=!0},n=()=>{t["formRef"].resetFields(),t.form={parentName:"",parentId:""},t.dialogFormVisible=!1},m=()=>{t["formRef"].validate((async e=>{if(e){const{msg:e}=await(0,u.Ed)(t.form);l(e,"success","vab-hey-message-success"),a("fetch-data"),n()}}))};return r(),{...(0,f.QW)(t),handleNodeClick:o,showEdit:d,close:n,save:m}}});function c(e){e.__source="src/views/setting/departmentManagement/components/DepartmentManagementEdit.vue"}var b=l(48499);"function"===typeof c&&c(p);const g=(0,b.A)(p,[["render",s]]);var k=g}}]);