System.register(["../js/index-legacy.f8cb7a75.js","./faq-legacy-9496012e.js","./index-legacy-9c7c096d.js","./index-legacy-1f5ffa81.js","./_plugin-vue_export-helper-legacy-762b7923.js","./request-legacy-b459a1ff.js","./use-route-legacy-bf79aecf.js","./index-legacy-8dff853c.js"],(function(e,t){"use strict";var a,d,n,s,o,r,i,l,c,p,b,g,u,x,f,m,v,w,h,k,A,y,C,q;return{setters:[e=>{a=e.d,d=e.u,n=e.s,s=e.l,o=e.r,r=e.b,i=e.o,l=e.c,c=e.e,p=e.h,b=e.f,g=e.t,u=e.j,x=e.k,f=e.g,m=e.w,v=e.n,w=e.i,h=e.v,k=e.x},e=>{A=e.u},e=>{y=e.I},e=>{C=e.B},e=>{q=e._},null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".disFlex[data-v-d783dbeb],.disFlexc[data-v-d783dbeb],.disFlexs[data-v-d783dbeb],.disFlexb[data-v-d783dbeb]{display:flex;align-items:center}.disFlexb[data-v-d783dbeb]{justify-content:space-between}.disFlexs[data-v-d783dbeb]{flex-direction:column}.disFlexc[data-v-d783dbeb]{justify-content:center;align-items:center}[data-v-d783dbeb]::-webkit-scrollbar{width:2px;background-color:#191a1e;height:8px}[data-v-d783dbeb]::-webkit-scrollbar-track{border-radius:10px;background-color:#191a1e;cursor:pointer}[data-v-d783dbeb]::-webkit-scrollbar-thumb{border-radius:10px;background-color:#2e3036;position:fixed;cursor:pointer}.rule-content[data-v-d783dbeb]{white-space:pre-line;word-break:break-all}.body[data-v-d783dbeb]{min-height:100vh;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top);padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left);padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right);background:#191A1E;background-image:url(/png/faq-head.45f48894.png);background-size:100%;background-repeat:no-repeat}[data-theme=win888] .body[data-v-d783dbeb]{background:#101A2F}.common-title[data-v-d783dbeb]{width:176px;height:29px;background:url(/png/faq-title.02a32330.png) no-repeat;background-size:100% 100%;line-height:29px;font-size:13px;padding:0 12px;color:#fff}input[data-v-d783dbeb]{border:none;outline:none;background:transparent}\n",document.head.appendChild(t);const F={className:"h-14 flex justify-end items-center px-3 text-base text-white"},J={class:"head px-4 flex items-center justify-between pb-5 pt-[66px] h-[156px]"},O=(e=>(h("data-v-d783dbeb"),e=e(),k(),e))((()=>p("div",{class:"text-[27px] whitespace-nowrap font-semibold"},"Hi~",-1))),j={class:"text-[17px] whitespace-nowrap font-semibold"},V={class:"px-4 pb-4"},X={class:"bgContent rounded-lg mt-3 overflow-hidden p-3"},z={class:"flex items-center"},R=["placeholder"],W={class:"mt-2"},U={class:"min-w-[28px] text-center text-xs colorBase"},D=["onClick"],K=a({__name:"index",setup(e){const{query:t}=d(),a=A(),{list:h}=n(a),k=s.get("device"),q=!["ios","android"].includes(k),K=t.safeTop||0,N=o({scrollTop:0}),G=()=>{N.scrollTop=document.documentElement.scrollTop||document.body.scrollTop};return r((()=>{window.removeEventListener("scroll",G)})),i((()=>{a.GetFaqList(),s.set("safeTop",t.safeTop||0),window.addEventListener("scroll",G)})),(e,t)=>{const a=y,d=C;return l(),c("div",{class:"body text-white",style:v({paddingBottom:q?"calc(50px + env(safe-area-inset-top))":"android"===f(k)?"90px":"70px",paddingTop:Number(f(K))?Number(f(K))+40+"px":"env(safe-area-inset-top)"})},[p("div",F,[b(a,{name:"cross",class:"text-[#656E78] text-lg",onClick:t[0]||(t[0]=e=>(()=>{let e=s.get("device");"android"===e?window.jsandroid.closeBrowser():"ios"===e?window.webkit.messageHandlers.closeBrowser.postMessage(""):window.parent.postMessage({type:"closeBrowser"},"*")})())})]),p("div",J,[p("div",null,[O,p("div",j,g(e.$t("bangzhudes")),1)])]),p("div",V,[p("div",X,[p("div",z,[p("div",{class:"py-0 w-full h-[36px] text-[12px] flex justify-between items-center rounded-[4px] px-2 mr-1 bgInput",onClick:t[1]||(t[1]=t=>e.$router.push("/faqSearch"))},[b(a,{name:"search",size:"16",class:"text-[#999]"}),p("input",{type:"text",placeholder:e.$t("shurugjc"),readonly:"",class:"flex-1"},null,8,R)])]),p("div",W,[(l(!0),c(u,null,x(f(h),((t,d)=>(l(),c("div",{class:"flex items-center",key:d},[p("div",U,g(d+1),1),p("div",{class:"pl-0 border-b-[1px] border-gray-100 truncate leading-10 w-full text-sm colorBase",onClick:a=>e.$router.push(`/faqDetail/${t.id}`)},g(t.title),9,D),b(a,{name:"arrow",class:"px-2 colorBase"})])))),128))])])]),p("div",{class:"fixed left-0 bottom-0 w-full bgContent border-t border-gray-200",style:v({paddingBottom:q?"env(safe-area-inset-bottom)":"android"===f(k)?"10px":"env(safe-area-inset-bottom)"})},[b(d,{class:"w-full bgContent colorBase h-12",onClick:t[2]||(t[2]=e=>(()=>{let e=s.get("device");"android"===e?window.jsandroid.toServices():"ios"===e?window.webkit.messageHandlers.toServices.postMessage(""):window.parent.postMessage({type:"toServices"},"*")})())},{default:m((()=>[b(a,{name:f("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABd5JREFUWEetl31slFUWxn/nfd+WZaAbMWGBXepHKmHdP1wVYwxGWD+SyodmN8bKJqtCpwYlpsaPzpQWO3daS9tBpS5RQplpQRKj+LUqrrvsh2LWSMyuwm5014AiGmSlUTDYDnQ695g7nXaL2zJt5f41b+5zzvPcc88594wwxmWMCdLB7PmaletArgCdCUwH0gJHUN1n4fXioOiPzWtuPzRGt0ghoDGbQmkpDiv2PuC8Qnggi/C8h59obVj+j0L40wqImo75Kv5W4IK8o37gHeAvnnifqNJt0ZAIM1C9DLgOmJXHWpTfhuivN2Zl72hCRhUQaUzeDdKO4gM9qrpRkPUJE/58NGfGGK/XL12KldWgV+Rxe4PAlq+tv+OLkexGFFAbT91v4eG8wdue6m2tpmq/+65r3jar32auxNoy8KaBnkD0CF7R349NP/Fex8qVGVWV2sYt1YptBX4A7EdZOJL4/xNQ09S1WFR3oCqIvFA2I7Ps8OHD2V4p/TWwCpg/+r3KUUS3eUXe+tbVKz653yQX+MKrIFMF/nb0UP81HR0rM8PtTxFQ17x5Rn/W+xfqslv+dOxQZsm02cHPrEpK0HmFEmrY/gmg9bILSx5698Oeq6y1f4bcVTYlYuGGUQVE48l2Re5B6O7z+39e1B/MF3gSCI2DfAgqws5e23PzZJniKigG9KLMGX4VQxEYOL1/ANXJCtV4ckCsfREkmAj5MJvXQzrplz1y8gOBn6C0J0z43sH9IQHReOddij4h0K2eXSjW363oD78nec5ckMcEDlr0UeDzkH5WaoyxA3v5FYmndgBLVNmSq2tYdCbIh3qCJ7dg9Vn3raIP+panXWVJXfOmWZl+f5OILB6oeekCXTFRclXKRegAzj3Fh7JDPOapDjWqPg+WSaQx9RrK9RMlPNVOvy6bmZ3+0ZFgEZaXCvkU5D9OwAmUSYXAY9lXoX5dQ3itw0biqV3AggJ2fRKJp3QszgtgMio8MsV+Vj+YXDWmc6mIvnJ6O5mAABFF9SDKHoQ9FrsnKM682bp61dHhZDdv3+6f/+/jB4DS03TOsQqQXYJ90Yq3J2Nlb7tZcWwsUauJJ58Q5K7vJUBUGttMpeti417ReOoOJVcRo6yBKzgJFI+M0E9DWlZmzNVuDhj3isaTNyjy8uj8dDsB7qG4dkSQ6u8TpmrJuJnzBpF46mrgr/lPi4hr9WX/86fNUmu6zrNityJcqco+EW8Dah93IIH9bbHwnIkKiJrkAhVx5eicvewHUmX7aFXRSlF5aDKfxoZasRs6jTG5UEcaO19FdbH77anOGRxGxiskalIVKjyDiPp4V7U0LH8rEk8ZhDUhqz8ypuqrESeiSFNqrlh5Z+AxkrZErLK2ELkx24t75fhqNwNUVFRkHb4mnnxUkHsVNqyLhavdIXul9AP3ICVi4V/kozyy64hJ3ajC70T4JvCL566tv/VwzqnpuNiToM6N4OLRrcpZnupFCr8COhKxcJPDPfDAk1O8ksxHwMeZkpJr199XkY6Y1J0IG1V10TpT9YfTCnCbLoQIXW46aotVOoJc14zGO8sV3Qicn5ffA9qciFW5GTCHqYkn20XlEnpZmkiEj0eaNl8o1tuNsLutIVw+eOyC/wtqG7fMs2RTgrzQ1lDZOGjoJuCTnPPTLHZq+uwf791QvdiVc25FGpOrUJke0pIWYyr6apq2lInN7hRkUlaDSx82tx0ZswAHdGRpr/Q3XiCvtdRVdhfKhxrTNXOdWfHfgWilFiFsRelD/PK2huXvD7cvGIHRyCJm82z1g4vI8u4g2XBsjem81BOtU7gJdHfWZ9kja6oOftffhARE48klijyXm/mFHkXLi3zdn1WZq1lxzceV8OXAFwLNk7XycWMkN4KdEQGReOoNYOGgM3VT1uB4J5LG6i5EtqenffPUhurqodw4gwI6nwa9ZSiRhJ1ZK9vw2JedOvWfruQK5cm4kvC7ztz9C14XwuUqvOmng+UtLbd/OVbS4bhvAT8dcnAyhqrZAAAAAElFTkSuQmCC"),class:"mr-1"},null,8,["name"]),w(" "+g(e.$t("lianxikefu")),1)])),_:1})],4)],4)}}});e("default",q(K,[["__scopeId","data-v-d783dbeb"]]))}}}));
