/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 17:39:02 
 */
import{f as q,C as D}from"./index-D5j7Mtop.js";import{a as I}from"./table-BnHdZuoT.js";import{d as M,r as i,p as c,o as f,S as b,T as s,W as o,a8 as N,u as t,b as O,a3 as S,aj as j,h as $,x as L,aO as P,aq as W,bs as z,ar as A,as as G,at as H,bt as J,an as K,au as Q,a9 as X}from"./vsv-element-plus-DDEqdpLt.js";const ae=M({name:"DefaultTableEdit",__name:"DefaultTableEdit",emits:["fetch-data"],setup(Y,{expose:V,emit:v}){const E=v,d=i(),p=i(""),r=i(!1),a=c({title:"",author:"",rate:0,datetime:"",status:"",switch:!1,count:0}),w=c({title:[{required:!0,trigger:"blur",message:"请输入标题"}],author:[{required:!0,trigger:"blur",message:"请输入作者"}]}),g=i([{value:"published",label:"published"},{value:"draft",label:"draft"},{value:"deleted",label:"deleted"}]);V({showEdit:u=>{r.value=!0,L(()=>{u?(p.value="编辑",Object.assign(a,u)):p.value="添加"})}});const _=()=>{var u,e;(u=d.value)==null||u.clearValidate(),(e=d.value)==null||e.resetFields(),E("fetch-data")},k=()=>{var u;(u=d.value)==null||u.validate(async e=>{if(e){const{msg:m}=await I(a);await q(m,"success","hey"),await _(),r.value=!1}})};return(u,e)=>{const m=P,n=W,x=z,y=A,U=G,h=H,C=J,F=K,T=Q,B=X,R=D;return f(),b(R,{modelValue:t(r),"onUpdate:modelValue":e[7]||(e[7]=l=>$(r)?r.value=l:null),"append-to-body":"",title:t(p),width:"500px",onClose:_},{footer:s(()=>[o(B,{type:"primary",onClick:k},{default:s(()=>e[8]||(e[8]=[N("保存")])),_:1})]),default:s(()=>[o(T,{ref_key:"formRef",ref:d,"label-width":"80px",model:t(a),rules:t(w)},{default:s(()=>[o(n,{label:"标题",prop:"title"},{default:s(()=>[o(m,{modelValue:t(a).title,"onUpdate:modelValue":e[0]||(e[0]=l=>t(a).title=l),modelModifiers:{trim:!0},clearable:""},null,8,["modelValue"])]),_:1}),o(n,{label:"作者",prop:"author"},{default:s(()=>[o(m,{modelValue:t(a).author,"onUpdate:modelValue":e[1]||(e[1]=l=>t(a).author=l),modelModifiers:{trim:!0},clearable:""},null,8,["modelValue"])]),_:1}),o(n,{label:"时间",prop:"datetime"},{default:s(()=>[o(x,{modelValue:t(a).datetime,"onUpdate:modelValue":e[2]||(e[2]=l=>t(a).datetime=l),placeholder:"选择日期时间",type:"datetime"},null,8,["modelValue"])]),_:1}),o(n,{label:"状态",prop:"status"},{default:s(()=>[o(U,{modelValue:t(a).status,"onUpdate:modelValue":e[3]||(e[3]=l=>t(a).status=l),clearable:""},{default:s(()=>[(f(!0),O(S,null,j(t(g),l=>(f(),b(y,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(n,{label:"数量",prop:"count"},{default:s(()=>[o(h,{modelValue:t(a).count,"onUpdate:modelValue":e[4]||(e[4]=l=>t(a).count=l)},null,8,["modelValue"])]),_:1}),o(n,{label:"评级",prop:"rate"},{default:s(()=>[o(C,{modelValue:t(a).rate,"onUpdate:modelValue":e[5]||(e[5]=l=>t(a).rate=l)},null,8,["modelValue"])]),_:1}),o(n,{label:"开关",prop:"switch"},{default:s(()=>[o(F,{modelValue:t(a).switch,"onUpdate:modelValue":e[6]||(e[6]=l=>t(a).switch=l)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});export{ae as _};
