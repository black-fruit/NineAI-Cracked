import{d as q,u as G,b7 as ee,y as Q,e as h,r as b,f as se,o as a,c as d,a as e,F as z,l as F,A as _,j as s,v as L,t as $,bf as he,b as te,w as oe,i as c,k as I,_ as N,q as S,s as me,E as T,b_ as be,bc as ge,af as ye,b$ as we,V as ke,c0 as Ce,aw as Ae,M as $e,H as ne,z as Ie,aq as Se,n as je,bg as Me,ay as Be}from"./index-12f140ef.js";import{u as Re}from"./useScroll-fed39bfa.js";import{c as Ne}from"./index-c94da121.js";const Le=["onClick"],Pe=["src"],le=q({__name:"index",setup(P){const k=G(),C=ee(),{isMobile:r}=Q(),i=h(()=>{var f;return Number((f=k.globalConfig)==null?void 0:f.isShowAppCatIcon)===1}),m=b([]),u=b(0);async function g(){var o;const f=await he(),B={id:0,name:"全部分类"};m.value=[B,...(o=f==null?void 0:f.data)==null?void 0:o.rows]}function j(f){u.value=f,C.setCatId(f)}se(()=>{g()});const M=h(()=>r.value?["w-full flex "]:["w-[230px]"]);return(f,B)=>(a(),d("div",{class:_(["h-full",s(M)])},[e("div",{class:_(["app-sidebar bg-[#f8f8f8] w-full h-full overflow-x-scroll dark:bg-[#18181c]",[s(r)?" py-2 p-2 flex scrollbar-w-1":"p-4 overflow-y-scroll"]])},[(a(!0),d(z,null,F(m.value,(o,v)=>(a(),d("div",{key:o.id,class:_(["dark:bg-[#101014] dark:border-neutral-800 relative flex flex-row items-center gap-3 break-all border rounded-md cursor-pointer break-all text-ellipsis whitespace-nowrap select-none",[u.value===o.id?"bg-[#5a91fc] dark:bg-[#34373c] text-[#fff] font-bold":"bg-[#fff] hover:bg-neutral-100 dark:hover:bg-[#24272e]",s(r)?"px-4 py-1 mr-2":" px-3 py-2 mb-2 ",!s(r)&&s(i)?"pl-14":"justify-center"]]),onClick:p=>j(o.id)},[!s(r)&&s(i)?(a(),d("img",{key:0,class:_([v>0?"w-7 rounded-md mr-3":""]),src:o.coverImg,alt:""},null,10,Pe)):L("",!0),e("span",null,$(o.name),1)],10,Le))),128))],2)],2))}});const Oe={class:"p-4"},Te={class:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"},ze=["onClick"],qe={class:"w-full h-16 flex items-center"},De={class:"w-14 h-14 flex justify-center items-center rounded-md shadow-md mr-5 border border-[#00000014]"},Ve=["src"],Fe={class:"text-base font-bold mb-1 text-base text-[#333] dark:text-[#ffffff85]"},Qe={class:"w-full mb-1 text-[#999999] text-xs py-2"},Ee={class:"w-full flex justify-between"},Je=q({__name:"index",emits:["run-app"],setup(P,{emit:k}){const C=te(),r=ee(),i=h(()=>r.catId),m=b([]),u=b([]),g=h(()=>r.mineApps);function j(o){return g.value.some(v=>v.appId===o.id)}async function M(){var v;const o=await be();m.value=(v=o==null?void 0:o.data)==null?void 0:v.rows.map(p=>(p.loading=!1,p)),u.value=m.value}async function f(o){o.loading=!0;try{const v=await ge({appId:o.id});C.success(v.data),await r.queryMineApps(),o.loading=!1}catch{o.loading=!1}}function B(o){k("run-app",o)}return oe(i,o=>{o?u.value=m.value.filter(v=>v.catId===o):u.value=m.value}),se(()=>{M()}),(o,v)=>(a(),d("div",Oe,[e("div",Te,[(a(!0),d(z,null,F(u.value,p=>(a(),d("div",{key:p.id,class:"custom-card cursor-pointer border border-[#e0e0e0] dark:border-neutral-800 p-4 pt-2 border rounded-md flex flex-col justify-center items-center hover:bg-neutral-100 dark:hover:bg-[#24272e] select-none",onClick:y=>B(p)},[e("div",qe,[e("span",De,[e("img",{src:p.coverImg,class:"w-8 h-8 mb-1",alt:""},null,8,Ve)]),e("span",Fe,$(p.name),1)]),e("p",Qe,$(p.des),1),e("div",Ee,[c(s(T),{size:"tiny",ghost:"",disabled:p.loading,onClick:me(y=>f(p),["stop"])},{icon:I(()=>[c(s(N),{icon:j(p)?"iconamoon:sign-minus-bold":"mi:add",class:"text-base"},null,8,["icon"])]),default:I(()=>[S(" "+$(j(p)?"取消收藏":"加入个人工作台"),1)]),_:2},1032,["disabled","onClick"]),c(s(N),{icon:"codicon:run-all",class:"run-icon text-xl text-[#5A91FC]"})])],8,ze))),128))])]))}});const Ue="/assets/empty-07715984.png",He={class:"ground-left-input select-none"},Ge={class:"ground-left-tips flex justify-between px-3 py-2"},Ke={class:"text-[#999] text-xs flex items-center"},We={class:"text-base"},Xe=e("b",{class:"font-bold"},"剩余额度:",-1),Ye={class:"ml-2 font-bold text-[#5a91fc] cursor-pointer",style:{"text-decoration":"underline"}},Ze=e("div",{class:"text-[#999] text-sm whitespace-nowrap"}," 每次创作消耗1额度、每次创作会产生新的内容！ ",-1),es=e("span",{class:"text-base whitespace-nowrap"},"立即创作",-1),ss=e("span",{class:"text-xs whitespace-nowrap"},"消耗1次额度",-1),ts=[es,ss],os={class:"flex-1 mt-4flex flex-col mt-6"},ns=e("span",{class:"font-bold text-[#5a91fc] mb-3"},"示例需求",-1),ls=["onClick"],as=e("span",{class:"circle mr-4"},null,-1),rs={class:"flex-1 select-none text-left"},cs={class:"ground-right-header p-2 flex justify-between items-center"},ds={class:"flex items-center px-3 pt-2"},is={class:"w-10 h-10 flex justify-center items-center rounded-md shadow-md mr-5 border border-[#00000014]"},us=["src"],fs={class:"text-base font-bold"},ps={class:"flex p-4 bg-[#f6fcfa] rounded-md dark:bg-[#18181c] max-h-[120px] overflow-hidden"},_s=["src"],vs={class:"flex p-4 border-b-2 border-dotted border-gray-200 dark:border-[#ffffff17] min-h-[80px]"},xs=["src"],hs={style:{"white-space":"pre-wrap"}},ms={class:"px-4 py-2 flex justify-end"},bs={key:1,class:"flex-1 px-5 py-4 overflow-y-scroll flex flex-col justify-center items-center"},gs=["src"],ys=e("span",{class:"mt-5 text-[#999]"},"您还没有使用过这个应用呢、快来试试吧！",-1),ws=e("div",null,null,-1),ks=q({__name:"index",props:{app:null},emits:["close"],setup(P,{emit:k}){const C=P,{scrollRef:r,scrollToBottom:i,scrollToBottomIfAtBottom:m}=Re(),{isMobile:u}=Q(),g=G(),j=h(()=>g.userInfo.avatar),M=h(()=>g.userBalance.sumModel3Count),f=te(),B=b(1e7),o=b(null);b(null);const v=b(null),p=b(!1),y=b(""),A=b([]),K=b(""),R=h(()=>C.app),ae=h(()=>{var n;const t=(n=R.value)==null?void 0:n.demoData;return t?t.split(`
`):[]}),E=h(()=>A.value.some(t=>t.loading)),J=h(()=>A.value.filter(t=>t.conversationOptions).map(t=>t.conversationOptions?JSON.parse(t.conversationOptions):{}));oe(R,t=>{var n;!t||E.value||((n=o.value)==null||n.focus(),t.coverImg&&(K.value=t.coverImg),re())});async function re(){var n,w;if(!((n=R.value)!=null&&n.id))return;const t=await Ce({appId:(w=R.value)==null?void 0:w.id});A.value=t.data.rows.map(l=>(l.loading=!1,l)).sort((l,x)=>l.id-x.id),i()}function ce(){var n;const t=B.value;return A.value.push({id:t,loading:!0,appId:((n=R.value)==null?void 0:n.id)??0,prompt:y.value,answer:"思考中..."}),B.value=B.value+1,t}function U(t,n){const w=A.value.findIndex(l=>l.id===t);w!==-1&&(A.value[w]={...A.value[w],...n})}function de(t){t&&(Ne({text:t}),f.success("复制成功"))}function ie(t){f.warning("即将开放、请稍作等待！")}function ue(t){const{prompt:n}=t;n&&(y.value=n,H())}async function H(){var l;if((l=o.value)==null||l.focus(),!y.value||E.value)return;let t={model:3};J.value.length>0&&(t={...J.value[J.value.length-1],...t});const n=ce();i();const w=y.value;y.value="";try{const x="";await(async()=>{await Ae({prompt:w,appId:R.value.id,options:t,onDownloadProgress:({event:_e})=>{var Y;const ve=_e.target,{responseText:V}=ve,W=V.lastIndexOf(`
`,V.length-2);let X=V;W!==-1&&(X=V.substring(W));try{const O=JSON.parse(X),Z=(Y=O==null?void 0:O.detail)==null?void 0:Y.userBanance;Z&&g.updateUserBanance(Z);const xe=x+(O.text??"");U(n,{answer:xe}),m()}catch{}}}),p.value=!1})()}catch(x){x!=null&&x.message&&U(n,{answer:x==null?void 0:x.message})}U(n,{loading:!1})}function fe(){k("close")}function pe(t){y.value=t,H()}return(t,n)=>{var w;return a(),d("div",{class:_(["w-full h-full ground flex justify-between",[s(u)?"flex-col":""]])},[e("div",{class:_(["ground-left flex flex-col h-full",[s(u)?"w-full":"w-6/12 border-[#0000000a] border-r dark:border-[#ffffff17]"]])},[e("div",He,[ye(e("textarea",{ref_key:"inputRef",ref:o,"onUpdate:modelValue":n[0]||(n[0]=l=>y.value=l),class:"textarea dark:bg-[#18181c]",type:"textarea",placeholder:"请输入关键词和需求"},null,512),[[we,y.value]]),e("div",Ge,[e("div",Ke,[c(s(N),{icon:"ph:info",class:"mr-1"}),S(" "+$(s(u)?"请合规使用！":"请您合法合规使用A功能，并自行核查生成内容，相关责任由您自行承拒。"),1)]),c(s(T),{ghost:"",text:"",size:"tiny",onClick:n[1]||(n[1]=l=>y.value="")},{icon:I(()=>[c(s(N),{icon:"carbon:delete"})]),default:I(()=>[S(" 清空内容 ")]),_:1})]),e("div",{class:_(["flex py-4 px-4 bg-[#10b9810a]",[s(u)?"flex-col":"flex-row justify-between"]])},[e("div",{class:_(["flex flex-col",[s(u)?"mb-3":"justify-between"]])},[e("div",We,[Xe,e("span",Ye,$(s(M))+"次",1)]),Ze],2),e("div",{class:_(["run-btn flex flex-col justify-center items-center rounded-md px-16 py-1 select-none",[s(E)?"cursor-not-allowed disabled":"cursor-pointer"]]),onClick:H},ts,2)],2)]),e("div",os,[ns,e("div",{class:_(["flex-1 overflow-y-scroll pl-2 pr-5 py-4",[s(u)?"":"h-[150px]"]])},[(a(!0),d(z,null,F(s(ae),(l,x)=>(a(),d("div",{key:x,class:"border dark:border-[#ffffff17] px-3 py-1 rounded-md mb-2 flex justify-between items-center cursor-pointer transition hover:border-[#5a91fc] hover:text-[#5a91fc]",onClick:D=>pe(l)},[as,e("div",rs,$(l),1),c(s(N),{class:"w-6 text-xl",icon:"material-symbols:tips-and-updates-outline"})],8,ls))),128))],2)])],2),e("div",{class:_(["flex flex-col",[s(u)?"w-full":"w-6/12"]])},[e("div",cs,[e("div",ds,[e("span",is,[e("img",{src:K.value,class:"w-6 h-6 mb-1",alt:""},null,8,us)]),e("span",fs,$((w=s(R))==null?void 0:w.name),1)]),e("span",{class:"w-6 h-6 hover:bg-neutral-100 cursor-pointer flex justify-center items-center",onClick:fe},[c(s(N),{class:"text-xl",icon:"iconamoon:close-bold"})])]),A.value.length?(a(),d("div",{key:0,id:"scrollRef",ref_key:"scrollRef",ref:r,class:"flex-1 px-5 py-4 overflow-y-scroll"},[e("div",{ref_key:"playgroundTopRef",ref:v},null,512),(a(!0),d(z,null,F(A.value,(l,x)=>(a(),d("div",{key:l.id,class:_(["mb-8 border rounded-md dark:border-[#ffffff17]",[l.loading?"border-[#5a91fc]":""]])},[e("div",ps,[e("img",{src:s(j),class:"w-6 h-6 mr-3 rounded-full",alt:""},null,8,_s),e("div",null,$(l.prompt),1)]),e("div",vs,[e("img",{src:s(R).coverImg,class:"w-6 h-6 mr-3 rounded-full",alt:""},null,8,xs),e("div",hs,$(l.answer),1)]),e("div",ms,[c(s(ke),null,{default:I(()=>[c(s(T),{size:"small",disabled:l.loading,onClick:D=>ie(l)},{default:I(()=>[S(" 智能续写 ")]),_:2},1032,["disabled","onClick"]),c(s(T),{size:"small",loading:l.loading,onClick:D=>ue(l)},{default:I(()=>[S(" 重新创作 ")]),_:2},1032,["loading","onClick"]),c(s(T),{size:"small",onClick:D=>de(l.answer)},{default:I(()=>[S(" 复制文案 ")]),_:2},1032,["onClick"])]),_:2},1024)])],2))),128))],512)):L("",!0),A.value.length?L("",!0):(a(),d("div",bs,[e("img",{src:s(Ue),class:"w-24 h-24",alt:""},null,8,gs),ys])),ws],2)],2)}}});const Cs={key:0,class:"flex pl-5 h-full items-center space-x-2 overflow-hidden pr-2"},As={class:"text-base text-[#999999]"},$s={class:"text-sm ml-2"},Is=q({__name:"index",setup(P){const k=$e(),{isMobile:C}=Q();return(r,i)=>(a(),d(z,null,[s(C)?L("",!0):(a(),d("div",Cs,[e("button",{onClick:i[0]||(i[0]=m=>s(k).go(-1))},[c(s(N),{class:"text-xl",icon:"arcticons:huawei-tips"})]),e("h2",As,[S(" Tips: "),e("span",$s,[S("当前正在快速迭代中、有任何疑问请联系管理员处理解决、当前模式在此处直接使用应用、加入个人工作台的应用将会与对话窗口联动使用、您也可以前往 "),e("span",{class:"text-[#5a91fc] cursor-pointer",onClick:i[1]||(i[1]=m=>s(k).push("/role"))},"个人工作台"),S(" 创建您的自定义专属应用！ ")])])])),s(C)?(a(),ne(le,{key:1})):L("",!0)],64))}}),Ss={class:"h-full dark:bg-[#24272e] transition-all"},js={class:"h-12 header border-[#e1e1e1] dark:border-[#ffffff17] border-b-2"},Ms={key:0,class:"h-full"},Bs={class:"flex flex-col w-full"},Ps=q({__name:"index",setup(P){const k=Ie();Se();const C=G(),{isMobile:r}=Q();h(()=>C.isLogin),h(()=>k.siderCollapsed);const i=b({});function m(M){i.value=M}function u(){i.value={}}const g=h(()=>Object.keys(i.value).length>0),j=h(()=>r.value?["rounded-none","shadow-none"]:["rounded-md","shadow-md","dark:border-neutral-800"]);return(M,f)=>(a(),d("div",Ss,[e("div",{class:_(["h-full overflow-hidden flex flex-col",s(j)])},[e("div",js,[c(Is)]),c(s(Be),{class:"transition flex-1 h-full w-full","has-sider":""},{default:I(()=>[s(r)?L("",!0):(a(),d("div",Ms,[c(le)])),e("div",Bs,[e("div",{class:_(["playground",[s(g)?"mb-4  border-[#0000000a] dark:border-[#ffffff17]":"",s(r)?"":"border-b dark:border-[#ffffff17]"]]),style:je({height:s(g)?s(r)?"100%":"530px":0})},[c(ks,{app:i.value,onClose:u},null,8,["app"])],6),!s(r)||!s(g)?(a(),ne(s(Me),{key:0,class:_([[s(g)?"border-t dark:border-[#ffffff17]":""],"w-full"])},{default:I(()=>[c(Je,{onRunApp:m})]),_:1},8,["class"])):L("",!0)])]),_:1})],2)]))}});export{Ps as default};