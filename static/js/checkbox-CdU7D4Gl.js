/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-10-12 15:51:39 
 */
import{d as F,b as x,K as o,S as a,B as s,o as r,u as t,I as d,Y as _,F as C,a2 as B,A as g}from"./vsv-element-plus-CqWB58IK.js";const L={class:"checkbox-container no-background-container"},G=F({name:"Checkbox",__name:"checkbox",setup(N){const m=ref(!0),b=ref(!1),f=ref(!0),V=ref(["选中且禁用","复选框 A"]),k=ref(["上海","北京"]),U=ref(["上海","北京","广州","深圳"]),p=ref(["上海"]),c=ref(!0),i=ref(!1);return(w,l)=>{const u=s("el-checkbox"),n=s("vab-card"),v=s("el-checkbox-group"),A=s("el-checkbox-button");return r(),x("div",L,[o(n,{title:"基础用法"},{default:a(()=>[o(u,{modelValue:t(m),"onUpdate:modelValue":l[0]||(l[0]=e=>d(m)?m.value=e:null)},{default:a(()=>l[8]||(l[8]=[_("备选项1")])),_:1},8,["modelValue"])]),_:1}),o(n,{title:"禁用状态"},{default:a(()=>[o(u,{modelValue:t(b),"onUpdate:modelValue":l[1]||(l[1]=e=>d(b)?b.value=e:null),disabled:""},{default:a(()=>l[9]||(l[9]=[_("备选项1")])),_:1},8,["modelValue"]),o(u,{modelValue:t(f),"onUpdate:modelValue":l[2]||(l[2]=e=>d(f)?f.value=e:null),disabled:""},{default:a(()=>l[10]||(l[10]=[_("备选项2")])),_:1},8,["modelValue"])]),_:1}),o(n,{title:"多选框组"},{default:a(()=>[o(v,{modelValue:t(V),"onUpdate:modelValue":l[3]||(l[3]=e=>d(V)?V.value=e:null)},{default:a(()=>[o(u,{label:"复选框 A",value:"复选框 A"}),o(u,{label:"复选框 B",value:"复选框 B"}),o(u,{label:"复选框 C",value:"复选框 C"}),o(u,{disabled:"",label:"禁用",value:"禁用"}),o(u,{disabled:"",label:"选中且禁用",value:"选中且禁用"})]),_:1},8,["modelValue"])]),_:1}),o(n,{title:"可选项目数量的限制"},{default:a(()=>[o(v,{modelValue:t(k),"onUpdate:modelValue":l[4]||(l[4]=e=>d(k)?k.value=e:null),max:2,min:1},{default:a(()=>[(r(!0),x(C,null,B(t(U),e=>(r(),g(u,{key:e,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(n,{title:"按钮样式"},{default:a(()=>[o(v,{modelValue:t(p),"onUpdate:modelValue":l[5]||(l[5]=e=>d(p)?p.value=e:null)},{default:a(()=>[(r(!0),x(C,null,B(t(U),e=>(r(),g(A,{key:e,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(n,{title:"带有边框"},{default:a(()=>[o(u,{modelValue:t(c),"onUpdate:modelValue":l[6]||(l[6]=e=>d(c)?c.value=e:null),border:"",label:"备选项1"},null,8,["modelValue"]),o(u,{modelValue:t(i),"onUpdate:modelValue":l[7]||(l[7]=e=>d(i)?i.value=e:null),border:"",label:"备选项2"},null,8,["modelValue"])]),_:1})])}}});export{G as default};
