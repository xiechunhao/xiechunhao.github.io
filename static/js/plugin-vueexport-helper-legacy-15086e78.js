System.register(["./_vue-router@4.3.0@vue-router-legacy-54e91ecf.js","./_vant@4.8.7@vant-legacy-f7c0e61b.js","./_pinia@2.1.7@pinia-legacy-65707c12.js","./_@vue_reactivity@3.4.21@@vue-legacy-116cfd60.js","./_ethers@6.11.1@ethers-legacy-87fa6e82.js","./_moment@2.30.1@moment-legacy-e14d85cc.js","./_lodash@4.17.21@lodash-legacy-ac938251.js","./_@vue_runtime-core@3.4.21@@vue-legacy-f52bb2fe.js","./_@vue_shared@3.4.21@@vue-legacy-2b62d920.js"],(function(e,t){"use strict";var n,a,i,s,o,p,r,d,u,l,y,c,m,h,b,w,g,f,v,T,x,_,k,M;return{setters:[e=>{n=e.u},e=>{a=e.s,i=e.a},e=>{s=e.d},e=>{o=e.r,p=e.a,r=e.u},e=>{d=e.g,u=e.C,l=e.p,y=e.a,c=e.B,m=e.f},null,null,e=>{h=e.b,b=e.y,w=e.E,g=e.G,f=e.z,v=e.A,T=e.F,x=e.J,_=e.H},e=>{k=e.K,M=e.n}],execute:function(){var t=document.createElement("style");t.textContent=".disFlex,.disFlexc,.disFlexs,.disFlexb{display:flex;align-items:center}.disFlexb{justify-content:space-between}.disFlexs{flex-direction:column}.disFlexc{justify-content:center;align-items:center}.head-box{padding-top:45px}.head-box .nav{z-index:9;position:fixed;top:0;left:0;width:100vw;height:11.733333vw;padding:0 4vw;background-color:rgba(250,243,237,.88);display:flex;flex-direction:row;align-items:center;box-shadow:0 1.066667vw 1.066667vw rgba(0,0,0,.1)}.head-box .nav>img{height:40px}.head-box .nav .connectWallet{font-size:28px;width:5.333333vw}.head-box .nav .menu{font-size:24px;margin-left:6vw}.head-box .f-right{margin-left:auto;margin-right:0;display:flex;align-items:center}.head-box .f-right .wallet-address{color:gold;font-weight:700}.van-popup--top{width:none;background:transparent;right:0;pointer-events:none}.popup{width:40%;top:0;right:0;background:rgb(17,32,47);z-index:10001!important}.menu-popup{width:50.666667vw;height:100vh;padding:4vw;background-color:#fff;background:rgb(17,32,47);position:fixed;right:0;pointer-events:painted}.menu-popup .menu-top{height:8.717333vw;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.menu-popup .menu-top img:nth-child(1){height:40px}.iconfont{color:#fff}.menu-popup .menu-top img:nth-child(2){width:5.866667vw;height:5.466667vw}.menu-popup .menu-list{margin-top:8vw;display:flex;flex-direction:column;align-items:flex-start;padding-left:5vw;position:relative}.menu-popup .menu-list .iconfont{width:20px;height:20px}.menu-popup .meun-item{height:8.704vw;margin-bottom:5.333333vw;background-color:rgba(17,32,47,.8);flex-shrink:0;font-size:4.8vw;text-align:left;line-height:8.704vw;color:#fff}.menu-popup .meun-item .iconfont{margin-right:10px}.menu-popup .meun-item .meun-name{font-size:16px}.menu-popup .meun-item.active .iconfont{color:#f5a524}.menu-popup .meun-item.active .meun-name{color:#f5a524;border-bottom:2px solid #f5a524}\n",document.head.appendChild(t);const C="/static/png/logo-f576a825.png",I=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"_decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],A=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_owner",type:"address"},{indexed:!0,internalType:"address",name:"_approved",type:"address"},{indexed:!0,internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_owner",type:"address"},{indexed:!0,internalType:"address",name:"_operator",type:"address"},{indexed:!1,internalType:"bool",name:"_approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_from",type:"address"},{indexed:!0,internalType:"address",name:"_to",type:"address"},{indexed:!0,internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"_approved",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"_name",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_operator",type:"address"},{internalType:"address",name:"_from",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"onERC721Received",outputs:[{internalType:"bytes4",name:"",type:"bytes4"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"_operator",type:"address"},{internalType:"bool",name:"_approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceID",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"_symbol",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"payable",type:"function"}];let F="0x55d398326f99059fF775485246999027B3197955";F="0x1f3cF80e63bF2e338f74707b09712767eaC6bd00";let O={chainId:"0x61",rpcUrls:["https://bsc-testnet.public.blastapi.io"],chainName:"Binance Smart Chain Testnet",blockExplorerUrls:["https://testnet.bscscan.com"],nativeCurrency:{name:"BNB",symbol:"tBnB",decimals:18}};const N={4001:"用戶拒絕鏈接","-32602":"參數錯誤","-32603":"系統錯誤","-32002":"請打開錢包",ACCOUNT_DIS:"賬戶已斷開",SYSTEM_ERROR:"系統錯誤"},j=s("address",(()=>{const e=o("");return{address:e,update:function(t){e.value=d(t)}}}),{persist:!0});class E{static address=null;static provider=null;static wallet=null;static contract=null;static msgParams(e){return{domain:{chainId:window.ethereum.chainId,name:"Login",version:"1"},message:{contents:"Login",nonces:e},primaryType:"Login",types:{EIP712Domain:[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"}],Login:[{name:"contents",type:"string"},{name:"nonces",type:"uint256"}]}}}static init(){this.setProvider()}static async USDT(){return new u(F,I,this.provider).connect(await this.provider.getSigner())}static async transferUSDT(e,t){const n=new u(F,I,this.provider).connect(await this.provider.getSigner());return new Promise((a=>{n.transfer(e,l(t,18)).then((()=>{a({message:"成功",code:200})})).catch((e=>{a({message:"失败",code:500})}))}))}static async ERC721(e){return new u(e,A,this.provider).connect(await this.provider.getSigner())}static setProvider(){null==window.ethereum?(console.log("MetaMask not installed; using read-only defaults"),this.provider=y()):this.provider=new c(window.ethereum)}static async balance(e){const t=await new u(e,I,this.provider),n=await t.balanceOf(this.address),a=await t.decimals();return m(n,a)}static async ownerOf(e,t){const n=await new u(e,A,this.provider);return await n.ownerOf(t)}static async ERC721BalanceOf(e){const t=await new u(e,A,this.provider);return await t.balanceOf(this.address)}}e("C",E);class R{static ether=window.ethereum;static address="";static _isConnected=!1;static get isInstall(){return!!this.ether||(a({message:"请使用钱包浏览器"}).then((()=>{})),!1)}static async initEvent(){this.isInstall&&(await this.disconnect(),await this.message(),await this.connect(),await this.chainChanged(),await this.accountsChanged())}static async disconnect(){this.ether.on("disconnect",(()=>{j().update("")}))}static async accountsChanged(){this.ether.on("accountsChanged",(e=>{e.length>0&&this.setAddress(),e.length||(j().update(""),a({message:`${N.ACCOUNT_DIS}`}).then((()=>{}))),this.ether.removeListener("accountsChanged",(()=>{j().update("")}))}))}static async chainChanged(){this.ether.on("chainChanged",(()=>{window.ethereum.chainId!==O.chainId&&this.switchChain()}))}static async message(){this.ether.on("message",(()=>{}))}static async switchChain(){try{let{chainId:e}=O;await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:e}]})}catch(e){console.log(e.code),4902!==e.code&&-32603!==e.code||await this.addChain(O),console.log("switchError",e)}}static async addChain(e){this.ether.request({method:"wallet_addEthereumChain",params:[e]})}static async connect(){this.ether.on("connect",(()=>{window.ethereum.chainId!==O.chainId&&this.switchChain()}))}static async send(){try{return await this.ether.request({method:"eth_requestAccounts"}),await this.setAddress(),!0}catch(e){return a({message:`${N[e.code.toString()]||"系統錯誤"}`}).then((()=>{})),!1}}static async setAddress(){const e=window.ethereum.selectedAddress;e&&await j().update(e)}static async init(){await this.initEvent(),this.ether.selectedAddress?(await this.setAddress(),await this.switchChain()):await this.send()}static async destroy(){}static async destroyed(){}}const S=(e,t="")=>{let n="";return e?(n+=e.slice(0,5),n+="...",n+=e.slice(-5)):n=t,n},q={class:"head-box"},B={class:"nav f-r-y-c",style:{background:"rgba(17, 32, 47, 1)"}},U={class:"f-r-y-c f-right","data-aos":"fade-left"},z={class:"menu-popup","data-aos-duration":200,"data-aos":"fade-left"},L={class:"menu-top"},D=g("img",{src:C},null,-1),P={class:"menu-list f-1 f-c-x-c"},$=["data-aos-duration","onClick"],V={class:"meun-name"};e("_",{__name:"index",setup(e){const t=n(),a=p({showRight:!1,menuList:[{key:1,menuName:"首页",path:"/home",icon:"icon-shouye"},{key:2,menuName:"NFT仓库",path:"/net",icon:"icon-icon-storage2"},{key:3,menuName:"钱包资产",path:"/wallet",icon:"icon-qianbao"},{key:4,menuName:"我的社群",path:"/community",icon:"icon-shequ"},{key:5,menuName:"邀请链接",path:"/invite",icon:"icon-lianjie"},{key:6,menuName:"生态建设",path:"/ecology",icon:"icon-shengtaiquan"},{key:7,menuName:"排名",path:"/rank",icon:"icon-paiming"},{key:8,menuName:"公益",path:"/welfare",icon:"icon-gongyi"},{key:9,menuName:"节点",path:"/node",icon:"icon-web"}]}),s=(e="/home")=>{t.push({path:e})},o=async()=>{await R.init(),await E.init()},d=j();return h((()=>{o()})),(e,t)=>{const n=i;return b(),w("div",q,[g("div",B,[g("img",{src:C,"data-aos":"fade-right",onClick:t[0]||(t[0]=e=>s("/home"))}),g("div",U,[r(d)?(b(),w("span",{key:1,class:"wallet-address",onClick:o},k(r(S)(r(d).address)),1)):(b(),w("span",{key:0,class:"connectWallet iconfont icon-qianbao",onClick:o})),g("span",{class:"menu iconfont icon-gengduo",onClick:t[1]||(t[1]=e=>r(a).showRight=!0)})])]),r(a).showRight?(b(),f(n,{key:0,show:r(a).showRight,"onUpdate:show":t[3]||(t[3]=e=>r(a).showRight=e),position:"top",style:{width:"50%",height:"100%"}},{default:v((()=>[g("div",z,[g("div",L,[D,g("span",{onClick:t[2]||(t[2]=e=>r(a).showRight=!1),class:"iconfont icon-guanbi"})]),g("div",P,[(b(!0),w(T,null,x(r(a).menuList,((t,n)=>(b(),w("div",{key:n,class:"menu"},[g("div",{class:M(["meun-item",t.path==e.$route.path&&"active"]),"data-aos-duration":String(500+50*n),"data-aos":"fade-left",onClick:e=>s(t.path)},[g("span",{class:M(["iconfont",t.icon])},null,2),g("span",V,k(t.menuName),1)],10,$)])))),128))])])])),_:1},8,["show"])):_("",!0)])}}}),e("a",((e,t)=>{const n=e.__vccOpts||e;for(const[a,i]of t)n[a]=i;return n}))}}}));
