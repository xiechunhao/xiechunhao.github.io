var b=(m,l,a)=>new Promise((c,o)=>{var u=n=>{try{r(a.next(n))}catch(e){o(e)}},g=n=>{try{r(a.throw(n))}catch(e){o(e)}},r=n=>n.done?c(n.value):Promise.resolve(n.value).then(u,g);r((a=a.apply(m,l)).next())});import{u as N,c as S,$ as t,T as w,e as _,s as B}from"./bootstrap-BPXRuHYb.mjs";import{a3 as C,W as P,J as $,ae as k,al as V,n as d,ag as f,ao as v,ad as T,ap as p,aw as h,a9 as s,b0 as x,P as y,af as L}from"../jse/index-index-DjctGAIy.mjs";const A={class:"text-muted-foreground"},D=C({name:"AuthenticationCodeLogin",__name:"code-login",props:{formSchema:{},loading:{type:Boolean,default:!1},loginPath:{default:"/auth/login"},title:{default:""},subTitle:{default:""},submitButtonText:{default:""}},emits:["submit"],setup(m,{emit:l}){const a=m,c=l,o=N(),[u,{validate:g}]=S(P({commonConfig:{hideLabel:!0,hideRequiredMark:!0},schema:$(()=>a.formSchema),showDefaultActions:!1}));function r(){return b(this,null,function*(){const{valid:e,values:i}=yield g();e&&c("submit",{code:i==null?void 0:i.code,phoneNumber:i==null?void 0:i.phoneNumber})})}function n(){o.push(a.loginPath)}return(e,i)=>(k(),V("div",null,[d(w,null,{desc:f(()=>[v("span",A,[T(e.$slots,"subTitle",{},()=>[p(h(e.subTitle||s(t)("authentication.codeSubtitle")),1)])])]),default:f(()=>[T(e.$slots,"title",{},()=>[p(h(e.title||s(t)("authentication.welcomeBack"))+" 📲 ",1)])]),_:3}),d(s(u)),d(s(_),{class:x([{"cursor-wait":e.loading},"w-full"]),loading:e.loading,onClick:r},{default:f(()=>[T(e.$slots,"submitButtonText",{},()=>[p(h(e.submitButtonText||s(t)("common.login")),1)])]),_:3},8,["class","loading"]),d(s(_),{class:"mt-4 w-full",variant:"outline",onClick:i[0]||(i[0]=E=>n())},{default:f(()=>[p(h(s(t)("common.back")),1)]),_:1})]))}}),q=C({name:"CodeLogin",__name:"code-login",setup(m){const l=y(!1),a=$(()=>[{component:"VbenInput",componentProps:{placeholder:t("authentication.mobile")},fieldName:"phoneNumber",label:t("authentication.mobile"),rules:B().min(1,{message:t("authentication.mobileTip")}).refine(o=>/^\d{11}$/.test(o),{message:t("authentication.mobileErrortip")})},{component:"VbenPinInput",componentProps:{createText:o=>o>0?t("authentication.sendText",[o]):t("authentication.sendCode"),placeholder:t("authentication.code")},fieldName:"code",label:t("authentication.code"),rules:B().min(1,{message:t("authentication.codeTip")})}]);function c(o){return b(this,null,function*(){console.log(o)})}return(o,u)=>(k(),L(s(D),{"form-schema":a.value,loading:l.value,onSubmit:c},null,8,["form-schema","loading"]))}});export{q as default};
