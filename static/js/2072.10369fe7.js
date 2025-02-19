/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2025-02-19 17:40:53
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2072],{4e4:function(e,t,l){l.r(t),l.d(t,{default:function(){return V}});var a=l(7908),u=(l(21332),l(66050),l(84106)),n=(l(35222),l(94230),l(7036)),r=(l(41992),l(36498)),o=(l(57593),l(93747),l(11551)),i=(l(64731),l(56637)),s=(l(3891),l(27055)),d=(l(89917),l(34641)),b=l(27386);const c={class:"detail-container"};function f(e,t,l,f,k,m){const p=s.IO,y=i.KR,h=o.WK,_=n.xE,v=r.S2,F=n.US,W=a.MF,q=u.og,w=a.TS,V=(0,d.g2)("vab-json-viewer");return(0,d.uX)(),(0,d.CE)("div",c,[(0,d.bF)(p,{content:"【"+e.title+"】详情页面",onBack:e.goBack},null,8,["content","onBack"]),(0,d.bF)(y,{closable:!1,"show-icon":"",title:"详情页菜单高亮，并缓存详情页，返回上一页再次打开可看到效果，dynamicNewTab可配置详情页只打开一个tab页还是可以根据参数不同无限打开多个，当前展示的是可以打开多个",type:"success"}),(0,d.bF)(F,{inline:"",model:e.form},{default:(0,d.k6)((()=>[(0,d.bF)(_,{label:"输入框缓存"},{default:(0,d.k6)((()=>[(0,d.bF)(h,{modelValue:e.form.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.text=t)},null,8,["modelValue"])])),_:1}),(0,d.bF)(_,{"label-width":0},{default:(0,d.k6)((()=>[(0,d.bF)(v,{icon:e.Refresh,type:"primary",onClick:e.handleRefreshMainPage},{default:(0,d.k6)((()=>t[2]||(t[2]=[(0,d.eW)(" 刷新综合表格页面 ")]))),_:1},8,["icon","onClick"])])),_:1})])),_:1},8,["model"]),(0,d.bF)(w,{border:"",column:3,title:"详情"},{extra:(0,d.k6)((()=>[(0,d.bF)(v,{size:"small",type:"primary"},{default:(0,d.k6)((()=>t[3]||(t[3]=[(0,d.eW)("操作")]))),_:1})])),default:(0,d.k6)((()=>[(0,d.bF)(W,null,{label:(0,d.k6)((()=>t[4]||(t[4]=[(0,d.eW)("标题")]))),default:(0,d.k6)((()=>[(0,d.eW)(" "+(0,b.v_)(e.route.query.title),1)])),_:1}),(0,d.bF)(W,null,{label:(0,d.k6)((()=>t[5]||(t[5]=[(0,d.eW)("作者")]))),default:(0,d.k6)((()=>[(0,d.eW)(" "+(0,b.v_)(e.route.query.author),1)])),_:1}),(0,d.bF)(W,null,{label:(0,d.k6)((()=>t[6]||(t[6]=[(0,d.eW)("时间")]))),default:(0,d.k6)((()=>[(0,d.eW)(" "+(0,b.v_)(e.route.query.datetime),1)])),_:1}),(0,d.bF)(W,null,{label:(0,d.k6)((()=>t[7]||(t[7]=[(0,d.eW)("评级")]))),default:(0,d.k6)((()=>[(0,d.bF)(q,{modelValue:e.route.query.rate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.route.query.rate=t),disabled:""},null,8,["modelValue"])])),_:1}),(0,d.bF)(W,null,{label:(0,d.k6)((()=>t[8]||(t[8]=[(0,d.eW)("备注")]))),default:(0,d.k6)((()=>[(0,d.eW)(" "+(0,b.v_)(e.route.query.description),1)])),_:1}),(0,d.bF)(W,null,{label:(0,d.k6)((()=>t[9]||(t[9]=[(0,d.Lk)("i",{class:"el-icon-office-building"},null,-1),(0,d.eW)(" 联系地址 ")]))),default:(0,d.k6)((()=>[t[10]||(t[10]=(0,d.eW)(" 江苏省苏州市吴中区吴中大道 1188 号 "))])),_:1})])),_:1}),(0,d.bF)(V,{copyable:"","expand-depth":5,sort:"",value:e.route},null,8,["value"])])}var k=l(66183),m=l(25967),p=l(98969),y=l.n(p),h=l(39928),_=l(37489),v=l(12176),F=(0,d.pM)({name:"Detail",components:{VabJsonViewer:y()},setup(){const e=(0,v.lq)(),t=(0,d.WQ)("$pub"),l=(0,k.Z)(),{changeTabsMeta:a,delVisitedRoute:u}=l,n=(0,_.Kh)({route:{query:{title:"加载中"}},rate:0,form:{text:""},title:"加载中"}),r=async()=>{await u((0,m.QG)(e,!0)),history.back()},o=()=>{t("reload-router-view","ComprehensiveTable")};return(0,d.sV)((()=>{a({title:"详情页",meta:{title:`${e.query.title} 详情页`}}),n.title=e.query.title,n.route={path:e.path,params:e.params,query:{...e.query,rate:parseInt(e.query.rate)},name:e.name,meta:e.meta}})),{...(0,_.QW)(n),goBack:r,handleRefreshMainPage:o,Refresh:h.Refresh}}});function W(e){e.__source="src/views/vab/table/detail.vue"}var q=l(48499);"function"===typeof W&&W(F);const w=(0,q.A)(F,[["render",f]]);var V=w}}]);