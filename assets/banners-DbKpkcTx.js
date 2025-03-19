import{h as t,j as o,k as e,p as l,z as n,q as a,s,l as r,m as c,aU as u,u as i,aN as b}from"./vendor-Bhb26uf3.js";import{_ as d}from"./index-B2uLNVFs.js";/* empty css               */const f={class:"card-banner art-custom-card"},m={class:"banner-content"},C={class:"banner-icon"},g=["src","alt"],x={class:"banner-text"},p={class:"banner-title custom-text"},_={class:"banner-description custom-text"},k={class:"banner-buttons"},T=d(t({__name:"CardBanner",props:{icon:{default:"/assets/icon1-pO_ZZorG.png"},title:{default:""},description:{default:""},buttonText:{default:"重试"},buttonColor:{default:"var(--main-color)"},buttonTextColor:{default:"#fff"},showCancel:{type:Boolean,default:!1},cancelButtonText:{default:"取消"},cancelButtonColor:{default:"#f5f5f5"},cancelButtonTextColor:{default:"#666"}},emits:["click","cancel"],setup(t,{emit:r}){const c=t,u=r,i=()=>{u("click")},b=()=>{u("cancel")};return(t,r)=>(o(),e("div",f,[l("div",m,[l("div",C,[l("img",{src:c.icon,alt:c.title},null,8,g)]),l("div",x,[l("p",p,n(c.title),1),l("p",_,n(c.description),1)]),l("div",k,[t.showCancel?(o(),e("div",{key:0,class:"banner-button custom-text cancel-button",style:a({backgroundColor:t.cancelButtonColor,color:t.cancelButtonTextColor}),onClick:b},n(t.cancelButtonText),5)):s("",!0),l("div",{class:"banner-button custom-text",style:a({backgroundColor:t.buttonColor,color:t.buttonTextColor}),onClick:i},n(t.buttonText),5)])])]))}}),[["__scopeId","data-v-769abf45"]]),v={class:"basic-banner__content"},h=["src"],B=d(t({__name:"BasicBanner",props:{height:{default:"11rem"},title:{},subtitle:{},buttonText:{default:"查看"},buttonColor:{default:"#fff"},buttonTextColor:{default:"#333"},titleColor:{default:"white"},subtitleColor:{default:"white"},backgroundColor:{default:"var(--el-color-primary-light-2)"},backgroundImage:{default:""}},emits:["click"],setup(t,{emit:r}){const c=r,u=()=>{c("click")};return(t,r)=>(o(),e("div",{class:"basic-banner art-custom-card",style:a({backgroundColor:t.backgroundColor,height:t.height})},[l("div",v,[l("p",{class:"basic-banner__title custom-text",style:a({color:t.titleColor})},n(t.title),5),l("p",{class:"basic-banner__subtitle custom-text",style:a({color:t.subtitleColor})},n(t.subtitle),5),l("div",{class:"basic-banner__button custom-text",style:a({backgroundColor:t.buttonColor,color:t.buttonTextColor}),onClick:u},n(t.buttonText),5),t.backgroundImage?(o(),e("img",{key:0,class:"basic-banner__background-image",src:t.backgroundImage,alt:"背景图片"},null,8,h)):s("",!0)])],4))}}),[["__scopeId","data-v-22d1c17e"]]),y="/assets/icon3-RCDWTWW4.png",I={class:"banners"},F=d(t({__name:"banners",setup(t){const n=()=>{},a=()=>{},s=()=>{};return(t,d)=>{const f=B,m=b,C=u,g=T;return o(),e("div",I,[d[0]||(d[0]=l("h1",{class:"page-title"},"基础横幅",-1)),r(C,{gutter:20},{default:c((()=>[r(m,{xs:24,sm:12,md:12},{default:c((()=>[r(f,{title:"欢迎回来，管理员！",subtitle:"今日系统访问量增长了23%，运行状态良好。",buttonText:"查看详情",buttonColor:"rgb(var(--art-secondary))",buttonTextColor:"#fff",onClick:n})])),_:1}),r(m,{xs:24,sm:12,md:12},{default:c((()=>[r(f,{title:"欢迎使用本系统!",subtitle:"这是一个基于Vue3和Element Plus的后台管理系统模板。",buttonText:"开始使用",buttonColor:"rgb(var(--art-success))",buttonTextColor:"#fff",backgroundColor:"#D4F1F7",titleColor:"#333",subtitleColor:"#666",onClick:n})])),_:1})])),_:1}),d[1]||(d[1]=l("h1",{class:"page-title"},"基础横幅（图片）",-1)),r(C,{gutter:20},{default:c((()=>[r(m,{xs:24,sm:12,md:12},{default:c((()=>[r(f,{title:"欢迎回来，管理员！",subtitle:"今日系统访问量增长了23%，运行状态良好。",buttonText:"查看详情",buttonColor:"#FF3E76",backgroundColor:"#FF80A4",buttonTextColor:"#fff",backgroundImage:i(y),onClick:n},null,8,["backgroundImage"])])),_:1}),r(m,{xs:24,sm:12,md:12},{default:c((()=>[r(f,{title:"欢迎使用本系统!",subtitle:"这是一个基于Vue3和Element Plus的后台管理系统模板。",buttonText:"开始使用",buttonColor:"#1385FF",buttonTextColor:"#fff",backgroundColor:"#88A7FF",backgroundImage:i("/assets/icon7-Za4ive_7.png"),onClick:n},null,8,["backgroundImage"])])),_:1})])),_:1}),d[2]||(d[2]=l("h1",{class:"page-title"},"卡片横幅",-1)),r(C,{gutter:20},{default:c((()=>[r(m,{xs:24,sm:12,md:12,lg:6},{default:c((()=>[r(g,{title:"系统状态良好",description:"所有服务运行正常，无异常情况。",buttonText:"查看详情"})])),_:1}),r(m,{xs:24,sm:12,md:12,lg:6},{default:c((()=>[r(g,{icon:i("/assets/icon2-BIbSUQVD.png"),title:"新消息提醒",description:"您有3条未读消息需要处理。",buttonText:"立即查看",buttonColor:"rgb(var(--art-warning))"},null,8,["icon"])])),_:1}),r(m,{xs:24,sm:12,md:12,lg:6},{default:c((()=>[r(g,{icon:i(y),title:"数据分析报告",description:"本周数据分析报告已生成完毕。",buttonText:"下载报告",buttonColor:"rgb(var(--art-error))"},null,8,["icon"])])),_:1}),r(m,{xs:24,sm:12,md:12,lg:6},{default:c((()=>[r(g,{icon:i("/assets/icon4-BVK-qoMN.png"),title:"系统更新提示",description:"新版本V2.1.0已发布，建议及时更新。",buttonText:"更新",buttonColor:"rgb(var(--art-primary))",showCancel:!0,cancelButtonText:"取消",cancelButtonColor:"#eee",cancelButtonTextColor:"#333",onClick:a,onCancel:s},null,8,["icon"])])),_:1})])),_:1})])}}}),[["__scopeId","data-v-8bab9612"]]);export{F as default};
