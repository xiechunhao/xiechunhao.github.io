import{r as _,o as y,c as k,w as i,b as e,e as o,d as c,u as l,z as v,af as f,c8 as m,aC as C,aP as b}from"./index-C4BxmZrN.js";import{i as V}from"./index-CkGVv88Q.js";import{i as B}from"./index-Dtosr6wE.js";import{i as N}from"./index-DSHqkOzX.js";const z={style:{"margin-top":"28px",display:"flex","align-items":"center"}},E={style:{"margin-left":"12px"}},w={style:{height:"320px"}},P={style:{"margin-bottom":"28px"}},$={name:"ExtensionSteps"},A=Object.assign($,{setup(j){const t=_(0),u=_(0),r=()=>{if(t.value<1){t.value=3;return}t.value=t.value-1},d=()=>{if(t.value>2){t.value=0;return}t.value=t.value+1};return(O,p)=>{const a=B,n=C,h=b,s=V,x=N;return y(),k(x,null,{default:i(()=>[e(s,{header:"基础用法"},{default:i(()=>[e(a,{active:t.value,"finish-status":"success",items:[{title:"第一步",description:"填写转账信息"},{title:"第二步",description:"确认转账信息"},{title:"第三步",description:"转账成功"}],"align-center":!!u.value},null,8,["active","align-center"]),o("div",z,[e(n,{onClick:r},{default:i(()=>[c("上一步")]),_:1}),e(n,{type:"primary",onClick:d},{default:i(()=>[c("下一步")]),_:1}),o("div",E,[e(h,{modelValue:u.value,"onUpdate:modelValue":p[0]||(p[0]=g=>u.value=g),"true-value":1,"false-value":0,label:"居中"},null,8,["modelValue"])])])]),_:1}),e(s,{header:"紧凑版"},{default:i(()=>[e(a,{active:t.value,"finish-status":"success",type:"inline",items:[{title:"第一步",description:"填写转账信息"},{title:"第二步",description:"确认转账信息"},{title:"第三步",description:"转账成功"}]},null,8,["active"])]),_:1}),e(s,{header:"竖直方向"},{default:i(()=>[o("div",w,[e(a,{active:t.value,"finish-status":"success",direction:"vertical",items:[{title:"第一步",description:"填写转账信息"},{title:"第二步",description:"确认转账信息"},{title:"第三步",description:"转账成功"}]},null,8,["active"])])]),_:1}),e(s,{header:"带图标紧凑版"},{default:i(()=>[o("div",P,[e(n,{onClick:r},{default:i(()=>[c("上一步")]),_:1}),e(n,{type:"primary",onClick:d},{default:i(()=>[c("下一步")]),_:1})]),e(a,{active:t.value,type:"inline",items:[{title:"账号注册",icon:l(v)},{title:"邮箱验证",icon:l(f)},{title:"注册完成",icon:l(m)}],style:{"--ele-step-icon-size":"24px","--ele-step-line-height":"24px"}},null,8,["active","items"])]),_:1}),e(s,{header:"带图标居中版"},{default:i(()=>[e(a,{active:t.value,"align-center":!0,items:[{title:"账号注册",icon:l(v)},{title:"邮箱验证",icon:l(f)},{title:"注册完成",icon:l(m)}],style:{"--ele-step-icon-size":"24px","--ele-step-line-height":"24px"}},null,8,["active","items"])]),_:1})]),_:1})}}});export{A as default};
