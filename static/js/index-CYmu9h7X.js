/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-11-12 16:06:55 
 */
import{d as w,N as i,o as A,b as C,T as t,$ as l,u as a,k as v,a4 as o,e as s}from"./vsv-element-plus-Brnt1GMz.js";import{_ as N}from"./index-D0bnGtHt.js";import"./vsv-icon-CX0cXpax.js";import"./vsv-nprogress-Cnw-SRAI.js";const P={class:"description-container no-background-container"},W=w({name:"Description",__name:"index",setup(D){const u=ref("default"),m=ref(!1),d=ref(["1","2","3","4"]),S=z=>{z?d.value="1":d.value=["1","2","3","4"]};return(z,e)=>{const g=i("el-radio"),V=i("el-radio-group"),k=i("el-button"),n=i("el-descriptions-item"),f=i("el-tag"),p=i("el-descriptions"),y=i("vab-card"),_=i("el-switch"),b=i("el-collapse-item"),x=i("el-collapse");return A(),C("div",P,[t(y,null,{default:l(()=>[t(V,{modelValue:a(u),"onUpdate:modelValue":e[0]||(e[0]=r=>v(u)?u.value=r:null)},{default:l(()=>[t(g,{label:"large",value:"large"},{default:l(()=>e[3]||(e[3]=[o("默认")])),_:1}),t(g,{label:"default",value:"default"},{default:l(()=>e[4]||(e[4]=[o("中等")])),_:1}),t(g,{label:"small",value:"small"},{default:l(()=>e[5]||(e[5]=[o("小")])),_:1})]),_:1},8,["modelValue"]),t(p,{border:"",column:3,size:a(u),title:"带边框"},{extra:l(()=>[t(k,{size:"small",type:"primary"},{default:l(()=>e[6]||(e[6]=[o("Operation")])),_:1})]),default:l(()=>[t(n,null,{label:l(()=>e[7]||(e[7]=[o("Username")])),default:l(()=>[e[8]||(e[8]=o(" kooriookami "))]),_:1}),t(n,null,{label:l(()=>e[9]||(e[9]=[o("Telephone")])),default:l(()=>[e[10]||(e[10]=o(" 18100000000 "))]),_:1}),t(n,null,{label:l(()=>e[11]||(e[11]=[o("Place")])),default:l(()=>[e[12]||(e[12]=o(" Suzhou "))]),_:1}),t(n,null,{label:l(()=>e[13]||(e[13]=[o("Remarks")])),default:l(()=>[t(f,{size:"small"},{default:l(()=>e[14]||(e[14]=[o("School")])),_:1})]),_:1}),t(n,null,{label:l(()=>e[15]||(e[15]=[o("Address")])),default:l(()=>[e[16]||(e[16]=o(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province "))]),_:1})]),_:1},8,["size"]),t(p,{column:3,size:a(u),title:"不带边框"},{extra:l(()=>[t(k,{size:"small",type:"primary"},{default:l(()=>e[17]||(e[17]=[o("Operation")])),_:1})]),default:l(()=>[t(n,{label:"Username"},{default:l(()=>e[18]||(e[18]=[o("kooriookami")])),_:1}),t(n,{label:"Telephone"},{default:l(()=>e[19]||(e[19]=[o("18100000000")])),_:1}),t(n,{label:"Place"},{default:l(()=>e[20]||(e[20]=[o("Suzhou")])),_:1}),t(n,{label:"Remarks"},{default:l(()=>[t(f,{size:"small"},{default:l(()=>e[21]||(e[21]=[o("School")])),_:1})]),_:1}),t(n,{label:"Address"},{default:l(()=>e[22]||(e[22]=[o("No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province")])),_:1})]),_:1},8,["size"]),t(p,{border:"",column:4,direction:"vertical",size:a(u),title:"带边框的垂直列表"},{default:l(()=>[t(n,{label:"Username"},{default:l(()=>e[23]||(e[23]=[o("kooriookami")])),_:1}),t(n,{label:"Telephone"},{default:l(()=>e[24]||(e[24]=[o("18100000000")])),_:1}),t(n,{label:"Place",span:2},{default:l(()=>e[25]||(e[25]=[o("Suzhou")])),_:1}),t(n,{label:"Remarks"},{default:l(()=>[t(f,{size:"small"},{default:l(()=>e[26]||(e[26]=[o("School")])),_:1})]),_:1}),t(n,{label:"Address"},{default:l(()=>e[27]||(e[27]=[o("No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province")])),_:1})]),_:1},8,["size"]),t(p,{column:4,direction:"vertical",size:a(u),title:"无边框的垂直列表"},{default:l(()=>[t(n,{label:"Username"},{default:l(()=>e[28]||(e[28]=[o("kooriookami")])),_:1}),t(n,{label:"Telephone"},{default:l(()=>e[29]||(e[29]=[o("18100000000")])),_:1}),t(n,{label:"Place",span:2},{default:l(()=>e[30]||(e[30]=[o("Suzhou")])),_:1}),t(n,{label:"Remarks"},{default:l(()=>[t(f,{size:"small"},{default:l(()=>e[31]||(e[31]=[o("School")])),_:1})]),_:1}),t(n,{label:"Address"},{default:l(()=>e[32]||(e[32]=[o("No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province")])),_:1})]),_:1},8,["size"])]),_:1}),t(y,null,{default:l(()=>[e[37]||(e[37]=o(" 手风琴 ")),t(_,{modelValue:a(m),"onUpdate:modelValue":e[1]||(e[1]=r=>v(m)?m.value=r:null),"inline-prompt":"",onChange:S},null,8,["modelValue"]),t(x,{modelValue:a(d),"onUpdate:modelValue":e[2]||(e[2]=r=>v(d)?d.value=r:null),accordion:a(m)},{default:l(()=>[t(b,{name:"1",title:"Consistency"},{default:l(()=>e[33]||(e[33]=[s("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1),s("div",null," Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. ",-1)])),_:1}),t(b,{name:"2",title:"Feedback"},{default:l(()=>e[34]||(e[34]=[s("div",null,"Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;",-1),s("div",null,"Visual feedback: reflect current state by updating or rearranging elements of the page.",-1)])),_:1}),t(b,{name:"3",title:"Efficiency"},{default:l(()=>e[35]||(e[35]=[s("div",null,"Simplify the process: keep operating process simple and intuitive;",-1),s("div",null,"Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;",-1),s("div",null," Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling. ",-1)])),_:1}),t(b,{name:"4",title:"Controllability"},{default:l(()=>e[36]||(e[36]=[s("div",null,"Decision making: giving advices about operations is acceptable, but do not make decisions for the users;",-1),s("div",null," Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation. ",-1)])),_:1})]),_:1},8,["modelValue","accordion"])]),_:1})])}}}),B=N(W,[["__scopeId","data-v-a8c349db"]]);export{B as default};
